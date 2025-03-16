if (window.isBlocked) {
      (function(){
        window.btloader=window.btloader||{};
        var btloader=window.btloader;
        btloader.initTime=new Date().getTime();
        var btloaderEndpoint="https://btloader.com/tag?o=5075500865683456&upapi=true"
  
        function loadScript(endpoint){
          var scriptTag=document.createElement("script"),placeTag=document.getElementsByTagName("script")[0];
          scriptTag.type="text/javascript";
          scriptTag.async=true;
          scriptTag.src=endpoint;
          placeTag.parentNode.insertBefore(scriptTag,placeTag);
        }
  
        loadScript(btloaderEndpoint);
      })();
  }