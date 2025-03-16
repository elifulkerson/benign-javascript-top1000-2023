let appearanceModeString = '';
  var clientDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
  const appearanceMal = 'none';
  const appearanceClient = clientDarkMode ? 'dark' : 'light';
  appearanceModeString = `${appearanceMal}-${appearanceClient}`;