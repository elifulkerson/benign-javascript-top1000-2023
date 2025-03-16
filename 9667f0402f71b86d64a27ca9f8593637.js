(function (props) {
          window.onetAds = props.adsConfig;
          const drlu = window.location.hash.match(/#rlu-(\d+)/);

          if (drlu && typeof drlu[1] !== 'undefined') {
            window.onetAds.keyvalues = window.onetAds.keyvalues || {};
            window.onetAds.keyvalues.drlu = drlu[1];
          }
        })({"adsConfig":{"target":"GLOWNA/NOWASG","dv":"www","DV":"www","adsNoBanner":false,"gemius":"bPo6D0bzSxcue3osfkZZIJaE.l0RyeOgSEhsufRYys3.W7","no_gemius":1,"kropka":{"DG":"id=bPo6D0bzSxcue3osfkZZIJaE.l0RyeOgSEhsufRYys3.W7","DC":"BETA","XX":"dev-env","NA":null},"keywords":["V2021","ONET3D_2I","ONET3","SCREENING_GENERAL"],"keyvalues":{"scr_width":"high"},"lazy":true,"lazyPercentage":150,"mobile":0,"async":1,"cmd":[],"autofetch":false}})