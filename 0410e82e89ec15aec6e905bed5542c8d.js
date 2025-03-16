function initPiwik(){
            var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView', document.title, {
                dimension2: 'pg_index',
                dimension3: SF.devicePixelRatio,
                
            }]);
            _paq.push(['enableLinkTracking']);

            (function() {
                var u="//analytics.slashdotmedia.com/";
                _paq.push(['setTrackerUrl', u+'sf.php']);
                _paq.push(['setSiteId', 39]);

                  
                var interval = 6 * 60 * 60 * 1000; // 6 hrs, expressed in ms
                var vid_date = new Date(localStorage.getItem('vid_date'));
                if (new Date() - vid_date >= interval) {
                    _paq.push([ function() {
                        $.post({
                            url: '/p/sfapi/push_vid',
                            data: JSON.stringify({
                                bombora_id: "36def71b-fcba-4de4-945f-faf13569d591",
                                matomo_id: this.getVisitorId()
                            })
                        })
                        .always(function(){
                            localStorage.setItem('vid_date', new Date());
                        });
                    }]);
                }
                

                var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'sf.js'; s.parentNode.insertBefore(g,s);
            })();
        }
        bizx.cmp.ifConsent('publisher', ['storage', 'measurement'], initPiwik);