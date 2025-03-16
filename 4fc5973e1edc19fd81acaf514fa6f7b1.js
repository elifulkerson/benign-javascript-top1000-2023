function initAnalytics(loc) {
  var dataLayer = window.dataLayer = window.dataLayer || [];
  dataLayer.push({
    env: 'refresh-prod'
  });
  dataLayer.push({
    locale: loc,
    siteName: 'blizzard home',
    platform: 'web',
    project: 'blizzard-home',
    variant: '2'
  });
}
initAnalytics('en_US');