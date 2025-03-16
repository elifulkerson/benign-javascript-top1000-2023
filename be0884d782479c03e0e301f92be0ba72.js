(function () {
  if (typeof window.MutationObserver === 'undefined') return;

  function activateOptimize() {
    dataLayer.push({
      'event': 'optimize.activate'
    });
  }

  var gatsbyApp = document.getElementById('___gatsby');
  var observer = new MutationObserver(activateOptimize);

  observer.observe(gatsbyApp, {
    attributes: false,
    childList: true,
    characterData: true,
    subtree: true
  });
})();