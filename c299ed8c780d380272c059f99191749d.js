function isFullScreenMode() {
      if ((document && document.webkitFullscreenElement && document.webkitFullscreenElement.classList.contains('video-wrapper'))
      || (document && document.fullscreenElement && document.fullscreenElement.classList.contains('video-wrapper'))
      || (document && document.msFullscreenElement && document.msFullscreenElement.classList.contains('video-wrapper'))) {
        return true;
      }
      return false;
    }
    window.isFullScreenMode = isFullScreenMode;