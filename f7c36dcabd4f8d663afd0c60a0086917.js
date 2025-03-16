var oCommonGnb = {
    "menu": {
        0: [
            {
                "name": "시네티",
                "url": CINETY_AFREECATV,
                "statistic_tag": "CLICK_SUB_CINETY",
                "tag": "new"
            },
            {
                "name": "스포츠",
                "url": SPORTS_AFREECATV,
                "statistic_tag": "CLICK_SUB_SPORTS"
            },
            {
                "name": "당구",
                "url": BILLIARDS_AFREECATV,
                "statistic_tag": "CLICK_SUB_BILLIARDS",
                "tag": "new"
            },
            {
                "name": "e스포츠",
                "url": ESPORTS_AFREECATV,
                "statistic_tag": "CLICK_SUB_ESPORTS"
            },
            {
                "name": "BJ 멸망전",
                "url": "//bjmatch." + DOMAIN,
                "statistic_tag": "CLICK_SUB_BJMATCH"
            },
            {
                "name": "보.라에서 생긴 일",
                "url": "//bora." + DOMAIN,
                "statistic_tag": "CLICK_SUB_BORA"
            },
            {
                "name": "애니메이션관",
                "url": ANI_AFREECATV,
                "statistic_tag": "CLICK_SUB_ANI"
            },
            {
                "name": "지상파/케이블관",
                "url": THEATER_AFREECATV,
                "statistic_tag": "CLICK_SUB_THEATER"
            }
        ],
        1: [
            {
                "name": "별풍선",
                "url": ITEM_AFREECATV + "/starballoon.php",
                "statistic_tag": "CLICK_SUB_STARBALLOON",
            },
            {
                "name": "구독",
                "url": ITEM_AFREECATV + "/subscription.php",
                "statistic_tag": "CLICK_SUB_SUBSCRIBE",
            },
            {
                "name": "애드벌룬",
                "url": ADBALLOON_AFREECATV + "/savings.php?view=list",
                "statistic_tag": "CLICK_SUB_ADDBALLOON"
            },
            {
                "name": "시그니처 풍선",
                "url": AFEVENT2_AFREECATV + "/app/signature_balloon/index.php",
                "statistic_tag": "CLICK_SUB_SIGNATURE",
            },
            {
                "name": "아이템",
                "url": ITEM_AFREECATV + "/quickview.php",
                "statistic_tag": "CLICK_SUB_ITEM",
            }
        ],
        2: [
            {
                "name": "포인트 & 크레딧",
                "url": MYPOINT_AFREECATV,
                "statistic_tag": "CLICK_SUB_POINT",
            },
            {
                "name": "샵프리카",
                "url": SHOPFREECA_AFREECATV,
                "statistic_tag": "CLICK_SUB_SHOP",
            },
            {
                "name": "파트너십",
                "url": PARTNERSHIP_AFREECATV,
                "statistic_tag": "CLICK_SUB_PARTNERSHIP",
                "tag": "new"
            },
            {
                "name": "아프리카TV OGQ마켓",
                "url": OGQ_MARKET_AFREECATV,
                "statistic_tag": "CLICK_SUB_OGQ",
            },
            {
                "name": "오픈 스튜디오",
                "url": STUDIO_AFREECATV,
                "statistic_tag": "CLICK_SUB_OPENSTUDIO",
            },
            {
                "name": "AFTmarket",
                "url": 'https://www.aftmarket.tv/',
                "menu_target": "_blank"
            }
        ],
        3: [
            {
                "name": "스타BJ",
                "url": AFEVENT2_AFREECATV + "/app/starbj/index.php",
                "statistic_tag": "CLICK_SUB_STARBJ",
            },
            {
                "name": "콘텐츠 지원센터",
                "url": CONTENTLAB_AFREECATV,
                "statistic_tag": "CLICK_SUB_LAB",
            },
            {
                "name": "신입BJ 지원센터",
                "url": NEWBJ_AFREECATV +"/home/",
                "statistic_tag": "CLICK_SUB_NEWBJ",
            },
            {
                "name": "편집BJ 지원센터",
                "url": VODBJ_AFREECATV,
                "statistic_tag": "CLICK_SUB_EDIT",
            },
            {
                "name": "BJ가이드",
                "url": BJGUIDE_AFREECATV,
                "statistic_tag": "CLICK_SUB_GUIDE",
            },
            {
                "name": "아프리카TV BJ교육",
                "url": BJ_EDU_AFREECATV,
                "statistic_tag": "CLICK_SUB_EDU",
            },
            {
                "name": "이슈방송 스케줄",
                "url": ISSUE_AFREECATV,
                "statistic_tag": "CLICK_SUB_ISSUE",
            }
        ]
    },
    "family": {
        "list": [
            {
                "name": "Apro<em></em>",
                "url": FREECAP_AFREECATV,
                "menu_target": "_blank",
                "statistic_tag": "CLICK_SUB_STOCK"
            },
            {
                "name": "슬러거<em></em>",
                "url": "http://slugger.afreecatv.com/index.nwz",
                "menu_target": "_blank",
                "statistic_tag": "CLICK_SUB_SLUGGER"
            },
            {
                "name": "샵프리카<em></em>",
                "url": SHOPFREECA_AFREECATV,
                "menu_target": "_blank",
                "statistic_tag": "CLICK_SUB_SHOP"
            },
            {
                "name": "아프리카TV OGQ마켓<em></em>",
                "url": "//ogqmarket.afreecatv.com/",
                "menu_target": "_blank",
                "statistic_tag": "CLICK_SUB_OGQMARKET"
            }
        ]
    }
};
//IE 종료
if (window.navigator.userAgent.match(/MSIE|Internet Explorer|Trident/i)) {
    window.location = 'microsoft-edge:' + window.location;
    setTimeout(function () {
        window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547';
    }, 1);
}

var szLogoutUrl = '';
var szLocale = 'ko_KR';
var bLocaleGnb = false;
var useDarkmode = false;
var oIntervalFn;
var darkException = false; //방송통계페이지가 setVodMainGnb 함수를 불러서 임시 변수
var bStrMenu = false; // setSubMenu 변수가 string인지 체크
var animItem = null; //애드벌룬 애니메이션 변수

var oPrivate = false;  // 개인정보 객체 체크
var szSearchType = 'total';
var szSearchLocation = 'sub';
var isSearchVisible = true; //검색창 존재 여부
var oGnbDom = null;

//location위치를 전송할 로그값 체크
var szlogLocation = 'sub';
var szUrl = document.URL;

var bMyplusOpen = typeof(bMyplusOpen) == "undefined" ? false : bMyplusOpen;

if(szUrl.indexOf(WWW_AFREECATV+'/?hash') === 0){
    szlogLocation = 'main';
}else if(szUrl.indexOf(WWW_AFREECATV+'/total_search.html') === 0){
    szlogLocation = 'search'
}else if(szUrl.indexOf(VOD_AFREECATV) === 0){
    szlogLocation = 'main_vod'
}else if(szUrl.indexOf(ESPORTS_AFREECATV) === 0){
    szlogLocation = 'esports'
}else if(szUrl.indexOf(PLAY_AFREECATV) === 0){
    szlogLocation = 'liveplayer'
}else if(szUrl.indexOf(VOD_AFREECATV+'/PLAYER/STATION/') === 0 || szUrl.indexOf(VOD_AFREECATV+'/player/') === 0){
    szlogLocation = 'vodplayer'
}else if(szUrl === WWW_AFREECATV+'/' || szUrl === 'https://afreecatv.com/'){
    szlogLocation = 'main'
}else if(szUrl.indexOf(THEATER_AFREECATV) === 0){
    szlogLocation = 'theater'
}

var oGnb = {
    setMainGnb: function (szType) {
        bPrivate = typeof oPrivate != 'undefined';
        useDarkmode = true;

        var aGlobalGnb = [];
        if (szLocale != 'ko_KR') {
            aGlobalGnb.push('<div class="btn_down">');
            aGlobalGnb.push('   <a href="https://www.oculus.com/experiences/quest/3120447294725423/?ranking_trace=0_3120447294725423_QUESTSEARCH_11a6a88c-e22c-42ee-b227-b85956609632" target="_blank" class="btn_oculus"><em>oculus Download</em></a>');
            aGlobalGnb.push('   <a href="https://www.microsoft.com/ko-kr/p/afreecatv-vr/9p8bnf30snr3?rtc=1&amp;activetab=pivot:overviewtab" target="_blank" class="btn_ms"><em>microsoft Download</em></a><em>');
            aGlobalGnb.push('   </em></div>');
        }
        aGlobalGnb.push('<div class="serviceUtil">');
        if (szLocale == 'ko_KR' && ticket) {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlayKor" tip="방송하기">방송하기</button>');
        } else if(szLocale == 'ja_JP' && ticket){
            aGlobalGnb.push('<div class="jp_broadcast_wrap">');
            aGlobalGnb.push('<button type="button" class="btn-broadcast" tip="방송하기" id ="studioJapan">방송하기</button>');
            aGlobalGnb.push('<ul class="broadcast_select">');
            aGlobalGnb.push('<li class="fs" id="studioPlayKor"><a href="javascript:void(0)" onclick="return false;">FreecShot</a></li>');
            aGlobalGnb.push('<li class="db"><a href="javascript:void(0)" onclick="window.open(DASHBOARD, \'_blank\'); return false;">Dashboard</a></li>');
            aGlobalGnb.push('</ul>');
            aGlobalGnb.push('</div>'); 
        } else {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlay" tip="방송하기">방송하기</button>');
        }

        // 알림 리스트
        this.getNotificationList(aGlobalGnb);

        if (ticket && bPrivate) {
            aGlobalGnb.push('   <!-- 로그인 후-->');

            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? 'new' : '';
            aGlobalGnb.push('   <div class = "profileWrap" id="profileWrapBtn">');
            aGlobalGnb.push('       <div class = "userInfo ' + szNoteNew + '">');
            aGlobalGnb.push('           <div class = "thumb">');
            aGlobalGnb.push('           <img src="' + STIMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/m/' + oPrivate.CHANNEL.LOGIN_ID + '.webp" ' +
                'onerror="profileImgOnError(this, \'' + oPrivate.CHANNEL.LOGIN_ID + '\')"/></div>');
            aGlobalGnb.push('       <button type="button" id="profileBtn" class="btn-login">' + oPrivate.CHANNEL.LOGIN_NICK + '</button></div>');
            aGlobalGnb.push('       <div id="userArea" class="loginUserMenu">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('    </div>');

            aGlobalGnb.push('<!-- 서비스메뉴 -->');
            aGlobalGnb.push('   <!-- //로그인 후 -->');
        } else {
            aGlobalGnb.push('   <!-- 로그인 전 -->');
            var szPointUrl = '/Report/AfreecaBalloonList.asp';

            if (!ticket) {
                aGlobalGnb.push('<a href="javascript:oGnb.goLogin();"><button type="button" id="loginBtn" class="btn-login">로그인</span></button></a>');
            }

            this.getDarkModeArea(aGlobalGnb);

            aGlobalGnb.push('   <!-- //로그인 전 -->');
        }
        aGlobalGnb.push('<!-- 서비스메뉴 -->');
        aGlobalGnb.push('<div class="serviceMenu" id="serviceMenuList">');
        aGlobalGnb.push('<button type="button" id="btnAllMenu" class="btn-allMenu" tip="전체메뉴">전체메뉴</button>');
        aGlobalGnb.push('   <div id="allMenu" class="allMenuList">' + oGnb.getAllLayerMenu(szType) + '</div>');
        aGlobalGnb.push('   <div>');
        aGlobalGnb.push('<!-- //서비스메뉴 -->');
        aGlobalGnb.push('</div>');

        var szMainGnb = aGlobalGnb.join('');
        document.write(szMainGnb);
        FreecshotStart(szLocale);

        szSearchLocation = "live_main";
        this.setGlobalEvent();
    },
    setSubDarkGnb: function (nMenu, bText, setClass) {
        useDarkmode = true;
        this.setSubGnb(nMenu, bText, setClass);
    },
    setSubOldGnb: function (nMenu, bText, setClass) {
        // For shop and ogqmarket page
        var domain = window.location.hostname;
        isSearchVisible = (domain != 'ogqmarket.afreecatv.com');
        bPriavte = typeof oPrivate != 'undefined';

        var szClass = '';
        if (setClass != undefined && setClass != '' && setClass != null) {
            szClass = ' class="' + setClass + '" ';
        }

        var aGlobalGnb = [];
        aGlobalGnb.push('<div id="gArea">');
        aGlobalGnb.push('   <h1><a href="' + WWW_AFREECATV + '" target="_top">afreecaTV</a></h1>');
        aGlobalGnb.push('   <div class="unit_area">');
        aGlobalGnb.push('       <div id="logArea" class="login_area">');

        if (ticket && bPriavte) {
            // 알림 리스트
            this.getNotificationList(aGlobalGnb);
            aGlobalGnb.push('           <!-- 로그인 후-->');
            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? '<span class="new">New</span>' : '';
            aGlobalGnb.push('   <a href="javascript:;" class="nickname">' + szNoteNew + this.getNicknameEntity(oPrivate.CHANNEL.LOGIN_NICK) + '<em></em></a>');
            aGlobalGnb.push('           <div id="userArea" class="user_area" style="display:none;">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('       <!-- //로그인 후 -->');
        } else {
            aGlobalGnb.push('           <!-- 로그인 전 -->');
            aGlobalGnb.push('           <span class="join_area">');
            if (useDarkmode === true && szLocale == 'ko_KR') {
                // 다크모드 코드 추가
                this.getDarkModeArea(aGlobalGnb);
            }
            if (!ticket) {
                aGlobalGnb.push('               <a href="javascript:oGnb.goLogin();" class="login">로그인</a>');
            }
            aGlobalGnb.push('           </span>');
            aGlobalGnb.push('           <!-- //로그인 전 -->');
        }
        aGlobalGnb.push('       </div>');
        aGlobalGnb.push('       <!-- 서비스메뉴 -->');
        aGlobalGnb.push('       <div id="menuArea">');
        aGlobalGnb.push('           <p class="btn_menu"><a href="javascript:;" id="serviceMenu"  title="전체메뉴"><span>서비스 메뉴</span></a></p>');
        aGlobalGnb.push('           <div id="subMenu" class="menu_area" style="display:none;">' + oGnb.getLayerMenu('sub') + '</div>');
        aGlobalGnb.push('       </div>');
        aGlobalGnb.push('       <!-- //서비스메뉴 -->');
        aGlobalGnb.push('   </div>');
        aGlobalGnb.push('</div>');

        var szLocation = window.location.toString().replace(/#(.*)/g, "");
        if (szLocation == ISSUE_AFREECATV + "/" || szLocation == ISSUE_AFREECATV + "/application.php" || szLocation == ISSUE_AFREECATV + "/" || szLocation == ISSUE_AFREECATV + "/application.php") {
            var szSubGnb = '<div id="af_gnb_sub" ' + szClass + ' >' + aGlobalGnb.join('') + '</div>';
        } else {
            var szPrivateHtml = '';

            if (typeof(oSubGnb.list) != 'undefined' && typeof(oSubGnb.title) != 'undefined') {
                szPrivateHtml = '<h3><a href="' + oSubGnb.title.url + '" target="_top""><img src="' + RES_AFREECATV + '/images/gnb_new/' + oSubGnb.title.img + '.gif" alt="' + oSubGnb.title.name + '" /></a></h3>';

                if ((oSubGnb.title.img == undefined || oSubGnb.title.img == '') && bText) {
                    if (bLocaleGnb) {
                        var locale_name = "name_" + szLocale;
                        szPrivateHtml = '<h3 class="af_title"><a href="' + oSubGnb.title.url + '">' + oSubGnb.title[locale_name] + '</a></h3>';
                    } else {
                        szPrivateHtml = '<h3 class="af_title"><a href="' + oSubGnb.title.url + '">' + oSubGnb.title.name + '</a></h3>';
                    }
                }
                szPrivateHtml += oGnb.getPrivateGnb(nMenu, bText);
            } else if (typeof(oSubGnb.title) != 'undefined') {
                szPrivateHtml = '<h3><a href="' + oSubGnb.title[nMenu].url + '" target="_top"><img src="' + RES_AFREECATV + '/images/gnb_new/' + oSubGnb.title[nMenu].img + '.gif" alt="' + oSubGnb.title[nMenu].name + '" /></a></h3>';

                if ((oSubGnb.title.img == undefined || oSubGnb.title.img == '') && bText) {
                    szPrivateHtml = '<h3 class="af_title"><a href="' + oSubGnb.title[nMenu].url + '">' + oSubGnb.title[nMenu].name + '</a></h3>';
                }
                szPrivateHtml += '<div class="cb"></div>';
            }
            var szSubGnb = '<div id="af_gnb_sub" ' + szClass + ' >' + aGlobalGnb.join('') + '<div class="gnb_wrap">' + szPrivateHtml + '</div></div>';
        }
        document.write(szSubGnb);
        this.setGlobalEvent();
    },
    setSubGnb: function (nMenu, bText, setClass) {
        var szLocation = window.location.toString().replace(/#(.*)/g, '');
        var aGlobalGnb = this.setServiceUtilHeader();
        var domain = window.location.hostname;
        isSearchVisible = (domain != 'ogqmarket.afreecatv.com');

        var szPrivateHtml = '';
        if (typeof(oSubGnb.list) != 'undefined' && typeof(oSubGnb.title) != 'undefined') {
            if (oSubGnb.title.img !== undefined){
                szPrivateHtml = '<h3 class="subTitle"><a href="' + oSubGnb.title.url + '" target="_top""><img src="' + RES_AFREECATV + '/images/gnb_new/' + oSubGnb.title.img + '.gif" alt="' + oSubGnb.title.name + '" /></a></h3>';
            } else {
                szPrivateHtml = '<h3 class="subTitle"><a href="' + oSubGnb.title.url + '" target="_top"">'+ oSubGnb.title.name + '</a></h3>';
            }

            if ((oSubGnb.title.img == undefined || oSubGnb.title.img == '') && bText) {
                if (bLocaleGnb) {
                    var locale_name = 'name_' + szLocale;
                    szPrivateHtml = '<h3 class="subTitle"><a href="' + oSubGnb.title.url + '">' + oSubGnb.title[locale_name] + '</a></h3>';
                } else {
                    szPrivateHtml = '<h3 class="subTitle"><a href="' + oSubGnb.title.url + '">' + oSubGnb.title.name + '</a></h3>';
                }
            }
            szPrivateHtml += oGnb.getPrivateGnb(nMenu, bText);
        } else if (typeof (oSubGnb.title) != 'undefined') {
            szPrivateHtml = '<h3><a href="' + oSubGnb.title[nMenu].url + '" target="_top"><img src="' + RES_AFREECATV + '/images/gnb_new/' + oSubGnb.title[nMenu].img + '.gif" alt="' + oSubGnb.title[nMenu].name + '" /></a></h3>';

            if ((oSubGnb.title.img == undefined || oSubGnb.title.img == '') && bText) {
                szPrivateHtml = '<h3 class="subTitle"><a href="' + oSubGnb.title[nMenu].url + '">' + oSubGnb.title[nMenu].name + '</a></h3>';
            }
        }
        var szSubGnb = aGlobalGnb.join('') + szPrivateHtml;

        this.writeDom(szSubGnb);
        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    initMainCate: function () {
        var aCateHtml = [];
        var aSideCateHtml = [];
        var szCate = '';
        var defaultMenu = "myplus";
        var nIsAbroadIp = Number('0'); //1: 해외, 0: 한국

        if (oMainCategory.result == 1) {
            aCateHtml.push('<ul class="service-menu">');
            $.each(oMainCategory.main, function (i, oCategory) {
                if (oCategory.menu_type == "127") return;
                if (oCategory.menu_type == "6") { // 대메뉴
                    var szTempHtml = '<li class="" data-service="' + oCategory.menu_id + '">';
                    szTempHtml += '<h3><a href="' + oCategory.action_content + '" class="' + oCategory.menu_id + '">' + oCategory.menu_name + '</a></h3>';

                    szTempHtml += '<ul>';
                    $.each(oMainCategory.sub, function (idx, oSubList) {
                        if (idx == oCategory.menu_idx) {
                            $.each(oSubList, function (j, oSubCategory) {
                                if(oSubCategory.menu_id != "myplus" || bMyplusOpen){
                                    if (oSubCategory.menu_type == "127") return;
                                    szTarget = oSubCategory.action_type == "4" ? ' target="_blank"' : '';
                                    // 그다움 메뉴가 구분자일 경우
                                    szLiClass = '';

                                    // 메뉴 활성화 시키는 부분
                                    szUrl = location.href.replace(/^http(?:s)?:/, '');
                                    szUrl = szUrl.replace(/\/\/afreecatv.com/, '//www.afreecatv.com'); // 메인 예외처리
                                    // VOD 예외처리
                                    if (szUrl.match(/\/\/vod.afreecatv.com/) != null) {
                                        if (location.pathname.match('(HOT|HOME|ALL|TVCLIP|GAME|HOTISSUE|SPECIAL|ROOKIE|MOBILEGAME|SPORTS|CAMTALK|EAT|PET|MUSIC|EDUCATION|LIFE|RADIO|STOCK|STREAMING|VR|ADULT|BORA|ETC|FAVORITECLIP|FAVORITE|SUBSCRIBE|LATER|RECENTVIEW|UPVOD|VODPLAYLIST)') != null) {
                                            szUrl = VOD_AFREECATV + '/';
                                        }

                                        szUrl = szUrl.replace(/^http(?:s)?:/, '');
                                    }
                                    if(oSubCategory.menu_id == "all" && !bMyplusOpen){
                                        defaultMenu = "all";
                                        oSubCategory.action_content = "//www.afreecatv.com/";
                                    }
                                    oSubCategory.action_content = oSubCategory.action_content.replace(/\/\/afreecatv.com/, '//www.afreecatv.com');
                                    if (szUrl == oSubCategory.action_content || (oSubCategory.menu_id == defaultMenu && szUrl.replace('//www.afreecatv.com/?hash=', '') == defaultMenu)) {
                                        szLiClass = ' on';
                                        szSubMenu = oSubCategory.menu_id;
                                        // 예외 케이스들 처리(ex: TV클립)
                                    } else {
                                        // TV클립 세부 페이지 여부 체크하기 위한 정규식
                                        var tvClipRegExp = /vod\.afreeca(?:tv).com\/TV/;
                                        var vodRegExp = /vod\.afreeca(?:tv).com/;
                                        if (vodRegExp.test(oSubCategory.action_content) && tvClipRegExp.test(szUrl)) {
                                            szLiClass = ' on';
                                            szSubMenu = oSubCategory.menu_id;
                                        }
                                    }
                                    // N 아이콘
                                    if (oSubCategory.new_yn == 1) szLiClass += ' new';

                                    // 해외 IP로 접속시 차단(어드민에서 설정)
                                    if (nIsAbroadIp == 1 && oSubCategory.abroad_ip_show_yn == 0) return;

                                    szTempHtml += '<li class="' + szLiClass + '" id="' + oSubCategory.menu_id + '" name="' + oSubCategory.menu_name + '" menu_idx="' + oSubCategory.menu_idx + '" menu_type="' + oSubCategory.menu_type + '" action_type="' + oSubCategory.action_type + '" action_content="' + oSubCategory.action_content + '"><a href="' + oSubCategory.action_content + '"' + szTarget + '>' + oSubCategory.menu_name + '</a></li>';
                                }
                            });
                        }
                    });

                    szTempHtml += '</ul>';
                    szTempHtml += '</li>';
                    aCateHtml.push(szTempHtml);
                }
                if (oCategory.menu_type == "10") { // 대메뉴(링크)
                    szTarget = oCategory.action_type == "4" ? ' target="_blank"' : '';
                    szUrl = location.href.replace(/^http(?:s)?:/, '');
                    szUrl = szUrl.replace(/\/\/afreecatv.com/, '//www.afreecatv.com'); // 메인 예외처리
                    szUrl = szUrl.replace(/\/\/vod.afreecatv.com\/.*/,'//vod.afreecatv.com/');//VOD 예외처리
                    szLiClass = szUrl == oCategory.action_content ? 'on' : '';
                    var szTempHtml = '<li class="' + szLiClass + '" data-service="' + oCategory.menu_id + '">';
                    szTempHtml += '<h3><a href="' + oCategory.action_content + '" class="' + oCategory.menu_id + '"' + szTarget + '>' + oCategory.menu_name + '</a></h3>';
                    aCateHtml.push(szTempHtml);
                }
                if (oCategory.menu_type == "1") { // 메뉴
                    szTarget = oCategory.action_type == "4" ? ' target="_blank"' : '';
                    szTempHtml = '<li id="' + oCategory.menu_id + '" class="' + oCategory.menu_id + '"><a href="' + oCategory.action_content + '"' + szTarget + '>' + oCategory.menu_name + '</a></li>';
                    aSideCateHtml.push(szTempHtml);
                }
            });

            aCateHtml.push('</ul>');

            if (szLang == "ko_KR") {
                // szTempHtml = '<li class="pcApp"><a href="javascript:;" id="playerSetupKor_new">아프리카TV PC APP</a></li>';
                // aSideCateHtml.push(szTempHtml);
                //aCateHtml.push('<div class="download-player">');
                //aCateHtml.push('<div class="player_pcapp"><a href="javascript:;" id="playerSetupKor_new">아프리카TV PC APP</a><a href="'+ BJ_AFREECATV +'/afsupport/post/58513066" target="_blank">?</a></div>');
                // aCateHtml.push('<a href="javascript:;" class="player_install" id="playerSetupKor">설치형 플레이어</a>');
                // aCateHtml.push('</div>');
            }

            // LNB 선호 BJ TOP5 추가
            if(szLang == "ko_KR" && bMyplusOpen){
                $.ajax({
                    type : "GET"
                    , url : LIVE_AFREECATV + '/api/myplus/preferbjOnLnbController.php'
                    , async : true
                    , xhrFields: {
                        withCredentials: true
                    }
                    , timeout: 500 // 0.5초 타임아웃
                    , success : function(oRes) {
                        if(oRes.RESULT == 1){
                            if(oRes.DATA.bj_cnt > 0){
                                let szHtml = '';
                                szHtml += '<div class="prefer_bj"><h3>'+oRes.DATA.title+'</h3><ul>';
                                
                                $.each(oRes.DATA.bj_list, function(i, oData) {
                                    const szLiveUrl = PLAY_AFREECATV + '/' + oData.user_id;
                                    const szStationUrl = BJ_AFREECATV + '/' + oData.user_id;
                                    const szProfile = STIMG_AFREECATV + '/LOGO/' + oData.user_id.substring(0, 2) + '/' +  oData.user_id  + '/m/' + oData.user_id + '.webp';
                                    var arrInflowPath = ['lnb', 'pbj_top5'];    
                                    var szClick = ' oAnalysisUtil.sendLiveInflowLog(\'' + oData.user_id + '\',' + oData.broad_no + ', ' + JSON.stringify(arrInflowPath).replace(/"/g, "\'") + ');';

                                    if(oData.broad_no != '0'){
                                        szClick += ' oAnalysisUtil.setClickLog(\'lnb\',\'button_type=pbj_top5&action_type=to_live\');';
                                        szHtml += '<li class="live"><a href="' + szLiveUrl + '" target="_blank"  onclick="javascript:' + szClick + '">';
                                    } else {
                                        szClick = ' oAnalysisUtil.setClickLog(\'lnb\',\'button_type=pbj_top5&action_type=to_station\');';
                                        szHtml += '<li><a href="'+ szStationUrl + '" target="_blank" onclick="javascript:' + szClick + '">';
                                    }
                                    szHtml += '<span class="thumb"><img loading="lazy" src="' + szProfile + '" onerror="profileImgOnError(this, \'' + oData.user_id + '\')" alt="프로필이미지"></span> <p>'+ oData.user_nick + '</p>';
                                    szHtml += '</a></li>';
                                });

                                szHtml += '</ul></div>';

                                $('div#innerLnb .service-menu').after(szHtml);
                            }
                        } else {
                            console.log('pbjlnb NOSUCCESS: ' + oRes.RESULT);
                        }
                    }
                    , error : function(xhr, ajaxOptions, thrownError) {
                        console.log('pbjlnb FAIL: ' + thrownError);
                    }
                });
            }

            if (aSideCateHtml.length > 0) { // 메뉴
                if(szLang == "ko_KR" && bMyplusOpen){
                    aCateHtml.push('<ul class="other-menu">');
                } else {
                    aCateHtml.push('<ul class="other-service">');
                }
                aCateHtml.push(aSideCateHtml.join(''));
                aCateHtml.push('</ul>');
            }

            szCate = aCateHtml.join('');
            if(szLang == "ko_KR" && bMyplusOpen){
                $('div#innerLnb').html(szCate);       // scroll 충돌로 아래에서 생성
            } else {
                $('div#LNB-ScrollBox').html(szCate); 
            }
        }

        if (typeof (szSubMenu) != "undefined") {
            $('#' + szSubMenu).closest('[data-service]').addClass('on');
        }

        if(szLang == "ko_KR" && bMyplusOpen){
            var _wrap = document.getElementById("innerLnb");
            if(!_wrap){
                _wrap = document.getElementById("LNB-ScrollBox");
            }
        } else {
            var miniBar = new MiniBar($("#LNB-ScrollBox").get(0), {});
            var _wrap = document.getElementById("LNB-ScrollBox");
        }
        
        //VR(basecamp) 팝업창
        $(".player_vr, #vrPlayer_global").on('click', function () {
            $('#overlay').fadeIn('fast');
            $('#layer_vr').slideDown();
        });
        $("#layer_vr .btn_close, #overlay").on('click', function () {
            $('#overlay').fadeOut('fast');
            $('#layer_vr').slideUp();
        });
        $("#layer_vr .go_vrbs").on('click', function () {
            window.open(BJ_AFREECATV + '/afreecavr', '_blank');
        });
        // VR, 설치형 플레이어 실행
        $("#basecampPlay, #playerSetupKor_new").on('click', function () {
            var szId = this.id;
            requirejs(['service/plugins/player'], function (player) {
                var player = atv.player;
                var exePlayer = null;
                var log = null;

                switch (szId) {
                    case 'basecampPlay' : // VR
                        exePlayer = player.runBasecamp.bind(player);
                        break;
                    case 'playerSetupKor':
                        exePlayer = player.runSetupPlayer.bind(player);
                        log = 'TRY_PLAYER1';
                        break;
                    case 'playerSetupKor_new' : // 설치형 플레이어
                        exePlayer = player.runSetupPlayerNew.bind(player);
                        log = 'TRY_ATVAPP ';
                        break;
                }
                exePlayer ? exePlayer('cast') : null;
                log ? callAU(log) : null;
            });
        });
    },
    setDashBoardGnb: function (nMenu, nAbroadType) {
        bPrivate = typeof oPrivate != "undefined";
        var aGlobalGnb = this.setServiceUtilHeader();


        var szPrivateHtml = '<h3 class="subTitle"><a href="' + DASHBOARD_AFREECATV + '">외부장치방송</a></h3>';

        if (szLocale != 'ko_KR' && nAbroadType != '1') {
            szPrivateHtml += '<div id="menu">';
            szPrivateHtml += '  <ul class="menu text">';
            szPrivateHtml += '    <li class="' + ([2, 3].indexOf(nMenu) === -1 ? 'on' : '') + '">';
            szPrivateHtml += '    <a href="' + DASHBOARD_AFREECATV + '">외부장치방송</a></li>';
            szPrivateHtml += '    <li class="' + (nMenu == 2 ? 'on' : '') + '">';
            szPrivateHtml += '    <a href="' + DASHBOARD_AFREECATV + '/manager.php">매니저</a></li>';
            szPrivateHtml += '    <li class="' + (nMenu == 3 ? 'on' : '') + '">';
            szPrivateHtml += '    <a href="' + DASHBOARD_AFREECATV + '/blacklist.php">블랙리스트</a></li>';
            szPrivateHtml += '  </ul>';
            szPrivateHtml += '</div>';
        }
        var szSubGnb = aGlobalGnb.join('') + szPrivateHtml;

        document.write(szSubGnb);

        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    setBalloonGnb: function (nMenu, nSubMenu) {
        var aGlobalGnb = this.setServiceUtilHeader();

        nSubMenu = nSubMenu || '1';

        var szOnClass1 = '';
        var szOnClass2 = '';
        var szOnClass3 = '';
        if (nMenu == 1) {
            szOnClass1 = 'on';
        } else if (nMenu == 2) {
            szOnClass2 = 'on';
        } else if (nMenu == 3) {
            szOnClass3 = 'on';
        }

        var szDepClass = '';
        var szOnSubClass1 = '';
        var szOnSubClass2 = '';
        var szOnSubClass3 = '';
        if (szOnClass2 == 'on' || szOnClass3 == 'on') {
            szDepClass = 'dep2';
        }

        if (nSubMenu == 1) {
            szOnSubClass1 = 'on';
        } else if (nSubMenu == 2) {
            szOnSubClass2 = 'on';
        } else if (nSubMenu == 3) {
            szOnSubClass3 = 'on';
        }

        var szPointUrl = '/Report/AfreecaBalloonList.asp';
        var szPrivateHtml = '<h3 class="subTitle"><a href="' + ITEM_AFREECATV + '/starballoon.php">선물·후원</a></h3>';
        szPrivateHtml += '<div id="menu">';
        szPrivateHtml += '  <ul class="menu text ' + szDepClass + '">';
        szPrivateHtml += '    <li class="' + szOnClass1 + '">';
        szPrivateHtml += '    <a href="' + ITEM_AFREECATV + '/starballoon.php">별풍선</a></li>';

        szPrivateHtml += '    <li class="' + szOnClass3 + '">';
        szPrivateHtml += '    <a href="' + ITEM_AFREECATV + '/subscription.php">구독</a>';
        if (szOnClass3 == 'on') {
            szPrivateHtml += '      <ul class="sub">';
            szPrivateHtml += '        <li class="' + szOnSubClass1 + '"><a href="' + ITEM_AFREECATV + '/subscription.php">구독하기</a></li>';
            szPrivateHtml += '        <li class="' + szOnSubClass2 + '"><a href="' + ITEM_AFREECATV + '/signature_emoticon.php">시그니처 이모티콘</a></li>';
            szPrivateHtml += '        <li class="' + szOnSubClass3 + '"><a href="' + ITEM_AFREECATV + '/subscription_personalcon.php">구독 퍼스나콘</a></li>';
            szPrivateHtml += '      </ul>';
        }
        szPrivateHtml += '    </li>';

        szPrivateHtml += '    <li class="' + szOnClass2 + '">';
        szPrivateHtml += '    <a href="' + POINT_SSL + szPointUrl + '">내 선물·후원 정보</a>';
        if (szOnClass2 == 'on') {
            szPrivateHtml += '      <ul class="sub">';
            szPrivateHtml += '        <li class="' + szOnSubClass1 + '"><a href="' + POINT_SSL + szPointUrl + '">별풍선 정보</a></li>';
            szPrivateHtml += '        <li class="' + szOnSubClass2 + '"><a href="' + POINT_SSL + '/Subscription/SubscriptionList.asp">구독 정보</a></li>';
            szPrivateHtml += '      </ul>';
        }
        szPrivateHtml += '    </li>';
        szPrivateHtml += '  </ul>';
        szPrivateHtml += '</div>';
        var szSubGnb = aGlobalGnb.join('') + szPrivateHtml;

        document.write(szSubGnb);
        FreecshotStart(szLocale);
        this.setGlobalEvent();
    },
    setItemGnb: function (nMenu) {

        var aGlobalGnb = this.setServiceUtilHeader();

        var szPrivateHtml = '<h3 class="subTitle"><a href="' + ITEM_AFREECATV + '/quickview.php">아이템</a></h3>';
        szPrivateHtml += '<div id="menu">';
        szPrivateHtml += '  <ul class="menu text">';
        szPrivateHtml += '    <li class="' + ([2, 3, 4, 6].indexOf(nMenu) === -1 ? 'on' : '') + '">';
        szPrivateHtml += '    <a href="' + ITEM_AFREECATV + '/quickview.php">퀵뷰</a></li>';
        szPrivateHtml += '    <li class="' + (nMenu == 2 ? 'on' : '') + '">';
        szPrivateHtml += '    <a href="' + ITEM_AFREECATV + '/gold.php">스티커 구매</a></li>';
        szPrivateHtml += '    <li class="' + (nMenu == 3 ? 'on' : '') + '">';
        szPrivateHtml += '    <a href="' + ITEM_AFREECATV + '/sticker.php">스티커 교환</a></li>';
        szPrivateHtml += '    <li class="' + (nMenu == 6 ? 'on' : '') + '">';
        szPrivateHtml += '    <a href="' + POINT_SSL + '/report/AfreecaUseList.asp">내 아이템 정보</a></li>';
        szPrivateHtml += '  </ul>';
        szPrivateHtml += '</div>';

        var szSubGnb = aGlobalGnb.join('') + szPrivateHtml;

        document.write(szSubGnb);
        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    setTokenGnb: function (nMenu) {
        bPrivate = typeof oPrivate != "undefined";
        var aGlobalGnb = [];

        aGlobalGnb.push('<div id="gArea">');
        aGlobalGnb.push('   <h1><a href="' + WWW_AFREECATV + '" target="_top">afreecaTV</a></h1>');
        aGlobalGnb.push('   <div class="unit_area">');
        aGlobalGnb.push('       <div id="logArea" class="login_area">');

        if (ticket && bPrivate) {
            // 알림 리스트
            this.getNotificationList(aGlobalGnb);
            aGlobalGnb.push('           <!-- 로그인 후-->');
            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? '<span class="new">New</span>' : '';
            aGlobalGnb.push('   <a href="javascript:;" class="nickname">' + szNoteNew + this.getNicknameEntity(oPrivate.CHANNEL.LOGIN_NICK) + '<em></em></a>');
            aGlobalGnb.push('           <div id="userArea" class="user_area">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('       <!-- //로그인 후 -->');
        } else {
            aGlobalGnb.push('           <!-- 로그인 전 -->');
            aGlobalGnb.push('           <span class="join_area">');
            if (!ticket) {
                aGlobalGnb.push('               <a href="javascript:oGnb.goLogin();" class="login">로그인</a>');
            }
            aGlobalGnb.push('           </span>');
            aGlobalGnb.push('           <!-- //로그인 전 -->');
        }
        aGlobalGnb.push('       </div>');
        aGlobalGnb.push('       <!-- 서비스메뉴 -->');
        aGlobalGnb.push('       <div id="menuArea">');
        aGlobalGnb.push('           <p class="btn_menu"><a href="javascript:;" id="serviceMenu"  title="전체메뉴"><span>서비스 메뉴</span></a></p>');
        aGlobalGnb.push('           <div id="subMenu" class="menu_area" style="display:none;">' + oGnb.getLayerMenu('sub') + '</div>');
        aGlobalGnb.push('       </div>');
        aGlobalGnb.push('       <!-- //서비스메뉴 -->');
        aGlobalGnb.push('   </div>');
        aGlobalGnb.push('</div>');

        var szPrivateHtml = '<h3 class="af_title"><a href="' + TOKEN_AFREECATV + '">토큰</a></h3>';
        szPrivateHtml += '<div id="menu">';
        szPrivateHtml += '  <ul class="menu text">';
        szPrivateHtml += '    <li class="' + ([2].indexOf(nMenu) === -1 ? 'on' : '') + '">';
        szPrivateHtml += '    <a href="' + TOKEN_AFREECATV + '">상품교환</a></li>';
        szPrivateHtml += '    <li class="' + (nMenu == 2 ? 'on' : '') + '">';
        szPrivateHtml += '    <a href="' + TOKEN_AFREECATV + '/index.php?page=my_list">내 상품정보</a></li>';
        szPrivateHtml += '  </ul>';
        szPrivateHtml += '</div>';
        szPrivateHtml += '<div class="cb"></div>';
        var szSubGnb = '<div id="af_gnb_sub">' + aGlobalGnb.join('') + '<div class="gnb_wrap">' + szPrivateHtml + '</div></div>';

        document.write(szSubGnb);

        this.setGlobalEvent();
    },
    setVodMainGnb: function () {
        useDarkmode = true;
        var aGlobalGnb = this.setServiceUtilHeader();

        var szMainGnb = aGlobalGnb.join('');
        document.getElementById('topInnerHeader').insertAdjacentHTML("beforeend", szMainGnb);

        szSearchType = "video";
        szSearchLocation = "vod_main";
        FreecshotStart(szLocale);
        this.setGlobalEvent();
    },
    setRankMainGnb: function () {
            bPrivate = typeof oPrivate != 'undefined';
            useDarkmode = true;
            var aGlobalGnb = [];

            if (szLocale != 'ko_KR') {
                aGlobalGnb.push('<div class="btn_down">');
                aGlobalGnb.push('   <a href="https://www.oculus.com/experiences/quest/3120447294725423/?ranking_trace=0_3120447294725423_QUESTSEARCH_11a6a88c-e22c-42ee-b227-b85956609632" target="_blank" class="btn_oculus"><em>oculus Download</em></a>');
                aGlobalGnb.push('   <a href="https://www.microsoft.com/ko-kr/p/afreecatv-vr/9p8bnf30snr3?rtc=1&amp;activetab=pivot:overviewtab" target="_blank" class="btn_ms"><em>microsoft Download</em></a><em>');
                aGlobalGnb.push('   </em>');
                aGlobalGnb.push('</div>');
            }

            aGlobalGnb.push('<div class="serviceUtil">');
            if (szLocale == 'ko_KR' && ticket) {
                aGlobalGnb.push('<button class="btn-broadcast" id="studioPlayKor" tip="방송하기">방송하기</button>');
            } else {
                aGlobalGnb.push('<button class="btn-broadcast" id="studioPlay" tip="방송하기">방송하기"</button>');
            }

            // notice list
            this.getNotificationList(aGlobalGnb);
            if (ticket && bPrivate) {
                // if ('ko_KR' != 'ko_KR') {
                //     aGlobalGnb.push('   <a href="' + GHELP_AFREECATV + '" class="ghelp" style="">헬프페이지<em></em></a>');
                // }
                var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? 'new' : '';

                aGlobalGnb.push('   <!-- After Login-->');
                aGlobalGnb.push('   <div class="profileWrap" id="profileWrapBtn">');
                aGlobalGnb.push('       <div class="userInfo ' + szNoteNew + '">');
                aGlobalGnb.push('           <div class="thumb">');
                aGlobalGnb.push('               <img src="' + PROFILE_IMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/' + oPrivate.CHANNEL.LOGIN_ID + '.jpg" ' +
                                                    'onerror="$(this).parent().html(\'<span class=thumb-default></span>\'); this.remove();"/>');
                aGlobalGnb.push('           </div>')
                aGlobalGnb.push('           <button type="button" id="profileBtn" class="btn-login">' + oPrivate.CHANNEL.LOGIN_NICK + '</button>');
                aGlobalGnb.push('       </div>');
                aGlobalGnb.push('       <div id="userArea" class="loginUserMenu">' + oGnb.getMyLayer() + '</div>');
                aGlobalGnb.push('   </div>');
                aGlobalGnb.push('   <!-- //After Login -->');
            } else {
                aGlobalGnb.push('   <!-- Before Login -->');

                if (!ticket) {
                    aGlobalGnb.push('<a href="javascript:oGnb.goLogin();"><button type="button" id="loginBtn" class="btn-login">로그인</button></a>');
                }

                this.getDarkModeArea(aGlobalGnb);

                // if ('ko_KR' != 'ko_KR') {
                //     aGlobalGnb.push('       <a href="' + MEMBER_AFREECATV + '/app/join.php" class="join"><span>회원가입</span></a>');
                //     aGlobalGnb.push('   </span>');
                // }
                aGlobalGnb.push('   <!-- //Before Login -->');
            }
            aGlobalGnb.push('<!-- service menu -->');
            aGlobalGnb.push('<div class="serviceMenu" id="serviceMenuList">');
            aGlobalGnb.push('<button type="button" id="btnAllMenu" class="btn-allMenu" tip="전체메뉴">전체메뉴</button>');
            aGlobalGnb.push('   <div id="allMenu" class="allMenuList">' + oGnb.getAllLayerMenu() + '</div>');
            aGlobalGnb.push('<!-- //service menu -->');
            aGlobalGnb.push('   </div>');
            aGlobalGnb.push('</div>');

            var szRankMainGnb = aGlobalGnb.join('');
            document.write(szRankMainGnb);
            FreecshotStart(szLocale);

            this.setGlobalEvent();
    },
    setSportsMainGnb: function () {
        bPrivate = typeof oPrivate != 'undefined';
        useDarkmode = false;
        var aGlobalGnb = [];
        
        if (szLocale != 'ko_KR') {
            aGlobalGnb.push('<div class="btn_down">');
            aGlobalGnb.push('   <a href="https://www.oculus.com/experiences/quest/3120447294725423/?ranking_trace=0_3120447294725423_QUESTSEARCH_11a6a88c-e22c-42ee-b227-b85956609632" target="_blank" class="btn_oculus"><em>oculus Download</em></a>');
            aGlobalGnb.push('   <a href="https://www.microsoft.com/ko-kr/p/afreecatv-vr/9p8bnf30snr3?rtc=1&amp;activetab=pivot:overviewtab" target="_blank" class="btn_ms"><em>microsoft Download</em></a><em>');
            aGlobalGnb.push('   </em>');
            aGlobalGnb.push('</div>');
        }
        aGlobalGnb.push('<div class="serviceUtil">');
        if (szLocale == 'ko_KR' && ticket) {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlayKor" tip="방송하기">방송하기</button>');
        } else {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlay" tip="방송하기">방송하기</button>');
        }

        // notice list
        this.getNotificationList(aGlobalGnb);

        if (ticket && bPrivate) {
            // if ('ko_KR' != 'ko_KR') {
            //     aGlobalGnb.push('   <a href="' + GHELP_AFREECATV + '" class="ghelp" style="">헬프페이지<em></em></a>');
            // }
            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? 'new' : '';

            aGlobalGnb.push('   <!-- After Login-->');
            aGlobalGnb.push('   <div class="profileWrap" id="profileWrapBtn">');
            aGlobalGnb.push('       <div class="userInfo ' + szNoteNew + '">');
            aGlobalGnb.push('           <div class="thumb">');
            aGlobalGnb.push('               <img src="' + PROFILE_IMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/' + oPrivate.CHANNEL.LOGIN_ID + '.jpg" ' +
                                                'onerror="$(this).parent().html(\'<span class=thumb-default></span>\'); this.remove();"/>');
            aGlobalGnb.push('           </div>')
            aGlobalGnb.push('           <button type="button" id="profileBtn" class="btn-login">' + oPrivate.CHANNEL.LOGIN_NICK + '</button>');
            aGlobalGnb.push('       </div>');
            aGlobalGnb.push('       <div id="userArea" class="loginUserMenu">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('   </div>');
            aGlobalGnb.push('   <!-- //After Login -->');
        } else {
            aGlobalGnb.push('   <!-- Before Login -->');
            if (!ticket) {
                aGlobalGnb.push('<a href="javascript:oGnb.goLogin();"><button type="button" id="loginBtn" class="btn-login">로그인</button></a>');
            }

            this.getDarkModeArea(aGlobalGnb);
            // if ('ko_KR' != 'ko_KR') {
            //     aGlobalGnb.push('       <a href="' + MEMBER_AFREECATV + '/app/join.php" class="join"><span>회원가입</span></a>');
            //     aGlobalGnb.push('   </span>');
            // }
            aGlobalGnb.push('   <!-- //Before Login -->');
        }

        aGlobalGnb.push('<!-- service menu -->');
        aGlobalGnb.push('<div class="serviceMenu" id="serviceMenuList">');
        aGlobalGnb.push('<button type="button" id="btnAllMenu" class="btn-allMenu" tip="전체메뉴">전체메뉴</button>');
        aGlobalGnb.push('   <div id="allMenu" class="allMenuList">' + oGnb.getAllLayerMenu() + '</div>');
        aGlobalGnb.push('<!-- //service menu -->');
        aGlobalGnb.push('   </div>');
        aGlobalGnb.push('</div><!--//serviceUtil-->');

        aGlobalGnb.push('<!-- quick menu -->');
        aGlobalGnb.push('<div class="menu_bar">');
        aGlobalGnb.push('   <h2>바로가기메뉴</h2>');
        aGlobalGnb.push('   <ul class="list_a">');
        aGlobalGnb.push('       <li><a href="' + WWW_AFREECATV + '/?hash=sports" target="top">스포츠LIVE</a></li>');
        aGlobalGnb.push('       <li><a href="' + AFEVENT2_AFREECATV + '/app/rank/index.php?szWhich=sports_broadcast" target="top">스포츠중계 랭킹</a></li>');
        aGlobalGnb.push('       <li><a href="' + AFEVENT2_AFREECATV + '/app/rank/index.php?szWhich=sports_general" target="top">스포츠일반 랭킹</a></li>');
        aGlobalGnb.push('       <li><a href="./sportsbj/info.php" target="top">스포츠BJ</a></li>');
        aGlobalGnb.push('       <li><a href="' + BJ_AFREECATV + '/afsports/post/71815269" target="top">중계권안내</a></li>');
        aGlobalGnb.push('   </ul>');
        // aGlobalGnb.push('   <ul class="list_b">');
        // aGlobalGnb.push('   <li><a href="' + ITEM_AFREECATV + '/quickview.php">아이템</a></li>');
        // aGlobalGnb.push('   <li><a href="' + ITEM_AFREECATV + '/starballoon.php">별풍선</a></li>');
        // aGlobalGnb.push('   <li><a href="' + AFWBBS1_AFREECATV + '/app/index.php?board=notice" >알림</a></li>');
        // aGlobalGnb.push('   <li><a href="' + SOTONG_AFREECATV + '">소통센터</a></li>');
        // aGlobalGnb.push('   <li><a href="' + HELP_AFREECATV + '/atv.php"  >고객센터</a></li>');
        // aGlobalGnb.push('   </ul>');
        aGlobalGnb.push('</div>');
        aGlobalGnb.push('<!-- //quick menu -->');

        var szMainGnb = aGlobalGnb.join('');
        document.write(szMainGnb);
        // freecshot click event
        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    setDevelopersGnb: function (nMenu) {
        bPrivate = typeof oPrivate != "undefined";
        var aGlobalGnb = [];
        aGlobalGnb.push('<h1 class="logo">');
        aGlobalGnb.push('    <a href="' + WWW_AFREECATV + '" target="_blank" title="아프리카TV 홈으로">아프리카TV</a>');
        aGlobalGnb.push('    <a href="' + DEVELOPERS_AFREECATV + '" class="developers" title="Developers 홈으로">Developers</a>');
        aGlobalGnb.push('</h1>');
        aGlobalGnb.push('<ul class="gnb">');
        var szClass = '';
        $.each(oSubGnb.list, function (i, oMenu) {
            szClass = '';
            if (i == nMenu) szClass = 'on';
            if (i == 0 || i == 4) return;   // 20230607 developers extension 추가
            aGlobalGnb.push('    <li class="' + szClass + '"><a href="' + oMenu.url + '">' + oMenu.name + '</a></li>');
        });
        if ((ticket && bPrivate)) {
            aGlobalGnb.push('           <!-- 로그인 후-->');
            aGlobalGnb.push('    <li class="login active ' + szClass + '">');
            aGlobalGnb.push('        <a href="' + DEVELOPERS_AFREECATV + '?szWork=myinfo">');
            aGlobalGnb.push('            <span class="thum"><img src="' + PROFILE_IMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/' + oPrivate.CHANNEL.LOGIN_ID + '.jpg" alt="썸네일"></span>');
            aGlobalGnb.push('            <span>' + this.getNicknameEntity(oPrivate.CHANNEL.LOGIN_NICK) + '</span>');
            aGlobalGnb.push('        </a>');
            aGlobalGnb.push('    </li>');
            aGlobalGnb.push('           <!-- //로그인 후 -->');
        } else {
            aGlobalGnb.push('           <!-- 로그인 전-->');
            aGlobalGnb.push('    <li class="login">');
            if (!ticket) {
                aGlobalGnb.push('        <a href="javascript:oGnb.goLogin(\'' + DEVELOPERS_AFREECATV + '\');">');
                aGlobalGnb.push('            <span>Login</span>');
                aGlobalGnb.push('        </a>');
            }
            aGlobalGnb.push('    </li>');
            aGlobalGnb.push('           <!-- //로그인 전 -->');
        }
        aGlobalGnb.push('</ul>');

        var szHeader = aGlobalGnb.join('');
        document.write(szHeader);
    },
    setServiceUtilHeader: function () {
        bPrivate = typeof(oPrivate) != 'undefined';
        var aGlobalGnb = [];

        aGlobalGnb.push('<div class="serviceUtil">');
        // broadcast
        if (szLocale == 'ko_KR' && ticket) {
            aGlobalGnb.push('   <button type ="button" class="btn-broadcast" id="studioPlayKor" tip="방송하기">방송하기</button>');
        } else if(szLocale == 'ja_JP' && ticket){
            aGlobalGnb.push('<div class="jp_broadcast_wrap">');
            aGlobalGnb.push('<button type="button" class="btn-broadcast" tip="방송하기" id ="studioJapan">방송하기</button>');
            aGlobalGnb.push('<ul class="broadcast_select">');
            aGlobalGnb.push('<li class="fs" id="studioPlayKor"><a href="javascript:void(0)" onclick="return false;">FreecShot</a></li>');
            aGlobalGnb.push('<li class="db"><a href="javascript:void(0)" onclick="window.open(DASHBOARD, \'_blank\'); return false;">Dashboard</a></li>');
            aGlobalGnb.push('</ul>');
            aGlobalGnb.push('</div>'); 
        } else {
            aGlobalGnb.push('   <button type ="button" class="btn-broadcast" id="studioPlay" tip="방송하기">방송하기</button>');
        }

        this.getNotificationList(aGlobalGnb);

        // userInfo
        if (ticket && bPrivate) {
            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? 'new' : '';

            aGlobalGnb.push('   <!-- After Login-->');
            aGlobalGnb.push('   <div class="profileWrap" id="profileWrapBtn">');
            aGlobalGnb.push('       <div class="userInfo ' + szNoteNew + '">');
            aGlobalGnb.push('           <div class="thumb">');
            aGlobalGnb.push('               <img src="' + PROFILE_IMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/' + oPrivate.CHANNEL.LOGIN_ID + '.jpg" ' +
                'onerror="$(this).parent().html(\'<span class=thumb-default></span>\'); this.remove();"/>');
            aGlobalGnb.push('           </div>')
            aGlobalGnb.push('           <button type="button" id="profileBtn" class="btn-login">' + oPrivate.CHANNEL.LOGIN_NICK + '</button>');
            aGlobalGnb.push('       </div>');
            aGlobalGnb.push('       <div id="userArea" class="loginUserMenu">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('   </div>');
            aGlobalGnb.push('   <!-- //After Login -->');
        } else {
            aGlobalGnb.push('   <!-- Before Login -->');

            if (!ticket) {
                aGlobalGnb.push('   <a href="javascript:oGnb.goLogin();"><button type="button" id="loginBtn" class="btn-login">로그인</button></a>');
                //aGlobalGnb.push('btn-login');
            }
            this.getDarkModeArea(aGlobalGnb);
            aGlobalGnb.push('   <!-- // Before Login -->');
        }

        aGlobalGnb.push('   <!-- service menu -->');
        aGlobalGnb.push('<div class="serviceMenu" id="serviceMenuList">');
        aGlobalGnb.push('   <button type="button" id="btnAllMenu" class="btn-allMenu" tip="전체메뉴">전체메뉴</button>');
        aGlobalGnb.push('   <div id="allMenu" class="allMenuList">' + oGnb.getAllLayerMenu() + '</div>');
        aGlobalGnb.push('   <!-- //service menu -->');
        aGlobalGnb.push('   </div>');
        aGlobalGnb.push('</div><!-- //serviceUtil-->');

        return aGlobalGnb;
    },
    setGlobalEvent: function () {
        $('.go_extension_management').click(function () {
            oGnb.setExtensionLog("ext_makert", "bj_setting");
            window.open("https://dashboard.afreecatv.com/extension/index.php?page=market", '_blank', "width=540,height=1000");
        });

        $('div#userArea a.logout').click(function () {
            oGnb.goLogout(szLogoutUrl);
        });

        $('#userArea, #subMenu').click(function (e) {
            e.stopPropagation();
        });

        $('#logArea .nickname').click(function(event) {
            if ($('#profileWrapBtn').hasClass('on')) {
                $('#profileWrapBtn').removeClass('on');
            }
            $("#subMenu").fadeOut(100);
            $("#subMenu").fadeOut(100);
            if (typeof($oFeed) != "undefined") {
                $oFeed.event.root.FeedHide(event);
            }
            return false;
        });

        // AfterLogin : profile click-event
        $('#profileWrapBtn').click(function (event) {
            if (!$('#profileWrapBtn').hasClass('on')) {
                $('#profileWrapBtn').addClass('on');
            }else{
                $('#profileWrapBtn').removeClass('on');
            }
            if ($('#serviceMenuList').hasClass('on')) {
                $('#serviceMenuList').removeClass('on');
            }
            if ($('.jp_broadcast_wrap').hasClass('on')) {
                $('.jp_broadcast_wrap').removeClass('on');
            }
            $('#subMenu').fadeOut(100);
            if (typeof ($oFeed) != 'undefined') {
                $oFeed.event.root.FeedHide(event);
            }
            return false;
        });

        // right total menu btn click-event
        $('#btnAllMenu').click(function (event) {
            if (!$('#serviceMenuList').hasClass('on')) {
                $('#serviceMenuList').addClass('on');
            }else{
                $('#serviceMenuList').removeClass('on');
            }
            if ($('#profileWrapBtn').hasClass('on')) {
                $('#profileWrapBtn').removeClass('on');
            }
            if ($('.jp_broadcast_wrap').hasClass('on')) {
                $('.jp_broadcast_wrap').removeClass('on');
            }
            $('#subMenu').fadeOut(100);
            $('#modeSetArea').fadeOut(100);
            if (typeof ($oFeed) != 'undefined') {
                $oFeed.event.root.FeedHide(event);
            }
            return false;
        });

        // BeforeLogin : 3Dot menu click-event
        $('#btnMore').click(function () {
            $('#modeSetArea').stop().fadeToggle(100);
            if ($('#serviceMenuList').hasClass('on')) {
                $('#serviceMenuList').removeClass('on');
            }
            if (typeof ($oFeed) != 'undefined') {
                $oFeed.event.root.FeedHide(event);
            }
            return false;
        });

        // Japan broadcast btn click-event
        $('#studioJapan').click(function (event) {
            if (!$('.jp_broadcast_wrap').hasClass('on')) {
                $('.jp_broadcast_wrap').addClass('on');
            }else{
                $('.jp_broadcast_wrap').removeClass('on');
            }
            if ($('#profileWrapBtn').hasClass('on')) {
                $('#profileWrapBtn').removeClass('on');
            }
            if ($('#serviceMenuList').hasClass('on')) {
                $('#serviceMenuList').removeClass('on');
            }
            $('#subMenu').fadeOut(100);
            $('#modeSetArea').fadeOut(100);
            if (typeof ($oFeed) != 'undefined') {
                $oFeed.event.root.FeedHide(event);
            }
            return false;
        });

        $(document).click(function (event) {
            if ($('#profileWrapBtn').hasClass('on')) {
                $('#profileWrapBtn').removeClass('on');
            }
            if ($('#serviceMenuList').hasClass('on')) {
                $('#serviceMenuList').removeClass('on');
            }
            if ($('.jp_broadcast_wrap').hasClass('on')) {
                $('.jp_broadcast_wrap').removeClass('on');
            }
            $('#subMenu').fadeOut(100);
            if (typeof ($oFeed) != 'undefined') {
                $oFeed.event.root.FeedHide(event);
            }

            if (!$('#modeSetArea').has(event.target).length) {
                $('#modeSetArea').fadeOut(100);
            }
        });

        $('body').on('change', '#modecheck', function () {
            if ($('#modecheck').is(":checked")) {
                oGnb.checkDarkModeSet('dark');
            } else {
                oGnb.checkDarkModeSet('');
            }
            oGnb.checkDarkModeApply();
            oGnb.balloon();
            animItem.addEventListener('DOMLoaded', function () {
                animItem.playSegments([0, oPrivate.CHANNEL.AD_FRAME], true);
            });
        });
        if ($('#modecheck').length == 1) {
            oGnb.checkDarkModeApply();
        }

        //사용하고있는 페이지의 html과 body에 lang과 class속성 추가
        //헤더에 전체 메뉴탭의 오류를 수정하기위해 임시로 넣어두었으나
        //추후에 다크모드 페이지로 확장이 된다면 TPL단에서 수정해야됨
        if(szLocale !== undefined && szLocale !== ""){
            $('html').attr('lang',szLocale.substring(0,2));
            $('body').addClass(szLocale);
        }

        if (szSearchLocation != 'vod_main' && isSearchVisible) {
            if (typeof require === 'function') {
                require([STATIC_AFREECATV + '/asset/app/search/dist/umd/index.js']);
            } else {
                this.writeDom('<script type="text/javascript" src="' + STATIC_AFREECATV + '/asset/app/search/dist/umd/index.js" class="searchBox" data-type="total" data-location="sub" charset="utf-8"></script>');
            }
        }
        //위쪽 typeof require에 넣고싶었으나 전역에서 사용하는 스크립트이고
        //e스포츠메인은 gnb_global.js호출하는 시점이 requirejs호출하는 시점보다 빨라서
        // typeof function을 타지않아 로드후에 스크립트호출하게변경
        $(function() {
            if(szLocale == 'ko_KR' && ticket){
                if (typeof require === 'function') {
                        require([RES_AFREECATV + '/script/lottie_svg.min.js'], function(response) {
                            window.bodymovin = response;
                            oGnb.balloon();

                        animItem.addEventListener('DOMLoaded', function () {
                            animItem.playSegments([0,oPrivate.CHANNEL.AD_FRAME], true);
                        });
                    });
                }else{
                    $.getScript(RES_AFREECATV+'/script/lottie_svg.min.js').then(function(script, textStatus) {
                        oGnb.balloon();

                        animItem.addEventListener('DOMLoaded', function () {
                        animItem.playSegments([0,oPrivate.CHANNEL.AD_FRAME], true);
                       });

                    });
                }
            }
        });
    },
    getPrivateGnb: function (nMenu, bText) {
        var aPrivateGnb = [];
        var szLocation = window.location.toString().replace(/#(.*)/g, '');

        aPrivateGnb.push('<div id="menu">');

        // nMenu가 key 로 들어왔는지 체크
        bStrMenu = Number.isNaN(parseInt(nMenu));

        var oSubData = null;
            if (bStrMenu) {
                oSubData = oSubGnb.list.find(function (value) {
                    return value.key === nMenu;
                }) || null;
            } else if (parseInt(nMenu) >= 0) {
                oSubData = oSubGnb.list[nMenu] || null;
            }

            if (oSubData !== null && typeof oSubData.sub_menu != "undefined") {
                aPrivateGnb.push('  <ul class="menu text dep2">'); //2 depth
            } else {
                aPrivateGnb.push('  <ul class="menu text">'); //1 depth
            }


        $.each(oSubGnb.list, function (i, oMenu) {
            if (typeof (oMenu.active) != 'undefined') {
                if (oMenu.active === false) return true; //서비스 중지된 것들 노출 제외
            }
            if (typeof (oMenu.show_locale) != 'undefined') {
                if (oMenu.show_locale.indexOf(szLocale) === -1) return true; // 해외 서비스 제외
            }
            var szSubPrivateGnb = '';
            var szOnClass = '';

            var bCurrent = false;
            if (bStrMenu && oMenu.key === nMenu) {
                bCurrent = true;
            }

            if (bCurrent || i === parseInt(nMenu)) {

                if (oMenu.img !== undefined) {
                    oMenu.img = oMenu.img + '_on';
                }

                if (typeof (oMenu.sub_menu) != 'undefined') {
                    szOnClass = 'on ';
                    if (oSubData !== null && oMenu.key === oSubData.key) {
                        szSubPrivateGnb = oGnb.getSubPrivateGnb(i, bText);
                    }
                }

                if (!szOnClass) {
                    szOnClass = "on";
                }
            }

            if ( (i==4) && (szLocation == STAR_AFREECATV + '/'
                            || szLocation == STAR_AFREECATV + '/star.php?todaystar'
                            || szLocation == STAR_AFREECATV + '/star.php?search&szOrder=reg_date'
                            || szLocation == AFWBBS1_AFREECATV + '/app/index.php?board=star_happening') ) {
                szOnClass = "link";
            }

            aPrivateGnb.push('<li class="' + szOnClass + ' ' + (typeof (oMenu.menu_class) != 'undefined' ? oMenu.menu_class : "") + '">');

            var szTarget = '_top';
            if (typeof (oMenu.menu_target) != 'undefined') {
                szTarget = oMenu.menu_target;
            }

            var szIcon = '';
            if (typeof (oMenu.icon) != 'undefined') {
                szIcon = oMenu.icon;
            }

            var szTargetClass = '';
            if (typeof (oMenu.target_class) != 'undefined') {
                szTargetClass = oMenu.target_class;
            }

            if (bText) {
                if (bLocaleGnb) {
                    var locale_name = "name_" + szLocale;
                    aPrivateGnb.push('<a href="' + oMenu.url + '" class="'+ szTargetClass +'" target="' + szTarget + '">' + oMenu[locale_name] + '</a>' + szIcon + szSubPrivateGnb + '</li>');
                } else {
                    aPrivateGnb.push('<a href="' + oMenu.url + '" class="'+ szTargetClass +'" target="' + szTarget + '">' + oMenu.name + '</a>' + szIcon + szSubPrivateGnb + '</li>');
                }
            } else {
                if (oMenu.img !== undefined) {
                    aPrivateGnb.push('<a href="' + oMenu.url + '" class="'+ szTargetClass +'" target="' + szTarget + '"><img alt="' + oMenu.name + '" src="' + RES_AFREECATV + '/images/gnb_new/' + oMenu.img + '.gif"></a>' + szIcon + szSubPrivateGnb + '</li>');
                } else {
                    aPrivateGnb.push('<a href="' + oMenu.url + '" class="'+ szTargetClass +'" target="' + szTarget + '">' + oMenu.name + '</a></li>');
                }

            }
        });

        aPrivateGnb.push('  </ul>');
        aPrivateGnb.push('</div>');

        return aPrivateGnb.join('');
    },
    getSubPrivateGnb: function (nMenu, bText) {
        //2depth 메뉴
        var aSubPrivateGnb = [];
        aSubPrivateGnb.push('<ul class="sub">');

        var maxMenuSize = 0;
        var selectSubMenu = 0;
        var szLocation = window.location.toString().replace(/#(.*)/g, '');
        if (szLocation.indexOf('.sports.' + DOMAIN) > 1) {
            szLocation = location.href.split('?')[0];

            if (document.URL.toString().match('control')) {
                szLocation = document.URL;
            }

            if (szLocation.indexOf('view') > 1) {
                szLocation = szLocation.replace(/view/ig, 'highlight');
            }
        }

        if (szLocation.indexOf('ani.' + DOMAIN) > 1) {
            szLocation = szLocation.replace(/view/ig, 'lists');
        }

        $(oSubGnb.list[nMenu].sub_menu).each(function (i, oSubMenu) {
            if (szLocation.indexOf(oSubMenu.url) > -1 && maxMenuSize < oSubMenu.url.length) {
                maxMenuSize = oSubMenu.url.length;
                selectSubMenu = i;
            }
        });

        $(oSubGnb.list[nMenu].sub_menu).each(function (i, oSubMenu) {
            if (typeof (oSubMenu.active) != 'undefined') {
                if (oSubMenu.active === false) return true; //서비스 중지된 것들 노출 제외
            }

            var szClass = '';
            if (i == selectSubMenu) {
                oSubMenu.img = oSubMenu.img + '_on';
                szClass = 'on';
            }

            var szTarget = '_top';
            if (typeof (oSubMenu.menu_target) != 'undefined') {
                szTarget = oSubMenu.menu_target;
            }

            aSubPrivateGnb.push('<li class="' + szClass + '">');
            if (bText) {
                if (bLocaleGnb) {
                    var locale_name = "name_" + szLocale;
                    aSubPrivateGnb.push('   <a href="' + oSubMenu.url + '" target="' + szTarget + '">' + oSubMenu[locale_name] + '</a>');
                } else {
                    aSubPrivateGnb.push('   <a href="' + oSubMenu.url + '" target="' + szTarget + '">' + oSubMenu.name + '</a>');
                }
            } else {
                aSubPrivateGnb.push('   <a href="' + oSubMenu.url + '" target="' + szTarget + '"><img src="' + RES_AFREECATV + '/images/gnb_new/' + oSubMenu.img + '.gif" alt="' + oSubMenu.name + '"></a>');
            }
            aSubPrivateGnb.push('</li>');
        });

        aSubPrivateGnb.push('</ul>');

        return aSubPrivateGnb.join('');
    },
    setMainEmailConfirm: function () {
        bPrivate = typeof oPrivate != "undefined";
        //해외 계정에서 로그인 되어 있고, 인증이 안된 유저에 대해서 노출 하는 레이어
        if (ticket && bPrivate) {
            //성공 했거나, 아니면 닫기 버튼을 누르면 쿠키에 하루동안 노출 되지 않음
            if (this.isEmailConfirm() == 1) return;
            var aEmailConfirm = [];

            //해외 계정이고 미인증 유저
            if (oPrivate.CHANNEL.LOGIN_CHK == 2) {
                aEmailConfirm.push('<div id="email_confirm_layer" class="email_confirm on">');
                aEmailConfirm.push(' <span></span>');
                aEmailConfirm.push(' <div>');
                aEmailConfirm.push('     <button id="email_confirm_close" type="button">close</button>');
                aEmailConfirm.push('     <p>Please verify your email address to access all of AfreecaTV\'s features. Check <em>' + oPrivate.CHANNEL.LOGIN_EMAIL + '</em></p>');
                aEmailConfirm.push('     <button id="sendEmail" type="button">Send verification email</button>');
                aEmailConfirm.push(' </div>');
                aEmailConfirm.push('</div>');
                var szMainEmailConfirm = aEmailConfirm.join('');
                document.write(szMainEmailConfirm);

                $(function () {
                    $(function () {
                        $('#email_confirm_close').on('click', function () {
                            $('#email_confirm_layer').toggleClass('on');
                            setCookie('isEmailConfirm', 1, DOMAIN, 1);
                        })
                    }),
                        $("#sendEmail").click(function (e) {
                            $.ajax({
                                url: "https://member.afreecatv.com/app/entry.php",
                                type: "POST",
                                xhrFields: {withCredentials: true},
                                data: {
                                    cmd: 'EMAIL_AUTH_CONFIRM',
                                    uid: oPrivate.CHANNEL.LOGIN_ID,
                                    email: oPrivate.CHANNEL.LOGIN_EMAIL
                                },
                                dataType: "json",
                                success: function (data, textStatus, jqXHR) {
                                    if (data.RESULT == 1) {
                                        $('#email_confirm_layer').toggleClass('on');
                                        setCookie('isEmailConfirm', 1, DOMAIN, 1);
                                    } else {
                                        alert(data.MSG);
                                        return;
                                    }
                                },
                                error: function (jqXHR, textStatus, errorThrown) {
                                    //alert("Error btnOk - " + textStatus);
                                }
                            });
                        })
                });
            }
        }
    }, setTotalSearchGnb: function (szKeywordTag) {
        useDarkmode = true;
        var aGlobalGnb = this.setServiceUtilHeader();

        aGlobalGnb.push(' <div id="menu">');
        aGlobalGnb.push('  <ul class="menu text">');
        aGlobalGnb.push('     <li class="" id="li_total"><a href="javascript:;" target="_top" onclick="afreeca.front.search.goPage(\'total\', \'\', \'ALL\', \'main\');">통합검색</a></li>');
        aGlobalGnb.push('     <li class="" id="li_broad"><a href="javascript:;" target="_top" onclick="afreeca.front.search.goPage(\'broad\', \'\', \'ALL\', \'main\');">생방송</a></li>');
        aGlobalGnb.push('     <li class="" id="li_video"><a href="javascript:;" target="_top" onclick="afreeca.front.search.goPage(\'video\', \'\', \'ALL\', \'main\');">VOD</a></li>');
        aGlobalGnb.push('     <li class="" id="li_posts"><a href="javascript:;" target="_top" onclick="afreeca.front.search.goPage(\'post\', \'\', \'ALL\', \'main\');">게시글</a></li>');
        aGlobalGnb.push('     <li class="" id="li_bj"><a href="javascript:;" target="_top" onclick="afreeca.front.search.goPage(\'bj\', \'\', \'ALL\' , \'main\');">BJ</a></li>');
        aGlobalGnb.push('  </ul>');
        aGlobalGnb.push(' </div>');
        aGlobalGnb.push('</div>');
        var szSubGnb = aGlobalGnb.join('');

        document.write(szSubGnb);

        szSearchLocation = "total_search";
        isSearchVisible = false;

        //프릭샷 클릭이벤트
        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    getMyLayer: function () {
        //loginUserMenu
        var aMyLayer = [];
        var szPointUrl = '/Report/AfreecaBalloonList.asp';

        aMyLayer.push('<div class="btn_quick">');
        if (Number(oPrivate.CHANNEL.SET_HOME)) {
            aMyLayer.push(' <a href="' + BJ_AFREECATV + '/' + oPrivate.CHANNEL.LOGIN_ID + '" target="_blank" class="mybs" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=station\')";>방송국</a>');
        } else {
            aMyLayer.push(' <a href="' + BJ_AFREECATV + '/' + oPrivate.CHANNEL.LOGIN_ID + '" target="_blank" class="mybs" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=home\')";>HOME</a>');
        }

        aMyLayer.push(' <a href="' + MY_AFREECATV + '/favorite" target="_top" onclick="callAU(\'TRY_MENU_FAV\'); oGnb.setClickLog(\'gnb_00000001\',\'button_type=favorite\');" class="favorite"><span>즐겨찾기</span></a>');
        aMyLayer.push('</div>');

        aMyLayer.push('<ul class="menuList">');
        // 헤더 -> 프로필 폴딩메뉴 -> (내 아이템, 내 별풍선, 내 구독)
        aMyLayer.push(' <li><a class="my_item" href="' + POINT_AFREECATV + '/report/AfreecaUseList.asp" target="_top" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=item\')";><span>내 아이템</span></a></li>');
        aMyLayer.push(' <li><a class="my_balloon" href="' + POINT_AFREECATV + szPointUrl + '" target="_top" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=balloon\')";><span>내 별풍선</span></a></li>');
        aMyLayer.push(' <li><a class="my_gd" href="' + POINT_AFREECATV + '/Subscription/SubscriptionList.asp" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=subscription\')";><span>내 구독</span></a></li>');

        //국내만
        if ('ko_KR' == 'ko_KR') {
            // 헤더 -> 프로필 폴딩메뉴 -> (내 애드벌룬, 내 광고, 내 포인트 내 크레딧, 내 수익, 내 통계)
            aMyLayer.push(' <li><a class="my_spon" href="' + ADCON_SSL_DOMAIN + '/savings.php?view=myadballoon" target="_top" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=adballoon\')";><span>내 애드벌룬</span></a></li>');
            aMyLayer.push(' <li><a class="my_bene" href="' + ADREVENUE_AFREECATV + ' " target="_top" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=advertising\')";><span>내 광고</span></a></li>');
            aMyLayer.push(' <li><a class="my_point" href="' + MYPOINT_AFREECATV + '/index.php?szWork=point_status" target="_top" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=point\')";><span>내 포인트</span></a></li>');
            aMyLayer.push(' <li><a class="my_tk" href="' + MYPOINT_AFREECATV + '/index.php?szWork=token_status" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=token\')"; ><span>내 크레딧</span></a></li>');
            aMyLayer.push(' <li><a class="my_profit" href="' + MYREVENUE_AFREECATV + '/" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=profit\')";><span>내 수익</span></a></li>');
            aMyLayer.push(' <li><a class="my_stat" href="' + BROADSTATISTIC_AFREECATV + '/" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=stat\')";><span>내 통계</span></a></li>');
        }
        var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? '<span class="new">New</span>' : '';
        var nNoteCnt = (oPrivate.CHANNEL.NOTE_NEW > 0) ? oPrivate.CHANNEL.NOTE_NEW : 0;

        aMyLayer.push(' <li><a class="my_message" href="' + NOTE_AFREECATV + '/app/index.php" target="_top" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=note\')";><span  >내 쪽지</span> <span class="memo">' + nNoteCnt + '</span><span >개</span>' + szNoteNew + '</a></li>');

        if (szLocale == 'en_US') {
            aMyLayer.push('<li ><a class="Account_info" href="' + MEMBER_8111 + '/app/user_info.php" target="_top" class="myinfo" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=my_info\')";><span  >내 정보</span></a></li>');
        }
        aMyLayer.push(' </ul>');
        // 국내만
        if (szLocale == 'ko_KR') {
            // 헤더 -> 프로필 폴딩메뉴 -> (외부장치 방송 설정 버튼, MY 쇼핑)
            aMyLayer.push('<ul class="menuList">');
            aMyLayer.push(' <li><a class="extensions" href="' + EXTENSION_AFREECATV + '" target="_top" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=ext_market\');"><span  >확장 프로그램 마켓</span></a></li>');
            aMyLayer.push(' <li><a class="my_dashboard" href="' + DASHBOARD_AFREECATV + '/index.php" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=dashboard\')";><span  >외부장치 방송 설정</span></a></li>');
            aMyLayer.push('</ul>');
            aMyLayer.push('<ul class="menuList borderT">');
            aMyLayer.push(' <li><a class="my_shopping" href="' + SHOPFREECA_AFREECATV + '/mypage" target="_top" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=shopping\')";><span  >MY 쇼핑</span></a></li>');
            aMyLayer.push('</ul>');
        }
        aMyLayer.push('</ul>');
        if (useDarkmode && !darkException && (szLocale == 'ko_KR')) {
            aMyLayer.push('<div class="modeSet">');
            aMyLayer.push('<strong class="my_mode">어두운모드</strong>');
            aMyLayer.push('<input type="checkbox" id="modecheck">');
            aMyLayer.push('<label class="modecheck" for="modecheck"></label>');
            aMyLayer.push('<p>이 브라우저에만 적용됩니다</p>');
            aMyLayer.push('</div>');
        }

        aMyLayer.push(' <div class="userFootMenu">');
        if (szLocale != 'en_US') {
            aMyLayer.push('     <a href="' + MEMBER_8111 + '/app/user_info.php" target="_top" class="myinfo" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=my_info\')";>내 정보</a>');
        } else {
            aMyLayer.push('     <a href="' + WWW_AFREECATV + '/policy/lang/policy2_en.html" target="_top" class="myinfo" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=privacy\')";><span>Privacy</span></a>');
        }

        if (szLocale == 'ko_KR') {
            aMyLayer.push('     <a href="' + MEMBER_8111 + '/app/user_security.php" target="_top" class="safe" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=security\')";><span  >내 정보 보호</span></a>');
        }

        aMyLayer.push('     <a href="javascript:;" class="logout" onclick="oGnb.setClickLog(\'gnb_00000001\',\'button_type=logout\')";><span  >로그아웃</span></a>');
        aMyLayer.push('</div>');

        return aMyLayer.join('');
    },
    getLayerMenu: function (szType) {
        var aLayerMenu = [];
        var szTag = '';
        var szTarget = '';
        var szStatistic = '';
        var szTranslateTag = "";
        var szTranslateTag = "";
        var szListStyleName = "";

        aLayerMenu.push('<span class="arrw"></span>');
        aLayerMenu.push('<div class="inner_area">');

        for (var nLayer = 0; nLayer < 4; nLayer++) {
            //해외 list_m2 건너뜀
            if (szLocale != 'ko_KR' && nLayer == 1) {
                continue;
            }
            szListStyleName = "list_m" + (nLayer + 1);
            aLayerMenu.push('<ul class="list_m ' + szListStyleName + '">');

            $.each(oCommonGnb.menu[nLayer], function (i, oMenu) {
                aLayerMenu.push('<li>');

                szTarget = '_top';
                if (typeof (oMenu.menu_target) != 'undefined') {
                    szTarget = oMenu.menu_target;
                }

                szTag = '';
                if (typeof (oMenu.tag) != 'undefined') {
                    szTag = '<span class="' + oMenu.tag + '">' + oMenu.tag + '</span>';
                }

                szStatistic = '';
                if (typeof (oMenu.statistic_tag) != 'undefined') {
                    szStatistic = 'onclick="callAU(\'' + oMenu.statistic_tag + '\');"';
                }

                szTranslateTag = '';
                szTranslateTag = strip_tags(oMenu.name, '<i>');
                aLayerMenu.push('<a href="' + oMenu.url + '" target="' + szTarget + '" ' + szStatistic + '><span data-translate="' + szTranslateTag + '">' + oMenu.name + '</span>' + szTag + '</a></li>');
            });
            aLayerMenu.push('</ul>');
        }

        aLayerMenu.push('</div>');
        if (szLocale == 'ko_KR') {
            aLayerMenu.push('<ul class="family_site">');
            $.each(oCommonGnb.family.list, function (i, oFamily) {
                if (typeof (oFamily.menu_class) != 'undefined') {
                    aLayerMenu.push('<li class="' + oFamily.menu_class + '">');
                } else {
                    aLayerMenu.push('<li>');
                }

                szTarget = '_top';
                if (typeof (oFamily.menu_target) != 'undefined') {
                    szTarget = oFamily.menu_target;
                }

                szTag = '';
                if (typeof (oFamily.tag) != 'undefined') {
                    szTag = '<span class="' + oFamily.tag + '">' + oFamily.tag + '</span>';
                }

                szStatistic = '';
                if (typeof (oFamily.statistic_tag) != 'undefined') {
                    szStatistic = 'onclick="callAU(\'' + oFamily.statistic_tag + '\');"';
                }

                szTranslateTag = '';
                szTranslateTag = strip_tags(oFamily.name, '<i>');
                aLayerMenu.push('<a href="' + oFamily.url + '" ' + szStatistic + ' target="' + szTarget + '"><span data-translate="' + szTranslateTag + '">' + oFamily.name + '</span>' + szTag + '</a></li>');
            });
        }
        aLayerMenu.push('</ul>');

        return aLayerMenu.join('');
    },
    getAllLayerMenu: function() {
            var aLayerMenu = [];
            var szTag = '';
            var szTarget = '';
            var szStatistic = '';
            var szTranslateTag = "";
            var szListStyleName = "";
            if(szLocale == 'ko_KR'){
                var LayerMenu = ['콘텐츠', '후원 및 아이템', '서비스', 'BJ'];
            }else{
                var LayerMenu = ['콘텐츠', '후원 및 아이템', 'BJ'];
            }
            aLayerMenu.push('<div class="inner">');

            for (var nLayer = 0; nLayer < LayerMenu.length; nLayer++) {
                aLayerMenu.push('<dl class="menu0' + (nLayer+1) + '">');

                $.each(oCommonGnb.menu[nLayer], function(i, oMenu) {
                    if(i === 0){
                        aLayerMenu.push('<dt>'+LayerMenu[nLayer]+'</dt>')
                    }
                    szTarget = '_top';
                    if (typeof(oMenu.menu_target) != 'undefined') {
                        szTarget = oMenu.menu_target;
                    }

                    szTag = '';
                    if (typeof(oMenu.tag) != 'undefined') {
                        szTag = oMenu.tag;
                    }

                    szStatistic = '';
                    if (typeof(oMenu.statistic_tag) != 'undefined') {
                        szStatistic = 'onclick="callAU(\'' + oMenu.statistic_tag + '\');"';
                    }
                    szTranslateTag = '';
                    szTranslateTag = strip_tags(oMenu.name, '<i>');
                    aLayerMenu.push('<dd class="'+szTag+'" data-translate="' + szTranslateTag + '"><a href="' + oMenu.url + '" target="' + szTarget + '" ' + szStatistic + '>' + oMenu.name + '</a></dd>');
                });
                aLayerMenu.push('</dl>');
            }

            aLayerMenu.push('</div>');

            return aLayerMenu.join('');
        },
    getDarkModeArea: function(aGlobalGnb) {
        aGlobalGnb.push('<button type="button" class="btn-settings" tip="설정" id="btnMore">설정</button>');
        aGlobalGnb.push('<div class="modeSetting" id="modeSetArea" style="display:none;">');
        if (useDarkmode && !darkException && (szLocale == 'ko_KR')) {
            aGlobalGnb.push('    <div class="modeSet">');
            aGlobalGnb.push('        <strong class="my_mode">어두운모드</strong>');
            aGlobalGnb.push('        <input type="checkbox" id="modecheck">');
            aGlobalGnb.push('        <label class="modecheck" for="modecheck"></label>');
            aGlobalGnb.push('        <p>이 브라우저에만 적용됩니다</p>');
            aGlobalGnb.push('    </div>');
        }
        aGlobalGnb.push('    <ul>');
        aGlobalGnb.push('        <li><a href="' + ITEM_AFREECATV + '/quickview.php" class="my_item" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=item\')";>아이템</a></li>');
        aGlobalGnb.push('        <li><a href="' + ITEM_AFREECATV + '/starballoon.php" class="my_balloon" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=balloon\')";>별풍선</a></li>');
        if (szLocale == 'ko_KR') {
            aGlobalGnb.push('            <li><a href="' + EXTENSION_AFREECATV + '" class="extensions" target="_top" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=ext_market\');">확장 프로그램 마켓</a></li>');
            aGlobalGnb.push('        <li><a href="' + SOTONG_AFREECATV + '" class="my_sotong" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=sotong\')";>소통센터</a></li>');
        }
        if (szLocale == 'ko_KR') {
            aGlobalGnb.push('        <li><a href="' + HELP_AFREECATV + '/atv.php" class="my_custom" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=customer\')";>고객센터</a></li>');
        }else{
            aGlobalGnb.push('        <li><a href="' + GHELP_AFREECATV + '" class="my_custom" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=customer\')";>고객센터</a></li>');
        }
        if (szLocale == 'ko_KR') {
            aGlobalGnb.push('        <li><a href="' + WWW_AFREECATV + '/afreeca_intro.htm" class="my_service" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=service\')";>서비스 소개</a></li>');
        }
        aGlobalGnb.push('    </ul>');
        aGlobalGnb.push('</div>');
    },
    getThreeDot: function (aGlobalGnb, bDarkMode) {
        // 2021.08.17_ 3dot
        aGlobalGnb.push('<div class="settingWrap">')
        aGlobalGnb.push('    <button type="button" class="btn-settings" tip="설정" id="btnMore">설정</button>');
        aGlobalGnb.push('    <div class="modeSetting" id="modeSetArea">');

        if ((szLocale == 'ko_KR') && bDarkMode) {
            aGlobalGnb.push('        <div class="modeSet">');
            aGlobalGnb.push('            <strong class="my_mode">어두운모드</strong>');
            aGlobalGnb.push('            <input type="checkbox" id="modecheck">');
            aGlobalGnb.push('            <label class="modecheck" for="modecheck"></label>');
            aGlobalGnb.push('            <p>이 브라우저에만 적용됩니다</p>');
            aGlobalGnb.push('        </div>');
        }

        aGlobalGnb.push('        <ul>');
        aGlobalGnb.push('            <li><a href="' + ITEM_AFREECATV + '/quickview.php" class="my_item" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=item\')";>아이템</a></li>');
        aGlobalGnb.push('            <li><a href="' + ITEM_AFREECATV + '/starballoon.php" class="my_balloon" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=balloon\')";>별풍선</a></li>');
        if (szLocale == 'ko_KR') {
            aGlobalGnb.push('            <li><a href="' + EXTENSION_AFREECATV + '" class="extensions" target="_top" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=ext_market\');">확장 프로그램 마켓</a></li>');
            aGlobalGnb.push('            <li><a href="' + SOTONG_AFREECATV + '" class="my_sotong" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=sotong\')";>소통센터</a></li>');
        }
        aGlobalGnb.push('            <li><a href="' + HELP_AFREECATV + '/atv.php" class="my_custom" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=customer\')";>고객센터</a></li>');
        if (szLocale == 'ko_KR') {
            aGlobalGnb.push('            <li><a href="' + WWW_AFREECATV + '/afreeca_intro.htm" class="my_service" target="_blank" onclick="oGnb.setClickLog(\'gnb_00000002\',\'button_type=service\')";>서비스 소개</a></li>');
        }
        aGlobalGnb.push('        </ul>');
        aGlobalGnb.push('    </div>');
        aGlobalGnb.push('</div>');
    },
    goLogin: function (szHref) {
        try {
            var szCurrentHref = szHref || top.location.href;
        } catch (e) {
            var szCurrentHref = szHref || location.href;
        }

        // remove hash tag
        if (/(#)+(.*)$/.test(szCurrentHref)) {
            szCurrentHref = szCurrentHref.replace(RegExp.lastMatch, '');
        }
        top.location.href = LOGIN_8100 + "/afreeca/login.php?szFrom=full&request_uri=" + encodeURIComponent(szCurrentHref);
        //      this.goPage(LOGIN_8100 + "/afreeca/login.php?szFrom=full&request_uri="+ encodeURIComponent(szCurrentHref));
    },
    goLogout: function (szHref) {
        try {
            var szCurrentHref = szHref || top.location.href;
        } catch (e) {
            var szCurrentHref = szHref || location.href;
        }

        // remove hash tag
        if (/(#)+(.*)$/.test(szCurrentHref)) {
            szCurrentHref = szCurrentHref.replace(RegExp.lastMatch, '');
        }
        top.location.href = LOGIN_8100 + "/app/LogOut.php?request_uri=" + encodeURIComponent(szCurrentHref);
        //      this.goPage(LOGIN_8100 + "/app/LogOut.php?request_uri="+ encodeURIComponent(szCurrentHref));
    },
    goSignup: function (szHref) {
        try {
            var szCurrentHref = szHref || top.location.href;
        } catch (e) {
            var szCurrentHref = szHref || location.href;
        }

        // remove hash tag
        if (/(#)+(.*)$/.test(szCurrentHref)) {
            szCurrentHref = szCurrentHref.replace(RegExp.lastMatch, '');
        }

        top.location.href = MEMBER_AFREECATV + "/app/join.php";
        // top.location.href = LOGIN_8100 + "/app/LogOut.php?request_uri=" + encodeURIComponent(szCurrentHref);
        //      this.goPage(LOGIN_8100 + "/app/LogOut.php?request_uri="+ encodeURIComponent(szCurrentHref));
    },
    goPage: function (szUrl) {
        try {
            top.location.href = szUrl;
        } catch (e) {
            location.href = szUrl;
        }
    },
    isAbroad: function (nSub) {
        Parse_Cookie(document);
        var szAbroad = Read_Cookie("AbroadChk");

        return isAbroad;
    },
    isEmailConfirm: function () {
        Parse_Cookie(document);
        var szEmailConfirm = Read_Cookie("isEmailConfirm");

        return szEmailConfirm;
    },
    Parse_Cookie: function (doc) {
        pdboxCookie = [];
        var cookieList = doc.cookie.split("; ");

        for (var i = 0; i < cookieList.length; i++) {
            var name = cookieList[i].split("=");
            pdboxCookie[unescape(name[0])] = unescape(name[1]);
        }

        return cookieList.length;
    },
    Read_Cookie: function (name) {
        for (cookie in pdboxCookie) {
            if (cookie == name) {
                if (pdboxCookie[cookie] != "undefined")
                    return pdboxCookie[cookie];
            }
        }

        return '';
    },
    getSpeechBubble: function () {
        var szNoticeHtml = '';

        // 해당 로직 오류 발생시 서브 메뉴, 유저 메뉴가 출력이 안되는 사이드 이펙트가 있음
        // 오류 발생시 패스하도록 try catch 처리
        try {
            if (szLocale == 'ko_KR') {
                var nTotal = afreeca_notice_item_sort.length;
                var szTarget = '';
                var nShowCnt = 0;

                // 서브 노출 Y가 없으면 스킵
                if (afreeca_notice_item_speech_sub_bubble_yn.indexOf("Y") !== -1) {
                    for (var i = 0; i < nTotal; i++) {
                        if (afreeca_notice_item_sort[i] == undefined)
                            break;

                        var szNotice = afreeca_notice_item_description[afreeca_notice_item_sort[i]];
                        if (afreeca_notice_item_speech_sub_bubble_yn[afreeca_notice_item_sort[i]] == "Y") {
                            szNotice = getByteLength(szNotice, 50);

                            if (afreeca_notice_item_link_target[afreeca_notice_item_sort[i]] == 1) {
                                szTarget = "_blank";
                            }

                            szNoticeHtml += '<a href="' + afreeca_notice_item_link_url[afreeca_notice_item_sort[i]] + '" target="' + szTarget + '" ';

                            // 공지 리스트 첫 항목 제외한 나머지 항목 숨김처리
                            if (nShowCnt !== 0) {
                                szNoticeHtml += 'style="display: none"';
                            }

                            szNoticeHtml += '><em class="icon"></em><strong>[안내]</strong>' + szNotice + '</a>';
                            nShowCnt += 1;
                        }
                    }

                    // 롤링 로직 및 마우스 이벤트
                    $(document).ready(function () {
                        // 노출 항목 2개 이상인 경우 적용
                        if ($('.notice a').length > 1) {
                            $('.notice a:eq(0)').addClass('on');

                            oGnb.setSpeechBubbleInterval();

                            $('.notice a').on('mouseover', function () {
                                clearInterval(oIntervalFn);
                            });

                            $('.notice a').on('mouseleave', function () {
                                oGnb.setSpeechBubbleInterval();
                            });
                        }
                    });
                }
            } else {
                if (typeof (szNoticeInfo) != 'undefined' && szNoticeInfo.length != 0) {
                    szNoticeHtml = '<a href="' + GHELP_AFREECATV + '/index.php?pt=notice_detail&no=' + szNoticeInfo[0].no + '" target="_blank"><em class="icon"></em><strong>[안내]</strong>' + szNoticeInfo[0].title + '</a>';
                }
            }
        } catch (e) {
        }

        return szNoticeHtml;
    },
    setSpeechBubbleInterval: function () {
        // 공지사항 롤링 인터벌 동작
        var nTime = 3500; // 3.5초 주기

        oIntervalFn = setInterval(function () {
            var nNoticeIdx = $('.notice').find('.on').index() + 1;
            var nNoticeSize = $('.notice a').size();

            $('.notice a').removeClass('on');

            if (nNoticeIdx == nNoticeSize) {
                nNoticeIdx = 0;
            }

            $('.notice a').eq(nNoticeIdx).addClass('on');

            $('.notice a.on').show();
            $('.notice a').not('.on').hide();
        }, nTime);
    },
    getNotificationList: function (aGlobalGnb) {
        // aGlobalGnb.push('<div id="FeedRoot" class="feed_area"></div>');
        aGlobalGnb.push('<div id="FeedRoot" class="noticeArea"></div>');

        setTimeout(function() {
            $(document).ready(function () {
                if (typeof ($oFeed) != "undefined") {
                    $oFeed.render({'target_id': 'FeedRoot'});
                }
            });
        }, 0);
    },
    getNicknameEntity: function (szUserNick) {
        if (typeof (szUserNick) == "undefined" || typeof (szUserNick) != "string") {
            return szUserNick || "";
        }

        szUserNick = szUserNick.replace(/</g, "&lt;");
        szUserNick = szUserNick.replace(/>/g, "&gt;");
        return szUserNick;
    },
    checkDarkModeApply: function () {
        //@TODO. 다크모드가 적용된 페이지에 한해서만 동작되게끔 처리
        if ($('#modecheck').length == 0) return;

        oGnb.Parse_Cookie(document);
        if (oGnb.Read_Cookie('theme') == 'dark') {
            $('#modecheck').prop('checked', true);
            if (!$('body').hasClass('thema_dark')) {
                $('body').addClass('thema_dark');
            }
            $('html').attr('dark', 'true');
        } else {
            if ($('body').hasClass('thema_dark')) {
                $('body').removeClass('thema_dark');
            }
            $('html').removeAttr('dark');
        }
    },
    checkDarkModeSet: function (mode) {
        var szSendData = '';

        if (mode == 'dark') {
            setCookie('theme', 'dark', DOMAIN, 365);
            szSendData = 'theme_color=dark';
        } else {
            setCookie('theme', '', DOMAIN, -1);
            szSendData = 'theme_color=light';
        }

        oGnb.setClickLog('conf_00000001', szSendData);
    },
    setClickLog: function (szCodetype, szSendData) {

        //포함이 안된데가 있어서 gnb에 잡아서 넣음
        var oData = {
            sztype: 'CLICK'
            , code_type: szCodetype
            , send_data: szSendData
            , sys_type: 'web'
        };

        $.ajax({
            type: 'POST'
            , url: EVENTAPI_AFREECATV + '/set_log_api.php'
            , data: oData
            , dataType: 'json'
            , cache: false
            , crossDomain: true
            , xhrFields: {
                withCredentials: true
            }
            , beforeSend: function (request) {
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            , success: function (data) {
            }
            , error: function (jqXHR, textStatus, errorThrown) {
            }
            , complete: function (jqXHR, textStatus) {
            }
        });
    },setExtensionLog: function (szClientType, szActionType, szExtName="", szExtType="", szExtTarget="", szExtMobile="", szExtVer="", szExtDevId="",  szSysType ="web") {
        var oData = {
			sztype : 'EXT_SVC'
			, sys_type : szSysType
			, action_type : szActionType
			, client_type : szClientType
			, log_type : "ext_svc"
            , extension_type: szExtName
            , extension_view_type: szExtType
            , extension_target: szExtTarget
            , extension_mobile: szExtMobile
            , extension_version: szExtVer
            , developer_id: szExtDevId
		};

        $.ajax({
            type: 'POST'
            , url: EVENTAPI_AFREECATV + '/set_log_api.php'
            , data: oData
            , dataType: 'json'
            , cache: false
            , crossDomain: true
            , xhrFields: {
                withCredentials: true
            }
            , beforeSend: function (request) {
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
            }
            , success: function (data) {
            }
            , error: function (jqXHR, textStatus, errorThrown) {
            }
            , complete: function (jqXHR, textStatus) {
            }
        });
    },
    setBoraGnb: function (szType) {
        bPrivate = typeof oPrivate != 'undefined';
        useDarkmode = false;

        var aGlobalGnb = [];
        if (szLocale != 'ko_KR') {
            aGlobalGnb.push('<div class="btn_down">');
            aGlobalGnb.push('   <a href="https://www.oculus.com/experiences/quest/3120447294725423/?ranking_trace=0_3120447294725423_QUESTSEARCH_11a6a88c-e22c-42ee-b227-b85956609632" target="_blank" class="btn_oculus"><em>oculus Download</em></a>');
            aGlobalGnb.push('   <a href="https://www.microsoft.com/ko-kr/p/afreecatv-vr/9p8bnf30snr3?rtc=1&amp;activetab=pivot:overviewtab" target="_blank" class="btn_ms"><em>microsoft Download</em></a><em>');
            aGlobalGnb.push('   </em></div>');
        }
        aGlobalGnb.push('<div class="serviceUtil">');
        if (szLocale == 'ko_KR' && ticket) {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlayKor" tip="방송하기">방송하기</button>');
        } else if(szLocale == 'ja_JP' && ticket){
            aGlobalGnb.push('<div class="jp_broadcast_wrap">');
            aGlobalGnb.push('<button type="button" class="btn-broadcast" tip="방송하기" id ="studioJapan">방송하기</button>');
            aGlobalGnb.push('<ul class="broadcast_select">');
            aGlobalGnb.push('<li class="fs" id="studioPlayKor"><a href="javascript:void(0)" onclick="return false;">FreecShot</a></li>');
            aGlobalGnb.push('<li class="db"><a href="javascript:void(0)" onclick="window.open(DASHBOARD, \'_blank\'); return false;">Dashboard</a></li>');
            aGlobalGnb.push('</ul>');
            aGlobalGnb.push('</div>'); 
        } else {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlay" tip="방송하기">방송하기</button>');
        }

        // 알림 리스트
        this.getNotificationList(aGlobalGnb);

        if (ticket && bPrivate) {
            aGlobalGnb.push('   <!-- 로그인 후-->');

            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? 'new' : '';
            aGlobalGnb.push('   <div class = "profileWrap" id="profileWrapBtn">');
            aGlobalGnb.push('       <div class = "userInfo ' + szNoteNew + '">');
            aGlobalGnb.push('           <div class = "thumb">');
            aGlobalGnb.push('           <img src="' + PROFILE_IMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/' + oPrivate.CHANNEL.LOGIN_ID + '.jpg" ' +
                'onerror="$(this).parent().html(\'<span class=thumb-default></span>\'); this.remove();"/></div>');
            aGlobalGnb.push('       <button type="button" id="profileBtn" class="btn-login">' + oPrivate.CHANNEL.LOGIN_NICK + '</button></div>');
            aGlobalGnb.push('       <div id="userArea" class="loginUserMenu">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('    </div>');

            aGlobalGnb.push('<!-- 서비스메뉴 -->');
            aGlobalGnb.push('   <!-- //로그인 후 -->');
        } else {
            aGlobalGnb.push('   <!-- 로그인 전 -->');
            var szPointUrl = '/Report/AfreecaBalloonList.asp';

            if (!ticket) {
                aGlobalGnb.push('<a href="javascript:oGnb.goLogin();"><button type="button" id="loginBtn" class="btn-login">로그인</span></button></a>');
            }

            this.getDarkModeArea(aGlobalGnb);

            aGlobalGnb.push('   <!-- //로그인 전 -->');
        }
        aGlobalGnb.push('<!-- 서비스메뉴 -->');
        aGlobalGnb.push('<div class="serviceMenu" id="serviceMenuList">');
        aGlobalGnb.push('<button type="button" id="btnAllMenu" class="btn-allMenu" tip="전체메뉴">전체메뉴</button>');
        aGlobalGnb.push('   <div id="allMenu" class="allMenuList">' + oGnb.getAllLayerMenu(szType) + '</div>');
        aGlobalGnb.push('   <div>');
        aGlobalGnb.push('<!-- //서비스메뉴 -->');
        aGlobalGnb.push('</div>');

        var szMainGnb = aGlobalGnb.join('');
        document.write(szMainGnb);
        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    setAniGnb: function (szType) {
        bPrivate = typeof oPrivate != 'undefined';
        useDarkmode = false;

        var aGlobalGnb = [];
        if (szLocale != 'ko_KR') {
            aGlobalGnb.push('<div class="btn_down">');
            aGlobalGnb.push('   <a href="https://www.oculus.com/experiences/quest/3120447294725423/?ranking_trace=0_3120447294725423_QUESTSEARCH_11a6a88c-e22c-42ee-b227-b85956609632" target="_blank" class="btn_oculus"><em>oculus Download</em></a>');
            aGlobalGnb.push('   <a href="https://www.microsoft.com/ko-kr/p/afreecatv-vr/9p8bnf30snr3?rtc=1&amp;activetab=pivot:overviewtab" target="_blank" class="btn_ms"><em>microsoft Download</em></a><em>');
            aGlobalGnb.push('   </em></div>');
        }
        aGlobalGnb.push('<div class="serviceUtil">');
        if (szLocale == 'ko_KR' && ticket) {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlayKor" tip="방송하기">방송하기</button>');
        } else {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlay" tip="방송하기">방송하기</button>');
        }

        // 알림 리스트
        this.getNotificationList(aGlobalGnb);

        if (ticket && bPrivate) {
            aGlobalGnb.push('   <!-- 로그인 후-->');

            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? 'new' : '';
            aGlobalGnb.push('   <div class = "profileWrap" id="profileWrapBtn">');
            aGlobalGnb.push('       <div class = "userInfo ' + szNoteNew + '">');
            aGlobalGnb.push('           <div class = "thumb">');
            aGlobalGnb.push('           <img src="' + PROFILE_IMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/' + oPrivate.CHANNEL.LOGIN_ID + '.jpg" ' +
                'onerror="$(this).parent().html(\'<span class=thumb-default></span>\'); this.remove();"/></div>');
            aGlobalGnb.push('       <button type="button" id="profileBtn" class="btn-login">' + oPrivate.CHANNEL.LOGIN_NICK + '</button></div>');
            aGlobalGnb.push('       <div id="userArea" class="loginUserMenu">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('    </div>');

            aGlobalGnb.push('<!-- 서비스메뉴 -->');
            aGlobalGnb.push('   <!-- //로그인 후 -->');
        } else {
            aGlobalGnb.push('   <!-- 로그인 전 -->');
            var szPointUrl = '/Report/AfreecaBalloonList.asp';

            if (!ticket) {
                aGlobalGnb.push('<a href="javascript:oGnb.goLogin();"><button type="button" id="loginBtn" class="btn-login">로그인</span></button></a>');
            }

            this.getDarkModeArea(aGlobalGnb);

            aGlobalGnb.push('   <!-- //로그인 전 -->');
        }
        aGlobalGnb.push('<!-- 서비스메뉴 -->');
        aGlobalGnb.push('<div class="serviceMenu" id="serviceMenuList">');
        aGlobalGnb.push('<button type="button" id="btnAllMenu" class="btn-allMenu" tip="전체메뉴">전체메뉴</button>');
        aGlobalGnb.push('   <div id="allMenu" class="allMenuList">' + oGnb.getAllLayerMenu(szType) + '</div>');
        aGlobalGnb.push('   <div>');
        aGlobalGnb.push('<!-- //서비스메뉴 -->');
        aGlobalGnb.push('</div>');

        var szMainGnb = aGlobalGnb.join('');
        document.write(szMainGnb);
        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    setEsportsMainGnb: function () {
        bPrivate = typeof (oPrivate) != 'undefined';
        useDarkmode = true;
        var aGlobalGnb = [];

        if (szLocale != 'ko_KR') {
            aGlobalGnb.push('<div class="btn_down">');
            aGlobalGnb.push('   <a href="https://www.oculus.com/experiences/quest/3120447294725423/?ranking_trace=0_3120447294725423_QUESTSEARCH_11a6a88c-e22c-42ee-b227-b85956609632" target="_blank" class="btn_oculus"><em>oculus Download</em></a>');
            aGlobalGnb.push('   <a href="https://www.microsoft.com/ko-kr/p/afreecatv-vr/9p8bnf30snr3?rtc=1&amp;activetab=pivot:overviewtab" target="_blank" class="btn_ms"><em>microsoft Download</em></a><em></em>');
            aGlobalGnb.push('</div>');
        }

        aGlobalGnb.push('   <div class="serviceUtil">');
        // broadcast
        if (szLocale == 'ko_KR' && ticket) {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlayKor" tip="방송하기">방송하기</button>');
        } else if(szLocale == 'ja_JP' && ticket){
            aGlobalGnb.push('<div class="jp_broadcast_wrap">');
            aGlobalGnb.push('<button type="button" class="btn-broadcast" tip="방송하기" id ="studioJapan">방송하기</button>');
            aGlobalGnb.push('<ul class="broadcast_select">');
            aGlobalGnb.push('<li class="fs" id="studioPlayKor"><a href="javascript:void(0)" onclick="return false;">FreecShot</a></li>');
            aGlobalGnb.push('<li class="db"><a href="javascript:void(0)" onclick="window.open(DASHBOARD, \'_blank\'); return false;">Dashboard</a></li>');
            aGlobalGnb.push('</ul>');
            aGlobalGnb.push('</div>'); 
        } else {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlay" tip="방송하기">방송하기</button>');
        }

        // notice list
        this.getNotificationList(aGlobalGnb);

        // userInfo
        if (ticket && bPrivate) {
            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? 'new' : '';

            aGlobalGnb.push('   <!-- After Login-->');
            aGlobalGnb.push('   <div class="profileWrap" id="profileWrapBtn">');
            aGlobalGnb.push('       <div class="userInfo ' + szNoteNew + '">');
            aGlobalGnb.push('           <div class="thumb">');
            aGlobalGnb.push('               <img src="' + PROFILE_IMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/' + oPrivate.CHANNEL.LOGIN_ID + '.jpg" ' +
                                                'onerror="$(this).parent().html(\'<span class=thumb-default></span>\'); this.remove();"/>');
            aGlobalGnb.push('           </div>')
            aGlobalGnb.push('           <button type="button" id="profileBtn" class="btn-login">' + oPrivate.CHANNEL.LOGIN_NICK + '</button>');
            aGlobalGnb.push('       </div>');
            aGlobalGnb.push('       <div id="userArea" class="loginUserMenu">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('   </div>');
            aGlobalGnb.push('   <!-- //After Login -->');
        } else {
            aGlobalGnb.push('   <!-- Before Login -->');
            if (!ticket) {
                aGlobalGnb.push('   <button type="button" class="btn-login" onclick="javascript:oGnb.goLogin();">로그인</button>');
            }

            this.getDarkModeArea(aGlobalGnb);
            aGlobalGnb.push('   <!-- //Before Login -->');
        }

        aGlobalGnb.push('       <!-- service menu -->');
        aGlobalGnb.push('<div class="serviceMenu" id="serviceMenuList">');
        aGlobalGnb.push('       <button type="button" id="btnAllMenu" class="btn-allMenu" tip="전체메뉴">전체메뉴</button>');
        aGlobalGnb.push('           <div id="allMenu" class="allMenuList">' + oGnb.getAllLayerMenu() + '</div>');
        aGlobalGnb.push('   </div>');
        aGlobalGnb.push('</div><!-- //serviceUtil-->');

        var szEsportsGnb = aGlobalGnb.join('');
        document.write(szEsportsGnb);
        // freecshot click event
        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    setVrBasecamp: function () {
        //VR(basecamp) 팝업창
        $(".player_vr").on('click', function () {
            $('#overlay').fadeIn('fast');
            $('#layer_vr').slideDown();
        });
        $("#layer_vr .btn_close, #overlay").on('click', function () {
            $('#overlay').fadeOut('fast');
            $('#layer_vr').slideUp();
        });
        $("#layer_vr .go_vrbs").on('click', function () {
            window.open('http://bj.afreecatv.com/afreecavr/post/51240995', '_blank');
        });
        // VR 플레이어 실행
        $("#basecampPlay").on('click', function () {
            var szId = this.id;
            requirejs(['service/plugins/player'], function (player) {
                var player = atv.player;
                var exePlayer = null;
                var log = null;

                switch (szId) {
                    case 'basecampPlay' : // VR
                        exePlayer = player.runBasecamp.bind(player);
                        break;
                }
                exePlayer ? exePlayer('cast') : null;
            });
        });
    },
    balloon: function () {

        var _path;
        var _gauge_svg = document.querySelector('.gauge svg');
        if(_gauge_svg != null){
            animItem.destroy();
        }
        if($('body').hasClass('thema_dark')){
            _path = RES_AFREECATV+'/images/lottie/adballoon_header_dark.json?_='+new Date().getTime();
        }else{
            _path = RES_AFREECATV+'/images/lottie/adballoon_header.json?_='+new Date().getTime();
        }

        var svgContainer = document.querySelector('.gauge');
        animItem = bodymovin.loadAnimation({
            wrapper: svgContainer,
            animType: 'svg',
            autoplay: true,
            loop: false,
            path: _path
        });


        //animItem.goToAndStop(oPrivate.CHANNEL.AD_FRAME, svgContainer);
    },
    writeDom: function(htmlText) {
        if (oGnbDom !== null) {
            // 전달받은 dom 이 있을 경우 해당 dom 에 append
            var oSubDom = document.createElement('div');
            oSubDom.innerHTML = htmlText;
            var children = Array.prototype.slice.call(oSubDom.children);
            children.forEach(function (child) {
                oGnbDom.appendChild(child);
            });
        } else {
            document.write(htmlText);
        }
    },
    setShopfreecaGnb: function () {
        bPrivate = typeof oPrivate != 'undefined';
        useDarkmode = false;
        isSearchVisible = false;
        var aGlobalGnb = [];

        if (szLocale != 'ko_KR') {
            aGlobalGnb.push('<div class="btn_down">');
            aGlobalGnb.push('   <a href="https://www.oculus.com/experiences/quest/3120447294725423/?ranking_trace=0_3120447294725423_QUESTSEARCH_11a6a88c-e22c-42ee-b227-b85956609632" target="_blank" class="btn_oculus"><em>oculus Download</em></a>');
            aGlobalGnb.push('   <a href="https://www.microsoft.com/ko-kr/p/afreecatv-vr/9p8bnf30snr3?rtc=1&amp;activetab=pivot:overviewtab" target="_blank" class="btn_ms"><em>microsoft Download</em></a><em>');
            aGlobalGnb.push('   </em>');
            aGlobalGnb.push('</div>');
        }
        aGlobalGnb.push('<div class="serviceUtil">');
        aGlobalGnb.push('<div class="cartArea">');
        aGlobalGnb.push('<button type="button" class="btn-cart" id="btn-cart" tip="장바구니">장바구니</button>');
        aGlobalGnb.push('<em id="cart-count" style="display:none;pointer-events: none;">99</em>');
        aGlobalGnb.push('</div>');
        if (szLocale == 'ko_KR' && ticket) {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlayKor" tip="방송하기">방송하기</button>');
        } else {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlay" tip="방송하기">방송하기</button>');
        }

        // notice list
        this.getNotificationList(aGlobalGnb);

        if (ticket && bPrivate) {
            // if ('ko_KR' != 'ko_KR') {
            //     aGlobalGnb.push('   <a href="' + GHELP_AFREECATV + '" class="ghelp" style="">헬프페이지<em></em></a>');
            // }
            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? 'new' : '';

            aGlobalGnb.push('   <!-- After Login-->');
            aGlobalGnb.push('   <div class="profileWrap" id="profileWrapBtn">');
            aGlobalGnb.push('       <div class="userInfo ' + szNoteNew + '">');
            aGlobalGnb.push('           <div class="thumb">');
            aGlobalGnb.push('               <img src="' + PROFILE_IMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/' + oPrivate.CHANNEL.LOGIN_ID + '.jpg" ' +
                                                'onerror="$(this).parent().html(\'<span class=thumb-default></span>\'); this.remove();"/>');
            aGlobalGnb.push('           </div>')
            aGlobalGnb.push('           <button type="button" id="profileBtn" class="btn-login">' + oPrivate.CHANNEL.LOGIN_NICK + '</button>');
            aGlobalGnb.push('       </div>');
            aGlobalGnb.push('       <div id="userArea" class="loginUserMenu">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('   </div>');
            aGlobalGnb.push('   <!-- //After Login -->');
        } else {
            aGlobalGnb.push('   <!-- Before Login -->');
            if (!ticket) {
                aGlobalGnb.push('<a href="javascript:oGnb.goLogin();"><button type="button" id="loginBtn" class="btn-login">로그인</button></a>');
            }

            this.getDarkModeArea(aGlobalGnb);
            // if ('ko_KR' != 'ko_KR') {
            //     aGlobalGnb.push('       <a href="' + MEMBER_AFREECATV + '/app/join.php" class="join"><span>회원가입</span></a>');
            //     aGlobalGnb.push('   </span>');
            // }
            aGlobalGnb.push('   <!-- //Before Login -->');
        }

        aGlobalGnb.push('<!-- service menu -->');
        aGlobalGnb.push('<div class="serviceMenu" id="serviceMenuList">');
        aGlobalGnb.push('<button type="button" id="btnAllMenu" class="btn-allMenu" tip="전체메뉴">전체메뉴</button>');
        aGlobalGnb.push('   <div id="allMenu" class="allMenuList">' + oGnb.getAllLayerMenu() + '</div>');
        aGlobalGnb.push('<!-- //service menu -->');
        aGlobalGnb.push('   </div>');
        aGlobalGnb.push('</div><!--//serviceUtil-->');

        var szMainGnb = aGlobalGnb.join('');
        document.write(szMainGnb);
        // freecshot click event
        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    setShoppingGnb: function () {
        bPrivate = typeof oPrivate != 'undefined';
        useDarkmode = false;
        isSearchVisible = false;
        var aGlobalGnb = [];

        if (szLocale != 'ko_KR') {
            aGlobalGnb.push('<div class="btn_down">');
            aGlobalGnb.push('   <a href="https://www.oculus.com/experiences/quest/3120447294725423/?ranking_trace=0_3120447294725423_QUESTSEARCH_11a6a88c-e22c-42ee-b227-b85956609632" target="_blank" class="btn_oculus"><em>oculus Download</em></a>');
            aGlobalGnb.push('   <a href="https://www.microsoft.com/ko-kr/p/afreecatv-vr/9p8bnf30snr3?rtc=1&amp;activetab=pivot:overviewtab" target="_blank" class="btn_ms"><em>microsoft Download</em></a><em>');
            aGlobalGnb.push('   </em>');
            aGlobalGnb.push('</div>');
        }
        aGlobalGnb.push('<div class="serviceUtil">');
        if (szLocale == 'ko_KR' && ticket) {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlayKor" tip="방송하기">방송하기</button>');
        } else {
            aGlobalGnb.push('<button class="btn-broadcast" id="studioPlay" tip="방송하기">방송하기</button>');
        }

        // notice list
        this.getNotificationList(aGlobalGnb);

        if (ticket && bPrivate) {
            // if ('ko_KR' != 'ko_KR') {
            //     aGlobalGnb.push('   <a href="' + GHELP_AFREECATV + '" class="ghelp" style="">헬프페이지<em></em></a>');
            // }
            var szNoteNew = (oPrivate.CHANNEL.NOTE_NEW > 0) ? 'new' : '';

            aGlobalGnb.push('   <!-- After Login-->');
            aGlobalGnb.push('   <div class="profileWrap" id="profileWrapBtn">');
            aGlobalGnb.push('       <div class="userInfo ' + szNoteNew + '">');
            aGlobalGnb.push('           <div class="thumb">');
            aGlobalGnb.push('               <img src="' + PROFILE_IMG_AFREECATV + '/LOGO/' + oPrivate.CHANNEL.LOGIN_ID.substring(0, 2) + '/' + oPrivate.CHANNEL.LOGIN_ID + '/' + oPrivate.CHANNEL.LOGIN_ID + '.jpg" ' +
                                                'onerror="$(this).parent().html(\'<span class=thumb-default></span>\'); this.remove();"/>');
            aGlobalGnb.push('           </div>')
            aGlobalGnb.push('           <button type="button" id="profileBtn" class="btn-login">' + oPrivate.CHANNEL.LOGIN_NICK + '</button>');
            aGlobalGnb.push('       </div>');
            aGlobalGnb.push('       <div id="userArea" class="loginUserMenu">' + oGnb.getMyLayer() + '</div>');
            aGlobalGnb.push('   </div>');
            aGlobalGnb.push('   <!-- //After Login -->');
        } else {
            aGlobalGnb.push('   <!-- Before Login -->');
            if (!ticket) {
                aGlobalGnb.push('<a href="javascript:oGnb.goLogin();"><button type="button" id="loginBtn" class="btn-login">로그인</button></a>');
            }

            this.getDarkModeArea(aGlobalGnb);
            // if ('ko_KR' != 'ko_KR') {
            //     aGlobalGnb.push('       <a href="' + MEMBER_AFREECATV + '/app/join.php" class="join"><span>회원가입</span></a>');
            //     aGlobalGnb.push('   </span>');
            // }
            aGlobalGnb.push('   <!-- //Before Login -->');
        }

        aGlobalGnb.push('<!-- service menu -->');
        aGlobalGnb.push('<div class="serviceMenu" id="serviceMenuList">');
        aGlobalGnb.push('<button type="button" id="btnAllMenu" class="btn-allMenu" tip="전체메뉴">전체메뉴</button>');
        aGlobalGnb.push('   <div id="allMenu" class="allMenuList">' + oGnb.getAllLayerMenu() + '</div>');
        aGlobalGnb.push('<!-- //service menu -->');
        aGlobalGnb.push('   </div>');
        aGlobalGnb.push('</div><!--//serviceUtil-->');

        var szMainGnb = aGlobalGnb.join('');
        document.write(szMainGnb);
        // freecshot click event
        FreecshotStart(szLocale);

        this.setGlobalEvent();
    },
    setShopfreecaReNewGnb: function () {
        bPrivate = typeof oPrivate != 'undefined';
        isSearchVisible = false;
        useDarkmode = false;
        var aGlobalGnb = [];
        aGlobalGnb.push('<div class="searchArea"></div>' +
            '            <div class="subMenu">' +
            '                <ul>' +
            (ticket && bPrivate
                ? '<li><a href="javascript:;" onclick="oGnb.goLogout(szLogoutUrl);" style="font-size: 13px;">로그아웃</a></li>'
                : '<li><a href="javascript:oGnb.goLogin();" style="font-size: 13px;">로그인</a></li>') +
            '                    <li><a href="/notice/list" style="font-size: 13px;">공지사항</a></li>' +
            '                    <li><a href="/proceeds" style="font-size: 13px;">수익금 관리</a></li>' +
            '                </ul>' +
            '            </div>' +
            '            <div class="gnbArea">' +
            '                <div class="gnbMenu"></div>' +
            '                <div id="categoryArea">' +
            '                    <button class="categoryBtn">' +
            '                        <span></span>' +
            '                        <span></span>' +
            '                        <span></span>' +
            '                        <span class="blind">카테고리 메뉴</span>' +
            '                    </button>' +
            '                    <!-- category -->' +
            '                    <div class="category_area" id="categoryMenu">' +
            '                        <div class="depth1">' +
            '                            <ul id="categoryDepth1Ul">' +
            '                            </ul>' +
            '                        </div>' +
            '                    </div>' +
            '                    <!-- //category -->' +
            '                </div>' +
            '                <div class="iconMenu">' +
            '                    <ul>' +
            '                        <li><a href="javascript:oGnb.goLogin();" class="today" id="todayView"></a></li>' +
            '                        <li>' +
            (ticket && bPrivate
                ? '<a href="javascript:;" class="myshopping" id="myshopping"></a>'
                : '<a href="javascript:oGnb.goLogin();" class="myshopping" id="myshopping">마이쇼핑</a>') +
            '                        </li>' +
            '                        <li><a href="javascript:;" class="basket" id="btn-cart">장바구니<span class="count" id="cart-count" style="display: none;"></span></a></li>' +
            '                    </ul>' +
            '                </div>' +
            '            </div>' +
            '        </div>');
        document.write(aGlobalGnb);
        this.setGlobalEvent();
    },
}

var pdboxCookie = [];
oGnb.Parse_Cookie(document);
var ticket = oGnb.Read_Cookie("PdboxTicket");
if (ticket) {
    document.writeln('<script type="text/javascript" charset="euc-kr" src="' + AFEVENT2_AFREECATV + '/api/get_private_info.php?szScriptVar=oPrivate&charset=euc-kr"></script>');
}
document.writeln('<script type="text/javascript" charset="euc-kr" src="' + RES_AFREECATV + '/script/keyword/afreeca.front.keyword.js?ver=20201223"></script>');
document.writeln('<script type="text/javascript" charset="euc-kr" src="' + RES_AFREECATV + '/script/new_main/login_favorite.js"></script>');
document.writeln('<script type="text/javascript" charset="utf-8" src="' + STATIC_AFREECATV + '/asset/app/notification/' + szLocale + '/noti.min.js"></script>');
var oFooter = {
	getMainFooter : function() {
				var aTmp = [];
                if('ko_KR' == 'ko_KR'){
                    aTmp.push('<h2 class="blind">하단메뉴</h2>');
                    aTmp.push('<div class="footer_inner">');
                    aTmp.push('	<ul class="f_list">');
                    aTmp.push('		<li><a href="//corp.afreecatv.com/" target="_blank" >회사소개</a></li>');
                    aTmp.push('		<li><a href="' + WWW_AFREECATV + '/afreeca_intro.htm" target="_top" >서비스 소개</a></li>');
                    aTmp.push('		<li><a href="//adv.afreecatv.com/" target="_blank" >광고안내</a></li>');
                    aTmp.push('		<li><a href="//corp.afreecatv.com/recruit/recruit.html" target="_blank" >인재채용</a></li>');
                    aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/policy1.html" target="_blank" >이용약관</a></li>');
                    aTmp.push('		<li><strong><a href="' + WWW_AFREECATV + '/policy/policy2.html" target="_blank" >개인정보처리방침</a></strong></li>');
                    aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/policy3.html" target="_blank" >청소년보호정책</a></li>');
                    aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/policy6.html" target="_blank" >운영정책</a></li>');
                    aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/policy4_1.html" target="_blank" >권리침해신고센터</a></li>');
                    aTmp.push('		<li><a href="' + STUDIO_AFREECATV + '" target="_blank" >오픈스튜디오</a></li>');
                    aTmp.push('		<li><a href="' + DEVELOPERS_AFREECATV + '" target="_blank" >Developers</a></li>');
                    aTmp.push('		<li><a href="' + WWW_AFREECATV + '/sitemap.htm" target="_top" >주요서비스</a></li>');
                    aTmp.push('		<li class="familysite off">');
                    aTmp.push('			<a href="#" class="" id="familylBtn">패밀리 사이트<em></em></a>');
                    aTmp.push('			<div class="flayer" id="familyLayer">');
                    aTmp.push('				<ul>');
                    aTmp.push('					<li><a target="_blank" href="'+AFTMARKET_TV+'">AFTmarket</a></li>');
                    aTmp.push('					<li><a target="_blank" href="' + FREECAP_AFREECATV + '">Apro</a></li>');
                    aTmp.push('					<li><a target="_blank" href="http://sts.freecap.' + DOMAIN + '/index.php">프리캡 소셜트레이딩</a></li>');
                    aTmp.push('				</ul>');
                    aTmp.push('			</div>');
                    aTmp.push('		</li>');
                    aTmp.push('		<li class="global_lang off">');
                    aTmp.push('	<a href="javascript:;" class="" id="globalBtn">한국어<em></em></a>');
                    aTmp.push('	<div class="glayer" id="globalLayer">');
                    aTmp.push('		<ul>');
                    aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'ko_KR\')">한국어</a></li>');
					aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'en_US\')">English</a></li>');
                    aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'zh_CN\')">中文(简体)</a></li>');
                    aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'zh_TW\')">中文(繁體)</a></li>');
					aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'ja_JP\')">日本語</a></li>');
					aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'th_TH\')">ภาษาไทย</a></li>');
                    aTmp.push('		</ul>');
                    aTmp.push('	</div>');
                    aTmp.push('</li>');
                    //aTmp.push('		<li class="player"><a href="javascript:;" onclick="runPlayer(\'app_player\');">설치형 플레이어 실행하기<em></em></a></li>');
					aTmp.push('	</ul>');
					// 심사가간 동안 사업자 정보 표기
                    aTmp.push('	<div class="adr">㈜아프리카TV<span>대표이사 : 정찬용</span><span>사업자번호 : 220-81-10886</span><span>통신판매번호 제2010-경기성남-0834</span><span><a href="//ftc.go.kr/bizCommPop.do?wrkr_no=2208110886&amp;apv_perm_no=" target="_blank">사업자 정보 확인</a></span><span>호스팅 제공자 : ㈜아프리카TV</span><br>	<address>주소 : 경기도 성남시 분당구 판교로228번길 15 판교세븐밴처밸리 1단지 2동 ㈜아프리카TV(삼평동)</address><span>FAX : 031-622-8008</span><span><a href="mailto:afreecaTV@afreecatv.com" class="mail" title="메일">afreecaTV@afreecatv.com</a> (1688-7022)</span></div>');
                    aTmp.push('	<p class="copyright">ⓒ AfreecaTV Corp.</p>');
                    aTmp.push('</div>');
				} else {
					aTmp.push('<ul> ') ;
					aTmp.push('		<li><a href="' + GHELP_AFREECATV+ '/index.php?pt=question" target="_blank" >1:1문의하기</a></li>');
					aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy1_en.html" target="_blank" >이용약관</a></li>');
					aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy2_en.html" target="_blank" >개인정보처리방침</a></li>');
					aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy3_en.html" target="_blank" >청소년보호정책</a></li>');
					aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy4_en.html" target="_blank" >권리침해신고센터</a></li>');
					aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy6_en.html" target="_blank" >유료 서비스약관</a></li>');
					if('ko_KR' == 'ja_JP'){
						aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy5_jp.html" target="_blank" >特定商取引法に基づく表記</a></li>');
					}
					aTmp.push('		<li><a href="' + GHELP_AFREECATV + '/index.php?pt=faq_list&cate=5" target="_blank" >고객센터</a></li>');
					aTmp.push('		<li class="global_lang off">');
					aTmp.push('	<a href="javascript:;" class="" id="globalBtn">한국어<em></em></a>');
					aTmp.push('	<div class="glayer" id="globalLayer">');
					aTmp.push('		<ul>');
                    aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'ko_KR\')">한국어</a></li>');
					aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'en_US\')">English</a></li>');
                    aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'zh_CN\')">中文(简体)</a></li>');
                    aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'zh_TW\')">中文(繁體)</a></li>');
					aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'ja_JP\')">日本語</a></li>');
					aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'th_TH\')">ภาษาไทย</a></li>');
					aTmp.push('		</ul>');
					aTmp.push('</ul>') ;
					aTmp.push('<div class="copyright">ⓒ AfreecaTV Corp.</div>');
				}
                try{
					document.getElementById('footer').innerHTML = aTmp.join('');
				}catch(e){
					document.write(aTmp.join(''));
				}

				Parse_Cookie(document);
        		var szAbroad = Read_Cookie("AbroadVod");

				//해외에서 메인타입 접근시에만 언어선택 노출
				if(szAbroad === "OK") {
					$('.global_lang').show();
				}

				$('div#footer').on('click', '#globalBtn', function(){
					//console.log(1)
					var classname = $(this).parents('.global_lang').hasClass("on");
					if( classname ) {
						$(".global_lang").removeClass("on").addClass("off");
					} else  {
						$(".global_lang").removeClass("off").addClass("on");
					}
					return false;
				});

				$('div#footer').on('click', '#familylBtn', function(){
					//console.log(1)
					var classname = $(this).parents('.familysite').hasClass("on");
					if( classname ) {
						$(".familysite").removeClass("on").addClass("off");
					} else  {
						$(".familysite").removeClass("off").addClass("on");
					}
					return false;
				});
	},
	setSiteOption : function(locale){
            setCookie("_lang", locale, DOMAIN , 365);
            location.reload();
            this.goPageTop();
	},
	goPageTop : function(){
		$("html, body").scrollTop(0);
	},
	getSubFooter : function() {
		var aTmp = [];
		aTmp.push('<ul> ') ;
		aTmp.push('<li class="first-child"><a href="//corp.afreecatv.com/" target="_blank" >회사소개</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/afreeca_intro.htm" target="_top" >서비스 소개</a></li>');
		aTmp.push('<li><a href="//corp.afreecatv.com/recruit/recruit.html" target="_blank" >인재채용</a></li>');
		aTmp.push('<li><a href="//adv.afreecatv.com/" target="_blank" >광고안내</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/policy/policy1.html" target="_blank" >이용약관</a></li>') ;
		aTmp.push('<li><strong><a href="' + WWW_AFREECATV + '/policy/policy2.html" target="_blank" >개인정보처리방침</a></strong></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/policy/policy3.html" target="_blank" >청소년보호정책</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/policy/policy6.html" target="_blank" >운영정책</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/policy/policy4_1.html" target="_blank" >권리침해신고센터</a></li>');
		aTmp.push('<li><a href="' + HELP_AFREECATV + '/atv.php" target="_top">고객센터</a></li>');
		aTmp.push('<li><a href="' + DEVELOPERS_AFREECATV + '" target="_blank">Developers</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/sitemap.htm" target="_top">주요서비스</a></li>');
		aTmp.push('		<li class="global_lang off">');
		aTmp.push('	<a href="javascript:;" class="" id="globalBtn">한국어<em></em></a>');
		aTmp.push('	<div class="glayer" id="globalLayer">');
		aTmp.push('		<ul>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'ko_KR\')">한국어</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'en_US\')">English</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'zh_CN\')">中文(简体)</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'zh_TW\')">中文(繁體)</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'ja_JP\')">日本語</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'th_TH\')">ภาษาไทย</a></li>');
		aTmp.push('		</ul>');
		aTmp.push('</ul>') ;
		aTmp.push('<div class="copyright">ⓒ AfreecaTV Corp.</div>');

		try{
			document.getElementById('footer').innerHTML = aTmp.join('');
		}catch(e){
			document.write(aTmp.join(''));
		}

		$('div#footer').on('click', '#globalBtn', function(){
			//console.log(1)
			var classname = $(this).parents('.global_lang').hasClass("on");
			if( classname ) {
				$(".global_lang").removeClass("on").addClass("off");
			} else  {
				$(".global_lang").removeClass("off").addClass("on");
			}
			return false;
		});

	},
	getSubGlobalFooter : function() {
		var aTmp = [];

		aTmp.push('<ul> ') ;
		aTmp.push('		<li><a href="' + GHELP_AFREECATV + '/index.php?pt=question" target="_blank" >1:1문의하기</a></li>');
		aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy1_en.html" target="_blank" >이용약관</a></li>');
		aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy2_en.html" target="_blank" >개인정보처리방침</a></li>');
		aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy3_en.html" target="_blank" >청소년보호정책</a></li>');
		aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy4_en.html" target="_blank" >권리침해신고센터</a></li>');
		aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy6_en.html" target="_blank" >유료 서비스약관</a></li>');
		if('ko_KR' == 'ja_JP'){
			aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/lang/policy5_jp.html" target="_blank" >特定商取引法に基づく表記</a></li>');
		}
		aTmp.push('		<li><a href="' + GHELP_AFREECATV + '/index.php?pt=faq_list&cate=5" target="_blank" >고객센터</a></li>');
		aTmp.push('		<li class="global_lang off">');
		aTmp.push('	<a href="javascript:;" class="" id="globalBtn">한국어<em></em></a>');
		aTmp.push('	<div class="glayer" id="globalLayer">');
		aTmp.push('		<ul>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'ko_KR\')">한국어</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'en_US\')">English</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'zh_CN\')">中文(简体)</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'zh_TW\')">中文(繁體)</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'ja_JP\')">日本語</a></li>');
		aTmp.push('			<li><a href="javascript:oFooter.setSiteOption(\'th_TH\')">ภาษาไทย</a></li>');
		aTmp.push('		</ul>');
		aTmp.push('</ul>') ;
		aTmp.push('<div class="copyright">ⓒ AfreecaTV Corp.</div>');

		try{
			document.getElementById('footer').innerHTML = aTmp.join('');
		}catch(e)
		{
			document.write(aTmp.join(''));
		}

		$('div#footer').on('click', '#globalBtn', function(){
			//console.log(1)
			var classname = $(this).parents('.global_lang').hasClass("on");
			if( classname ) {
				$(".global_lang").removeClass("on").addClass("off");
			} else  {
				$(".global_lang").removeClass("off").addClass("on");
			}
			return false;
		});
	}
	, getSubItemFooter : function() {
		var aTmp = [];

		aTmp.push('<div id="footer">') ;
		aTmp.push('<ul>') ;
		aTmp.push('<li class="first-child"><a href="//corp.afreecatv.com/" target="_blank">회사소개</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/afreeca_intro.htm" target="_top">서비스소개</a></li>');
		aTmp.push('<li><a href="//corp.afreecatv.com/recruit/recruit.html" target="_blank">인재채용</a></li>');
		aTmp.push('<li><a href="//adv.afreecatv.com/" target="_blank">광고안내</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/policy/policy1.html" target="_blank">이용약관</a></li>') ;
		aTmp.push('<li><strong><a href="' + WWW_AFREECATV + '/policy/policy2.html" target="_blank">개인정보처리방침</a></strong></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/policy/policy3.html" target="_blank">청소년보호정책</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/policy/policy6.html" target="_blank">운영정책</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/policy/policy4_1.html" target="_blank">권리침해신고센터</a></li>');
		aTmp.push('<li><a href="' + HELP_AFREECATV + '/atv.php" target="_top">고객센터</a></li>');
		aTmp.push('<li><a href="' + DEVELOPERS_AFREECATV + '" target="_blank">Developers</a></li>');
		aTmp.push('<li><a href="' + WWW_AFREECATV + '/sitemap.htm" target="_top">주요서비스</a></li>');
		aTmp.push('</ul>') ;
		aTmp.push('<div class="adr">');
		aTmp.push('㈜아프리카TV<span>대표이사 : 정찬용</span><span>사업자번호 : 220-81-10886</span><span>통신판매번호 제2010-경기성남-0834</span>');
		aTmp.push('<span><a href="http://ftc.go.kr/bizCommPop.do?wrkr_no=2208110886&apv_perm_no=" target="_blank">사업자 정보 확인</a></span>');
		aTmp.push('<span>호스팅 제공자 : ㈜아프리카TV</span><br />');
		aTmp.push('	<address>주소 : 경기도 성남시 분당구 판교로228번길 15 판교세븐밴처밸리 1단지 2동 ㈜아프리카TV(삼평동)</address><span>FAX : 031-622-8008</span><span><a href="mailto:afreecaTV@afreecatv.com" class="mail" title="메일">afreecaTV@afreecatv.com</a> (1688-7022)</span>');
		aTmp.push('</div>');
		aTmp.push('<div class="copyright">ⓒ AfreecaTV Corp.</div>');
		aTmp.push('</div>');

		try{
			document.getElementById('footer').innerHTML = aTmp.join('');
		}catch(e)
		{
			document.write(aTmp.join(''));
		}
	}
	,getDevelopersFooter : function() {
		var aTmp = [];

		aTmp.push('<div class="inner">') ;
		aTmp.push('    <div class="footer_left">') ;
		aTmp.push('        <h2 class="logo">아프리카TV</h2>') ;
		aTmp.push('        <div class="adr">') ;
		aTmp.push('            ㈜아프리카TV') ;
		aTmp.push('            <span>대표이사 : 정찬용</span> <span>사업자번호 : 220-81-10886</span>') ;
		aTmp.push('            <span>통신판매번호 제2010-경기성남-0834</span><br>') ;
		aTmp.push('            FAX : 031-622-8008') ;
		aTmp.push('            <span><a href="mailto:developers@afreecatv.com" class="mail" title="메일">developers@afreecatv.com</a> (1688-7022)</span>') ;
		aTmp.push('            <span><a href="//ftc.go.kr/bizCommPop.do?wrkr_no=2208110886&apv_perm_no=" target="_blank">사업자 정보 확인</a></span>') ;
		aTmp.push('            <span>호스팅 제공자 : ㈜아프리카TV</span><br>') ;
		aTmp.push('            <address>주소 : 경기도 성남시 분당구 판교로228번길 15 판교세븐밴처밸리 1단지 2동 ㈜아프리카TV(삼평동)</address>') ;
		aTmp.push('        </div>') ;
		aTmp.push('    </div>') ;
		aTmp.push('    <div class="footer_right">') ;
		aTmp.push('        <ul class="social">') ;
		aTmp.push('            <li class="facebook"><a href="https://www.facebook.com/afreecaTV.korea/?ref=br_rs" target="_blank">페이스북</a></li>') ;
		aTmp.push('            <li class="naver"><a href="https://blog.naver.com/afreecatvblog" target="_blank">네이버 블로그</a></li>') ;
		aTmp.push('            <li class="instagram"><a href="https://www.instagram.com/afreecatv_official/" target="_blank">인스타그램</a></li>') ;
		aTmp.push('        </ul>') ;
		aTmp.push('    </div>') ;
		aTmp.push('</div>') ;
		
		try{
			document.getElementById('footer').innerHTML = aTmp.join('');
		}catch(e)
		{
			document.write(aTmp.join(''));
		}
    }
    , getShopfreecaFooter : function() {
        var aTmp = [];
        aTmp.push('<h2 class="blind">하단메뉴</h2>');
        aTmp.push('<div class="footer_inner">');
        aTmp.push('	<ul class="f_list">');
        aTmp.push('		<li><a href="//corp.afreecatv.com/" target="_blank" >회사소개</a></li>');
        aTmp.push('		<li><a href="' + WWW_AFREECATV + '/afreeca_intro.htm" target="_top" >서비스</a></li>');
        aTmp.push('		<li><a href="//adv.afreecatv.com/" target="_blank" >광고안내</a></li>');
        aTmp.push('		<li><a href="//corp.afreecatv.com/recruit/recruit.html" target="_blank" >인재채용</a></li>');
        aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/shop/policy1.html" target="_blank" >이용약관</a></li>');
        aTmp.push('		<li><strong><a href="' + WWW_AFREECATV + '/policy/shop/policy2.html" target="_blank" >개인정보처리방침</a></strong></li>');
        aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/policy3.html" target="_blank" >청소년보호정책</a></li>');
        aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/policy6.html" target="_blank" >운영정책</a></li>');
        aTmp.push('		<li><a href="' + WWW_AFREECATV + '/policy/policy4_1.html" target="_blank" >권리침해신고센터</a></li>');
        aTmp.push('		<li><a href="' + STUDIO_AFREECATV + '" target="_blank" >오픈스튜디오</a></li>');
        aTmp.push('		<li><a href="' + DEVELOPERS_AFREECATV + '" target="_blank" >Developers</a></li>');
        aTmp.push('		<li><a href="' + WWW_AFREECATV + '/sitemap.htm" target="_top" >주요서비스</a></li>');
        aTmp.push('		<li class="familysite off">');
        aTmp.push('			<a href="#" class="" id="familylBtn">패밀리 사이트<em></em></a>');
        aTmp.push('			<div class="flayer" id="familyLayer">');
        aTmp.push('				<ul>');
        aTmp.push('					<li><a target="_blank" href="'+AFTMARKET_TV+'">AFTmarket</a></li>');
        aTmp.push('					<li><a target="_blank" href="' + FREECAP_AFREECATV + '">Apro</a></li>');
        aTmp.push('					<li><a target="_blank" href="http://sts.freecap.' + DOMAIN + '/index.php">프리캡 소셜트레이딩</a></li>');
        aTmp.push('				</ul>');
        aTmp.push('			</div>');
        aTmp.push('		</li>');
        aTmp.push('	</ul>');
        aTmp.push('	<div class="adr">㈜아프리카TV<span>대표이사 : 정찬용</span><span>사업자번호 : 220-81-10886</span><span>통신판매번호 제2010-경기성남-0834</span><span><a href="//ftc.go.kr/bizCommPop.do?wrkr_no=2208110886&amp;apv_perm_no=" target="_blank">사업자 정보 확인</a></span><span>호스팅 제공자 : ㈜아프리카TV</span><br>	<address>주소 : 경기도 성남시 분당구 판교로228번길 15 판교세븐밴처밸리 1단지 2동 ㈜아프리카TV(삼평동)</address><span>FAX : 031-622-8008</span><span><a href="mailto:afreecaTV@afreecatv.com" class="mail" title="메일">afreecaTV@afreecatv.com</a> (1688-7022)</span></div>');
        aTmp.push('	<p class="copyright">ⓒ AfreecaTV Corp.</p>');
        aTmp.push('</div>');
        
        try{
            document.getElementById('footer').innerHTML = aTmp.join('');
        }catch(e){
            document.write(aTmp.join(''));
        }

        Parse_Cookie(document);
        var szAbroad = Read_Cookie("AbroadVod");

        $('div#footer').on('click', '#globalBtn', function(){
            //console.log(1)
            var classname = $(this).parents('.global_lang').hasClass("on");
            if( classname ) {
                $(".global_lang").removeClass("on").addClass("off");
            } else  {
                $(".global_lang").removeClass("off").addClass("on");
            }
            return false;
        });

        $('div#footer').on('click', '#familylBtn', function(){
            //console.log(1)
            var classname = $(this).parents('.familysite').hasClass("on");
            if( classname ) {
                $(".familysite").removeClass("on").addClass("off");
            } else  {
                $(".familysite").removeClass("off").addClass("on");
            }
            return false;
        });
    },
}