/*START SCRIPT GPT TAG FOR ADS*/
    var pageKlyObj = typeof window.kly !== 'undefined' ? window.kly : window.kmklabs;
    var isHSEcreated = false;
    var isFirstLoad = true;
    var nextIndex = 0;
    var indexMulti = 1; // multiads index slot

    var lastPageOrder = 0; // record last order index from the previus page
    var nextAdsId = []; // config id pass from one page to another

    const qUrl = new URLSearchParams(window.location.search);
    const pOrder = qUrl.get('o');
    const multiply = qUrl.get('m');
    const multiplied = multiply ? +multiply : 2; // slot position power by 2
    const order = pOrder ? pOrder.split(",") : [1]; // ads order for every multiplied screen in loop 

    window.googletag = window.googletag || {
        cmd: []
    };

    var adsConfig = {
        'feeds': {
            2: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-1",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-2-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            4: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-2",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-4-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            6: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-3",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-6-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            8: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-4",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-8-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            10: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-5",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-10-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            12: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-6",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-12-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            14: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-7",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-14-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            16: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-8",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-16-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            18: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-9",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-18-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            20: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-10",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-20-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            22: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-11",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-22-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            24: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-12",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-24-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            26: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-13",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-26-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            28: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-14",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-28-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            30: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/FEEDADS-15",
                sizes: [
                    [300, 600],
                    [300, 250],
                    [320, 480],
                    [120, 600],
                    [160, 600]
                ],
                placeholder: "gpt-ad-div-section-30-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },

        },
        'hse': {
            0: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MASTHEAD",
                sizes: [1, 1],
                placeholder: "gpt-ad-div-masthead-placeholder",
                slotCreated: false,
                requested: false
            },
            1: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/HEADLINE",
                sizes: [320, 100],
                placeholder: "gpt-ad-div-headline-placeholder",
                slotCreated: false,
                requested: false
            },
            2: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/SHOWCASE",
                sizes: [
                    [200, 200],
                    [250, 250],
                    [300, 250]
                ],
                placeholder: "gpt-ad-div-showcase-placeholder",
                slotCreated: false,
                requested: false
            },
            3: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/EXPOSER",
                sizes: [
                    [160, 600],
                    [250, 250],
                    [300, 600],
                    [300, 250],
                    [320, 480]
                ],
                placeholder: "gpt-ad-div-exposer-placeholder",
                slotCreated: false,
                requested: false
            },
            4: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/BOTTOM_FRAME",
                sizes: [
                    [320, 50],
                    [320, 100]
                ],
                placeholder: "gpt-ad-div-bottom-frame-placeholder",
                slotCreated: false,
                requested: false
            },
        },
        'adv': {
            0: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/ADVERTORIAL-1",
                sizes: "OOP",
                placeholder: "gpt-ad-div-advertorial1-placeholder",
                slotCreated: false,
                requested: false
            },
            1: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/ADVERTORIAL-2",
                sizes: "OOP",
                placeholder: "gpt-ad-div-advertorial2-placeholder",
                slotCreated: false,
                requested: false
            },
            2: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/ADVERTORIAL-3",
                sizes: "OOP",
                placeholder: "gpt-ad-div-advertorial3-placeholder",
                slotCreated: false,
                requested: false
            },
        },
        'rich': {
            0: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/RICH_FEEDADS",
                sizes: "OOP",
                placeholder: "gpt-ad-div-rich-feedads-placeholder",
                slotCreated: false,
                requested: false
            }
        },
        'multi': {
            1: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-1",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-1-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            2: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-2",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-2-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            3: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-3",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-3-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            4: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-4",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-4-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            5: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-5",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-5-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            6: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-6",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-6-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            7: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-7",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-7-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            8: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-8",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-8-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            9: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-9",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-9-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            10: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-10",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-10-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            11: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-11",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-11-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            12: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-12",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-12-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            13: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-13",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-13-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            14: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-14",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-14-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },
            15: {
                adunit: "/36504930/KLY/MAVERICK/MERDEKA.COM/MULTIADS-15",
                sizes: [
                    [300, 250],
                    [320, 100],
                    [320, 50]
                ],
                placeholder: "gpt-ad-div-multiads-15-placeholder",
                slotCreated: false,
                requested: false,
                viewable: false
            },

        }
    };

    var definedFeedSlot = function(prop, render) {
            var config = adsConfig['feeds'];
            googletag.cmd.push(function() {
                if (config[prop]['sizes'] == 'OOP') {
                    config[prop]['slot'] = googletag.defineOutOfPageSlot(config[prop]['adunit'], config[prop]['placeholder']).addService(googletag.pubads());
                } else {
                    config[prop]['slot'] = googletag.defineSlot(config[prop]['adunit'], config[prop]['sizes'], config[prop]['placeholder']).addService(googletag.pubads());
                }

                googletag.display(config[prop]['placeholder']);

                if (render && config[prop]['slot']) {
                    googletag.pubads().refresh([config[prop]['slot']]);
                    config[prop]['requested'] = true;
                }

            });
        },
        minusOneConfig = Object.entries(adsConfig['feeds']).slice(order[0], adsConfig['feeds'].length).map((entry) => entry[0]);

    window.GAMLibrary = {
        /** START SHRINKING V8 */
        tfIsFixedSized: 1,
        tfAdsVisible: {
            "topframe": false,
            "topframeClassTweak": false,
            "topframeScrollBackToTop": false,
        },
        tfParentBody: null,
        tfParentWrapper: null,
        tfWrapper: null,
        tfSticky: false,
        tfStickyType: null,
        tfStickyIsEnd: false,
        tfStickyLastScroll: 0,
        tfStickyLastScrollEnd: 0,
        tfStickyScrollSpeed: 10,
        tfStickyCountDownV2: 0,
        tfResetStickyCountDownV2: false,
        tfStickyTimer: 7,
        tfIsTurnOff: false,
        tfDeviceOrientation: window.matchMedia("(orientation: portrait)").matches,
        tfStickyIsReady: false,
        tfStickyAdunitTarget: "#gpt-ad-div-masthead-placeholder",
        tfStickyCustomStyleElement: document.createElement("style"),

        get tfIncreamentStickyCountDownV2() {
            this.tfStickyCountDownV2++;
        },

        tfSetStickyV2Scroll: function() {

            if (this.tfStickyType != "v8") {
                document.querySelector(".main-body").removeEventListener("scroll", this.tfBindSetStickyV2Scroll)
                return
            }
            var scrollTop = document.querySelector(".main-body").scrollTop
            if (scrollTop == 0 && this.tfAdsVisible.topframeClassTweak) {
                this.tfAdsVisible.topframeScrollBackToTop = true;
                this.tfAdsVisible.topframeClassTweak = false;
                this.tfStickyUnsetV2();
            }

            if ((document.querySelector(".main-body").scrollTop > (document.querySelector(this.tfStickyAdunitTarget).clientHeight / 3)) && !this.tfAdsVisible.topframeClassTweak && this.tfIsSticky && !this.tfStickyIsEnd) {

                this.tfAdsVisible.topframeClassTweak = true;
                this.tfAdsVisible.topframeScrollBackToTop = false;
                this.tfSetSticky();
                this.tfResetStickyCountDownV2 = false;
            }

        },
        tfSetSticky: function() {
            document.querySelector(this.tfStickyAdunitTarget).parentElement.classList.add("puller")
            var tfStickyCountDownInt = setInterval(function() {
                if (this.tfStickyCountDownV2 >= 75 && !this.tfStickyIsEnd) {
                    clearInterval(tfStickyCountDownInt);
                    this.tfAdsVisible.topframe = true;
                    this.tfStickyIsEnd = true;
                    this.tfStickyUnsetV2();
                }

                if (!this.tfAdsVisible.topframeScrollBackToTop) {
                    this.tfIncreamentStickyCountDownV2;
                }

                if (this.tfResetStickyCountDownV2) {
                    clearInterval(tfStickyCountDownInt);
                }
            }.bind(this), 100);

        },
        tfStickyUnsetV2: function() {
            document.querySelector(this.tfStickyAdunitTarget).parentElement.classList.remove("puller")
            if (this.tfStickyIsEnd) {
                document.querySelector(this.tfStickyAdunitTarget).style.opacity = 1;
                document.querySelector(".main-body").removeEventListener("scroll", this.tfBindSetStickyV2Scroll);
            } else {
                this.tfStickyCountDownV2 = 0;
                this.tfResetStickyCountDownV2 = true;
            }
        },

        gamSlotRenderEnded: function(event) {
            var containerId = event.slot.getSlotElementId();
            var containerEl = document.getElementById(containerId);
            // TOPFRAME SHRINKING V8
            if (containerId.includes("masthead") && !this.tfAdsVisible.topframe) {
                this.tfBindSetStickyV2Scroll = this.tfSetStickyV2Scroll.bind(this);
                document.querySelector(".main-body").addEventListener("scroll", this.tfBindSetStickyV2Scroll)
                setTimeout(function() {
                    if (!this.tfIsSticky) {
                        document.querySelector(".main-body").removeEventListener("scroll", this.tfBindSetStickyV2Scroll)
                        this.tfStickyIsEnd = true
                    }
                }.bind(this), 2000);
            }
            // END TOPFRAME SHRINKING V8

            /* STYLING - FEED ADS IAB */
            /** TRIGGER MULTIPLE ADS */
            // OMP - Google Adx : 32327330
            // Google AdSense : 30140930
            // if ([32327330, 30140930].indexOf(event.advertiserId) > -1) {
            if (event.size !== null) {
                var [width, height] = event.size;
                var config = adsConfig['multi'];
                var prop = 0;

                if (width == 300 && height == 250 && !containerEl.id.match(/(gpt-ad-div-multiads-|gpt-ad-div-showcase-placeholder|gpt-ad-div-exposer-placeholder)/ig)) {
                    let position = containerEl.parentElement && containerEl.parentElement.dataset.adsPosition ? containerEl.parentElement.dataset.adsPosition : indexMulti;
                    let containerId = config[position]['placeholder'];
                    let divAdsCont = containerEl.querySelector("div[id^='google_ads_iframe_']");
                    let divMavInfeeds = containerEl.querySelector("div[class^='maverick-in-feeds']");
                    let divMavInfeedInner = divMavInfeeds && divMavInfeeds.querySelector("#iframe-wrapper");
                    let articleDesc = containerEl.querySelector(".article-desc");
                    let template = `
                             <div class="flex flex-col justify-start section-body h-full max-w-xs">
                                 <div class="flex justify-center">
                                     <div id="${containerId}" class="py-2 px-2 bg-black/10 rounded-md"></div>
                                 </div>
                             </div>`;


                    if (divMavInfeeds) {
                        let feedAdsImage = divMavInfeeds.querySelector("img");
                        divMavInfeeds.classList.add("flex", "flex-col", "h-full", "justify-end")
                        feedAdsImage && feedAdsImage.style.setProperty("padding", "unset", "important")
                        divMavInfeedInner && divMavInfeedInner.setAttribute("class", "py-2 px-2 bg-black/10 rounded-md relative items-center z-10")
                    } else {
                        // divAdsCont && divAdsCont.parentElement.classList.add("py-2", "px-2", "bg-black/10", "rounded-md")
                        divAdsCont && divAdsCont.classList.add("flex", "flex-col", "justify-end", "section-body", "h-full", "max-w-xs")
                        if (divAdsCont && divAdsCont.firstChild) {
                            divAdsCont.firstChild.classList.add("py-2", "px-2", "bg-black/10", "rounded-md")
                            divAdsCont.firstChild.style.setProperty("width", "316px");
                            divAdsCont.firstChild.style.setProperty("height", "266px");
                            divAdsCont.setAttribute("style", "border: 0pt none;margin: auto;text-align: center;")
                        }
                    }

                    if (containerEl.insertAdjacentHTML("beforeend", template) !== null && !config[position]['slotCreated']) {
                        config[position]['slot'] = googletag.defineSlot(config[position]['adunit'], config[position]['sizes'], containerId).addService(googletag.pubads());
                        if (config[position]['slot'] && !config[position]['requested']) {
                            googletag.display(containerId);
                            googletag.pubads().refresh([config[position]['slot']]);
                            config[position]['requested'] = true;
                        }
                        config[position]['slotCreated'] = true;
                    }

                    containerEl.setAttribute("style", "gap: 1.5rem;");
                    //articleDesc && articleDesc.classList.remove("inset-0");
                    indexMulti++;

                }
            }

        },
        counterAhoy: 0,
        get increamentCounterAhoy() {
            this.counterAhoy++;
        },
        gamSlotOnLoad: function(event) {
            var gamSlotDelivered = event.slot.getResponseInformation() ? 'block' : 'none'; /* check wheter there is ads or not*/

            if (gamSlotDelivered == 'block') {
                cdpData = {
                    action: 'ads_impression',
                    action_details: {
                        slotElementId: event.slot.getSlotElementId(),
                        ResponseInformation: event.slot.getResponseInformation(),
                        sizes: event.slot.getSizes(),
                        adunitPath: event.slot.getAdUnitPath(),
                        outOfPage: event.slot.getOutOfPage()
                    }
                };

                let ahoyInterval = setInterval(function(e) {
                    if (window.AhoyEvent && typeof window.AhoyEvent.sendPersonalizationUserEvent === 'function') {
                        try {
                            this.consoleLog({
                                'text': 'AHOY SAVED',
                                'variable': [cdpData]
                            });
                            window.AhoyEvent.sendPersonalizationUserEvent(cdpData);
                            clearInterval(ahoyInterval);
                        } catch (error) {
                            this.consoleLog({
                                'text': 'AHOY FAILED! : ' + error,
                                'variable': []
                            });
                            clearInterval(ahoyInterval);
                        }
                    }
                    if (this.counterAhoy > 30) {
                        clearInterval(ahoyInterval)
                    }
                    this.increamentCounterAhoy;
                }.bind(this), 100);
            }
        },
        /** ============ TOOLS ============ */
        /** 
         * `showConsole` Logger for debuging
         * cookie key : gamlibLogger
         * cookie value : `true` ( display all gamlib console log ), `false` ( turn off all gamlib console log )
         * */
        pageLogger: {},
        set consoleToggle(stat) {
            document.cookie = `gamlibLogger=${stat}`;
        },
        /* Set console format msg : { text: Text, variable: Array } */
        set showConsole(msg) {
            this.pageLogger = msg;
        },
        /* Get console */
        get showConsole() {
            var getLog = document.cookie.split("gamlibLogger")[1] ? document.cookie.split("gamlibLogger")[1] : ';';
            var loggerCookies = getLog.split(';')[0].match(/(true)/ig) !== null ? true : false;
            if (loggerCookies) {
                console.log(this.pageLogger.text, this.pageLogger.variable);
            }
        },
        consoleLog: function(msg) {
            /* CONSOLE BLOCK */
            this.showConsole = msg;
            this.showConsole;
            /* CONSOLE BLOCK */
        },
        /** ============ TOOLS ============ */
    }

    MavInitiateAds();

    function MavInitiateAds() {

        //making adrequst to GAM
        googletag.cmd.push(function() {
            // populate targeting
            MavPopulateTargetting();
            //create HSE ads container
            MavDefineHSEAds();

            googletag.pubads().addEventListener('slotOnload', GAMLibrary.gamSlotOnLoad.bind(GAMLibrary));
            googletag.pubads().addEventListener('slotRenderEnded', GAMLibrary.gamSlotRenderEnded.bind(GAMLibrary));

            googletag.pubads().setCentering(true);
            googletag.pubads().enableSingleRequest();
            googletag.pubads().collapseEmptyDivs();
            googletag.pubads().disableInitialLoad();
            googletag.enableServices();
            //create Advertorial ads container
            pageKlyObj.gtm.subCategory !== 'quran' ? MavDefineOOP() : '';
            showHSEAds();
        });

    }

    function MavDefineOOP() {
        for (const conf in adsConfig) {
            if (['adv', 'rich'].indexOf(conf) > -1) {
                var config = adsConfig[conf];
                for (const prop in config) {
                    if (!config[prop]['requested'] && !config[prop]['slotCreated']) {
                        let div = document.createElement("div");
                        div.id = config[prop]['placeholder'];
                        if (document.body.insertAdjacentElement("beforeend", div) !== null) {
                            if (config[prop]['sizes'] == 'OOP') {
                                config[prop]['slot'] = googletag.defineOutOfPageSlot(config[prop]['adunit'], config[prop]['placeholder']).setTargeting('position', (+prop + 1)).addService(googletag.pubads());
                            } else {
                                config[prop]['slot'] = googletag.defineSlot(config[prop]['adunit'], config[prop]['sizes'], config[prop]['placeholder']).setTargeting('position', (+prop + 1)).addService(googletag.pubads());
                            }
                            googletag.display(config[prop]['placeholder']);
                            googletag.pubads().refresh([config[prop]['slot']]);
                            config[prop]['slotCreated'] = true;
                            config[prop]['requested'] = true;
                        }
                    }
                }
            }
        }
    }

    function MavDefineHSEAds() {
        var config = adsConfig['hse'];
        /* GET READ SECTION ELEMENT ID : 55 */
        var readSection = document.querySelector(`section[data-template-id='73'], section[data-template-id='55']`)

        /* EXIT IF IT'S NOT READPAGE */
        if (!readSection) return;

        MavCreateContainerHSEAds(readSection);

        for (const prop in config) {
            if (!config[prop]['requested']) {
                if (config[prop]['sizes'] == 'OOP') {
                    config[prop]['slot'] = googletag.defineOutOfPageSlot(config[prop]['adunit'], config[prop]['placeholder']).setTargeting('position', ['2']).addService(googletag.pubads());
                } else {
                    config[prop]['slot'] = googletag.defineSlot(config[prop]['adunit'], config[prop]['sizes'], config[prop]['placeholder']).setTargeting('position', ['2']).addService(googletag.pubads());
                }
            }

        }
    }
    /* CREATE HEADLINE, SHOWCASE AND EXPOSER (HSE) SLOTS CONTAINER */
    function MavCreateContainerHSEAds(section) {
        var readArticle = document.querySelector(".btn--readarticle"),
            slotTemplate = document.createElement('div'),
            slots = null,
            slotIndex = 1,
            config = adsConfig['hse'],
            masthead = section.querySelector(".masthead"),
            bottomfrm = section.querySelector(".bottomframe"),
            buttonReadmore = section.querySelector(".btn--readarticle"),
            divParagraph = section.querySelectorAll(".pages-paragraph"),
            paragraph = divParagraph.length > 0 ? divParagraph : section.querySelectorAll('.dt-para p'),
            parDivider = divParagraph.length > 0 ? 1 : (paragraph.length >= 9 ? 4 : 4);

        slotTemplate.innerHTML = `
   <div class="banner text-gray-400 vh-text-xs p-2 mb-6 -mx-6">
       <span class="text-center upperase block mb-2">ADVERTISEMENT</span>
       <div class="banner-inner justify-between items-center headline"></div>
   </div>
   <div class="banner text-gray-400 vh-text-xs p-2 -mx-6">
       <span class="text-center upperase block mb-2">ADVERTISEMENT</span>
       <div class="banner-inner justify-between items-center showcase"></div>
   </div>
   <div class="banner text-gray-400 vh-text-xs p-2 -mx-6">
       <span class="text-center upperase block mb-2">ADVERTISEMENT</span>
       <div class="banner-inner justify-between items-center exposer"></div>
   </div>

`;
        slots = slotTemplate.querySelectorAll('div.banner');
        position = "afterend";
        paragraph && paragraph.forEach(function(val, key) {

            if (key == 0 || !((key + 1) % parDivider) && slotIndex < slots.length) {
                if (key == 0) {
                    slotIndex = 0;
                    position = "beforebegin";
                }
                slots[slotIndex].querySelector('div.banner-inner').id = config[slotIndex + 1].placeholder;
                val.insertAdjacentElement(position, slots[slotIndex]);
                config[slotIndex + 1]['slotCreated'] = true;

                slotIndex++;
            }
        })
        isHSEcreated = true;
    }

    function showHSEAds() {
        /* GET READ SECTION ELEMENT ID : 55 */
        var readSection = document.querySelector(`section[data-template-id='73'], section[data-template-id='55']`)

        if (!readSection) return;

        var config = adsConfig['hse'];
        var containerExists = false;
        var masthead = readSection.querySelector(".masthead");
        var bottomfrm = readSection.querySelector(".bottomframe");

        // start refresh slots object
        for (prop in config) {
            containerExists = document.querySelector(`#${config[prop]['placeholder']}`) !== null;
            if (!config[prop]['requested'] && containerExists) {
                googletag.display(config[prop]['placeholder']);
                googletag.pubads().refresh([config[prop]['slot']]);
                config[prop]['requested'] = true;
            }
        }

        bottomfrm && bottomfrm.classList.remove("hidden");
        bottomfrm && bottomfrm.removeAttribute("style");

        masthead && masthead.classList.remove("hidden");
        masthead && masthead.removeAttribute("style");

    }

    function MavPopulateTargetting() {
        var articlePages = pageKlyObj && pageKlyObj.article,
            gtmPages = pageKlyObj && pageKlyObj.gtm,
            readSection = document.querySelector(`section[data-template-id='73'], section[data-template-id='55']`),
            siteContentText = "",
            isMatcont = "0",
            isViolateBrandSafety = "0",
            /** POPULATE META DATA */
            bsKeyword = [],
            pageTitles = '',
            pageKeyword = '',
            pageDesc = '',
            pageTag = '',
            pageTags = '',
            getLog = document.cookie.split("gamlibLogger")[1] ? document.cookie.split("gamlibLogger")[1] : ';',
            loggerCookies = getLog.split(';')[0].match(/(true)/ig) !== null ? true : false;

        if (articlePages) {
            pageTitles = gfnFilterString(articlePages.articleTitle ? articlePages.articleTitle : '', ' ');
            pageKeyword = gfnFilterString(articlePages.keywords ? articlePages.keywords : '', ' ');
            pageDesc = gfnFilterString(articlePages.shortDescription ? articlePages.shortDescription : '', ' ');
        } else {
            pageTitles = gfnFilterString(gtmPages.pageTitle ? gtmPages.pageTitle : '', ' ');
            pageKeyword = gfnFilterString(gtmPages.keyword ? gtmPages.keyword : '', ' ');
            pageDesc = gfnFilterString(gtmPages.shortDescription ? gtmPages.shortDescription : '', ' ');
        }

        var anchor = Array.prototype.map.call(document.querySelectorAll(".main-body a"), (e) => {
            return e.href;
        })

        var allAnchor = anchor.join(" ").replace(/[\W_]+/ig, " ").trim().split(" ").map(function(t) {
            return t.trim().toLowerCase()
        });

        var anchorKeywords = [...new Set(allAnchor)];

        /* EXIT IF IT'S NOT READPAGE */
        if (readSection !== null) {
            var siteContentObject = readSection.querySelectorAll('.dt-para p');
            if (siteContentObject.length) {
                siteContentText = Object.entries(siteContentObject).map((v) => {
                    return v[1] && v[1].innerText;
                }).join("");
            }
        }

        pageKeyword = pageKeyword.concat(pageDocumentMeta("keywords"));
        pageDesc = pageDesc.concat(pageDocumentMeta("description"));
        pageTag = pageKlyObj.gtm.tag ? pageKlyObj.gtm.tag : '';
        pageTags = gfnFilterString(pageTag, "|");
        siteContentText = gfnFilterString(siteContentText, ' ');

        const BS_KEYWORD_LIST = {
            'adult': ['adegan erotis', 'adegan seks', 'aduhai', 'adult', 'affair', 'air mani', 'alat bantu seks', 'alat kelamin', 'alat kontrasepsi', 'alat vital pria', 'alergi', 'anal', 'anatomi vagina', 'anjeng', 'anjing', 'anjlng', 'anjrit', 'anus', 'anying', 'apa itu kondom', 'artis indonesia bugil', 'artis porno', 'ass', 'asu', 'ayam hitam', 'babi', 'bahaya masturbasi', 'bajingan', 'bandar ceme', 'bangsat', 'bdsm', 'bego', 'belahan', 'bentuk kelamin', 'bentuk payudara', 'bercinta', 'bercinta saat hamil', 'bergairah', 'berhubungan intim', 'berhubungan seks', 'berhubungan seksual', 'bersetubuh', 'bikini', 'bintang film porno', 'bintang porno', 'biseksual', 'bitch', 'bocah sd foto mesum', 'body shaming', 'bokne', 'bokong', 'bom surabaya 2018', 'boneka seks', 'boob', 'bra', 'bugil', 'bullshit', 'bulshit', 'bulu kemaluan', 'bunuh diri', 'cabul', 'cara berhubungan intim', 'cara membuat suami bergairah', 'cara memperbesar penis', 'cara mengatasi ejakulasi dini', 'cara seksual', 'celana', 'cemani', 'cemen', 'chat firza-rizieq', 'ciuman', 'cleavage', 'cock', 'cok', 'cukur bulu kemaluan', 'cum', 'dada', 'death', 'dewasa', 'di bawah umur', 'dick', 'dildo', 'diremas', 'disfungsi ereksi', 'doggie', 'doll', 'drunk', 'ejakulasi', 'ejakulasi dini', 'ejakulasi wanita', 'eksotik', 'elo', 'entot', 'ereksi', 'erotic', 'erotis', 'ewe', 'exotic', 'fakta seks', 'fase menstruasi', 'fenomena kelainan seksual', 'fetish', 'film dewasa', 'film porno', 'foreplay', 'foto berhubungan intim', 'foto intim', 'foto telanjang', 'fuck', 'gairah', 'gairah seks', 'gairah seksual', 'gangbang', 'gangguan jiwa', 'gangguan seks', 'ganguan jiwa', 'ganguan seksual', 'ganja', 'gay', 'gaya bercinta', 'gaya bercinta dalam islam', 'gaya bercinta yang disukai pria', 'gaya seks', 'gejala penyakit', 'gemar368', 'germo', 'goblok', 'gue', 'gwe', 'hardcore', 'hasrat seksual', 'henceut', 'hindu', 'hitam mafia', 'homoseks', 'horny', 'hot', 'hubungan', 'hubungan intim', 'hubungan seksual', 'ibu hamil', 'implan payudara', 'industri film porno', 'intim', 'itil', 'jancok', 'jancuk', 'jenis alat kontrasepsi', 'jerawat', 'jual beli sperma', 'kacau', 'kakek cabul', 'kamasutra', 'kanibal', 'kanibalisme', 'kanker payudara', 'kapalan', 'kasus asusila', 'kebencian', 'kecanduan seks', 'kehidupan seks', 'kekerasan seksual', 'kelainan seks', 'kelamin', 'kelamin wanita', 'kemaluan', 'kemaluan wanita', 'kencing', 'keperawanan', 'keriting', 'kesehatan kulit dan kelamin', 'kesehatan payudara', 'kesehatan penis', 'kesehatan reproduksi', 'kesehatan wanita', 'khusus deewasa', 'kimpet', 'kisah perselingkuhan', 'kiss', 'klitoris', 'komunitas swinger', 'kondom', 'kondom pria', 'kontol', 'kontolnya', 'kontrasepsi', 'kontroversi hukuman mati', 'kontroversi lgbt', 'kotor', 'kotoran', 'kristen', 'kumuh', 'kursi tantra seks', 'legalisasi ganja', 'lemari es', 'lendir', 'lesbian', 'lgbt', 'libido', 'lingerie', 'lolita', 'lonte', 'm3m3k', 'mabuk', 'mahasiswi', 'mainan dewasa', 'mainan perangsang gairah', 'makanan berbahaya', 'makanan sehat', 'masa subur pria', 'masturbasi', 'matcont', 'mature', 'meki', 'melakukan hubungan intim', 'memek', 'memerkosa', 'mencukur bulu kemaluan', 'menggairahkan', 'menggoda', 'mengupas', 'menstruasi', 'menyiangi', 'meraba-raba', 'mesra', 'mesum', 'mimpi seks', 'mimpi telanjang', 'miss-v', 'mitos seks', 'model hot', 'model seksi', 'monyet', 'mr-p', 'mucikari siswi smp', 'nakal', 'naked', 'naughty', 'ngentot', 'ngewe', 'nipple', 'nipples', 'nonok', 'nude', 'obat ejakulasi dini', 'obat kuat', 'obat pembesar', 'obat pembesar penis terbaik', 'onani', 'oral', 'oral seks', 'organ', 'organ intim wanita', 'orgasme', 'orgasme wanita', 'overdose', 'overdosis', 'paha', 'pakistan', 'pamer', 'pantat', 'panties', 'payudara', 'payudara kecil', 'payudara wanita', 'pelacur', 'pelecehan', 'pelecehan seksual', 'pembesar penis', 'pembunuh', 'pembunuhan', 'pemerkosaan', 'pemerkosaan anak', 'pemuda', 'pencabulan', 'penetrasi', 'penetratif', 'pengetahuan seks', 'pengobatan alternatif', 'penis', 'penis bengkok', 'penis besar', 'penis kecil', 'penis pria', 'penyakit sipilis', 'penyakit vagina', 'penyimpangan seks', 'perawan', 'perawatan vagina', 'perbudakan', 'perek', 'perguruan tinggi', 'perkosa', 'perkosaan', 'permen', 'perselingkuhan', 'piss', 'play boy', 'pole', 'porn', 'porno', 'pornoaksi', 'pornografi', 'posisi bercinta', 'posisi hubungan intim suami istri menurut islam', 'posisi seks', 'posisi seksual', 'pria dewasa', 'pria idaman', 'prostitusi', 'provokatif', 'pukang', 'puki', 'puting', 'puting payudara', 'putting', 'radikal', 'raksasa', 'rangsang payudara', 'ranjang', 'rasis', 'rasisme', 'razia pasangan mesum', 'rokok', 'rudapaksa', 'rumah bordil', 'sbobet', 'seks', 'seks bebas', 'seks dalam islam', 'seks dan agama', 'seks dan kriminal', 'seks dan pasutri', 'seks oral', 'seks pria dan wanita', 'seks toy', 'seksi', 'seksual', 'seksual lelaki dan perempuan', 'seksualitas', 'seksualitas pria', 'seksualitas wanita', 'semen', 'sensual', 'seronok', 'sex', 'sex toy', 'sexy', 'shit', 'siklus menstruasi', 'situs poker terpercaya', 'situs porno', 'skandal', 'sperma', 'stres dan depresi', 'strip', 'striptease', 'striptis', 'suicide', 'sundulan', 'swinger', 'syur', 'tai', 'taik', 'tamparan', 'tante seksi', 'taruhan online', 'telanjang', 'telentang', 'terangsang', 'teroris', 'terorisme', 'tes keperawanan', 'test pack', 'testis', 'tiduri', 'tips bercinta', 'tips seks', 'titik rangsang', 'titit', 'toket', 'tolol', 'topless', 'toys', 'ujian', 'ukuran normal penis', 'ukuran penis', 'ukuran penis normal', 'ukuran penis orang indonesia', 'ukuran vagina', 'vagina', 'vagina gatal', 'vagina wanita', 'vakum pembesar penis', 'viagra', 'vibrator', 'video bercinta dengan pasangan', 'video porno', 'video seks', 'virus corona', 'vital', 'wanita telanjang', 'waria', 'woman on top', 'xxx', 'xxxx online'],
            'war_politics': ['ahed tamimi', 'ahok gugat cerai veronica tan', 'aliran sesat', 'anarkis', 'anarkisme suporter sepakbola', 'begal motor', 'bentrok suporter', 'bentrokan', 'bentrokan warga', 'berita hoax', 'capres jokowi', 'capres prabowo', 'fanatik', 'ferdy sambo', 'fpi', 'g30s', 'invasi rusia', 'jemaah ansharut daulah', 'kebohongan ratna sarumpaet', 'kediktatoran arab saudi', 'kekerasan pada wartawan', 'killing', 'kisah mualaf', 'koalisi jokowi', 'koalisi pilpres 2019', 'koalisi prabowo', 'konflik palestina israel', 'konflik palestina-israel', 'konflik rusia ukraina', 'konflik suriah', 'lia eden', 'luwu timur', 'nato', 'penembakan', 'penganiayaan', 'pengawal', 'pengeroyokan', 'penistaan agama', 'perang', 'perang di ukraina', 'perang dunia', 'perang dunia 3', 'perang rusia', 'peristiwa', 'pilpres 2019', 'polisi', 'prabowo subianto', 'prabowo-sandiaga', 'presiden rusia', 'presiden ukraina', 'propaganda rusia', 'ratna sarumpaet', 'rokok elektrik', 'rusia', 'rusia dan ukraina', 'rusia serang ukraina', 'senjata rusia', 'serang ukraina', 'serangan', 'suporter tewas', 'taliban', 'tentara', 'ternyata hoax', 'ujaran kebencian', 'ukraina', 'vladimir putin', 'tni', 'jenderal', 'korupsi', 'politik', 'politikus', 'kpk', 'kkb', 'penjajah', 'berduka'],
            'drugs_tobacco_alcohol': ['adiktif', 'akibat merokok', 'alcohol', 'alkohol', 'artis narkoba', 'asap rokok', 'bahaya berhenti merokok', 'bahaya merokok', 'bahaya narkoba', 'bahaya rokok', 'bahaya rokok elektrik', 'berhenti merokok', 'bnn', 'cancer', 'candy', 'cara berhenti merokok', 'cbd', 'ciri ciri pengguna narkoba', 'dampak merokok', 'djarum', 'drugs', 'efek berhenti merokok', 'ganja', 'hash', 'impotensi', 'jantung', 'jenis alkohol', 'jenis alkohol dalam minuman keras', 'jenis jenis narkoba', 'jenis narkotika', 'kanker', 'kartel narkoa', 'kasus narkoba', 'kecanduan', 'kesehatan paru', 'larangan merokok', 'mafia narkoba', 'manfaat berhenti merokok', 'merokok', 'minuman beralkohol', 'minuman keras', 'narkoba', 'narkoba artis', 'obat psikotropika', 'overdosis', 'pelanggaran', 'penyalahgunaan narkoba', 'penyeludupan narkoba', 'perokok', 'pot', 'pppa', 'rehabilitasi narkoba', 'remaja narkoba', 'rokok', 'rokok elektrik', 'ruu minuman beralkohol', 'sabu', 'selebriti narkoba', 'sidang narkoba', 'stroke', 'tablet', 'tembakau', 'tips berhenti merokok'],
            'disaster': ['10 macam pencemaran lingkungan', 'autopsi', 'bahaya pencemaran udara', 'bahaya polusi', 'belasungkawa', 'bencana', 'bencana besar', 'bola', 'bom', 'bom atom', 'bom bali', 'bom bunuh diri', 'bom gereja', 'bom meledak', 'bom nuklir', 'bom panci', 'bom sarinah', 'bom seks', 'bunuh orang', 'cara mencegah global warming', 'cara mencegah pemanasan global', 'cara mengatasi pemanasan global', 'cara mengatasi pemanasan global sebagai pelajar', 'cara mengatasi pencemaran udara', 'climate change', 'contoh pencemaran lingkungan', 'dampak pencemaran lingkungan', 'dampak pencemaran udara', 'darurat bencana', 'dilaporkan tewas', 'dimakamkan', 'dinyatakan meninggal', 'dipastikan tewas', 'ditemukan mati', 'ditemukan tewas', 'efek rumah kaca', 'efek rumah kaca adalah', 'fenomena alam', 'gas', 'gas rumah kaca', 'gempa donggala', 'gempa palu', 'gempa sulawesi tengah', 'global warming', 'global warming adalah', 'hilangkan nyawa', 'hilangnya nyawa', 'identitas korban', 'inalillahi', 'isis', 'jasad', 'jasad korban', 'jasadnya', 'jenasah wanita', 'jenazah', 'jenazah pria', 'jenazah teridentifikasi', 'jenis pencemaran lingkungan', 'kapal tenggelam', 'kapal tenggelam di danau toba', 'kasus penebangan pohon', 'kasus tabrak lari', 'keadaan kritis', 'kecelakaan', 'kecelakaan bus', 'kehilangan darah', 'kehilangan hidupnya', 'kehilangan nyawa', 'kehilangan nyawanya', 'kematian', 'korban', 'korban jiwa', 'korban meninggal', 'korban tewas', 'kota paling berpolusi', 'kota paling berpolusi didunia', 'krisis iklim', 'kualitas udara', 'ledakan bom', 'liga', 'limbah', 'limbah pabrik', 'lion air hilang kontak', 'lion air jatuh', 'lion air jatuh di karawang', 'macam pencemaran lingkungan', 'mati', 'mayat', 'mayat korban', 'meledak', 'memakan nyawa', 'membakar', 'membunuh', 'membunuh istrinya', 'membunuh mereka', 'membunuh suaminya', 'menelan nyawa', 'menemui ajal', 'menewaskan', 'menewaskan orang', 'mengalami koma', 'mengamuk', 'mengancam nyawa', 'menghembuskan nafas terakhir', 'menimbulkan korban', 'meninggal', 'meninggal akibat sakit', 'meninggal dunia', 'menyebabkan kematian', 'meregang nyawa', 'meregggut nyawa', 'merenggut jiwa', 'merenggut nyawa', 'modar', 'nyawa hilang', 'nyawa melayang', 'nyawa tak tertolong', 'orang mati', 'orang tewas', 'pelayat', 'pemakaman', 'pemanasan global', 'pemanasan global adalah', 'pembunuhan', 'pembunuhan sadis', 'pencemaran', 'pencemaran air', 'pencemaran air bersih', 'pencemaran air laut', 'pencemaran limbah', 'pencemaran lingkungan', 'pencemaran minyak', 'pencemaran sungai', 'pencemaran sungai brantas', 'pencemaran udara', 'penemuan mayat', 'pengertian efek rumah kaca', 'pengertian efek rumah kaca menurut para ahli', 'pengertian pemanasan global', 'penyakit polusi udara', 'penyakit yang disebabkan oleh polusi udara', 'penyebab efek rumah kaca', 'penyebab global warming', 'penyebab kematian', 'penyebab kerusakan lingkungan', 'penyebab pemanasan global', 'penyebab pemanasan global akibat aktivitas manusia', 'penyebab pencemaran air', 'penyebab pencemaran udara', 'penyebab perubahan iklim', 'penyebab perubahan iklim global', 'penyebab polusi udara', 'penyebab terjadinya efek rumah kaca', 'penyebab terjadinya pemanasan global', 'penyebab terjadinya pemanasan global dan efek rumah kaca', 'permintaan maaf', 'pertandingan', 'perubahan iklim', 'perubahan iklim global', 'pesawat hilang kontak', 'pesawat jatuh', 'petugas penyelamat', 'piala dunia', 'pollution', 'polusi', 'polusi jakarta', 'polusi udara', 'polusi udara di jakarta', 'polutan', 'renggut nyawa', 'sampah plastik', 'sepak', 'stadion', 'tak bernyawa', 'tak sadarkan diri', 'telah meninggal', 'telan nyawa', 'terbunuh', 'terkapar', 'teror bom', 'tewas', 'tewaskan', 'tidak bernyawa', 'timnas', 'tim penyelamat', 'trauma', 'tsunami palu', 'tutup usia', 'udara bersih', 'udara jakarta', 'wafat', 'wanita meninggal', 'won'],
            'epidemic_desease': ['corona', 'corona di indonesia', 'covid', 'covid 19', 'covid-19', 'doctor', 'dokter', 'health', 'healthy', 'hospital', 'infeksi saluran kencing', 'insomnia dan tidur', 'kematian', 'kematian virus', 'kematian wabah', 'kesehatan', 'korban terinfeksi', 'korona', 'obesitas', 'odp', 'osteoporosis', 'pdp', 'penyakit', 'positif korona', 'rsud', 'rumah sakit', 'sakit pernapasan', 'sedih', 'sehat', 'sesak', 'terinfeksi virus corona', 'terjangkit covid-19', 'terkena', 'virus', 'virus corona', 'virus korona', 'virus menyerang', 'virus-corona', 'wabah', 'wabah corona'],
            'religion': ['15lam', 'abu bakar al-baghdadi', 'al quran', 'al-quran', 'buda', 'budha', 'ibrahim al-hashimi al-qurayshi,', 'injil', 'isl4m', 'islam', 'ismi aisyah', 'jimat', 'kafir', 'katolik', 'muh4mmad', 'muhammad', 'muhammad saw', 'nabi', 'yesus'],
            'gambling': ['agen poker', 'agen sbobet', 'bonus deposit', 'bonus refferal', 'bonus rollingan', 'cashtree', 'game', 'judi', 'minimal deposit', 'poker', 'poker online'],
            'parenting': ['anak', 'anak artis', 'anak cerdas', 'anak dan balita', 'anak mandiri', 'anak selebritis', 'anak selebritis indonesia', 'arti nama anak', 'arti nama bayi', 'artis bercerai', 'artis hamil', 'asi anak', 'ayah', 'baby', 'baby ameena', 'baby arsy', 'baby bump', 'baby bump artis', 'baby dan balita', 'baby face', 'baby gempi', 'baby leslar', 'baby shower', 'baby shower selebritis', 'baby sitter', 'baby spa', 'baby walker', 'babymoon', 'babymoon artis', 'babyologist', 'baru lahir', 'bayi', 'bayi 6 bulan', 'bayi artis', 'bayi dan anak', 'bayi kembar', 'bayi muntah', 'bayi pilek', 'bayi seleb', 'bayi selebritis', 'bayi selebritis indonesia', 'bayi tabung', 'camilan bayi', 'cara mengeluarkan dahak pada bayi', 'child', 'children', 'family', 'father', 'gaya baby', 'ibu', 'ibu anak', 'induk', 'jadwal makan bayi', 'jam tidur bayi', 'kehamilan', 'keibuan', 'kelahiran anak', 'kelahiran bayi', 'keluarga', 'keluarga artis', 'keluarga bahagia', 'keluarga dan anak', 'keluarga harmonis', 'keluarga penjabat', 'keluarga seleb', 'kesehatan bayi', 'kesehatan bayi dan balita', 'kesehatan keluarga', 'kid', 'masalah anak', 'mendidik anak', 'menyusui', 'mother', 'mpasi', 'nama anak', 'nama anak islam', 'nama anak kristen', 'nama anak laki laki', 'nama anak perempuan', 'nama anak sansekerta', 'nama bayi', 'nama bayi islam', 'nama bayi kristen', 'nama bayi laki laki', 'nama bayi laki laki unik', 'nama bayi perempuan', 'nama bayi perempuan unik', 'nama bayi sansekerta', 'newborn', 'orang tua', 'parent', 'parenting', 'pendidikan', 'penyakit bayi', 'penyebab bayi muntah', 'perawatan bayi', 'perceraian artis', 'perkembangan janin', 'perlengkapan bayi', 'pertumbuhan anak', 'pijat bayi', 'remaja', 'resep mpasi', 'rumah tangga', 'school', 'sekolah', 'spa baby', 'tips parenting', 'ucapan kelahiran', 'youth']
        };

        siteContentText = [...new Set(pageKeyword.concat(pageTitles, ' ', pageDesc, ' ', pageTags, ' ', siteContentText))].join(" ");
        if (loggerCookies) {
            console.log("siteContentText : ", siteContentText);
        }

        /*Iterate for all keyword list category to find match word*/
        for (var bsKey in BS_KEYWORD_LIST) {
            var subKeywordList = BS_KEYWORD_LIST[bsKey];
            if (subKeywordList.length > 0) {
                if (matchString = new RegExp("\\b(" + subKeywordList.join("|") + ")\\b", "ig").exec(siteContentText)) {
                    bsKeyword.push(bsKey);
                }
            }
        }
        if (loggerCookies) {
            console.log("bsKeyword : ", bsKeyword);
        }

        if (bsKeyword.length > 0) {
            googletag.pubads().setTargeting("bsKeyword", bsKeyword);
            /*Temporary preserve the previous brand safety targeting*/
            googletag.pubads().setTargeting("isMatcont", isMatcont);
            googletag.pubads().setTargeting("brandsafety", isViolateBrandSafety);
        }

        /*  START TARGETING BLOCK   */
        googletag.pubads().setTargeting("tags", pageTags);
        googletag.pubads().setTargeting("currentUrl", document.URL);
        googletag.pubads().setTargeting("platform", pageKlyObj.platform);
        googletag.pubads().setTargeting("type", pageKlyObj.gtm.type);
        googletag.pubads().setTargeting("pageType", (pageKlyObj.pageType ? pageKlyObj.pageType : 'Maverick'));
        googletag.pubads().setTargeting("channel", pageKlyObj.gtm.subCategory);
        googletag.pubads().setTargeting("audience", typeof(audience = pageKlyObj.gtm.audience && pageKlyObj.gtm.audience.split("|")) === "undefined" ? "false" : audience);
        googletag.pubads().setTargeting("isAdvertorial", typeof(isAdvertorial = pageKlyObj.article && pageKlyObj.article.isAdvertorial.toString()) === "undefined" ? "false" : isAdvertorial);
        googletag.pubads().setTargeting("articleId", pageKlyObj.gtm.articleId.toString());
        googletag.pubads().setTargeting("site", pageKlyObj.site);
        googletag.pubads().setTargeting("age", typeof(age = pageKlyObj.gtm.age) === "undefined" ? "false" : pageKlyObj.gtm.age.toString());
        googletag.pubads().setTargeting("gender", typeof(gender = pageKlyObj.gtm.gender) === "undefined" ? "false" : pageKlyObj.gtm.gender.toString());
        googletag.pubads().setTargeting("subcategory", pageKlyObj.gtm.subCategory);
        /*  END TARGETING BLOCK   */
        /* SET VISITOR ID AS PUBLISHER PROVIDED ID - START*/
        var cVisitorId = (visId = document.cookie.split("ahoy_visitor")[1]) ? visId.split(';')[0].replace(/[^a-zA-Z0-9]/ig, '') : false;
        if (cVisitorId) {
            googletag.pubads().setPublisherProvidedId(cVisitorId + 'kly');
        }
        /* SET VISITOR ID AS PUBLISHER PROVIDED ID - END*/
    }

    function observeSection() {
        // Select the node that will be observed for mutations
        const targetNode = document.querySelector(".main-body");

        // Options for the observer (which mutations to observe)
        const config = {
            childList: true
        };
        // Callback function to execute when mutations are observed
        const callback = (mutationList, observer) => {
            for (const mutation of mutationList) {
                if (mutation.type === "childList") {
                    let section = document.querySelectorAll(".main-body section.snap-always");
                    let pageCount = section.length;

                    if (mutation.nextSibling && ["feed-paging", "mvk-feed-early-ajax"].indexOf(mutation.nextSibling.id) > -1) {
                        mavDefineFeedAdsHatches();
                    }

                }

            }
        };

        // Create an observer instance linked to the callback function
        const observer = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    }

    function mavDefineFeedAdsHatches() {
        const config = adsConfig['feeds']; /* get only feeds ads config */
        const hatches = document.querySelectorAll(".main-body section.snap-always");

        let splitKey = 0;
        let container = [];

        for (var key in hatches) {
            if (hatches[key].id === "mvk-feed-early-ajax") {
                splitKey = key;
                break;
            }
        }

        if (+splitKey > 1) {
            container = Array.prototype.slice.call(hatches, 0, +splitKey);
        } else {
            container = hatches;
        }

        var oId = 0,
            screen = 1,
            injectId = 0, // find last injected ads slot id 
            length = container.length,
            injectedElement = {};

        while (length--) { // find last injected ads slot id 
            if (length < 0) {
                length = 1;
            }
            if (container[length].id.match(/gpt-ad-div-section-/ig)) {
                injectId = length;
                length = 1;
            }
        }

        if (injectId > 0) {
            container = Array.prototype.slice.call(hatches, injectId + 1, hatches.length);
        }

        Array.prototype.forEach.call(container, (v, k) => {
            if (!((k + 1) % multiplied)) { /* inside target injected screen */
                let injectedElement = v.nextElementSibling;
                let i = 0;
                for (const prop in config) {
                    if (config.hasOwnProperty(prop)) {
                        if (!config[prop]['slotCreated']) { // create and defined slot
                            MavCreateContainerAds(prop, injectedElement);
                            definedFeedSlot(prop, (screen === 1)); // defined and render first loads ads based on order
                            config[prop]['slotCreated'] = true;
                            i++;
                        }
                        if (i == order[oId]) { /* break if order list equal to config chunk */
                            let next = oId + 1; // next siblings
                            next = !order[next] ? order[0] : order[next];
                            nextAdsId = minusOneConfig.slice(0, next);
                            for (let shift = 0; shift < next; shift++) { // shift key config based on order
                                minusOneConfig.shift();
                            }
                            injectedElement.dataset.nextId = nextAdsId.join("|") // inject next id dataset to next siblings element, for rendering flags
                            break;
                        };
                    }
                }

                oId++;
                screen++;
            }
            lastPageOrder = oId;
            oId = (oId == order.length) ? 0 : oId;
        })
    }

    function MavCreateContainerAds(index, currentEl) {

        targetElID = "gpt-ad-div-section-" + index;
        targetAdsID = targetElID + "-placeholder";
        var targetEl = document.getElementById(targetElID);
        if (typeof(targetEl) == 'undefined' || targetEl == null) {
            //creating ads container element
            let div = document.createElement('section');
            div.id = targetElID;
            div.dataset.section = "IAB";
            div.dataset.theme = "ads";
            div.dataset.adsPosition = Math.floor(index / multiplied);
            div.className = 'section snap-always snap-start w-full h-full shrink-0 transition bg-white text-white ads-section';
            div.innerHTML = `
            <div id="` + targetElID + `-loader" class="hidden" style="width:24px;height:24px;position:fixed;top: 10px;z-index: 1;left: 50%;">
                <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve">
                        <path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        <animateTransform 
                            attributeName="transform" 
                            attributeType="XML" 
                            type="rotate"
                            dur="1s" 
                            from="0 50 50"
                            to="360 50 50" 
                            repeatCount="indefinite" />
                    </path>
                </svg>
            </div>
            <sp-${targetElID}></sp-${targetElID}>
            <div id="` + targetAdsID + `" class="placeholder justify-center items-center section-body flex flex-col h-full relative sasa"></div>`;

            //insert ads section container after [n]index and push it's element inside IntersectionObserver event listener
            if (currentEl) {
                if (currentEl.nextElementSibling && currentEl.nextElementSibling.id === "mvk-feed-early-ajax") {
                    currentEl.nextElementSibling.insertAdjacentElement("beforebegin", div);
                } else {
                    currentEl.insertAdjacentElement("beforebegin", div);
                }
                MavCreatingSponsoredElement(targetElID);
                setTimeout(() => {
                    window.io.observe(div);
                }, 100);
            }
        }

    }


    function MavMakingAdsRequest(currentEl, i) {
        if (isFirstLoad) {
            document.querySelector('.main-body') && document.querySelector('.main-body').addEventListener('scroll', mainBodyScroller)
            mavDefineFeedAdsHatches();
            observeSection();
            isFirstLoad = false;
        }

        googletag.cmd.push(function() {
            const config = adsConfig['feeds'];
            var nextId = currentEl.dataset.nextId,
                nextIds = [],
                adsContainer = currentEl.id.match(/gpt-ad-div-section/ig);

            if (nextId) {
                nextIds = currentEl.dataset.nextId.split("|")
                for (nextIndex of nextIds) {
                    nextIndex = +nextIndex;
                    if (config[nextIndex]) {
                        if (!config[nextIndex]['requested']) {
                            if (document.querySelector(`#${config[nextIndex]['placeholder']}`)) {
                                googletag.pubads().refresh([config[nextIndex]['slot']]);
                                config[nextIndex]['requested'] = true;
                            }
                        }
                    }
                }
            }
        });

    }

    function gfnFilterString(str, delimiter) {
        let arr = str.replace(/[^A-Za-z0-9]+/ig, " ").trim().split(delimiter).map(function(t) {
            return t.trim().toLowerCase()
        });
        return [...new Set(arr)];
    }

    function pageDocumentMeta(metaName) {
        var metaResult = '';
        var metas = document.getElementsByTagName('meta');
        if (metas) {
            for (var x = 0, y = metas.length; x < y; x++) {
                if (metas[x].name.toLowerCase() == metaName) {
                    metaResult += metas[x].content;
                }
            }
        }
        return gfnFilterString(metaResult != '' ? metaResult : '', ' ');
    }

    function mainBodyScroller() {
        var adsRMBVisible = document.querySelector('[data-section="RMB-shrink"].is-visible'),
            mainBody = document.querySelector('.main-body'),
            getLog = document.cookie.split("gamlibLogger")[1] ? document.cookie.split("gamlibLogger")[1] : ';',
            loggerCookies = getLog.split(';')[0].match(/(true)/ig) !== null ? true : false;

        if (adsRMBVisible) {
            if (mainBody.scrollTop > (adsRMBVisible.offsetTop + 5)) {
                adsRMBVisible.classList.add('shrink')
            } else {
                adsRMBVisible.classList.remove('shrink')
            }
        }
    }

    function MavCreatingSponsoredElement(containerId) {
        class SponsoredInfo extends HTMLElement {
            constructor() {
                // Always call super first in constructor
                super();

                // write element functionality in here
                const shadow = this.attachShadow({
                    mode: "open"
                });

                const parser = new DOMParser();
                const learnmoreUrl = this.getAttribute("data-url");
                const wrapper = document.createElement("div");
                wrapper.innerHTML = `<span class="z-50 absolute bg-white flex flex-row h-5 items-center justify-around overflow-hidden right-0 rounded-2xl sponsored-wrapper w-4 pl-1 mt-3 mr-5 transition-opacity duration-500 ease-in-out opacity-0 cursor-pointer"><a href="${learnmoreUrl}" class="capitalize text-blue-500 text-xs pl-1 hidden txtlearnmore" style="flex-shrink:0" rel="nofollow" target="_blank">Learn More</a><div class="flex flex-row items-center wrapper overflow-hidden"><i class="flex flex-row items-center w-3 h-3 btn-expand" data-expand="noexpand"></i><span class="left-2 mr-2 ml-2 text-xs" style="color:#000">Sponsored</span><i class="flex flex-row items-center w-3 h-3 opacity-50 btn-close"></i></div></span>`;
                const svgExpand = `<svg width="12" height="12" viewBox="0 0 0.72 0.72" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><path fill="none" d="M0 0h.72v.72H0V0z" data-name="invisible box"/><path d="M.51.09H.501l-.45.132a.03.03 0 0 0-.021.03v.135a.033.033 0 0 0 .021.03l.45.132H.51a.03.03 0 0 0 .03-.03V.12A.03.03 0 0 0 .51.09ZM.287.513.126.465l.019.126A.043.043 0 0 0 .188.63h.068A.042.042 0 0 0 .288.615.051.051 0 0 0 .3.576ZM.6.23A.022.022 0 0 0 .613.227l.06-.03A.03.03 0 0 0 .646.143l-.06.03a.03.03 0 0 0-.013.041A.032.032 0 0 0 .6.231Zm.073.214-.06-.03a.032.032 0 0 0-.041.012.03.03 0 0 0 .013.041l.06.03A.022.022 0 0 0 .658.5.032.032 0 0 0 .685.483.028.028 0 0 0 .672.444ZM.6.349h.06a.03.03 0 0 0 0-.06H.6a.03.03 0 0 0 0 .06Z" data-name="Q3 icons"/></g></svg>`;
                const svgClose = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" style="enable-background:new 0 0 512 512" xml:space="preserve" width="12" height="12"><path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0zm1.667 8.576L6 6.909 4.333 8.576l-.909-.909L5.091 6 3.424 4.333l.909-.909L6 5.091l1.667-1.667.909.909L6.909 6l1.667 1.667-.909.909z"/></svg>`;

                const spExp = parser.parseFromString(svgExpand, "image/svg+xml");
                const spClose = parser.parseFromString(svgClose, "image/svg+xml");
                const errExp = spExp.querySelector('parsererror');
                const errClose = spExp.querySelector('parsererror');

                (!errExp) ? wrapper.querySelector("div.wrapper > i.btn-expand").insertAdjacentElement("afterbegin", spExp.firstChild): '';
                (!errClose) ? wrapper.querySelector("div.wrapper > i.btn-close").insertAdjacentElement("afterbegin", spClose.firstChild): '';

                let style = document.createElement("style");
                style.textContent = `:host{font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}.ease-in-out,.transition-opacity{transition-timing-function:cubic-bezier(0.4,0,0.2,1)}.z-50{z-index:50}.absolute{position:absolute}.bg-white{--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity))}.flex{display:flex}.flex-row{flex-direction:row}.h-5{height:1.25rem}.items-center{align-items:center}.justify-around{justify-content:space-around}.overflow-hidden{overflow:hidden}.right-0{right:0}.rounded-2xl{border-radius:1rem}.w-5{width:1.25rem}.pl-1{padding-left:.25rem}.mt-3{margin-top:.75rem}.mr-5{margin-right:1.25rem}.transition-opacity{transition-property:opacity;transition-duration:150ms}.duration-500{transition-duration:.5s}.opacity-0{opacity:0}.cursor-pointer{cursor:pointer}.capitalize{text-transform:capitalize}.text-blue-500{--tw-text-opacity:1;color:rgba(59,130,246,var(--tw-text-opacity))}.text-xs{font-size:.75rem;line-height:1rem}.hidden{display:none}.w-3{width:.75rem}.h-3{height:.75rem}.left-2{left:.5rem}.mr-2{margin-right:.5rem}.ml-2{margin-left:.5rem}.w-4{width:1rem}.opacity-50 {opacity: 0.5;}`;

                shadow.appendChild(style);
                shadow.appendChild(wrapper.querySelector("span"));
                this.btnExpand = this.shadowRoot.querySelector(".btn-expand")
                this.sponsoredWrapper = this.shadowRoot.querySelector(".sponsored-wrapper")
                this.learnmore = this.shadowRoot.querySelector(".txtlearnmore")
                this.btnClose = this.shadowRoot.querySelector(".btn-close")
                this.mavButtonSponsored();
            }

            mavButtonSponsored() {
                const expand = () => {
                    var status = this.btnExpand.getAttribute("data-expand")
                    if (status == "noexpand") {
                        this.btnExpand.setAttribute("data-expand", "expand1")
                        this.sponsoredWrapper.style.width = "110px"
                    }
                };
                const closeExpand = () => {
                    this.btnExpand.setAttribute("data-expand", "noexpand")
                    this.sponsoredWrapper.style.width = ""
                    this.learnmore.classList.add("hidden")
                };
                this.btnClose.addEventListener("click", closeExpand)
                this.btnExpand.addEventListener("click", expand)

            }


        }

        customElements.define(`sp-${containerId}`, SponsoredInfo);
        const intersectionCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    var elem = entry.target;
                    var countSPRender = 0,
                        isSPRendered = setInterval(function() {
                            let sp = elem;
                            if (sp) {
                                setTimeout(function() {
                                    if (sp.shadowRoot) {
                                        sp.shadowRoot.querySelector("span").classList.remove("opacity-0");
                                        sp.shadowRoot.querySelector("span").classList.remove("transition-opacity");
                                        sp.shadowRoot.querySelector("span").classList.add("transition-width");
                                        observer.unobserve(target)
                                    }
                                }.bind(observer), 300);
                                clearInterval(isSPRendered);
                            }
                            if (countSPRender > 100) {
                                clearInterval(isSPRendered);
                            }
                            countSPRender++;
                        }.bind(observer), 200);
                }
            });
        };
        let target = document.querySelector(`sp-${containerId}`);
        let observer = new IntersectionObserver(intersectionCallback, {
            rootMargin: "0px 0px -200px 0px",
            threshold: 1.0,
        });
        observer.observe(target);
    }
    /*END SCRIPT GPT TAG FOR ADS*/