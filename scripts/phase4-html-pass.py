#!/usr/bin/env python3
"""Phase 4 bulk HTML: hydration JSON, marquee clones, img dims, schema dates, drop unused layout props."""
from __future__ import annotations

import re
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / "src" / "pages"
CHROME = ROOT / "src" / "components" / "SiteChrome.astro"

HYDRATION_RE = re.compile(
    r"window\.__staticRouterHydrationData = JSON\.parse\([^;]+\)"
)
HYDRATION_NEW = "window.__staticRouterHydrationData = {loaderData:{7:null},actionData:null,errors:null}"


def month_to_iso(raw: str) -> str | None:
    raw = raw.strip()
    if re.fullmatch(r"\d{4}-\d{2}-\d{2}", raw):
        return raw
    for fmt in ("%B %d, %Y", "%b %d, %Y"):
        try:
            return datetime.strptime(raw, fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue
    return None


def extract_dates(text: str) -> tuple[str | None, str | None]:
    pub = None
    mod = None
    m = re.search(r'"datePublished"\s*:\s*"([^"]+)"', text)
    if m:
        pub = month_to_iso(m.group(1))
    m = re.search(r'"dateModified"\s*:\s*"([^"]+)"', text)
    if m:
        mod = month_to_iso(m.group(1))
    return pub, mod


def matching_div_end(html: str, open_lt: int) -> int:
    i = html.find(">", open_lt)
    if i < 0:
        return -1
    depth = 1
    pos = i + 1
    while pos < len(html) and depth:
        nxt_open = html.find("<div", pos)
        nxt_close = html.find("</div>", pos)
        if nxt_close < 0:
            return -1
        if nxt_open != -1 and nxt_open < nxt_close:
            depth += 1
            pos = nxt_open + 4
        else:
            depth -= 1
            pos = nxt_close + 6
            if depth == 0:
                return pos
    return -1


def wrap_marquee_clones(html: str) -> str:
    needle = "animate-marquee"
    out = []
    pos = 0
    while True:
        hit = html.find(needle, pos)
        if hit < 0:
            out.append(html[pos:])
            break
        open_lt = html.rfind("<div", pos, hit)
        if open_lt < 0:
            out.append(html[pos : hit + len(needle)])
            pos = hit + len(needle)
            continue
        end = matching_div_end(html, open_lt)
        if end < 0:
            out.append(html[pos : hit + len(needle)])
            pos = hit + len(needle)
            continue
        block = html[open_lt:end]
        gt = block.find(">")
        inner = block[gt + 1 : -6]
        imgs = list(re.finditer(r"<img\b[^>]*>", inner))
        figures = list(re.finditer(r"<figure\b", inner))
        new_block = block
        if len(imgs) >= 4 and len(imgs) % 2 == 0 and not figures:
            half = len(imgs) // 2
            first = [m.group(0) for m in imgs[:half]]
            second = [m.group(0) for m in imgs[half:]]
            first_src = [re.search(r'src="([^"]+)"', t).group(1) for t in first]
            second_src = [re.search(r'src="([^"]+)"', t).group(1) for t in second]
            if first_src == second_src:
                start_clone = imgs[half].start()
                end_clone = imgs[-1].end()
                clone = inner[start_clone:end_clone]
                if "aria-hidden" not in clone:
                    wrapped = f'<span class="contents" aria-hidden="true">{clone}</span>'
                    inner2 = inner[:start_clone] + wrapped + inner[end_clone:]
                    new_block = block[: gt + 1] + inner2 + "</div>"
        elif len(figures) >= 4 and len(figures) % 2 == 0:
            half = len(figures) // 2
            rebuilt = inner
            offset = 0
            matches = list(re.finditer(r"<figure\b([^>]*)>", inner))
            if len(matches) == len(figures):
                for i, m in enumerate(matches):
                    if i < half:
                        continue
                    attrs = m.group(1)
                    if "aria-hidden" in attrs:
                        continue
                    replacement = f'<figure aria-hidden="true"{attrs}>'
                    s = m.start() + offset
                    e = m.end() + offset
                    rebuilt = rebuilt[:s] + replacement + rebuilt[e:]
                    offset += len(replacement) - (e - s)
                new_block = block[: gt + 1] + rebuilt + "</div>"
        out.append(html[pos:open_lt])
        out.append(new_block)
        pos = end
    return "".join(out)


def add_img_dims(html: str) -> str:
    def repl(m: re.Match[str]) -> str:
        tag = m.group(0)
        if re.search(r"\bwidth=", tag) and re.search(r"\bheight=", tag):
            return tag
        src = re.search(r'src="([^"]+)"', tag)
        src_s = src.group(1) if src else ""
        if "logo-white" in src_s or src_s.endswith("/logo.png") or src_s.endswith("/logo.webp"):
            w, h = 280, 46
        elif "mark" in src_s or "favicon" in src_s:
            w, h = 512, 512
        elif "h-10" in tag or "max-w-[140px]" in tag:
            w, h = 140, 40
        elif "h-9" in tag:
            w, h = 280, 46
        elif "w-full" in tag or "h-auto w-full" in tag:
            w, h = 1200, 675
        else:
            w, h = 800, 450
        extra = ""
        if not re.search(r"\bwidth=", tag):
            extra += f' width="{w}"'
        if not re.search(r"\bheight=", tag):
            extra += f' height="{h}"'
        return tag.replace("<img", "<img" + extra, 1)

    return re.sub(r"<img\b[^>]*>", repl, html)


def patch_page(path: Path) -> None:
    text = path.read_text()
    orig = text
    pub, mod = extract_dates(text)

    text = HYDRATION_RE.sub(HYDRATION_NEW, text)
    text = wrap_marquee_clones(text)
    text = add_img_dims(text)

    text = re.sub(r"\n  keywords=\{keywords \|\| undefined\}", "", text)
    text = re.sub(r"\n  jsonLd=\{jsonLd\}", "", text)

    extra = ""
    if pub:
        extra += f'\n  datePublished="{pub}"'
    if mod:
        extra += f'\n  dateModified="{mod}"'
    if extra and "datePublished=" not in text:
        text = re.sub(
            r'(canonicalPath="[^"]*")',
            r"\1" + extra,
            text,
            count=1,
        )

    if text != orig:
        path.write_text(text)


def main() -> None:
    chrome = CHROME.read_text()
    chrome2 = HYDRATION_RE.sub(HYDRATION_NEW, chrome)
    if chrome2 != chrome:
        CHROME.write_text(chrome2)
        print("patched SiteChrome.astro")

    n = 0
    for p in sorted(PAGES.rglob("*.astro")):
        if p.name == "404.astro":
            continue
        before = p.read_text()
        patch_page(p)
        if p.read_text() != before:
            n += 1
    print(f"patched {n} pages")


if __name__ == "__main__":
    main()
