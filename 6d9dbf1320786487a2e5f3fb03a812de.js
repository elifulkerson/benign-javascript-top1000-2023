window.__mwads.gptEnabled = true;
        window.__mwads.prebidEnabled = true;
        window.__mwads.moatEnabled = true;
        window.__mwads.mpuId = 'ad-display-ad'; 
            window.__mwads.curatedMap = { A: 1088448, B: 1088449, C: 1091804, D: 1091805 };

        (function() {
            googletag.cmd.push(function() {
                googletag.pubads().disableInitialLoad();
                        googletag.pubads().setTargeting('pagetype', ['homepage']);
                

                    googletag.pubads().setTargeting('usertype', ['nonsubscriber']);

                if (typeof enhance !== 'undefined' && typeof enhance.cookie === 'function') {
                    var etear = enhance.cookie('etsFlag');
                    if (etear) {
                        googletag.pubads().setTargeting('msrc', decodeURIComponent(etear));
                    }
                }
            });
        })();