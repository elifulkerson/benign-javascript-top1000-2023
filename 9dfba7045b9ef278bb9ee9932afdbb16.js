(function (props) {
          /* eslint-disable */
          window.paywall = window.paywall || {};

          if (!window.paywall.config) {
            window.paywall.config = props.config;
          }

          window.openLoginLayer = () => {
            window.dispatchEvent(new Event('openLoginLayer'));
          };

          window.logoutUser = () => {
            window.dispatchEvent(new Event('logoutUser'));
          };

          window.paywall.config.controlAuthorisation = true;
          window.paywall.config.loginMethod = window.openLoginLayer;
          window.paywall.config.registerMethod = window.openLoginLayer;
          window.paywall.config.logoutMethod = window.logoutUser;
          /* eslint-enable */
        })({"config":{"tags":["tp_page_hp"],"env":"prod","tenant":"onet","aid":"soetsSSfpe","gaAnalytics":true,"schemaOrg":"Onet - Jesteś na bieżąco","kontoDomain":"konto.onet.pl","premiumContainerId":"contentPremium","clientId":"","contentSection":null,"autoLoadPiano":false,"autoLoadConfig":false}})