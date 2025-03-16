function getAppInfo() {
      var AliApp = navigator.userAgent.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
      if (AliApp && AliApp[1] && AliApp[2]) {
        return  {
          appName: AliApp[1].toUpperCase(),
          appVersion: AliApp[2]
        };
      } else {
        return null;
      }
    }
    function openCartUrl() {
      var cartUrl = 'https://main.m.taobao.com/cart/index.html?hasback=true&spm=a21t4m.27981689.0.0';
      var appInfo = getAppInfo();
      if ((appInfo && appInfo.appName === 'TB') || !window.$slk) {
        window.location.replace(cartUrl);
      } else {
        var config = {
          targetUrl: cartUrl
        };
        if (appInfo && appInfo.appName === 'AP') {
          config.enableUlk = false;
        }
        window.$slk.callApp(config);
      }
    }
    function popManage(state) {
      var elemBox = document.getElementById('pop-box');
      if (state === true) {
        elemBox.style.display = 'block'
      } else {
        elemBox.style.display = 'none'
      }
    }
    function initCartButton() {
      var count = 3;
      var elemNumber = document.getElementById('h5-cart-number');
      var elemBtn = document.getElementById('h5-cart-button');
      var elemBoxBright = document.getElementById('pop-button-bright');
      var elemBoxDark = document.getElementById('pop-button-dark');
      var appInfo = getAppInfo();
      var countDown = setInterval(function() { 
        count--;
        if (count === 0) {
          elemNumber.innerHTML = '';
          clearInterval(countDown);
          if (appInfo && (appInfo.appName === 'AP' || appInfo.appName === 'TB')) {
            openCartUrl();
          } else {
            popManage(true);
          }
        } else {
          elemNumber.innerHTML = '（' + count + 's）';
        }
      }, 500);
      
      elemBtn.addEventListener('click', function() {
        clearInterval(countDown);
        elemNumber.innerHTML = '';
        openCartUrl();
      });
      elemBoxBright.addEventListener('click', function() {
        popManage(false);
        openCartUrl();
      });
      elemBoxDark.addEventListener('click', function() {
        popManage(false);
      });
    }

    function loadCallAppScript(src) {
      var script = document.createElement('script');
      script.setAttribute('crossorigin', 'anonymous');
      script.src = src;
      document.body.appendChild(script);
      script.onload = function() {
        window.$slk && window.$slk.init();
      };
    }
    try {
      if (window.screen.width < 990 || /android|iPhone/i.test(navigator.userAgent)) {
        initCartButton();
        setTimeout(function () {
          loadCallAppScript('https://ugcdn.taobao.com/app/starlink/core/index.js?id=4594')
        }, 10);
      }
    } catch (error) {}