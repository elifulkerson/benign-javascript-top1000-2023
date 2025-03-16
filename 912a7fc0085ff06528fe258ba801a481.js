// This technique is based on https://github.com/segmentio/in-eu but with less code
function isInEUTimeZone() {
  try {
    const timeZone = new Intl.DateTimeFormat().resolvedOptions().timeZone;
    return timeZone.indexOf("Europe") >= 0;
  } catch (e) {
    console.error(`Unable to detect time zone due to error: ${e.message}`);
    return true;
  }
}

function isEULocale() {
  const euCountryCodes = ["BE", "EL", "LT", "PT", "BG", "ES", "LU", "RO", "CZ", "FR", "RE", "GP", "MQ", "GF", "YT", "BL", "MF", "PM", "WF", "PF", "NC", "HU", "SI", "DK", "FO", "GL", "HR", "MT", "SK", "DE", "IT", "NL", "AW", "CW", "SX", "FI", "AX", "EE", "CY", "AT", "SE", "IE", "LV", "PL", "UK", "GB", "AI", "BM", "IO", "VG", "KY", "FK", "GI", "MS", "PN", "SH", "TC", "GG", "JE", "IM"];

  try {
    const locale = navigator.languages && navigator.languages.length > 0 ? navigator.languages[0] : navigator.language;
    const countryCode = locale.indexOf("-") > 0 ? locale.split("-")[1] : locale;
    return euCountryCodes.includes(countryCode.toUpperCase());
  } catch (e) {
    console.error(`Unable to detect locale due to error: ${e.message}`);
    return true;
  }
}

window.inEU = isInEUTimeZone() || isInEUTimeZone() && isEULocale();