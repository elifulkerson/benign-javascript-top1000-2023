var googletag = googletag || {}; 
    googletag.cmd = googletag.cmd || []; 
    (function() { 
        var gads = document.createElement('script'); 
        gads.async = true; 
        gads.type = 'text/javascript'; 
        var useSSL = 'https:' == document.location.protocol; 
        gads.src = (useSSL ? 'https:' : 'http:') +  '//securepubads.g.doubleclick.net/tag/js/gpt.js';
        document.getElementsByTagName('head')[0].appendChild(gads);
    })();

    var PWT = {};
    (function() { 
        var purl = window.location.href;
        var url = '//ads.pubmatic.com/AdServer/js/pwt/23105/3450';
        var profileVersionId = '';
        if (purl.indexOf('pwtv=') > 0) {
            var regexp = /pwtv=(.*?)(&|$)/g;
            var matches = regexp.exec(purl);
            if (matches.length >= 2 && matches[1].length > 0) {
                profileVersionId = '/' + matches[1];
            }
        }
        var wtads = document.createElement('script');
        wtads.async = true;
        wtads.type = 'text/javascript';
        wtads.src = url + profileVersionId + '/pwt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(wtads, node);
    })();