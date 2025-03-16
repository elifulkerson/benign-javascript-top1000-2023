var _sf_async_config={};

  _sf_async_config.uid = 3877;
  _sf_async_config.domain = 'genius.com';
  _sf_async_config.title = '';
  _sf_async_config.sections = '';
  _sf_async_config.authors = '-';

  var _cbq = window._cbq || [];

  (function(){
    function loadChartbeat() {
      window._sf_endpt=(new Date()).getTime();
      var e = document.createElement('script');
      e.setAttribute('language', 'javascript');
      e.setAttribute('type', 'text/javascript');
      e.setAttribute('src', 'https://static.chartbeat.com/js/chartbeat.js');
      document.body.appendChild(e);
    }
    var oldonload = window.onload;
    window.onload = (typeof window.onload != 'function') ?
       loadChartbeat : function() { oldonload(); loadChartbeat(); };
  })();