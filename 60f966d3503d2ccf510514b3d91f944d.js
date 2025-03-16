function getExternalJS(source) {
        var script = document.createElement('script');

        script.src = source + '?1697433300';

        if (source.indexOf('?') >= 0) {
            script.src = source + '&1697433300';
        }

        script.async = true;
        document.head.appendChild(script);
    }

    window.providerConfig = [];

    var cac_ext_scripts = {
        always: ["\/\/a.bf-ad.net\/adengine\/chip\/adengine.js","\/\/content.chip.de\/cac\/adconfig.js","\/\/content.chip.de\/cac\/cabq.js","\/\/content.chip.de\/cac\/huibuh.js"],
        desktop: [],
        tablet: [],
        smartphone: []
    };

    for (var i = 0; i < cac_ext_scripts.always.length; i++) {
        getExternalJS(cac_ext_scripts.always[i]);
    }

    var layoutScripts = cac_ext_scripts[app_nexus.view];
    if (layoutScripts !== null) {
        for (i = 0; i < layoutScripts.length; i++) {
            getExternalJS(layoutScripts[i]);
        }
    }

    window.addEventListener('DOMContentLoaded', function() {
        document.body.classList.add('is-' + app_nexus.view);
    });