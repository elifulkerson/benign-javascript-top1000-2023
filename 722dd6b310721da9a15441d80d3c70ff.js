!function(){
              if('serviceWorker' in navigator){
              window.addEventListener('load', function(){
              navigator.serviceWorker.register('/sw-desktop.js')})}
            }();