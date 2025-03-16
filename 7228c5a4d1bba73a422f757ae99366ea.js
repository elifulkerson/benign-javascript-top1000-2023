try {
	var networkAds = networkAds || {};
	
	networkAds.async8353128 = {
		/* Static Definitions - req */
		divWidth: (document.width ? document.width : window.innerWidth),
		divHeight: (document.height ? document.height : window.innerHeight),
		divReferer: '',
		divReqCount: 0,
		passbackFlag: 0,
		bData: '',
		vignetteFlag: 0,
		vignetteElement: null,
		vignetteHref: '',
		vignetteTarget: '',
		lazyLoadVignetteCallback: null,
		passShowAds: {},
		outImpLink: '',
		divResCount: 0,
		divAds: [],
		divNativeAds: [],
		divRtbAds: [],
		divAllAds: [],
		divTimeout: '',
		divDone: 0,
		divDebug: 0,
		divAdShowBlocked: 0,
		divcodeList: ['0', '0', '0', '0'],
		hBid: 0,
		uuid: '',
		ouuid: '',
		cookieMatch: 0,
		
		filteredDomains: [],
		
		getNow: function() {
			return parseInt(new Date().getTime() / 1000);
		},
		openInNewTab: function(url) {
		  var win = window.top.open(url, '_blank');
		  win.focus();
		},
		goVignetteHref: function(){
			if(this.lazyLoadVignetteCallback!=null){
				var elems = window.top.document.getElementsByClassName("networkAdbannersinterstitial8353128");
				for(var i in elems){
					if(elems[i]!=0 && typeof elems[i] != 'function')
						elems[i].remove();
				}
				this.lazyLoadVignetteCallback();
			}
			else if(this.checkIframe()) {
				if(this.vignetteTarget=='_blank'){
					this.openInNewTab(this.vignetteHref);
					var elems = window.top.document.getElementsByClassName("networkAdbannersinterstitial8353128");
					for(var i in elems){
						if(elems[i]!=0 && typeof elems[i] != 'function')
							elems[i].remove();
					}
				}
				else
					window.top.document.location=this.vignetteHref;
			}
			else{
				if(this.vignetteTarget=='_blank'){
					this.openInNewTab(this.vignetteHref);
					var elems = window.document.getElementsByClassName("networkAdbannersinterstitial8353128");
					for(var i in elems){
						if(elems[i]!=0 && typeof elems[i] != 'function')
							elems[i].remove();
					}
				}
				else
					window.document.location=this.vignetteHref;
			}
		},
		clickVignetteHref: function(){
			if(this.vignetteElement!=null && this.vignetteElement.srcElement.tagName=='A')
				this.vignetteElement.srcElement.click();
			else if(this.vignetteElement!=null && this.vignetteElement.srcElement.parentElement.tagName=='A')
				this.vignetteElement.srcElement.parentElement.click();
			else if(this.checkIframe()) {
				var els = window.top.document.querySelectorAll("a[href='"+this.vignetteHref+"']");
				if(els[0]!=undefined)
					els[0].click();
				else{
					var ar=this.vignetteHref.split("//");
					var a=ar[1].split("/");
					a[0]="";
					var hreflink=a.join("/");
					var els = window.top.document.querySelectorAll("a[href='"+hreflink+"']");
					if(els[0]!=undefined)
						els[0].click();
					else{
						els = window.top.document.querySelectorAll("a[href='"+this.vignetteHref+"']");
						if(els[0]!=undefined)
							els[0].click();
						else{
							els = window.top.document.querySelectorAll("a");
							var f=false;
							for(var i in els){
								if(els[i].href==this.vignetteHref){
									els[i].click();
									f=true;
									return;
								}
							}
							if(f==false)
								console.log("href not found 92");
						}
					}
						
				}
			}
			else{
				var els = document.querySelectorAll("a[href='"+this.vignetteHref+"']");
				if(els[0]!=undefined)
					els[0].click();
				else{
					var ar=this.vignetteHref.split("//");
					var a=ar[1].split("/");
					a[0]="";
					var hreflink=a.join("/");
					var els = window.top.document.querySelectorAll("a[href='"+hreflink+"']");
					if(els[0]!=undefined)
						els[0].click();
					else{
						els = window.top.document.querySelectorAll("a[href='"+this.vignetteHref+"']");
						if(els[0]!=undefined)
							els[0].click();
						else{
							els = window.top.document.querySelectorAll("a");
							var f=false;
							for(var i in els){
								if(els[i].href==this.vignetteHref){
									els[i].click();
									f=true;
									return;
								}
							}
							if(f==false)
								console.log("href not found 92");
						}
					}
				}
			}
		},
		outImp: function(code) {
			var t = Boolean(navigator.appVersion.match(/msie/i)) ? new Image : document.createElement('img');
			t.width = 1; 
			t.height = 1; 
			t.style.display = 'none'; 
			t.src = code;
		},
		
		outScript: function(code) {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.src = code; ga.async = true;
			document.body.appendChild(ga);
		},
		
		inScript: function(code) {
			var ga = document.createElement('script'); ga.type = 'text/javascript';
			
			try {
				ga.appendChild(document.createTextNode(code));
				document.body.appendChild(ga);
			} 
			catch(e) {
				ga.text = code;
				document.body.appendChild(ga);
			}
		},
		
		getUrl : function() {
			var url = window.location.href;
			var canonicalLink = null;
			var metaElements = document.getElementsByTagName('meta');
			for (var i = 0; i < metaElements.length && !canonicalLink; i++) {
				if (metaElements[i].getAttribute("property") == "og:url") {
					canonicalLink = metaElements[i].content;
				}
			}
			if(!canonicalLink){
				var canonicalLinkContainer = document.querySelector("link[rel='canonical']");
				if (canonicalLinkContainer) {
					canonicalLink = canonicalLinkContainer.href;
				}
			}
			url = canonicalLink || url;
			return encodeURI(url).toString();
		},
		
		sendRequestToMyNativeAds: function(){
			var jslink = 'https://papi.mynativeads.com/pub2/web/external.js?';
			var zt = '';
			var wk = '';
			var wn = '';
			
			if('2' == '2'){
				zt = 'desktop_classic';
				wk = '2bMfDlY9BjSYcIpXNuGYHM';
				wn = '25418';
			}
			else if('2' == '1'){
				zt = 'mobile';
				wk = 'SFh0D2JjnUlFwYuillLYFH';
				wn = '101671';
			}
			
			jslink += "callback=networkAds.async8353128.nativead_8353128&";
			jslink += "widget_key=" + wk + "&";
			jslink += "widget_num=" + wn + "&";
			jslink += "widget_type=" + zt + "&";
			jslink += "pageId=" + Math.random().toString(36).substr(2) + "&";
			jslink += "url="+ this.getUrl() +"&";
			jslink += "referrer="+ encodeURIComponent(document.referrer) +"&";
			jslink += "list_size=6&";
			jslink += "external_size=6&";
			jslink += "_="+ new Date().getTime();
			
			this.headScript(jslink);
			
		},
		
		sendRequestToDSP: function(dsplink) {
			var pos = "0";
			if( "104" == "1" || "104" == "2" || "104" == "100" || "104" == "101" || "104" == "102" || "104" == "103" ){
				pos = "1";
			}else{
				pos = this.getPositionOfAd();
			}
			
			var instl = "0";
			if( "104" == "1" || "104" == "2" || "104" == "100" || "104" == "101" || "104" == "102" || "104" == "103" ){
				instl = "1";
			}
			
			var topframe = "0";
			if( window.top == window ){
				topframe = "1";
			}
			
			var requestObject = {
				"id": this.uuid,
				"at": 2,
				"tmax": 400,
				"imp": [{
					"id": "1",
					"tagid": '571',
					"secure": '0',
					"banner": {
						"pos": pos,
						"battr": [
							1,
							2,
							3,
							4,
							5,
							6,
							7,
							8,
							9,
							10,
							11,
							12,
							13,
							14,
							15,
							16
						],
						"topframe": topframe,
						"w": "N;",
						"h": "N;",
						"ext": {
							"ctr": "0.01",
							"viewability": "30"
						}
					},
					"mincpm": '1.5',
				  	"instl": instl
				}],
			  	"site": {
					"id": "289",
					"domain": "eksisozluk1923.com",
					"name": "eksisozluk1923.com",
					"cat": [
				  		"IAB12"
					],
					"page": "undefined",
					"publisher": {
				  		"id": "267"
					}
			  	},
			  	"device": {
					"ip": "70.163.140.175",
					"language": navigator.language || navigator.userLanguage,
					"js": 1,
					"geo": { 
				  		"country": "US",
				  		"region": "null",
				  		"zip": "0",
				  		"utcoffset": "0"
					},
					"devicetype": "2",
					"ua": "python-requests/2.22.0",
					"connectiontype": "1",
					"ext": {

					}
			  	},
			  	"user": {
					"id": "746e3800-7165-11ee-ab9f-450f4f22bb45",
					"buyeruid": "",
					"ext": {
						
					}
			  	}
			};
			
			this.httpRequest(dsplink, JSON.stringify(requestObject), function(data){
				try {
					res = JSON.parse(data);
				}
				catch(e) {
					res = eval('(' + data + ')');
				}
				
				if(res && res.seatbid && res.seatbid[0] && res.seatbid[0].bid && res.seatbid[0].bid[0] && res.seatbid[0].bid[0].id) {
					res.src = 'rtb';
					if(res.seatbid[0].bid[0].price >= parseFloat('1.5')) {
						networkAds.async8353128.divRtbAds.push(res);
					}
				}
			});
		},
		
		googleScript: function(clientid, slotid, width, height) {
			var ghttp = 'http';
			if('0' == 1) ghttp = 'https';
			
			document.getElementById('div_571').innerHTML = '<ins class="adsbygoogle gadsins8353128" style="background-color:#ffffff !important;display:inline-block;width:' + width + 'px;height:' + height + 'px" data-alternate-ad-url="' + ghttp + '://app.networkad.net/gpassback?zid=571" data-ad-client="ca-pub-' + clientid + '" data-ad-slot="' + slotid + '"></ins>';
			this.outScript('//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
			this.inScript('(adsbygoogle = window.adsbygoogle || []).push({});');
		},
		
		getPositionOfAd: function() {
			try {
				if( window.top == window ){
					var divT = document.getElementById("div_571").offsetTop;
					var divL = document.getElementById("div_571").offsetLeft;
					var windowH = window.innerHeight;
					var windowW = window.innerWidth;
				}
				else{
					var divT = document.getElementById("div_571").offsetTop + window.frameElement.offsetTop;
					var divL = document.getElementById("div_571").offsetLeft + window.frameElement.offsetLeft;
					var windowH = window.top.innerHeight;
					var windowW = window.top.innerWidth;
				}
				
				if(divT<windowH && divL<windowW)
					return '1';
				else
					return '3';
			}
			catch(e) {
				return '0';
			}
			
		},
		
		addNews: function(data) {
			var newsString = '{newsInfo}';
			if(newsString != '{newsInfo}') {
				try {
					var ad = JSON.parse(newsString);
				}
				catch(e) {
					var ad = eval('(' + newsString + ')');
				}
				ad = ad.slice(0,3);
				for(var i in ad){
					data.push(ad[i]);
				}
				data = data.reverse();
				data = data.slice(0,6);
			}
			return data;
		},
		
		topOutScript: function(code) {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.src = code; ga.async = true;
			window.top.document.body.appendChild(ga);
		},
		
		topInScript: function(code) {
			var ga = document.createElement('script'); ga.type = 'text/javascript';
			
			try {
				ga.appendChild(document.createTextNode(code));
				window.top.document.body.appendChild(ga);
			} 
			catch(e) {
				ga.text = code;
				window.top.document.body.appendChild(ga);
			}
		},
		
		headScript: function(code) {
			var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.src = code; ga.async = true;
			(document.head || document.getElementsByTagName('head')[0]).appendChild(ga);
		},
		
		inArray: function(a, obj) {
			if(!a || !obj)
				return false;
			
			if(typeof a == 'array' || typeof a == 'object'){
				var cnt=a.length;
				while(cnt--){
					var i = obj.length;
					while(i--) {
						if(obj[i] === a[cnt])
						return true;
					}
				}
			}
			else {
				var i = obj.length;
				while(i--) {
					if(obj[i] === a)
						return true;
				}
			}
			return false;
		},

		httpRequest: function(url, message, callback) {
			if(window.XDomainRequest) {
				var xmlhttp = new window.XDomainRequest();
			}
			else {
				if(window.XMLHttpRequest) {
					var xmlhttp = new XMLHttpRequest;
				}
				else {
					var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				}
				
				xmlhttp.onreadystatechange = function() {
					if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
						if(typeof callback !== "undefined")
							callback(xmlhttp.responseText); 
					}
				};
			}
			
			xmlhttp.open("POST", url);
			xmlhttp.send(message);
		},
		
		setCookie: function(cname, cvalue, exseconds) {
			var d = new Date();
			d.setTime(d.getTime() + (exseconds * 1000));
			var expires = "expires="+d.toUTCString();
			document.cookie = cname + "=" + cvalue.substr(0, 300) + ";" + expires + ";path=/";
		},
		
		getCookie: function(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		},
		
		updateHbidCookie: function(data, value, code) {
			var cid = '571';
			
			if(cid == '314' && value == -2) {
				return '';
			}

			// 313, 320, 321, 319 mobil
			// 317, 314, 318

			if('2' == '1') {
				cid = '667'; // mobil
			}
			else {
				cid = '571'; // web
			}
			
			var t1 = this.getCookie('lastnwcrtid_' + cid);
			var t2 = {};
			if(t1 != '') {
				try {
					t2 = JSON.parse(t1);
				}
				catch(e) {
					t2 = eval('(' + t1 + ')');
				}
			}
			
			if(value == 0)
				t2['t' + data] = this.getNow();
			else if(value == -1)
				delete t2['t' + data];
			
			var objectCount = 0;
			
			for(var k in t2) {
				objectCount++;
			}
			
			if(objectCount > 5) {
				for(var k in t2) {
					delete t2[k];
					break;
				}
			}
			
			var lastIndex = '';
			
			for(var k in t2) {
				if(t2[k] < this.getNow() - 20 * 60) {
					delete t2[k];
				}
				else {
					lastIndex = k.substr(1);
					// yeni modelde gerek yok
					// if(value == -2) delete t2[k];
				}
			}
			
			this.setCookie('lastnwcrtid_' + cid, JSON.stringify(t2), 20 * 60);
			
			return lastIndex;
		},
		
		// safari frequency cookie
		updateFrequencyCookie: function(value) {
			var t1 = this.getCookie('nw_freq');
			var t2 = {};
			if(t1 != '') {
				try {
					t2 = JSON.parse(t1);
				}
				catch(e) {
					t2 = eval('(' + t1 + ')');
				}
			}
			
			if(!t2.zonex)
				t2.zonex = {};
			
			if(!t2.zonexdate)
				t2.zonexdate = {};
			
			var freq = '{zonefrequency}';
			if(freq.search(":") != -1) {
				var tmp = freq.split(":");
				if(parseInt(t2.zonex['z571']) >= parseInt(tmp[1])) {
					if(parseInt(t2.zonexdate['z571']) > this.getNow() - (tmp[0] * 60 * 60)) {															
						if(value == -1) {
							return 0;
						}
					}
					else {
						t2.zonexdate['z571'] = this.getNow();
						t2.zonex['z571'] = 0;
					}
				}
			}
			
			if(value == 0) {
				if(!t2.zonex['z571']) t2.zonex['z571'] = 0;
				if(!t2.zonexdate['z571']) t2.zonexdate['z571'] = this.getNow();
				
				t2.zonex['z571']++;
				this.setCookie('nw_freq', JSON.stringify(t2), 48 * 60 * 60);
			}
			else if(value == -1) {
				return 1;
			}
		},
		
		guid: function() {
			function s4() {
				return Math.floor((1 + Math.random()) * 0x10000)
					.toString(16)
					.substring(1);
			}
			return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
		},
		
		dynamicScript: function(code, functionPrefix) {
			if(code.substr(0,1) == 'n')
				this.headScript('//app.networkad.net/netapilook?affid=' + code.substr(1) + '&zid=571&utime=' + Math.random() + '&callback=networkAds.async8353128.' + functionPrefix + code);
			else 
				this.headScript('//cas.criteo.com/delivery/0.1/napi.jsonp?utime=' + Math.random() + '&zoneid=' + code + '&callback=networkAds.async8353128.' + functionPrefix + code);
		},

		dynamicScriptNewModel: function(code, functionPrefix) {
			if(code.substr(0,1) == 'n')
				this.headScript('//app.networkad.net/netapilook?affid=' + code.substr(1) + '&zid=571&utime=' + Math.random() + '&callback=networkAds.async8353128.' + functionPrefix + code);
			else {
				var scriptCode = 'function parseCriteoBids8353128(json) {';
						scriptCode += 'var runBidOnce = 0;';
						scriptCode += 'if(json.length == 0) {';
						scriptCode += 'window.top.networkAds.async8353128.doneScript();';
						scriptCode += '} else {';
							scriptCode += 'for(var i in json) {';
								// scriptCode += 'console.log(json[i]);';
								scriptCode += 'json[i].nativePayload.response_status = 0;json[i].nativePayload.zoneid = json[i].zoneId;json[i].nativePayload.runcode = json[i].zoneId;json[i].nativePayload.sprice = json[i].cpm;';
								scriptCode += 'if("1" == "1" && runBidOnce == 0) {';
									scriptCode += 'runBidOnce = 1;';
									scriptCode += 'window.top.networkAds.async8353128.actionScript(json[i].nativePayload, json[i].zoneId);';
								scriptCode += '}';
							scriptCode += '}';
							scriptCode += '}';
					scriptCode += '}';
					
				this.topInScript('window.Criteo = window.Criteo || {}; window.Criteo.events = window.Criteo.events || [];');
				this.topInScript('function tmpRender8353128(json) {}');
				this.topInScript(scriptCode);
				this.topInScript('Criteo.events.push(function() {var adUnit = {"placements": [{"slotid": "uni4", "zoneid": 1225136, "nativeCallback": tmpRender8353128}]}; Criteo.RequestBids(adUnit, parseCriteoBids8353128, 1500);})');	
				this.topOutScript('//static.criteo.net/js/ld/publishertag.js');
			}
		},
		
		setVignetteHref: function(gohref){
			this.vignetteHref=gohref;
		},
		
		lazyLoadVignette: function(callback) {
			if(typeof window.top.networkAds != 'undefined')
				window.top.networkAds.async8353128 = networkAds.async8353128;
			else
				window.top.networkAds=networkAds;
			
			if(window.top.networkAds.async8353128.lazyLoadVignetteCallback == null){
				window.top.networkAds.async8353128.topCreateDiv(window.top.networkAds.async8353128.bData);
				window.top.networkAds.async8353128.outImp(window.top.networkAds.async8353128.outImpLink);
				if(window.top.networkAds.async8353128.passbackFlag==1)
					window.top.networkAds.async8353128.showPassAdPrepare();
			}
			window.top.networkAds.async8353128.lazyLoadVignetteCallback=callback;
		},

		topCreateDiv: function(data) {	
			this.bData = data;
			if(this.vignetteFlag == 0 && (104 == 100 || 104 == 101)){
				if(window.top.networkAdslazyloadVignette == undefined){
					window.top.networkAdslazyloadVignette = this.lazyLoadVignette;
				}

				this.vignetteFlag = 1;
				
				if(typeof window.top.networkAds != 'undefined') {
					window.top.networkAds.async8353128 = networkAds.async8353128;
				}
				else {
					window.top.networkAds = networkAds;
				}

				var elements = window.top.document.getElementsByTagName('a');
				for(var i in elements) {
					if(typeof elements[i].href!='undefined'){
						var outlinks=elements[i].href.indexOf("doubleclick.net");
						outlinks = outlinks + elements[i].href.indexOf("www.googleadservices.com");
						
						if(elements[i].href.substring(0,4) == 'http' && outlinks < -1 && elements[i].href.indexOf("#") == -1){
							elements[i].onclick=function(e){
								if(window.top.networkAds.async8353128.vignetteHref == ""){
									e.preventDefault();
									window.top.networkAds.async8353128.topCreateDiv(data);
									window.top.networkAds.async8353128.outImp(window.top.networkAds.async8353128.outImpLink);
									
									b = data.match(/<script.+?src='.+?'.+?async.+?<\/script>/g);
									for(var i in b) {
										c = data.match(/src='.+?'/g);
										for(var j in c) {
											if (typeof c[j] === 'string' || c[j] instanceof String) {
												window.top.networkAds.async8353128.topOutScript(c[j].replace('src=','').replace(/'/g, ''));
											}
										}
									}

									b = data.match(/<script type='text\/javascript'>.+?<\/script>/g);
									for(var i in b) {
										if(typeof b[i] === 'string' || b[i] instanceof String) {
											window.top.networkAds.async8353128.topInScript(b[i].replace('<script type=\'text\/javascript\'>', '').replace('<\/script>', ''));
										}
									}

									if(window.top.networkAds.async8353128.passbackFlag==1)
										window.top.networkAds.async8353128.showPassAdPrepare();
									if(typeof e.srcElement != 'undefined' && typeof e.srcElement.href !='undefined'){
										window.top.networkAds.async8353128.vignetteHref=e.srcElement.href;
										window.top.networkAds.async8353128.vignetteTarget=e.srcElement.target;
									}
									else if(typeof e.target !='undefined' && typeof e.target.href !='undefined'){
										window.top.networkAds.async8353128.vignetteHref=e.target.href;
										window.top.networkAds.async8353128.vignetteTarget=e.target.target;
									}
									else if(typeof e.target !='undefined' && typeof e.target.parentElement !='undefined' && typeof e.target.parentElement.href !='undefined'){
										window.top.networkAds.async8353128.vignetteHref=e.target.parentElement.href;
										window.top.networkAds.async8353128.vignetteTarget=e.target.parentElement.target;
									}
									else if(typeof e.path !='undefined'){
										var flag=false;
										for(var i in e.path){
											if(!flag && e.path[i].href != undefined){
												window.top.networkAds.async8353128.vignetteHref=e.path[i].href;
												window.top.networkAds.async8353128.vignetteTarget=e.path[i].target;
												flag=true;
											}
										}
										flag=null;
										delete flag;
									}
								}
								window.top.networkAds.async8353128.vignetteElement=e;
							};
						}
					}
				}
			}
			else{
				try {
					if(window.top.document.getElementById('div_571')) {
						window.top.document.getElementById('div_571').innerHTML = data;
						
						b = data.match(/<script type="text\/javascript">.+?<\/script>/g);
						for(var i in b) {
							if(typeof b[i] === 'string')
								this.topInScript(b[i].replace('<script type="text\/javascript">', '').replace('<\/script>', ''));
						}
					}
					else {
						this.topCreateNewDiv(data);
					}
				}
				catch(e) {
					this.topCreateNewDiv(data);
				}
				
				// icon hide
				if(571 == 435) {
					document.getElementById('netlogo8353128').style.display = 'none';
				}
				
				if(571 == 498) {
					document.getElementById('networkAdbanners8353128').style.width = screen.width + "px";
					document.getElementById('networkAdbanners8353128').style.height = screen.height + "px";
				}
			}
		},
		
		topCreateNewDiv: function(data) {
			if((104==100 || 104==101) && this.passbackFlag==1){
				// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4020&rnd=8353128', '');
			}
			var div = document.createElement("div");
			div.innerHTML = data; 
			if((104==100 || 104==101) && 289==19){
				div.style.position="fixed";
				div.style.zIndex=9999999;
			}
			if(571 == 316 || 571 == 179 || 571 == 376 || 104 == 100 || 104 == 101 || 104 == 102 || 104 == 103 || 104 == 1 || 104 == 2) {
				window.top.document.body.appendChild(div);
			}
			else {
				window.top.document.getElementById(window.frameElement.parentElement.id).appendChild(div);
			}
			
			b = data.match(/<script type="text\/javascript">.+?<\/script>/g);
			for(var i in b) {
				if(typeof b[i] === 'string')
					this.topInScript(b[i].replace('<script type="text\/javascript">', '').replace('<\/script>', ''));
			}
		},
		
		createDiv: function(data) {
			if(this.vignetteFlag==0 && (104 == 100 || 104 == 101)){
				if(window.top.networkAdslazyloadVignette==undefined){
					window.top.networkAdslazyloadVignette=this.lazyLoadVignette;
				}
				this.vignetteFlag=1;
				var elements=document.getElementsByTagName('a');
				for(var i in elements){
					if(typeof elements[i].href!='undefined'){
						var outlinks=elements[i].href.indexOf("doubleclick.net");
						outlinks = outlinks + elements[i].href.indexOf("www.googleadservices.com");
						
						if(elements[i].href.substring(0,4) == 'http' && outlinks < -1 && elements[i].href.indexOf("#") == -1){
							elements[i].onclick=function(e){
								if(networkAds.async8353128.vignetteHref==''){
									e.preventDefault();
									networkAds.async8353128.createDiv(data);
									networkAds.async8353128.outImp(networkAds.async8353128.outImpLink);

									b = data.match(/<script.+?src='.+?'.+?async.+?<\/script>/g);
									for(var i in b) {
										c = data.match(/src='.+?'/g);
										for(var j in c) {
											if (typeof c[j] === 'string' || c[j] instanceof String) {
												window.top.networkAds.async8353128.outScript(c[j].replace('src=','').replace(/'/g, ''));
											}
										}
									}

									b = data.match(/<script type='text\/javascript'>.+?<\/script>/g);
									for(var i in b) {
										if(typeof b[i] === 'string' || b[i] instanceof String) {
											window.top.networkAds.async8353128.inScript(b[i].replace('<script type=\'text\/javascript\'>', '').replace('<\/script>', ''));
										}
									}

									if(networkAds.async8353128.passbackFlag==1)
										networkAds.async8353128.showPassAdPrepare();
									if(typeof e.srcElement != 'undefined' && typeof e.srcElement.href !='undefined'){
										networkAds.async8353128.vignetteHref=e.srcElement.href;
										networkAds.async8353128.vignetteTarget=e.srcElement.target;
									}
									else if(typeof e.target !='undefined' && typeof e.target.href !='undefined'){
										networkAds.async8353128.vignetteHref=e.target.href;
										networkAds.async8353128.vignetteTarget=e.target.target;
									}
									else if(typeof e.target !='undefined' && typeof e.target.parentElement !='undefined' && typeof e.target.parentElement.href !='undefined'){
										networkAds.async8353128.vignetteHref=e.target.parentElement.href;
										networkAds.async8353128.vignetteTarget=e.target.parentElement.target;
									}
									else if(typeof e.path !='undefined'){
										var flag=false;
										for(var i in e.path){
											if(!flag && e.path[i].href != undefined){
												networkAds.async8353128.vignetteHref=e.path[i].href;
												networkAds.async8353128.vignetteTarget=e.path[i].target;
												flag=true;
											}
										}
										flag=null;
										delete flag;
									}
								}
								networkAds.async8353128.vignetteElement=e;
							};
						}
					}
				}
			}
			else{
				document.getElementById('div_571').innerHTML = data;
				if((104==100 || 104==101) && 289==19){
					document.getElementById('div_571').style.position="fixed";
					document.getElementById('div_571').style.zIndex=9999999;
				}
				if((104==100 || 104==101) && this.passbackFlag==1){
					// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4020&rnd=8353128', '');
				}
				b = data.match(/<script type="text\/javascript">.+?<\/script>/g);
				for(var i in b) {
					if(typeof b[i] === 'string')
						this.inScript(b[i].replace('<script type="text\/javascript">', '').replace('<\/script>', ''));
				}
				
				if(571 == 435) {
					document.getElementById('netlogo8353128').style.display = 'none';
				}
				
				if(571 == 498) {
					document.getElementById('networkAdbanners8353128').style.width = screen.width + "px";
					document.getElementById('networkAdbanners8353128').style.height = screen.height + "px";
				}
			}
		},
		
		shuffleArray: function(array) {
			for (var i = array.length - 1; i > 0; i--) {
				var j = Math.floor(Math.random() * (i + 1));
				var temp = array[i];
				array[i] = array[j];
				array[j] = temp;
			}
			return array;
		},
		
		checkIframe: function() {
			
			if(this.divWidth == 1 && this.divHeight == 1) 
				return 1;
			
			if(('104' == '1' || '104' == '2' || '104' == '100' || '104' == '101' || '104' == '102' || '104' == '103') && self !== top) 
				return 1;
			
			if('571' == '533' || '571' == '664' || '571' == '662' || '571' == '283' || '571' == '282')
				return 1;
			
			return 0;
		},
		
		init: function() {
			try {
				if(typeof window.top.networkAds != 'undefined')
					window.top.networkAds.async8353128 = networkAds.async8353128;
				else
					window.top.networkAds = networkAds;
			}
			catch(e) {
				//
			}
			
			this.uuid = this.guid();
			
			this.divAdShowBlocked = '0';
			
			this.hBid = '0';
			
			
			
			if(('571' == '313' || '571' == '314')) {
				if('specialimpcode' != '') {
					this.outImp('');
				}
			}

			// size is problem
			if('571' == '571' && top.window.innerWidth > 1088 && top.window.innerWidth < 1267) {
				if('0' == '1') {
					console.log("networkad, size problem", top.window.innerWidth);
				}
				return 0;
			}
			
			/*
			closed because of high load
			setTimeout(function() {
				networkAds.async8353128.outImp('//app.networkad.net/ixu?type=img');
			}, 1000);
			*/

			if('1' == '1') {
				if(571 == 314 || '267' == '321') {
					// this.dynamicScript('441928', 'cto_x_callback_');
				}

				/*
				if(571 == 287 || 571 == 109 || 571 == 313 || 571 == 314) {
					setTimeout(function() {
						networkAds.async8353128.outImp('//app.networkad.net/netapipixelmatch?inventory=571&type=img');
					}, 1000);
				}
				*/
			}
			
			var urlSite = this.getUrl().toString();
			
			if("289" == "289" && (
				urlSite.search('gazze') != -1 || 
				urlSite.search('superlig-izlemenin-senelik-960-tl-olmasi--5424398') != -1 || 
				urlSite.search('tff-ve-digiturke-karsi-lig-tv-iptal-kampanyasi--3359626') != -1 || 
				urlSite.search('digiturk-aboneligini-iptal-ettirmek--1969703') != -1 || 
				urlSite.search('12-mayis-2016-digiturk-rezaleti--5107311') != -1 || 
				urlSite.search('digiturk-aboneligini-iptal-ettirmek--1969703') != -1 || 
				urlSite.search('devletten-ve-yasalardan-korkmayan-sirketler--5027911') != -1 || 
				urlSite.search('sikayetvar--1093059') != -1 || 
				urlSite.search('rezalet--72091') != -1 || 
				urlSite.search('digiturkun-bir-insani-cok-uzmesi--3973258') != -1 || 
				urlSite.search('serefsizlik-nedir-nasil-yapilir--1965594') != -1 || 
				urlSite.search('dolandiricilik-hikayeleri--1441382') != -1
				)) {
				// no ad
			}
			else if('{jsbasedfrequency}' == 1 && this.updateFrequencyCookie(-1) == 0) {
				// javascript based frequency
				
				if(this.hBid != '1')
					this.passback();
			}
			else {
				if((this.hBid == '1' || '571' == '571' || '571' == '667') && '1' == '1' && "289" == "289") {
					var lastCookie = this.updateHbidCookie(this.uuid, -2, 0);
					if(lastCookie != '') {				
						// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4015&rnd=8353128', '');
						
						this.ouuid = lastCookie;
						
						if(this.hBid == '1') {
							this.headerBidSuccess();
						}
						
						this.httpRequest('//app.networkad.net/netapigetcrst?crst=' + lastCookie, '', function(data) {
							networkAds.async8353128.cookieMatch = 1;

							try {
								networkAds.async8353128.divAds.push(JSON.parse(data));
								networkAds.async8353128.doneScript();
							}
							catch(e) {
								var tmp1 = eval('(' + data + ')');
								networkAds.async8353128.divAds.push(tmp1);
								networkAds.async8353128.doneScript();
							}
						});
					}
					else if('571' != '317' && '571' != '318' && '571' != '319' && '571' != '320' && '571' != '321' && Math.random() < 0.15) {
						// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4041&rnd=8353128', '');

						this.headerBidSuccess();
						networkAds.async8353128.doneScript();
					}
				}
				
				if('746e3800-7165-11ee-ab9f-450f4f22bb45' != '' && '571' != '189' && (104 == 2 || 104 == 100 || 104 == 101 || 104 == 102 || 104 == 103 || 104 == 1)) {
					// this.dynamicScript('787581', 'cto_x_callback_');
				}

				try {
					if(this.checkIframe()) {
						this.divReferer = window.top.document.referrer.split('/')[2];
					}
					else {
						this.divReferer = document.referrer.split('/')[2];
					}
					
					if(this.divReferer == undefined)
						this.divReferer = '';
				}
				catch(e) {
					this.divReferer = '';
				}
				
				if(("289" == "436" && '2' == '2') || '571' == '544' || '571' == '545') {
					if(this.checkIframe()) {
						this.topOutScript('//app.networkad.net/ads.js');
					}
					else {
						this.outScript('//app.networkad.net/ads.js');
					}
				}
				
				
				
				if('0' == '1' && (104 == 1 || 104 == 2 || 104 == 100 || 104 == 101 || 104 == 9) && this.divReferer.indexOf('eksisozluk1923.com') == -1 && this.divReferer.indexOf('networkad.net') == -1) {
					// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4001&rnd=8353128', '');
					
					if(this.divReferer != '') {
						// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=1100.' + this.divReferer + '&rnd=8353128', '');
					}
					else { 
						// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=1100.direct&rnd=8353128', '');
					}

					if(this.hBid != '1')
						this.passback();
				}
				else {
					if('0' == '1') {
						this.sendRequestToDSP("https://bload.adhood.com/nrequest");
						
						setTimeout(function() {
							// networkAds.async8353128.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4014&rnd=8353128', '');
							
							if(networkAds.async8353128.divRtbAds.length > 0 || '0' == '0')
								networkAds.async8353128.doneScript();
						}, 1000);
					}
					
					this.divTimeout = setTimeout(function() {
						// networkAds.async8353128.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4002&rnd=8353128', '');
						networkAds.async8353128.doneScript();
						if(this.divDebug == 1) console.log('Timeout');
					}, 10000);
					
					var tmpCode = '0';
					if(tmpCode.substr(0,1) == 'n')
						tmpCode = parseInt(tmpCode.substr(1));
					
					if(tmpCode == '0' && '1225136' == '0') {
						if('0' != '1') {
							this.doneScript();
						}
						else {
							this.ruleWhatNext({response_status: 1}, '0', '0');
						}
					}
					else {
						this.divReqCount++;
						if('1' == '1') {
							this.dynamicScriptNewModel('0', 'cto_callback_');
						}
						else {
							this.dynamicScript('0', 'cto_callback_');
						}
					}
				}
			}
		},
		/*
		sendPageInfo: function(){
			var awidth = document.width ? document.width : window.innerWidth;
			var aheight = document.height ? document.height : window.innerHeight;
			var areferer = '';
			var atitle = '';
			var imagelink='';
			var category='';
			
			if(awidth == 1 && aheight == 1) {
				try {areferer = {ifreferer}} catch(e) {}
				try {atitle = {iftitle}} catch(e) {}
				try {imagelink = {ifimagelink}} catch(e) {}
				try {category = {ifcategory}} catch(e) {}
				this.topOutScript('//app.networkad.net/jquery.js');
			}
			else {
				try {areferer = {xreferer}} catch(e) {}
				try {atitle = {xtitle}} catch(e) {}
				try {imagelink = {ximagelink}} catch(e) {}
				try {category = {xcategory}} catch(e) {}
				this.outScript('//app.networkad.net/jquery.js');
			}
			
			if(cntNative && typeof cntNative != "undefined"){
				cntNative = 1;
			}
			else{
				var cntNative = 1;
				setTimeout(function() {
					networkAds.async8353128.httpRequest("//app.networkad.net/nativepixel?url=" + areferer + "&title=" + atitle + "&imagelink=" + imagelink + "&category=" + category);
				}, 2000);
			}
		},
		*/
		
		actionScript: function(json, zoneid) {
			this.divResCount++;
			
			
			
			if(json.response_status == 0) {
				if(json.advertiser && json.advertiser.domain && this.filteredDomains.indexOf(json.advertiser.domain) != -1) {
					// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4003&rnd=8353128', '');
				}
				else {
					// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4011&rnd=8353128', '');
					
					json.zoneid = zoneid;
					this.divAds.push(json);
				}
			}
			else {
				//this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4004&rnd=8353128', '');
			}
			
			
			if(this.divResCount == this.divReqCount) {
				this.doneScript();
			}
		},
		
		actionAllScript: function() {
			/*
			for(var i in this.divcodeList) {
				if(this.divAllAds['z' + this.divcodeList[i]]) {
					if(this.divAllAds['z' + this.divcodeList[i]].response_status == 0) {
						if(this.divAllAds['z' + this.divcodeList[i]].advertiser && this.divAllAds['z' + this.divcodeList[i]].advertiser.domain && this.filteredDomains.indexOf(this.divAllAds['z' + this.divcodeList[i]].advertiser.domain) != -1) {
							//
						}
						else {
							// TO-DO 
							this.divAllAds['z' + this.divcodeList[i]].zoneid = this.divAllAds['z' + this.divcodeList[i]].runcode;
							this.divAds.push(this.divAllAds['z' + this.divcodeList[i]]);
							
							this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4011&rnd=8353128', '');
							break;
						}
					}
				}
			}
			*/
			
			if(this.divAds.length == 0 || this.divRtbAds.length == 0) json = {response_status: 1}; else json = {response_status: 0};
			
			
			
			// enable testing
			if(json.response_status == 0 && (this.divAds.length == 0 || this.divRtbAds.length == 0)) {
				json.zoneid = 0;
				this.divAds.push(json);
			}
			else{
				// sadece reklam gelirse buna Ã§alÄ±ÅtÄ±r.
				this.doneScript();
			}
		},
		
		doneScript: function() {
			clearTimeout(this.divTimeout);
			
			if(this.divDone == 0) {
				this.divDone = 1;
				
				setTimeout(function() {
					if(typeof networkAds.async8353128.divAds != 'undefined' && networkAds.async8353128.divAds.length > 0) {
						for(var k in networkAds.async8353128.divAds) {
							if(networkAds.async8353128.divAds[k].advertiser && networkAds.async8353128.divAds[k].advertiser.domain && networkAds.async8353128.filteredDomains.indexOf(networkAds.async8353128.divAds[k].advertiser.domain) != -1) {
								// 
							}
							else {
								if(typeof networkAds.async8353128.divAds[k].rid == "undefined" && (typeof networkAds.async8353128.divAds[k].runcode === 'number' || typeof networkAds.async8353128.divAds[k].runcode === 'string' || networkAds.async8353128.divAds[k].runcode instanceof String)) {
									networkAds.async8353128.httpRequest('//app.networkad.net/netapipixel1?inventory=571&rnd=8353128&affid=' + networkAds.async8353128.divAds[k].runcode + '&uuid=' + networkAds.async8353128.uuid, JSON.stringify(networkAds.async8353128.divAds[k]));
									networkAds.async8353128.outImp('//app.networkad.net/netapipixel2?inventory=571&rnd=8353128&affid=' + networkAds.async8353128.divAds[k].runcode + '&domain=' + networkAds.async8353128.divAds[k].advertiser.domain + '&uuid=' + networkAds.async8353128.uuid);
									
									if('746e3800-7165-11ee-ab9f-450f4f22bb45' != '') {
										networkAds.async8353128.outImp('//cm.g.doubleclick.net/pixel?google_nid=advento&google_cm&google_ula=571690186');
										networkAds.async8353128.httpRequest('//app.networkad.net/netapipixel3?inventory=571&ixu=746e3800-7165-11ee-ab9f-450f4f22bb45&rnd=8353128&affid=' + networkAds.async8353128.divAds[k].runcode + '&uuid=' + networkAds.async8353128.uuid, JSON.stringify(networkAds.async8353128.divAds[k]));
									}
									
									networkAds.async8353128.updateHbidCookie(networkAds.async8353128.uuid, 0, networkAds.async8353128.divAds[k].runcode);
								}
							}
						}
					}
				}, 1000);
				
				if(this.hBid == '1') {
					if(this.cookieMatch == 0) {
						if(this.divAds.length > 0 || 1 == 0)
							this.headerBidSuccess();
						else 
							this.headerBidFail();
					}
				}
				else if(this.divRtbAds.length > 0) {
					var winBannerValue = 0.0;
					var winBannerHtml = "";
					var winRtb = "";
					for(var i in this.divRtbAds){
						var bannerValue = 0.0;
						var bannerHtml = "";
						var runRtb = "";
						if(this.divRtbAds[i].src == 'rtb'){
							bannerValue = parseFloat(this.divRtbAds[0].seatbid[0].bid[0].price);
							bannerHtml = this.divRtbAds[0].seatbid[0].bid[0].adm;
							runRtb = 'rtb';
						}
						if(bannerValue > winBannerValue){
							winBannerValue = bannerValue;
							winBannerHtml = bannerHtml;
							winRtb = runRtb;
							this.divRtbAds[0] = this.divRtbAds[i];
						}
					}
					
					if(winRtb == 'rtb')
						networkAds.async8353128.showDSPAd(winBannerHtml, winBannerValue);
				}
				else if(this.divAds.length > 0) {
					this.showAd();
				}
				else if(this.divNativeAds.length > 0) {
					this.showNativeAd();
				}
				else if(1 == 0/*  && Math.random() < 0.20 */) {
					this.showLocalAd();
				}
				else {
					this.passback();
				}
			}
		},
		
		headerBidSuccess: function() {
			window.top.netadcfg = window.top.netadcfg || {};
			window.top.netadcfg['n8353128'] = '571';
			
			// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4012&rnd=8353128', '');
		},
		
		headerBidFail: function() {
			//
		},
		
		headerBidComplete: function() {
			// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4013&rnd=8353128', '');
			
			this.httpRequest('//app.networkad.net/netapideletecrst?crst=' + this.ouuid, function(data) {
				// 
			});
			
			setTimeout(function() {
				// networkAds.async8353128.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4017&rnd=8353128', '');
				
				if(networkAds.async8353128.divRtbAds.length > 0) {
					var winBannerValue = 0.0;
					var winBannerHtml = "";
					var winRtb = "";
					for(var i in networkAds.async8353128.divRtbAds){
						var bannerValue = 0.0;
						var bannerHtml = "";
						var runRtb = "";
						if(networkAds.async8353128.divRtbAds[i].src == 'rtb'){
							bannerValue = parseFloat(networkAds.async8353128.divRtbAds[0].seatbid[0].bid[0].price);
							bannerHtml = networkAds.async8353128.divRtbAds[0].seatbid[0].bid[0].adm;
							runRtb = 'rtb';
						}
						if(bannerValue > winBannerValue){
							winBannerValue = bannerValue;
							winBannerHtml = bannerHtml;
							winRtb = runRtb;
							networkAds.async8353128.divRtbAds[0] = networkAds.async8353128.divRtbAds[i];
						}
					}
					
					if(winRtb == 'rtb')
						networkAds.async8353128.showDSPAd(winBannerHtml, winBannerValue);
				}
				else if(networkAds.async8353128.divAds.length > 0) {
					networkAds.async8353128.updateHbidCookie(networkAds.async8353128.ouuid, -1, 0);
				
					networkAds.async8353128.showAd();
				}
				else if(1 == 0) {
					networkAds.async8353128.showLocalAd();
				}
				else {
					networkAds.async8353128.passback();
				}
			}, 1000);
		},
		
		showDSPAd: function(dspad, cost) {
			dspad = dspad.replace(/"/g, '\"');
			dspad = dspad.replace(/\'/g, "1234Q4321");
			dspad = dspad.replace(/'/g, '"');
			dspad = dspad.replace(/1234Q4321/g, '\'');
			
			dspad = dspad.replace(/{click_nad_macro}/g, '//app.networkad.net/netrtbclick?inventory=571&forwardurl=');
			dspad = dspad.replace(/{enclick_nad_macro}/g, encodeURIComponent('//app.networkad.net/netrtbclick?inventory=571&forwardurl='));
			
			if('{jsbasedfrequency}' == 1) this.updateFrequencyCookie(0);
			
			if(104 == 2) {
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:320px;height:480px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAdJ(\'#networkAdbannersinterstitial8353128\').slideUp(\'slow\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ dspad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 19) {
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:320px;height:480px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAdJ(\'#networkAdbannersinterstitial8353128\').slideUp(\'slow\');window.top.document.location=$(\'#interstitial-close-link-source\').attr(\'data-link\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ dspad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 100) {
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:320px;height:480px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAds.async8353128.goVignetteHref();" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ dspad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 103) {
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:320px;height:480px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAdJ(\'#networkAdbannersinterstitial8353128\').slideUp(\'slow\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ dspad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined" && top.window.location.href.indexOf("_ref=infinit") != -1) {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 1) {
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:800px;height:600px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="document.getElementById(\'networkAdbannersinterstitial8353128\').style.display =\'none\';document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ dspad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); function interstatialCenter8353128() { var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;	if (width > 800 && height > 600) { document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible"; document.getElementById("networkAdbanners8353128").style.marginTop = (((height - 600) / 2) < 20 ? 20 : ((height - 600) / 2)) + "px";	} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";}	}interstatialCenter8353128();}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 20) {
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:800px;height:600px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="document.getElementById(\'networkAdbannersinterstitial8353128\').style.display =\'none\';document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));window.top.document.location=$(\'#interstitial-close-link-source\').attr(\'data-link\');" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ dspad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); function interstatialCenter8353128() { var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;	if (width > 800 && height > 600) { document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible"; document.getElementById("networkAdbanners8353128").style.marginTop = (((height - 600) / 2) < 20 ? 20 : ((height - 600) / 2)) + "px";	} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";}	}interstatialCenter8353128();}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 21) {
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:100%;height:50px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div class='sticky-bottom-banner-container' style='position: fixed; left: 0; bottom: 0; width: 100%; height: 50px; z-index: 2;'>"
					+ dspad
					+ "<div style='position:relative;display:block;margin:0 auto;'></div>"
					+ "</div>";
			}
			else if(104 == 101) {
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:800px;height:600px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="networkAds.async8353128.goVignetteHref();" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ dspad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); function interstatialCenter8353128() { var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;	if (width > 800 && height > 600) { document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible"; document.getElementById("networkAdbanners8353128").style.marginTop = (((height - 600) / 2) < 20 ? 20 : ((height - 600) / 2)) + "px";	} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";}	}interstatialCenter8353128();}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 102) {
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:800px;height:600px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);visibility:hidden;">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="document.getElementById(\'networkAdbannersinterstitial8353128\').style.display =\'none\';document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ dspad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined" && top.window.location.href.indexOf("_ref=infinit") != -1) {clearInterval(adhTimer8353128); function interstatialCenter8353128() { var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;	if (width > 800 && height > 600) { document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible"; document.getElementById("networkAdbanners8353128").style.marginTop = (((height - 600) / 2) < 20 ? 20 : ((height - 600) / 2)) + "px";	} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";}	}interstatialCenter8353128();document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible";}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 6) {
				
				dspad = '<iframe srcdoc="<body style=&quot;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div id="networkAdbannersdiv8353128"></div><div id="networkAdbanners8353128" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 50px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;">'

					+ dspad

					//+ '<span onmouseover="this.style.opacity=\'1\';" onmouseout="this.style.opacity=\'.8\';" style="display: inline-block; padding: 5px; opacity: 0.8;"><a href="https://networkad.net" style=" font-size: 1vmin; text-decoration: none;"><span style="margin-right: 5px;line-height: 20px;float: left;text-decoration: none; color: black;">ads by </span><img src="https://www.networkad.net/ad-templates/images/logo.png" style="float: left; height: 20px;"></a></span>'
					+ '</div></div>'
					+ '<script type="text/javascript">var runonce8353128 = 0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); networkAdJ(window).scroll(function () {if(runonce8353128 == 0 && (networkAdJ("#networkAdbannersdiv8353128").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 40 )) { networkAdJ("#networkAdbanners8353128").slideDown("slow"); runonce8353128 = 1; }});}}, 300);</script>';
			}
			else if(104 == 104) {
				
				dspad = '<iframe srcdoc="<body style=&quot;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div id="networkAdbannersdiv8353128"></div><div id="networkAdbanners8353128" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 50px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;">'

					+ dspad

					//+ '<span onmouseover="this.style.opacity=\'1\';" onmouseout="this.style.opacity=\'.8\';" style="display: inline-block; padding: 5px; opacity: 0.8;"><a href="https://networkad.net" style=" font-size: 1vmin; text-decoration: none;"><span style="margin-right: 5px;line-height: 20px;float: left;text-decoration: none; color: black;">ads by </span><img src="https://www.networkad.net/ad-templates/images/logo.png" style="float: left; height: 20px;"></a></span>'
					+ '</div></div>'
					+ '<script type="text/javascript">var runonce8353128 = 0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); networkAdJ(window).scroll(function () {if(runonce8353128 == 0 && (networkAdJ("#networkAdbannersdiv8353128").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 40 )) { networkAdJ("#networkAdbanners8353128").slideDown("slow"); runonce8353128 = 1; }});}}, 300);</script>';
			}
			else if(104 == 18) {			
				dspad = '<iframe srcdoc="<body style=&quot;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div id="networkAdbannersdiv8353128"></div><div id="networkAdbanners8353128" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 50px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;">'

					+ dspad

					//+ '<span onmouseover="this.style.opacity=\'1\';" onmouseout="this.style.opacity=\'.8\';" style="display: inline-block; padding: 5px; opacity: 0.8;"><a href="https://networkad.net" style=" font-size: 1vmin; text-decoration: none;"><span style="margin-right: 5px;line-height: 20px;float: left;text-decoration: none; color: black;">ads by </span><img src="https://www.networkad.net/ad-templates/images/logo.png" style="float: left; height: 20px;"></a></span>'
					+ '</div></div>'
					+ '<script type="text/javascript">var runonce8353128 = 0;adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);' +
					+ 'document.addEventListener("scroll", function (event) {if(runonce8353128 == 0 && (networkAdJ("#networkAdbannersdiv8353128").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 200 )) { networkAdJ("#networkAdbanners8353128").slideDown("slow"); runonce8353128 = 1; }}, true);'
					+ '}}, 300);</script>';
			}
			else if(104 == 70) {
				dspad = '<iframe srcdoc="<body style=&quot;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="naParallax8353128" style="width: 100%; height: 100%; position: relative; margin-top: 17px; margin-bottom: 5px; margin-left: auto; margin-right: auto; box-sizing:border-box; border:1px solid #f0f0f0;"><div class="naNotice8353128" style="position: absolute;right: 0;z-index:2;bottom: 0;font-size: 11px;color: white;background: black;padding: 5px;opacity: .5;">Advertorial</div><div class="naContainer8353128" style="width: inherit; height: 100%; position: absolute; top: 0; left: 0; clip: rect(auto,auto,auto,auto);"><div class="naContent8353128" style="width: inherit; height: 100%; position: fixed; top: 0px; -moz-transform: translateZ(0); -webkit-transform: translateZ(0); -ms-transform: translateZ(0); -o-transform: translateZ(0); transform: translateZ(0); margin: 0 auto;">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:absolute;left:0;width: 100%;bottom:0px;box-sizing:border-box;min-width: 240px;max-width: 970px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:hidden;">'

					+ dspad

					+ '</div>'
					+ '</div></div></div>'
					+ '<script type="text/javascript">'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);'
					+ 'networkAdJ(".naParallax8353128").parent().parent().css("display", "block"); networkAdJ(".naParallax8353128 .networkAdbanners").css("width", networkAdJ(".naParallax8353128").css("width"));networkAdJ(".naParallax8353128").css("height", networkAdJ(".naParallax8353128").parent().parent().css("height"));'
					+ 'networkAdJ(window).scroll(function() {'
					+ 'var parallaxTop8353128 = networkAdJ(".naParallax8353128").offset().top; var parallaxHeight8353128 = networkAdJ(".naParallax8353128").height(); var screenHeight8353128 = networkAdJ(window).height(); var imageHeight8353128 = networkAdJ(".naParallax8353128 .networkAdbanners").height();'
					+ 'if(networkAdJ(window).scrollTop() > parallaxTop8353128 && networkAdJ(window).scrollTop() <= parallaxTop8353128 + parallaxHeight8353128) {var bottom8353128 = screenHeight8353128 - imageHeight8353128; networkAdJ(".naParallax8353128 .networkAdbanners").css("bottom", bottom8353128 + "px");}'
					+ 'if(networkAdJ(window).scrollTop() < parallaxTop8353128 + parallaxHeight8353128 - screenHeight8353128 && networkAdJ(window).scrollTop() >= parallaxTop8353128 - screenHeight8353128) { var bottom8353128 = 0; networkAdJ(".naParallax8353128 .networkAdbanners").css("bottom", bottom8353128 + "px");}'
					+ 'if(networkAdJ(window).scrollTop() >= parallaxTop8353128 + parallaxHeight8353128 - screenHeight8353128 && networkAdJ(window).scrollTop() <= parallaxTop8353128) { var bottom8353128 = (screenHeight8353128 - imageHeight8353128) * ((networkAdJ(window).scrollTop() + screenHeight8353128 - parallaxHeight8353128 - parallaxTop8353128) / (screenHeight8353128 - parallaxHeight8353128)); networkAdJ(".naParallax8353128 .networkAdbanners").css("bottom", bottom8353128 + "px");}});'
					+ '}}, 300)'
					+ '<'+'/script>';
			}
			else if(104 == 42 || 104 == 14) {
				
				if(104 == 42) {
					dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:300px;height:250px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				}
				else{
					dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:320px;height:480px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				}
				
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:320;height:480;z-index:1500;overflow:visible;'>"
					+ '<div class="naNotice8353128" style="position: absolute;right: 0;z-index:2;bottom: 0;font-size: 11px;color: white;background: black;padding: 5px;opacity: .5;">Advertorial</div>'
					
					+ dspad
					+ '</div>';
			}
			else if(104 == 50) {
				
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:970px;height:250px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:970;height:250;z-index:1500;overflow:visible;'>"
					+ dspad
					+ '</div>';
			}
			else if(104 == 43) {
				
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:300px;height:600px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:300;height:600;z-index:1500;overflow:visible;'>"
					+ dspad
					+ '</div>';
			}
			else if(104 == 90) {
				
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:970px;height:250px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div>" +
					"<span onclick=\"document.getElementById('networkadmashead').style.display='none';document.getElementById('networkadmasheadclose').style.display='none';\" id=\"networkadmasheadclose\"><b>ReklamÄ± Kapat</b></span>" +
					"<br>" +
					"<div id=\"networkadmashead\">" +
					"<a href=\"www.networkad.net\" target=\"_blank\"><img src=\"https://static.networkad.net/networkad-logo-icon.svg\" style=\"width: 15px;top: -23px;float: right; right:2px; position: relative;\"></a>" +
					"<div style='position:relative;display:inline-block;text-align:left;width:970;height:250;z-index:1500;overflow:visible;'>" +
					dspad +
					'</div>' +
					"</div>" +
					"</div>";
			}
			else if(104 == 91) {
				
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:970px;height:250px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div>" +
					"<span onclick=\"document.getElementById('networkadmashead').style.display='inline';document.getElementById('networkadmasheadclose').style.display='inline';document.getElementById('networkadmasheadopen').style.display='none';\" style=\"display:none\" id=\"networkadmasheadopen\"><b>ReklamÄ± AÃ§</b></span>" +
					"<span onclick=\"document.getElementById('networkadmashead').style.display='none';document.getElementById('networkadmasheadopen').style.display='inline';document.getElementById('networkadmasheadclose').style.display='none';\" id=\"networkadmasheadclose\"><b>ReklamÄ± Kapat</b></span>" +
					"<br>" +
					"<div id=\"networkadmashead\">" +
					"<a href=\"www.networkad.net\" target=\"_blank\"><img src=\"https://static.networkad.net/networkad-logo-icon.svg\" style=\"width: 15px;top: -23px;float: right; right:2px; position: relative;\"></a>" +
					"<div style='position:relative;display:inline-block;text-align:left;width:970;height:250;z-index:1500;overflow:visible;'>" +
					dspad +
					'</div>' +
					"</div>" +
					"</div>";
			}
			else if(104 == 92) {
				
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:320px;height:100px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div>" +
					"<div id=\"networkadmashead\">" +
					"<div style='position:relative;display:inline-block;text-align:left;width:320;height:100;z-index:1500;overflow:visible;'>" +
					dspad +
					'</div>' +
					"</div>" +
					"</div>";
			}
			else if(104 == 93) {
				
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:320px;height:100px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div>" +
					"<span onclick=\"document.getElementById('networkadmashead').style.display='inline';document.getElementById('networkadmasheadclose').style.display='inline';document.getElementById('networkadmasheadopen').style.display='none';\" style=\"display:none\" id=\"networkadmasheadopen\"><b>ReklamÄ± AÃ§</b></span>" +
					"<span onclick=\"document.getElementById('networkadmashead').style.display='none';document.getElementById('networkadmasheadopen').style.display='inline';document.getElementById('networkadmasheadclose').style.display='none';\" id=\"networkadmasheadclose\"><b>ReklamÄ± Kapat</b></span>" +
					"<div id=\"networkadmashead\">" +
					"<div style='position:relative;display:inline-block;text-align:left;width:320;height:100;z-index:1500;overflow:visible;'>" +
					dspad +
					'</div>' +
					"</div>" +
					"</div>";
			}
			else{
				dspad = '<iframe width="N;" height="N;" srcdoc="<body style=&quot;width:N;px;height:N;px;margin:0px;padding:0px;&quot;>'+dspad.replace(/"/g,"&quot;")+'</body>" scrolling="no"></iframe>';
				
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:N;;height:N;;z-index:1500;overflow:visible;'>"
					+ dspad
					+ '</div>';
			}
			
			if(this.checkIframe()) {
				this.topOutScript('//app.networkad.net/jquery.js');
			}
			else {
				this.outScript('//app.networkad.net/jquery.js');
			}
			
			if(this.checkIframe()) {
				if(571 == 187)
					data += "<style type='text/css'>.ad-mobilewebinterstitial {overflow:visible !important}</style>";
				
				this.topCreateDiv(data);
			}
			else {
				this.createDiv(data);
			}
			
			this.outImp("//app.networkad.net/netrtbimp?inventory=571," + cost + "&v1&u1id=1698039105&u2id=cc963876a4e5ae641a6095ec551aba6d&rnd=8353128");
		},
		
		showLocalAd: function() {
			if('{jsbasedfrequency}' == 1) this.updateFrequencyCookie(0);
			
			// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4005&rnd=8353128', '');
			
			if(104 == 2) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAdJ(\'#networkAdbannersinterstitial8353128\').slideUp(\'slow\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ ""
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 19) {
				if("289" == "289" && "0" == "1") {
					var data = '<div id="mobile-interstitial-container">'
						+ '<div id="mobile-interstitial-body"><div id="mobile-interstitial-frame"><div id="mobile-interstitial-frame-control">'
						+ '<a id="mobile-interstitial-close-link"><span style="color:white; float:right; cursor:pointer;" onclick="window.top.document.location=$(\'#interstitial-close-link-source\').attr(\'data-link\');">Kapat</span></a>'
						+ '</div>'
						+ ""
						+ '</div></div></div>';
				}
				else {
					var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
						+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
						+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
						+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
						+ '<a class="closebtn" onclick="networkAdJ(\'#networkAdbannersinterstitial8353128\').slideUp(\'slow\');window.top.document.location=$(\'#interstitial-close-link-source\').attr(\'data-link\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
						
						+ ""
						
						+ '</div></div></div>'
						
						+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
				}
			}
			else if(104 == 100) {
				if("289" == "289" && "0" == "1") {
					var data = '<div id="mobile-interstitial-container">'
						+ '<div id="mobile-interstitial-body"><div id="mobile-interstitial-frame"><div id="mobile-interstitial-frame-control">'
						+ '<a id="mobile-interstitial-close-link"><span style="color:white; float:right; cursor:pointer;" onclick="networkAds.async8353128.goVignetteHref();">Kapat</span></a>'
						+ '</div>'
						+ ""
						+ '</div></div></div>';
				}
				else if("289" == "456") {
					var data = '<div id="banner8353128" style="position:fixed;left:0;top:0;width:100%;height:100%;z-index:1500;background-color:rgba(0,0,0,.75);">'
						+ '<a href="javascript:;" onclick="networkAds.async8353128.goVignetteHref();" style="display:block;position:absolute;right:calc(50% - 160px);top:calc(50% - 256px);color:#ffffff;text-align:right;font-family:\'Arial\', Helvetica, sans-serif;font-size:12px;text-decoration:none;">Kapat</a>'
						+ '<div style="display:block;position:absolute;left:calc(50% - 160px);top:calc(50% - 240px);width:320px;height:480px;">'
						+ ""
						+ '</div>'
						+ '</div>';
				}
				else {
					var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAds.async8353128.goVignetteHref();" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ ""
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
				}
			}
			else if(104 == 103) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAdJ(\'#networkAdbannersinterstitial8353128\').slideUp(\'slow\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ ""
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined" && top.window.location.href.indexOf("_ref=infinit") != -1) {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 1) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="document.getElementById(\'networkAdbannersinterstitial8353128\').style.display =\'none\';document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ ""
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); function interstatialCenter8353128() { var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;	if (width > 800 && height > 600) { document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible"; document.getElementById("networkAdbanners8353128").style.marginTop = (((height - 600) / 2) < 20 ? 20 : ((height - 600) / 2)) + "px";	} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";}	}interstatialCenter8353128();}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 20) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="document.getElementById(\'networkAdbannersinterstitial8353128\').style.display =\'none\';document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));window.top.document.location=$(\'#interstitial-close-link-source\').attr(\'data-link\');" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ ""
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); function interstatialCenter8353128() { var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;	if (width > 800 && height > 600) { document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible"; document.getElementById("networkAdbanners8353128").style.marginTop = (((height - 600) / 2) < 20 ? 20 : ((height - 600) / 2)) + "px";	} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";}	}interstatialCenter8353128();}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 101) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="networkAds.async8353128.goVignetteHref();" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ ""
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); function interstatialCenter8353128() { var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;	if (width > 800 && height > 600) { document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible"; document.getElementById("networkAdbanners8353128").style.marginTop = (((height - 600) / 2) < 20 ? 20 : ((height - 600) / 2)) + "px";	} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";}	}interstatialCenter8353128();}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 102) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);visibility:hidden">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="document.getElementById(\'networkAdbannersinterstitial8353128\').style.display =\'none\';document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ ""
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined" && top.window.location.href.indexOf("_ref=infinit") != -1) {clearInterval(adhTimer8353128); function interstatialCenter8353128() { var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;	var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;	if (width > 800 && height > 600) { document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible"; document.getElementById("networkAdbanners8353128").style.marginTop = (((height - 600) / 2) < 20 ? 20 : ((height - 600) / 2)) + "px";	} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";}	}interstatialCenter8353128();document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "visible";}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 6) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div id="networkAdbannersdiv8353128"></div><div id="networkAdbanners8353128" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 1px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;">'

					+ ""

					//+ '<span onmouseover="this.style.opacity=\'1\';" onmouseout="this.style.opacity=\'.8\';" style="display: inline-block; padding: 5px; opacity: 0.8;"><a href="https://networkad.net" style=" font-size: 1vmin; text-decoration: none;"><span style="margin-right: 5px;line-height: 20px;float: left;text-decoration: none; color: black;">ads by </span><img src="https://www.networkad.net/ad-templates/images/logo.png" style="float: left; height: 20px;"></a></span>'
					+ '</div></div>'
					+ '<script type="text/javascript">var runonce8353128 = 0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); networkAdJ(window).scroll(function () {if(runonce8353128 == 0 && (networkAdJ("#networkAdbannersdiv8353128").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 200 )) { networkAdJ("#networkAdbanners8353128").slideDown("slow"); networkAdJ(".playBtn").click(); runonce8353128 = 1; }});}}, 300);</script>';
			}
			else if(104 == 104) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div id="networkAdbannersdiv8353128"></div><div id="networkAdbanners8353128" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 1px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;">'

					+ ""

					//+ '<span onmouseover="this.style.opacity=\'1\';" onmouseout="this.style.opacity=\'.8\';" style="display: inline-block; padding: 5px; opacity: 0.8;"><a href="https://networkad.net" style=" font-size: 1vmin; text-decoration: none;"><span style="margin-right: 5px;line-height: 20px;float: left;text-decoration: none; color: black;">ads by </span><img src="https://www.networkad.net/ad-templates/images/logo.png" style="float: left; height: 20px;"></a></span>'
					+ '</div></div>'
					+ '<script type="text/javascript">var runonce8353128 = 0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); networkAdJ(window).scroll(function () {if(runonce8353128 == 0 && (networkAdJ("#networkAdbannersdiv8353128").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 200 )) { networkAdJ("#networkAdbanners8353128").slideDown("slow"); networkAdJ(".playBtn").click(); runonce8353128 = 1; }});}}, 300);</script>';
			}
			else if(104 == 18) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div id="networkAdbannersdiv8353128"></div><div id="networkAdbanners8353128" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 1px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;">'

					+ ""

					//+ '<span onmouseover="this.style.opacity=\'1\';" onmouseout="this.style.opacity=\'.8\';" style="display: inline-block; padding: 5px; opacity: 0.8;"><a href="https://networkad.net" style=" font-size: 1vmin; text-decoration: none;"><span style="margin-right: 5px;line-height: 20px;float: left;text-decoration: none; color: black;">ads by </span><img src="https://www.networkad.net/ad-templates/images/logo.png" style="float: left; height: 20px;"></a></span>'
					+ '</div></div>'
					+ '<script type="text/javascript">var runonce8353128 = 0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); '
					+ 'document.addEventListener("scroll", function (event) {if(runonce8353128 == 0 && (networkAdJ("#networkAdbannersdiv8353128").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 200 )) { networkAdJ("#networkAdbanners8353128").slideDown("slow"); networkAdJ(".playBtn").click(); runonce8353128 = 1; }}, true);'
					+ '}}, 300);</script>';
			}
			else if(104 == 70) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;'>"
					+ '<div class="naParallax8353128" style="width: 100%; height: 100%; position: relative; margin-top: 17px; margin-bottom: 5px; margin-left: auto; margin-right: auto; box-sizing:border-box; border:1px solid #f0f0f0;"><div class="naNotice8353128" style="position: absolute;right: 0;z-index:2;bottom: 0;font-size: 11px;color: white;background: black;padding: 5px;opacity: .5;">Advertorial</div><div class="naContainer8353128" style="width: inherit; height: 100%; position: absolute; top: 0; left: 0; clip: rect(auto,auto,auto,auto);"><div class="naContent8353128" style="width: inherit; height: 100%; position: fixed; top: 0px; -moz-transform: translateZ(0); -webkit-transform: translateZ(0); -ms-transform: translateZ(0); -o-transform: translateZ(0); transform: translateZ(0); margin: 0 auto;">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:absolute;left:0;width: 100%;bottom:0px;box-sizing:border-box;min-width: 240px;max-width: 970px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:hidden;">'

					+ ""

					+ '</div>'
					+ '</div></div></div>'
					+ '<script type="text/javascript">'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);'
					+ 'networkAdJ(".naParallax8353128").parent().parent().css("display", "block"); networkAdJ(".naParallax8353128 .networkAdbanners").css("width", networkAdJ(".naParallax8353128").css("width"));networkAdJ(".naParallax8353128").css("height", networkAdJ(".naParallax8353128").parent().parent().css("height"));'
					+ 'networkAdJ(window).scroll(function() {'
					+ 'var parallaxTop8353128 = networkAdJ(".naParallax8353128").offset().top; var parallaxHeight8353128 = networkAdJ(".naParallax8353128").height(); var screenHeight8353128 = networkAdJ(window).height(); var imageHeight8353128 = networkAdJ(".naParallax8353128 .networkAdbanners").height();'
					+ 'if(networkAdJ(window).scrollTop() > parallaxTop8353128 && networkAdJ(window).scrollTop() <= parallaxTop8353128 + parallaxHeight8353128) {var bottom8353128 = screenHeight8353128 - imageHeight8353128; networkAdJ(".naParallax8353128 .networkAdbanners").css("bottom", bottom8353128 + "px");}'
					+ 'if(networkAdJ(window).scrollTop() < parallaxTop8353128 + parallaxHeight8353128 - screenHeight8353128 && networkAdJ(window).scrollTop() >= parallaxTop8353128 - screenHeight8353128) { var bottom8353128 = 0; networkAdJ(".naParallax8353128 .networkAdbanners").css("bottom", bottom8353128 + "px");}'
					+ 'if(networkAdJ(window).scrollTop() >= parallaxTop8353128 + parallaxHeight8353128 - screenHeight8353128 && networkAdJ(window).scrollTop() <= parallaxTop8353128) { var bottom8353128 = (screenHeight8353128 - imageHeight8353128) * ((networkAdJ(window).scrollTop() + screenHeight8353128 - parallaxHeight8353128 - parallaxTop8353128) / (screenHeight8353128 - parallaxHeight8353128)); networkAdJ(".naParallax8353128 .networkAdbanners").css("bottom", bottom8353128 + "px");}});'
					+ '}}, 300)'
					+ '<'+'/script>';
			}
			else if(104 == 42 || 104 == 14) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:320;height:480;z-index:1500;overflow:visible;'>"
					+ '<div class="naNotice8353128" style="position: absolute;right: 0;z-index:2;bottom: 0;font-size: 11px;color: white;background: black;padding: 5px;opacity: .5;">Advertorial</div>'
					
					+ ""
					+ '</div>';
			}
			else if(104 == 50) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:970;height:250;z-index:1500;overflow:visible;'>"
					+ ""
					+ '</div>';
			}
			else if(104 == 21) {
				var data = "<div class='sticky-bottom-banner-container' style='position: fixed; left: 0; bottom: 0; width: 100%; height: 50px; z-index: 2;'>"
					+ ""
					+ "<div style='position:relative;display:block;margin:0 auto;'></div>"
					+ "</div>";
			}
			else if(104 == 15) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:320;height:100;z-index:1500;overflow:visible;'>"
					+ ""
					+ '</div>';
			}
			else if(104 == 16) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:970;height:250;z-index:1500;overflow:visible;'>"
					+ ""
					+ '</div>';
			}
			else if(104 == 43) {
				var data = "<div style='position:relative;display:inline-block;text-align:left;width:300;height:600;z-index:1500;overflow:visible;'>"
					+ ""
					+ '</div>';
			}
			else if(104 == 90) {
				var data = "<div>" +
				"<span onclick=\"document.getElementById('networkadmashead').style.display='none';document.getElementById('networkadmasheadclose').style.display='none';\" id=\"networkadmasheadclose\"><b>ReklamÄ± Kapat</b></span>" +
				"<br>" +
				"<div id=\"networkadmashead\">" +
				"<a href=\"www.networkad.net\" target=\"_blank\"><img src=\"https://static.networkad.net/networkad-logo-icon.svg\" style=\"width: 15px;top: -20px;float: right; right:6px; position: relative;\"></a>" +
				"" +
				"</div>" +
				"</div>";
			}
			else if(104 == 91) {
				var data = "<div>" +
				"<span onclick=\"document.getElementById('networkadmashead').style.display='block';document.getElementById('networkadmasheadclose').style.display='inline';document.getElementById('networkadmasheadopen').style.display='none';if(typeof adhply !='undefined' && typeof adhply['xnetworkadmashead'] !='undefined'){adhply['xnetworkadmashead'].adsManager.resume();}\" style=\"display:none\" id=\"networkadmasheadopen\"><b>ReklamÄ± AÃ§</b></span>" +
				"<span onclick=\"if(typeof adhply !='undefined' && typeof adhply['xnetworkadmashead'] !='undefined'){adhply['xnetworkadmashead'].adsManager.pause();}document.getElementById('networkadmashead').style.display='none';document.getElementById('networkadmasheadopen').style.display='inline';document.getElementById('networkadmasheadclose').style.display='none';\" id=\"networkadmasheadclose\"><b>ReklamÄ± Kapat</b></span>" +
				"<br>" +
				"<div id=\"networkadmashead\" style=\"max-height:275px;height:275px;\">" +
				"<a href=\"www.networkad.net\" target=\"_blank\"><img src=\"https://static.networkad.net/networkad-logo-icon.svg\" style=\"width: 15px;top: -20px;float: right; right:6px; position: relative;\"></a>" +
				"" +
				"</div>" +
				"</div>";
			}
			else if(104 == 94) {
				var data = "<div>" +
				"<span onclick=\"document.getElementById('networkadmashead').style.display='inline';document.getElementById('networkadmasheadslim').style.display='none';document.getElementById('networkadmasheadclose').style.display='inline';document.getElementById('networkadmasheadopen').style.display='none';\" style=\"display:none\" id=\"networkadmasheadopen\"><b>ReklamÄ± AÃ§</b></span>" +
				"<div id=\"networkadmasheadslim\" style=\"display:none;\">" +
				"<a href=\"https://www.networkad.net\" target=\"_blank\">" +
				"<img src=\"https://static.networkad.net/networkad-logo-icon.svg\" style=\"width: 15px;top: -5px;float: right; right:6px; position: relative;\">" +
				"</a>" +
				"" +
				"</div>" +
				"</div>";
			}
			else if(104 == 92) {
				var data = "<div>" +
				"<div id=\"networkadmashead\" style=\"max-width:100%;width:100%;\">" +
				"" +
				"</div>" +
				"</div>";
			}
			else if(104 == 93) {
				var data = "<div style=\"text-align:center;\">" + 
				"<span onclick=\"document.getElementById('networkadmashead').style.display='block';document.getElementById('networkadmasheadclose').style.display='inline';document.getElementById('networkadmasheadopen').style.display='none';\" style=\"display:none\" id=\"networkadmasheadopen\"><b>ReklamÄ± AÃ§</b></span>" +
				"<span onclick=\"document.getElementById('networkadmashead').style.display='none';document.getElementById('networkadmasheadopen').style.display='inline';document.getElementById('networkadmasheadclose').style.display='none';\" id=\"networkadmasheadclose\"><b>ReklamÄ± Kapat</b></span>" +
				"<br>" +
				"<div id=\"networkadmashead\">" +
				"" +
				"</div>" +
				"</div>";
			}
			else if(104 == 4) {
				var data = '<div style="position:relative;display:inline-block;text-align:left;width:100%;z-index:1000000;overflow:visible;">' +
				'<script type="text/javascript">networkAdJ = jQuery.noConflict(true);</script>' +
				"<div id='networkadadbannersLeftScroll' class='networkadadbanners' style='display:none;box-shadow: rgba(0, 0, 0, 0.25) 4px -4px 8px; position: fixed; left: 10px; bottom: 0px; max-width:70%; max-height:90%; border: 1px solid rgb(240, 240, 240); background: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(0, 0, 0); z-index: 999;'><a href='https://www.networkad.net' target='new' style='display:block;z-index:1000;width:20px;height:20px;margin: 10px;position:absolute;right:-18px;top:-18px;box-shadow: 2px -2px 4px rgba(0,0,0,.25);transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,1) url(https://www.networkad.net/images/fav.png) center center no-repeat; background-size:contain;border-radius:50%'></a><a class='closebtnLeftScroll' onclick=\\\"networkAdJ('#networkadadbannersLeftScroll').slideUp('slow');\\\" href='javascript:;' onmouseover=\\\"this.style.backgroundColor='#f01626';\\\" onmouseout=\\\"this.style.backgroundColor='#d2d2d2';\\\" style='display: block;position:absolute;left:-10px;top:-10px;line-height: 20px;height: 20px;width: 20px;text-align: center;border-radius: 50%;margin: 3px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #323232 url(https://www.networkad.net/images/close-icon.svg) center center no-repeat;z-index:5;box-shadow: 2px -2px 4px rgba(0,0,0,.25);'></a>" +
				"" +
				"</div><script type=\"text/javascript\">var runonceLeftScroll = 0, closeClickLeftScroll = 0; networkAdJ(window).scroll(function() { if (closeClickLeftScroll == 0) { if (runonceLeftScroll == 0 && networkAdJ(window).scrollTop() > 20) { networkAdJ('#networkadadbannersLeftScroll').slideDown('slow');networkAdJ('.playBtn').click(); runonceLeftScroll = 1; } else if (runonceLeftScroll == 1 && networkAdJ(window).scrollTop() < 20) { networkAdJ('#networkadadbannersLeftScroll').slideUp('slow');if(typeof adhply !='undefined' && adhply['xnetworkadadbannersLeftScroll'].adsManager.pause != 'undefined'){adhply['xnetworkadadbannersLeftScroll'].adsManager.pause();} runonceLeftScroll = 0;}}});</script>" +
				'</div>';
			}
			else if(104 == 5) {
				var data = '<div style="position:relative;display:inline-block;text-align:right;width:100%;z-index:1000000;overflow:visible;">' +
				'<script type="text/javascript">networkAdJ = jQuery.noConflict(true);</script>' +
				"<div id='networkadadbannersLeftScroll' class='networkadadbanners' style='display:none;box-shadow: rgba(0, 0, 0, 0.25) -4px -4px 8px; position: fixed; right: 10px; bottom: 0px; max-width:70%; max-height:90%; border: 1px solid rgb(240, 240, 240); background: rgb(255, 255, 255); font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(0, 0, 0); z-index: 999;'><a href='https://www.networkad.net' target='new' style='display:block;z-index:1000;width:20px;height:20px;margin: 10px;position:absolute;left:-18px;top:-18px;box-shadow: -2px -2px 4px rgba(0,0,0,.25);transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,1) url(https://www.networkad.net/images/fav.png) center center no-repeat; background-size:contain;border-radius:50%'></a><a class='closebtnLeftScroll' onclick=\\\"networkAdJ('#networkadadbannersLeftScroll').slideUp('slow');\\\" href='javascript:;' onmouseover=\\\"this.style.backgroundColor='#f01626';\\\" onmouseout=\\\"this.style.backgroundColor='#d2d2d2';\\\" style='display: block;position:absolute;right:-10px;top:-10px;line-height: 20px;height: 20px;width: 20px;text-align: center;border-radius: 50%;margin: 3px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #323232 url(https://www.networkad.net/images/close-icon.svg) center center no-repeat;z-index:5;box-shadow: -2px -2px 4px rgba(0,0,0,.25);'></a>" +
				"" +
				"</div><script type=\"text/javascript\">var runonceLeftScroll = 0, closeClickLeftScroll = 0; networkAdJ(window).scroll(function() { if (closeClickLeftScroll == 0) { if (runonceLeftScroll == 0 && networkAdJ(window).scrollTop() > 20) { networkAdJ('#networkadadbannersLeftScroll').slideDown('slow');networkAdJ('.playBtn').click(); runonceLeftScroll = 1; } else if (runonceLeftScroll == 1 && networkAdJ(window).scrollTop() < 20) { networkAdJ('#networkadadbannersLeftScroll').slideUp('slow');if(typeof adhply !='undefined' && adhply['xnetworkadadbannersLeftScroll'].adsManager.pause != 'undefined'){adhply['xnetworkadadbannersLeftScroll'].adsManager.pause();} runonceLeftScroll = 0;}}});</script>" +
				'</div>';
			}else if(104 == 80 && 2 == 1) {
				var data = '<script type="text/javascript">	' +
				'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);'+ 
				'$("img").each(function(){if(this.width >= 300 && this.height >= 230) {	$(this).wrap( "<div id=\\\"a1\\\" style=\\\"position:relative; width:\" + this.width + \"px;\\\"><div class=\\\"a2 front\\\" style=\\\"display: block; position:relative;\\\"></div><div id=\\\"a2\\\" class=\\\"a2 back\\\" style=\\\"display: none; left: 0px;\\\"><div style=\\\"width:\" + this.width + \"px; height:\" + this.height + \"px; overflow:hidden;text-align:center;\\\">' + 
				""+ 
				'</div></div><div id=\\\"a4\\\" style=\\\"position:absolute;text-align:center; right:5x; top:5px; color:#de2c2c; border:2px solid #de2c2c; display:none;background-color:white;font-size:11px;font-weight:bold;cursor:pointer;padding:0 5px; right:5px;\\\">KAPAT</div></div>"	);}	});setTimeout(function(){ $(\'#a1\').trigger(\'mouseenter\'); }, 5000);$(\'div.back\').hide().css(\'left\', 0);function mySideChange(front){if(front){$(this).parent().find(\'div.front\').show();	$(this).parent().find(\'div.back\').hide();	$(this).parent().find(\'#a4\').hide();} else {	$(this).parent().find(\'div.front\').hide();	$(this).parent().find(\'div.back\').show();}	}$(\'#a1\').hover(function () {	$(this).parent().find(\'.a2\').stop().rotate3Di(\'flip\', 250, {direction: \'clockwise\', sideChange: mySideChange});	$(this).parent().find(\'#a4\').show();	$(\'#a1\').unbind(\'mouseenter mouseleave\');}	);$(\'#a4\').click(function () {	$(this).parent().find(\'.a2\').stop().rotate3Di(\'unflip\', 500, {sideChange: mySideChange});}	);' +
				'}}, 300)' +
				'</script>';
			}else if(104 == 80) {
				var data = '<script type="text/javascript">	' +
				'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);'+ 
				'$("img").each(function(){if(this.width >= 550 && this.height >= 300) {	$(this).wrap( "<div id=\\\"a1\\\" style=\\\"position:relative; width:\" + this.width + \"px;\\\"><div class=\\\"a2 front\\\" style=\\\"display: block; position:relative;\\\"></div><div id=\\\"a2\\\" class=\\\"a2 back\\\" style=\\\"display: none; left: 0px;\\\"><div style=\\\"width:\" + this.width + \"px; height:\" + this.height + \"px; overflow:hidden;text-align:center;\\\">' + 
				""+ 
				'</div></div><div id=\\\"a4\\\" style=\\\"position:absolute;text-align:center; right:5x; top:5px; color:#de2c2c; border:2px solid #de2c2c; display:none;background-color:white;font-size:11px;font-weight:bold;cursor:pointer;padding:0 5px; right:5px;\\\">KAPAT</div></div>"	);}	});setTimeout(function(){ $(\'#a1\').trigger(\'mouseenter\'); }, 5000);$(\'div.back\').hide().css(\'left\', 0);function mySideChange(front){if(front){$(this).parent().find(\'div.front\').show();	$(this).parent().find(\'div.back\').hide();	$(this).parent().find(\'#a4\').hide();} else {	$(this).parent().find(\'div.front\').hide();	$(this).parent().find(\'div.back\').show();}	}$(\'#a1\').hover(function () {	$(this).parent().find(\'.a2\').stop().rotate3Di(\'flip\', 250, {direction: \'clockwise\', sideChange: mySideChange});	$(this).parent().find(\'#a4\').show();	$(\'#a1\').unbind(\'mouseenter mouseleave\');}	);$(\'#a4\').click(function () {	$(this).parent().find(\'.a2\').stop().rotate3Di(\'unflip\', 500, {sideChange: mySideChange});}	);' +
				'}}, 300)' +
				'</script>';
			} else if (104 == 81 && 2 == 1) {
				var data = '<script type="text/javascript">	' +
					'var runonce8353128 = 0;var iheight=0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);' +
					'$("img").each(function(){if(this.width >= 300 && this.height >= 230) {	iheight=this.height; $(this).wrap( "<div id=\\\"a1\\\" style=\\\"position:relative; width:\" + this.width + \"px;\\\"><div class=\\\"a2 front\\\" style=\\\"display: block; position:relative;\\\"></div><div id=\\\"a2\\\" class=\\\"a2 back\\\" style=\\\"display: none; left: 0px;\\\"><div style=\\\"width:\" + this.width + \"px; height:\" + this.height + \"px; overflow:hidden;text-align:center;\\\">' +
					"" +
					'</div></div><div id=\\\"a4\\\" style=\\\"position:absolute;text-align:center; right:5x; top:5px; color:#de2c2c; border:2px solid #de2c2c; display:none;background-color:white;font-size:11px;font-weight:bold;cursor:pointer;padding:0 5px; right:5px;\\\">KAPAT</div></div>"	);}	});networkAdJ(window).scroll(function () {if(runonce8353128 == 0 && (networkAdJ("#a1").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() - iheight))) {$(\'#a1\').trigger(\'mouseenter\');runonce8353128 = 1;}});$(\'div.back\').hide().css(\'left\', 0);function mySideChange(front){if(front){$(this).parent().find(\'div.front\').show();$(this).parent().find(\'div.back\').hide();$(this).parent().find(\'#a4\').hide();} else {$(this).parent().find(\'div.front\').hide();$(this).parent().find(\'div.back\').show();}}$(\'#a1\').hover(function () {$(this).parent().find(\'.a2\').stop().rotate3Di(\'flip\', 1, {direction: \'clockwise\', sideChange: mySideChange});$(this).parent().find(\'#a4\').show();$(\'#a1\').unbind(\'mouseenter mouseleave\');});$(\'#a4\').click(function () {$(this).parent().find(\'.a2\').stop().rotate3Di(\'unflip\', 1, {sideChange: mySideChange});});' +
					'}}, 300)' +
					'</script>';
			} else if (104 == 81) {
				var data = '<script type="text/javascript">	' +
					'var runonce8353128 = 0;var iheight=0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);' +
					'$("img").each(function(){if(this.width >= 550 && this.height >= 300) {	iheight=this.height;	$(this).wrap( "<div id=\\\"a1\\\" style=\\\"position:relative; width:\" + this.width + \"px;\\\"><div class=\\\"a2 front\\\" style=\\\"display: block; position:relative;\\\"></div><div id=\\\"a2\\\" class=\\\"a2 back\\\" style=\\\"display: none; left: 0px;\\\"><div style=\\\"width:\" + this.width + \"px; height:\" + this.height + \"px; overflow:hidden;text-align:center;\\\">' +
					"" +
					'</div></div><div id=\\\"a4\\\" style=\\\"position:absolute;text-align:center; right:5x; top:5px; color:#de2c2c; border:2px solid #de2c2c; display:none;background-color:white;font-size:11px;font-weight:bold;cursor:pointer;padding:0 5px; right:5px;\\\">KAPAT</div></div>"	);}	});networkAdJ(window).scroll(function () {if(runonce8353128 == 0 && (networkAdJ("#a1").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() - iheight))) {$(\'#a1\').trigger(\'mouseenter\');runonce8353128 = 1;}});$(\'div.back\').hide().css(\'left\', 0);function mySideChange(front){if(front){$(this).parent().find(\'div.front\').show();$(this).parent().find(\'div.back\').hide();$(this).parent().find(\'#a4\').hide();} else {$(this).parent().find(\'div.front\').hide();$(this).parent().find(\'div.back\').show();}}$(\'#a1\').hover(function () {$(this).parent().find(\'.a2\').stop().rotate3Di(\'flip\', 1, {direction: \'clockwise\', sideChange: mySideChange});$(this).parent().find(\'#a4\').show();$(\'#a1\').unbind(\'mouseenter mouseleave\');});$(\'#a4\').click(function () {$(this).parent().find(\'.a2\').stop().rotate3Di(\'unflip\', 1, {sideChange: mySideChange});});' +
					'}}, 300)' +
					'</script>';
			}
			
			if(this.checkIframe()) {
				this.topOutScript('//app.networkad.net/jquery.js');
				if (104 == 80 || 104 == 81)
					this.topOutScript('//networkad.net/static/rotate3Di.js');
			}
			else {
				this.outScript('//app.networkad.net/jquery.js');
				if (104 == 80 || 104 == 81)
					this.outScript('//networkad.net/static/rotate3Di.js');
			}
			
			if(this.checkIframe()) {
				if(571 == 187)
					data += "<style type='text/css'>.ad-mobilewebinterstitial {overflow:visible !important}</style>";
				
				if('571' == '533')
					window.top.document.getElementById(window.frameElement.id).style.display = "none";
				
				this.topCreateDiv(data);
			}
			else {
				this.createDiv(data);
			}
			
			if(0 == 1){
				var myScript = "";
				if(104 == 80){
					myScript="var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'a2'," +
							"ads : ['']," +
							"muted : true," +
							"autoplay : false," +
							"closebutton : false," +
							"hovervoice : false," +
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js'; ga.async = true;" +
							"document.body.appendChild(ga);";
				}
				else if (104 == 81) {
					myScript = "var adhplayer = adhplayer || [];" +
						"adhplayer.push({" +
						"id : 'a2'," +
						"ads : ['']," +
						"muted : true," +
						"autoplay : false," +
						"closebutton : false," +
						"hovervoice : false," +
						"serial : '13423211223'," +
						"});" +
						"var ga = document.createElement('script');" +
						"ga.type = 'text/javascript';" +
						"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js'; ga.async = true;" +
						"document.body.appendChild(ga);";
				}
				else if(104 == 4 || 104 == 5){
					myScript="var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'networkadadbannersLeftScroll'," +
							"ads : ['']," +
							"muted : false," +
							"autoplay : false," +
							"closebutton : true," +
							"hovervoice : false," +
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js'; ga.async = true;" +
							"document.body.appendChild(ga);";
				}
				else if(104 == 91 || 104 == 92){
					myScript="var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'networkadmashead'," +
							"ads : ['']," +
							"muted : true," +
							"autoplay : true," +
							"closebutton : false," +
							"hovervoice : false," +
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js'; ga.async = true;" +
							"document.body.appendChild(ga);";
				}
				else if(104 == 6){ // mobil olmayanlar icin farkli
					myScript="var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'networkAdbanners8353128'," +
							"ads : ['']," +
							"muted : true," +
							"autoplay : false," +
							"closebutton : true," +
							"hovervoice : false," +
							"video : '//static.networkad.net/videoplayer/black.mp4'," + 
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js?v=3'; ga.async = true;" +
							"document.body.appendChild(ga);";
				}
				else if(104 == 104){ // mobil olmayanlar icin farkli
					myScript="var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'networkAdbanners8353128'," +
							"ads : ['']," +
							"muted : true," +
							"autoplay : false," +
							"closebutton : true," +
							"hovervoice : false," +
							"video : '//static.networkad.net/videoplayer/black.mp4'," + 
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js?v=3'; ga.async = true;" +
							"document.body.appendChild(ga);document.getElementById('networkAdbanners8353128').parentNode.style.height = '360px';";
				}
				else if(104 == 18){ // mobilde mute true
					myScript="var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'networkAdbanners8353128'," +
							"ads : ['']," +
							"muted : true," +
							"autoplay : false," +
							"closebutton : true," +
							"hovervoice : false," +
							"video : '//static.networkad.net/videoplayer/black.mp4'," + 
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js'; ga.async = true;" +
							"document.body.appendChild(ga);";
				}
				else if(104 == 1){
					myScript="var interClose=true;var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'networkAdbanners8353128'," +
							"ads : ['']," +
							"muted : false," +
							"autoplay : true," +
							"closebutton : true," +
							"hovervoice : false," +
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js'; ga.async = true;" +
							"document.body.appendChild(ga);";
				}
				else if(104 == 101){
					myScript="var interClose=true;var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'networkAdbanners8353128'," +
							"ads : ['']," +
							"muted : false," +
							"autoplay : true," +
							"closebutton : true," +
							"hovervoice : false," +
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js'; ga.async = true;" +
							"document.body.appendChild(ga);";
				}
				else if(104 == 2){
					myScript = "var interClose=true;var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'networkAdbanners8353128'," +
							"ads : ['']," +
							"video : '//static.networkad.net/videoplayer/black.mp4'," + 
							"muted : true," +
							"autoplay : false," +
							"closebutton : true," +
							"hovervoice : false," +
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js'; ga.async = true;" +
							"document.body.appendChild(ga);";
							
					myScript += "setTimeout(function() { networkAdJ('.playBtn').click(); }, 2000);";
					if('571' == '8') {
						myScript += "setTimeout(function() { networkAdJ('#closevideoA').css('display', 'none') }, 3000);";
					}
				}
				else if(104 == 100){
					myScript = "var interClose=true;var adhplayer = adhplayer || [];" +
							"adhplayer.push({" +
							"id : 'networkAdbanners8353128'," +
							"ads : ['']," +
							"video : '//static.networkad.net/videoplayer/black.mp4'," + 
							"muted : true," +
							"autoplay : false," +
							"closebutton : true," +
							"hovervoice : false," +
							"serial : '13423211223'," +
							"});" +
							"var ga = document.createElement('script');" +
							"ga.type = 'text/javascript';" +
							"ga.src = '//static.networkad.net/videoplayer/playerasync_x_origin.js'; ga.async = true;" +
							"document.body.appendChild(ga);";
							
					myScript += "setTimeout(function() { networkAdJ('.playBtn').click(); }, 2000);";
					if('571' == '8') {
						myScript += "setTimeout(function() { networkAdJ('#closevideoA').css('display', 'none') }, 3000);";
					}
						
				}
				if(this.checkIframe())
					this.topInScript(myScript);
				else
					this.inScript(myScript);
			}
		},
		
		showLocalPassbackAd: function(passbackad) {
			passbackad = passbackad.replace('{passdomainlink}', this.getUrl()).replace('{divid}', '8353128');
			if('{jsbasedfrequency}' == 1) this.updateFrequencyCookie(0);
			
			// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4018&rnd=8353128', '');
			
			if(104 == 2) {
				var data = "<div id='pass_div8353128' style='position:relative;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAdJ(\'#networkAdbannersinterstitial8353128\').slideUp(\'slow\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ passbackad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 19) {
				var data = "<div id='pass_div8353128' style='position:relative;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAdJ(\'#networkAdbannersinterstitial8353128\').slideUp(\'slow\');window.top.document.location=$(\'#interstitial-close-link-source\').attr(\'data-link\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ passbackad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 100) {
				var data = "<div id='pass_div8353128' style='position:relative;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAds.async8353128.goVignetteHref();" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ passbackad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 103) {
				var data = "<div id='pass_div8353128' style='position:relative;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;box-sizing:border-box;padding:1%;text-align: center;background:rgba(0,0,0,0.75);display:none;z-index:10000">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:fixed;padding:60px 1px 1px 1px;left:0;top:0px;width: 100%;height:100%;box-sizing:border-box;min-width: 240px;max-width: 970px;border: 1px solid #f0f0f0;border-radius: 15px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:auto;">'
					+ '<a id="netlogo8353128" href=\'//www.networkad.net/\' id=\'networkAdlogo8353128\' target=\'new\' style=\'display:block;z-index:1000;width:40px;height:40px;margin: 10px;position:absolute;right:0;top:0;border-radius:0 0 2px 0;transition:all ease .2s;-webkit-transition:all ease .2s;background:rgba(255,255,255,0.32) url(//static.networkad.net/networkad-logo-icon.svg) center center no-repeat\'></a>'
					+ '<a class="closebtn" onclick="networkAdJ(\'#networkAdbannersinterstitial8353128\').slideUp(\'slow\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:fixed;left:0;top:0;line-height: 20px;height: 40px;width: 40px;text-align: center;border-radius: 50%;margin: 10px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;z-index:5;border:2px solid #ffffff;background-size:cover;"></a>'
					
					+ passbackad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined" && top.window.location.href.indexOf("_ref=infinit") != -1) {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}}, 300);</script>';
			}
			else if(104 == 21) {
				var data = "<div id='pass_div8353128' class='sticky-bottom-banner-container' style='position: fixed; left: 0; bottom: 0; width: 100%; height: 50px; text-align:center; z-index: 2; background-color: white; display:none;'>"
					+ passbackad
					+ "<div style='position:relative;display:block;margin:0 auto;'></div>"
					+ "</div>"
					+ '<script type="text/javascript">'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);'
					+ 'top.document.body.style.marginBottom = "50px";var runonce8353128 = 0, closeClick8353128 = 0; networkAdJ(window).scroll(function () {if(closeClick8353128 == 0) { if(runonce8353128 == 0 && networkAdJ(window).scrollTop() > 20) { networkAdJ("#pass_div8353128").slideDown("slow"); runonce8353128 = 1; } else if(runonce8353128 == 1 && networkAdJ(window).scrollTop() < 20) {networkAdJ("#pass_div8353128").slideUp("slow"); runonce8353128 = 0;}}});'
					+ '}}, 300)'
					+ '</script>';
			}
			else if(104 == 1) {
				var data = "<div id='pass_div8353128' style='position:relative;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);display:none">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="document.getElementById(\'networkAdbannersinterstitial8353128\').style.display =\'none\';document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ passbackad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 20) {
				var data = "<div id='pass_div8353128' style='position:relative;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);display:none">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="document.getElementById(\'networkAdbannersinterstitial8353128\').style.display =\'none\';document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));window.top.document.location=$(\'#interstitial-close-link-source\').attr(\'data-link\');" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ passbackad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 101) {
				var data = "<div id='pass_div8353128' style='position:relative;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);display:none">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="networkAds.async8353128.goVignetteHref();" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ passbackad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 102) {
				var data = "<div id='pass_div8353128' style='position:relative;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="networkAdbannersinterstitial8353128" id="networkAdbannersinterstitial8353128" style="width: 100%;height: 100%;position: fixed;bottom: 0;left: 0;text-align: center;background:rgba(0,0,0,0.75);display:none">'
					+ '<div id="counterdiv8353128" style="display:none;background-color:white;position: absolute;top: 0;left:0;z-index:9999999;width:100%;text-align:right;"><span style="padding-left: 10px;line-height: 26px;font-size: 12px; float: right;">ReklamÄ±n kapanmasÄ± iÃ§in son <span id="counter8353128">10</span> saniye!</span></div>'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="display:inline-block;margin-top:50px;position: relative;width: 800px;height: 600px;box-sizing:border-box;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size: 24px;color: #000000;">'
					+ '<a class="closebtn" onclick="document.getElementById(\'networkAdbannersinterstitial8353128\').style.display =\'none\';document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));" href="javascript:;" style="position: absolute; right: -2px; top: -22px; display: block; line-height: 20px; height: 20px; width: 70px; text-align: center; border-radius: 0px 2px 2px 0px; font-size: 14px; font-weight: bold; text-decoration: none; color: rgb(255, 255, 255); box-sizing: border-box; background-color:red">X Kapat</a>'

					+ passbackad
					
					+ '</div></div></div>'
					
					+ '<script type="text/javascript">'
					+ 'var intCounter8353128 = 10; function countDown8353128() {if(intCounter8353128 > 0) {document.getElementById("counter8353128").innerHTML = --intCounter8353128;setTimeout("countDown8353128()", 1000);} else {document.getElementById("networkAdbannersinterstitial8353128").style.visibility = "hidden";document.getElementById(\'networkAdbannersinterstitial8353128\').parentNode.removeChild(document.getElementById(\'networkAdbannersinterstitial8353128\'));}}'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined" && top.window.location.href.indexOf("_ref=infinit") != -1) {clearInterval(adhTimer8353128);networkAdJ("#networkAdbannersinterstitial8353128").slideDown("slow");}'
					+ 'if("0" == "1") { networkAdJ("#counterdiv8353128").css({"display" : "inline-block"}); setTimeout("countDown8353128()", 1000); }'
					+ '}, 300);</script>';
			}
			else if(104 == 6) {
				var data = "<div id='pass_div8353128' style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div id="networkAdbannersdiv8353128"></div><div id="networkAdbanners8353128" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 50px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;">'
					+ '<a class="closebtn8353128" onclick="networkAdJ(\'#networkAdbanners8353128\').slideUp(\'slow\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:absolute;left:0;top:0;line-height: 20px;height: 20px;width: 20px;text-align: center;border-radius: 50%;margin: 15px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;"></a>'

					+ passbackad

					+ '</div></div>'
					+ '<script type="text/javascript">var runonce8353128 = 0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); networkAdJ(window).scroll(function () {if(runonce8353128 == 0 && (networkAdJ("#networkAdbannersdiv8353128").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2))) { networkAdJ("#networkAdbanners8353128").slideDown("slow"); runonce8353128 = 1; }});}}, 300);</script>';
			}
			else if(104 == 104) {
				if(passbackad.indexOf('timeoutclosediv') != -1) {
					var data = "<div id='pass_div8353128' style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div id="networkAdbannersdiv8353128"></div><div id="networkAdbanners8353128" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 1px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;">'

					+ passbackad

					+ '</div></div>'
					+ '<script type="text/javascript">var runonce8353128 = 0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); networkAdJ(window).scroll(function () {if(runonce8353128 == 0 && (networkAdJ("#networkAdbannersdiv8353128").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 200 )) { networkAdJ("#networkAdbanners8353128").slideDown("slow"); networkAdJ(".playBtn").click(); runonce8353128 = 1; }});}}, 300);</script>';
				}
				else {
					var data =  passbackad;
				}
			}
			else if(104 == 18) {
				var data = "<div id='pass_div8353128' style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div id="networkAdbannersdiv8353128"></div><div id="networkAdbanners8353128" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 50px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;">'
					+ '<a class="closebtn8353128" onclick="networkAdJ(\'#networkAdbanners8353128\').slideUp(\'slow\');" href="javascript:;" onmouseover="this.style.backgroundColor=\'#f01626\';" onmouseout="this.style.backgroundColor=\'#d2d2d2\';" style="display: block;position:absolute;left:0;top:0;line-height: 20px;height: 20px;width: 20px;text-align: center;border-radius: 50%;margin: 15px;font-size: 14px;font-weight: bold;text-decoration: none;color: #ffffff;box-sizing: border-box;background: #d2d2d2 url(//static.networkad.net/close-icon.svg) center center no-repeat;"></a>'

					+ passbackad

					+ '</div></div>'
					+ '<script type="text/javascript">var runonce8353128 = 0; adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128); '
					+ 'document.addEventListener("scroll", function (event) {if(runonce8353128 == 0 && (networkAdJ("#networkAdbannersdiv8353128").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 200 )) { networkAdJ("#networkAdbanners8353128").slideDown("slow"); runonce8353128 = 1; }}, true);'
					+ '}}, 300);</script>';
			}
			else if(104 == 70) {
				var data = "<div id='pass_div8353128' style='position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="naParallax8353128" style="width: 100%; height: 100%; position: relative; margin-top: 17px; margin-bottom: 5px; margin-left: auto; margin-right: auto; box-sizing:border-box; border:1px solid #f0f0f0;"><div class="naNotice8353128" style="position: absolute;right: 0;z-index:2;bottom: 0;font-size: 11px;color: white;background: black;padding: 5px;opacity: .5;">Advertorial</div><div class="naContainer8353128" style="width: inherit; height: 100%; position: absolute; top: 0; left: 0; clip: rect(auto,auto,auto,auto);"><div class="naContent8353128" style="width: inherit; height: 100%; position: fixed; top: 0px; -moz-transform: translateZ(0); -webkit-transform: translateZ(0); -ms-transform: translateZ(0); -o-transform: translateZ(0); transform: translateZ(0); margin: 0 auto;">'
					+ '<div id="networkAdbanners8353128" class="networkAdbanners" style="position:absolute;left:0;width: 100%;bottom:0px;box-sizing:border-box;min-width: 240px;max-width: 970px;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmax;color: #000000;text-align:center;z-index:10000;overflow:hidden;">'

					+ passbackad

					+ '</div>'
					+ '</div></div></div>'
					+ '<script type="text/javascript">'
					+ 'adhTimer8353128 = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer8353128);'
					+ 'networkAdJ(".naParallax8353128").parent().parent().css("display", "block"); networkAdJ(".naParallax8353128 .networkAdbanners").css("width", networkAdJ(".naParallax8353128").css("width"));networkAdJ(".naParallax8353128").css("height", networkAdJ(".naParallax8353128").parent().parent().css("height"));'
					+ 'networkAdJ(window).scroll(function() {'
					+ 'var parallaxTop8353128 = networkAdJ(".naParallax8353128").offset().top; var parallaxHeight8353128 = networkAdJ(".naParallax8353128").height(); var screenHeight8353128 = networkAdJ(window).height(); var imageHeight8353128 = networkAdJ(".naParallax8353128 .networkAdbanners").height();'
					+ 'if(networkAdJ(window).scrollTop() > parallaxTop8353128 && networkAdJ(window).scrollTop() <= parallaxTop8353128 + parallaxHeight8353128) {var bottom8353128 = screenHeight8353128 - imageHeight8353128; networkAdJ(".naParallax8353128 .networkAdbanners").css("bottom", bottom8353128 + "px");}'
					+ 'if(networkAdJ(window).scrollTop() < parallaxTop8353128 + parallaxHeight8353128 - screenHeight8353128 && networkAdJ(window).scrollTop() >= parallaxTop8353128 - screenHeight8353128) { var bottom8353128 = 0; networkAdJ(".naParallax8353128 .networkAdbanners").css("bottom", bottom8353128 + "px");}'
					+ 'if(networkAdJ(window).scrollTop() >= parallaxTop8353128 + parallaxHeight8353128 - screenHeight8353128 && networkAdJ(window).scrollTop() <= parallaxTop8353128) { var bottom8353128 = (screenHeight8353128 - imageHeight8353128) * ((networkAdJ(window).scrollTop() + screenHeight8353128 - parallaxHeight8353128 - parallaxTop8353128) / (screenHeight8353128 - parallaxHeight8353128)); networkAdJ(".naParallax8353128 .networkAdbanners").css("bottom", bottom8353128 + "px");}});'
					+ '}}, 300)'
					+ '<'+'/script>';
			}
			else if(104 == 14) {
				var data = "<div id='pass_div8353128' style='position:relative;display:inline-block;text-align:left;width:320;height:480;z-index:1500;overflow:visible;display:none;'>"
					+ '<div class="naNotice8353128" style="position: absolute;right: 0;z-index:2;bottom: 0;font-size: 11px;color: white;background: black;padding: 5px;opacity: .5;">Advertorial</div>'
					
					+ passbackad
					+ '</div>';
			}
			else if(104 == 50) {
				var data = "<div id='pass_div8353128' style='position:relative;display:inline-block;text-align:left;width:970;height:250;z-index:1500;overflow:visible;display:none;'>"
					+ passbackad
					+ '</div>';
			}
			else if(104 == 48) {
				var data = "<div id='pass_div8353128' style='position:relative;display:inline-block;text-align:left;width:320;height:100;z-index:1500;overflow:visible;display:none;'>"
					+ passbackad
					+ '</div>';
			}
			else if(104 == 43) {
				var data = "<div id='pass_div8353128' style='position:relative;display:inline-block;text-align:left;width:300;height:600;z-index:1500;overflow:visible;display:none;'>"
					+ passbackad
					+ '</div>';
			}
			else if(104 == 42) {
				var data = "<div id='pass_div8353128' style='position:relative;display:inline-block;text-align:left;width:300;height:250;z-index:1500;overflow:visible;display:none;'>"
					+ passbackad
					+ '</div>';
			}
			
			if(this.checkIframe()) {
				this.topOutScript('//app.networkad.net/jquery.js');
			}
			else {
				this.outScript('//app.networkad.net/jquery.js');
			}
			
			if(this.checkIframe()) {
				if(571 == 187)
					data += "<style type='text/css'>.ad-mobilewebinterstitial {overflow:visible !important}</style>";
				
				this.topCreateDiv(data);
			}
			else {
				this.createDiv(data);
			}

			function receiveMessageNetworkad(event) {
				if(event.origin !== "https://static.networkad.net" && event.origin !== "https://app.networkad.net")
					return;

				if(event.data.split(';')[0] == 'closeDivAd') {
					clearTimeout(networkAds.async8353128.passShowAds['x' + event.data.split(';')[1]]);
					if(document.getElementById("networkAdbannersinterstitial8353128") != undefined) {
						document.getElementById("networkAdbannersinterstitial8353128").style.display = 'none';
					}

					if(document.getElementById("networkAdbannersinterstitial8353128") != undefined) {
						document.getElementById("networkAdbannersinterstitial8353128").style.display = 'none';
					}
					
					try {
						clearTimeout(top.networkAds.async8353128.passShowAds['x' + event.data.split(';')[1]]);
						if(top.document.getElementById("networkAdbannersinterstitial8353128") != undefined) {
							top.document.getElementById("networkAdbannersinterstitial8353128").style.display = 'none';
						}
					}
					catch(e) {
						// 
					}
					
					var cto_pcode2 = '';
					if(cto_pcode2 != '') {
						if(document.getElementById("div_571") != undefined) {
							if(document.getElementById("div_571").getElementsByClassName("adsbygoogle").length > 0) {
								document.getElementById("div_571").getElementsByClassName("adsbygoogle")[0].style.display = 'none';
							}

							var div = document.createElement("div");
							div.innerHTML = cto_pcode2; 
							document.getElementById("div_571").appendChild(div)
						}
						else if(top.document.getElementById("div_571") != undefined) {
							if(top.document.getElementById("div_571").getElementsByClassName("adsbygoogle").length > 0) {
								top.document.getElementById("div_571").getElementsByClassName("adsbygoogle")[0].style.display = 'none';
							}
							
							var div = document.createElement("div");
							div.innerHTML = cto_pcode2; 
							top.document.getElementById("div_571").appendChild(div)
						}

						b = cto_pcode2.match(/<script.+?src=".+?".+?async.+?<\/script>/g);
						for(var i in b) {
							c = cto_pcode2.match(/src=".+?"/g);
							for(var j in c) {
								if (typeof c[j] === 'string' || c[j] instanceof String)
									networkAds.async8353128.outScript(c[j].replace('src=','').replace(/"/g, ''));
							}
						}

						b = cto_pcode2.match(/<script type="text\/javascript">.+?<\/script>/g);
						for(var i in b) {
							if(typeof b[i] === 'string' || b[i] instanceof String) {
								networkAds.async8353128.inScript(b[i].replace('<script type="text\/javascript">', '').replace('<\/script>', ''));
							}
						}
					}
					else if('104' == '101' || '104' == '100') {
						networkAds.async8353128.goVignetteHref();
					}
					else if('104' == '6' || '104' == '10' || '104' == '18' || '104' == '104' || '104' == '21') {
						if(document.getElementById("div_571") != undefined) {
							document.getElementById("div_571").style.display = 'none';
						}

						if(top.document.getElementById("div_571") != undefined) {
							top.document.getElementById("div_571").style.display = 'none';	
						}
					}
				}
			}

			top.window.addEventListener("message", receiveMessageNetworkad, false);
			
			//networkAds.async8353128.passShowAds = passShowAds || {};
			if('104' != '101' && '104' != '100') {
				networkAds.async8353128.showPassAdPrepare();
			}else{
				networkAds.async8353128.passbackFlag=1;
			}
		},
		showPassAdPrepare: function() {
			networkAds.async8353128.passShowAds['x8353128'] = setTimeout(function() {
				// networkAds.async8353128.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4019&rnd=8353128');
				if (top.document.getElementById("pass_div8353128") != null)
					top.document.getElementById("pass_div8353128").style.display = 'block';
			}, 2000);
		},
		showAd: function() {
			if('{jsbasedfrequency}' == 1) this.updateFrequencyCookie(0);
			
			if(this.cookieMatch == 0)
				this.updateHbidCookie(this.uuid, -1, 0);
			
			if(this.cookieMatch == 1) {
				// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4016&rnd=8353128', '');
			}
			
			var rtHeader = '<div id="networkAdbannersdiv{retargeting_id}"></div><div id="networkAdbanners{retargeting_id}" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 50px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;"><a href=\'{crtlogourl}\' target=\'_blank\' style=\'position:absolute;right:1px;top:1px;z-index:1000\'><img src=\'{crtlogoimg}\'></a><div class="logo{retargeting_id}" onclick="window.open(\'{firm_link}\');" style="position: absolute;right: 25%;top: 0;width: 50%;height: 47px;padding: 1px;background: #ffffff url({firm_logo}) center center no-repeat;text-align: center;background-size: contain;z-index: 2;"></div>',
				rtFooter = '<div style"position:relative; text-align:center; width:100%"><span onmouseover="this.style.opacity=\'1\';" onmouseout="this.style.opacity=\'.8\';" style="display: inline-block; padding: 5px; opacity: 0.8;"><a href="https://networkad.net" style=" font-size: 1vmin; text-decoration: none;"><span style="margin-right: 5px;line-height: 20px;float: left;text-decoration: none; color: black;">ads by </span><img src="//www.networkad.net/ad-templates/images/logo.png" style="float: left; height: 20px;"></a></span></div></div><script type="text/javascript">adhTimer{retargeting_id} = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer{retargeting_id});var runonce{retargeting_id} = 0; networkAdJ(window).scroll(function () {if(runonce{retargeting_id} == 0 && (networkAdJ("#networkAdbannersdiv{retargeting_id}").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 40)) { networkAdJ("#bannerspan").css("display","inline-block"); networkAdJ("#networkAdbanners{retargeting_id}").slideDown("slow"); runonce{retargeting_id} = 1; }});interval{retargeting_id} = setInterval(transition{retargeting_id}, 2000);intervalS{retargeting_id} = setInterval(function(){clearInterval(interval{retargeting_id})}, 27000);product_count{retargeting_id}={product_count};function adjust{retargeting_id}(){networkAdJ(".networkAdbanner{retargeting_id}").css({"border-color" : "#f0f0f0"}); networkAdJ(".networkAdbanner{retargeting_id} .details{retargeting_id}").css({"bottom" : "-100%"});}networkAdJ( ".networkAdbanner{retargeting_id}" ).mouseover(function() { adjust{retargeting_id}(); networkAdJ(this).css({"border-color" : "#f01626"}); networkAdJ(this).find(".details{retargeting_id}").css({"bottom" : "0px"}); clearInterval(interval{retargeting_id}); });networkAdJ( ".networkAdbanner{retargeting_id}" ).mouseout(function() {networkAdJ(this).css({"border-color" : "#f0f0f0"}); networkAdJ(this).find(".details{retargeting_id}").css({"bottom" : "-100%"});});i{retargeting_id}=0; function transition{retargeting_id}() { adjust{retargeting_id}(); networkAdJ(".networkAdbanner{retargeting_id}:eq("+i{retargeting_id}+")").css({"border-color" : "#f01626"});networkAdJ(".networkAdbanner{retargeting_id}:eq("+i{retargeting_id}+")").find(".details{retargeting_id}").css({"bottom" : "0px"}); if(i{retargeting_id}==(product_count{retargeting_id}-1)) {i{retargeting_id}=0;} else {i{retargeting_id}++;} }}}, 300)</' + 'script>',
				rtLoop = '<div class="networkAdbanner{retargeting_id}" onclick="window.open(\'{product_url}\');" style="position: relative;display:inline-block;width: 32%;box-sizing:border-box;border:1px solid #f0f0f0;padding-bottom: 32%;margin: .1%;overflow: hidden;cursor: pointer;"><div class="image{retargeting_id}" style="position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: url({product_image}) center center no-repeat;background-size: contain;"></div><div class="details{retargeting_id}" style="position: absolute;left: 0;bottom: -100%;width: 100%;height: 100%;background: rgba(255,255,255,.9);box-sizing: border-box;padding: 1vmin;transition: all ease-in-out .3s;text-align: center;"><div class="text{retargeting_id}" style="margin-bottom: 5px;overflow: hidden;font-size: 3vmin;line-height: initial;"> {product_title}</div><div class="discount{retargeting_id}" style="position: absolute;left: 0;bottom: 0;font-size: 3vmin;background-color: #f01626;color: #ffffff;text-align: center;padding: 2px;{product_discount_status}"> <span style="display: block;font-weight: bold;">{product_discount_rate}</span>indirim </div><div class="oldprice{retargeting_id}" style="font-weight: bold;color: #7e7e7e;text-decoration: line-through;font-size: 3vmin;{product_discount_status}"> {product_p_price} </div><div class="price{retargeting_id}" style="font-weight: bold;color: #f01626;font-size: 3vmin;line-height: initial;"> {product_price} </div></div></div>',
				rtLoopCount = '3',
				rtId = '8353128';
				
			if(this.divAds[0].products.length < rtLoopCount) {
				rtLoopCount = this.divAds[0].products.length;
			}
			
			var productList = [];
			var productOtherList = [];
			var productIds = [];
			var productAdvertiser = [];
			var productImpPixels = [];
			
			if(this.divDebug == 1) console.log('Show Ad');
			
			if(1 == 2 && 104 == 12) {
				var runOnce = 0;
				for(var i in this.divAds) {
					if(this.divDebug == 1) console.log(this.divAds[i].advertiser.domain + ' ' + this.divAds[i].zoneid);
					
					var k = 0;
					for(var j in this.divAds[i].products) {
						if(k < (rtLoopCount / this.divAds.length)) {
							if(this.inArray(this.divAds[i].products[j].image.url, productIds)) continue;
							
							k++;
							productList.push({
								'advertiser_domain': this.divAds[i].advertiser.domain,
								'advertiser_logo': this.divAds[i].advertiser.logo.url,
								'advertiser_click': this.divAds[i].advertiser.logo_click_url,
								'product_title': this.divAds[i].products[j].title,
								'product_image': this.divAds[i].products[j].image.url,
								'product_description': this.divAds[i].products[j].description,
								'product_price': this.divAds[i].products[j].price,
								'product_url': this.divAds[i].products[j].click_url,
								'runcode': this.divAds[i].runcode,
								'crticon': this.divAds[i].privacy.optout_image_url,
								'crturl': this.divAds[i].privacy.optout_click_url,
							});
							
							productIds.push(this.divAds[i].products[j].image.url);
						}
						else {
							if(this.inArray(this.divAds[i].products[j].image.url, productIds)) continue;
							
							productOtherList.push({
								'advertiser_domain': this.divAds[i].advertiser.domain,
								'advertiser_logo': this.divAds[i].advertiser.logo.url,
								'advertiser_click': this.divAds[i].advertiser.logo_click_url,
								'product_title': this.divAds[i].products[j].title,
								'product_image': this.divAds[i].products[j].image.url,
								'product_description': this.divAds[i].products[j].description,
								'product_price': this.divAds[i].products[j].price,
								'product_url': this.divAds[i].products[j].click_url,
								'runcode': this.divAds[i].runcode,
								'crticon': this.divAds[i].privacy.optout_image_url,
								'crturl': this.divAds[i].privacy.optout_click_url,
							});
							
							productIds.push(this.divAds[i].products[j].image.url);
						}
					}
						
					for(var m in this.divAds[i].impression_pixels) {
						if(!this.inArray(this.divAds[i].impression_pixels[m].url, productImpPixels))
							if(this.divAds[i].impression_pixels[m].url)
								productImpPixels.push(this.divAds[i].impression_pixels[m].url.replace('{uu1id}', '1698039105').replace('{uu2id}', 'cc963876a4e5ae641a6095ec551aba6d').replace('{urand}', '8353128'));
					}
					
					var tst = 0;
					if(runOnce == 0) {
						tst = 0;
						runOnce = 1;
					}
					else {
						tst = 1
					}
					if(104==100 || 104==101){
						this.outImpLink='//app.networkad.net/netapiimp?inventory=571&v1&affid=' + this.divAds[0].runcode + '&zoneid=' + this.divAds[i].zoneid + '&tst=' + tst + '&u1id=1698039105&u2id=cc963876a4e5ae641a6095ec551aba6d&rnd=8353128&dom=' + this.divAds[i].advertiser.domain;
					}else{
						this.outImp('//app.networkad.net/netapiimp?inventory=571&v1&affid=' + this.divAds[0].runcode + '&zoneid=' + this.divAds[i].zoneid + '&tst=' + tst + '&u1id=1698039105&u2id=cc963876a4e5ae641a6095ec551aba6d&rnd=8353128&dom=' + this.divAds[i].advertiser.domain);
					}
				}
				
				productList = this.shuffleArray(productList);
				productOtherList = this.shuffleArray(productOtherList);
				
				var products = productList.concat(productOtherList);
				products = this.addNews(products);
				var addata = rtHeader;
				for(var i = 0; i < rtLoopCount; i++) {
					addata += rtLoop
						.replace('{product_link}', "//app.networkad.net/netapiclick?inventory=571&affid=" + products[i].runcode + "&rnd=8353128&forwardurl=" + encodeURIComponent(products[i].product_url))
						.replace('{product_image}', products[i].product_image)
						.replace('{product_price}', products[i].product_price)
						.replace('{product_title}', products[i].product_title)
						.replace('{product_description}', products[i].product_description)
				}
				addata += rtFooter;
				
				for(var i in productImpPixels) {addata += "<img src=\'" + productImpPixels[i] + "\' width=\'1\' height=\'1\' style=\'display:none;\'>";}
			}
			else if(104 == 13) {
				
				var addata = '';
			}
			else {
				if(this.checkIframe()) {
					this.topOutScript('//app.networkad.net/jquery.js');
				}
				else {
					this.outScript('//app.networkad.net/jquery.js');
				}
				
				var templateRetargeting = rtHeader
					.replace(/{firm_link}/g, this.divAds[0].advertiser.logo_click_url)
					.replace(/{header_title}/g, "")
					.replace(/{header_message}/g, "")
					.replace(/{header_author}/g, "")
					.replace(/{crtlogourl}/g, this.divAds[0].privacy.optout_click_url)
					.replace(/{crtlogoimg}/g, this.divAds[0].privacy.optout_image_url)
					.replace(/{firm_logo}/g, "//app.networkad.net/netapilogo?inventory=571&site=" + this.divAds[0].advertiser.domain + "&sitelogo=" + encodeURIComponent(this.divAds[0].advertiser.logo.url));
					
				for(var i = 0; i < rtLoopCount; i++) {
					templateRetargeting += rtLoop
						.replace(/{product_url}/g, "//app.networkad.net/netapiclick?inventory=571&affid=" + this.divAds[0].runcode + "&rnd=8353128&forwardurl=" + encodeURIComponent(this.divAds[0].products[i].click_url))
						.replace(/{product_image}/g, this.divAds[0].products[i].image.url)
						.replace(/{product_title}/g, this.divAds[0].products[i].title)
						.replace(/{product_p_price}/g, "")
						.replace(/{product_discount_rate}/g, "")
						.replace(/{product_discount_status}/g, "display:none;")
						.replace(/{product_price}/g, this.divAds[0].products[i].price)
						.replace(/{product_description}/g, this.divAds[0].products[i].description)
						.replace(/{product_site}/g, this.divAds[0].advertiser.domain)
						.replace(/{firm_link}/g, this.divAds[0].advertiser.logo_click_url)
						.replace(/{firm_logo}/g, "//app.networkad.net/netapilogo?inventory=571&site=" + this.divAds[0].advertiser.domain + "&sitelogo=" + encodeURIComponent(this.divAds[0].advertiser.logo.url));
				} 
				
				templateRetargeting += rtFooter
					.replace("{product_count}", rtLoopCount)
					.replace(/{firm_link}/g, this.divAds[0].advertiser.logo_click_url)
					.replace(/{firm_logo}/g, "//app.networkad.net/netapilogo?inventory=571&site=" + this.divAds[0].advertiser.domain + "&sitelogo=" + encodeURIComponent(this.divAds[0].advertiser.logo.url));
					
				templateRetargeting = templateRetargeting.replace(/{retargeting_id}/g, rtId);
				
				if(104 != 12 && 104 != 21) {
					var addata = "<div style=\'position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;\'>";
				}
				else {
					var addata = '';
				}

				addata += templateRetargeting;
				
				for(var i in this.divAds[0].impression_pixels) {if(this.divAds[0].impression_pixels[i].url) {addata += "<img src=\'" + this.divAds[0].impression_pixels[i].url.replace('{uu1id}', '1698039105').replace('{uu2id}', 'cc963876a4e5ae641a6095ec551aba6d').replace('{urand}', '8353128') + "\' width=\'1\' height=\'1\' style=\'display:none;\'>";}}
				
				addata += "<script type=\'text/javascript\'>networkAdJ(\'.networkAdbanners > .logo\').css(\'background-size\', \'initial\');networkAdJ(\'.text3" + rtId + "\').css(\'width\', \'100%\').css(\'float\', \'center\');</" + "script>";
				
				if(104 != 12 && 104 != 21) {
					addata += "</div>";
				}
				else if(104 == 21) {
					addata += "";
				}
				else {
					addata += "<a href=\'" + this.divAds[0].privacy.optout_click_url + "\' target=\'_blank\' style=\'position:relative;float:right;top:-70px;\'><img src=\'" + this.divAds[0].privacy.optout_image_url + "\'></a>";
				}
				
				if(104==100 || 104==101){
					this.outImpLink='//app.networkad.net/netapiimp?inventory=571&v1&affid=' + this.divAds[0].runcode + '&zoneid=' + this.divAds[0].zoneid + '&u1id=1698039105&u2id=cc963876a4e5ae641a6095ec551aba6d&rnd=8353128&dom=' + this.divAds[0].advertiser.domain;
				}
				else{
					this.outImp('//app.networkad.net/netapiimp?inventory=571&v1&affid=' + this.divAds[0].runcode + '&zoneid=' + this.divAds[0].zoneid + '&u1id=1698039105&u2id=cc963876a4e5ae641a6095ec551aba6d&rnd=8353128&dom=' + this.divAds[0].advertiser.domain);
				}
			}
			
			if(this.divDebug == 1) console.log(addata);
			
			if(this.checkIframe()) {
				if(571 == 109 || 571 == 313)
					addata += "<style type='text/css'>.ad-mobilewebinterstitial {position:inherit} .ad-mobilewebinterstitial iframe {display:none}</style>";
				
				if(571 == 187)
					addata += "<style type='text/css'>.ad-mobilewebinterstitial {overflow:visible !important}</style>";
				
				this.topCreateDiv(addata);
			}
			else {
				this.createDiv(addata);
			}
		},
		
		showNativeAd: function() {
			if('{jsbasedfrequency}' == 1) this.updateFrequencyCookie(0);
			
			if(this.cookieMatch == 0)
				this.updateHbidCookie(this.uuid, -1, 0);
			
			if(this.cookieMatch == 1) {
				// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4040&rnd=8353128', '');
			}
			
			var rtHeader = '<div id="networkAdbannersdiv{retargeting_id}"></div><div id="networkAdbanners{retargeting_id}" class="networkAdbanners" style="position: relative;width: 100%;box-sizing:border-box;min-width: 240px;max-width: 970px;height: auto;padding: 50px 1px 1px 1px;border: 1px solid #f0f0f0;background: #ffffff;font-family: Arial, Helvetica, sans-serif;font-size:14px;font-size: 3vmin;color: #000000;overflow: hidden;text-align:center;display:none;"><a href=\'{crtlogourl}\' target=\'_blank\' style=\'position:absolute;right:1px;top:1px;z-index:1000\'><img src=\'{crtlogoimg}\'></a><div class="logo{retargeting_id}" onclick="window.open(\'{firm_link}\');" style="position: absolute;right: 25%;top: 0;width: 50%;height: 47px;padding: 1px;background: #ffffff url({firm_logo}) center center no-repeat;text-align: center;background-size: contain;z-index: 2;"></div>',
				rtFooter = '<div style"position:relative; text-align:center; width:100%"><span onmouseover="this.style.opacity=\'1\';" onmouseout="this.style.opacity=\'.8\';" style="display: inline-block; padding: 5px; opacity: 0.8;"><a href="https://networkad.net" style=" font-size: 1vmin; text-decoration: none;"><span style="margin-right: 5px;line-height: 20px;float: left;text-decoration: none; color: black;">ads by </span><img src="//www.networkad.net/ad-templates/images/logo.png" style="float: left; height: 20px;"></a></span></div></div><script type="text/javascript">adhTimer{retargeting_id} = setInterval(function(){if (typeof networkAdJ !== "undefined") {clearInterval(adhTimer{retargeting_id});var runonce{retargeting_id} = 0; networkAdJ(window).scroll(function () {if(runonce{retargeting_id} == 0 && (networkAdJ("#networkAdbannersdiv{retargeting_id}").offset().top < networkAdJ(window).scrollTop() + (networkAdJ(window).height() / 2) + 40)) { networkAdJ("#bannerspan").css("display","inline-block"); networkAdJ("#networkAdbanners{retargeting_id}").slideDown("slow"); runonce{retargeting_id} = 1; }});interval{retargeting_id} = setInterval(transition{retargeting_id}, 2000);intervalS{retargeting_id} = setInterval(function(){clearInterval(interval{retargeting_id})}, 27000);product_count{retargeting_id}={product_count};function adjust{retargeting_id}(){networkAdJ(".networkAdbanner{retargeting_id}").css({"border-color" : "#f0f0f0"}); networkAdJ(".networkAdbanner{retargeting_id} .details{retargeting_id}").css({"bottom" : "-100%"});}networkAdJ( ".networkAdbanner{retargeting_id}" ).mouseover(function() { adjust{retargeting_id}(); networkAdJ(this).css({"border-color" : "#f01626"}); networkAdJ(this).find(".details{retargeting_id}").css({"bottom" : "0px"}); clearInterval(interval{retargeting_id}); });networkAdJ( ".networkAdbanner{retargeting_id}" ).mouseout(function() {networkAdJ(this).css({"border-color" : "#f0f0f0"}); networkAdJ(this).find(".details{retargeting_id}").css({"bottom" : "-100%"});});i{retargeting_id}=0; function transition{retargeting_id}() { adjust{retargeting_id}(); networkAdJ(".networkAdbanner{retargeting_id}:eq("+i{retargeting_id}+")").css({"border-color" : "#f01626"});networkAdJ(".networkAdbanner{retargeting_id}:eq("+i{retargeting_id}+")").find(".details{retargeting_id}").css({"bottom" : "0px"}); if(i{retargeting_id}==(product_count{retargeting_id}-1)) {i{retargeting_id}=0;} else {i{retargeting_id}++;} }}}, 300)</' + 'script>',
				rtLoop = '<div class="networkAdbanner{retargeting_id}" onclick="window.open(\'{product_url}\');" style="position: relative;display:inline-block;width: 32%;box-sizing:border-box;border:1px solid #f0f0f0;padding-bottom: 32%;margin: .1%;overflow: hidden;cursor: pointer;"><div class="image{retargeting_id}" style="position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: url({product_image}) center center no-repeat;background-size: contain;"></div><div class="details{retargeting_id}" style="position: absolute;left: 0;bottom: -100%;width: 100%;height: 100%;background: rgba(255,255,255,.9);box-sizing: border-box;padding: 1vmin;transition: all ease-in-out .3s;text-align: center;"><div class="text{retargeting_id}" style="margin-bottom: 5px;overflow: hidden;font-size: 3vmin;line-height: initial;"> {product_title}</div><div class="discount{retargeting_id}" style="position: absolute;left: 0;bottom: 0;font-size: 3vmin;background-color: #f01626;color: #ffffff;text-align: center;padding: 2px;{product_discount_status}"> <span style="display: block;font-weight: bold;">{product_discount_rate}</span>indirim </div><div class="oldprice{retargeting_id}" style="font-weight: bold;color: #7e7e7e;text-decoration: line-through;font-size: 3vmin;{product_discount_status}"> {product_p_price} </div><div class="price{retargeting_id}" style="font-weight: bold;color: #f01626;font-size: 3vmin;line-height: initial;"> {product_price} </div></div></div>',
				rtLoopCount = '3',
				rtId = '8353128';
				
			if(this.divNativeAds[0].products.length < rtLoopCount) {
				rtLoopCount = this.divNativeAds[0].products.length;
			}
			
			var productList = [];
			var productOtherList = [];
			var productIds = [];
			var productAdvertiser = [];
			var productImpPixels = [];
			
			if(this.divDebug == 1) console.log('Show Native Ad');
			
			if(this.checkIframe()) {
				this.topOutScript('//app.networkad.net/jquery.js');
			}
			else {
				this.outScript('//app.networkad.net/jquery.js');
			}
			
			var templateRetargeting = rtHeader
				.replace(/{firm_link}/g, this.divNativeAds[0].advertiser.logo_click_url)
				.replace(/{header_title}/g, "{h_title}")
				.replace(/{header_message}/g, "{h_message}")
				.replace(/{header_author}/g, "{h_author}")
				.replace(/{crtlogourl}/g, this.divNativeAds[0].privacy.optout_click_url)
				.replace(/{crtlogoimg}/g, this.divNativeAds[0].privacy.optout_image_url)
				.replace(/{firm_logo}/g, this.divNativeAds[0].advertiser.logo.url);
				
			for(var i = 0; i < rtLoopCount; i++) {
				templateRetargeting += rtLoop
					.replace(/{product_url}/g, "//app.networkad.net/nativeapiclick?inventory=571&rnd=8353128&forwardurl=" + encodeURIComponent(this.divNativeAds[0].products[i].click_url))
					.replace(/{product_image}/g, this.divNativeAds[0].products[i].image.url)
					.replace(/{product_title}/g, this.divNativeAds[0].products[i].title)
					.replace(/{product_p_price}/g, "")
					.replace(/{product_discount_rate}/g, "")
					.replace(/{product_discount_status}/g, "display:none;")
					.replace(/{product_price}/g, this.divNativeAds[0].products[i].price)
					.replace(/{product_description}/g, this.divNativeAds[0].products[i].description)
					.replace(/{product_site}/g, this.divNativeAds[0].advertiser.domain)
					.replace(/{firm_logo}/g, this.divNativeAds[0].advertiser.logo.url);
			} 
			
			templateRetargeting += rtFooter
				.replace("{product_count}", rtLoopCount)
				.replace(/{firm_link}/g, this.divNativeAds[0].advertiser.logo_click_url)
				.replace(/{firm_logo}/g, this.divNativeAds[0].advertiser.logo.url);
				
			templateRetargeting = templateRetargeting.replace(/{retargeting_id}/g, rtId);
			var addata = "<div style=\'position:relative;display:inline-block;text-align:left;width:100%;z-index:1500;overflow:visible;\'>";addata += templateRetargeting;
			for(var i in this.divNativeAds[0].impression_pixels) {if(this.divNativeAds[0].impression_pixels[i].url) {addata += "<img src=\'" + this.divNativeAds[0].impression_pixels[i].url.replace('{uu1id}', '1698039105').replace('{uu2id}', 'cc963876a4e5ae641a6095ec551aba6d').replace('{urand}', '8353128') + "\' width=\'0\' height=\'0\'>";}}
			addata += "<script type=\'text/javascript\'>networkAdJ(\'.networkAdbanners > .logo\').css(\'background-size\', \'initial\');networkAdJ(\'.text3" + rtId + "\').css(\'width\', \'100%\').css(\'float\', \'center\');</" + "script></div>";
			
		
			this.outImp('//app.networkad.net/nativeapiimp?inventory=571&v1&zoneid=' + this.divNativeAds[0].advertiser.zoneid + '&u1id=1698039105&u2id=cc963876a4e5ae641a6095ec551aba6d&rnd=8353128&dom=' + this.divNativeAds[0].advertiser.domain);
			
			if(this.divDebug == 1) console.log(addata);
			
			if(this.checkIframe()) {
				if(571 == 109 || 571 == 313)
					addata += "<style type='text/css'>.ad-mobilewebinterstitial {position:inherit} .ad-mobilewebinterstitial iframe {display:none}</style>";
				
				if(571 == 187)
					addata += "<style type='text/css'>.ad-mobilewebinterstitial {overflow:visible !important}</style>";
				
				this.topCreateDiv(addata);
			}
			else {
				this.createDiv(addata);
			}
		},
		
		ruleWhatNext: function(data, codea1, codea2) {
			if(data.response_status != 0 && codea2 != '0') {
				this.dynamicScript(codea2, 'cto_callback_');
			}
			else if(571 >= 358 && 571 <= 369 && '' != '' && data.response_status != 0 && codea2 == '0') {
				this.cto_y_callback_441928();
			}
			else if(data.response_status == 0 && this.divAdShowBlocked == 1 && data.runcode.substr(0, 1) != 'n') {
				if(codea2 != '0') {
					this.dynamicScript(codea2, 'cto_callback_');
				}
				else {
					this.actionScript(data, codea1);
				}
			}
			else if('0' == '1') {
				this.googleScript('6664645219753064', '5378096164', 'N;', 'N;');
				
				clearTimeout(this.divTimeout);
			}
			else if(codea1 != '0') {
				this.actionScript(data, codea1);
			}
		},
		
		nativead_8353128: function(res){
			if(res && res.items && res.items[0]) {
			this.divNativeAds[0]=[];
			this.divNativeAds[0].products=[];
				for(var i in res.items){
					var nativeRSProduct=[];
					nativeRSProduct.image=[];
					nativeRSProduct.image.url=res.items[i].data.content.image;
					nativeRSProduct.title=res.items[i].data.content.title;
					nativeRSProduct.description=res.items[i].data.content.description;
					nativeRSProduct.price='';
					nativeRSProduct.click_url=res.items[i].data.action.url;
					
					//console.log(res.ping_pixels[0]);
					networkAds.async8353128.divNativeAds[0].products.push(nativeRSProduct);
				}
				this.divNativeAds[0].advertiser=[];
				this.divNativeAds[0].advertiser.domain = '';
				this.divNativeAds[0].advertiser.zoneid = '0';
				this.divNativeAds[0].advertiser.logo=[];
				this.divNativeAds[0].advertiser.logo_click_url = 'https://www.advizyon.com';
				this.divNativeAds[0].advertiser.logo.url = 'https://static.advizyon.com/logo.png';
				this.divNativeAds[0].runcode = '';
				this.divNativeAds[0].privacy=[];
				this.divNativeAds[0].privacy.optout_image_url = '';
				this.divNativeAds[0].privacy.optout_click_url = '';
				this.divNativeAds[0].impression_pixels=[];
				for(var ix in res.widget_impression_pixels){
					this.divNativeAds[0].impression_pixels[ix]=[];
					this.divNativeAds[0].impression_pixels[ix].url = res.widget_impression_pixels[ix];
				}
				
				this.doneScript();
				//
			}
		},
		
		cto_callback_0: function(data) {
			data.runcode = '0';
			
			this.ruleWhatNext(data, '0', '0');
		},
		
		cto_callback_0: function(data) {
			data.runcode = '0';
			
			this.ruleWhatNext(data, '0', '0');
		},
		
		cto_callback_0: function(data) {
			data.runcode = '0';
			
			this.ruleWhatNext(data, '0', '0');
		},
		
		cto_callback_0: function(data) {
			data.runcode = '0';
			
			this.ruleWhatNext(data, '0', '0');
		},

		cto_a_callback_0: function(data) {
			data.runcode = '0';
			this.divAllAds['z0'] = data;
		},
		
		cto_a_callback_0: function(data) {
			data.runcode = '0';
			this.divAllAds['z0'] = data;
		},
		
		cto_a_callback_0: function(data) {
			data.runcode = '0';
			this.divAllAds['z0'] = data;
		},
		
		cto_a_callback_0: function(data) {
			data.runcode = '0';
			this.divAllAds['z0'] = data;
		},
		
		cto_x_callback_441928: function(data) {
			if(data.response_status == 0) {
				var nguid = this.guid();
				
				if('746e3800-7165-11ee-ab9f-450f4f22bb45' != '')
					networkAds.async8353128.httpRequest('//app.networkad.net/netapipixel3?inventory=571&ixu=746e3800-7165-11ee-ab9f-450f4f22bb45&rnd=8353128&affid=441928&uuid=' + nguid, JSON.stringify(data));
			}
		},
		
		cto_x_callback_787581: function(data) {
			if(data.response_status == 0) {
				var nguid = this.guid();
				networkAds.async8353128.httpRequest('//app.networkad.net/netapipixel3?inventory=571&ixu=746e3800-7165-11ee-ab9f-450f4f22bb45&rnd=8353128&affid=787581&uuid=' + nguid, JSON.stringify(data));
			}
			else {
				this.dynamicScript('1197515', 'cto_x_callback_');
			}
		},

		cto_x_callback_1197515: function(data) {
			if(data.response_status == 0) {
				var nguid = this.guid();
				networkAds.async8353128.httpRequest('//app.networkad.net/netapipixel3?inventory=571&ixu=746e3800-7165-11ee-ab9f-450f4f22bb45&rnd=8353128&affid=1197515&uuid=' + nguid, JSON.stringify(data));
			}
			else {
				this.dynamicScript('787586', 'cto_x_callback_');
			}
		},

		cto_x_callback_787586: function(data) {
			if(data.response_status == 0) {
				var nguid = this.guid();
				networkAds.async8353128.httpRequest('//app.networkad.net/netapipixel3?inventory=571&ixu=746e3800-7165-11ee-ab9f-450f4f22bb45&rnd=8353128&affid=787586&uuid=' + nguid, JSON.stringify(data));
			}
			else {
				this.dynamicScript('787587', 'cto_x_callback_');
			}
		},

		cto_x_callback_787587: function(data) {
			if(data.response_status == 0) {
				var nguid = this.guid();
				networkAds.async8353128.httpRequest('//app.networkad.net/netapipixel3?inventory=571&ixu=746e3800-7165-11ee-ab9f-450f4f22bb45&rnd=8353128&affid=787586&uuid=' + nguid, JSON.stringify(data));
			}
		},

		cto_y_callback_441928: function() {
			this.outImp('//app.networkad.net/netcrstrimp?crstr=');
			this.httpRequest('//app.networkad.net/netapigetcrst?crst=', '', function(data) {
				try {
					networkAds.async8353128.actionScript(JSON.parse(data), '441928');
				}
				catch(e) {
					var tmp1 = eval('(' + data + ')');
					networkAds.async8353128.actionScript(tmp1, '441928');
				}
			});
		},		
		
		passback: function() {
			if('571' == '571' && this.getUrl().toString().split(".com")[1].length < 2) {
				return;
			}
			
			// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4006&rnd=8353128', '');
			
			if(this.divDebug == 1) console.log('Passback');
			
			if(typeof networkad_571 == 'function') {
				networkad_571('div_571');
			}
			else {
				var cto_pcode = '<div id="div_gart_72"></div><script type="text/javascript" src="https://app.gelirartisi.com/async.js?zid=72" async></script>';
				var cto_pcode3 = '';
				
				cto_pcode = cto_pcode.replace("{refurl}", this.getUrl());
				
				cto_pcode = cto_pcode.replace('{passdomainlink}', this.getUrl()).replace('{divid}', '8353128');

				var banned_page = 0;
				var page_url = this.getUrl();
				
				var banned_keywords = ['oradanburadan.web.tv', 'dizi', 'film', 'fragman', 'full-hd', 'seks', 'porno', 'cinsel', 'prezervatif','ceset'];
				
				if( '267'=='14' ){
					banned_keywords = ['oradanburadan.web.tv', 'full-hd', 'seks', 'porno', 'cinsel', 'prezervatif','ceset'];
				}
				
				for(var i in banned_keywords) {
					if(page_url.search(banned_keywords[i]) != -1)
						banned_page = 1;
				}
				
				if("289" == "436" && '2' == '2') {
					var adblockstatus = 1;
				}
				else {
					var adblockstatus = 0;
				}
				
				try {
					if(v_adblockchecker == 1)
						adblockstatus = 0;
				} catch(f) {}
				
				if(banned_page == 1 || adblockstatus == 1) {
					// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4121&rnd=8353128', '');
					console.log('adblocked nw');
					//
				}
				else if('0' == '1' && banned_page == 0) {
					if('571' == '571' || '571' == '667') {
						if(top.window.location.href.indexOf('entry') != -1 && cto_pcode3 != '') {
							cto_pcode = cto_pcode3;
						}
					}

					// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4122&rnd=8353128', '');
					this.showLocalPassbackAd(cto_pcode);
					
					b = cto_pcode.match(/<script.+?src=".+?".+?async.+?<\/script>/g);
					for(var i in b) {
						c = cto_pcode.match(/src=".+?"/g);
						for(var j in c) {
							if (typeof c[j] === 'string' || c[j] instanceof String) {
								if(this.checkIframe()) {
									this.topOutScript(c[j].replace('src=','').replace(/"/g, ''));
								}
								else {
									this.outScript(c[j].replace('src=','').replace(/"/g, ''));
								}
							}
						}
					}
				}
				else {
					// this.outImp('//app.networkad.net/netapierror?inventory=571&errorid=4123&rnd=8353128', '');

					document.getElementById('div_571').innerHTML = cto_pcode;
					
					b = cto_pcode.match(/<script.+?src=".+?".+?async.+?<\/script>/g);
					for(var i in b) {
						c = cto_pcode.match(/src=".+?"/g);
						for(var j in c) {
							if (typeof c[j] === 'string' || c[j] instanceof String)
								this.outScript(c[j].replace('src=','').replace(/"/g, ''));
						}
					}
					
					b = cto_pcode.match(/<script type="text\/javascript">.+?<\/script>/g);
					for(var i in b) {
						if(typeof b[i] === 'string')
							this.inScript(b[i].replace('<script type="text\/javascript">', '').replace('<\/script>', ''));
					}
					
					b = cto_pcode.match(/<script>.+?<\/script>/g);
					for(var i in b) {
						if(typeof b[i] === 'string')
							this.inScript(b[i].replace('<script type="text\/javascript">', '').replace('<\/script>', ''));
					}

					if(104 == 19 || 104 == 20) {
						window.top.document.location = window.top.document.getElementById("interstitial-close-link-source").getAttribute("data-link");
					}
				}
			}
		},
	};
	
	/* head kÄ±smÄ±nda olma durumunda */
	
	if('0' == '1') {
		function networkAdsReady() {
			if(document.body == null) {
				setTimeout(networkAdsReady, 500);
				return;
			}
			networkAds.async8353128.init();
		}
		
		networkAdsReady();
	}
	else {
		networkAds.async8353128.init();
	}
}
catch(e) {
	try {
		var t = Boolean(navigator.appVersion.match(/msie/i)) ? new Image : document.createElement('img'); t.width = 1; t.height = 1; t.style.display = 'none'; 
		t.src = '//app.networkad.net/netapierror?inventory=571&errorid=4007&error=re-' + e + '&rnd=8353128';
	}
	catch(f) {
		
	}
}
