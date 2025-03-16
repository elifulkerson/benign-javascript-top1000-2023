(function() {
    var lang = 'en'
    document.documentElement.lang = lang.split('-')[0] || 'en'
  })();
  function OptanonWrapper() { 
    var bannersdk = document.getElementById("onetrust-banner-sdk")
    //override onetrust slide animation
    try {
      var style = document.createElement('style')
      style.type = 'text/css'
      style.appendChild(document.createTextNode('@keyframes slide-down-custom { 0% { bottom: -300px; transform: translateY(0); } 100% { bottom: -300px; transform: translateY(-312px) } } '))
      document.body.appendChild(style)
    } catch(e) {}
    bannersdk && bannersdk.classList.add('she-none')
    window.isOnetrustBannerLoaded = true
    var evt = (function(){ if (document.createEvent) { var e = document.createEvent('Event'); e.initEvent('onetrustBannerLoaded', true, true); return e } return new Event('onetrustBannerLoaded') })();
    window.dispatchEvent && window.dispatchEvent(evt)
  }