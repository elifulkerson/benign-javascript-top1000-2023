var thgCookieConsent = new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = "https://consent.truste.com/notice?domain=hindugroup.com&c=teconsent&gtm=1&pcookie&js=nj&noticeType=bb&gtm=1&text=true";
    script.async = true;
    script.onload = function(){
    	 resolve(script);
    }
    script.onerror =function(){
   		 resolve(script);
   	}
    document.head.append(script);
  });