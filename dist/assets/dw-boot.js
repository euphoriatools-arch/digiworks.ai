/**
 * Boot before the React SPA (loaded from <head>).
 * - Normalize .html URLs to clean paths for the mirrored React Router
 * - Provide Vite SSG globals from the original HTML
 * - Soften WebGL failures so missing GPU cannot tear down the page
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

  // Original pages set this immediately before the SPA hydrates.
  if (!window.__staticRouterHydrationData) {
    window.__staticRouterHydrationData = {
      loaderData: { '7': null },
      actionData: null,
      errors: null,
    };
  }

  // Soften WebGL: THREE throws during renderer setup when context creation fails.
  // Catch it so React Router's route error boundary does not blank the page.
  try {
    var proto = HTMLCanvasElement && HTMLCanvasElement.prototype;
    if (proto && proto.getContext && !proto.getContext.__dwPatched) {
      var origGetContext = proto.getContext;
      proto.getContext = function (type) {
        try {
          return origGetContext.apply(this, arguments);
        } catch (err) {
          if (type && /webgl/i.test(String(type))) return null;
          throw err;
        }
      };
      proto.getContext.__dwPatched = 1;
    }
  } catch (e) {}

  window.addEventListener(
    'error',
    function (e) {
      var msg = (e && (e.message || (e.error && e.error.message))) || '';
      if (/WebGL|webgl|THREE\.WebGL|Error creating WebGL/i.test(msg)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return true;
      }
    },
    true
  );

  window.addEventListener(
    'unhandledrejection',
    function (e) {
      var msg =
        (e && e.reason && (e.reason.message || String(e.reason))) || '';
      if (/WebGL|webgl|THREE\.WebGL|Error creating WebGL/i.test(msg)) {
        e.preventDefault();
      }
    },
    true
  );
})();
