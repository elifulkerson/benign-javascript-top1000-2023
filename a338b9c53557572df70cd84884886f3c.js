(function(window, document, account) {
    window.NRTV_EVENT_DATA = {"exclusiveLinks":true};
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.src = `https://static.narrativ.com/tags/${account}.js`;
    b.async = true;
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(b,a);
  })(window, document, "polygon");