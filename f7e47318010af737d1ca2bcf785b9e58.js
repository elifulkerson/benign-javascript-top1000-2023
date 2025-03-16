window.sendUserTiming = function(timingName) {
        if (!(window.performance && window.performance.measure)) return;
        var entries = window.performance.getEntriesByName(timingName, "measure");
        if (entries.length !== 1) return;
        var timingValue = Math.round(entries[0].duration);

        gtag('event', 'timing_complete', {
          name: timingName,
          value: timingValue,
          event_category: 'User-centric',
        });

        if (window.newsFeedStats) {
          // e.g. 'Time To Interactive' -> 'tti'
          var shortTimingName = timingName.toLowerCase().split(' ').map(function (word) {
            return word[0];
          }).join('');
          window.newsFeedStats[shortTimingName] = timingValue;
        }
      };
      window.sendUserTiming("Time To First Byte");