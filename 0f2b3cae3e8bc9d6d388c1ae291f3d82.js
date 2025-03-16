window.googletag = window.googletag || { cmd: [] };

            googletag.cmd.push(function() {
                googletag.pubads().setTagForChildDirectedTreatment(0);
                googletag.pubads().setTagForUnderAgeOfConsent(0);
            });