/* 인벤 초기화 */
try { document.domain = 'inven.co.kr'; } catch(e) { }
var INVEN = window.INVEN || {};
//var loginPage = 'https://www.inven.co.kr/www/login.php'; //로그인 페이지 주소임. 변경하지 말것.
var loginPage = 'https://member.inven.co.kr/user/scorpio/mlogin'; //로그인 페이지 주소임. 변경하지 말것.

var logoutUrl = 'https://member.inven.co.kr/user/scorpio/logout';
//var logoutUrl = 'https://login.inven.co.kr/user/pro/logout';
//var logoutUrl = 'https://www.inven.co.kr/logout.php';


/* 이벤트 관련 */
	function addEvent(obj, ev, fn) {
		/*
		if (navigator.userAgent.indexOf("MSIE") > -1) { // 파폭이면
			if (ev.substr(0,2) != 'on') ev = 'on' + ev;
			obj.attachEvent(ev,fn);
		} else {
			if (ev.substr(0,2) == 'on') ev = ev.substr(2,(ev.length) - 2);
			obj.addEventListener(ev,fn,true);
		}*/
		// IE 11 Edge 모드 부터 attachEvent는 addEventListener로 완전히 변경되었음
		if (obj.addEventListener) {
			if (ev.substr(0,2) == 'on') ev = ev.substr(2, (ev.length) - 2);
			obj.addEventListener(ev, fn, true);
		} else if (obj.attachEvent) {
			if (ev.substr(0,2) != 'on') ev = 'on' + ev;
			obj.attachEvent(ev, fn);
		}
	}

	function removeEvent(obj, ev, fn) {
		/*
		if (navigator.userAgent.indexOf("MSIE") > -1) { // 파폭이면
			if (ev.substr(0,2) != 'on') ev = 'on' + ev;
			obj.detachEvent(ev,fn);
		} else {
			if (ev.substr(0,2) == 'on') ev = ev.substr(2,(ev.length) - 2);
			obj.removeEventListener(ev,fn,true);
		}*/
		// IE 11 Edge 모드 부터 detachEvent는 removeEventListener로 완전히 변경되었음
		if (obj.removeEventListener) {
			if (ev.substr(0,2) == 'on') ev = ev.substr(2, (ev.length) - 2);
			obj.removeEventListener(ev, fn, true);
		} else if (obj.detachEvent) {
			if (ev.substr(0,2) != 'on') ev = 'on' + ev;
			obj.detachEvent(ev, fn);
		}
	}

/* 로그인 */
	function login(mode) {
		var fm = document.createElement("FORM");
		fm.style.display = 'none';
		fm.action = loginPage;
		fm.method = "POST";
		var iurl = document.createElement("INPUT");
		iurl.type = "hidden";
		iurl.name = "url";
		iurl.value = location.href;
		fm.appendChild(iurl);
		if (document.getElementById('inven-verification') && document.getElementById('inven-verification').content) {
			var verifyObj = document.createElement("INPUT");
			verifyObj.type = "hidden";
			verifyObj.name = "weblogin";
			verifyObj.value = document.getElementById('inven-verification').content;
			fm.appendChild(verifyObj);
		}
		if (mode) {
			var popt = document.createElement("INPUT");
			popt.type = "hidden";
			popt.name = "mode";
			popt.value = mode;
			fm.appendChild(popt);
		}
		if (!document.body) {
			document.write("<body></body>");
		}
		document.body.appendChild(fm);
		fm.submit();
		return false;
	}
	function requireLogin(mode) {
		if (confirm("로그인이 필요한 서비스입니다.\n\n로그인 하시겠습니까?")) {
			login(mode);
		}
	}

	function loginWrite(idx,iskin) {
		var fm = document.createElement("FORM");
		fm.style.display = 'none';
		fm.action = loginPage;
		fm.method = "POST";
		var iurl = document.createElement("INPUT");
		iurl.type = "hidden";
        iurl.name = "url";
        var temp;
		if (idx) {
		    temp = "https://www.inven.co.kr/board/powerbbs.php?come_idx="+idx+"&query=write&iskin="+iskin;
		} else {
			temp = location.href;
			temp = temp.replace('&query=list','&query=write');
			temp = temp.replace('&query=view','&query=write');
		}
		iurl.value = temp;
		fm.appendChild(iurl);
		if (document.getElementById('inven-verification') && document.getElementById('inven-verification').content) {
			var verifyObj = document.createElement("INPUT");
			verifyObj.type = "hidden";
			verifyObj.name = "weblogin";
			verifyObj.value = document.getElementById('inven-verification').content;
			fm.appendChild(verifyObj);
		}
		if (!document.body) {
			document.write("<body></body>");
		}
		document.body.appendChild(fm);
		fm.submit();
		return false;
	}

	function logout() {
		var fm = document.createElement("FORM");
		fm.style.display = 'none';
		fm.action = logoutUrl;
		fm.method = "GET";
		var iurl = document.createElement("INPUT");
		iurl.type = "hidden";
		iurl.name = "s_url";
		iurl.value = location.href;
		fm.appendChild(iurl);
		document.body.appendChild(fm);
		fm.submit();
		return false;
	}

	function headOutloginShowExpend(obj) {
		obj = getObj(obj);
		var expendStyle = getObj('comHeadOutloginExpend').style;
		if (expendStyle.display == 'inline') {
			INVEN.Layer.hide('comHeadOutloginExpend', 'iframe');
		} else {
			if ((navigator.userAgent.indexOf("Chrome") > -1) && (navigator.userAgent.indexOf("Windows") > -1)) {
				if (INVEN.Ad.site == 'maple') {
					INVEN.Layer.show('comHeadOutloginExpend', 'e-400', 'n+5', 'iframe', true, obj);
				} else {
					INVEN.Layer.show('comHeadOutloginExpend', 'e-400', 'n+18', 'iframe', true, obj);
				}
				getObj('comHeadOutloginExpend').className = 'comHeadOutloginExpendT2';
			} else if ((navigator.userAgent.indexOf("Opera") > -1)) {
				INVEN.Layer.show('comHeadOutloginExpend', 'e-400', 'n+18', 'iframe', true, obj);
				getObj('comHeadOutloginExpend').className = 'comHeadOutloginExpendT2';
			} else {
				INVEN.Layer.show('comHeadOutloginExpend', 'w+0', 'n+18', 'iframe', true, obj);
			}
		}
	}
	function headOutloginShow(obj, type) {
		// obj, type 사용 안함
		var outloginWrapObj = getObj('comHeadOutlogin');
		var outloginObj = getObj('comHeadOutloginExpend');
		if (outloginObj.style.display == 'inline') {
			INVEN.Layer.hide(outloginObj,true);
		} else {
			INVEN.Layer.show(outloginObj, 'w', 's', true, true, outloginWrapObj, false);
		}
	}

	function appLauncherShow() {
		var outloginWrapObj = getObj('invenApp');
		var outloginObj = getObj('appList');
		if (outloginObj.style.display == 'inline') {
			INVEN.Layer.hide(outloginObj,true);
		} else {
			INVEN.Layer.show(outloginObj, 'w', 's+6', true, true, outloginWrapObj, false);
		}
	}

/* 쿠키 관련 */
	function getCookie(cookieName){
		thisCookie = document.cookie.split("; ");
		for(i=0; i<thisCookie.length; i++){
			if(cookieName == thisCookie[i].split("=")[0]){
				return thisCookie[i].split("=")[1];
			}
		}
		return "";
	}

	function setCookie(cookieName, value, expiretime, timetype) {
		var testText = '' + expiretime;
		timetype = typeof timetype !== 'undefined' ? timetype : 'h';
		if (expiretime) {
			var expiredate = '';
			if (expiretime == 'infinite') {
				expiredate = 'Tue, 12 Dec 2999 23:59:59 UTC ';
			} else if (expiretime == 'today') {
				var expiredays = 1;
				var todayDate = new Date();
				todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
				if ( todayDate > new Date() ) {
					expiredays = expiredays - 1;
				}
				todayDate.setDate( todayDate.getDate() + expiredays );
				expiredate = todayDate.toGMTString();
			} else if (testText.search(new RegExp(':', 'g')) > -1) {
				expiredate = expiretime;
			} else {
				var todayDate = new Date();
				if (timetype == 'm') {
					expiretime = expiretime * 60 * 1000;
					todayDate.setTime(todayDate.getTime() +  expiretime);
				} else {
					todayDate.setHours(todayDate.getHours() +  expiretime);
				}
				expiredate = todayDate.toGMTString();
			}
			document.cookie = cookieName + "=" + escape(value) + "; path=/; expires=" + expiredate + "; domain=.inven.co.kr;";
		} else {
			document.cookie = cookieName + "=" + escape(value) + "; path=/; domain=.inven.co.kr;";
		}
	}

/* 기타 */
	function nothing() { }
	function checking() { alert("점검중입니다."); }
	function notready() { alert("준비중입니다."); }

	function getNavigator() {
		switch (navigator.appName) {
			case "Microsoft Internet Explorer": return "IE";
			case "Netscape": return "NN";
			case "Opera": return "OP";
			default: return null;
		}
	}

	function trim(string) {
		if (string.constructor == String) {
			string = string.replace(/^\s*/, "").replace(/\s*$/, "");
		} else if (string.constructor == Array) {
			for (key in string) {
				string[key] = trim(string[key]);
			}
		}
		return string;
	}

	function toInteger(value) {
		var temp = value;
		temp = '' + temp;
		temp = trim(temp);
		temp = temp.replace(/[^0-9\-\.].*$/, '');
		temp = temp == '' ? 0 : parseInt(temp, 10);
		return temp;
	}

	function getObj(obj) {
		if (obj.constructor == Array) {
			var temp = new Array();
			for (key in obj) {
				temp[key] = getObj(obj[key]);
			}
			return temp;
		} else if (typeof(obj) == 'object') {
			return obj;
		} else if (typeof(obj) == 'string') {
			return document.getElementById(obj);
		} else {
			return false;
		}
	}

	function createObj(tag, name) {
        var obj;
		if (name) {
			try {
				switch (tag.toLowerCase()) {
					case 'input': obj = document.createElement("<" + tag + " name=" + name + " />"); break;
					default: obj = document.createElement("<" + tag + " name=" + name + "></" + tag + ">"); break;
				}
			} catch(e) {
			    obj = document.createElement(tag);
				obj.name = name;
			}
		} else {
			obj = document.createElement(tag);
		}
		return obj;
	}

	function splitAssoc(query, sep1, sep2, decode) {
		if (!query) { return new Array(); }
		var returnQuery = new Array();
		if (query.constructor == Array) {
			return query;
		} else if (typeof(query) == 'string') {
			var tempArray = query.split(sep1);
			for (var i = 0; i < tempArray.length; i++) {
				var tempOne = tempArray[i];
				var tempArrayOne = tempOne.split(sep2);
				if (decode) {
					try {
						returnQuery[tempArrayOne[0]] = decodeURIComponent(tempArrayOne[1]);
					} catch (e) {
						returnQuery[tempArrayOne[0]] = tempArrayOne[1];
					}
				} else {
					returnQuery[tempArrayOne[0]] = tempArrayOne[1];
				}
			}
		}
		return returnQuery;
	}

/* 좌표 계산 */
	INVEN.Coordination = window.INVEN.Coordination || {};
	INVEN.Coordination.object = function() {
		this.x = 0;
		this.y = 0;
	};
	INVEN.Coordination.create = function() {
		var obj = new INVEN.Coordination.object();
		return obj;
	};
	INVEN.Coordination.getAbsPos = function(obj) {
		var offsetCheck = new Array();
		var count = 0;
		var original = obj;
		obj = getObj(obj);
		var x = 0;
		var y = 0;
		while ((obj) && (obj != document.body)) {
			x += obj.offsetLeft;
			y += obj.offsetTop;
			if (obj.clientLeft) x += obj.clientLeft;
			if (obj.clientTop) y += obj.clientTop;
			obj = obj.offsetParent;

			offsetCheck[count++] = obj.offsetParent;
		}
		if ((count > 2) && (offsetCheck[0] == offsetCheck[1])){
			x -= original.offsetLeft;
			y -= original.offsetTop;
		}

		var pos =INVEN.Coordination.create();
		pos.x = x;
		pos.y = y;
		return pos;
	};

	INVEN.Coordination.getRelPos = function(obj) {
		obj = getObj(obj);

		var x = 0;
		var y = 0;
		var styleVal = '';
		while ((obj != document)) {
			if (obj.currentStyle) styleVal = obj.currentStyle.position;
			else if (window.getComputedStyle) styleVal = window.getComputedStyle(obj, "").getPropertyValue('position');
			if (styleVal == 'absolute') {
				x += obj.offsetLeft;
				y += obj.offsetTop;
			}
			obj = obj.parentNode;
		}
		var pos =INVEN.Coordination.create();
		pos.x = x;
		pos.y = y;
		return pos;
	};

/* 환경변수 */
	INVEN.browser = getNavigator();

/* 인벤링크 */
	INVEN.Links = window.INVEN.Links || {};

	INVEN.Links.myCharacter = function() {
		var left = 100 + window.screenX + (document.querySelector('.commu-right .webzine-login') ? 810 : 0);
		var charWin = window.open('https://member.inven.co.kr/user/scorpio/change/','mycharacter',`left=${left},top=10,width=750,height=600,resizable=no,scrollbars=yes, toolbar=0`);
		charWin.focus();
	};
	INVEN.Links.myNotes = function() {
		var left = 100 + window.screenX + (document.querySelector('.commu-right .webzine-login') ? 810 : 0);
		var noteWin = window.open('https://www.inven.co.kr/member/note/','mynotes',`left=${left},top=100,width=747,height=494,resizable=yes,scrollbars=no, toolbar=0`);
		noteWin.focus();
	};
	INVEN.Links.newNotes = function() {
		var noteWin = window.open('https://www.inven.co.kr/member/note/?asnew=1','mynotes','left=100,top=100,width=747,height=494,resizable=yes,scrollbars=no, toolbar=0');
		if (!noteWin || noteWin.closed || typeof noteWin.closed == 'undefined') {
			alert("새로운 쪽지가 있지만 팝업이 차단되었습니다.\n\n우편함을 다시 열거나 팝업 차단을 해제 해주세요.");
		} else {
			noteWin.focus();
		}
	};
	INVEN.Links.myNotesConfirm = function(winObj, isNew) {
		if (winObj.innerHeight == 0) {
			alert((isNew ? "새로운 쪽지가 있지만 " : "") + "팝업이 차단되었습니다.\n\n우편함을 다시 열거나 팝업 차단을 해제 해주세요.");
			winObj.close();
		}
	};
	INVEN.Links.myInven = function() {
		var left = 100 + window.screenX + (document.querySelector('.commu-right .webzine-login') ? 810 : 0);
		var invenWin = window.open('https://www.inven.co.kr/member/inventory/','myinventory',`left=${left},top=10,width=693,height=700,resizable=yes,scrollbars=yes, toolbar=0`);
		invenWin.focus();
	};
	INVEN.Links.myInvenSignImg = function() {
		var profileid = document.getElementById('invenprofileimg');
		var mid = profileid.getAttribute('data-mid');
		var mnick = profileid.getAttribute('data-mnick');
		var left = 400 + window.screenX + (document.querySelector('.commu-right .webzine-login') ? 810 : 0);
		var invenWin = window.open('https://www.inven.co.kr/member/inventory/?mode=set.profileimg&memid='+mid+'&memnick='+mnick,'myinventory',`left=${left},top=250,width=390,height=335,resizable=yes,scrollbars=yes, toolbar=0`);
		invenWin.focus();
	};
	INVEN.Links.myICon = function() {
		var iconWin = window.open('https://www.inven.co.kr/member/inventory/?mode=set.icon','myicon','left=100,top=10,width=693,height=700,resizable=yes,scrollbars=yes, toolbar=0');
		iconWin.focus();
	};
	INVEN.Links.mySkill = function() {
		var left = 100 + window.screenX + (document.querySelector('.commu-right .webzine-login') ? 810 : 0);
		var skillWin = window.open('https://www.inven.co.kr/member/skill/','myskills',`left=${left},top=10,width=500,height=700,resizable=yes,scrollbars=yes, toolbar=0`);
		skillWin.focus();
	};
	INVEN.Links.myScrap = function() {
		var left = 100 + window.screenX + (document.querySelector('.commu-right .webzine-login') ? 810 : 0);
		var scrapWin = window.open('https://www.inven.co.kr/member/scrap/','myscrap',`left=${left},top=10,width=933,height=787,resizable=yes,scrollbars=yes, toolbar=0`);
		scrapWin.focus();
	};
	INVEN.Links.invenMarket = function() {
		//var market_window = window.open('https://www.inven.co.kr/kboard/market/market_list_item.php','market','height=740,width=810,scrollbars=1')
		var market_window = window.open('https://www.inven.co.kr/town/market/','market','height=100,width=100,scrollbars=yes,resizable=yes');
		market_window.focus();
	};
	INVEN.Links.signIn = function() {
		// v1
		// var left = 100 + window.screenX + (document.querySelector('.commu-right .webzine-login') ? 810 : 0);
		// var regWin = window.open("https://member.inven.co.kr/user/scorpio/join/","register",`toolbar=0,scrollbars=yes,resizable=0,width=750,height=700, top=100, left=${left}`);
		// //var regWin = window.open("https://member.inven.co.kr/m/join/","register","toolbar=0,scrollbars=yes,resizable=0,width=750,height=700, top=100, left=100"); //임시모바일용
		// regWin.focus();
		window.location.href = 'https://member.inven.co.kr/user/aries/join/';
	};
	INVEN.Links.myArticle = function() {
		var articleWin = window.open('https://www.inven.co.kr/member/inventory/myarticle.php','myArticle','left=100,top=10,width=693,height=700,resizable=yes,scrollbars=yes, toolbar=0');
		articleWin.focus();
	};
	INVEN.Links.eventPopup = function() {
		var eventWin = window.open('https://www.inven.co.kr/event/common/','invenevent','left=100,top=100,width=710,height=494,resizable=yes,scrollbars=no, toolbar=0');
		eventWin.focus();
	};
	INVEN.Links.findIdPw = function() {
		var left = 100 + window.screenX + (document.querySelector('.commu-right .webzine-login') ? 810 : 0);
		//아이디/비번찾기 막을때
		//var findWin = window.open("https://www.inven.co.kr/board/powerbbs.php?come_idx=228&query=view&l=103&iskin=webzine");
		var fm = document.createElement("FORM");
		fm.style.display = 'none';
		fm.action = 'https://member.inven.co.kr/user/scorpio/find/info';
		fm.method = "POST";
		fm.target = "m_reg";
		if (document.getElementById('inven-verification') && document.getElementById('inven-verification').content) {
			var verifyObj = document.createElement("INPUT");
			verifyObj.type = "hidden";
			verifyObj.name = "weblogin";
			verifyObj.value = document.getElementById('inven-verification').content;
			fm.appendChild(verifyObj);
		}
		if (!document.body) {
			document.write("<body></body>");
		}
		document.body.appendChild(fm);

		var findWin = window.open("","m_reg",`toolbar=0,scrollbars=0,resizable=0,width=750,height=700, top=100, left=${left}`);
		fm.submit();
		findWin.focus();
		return false;
	};
	INVEN.Links.reportArticle = function(params) {
		var repWin = window.open("https://www.inven.co.kr/common/report/report.php?" + params,"","left=100,top=100,width=596,height=480,resizable=no,scrollbars=no,toolbar=0");
	};
	INVEN.Links.viewImage = function(file, loc) {
		if (!loc) loc = "";
		var url = "https://www.inven.co.kr/common/image/viewer.php?loc=" + loc + "&file=" + encodeURIComponent(file);
		window.open(url,"","left=0,top=0,width=100,height=100,resizable=yes,scrollbars=no, toolbar=0");
	};
	INVEN.Links.sendNote = function(nick, condition) {
		if (!condition) { condition = ''; }
		condition = splitAssoc(condition, ',', '->');
		condition['folder'] = 'write';
		condition['nick'] = nick;

		var url = 'https://www.inven.co.kr/member/note/';
		var link = INVEN.QueryMaker.getLink(url, condition, 'clear');
		//INVEN.Location.openWin(link, 'popup', 'name=mynotes,left=100,top=100,width=100,height=100,resizable=no,scrollbars=no, toolbar=0');
		var noteWin = window.open(link,'mynotes','left=100,top=100,width=747,height=494,resizable=yes,scrollbars=no, toolbar=0');
		noteWin.focus();
	};
	INVEN.Links.viewProfile = function(nick) {
		var url = "https://www.inven.co.kr/member/inventory/view_inventory.php?nick=" + encodeURIComponent(nick);
		var invenInventory = window.open(url,'invenInventory','width=690,height=250,toolbar=no,scrollbars=yes,resizable=yes');
		invenInventory.focus();
	};
	INVEN.Links.playAfreeca = function(url) {
		var oRunAfreeca = window.open(url, 'oRunAfreeca', 'left=10,top=10,width=10,height=10,marginwidth=0,margnheight=0,resizable=1,scrollbars=no');
		oRunAfreeca.focus();
	};
	INVEN.Links.ageVerification = function(url) {
		url = (typeof url == 'string' && /^https?:\/\/[^\.]+\.inven\.co\.kr\//.test(url.trim())) ? `?${url}` : '';
		location.replace(`https://member.inven.co.kr/user/aquarius/di/${url}`);
	};
	INVEN.Links.ageVerificationMobile = function() {
		url = (typeof url == 'string' && /^https?:\/\/[^\.]+\.inven\.co\.kr\//.test(url.trim())) ? `?${url}` : '';
		location.replace(`https://member.inven.co.kr/user/aquarius/di/${url}`);
	};

/* Ready State */
	INVEN.ReadyState = window.INVEN.ReadyState || {};
	INVEN.ReadyState.list = window.INVEN.ReadyState.list || new Array();
	INVEN.ReadyState.add = function(fn) {
		var n = INVEN.ReadyState.list.length;
		var exist = false;
		for (var i = 0; i < n; i++) {
			if (INVEN.ReadyState.list[i] == fn) { exist = true; }
		}
		if (!exist) { INVEN.ReadyState.list.push(fn); }
	};
	INVEN.ReadyState.exec = function() {
		var n = INVEN.ReadyState.list.length;
		for (var i = 0; i < n; i++) {
			INVEN.ReadyState.list[i]();
		}
	};

/* Location */
	/* Initialize */
		INVEN.Location = window.INVEN.Location || {};
	/* openWin */
		INVEN.Location.openWin = function(url, target, opt) {
			if (!opt) opt = "";
			if (!target) { target='_self'; }
			switch (target) {
				case 'popup':
					var defopt = splitAssoc('name=,left=100,top=100,width=100,height=100,resizable=no,scrollbars=no,location=no,toolbar=no', ',', '=');
					var opts = opt.split(",");
					for (var i in opts) {
						var optx = opts[i].split("=");
						defopt[optx[0]] = optx[1];
					}
					popOption = "left="+defopt["left"]+",top="+defopt["top"]+",width="+defopt["width"]+",height="+defopt["height"];
					popOption += ",resizable="+defopt["resizable"]+",scrollbars="+defopt["scrollbars"]+",toolbar="+defopt["toolbar"];
					popOption += ",location="+defopt["location"];

					window.open(url,defopt["name"],popOption);
					break;
				case '_blank':
					window.open(url);
					break;
				case '_self':
					location.href = url;
					break;
				default:
					window.open(url, target);
			}
		};
	/* getSiteRootPath */
		INVEN.Location.getSiteRootPath = function(path) {
			if (!path) path = location.href;
			var matches = path.match(/https?:\/\/([^.]*).inven.co.kr\/?([^\/]*)\/?/);
			var temp = "/";
			if (!matches) {
				var matches = path.match(/http:\/\/inven.co.kr\/([^\/]*)\/?/);
				if (matches) temp += matches[1] + "/";
			} else {
				if (matches[1] == 'www') temp += matches[2] + "/";
			}
			return temp;
		};

/* 쿼리 생성기 */
	INVEN = window.INVEN || {};
	INVEN.QueryMaker = window.INVEN.QueryMaker || {};
	INVEN.QueryMaker.virtualHref = window.INVEN.QueryMaker.virtualHref || location.href.toString();
	INVEN.QueryMaker.objects = window.INVEN.QueryMaker.objects || new Array();
	INVEN.QueryMaker.create = function() {
		var n = INVEN.QueryMaker.objects.length;
		INVEN.QueryMaker.objects[n] = new INVEN.QueryMaker.object();
		return INVEN.QueryMaker.objects[n];
	};
	INVEN.QueryMaker.object = function() {
		var optionArray = new Array();
		this.setDefalutOption = function(changeOption) {
			optionArray['default'] = INVEN.QueryMaker.getOptionArray(changeOption, '->', ',');
		};
		this.getLink = function(file, change, changeOption) {
			optionArray['option'] = INVEN.QueryMaker.getOptionArray(changeOption, '->', ',');
			optionArray['option'] = mergeOption();
			return INVEN.QueryMaker.getLink(file, change, optionArray['option']);
		};
		function mergeOption() {
			var finalOptionArray = new Array();
			var defaultKey = 0;
			var optionKey = 0;
			var processKey = 0;
			switch (optionArray['default']['type']) {
				case 'leave': defaultKey = 20; break;
				case 'remove': defaultKey = 30; break;
				case 'clear': defaultKey = 40; break;
				default: processKey = 10; break;
			}
			switch (optionArray['option']['type']) {
				case 'leave': optionKey = 2; break;
				case 'remove': optionKey = 3; break;
				case 'clear': processKey = 4; break;
				default: processKey = 1; break;
			}
			if (!processKey) {
				processKey = defaultKey + optionKey;
            }
            var key;
			switch (processKey) {
				case 1:
				case 43:
					finalOptionArray = optionArray['default'];
					break;
				case 4:
				case 10:
				case 32:
				case 42:
					finalOptionArray = optionArray['option'];
					break;
				case 22:
				case 33:
					finalOptionArray = optionArray['default'];
					for (key in optionArray['option']['value']) {
						finalOptionArray['value'][key] = true;
					}
					break;
				case 23:
					finalOptionArray = optionArray['default'];
					for (key in optionArray['option']['value']) {
						finalOptionArray['value'][key] = false;
					}
					break;
			}
			return finalOptionArray;
		}
	};
	INVEN.QueryMaker.getOptionArray = function(query, sep1, sep2) {
		if (!query) { return new Array(); }
		returnOption = new Array();
		if (query.constructor == Array) {
			return query;
		} else if (typeof(query) == 'string') {
			var optionArray = query.split(sep1);
			returnOption['type'] = optionArray[0];
			if (optionArray[1]) {
				var queryArray = optionArray[1].split(sep2);
				var queryArrayTemp = new Array();
				var valueLen = queryArray.length;
				for (var i = 0; i < valueLen; i++) {
					queryArrayTemp[queryArray[i]] = true;
				}
				returnOption['value'] = new Array();
				returnOption['value'] = queryArrayTemp;
			} else if (returnOption['type'] != 'clear') {
				return new Array();
			}
		}
		return returnOption;
	};
	INVEN.QueryMaker.setVirtualHref = function(file) {
		INVEN.QueryMaker.virtualHref = file;
	};
	INVEN.QueryMaker.resetVirtualHref = function() {
		INVEN.QueryMaker.virtualHref = location.href.toString();
	};
	INVEN.QueryMaker.addVirtualCondition = function(change) {
		INVEN.QueryMaker.virtualHref = INVEN.QueryMaker.getLink(INVEN.QueryMaker.virtualHref, change);
	};
	INVEN.QueryMaker.getLink = function(file, change, changeOption) {
		if (!change) {
			change = '';
		}
		function processQuery(file, change, changeOption) {
			var queryArray = new Array();
			var queryStart = '';
			queryArray = getUrl();
			queryArray['current'] = splitAssoc(queryArray['current'], '&', '=', true);
			if (change.constructor == Array) {
				queryArray['change'] = change;
			} else {
				queryArray['change'] = splitAssoc(change, ',', '->');
			}
			queryArray['option'] = INVEN.QueryMaker.getOptionArray(changeOption, '->', ',');
			var finalQueryArray = getFinalQueryArray(queryArray);
			var query = getArrayFromQuery(finalQueryArray);
			if (queryArray['file'] && query) {
				queryStart = '?';
			}
			var finalUrl = queryArray['file'] + queryStart + query;
			return finalUrl;
		}
		function getUrl() {
			var returnQuery = new Array();
			var url = INVEN.QueryMaker.virtualHref ? INVEN.QueryMaker.virtualHref : location.href.toString();
			var temp = url.split('#');
			url = temp[0];
			var temp = url.split('?');
			if (!file) {
				returnQuery['file'] = temp[0];
			} else {
				returnQuery['file'] = file.split('#')[0].split('?')[0];
			}
			returnQuery['current'] = temp.length > 1 ? temp[1] : null;
			return returnQuery;
		}
		function getFinalQueryArray(queryArray) {
			var finalArray = new Array();
			switch (queryArray['option']['type']) {
				case 'remove':
					finalArray = removeQuery(queryArray);
					break;
				case 'leave':
					finalArray = leaveQuery(queryArray);
					break;
				case 'clear':
					finalArray = queryArray['change'];
					break;
				default:
					finalArray = queryArray['current'];
					break;
			}
			for (var changeKey in queryArray['change']) {
				//if (queryArray['change'][changeKey].constructor == Array) {
				//	finalArray[changeKey] = queryArray['change'][changeKey].join(',');
				//} else {
					finalArray[changeKey] = queryArray['change'][changeKey];
				//}
			}
			return finalArray;
		}
		function removeQuery(queryArray) {
			for (var removeKey in queryArray['option']['value']) {
				if (queryArray['option']['value'][removeKey]) {
					queryArray['current'][removeKey] = false;
				}
			}
			return queryArray['current'];
		}
		function leaveQuery(queryArray) {
			var tempQueryArray = new Array();
			for (var leaveKey in queryArray['option']['value']) {
				if (queryArray['option']['value'][leaveKey]) {
					tempQueryArray[leaveKey] = queryArray['current'][leaveKey];
				}
			}
			return tempQueryArray;
		}
		function getArrayFromQuery(queryArray) {
			var finalQueryArray = new Array();
			for (queryKey in queryArray) {
				if (queryArray[queryKey]) {
					finalQueryArray.push(queryKey + '=' + encodeURIComponent(queryArray[queryKey]));
				}
			}
			var finalQuery = finalQueryArray.join('&');
			return finalQuery;
		}
		return processQuery(file, change, changeOption);
	};

/* Common Nick Print */
	/* Initialise */
		var INVEN = window.INVEN || {};
		INVEN.NickMenuHandler = window.NickMenuHandler || {};
	/* Handler */
		INVEN.NickMenuHandler.create = function() {
			var tempObj = new INVEN.NickMenuHandler.object();
			return tempObj;
		};
		INVEN.NickMenuHandler.object = function() {
			/* Privates */
				var menus = new Array();
				var insObj = this;
			/* Menu Functions */
				this.addMenu = function(menucode, caption, link) {
					menus[menucode] = new Array();
					menus[menucode]['caption'] = caption;
					menus[menucode]['link'] = link;
				}
			/* Print Menu */
				function printMenu(ulObj, key, value, nick) {
					var liObj = document.createElement('li');
					liObj.className = key;
						var aObj = document.createElement('a');
						aObj.href = 'javascript:nothing();';
						if (key == 'close') {
							aObj.onclick = hideLayer;
							aObj.appendChild(document.createTextNode('닫기'));
						} else {
							aObj.onclick = function() { menuClicked(key, value, nick); };
							aObj.appendChild(document.createTextNode(value['caption']));
						}
						liObj.appendChild(aObj);
					ulObj.appendChild(liObj);
				}
			/* Menu Clicked */
				function menuClicked(key, value, nick) {
					if (value['link']) {
						var url = value['link'] + encodeURIComponent(nick);
					}
					INVEN.Location.openWin(url, 'popup');
				}
			/* Show */
				this.show = function(nick) {
					var layerObj = getObj('comPrintNickMenu');
					if (!layerObj) {
						layerObj = document.createElement("DIV");
						layerObj.id = 'comPrintNickMenu';
						document.body.appendChild(layerObj);
					} else if (layerObj.parentNode != document.body) {
						layerObj.parentNode.removeChild(layerObj);
						document.body.appendChild(layerObj);
					}
					clearMenu(layerObj);
					INVEN.Layer.show(layerObj, 5, 5, false, false);
					var ulObj = document.createElement('ul');
					for (var key in menus) {
						var value = menus[key];
						if (value) {
							printMenu(ulObj, key, value, nick);
						}
					}
					var closeMenu = new Array();
					printMenu(ulObj, 'close');
					layerObj.appendChild(ulObj);
					addEvent(document,'onmouseup',hideLayer);
				};
			/* Hide */
				function hideLayer() {
					removeEvent(document,'onmouseup',hideLayer);
					var layerObj = getObj('comPrintNickMenu');
					INVEN.Layer.hide(layerObj);
				}
			/* Clear */
				function clearMenu(obj) {
					var chs = obj.childNodes;
					var n = chs.length;
					for (var i = n - 1; i >= 0; i--) {
						obj.removeChild(chs[i]);
					}
				}
		}

/* Floating Alert */
	INVEN.FloatingAlert = window.INVEN.FloatingAlert || {};
	INVEN.FloatingAlert.create = function() {
		var obj = new INVEN.FloatingAlert.object();
		obj.init();
		return obj;
	};
	INVEN.FloatingAlert.object = function() {
		var layerObj = null;
		var layerIframeObj = null;
		var textWrapObj = null;
		var layerOutTimer = 0;
		var layerOutDelay = 10000;
		var textLimit = 0;
		var textCache = new Array();
		var ready = false;
		var layerTargetX = null;
		var layerTargetY = null;

		this.init = function() {
			addEvent(window, 'onload', setReady);
			//INVEN.ReadyState.add(forceReady);
		};

		function setReady() {
			removeEvent(window, 'onload', setReady);
			if (!layerObj) {
				layerObj = document.createElement("DIV");
				layerObj.id = 'comFloatAlert';
				layerObj.style.display = 'none';
				textWrapObj = document.createElement("UL");
				textWrapObj.className = 'textlist';
				layerObj.appendChild(textWrapObj);
				document.body.appendChild(layerObj);
			}
			ready = true;
		};

		function checkIframeObj() {
			if (!layerIframeObj) {
				layerIframeObj = document.createElement("IFRAME");
				layerIframeObj.src = 'about:blank';
				layerIframeObj.style.display = 'none';
				layerIframeObj.frameBorder = 0;
				layerIframeObj.style.position = "absolute";
				layerIframeObj.style.styleFloat = "left";
				layerIframeObj.style.display = "none";
				document.body.appendChild(layerIframeObj);
			}
		}

		function forceReady() {
			setReady();
		}
		this.forceReady = forceReady;

		this.setTextLimit = function(count) { textLimit = count; };

		function addText(text, fade) {
			if (!ready) {
				setTimeout(function() { addText(text, fade); }, 1000);
				return;
			}
			var temp = new Array();
			temp['object'] = document.createElement("LI");
			temp['object'].appendChild(document.createTextNode(text));
			textWrapObj.appendChild(temp['object']);
			temp['hideFn'] = function() { hideText(temp); }
			temp['object'].onclick = temp['hideFn'];
			temp['hideTimeout'] = 0;
			if (fade > 0) {
				showAlert(true);
				temp['hideTimeout'] = setTimeout(temp['hideFn'], fade);
			} else {
				showAlert(false);
			}
			textCache.push(temp);
			limitText();
		}
		this.addText = addText;

		function limitText() {
			if (textLimit > 0) {
				if (textCache.length > textLimit) {
					for (var i = 0; i < textCache.length - textLimit; i++) {
						var temp = textCache.shift();
						if (temp['hideTimeout']) { clearTimeout(temp['hideTimeout']); temp['hideTimeout'] = 0; }
						if (temp['object'] && temp['object'].parentNode) {
							temp['object'].parentNode.removeChild(temp['object']);
						}
					}
				}
			}
		}

		function hideText(textObj) {
			obj = textObj['object'];
			if (textObj['hideTimeout']) { clearTimeout(textObj['hideTimeout']); textObj['hideTimeout'] = 0; }
			if (!obj) { return; }
			var parentObj = obj.parentNode;
			parentObj.removeChild(obj);
			var n = parentObj.getElementsByTagName("LI").length;
			if (n == 0) {
				hideAlert();
			}
		}

		function showAlert(preserve) {
			if (!preserve) { preserve = false; }
			if ((layerTargetY === null) && (layerObj.style.display == 'none')) {
				layerObj.style.visibility = 'hidden';
				layerObj.style.display = 'block';
				var height = layerObj.offsetHeight + toInteger(layerObj.style.borderBottomWidth) + toInteger(layerObj.style.borderTopWidth);
				layerObj.style.top = height * (-1);
				layerObj.style.visibility = 'visible';
				showInventory(false);
				layerTargetY = 0;
				showAlertProcess();
			}
			if (layerOutTimer) { window.clearTimeout(layerOutTimer); }
			if (!preserve) {
				layerOutTimer = setTimeout(hideAlert, layerOutDelay);
			}
		}

		function syncIframeStyle() {
			if (!layerObj || !layerIframeObj) { return; }
			checkIframeObj();
			if (layerObj.style.display == 'none') {
				layerIframeObj.style.display = 'none';
			} else {
				layerIframeObj.style.zIndex = layerObj.style.zIndex - 1;
				layerIframeObj.style.left = layerObj.offsetLeft;
				layerIframeObj.style.top = layerObj.offsetTop;
				layerIframeObj.style.width = layerObj.offsetWidth;
				layerIframeObj.style.height = layerObj.offsetHeight + 50;
				layerIframeObj.style.display = 'inline';
			}
		}

		function showAlertProcess() {
			if (layerTargetY === null) { return; }
			var top = layerObj.offsetTop;
			var modeY = 0;
			if (layerTargetY > top) {
				modeY = 1;
			} else if (layerTargetY < top) {
				modeY = -1;
			}
			layerObj.style.top = (top + modeY) + 'px';
			if (modeY != 0) {
				setTimeout(showAlertProcess, 0);
			} else {
				layerTargetY = null;
			}
			if ((modeY == 0) && (top < 0)) {
				layerObj.style.display = 'none';
				showInventory(true);
			}
			syncIframeStyle();
		}

		function hideAlert() {
			if (layerOutTimer) { window.clearTimeout(layerOutTimer); }
			var height = layerObj.offsetHeight + toInteger(layerObj.style.borderBottomWidth) + toInteger(layerObj.style.borderTopWidth);
			layerTargetY = height * (-1);
			showAlertProcess();
		}

		function showInventory(show) {
			var temp = getObj("comHeadlink");
			if (!temp) { return; }
			temp = temp.getElementsByTagName("SELECT")[0];
			if (!temp) { return; }
			temp.style.visibility = show ? 'visible' : 'hidden';
		}
	};

	INVEN.FloatingAlert.HeadBlind = INVEN.FloatingAlert.create();
	INVEN.FloatingAlert.HeadBlind.setTextLimit(5);

/* TEMPORARY */
	// DIR_PATH를 구함
	function getDirPath(path) {
		if (!path) path = location.href;
		var temp = '';
		var matches = path.match(/https?:\/\/([^.]*).inven.co.kr\/?([^\/]*)\/?/);
		if (!matches) {
			var matches = path.match(/http:\/\/inven.co.kr\/([^\/]*)\/?/);
			temp = (matches) ? matches[1] : 'www';
		} else {
			temp = (matches[1] == 'www') ? matches[2] : matches[1];
		}
		return temp;
	}
	// 현재 주소에 따라 최상위 절대경로 추출
	function getSiteRootPath(path) {
		if (!path) path = location.href;
		var matches = path.match(/https?:\/\/([^.]*).inven.co.kr\/?([^\/]*)\/?/);
		var temp = "/";
		if (!matches) {
			var matches = path.match(/http:\/\/inven.co.kr\/([^\/]*)\/?/);
			if (matches) temp += matches[1] + "/";
		} else {
			if (matches[1] == 'www') temp += matches[2] + "/";
		}
		return temp;
	}

/* ClipBoard Copy */
	function clipboadCopy(text) {
		if ((getNavigator() == 'IE') && window.clipboardData) {
			if (window.clipboardData.setData("Text", text)) {
				alert('복사되었습니다');
			} else {
				clipboadCopyFalse(text);
			}
		} else {
			clipboadCopyFalse(text);
		}
		function clipboadCopyFalse(text) {
			var floatObj = document.getElementById('clipboardCoryForNoneIE');
			if (!floatObj) {
				var divObj = document.createElement('DIV');
				divObj.id = 'clipboardCoryForNoneIE';
				divObj.style.position = 'absolute';
				divObj.style.left = 0;
				divObj.style.top = 0;
				divObj.style.display = 'none';
				divObj.style.styleFloat = 'left';
				divObj.style.cssFloat = 'left';
				divObj.style.width = '300px';
				divObj.style.backgroundColor = 'white';
				divObj.style.border = '1px solid black';
				divObj.style.padding = '5px';
				var labelObj = document.createElement('label');
				labelObj.style.clear = 'both';
				labelObj.style.display = 'inline';
				labelObj.style.styleFloat = 'left';
				labelObj.style.cssFloat = 'left';
				labelObj.innerHTML = '아래 내용을 복사해주세요.';
				var textareaObj = document.createElement('textarea');
				textareaObj.style.clear = 'both';
				textareaObj.style.display = 'inline';
				textareaObj.style.stylefloat = 'left';
				textareaObj.style.CSSfloat = 'left';
				textareaObj.style.width = '300px';
				textareaObj.style.height = '100px';
				var inputObj = document.createElement('input');
				inputObj.style.clear = 'both';
				inputObj.style.display = 'inline';
				inputObj.style.stylefloat = 'left';
				inputObj.style.CSSfloat = 'left';
				inputObj.style.border = '1px solid black';
				inputObj.style.width = '300px';
				inputObj.style.marginTop = '5px';
				inputObj.type = 'button';
				inputObj.value = '닫기';
				inputObj.onclick = function() {
					INVEN.Layer.hide('clipboardCoryForNoneIE');
				}
				divObj.appendChild(labelObj);
				divObj.appendChild(textareaObj);
				divObj.appendChild(inputObj);
				floatObj = divObj;
				document.body.appendChild(floatObj);
			}
			var textObj = INVEN.Html.getChildNodes(floatObj, 'textarea', true)[0];
			textObj.value = text;
			INVEN.Layer.show(floatObj, 'm+10', 'm+10', false, true);
		}
	}

/* ONCLICK FOR HREF */
	function onclickHref(e, fn) {
		function getEvent(eventObj) {
			if (navigator.userAgent.indexOf("MSIE") > -1) {
				return event;
			} else {
				return eventObj;
			}
		}
		e = getEvent(e);
		if (e.ctrlKey == true || e.shiftKey == true) {
			return true;
		} else {
			fn();
			return false;
		}
	}

/* SYSTEM */
	/* Initialize */
		INVEN.System = window.INVEN.System || {};
	/* Report */
		INVEN.System.reportPost = function(system, indexs) {
			var url = 'https://www.inven.co.kr/common/report/report.php';
			var condition = new Array();
			condition['rcidx'] = system;
			if (indexs.constructor != Array) {
				indexs = splitAssoc(indexs, ',', '->');
			}
			for (var key in indexs) {
				condition[key] = indexs[key];
			}
			var link = INVEN.QueryMaker.getLink(url, condition, 'clear');
			INVEN.Location.openWin(link, 'popup', "scrollbars=no");
		}

/* BOOK MARK */
	INVEN.invenBookmark = window.INVEN.invenBookmark || {};
	INVEN.invenBookmark.onloadCheck = false;
	INVEN.invenBookmark.initLayer = function() {
		INVEN.invenBookmark.onloadCheck = true;
		removeEvent(window, 'onload', INVEN.invenBookmark.initLayer);
	}
	addEvent(window, 'onload', INVEN.invenBookmark.initLayer);
	INVEN.invenBookmark.openBookmark = function(obj, xpos, ypos) {
		var loginBookmarkId = document.getElementById('login-bookmark');
		if (INVEN.invenBookmark.onloadCheck) {
			var bookmarkObj = getObj('invenBookmark');
			if (!bookmarkObj) {
				bookmarkObj = INVEN.invenBookmark.loadBookmark();
			}
			if (bookmarkObj.style.display == 'inline') {
				var bookmarkFormObj = getObj('invenBookmarkForm');
				if (bookmarkFormObj) {
					bookmarkFormObj.style.display = 'none';
				}
				if(loginBookmarkId) loginBookmarkId.classList.remove('on');
				INVEN.Layer.hide(bookmarkObj,true);
			} else {
				if (obj) {
					obj = getObj(obj);
					if (!xpos) {
						xpos = 'e+5f';
					}
					if (!ypos) {
						ypos = 'n+0f';
					}
					INVEN.Layer.show(bookmarkObj, xpos, ypos, false, true, obj);
				} else {
					INVEN.Layer.show(bookmarkObj, 0, 0, false, true);
				}
				if(loginBookmarkId)  loginBookmarkId.classList.add('on');
			}
		} else {
			alert('페이지 로딩이 완료되어야 사용 가능합니다.');
		}
	}
	INVEN.invenBookmark.closeBookmark = function(bookmarkObj) {
		var bookmarkFormObj = getObj('invenBookmarkForm');
		if (bookmarkFormObj) {
			bookmarkFormObj.style.display = 'none';
		}
		if(document.getElementById('login-bookmark')) document.getElementById('login-bookmark').classList.remove('on');
		INVEN.Layer.hide(bookmarkObj,true);
	}
	INVEN.invenBookmark.loadBookmark = function() {
		var bookmarkObj = getObj('invenBookmark');
		if (bookmarkObj) {
			document.body.removeChild(bookmarkObj);
		}
		function makeMenu() {
			var bookmarkMenuObj = createObj('div');
			bookmarkMenuObj.className = 'bookmarkMenu';
			var ulObj = createObj('ul');
			var liObj1 = createObj('li');
			var aObj1 = createObj('a');
			aObj1.href = 'javascript:nothing();';
			aObj1.innerHTML = '[제목순 정렬]';
			liObj1.appendChild(aObj1);
			//ulObj.appendChild(liObj1);
			var liObj2 = createObj('li');
			var aObj2 = createObj('a');
			aObj2.href = 'javascript:nothing();';
			aObj2.innerHTML = '[시간순 정렬]';
			liObj2.appendChild(aObj2);
			//ulObj.appendChild(liObj2);
			var liObj3 = createObj('li');
			liObj3.className = 'right';
			var aObj3 = createObj('a');
			aObj3.href = 'javascript:nothing();';
			aObj3.onclick = function() {
				INVEN.invenBookmark.addAction();
			}
			aObj3.innerHTML = '[즐겨찾기 추가]';
			liObj3.appendChild(aObj3);
			ulObj.appendChild(liObj3);
			bookmarkMenuObj.appendChild(ulObj);
			return bookmarkMenuObj;
		}
		var bookmarkObj = createObj('div');
		bookmarkObj.id = 'invenBookmark';
		var bookmarkBodyObj = createObj('div');
		bookmarkBodyObj.className = 'invenBookmarkBody';
		var headTitleObj = createObj('h3');
		headTitleObj.className = 'bookmarkTitle';
		headTitleObj.innerHTML = '내 즐겨찾기';
		bookmarkBodyObj.appendChild(headTitleObj);
		var closeObj = createObj('div');
		closeObj.className = 'close';
		var aObj = createObj('a');
		aObj.href = 'javascript:nothing();';
		aObj.onclick = function() {
			INVEN.invenBookmark.closeBookmark(bookmarkObj);
		}
		aObj.innerHTML = '닫기';
		closeObj.appendChild(aObj);
		bookmarkBodyObj.appendChild(closeObj);
		var tempObj = makeMenu();
		bookmarkBodyObj.appendChild(tempObj);
		var listObj = createObj('div');
		listObj.className = 'bookmarkList loading';
		bookmarkBodyObj.appendChild(listObj);
		var ulObj = createObj('ul');
		ulObj.bookmarkObj = bookmarkObj;
		INVEN.invenBookmark.loadList(ulObj);
		listObj.appendChild(ulObj);
		bookmarkObj.listObj = ulObj;
		bookmarkBodyObj.appendChild(listObj);
		var tempObj = makeMenu();
		tempObj.className = 'bookmarkMenu bookmarkMenuNoBorder';
		bookmarkBodyObj.appendChild(tempObj);
		bookmarkObj.appendChild(bookmarkBodyObj);
		document.body.appendChild(bookmarkObj);
		return bookmarkObj;
	}
	INVEN.invenBookmark.loadList = function(ulObj) {
		var bookmarkObj = ulObj.bookmarkObj;
		if (!ulObj.iframeObj) {
			var iframeObj = createObj('iframe', 'invenBookmarkGetList');
			ulObj.iframeObj = iframeObj;
			ulObj.iframeObj.style.display = 'none';
			bookmarkObj.appendChild(iframeObj);
			addEvent(window, 'message', function(e) {
				if (/https:\/\/(www|pick)\.inven\.co\.kr/.test(e.origin) && e.source === ulObj.iframeObj.contentWindow) {
					INVEN.invenBookmark.makeList(ulObj, e.data);
					ulObj.parentNode.className = 'bookmarkList';
				}
			});
		}
		var d = new Date();
		if(typeof jQuery != 'undefined' && $('body').data('site') == 'pick') {
			ulObj.iframeObj.src = 'https://pick.inven.co.kr/quicklink/fav';
		} else {
			ulObj.iframeObj.src = 'https://www.inven.co.kr/town/bookmark/bookmark_getlist.php?dummy='+(d.getTime()/1000);
		}

	}
	INVEN.invenBookmark.makeList = function(ulObj, bookmarkData) {
		INVEN.Html.removeChildAll(ulObj);
			if (bookmarkData.length <= 0) {
				var tempArray = new Array();
				tempArray['bookmarkcode'] = 0;
				tempArray['subject'] = '저장된 즐겨찾기가 없습니다.';
				bookmarkData.push(tempArray);
			}
			for (var i = 0; i < bookmarkData.length; i++) {
				var dataOne = bookmarkData[i];
				var liObj = createObj('li');
				function fn1(obj) {
					var fn = function() {
						INVEN.invenBookmark.overAction(obj);
					}
					return fn;
				}
				function fn2(code, subject) {
					var fn = function() {
						INVEN.invenBookmark.modifyAction(code, subject);
					}
					return fn;
				}
				function fn3(code) {
					var fn = function() {
						INVEN.invenBookmark.deleteAction(code);
					}
					return fn;
				}
				var spanObj1 = createObj('span');
				spanObj1.className = 'title';
				if (dataOne['bookmarkcode']) {
					var aObj1 = createObj('a');
					aObj1.href = dataOne['link'];
					aObj1.innerHTML = dataOne['subject'];
					aObj1.className = 'title';
					aObj1.title = dataOne['subject'];
					spanObj1.appendChild(aObj1);
					liObj.appendChild(spanObj1);
					var spanObj2 = createObj('span');
					spanObj2.className = 'menu';
					var aObj3 = createObj('a');
					aObj3.href = 'javascript:nothing();';
					aObj3.innerHTML = 'M';
					aObj3.title = '수정';
					aObj3.onclick = fn2(dataOne['bookmarkcode'], dataOne['subject']);
					aObj3.className = 'menu';
					spanObj2.appendChild(aObj3);
					var aObj4 = createObj('a');
					aObj4.href = 'javascript:nothing();';
					aObj4.innerHTML = 'D';
					aObj4.title = '삭제';
					aObj4.className = 'menu';
					aObj4.onclick = fn3(dataOne['bookmarkcode']);
					spanObj2.appendChild(aObj4);
					liObj.appendChild(spanObj2);
				} else {
					spanObj1.innerHTML = dataOne['subject'];
					liObj.appendChild(spanObj1);
				}
				liObj.onmouseover = fn1(liObj);
				ulObj.appendChild(liObj);
			}
	}
	INVEN.invenBookmark.loadForm = function() {
		var bookmarkFormObj = getObj('invenBookmarkForm');
		if (!bookmarkFormObj) {
			bookmarkFormObj = createObj('div');
			bookmarkFormObj.id = 'invenBookmarkForm';
			var divBodyObj = createObj('div');
			divBodyObj.className = 'invenBookmarkFormBody';
			var iframeObj = createObj('iframe', 'invenBookmarkFormSubmit');
			iframeObj.style.display = 'none';
			bookmarkFormObj.iframeObj = iframeObj;
			var formObj = createObj('form');
			formObj.id = 'invenBookmarkForm1';
			formObj.name = 'invenBookmarkForm1';
			formObj.action = '';
			formObj.method = 'POST';
			formObj.target = 'invenBookmarkFormSubmit';
			bookmarkFormObj.formObj = formObj;
			var inputHiddenObj1 = createObj('input');
			inputHiddenObj1.type = 'hidden';
			inputHiddenObj1.name = 'url';
			bookmarkFormObj.urlObj = inputHiddenObj1;
			var inputHiddenObj2 = createObj('input');
			inputHiddenObj2.type = 'hidden';
			inputHiddenObj2.name = 'code';
			bookmarkFormObj.codeObj = inputHiddenObj2;
			var labelObj = createObj('label');
			bookmarkFormObj.labelObj = labelObj;
			var inputObj1 = createObj('input');
			inputObj1.type = 'text';
			inputObj1.name = 'subject';
			inputObj1.className = 'bookmarktext';
			bookmarkFormObj.subjectObj = inputObj1;
			/*
			var inputObj2 = createObj('input');
			inputObj2.type = 'submit';
			inputObj2.className = 'bookmarksubmit';
			inputObj2.value = '추가';
			*/
			var inputObj2 = createObj('span');
			inputObj2.className = 'bookmarksubmit';
			inputObj2.innerHTML = '추가';
			bookmarkFormObj.submitObj = inputObj2;
			formObj.appendChild(labelObj);
			formObj.appendChild(inputObj1);
			formObj.appendChild(inputObj2);
			formObj.appendChild(inputHiddenObj1);
			formObj.appendChild(inputHiddenObj2);
			divBodyObj.appendChild(iframeObj);
			divBodyObj.appendChild(formObj);
			bookmarkFormObj.appendChild(divBodyObj);
			document.body.appendChild(bookmarkFormObj);
		}
		bookmarkFormObj.iframeObj.onload = nothing;
		return bookmarkFormObj;
	}
	INVEN.invenBookmark.addAction = function() {
		var bookmarkFormObj = INVEN.invenBookmark.loadForm();
		if (bookmarkFormObj) {
			bookmarkFormObj.style.display = 'inline';
		}
		bookmarkFormObj.labelObj.innerHTML = '[추가] 제목을 입력해주세요.';
		bookmarkFormObj.submitObj.innerHTML = '추가';
		bookmarkFormObj.subjectObj.value = INVEN.invenBookmark.getDefaultSubject();
		bookmarkFormObj.urlObj.value = INVEN.invenBookmark.getNowLink();
		if(typeof jQuery != 'undefined' && $('body').data('site') == 'pick') {
			bookmarkFormObj.formObj.action = 'https://pick.inven.co.kr/quicklink/fav/add';
		} else {
			bookmarkFormObj.formObj.action = 'https://www.inven.co.kr/town/bookmark/bookmark_add.php';
		}
		bookmarkFormObj.submitObj.onclick = fnAddSubmit();
		bookmarkFormObj.formObj.onsubmit = fnAddSubmit();

		function fnAddSubmit() {
			var fn = function() {
				if (bookmarkFormObj.urlObj.value.replace(/ /g,"") < 1) {
					alert('주소를 가져오는데 실패했습니다.');
				} else if (bookmarkFormObj.subjectObj.value.replace(/ /g,"") < 1) {
					alert('제목을 입력해주세요.');
				} else {
					var fn1 = function() {
						var bookmarkObj = getObj('invenBookmark');
						INVEN.invenBookmark.loadList(bookmarkObj.listObj);
					}
					var fn2 = false;
					fn2 = function() {
						bookmarkFormObj.style.display = 'none';
						setTimeout(fn1, 500);
						removeEvent(bookmarkFormObj.iframeObj, 'onload', fn2);
					}
					addEvent(bookmarkFormObj.iframeObj, 'onload', fn2);
					bookmarkFormObj.formObj.submit();
				}
				return false;
			}
			return fn;
		}
		INVEN.Layer.show(bookmarkFormObj, 0, 0, false, true);
		bookmarkFormObj.subjectObj.focus();
	}
	INVEN.invenBookmark.modifyAction = function(code, subject) {
		var bookmarkFormObj = INVEN.invenBookmark.loadForm();
		if (bookmarkFormObj) {
			bookmarkFormObj.style.display = 'inline';
		}
		bookmarkFormObj.labelObj.innerHTML = '[수정] 제목을 입력해주세요.';
		bookmarkFormObj.submitObj.innerHTML = '수정';
		bookmarkFormObj.subjectObj.value = subject;
		bookmarkFormObj.codeObj.value = code;
		if(typeof jQuery != 'undefined' && $('body').data('site') == 'pick') {
			bookmarkFormObj.formObj.action = 'https://pick.inven.co.kr/quicklink/fav/modify';
		} else {
			bookmarkFormObj.formObj.action = 'https://www.inven.co.kr/town/bookmark/bookmark_modify.php';
		}
		bookmarkFormObj.submitObj.onclick = fnModSubmit();
		bookmarkFormObj.formObj.onsubmit = fnModSubmit();

		function fnModSubmit() {
			var fn = function() {
				if (!code) {
					alert('주소를 가져오는데 실패했습니다.');
				} else if (bookmarkFormObj.subjectObj.value.replace(/ /g,"") < 1) {
					alert('제목을 입력해주세요.');
				} else {
					var fn1 = function() {
						var bookmarkObj = getObj('invenBookmark');
						INVEN.invenBookmark.loadList(bookmarkObj.listObj);
					}
					var fn2 = false;
					fn2 = function() {
						bookmarkFormObj.style.display = 'none';
						setTimeout(fn1, 500);
						removeEvent(bookmarkFormObj.iframeObj, 'onload', fn2);
					}
					addEvent(bookmarkFormObj.iframeObj, 'onload', fn2);
					bookmarkFormObj.formObj.submit();
				}
				return false;
			}
			return fn;
		}

		INVEN.Layer.show(bookmarkFormObj, 0, 0, false, true);
		bookmarkFormObj.subjectObj.focus();
	}
	INVEN.invenBookmark.deleteAction = function(code) {
		var bookmarkFormObj = INVEN.invenBookmark.loadForm();
		if (bookmarkFormObj) {
			bookmarkFormObj.style.display = 'none';
		}
		bookmarkFormObj.codeObj.value = code;
		if(typeof jQuery != 'undefined' && $('body').data('site') == 'pick') {
			bookmarkFormObj.formObj.action = 'https://pick.inven.co.kr/quicklink/fav/delete';
		} else {
			bookmarkFormObj.formObj.action = 'https://www.inven.co.kr/town/bookmark/bookmark_delete.php';
		}
		var fn1 = function() {
			if (!code) {
				alert('주소를 가져오는데 실패했습니다.');
			} else {
				var fn1 = function() {
					var bookmarkObj = getObj('invenBookmark');
					INVEN.invenBookmark.loadList(bookmarkObj.listObj);
				}
				var fn2 = false;
				fn2 = function() {
					setTimeout(fn1, 500);
					removeEvent(bookmarkFormObj.iframeObj, 'onload', fn2);
				}
				addEvent(bookmarkFormObj.iframeObj, 'onload', fn2);
			}
			return false;
		}
		if (confirm('삭제하시겠습니까?')) {
			fn1();
			bookmarkFormObj.formObj.submit();
		}
	}
	INVEN.invenBookmark.overAction = function(obj) {
		obj = getObj(obj);
		obj.className = 'showMenu';
		obj.onmouseout = function() {
			INVEN.invenBookmark.outAction(obj);
		}
	}
	INVEN.invenBookmark.outAction = function(obj) {
		obj = getObj(obj);
		obj.className = '';
	}
	if (!INVEN.invenBookmark.defaultSubject) {
		INVEN.invenBookmark.defaultSubject = '';
	}
	INVEN.invenBookmark.getDefaultSubject = function() {
		if (!INVEN.invenBookmark.defaultSubject) {
			INVEN.invenBookmark.defaultSubject = document.title;
		}
		return INVEN.invenBookmark.defaultSubject;
	}
	INVEN.invenBookmark.getNowLink = function() {
		return location.href;
	}

/* POPVOTE */
	INVEN.popvote = window.INVEN.popvote || {};
	INVEN.popvote.open = function(obj, voteidx, popw, poph, xpos, ypos, skin, col) {
		var invenVoteObj = getObj('comInvenVote_'+voteidx);
		if (!invenVoteObj) {
			if (!popw) popw = 470;
			if (!poph) poph = 500;
			if (!xpos) xpos = 0;
			if (!ypos) ypos = 0;
			if (!skin) skin = 'W470_GRAY1';
			if (!col) col = 1;
			invenVoteObj = createObj('div', 'comInvenVote_'+voteidx);
			invenVoteObj.id = 'comInvenVote_'+voteidx;
			invenVoteObj.className = 'popVote popVote_w470';
			invenVoteObj.style.width = popw+'px';
			invenVoteObj.style.height = poph+'px';
			var ifrObj = createObj('iframe','iVote_'+voteidx);
			ifrObj.setAttribute('id','iVote_'+voteidx);
			//ifrObj.setAttribute('frameborder','0');
			ifrObj.frameBorder = 0;
			ifrObj.setAttribute('scrolling','no');
			ifrObj.style.width = popw+'px';
			ifrObj.style.height = poph+'px';
			ifrObj.src = 'https://www.inven.co.kr/common/invenvote/print_form.php?vidx='+voteidx+'&skin='+skin+'&col='+col+'&popup=1';
			invenVoteObj.appendChild(ifrObj);
		}
		if (invenVoteObj.style.display == 'inline') {
			INVEN.Layer.hide(invenVoteObj,true);
		} else {
			INVEN.Layer.show(invenVoteObj, xpos, ypos, true, true, obj, true);
		}
	}
	INVEN.popvote.hide = function(voteidx) {
		var invenVoteObj = getObj('comInvenVote_'+voteidx);
		INVEN.Layer.hide(invenVoteObj,true);
	}
	INVEN.popvote.setHeight = function(voteidx, dynheight) {
		var invenVoteObj = getObj('comInvenVote_'+voteidx);
		var ifrObj = getObj('iVote_'+voteidx);
		invenVoteObj.style.height = parseInt(dynheight) + 10;
		ifrObj.style.height = parseInt(dynheight) + 10;
	}

/* QUICKLINK */
	INVEN.quickLink = window.INVEN.quickLink || {};
	INVEN.quickLink.openQuickLink = function() {};
	INVEN.quickLink.openQuickLinkNew = INVEN.quickLink.openQuickLink;

/* LEFTFOLDING */
	INVEN.LeftMenu = window.INVEN.LeftMenu || {};
	INVEN.LeftMenu.unfolding = function(obj) {
		var bObj = INVEN.Html.getParentByClassName(obj, 'bttnfolding');
		var pObj = bObj.parentNode;
		var menus = pObj.getElementsByTagName('LI');
		var n = menus.length;
		for (var i=0; i<n; i++) {
			INVEN.Html.removeClass(menus[i], 'folding');
		}
		pObj.removeChild(bObj);
	}

/* BOARD */
	INVEN.searchBoard = function(comeidx, name, keyword, iskin, target) {
		// 폼 만들기
			var fObj = document.createElement('form');
			fObj.method = 'get';
			fObj.action = 'https://www.inven.co.kr/board/powerbbs.php';
			fObj.style.display = 'none';
			if (target) {
				fObj.target = target;
			}
		// comeidx 만들기
			var cInput = document.createElement('input');
			cInput.name = "come_idx";
			cInput.value = comeidx;
			fObj.appendChild(cInput);
		// 검색 종류 만들기
			var nInput = document.createElement('input');
			nInput.name = "name";
			nInput.value = name;
			fObj.appendChild(nInput);
		// 검색 내용 만들기
			var sInput = document.createElement('input');
			sInput.name = "keyword";
			sInput.value = keyword;
			fObj.appendChild(sInput);
		// iskin이 있으면 정의
			if (iskin) {
				var iInput = document.createElement('input');
				iInput.name = "iskin";
				iInput.value = iskin;
				fObj.appendChild(iInput);
			}
		// 폼 붙이기
			document.body.appendChild(fObj);
		// 폼 submit
			fObj.submit();
		// 폼
			document.body.removeChild(fObj);
	}

/* 날짜 유효성 체크 */
	INVEN.checkdate = function(year, month, day) {
		year = typeof(year) == 'number' ? year : (typeof(year) == 'string' ? (parseInt(year, 10) || 0) : 0);
		if (year >= 1 && year <= 32767) {
			month = typeof(month) == 'number' ? month : (typeof(month) == 'string' ? (parseInt(month, 10) || 0) : 0);
			if (month >= 1 && month <= 12) {
				day = typeof(day) == 'number' ? day : (typeof(day) == 'string' ? (parseInt(day, 10) || 0) : 0);
				if (day >= 1 && day <= (new Date(new Date(year, month, 1) - 86400000).getDate())) {
					return true;
				}
			}
		}
		return false;
	}

/* IMAGE UPLOAD URL */
	INVEN.getImageUploadUrl = function(imgPath) {
		if (typeof(imgPath) == 'string' && imgPath.length > 0) {
			var img = imgPath.replace(/^\s*https?:\/\/(upload[0-9]*|kstatic|optimal)\.inven\.co\.kr\/upload\//, '').replace(/^\s+/, '').replace(/\s+$/, '');
			if (img.length > 0 && !(/^https?:\/\//).test(img)) {
                var p = (/^\/?(2[0-9]{3})\/([0-9]{2})\/([0-9]{2})\/.+/).exec(img);
                img = img.replace(/^[\/]/, '');
                var imgDomain = 'upload';
                if (p && INVEN.checkdate(p[1], p[2], p[3])) {
                    var imgDate = p[1] + p[2] + p[3];
                    if (imgDate >= '20200312') {
                        imgDomain = 'upload3';
                    } else if (imgDate >= '20150101') {
                        imgDomain = 'upload2';
                    }
                }
                return 'https://' + imgDomain + '.inven.co.kr/upload/' + img;
			}
			return imgPath;
		}
		return '';
	};

/* ARRAY INPUT */
	function arrayInput(array, keys, value) {
		var keys = keys.constructor == Array ? keys : keys.split(':');
		if (keys.length > 1) {
			var key = keys.shift();
			array[key] = array[key] || [];
			array[key] = arrayInput(array[key], keys, value);
		} else if (keys.length == 1) {
			var key = keys.shift();
			array[key] = value;
		}
		return array;
	}

/* IE9 *Body Resize */
	function ie9ResizeBodyWidth(site) {
		var isie9=(/msie 9/i).test(navigator.userAgent);
		if (isie9) {
			var bodyObj = document.body;
			var subBodyObj = getObj(site+'Body');
			if (bodyObj && subBodyObj) {
				if ((bodyObj.offsetWidth%2) == (subBodyObj.offsetWidth%2)) {
					subBodyObj.style.marginRight = subBodyObj.style.marginRight+1;
				}
			}
		}
	}

/* Copy Url to ClibBoard */
	function resultClipBoard(rVar, cliptext) {
		if (rVar) {
			alert("클립보드에 복사되었습니다.");
		} else {
			alert("복사 실패하였습니다.(아래내용) \n\n"+cliptext);
		}
	}

	let leftMenuDebounce = false;
	async function showResponsiveLeftMenu(spinner = $.noop, param = '') {
		if (!$('#sideMenuWrap').length && !leftMenuDebounce) {
			leftMenuDebounce = true;
			param = param ? `&param=${encodeURIComponent(param)}` : '';
			const handle = spinner();
			let html = await fetch(`https://www.inven.co.kr/sitebuilder/common/?mode=leftmenu${param}&referer=${encodeURIComponent(location.href)}`, {
				credentials: 'include',
				mode: 'cors',
			}).then(response => response.text());
			const styles = [], scripts = [], head = document.getElementsByTagName('head')[0];
			html = html.replaceAll(/<link[^>]+href="([^"]+)"[^>]*>/g, (_m, p) => (styles.push(p), ''));
			html = html.replaceAll(/<script[^>]+src="([^"]+)"[^>]*><\/script>/g, (_m, p) => (scripts.push(p), ''));
			for (const style of styles) {
				const historyStyle = document.createElement('link');
				historyStyle.setAttribute('rel', 'stylesheet');
				historyStyle.setAttribute('href', style);
				head.prepend(historyStyle);
			}
			const promises = [];
			for (const script of scripts) {
				const historyStore = document.createElement('script');
				historyStore.setAttribute('type', 'text/javascript');
				historyStore.setAttribute('src', script);
				const p = new Promise((resolve) => historyStore.onload = historyStore.onreadystatechange = resolve);
				p.then(() => historyStore.onload = historyStore.onreadystatechange = null);
				promises.push(p);
				head.appendChild(historyStore);
			}
			if (promises.length) {
				await Promise.all(promises);
			}
			$(document.body).append(html);
			await new Promise(resolve => setTimeout(resolve, 50)).then(() => {
				leftMenuDebounce = false;
			});
			typeof handle == 'function' && handle();
		}
		!leftMenuDebounce && MOBILE.sideMenu();
	}

	async function showResponsiveQuicklink(spinner = $.noop) {
		if ($(document.body).hasClass('mobile') || $(window).width() < 1110) {
			location.href = 'https://m.inven.co.kr/common/sitemap.php';
		} else {
			// if (!$('#comHeadQuickLink').length) {
			// 	const handle = spinner();
			// 	const html = await fetch('https://www.inven.co.kr/sitebuilder/common/?mode=quicklink', {
			// 		credentials: 'include',
			// 		mode: 'cors',
			// 	}).then(response => response.text());
			// 	$(document.body).append(html);
			// 	await new Promise(resolve => setTimeout(resolve, 50));
			// 	typeof handle == 'function' && handle();
			// }
			// INVEN.quickLink.openQuickLinkNew(document.body, 'w-593', 's+2');
			INVEN.quickLink.toggle();
		}
	}