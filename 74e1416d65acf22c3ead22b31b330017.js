setTimeout(function(){
            typeof window.IndexObj == 'object'
            && typeof window.IndexObj.initScreening == 'function'
            && window.IndexObj.initScreening();
        }, 2500);