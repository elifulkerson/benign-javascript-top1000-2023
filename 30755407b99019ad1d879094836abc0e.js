if ((window.location.href.indexOf('dhl.de') !== -1) 
	&& (window.location.href.indexOf('/impressum_dhlpaket.html') === -1)
	&& (window.location.href.indexOf('/datenschutz-gkp.html') === -1)
	&& (window.location.href.indexOf('/datenschutz.html') === -1)) {
        
        var consent2 = document.createElement('script');
        consent2.setAttribute('src', 'https://cdn.cookielaw.org/scripttemplates/otSDKStub.js');
        consent2.setAttribute('data-document-language','true');
        consent2.setAttribute('type', 'text/javascript');
        consent2.setAttribute('charset', 'UTF-8');
        consent2.setAttribute('data-domain-script', 'c097d600-1fd8-47ad-b997-59449c887b64');
        document.head.appendChild(consent2);
	}