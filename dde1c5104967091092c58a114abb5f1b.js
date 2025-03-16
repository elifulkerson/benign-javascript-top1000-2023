var privacyStyle = document.createElement('style');
  privacyStyle.type = 'text/css';
  privacyStyle.innerHTML = '.cali-privacy-footer { display: none; }';
  document.getElementsByTagName('head')[0].appendChild(privacyStyle);
  document.getElementById("do-not-share").parentNode.classList.add("cali-privacy-footer");