(function () {
              require.config({
                    baseUrl: 'https://gn-web-assets.api.bbc.com/wwhp/20231002-0838-5d0dcf5e27a0ba9dbd50855514788487438f6a71/modules',
                    paths: {
                        'bump-3': 'https://emp.bbci.co.uk/emp/bump-4/bump-4',
                        'domReady': 'vendor/require/domReady',
                        'jquery': 'vendor/jquery/jquery'
                    },
                    map: {
                        '*': {
                            jquery: 'jquery'
                        }
                    },
                    shim: {
                        'vendor/bower/underscore/underscore': {
                            exports: '_'
                        },
                        'vendor/bower/js-breakpoints/breakpoints': {
                            exports: 'Breakpoints'
                        },
                        'vendor/bower/cookie-monster/cookie-monster': {
                            exports: 'monster'
                        }
                    }
                });

                // FIXME: Should be in ads.js, however some devices return ads before ads is able to register to event.
                if (window.bbcdotcom && bbcdotcom.pubsub) {
                      var stickyOptions = {
                      "leaderboard": {
                          "offset": {
                              "from": ['.module--leaderboard'],
                              "to": ['.module--promo', 'bottom']
                          },
                          "applyTo": "parent",
                          "heightLimit": 150,  //don't add sticky if ad is taller than this number
                          "offsetType": "include",
                          "parallax": false
                        },
                      "mpu": {
                          "offset": {
                              "from": ['.content--block--modules section:first-child .module__content'],
                              "to": ['.content--block--modules section:last-child', 'bottom']
                          },
                          "offsetType": "include",
                      },
                      /*
                      "mpu_bottom": {
                        "offset": {
                            "from": ['.module--editors-picks .runway--wrapper'],
                            "to": ['.module--editors-picks .runway--wrapper', 'bottom']
                        },
                        "offsetType": "include"
                      }
                      */
                    };

                    bbcdotcom.pubsub.on('ad:done', function(id) {
                        if(stickyOptions[id]) {
                            bbcdotcom.stickyAdvert().add(id, document.getElementById('bbccom_'+id), stickyOptions[id]);
                        }
                    });
                }

                if (window.bbcdotcom) {
                    bbcdotcom.init({ adsToDisplay: ["parallax","leaderboard","native","mpu","platinum","infeed","module_feature-1","module_feature-2","mpu_bottom"] });

                    require(["domReady","compiled"], function (domReady) {
                        domReady(function () {
                            require(['app'], function (app) {
                                app.init(window, {
                                  staticPrefix: 'https://gn-web-assets.api.bbc.com/wwhp/20231002-0838-5d0dcf5e27a0ba9dbd50855514788487438f6a71/',
                                  continuousPlayEnabled: true,
                                  counterName: 'home.page',
                                  producer: 'GNL_HOMEPAGE',
                                  destination: 'HOMEPAGE_GNL'
                                });
                            });
                        });
                    });
                }

            }());