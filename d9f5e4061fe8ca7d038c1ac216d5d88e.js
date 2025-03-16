let taboolaInt = false;
      window.addEventListener('scroll', () => {
      let pageYOffset = window.pageYOffset;
      if (pageYOffset > 300 && !taboolaInt) {
          window._taboola = window._taboola || [];
          _taboola.push({ homepage: 'auto' });
          !function (e, f, u, i) {
              if (!document.getElementById(i)) {
                  e.async = 1;
                  e.src = u;
                  e.id = i;
                  f.parentNode.insertBefore(e, f);
              }
          }(document.createElement('script'),
              document.getElementsByTagName('script')[0],
              '//cdn.taboola.com/libtrc/network18media-news18english/loader.js',
              'tb_loader_script');
          if (window.performance && typeof window.performance.mark == 'function') { window.performance.mark('tbl_ic'); }
          taboolaInt = true;
        }
        });