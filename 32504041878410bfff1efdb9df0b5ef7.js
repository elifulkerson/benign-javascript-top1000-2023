function addPoint (e, tabName) {
  e.stopPropagation();
  JsSensor.trackEvent(SAEVENTS.PC_HEADER_TAB_CLICK,{tab:tabName, place:'首页'});
  }