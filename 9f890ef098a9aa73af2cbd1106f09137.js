(function() {
      var p;
          if (!window.Promise || !window.CustomEvent || !window.fetch || !Element.prototype.closest) { p = '/etc.clientlibs/hp-com/clientlibs/clientlib-public/resources/js/polyfills/ie11.7fdcaa27.js'; }
          else if (!window.URLSearchParams || !window.IntersectionObserver || !window.customElements || !window.ResizeObserver) { p = '/etc.clientlibs/hp-com/clientlibs/clientlib-public/resources/js/polyfills/edge-safari.7fdcaa27.js'; }
      p && document.write('<script src="' + p + '">\x3C/script>');
  })();