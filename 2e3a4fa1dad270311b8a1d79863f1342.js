(function(win, undefined) {
        var tests = [];

        // add tests here
        tests.push(function() {
            return 'CSS' in win && CSS.supports('display', 'grid');
        });

        // run all tests
        var length = tests.length;
        var idx = 0;
        var supported = true;

        for (idx = 0; supported && idx < length; idx += 1) {
            supported = tests[idx]();
        }

        // display banner
        if (!supported) {
            var doc = win.document;
            var alertBanner = doc.createElement('div');
            var alertContent = alertBanner.cloneNode('div'); // performence best pratice
            var bannerText = doc.createTextNode("La version de votre navigateur n'est plus supportée, l'expérience sur le site sera dégradée. Si vous ne pouvez ni mettre à jour votre navigateur, ni en changer, sachez que le site est consultable sur mobile à la même adresse.");

            alertBanner.className = "alert-deprecated-banner alert-info";
            alertContent.className = "alert-content";

            var body = doc.body;
            var head = doc.getElementsByTagName('head')[0];

            var header = doc.getElementById('main-header');
            var link = doc.createElement('link');

            alertContent.appendChild(bannerText);
            alertBanner.appendChild(alertContent);

            body.insertBefore(alertBanner, header || body.firstChild);
            body.className += ' deprecated';

            // @todo css deprecated
            link.setAttribute('href', 'https\u003A\/\/assets.allocine.fr\/skin\/css\/allocine\/deprecated.min.ddcfab92.css');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            head.appendChild(link);
        }
    })(window);