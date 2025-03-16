var sentryMethodsToSave = ['setUser', 'setTag', 'setTags', 'setExtra', 'setExtras', 'addBreadcrumb', 'setContext'];
        window.Sentry = {
            _lazy: true
        };
        var sentryLazyCallsQueue = [];
        var sentryLazyHandler = function () {
            var args = Array.prototype.slice.call(arguments)
            var methodName = args[0];
            var rest = args.slice(1);

            sentryLazyCallsQueue.push([methodName, rest])
        };

        sentryMethodsToSave.forEach(function (methodName) {
            window.Sentry[methodName] = sentryLazyHandler.bind(this, methodName);
        });

        function applySentryLazyData() {
            if (!sentryLazyCallsQueue) return;

            for (var i = 0; i < sentryLazyCallsQueue.length; i++) {
                var args = sentryLazyCallsQueue[i];
                var methodName = args[0];
                var restArgs = args[1];
                var method = window.Sentry[methodName];

                method && typeof method === 'function' && method.apply(window.Sentry, restArgs);
            }

            sentryLazyCallsQueue = undefined;
        }

        var errors = window.APPERROR ? (window.APPERROR.errors || []) : []
        var UGERROR = {
            errors,
            loggerLoaded: false,
        };
        var oldOnError = window.onerror;
        var loadScript = function (src, resolve) {
            UGERROR.loggerLoaded = true;
            var script = document.createElement('script');
            script.async = true;
            script.type = 'text/javascript';
            script.src = src;

            var changeState = function () {
                if (!loaded) {
                    resolve()
                    loaded = true;
                }
            };
            var loaded;

            script.onreadystatechange = changeState;
            script.onload = changeState;

            var node = document.getElementsByTagName('script')[0];
            node.parentNode.insertBefore(script, node);
        };

        UGERROR.loadErrorLogger = function (release) {
            var whitelistUrls = [
                new RegExp('https://www.ultimate-guitar.com/static/public'),
            ];

            if (window.location.pathname !== '/') {
                whitelistUrls.push(new RegExp(window.location.href))
            }

            var tags = {
                source: 'ug',
                country: 'US',
                isProUser: false,
                isAuthenticated: false,
                userId: '0',
            };

            !UGERROR.loggerLoaded && loadScript('https://www.ultimate-guitar.com/static/public/build/sentry_0_0_2/sentry_ver1697208206.js', function () {
                console.log('[sentry]:', 'bundle successfully loaded')
                window.onerror = oldOnError;

                window.initSentry({
                    dsn: 'https://71cf858585c249f5b0f360c3ab811c84@sentry10.ultimate-guitar.com/7',
                    release: release,
                    allowUrls: whitelistUrls
                });

                window.Sentry.setTags(tags);
                window.Sentry.setUser({
                    userId: '0'
                });
                window.Sentry.setContext('Client a/b variations', {"2681":2,"2801":1,"3289":3,"3304":2,"3409":2,"3448":1,"3457":1,"2513":3,"2738":2,"3115":3,"3412":1,"3442":2});

                applySentryLazyData();

                var messages = UGERROR.errors.map(function (err) {
                    return err[0];
                });
                UGERROR.errors
                    .filter(function (error, index) {
                        return messages.indexOf(error[0]) === index;
                    })
                    .forEach(function (args) {
                        var error = args[0];

                        if (args.length > 1) {
                            window.onerror.apply(this, args);
                        } else if (typeof error === 'string') {
                            window.Sentry.captureMessage(error, 'error');
                        } else {
                            if (error === undefined) {
                                error = new Error('Caught undefined error');
                            }

                            window.Sentry.captureException(error);
                        }
                    });
            })
        };

        function loadSentry() {
            if (UGERROR.hasFirstError) {
                return
            }

            function load() {
                UGERROR.loadErrorLogger("ug-web_app_1.02.82");
            }

            if (document.readyState === 'complete') {
                load();
            } else {
                window.addEventListener('load', load)
            }
            UGERROR.hasFirstError = true
        }

        if (UGERROR.errors && UGERROR.errors.length > 0) {
            loadSentry()
        }

        window.onerror = function () {
            UGERROR.errors.push(arguments);
            oldOnError && oldOnError.apply(this, arguments);

            var message = typeof arguments[0] === 'object' && arguments[0].message
            if (typeof message === 'string' && message.toLowerCase().indexOf('loading chunk') && window.UGAPP.trigger) {
                window.UGAPP.trigger('globalEvent:YM:metrica', 'Chunk Load Error')
            }

            loadSentry();
        };