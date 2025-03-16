(function (args) {
        /* eslint-disable */
        var region;

        try {
          region = localStorage.getItem('sg.locals.usrId').toUpperCase();
        } catch (e) {}

        var type = region ? 'MANUAL' : 'NONE';
        region = region || 'WARSZAWA';
        window.onetAds.keywords.push(region);
        window.onetAds.keyvalues = window.onetAds.keyvalues || {};
        window.onetAds.keyvalues.city = region;

        if (args.isHomepage) {
          window.onetAds.kropka.DV = region + '/' + type;
          window.onetAds.dv = window.onetAds.DV + '/' + window.onetAds.kropka.DV;
          window.dataLayer.push({
            DV: 'www/' + window.onetAds.kropka.DV
          });
        }

        window.sg_autorefreshwas = false;

        try {
          window.sg_autorefreshwas = localStorage.getItem('sg.autorefresh.time2') > +new Date() - 20000;
          localStorage.removeItem('sg.autorefresh.time2');
        } catch (e) {}

        window.onetAds.noDot = window.sg_autorefreshwas ? 1 : 0;

        if (window.sg_autorefreshwas) {
          try {
            window.dataLayer.push({
              autorefresh: 'true',
              autorefreshType: localStorage.getItem('sg.autorefresh.type')
            });
          } catch (e) {}

          window.onetAds.cmd.push(function (dlApi) {
            dlApi && dlApi.uaEvent && dlApi.uaEvent('AutoRefresh', 'OnetHP');
          });
        } else {
          window.dataLayer.push({
            autorefresh: 'false'
          });
        }
        /* eslint-enable */

      })({"isHomepage":true})