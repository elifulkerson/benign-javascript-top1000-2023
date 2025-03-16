StackExchange.ready(function() {

                var ga3Settings = {
                    autoLink: ["stackoverflow.blog","info.stackoverflowsolutions.com","stackoverflowsolutions.com"],
                    sendTitles: true,
                    tracker: window.ga,
                    trackingCodes: [
                        'UA-108242619-5'
                    ],
                    checkDimension: 'dimension42'
                                                    };

                var customGA4Dimensions = {};



                var ga4Settings = {
                    tracker: gtag,
                    trackingCodes: [
                        'G-S812YQPLT2'
                    ],
                    consentsToPerformanceCookies: "denied",
                    consentsToTargetingCookies: "denied",
                    eventParameters: customGA4Dimensions,
                    checkForAdBlock: true,
                    sendTitles: true,
                    trackClicks: false,
                };

                StackExchange.ga.init({ GA3: ga3Settings, GA4: ga4Settings });




                StackExchange.ga.setDimension('dimension3', 'Home/Index');


                StackExchange.ga.setDimension('dimension7', "1697433547.1931754419");

                StackExchange.ga.trackPageView();
            });