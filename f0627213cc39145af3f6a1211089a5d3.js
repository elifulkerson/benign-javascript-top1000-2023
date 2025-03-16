(function() {
                var html = document.documentElement;
                var pathPrefixAttribute = 'data-cw-private-path-prefix';
                var buildNumberAttribute = 'data-cw-private-build-number';
                var masteringNumberAttribute = 'data-cw-private-mastering-number';

                window.__CW_PATH_PREFIX = html.getAttribute(pathPrefixAttribute);
                window.__CW_BUILD_INFO = {
                    buildNumber: html.getAttribute(buildNumberAttribute),
                    masteringNumber: html.getAttribute(masteringNumberAttribute),
                    locale: html.getAttribute("lang")
                };

                html.removeAttribute(pathPrefixAttribute);
                html.removeAttribute(buildNumberAttribute);
                html.removeAttribute(masteringNumberAttribute);
            })();