window.googletag = window.googletag || { cmd: [] };
        googletag.cmd.push(function () {

            if (screen.width < 960) {
                googletag.defineSlot('/1769731/ABNAJ_300X250_TOPBANNER_MOBILE_NEW', [300, 250], 'TOPBANNER_MOBILE_NEW').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_300X250_HP_MIDBANNER_MOBILE_NEW', [300, 250], 'HP_MIDBANNER_MOBILE_NEW').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_300X100_MOBILE_NEW', [300, 100], 'MOBILE_NEW').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_MOB_CTG_320X50_STICKYAD', [320, 50], 'HP_STICKYAD_MOBILE_NEW').addService(googletag.pubads());
            }
            else {
                googletag.defineSlot('/1769731/ABNAJ_728X90_MIDBANNER_DESKTOP_NEW', [728, 90], 'DESK_TOP').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_728X90_TOP_DESKTOP_NEW', [728, 90], 'TOP_DESKTOP_NEW').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_300X250_RHSTOP_DESKTOP_NEW', [300, 250], 'RHSTOP_DESKTOP_NEW').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_728X90_MIDBANNER_DESKTOP_NEW', [728, 90], 'MIDBANNER_DESKTOP_NEW').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_HP_300X250_1_NEW', [300, 250], 'DESKTOP_HP_300X250_1_NEW').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_160X600_RHS_DESKTOP_NEW', [160, 600], 'RHS_DESKTOP_NEW').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_160X600_LHS_DESKTOP_NEW', [160, 600], 'LHS_DESKTOP_NEW').addService(googletag.pubads());
                googletag.defineSlot('/1769731/ABNAJ_DESKSTOP_STICKY_300X100_NEW', [[728, 90], [300, 100]], 'HP_STICKYAD_DESKTOP_NEW').addService(googletag.pubads());

            }
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
        });