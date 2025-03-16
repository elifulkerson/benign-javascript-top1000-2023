// Show this banner for all versions of IE
if (!!window.MSInputMethodContext || /(MSIE)/.test(navigator.userAgent)) {
  document.getElementById('upgrade_ie_banner').style.display = 'block';
}