function loadTealiumScript() {
      const utagScript = document.createElement('script');
      utagScript.src="//tags.tiqcdn.com/utag/wsjdn/wsj/prod/utag.js";
      utagScript.async = true;
      document.body.appendChild(utagScript);
    }

    if (window.__ace && typeof window.__ace === 'function') {
      window.__ace('djcmp', 'executeOnCmpReady', [{ cb: loadTealiumScript }]);
    } else {
      loadTealiumScript();
    }