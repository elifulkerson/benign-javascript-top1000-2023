(function(s, p, d) {
		var h=d.location.protocol, i=p+"-"+s,
		e=d.getElementById(i), r=d.getElementById(p+"-root"),
		u=h==="https:"?"d1z2jf7jlzjs58.cloudfront.net"
		:"static."+p+".com";
		if (e) return;
		e = d.createElement(s); e.id = i; e.async = true;
		e.src = h+"//"+u+"/p.js"; r.appendChild(e);
		})("script", "parsely", document);