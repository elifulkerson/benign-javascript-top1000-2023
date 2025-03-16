(function(){
      let ulOrbFooter = document.querySelector('.orb-footer-infolinks');

      if (ulOrbFooter && window.location.hostname.includes('.com')) {
          let liAdChoice = '<li class="orb-footer-adchoices international"><a href="#" role="button" onclick="bbcdotcom.openPrivacyManagerModal();">Do not share or sell my info</a></li>';
          ulOrbFooter.insertAdjacentHTML('beforeend', liAdChoice);
      }
    })();