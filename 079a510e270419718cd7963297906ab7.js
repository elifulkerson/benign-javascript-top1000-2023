window.addEventListener('load', function() {
      if (document.querySelector('input[name="commit"]')) {
        document.querySelector('input[name="commit"]').addEventListener('click', function() {
          gtag('event', 'click', {
            event_category: 'button',
            event_label: 'Log In'
          })
        })
      }
    });