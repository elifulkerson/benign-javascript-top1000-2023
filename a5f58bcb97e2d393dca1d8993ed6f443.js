window.loadGoogle = function() {
  if (window.InitGoogle) {
    // google.ts already loaded, set it up.
    window.InitGoogle("331998490334-rsn3chp12mbkiqhl6e7lu2q0mlbu0f1b");
  } else {
    // Set a flag for google.ts to use when it loads.
    window.GoogleClientID = "331998490334-rsn3chp12mbkiqhl6e7lu2q0mlbu0f1b";
  }
};