(function __WEBPACK_DEFAULT_EXPORT__(e) {
  "serviceWorker" in navigator && window.addEventListener("load", function () {
    navigator.serviceWorker.register(e).catch(e => {
      console.log("Service Worker registration failed: ", e);
    });
  });
})('/service-worker.js');