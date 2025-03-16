(function(){
           var now = new Date();
           var version = now.getFullYear().toString() + "0" + now.getMonth() + "0" + now.getDate() +
               "0" + now.getHours();
           var head = document.getElementsByTagName("head")[0];
           var link = document.createElement("link");
           link.rel = "stylesheet";
           link.href = "https://van.najva.com/static/cdn/css/local-messaging.css" + "?v=" + version;
           head.appendChild(link);
           var script = document.createElement("script");
           script.type = "text/javascript";
           script.async = true;
           script.src = "https://setare.com/tags/Setare-376-31198b24-1ce7-4eb0-bd51-d0345a56a490.js" + "?v=" + version;
           head.appendChild(script);
           })()