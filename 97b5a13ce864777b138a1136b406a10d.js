if (window.isBlocked) {
      (function(){
        window.aax =window.aax || {};
        const btloaderEndpoint = "//btloader.com/tag?o=5075500865683456&upapi=true"
  
        function isSSL(){
          return('https:' == window.location.protocol);
        }
  
        function getProtocol(){
          return isSSL() ? 'https:' : 'http:'
        }
  
        function writeBlockThroughScript(endpoint){
          const source = getProtocol() + endpoint;
          document.write('<scr'+'ipt src="' + source + '" async></scr' + 'ipt>');
        }
  
        writeBlockThroughScript(btloaderEndpoint);
      })();
    }