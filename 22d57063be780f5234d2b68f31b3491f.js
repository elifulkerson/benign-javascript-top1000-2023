(function() {
                        var html = document.documentElement;
                        var buildNumberAttribute = 'data-cw-private-build-number';
                        var masteringNumberAttribute = 'data-cw-private-mastering-number';

                        window._BUILD_INFO_FOR_GLOBAL_ERROR_HANDLERS = {
                            buildNumber: html.getAttribute(buildNumberAttribute),
                            masteringNumber: html.getAttribute(masteringNumberAttribute),
                            locale: html.getAttribute("lang")
                        };
                        window._BUILD_INFO_FOR_GLOBAL_ERROR_HANDLERS.jsFiles = [];
                    })();