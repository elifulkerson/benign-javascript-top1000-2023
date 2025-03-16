window.defaultPageContext = {"blogId":"4","blogGroup":"gizmodo","googleAnalyticsID":"UA-142218-3","adsEnabled":true,"adSiteName":"gm.gizmodo","pageType":"curatedHomepage"};
			
			const cookieValue = document.cookie
			  .split('; ')
			  .find((row) => row.startsWith('kinja_frontpage_refresh='))
			  ?.split("=")[1];
			  
		  	if (cookieValue === 'true') {
		  		document.cookie = 'kinja_frontpage_refresh=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
		  		window.defaultPageContext.isRefresh = true;
		  	}