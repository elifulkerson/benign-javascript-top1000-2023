var ninjaTracker = function(event) {
        if (typeof NinjaTracker !== 'undefined') {
            NinjaTracker.push(NinjaTracker.mergeValidOptionalParams(
                NinjaTracker.getDataFrom(trackingData.pageView),
                {
                    'trackEvent': [event],
                    'action_type': event
                }
            ));
        }
    };
    var recaptchaOnLoadCallback = function() {
        if (!!window.AdObj === false && !!window.AdClass) {
            window.AdObj = new window.AdClass();
        } else if (!!window.AdClass === false) {
            ninjaTracker('captcha_displayed');
        }
        if (window.phoneViewRecaptcha && !!window.AdObj) {
            window.AdObj.initShowNumberWithCaptcha();
        }
    }
    var recaptchaSuccessCallback = function() {
        if (!!window.AdClass === false) {
            ninjaTracker('captcha_success');
        }
    }
    var recaptchaExpiredCallback = function() {
        if (!!window.AdClass === false) {
            ninjaTracker('captcha_failure');
        }
    }
    var recaptchaErrorCallback = function() {
        if (!!window.AdClass === false) {
            ninjaTracker('captcha_failure');
        }
    }