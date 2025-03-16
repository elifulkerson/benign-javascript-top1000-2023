var handleLoadScript = function () {
      window.clearTimeout(timeout);
      loadScript();
    }
    WP.push(function () {

      if (isLogout && typeof source !== 'undefined') {
        var logoutConfigMap = {
          pwp_lo_desktop: {
            rekid: 238586,
            slotNumber: 55,
            redirectUrl: '?src02=pwp_lo_desktop&utm_source=pocztawp_lo_desktop',
          },
          po2_lo_desktop: {
            rekid: 238593,
            slotNumber: 18,
            redirectUrl: '?src02=po2_lo_desktop&utm_source=pocztao2_lo_desktop'
          }
        }

        var logoutConfig = logoutConfigMap[source]

        if (!logoutConfig) {
          WP.gaf.loadBunch('7757', handleLoadScript, true);
          return
        }

        document.onreadystatechange = function () {
          if (document.readyState === 'complete') {
            handleLoadScript();
          }
        }

        var logoutRekid = logoutConfig.rekid;
        var logoutSlotNumber = logoutConfig.slotNumber;
        WP.gaf.addImpressionHandler(function(slotNumber, slotData) {
          if (slotNumber !== logoutSlotNumber || !slotData) {
            return;
          }
          if (slotData.vendor === -1 && localStorage) {
            try {
              localStorage.setItem('WParld', '1');
              window.location = window.location.pathname + logoutConfig.redirectUrl;
            } catch (e) {
              console.error('LOGOUT_NO_AD_REDIRECT_ERROR', e);
            }
          }
        })
        WP.gaf.loadAndRunSlots(logoutRekid, [logoutSlotNumber]);
      } else {
        WP.gaf.loadBunch('7757', handleLoadScript, true);
      }
    });

    var SG = {
        scroll: new Scroll(true, 3000),
    }
    SG.scroll.disable()