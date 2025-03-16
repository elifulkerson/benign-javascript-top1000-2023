(function (w) {
        w.$$requestBundle(function () {
          w.$$loadScript('https://www.googletagmanager.com/gtag/js?id=G-DEQWE69FLT', true);
        });
        w.dataLayer = w.dataLayer || [];
        function gtag(){
          w.dataLayer.push(arguments);
        }
        gtag('js', new Date());
        const d = w.$$functions && window.$$functions.fcaa3d1(w.$$preloadedState, 'analytics');
        gtag('config', "G-DEQWE69FLT", d ? {
          ad_storage: 'denied',
          analytics_storage: 'denied',
          store_gac: false,
          send_page_view: false,
        } : {
          send_page_view: false,
        });
        gtag('event', 'page_view', {
          page_location: location.href,
          page_title: document.title
        });
      })(window);