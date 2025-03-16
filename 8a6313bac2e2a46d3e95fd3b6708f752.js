(function(w, d) {
	var s = d.createElement('script');
	d.getElementsByTagName('script')[0].parentNode.appendChild(s);
	s.setAttribute('data-statinside-id', 6);
	//s.src = 'https://statinside.com/counter.js';
	
	s.setAttribute('data-endpoint', '/actcntr');
	s.src = '/actcntr/counter.js';
	
	w._siData = w._siData || [];
	w.statInside = function() {_siData.push(arguments);}
})(window, document);

statInside('custom', 'seo_article');