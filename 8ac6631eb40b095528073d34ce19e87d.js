var cssLinks = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < cssLinks.length; i++) {
      cssLinks[i].addEventListener('error', function(e) {
        (window['_pfl'] = window['_pfl'] || []).push(['css', e.target.href]);
      });
    }