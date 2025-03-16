// Set up some variables and noops to prevent errors
  window.Y = window.Y || null;
  window.Squarespace = window.Squarespace || {
    afterBodyLoad: function() {},
    load: function() {}
  };
  window.SquarespaceFonts = window.SquarespaceFonts || {
    loadViaContext: function() {}
  };
  window.SQUARESPACE_ROLLUPS = window.SQUARESPACE_ROLLUPS || {};