if (window.cnqr && window.cnqr.coreui && window.cnqr.coreui.AppIdleTimer) {
            window.cnqr.coreui.idleTimerProps = {"brandingId":12,"themeName":"concur_default","isLoggedIn":false,"lang":"en","logoutUser":"function() {window.location.href = \"/nui/signin/nui-auth/api/signout?signedout=inactivity\";}","pingSession":"function() {fetch(\"/nui/signin/nui-auth/api/session?touchOnly=true\", {credentials: \"same-origin\"});}"};

            // convert "function" strings to real functions
            var logoutUserFunc = new Function('return ' + window.cnqr.coreui.idleTimerProps.logoutUser)();
            window.cnqr.coreui.idleTimerProps.logoutUser = logoutUserFunc;

            var pingSessionFunc = new Function('return ' + window.cnqr.coreui.idleTimerProps.pingSession)();
            window.cnqr.coreui.idleTimerProps.pingSession = pingSessionFunc;

            window.cnqr.coreui.AppIdleTimer.render(window.cnqr.coreui.idleTimerProps, "app-idle-timer-container");
        }