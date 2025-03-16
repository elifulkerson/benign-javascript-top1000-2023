(function() {
  function loadDataLayer(elem, attrName) {
    if (!elem) { return {}; }
    var json = elem.getAttribute(attrName);
    if (!json) { return {}; }
    return JSON.parse(json);
  }

  var globalVariables = loadDataLayer(
    document.documentElement,
    'data-data-layer'
  );
  var pageSpecificVariables = loadDataLayer(
    document.getElementById('embed-gtm-data-layer-loader'),
    'data-data-layer-page-specific'
  );

  var variables = [globalVariables, pageSpecificVariables];

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  for (var i = 0; i < variables.length; i++) {
    window.dataLayer.push(variables[i]);
  }
})();