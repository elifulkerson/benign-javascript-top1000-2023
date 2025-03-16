(function(w, d) {
	w.adthrive = w.adthrive || {};
	w.adthrive.cmd = w.adthrive.cmd || [];
	w.adthrive.plugin = 'adthrive-ads-1.0.40-manual';
	w.adthrive.host = 'ads.adthrive.com';
	w.adthrive.threshold = Math.floor(Math.random() * 100 + 1);
	var s = d.createElement('script');
	s.async = true;
	s.referrerpolicy='no-referrer-when-downgrade';
	s.src = 'https://' + w.adthrive.host + '/sites/61575e8e934c48ea554b3caa/ads.min.js?referrer=' + w.encodeURIComponent(w.location.href) + '&threshold='+w.adthrive.threshold;
	var n = d.getElementsByTagName('script')[0];
	n.parentNode.insertBefore(s, n);
})(window, document);