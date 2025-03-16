const featureFlagsString = document.cookie
        .split(';')
        .map(i => i.trim().split('='))
        .find((i = []) => i[0] === 'efg_state')?.[1] || '';
      const isOTEnabled = featureFlagsString.includes(
        '6ea1aab70e1211c191db6aada783cca47fd0bc644a9d6921831a10e5f9e63dae%22%2Ctrue'
      );
      const shouldLoadOT = isOTEnabled && "" && "";
      const script = document.createElement('script');

      if (shouldLoadOT) {
        script.setAttribute('src', '');
        script.setAttribute('type', 'text/javascript');
        script.setAttribute('charset', 'UTF-8');
        script.setAttribute(
          'data-domain-script',
          ''
        );

        window.OptanonWrapper = function () {};
      } else {
        script.setAttribute('type', 'application/javascript');
        script.setAttribute('defer', true);
        script.setAttribute(
          'companyid',
          '2796'
        );
        script.setAttribute('src', 'https://c.evidon.com/dg/dg.js');
      }

      document.currentScript.after(script);