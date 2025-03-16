if(document.cookie.indexOf('vignette_cookies=') == -1){
        var getVignette = function() {
               googletag.cmd.push(function() {
                    din = googletag.defineOutOfPageSlot('/31800665/KOMPAS.COM/home/vignette', googletag.enums.OutOfPageFormat.INTERSTITIAL);
                    if (din !== null) {
                        din.setTargeting('Pos', ['vignette']);
                        din.setTargeting('kg_pos', ['vignette']);
                        din.addService(googletag.pubads());
                    }
                    googletag.pubads().enableSingleRequest();
                    googletag.enableServices();
                    googletag.pubads().refresh([din]);
                });
        };  
        getVignette();
        // setcookie 1 jam
        var d = new Date()
        d.setTime(d.getTime() + 3600 * 1000)
        document.cookie = "vignette_cookies=1;expires=" + d.toUTCString() + ";domain=.kompas.com;path=/";document.cookie = "vignette_cookies_session=1"
    }