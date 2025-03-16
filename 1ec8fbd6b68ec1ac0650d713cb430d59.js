(function(){
      var current_location = window.location.href;

      if (current_location.indexOf('/info-pages/supported-browsers/') === -1) {
        var supportFetchApi = 'fetch' in window;
        var supportCSSGrid = window.CSS && CSS.supports('display', 'grid');

        if (!supportFetchApi && !supportCSSGrid) {
          window.location.href = '/info-pages/supported-browsers/';
        }
      }
    })()