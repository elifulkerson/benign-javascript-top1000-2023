waitForGlobal(function() { return !!localStorage && !!document.querySelector('.subnav-container');}, function() {
      var hasParam = window.location.search.includes('referrer=bf');
      if (!localStorage.bf_visit) {
        localStorage.bf_visit = 0;
      }
      var shouldShow = parseInt(localStorage.bf_visit, 10) < 3; // show first 3 visits

      if (hasParam && shouldShow) {
          var container = document.createElement('div');
          container.classList.add('bf-welcome');
          container.innerHTML = "Welcome&nbsp;to&nbsp;HuffPost. We're&nbsp;happy&nbsp;to&nbsp;have&nbsp;you. Here's&nbsp;what's&nbsp;happening&nbsp;⤵️";
          document.querySelector('.main').prepend(container);
          localStorage.setItem('bf_visit', parseInt(localStorage.bf_visit, 10) + 1);
      }
    });