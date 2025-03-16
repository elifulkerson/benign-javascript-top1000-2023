window.$neutronWindowPromises = {};
      window.$neutronWindowPromises['cohesion'] = new Promise((resolve) => {
        var value = undefined;
        Object.defineProperty(window, 'cohesion', {
          get: function () {
            return value;
          },
          set: function (newValue) {
            value = newValue;
            if (value) resolve();
          }
        });
      });
      
      window.$neutronWindowPromises['tagular'] = new Promise((resolve) => {
        var value = undefined;
        Object.defineProperty(window, 'tagular', {
          get: function () {
            return value;
          },
          set: function (newValue) {
            value = newValue;
            if (value) resolve();
          }
        });
      });
      
      window.$neutronWindowPromises['_Cohesion'] = new Promise((resolve) => {
        var value = undefined;
        Object.defineProperty(window, '_Cohesion', {
          get: function () {
            return value;
          },
          set: function (newValue) {
            value = newValue;
            if (value) resolve();
          }
        });
      });
      
      window.$neutronWindowPromises['UA'] = new Promise((resolve) => {
        var value = undefined;
        Object.defineProperty(window, 'UA', {
          get: function () {
            return value;
          },
          set: function (newValue) {
            value = newValue;
            if (value) resolve();
          }
        });
      });