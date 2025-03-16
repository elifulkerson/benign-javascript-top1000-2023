function mmcr() {}
var mmcr = new mmcr();
var cr_ha = false; // Get from the component, the maximum number of times ad should display
var dCount = 0; // Get from the component, the maximum number of times ad should display
var path = "https://www.manoramaonline.com/default.html"; // redirect to default page.
var timeinterval = 1;
// cr_ha  cr_hasAd => Has add cookie set from backend 
// cr_d  cr_default => to avoid the lopping process, cookie set from front end
// cr_v  cr_value => incremental cookie set from front end, to check the number of times ad should display.
console.log(path);
console.log(cr_ha);
console.log(dCount);
console.log(timeinterval);
mmcr.cookieGet = function(v) {
    var r = document.cookie.match('(^|[^;]+)\\s*' + v + '\\s*=\\s*([^;]+)');
    r = r ? r.pop(): undefined;
    return r
}
mmcr.cookieSet = function(n,v) {
	var j = new Date(), k;
    k = j.setTime(j.getTime() + (timeinterval * 60 * 60 * 1000));
	document.cookie = n + "=" + v +"; expires="+ k+";path=/ ";
}

mmcr.crRedirect = function(v) {
	mmcr.cookieSet('cr_value', v);
	mmcr.cookieSet('cr_default', 0);
	window.location.replace(path);
}

mmcr.crDisp = function() {
    if ( cr_ha && (!mmcr.cookieGet("cr_default") || mmcr.cookieGet("cr_default") == 0)) { // There is an ad, and the page is not a referal of default page.
    	
		if(mmcr.cookieGet("cr_value")){  // There is an incremental cookie value.
			var val = parseInt(mmcr.cookieGet("cr_value"));
			if(val < dCount){ // There is an incremental cookie  which is less than maximum cookie value.
				mmcr.crRedirect(val+1);	
			}
        }else{ // There is no incremental cookie value.
        	mmcr.crRedirect(0);
        }

    }else{
    	mmcr.cookieSet('cr_default', 0);
    }
}
mmcr.crDisp();