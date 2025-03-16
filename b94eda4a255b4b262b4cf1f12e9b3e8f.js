(function(w) {
        if (w.YAHOO && w.YAHOO.i13n && w.YAHOO.i13n.Rapid) {
            YAHOO.i13n.SPACEID = '1197802876';
            var enableApvBeacon = true;
            var clientOnly = undefined;
            var rapidConfig = {"click_timeout":200,"keys":{"_rid":"2kma2vtiipgsr","abk":"","colo":"gq1","mrkt":"us","p_sec":"default","partner":"none","site":"engadget","uh_vw":0,"navtype":"server","ver":"carbon","adblock":"0","pt":"home"},"perf_navigationtime":2,"test_id":["eng-nl-hp-dis","privacy-footer"],"tracked_mods_viewability":{"module-header":"hd","module-drawer-menu":"drawer-menu","module-drawer-menu-overlay":"drawer-menu-overlay","module-nav":"nav","module-dynamic-lede":"dynamic-lede","module-hp-toppicks":"toppicks","module-latest":"latest","module-footer":"footer"},"viewability":true};
            rapidConfig.spaceid = YAHOO.i13n.SPACEID;

            if(typeof clientOnly !== 'undefined') {
                rapidConfig.client_only = clientOnly;
            }
            // beacon apv for mobile web
            if (enableApvBeacon) {
                rapidConfig.apv_callback = function(apvObj) {
                    try {
                        if ('1197802876' === YAHOO.i13n.SPACEID) {
                            var img = new Image();
                            img.src = '/_td/beacon?beaconType=apv&sp=' + YAHOO.i13n.SPACEID
                                + '&device=desktop&intl=US&pixel_pos='
                                + apvObj.pixel_pos + '&scroll_dir='
                                + apvObj.scroll_dir;
                        }
                    } catch (e) {}
                };
            }

            // ensure webworker is loaded from yaho.com cdn path
            YAHOO.i13n.WEBWORKER_FILE = '/__rapid-worker-1.2.js';

            // setup rapid instance
            YAHOO.i13n.rapidInstance = w.rapidInstance = w.YAHOO.i13n.Rapid(rapidConfig);

            // expose rapid config for homepage-viewer client
            if (!w.rapidPageConfig) {
                w.rapidPageConfig = {
                    rapidConfig: rapidConfig
                }
            }
        }
    }(window));