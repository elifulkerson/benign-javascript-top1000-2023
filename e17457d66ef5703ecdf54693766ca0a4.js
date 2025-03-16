(function() {
        var begunTimerId = setInterval(() => {
          if (window.Begun) {
            clearInterval(begunTimerId);
            window.Begun.Autocontext.Callbacks.register({
              block: { drawComplete: (result) => {
                try {
                  if (result && result.viewTypes) {
                    if (result.viewTypes.indexOf('Branding') !== -1) {
                      document.body.classList.add('with-branding');
                    } else if (result.viewTypes.indexOf('Graph970x100') !== -1) {
                      document.body.classList.add('with-mini-billboard');
                    }
                  }
                } catch (e) {}
              }},
            });
          }
        }, 10);
      })();