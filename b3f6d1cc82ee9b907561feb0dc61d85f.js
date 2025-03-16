//<![CDATA[
    var keywords = document.querySelector("meta[name='keywords']").getAttribute("content").substring(0, 64);

    var owa_baseUrl = 'https://esearch.youjizz.com/';
    var owa_cmds = owa_cmds || [];
    owa_cmds.push(['setSiteId', 'a5709f8530fd3a932c7cb67f11e17270']);
    owa_cmds.push(['setCustomVar', '_keywords', '', keywords, 'page']);

    owa_cmds.push(['trackPageView']);
    var owa_max_count = 2;

    (function() {
    //	let n = 0;
    //	if (sessionStorage.getItem('owa_count')) {
    //		n = parseInt(sessionStorage.getItem('owa_count'));
    //	}
    //	else {
    //		if (Math.floor(Math.random()*owa_max_count) != 1)
    //			return;
    //	}
    //        sessionStorage.setItem('owa_count', n + 1);
        var _owa = document.createElement('script'); _owa.type = 'text/javascript'; _owa.async = true;
        owa_baseUrl = ('https:' == document.location.protocol ? window.owa_baseSecUrl || owa_baseUrl.replace(/http:/, 'https:') : owa_baseUrl );
        _owa.src = owa_baseUrl + 'modules/base/js/owa.tracker-combined-min.js';
        var _owa_s = document.getElementsByTagName('script')[0]; _owa_s.parentNode.insertBefore(_owa, _owa_s);
    }());
    //]]>