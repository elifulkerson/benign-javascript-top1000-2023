digitalData = {"page_url":"https://www.independent.co.uk/us","actual_url":"https://www.independent.co.uk/us","page_domain":"independent.co.uk","page_path":"/us","is_amp_page":false,"page_type":"Channel frontpage","site_sections":"us","is_topic_page":false,"components_list":"A2","mobile_components_list":"A1","section_type":"News"}; (function () {
  const componentsList = window.digitalData.components_list?.split(',') || [];
  const referrer = document.referrer ? new URL(document.referrer) : '';

  const getCookie = (name, defaultValue = false) => {
    const match = document.cookie.match(
      new RegExp(`(^|;|\\s+)${name}=(.*?)[;|$]`),
    );
    return match ? decodeURIComponent(match[2]) : defaultValue;
  };

  const hasCookie = (name) => getCookie(name) !== false;

  const d = new Date();

  const format = (config) =>
    new Intl.DateTimeFormat('en', { ...config, timezone: 'UTC' }).format(d);

  const YYYY = format({ year: 'numeric' });
  const MM = format({ month: '2-digit' });
  const DD = format({ day: '2-digit' });
  const hh = format({ hour: '2-digit', hour12: false });
  const mm = format({ minute: '2-digit' }).padStart(2, '0');
  const ss = format({ second: '2-digit' }).padStart(2, '0');

  if (window.innerWidth >= 1000) {
    componentsList.push(
      ...(window.digitalData.desktop_components_list?.split(',') || []),
    );
  } else {
    componentsList.push(
      ...(window.digitalData.mobile_components_list?.split(',') || []),
    );
  }

  Object.assign(window.digitalData, {
    components_list: componentsList.join(','),
    page_title: document.title,
    page_query: document.location.search,
    page_name: document.location.pathname,
    page_previous_url:
      referrer && `${referrer.protocol}//${referrer.host}${referrer.pathname}`,
    page_previous_path: referrer?.pathname,
    page_previous_query: referrer?.search,
    timestamp: `${YYYY}:${MM}:${DD}:${hh}:${mm}:${ss}`,
    gigya_logged_in_status: hasCookie('esi_auth') ? 'logged in' : 'not logged in',
    gigya_uid: getCookie('esi_puid'),
    gigya_registration_date: getCookie('esi_registration_date'),
    gigya_share_provider: '',
    gigya_sign_on_provider: getCookie('esi_sign_on_provider'),
    gigya_user_status: getCookie('esi_user_status', 'anonymous'),
  });
})()