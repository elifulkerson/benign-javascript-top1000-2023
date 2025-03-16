window.neutronWaitForService = (serviceName, funcName, resolve, reject) => {
        var MAX_COUNT = 30, WAIT_TIME = 500;
        var self = window.neutronWaitForService;
        var serviceDefined = typeof window[serviceName] !== 'undefined';

        if (typeof self.count === 'undefined') {
            self.count = 1;
        }
        if ((!funcName && serviceDefined) || (funcName && serviceDefined && typeof window[serviceName][funcName] === 'function')) {
            resolve();
        } else if (self.count <= MAX_COUNT) {
            self.count++;
            setTimeout(() => {
                window.neutronWaitForService(serviceName, funcName, resolve, reject);
            }, WAIT_TIME);
        } else {
            reject();
        }
      };