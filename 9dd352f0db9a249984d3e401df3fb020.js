if(!window.fetch || !window.Array.prototype.map || !window.Promise || !window.URLSearchParams || !window.IntersectionObserver || !window.Set) {
        s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = 'https://cdn.polyfill.io/v2/polyfill.min.js?features=default,IntersectionObserver,fetch';
        document.getElementsByTagName('head')[0].appendChild(s);
      }