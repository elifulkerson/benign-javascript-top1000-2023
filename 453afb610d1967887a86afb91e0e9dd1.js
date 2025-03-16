function setCookieUkid(cname, cvalue, exdays) {
			var d = new Date();
			d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.bolasport.com;path=/;";
		}

		if (getCookie('first_name') == null && getCookie('isLogin') == null && document.cookie.indexOf('ukid=') == -1) {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var ukid_cookie = JSON.parse(xhttp.responseText);
					setCookieUkid('ukid', ukid_cookie.ukid, 365);
				}
			};
			xhttp.open("GET", "https://apis.kompas.com/api/activity/user", true);
			xhttp.send();
		}


		function getCookie(cname) {
			var name = cname + "=";
			var decodedCookie = decodeURIComponent(document.cookie);
			var ca = decodedCookie.split(';');
			for (var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return null;
		}

		if (getCookie('first_name') == null && getCookie('isLogin') == null) {
			$('#sso').css('display', '');
		} else {
			$('#sso').css('display', '');
			$('#txt_register').css('display', 'none');
			$('.sso__hr').css('display', 'none');
			$("#txt_signin").replaceWith("<a class='sso__link' href='https://account.bolasport.com/home?navsource=aHR0cHM6Ly93d3cuYm9sYXNwb3J0LmNvbS8='> Hai, " + getCookie('first_name').replaceAll("+", " ") + "</a>");
		}


		function setCookie(name, value, setTime) {
			var expires = "";
			if (setTime) {
				var date = new Date();
				date.setTime(setTime * 1000);
				expires = "; expires=" + date.toUTCString();
			}
			document.cookie = name + "=" + (value || "") + expires + "; domain=" + getDomainName(window.location.hostname) + "; path=/";
		}

		function getDomainName(hostName) {
			return "." + hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
		}

		// ***
		// *** start login popup verify
		let firstScroll = 0
		window.addEventListener('scroll', function(){
			if(firstScroll==0) {
				checkLoginPopup()
				firstScroll = 1
			}
		});
		window.addEventListener('mousemove', function(){
			if(firstScroll==0) {
				checkLoginPopup()
				firstScroll = 1
			}
		});
		function checkLoginPopup() {
			if(getCookie('isLogin') == "true" && getCookie('sso_time_delay') === null){
				var xhttp = new XMLHttpRequest();
				var ifaCookie = getCookie('IFA');
				var loginCookie  = getCookie('LoginWith');
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
						var usrCookie = JSON.parse(xhttp.responseText);
						
						document.getElementById("kgmModal-id").innerText = usrCookie.user.first_name;
						// document.getElementById("kgmModalHref").href = urlRedirect;
						if(!usrCookie.user.phone_2 || !usrCookie.user.birthdate || !usrCookie.user.gender){
							verifyPopupShow();
						}else{
							setCookiePopupLogin('sso_time_delay',false,30*24);
						}
					}
				};
				xhttp.open("GET", "https://apis.kompas.com/api/sso_new/user/detail?token="+ifaCookie+"&loginwith="+loginCookie, true);
				xhttp.send();
			}
		}

		async function goVerify(){
			window.location.href = "https://account.bolasport.com/verify_data?source=bolasport&medium=verifikasiakun&vid="+await getCookie('IFA')+"&rurl="+btoa(window.location.href)+"";
		}
			
		function verifyPopupShow() {
			let kv = document.getElementById('kgmModal-verify')
			if(!!kv) {
				kv.classList.remove('-hide')
			}
		}
		function hidePopupLogin() {
			let kv = document.getElementById('kgmModal-verify')
			if(!!kv) {
				kv.style.display = 'none'
			}
		}
		function setCounterClose(){
			if(getCookie('isLogin') == "true" && getCookie('sso_time_delay') == null){
				var count = getCookie('sso_count_close');
				if(!count){
					setCookiePopupLogin('sso_time_delay',false,2);
					setCookiePopupLogin('sso_count_close','1',30*24);
					hidePopupLogin()
				}
				else if(count == 1){
					setCookiePopupLogin('sso_time_delay',false,24);
					setCookiePopupLogin('sso_count_close','2',30*24);
					hidePopupLogin()
				}
				else if(count == 2){
					setCookiePopupLogin('sso_time_delay',false,7*24);
					setCookiePopupLogin('sso_count_close','3',30*24);
					hidePopupLogin()
				}
				else if(count == 3){
					setCookiePopupLogin('sso_time_delay',false,30*24);
					setCookiePopupLogin('sso_count_close','4',30*24);
					hidePopupLogin()
				}else{
					setCookiePopupLogin('sso_time_delay',false,30*24);
					setCookiePopupLogin('sso_count_close','4',30*24);
					hidePopupLogin()
				}
			}
		}
		function setCookiePopupLogin(cname, cvalue, exhours) {
			var d = new Date();
			d.setTime(d.getTime() + (exhours * 60 * 60 * 1000));
			var expires = "expires=" + d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";domain=.bolasport.com;path=/;";
		}