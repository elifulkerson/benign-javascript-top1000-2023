Dribbble.Analytics.googleAnalyticsKey = "UA-24041469-1"
  if (window.location.pathname == "/") {
    Dribbble.Analytics.namedRoot = "/shots";
    Dribbble.Analytics.logDribbbleGAPageView("/")
  } else {
    Dribbble.Analytics.logDribbbleGAPageView("/")
  }