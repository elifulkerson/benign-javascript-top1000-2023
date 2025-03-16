window.waitForGlobal = function(identifier, cb, poll) {
  var test = typeof identifier === "function" ? identifier : function() { return !!window[identifier]; };
  var interval;
  if(test()) {
    cb();
  } else {
    interval = setInterval(function(){
      if(test()) {
        cb();
        clearInterval(interval);
      }
    }, poll || 50);
  }
};

window.modulousQueue = (function() {
  var queue = [];
  var run = false;
  function runner(fn) {
    setTimeout(function(){
      try {
        fn();
      } catch (e) {
      }
    }, 0);
  }
  return {
     add: function(fn) {
       var _tmp1 = !run && queue.push(fn);
       var _tmp2 = run && runner(fn);
     },
     runAll: function() {
       var i = 0;
       run = true;
       for(;i<queue.length;i++) {
         runner(queue[i]);
       }
       queue = [];
     }
  };
}());

setTimeout(function(){
  waitForGlobal('jQuery', modulousQueue.runAll);
}, 5000);