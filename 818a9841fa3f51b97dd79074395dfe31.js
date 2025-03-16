var linkback = linkback|| {};
(function() {
	var d = document, scr = d.createElement('script'), pro = d.location.protocol,
	tar = d.getElementsByTagName('head')[0];
	scr.type = 'text/javascript';  scr.async = true;
	scr.src = ((pro === 'https:') ? 'https' : 'http') + '://linkback.contentsfeed.com/src/lb4iv.min.js?v=170111a';
	scr.charset='utf-8';
	if(!linkback.l){linkback.l=true; tar.insertBefore(scr, tar.firstChild);}
})();