document.addEventListener("DOMContentLoaded",function(){
   fetch("/us/webapps/mpp/rest/cookie-banner/US/en").then((response) => {
    response.json().then(result => {
      if(result && result.cookieBanner && result.cookieBanner.html) {
        document.querySelector('head').insertAdjacentHTML('beforeend', result.cookieBanner.css);
        document.querySelector('body').insertAdjacentHTML('beforeend', result.cookieBanner.html);
        setTimeout(function(){
          const cookieBannerJs = document.createElement('script');
          cookieBannerJs.setAttribute('nonce', 'sYmqXy0wlYMYMfem5xw/gs6pvrbCEr+O7ObffnUdoLkx4QAe');
          cookieBannerJs.innerHTML = result.cookieBanner.js.replace(/^<script[^>]*>|<\/script>$/g, '');
          document.getElementsByTagName('body')[0].appendChild(cookieBannerJs);
          setTimeout(()=>{
            if (typeof window.bindGdprEvents === 'function') {
              window.bindGdprEvents();
            }
          }, 20);
        }, 20);
      }
    });
   }).catch(error => null);
 });