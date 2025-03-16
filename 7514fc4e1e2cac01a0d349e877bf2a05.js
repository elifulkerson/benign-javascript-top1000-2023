window.zdconsent.run.push(function() {
        var purl = window.location.href;
        var pid = 2865;
        if (window.zdconsent.gdprApplies) {
          pid = 10247;
        }
        var url = '//ads.pubmatic.com/AdServer/js/pwt/159017/' + pid;
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
      });