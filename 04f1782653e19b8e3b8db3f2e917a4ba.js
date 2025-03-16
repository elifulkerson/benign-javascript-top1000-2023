if (/iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream) {
          console.info('DucksLake: Not Supported');

        } else {
          const script = document.createElement('script');
          script.src = 'https://c.jsuol.com.br/assets/?loadComponent=media&contentType=js&tpl=assets/dist/libs/duckslake-sdk.min';

          script.onload = function() {
            console.info('DucksLake: Script Loaded');
          };

          script.onerror = function(error) {
              console.error('DucksLake: Error loading the script - ' + error);
          };

          document.head.appendChild(script);
        }