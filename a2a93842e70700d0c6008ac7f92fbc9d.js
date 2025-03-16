var topHost = document.referrer;
    if (topHost != null && topHost.indexOf('hanyutai.com') >= 0) {
      top.location = 'https://www.zhanqi.tv';
    }
  var _hmt = _hmt || [];
  (function() {
    var src = "//hm.baidu.com/hm.js?299cfc89fdba155674e083d478408f29";
    if( -1 != window.location.host.indexOf('lanstory.com') ){
      src = "https://hm.baidu.com/hm.js?976c61188282f0c6105c5c36ce400dbb";
    } else if( -1 != window.location.host.indexOf('bb.zhanqi.tv') ){
      src = "https://hm.baidu.com/hm.js?3ee607a8c0c0f66c7e24793371719c82";
    } else if((window.location.pathname=='/external/cloudIntenet') || (window.location.pathname=='/external/cloudIntenet/baibian'))  {
      src = "//hm.baidu.com/hm.js?571a375a2453a30dfb75e7abc6b17ae9";
    } else if( window.location.pathname=='/live/embed' ) {
      src = "//hm.baidu.com/hm.js?606469546101f47ff88f66c83792f4d3";
    }
    var hm = document.createElement("script");
    hm.src = src;
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();

    // var _hmt = _hmt || [];
    (function() {
    var hm = document.createElement("script");
      hm.setAttribute('id', 'bf_script_analytics_id');
      hm.src = "https://tj.zhanqi.tv/analytics.js?_k=5&_v=1.2";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
  })();
    window.ykarClick = function(){};