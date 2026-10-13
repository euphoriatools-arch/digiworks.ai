#!/usr/bin/env python3
"""Serve the HTTrack mirror with fixed local navigation.

Problems this solves:
  - Live site uses clean URLs (/case-studies/drive-guard); HTTrack saved *.html
  - Relative HTTrack links break when pages are served at clean paths
  - React SPA client-side routing fails locally (missing SSG loader manifests)

Approach:
  1. Map clean URLs ↔ .html files
  2. Rewrite every local page/asset href|src to root-absolute paths
  3. Force full page loads (patch history + capture clicks)
  4. Recover mis-nested paths like /blog/case-studies → /case-studies
"""

from __future__ import annotations

import argparse
import mimetypes
import os
import re
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent

# Known top-level / nested route files: clean path → html path relative to ROOT
PAGE_MAP: dict[str, Path] = {}
# Basename of html file → preferred clean path (for recovering /blog/about.html etc.)
BY_BASENAME: dict[str, str] = {}


def _build_maps() -> None:
    PAGE_MAP.clear()
    BY_BASENAME.clear()
    for html in ROOT.rglob("*.html"):
        if "hts-" in html.as_posix() or html.name.startswith("."):
            continue
        # Skip accidental downloads dumped into content folders
        if html.parent.name in {"case-studies", "blog", "services"} and html.suffix == ".html":
            # still include real pages; filter non-page junk below
            pass
        rel = html.relative_to(ROOT)
        # Ignore signals/config placeholders that aren't site pages
        if rel.parts and rel.parts[0] in {"signals", "cdn-cgi"}:
            continue
        # Ignore JS/CSS mistakenly saved as sibling "pages"
        if html.name.endswith(".js") or html.name.endswith(".css"):
            continue

        if rel.as_posix() == "index.html":
            clean = "/"
        else:
            clean = "/" + rel.with_suffix("").as_posix()
        PAGE_MAP[clean] = rel
        # Prefer shorter / shallower path when basename collides
        base = html.name
        prev = BY_BASENAME.get(base)
        if prev is None or clean.count("/") < prev.count("/"):
            BY_BASENAME[base] = clean


_build_maps()

# Asset / static prefixes that must stay root-absolute
ASSET_PREFIXES = (
    "assets/",
    "photos/",
    "case/",
    "cad/",
    "team/",
    "cdn-cgi/",
    "favicon",
    "mark",
    "logo",
    "og-image",
    "world-dots",
    "manifest",
    "sitemap",
)

NAV_FIX = b"""<script data-httrack-nav-fix="1">
(function () {
  // Skip missing vite-react-ssg loader manifests (not downloaded by HTTrack).
  window.__VITE_REACT_SSG_STATIC_LOADER_MANIFEST__ = window.__VITE_REACT_SSG_STATIC_LOADER_MANIFEST__ || {};
  window.__VITE_REACT_SSG_STATIC_LOADER_DATA__ = window.__VITE_REACT_SSG_STATIC_LOADER_DATA__ || {};
  window.__httrackErrors = [];
  window.addEventListener('error', function (e) {
    window.__httrackErrors.push('err:' + (e.message || '') + ' @' + (e.filename || '') + ':' + (e.lineno || ''));
  });
  window.addEventListener('unhandledrejection', function (e) {
    window.__httrackErrors.push('rej:' + String(e.reason && (e.reason.stack || e.reason.message || e.reason)));
  });

  // Hide React error-boundary overlays that block clicks on mirrored pages.
  var style = document.createElement('style');
  style.textContent = '[data-httrack-hide-errors]{display:none!important;pointer-events:none!important}';
  document.documentElement.appendChild(style);
  function scrubErrors() {
    document.querySelectorAll('h1').forEach(function (h) {
      if (!/Something didn.?t load right/i.test(h.textContent || '')) return;
      var root = h.closest('div');
      while (root && root.parentElement && root.parentElement !== document.body && root.parentElement !== document.getElementById('root')) {
        root = root.parentElement;
      }
      if (root) root.setAttribute('data-httrack-hide-errors', '1');
    });
  }
  scrubErrors();
  setInterval(scrubErrors, 300);

  function cleanPath(pathname) {
    var p = pathname || '/';
    if (p.endsWith('.html')) p = p.slice(0, -5) || '/';
    if (p.endsWith('/index')) p = p.slice(0, -6) || '/';
    return p;
  }
  function samePage(url) {
    try {
      var u = new URL(url, location.origin);
      return cleanPath(u.pathname) === cleanPath(location.pathname)
        && u.search === location.search
        && u.hash === location.hash;
    } catch (e) { return false; }
  }
  function hardNav(url) {
    try {
      var abs;
      if (/^https?:\\/\\//i.test(url) || url.charAt(0) === '/' || url.charAt(0) === '#') {
        abs = new URL(url, location.href);
      } else {
        var stripped = url.replace(/^(\\.\\/)+/, '');
        while (stripped.indexOf('../') === 0) stripped = stripped.slice(3);
        abs = new URL('/' + stripped, location.origin);
      }
      if (abs.origin !== location.origin) return false;
      var target = cleanPath(abs.pathname) + abs.search + abs.hash;
      if (samePage(target)) return true;
      location.assign(target);
      return true;
    } catch (e) { return false; }
  }

  function install() {
    if (history.pushState && history.pushState.__httrackFix) return;
    var push = history.pushState.bind(history);
    var replace = history.replaceState.bind(history);
    function wrapPush(state, title, url) {
      if (url != null && hardNav(String(url))) return;
      return push(state, title, url);
    }
    function wrapReplace(state, title, url) {
      if (url != null && hardNav(String(url))) return;
      return replace(state, title, url);
    }
    wrapPush.__httrackFix = 1;
    wrapReplace.__httrackFix = 1;
    history.pushState = wrapPush;
    history.replaceState = wrapReplace;
  }
  install();
  setInterval(install, 150);

  document.addEventListener('click', function (e) {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    var a = e.target && e.target.closest && e.target.closest('a[href]');
    if (!a) return;
    var raw = a.getAttribute('href');
    if (!raw || raw.charAt(0) === '#' || raw.indexOf('mailto:') === 0 || raw.indexOf('tel:') === 0 || raw.indexOf('javascript:') === 0) return;
    if (hardNav(raw)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }, true);
})();
</script>"""

# Match href="..." and src="..." (and rare srcset first url)
_ATTR_RE = re.compile(
    br"""(?P<attr>\b(?:href|src)\s*=\s*)(?P<q>["'])(?P<val>[^"']+)(?P=q)""",
    re.IGNORECASE,
)


def _to_clean_page_path(url_path: str) -> str | None:
    """If url_path refers to a known mirrored page, return its clean path."""
    path = url_path.split("?", 1)[0].split("#", 1)[0]
    if not path or path == "/":
        return "/"
    if path.endswith(".html"):
        path = path[: -len(".html")] or "/"
    if not path.startswith("/"):
        path = "/" + path
    # Exact
    if path in PAGE_MAP:
        return path
    # Basename recovery: /blog/about → /about
    base = path.rsplit("/", 1)[-1] + ".html"
    if base in BY_BASENAME:
        return BY_BASENAME[base]
    # Strip leading junk segments until match
    parts = [p for p in path.split("/") if p]
    for i in range(len(parts)):
        cand = "/" + "/".join(parts[i:])
        if cand in PAGE_MAP:
            return cand
        # also try with .html basename map
        b = parts[i] + ".html" if i == len(parts) - 1 else None
        if b and b in BY_BASENAME:
            return BY_BASENAME[b]
    return None


def _rewrite_local_url(val: str, page_dir: str) -> str:
    """Rewrite a single href/src value to a root-absolute local URL when possible."""
    raw = val.strip()
    if not raw or raw.startswith(("#", "mailto:", "tel:", "javascript:", "data:", "blob:")):
        return val
    if re.match(r"^https?://", raw, re.I):
        # Keep external; only rewrite digiworksai.com → local absolute when we have the file
        m = re.match(r"^https?://(?:www\.)?digiworks\.ai(/[^?#]*)?", raw, re.I)
        if not m:
            return val
        path = m.group(1) or "/"
        clean = _to_clean_page_path(path)
        if clean is not None:
            return clean
        local = ROOT / path.lstrip("/")
        if path not in ("", "/") and local.is_file():
            return path
        return val

    # Protocol-relative
    if raw.startswith("//"):
        return val

    path_part, sep, rest = raw.partition("?")
    frag_sep = ""
    frag = ""
    if "#" in rest:
        # already has query
        pass
    if "#" in path_part:
        path_part, frag_sep, frag = path_part.partition("#")
        rest = ""
        sep = ""
    elif "#" in raw and "?" not in raw:
        path_part, frag_sep, frag = raw.partition("#")
        sep, rest = "", ""

    # Resolve relative against the HTML file's directory
    if path_part.startswith("/"):
        abs_path = path_part
    else:
        # normalize ./ and ../ against page_dir
        joined = (Path(page_dir) / path_part).as_posix()
        # Path doesn't collapse leading .. the way we need for root
        parts: list[str] = []
        for part in joined.split("/"):
            if part in ("", "."):
                continue
            if part == "..":
                if parts:
                    parts.pop()
                continue
            parts.append(part)
        abs_path = "/" + "/".join(parts)

    # Page?
    clean = _to_clean_page_path(abs_path)
    if clean is not None:
        suffix = ""
        if sep:
            suffix += "?" + rest.split("#")[0]
            if "#" in rest:
                suffix += "#" + rest.split("#", 1)[1]
        elif frag_sep:
            suffix += "#" + frag
        return clean + suffix

    # Static asset → keep absolute path (drop .html mistaken assets)
    lower = abs_path.lower()
    if any(abs_path.lstrip("/").startswith(p) or lower.startswith("/" + p) for p in ASSET_PREFIXES):
        return abs_path + (("?" + rest) if sep else "") + ((frag_sep + frag) if frag_sep else "")
    # Absolute path that exists as a file
    candidate = ROOT / abs_path.lstrip("/")
    if candidate.is_file():
        return abs_path + (("?" + rest) if sep else "")

    return val


# Strip React app bootstrap on pages where hydration crashes in the mirror
# (case-study detail cinematics). SSR HTML + rewritten links still work.
_APP_MODULE_RE = re.compile(
    br"""<script[^>]*type=["']module["'][^>]*src=["'][^"']*assets/app-[^"']+\.js["'][^>]*>\s*</script>"""
    br"""|"""
    br"""<script[^>]*src=["'][^"']*assets/app-[^"']+\.js["'][^>]*type=["']module["'][^>]*>\s*</script>""",
    re.IGNORECASE,
)


def should_disable_hydration(file_path: Path) -> bool:
    rel = file_path.relative_to(ROOT).as_posix()
    # Detail pages under case-studies/<slug>.html — not the listing
    if rel.startswith("case-studies/") and rel.endswith(".html"):
        return True
    return False


def rewrite_html(data: bytes, file_path: Path) -> bytes:
    rel = file_path.relative_to(ROOT)
    page_dir = "" if rel.parent == Path(".") else rel.parent.as_posix()

    def repl(match: re.Match[bytes]) -> bytes:
        attr = match.group("attr")
        q = match.group("q")
        val = match.group("val").decode("utf-8", errors="ignore")
        new_val = _rewrite_local_url(val, page_dir)
        if new_val == val:
            return match.group(0)
        return attr + q + new_val.encode("utf-8") + q

    data = _ATTR_RE.sub(repl, data)
    if should_disable_hydration(file_path):
        data = _APP_MODULE_RE.sub(b"", data)
    return data


class MirrorHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, directory: str | None = None, **kwargs):
        super().__init__(*args, directory=directory or str(ROOT), **kwargs)

    def do_GET(self):  # noqa: N802
        parsed = urlsplit(self.path)
        path = unquote(parsed.path)

        # Stub missing vite-react-ssg loader manifests
        name = path.rsplit("/", 1)[-1]
        if name.startswith("static-loader-data") and name.endswith(".json"):
            body = b"{}"
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
            return

        # Redirect *.html → clean URL
        if path.endswith(".html"):
            clean = _to_clean_page_path(path) or (path[: -len(".html")] or "/")
            target = clean + (("?" + parsed.query) if parsed.query else "")
            self.send_response(302)
            self.send_header("Location", target)
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            return

        file_path = self._resolve(path)
        if file_path is None:
            self.send_error(404, "File not found")
            return

        if file_path.suffix.lower() in {".html", ".htm"}:
            self._send_html(file_path)
            return

        rel = "/" + file_path.relative_to(ROOT).as_posix()
        if parsed.query:
            rel = rel + "?" + parsed.query
        self.path = rel
        return SimpleHTTPRequestHandler.do_GET(self)

    def _resolve(self, url_path: str) -> Path | None:
        raw = url_path.split("?", 1)[0]
        if raw in ("", "/"):
            return (ROOT / "index.html").resolve()

        # Prefer known page map (handles clean URLs)
        clean = _to_clean_page_path(raw)
        if clean is not None and clean in PAGE_MAP:
            return (ROOT / PAGE_MAP[clean]).resolve()

        rel = raw.lstrip("/")
        candidates = [
            ROOT / rel,
            ROOT / f"{rel}.html",
            ROOT / rel / "index.html",
        ]
        for candidate in candidates:
            try:
                resolved = candidate.resolve()
            except OSError:
                continue
            if not str(resolved).startswith(str(ROOT)):
                continue
            if resolved.is_file():
                # Skip HTTrack "Not found" stubs
                try:
                    if resolved.stat().st_size < 32 and resolved.read_text(errors="ignore").strip().lower() == "not found":
                        continue
                except OSError:
                    pass
                # Prefer real assets over misplaced copies
                if resolved.suffix.lower() in {".js", ".css"} and "assets" not in resolved.parts:
                    asset_copy = ROOT / "assets" / resolved.name
                    if asset_copy.is_file():
                        return asset_copy.resolve()
                return resolved

        # Recover nested wrong paths: /about/case-studies → case-studies
        recovered = _to_clean_page_path(raw)
        if recovered and recovered in PAGE_MAP:
            return (ROOT / PAGE_MAP[recovered]).resolve()

        return None

    def _send_html(self, file_path: Path) -> None:
        data = file_path.read_bytes()
        data = rewrite_html(data, file_path)

        lower = data.lower()
        head = lower.find(b"<head")
        if head != -1:
            gt = data.find(b">", head)
            if gt != -1:
                data = data[: gt + 1] + NAV_FIX + data[gt + 1 :]
            else:
                data = NAV_FIX + data
        else:
            data = NAV_FIX + data

        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, fmt: str, *args) -> None:
        import sys

        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))


def main() -> None:
    parser = argparse.ArgumentParser(description="Serve digiworksai.com HTTrack mirror")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8080)
    args = parser.parse_args()

    os.chdir(ROOT)
    mimetypes.add_type("application/javascript", ".js")
    mimetypes.add_type("text/css", ".css")
    mimetypes.add_type("image/svg+xml", ".svg")

    print(f"Indexed {len(PAGE_MAP)} pages")
    handler = partial(MirrorHandler, directory=str(ROOT))
    httpd = ThreadingHTTPServer((args.host, args.port), handler)
    print(f"Serving {ROOT}")
    print(f"Open http://{args.host}:{args.port}/")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")


if __name__ == "__main__":
    main()
