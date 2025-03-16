(function() {
  var match = window.location.hash.match(/initial-font-size=(\d+)/);
  if (match && match[1]) {
    var fontSize = parseInt(match[1], 10);
    var remBase = 16;
    if (!isNaN(fontSize)) {
      window.document.documentElement.style.fontSize = (fontSize / remBase) + 'rem';
    }
  }
})();