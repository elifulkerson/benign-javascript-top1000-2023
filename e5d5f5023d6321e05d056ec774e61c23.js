var width = document.documentElement.clientWidth;
      var settings = {
        'account_dfp' : 'downdetector.com',
        'locale_facebook' : 'en_US',
      };
      
      // TODO: Add Slot Level targetting.
      let targets = {'slotTargets': {
        'company': '',
        'categories': '',
      }};
      
      const preloadedFiles = ['dist/adsPrebid.js', 'dist/adscript.js', 'dist/homeSparklines.js', 'dist/navbar.js'];
      
      preloadedFiles.forEach(function(file) {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://cdn2.downdetector.com/8103ed5205b9466/' + file;
        document.body.appendChild(scriptTag);
      })
      
      // TODO move this to an external file as it's being used in a number of places
      
      // lazy load any images, and render the sparklines
      const $companyBox = $('.company-index:first');
      let column_width = $companyBox.width();
      
      function lazyLoadImages() {
        $("img.lazy").lazyload({
          threshold: 200,
          effect: "fadeIn"
        });
      }
      
      
      lazyLoadImages();
      
      // when we resize the window, re-render all sparklines and logo's
      // but only if the actual size changed
      $(window).resize(function () {
        if ($companyBox.width() === column_width) return;
      
        column_width = $companyBox.width().width();
      
        lazyLoadImages();
      });