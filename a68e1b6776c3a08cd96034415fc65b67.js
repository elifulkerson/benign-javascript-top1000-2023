let NRCookiesEnabled = false;
const OTCookieMatch = document.cookie.match('(^| )OptanonConsent=([^;]+)');
if (OTCookieMatch) {
    const OTCookieContent = OTCookieMatch[2];
    const OTActiveGroupsMatch = OTCookieContent.match('groups=([%1234AC]+)($|&)');
    const OTActiveGroups = OTActiveGroupsMatch
        ? decodeURIComponent(OTActiveGroupsMatch[1])
        : undefined;

    NRCookiesEnabled = OTActiveGroups
        ? OTActiveGroups.split(',')
              .sort()
              .filter(function (v, i) {
                  return v === i + 1 + ':1';
              }).length === 4
        : false;
}