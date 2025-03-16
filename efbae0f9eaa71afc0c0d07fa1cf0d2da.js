var width = window.innerWidth || document.documentElement.clientWidth;
			adKey = "Moneycontrol/MC_HP/MC_HP_Presite_Interstitial_1280";
			if (width >= 768 && adKey.indexOf("Moneycontrol") != -1 && adKey.indexOf("Moneycontrol_Mobile_WAP") < 0) {

				function setcookieDays( c_name, value, expiredays ) {
					var exdate = new Date();
					exdate.setDate(exdate.getDate()+expiredays);
					document.cookie=c_name+ "=" +escape(value)+
					((expiredays==null) ? "" : ";expires="+exdate); // ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
				}

				function setcookieHours( name, value, hours ) {
					var date = new Date();
					date.setHours(date.getHours()+(hours));
					// var expires = "; expires="+date.toGMTString();
					var expires = "; expires="+date;
					document.cookie = name+"="+value+expires+"; path=/";
				}

				function setcookieMinutes( name, value, minutes ) {
					var date = new Date();
					date.setMinutes(date.getMinutes()+(minutes));
					var expires = "; expires="+date; // var expires = "; expires="+date.toGMTString();
					document.cookie = name+"="+value+expires+"; path=/";
				}

				function setcookieSeconds( name, value, seconds ) {
					var date = new Date();
					date.setSeconds(date.getSeconds()+(seconds));
					var expires = "; expires="+date; // var expires = "; expires="+date.toGMTString();
					document.cookie = name+"="+value+expires+"; path=/";
				}

				function getcookieNov11( cookiename ) {
					var cookiestring = document.cookie;
					var i = 0;
					var index1 = cookiestring.indexOf(cookiename);

					if (index1 == -1 || cookiename == "" ) {
						return ""; 
					}
					var index2 = cookiestring.indexOf( ';', index1 );
					if ( index2 == -1 ) {
						index2 = cookiestring.length; 
					}
					return unescape(cookiestring.substring(index1+cookiename.length+1,index2));
				}

				function getCookieValue( cname ) {
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
				}

				/*
				if(!getcookieNov11('MC_INTERSTITIAL_20231016')) {

					var rotationInterURL = new Array();
					setcookieDays( 'MC_INTERSTITIAL_20231016', 1, 30 );
					if( rotationInterURL.length > 0 ) {
						var rand = parseInt(Math.random() * rotationInterURL.length);
						window.location.href = rotationInterURL[rand];
					} else {
						window.location.href = "https://www.moneycontrol.com/promo/mc_interstitial_dfp.php?size=1280x540";
					}
				}
				*/

				function get_date_time() {
					var return_date = '';
					//var date = new Date();
					//var d = new Date( Date.UTC( date.getFullYear(), date.getMonth(), date.getDate() ) );

					var d = new Date();
					var month = d.getMonth()+1;
					return_date = d.getFullYear() + '-' + month + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
					return return_date;
				}

				function get_difference_in_minute( date_current, date_past ) {
					var diff = Math.abs(new Date(date_current)) - Math.abs(new Date(date_past));
					var minutes = Math.floor((diff/1000)/60*60);
					return minutes;
				}

				function split_date_count( string_to_be_split ) {
					var array_result = string_to_be_split.split("#");
					return array_result;
				}

				// https://studio.network18tech.com/jira/browse/MC-4129
				//var redirect_interstitial = false;
				var mcpro = getCookieValue( 'mcpro' );
				var value_interstitial = getCookieValue('MC_INTERSTITIAL_20231016');
				var value_counter = getCookieValue('MC_INTERSTITIAL_20231016_COUNT');

				// console.log('interstitial cookie value = ' + value_interstitial);
				// console.log('counter cookie value = ' + value_counter);

				// Main Cookie not found
				if( value_interstitial == '' || typeof( value_interstitial ) == "undefined" ) {

					// console.log( 'Main Cookie not found' );

					// Cookie Count not found
					if( value_counter == '' || typeof( value_counter ) == "undefined" ) {

						// console.log( 'Cookie Count not found' );

						//setcookieHours( 'MC_INTERSTITIAL_20231016', 1, 1 ); 
						//setcookieDays( 'MC_INTERSTITIAL_20231016_COUNT', 1, 1 );                           
						//redirect_interstitial = true; 

					} else if( value_counter != '' && typeof( value_counter ) != "undefined" ) {

						// console.log( 'Cookie Count found' );

						if( value_counter < 3 ) {

							// console.log( 'value_counter checks' );

							var cookie_value = (parseInt(value_counter)+1);
							//setcookieHours( 'MC_INTERSTITIAL_20231016', 1, 1 );
							//setcookieDays( 'MC_INTERSTITIAL_20231016_COUNT', cookie_value, 1 );
							//redirect_interstitial = true;
						}
					}

				}

				// console.log('redirect_interstitial = ' + redirect_interstitial);

				// <!-- start of frequency capping -->

				function showMyBanner() {
					// get localStorage value
					var today = new Date();
					var dateVal = today.toLocaleDateString("en-IN").replace(/\//g, "")
					var numberOfViews = localStorage.getItem(dateVal);

					var yesterDay = new Date(today.setDate(today.getDate() - 1));
					var preDateVal = yesterDay.toLocaleDateString("en-IN").replace(/\//g, "")
					localStorage.removeItem(preDateVal);
					
					var sessionView = sessionStorage.getItem("adViewed");
					
					if(numberOfViews && parseInt(numberOfViews) >= 4) {
						// console.log("not showed already showen for", numberOfViews);
						return;
					}
					if(sessionView) {
						//console.log("not showed already this session");
						return;
					}
					// show ad
					numberOfViews = numberOfViews ?  parseInt(numberOfViews) + 1 : 1;
					localStorage.setItem(dateVal, numberOfViews);
					sessionStorage.setItem("adViewed", true);
					//console.log("showed", numberOfViews);  
					return numberOfViews; 
				}

				var numberOfViewsFun = showMyBanner();

				var redirect_interstitial = false;

				if( numberOfViewsFun && parseInt(numberOfViewsFun) < 4) {
					redirect_interstitial = true; 
				}

				if( mcpro == '1' ) {
					redirect_interstitial = false;
				}

				// <!--end of frequency capping -->

				var redirect_Catchpoint = false;
				var value_Catchpoint = getCookieValue('Catchpoint');

				if( value_Catchpoint == '' || typeof( value_Catchpoint ) == "undefined" ) {
					redirect_Catchpoint = true;
				}

				var IS_BOT = 0;

				function botCheck(){
					var botPattern = "(googlebot\/|Googlebot-Mobile|Googlebot-News|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub.org|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum.bnf|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail.RU_Bot|discobot|heritrix|findthatfile|europarchive.org|NerdByNature.Bot|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net.com.bot|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler.com|siteexplorer.info|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|360Spider|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e.net|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf.fr_bot|A6-Indexer|ADmantX|Facebot|Twitterbot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis)";
					
					var re = new RegExp(botPattern, 'i');
					var userAgent = navigator.userAgent;
					if (re.test(userAgent)) {
						IS_BOT = 1;
					}
				}

				botCheck();

				// console.log( 'redirect_interstitial = ', redirect_interstitial );
				// console.log( 'redirect_Catchpoint = ', redirect_Catchpoint );
				// console.log( 'IS_BOT = ', IS_BOT );
				// console.log( 'mcpro =  ', mcpro );

				if(redirect_interstitial == true && redirect_Catchpoint == true && IS_BOT == 0) {
					window.location.href = "https://www.moneycontrol.com/promo/mc_interstitial_dfp.php?size=1280x540";
				}

				/*
				//https://studio.network18tech.com/jira/browse/MC-1555
				var redirect_interstitial = false;
				var value_interstitial = getcookieNov11('MC_INTERSTITIAL_20231016');

				if( value_interstitial == '' || typeof(value_interstitial) == "undefined" ) {
					var first_time_value = get_date_time();
					value_interstitial = first_time_value+'#1';
					setcookieNov11('MC_INTERSTITIAL_20231016',value_interstitial,10);
					redirect_interstitial = true;
				} else if( value_interstitial != '' && typeof(value_interstitial) != "undefined" ) {
					var date_curr = get_date_time();
					var array_date_prev = split_date_count(value_interstitial);
					var date_prev = array_date_prev[0];
					var counter_ins = array_date_prev[1];

					var diff_minute = get_difference_in_minute(date_curr,date_prev);

					if( diff_minute < 10 ) {	// minute calculation
						redirect_interstitial = false;
					} else {
						if( counter_ins == 1 ) {
							value_interstitial = date_curr+'#2';
							setcookieNov11('MC_INTERSTITIAL_20231016',value_interstitial,10);
							redirect_interstitial = true;
						} else if( counter_ins == 2 ) {
							value_interstitial = date_curr+'#3';
							setcookieNov11('MC_INTERSTITIAL_20231016',value_interstitial,10);
							redirect_interstitial = true;
						} else {
							redirect_interstitial = false;
						}
					}
				}

				if(redirect_interstitial == true) {
					window.location.href = "https://www.moneycontrol.com/promo/mc_interstitial_dfp.php?size=1280x540";
				}
				*/
			}