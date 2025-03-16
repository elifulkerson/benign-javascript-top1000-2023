if (window.cnqr && window.cnqr.coreui && window.cnqr.coreui.AppHeader) {
            window.cnqr.coreui.headerProps = {"useFullWidth":true,"stretchContent":true,"useSmallViewportBreakpoints":true,"showLanguageDropdown":true,"lang":"en","menuData":{},"brandingId":12,"themeName":"concur_default","fullName":"","isLoggedIn":false};

            // convert "function" strings to real functions
            var logoutUserFunc = new Function('return ' + window.cnqr.coreui.headerProps.logoutUser)();
            window.cnqr.coreui.headerProps.logoutUser = logoutUserFunc;

            var onEndSessionFunc = new Function('return ' + window.cnqr.coreui.headerProps.onEndSession)();
            window.cnqr.coreui.headerProps.onEndSession = onEndSessionFunc;

            var onStartSessionFunc = new Function('return ' + window.cnqr.coreui.headerProps.onStartSession)();
            window.cnqr.coreui.headerProps.onStartSession = onStartSessionFunc;

            window.cnqr.coreui.AppHeader.render(window.cnqr.coreui.headerProps, "app-header-container");
        }