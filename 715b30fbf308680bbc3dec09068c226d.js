var is_mobile_h = window.innerWidth;
	function isMobile() {
		let type;
	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        window.navigator.userAgent ) ) {type='mobile'; } else {type='desktop'; }
       return type 
      }
    var itViewPort=(screen.width <= 720 ? 'mobile' : 'desktop');
    if(isMobile()==true) { itViewPort='mobile'; }
     function getCookie_gdpr(e){return(e=(document.cookie+";").match(new RegExp(e+"=.*;")))&&e[0].split(/=|;/)[1]}
	var adcookie_gdpr = getCookie_gdpr("gdpr_ad_ck");
	function getCookie_ppid(e){return(e=(document.cookie+";").match(new RegExp(e+"=.*;")))&&e[0].split(/=|;/)[1]}
	var googletag = googletag || {};
	googletag.cmd = googletag.cmd || [];