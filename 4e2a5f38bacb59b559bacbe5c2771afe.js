(function () {
          var adOptions = {"context":{"i18nLocale":"en_US"},"options":{"isObserve":false,"triggerPrebid":true,"containerWidth":"100%","containerClass":["top-ad"],"staticHeight":{"minHeight":"260px"},"adId":"AD_PUSH","adActivate":true,"adUnitPath":"/2/interactive.wsj.com/front","adSize":[[728,90],[970,90],[970,66],[970,250],[1,6]],"adTargeting":{},"env":{},"adRequestOnRemount":true,"adSizeMap":null,"checkIfRendered":false,"collapseAdBeforeFetch":true,"hideAd":false,"isMetaTag":false,"isTemplate":false,"isUtagData":true,"label":false,"labelPosition":"top","moatEnabled":true,"noWrapper":false,"reserveInitialHeight":false,"rootMargin":"0px","shouldUpdate":true,"threshold":1,"triggerAdBidding":true,"observeFromUAC":true},"decorators":["WSJTheme"],"children":[],"content":{}};
          if (typeof window.__ace === 'function') {
            __ace('uac', 'renderAd', [adOptions]);
            return;
          }

          if (!window.uacQueue) window.uacQueue = [];
          if (typeof window.__buildAd === 'function') {
            window.__buildAd(adOptions);
          } else {
            window.uacQueue.push(adOptions);
          }
        })();