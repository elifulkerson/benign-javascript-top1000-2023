window.defaultPageContext = {"blogId":"9","blogGroup":"kotaku","googleAnalyticsID":"UA-142218-8","adsEnabled":true,"adSiteName":"gm.kotaku","pageType":"curatedHomepage"};
			
			const cookieValue = document.cookie
			  .split('; ')
			  .find((row) => row.startsWith('kinja_frontpage_refresh='))
			  ?.split("=")[1];
			  
		  	if (cookieValue === 'true') {
		  		document.cookie = 'kinja_frontpage_refresh=; expires=Thu, 01 Jan 1970 00:00:00 GMT';
		  		window.defaultPageContext.isRefresh = true;
		  	}