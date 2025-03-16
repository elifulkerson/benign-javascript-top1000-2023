window._204 = [];
window._400 = [];
if(window.errorTracker) {
  window.errorTracker(
    function(error) {
      window._400.push({key:'page.error.javascript', value:error});
    },
    {
      scriptFilter: new RegExp('^/|^' + location.protocol + '//' + location.host),
      version: "b37742378934f1df16028ae03fbfcaf5808587a4",
      versionTimestamp: "1697229259377"
    });
}