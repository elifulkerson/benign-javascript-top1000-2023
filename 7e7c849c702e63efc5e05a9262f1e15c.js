var alreadyExistBrand = false;
var alreadyExistTop = false;
var alreadyExistOther = false;
var topSlot, topSlot2, topSlot3, topSlot4, topSlot5, brandSlot;
function initGoogletag() {
var useragent = document.getElementsByTagName('html')[0];
if(useragent.className.indexOf('lt-ie7') < 0){
googletag.cmd.push(function() {var mapping = googletag.sizeMapping()
.addSize([1280, 0], [[1,1],[120, 600],[160, 600]])
.addSize([1280, 0], [[1,1],[120, 600]])
.addSize([0, 0], []). build();googletag.pubads().setForceSafeFrame(true);
googletag.pubads().setSafeFrameConfig({sandbox: true});if(window.innerWidth >= 1297 && !alreadyExistBrand){
brandSlot = googletag.defineSlot('/22875277274/ukr.net_brend_resize', [[1, 1], [120, 600], [160, 600]], 'div-gpt-ad-1543833870671-0').setForceSafeFrame(false).setSafeFrameConfig({sandbox: false}).defineSizeMapping(mapping).addService(googletag.pubads());
alreadyExistBrand = true;
}if(!alreadyExistOther){
topSlot = googletag.defineSlot('/22875277274/ukr.net_300x250', [[300, 250], [300, 500], [300, 400], [300, 107], [300, 600]], 'div-gpt-ad-1428656525414-0').addService(googletag.pubads());
topSlot3 = googletag.defineSlot('/22875277274/ukr.net_300x145', [[300, 145], [300, 175]], 'div-gpt-ad-1517581109520-0').addService(googletag.pubads());
topSlot4 = googletag.defineSlot('/22875277274/ukr.net_300x250_ad_unit2_bottom', [[300, 145], [300, 250], [300, 400]], 'div-gpt-ad-1544528258762-0').addService(googletag.pubads());
topSlot5 = googletag.defineSlot('/22875277274/ukr.net_300x250_ad_unit3_bottom', [[300, 600], [300, 250], [300, 400]], 'div-gpt-ad-1544528657150-0').addService(googletag.pubads());
alreadyExistOther = true;
}if(window.innerWidth < 1297 && !alreadyExistTop){
topSlot2 = googletag.defineSlot('/22875277274/ukr.net_topbanner', [[970, 90], [970, 250]], 'div-gpt-ad-1509975098522-0').addService(googletag.pubads());
alreadyExistTop = true;
};if (window.location.href.indexOf('brand') != 1) {
var n = 'brand' + window.location.href.split('=')[1];
googletag.pubads().setTargeting('page', n);
}googletag.pubads().enableSingleRequest();
googletag.pubads().collapseEmptyDivs(true, true);googletag.enableServices();
});
}
}
initGoogletag();
window.addEventListener('resize', function(event) {
initGoogletag();
}, true);