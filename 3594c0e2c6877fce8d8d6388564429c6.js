window.PARSELY = window.PARSELY || {
  autotrack: false,
  use_localstorage: true,
  onReady: function() {
    function getCookieValue(cookieName) {
      const cookies = document.cookie.split(';').map(cookie => cookie.trim());
      const cookie = cookies.find(cookie => cookie.startsWith(cookieName + '='));
      if (cookie) {
        const parts = cookie.split('=', 2);
        if (parts.length == 2) {
          const cookieValue = parts[1];
          return decodeURIComponent(cookieValue);
        } else {
          return null;
        }
      } else {
        return null;
      }
    }

    const data = {
      campaign_internal: '',
      customer_type: 'guest',
    };
    
    const searchParams = new URLSearchParams(window.location.search);
    for (const [key, value] of searchParams.entries()) {
      if (key.toLowerCase() === 'ilc') {
        data.campaign_internal = value;
        break;
      }
    }

    const acsNgnCookieValue = getCookieValue('acs_ngn');
    if (acsNgnCookieValue && acsNgnCookieValue.indexOf('&eid') > -1) {
      data.customer_type = 'registered';
    }
    window.PARSELY.updateDefaults({ data });
    window.PARSELY.beacon.trackPageView();
  }
};