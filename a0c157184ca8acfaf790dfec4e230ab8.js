var momowaCmds = momowaCmds || [];
  momowaCmds.push(['setSiteId','shop']);
  momowaCmds.push(['setTrackerUrl','https://momowa.momoshop.com.tw/momowa/rc/RC.MMW']);
  momowaCmds.push(['trackPageView']);
  (function(){
    var _mwa =document.createElement('script');_mwa.type = 'text/javascript';
    _mwa.async = true;
    _mwa.src = 'https://momowa.momoshop.com.tw/momowa/rc/js/momowa.js?t=20170508001';
    var _mwa_s = document.getElementsByTagName('script')[0];
    _mwa_s.parentNode.insertBefore(_mwa,_mwa_s);
  }());