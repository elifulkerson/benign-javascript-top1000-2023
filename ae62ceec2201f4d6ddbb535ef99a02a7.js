function loadJsScript(url){
        let jsScript = document.createElement( 'script' );
        jsScript.async = true;
        jsScript.src = url;

        document.head.appendChild(jsScript);
    }

    var allKeyValue = {"Section":"Homepage","Sub_Section":"","Charts_Page":"no","Page_URL":"\/","Domain":"www.investing.com","smd":"f6350d5c73db8a060fb1d8e7966e6d90-1697431569","protected_media":"0","pm":null,"Crypto_Instrument":"No","user_has_watchlist":"0","session_number":"1","page_path":"www.investing.com\/","page_path_level1":"Homepage","udid":"f6350d5c73db8a060fb1d8e7966e6d90","edition_id":"1","Traffic_Type":"OG","redesign":"0","User_type":"Not_Logged_in"};
    window.isGDPR   = 0;
    window.isCCPA 	= 0;
    window.adFox 	= 0;
    window.headerBidding = 1;

    if (window.adFox === 1) { // loading AdFox (Yandex AdServer)
        var adServerLibrary = "https://yandex.ru/ads/system/context.js";
        var adServerUsed = "AdFox";
        window.yaContextCb = window.yaContextCb || []
    }
    else { // loading GPT
        var adServerLibrary = "https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        var adServerUsed = "GPT";
    }
    var loadAds = false;
    const loadGpt = () => {
        loadAds = true;
		let gptScript = document.createElement( 'script' );
		gptScript.onload = function () {
			console.log(adServerUsed +  ' loaded');
		};
		gptScript.async = true;
		gptScript.src = adServerLibrary;

        // Load GPT Async
        if(adServerUsed !== "GPT") { // Load AdFox / Yandex
		    document.head.appendChild(gptScript);
        }
        else { // suppose to load GPT
            window.dfpSlots = window.dfpSlots || [];
            window.googletag = window.googletag || {};
            window.googletag.cmd = window.googletag.cmd || [];

            window.a892ffe2982c = {
                defineSlots: function () {
                    _.attachEvents();
                    _.each( allKeyValue, function (val, key) { _.setTargeting(key, val) });
                    _.each([], _.defineSlot);
                }
            }
            window.googletag.cmd.push(function () {

                window.a892ffe2982c.defineSlots();
                //if is not gdpr compliant - get personal ads
                if (!window.isGDPR || (window.isGDPR && getCookie('CMP_CONSENT') === '1')) {
                    window.googletag.pubads().setRequestNonPersonalizedAds(0);
                }

                // ADX ccpa (optout - 1YYN) restricted data processing
                if( window.isCCPA && getCookie('usprivacy') === '1YYN')
                {
                    console.log('CCPA privacy restrict data processing');
                    window.googletag.pubads().setPrivacySettings({
                        'restrictDataProcessing': true
                    });
                }

                window.googletag.pubads().enableSingleRequest();
                window.googletag.enableServices();

                // Display slots after user consent.
                // for (let i = 0; i < window.dfpSlots.length; i++) {
                //     console.log('manual loop ' + window.dfpSlots[i]);
                //     window.googletag.display(window.dfpSlots[i]);
                // }
                window.dfpFlag = 1;
            })
            if (window.headerBidding === 1) {
                window.imntz_analyticsTargetCpmEnabled = true;
                (function(w, d, e, u, p, a, m) {
                    w.__imntz = w.__imntz || {};
                    w.__imntz.queue = w.__imntz.queue || [];
                    w.__imntz.presetUrl = p;

                    a = d.createElement(e);
                    m = d.getElementsByTagName('script')[0];
                    a.async = true;
                    a.src = u;
                    m.parentNode.insertBefore(a, m);

                    window.__imntz.queue.push(() => {
                        window.__imntz.api().setTargeting(allKeyValue);
                    });

                    window.__imntz.queue.push(() => {
                        window.__imntz.api().registerGoogleHook('slotRenderEnded', (adUnit, args) => {
                            var element = document.getElementById(args.slot.getSlotElementId());
                            element.style.backgroundColor = null;

                        });
                    });
                })(window, document, 'script', 'https://monetization.prod.invmed.co/bootstrap/bootstrap.min.js', 'https://si.education.investing.com/inv/v2/us/config-desktop.leg.json');
            }
        }
    }

    if( window.isGDPR ){
        const consentSetInterval = setInterval(() => {
            if( typeof window.__tcfapi !== 'undefined' )
            {
                clearInterval(consentSetInterval);
                window.__tcfapi( 'addEventListener', 2, function( tcData,listenerSuccess )
                {
					if(listenerSuccess) {
						if( tcData && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') ) {
							var hasGoogleAdvertisingProductsConsent = tcData.vendor.consents[755] || false;
							// Check if the user gave Google Advertising Products consent (iab vendor 755)
							if(hasGoogleAdvertisingProductsConsent) {
								console.log("gpt loaded gdpr-ccpa")
								loadGpt();
							}
						}
                        if (window.imhb) {
                            window.imhb.queue.push(() => {
                                window.imhb.recheckConsent(); // Check for GDPR
                            });
                        }
					}
                })
            }

        }, 50);

    } else {
        if (window.isCCPA && window.imhb) {
            window.addEventListener("consent.onetrust", () => {
                // should update cookie usprivacy

                __uspapi("getUSPData", 1, (data, success) => {
                    if (window.imhb) {
                        window.imhb.recheckCCPAConsent();
                    }
                });
            });
        }
        loadGpt();
    }

    var adFoxSlots = adFoxSlots || [];
    function loadAdFoxSlot(slot, params) {
        adFoxSlots[slot] = { ...window.adFoxObj }
        adFoxSlots[slot].containerId = slot;
        adFoxSlots[slot].params = params;
        adFoxSlots[slot].onLoad = (function (){setWhiteBackground(slot)})
        if(slot === 'FP_RU_Sideblock_3_viewable' || slot === 'Sideblock_2_Default') {
            adFoxSlots[slot].lazyLoad = true;
        }
        console.log('loading ad Fox slot by func for slot '+slot)
        window.yaContextCb.push(()=>{Ya.adfoxCode.create(adFoxSlots[slot])})

    }
    
    let upacc = getCookie('upa');
    if(upacc !== null) {
        try{
            let upadec = JSON.parse(atob(decodeURIComponent(upacc)));
            allKeyValue = Object.assign(allKeyValue, upadec);
        } catch (e) { }
    }
      
    window.adFoxObj = {
        ownerId: 316703,
        // containerId: 'FP_RU_Billboard_Default',
        params: {},
        onLoad: function(data) { console.log('on adFox Load'); console.log(data) },
        onRender: function() {console.log('on adFox render');   },
        onError: function(error) { console.log('on adFox error'); console.log(error)  }
    };

    function setWhiteBackground(slotId)
    {
        let el = document.getElementById(slotId);
        if(el) {
            el.style.backgroundColor = 'white';
        }
    }

    function convertKeyValueToYandex(allKeyValue) {
        var KeyValueMapper = {
            puid1: "CID",
            puid2: "User_type",
            puid3: "smd",
            puid4: "Traffic_Type",
            puid5: "Section",
            puid6: "adsTest",
            puid7: "utm_source",
            puid8: "utm_campaign",
            puid9: "utm_medium",
            puid10: "utm_term",
            puid11: "utm_content",
            puid12: "pair_id",
            puid13: "newsID",
            puid14: "contentID",
            puid15: "GL_Ad_ID",
            puid16: "GL_Campaign_ID",
            puid17: "Crypto_Instrument",
            puid18: "Sub_Section",
            puid19: "SectionInstrument",
            puid20: "User_Id",
            puid21: "udid",
            puid22: "edition_id",
            puid23: "reg_days",
            puid24: "already_l",
            puid25: "b1",
            puid26: "b2",
            puid27: "b3",
            puid28: "b4",
            puid29: "pm",
            puid30: "user_has_watchlist",
            puid31: "studios_dfp"
        };
        allPuids = {};
        for (const key in KeyValueMapper) {
            if(allKeyValue.hasOwnProperty(KeyValueMapper[key])) {
                allPuids[key] = allKeyValue[KeyValueMapper[key]]
            }
        }
        return allPuids;
    }
    var allPuids = convertKeyValueToYandex(allKeyValue)

    // Update adFox Obj with Puids
    Object.assign(adFoxObj.params, allPuids);

    // Load Yandex ads refresher
    var thisWindow = window;
    var IDLE_INTERVAL = 5 * 60 * 1000; // 5 minutes
    thisWindow.lastUserRefreshTimestamp = Date.now()
    if(window.adFox === 1) {
        thisWindow.addEventListener("focus", function(){
            refreshAdFoxAds();
        })
    }

    function refreshAdFoxAds(){
        var currentTime = Date.now();
        if(currentTime >= thisWindow.lastUserRefreshTimestamp + IDLE_INTERVAL) {
            console.log("Refreshing only viewable Ad Fox ads");
            Ya.adfoxCode.reload(null, {onlyIfWasVisible: true});
        }
        else {
            // console.log("not yet")
        }
        thisWindow.lastUserRefreshTimestamp = Date.now()
    }

    var googletagGA = window.helpers.getCookie('_ga');

    if (googletagGA) {
        allKeyValue.CID = googletagGA.substr(6);
    }

    // todo: change the screen width logic and move it from here to separate task
    var screenWidthForAds= screen.width || 1366,
        screenWidthValue,
        adBreakPoints = [1336,1440,1920];

    if (screenWidthForAds < adBreakPoints[0]){ screenWidthValue = 'small' }
    else if (screenWidthForAds >= adBreakPoints[0] && screenWidthForAds <= adBreakPoints[1]) {
        screenWidthValue = 'medium'
    }
    else if (screenWidthForAds > adBreakPoints[1]) {
        screenWidthValue = 'big'
    }

    allKeyValue.screen_width = screenWidthValue;