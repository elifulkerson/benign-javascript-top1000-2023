var alreadyExistBanner = false;
function showBanner() {
var div1 = document.getElementById('div-gpt-ad-1509975098522-0'),
div2 = document.getElementById('div-gpt-ad-1543833870671-0');
var holder = div1.parentNode;if (window.innerWidth < 1297 && !alreadyExistBanner){
div1.style.height = "auto";
div1.style.visibility = "visible";
holder.style.display = 'block';
googletag.cmd.push(function() {
googletag.display('div-gpt-ad-1509975098522-0');
googletag.pubads().addEventListener('slotRenderEnded', function(event) {
if(event.slot.getAdUnitPath() == '/22875277274/ukr.net_topbanner'){
if(event.isEmpty === false) {
if(window.innerWidth < 1297) {
div1.style.margin = '10px auto 20px auto';
}
}else {
div1.style.margin = '0 auto';
}
}
});
});
alreadyExistBanner = true;
if (div2) {
div2.style.height = "0";
div2.style.visibility = "hidden";
}
} else if (window.innerWidth >= 1297) {
alreadyExistBanner = false;
if (div1) {
div1.style.height = "0";
div1.style.visibility = "hidden";
div1.style.margin = "0 auto";
holder.style.display = 'none';
}
if(document.getElementById('div-gpt-ad-1543833870671-0')) {
div2.style.height = "auto";
div2.style.visibility = "visible";
}
}
}
showBanner();
window.addEventListener('resize', function(event) {
showBanner();
}, true);