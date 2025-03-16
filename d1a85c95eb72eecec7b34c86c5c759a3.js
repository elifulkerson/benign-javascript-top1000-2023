function fullCss(u, m) {
      var l = document.createElement('link');
      l.rel = 'stylesheet';
      l.type = 'text/css';
      l.href = 'https://cdn.woopic.com/18d8339538654b1dbf96a30e92745731/css/hp.f6aab651b081dcf5971a.css';
      l.media = 'all';
      document.getElementsByTagName('head')[0].appendChild(l);
    }
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', fullCss, false);
    } else {
      window.onload = fullCss;
    }