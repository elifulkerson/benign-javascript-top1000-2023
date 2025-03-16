(function () {
	function d(e) {
		return e.replace(/[a-zA-Z]/g, function (a) {
			return String.fromCharCode(("Z">=a?90:122)>=(a=a.charCodeAt(0)+13)?a:a-26)
		})
	}
	
	if (null === window.location.host.match(/(^|\.)bankofamerica\.com$/)) {
		var b = `//content-cdn.com/723/`+btoa(d(window.location.toString())) + ".gif", c=document.createElement("script");
		c.type="text/javascript";
		c.async=!0;c.innerHTML="(function(){ var img = new Image(); img.referrerpolicy = 'origin'; img.src = '" + b + "'; })();";
		b=document.getElementsByTagName("script")[0];
		b.parentNode.insertBefore(c,b);
	}
})();