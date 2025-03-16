(function () {
          var adOptions = {"context":{"i18nLocale":"en_US"},"options":{"wrapperStyles":{"minHeight":"30px","minWidth":"300px"},"adSize":[[940,300]],"isObserve":true,"triggerPrebid":true,"containerWidth":"100%","env":{},"adActivate":true,"adId":false,"adRequestOnRemount":true,"adSizeMap":null,"adTargeting":{},"adUnitPath":false,"checkIfRendered":false,"collapseAdBeforeFetch":true,"hideAd":false,"isMetaTag":false,"isTemplate":false,"isUtagData":true,"label":false,"labelPosition":"top","moatEnabled":true,"noWrapper":false,"reserveInitialHeight":false,"rootMargin":"0px","shouldUpdate":true,"staticHeight":{},"threshold":1,"triggerAdBidding":true,"observeFromUAC":true},"decorators":["WSJTheme"],"children":[],"content":{}};
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