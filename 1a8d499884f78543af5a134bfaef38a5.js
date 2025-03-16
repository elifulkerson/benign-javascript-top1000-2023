// NOTE: Wrong debug value is causing some issues with our ad debugger, so clearing it to fix the issue
(function flushDebugStorage(){
  try {
    var keyToRemove = 'debug';
    if (window.localStorage && localStorage.getItem(keyToRemove) !== null) {
      localStorage.removeItem(keyToRemove);
      return;
    }
  } catch (e) {
    console.log('error while flushing debug storage');
  }
})();