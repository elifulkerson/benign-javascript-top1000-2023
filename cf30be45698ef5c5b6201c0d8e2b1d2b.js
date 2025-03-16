<!--
  var __kv_url = (document && document.location && document.location.href && document.location.href.indexOf('@') == -1) ? document.location.href.replace(/\?.*$/,"") : '';
  var __kv_referrer = (document && document.referrer && document.referrer.indexOf('@') == -1) ? document.referrer.replace(/\?.*$/,"") : '';
  var __kv_referrer_domain = '';
  if(__kv_referrer) {
    var __parsed_kv_referrer = __kv_referrer.match(/^(.*?:\/\/)(.*?)([a-z0-9][a-z0-9\-]{1,63}\.[a-z\.]{2,6})[\:[0-9]*]?([\/].*?)?$/i);
    if(__parsed_kv_referrer && __parsed_kv_referrer[3] && __parsed_kv_referrer[3].indexOf('@') == -1) {
        __kv_referrer_domain = __parsed_kv_referrer[3];
    }
  }
  var setSite = function(uri) {
    var site, parser;
    if (typeof(uri) === 'undefined' || uri === '' || uri.indexOf('http') < 0) {
        uri = window.document.location.href;
    }
    parser = window.document.createElement('a');
    parser.href = uri;
    site = parser.hostname;
    return site;
  };

  var wipeSlot;

  googletag.cmd.push(function() {
        googletag.defineSlot('/11384922/1st_PD', [[300, 250], [336,280], [300, 600], [336, 600], [160, 600]],  'tenki-ad-1st_PD').addService(googletag.pubads()).setTargeting("adslot", "1st_PD").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString());
            googletag.defineSlot('/11384922/2nd_PD', [[300, 250], [336,280], [300, 600], [336, 600], [160, 600]],  'tenki-ad-2nd_PD').addService(googletag.pubads()).setTargeting("adslot", "2nd_PD").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString());
            googletag.defineSlot('/11384922/3rd_PD', [[300, 250], [1,1], [336,280], [300, 600], [336, 600], [160, 600]],  'tenki-ad-3rd_PD').addService(googletag.pubads()).setTargeting("adslot", "3rd_PD").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString());
                googletag.defineSlot('/11384922/PC_CT_Top',  [[1,1],[728,90],[970, 250]],   'tenki-ad-PC_CT_Top').addService(googletag.pubads()).setTargeting("adslot", "PC_CT_Top").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString()).setCollapseEmptyDiv(true,true);
            googletag.defineSlot('/11384922/footer_left', [[1, 1], [336, 280], [300, 250], [600, 250], [690, 250], [600, 200]], 'tenki-ad-footer_left').addService(googletag.pubads()).setTargeting("adslot", "footer_left").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString());
            googletag.defineSlot('/11384922/footer_right', [[1, 1], [300, 250], [336, 280]],'tenki-ad-footer_right').addService(googletag.pubads()).setTargeting("adslot", "footer_right").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString());
            googletag.defineSlot('/11384922/footer_left2', [[1, 1], [336, 280], [300, 250], [600, 250], [690, 250], [600, 200]], 'tenki-ad-footer_left2').addService(googletag.pubads()).setTargeting("adslot", "footer_left2").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString());
    googletag.defineSlot('/11384922/footer_right2', [[1, 1], [300, 250], [336, 280]],'tenki-ad-footer_right2').addService(googletag.pubads()).setTargeting("adslot", "footer_right2").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString());
                        googletag.defineSlot('/11384922/PC_Jack_Left', [[120,913],[120,924]], 'tenki-ad-skyscraper-left').addService(googletag.pubads()).setTargeting("adslot", "PC_Jack_Left").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString());
    googletag.defineSlot('/11384922/PC_Jack_Right', [[120,913],[120,924]], 'tenki-ad-skyscraper-right').addService(googletag.pubads()).setTargeting("adslot", "PC_Jack_Right").setTargeting("ad_wx_dice",(Math.floor( Math.random() * 100 ) + 1 ).toString());
                googletag.pubads().setTargeting("category","top").setTargeting("top","1").setTargeting("area","0").setTargeting("pref","0").setTargeting("jiscode","0").setTargeting("site","tenki.jp").setTargeting("domain","tenki.jp").setTargeting("url",__kv_url).setTargeting("ref",__kv_referrer).setTargeting("ref_domain",__kv_referrer_domain);
                        googletag.pubads().setTargeting("ad_wx_hour",(new Date).getHours().toString()).setTargeting("isForYT", "0");;
    googletag.pubads().disableInitialLoad();
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
// -->

(function(){
  const key = 'ppid-20230704';
  const id = Cookies.get(key)
  if (!id) {
    return;
  }
  function generateHash(message) {
    return new Promise(function(resolve) {
      const msgUint8 = new TextEncoder('utf-8').encode(message);
      crypto.subtle.digest('SHA-256', msgUint8).then(
        function(hashBuffer) {
          const hashArray = Array.from(new Uint8Array(hashBuffer));
          const hashHex = hashArray.map(function(b) {
            return b.toString(16).padStart(2, '0')
          }).join('');
          return resolve(hashHex);
        }
      )
    })
  }
  if ('Promise' in window && 'crypto' in window) {
    generateHash(id).then(function(shatxt) {
      googletag.cmd.push(function() {
        googletag.pubads().setPublisherProvidedId(shatxt)
      })
    }).catch(function(e) {
      console.error(e.message);
    })
  }
})();