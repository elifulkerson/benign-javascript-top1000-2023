function dispatchGoogleOneTapMomentEvent(notification) {
            window.dispatchEvent(new CustomEvent('googleOneTapDisplayed', { detail: notification.isDisplayed() }));
        }