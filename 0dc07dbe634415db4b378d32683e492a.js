var up_userAgent = navigator.userAgent.toLowerCase();
			if( up_userAgent.match(/android/i) ||  up_userAgent.match(/blackberry/i) || up_userAgent.match(/opera mini/i) || up_userAgent.match(/iemobile/i) || up_userAgent.match(/wpdesktop/i)) 
			{
			 	document.getElementById("menu_app_Android").style.display = 'block';
			}
			else if( up_userAgent.match(/iphone/i) || up_userAgent.match(/ipad/i) || up_userAgent.match(/ipod/i)) 
			{
				document.getElementById("menu_app_IOS").style.display = 'block';
			}