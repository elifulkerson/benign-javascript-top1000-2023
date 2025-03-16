var Baxter = Baxter || {};
  Baxter.queue = Baxter.queue || [];

  (function () {
    const oneTrustCookie = {
      init: function (callback) {
        function notify() {
          oneTrust = window.OneTrust;
          callback();
        }
        if (window) {
          if (window.OneTrust) {
            notify();
          } else {
            window.OptanonWrapper = notify;
          }
        }
      },
      onConsentTrackingEvent: function () {
        if (typeof NinjaTracker !== "undefined") {
          NinjaTracker.push(
            NinjaTracker.mergeValidOptionalParams(
              NinjaTracker.getDataFrom(trackingData.pageView),
              {
                trackEvent: ["cookies_consent"],
                action_type: "cookies_consent",
              }
            )
          );
        }
      },
      setBaxterConsent: function () {
          Baxter.queue.push(() => {
              if (Baxter.consent) {
                  Baxter.consent(true);
              } else if (
                  Baxter.features &&
                  Baxter.features.didomi &&
                  Baxter.features.didomi.setUserConsentInformationOneTrust) {
                  Baxter.features.didomi.setUserConsentInformationOneTrust();
              }
          });
      },
    };

    function getCookie(cname) {
      var cookieValue = CookiesManager.getCookie(cname);
      if (!cookieValue) {
          return ""
      }

      return cookieValue;
    }

    oneTrustCookie.init(function () {
      // if oneTrust cookie present, call baxter consent fn
      if (getCookie("eupubconsent-v2")) {
        oneTrustCookie.setBaxterConsent();
      }
      // register OnConsentChanged event
      window.OneTrust.OnConsentChanged(function () {
        oneTrustCookie.setBaxterConsent();
        oneTrustCookie.onConsentTrackingEvent();
      });
    });
  })();