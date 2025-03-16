(function(d) {
    var sdk = document.createElement('script');
    sdk.src = 'https://s.yimg.com/pv/static/assistjs/desktop-v1.0.70.js';
    sdk.id = "assistjs";
    sdk.onload = function() {
    window.YAHOO.SA.init({
      elems: {
        sbForm: "search",
        sbInput: "search-terms",
        sbClear: 'sb-clr'
      },
      plugins: {
        saTray: {
          parent: "search-results"
        },
        saPCActn: {
          css: "search-result"
        },
        saFr: {
          def: 'engadget',
          fr: 'engadget-s'
        },
        anykey: {
          disable: true
        }
      },
      highlight: {
        boldTag: ""
      },
      saBE: {
        params: {
          appid: 'carbon-production.engadget-k8s.omega.yahoo.com'
        },
        host: '//search.engadget.com',
        base: '/sugg/gossip/gossip-us-engadget/'
      }
    });
    };
    d.body.appendChild(sdk);
    })(document);