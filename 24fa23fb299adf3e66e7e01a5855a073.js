// detect IE before loading backbone
    if ("ActiveXObject" in window) {
      document.getElementsByTagName("html")[0].className += " ie";
    }