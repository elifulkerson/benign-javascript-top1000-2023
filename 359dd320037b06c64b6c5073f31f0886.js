window.onload = function() {
  var giveUpCount = 1;
  var interval = setInterval(function() {
    if (window.AhoyPageviewEvent) {
      window.AhoyPageviewEvent.sendEvent();
      clearInterval(interval);
    };
    if (giveUpCount >= 10) {
      console.error("AhoyPageviewEvent is not loaded.");
      clearInterval(interval);
    }
    giveUpCount += 1;
  }, 100);
};