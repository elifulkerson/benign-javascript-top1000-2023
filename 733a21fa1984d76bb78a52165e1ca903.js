window.LS_Mustache_Params = {
            ...window.LS_Mustache_Params,
            boomerangLoader: {
        url: 'https://www1.grouponcdn.com/layout/assets/boomerang-sls-075c1bed3b.js'
      }
          };
          (function ({ url }) {
  window.applicationConfig = {};
  if (window.BOOMR && (window.BOOMR.version || window.BOOMR.snippetExecuted)) {
    return;
  }
  if (
    window.parent &&
    window.parent.window.BOOMR &&
    window.parent.window.BOOMR.snippetExecuted
  ) {
    return;
  }

  window.BOOMR = window.BOOMR || {};
  window.BOOMR.snippetStart = new Date().getTime();
  window.BOOMR.snippetExecuted = true;
  window.BOOMR.snippetVersion = 12;
  window.BOOMR.url = url;
  const where =
    document.currentScript || document.getElementsByTagName('script')[0];
  let promoted = false;
  let BOOMR_lstart = null;
  const LOADER_TIMEOUT = 3000;

  function promote() {
    if (promoted) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'boomr-scr-as';
    script.src = window.BOOMR.url;
    script.crossOrigin = 'anonymous';
    script.async = true;
    where.parentNode.appendChild(script);

    promoted = true;
  }

  function iframeLoader(wasFallback) {
    promoted = true;
    let dom,
      doc = document,
      win = window;
    window.BOOMR.snippetMethod = wasFallback ? 'if' : 'i';

    const bootstrap = function (parent, scriptId) {
      const script = doc.createElement('script');
      script.id = scriptId || 'boomr-if-as';
      script.src = window.BOOMR.url;

      BOOMR_lstart = new Date().getTime();

      parent = parent || doc.body;
      parent.appendChild(script);
    };

    const iframe = document.createElement('IFRAME');
    iframe.src = 'about:blank';
    iframe.title = '';
    iframe.role = 'presentation';
    iframe.loading = 'eager';
    const iframeStyle = (iframe.frameElement || iframe).style;
    iframeStyle.width = 0;
    iframeStyle.height = 0;
    iframeStyle.border = 0;
    iframeStyle.display = 'none';
    where.parentNode.appendChild(iframe);

    try {
      win = iframe.contentWindow;
      doc = win.document.open();
    } catch (e) {
      dom = document.domain;
      iframe.src = `javascript:var d=document.open();d.domain='${dom}';void(0);`;
      win = iframe.contentWindow;
      doc = win.document.open();
    }

    if (dom) {
      doc._boomrl = function () {
        this.domain = dom;
        bootstrap();
      };
      doc.write('<bo' + "dy onload='document._boomrl();'>");
    } else {
      win.addEventListener(
        'load',
        () => {
          bootstrap();
        },
        false
      );
    }
    doc.close();
  }
  const link = document.createElement('link');
  if (
    link.relList &&
    typeof link.relList.supports === 'function' &&
    link.relList.supports('preload') &&
    'as' in link
  ) {
    window.BOOMR.snippetMethod = 'p';
    link.href = window.BOOMR.url;
    link.rel = 'preload';
    link.as = 'script';
    link.crossOrigin = 'anonymous';
    link.addEventListener('load', promote);
    link.addEventListener('error', () => {
      iframeLoader(true);
    });

    setTimeout(() => {
      if (!promoted) {
        iframeLoader(true);
      }
    }, LOADER_TIMEOUT);
    // eslint-disable-next-line no-unused-vars
    BOOMR_lstart = new Date().getTime();
    where.parentNode.appendChild(link);
  } else {
    iframeLoader(false);
  }

  function boomerangSaveLoadTime(e) {
    window.BOOMR_onload = (e && e.timeStamp) || new Date().getTime();
  }

  window.addEventListener('load', boomerangSaveLoadTime, false);
})(window.LS_Mustache_Params['boomerangLoader']);