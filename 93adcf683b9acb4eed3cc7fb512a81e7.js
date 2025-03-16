/*
* ì¼ë° íì´ì§ ê´ê³  ë¡ë
* ì ê· ê´ê³  íë«í¼ ì´íë¡  ì´ê±° ì¬ì©íë©´ ë  ë¯
* ë©ì¸ ë° í¥í ë¤ë¥¸ ë°°ë ë±ë±
* ìí¤ ì°¸ê³ 
* http://wiki.afreecatv.com/wiki/%EC%8B%A0%EA%B7%9C_%EA%B4%91%EA%B3%A0_%ED%94%8C%EB%9E%AB%ED%8F%BC
* http://wiki.afreecatv.com/wiki/%EC%8B%A0%EA%B7%9C%EA%B4%91%EA%B3%A0%ED%94%8C%EB%9E%AB%ED%8F%BC_%EC%9D%BC%EB%B0%98_%EB%B0%B0%EB%84%88
*
* 23/01 - ìµì´ BannerLoader ë§ë¤ ëë ë°°ë íê°ì ëí´ìë§ ë¡ë ë° ì¬ì©ëëë¡ ê³ ë ¤ëìëë°
* í¥í í íì´ì§ ììì ì¬ë¬ ë°°ëë¥¼ ë§ë¤ ì ìì´ì¼ í¨ì ë°ë¼ì êµ¬ì¡° ë³ê²½ì´ íìíê³ 
* í¤ìë ê²ì ê´ê³ ë¡ ì¸í´ ê´ê³  ê³µíµ íë¼ë¯¸í° ë¶ë¶ì´ AdParameter.js ë¡ ë¶ë¦¬ë¨ì ë°ë¼ ìì íê² ëìë¤.
*
* * */

var BannerLoader = function () {
    //ì´ê² ì¹í©ê°ì ë²ë¤ë§ì íëê² ìëë¼ ë ì§ë¥¼ ëì ì¼ë¡ ë°ê¿ ì¤ ìê° ìì
    //ìì  ì ìì  ë ì§ë¡ ë³ê²½í´ì ë°°í¬íì¸ì¬
    this.VERSION = '202012081100';  //ëëµ y-m-d-time
    this.AD_SERVER_URL = 'https://deapi.afreecatv.com/api/v1/recommend'; //getTagUrl í¨ì ì¬ì©íì¸ì
    this.AD_DEV_SERVER_URL = 'https://deapidev.afreecatv.com/api/v1/recommend';

    this.PUBLISHER = 'AFREECA';

    //ê´ê³  íì
    this.AD_TYPE = {
        MAIN_BANNER: 'MAIN_BANNER', //ë©ì¸ ìë¨ ë°°ë
        SUB_BANNER: 'SUB_BANNER', //ì¹´íê³ ë¦¬ ì¤ë¨ ë°°ë
        SPORTS_BANNER: 'SPORTS_BANNER', //ì¤í¬ì¸  ìë¨ ë°°ë
        OLYMPIC_BANNER: 'OLYMPIC_BANNER', //ëì¿ì¬ë¦¼í½ ìë¨ ë°°ë
        OLYMPIC_WING_BANNER: 'OLYMPIC_WING_BANNER', //ëì¿ì¬ë¦¼í½ ì ë°°ë
        WORLDCUP_BANNER: 'WORLDCUP_BANNER', //2022 ì¹´ë¥´í ìëì»µ
        WORLDCUP_WING_BANNER: 'WORLDCUP_WING_BANNER', //2022 ì¹´ë¥´í ìëì»µ ì ë°°ë

        WBC_BANNER: 'WBC_BANNER',
        WBC_WING_BANNER: 'WBC_WING_BANNER',

        ESPORTS_MAIN_BANNER : 'ESPORTS_MAIN_BANNER',  // eì¤í¬ì¸  MAIN ë°°ë
        ESPORTS_SUB_BANNER : 'ESPORTS_SUB_BANNER',    // eì¤í¬ì¸  SUB ë°°ë
        ESPORTS_BANNER : 'ESPORTS_BANNER',    // eì¤í¬ì¸  Mobile ë°°ë

        MAIN_COUPLE_LNB_BANNER: 'MAIN_COUPLE_LNB_BANNER', //ë©ì¸íì´ì§ ì»¤í LNB íë¨ ë°°ë
        MAIN_COUPLE_GNB_BANNER: 'MAIN_COUPLE_GNB_BANNER', //ë©ì¸íì´ì§ ì»¤í GNB ê²ìì°½ ë°°ë

        ASIANGAME_BANNER: 'ASIANGAME_BANNER', //ìììê²ì ë©ì¸ ë°°ë
        ASIANGAME_WING_BANNER: 'ASIANGAME_WING_BANNER' //ìììê²ì ì ë°°ë
    };

    //ê´ê³  ìëµì¼ë¡ ì¨ ë°°ë
    this.BANNER_TYPE = {
        PC_IMAGE_BANNER: 'PC_IMAGE_BANNER',
        PC_VIDEO_BANNER: 'PC_VIDEO_BANNER',
        PC_728_90_BANNER: 'PC_728_90_BANNER', //PC_IMAGE_BANNER_728_90 ë¡ ë³ê²½ë  ê²ì
        PC_970_225_BANNER: 'PC_970_225_BANNER', //ì¬ë¦¼í½ ë©ì¸ ë°°ë
        PC_164_362_BANNER: 'PC_164_362_BANNER', //ì¬ë¦¼í½ ì ë°°ë
        MOBILE_640_100_BANNER: 'MOBILE_640_100_BANNER',
        MOBILE_640_150_BANNER: 'MOBILE_640_150_BANNER',
        MOBILE_IMAGE_BANNER : 'MOBILE_IMAGE_BANNER',
        MOBILE_VIDEO_BANNER : 'MOBILE_VIDEO_BANNER',
        PC_SUB_BANNER_EXPANDED_VIDEO: 'PC_SUB_BANNER_EXPANDED_VIDEO',
        PC_SUB_BANNER_EXPANDED_IMAGE: 'PC_SUB_BANNER_EXPANDED_IMAGE',
        PC_COUPLE_LEFT_BANNER: 'PC_COUPLE_LEFT_BANNER',
        PC_COUPLE_TOP_BANNER: 'PC_COUPLE_TOP_BANNER'
    };

    /*
    * ê´ê³ ê° ê²ì¬ë  ìì¹ ê°
    * */
    this.PLACEMENT = {
        PC: 'PC',
        ANDROID: 'ANDROID',
        IOS: 'IOS'
    };

    this.DEVICES = {
        PC: 'PC',
        MOBILE: 'MOBILE'
    };

    /*
    ê´ê³ ìì ì¬ì©í  PLATFORM ìì
    WINDOWS / MAC / ANDROID / IOS / UNKNOWN
    */
    this.PLATFORM = {
        WINDOWS: 'WINDOWS',
        MAC: 'MAC',
        ANDROID: 'ANDROID',
        IOS: 'IOS',
        UNKNOWN: 'UNKNOWN'
    };

    //WEB, APP ë³ ìì
    //APP ì´ë ê°ë ìê³  íë° ì¸ì¼ì ìì ë¯
    this.APPLICATION = {
        WEB: 'WEB'
        //APP : 'APP'
    };

    //ë¹ ê°ì¸ ê²½ì° UNKNOWN ì¼ë¡ íµì¼
    this.EMPTY_VALUE = 'UNKNOWN';

    this.INSTREAM = 'INSTREAM';
    //ëª¨ì¹ ì ì© - ìë vast ìì ìë ì»¤íë°°ë íì ì´ìëë° í° ë¨ìë¡ ì¬ë¼ìë¤ ê·¼ë° ì¬ì©ì ê°ì
    this.COMPANION = 'COMPANION';
    this.SDK = 'SDK';

    //ICF : 'iCF', //ë´ë¶ ê´ê³  - ì ê· ê´ê³  íë«í¼ìì í¬ì¤í¸ë¡¤ë ë³ê²½ëë©´ì ì´ì ì¼ ì ê±°ë¨ !! ì¼í¸
    this.VAST = 'vast'; //ì´ê±° ì ê·ê´ê³  ìëµìì ìë¬¸ìë¡ ìì ìë¬¸ìë¡ ë³ê²½í¨
    //NETWORK : 'NETWORK', ë¤í¸ìí¬ ê´ê³ ì¬ë vast ë¥¼ ì£¼ê¸°ëë¬¸ì ì´ì  íìë ìê³ , êµ¬ë¶ì´ ìë¨
    this.ERROR = 'ERROR'; //ìëª»ë ê´ê³ 

    //sdk í
    this.GOOGLE = 'google';

    //ê´ê³  ìëµ ad_network_number_sdk ê³¼ ë§¤ì¹­ëë ê°
    //ì sdkí
    this.SDK_AD_NUMBER = {
        0: 'google'
    };

    this.currentAdType = '';

    //ê´ê³  ì¸í ë¸ì¶ ê´ë ¨ ì¸ë¶ ê°ì´ íìí ê²½ì° object ë¥¼ íë¼ë¯¸í°ë¡ ì¬ì©íê³  íìì ìëì ê°ì.
    this.setting = {
        parentId: null, // ê´ê³ ê° ë¤ì´ê° ë¶ëª¨ ìë¦¬ë¨¼í¸ ID
        callback: null, //ì½ë°±
        category: null, //ë ì¹´íê³ ë¦¬ : hash ëª(game, bora), ìì¸ ì¹´íê³ ë¦¬ : ë°©ì¡ ì¹´íê³ ë¦¬ ëë²(L00040003, L00570003)
        bindTarget: null //ì½ë°± í¸ì¶ ì bind this ê° íìíë¤ë©´ ì¬ê¸° ë£ì´ì¤ì¼í¨
    };

    this.advertiseInfo = undefined;

    this.cssDomain = typeof RES_AFREECA_NONE_SCHEME !== 'undefined' ?
        RES_AFREECA_NONE_SCHEME : '//res.afreecatv.com';

    this.scriptDomain = typeof STATIC_AFREECA_NONE_SCHEME !== 'undefined' ?
        STATIC_AFREECA_NONE_SCHEME : '//static.afreecatv.com';

    this._assignSetting = function (setting) {
        var assignSetting = {};
        for (let property in this.setting) {
            if(this.setting.hasOwnProperty(property)) {
                if(typeof setting !== "undefined") {
                    assignSetting[property] = setting[property];
                } else {
                    assignSetting[property] = this.setting[property];
                }
            }
        }
        return assignSetting;
    };

    //!!!!!ì¸ë¶ìì ë°°ë ë¡ë ì ìë í¨ìë¤ ì¬ì©!!!!!
    //ë©ì¸ ë°°ë ë¡ë
    //íì¬ë ë©ì¸ìì í¸ì¶ ì settingì´ ìëë° íìíë©´ ëì¤ì ì¶ê°íë©´ ë¨.
    this.loadMainBanner = function () {
        this.currentAdType = this.AD_TYPE.MAIN_BANNER;
        //setting.parentId = 'list-section';
        this._loadAd({
            parentId: 'list-section', //ë§¤ì¸ ë°°ëë ê³ ì ë ìì­ì ì¶ë ¥íë©´ ë¨.
            btype : 'MAIN'
        });
    };

    this.loadCategorySubBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.SUB_BANNER;
        this._loadAd(setting);
    };

    this.loadSportsBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.SPORTS_BANNER;
        this._loadAd(setting);
    };

    this.loadTokyoOlympicMainBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.OLYMPIC_BANNER;
        this._loadAd(setting);
    };

    this.loadTokyoOlympicWingBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.OLYMPIC_WING_BANNER;
        this._loadAd(setting);
    };

    this.loadWorldCupBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.WORLDCUP_BANNER;
        this._loadAd(setting);
    };

    this.loadWorldCupWingBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.WORLDCUP_WING_BANNER;
        this._loadAd(setting);
    };

    this.loadWbcBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.WBC_BANNER;
        this._loadAd(setting);
    };

    this.loadWbcWingBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.WBC_WING_BANNER;
        if(this.advertiseInfo) {            
            this.setting = this._assignSetting(setting);
            this.merge(this.advertiseInfo);
        }
        else {
            this._loadAd(setting);
        }        
    };

    this.loadEsportsMainBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.ESPORTS_MAIN_BANNER;
        this._loadAd(setting);
    };
    this.loadEsportsSubBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.ESPORTS_SUB_BANNER;
        this._loadAd(setting);
    };
    this.loadEsportsMobileBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.ESPORTS_BANNER;
        this._loadAd(setting);
    };

    this.loadMainCoupleLnbBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.MAIN_COUPLE_LNB_BANNER;
        this._loadAd(setting);
    };

    this.loadMainCoupleGnbBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.MAIN_COUPLE_GNB_BANNER;
        this._loadAd(setting);
    };

    this.loadAsianGameMainBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.ASIANGAME_BANNER;
        this._loadAd(setting);
    };

    this.loadAsianGameWingBanner = function (setting) {
        this.currentAdType = this.AD_TYPE.ASIANGAME_WING_BANNER;
        if(this.advertiseInfo) {
            this.setting = this._assignSetting(setting);
            this.merge(this.advertiseInfo);
        }
        else {
            this._loadAd(setting);
        }
    };

    //!!!!!!!!!!! ìë í¨ìë¤ì ë´ë¶ì²ë¦¬ì© !!!!!!!!!!!

    //ë´ë¶ìì ê³µíµì¼ë¡ ì¬ì©í  í¨ì
    this._loadAd = async function (setting) {
        if(typeof AdParameter === 'undefined') {
            await this.loadScript(this.scriptDomain + '/asset/service/da/AdParameter.js');
        }
        //setting ê° ì¸í í´ì¤ì¼í¨.
        this.setting = this._assignSetting(setting);
        if(!this.getCookie('_au')) {
            await new Promise( resolve => {
                setTimeout(resolve, 1500);
            });
        }

        this._requestAdvertise();
    };

    this._requestAdvertise = function () {
        if(this.currentAdType) {
            if(Object.keys(this.AD_TYPE).indexOf(this.currentAdType) !== -1) {
                this._sendRequest(this.getTagURL(), function (response) {
                    this.merge(JSON.parse(response));
                }.bind(this));
            }
        }
    };

    this.merge = function (adInfo) {
        //ê¸°ë³¸ ìë¬ê³  ê° ìì­ìì íìì ë§ê² ë³ê²½í´ì¤
        this.szType = this.ERROR;

        this.advertiseInfo = adInfo;

        if(adInfo.exist && adInfo.creatives[0]) {
            var bannerInfo = adInfo.creatives[0];

            let imageBanner = [this.BANNER_TYPE.PC_IMAGE_BANNER,
                this.BANNER_TYPE.PC_VIDEO_BANNER,
                this.BANNER_TYPE.PC_728_90_BANNER,
                this.BANNER_TYPE.MOBILE_640_100_BANNER,
                this.BANNER_TYPE.PC_970_225_BANNER,
                this.BANNER_TYPE.PC_164_362_BANNER,
                this.BANNER_TYPE.MOBILE_640_150_BANNER,
                this.BANNER_TYPE.PC_SUB_BANNER_EXPANDED_VIDEO,
                this.BANNER_TYPE.PC_SUB_BANNER_EXPANDED_IMAGE,
                this.BANNER_TYPE.MOBILE_IMAGE_BANNER,
                this.BANNER_TYPE.PC_COUPLE_TOP_BANNER,
                this.BANNER_TYPE.PC_COUPLE_LEFT_BANNER
            ];

            if(imageBanner.indexOf(adInfo.type) !== -1) {
                //console.log(bannerInfo);

                /* ìì
                    <div class="Advertising_Output_Area" style="background: #fcb51f;">
                    <div class="contents">
                    <img src="http://res.afreecatv.com/images/afmain/ad_output.jpg" title="ê´ê³ ì´ë¯¸ì§">
                    <div class="player_area"> </div>
                    </div>
                    <a href="#n" class="close">ë«ê¸°</a>
                    </div>
                */

                var bannerElement = this.getBannerElement(adInfo.type);
                if(bannerInfo.video_placement === 'LEFT') {
                    bannerElement.classList.add("a_d_left");
                }
                //PC_SUB_BANNER_EXPANDED_VIDEO
                if(adInfo.type === 'PC_SUB_BANNER_EXPANDED_VIDEO') {
                    bannerElement.classList.add("vodType");
                }

                //background ì¶ê°ìí  íìë¤
                let nonBackgroundColor = ['OLYMPIC_WING_BANNER', 
                    'WORLDCUP_WING_BANNER', 'WBC_WING_BANNER',
                    'MAIN_COUPLE_LNB_BANNER', 'MAIN_COUPLE_GNB_BANNER'
                ];

                //nonBackgroundColor ë°°ì´ì í¬í¨ ìëì´ìì¼ë©´ background ì¤íì¼ ì¶ê°
                //background ê°ì ìë´ë ¤ ì£¼ë©´ ì´ ì½ëë ë±í íììì§ë§, ê³ì ë´ë ¤ì¤.....
                if ((nonBackgroundColor.find(type => this.currentAdType === type) === undefined) && bannerInfo.background_color) {
                        bannerElement.style.background = bannerInfo.background_color;
                }

                //var bannerImage = bannerElement.getElementsByTagName('img')[0];
                var bannerImage = document.createElement('img');
                if(adInfo.type === this.BANNER_TYPE.PC_SUB_BANNER_EXPANDED_VIDEO || adInfo.type === this.BANNER_TYPE.PC_SUB_BANNER_EXPANDED_IMAGE) {
                    var expandImage = document.createElement('img');
                    expandImage.setAttribute('src', bannerInfo.expanded_image_url);
                    expandImage.addEventListener('load', function (event) {
                        var bannerElementClickArea = bannerElement.getElementsByClassName('link')[0];
                        if(bannerElementClickArea) {
                            bannerElementClickArea.addEventListener('click', function (event) {
                                this.sendTracking(bannerInfo.click_urls);
                                var linkTarget = '_blank';
                                window.open(bannerInfo.landing_url, linkTarget);
                            }.bind(this));
                        }
                        var bannerElementClickExpandArea = bannerElement.getElementsByClassName('link')[1];
                        if(bannerElementClickExpandArea) {
                            bannerElementClickExpandArea.addEventListener('click', function (event) {
                                this.sendTracking(bannerInfo.click_urls);
                                var linkTarget = '_blank';
                                window.open(bannerInfo.landing_url, linkTarget);
                            }.bind(this));
                        }
                    }.bind(this));
                    var bannerImageParent = bannerElement.getElementsByClassName('expandImg')[0];
                    if(bannerImageParent) {
                        bannerImageParent.getElementsByClassName('img')[0].appendChild(expandImage);
                        if(adInfo.type === this.BANNER_TYPE.PC_SUB_BANNER_EXPANDED_VIDEO) {
                            var expandPlayer = this.getSubAdPlayerElement();
                            bannerImageParent.appendChild(expandPlayer);
                        }
                    }
                }
                //var bannerImage = document.createElement('img');

                if(bannerImage) {
                    bannerImage.setAttribute('src', bannerInfo.image_url);
                    bannerImage.addEventListener('load', function (event) {
                        bannerElement.style.display = 'block';
                        this.sendTracking(bannerInfo.impression_urls);

                        var bannerElementClickArea = bannerElement.getElementsByClassName('click_area')[0];

                        if(!bannerElementClickArea) {
                            bannerElementClickArea = bannerElement.className.indexOf('click_area') !== -1 ?
                                bannerElement : bannerElementClickArea;
                        }

                        if(bannerElementClickArea) {
                            bannerElementClickArea.addEventListener('click', function (event) {
                                this.sendTracking(bannerInfo.click_urls);
                                /*ìëì ê°ì´ open_in_extenral_browser ê°ì ë°ë¼ ìì°½ì¸ì§ ì¤í´ì¸ì§ ì íëê² ì ìì¸ë°
                                //var linkTarget = bannerInfo.open_in_external_browser === 1 '_blank' : 'afreeca://';
                                pcìì ì¤í´ì ì¬ì©í  ì¼ì´ ìì´ ìê³ , ê´ê³  ìëµì ê°ì´ ìëª»ë¤ì´ì¬ê¹ë´ ê·¸ë¥ ìì íê² _blank ë¡ ê³ ì 
                                ëì¤ì ëª¨ë°ì¼ìì ì¬ì©í´ì¼íë©´ ìì²ë¼ íë©´ ë¨
                                */
                                var linkTarget = '_blank';
                                //window.open(bannerInfo.landing_url, linkTarget);

                                if (typeof afreeca != 'undefined' && typeof afreeca.link != 'undefined' && afreeca.link.isWebview()) {
                                    //afreeca.link.goInAppEtc(bannerInfo.landing_url);  // internal browser
                                    afreeca.link.browser(bannerInfo.landing_url);  // external browser
                                } else {
                                    window.open(bannerInfo.landing_url, linkTarget);
                                }
                            }.bind(this));
                        }

                        var bannerElementCloseButton = bannerElement.getElementsByClassName('close')[0];
                        if(bannerElementCloseButton) {
                            bannerElementCloseButton.addEventListener('click', function (event) {
                                //open classì ê±°
                                if(bannerElement.getElementsByClassName('open')[0]) {
                                    bannerElement.classList.remove("open");
                                    bannerElement.getElementsByClassName('open')[0].style.display = 'block';
                                    bannerElementCloseButton.style.display = 'none';
                                    bannerElement.style.background = bannerInfo.background_color; //ìë¸ ì¹´íê³ ë¦¬ ì¶ì ìí ë°°ê²½ì
                                } else {
                                    bannerElement.className += ' off';
                                }

                                if(typeof bannerPlayer != "undefined" && bannerPlayer) {
                                    bannerPlayer.closeAd();
                                }
                                this.sendTracking(bannerInfo.close_url);
                            }.bind(this));
                        }

                        var bannerElementOpenButton = bannerElement.getElementsByClassName('open')[0];

                        if(bannerElementOpenButton) {
                            bannerElementOpenButton.addEventListener('click', function (event) {
                                //open classì ê±°
                                bannerElement.className += ' open';
                                bannerElementCloseButton.style.display = 'block';
                                bannerElementOpenButton.style.display = 'none';
                                bannerElement.style.background = bannerInfo.expanded_background_color; //ìë¸ ì¹´íê³ ë¦¬ íì¥ ìí ë°°ê²½ì

                                if(adInfo.type == this.BANNER_TYPE.PC_SUB_BANNER_EXPANDED_VIDEO){
                                    this.loadVideoBannerPlayer(bannerInfo, bannerElement);
                                }
                            }.bind(this));

                            if(bannerInfo.video_placement) {
                                var align = (bannerInfo.video_placement === 'LEFT' ? 'LEFT' : 'RIGHT').toLowerCase();
                                bannerElement.className += ' ' + align;
                            }

                            var adTime;
                            bannerElementOpenButton.addEventListener('mouseover', function (event) {
                                clearTimeout(adTime);
                                adTime = setTimeout(function () {
                                    bannerElementOpenButton.click();
                                }, 1000);
                            }.bind(this));

                            bannerElementOpenButton.addEventListener('mouseleave', function (event) {
                                clearTimeout(adTime);
                            }.bind(this));
                        }

                        var bannerTitle = bannerElement.getElementsByClassName('title')[0];
                        if (bannerTitle) bannerTitle.innerHTML = bannerInfo.title;
                        
                        var bannerSubTitle = bannerElement.getElementsByClassName('sub_title')[0];
                        if (bannerSubTitle) bannerSubTitle.innerHTML = bannerInfo.sub_title;

                    }.bind(this));

                    bannerImage.addEventListener('error', function (event) {
                        this.sendTracking(bannerInfo.error_url);
                    }.bind(this));

                    var bannerImageParent = bannerElement.getElementsByClassName('contents')[0];
                    if(!bannerImageParent) {
                        bannerImageParent = bannerElement.getElementsByClassName('contractionImg')[0];
                    }

                    bannerImageParent.appendChild(bannerImage);

                    if(this.setting.parentId) {
                        var mainBannerSection = document.getElementById(this.setting.parentId);
                        if(mainBannerSection) {
                            var referenceNode = mainBannerSection.firstChild;

                            //parentId ë§ì§ë§ì ìì ì§ì´ë£ì´ì¤ì¼ í´ì ë¶ê¸°ì²ë¦¬ í null ì²ë¦¬ 
                            if (adInfo.type === this.BANNER_TYPE.PC_COUPLE_LEFT_BANNER || adInfo.type === this.BANNER_TYPE.PC_COUPLE_TOP_BANNER) {
                                referenceNode = null;
                            }
                            
                            if(this.currentAdType == this.AD_TYPE.MAIN_BANNER){
                                referenceNode = mainBannerSection.firstChild.nextSibling.nextSibling;
                            }

                            mainBannerSection.insertBefore(bannerElement, referenceNode);
                        }
                    }
                }
                if(adInfo.type === this.BANNER_TYPE.PC_VIDEO_BANNER) {
                    this.loadVideoBannerPlayer(bannerInfo, bannerElement);

                    if(bannerInfo.video_placement) {
                        var align = (bannerInfo.video_placement === 'LEFT' ? 'LEFT' : 'RIGHT').toLowerCase();
                        bannerElement.className += ' ' + align;
                    }
                }
            }

            if(typeof this.setting.callback === 'function') {
                if(!this.setting.parentId && bannerElement) {
                    if(this.setting.bindTarget) {
                        var callbackWithBind = this.setting.callback.bind(this.setting.bindTarget);
                    }

                    callbackWithBind ? callbackWithBind((bannerElement)) : this.setting.callback(bannerElement);
                }
            }

        } else {
            if (typeof this.setting.callback === 'function') {
                if (!this.setting.parentId) {
                    if (this.setting.bindTarget) {
                        var callbackWithBind =  this.setting.callback.bind(this.setting.bindTarget);
                    }

                    callbackWithBind ? callbackWithBind((adInfo)) : this.setting.callback(adInfo);
                }
            }
        }
    };

    this.loadVideoBannerPlayer = function (bannerInfo, bannerElement) {
        //ìì íë ì´ì´ ë¡ë
        //load player css RES_AFREECA_NONE_SCHEME
        //vod.css ê° live.css ë³´ë¤ í¬ê¸°ê° ìë¤
        this.loadCss(this.cssDomain + '/css/global/afreecatv_player/afreecatv_player_vod.css').then(() => {
            var playerElement = this.getAdPlayerElement();
            var videoElement = bannerElement.getElementsByClassName('video')[0];
            if(videoElement) {
                videoElement.parentNode.removeChild(videoElement);
            }
            bannerElement.getElementsByClassName('player_area')[0].appendChild(playerElement);

            //poster ì¸í
            if(bannerInfo.alternative_image_url) {
                let poster = bannerElement.getElementsByClassName('poster')[0];
                poster.style.backgroundImage = 'url("' + bannerInfo.alternative_image_url + '")';
                //ì´ë¯¸ì§ ìë¬ ì ê²ì ìì­ì¼ë¡ íë ¤ê³  í ë¯
                //poster.style.backgroundColor = '#000000';

                poster.addEventListener('click', event => {
                    this.sendTracking(bannerInfo.click_urls);
                    /*ìëì ê°ì´ open_in_extenral_browser ê°ì ë°ë¼ ìì°½ì¸ì§ ì¤í´ì¸ì§ ì íëê² ì ìì¸ë°
                    //var linkTarget = bannerInfo.open_in_external_browser === 1 '_blank' : 'afreeca://';
                    pcìì ì¤í´ì ì¬ì©í  ì¼ì´ ìì´ ìê³ , ê´ê³  ìëµì ê°ì´ ìëª»ë¤ì´ì¬ê¹ë´ ê·¸ë¥ ìì íê² _blank ë¡ ê³ ì 
                    ëì¤ì ëª¨ë°ì¼ìì ì¬ì©í´ì¼íë©´ ìì²ë¼ íë©´ ë¨
                    */
                    let linkTarget = '_blank';
                    window.open(bannerInfo.landing_url, linkTarget);
                });
            }

            //load player script
            Promise.all([
                this.loadScript(this.scriptDomain + '/asset/app/liveplayer/player/dist/vendor.js'),
                this.loadScript(this.scriptDomain + '/asset/app/liveplayer/view/dist/ViewVendor.js'),
            ]).then(() => {
                Promise.all([
                    this.loadScript(this.scriptDomain + '/asset/app/liveplayer/player/dist/BannerPlayer.js'),
                    this.loadScript(this.scriptDomain + '/asset/app/liveplayer/view/dist/BannerView.js'),
                ]).then(() => {
                    if(BannerPlayer) {
                        bannerPlayer = new BannerPlayer();
                        bannerPlayerView = new BannerView(bannerPlayer.externalInterface);

                        bannerPlayerView.isLoaded().then(() => {
                            // ë°°ë ì´ê³  ë«ê³  ì´ê³  ë«ê³  íë©´
                            // adinfo.typeì´ ë³ê²½ëë ë¬¸ì ê° ììëë° bannerPlayerì
                            // this.advertiseInfoë¥¼ ê·¸ëë¡ ëê¸°ë©´ bannerPlayer ììì ê° ë³ê²½ ì(ìì type)
                            // this.advertiseInfoì ë°ìëì´ ë²ë¦°ë¤. ê·¸ëì ìì í¨
                            bannerPlayer.loadVastAd({...this.advertiseInfo});
                        });
                    }
                });
            });
        });
    };

    this.getBannerElement = function (type) {
        var bannerElement = document.createElement('div');
        if(type === this.BANNER_TYPE.PC_IMAGE_BANNER || type === this.BANNER_TYPE.PC_VIDEO_BANNER ||
            type === this.BANNER_TYPE.PC_970_225_BANNER) {
            bannerElement.innerHTML = '<div class="Advertising_Output_Area"  style="display: none;">' +
                '<div class="contents">' +
                //'<img src="" title="ê´ê³ ì´ë¯¸ì§">' + ë ììëë° IEìì src ë¹ ê° ë£ì´ëë©´ ìë¬ë¨
                '<div class="player_area"> </div>' +
                '</div>' +
                '<a href="javascript:;" class="click_area"></a>' +
                '<a href="javascript:;" class="close">ë«ê¸°</a>' +
                '</div>';

            bannerElement = bannerElement.firstChild;
        } else if(type === this.BANNER_TYPE.PC_728_90_BANNER || type === this.BANNER_TYPE.MOBILE_640_100_BANNER ||
            type === this.BANNER_TYPE.MOBILE_640_150_BANNER || type === this.BANNER_TYPE.PC_164_362_BANNER || 
            type === this.BANNER_TYPE.MOBILE_IMAGE_BANNER|| type === this.BANNER_TYPE.PC_COUPLE_LEFT_BANNER) {
            const className = this.getElementClassName(type);
            bannerElement.setAttribute('class', `${className} click_area`);
            bannerElement.innerHTML = '<a href="javascript:;" class="contents"></a>';
        } else if(type === this.BANNER_TYPE.PC_SUB_BANNER_EXPANDED_VIDEO || type === this.BANNER_TYPE.PC_SUB_BANNER_EXPANDED_IMAGE) {
            bannerElement.setAttribute('class', 'AdvertisingExpand');
            bannerElement.innerHTML = '<div class="contractionImg">' +
                '<a href="javascript:;" class="link"></a>' +
                '</div>' +
                '<div class="expandImg">' +
                '<a href="javascript:;" class="link"></a>' +
                '<div class="img"></div>' +
                //'<div class="player_area"></div>' +
                '</div>' +
                '<div class="AdvertisingBtn">' +
                '<a href="javascript:;" class="open"><em></em>ìì¸í ë³´ê¸°</a>' +
                '<a href="javascript:;" class="close" style="display: none"><em></em>ìê²ë³´ê¸°</a>' +
                '</div>';
        } else if (type === this.BANNER_TYPE.PC_COUPLE_TOP_BANNER) {
            bannerElement.setAttribute('class', 'a_d_banner');
            bannerElement.innerHTML = 
            '<a href="javascript:;" class="click_area">' +
                '<div class="lt">' +
                    '<p class="title"></p>' +
                    '<em class="sub_title"></em>' +
                '</div>' +
                '<span class="img contents"></span>'
            '</a>';
        }

        return bannerElement;
    };

    this.getSubAdPlayerElement = function () {
        var getSubPlayerElement = document.createElement('div');
        getSubPlayerElement.innerHTML =
            '<div class="inner_w">' +
            '<div class="inner">' +
            '<div class="player player_area"></div>' +
            '</div>' +
            '</div>';

        return getSubPlayerElement.firstChild;
    };


    this.getAdPlayerElement = function () {
        var adPlayerElement = document.createElement('div');
        adPlayerElement.innerHTML =
            '<div id="afreecatv_player" class="video">' +
            '<div class="afreecatv_player_size"></div>' +
            '<div id="videoLayer"><video id="ad_video" width="0" height="0"></video></div>' +
            '<div id="videoLayerCover" tabindex="1" style="position: absolute;top: 0;left: 0;right: 0;bottom: 0;z-index: 2;">' +
            '<div class="poster"></div>' +
            '</div>' +
            '<div class="player_ctrlBox">' +
            '<div class="ctrl">' +
            '<div class="progress">' +
            '<div class="progress_track">' +
            '<div class="watched" style="width:0%;"></div>' +
            '<button class="handler" style="left:0%;"><span></span></button>' +
            '<div class="progress_bar"></div>' +
            '</div>' +
            '</div>' +
            '<button type="button" class="pause" id="play" aria-label="ì¬ì"></button>' +
            '<button type="button" class="btn_refresh" aria-label="ë¤ì ì¬ì" style="display: none"></button>' +
            '<div class="volume">' +
            '<button type="button" class="sound" id="btn_sound"><span></span><span></span></button>' +
            '<div class="volume_slider_wrap">' +
            '<div class="volume_slider">' +
            '<div class="volume_range"></div>' +
            '<button class="volume_handler"></button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="time_display">' +
            '<span class="time-current" id="time-current">00:00</span>/<span class="time-duration">00:00</span>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="center_btn" style="display: none">' +
            '<button type="button" class="btn_cneter_play"><span>PLAY</span></button>' +
            '</div>' +
            '<div class="loading" style="display: none"><span></span></div>' +
            '<div class="buffering" style="display: none"><span></span></div>' +
            '<div class="da_area" style="display: none;"><a href="javascript:;"></a></div>' +
            '</div>';

        return adPlayerElement.firstChild;
    };

    this.sendTracking = function (urlArrayOrString) {
        if(Array.isArray(urlArrayOrString)) {
            for (var url in urlArrayOrString) {
                if(urlArrayOrString.hasOwnProperty(url)) {
                    this._sendRequest(urlArrayOrString[url]);
                }
            }
        } else {
            this._sendRequest(urlArrayOrString);
        }
    };

    this._sendRequest = function (url, onLoadCallback) {
        if(url && typeof XMLHttpRequest !== 'undefined') {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.withCredentials = true;
            xhr.timeout = 3000;

            if(typeof onLoadCallback === 'function') {
                xhr.onload = function () {
                    onLoadCallback(xhr.response);
                };
                xhr.ontimeout = function () {
                };
            }

            xhr.send(null);
        }
    };

    this.loadScript = function (url) {
        return this._loadAsset(url);
    };

    this.loadCss = function (url) {
        return this._loadAsset(url, 'css');
    };

    this._loadAsset = function (url, type) {
        return new Promise((resolve, reject) => {
            let assetElement;
            if(type === 'css') {
                assetElement = document.createElement('link');
                assetElement.rel = 'stylesheet';
                assetElement.type = 'text/css';
                assetElement.href = url;
            } else {
                assetElement = document.createElement('script');
                assetElement.type = 'text/javascript';
                assetElement.src = url;
            }
            assetElement.onload = resolve;
            assetElement.onerror = reject;

            document.head.appendChild(assetElement);
        });
    };

    //AD_SERVER_URL ëë AD_DEV_SERVER_URL ì¬ì©
    this.getTagURL = function () {
        if(typeof AdParameter !== "undefined") {
            return this.AD_SERVER_URL + '?' + AdParameter.getAdParameters(this.currentAdType, this.setting);
        }
    };

    this.getCookie = function (cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if(c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    //dom êµ¬ì¡°ë ëê°ìë°, í´ëì¤ ëªì´ ê²¹ì³ ì´ìê° ë°ìíë ê²½ì° ëë¬¸ì í´ëì¤ëª ë°ìì¤ë í¨ì ìì±
    //ì´ì ìê¸°ë ê²½ì°ìë§ ì´ í¨ì ì¬ì©íë©´ ë.
    this.getElementClassName = function (type) {
        let className = "";
        switch(type) {
            case this.BANNER_TYPE.PC_COUPLE_LEFT_BANNER:
                className = "a_d_banner";
                break;
            default :
                className = "promotion_banner";
                break;
        }

        return className;
    }
};