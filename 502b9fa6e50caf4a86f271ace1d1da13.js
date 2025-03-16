var adobePageMarket = 'en'
	var firstPagePath = window.location.pathname.split('/')[1]
	if (['zh-hans', 'zh-hant', 'fr', 'de', 'it', 'ja', 'ru', 'es', 'cs', 'ko', 'pl', 'pt-br', 'tr'].indexOf(firstPagePath) >= 0) {
		adobePageMarket = firstPagePath
	}