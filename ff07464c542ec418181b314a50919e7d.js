try {
              document.documentElement.classList.add('js');

              var safari = /^((?!chrome|android).)*safari/i.test(window.navigator.userAgent);
              var ie11 = !!window.navigator.userAgent.match(/Trident.*rv:11./);
              var ie10 = !ie11 && (window.navigator.userAgent.indexOf('MSIE ') > -1);
              var edge = (window.navigator.userAgent.indexOf('Edge/') > -1);

              if (ie10 || ie11 || edge) document.documentElement.classList.add('is-ms');
              if (ie10 || ie11) document.documentElement.classList.add('is-ms-ie');
              if (ie10) document.documentElement.classList.add('is-ms-10');
              if (ie11) document.documentElement.classList.add('is-ms-11');
              if (edge) document.documentElement.classList.add('is-ms-edge');
              if (safari) document.documentElement.classList.add('is-safari');
            } catch(e) {}