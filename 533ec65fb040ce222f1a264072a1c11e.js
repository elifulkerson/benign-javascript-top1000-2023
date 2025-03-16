(function(){
                    /* set correct OptimizelyURL for prod or sandbox */
                    var optimizelyURL = "https://cdn.optimizely.com/public/4621041136/s/bbccom_sandbox.js";
                    if(window.location.hostname === 'www.bbc.com') {
                        optimizelyURL = "https://cdn.optimizely.com/public/4621041136/s/bbccom_prod.js";
                    }

                    /* Set cookie to 1 year */
                    window['optimizely'] = window['optimizely'] || [];
                    window['optimizely'].push({
                        "type": "cookieExpiration",
                        "cookieExpirationDays": 365
                    });

                    var script = document.createElement('script');
                    script.async = false;
                    script.src = optimizelyURL;
                    document.head.appendChild(script);
                })();