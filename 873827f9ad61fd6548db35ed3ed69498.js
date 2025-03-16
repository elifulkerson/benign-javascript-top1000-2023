$(window).on('load', function (){
    setTimeout(function(){
      var script = document.createElement('script');
      script.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
      document.getElementsByTagName('head')[0].appendChild(script);
      
            var PWT={}; //Initialize Namespace
      window.googletag = window.googletag || {cmd: []};
         PWT.jsLoaded = function(){
        (function() {
             var gads = document.createElement('script');
             gads.async = true;
             gads.type = 'text/javascript';
             var useSSL = 'https:' == document.location.protocol;
             //Enable synchronous requests start
             var src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
             document.write('<scr' + 'ipt src="' + src + '"></scr' + 'ipt>');
             //Enable synchronous requests end
             gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
             var node = document.getElementsByTagName('script')[0];
             node.parentNode.insertBefore(gads, node);
          })();
        };
        (function() {
            var purl = window.location.href;
            var url = '//ads.pubmatic.com/AdServer/js/pwt/157005/907';
            var profileVersionId = '';
            if(purl.indexOf('pwtv=')>0){
                var regexp = /pwtv=(.*?)(&|$)/g;
                var matches = regexp.exec(purl);
                if(matches.length >= 2 && matches[1].length > 0){
                    profileVersionId = '/'+matches[1];
                }
            }
            var wtads = document.createElement('script');
            wtads.async = true;
            wtads.type = 'text/javascript';
            wtads.src = url+profileVersionId+'/pwt.js';
            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(wtads, node);
        })();
          },1);
  });