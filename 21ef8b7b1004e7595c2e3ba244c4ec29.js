(function() {
      let theme = window?.localStorage?.getItem('ci-theme-preference') || 'LIGHT';

      // check ci-app-theme cookie required for native app theme support
      const appTheme = Cookies.get('ci_app_theme') || Cookies.get('ci-app-theme');

      if(appTheme) {
        theme = appTheme;
        window.hsciapp = { theme: appTheme };
      }

      if (theme === 'DARK') {
        document.body.dataset.colorTheme = 'dark';
      }

    })()