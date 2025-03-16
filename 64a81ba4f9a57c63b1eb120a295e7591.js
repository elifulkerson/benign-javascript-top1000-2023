var _gaq = _gaq || [];
            _gaq.push(['_setAccount', 'UA-7409099-1']);
            _gaq.push(['_setDomainName', 'olx.pl']);
            _gaq.push(['_trackPageview']);

            (function () {
                var ga, s;
                if (!_adblock) {
                    ga = document.createElement('script');
                    ga.type = 'text/javascript';
                    ga.async = true;
                    ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
                    s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ga, s);
                } else {
                    ga = document.createElement('script');
                    ga.type = 'text/javascript';
                    ga.async = true;
                    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                    s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(ga, s);
                }
                if (typeof dataLayer != 'undefined') {
                    if (_adblock) {
                        dataLayer.push({'event': 'adblock'});
                    } else {
                        dataLayer.push({'event': 'no_adblock'});
                    }
                }
            })();