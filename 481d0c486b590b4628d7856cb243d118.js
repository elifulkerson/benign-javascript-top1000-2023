(function(w,d,t) {
        function cc() {
            var h = w.location.hostname;
            if (h.indexOf('preview-www.nature.com') > -1) return;

            var e = d.createElement(t),
                    s = d.getElementsByTagName(t)[0];

            if (h.indexOf('nature.com') > -1) {
                if (h.indexOf('test-www.nature.com') > -1) {
                    e.src = 'https://cmp-static.nature.com/production_live/consent-bundle-8-23.js';
                    e.setAttribute('onload', "initGTM(window,document,'script','dataLayer','GTM-MRVXSHQ')");
                } else {
                    e.src = 'https://cmp-static.nature.com/production_live/consent-bundle-8-23.js';
                    e.setAttribute('onload', "initGTM(window,document,'script','dataLayer','GTM-MRVXSHQ')");
                }
            } else {
                e.src = '/static/js/cookie-consent-es5-bundle-2b0f06c1e4.js';
                e.setAttribute('data-consent', h);
            }
            s.insertAdjacentElement('afterend', e);
        }

        cc();
    })(window,document,'script');