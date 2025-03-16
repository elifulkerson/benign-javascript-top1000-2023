sdRequire.push([['sd/core/settings'], function (Settings)
      {
          Settings.minify = '9227';
          Settings.securityToken = 'guest';
          Settings.email = '',
          Settings.pageDisplayedTimestamp = Math.floor(Date.now() / 1000);
          Settings.pageGeneratedTimestamp = '1697431553';
          Settings.userActivityDealAlertsTrackingEnabled = true;
          Settings.stickyGlobalHeader = true;
          Settings.app = {
            'environment': 'prod',
            'debug': false,
          };

                }]);