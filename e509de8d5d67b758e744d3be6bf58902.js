window.wishAppendChild = window.document.head.appendChild;
      window.document.head.appendChild = function() {
        if (arguments[0] && arguments[0].src && arguments[0].src.indexOf('dist/cozy/') !== -1 && arguments[0].src.slice(-3) === '.js') {
          arguments[0].src = arguments[0].src.slice(0, -3) + '.gz.js';
        }
        window.wishAppendChild.apply(window.document.head, arguments);
      }