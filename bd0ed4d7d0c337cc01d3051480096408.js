try{
        var isPro=window.location.host.match(/\bctrip\.com$/i);window.runtimeEnv=isPro?'pro':'fws';window.runtimeServerHost=isPro?'flights.ctrip.com':'online.flights.ctrip.fat3.qa.nt.ctripcorp.com'
        var now =new Date().getTime();var t=window.performance&&window.performance.timing;var ct=t&&t.fetchStart;if(!window["__bfi"]){window["__bfi"]=[]};
        if (ct){window["__bfi"].push(["_trackMetric",{name:102783,value:now-ct}]);window.onload =function(){window["__bfi"].push(["_trackMetric",{name:103813,value:t.domContentLoadedEventEnd-ct}]);}}
    } catch(e){};