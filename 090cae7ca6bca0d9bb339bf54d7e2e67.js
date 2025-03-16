if(document.cookie.indexOf('vignette_cookies_tribun=') == -1){

        var getVignette = function() {

               googletag.cmd.push(function() {

                    din = googletag.defineOutOfPageSlot('/31800665/Tribunnews/Home/vignette', googletag.enums.OutOfPageFormat.INTERSTITIAL);

                    if(din !== null) {

                        din.setTargeting('pos',['vignette']);
                                                din.setTargeting('page',['home']);
                        din.setTargeting('kg_pos',['vignette']);
                        din.addService(googletag.pubads());

                    }
                    googletag.pubads().setTargeting('kg_inv_type','desktop');
                    googletag.pubads().setTargeting('kg_group_sites','tribunnews');
                    googletag.pubads().enableSingleRequest();

                    googletag.enableServices();

                    googletag.pubads().refresh([din]);

                });

        };  

        getVignette();

        var d = new Date()

        d.setTime(d.getTime() + 1800 * 1000)

        document.cookie = "vignette_cookies_tribun=1;expires=" + d.toUTCString() + ";domain=.tribunnews.com;path=/";

    }