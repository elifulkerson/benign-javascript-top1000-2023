/*-----------------------------------
朝日新聞デジタル　--　Common JS　--

last modified --2020-07-22 11:00
-----------------------------------*/

var d = document;
d.write('<script type="text/javascript" src="//www.asahicom.jp/js/jquery-1.8.3.min.utf8.js"></script>');
d.write('<script type="text/javascript" src="//www.asahicom.jp/js/asahi-site2020.utf8.renewal.js"></script>');
d.write('<script type="text/javascript" src="//www.asahicom.jp/js/asahi-header2014.utf8.js"></script>');

var topDeviceChk_ua = navigator.userAgent;
if (topDeviceChk_ua.indexOf('Android') != - 1 && topDeviceChk_ua.indexOf('Mobile') != - 1 || topDeviceChk_ua.indexOf('iPhone') != - 1) {
	d.write('<script type="text/javascript" src="//www.asahicom.jp/js/smartlink_top.utf8.js"></script>');
}