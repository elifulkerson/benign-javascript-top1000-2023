// not login
!function(){
	if(loadIdentity()){ // uid2 cookie exist
		__uid2.disconnect();
	}
	removeCookie('__uid2_advertising_token');
	removeCookie('uid2hash','discuss.com.hk');

    function loadIdentity(){
        const payload = getCookie(UID2.COOKIE_NAME);
        if(payload){
            return JSON.parse(payload);
        }
    };

	function getCookie(name){
		var cookie_start = document.cookie.indexOf(name+'=');
		var cookie_end = document.cookie.indexOf(";", cookie_start);
		return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + name.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
	}

	function removeCookie(name,domain){
		document.cookie = name + "=;path=/;expires=Tue, 1 Jan 1980 23:59:59 GMT" + (domain ? ';domain=' + domain : '');
	}
}();