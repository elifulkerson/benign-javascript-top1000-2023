window.__gyazoLegacyBrowser = true;
var matches = location.pathname.match(/^\/([0-9a-f]{32})(?:\..+)?$/);
if (matches && matches[1] && window.redirectTo) location.href = window.redirectTo + "#unsupported-browser";