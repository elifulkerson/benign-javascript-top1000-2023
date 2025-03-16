function detectIE(){
var ua = window.navigator.userAgent;var msie = ua.indexOf('MSIE ');
if (msie > 0) {
// IE 10 or older => return version number
return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
}var trident = ua.indexOf('Trident/');
if (trident > 0) {
// IE 11 => return version number
var rv = ua.indexOf('rv:');
return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
}var edge = ua.indexOf('Edge/');
if (edge > 0) {
// Edge (IE 12+) => return version number
return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
}// other browser
return false;
}if( detectIE() === false){
console.log('not ie');
!(function () { window.googletag = window.googletag || {}; window.vmpbjs = window.vmpbjs || {}; window.vpb = window.vpb || {}; vpb.fastLoad = true; googletag.cmd = googletag.cmd || []; vmpbjs.cmd = vmpbjs.cmd || []; var cmds = []; try{ cmds = googletag.cmd.slice(0); googletag.cmd.length = 0; }catch(e){} var ready = false; function exec(cb) { return cb.call(googletag); } var overriden = false; googletag.cmd.push(function () { overriden = true; googletag.cmd.unshift = function (cb) { if (ready) { return exec(cb); } cmds.unshift(cb); if (cb._startgpt) { ready = true; for (var k = 0; k < cmds.length; k++) { exec(cmds[k]); } } }; googletag.cmd.push = function (cb) { if (ready) { return exec(cb); } cmds.push(cb); }; }); if(!overriden){ googletag.cmd.push = function (cb) { cmds.push(cb); }; googletag.cmd.unshift = function (cb) { cmds.unshift(cb); if (cb._startgpt) { ready = true; if (googletag.apiReady) { cmds.forEach(function (cb) { googletag.cmd.push(cb); }); } else { googletag.cmd = cmds; } } }; } var dayMs = 36e5, cb = parseInt(Date.now() / dayMs), vpbSrc = '//player.adtcdn.com/prebidlink/' + cb + '/wrapper_hb_742228_17438.js', pbSrc = vpbSrc.replace('wrapper_hb', 'hb'), gptSrc = '//securepubads.g.doubleclick.net/tag/js/gpt.js', c = document.head || document.body || document.documentElement; function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; s.defer=false; c.appendChild(s); s.onload = cb; s.onerror = function(){ var fn = function(){}; fn._startgpt = true; googletag.cmd.unshift(fn); }; return s; } loadScript(pbSrc); loadScript(gptSrc); loadScript(vpbSrc); })()
} else {
console.log('ie');
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') +
'//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();
}