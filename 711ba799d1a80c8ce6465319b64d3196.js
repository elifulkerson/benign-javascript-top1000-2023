(function () {
      /* eslint-disable */
      window.nsglib = window.nsglib || {};

      window.nsglib.setMargin = function () {
        /* empty func */
      };

      window.nsglib.onMarginChange = function () {
        /* empty func */
      };

      window.nsglib.getHeaderSwitchHeight = function () {
        /* empty func */
      };

      window.nsglib.setHeaderSwitchHeight = function () {
        /* empty func */
      };

      window.nsglibCommon = {
        playerSwitcher: {
          disablePlayers: function () {
            window.Event && window.dispatchEvent && window.dispatchEvent(new window.Event('disableHomePagePlayers'));
          },
          enablePlayers: function () {
            window.Event && window.dispatchEvent && window.dispatchEvent(new window.Event('enableHomePagePlayers'));
          }
        }
      };
      /* eslint-enable */
    })({})