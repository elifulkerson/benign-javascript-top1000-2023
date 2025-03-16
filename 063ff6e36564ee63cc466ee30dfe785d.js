window.windowLoadList = [];
    window.windowLoad = function (call){
      windowLoadList.push(call);
    }

    var _locale = 'en-us';