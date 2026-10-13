/**
 * Boot before the React SPA (loaded from <head>).
 * - Normalize .html URLs to clean paths for the mirrored React Router
 * - Provide Vite SSG globals from the original HTML
 */
(function () {
  function toClean(pathname) {
    var p = pathname || '/';
    if (p === '/' || p === '') return '/';
    if (p.endsWith('/index.html')) p = p.slice(0, -11) || '/';
    if (p.endsWith('.html')) p = p.slice(0, -5) || '/';
    if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
    return p || '/';
  }

  function patchPathname(proto) {
    if (!proto) return;
    var desc = Object.getOwnPropertyDescriptor(proto, 'pathname');
    if (!desc || !desc.get || desc.get.__dwPatched) return;
    try {
      var origGet = desc.get;
      var patched = function () {
        return toClean(origGet.call(this));
      };
      patched.__dwPatched = 1;
      Object.defineProperty(proto, 'pathname', {
        configurable: true,
        enumerable: true,
        get: patched,
        set: desc.set,
      });
    } catch (e) {}
  }

  patchPathname(window.Location && window.Location.prototype);
  patchPathname(window.URL && window.URL.prototype);

  // Reliable for React Router: land on clean path before the SPA boots.
  // /about.html still works as the entry URL; NavFix keeps link targets as .html.
  try {
    if (/\.html$/i.test(location.pathname)) {
      window.__DW_FILE_PATH__ = location.pathname + location.search + location.hash;
      history.replaceState(
        history.state,
        '',
        toClean(location.pathname) + location.search + location.hash
      );
    }
  } catch (e) {}

  window.__VITE_REACT_SSG_HASH__ = window.__VITE_REACT_SSG_HASH__ || 'zs0xfzfmg5';
  window.__VITE_REACT_SSG_STATIC_LOADER_MANIFEST__ =
    window.__VITE_REACT_SSG_STATIC_LOADER_MANIFEST__ || {};
  window.__VITE_REACT_SSG_STATIC_LOADER_DATA__ =
    window.__VITE_REACT_SSG_STATIC_LOADER_DATA__ || {};

  // Soften WebGL failures so a missing GPU does not tear down the whole page
  window.addEventListener(
    'error',
    function (e) {
      var msg = (e && (e.message || (e.error && e.error.message))) || '';
      if (/WebGL|webgl|THREE\.WebGL/i.test(msg)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return true;
      }
    },
    true
  );
})();
