(function() {
                function loadTealiumScript() {
                    var script = document.createElement('script');
                    script.async = true;
                    script.src = '//tags.tiqcdn.com/utag/wsjdn/marketwatch/prod/utag.js';
                    var element = document.getElementsByTagName('script')[0];
                    element.parentElement.insertBefore(script, element);
                }

                __ace('djcmp', 'executeOnCmpReady', [{ cb: loadTealiumScript }]);    
            })();