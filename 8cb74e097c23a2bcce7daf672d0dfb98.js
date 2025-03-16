var appInfoValue = Cookies.get('ci-app');
          var appInfo = null;
          var isApp = false;
          if (appInfoValue) {
            appInfo = JSON.parse(appInfoValue);

            // android || ios
            if (appInfo['pf'] === 'android' || appInfo['pf'] === 'ios') {
              isApp = true;
            }
          }
          window.hsci = window.hsci || {
            consent: {
              region: 'unknown',
              enabled: false,
              taken: true,
            },
            did: null,
            appInfo: appInfo,
          };

          // android
          if (window.CleverTap) {
            isApp = true;

          // ios
          } else if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.clevertap) {
            isApp = true;
          }

          hsci.isApp = isApp;

          //Flutter webview
          window.addEventListener('flutterInAppWebViewPlatformReady', function() {
            // console.log("flutterInAppWebViewPlatformReady done")
            window.isFlutterAppReady = true;
            window.isApp = true;
          });


          hsci.injectScript = function(src, opts) {
            (function() {
              var script = document.createElement("script");
              script.type = "text/javascript";
              script.async = false;
              script.src = src;
              if(opts && typeof opts.id !== "undefined") script.id = opts.id;
              if(opts && typeof opts.async !== "undefined") script.async = opts.async;
              if(opts && typeof opts.defer !== "undefined") script.defer = opts.defer;
              var s = document.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(script, s);
            })();
          };