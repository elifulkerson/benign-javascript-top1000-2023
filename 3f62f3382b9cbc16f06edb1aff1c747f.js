window.application = {version: 2};
      navigator.plugins = [];
      window.gadata_forwarder = function(data) {
        window.gaData = data;
        if(window.gaData.ga_forward) {
          window.gaData.tracker_created = function(q) {
            q.set(window.gaData.ga_forward.property, window.gaData.ga_forward.value);
          };
        }
      };