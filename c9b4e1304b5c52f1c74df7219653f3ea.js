if (!window.navigator.cookieEnabled) {
        document.getElementById('cookies-disabled').classList.add('show-unsupported-browser');
        document.getElementById('main-container').style.display = 'none';
      }