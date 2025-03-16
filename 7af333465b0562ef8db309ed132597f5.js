var imJsLink = '//g.lazcdn.com/g/lzdmod/im/5.0.37/index.js';
var imCssLink = '//g.lazcdn.com/g/lzdmod/im/5.0.37/index.css';


var gConfig = window.g_config || {};
window.onload = function() {
  if (!gConfig.regionID) return;
  window._imSDKconfig = window._imSDKconfig || { region: (gConfig.regionID || 'sg').toLowerCase(), lang: gConfig.language || 'en', version: '5.0.37', enabled: /enable_webim=true/.test(document.location.search) || false };
  if (window._imSDKconfig.disabled || !window._imSDKconfig.enabled) { return; }
  var imy = document.createElement('link'); imy.rel = 'stylesheet'; imy.href = imCssLink;
  var sty = document.getElementsByTagName('link')[0]; sty.parentNode.insertBefore(imy, sty);
  var ims = document.createElement('script'); ims.type = 'text/javascript'; ims.async = true; ims.src = imJsLink;
  var scr = document.getElementsByTagName('script')[0]; scr.parentNode.insertBefore(ims, scr);
  var done = false; ims.onload = ims.onreadystatechange = function() {
    if (!done && (!this.readyState || this.readyState==='loaded' || this.readyState==='complete')) {
        done = true; window._chat && window._chat.init(window._imSDKconfig).render('webim-container');
    }
  };
};