function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(
    c
  ) {
    var r = ((d + Math.random() * 16) % 16) | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x7) | 0x8).toString(16);
  });
  return uuid;
}

var lzdDocCookies = {
  getItem: function(sKey) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            '(?:(?:^|.*;)\\s*' +
              encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') +
              '\\s*\\=\\s*([^;]*).*$)|^.*$'
          ),
          '$1'
        )
      ) || null
    );
  },
  setItem: function(sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
      return false;
    }
    var sExpires = '';
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + vEnd);
    sExpires = ';expires=' + exdate.toGMTString();
    document.cookie =
      encodeURIComponent(sKey) +
      '=' +
      encodeURIComponent(sValue) +
      sExpires +
      (sDomain ? '; domain=' + sDomain : '') +
      (sPath ? '; path=' + sPath : '; path=/') +
      (bSecure ? '; secure' : '');
    return true;
  },
  hasItem: function(sKey) {
    if (!sKey) {
      return false;
    }
    return new RegExp(
      '(?:^|;\\s*)' +
        encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, '\\$&') +
        '\\s*\\='
    ).test(document.cookie);
  },
  removeItem: function(sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) {
      return false;
    }
    document.cookie =
      encodeURIComponent(sKey) +
      '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' +
      (sDomain ? '; domain=' + sDomain : '') +
      (sPath ? '; path=' + sPath : '; path=/');

    return true;
  }
};

var LZD_HOST_ARRAY = [
  '.lazada.co.id',
  '.lazada.com.my',
  '.lazada.com.ph',
  '.lazada.sg',
  '.lazada.co.th',
  '.lazada.vn',
  '.daraz.com.bd',
  '.daraz.lk',
  '.shop.com.mm',
  '.daraz.com.np',
  '.daraz.pk',
  '.lazada.test'
];
var currentDomain = '.lazada.sg';
var UUID = generateUUID();
var t_uid = lzdDocCookies.getItem('t_uid');
var anon_uid = lzdDocCookies.getItem('anon_uid');
for (var i = 0; i < LZD_HOST_ARRAY.length; i++) {
  if (window.location.host.indexOf(LZD_HOST_ARRAY[i]) > -1) {
    currentDomain = LZD_HOST_ARRAY[i];
  }
}

if (!lzdDocCookies.getItem('lzd_cid')) {
  lzdDocCookies.setItem('lzd_cid', UUID, 365, null, currentDomain);
}

if (!lzdDocCookies.getItem('t_uid')) {
  if (anon_uid) {
    lzdDocCookies.setItem('t_uid', anon_uid, 365, null, currentDomain);
  } else {
    lzdDocCookies.setItem('t_uid', UUID, 365, null, currentDomain);
  }
}