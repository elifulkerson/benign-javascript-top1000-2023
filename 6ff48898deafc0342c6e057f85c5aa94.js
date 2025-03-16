jQuery(function() {
var hptouch = document.createElement('script');
hptouch.async = true;
hptouch.src = '/hptouch.php';
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(hptouch, s);
});