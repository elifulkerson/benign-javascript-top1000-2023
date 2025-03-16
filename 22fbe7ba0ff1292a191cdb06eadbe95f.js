if (window.heavyIsSubscriber !== true) {
const cafeMediaDelay = 3100 * ( window.delaySpeedup ?? 1 );
window.addEventListener( "load", function( e ) { setTimeout(function() {
(function(w, d) {
	w.adthrive = w.adthrive || {}
	w.adthrive.cmd = w.adthrive.cmd || []
	w.adthrive.plugin = 'cam-manual'
	w.adthrive.host = 'ads.adthrive.com'

	const s = d.createElement('script')
	s.async = true
	s.referrerpolicy = 'no-referrer-when-downgrade'
	s.src = `https://${
	  w.adthrive.host
	}/sites/5ad7479721520f50ab7da88e/ads.min.js?referrer=${w.encodeURIComponent(
	  w.location.href
	)}&cb=${Math.floor(Math.random() * 100) + 1}`
	const n = d.getElementsByTagName('script')[0]
	n.parentNode.insertBefore(s, n)
  })(window, document)

}, cafeMediaDelay ); } ); 
}