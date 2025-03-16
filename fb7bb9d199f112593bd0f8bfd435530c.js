(function() {
var a = 'bitly';
var b = '.com';
var h=window.location.hostname;
var i = "";
if(!h.includes(a+b)) {i="-test"}
var blocker = '<script type="text/javascript" src="https://cdn.cookielaw.org/consent/26c7d0bf-48ec-4646-8f57-e4e1135d9d05'+i+'/OtAutoBlock.js"><\/script>';
var mainscript = '<script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="26c7d0bf-48ec-4646-8f57-e4e1135d9d05'+i+'"><\/script>';
document.write(blocker);
document.write(mainscript);
})();