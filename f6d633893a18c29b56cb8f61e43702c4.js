(function () {
            var benjiConfig = {"i13n":{"_rid":"2kma2vtiipgsr","abk":"0","colo":"gq1","mrkt":"us","p_sec":"default","partner":"none","site":"engadget","uh_vw":0,"navtype":"server","ver":"carbon","adblock":"0","pt":"home","authed":"1","ynet":"0","ssl":"1","spdy":"0","ytee":"0","mode":"normal","bucket":["eng-nl-hp-dis","privacy-footer"],"device":"desktop","bot":"0","browser":"firefox","app":"unknown","ecma":"default","environment":"prod","intl":"us","lang":"en-US","dir":"ltr","network":"cable","os":"mac os x","region":"US","time":1697432475559,"tz":"America/Phoenix","tpConsent":true,"usercountry":"US","feature":["jac","ncp","readmo","newnav","oathplayer","browserNotifications","newArticleFlow","stickyRightRailStream","articleLayoutRefresh","openweb","enableGAMAds","enableHeaderBidding","marfeel","articlePrivacyFooter","displayTimestamp"],"apptype":"default","designtype":"default","pageName":"homepage","lu":"1","spaceid":1197802876},"setting":{"refresh":{"duration":40,"requireUserAction":true,"limit":5,"tabFocus":{"outOfFocusDuration":3}},"lazyLoad":{"fetchMarginPercent":0,"renderMarginPercent":0},"headerBidder":{"customerId":"8YHBL12EX"}},"positions":{"LB-MULTI_ATF":{"id":"LB-MULTI_ATF","path":"/22888152279/us/eng/main/dt/us_eng_main_dt_top_center","region":"index","size":[[728,90],[970,250]],"kvs":{"loc":"top_center"},"sameSizeRefresh":true},"LB-MULTI_BTF":{"id":"LB-MULTI_BTF","path":"/22888152279/us/eng/main/dt/us_eng_main_dt_btm_center","region":"index","size":[[728,90],[970,250]],"kvs":{"loc":"btm_center"}},"RR-MULTI_ATF":{"id":"RR-MULTI_ATF","path":"/22888152279/us/eng/main/dt/us_eng_main_dt_top_right","region":"index","size":[[300,250]],"kvs":{"loc":"top_right"}},"RR-MULTI_BTF":{"id":"RR-MULTI_BTF","path":"/22888152279/us/eng/main/dt/us_eng_main_dt_mid_right","region":"index","size":[[300,250],[300,600]],"kvs":{"loc":"mid_right"}},"RR-MULTI-2_BTF":{"id":"RR-MULTI-2_BTF","path":"/22888152279/us/eng/main/dt/us_eng_main_dt_mid_right","region":"index","size":[[300,250],[300,600]],"kvs":{"loc":"mid_right_2"}}},"feature":{"headerBidding":true}}
            var benjiConsent = {"allowContentPersonalization":true,"allowCrossDeviceMapping":true,"allowFirstPartyAds":true,"allowSellPersonalInfo":true,"canEmbedThirdPartyContent":true,"canSell":true,"allowAds":true,"allowOnlyLimitedAds":false,"allowOnlyNonPersonalizedAds":false}

            benjiConfig.setting = {
                ...benjiConfig.setting,
                consent: {
                    allowOnlyLimitedAds: false,
                    allowOnlyNonPersonalizedAds: false
                },
                userInfo: {
                    gender: '',
                    age: -2147483648
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