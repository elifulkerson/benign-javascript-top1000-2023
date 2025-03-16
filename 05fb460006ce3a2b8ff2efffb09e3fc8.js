(function () {
          var adOptions = {"context":{"i18nLocale":"en_US"},"options":{"containerWidth":"207px","wrapperStyles":{"minHeight":"30px","minWidth":"207px"},"urlParams":{"mod":"hp_minor"},"isObserve":true,"triggerPrebid":true,"adId":"AD_NATIVEBUCKET","adActivate":true,"adUnitPath":"/2/interactive.wsj.com/front","adSize":["fluid"],"adTargeting":{},"env":{},"adRequestOnRemount":true,"adSizeMap":null,"checkIfRendered":false,"collapseAdBeforeFetch":true,"hideAd":false,"isMetaTag":false,"isTemplate":false,"isUtagData":true,"label":false,"labelPosition":"top","moatEnabled":true,"noWrapper":false,"reserveInitialHeight":false,"rootMargin":"0px","shouldUpdate":true,"staticHeight":{},"threshold":1,"triggerAdBidding":true,"observeFromUAC":true},"decorators":["WSJTheme"],"children":[],"content":{}};
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