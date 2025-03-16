/* Adobe Target Pre-hide snippet.
* https://docs.adobe.com/content/help/en/launch/using/extensions-ref/adobe-extension/target-extension/overview.html
* The script is modified by exporting method 'preHideMethods' with internal functions that allows to disable pre-hide functionality before the given timer.
*/
// Set a global variable for pre-hiding.
var adobeTargetBodyHidingEnabled = true;
// The JavaScript variable 'boxPrehideSelectorList' is created by Drupal backend to add concatenated css selectors.
(function(a,b,c,d){function e(){return b.getElementsByTagName("head")[0]}function f(a,c){if(a){var d=b.getElementById(c);d&&a.removeChild(d)}}return function(a,c,d){if(a){var e=b.createElement("style");e.id=c,e.innerHTML=d,a.appendChild(e)}}(e(),"at-body-style",c),setTimeout(function(){f(e(),"at-body-style")},d),preHideMethods={removeStyle:f,getParent:e,STYLE_ID:"at-body-style"},{preHideMethods:preHideMethods}})(window,document, boxPrehideSelectorList+"{opacity: 0 !important}",3e3);