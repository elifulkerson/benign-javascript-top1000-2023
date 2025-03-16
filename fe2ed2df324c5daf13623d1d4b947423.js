if (!window.preloadSupported()) {
          const r = document.createElement('script');
          r.src = 'https://vir.wsj.net/fp/assets/webpack4/runtime.b8a91980fc468c.js';
          document.head.appendChild(r);

          const v = document.createElement('script');
          v.src = 'https://vir.wsj.net/fp/assets/webpack4/vendors.511da868e08880.js';
          document.head.appendChild(v);

          const m = document.createElement('script');
          m.src = 'https://vir.wsj.net/fp/assets/webpack4/main.0b76b347483c99.js';
          document.head.appendChild(m);
        }