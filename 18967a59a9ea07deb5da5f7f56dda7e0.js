function setOptOut(isOptOut) {
            window['optimizely'] = window['optimizely'] || [];
            window['optimizely'].push({
                'type': 'optOut',
                'isOptOut': isOptOut
            });
        }

        function loadOptimizely() {
            let optimizelyScript = document.createElement("script");
            optimizelyScript.src = 'https://cdn.optimizely.com/js/137852403.js';
            document.head.appendChild(optimizelyScript);
        }

        // opt out from optimizely cookie tracking by default
        setOptOut(true);

        /*
        This snippet interacts with the pop-up Consent Layer. It defines if a user will be cookie-tracked by
        listed vendors after agreeing to its terms. Find further information on:
        https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/tree/master/TCFv2
        https://documentation.sourcepoint.com/web-implementation/sourcepoint-gdpr-and-tcf-v2-support
        https://help.optimizely.com/Account_Settings/Enable_opt-in_options_for_Optimizely_cookies_and_local_storage
         */
        window.__tcfapi('addEventListener', 2, function(tcData) {
            if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
                window.__tcfapi('getCustomVendorConsents', 2, function(vendorConsents, success) {
                    var optimizelySourcePointId = '5ec515cab8e05c6bd60edc5f';
                    var optimizelyConsent = vendorConsents.grants[optimizelySourcePointId];

                    if (success && typeof(optimizelyConsent) === 'object' && optimizelyConsent.vendorGrant === true) {
                        // enable visitor cookie-tracking
                        setOptOut(false);
                    } else {
                        // do not track site visitor
                        setOptOut(true);
                    }
                });
                loadOptimizely();
                window.__tcfapi('removeEventListener', 2, function(success) {
                }, tcData.listenerId);
            }
        });