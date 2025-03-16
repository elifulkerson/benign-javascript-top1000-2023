function release_bait() {
            
            
            if(typeof bait_b3j4hu231 === 'undefined') {

                var cur_url = new URL(window.location.href);
                var hostname = cur_url.hostname;

                switch (hostname) {
                    case 'www0.exoclick.com':
                    var adb_landingpage = 'https://www0.exoclick-adb.com?p=ws';
                    break;
                
                    default:
                        var adb_landingpage = 'https://www.exoclick-adb.com?p=ws';
                        break;
                }

                window.location.replace(adb_landingpage);
            }

        }
        release_bait();