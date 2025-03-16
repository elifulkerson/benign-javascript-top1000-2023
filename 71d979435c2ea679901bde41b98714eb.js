let _comscore = window._comscore || [];
let comscoreTriggered = false;

const checkGdpr = (tcData) => {
  for (const [key, value] of Object.entries(tcData)) {
    if (value) return "1";
  }
  return "0";
};

const updateComscore = (gdpr) => {
  if (!comscoreTriggered) {
    _comscore.push({ c1: "2", c2: 10476312, cs_ucfr: gdpr });
    (function() {
      var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
      s.src="https://sb.scorecardresearch.com/cs/10476312/beacon.js";
      el.parentNode.insertBefore(s, el);
    })();
    comscoreTriggered = true;
  }
};

const callback = (tcData, success) => {
  if(success && tcData.eventStatus === 'tcloaded') {
    __tcfapi('removeEventListener', 2, (success) => {
      if(success) {
        updateComscore(checkGdpr(tcData.purpose.consents));
      }
    }, tcData.listenerId);
  } else {
    updateComscore("");
  }
}

if (window.__tcfapi) {
  __tcfapi('addEventListener', 2, callback);
} else {
  callback();
}