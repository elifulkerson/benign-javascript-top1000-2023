(function () {
      if (window.PerformanceObserver) {
        window._perfMarkAllowedList = [
        'cx-candybar-onload',
        'first-contentful-paint',
        'cx-candybar-onload',
        'gcRendererStart',
        'gpt-tagLoaded',
        'gpt-slotRequested',
        'gpt-slotRenderEnded',
        'gpt-slotOnload',
        'optimizely:blockBegin',
        'playerLoadStart',
        'playerReady',
        'playerDisplayed',
        'prebidAuctionInit',
        'prebidAuctionEnd',
        'reactAppRenderStart',
        'reactAppRenderEnd',
        'apstag-loaded',
        'apstag-firstBid',
        'moat-loaded',
        'moat-ace-firstAdItem',
        'moat-uac-firstAdItem',
        'djcmp-loaded',
        'djcmp-vendor-loaded',
        'djcmp-tcdata-loaded'
      ];
        var observer = new PerformanceObserver(function (list) {
          var entries = list.getEntries();
          var _loop = function _loop(i) {
            var entry = entries[i];
            var metricName = entry.name;
            if ( window._perfMarkAllowedList.indexOf(entry.name) !== -1 ) {
              var time = Math.round(entry.startTime + entry.duration);
              if (metricName === 'gpt-slotOnload' ) {
                if (typeof newrelic !== 'undefined') {
                  newrelic.setCustomAttribute(metricName, time);
                }
                setTimeout(function(){observer.disconnect()}, 8000)
              } else {
                if (typeof newrelic !== 'undefined') {
                  newrelic.setCustomAttribute(metricName, time);
                }
              }
            }
          };
          for (var i = 0; i < entries.length; i++) {
            _loop(i);
          }
        });
        try {
          observer.observe({
            type: ['mark'], buffered: true
          });
        }
        catch(e) {
          console.log('observer not supported')
        }
      }
    })();