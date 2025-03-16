if (typeof gtaregeting == 'undefined') var gtaregeting = "diğer";
    var googletag = googletag || {};
    window.googletag = window.googletag || {cmd: []};

    googletag.cmd = googletag.cmd || [];
    googletag.cmd.push(function() {
        googletag.pubads().enableSingleRequest();
        googletag.pubads().setTargeting('kategori', [gtaregeting]);
        googletag.enableServices();
    });