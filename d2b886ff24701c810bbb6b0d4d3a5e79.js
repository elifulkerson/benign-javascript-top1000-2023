function loadAdmiral() {
            !(function(o,n,t){t=o.createElement(n),o=o.getElementsByTagName(n)[0],t.async=1,t.src="https://plotrabbit.com/v2ixgnfu00l3wFPxCNP-zEEsGBfv-cXB2aLDGVpASD0TxxZjBmmMvKwY",o.parentNode.insertBefore(t,o)})(document,"script"),(function(o,n){o[n]=o[n]||function(){(o[n].q=o[n].q||[]).push(arguments)}})(window,"admiral");!(function(c,e,o,t,n){function r(o,t){(function n(){try{return 0<(localStorage.getItem("v4ac1eiZr0")||"").split(",")[4]}catch(o){}return!1})()&&(t=c[e].pubads())&&t.setTargeting("ae","t")}(n=c[e]=c[e]||{}).cmd=n.cmd||[],typeof n.pubads===o?r():typeof n.cmd.unshift===o?n.cmd.unshift(r):n.cmd.push(r)})(window,"googletag","function");
        }
        cbsoptanon.onScriptsReady(function(cmp) {
            cmp.ot.targetingAllowed(function(allowed) {
                if (allowed) {
                    loadAdmiral();
                }
            });
            cmp.ot.awaitInitialConsent(function(consent_model) {
                cmp.ot.addOnConsentChangedHandler(function() {
                    cmp.ot.targetingAllowed(function(allowed) {
                        if (allowed) {
                            loadAdmiral();
                        }
                    });
                });
            });
        });