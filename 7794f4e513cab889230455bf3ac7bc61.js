window.BidBarrel = window.BidBarrel || {};
    window.BidBarrel.queue = window.BidBarrel.queue || [];

    /**
     * Wait for BidBarrel to utilize its queuing system to ensure that any calls
     * to its service occur after the framework has fully loaded.
     *
     * @param {function} callback
     *
     * @function
     */
    window.waitForBidBarrel = (callback) => {
        window.BidBarrel.queue.push(function(resolve) {
            callback();
            resolve();
        });
    };

    (function () {
      const h = (e) => {
        if (e.target.tagName === 'SCRIPT' && e.target.src.indexOf('bidbarrel') !== -1) {
          window.waitForBidBarrel = false;
          window.removeEventListener('error', h);
        }
      }
      window.addEventListener('error', h, true);
    })();