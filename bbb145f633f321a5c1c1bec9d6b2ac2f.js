"use strict";

    // Adjust dimensions and display of Body, Site-Header, Main-Nav.
    var topArea = document.getElementById('page--area__top');
    var siteHeader = document.getElementById('site-header');

    window.requestAnimationFrame(function(){
      if (siteHeader) {
        siteHeader.style.top = topArea.clientHeight + 'px';
        siteHeader.style.maxHeight = 'calc(100vh - ' + topArea.clientHeight + 'px';
      }

      // If present, change appearance of Header & Nav.
      document.body.style.paddingTop = topArea.clientHeight + 'px';
    });

    /** Directly render html blank. (e.g. used during a 301 transition) */
    function renderBlank() {
      document.getElementsByTagName('html')[0].setAttribute('style', 'visibility:hidden;');
    }