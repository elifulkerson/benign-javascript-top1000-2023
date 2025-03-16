function lazyLoadScript(src) {
return new Promise(function (resolve, reject) {
var script = document.createElement("script");
script.onload = function () {
resolve();
};
script.onerror = function () {
reject();
};
script.defer = true;
script.src = src;
document.body.appendChild(script);
});
}
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
var layout = 'homepage';
var isBlogTemplate = false;
var isDetails = false;
var adsSection = 'homepage';
var adsCategory = '';
var adsSubCategory = '';
var adsItemId = '';
var adsTopicId = '';
var adsTags = '';
var adsPage = '0';
var adsLayout = 'homepage';
var adsSafety = '0';
var adsDWord = '0';
var adsFeaturedVideo = '0';
var adsType = 'Hub';
const currentLink = 'https://www.lifo.gr/node/4976';
window.addEventListener('load', function () {
function setBehaviors() {
if ( typeof Drupal !== 'undefined'  &&
typeof Drupal.behaviors.bootstrap_barrio_subtheme !== 'undefined'  &&
!Drupal.behaviors.bootstrap_barrio_subtheme.hasOwnProperty("attach") &&
typeof initializeAllDrupal !== "undefined" &&
initializeAllDrupal instanceof Function
) {
initializeAllDrupal($, Drupal);
} else {
document.addEventListener("DOMContentLoaded", setBehaviors);
}
if ( typeof Drupal !== 'undefined') {
Drupal.behaviors.bootstrap_barrio_subtheme.attach();
}
}
setBehaviors();
},
{passive: true}
);