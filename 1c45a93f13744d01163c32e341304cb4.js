var url = window.location;
		if(/Android|iPhone|Windows Phone|webOS|iPod|BlackBerry/i.test(navigator.userAgent)){
			window.location.href= url.toString().replace('www', "m"); ; 
		}