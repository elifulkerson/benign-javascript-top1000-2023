(function(win, doc) {
  
function preloadCriticalPath() {
  var head = doc.getElementsByTagName('head')[0],
      assets = ["https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.5.4/mercadolibre/navigation-desktop.css"],
      link,
      i;
  for(i = 0; i < assets.length; i++) {
    link = doc.createElement('link');
    link.rel = 'prefetch';
    link.href = assets[i];
    link.onerror = function(e) {
      (window['_pfl'] = window['_pfl'] || []).push(['css', e.target.href]);
    }
    head.appendChild(link);
  }
}
  if (doc.readyState === 'complete') {
    setTimeout(preloadCriticalPath, 0);
  } else {
    win.addEventListener('load', function() {
      preloadCriticalPath();
    });
  }
})(window, document);