if(IOLHP.IE){
		var s=document.getElementById("css_top");
		if(s)s.href="/public/dva/4.14/css/head.ie.css?nc=372";
		s=document.getElementById("css_bot");
		if(s)s.href = "/public/dva/4.14/css/bottom.ie.css?nc=372";
		s=document.getElementById("inline_css_top");
		if(s){
			s.parentNode.removeChild(s);
			var l=document.createElement('link');
			l.id='css_top';
			l.rel='stylesheet';
			l.href="/public/dva/4.14/css/head.ie.css?nc=372";
			document.getElementsByTagName('head')[0].appendChild(l);
		}
	}