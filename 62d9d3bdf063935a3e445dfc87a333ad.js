(function (window){

		var redirectUrl = 'https://www.livejasmin.com/?utm_campaign=main&utm_medium=other&utm_source=promotools&utm_content=redirect';

		function doRedirect() {
			try {
				window.location.replace(redirectUrl);
			} catch (error) {
				window.location.href = redirectUrl;
			}
		}
		
		setTimeout(doRedirect, 60);
	})(window);