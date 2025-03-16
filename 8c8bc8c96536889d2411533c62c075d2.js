/**
* Inven Ad Output Function for A1AD
*/
// 초기화
	var INVEN = window.INVEN || {};
	INVEN.Ad = window.INVEN.Ad || {};
	INVEN.Ad.site = window.INVEN.Ad.site || '';
	INVEN.Ad.applySectionList = window.INVEN.Ad.applySectionList || new Array();
	INVEN.Ad.isMaintenance = false; //or true 광고점검=true
// 사이트 설정
	INVEN.Ad.setSite = function(site) {
		INVEN.Ad.site = site;
	}

// 상단sky(topsky)
	INVEN.Ad.showTopSky = function(site) {
		if (INVEN.Ad.isMaintenance) return false;
		document.write ("<iframe id='comAdTopSky' name='comAdTopSky' width='0' height='0' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@Top'></iframe>");
	}
	//topsky
	function showTopSky(imgurl, clickurl, bgcolorcode, darkbttn) {
		if (!imgurl || imgurl=='undefined') return false;
		if (!bgcolorcode || bgcolorcode=='undefined') bgcolorcode = '#ffffff';
		var cookieValue = 1;
		if (getCookie("topskyCnt")) {
			cookieValue = getCookie("topskyCnt");
			if (cookieValue == 'c') {
				return false;
			} else {
				cookieValue++;
			}
		}
		if(document.body.className.indexOf('topsky') === -1) document.body.className += ' ' + 'topsky';
		var tsImgObj = document.createElement('img');
		tsImgObj.src = imgurl;
		tsImgObj.style.cursor = 'pointer';
		var tsImgWrapObj = document.createElement('div');
		tsImgWrapObj.className = 'imgWrap';
		tsImgWrapObj.style.cursor = 'pointer';
		tsImgWrapObj.onclick = function(){window.open(clickurl, '_blank');}
		tsImgWrapObj.appendChild(tsImgObj);
		
		var tsObj = document.getElementById('topskyAd');
		if (tsObj) {
			/*  */
		} else {
			var tsObj = document.createElement('div');
			tsObj.id = 'topskyAd';
			tsObj.className = 'topskyad';
		}
		tsObj.style.backgroundColor = bgcolorcode;
		tsObj.appendChild(tsImgWrapObj);
		var tsBttnObj = document.createElement('span');
		if (darkbttn=='1') tsBttnObj.className = 'darkbttn';
		tsBttnObj.innerHTML = 'X';
		tsBttnObj.onclick = function(){closeTopSky(this);}
		tsBttnObj.style.cursor = 'pointer';
		tsObj.appendChild(tsBttnObj);
		document.body.insertBefore(tsObj,document.body.firstChild);
		setCookie("topskyCnt", cookieValue, 4);
	}
	function closeTopSky(obj) {
		var pObj = obj.parentNode;
		document.body.removeChild(pObj);
		INVEN.Html.removeClass(document.body, 'topsky');
		setCookie("topskyCnt", 'c', 1, 'h');
	}

// 우측하단 썸네일 (ThumbNail)
	INVEN.Ad.showThumbNail = function(site) {
		if (getCookie("thumbnailCnt") == "c") return false;
		document.write ("<iframe id='comAdThumbNail' name='comAdThumbNail' width='0' height='0' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x10?ipos=comAdThumbNail'></iframe>");
	}
	//ThumbNail
	function showThumbNail(imgurl, clickurl) {
		var cookieValue = 1;
		if (getCookie("thumbnailCnt")) {
			cookieValue = getCookie("thumbnailCnt");
			if (cookieValue == 'c') {
				return false;
			} else {
				cookieValue++;
			}
		}
		if (!imgurl || imgurl=='undefined') return false;
		
		var tnObj = document.getElementById('rightThumbNail');
		while (tnObj.firstChild) {tnObj.removeChild(tnObj.lastChild);}
		var tnBttnObj = document.createElement('div');
		tnBttnObj.className = 'bttnThumbNailClose';
		tnBttnObj.innerHTML = 'X';
		tnBttnObj.onclick = function(){INVEN.Ad.closeThumbNail(this);}
		tnBttnObj.style.cursor = 'pointer';
		tnObj.appendChild(tnBttnObj);

		var tnImgObj = document.createElement('img');
		tnImgObj.src = imgurl;
		tnImgObj.style.cursor = 'pointer';
		var tnImgWrapObj = document.createElement('div');
		tnImgWrapObj.id = tnImgWrapObj.className = 'rightThumbNailAd';
		tnImgWrapObj.style.cursor = 'pointer';
		tnImgWrapObj.onclick = function(){window.open(clickurl, '_blank');}
		tnImgWrapObj.appendChild(tnImgObj);
		
		tnObj.appendChild(tnImgWrapObj);
		setCookie("thumbnailCnt", cookieValue, 4);
	}
	INVEN.Ad.closeThumbNail = function(obj) {
		var pObj = obj.parentNode;
		pObj.parentNode.removeChild(pObj);
		setCookie("thumbnailCnt", 'c', 'today', '');
	}
	

// 백스킨(backskin)
	INVEN.Ad.showBackSkin = function(site) {
		if (INVEN.Ad.isMaintenance) return false;
		document.write ("<iframe id='comAdBackSkin' name='comAdBackSkin' width='0' height='0' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@Frame2'></iframe>");
	}
	//backskin
	function showbackSkin(imgurl, clickurl, uselogo, type, bgcolorcode) {
		if (!imgurl || imgurl=='undefined') return false;
		if (!bgcolorcode || bgcolorcode=='undefined') bgcolorcode = '#ffffff';
		//document.body.style.backgroundImage = imgurl;
		document.body.style.setProperty('--backskin-color', bgcolorcode);
		document.body.style.setProperty('--backskin-image', "url('"+ imgurl+"')");

		if (clickurl != '' && document.body.className.indexOf('backclick') === -1) document.body.className = document.body.className + ' backclick';
		if (uselogo=='1' && document.body.className.indexOf('backskinlogo') === -1) document.body.className = document.body.className + ' backskinlogo';
		
		if (type > 0) { //0 은 클릭없음.
			var backskinPObj = document.getElementById('comAdBackSkin').parentNode;
			if (type<3) { //1은 왼쪽만, 2는 양쪽다
				if (document.getElementById('backskinleft')) {
					var backleftObj = document.getElementById('backskinleft');
				} else {
					var backleftObj = document.createElement('div');
					backleftObj.id = 'backskinleft';
				}
				backleftObj.className = 'backskinarea';
				backleftObj.onclick = function(){window.open(clickurl, '_blank');}
				backskinPObj.appendChild(backleftObj);
			}
			if (type>1) { //3은 오른쪽만, 2는 양쪽다
				if (document.getElementById('backskinright')) {
					var backrightObj = document.getElementById('backskinright');
				} else {
					var backrightObj = document.createElement('div');
					backrightObj.id = 'backskinright';
				}
				backrightObj.className = 'backskinarea';
				backrightObj.onclick = function(){window.open(clickurl, '_blank');}
				backskinPObj.appendChild(backrightObj);
			}
			centerBackSkin();
			$(window).resize(function(){centerBackSkin()});
		}
	}
	function centerBackSkin() {
		var xpos = 1920 - Math.floor($(window).width());
		xpos = -1*Math.ceil(xpos/2) + 9;
		if (xpos < -420) xpos = -420;
		$("body").css('background-position-x',xpos);
	}
	
	// renew 221222 ~
	// 상단배너 800x144 1x/2x
	INVEN.Ad.showTop800 = function(site, ibt) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='https://via.placeholder.com/728x90/fff' title='광고 서버 점검중입니다.'>");return false; }
		document.write ("<iframe id='comAdTopBanner' name='comAdTopBanner' width='800' height='144' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x60?ipos=comAdTopBanner&ibt="+ibt+"'></iframe>");
	}
	// 오른쪽 250x500 1x/2x
	INVEN.Ad.showRight250 = function(site) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='https://via.placeholder.com/250x250/fff' title='광고 서버 점검중입니다.'>");return false; }
		document.write ("<iframe id='comAdRight' name='comAdRight' width='250' height='500' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x61?ipos=comAdRight'></iframe>");
	}
	// ~ renew 221222

	// 상단배너 728x90
	INVEN.Ad.showTopBanner = function(site, ibt) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='https://via.placeholder.com/728x90/fff' title='광고 서버 점검중입니다.'>");return false; }
		document.write ("<iframe id='comAdTopBanner' name='comAdTopBanner' width='728' height='90' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x62?ipos=comAdTopBanner&ibt="+ibt+"'></iframe>");
	}
	// 왼쪽 200x200
	INVEN.Ad.showAdLeft = function(site) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='https://via.placeholder.com/200x200/fff' title='광고 서버 점검중입니다.'>");return false; }
		document.write ("<iframe id='comAdLeft' name='comAdLeft' width='200' height='200' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x15?ipos=comAdLeft'></iframe>");
	}
	// 오른쪽 250x250
	INVEN.Ad.showRight = function(site) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='https://via.placeholder.com/250x250/fff' title='광고 서버 점검중입니다.'>");return false; }
		document.write ("<iframe id='comAdRight' name='comAdRight' width='250' height='250' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x63?ipos=comAdRight'></iframe>");
	}

	// 중단 800 광고 800x144
	INVEN.Ad.showMidMax = function(site) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='//static.inven.co.kr/image_2011/common/error/ad/200706_610x100.jpg?v=1' title='광고 서버 점검중입니다.'>");return false; }
		document.write("<iframe id='comAdMidFull' name='comAdMidFull' width='800' height='144' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x61?ipos=comAdMidFull'></iframe>");
	}
	// ver. ibuilder
	INVEN.Ad.showMidMax2 = function(site, selector) {
		if (INVEN.Ad.isMaintenance) return false;
		var banner = $("<iframe id='comAdMidFull' name='comAdMidFull' width='800' height='144' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x61?ipos=comAdMidFull'></iframe>");
		$(selector).append(banner);
	}
// 중단 728 광고 728x90
	INVEN.Ad.showMidFull = function(site) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='//static.inven.co.kr/image_2011/common/error/ad/200706_610x100.jpg?v=1' title='광고 서버 점검중입니다.'>");return false; }
		document.write("<iframe id='comAdMidFull' name='comAdMidFull' width='728' height='90' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x64?ipos=comAdMidFull'></iframe>");
	}
	// ver. ibuilder
	INVEN.Ad.showMidFull2 = function(site, selector) {
		if (INVEN.Ad.isMaintenance) return false;
		var banner = $("<iframe id='comAdMidFull' name='comAdMidFull' width='728' height='90' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x64?ipos=comAdMidFull'></iframe>");
		$(selector).append(banner);
	}
//  News 하단 광고
	INVEN.Ad.showNewsBottom = function(site) {
		//site = 'webzine_news'; //news슬롯은 webzine하나만 사용
		if (INVEN.Ad.isMaintenance) { document.write("<img src='//static.inven.co.kr/image_2011/common/error/ad/200706_610x100.jpg?v=1' title='광고 서버 점검중입니다.'>");return false; }
		document.write("<iframe id='comAdNewsBottom' name='comAdNewsBottom' width='728' height='90' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x64?ipos=comAdNewsBottom'></iframe>");
	}

	// ver. ibuilder hotissue 800x100
	INVEN.Ad.showMidHot = function(site, selector) {
		if (INVEN.Ad.isMaintenance) return false;
		var banner = $("<iframe id='comAdMidHot' name='comAdMidHot' width='800' height='100' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x16?ipos=comAdMidHot'></iframe>");
		$(selector).append(banner);
	}
	function setAdBgColor(colorcode, ibt) {
		if (typeof ibt == 'undefined' || ibt=='') return false;
		if (!colorcode) colorcode = '#ffffff';
		if (colorcode.charAt(0) != '#') colorcode = '#'+colorcode;
		$('.'+ibt).each(function(){
			$(this).css('background-color', colorcode);
		});
	}
	// 거래툴배너 728x90
	INVEN.Ad.showDniAd = function(site, pos) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='https://via.placeholder.com/728x90/fff' title='광고 서버 점검중입니다.'>");return false; }
		switch (pos) {
			case "top":
				document.write ("<iframe id='comAdDniTop' name='comAdDniTop' width='728' height='90' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x20?ipos=comAdDniTop'></iframe>");
				break;
			case "bot":
				document.write ("<iframe id='comAdDniBot' name='comAdDniBot' width='728' height='90' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x21?ipos=comAdDniBot'></iframe>");
				break;
			default:
				return false;
		}
	}
	
	// 자유게시판탑 광고 ibuilder
	INVEN.Ad.freeListTop = function(site, selector) {
		if (INVEN.Ad.isMaintenance) return false;
		var banner = $("<iframe id='comAdBBSListTop' name='comAdBBSListTop' width='800' height='100' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x17?ipos=comAdBBSListTop'></iframe>");
		$(selector).append(banner);
	}

// 게시판 idx 광고
	INVEN.Ad.bbsComeidx = function(comeidx, pos) {
		if (INVEN.Ad.isMaintenance) return false;
		var pagecode = '';
		pagecode = comeidx+'bbs';
		switch(pos) {
			case "bbs_list_top":
				document.write("<iframe id='comAdBBSListTop' name='comAdBBSListTop' width='800' height='100' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+pagecode+"@x18?ipos=comAdBBSListTop'></iframe>");
				break;
			default:
				return false;
		}
	}

// 웹진 핫이슈 (hotIssue)
	INVEN.Ad.showHotissue = function(site) {
		if (INVEN.Ad.isMaintenance) return false;
		document.write ("<iframe id='comAdHotissue' name='comAdHotissue' width='0' height='0' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@Middle1'></iframe>");
	}
	function showHotissue(imgurl, clickurl, fsub, ssub) {
		var hotIssueImg = $(".hotissuePartNew .hotissueBody ul.hotissueImage li:nth-child(7)");
		var hotIssueSelector = $(".hotissuePartNew .hotissueBody div.selectors .centerPart ul li:nth-child(7)");
		hotIssueImg.find("img").attr("src",imgurl);
		hotIssueImg.find("span.subject").text(fsub);
		hotIssueImg.find("a").attr("href",clickurl);
		hotIssueSelector.find("a").text(ssub).attr("href",clickurl);
		displaylastNews();
	}
	
	
// old ads

	
	// ㄱ자 광고 2 150x300
	INVEN.Ad.showSky2 = function(site) {
		if (INVEN.Ad.isMaintenance) return false;
		document.write ("<iframe id='comAdSky3' name='comAdSky3' width='150' height='300' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x06?ipos=comAdSky3'></iframe>");
	}
	
// 메인 이벤트레이어
	INVEN.Ad.showEvent = function(site) {
		if (INVEN.Ad.isMaintenance) return false;
		document.write ("<iframe id='comAdPopUp' name='comAdPopUp' width='0' height='0' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x11'></iframe>");
	}
// 메인 프로모션팝업
	INVEN.Ad.showPromotion = function(site) {
		return false;
	}
// 웹진스페셜광고 핫이슈 옆
	INVEN.Ad.showSP1 = function(site) {
		if (INVEN.Ad.isMaintenance) return false;
		document.write("<iframe id='comAdSP1' name='comAdSP1' width='100' height='258' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@Left?ipos=comAdSP1'></iframe>");
	}
// 웹진스페셜광고 핫이슈 옆 2st
	INVEN.Ad.showSP2 = function(site) {
		if (INVEN.Ad.isMaintenance) return false;
		document.write("<iframe id='comAdSP2' name='comAdSP2' width='100' height='258' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@Left2?ipos=comAdSP2'></iframe>");
	}
// 웹진홈상단 광고 핫이슈 위
	INVEN.Ad.showHomeTop = function(site) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='//static.inven.co.kr/image_2011/common/error/ad/915x90.jpg?v=1' title='광고시스템 점검중입니다.'>");return false; }
		document.write("<iframe id='comAdHomeTop' name='comAdHomeTop' width='915' height='90' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@Middle?ipos=comAdHomeTop'></iframe>");
	}

// 슬라이드 광고
	INVEN.Ad.showSlide = function(site, type, sliding) {
		if (INVEN.Ad.isMaintenance) return false;
		if (site != 'webzine') return false;
		document.write("<iframe id='comAdSlide' name='comAdSlide' width='80' height='150' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@Left3'></iframe>");
		if (sliding) {
			INVEN.FloatStatic.addFloat("comAdSlide", false, true, 0, 0);
		}
	}
	
	// TI 관련 //////////////////////////////////////////////////////////////////////
	INVEN.Ad.tiDisabled = window.INVEN.Ad.tiDisabled || false;

	INVEN.Ad.showTi = function(site, selector) {
		document.domain = "inven.co.kr";
		if (getCookie("floating_ad") != "close") {
			if (INVEN.Ad.isMaintenance) return false;
			document.write('<iframe id="comAdTi" name="comAdTi" src="https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/'+site+'@x19?ipos=comAdTi" allowTransparency="true" frameborder="0" scrolling="no" style="display:none;"></iframe>');
			INVEN.Ad.objTi = document.getElementById("comAdTi");
			//INVEN.Ad.reposTi(300,300,0,0);
		}
	}

	INVEN.Ad.displayTi = function(value) {
		if (!INVEN.Ad.objTi || INVEN.Ad.objTi=='undefined') return false;
		if (value) {
			if ((getCookie("floating_ad") != "close") && (!INVEN.Ad.tiDisabled)) {
				INVEN.Ad.objTi.style.display = "inline";
			}
		} else {
				INVEN.Ad.objTi.style.display = "none";
		}
	}
	INVEN.Ad.closeTi = function() {
		// minute
		//var closeTiHour = 40;
		//var closeTimeType = 'm';

		// hour
		var closeTiHour = 1;
		var closeTimeType = 'h';
		var cookieValue = "close";
		if (getCookie("floating_ad") != "close") {
			setCookie("floating_ad", cookieValue, closeTiHour, closeTimeType);
			INVEN.Ad.displayTi(false);
			document.getElementById("comAdTi").src = "about:blank";
		}
	}
	INVEN.Ad.reposTi = function(w,h,x,y) {
		if (!INVEN.Ad.objTi || INVEN.Ad.objTi=='undefined') return false;
		if (h>0) h=h+20;
		INVEN.Ad.objTi.style.width = w + 'px';
		INVEN.Ad.objTi.style.height = h + 'px';
		INVEN.Ad.objTi.style.marginLeft = x + 'px';
		INVEN.Ad.objTi.style.marginTop = y + 'px';
	}
	INVEN.Ad.tiLoaded = function(iframeDoc) {
		console.log(iframeDoc.id);
		INVEN.Ad.displayTi(true);
	}
	INVEN.Ad.disableTi = function() {
		INVEN.Ad.tiDisabled = true;
		INVEN.Ad.displayTi(false);
	}
	INVEN.Ad.tiFinished = function() {
		INVEN.Ad.reposTi(300,300,0,0);
		INVEN.Ad.displayTi(false);
		INVEN.Ad.tiDisabled = false;
		//loc.reload(true);
	}
	
	var loadtimer = [];
	INVEN.Ad.chkSlotHealth = function(pos, maxPlayTime) {
		if (!maxPlayTime) maxPlayTime = 180000;
		var now = new Date();
		var nowtime =  now.toLocaleString();
		loadtimer[pos] = [];
		loadtimer[pos]['oldtime'] = now.getTime();
		loadtimer[pos]['playtime'] = maxPlayTime+60000;
		try {
			loadtimer[pos]['src'] = document.getElementById(pos).src;
		} catch (e) {
			loadtimer[pos]['src'] = loadtimer[pos]['src'];
		}
	}
	$(function(){
		var cfchker = setInterval(function(){
			var nowtime = new Date();
			newtime = nowtime.getTime();
			var nowtime =  nowtime.toLocaleString();
			for (let i in loadtimer){
				var playtime = loadtimer[i]['playtime'];
				var oldtime = loadtimer[i]['oldtime'];
				if ((newtime-oldtime)>playtime) {
					try {
						document.getElementById(i).src = document.getElementById(i).src;
						console.log(nowtime+' : '+i+' ad check. reload complete.' + (newtime - oldtime));
					} catch (e) {
						document.getElementById(i).src = loadtimer[i]['src'];
						console.log(nowtime+' : '+i+' src check. src complete.' + (newtime - oldtime));
					}
				}
			}
			}, 60000);
	});


// 광고내 사용 스크립트 (복사방식일때)
	function ti_roll() {
		INVEN.Ad.tiFinished();
		document.getElementById("comAdTi").contentWindow.document.location.reload(true);
	}
	function ti_close() {
		INVEN.Ad.closeTi();
	}

// 게시판뷰 광고 new
	INVEN.Ad.bbsSubject = function(site, boardnum) {
		if (INVEN.Ad.isMaintenance) return false;
		var pagecode = '';
		if (boardnum == '5313' || boardnum =='2633' || boardnum == '2417' || boardnum == '2894' || boardnum == '2097' || boardnum == '3499') {
			pagecode = boardnum+'bbs';
		} else {
			pagecode = site;
		}
		if (pagecode == 'sytest') {
			document.write("<iframe id='comAdBBSSubject_board' name='comAdBBSSubject_board' width='250' height='250' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/www.sytest.com/test@x08?ipos=comAdBBSSubject_board'></iframe>");
		} else {
			document.write("<iframe id='comAdBBSSubject_board' name='comAdBBSSubject_board' width='250' height='250' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+pagecode+"@x08?ipos=comAdBBSSubject_board'></iframe>");
		}
	}

// 게시판뷰 200 광고 new
INVEN.Ad.bbsView200 = function(pos, boardnum) {
	if (INVEN.Ad.isMaintenance) return false;
	var pagecode = boardnum;
	if (pos == 'board') pagecode = pagecode+'bbs';
	document.write("<iframe id='comAdBBSView' name='comAdBBSView' width='200' height='200' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+pagecode+"@x12?ipos=comAdBBSView'></iframe>");
}
	
	// 게시판뷰 광고 200x200
INVEN.Ad.bbsView = function(site, page) {
	if (INVEN.Ad.isMaintenance) return false;
	document.write("<iframe id='comAdBBSView' name='comAdBBSView' width='200' height='200' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+page+"@x12?ipos=comAdBBSView'></iframe>");
}

// 게시판리스트탑 광고
INVEN.Ad.bbsListTop = function(site, pagecode) {
	if (INVEN.Ad.isMaintenance) return false;
	document.write("<iframe id='comAdBBSListTop' name='comAdBBSListTop' width='710' height='70' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@"+pagecode+"?ipos=comAdBBSListTop'></iframe>");
}

// 게시판리스트 광고
INVEN.Ad.bbsList = function(site, page) {
	if (INVEN.Ad.isMaintenance) return false;
	document.write("<iframe id='comAdBBSListTop' name='comAdBBSListTop' width='710' height='100' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/2631bbs@x09?ipos=comAdBBSListTop'></iframe>");
}


	
// 통합검색 왼쪽광고(160x600)
	INVEN.Ad.showSearchLeft = function(site) {
		if (INVEN.Ad.isMaintenance) return false;
        var width = window.innerWidth;
        var height = document.innerHeight;
        if(width < 910 || height < 780) { return; }
		document.domain = "inven.co.kr";
		var slot = INVEN.Ad.changeSection('160x600', 'webzine');
        // document.write("<iframe id='comAdSEARCH160x600' name='comAdSEARCH160x600' width='160' height='600' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://adn.inven.co.kr/imp?slot="+slot+"&type=if'></iframe>");
        document.write('<ins class="adsbygoogle" style="display:inline-block;width:160px;height:600px" data-ad-client="ca-pub-7806191981162883" data-ad-slot="3187191960"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
        var navbar = document.getElementById('searchAd160x600');
        var sticky = navbar.offsetTop - 25;
        window.onscroll = function() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add("sticky");
            } else {
                navbar.classList.remove("sticky");
            }
		}
	}

// 통합검색 오른쪽 광고
	INVEN.Ad.showSearchRight = function() {
		if (INVEN.Ad.isMaintenance) return false;
        document.write('<ins class="adsbygoogle" style="display:inline-block;width:200px;height:200px" data-ad-client="ca-pub-7806191981162883" data-ad-slot="7608102484" data-ad-format="rectangle"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>');
	}

// 통합검색 하단 광고
	INVEN.Ad.showSearchBottom = function() {
		return false; // page direct
	}


	function nis_reload() {
		//alert('기존 파일이 포함되어있습니다. 확인하세요');
	}
	function reposTi(w,h,x,y) {
		// IFRAME 내의 함수 호출만 허용
	}

INVEN.Ad.SubTiDisabled = window.INVEN.Ad.SubTiDisabled || false;
INVEN.Ad.showSubTi = function(slotcode, site) {
	document.domain = "inven.co.kr";
	if (getCookie("subfloat_ad") != "close") {
		if (INVEN.Ad.isMaintenance) return false;
		var exists = document.getElementById('comAdBase');
		if (exists) {
			exists.remove();
		}
		var adObjLayer = document.createElement('div');
		adObjLayer.id = 'comAdBase';
		adObjLayer.style.setProperty('width', '100%');
		adObjLayer.style.setProperty('position', 'relative');
		var adObjabs = document.createElement('div');
		adObjabs.id = 'comAdAbs';
		adObjabs.style.setProperty('position', 'absolute');
		adObjabs.style.setProperty('z-index', '99999999');
		adObjLayer.appendChild(adObjabs);
		var parentObj = document.getElementsByClassName(site+'Middle2')[0];
		var firstObj = parentObj.firstChild;
		parentObj.insertBefore(adObjLayer, firstObj);
		document.write('<iframe id="comAdSubTi" name="comAdSubTi" src="https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/'+slotcode+'@x24" allowTransparency="true" frameborder="0" scrolling="no" style="display:none;"></iframe>');
		INVEN.Ad.objSubTi = document.getElementById("comAdSubTi");
		var tmpObj = document.getElementsByClassName('adSubTi')[0];
		adObjabs.appendChild(tmpObj);
		//INVEN.Ad.reposSubTi(300,300,0,0);
	}
}
INVEN.Ad.displaySubTi = function(value) {
	if (value) {
		if ((getCookie("subfloat_ad") != "close") && (!INVEN.Ad.SubTiDisabled)) {
			INVEN.Ad.objSubTi.style.display = "inline";
		}
	} else {
			INVEN.Ad.objSubTi.style.display = "none";
			document.getElementById("comAdSubTi").src = "about:blank";
			var exists = document.getElementById('comAdBase');
			if (exists) {
				exists.remove();
			}
	}
}
INVEN.Ad.closeSubTi = function() {
	// minute
	//var closeTiHour = 40;
	//var closeTimeType = 'm';

	// hour
	var closeTiHour = 1;
	var closeTimeType = 'h';
	var cookieValue = "close";
	if (getCookie("subfloat_ad") != "close") {
		setCookie("subfloat_ad", cookieValue, closeTiHour, closeTimeType);
		INVEN.Ad.displaySubTi(false);
	}
}
INVEN.Ad.reposSubTi = function(w,h,x,y) {
	INVEN.Ad.objSubTi.style.width = w + 'px';
	INVEN.Ad.objSubTi.style.height = h + 'px';
	INVEN.Ad.objSubTi.style.marginLeft = x + 'px';
	INVEN.Ad.objSubTi.style.marginTop = y + 'px';
}
INVEN.Ad.SubTiLoaded = function(iframeDoc) {
	INVEN.Ad.displaySubTi(true);
}
INVEN.Ad.disableSubTi = function() {
	INVEN.Ad.SubTiDisabled = true;
	INVEN.Ad.displaySubTi(false);
}
INVEN.Ad.SubTiFinished = function() {
	INVEN.Ad.reposSubTi(300,300,0,0);
	INVEN.Ad.displaySubTi(false);
	INVEN.Ad.SubTiDisabled = false;
	//loc.reload(true);
}


INVEN.Ad.closeBotPop = function(obj) {
	var pObj = obj.parentNode;
	pObj.parentNode.removeChild(pObj);
}




// 상단우측 635x120
	INVEN.Ad.showTopRight2 = function(site) {
		if (INVEN.Ad.isMaintenance) { document.write("<img src='//static.inven.co.kr/image_2011/common/error/ad/200706_635x120.jpg?v=1' title='광고 서버 점검중입니다.'>");return false; }
		document.write ("<iframe id='comAdTopRight3' name='comAdTopRight3' width='635' height='120' frameborder='0' marginwidth='0' marginheight='0' topmargin='0' scrolling='no'  src='https://zicf.inven.co.kr/RealMedia/ads/adstream_sx.ads/inven/"+site+"@x05?ipos=comAdTopRight3'></iframe>");
	}




// a1_ext_a1badch
var a1BadCh = 0;
function a1BadPageList( data ) {
	var a1site = data;
	var a1Exclude_url = (window.location != window.parent.location)?document.referrer:document.location.href;
	var a1Protocol = location.protocol;
    for(var i=0 ; i < a1site.length ; i++){
		if(a1Exclude_url===a1Protocol+'//'+a1site[i]){
			a1BadCh = 1;
			break;
		}
    }
}
if(window.addEventListener) {
	window.addEventListener ("message", a1ReceiveMessage, false);
} else {
	if(window.attachEvent) {
		window.attachEvent ("onmessage", a1ReceiveMessage);
	}
}
function a1ReceiveMessage(event){
	if(event.data == "a1request"){
		event.source.postMessage(a1BadCh, "*");
	}
	if (event.origin !== 'https://zicf.inven.co.kr') {
		return;
	}
	if (event.data && event.data.slot) {
		switch(event.data.slot) {
			case 'showTopSky':
				showTopSky(event.data.img, event.data.clickurl, event.data.bgcolorcode, event.data.darkbttn);
				break;
			case 'showThumbNail':
				showThumbNail(event.data.img, event.data.clickurl);
				break;
			case 'showbackSkin':
				showbackSkin(event.data.img, event.data.clickurl, event.data.uselogo, event.data.type, event.data.bgcolorcode);
				break;
			case 'tiLoaded':
				INVEN.Ad.tiLoaded(document.getElementById('comAdTi'));
				break;
			case 'reposTi':
				INVEN.Ad.reposTi(event.data.w, event.data.h, event.data.x, event.data.y);
				break;
			case 'closeTi':
				INVEN.Ad.closeTi();
				break;
			case 'tiFinished':
				INVEN.Ad.tiFinished();
				break;
			case 'showHotissue':
				showHotissue(event.data.img, event.data.clickurl, event.data.fsub, event.data.ssub);
				break;
			case 'setAdBgColor':
				setAdBgColor(event.data.colorcode, event.data.ibt);
				break;
			case 'chkSlotHealth':
				INVEN.Ad.chkSlotHealth(event.data.ipos, event.data.delaytime);
				break;
			case 'showVideoAd':
				$(".videoad").css('display','block');
				break;
		}
	}
}