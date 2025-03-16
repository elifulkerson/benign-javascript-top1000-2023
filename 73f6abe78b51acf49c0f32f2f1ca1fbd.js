// TODO(jacob): This should be defined, may be rare load order problem.
  // Checking if null is just a quick fix, will default to en if unset.
  // Better fix is to run this immedietely after I18n is set.
  if (window.I18n != null) {
    I18n.defaultLocale = "en";
    I18n.locale = "en";
    I18n.fallbacks = true;
  }