var _elqQ = _elqQ || [];
        _elqQ.push(['elqSetSiteId', '2376']);
        _elqQ.push(['elqUseFirstPartyCookie', 'tracking.blackboard.com']);
        _elqQ.push(['elqTrackPageView']);
      
        (function() {
          function async_load() {
            var s = document.createElement('script'); s.type = 'text/javascript';
            s.async = true;
            s.src = '//img.en25.com/i/elqCfg.min.js';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
          if(window.addEventListener) window.addEventListener('DOMContentLoaded', async_load, false);
          else if (window.attachEvent) window.attachEvent('onload', async_load);
        })();
        
        window._elqQ = window._elqQ || [];
        _elqQ.push(['elqSetSiteId', '2376']);

        function OptanonWrapper() {
          this.ProcessIntegrationModules = function() {
            var json = Optanon.GetDomainData();
            for (var i = 0; i < json.Groups.length; i += 1) {
              var group = json.Groups[i];
  
              var eloquaCookieGroup = null;
              if (group.Cookies && group.Cookies.length > 0) {
                for (var k = 0; k < group.Cookies.length; k += 1) {
                  var cookie = group.Cookies[k];
                  if (cookie.Name === "ELOQUA") {
                    eloquaCookieGroup = group.Parent ? group.Parent.OptanonGroupId : group.OptanonGroupId;
                  }
                }
              }
  
              if (eloquaCookieGroup !== null) {
                var groupIsActive = OptanonActiveGroups.indexOf(eloquaCookieGroup) != -1;
                SetEloquaTracking(groupIsActive);
              }
            }
          }
          ProcessIntegrationModules();
        }
    
        function SetEloquaTracking(optIn) {
            var trackingStatus = optIn ? "elqOptIn" : "elqOptOut";
            var a = window._elqQ.push([trackingStatus]);
        };