// ensure namespace is available
  Dribbble = window.Dribbble || {};
  Dribbble.JsConfig = Dribbble.JsConfig || {};
  Dribbble.isHistorySupported = () => (window.history && 'pushState' in window.history);

  // add global constants
  DEVICE_WIDTH_BREAKPOINT = '800px';
  HIDPI_BREAKPOINT = '(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-device-pixel-ratio: 1.5),(min-resolution: 1.5dppx)';

  User = {
    loggedIn: function() {
      return !!document.querySelector('body.logged-in')
    },
    loggedOut: function() {
      return !this.loggedIn()
    },
  };