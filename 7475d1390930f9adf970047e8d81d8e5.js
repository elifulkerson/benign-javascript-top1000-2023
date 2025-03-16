window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;ga('create', 'UA-162512367-1', 'auto');
              window.gaFilterExp = "^(email|mobile)";
          if(document.location.search) {
            var search = document.location.search.trim().replace(/^[?#&]/, '');
            if(search) {
              var regexp = new RegExp(gaFilterExp);
              var params = search.split('&');
              params = params.filter(val => !(regexp.test(val)));
              paramsString = params.join('&');
              ga('set', 'location', location.origin + location.pathname + '?' + paramsString);
            }
          }
          ;