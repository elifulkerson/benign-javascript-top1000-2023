window._sp_queue = [];
            window._sp_ = {
              config: {
                accountId: 82,
                propertyId: 15880,
                baseEndpoint: "https://consent.ladbible.com",
                targetingParams: {
                  type: "GDPR"
                },
                gdpr: {
                  groupPmId: 424355
                },
                ccpa: {
                  includeGppApi: true
                },
                isSPA: true,
                events: {
                  onMessageChoiceSelect: function() {
                      console.log('[event] onMessageChoiceSelect', arguments);
                  },
                  onMessageReady: function() {
                      console.log('[event] onMessageReady', arguments);
                  },
                  onMessageChoiceError: function() {
                      console.log('[event] onMessageChoiceError', arguments);
                  },
                  onPrivacyManagerAction: function() {
                      console.log('[event] onPrivacyManagerAction', arguments);
                  },
                  onPMCancel: function() {
                      console.log('[event] onPMCancel', arguments);
                  },
                  onMessageReceiveData: function() {
                      console.log('[event] onMessageReceiveData', arguments);
                  },
                  onSPPMObjectReady: function() {
                      console.log('[event] onSPPMObjectReady', arguments);
                  },
                  onConsentReady: function (message_type, uuid, string, info) {
                    if((message_type == "ccpa") && (info.applies)){
                      /* code to insert the CCPA footer link */
                      document.getElementById("pmLink").style.visibility="visible";
                      document.getElementById("pmLink").innerHTML= "Do Not Sell";
                      document.getElementById("pmLink").onclick= function(){
                        window._sp_.ccpa.loadPrivacyManagerModal('770652');
                      }
                    }
                    if((message_type == "gdpr") && (info.applies)){
                      /* code to insert the GDPR footer link */
                      document.getElementById("pmLink").style.visibility="visible";
                      document.getElementById("pmLink").innerHTML= "Privacy Preferences";
                      document.getElementById("pmLink").onclick= function(){
                        window._sp_.gdpr.loadPrivacyManagerModal('424355');
                      }
                    }
                  },
                  onError: function() {
                      console.log('[event] onError', arguments);
                  }
                }
              }
            }