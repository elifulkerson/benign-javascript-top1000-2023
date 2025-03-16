(function () {
            var benjiConfig = {"i13n":{"_rid":"6e430g5iip6dp","abk":"0","colo":"gq1","mrkt":"us","p_sec":"default","partner":"none","site":"fp","uh_vw":0,"pt":"home","navtype":"server","ver":"megastrm","version":"US","authed":"0","ynet":"0","ssl":"1","spdy":"0","ytee":"0","mode":"normal","device":"desktop","bot":"1","browser":"unknown","app":"unknown","adblock":"0","bucket":["900","seamless"],"ecma":"default","environment":"prod","lang":"en-US","dir":"ltr","intl":"us","network":"cable","os":"linux","region":"US","time":1697421753226,"tz":"America/Phoenix","tpConsent":true,"usercountry":"US","apptype":"default","designtype":"default","pagetype":"default","subdomain":"mtls-gterm","userSegment":"default","feature":["enableGAMAds","adPlaceholder","enableAdlite","enableAdLiteUpSellFeedback","enableEVPlayer","enableFinancePremiumTicker","enableGAMAdsNonLazyLoad","enableGAMAdsOnViewer","enableHeaderBidding","enableMastAd","enableNativeBillboard","enableNELStorySwarm","enablePartnerCookieCleanup","enableRightRailRefresh","enableSeamlessCluster","enableSeamlessProgramming","enableSpotImAdsViewerStream","enableSpotImComments","enableXrayInline","enableYbarUH3","enableYbarUH3NEL","newsRedesign","overrideViewerSpaceId","seamless","seamlessAlgoTest3"],"pageName":"homepage","lu":"0","spaceid":"2023538075"},"feature":{"headerBidding":true,"enableEdgeToEdge":true},"setting":{"headerBidder":{"customerId":"8YHBJ3BJ0"},"lazyLoad":false,"refresh":{"duration":20,"limit":100,"requireUserAction":false,"sameSizeRefresh":true,"tabFocus":{"outOfFocusDuration":3}},"tracking":{"debug":true,"metrics":true,"performance":true}},"positions":{"sda-LREC-iframe":{"id":"sda-LREC-iframe","kvs":{"loc":"top_right"},"path":"/22888152279/us/yhp/main/dt/us_yhp_main_dt_top_right","region":"index","size":[[300,250],[300,600]]},"sda-LREC3-iframe":{"id":"sda-LREC3-iframe","kvs":{"loc":"mid_right"},"path":"/22888152279/us/yhp/main/dt/us_yhp_main_dt_mid_right","region":"index","size":[[300,250],[300,600]]},"sda-MAST-iframe":{"id":"sda-MAST-iframe","kvs":{"loc":"top_center"},"ntsFallBack":{"position":"LDRB"},"path":"/22888152279/us/yhp/main/dt/us_yhp_main_dt_top_center","region":"index","resizeConfig":{"breakpoints":{"0,480":[16,9],"1331,Infinity":[16,3],"481,1330":[40,9]},"size":[3,1]},"size":[[970,250],[3,1],[728,90]]}}}
            var benjiConsent = {}

            benjiConfig.setting = {
                ...benjiConfig.setting,
                consent: {
                    allowOnlyLimitedAds: false,
                    allowOnlyNonPersonalizedAds: false
                },
                userInfo: {
                    gender: '',
                    age: 0
                }
            };

            if (typeof window.benji !== 'undefined') {
                window.benji.start(benjiConfig);
            } else {
                window.benji = {
                    config: benjiConfig
                };
            }
        })();