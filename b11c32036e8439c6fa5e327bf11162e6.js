!function(n,e,o,r,i){
            if(!e){
              e=e||{},window.permutive=e,e.q=[],e.config=i||{},e.config.projectId=o,e.config.apiKey=r,e.config.environment=e.config.environment||"production";
              for(var t=["addon","identify","track","trigger","query","segment","segments","ready","on","once","user","consent"],c=0;c<t.length;c++){
                var f=t[c];
                e[f]=function(n){
                  return function(){
                    var o=Array.prototype.slice.call(arguments,0);
                    e.q.push({functionName:n,arguments:o})
                  }
                }(f)
              }
            }
          }(document,window.permutive,"c8ee9446-97ed-462f-a5e9-1af66c8e9104","f05d67f8-98e8-4ac4-a9e8-8596bf03a14d",{});
          window.permutive.readyWithTimeout=function(e,i,t){var u=!1,n=function(){u||(e(),u=!0)};(t=t||1/0)!==1/0&&window.setTimeout(n,t),permutive.ready(n,i)};