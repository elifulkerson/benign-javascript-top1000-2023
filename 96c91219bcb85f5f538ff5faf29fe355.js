window.bfa = function() {
    console.group('Dummy bfa global called with');
    var args = Array.prototype.slice.call(arguments);
    console.log(args[0]);
    console.log(JSON.stringify(args[1]));
    console.groupEnd();
  };