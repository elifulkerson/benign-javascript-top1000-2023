window._sp_ = {
          config: {
            accountId: 75,
            baseEndpoint: "https://cmp2.bild.de",
            propertyId: 6804,
            consentLanguage: "de",
            events: {
              onMessageReceiveData(data) {
                window.__cmp_onMessageReceiveData = data;
              },
            },
            targetingParams: { setNonPurLayer: window.navigator.userAgent.includes('[as]') }
          }
        }