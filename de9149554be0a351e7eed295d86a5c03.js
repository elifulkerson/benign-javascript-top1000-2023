if (window.androidBridge || window.iosBridge) {
            var match, minVersion = null, version = {};
            if (window.androidBridge) {
                var ua = navigator.userAgent.toLowerCase();
                    match = ua.match(/android\s(\d+).?(\d+)?.?(\d+)?/);
                    minVersion = {major: 5, minor: 0, build: 0};
                } else if (window.iosBridge) {
                match = navigator.userAgent.match(/OS\s(\d+)_?(\d+)?_?(\d+)?/);
                    minVersion = {major: 0, minor: 0, build: 0};
                }
            version.major = match && match[1] ? parseInt(match[1], 10) : 0;
            version.minor = match && match[2] ? parseInt(match[2], 10) : 0;
            version.build = match && match[3] ? parseInt(match[3], 10) : 0;
            var isOSSupported = version.major >= minVersion.major;
            if (version.major === minVersion.major) {
                isOSSupported = version.minor >= minVersion.minor;
            }
            if (version.major === minVersion.major && version.minor === minVersion.minor) {
                isOSSupported = version.build >= minVersion.build;
            }
            if (!isOSSupported) {
                window.location.replace('https://www.spiegel.de/app-update');
            }
        } else {
            var isBrowserSupported = window.CSS && window.CSS.supports('color', 'var(--primary)')
            if (!isBrowserSupported) {
                window.location.replace('https://www.spiegel.de/browser-update');
            }
        }