window.__tcfapi('addEventListener', 2, async (tcData, success) => {
          if ((tcData.eventStatus === 'useractioncomplete' || tcData.eventStatus === 'tcloaded') && success) {
            window.dm=window.dm||{AjaxData:[]}; window.dm.AjaxEvent=function(et,d,ssid,ad){
            dm.AjaxData.push({et:et,d:d,ssid:ssid,ad:ad});
            if(typeof window.DotMetricsObj != 'undefined') {DotMetricsObj.onAjaxDataUpdate();} };
            var d=document, h=d.getElementsByTagName('head')[0], s=d.createElement('script'); s.type='text/javascript'; s.async=true;
            s.src='https://uk-script.dotmetrics.net/door.js?d='+document.location.host+'&t=homepage';
            h.appendChild(s);
            __tcfapi('removeEventListener', 2, () => {}, tcData.listenerId);
          }
        });