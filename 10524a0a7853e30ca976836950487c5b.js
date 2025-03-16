<!-- console.debug is not defined in IE 10 -->
    if (!window.console.debug) {
      console.debug = console.log
    }