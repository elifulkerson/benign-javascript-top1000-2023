hsci.consent.region = Cookies.get('region');
          hsci.consent.country = Cookies.get('country');

          // Faiyaz - emea region is added for exisiting users with the same region cookie.
          hsci.consent.enabled = hsci.isApp ? false : hsci.consent.region === 'gdpr' || hsci.consent.region === 'emea' || hsci.consent.region === 'ccpa';

          // Faiyaz - emea region is added for exisiting users with the same region cookie.
          if(hsci.consent.enabled) {

            //disable integration scripts
            window.YETT_BLACKLIST = [
              /www\.googletagmanager\.com/,
              /d2r1yp2w7bby2u\.cloudfront\.net/,
              /omniture-.*?\.js/,
              /at-.*?\.js/,
              /prebid.*?\.js/,
              /sb\.scorecardresearch\.com/,
              /chartbeat\.js/,
              /cdn\.taboola\.com/,
              /jsc\.mgid\.com/
            ];

            // This is required for ccpa region also
            document.addEventListener('tms.ready', function() {
              // ensighten script is loaded and consent is taken so unblock
              window.yett.unblock();
            });

            if (hsci.consent.region === 'gdpr' || hsci.consent.region === 'emea' || hsci.consent.region === 'ccpa') {
              var _alertBox1 = Cookies.get('OptanonConsentAlertBoxClosed');
              var _alertBox2 = Cookies.get('OptanonAlertBoxClosed');
              hsci.consent.taken = _alertBox1 !== undefined || _alertBox2 !== undefined;

              window.addEventListener('consent.onetrust', function(e) {
                // Check if __tcfapi is ready to detect event on close
                // @ts-ignore
                if (window.__tcfapi) {
                  __tcfapi('getTCData', 2, function(tcData, success) {
                    if (success) {
                      if (tcData.eventStatus === 'useractioncomplete') {
                        window.location.reload();
                      }
                    }
                  });
                }
              });
            }

          } else {
            // for non gdpr regions do not load following scipt upfront load after window load
            window.YETT_BLACKLIST = [
              /d2r1yp2w7bby2u\.cloudfront\.net/,
              /omniture-.*?\.js/,
              /at-.*?\.js/,
              /chartbeat\.js/,
              /cdn\.taboola\.com/,
              /jsc\.mgid\.com/
            ];

            window.addEventListener('DOMContentLoaded', function(event) {
              window.yett.unblock();
            });
          }