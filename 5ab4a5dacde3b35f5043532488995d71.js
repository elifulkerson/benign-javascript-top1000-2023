/*<![CDATA[*/
    (function() {
  function loadJs(url) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      script.async = true;
      document.getElementsByTagName('body')[0].appendChild(script);
  }
     window.bbcuser.isUKCombined().then(function(isUK) {
       if (isUK) {
         loadJs('https://static.files.bbci.co.uk/orbit/5a8ec94896da71da973ac21ff3e4e12c/js/edr.js');
       }
     });
   })();
   /*]]>*/