var unauth1dsAnalytics;
        $(function () {
            HomePage.init();
            var cookieConsentBannerNeeded = false;

            var viewType = 'NewUserView';

            function initializeLogging() {
                var el = document.getElementById('sharedClientStartupContext');
                var sharedClientStartupContext = el && el.textContent && JSON.parse(el.textContent) || {};

                var unauthConfigEl = document.getElementById('unauthConfig');
                var unauthConfig = unauthConfigEl && unauthConfigEl.textContent && JSON.parse(unauthConfigEl.textContent) || {};
                var analyticsConsentRequired = cookieConsentBannerNeeded && !unauthConfig.userConsentStatus.AnalyticsCookiesConsented;

                var ariaContext = {
                    ariaCollectorUrl: sharedClientStartupContext.ariaCollectorUrl,
                    ariaTenant: sharedClientStartupContext.ariaTenant,
                    authTypeString: '',
                    authVersion: '',
                    cookieConsentRequired: analyticsConsentRequired,
                    corpNet: sharedClientStartupContext.corpNet,
                    correlationId: sharedClientStartupContext.correlationId,
                    deploymentEnvironment: sharedClientStartupContext.deploymentEnvironment,
                    devEnvironment: sharedClientStartupContext.devEnvironment,
                    domainOrigin: sharedClientStartupContext.domainOrigin,
                    features: '',
                    flights: sharedClientStartupContext.flights,
                    geoName: sharedClientStartupContext.geoName,
                    puid: '',
                    requestOrigin: sharedClientStartupContext.requestOrigin,
                    serverBuildDate: sharedClientStartupContext.buildDateUtc,
                    serverBuildId: sharedClientStartupContext.buildId,
                    sessionId: sharedClientStartupContext.sessionId,
                    tenantId: '',
                    testTraffic: sharedClientStartupContext.testTraffic
                };
                StandaloneAriaLogger.Logger.Initialize(ariaContext, true);

                unauth1dsAnalytics = new oneDS.ApplicationInsights();
                var unauth1dsAnalyticsConfigconfig = {
                    instrumentationKey: "aa86c364bc9e4a5a94a6b232c110af26-72da2ec9-498a-44df-8cca-7fd88cf654c1-7527",
                    channelConfiguration: {
                        eventsLimitInMem: 50
                    },
                    propertyConfiguration: {
                        env: "PROD" 
                    },
                    webAnalyticsConfiguration: {
                        urlCollectQuery: false,
                        autoCapture: { 
                            lineage: true,
                            jsError: false
                        },
                        coreData: { 
                            pageName: "UnauthOhp",
                            market: "en-US"
                        },
                    }
                };

                unauth1dsAnalytics.initialize(unauth1dsAnalyticsConfigconfig, []);
                unauth1dsAnalytics.captureContentUpdate();
            }

            function addUnauthTelemetry(){
                $('button, a').on('click', function() {
                    var elementId = $(this).attr("id");
                    if (elementId) {
                        StandaloneAriaLogger.Logger.LogUnauthClick(viewType, elementId);
                    }
                });

                // always log unauth page successfully loaded regardless of page is displayed or not
                StandaloneAriaLogger.Logger.LogEvent('unauth_generic', 'unauth_page_loaded')
                if (!true || (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') === 'true') || 'NewUserView' === 'SignoutUserView' ) {
                    // only log page view if page is displayed
                    StandaloneAriaLogger.Logger.LogUnauthPageView(viewType);
                }
            }

            initializeLogging();
            addUnauthTelemetry();
            // log OTEL PageView event
            if (true) {                
                function initializeOtelLogging() {
                    // TODO: We have to eventually move away from taking dependency on embedded config.
                    var el = document.getElementById('sharedClientStartupContext');
                    var sharedClientStartupContext = el && el.textContent && JSON.parse(el.textContent) || {};

                    var unauthConfigEl = document.getElementById('unauthConfig');
                    var unauthConfig = unauthConfigEl && unauthConfigEl.textContent && JSON.parse(unauthConfigEl.textContent) || {};
                    var analyticsConsentRequired = cookieConsentBannerNeeded && !unauthConfig.userConsentStatus.AnalyticsCookiesConsented;

                    var otelContext = {
                        appName: sharedClientStartupContext.oTelAppName,
                        appPlatform: sharedClientStartupContext.oTelAppPlatform,
                        appWorkload: 'Web', // TODO: Replace the hardcoded value
                        bundleBuildDate: sharedClientStartupContext.buildDateUtc,
                        bundleBuildId: sharedClientStartupContext.buildId,
                        correlationId: sharedClientStartupContext.correlationId,
                        deploymentEnvironment: sharedClientStartupContext.deploymentEnvironment,
                        domainOrigin: sharedClientStartupContext.domainOrigin,
                        eventCategoryConfig: {
                            actionEnabled: sharedClientStartupContext.oTelClickEnabled,
                            diagnosticEnabled: sharedClientStartupContext.oTelDiagnosticEnabled,
                            errorEnabled: sharedClientStartupContext.oTelErrorEnabled,
                            impressionEnabled: sharedClientStartupContext.oTelImpressionEnabled,
                            pageViewEnabled: sharedClientStartupContext.oTelPageViewEnabled,
                            perfEnabled: sharedClientStartupContext.oTelPerfEnabled,
                            requestEnabled: sharedClientStartupContext.oTelRequestEnabled,
                            featureEnabled: sharedClientStartupContext.oTelFeatureEnabled
                            },
                        flights: sharedClientStartupContext.flights,
                        isCorpNet: sharedClientStartupContext.corpNet,
                        isTestTraffic: sharedClientStartupContext.testTraffic,
                        oTelEnabled: sharedClientStartupContext.oTelEnabled,
                        oTelAriaTenant: sharedClientStartupContext.oTelAriaTenant,
                        oTelAriaNameSpace: sharedClientStartupContext.oTelNameSpace,
                        sessionId: sharedClientStartupContext.sessionId,
                        serverLocation: sharedClientStartupContext.geoName,
                        requestOrigin: sharedClientStartupContext.requestOrigin
                    };
                    window.standaloneOteLogger && window.standaloneOteLogger.initializeUnAuthOTel(otelContext);
                }

                function addUnauthOtelTelemetry(){
                    $('button, a').on('click', function() {
                        var elementId = $(this).attr("id");
                        if (elementId) {
                            var actionResult = '';
                            var actionTarget = '';
                            var actionArea = '';
                            var actionTargetId = '';
                            switch (elementId) {
                                // Hero area clicks
                                case 'hero-banner-sign-in-to-office-365-link':
                                    actionResult = 'SignIn';
                                    actionTarget = 'Office';
                                    actionArea = 'Hero';
                                    break;
                                case 'hero-banner-sign-back-in-to-office-365-link':
                                    actionResult = 'SignIn';
                                    actionTarget = 'Office';
                                    actionArea = 'Hero';
                                    break;
                                case 'hero-banner-get-office-link':
                                    actionResult = 'Get';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Home';
                                    actionArea = 'Hero';
                                    break;
                                case 'hero-banner-free-upsell-v1-link':
                                    actionResult = 'SignUp';
                                    actionTarget = 'Office';
                                    actionArea = 'Hero';
                                    break;
                                case 'hero-banner-see-plans-link': 
                                    actionResult = 'Get';
                                    actionTarget = 'Office';
                                    actionArea = 'Hero';
                                    break;
                                case 'hero-banner-free-version-microsoft-365-link':
                                    actionResult = 'SignUp';
                                    actionTarget = 'Microsoft365';
                                    actionArea = 'Hero';
                                    break;
                                case 'hero-banner-premium-plans-microsoft-365-link':
                                    actionResult = 'Get';
                                    actionTarget = 'Microsoft365';
                                    actionArea = 'Hero';
                                    break;
                                case 'hero-banner-sign-in-microsoft-365-link':
                                    actionResult = 'SignIn';
                                    actionTarget = 'Microsoft365';
                                    actionArea = 'Hero';
                                    break;
                                case 'hero-banner-m365-learn-more-link':
                                    actionResult = 'Get';
                                    actionTarget = 'Microsoft365';
                                    actionTargetId = 'LearnMoreM365Copilot';
                                    actionArea = 'Hero';
                                    break;
                                // GetOffice area clicks
                                case 'get-office-today-for-home-link':
                                    actionResult = 'Get';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Home';
                                    actionArea = 'GetOffice';
                                    break; 
                                case 'get-office-today-enterprise-link':
                                    actionResult = 'Get';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Enterprise';
                                    actionArea = 'GetOffice';
                                    break; 
                                case 'get-office-today-for-business-link':
                                    actionResult = 'Get';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Business';
                                    actionArea = 'GetOffice';
                                    break; 
                                case 'get-office-today-edu-link':
                                    actionResult = 'Get';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Education';
                                    actionArea = 'GetOffice';
                                    break;
                                // UniversalHeader area clicks
                                case 'BuyOffice365':
                                    actionResult = 'Get';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Home';
                                    actionArea = 'UniversalHeader';
                                    break;
                                case 'shy-header-consumer-signup-for-free':
                                    actionResult = 'SignUp';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Home';
                                    actionArea = 'ShyHeader';
                                    break;
                                case 'shy-header-consumer-go-premium':
                                    actionResult = 'Get';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Home';
                                    actionArea = 'ShyHeader';
                                    break;
                                case 'shy-header-consumer-sign-in':
                                    actionResult = 'SignIn';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Home';
                                    actionArea = 'ShyHeader';
                                    break;
                                case 'shy-header-commercial-try-for-free':
                                    actionResult = 'SignUp';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Business';
                                    actionArea = 'ShyHeader';
                                    break;
                                case 'shy-header-commercial-see-plans-and-pricing':
                                    actionResult = 'Get';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Business';
                                    actionArea = 'ShyHeader';
                                    break;
                                case 'shy-header-commercial-sign-in':
                                    actionResult = 'SignIn';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Business';
                                    actionArea = 'ShyHeader';
                                    break;
                                case 'shy-header-edu-sign-up':
                                    actionResult = 'SignUp';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Education';
                                    actionArea = 'ShyHeader';
                                    break;
                                case 'shy-header-edu-sign-in':
                                    actionResult = 'SignIn';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Education';
                                    actionArea = 'ShyHeader';
                                    break;
                                case 'unauth-tab-home':
                                    actionResult = 'NavigateTabs';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Home';
                                    actionArea = 'Tabs';
                                    break;
                                case 'unauth-tab-commercial':
                                    actionResult = 'NavigateTabs';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Business';
                                    actionArea = 'Tabs';
                                    break;
                                case 'unauth-tab-edu':
                                    actionResult = 'NavigateTabs';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Education';
                                    actionArea = 'Tabs';
                                    break;
                                case 'unauth-tab-home--footer':
                                    actionResult = 'NavigateTabs';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Home';
                                    actionArea = 'Tabs';
                                    break;
                                case 'unauth-tab-commercial--footer':
                                    actionResult = 'NavigateTabs';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Business';
                                    actionArea = 'Tabs';
                                    break;
                                case 'unauth-tab-edu--footer':
                                    actionResult = 'NavigateTabs';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Education';
                                    actionArea = 'Tabs';
                                    break;
                                // Mobile download clicks
                                case 'app-store-link':
                                    actionResult = 'Download';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Mobile';
                                    actionArea = 'Footer';
                                    break;
                                case 'mobile-app-banner-app-store-link':
                                    actionResult = 'Download';
                                    actionTarget = 'Office';
                                    actionTargetId = 'Mobile';
                                    actionArea = 'Hero';
                                    break;
                                default:
                                    actionResult = 'Navigate';
                                    actionTarget = 'Other';
                            }
                            window.standaloneOteLogger && window.standaloneOteLogger.logUnAuthUserAction({ id: elementId, area: actionArea, result: actionResult, target: actionTarget, targetId: actionTargetId, pageName: 'OfficeHome', pageType: viewType});
                        }
                    });

                    if (!true || (isSessionStorageAvailable && sessionStorage.getItem('DefaultSignInCalledBefore') === 'true') || 'NewUserView' === 'SignoutUserView' ) {
                        // only log page view if page is displayed
                        window.standaloneOteLogger && window.standaloneOteLogger.logPageView({ pageName: 'OfficeHome', pageType: viewType, isIntentional: true}, true);
                    }
                }
                initializeOtelLogging();
                addUnauthOtelTelemetry();  
            }
        });