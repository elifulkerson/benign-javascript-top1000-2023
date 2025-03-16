window.$Nav && $Nav.when('$').run('CBIMarketplaceRedirectOverlayNavyaan', function($) {
              $.ajax({
                  type: 'POST',
                  url: '/cross_border_interstitial/render',
                  data: JSON.stringify({
                      marketplaceId: 'ATVPDKIKX0DER',
                      localCountryCode: 'US',
                         customerId: null,
                      sessionId: '145\x2D5646571\x2D2586515',
                      deviceType: 'DESKTOP',
                      referrer: '',
                      url: '\x2F',
                      pageType: 'Gateway',
                      languageOfPreference: 'en_US',
                      queryParams: {},
                      interstitialRequestType: 'CBI',
                      weblabTreatmentMap: {"CROSS_BORDER_INTERSTITIAL_ZA_659308":"C","CBI_355055":"C","NARX_INTERSTITIAL_NEW_CX_372291":"C","MWEB_CROSS_BORDER_INTERSTITIAL_SE_366766":"T1","MWEB_CROSS_BORDER_INTERSTITIAL_SA_366767":"T1","MWEB_CROSS_BORDER_INTERSTITIAL_PL_366768":"T1","MWEB_CROSS_BORDER_INTERSTITIAL_NL_366769":"T1","MWEB_CROSS_BORDER_INTERSTITIAL_ZA_642039":"C","NARX_INTERSTITIAL_AUI_MIGRATION_446901":"C","TEST_ACS_CONFIGURATION_486322":"C","CROSS_BORDER_INTERSTITIAL_ACS_SHADOW_TESTING_486317":"C","NARX_INTERSTITIAL_SEMBU_MIGRATION_542466":"T2","INTERSTITIAL_PROTOTYPE_IP_ADDRESS_BR_598850":"C","NARX_INTERSTITIAL_SP_ONBOARDING_GATING_771405":"C","NARX_INTERSTITIAL_SP_ONBOARDING_PARITY_CHECK_771409":"C"},
                      slateToken: 'AQGLNoWmSi8LIQGehCE39JumqhXygw7R93HVHIovRT5G0yptJ6XKX/SDqgAAAAgGcmV0YWlsCmFtYXpvbi5jb20ABWVuLVVTVVNEAAABoQ=='
                  }),
                  contentType: "application/json",
                  dataType: "html",
                  success: function(data) {
                      if (data) {
                          $('body').append(data);
                      }
                  }
              });
      });