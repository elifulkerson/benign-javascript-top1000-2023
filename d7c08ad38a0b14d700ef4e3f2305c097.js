StackExchange.ready(function() {

                var ga3Settings = {
                    autoLink: ["stackoverflow.blog","info.stackoverflowsolutions.com","stackoverflowsolutions.com"],
                    sendTitles: true,
                    tracker: window.ga,
                    trackingCodes: [
                        'UA-108242619-1'
                    ],
                    checkDimension: 'dimension42'
                                                    };

                var customGA4Dimensions = {};



                var ga4Settings = {
                    tracker: gtag,
                    trackingCodes: [
                        'G-WCZ03SZFCQ'
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


                StackExchange.ga.setDimension('dimension7', "1697422170.1551704620");

                StackExchange.ga.trackPageView();
            });