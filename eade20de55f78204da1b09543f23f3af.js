(function () {
    function ininScrollAnimation () {
      var ani_container = document.querySelector('.scroll-animation-container');
      var scollList = ani_container.querySelectorAll('.with-scroll');
      var ani_height = ani_container.getBoundingClientRect().height;
      var ani_scroll_height = window.innerHeight + ani_height;
      var ani_offsebottom = ani_container.getBoundingClientRect().top + window.scrollY + ani_height;
      var step1 = 120;
      var step2 = 60;
      window.addEventListener('scroll', function() {
        var rect = ani_container.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          var y1 = +(((ani_offsebottom - window.scrollY) / ani_scroll_height) * step1).toFixed(4);
          var y2 = +(((ani_offsebottom - window.scrollY) / ani_scroll_height) * step2).toFixed(4);
          [].slice.call(scollList).forEach(function(el) {
            var y = el.getAttribute('step-type') === '2' ? y2 : y1;
            var step = el.getAttribute('step-type') === '2' ? step2 : step1;
            var start = +el.getAttribute('data-start');
            var end = +el.getAttribute('data-end');
            var trans_y = start + (end > start ?  step - y : y - step);

            el.style.setProperty('--y', trans_y.toFixed(4) + 'px');
          })
        }
      })
    }

    if (window.innerWidth > 992) {
      setTimeout(ininScrollAnimation)
    }
  })()