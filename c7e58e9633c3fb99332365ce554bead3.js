(function () {
    window.ddjskey = '7FC6D561817844F25B65CDD97F28A1';
    window.ddoptions = {
      ajaxListenerPath: [
        { host: 'soundcloud.com', path: 'comments', strict: true },
        { host: 'soundcloud.io', path: 'comments', strict: true },
      ],
      overrideAbortFetch: true,
      sessionByHeader: true,
      cookieName: 'datadome',
      endpoint: 'https://dwt.soundcloud.com/js/',
      disableAutoRefreshOnCaptchaPassed: true
    };
  })();