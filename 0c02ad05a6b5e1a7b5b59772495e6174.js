SfdcWwwBase = SfdcWwwBase || [];
            SfdcWwwBase.gdpr = SfdcWwwBase.gdpr || [];

            $.when(SfdcWwwBase.gdpr.hasAdvertising).done(function(){
              if (SfdcWwwBase.gdpr.isAdvertisingActive()) {
                window.optimizelyEdge = window.optimizelyEdge || [];

                window.optimizelyEdge.push({ type : 'holdEvents' });
                window.addEventListener('load', function() {
                    window.optimizelyEdge.push({ type : 'sendEvents'});
                });

                var scriptSrc = document.querySelector('.optScriptUrl').dataset.src;
                var script = document.createElement('script');
                script.setAttribute('src', scriptSrc);
                document.head.appendChild(script);
              }
            });