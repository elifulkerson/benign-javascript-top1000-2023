var subscriber = false;
	var z_session = window.localStorage ? JSON.parse(window.localStorage.getItem('zephr')) : null;
	if (
		z_session !== null
		&& z_session?.user?.sessionId
	) {
		subscriber = true;
	}
	!function(n,e,i){if(!n){n=n||{},window.permutive=n,n.q=[],n.config=i||{},n.config.apiKey=e,n.config.environment=n.config.environment||"production";for(var o=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],r=0;r<o.length;r++){var t=o[r];n[t]=function(e){return function(){var i=Array.prototype.slice.call(arguments,0);n.q.push({functionName:e,arguments:i})}}(t)}}}(window.permutive,"8716c0bf-3e57-4603-9c05-89d10477c922",{});
	window.googletag=window.googletag||{},window.googletag.cmd=window.googletag.cmd||[],window.googletag.cmd.push(function(){if(0===window.googletag.pubads().getTargeting("permutive").length){var g=window.localStorage.getItem("_pdfps");window.googletag.pubads().setTargeting("permutive",g?JSON.parse(g):[]);var o=window.localStorage.getItem("permutive-id");o&&(window.googletag.pubads().setTargeting("puid",o),window.googletag.pubads().setTargeting("ptime",Date.now().toString()))}});
	var identityArr = [];
	if (newsId) {
		window.permutive.identify([{id: newsId, tag: 'domain_id', priority: 5}]);
	}

	var ncgCookie = document.cookie.match(/_ncg_g_id_=([^;]+)/);
	if (ncgCookie) {
		window.permutive.identify({id: ncgCookie[1].split('.')[0], tag: 'network_id', priority: 3});
	}

	permutive.addon('web', {
		"page": {
			"article": {
				"authors": [""],
				"keywords": [""],
				"publish": null,
				"title": "",
				"wordCount": 0,
				"tag": "",
			},
			"section": "nypost.com-home",
			"pageUri": "https://nypost.com/",
			"type": "Home",
			"subscriber": subscriber,
		}
	});