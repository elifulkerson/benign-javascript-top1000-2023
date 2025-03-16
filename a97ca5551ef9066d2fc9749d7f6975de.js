function winLoad(callback) {
      if (document.readyState === "complete") {
        callback();
      } else {
        window.addEventListener("load", callback);
      }
    }
    winLoad(function() {
      var showInputButton = document.getElementById('button_search');
      var searchBlock = document.getElementById('searchBlockJS');

      var submitFormButton = document.getElementById('bsearch');
      var searchPopup = document.getElementById('searchResultJS');

      showInputButton.addEventListener('click', function() {
        searchBlock.classList.toggle('active');
        showInputButton.classList.toggle('active');
        searchPopup.classList.remove('active');
        document.body.style.overflow = 'unset';
      })

      submitFormButton.addEventListener('click', function() {
        searchPopup.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    })