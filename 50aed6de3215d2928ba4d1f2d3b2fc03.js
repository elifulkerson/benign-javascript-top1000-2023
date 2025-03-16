'use strict';
  grecaptcha.ready(function () {
    var recaptchaBadge = document.querySelector('.grecaptcha-badge');
    if (recaptchaBadge) {
      recaptchaBadge.style.display = 'none';
      if (window.MutationObserver) {
        window.badgeObserver = new MutationObserver(function () {
          document.querySelector('.grecaptcha-badge').style.display = 'none';
        });
        window.badgeObserver.observe(
          recaptchaBadge.parentElement,
          {childList: true, subtree: true, attributes: true, attributeFilter: ['style']}
        );
      }
    }
  });