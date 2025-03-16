if (window.PerformanceObserver) {
  
window._perfMarkAllowedList = [
  'cx-candybar-onload',
  'first-contentful-paint',
  'cx-candybar-onload',
  'gcRendererStart',
  'optimizely:blockBegin',
  'playerLoadStart',
  'playerReady',
  'playerDisplayed',
  'reactAppRenderStart',
  'reactAppRenderEnd'
];

  var observer = new PerformanceObserver(function (list) {
    var entries = list.getEntries();
    var _loop = function _loop(i) {
      var entry = entries[i];
      var metricName = entry.name;
      if ( window._perfMarkAllowedList.indexOf(entry.name) !== -1 ) {
        var time = Math.round(entry.startTime + entry.duration);
        if (metricName === 'gpt-slotOnload' ) {
          if (typeof newrelic !== 'undefined') {
             newrelic.setCustomAttribute(metricName, time);
          }
          setTimeout(function(){observer.disconnect()}, 8000)

        } else {
          if (typeof newrelic !== 'undefined') {
            newrelic.setCustomAttribute(metricName, time);
          }
        }
      }
    };

    for (var i = 0; i < entries.length; i++) {
      _loop(i);
    }

  });
  try {
    observer.observe({
      type: ['mark'], buffered: true
    });
  }
  catch(e) {
    console.log('observer not supported')
  }
}