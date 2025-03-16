let MobileStructerAds = '<div class="h_iframe-sabavision_responsive_ads" id="sabavision_responsive_fixed_428">' +
'<div onclick="document.getElementById("sabavision_responsive_fixed_428").parentNode.removeChild(document.getElementById("sabavision_responsive_fixed_428"));" style="background-color: red;z-index: 9999;position: absolute;font-size: 25px;right: -10px;top: -16px;border-radius: 100%;width: 35px;height: 30px;text-align: center;color: #fff;padding-bottom: 5px;font-family: Tahoma;">x</div>' +
'<span style="display: block;padding-top: 13%"></span>' +
'<iframe frameborder="0" src="https://api.sabavision.com/pox/?w=468&h=60&id=59&responsive=yes" scrolling="No"></iframe>' +
'</div>';
let SabaMobileAds = function () {
$("body").append(MobileStructerAds);
function removeElement(element) { element && element.parentNode && element.parentNode.removeChild(element); }
if (!(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i))) { removeElement(document.getElementById('sabavision_responsive_fixed_428')); }
};