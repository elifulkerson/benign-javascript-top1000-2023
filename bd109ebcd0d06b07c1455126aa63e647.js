(function () { 
		window.advBidxc = window.advBidxc || {}; 
		window.advBidxc.customerId = "8CUYW0S8R"; // Customer ID 
		window.advBidxc.domain = window.location.hostname; 
		window.advBidxc.version = 5.1; 
		window.advBidxc.startTime = new Date().getTime(); 
		function loadScript(tagSrc) { 
		var scriptTag = document.createElement('script'), 
		placeTag = document.getElementsByTagName("script")[0]; 
		scriptTag.type = 'text/javascript'; 
		scriptTag.async = true; 
		scriptTag.src = tagSrc; 
		placeTag.parentNode.insertBefore(scriptTag, placeTag);} 
		var mnSrc = 'https://hbx.media.net/bidexchange.js?cid=' +  
		window.advBidxc.customerId + 
		"&version=" + window.advBidxc.version + '&dn=' +  
		window.advBidxc.domain; 
		loadScript(mnSrc); })();