function loadCleverPush() {
        let cleverPushScript = document.createElement("script");
        cleverPushScript.src = 'https://static.cleverpush.com/channel/loader/mT9H366ksKA5vEnNn.js';
        cleverPushScript.async = true;

        document.head.appendChild(cleverPushScript);
      }

      window.__tcfapi('addEventListener', 2, function(tcData) {
        if (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete') {
           __tcfapi('getTCData', 2, function(data, success){
             var cleverPushSourcePointIABId = 1139;
             if (data.vendor.consents[cleverPushSourcePointIABId]) {
               loadCleverPush();
             }

          });
          window.__tcfapi('removeEventListener', 2, function(success) {}, tcData.listenerId);
        }
      });