(function() {
  var apis = [window.fetch, Object.assign, Array.prototype.includes, NodeList.prototype.forEach, Array.from];
  apis.every(function(api) {return api}) || document.write('<script src="/assets/js/lib/polyfills.min.js?f968e79a"><\/script>');
  window.assetsVersion = "f968e79a";
})();