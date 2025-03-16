function __dr_deleteCookie( c_name, path ) {
      document.cookie = c_name + "=" +
      ( ( path ) ? ";path=" + path : "") +
      ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
      document.cookie = c_name + "=" +
      ( ( path ) ? ";path=" + path : "") +
      ";domain=drudgereport.com;expires=Thu, 01-Jan-1970 00:00:01 GMT";
      document.cookie = c_name + "=" +
      ( ( path ) ? ";path=" + path : "") +
      ";domain=.drudgereport.com;expires=Thu, 01-Jan-1970 00:00:01 GMT";
      console.log('Deleted cookie: ' + c_name);
}

function __dr_321_filterCookies() {
    const blacklist = ['_gd'];
    var keyValuePairs = document.cookie.split(';');
    blacklist.forEach(blacklist__value => {
        let __dr_hwm = 0;
        for(var i = 0; i < keyValuePairs.length; i++) {
            var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).replace(/\s+/g, "");
            if (name.indexOf(blacklist__value) === 0) {
                __dr_hwm++;
                if(__dr_hwm > 9) { // Limit
                    __dr_deleteCookie(name,'/'); // Flush extras
                }
            }
        }
    });
    
    const cookieDesc = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie');
    if (cookieDesc && cookieDesc.configurable) {
        Object.defineProperty(document, 'cookie', {
            get: () => {
                return cookieDesc.get.call(document);
            },
            set: val => {
                let accept = true;
                let __dr_hwm = 0;
                var keyValuePairs = document.cookie.split(';');
                blacklist.forEach(blacklist__value => {
                    for(var i = 0; i < keyValuePairs.length; i++) {
                        var name = keyValuePairs[i].substring(0, keyValuePairs[i].indexOf('=')).replace(/\s+/g, "");
                        if (name.indexOf(blacklist__value) === 0) {
                            __dr_hwm++;
                        }
                    }
                    if(__dr_hwm > 10) { // limit, allowing one fresh value
                        if (val.indexOf(blacklist__value) === 0) {
                            accept = false;
                            console.log('Blocked cookie: ' + val);
                        }
                    }
                });
                if (accept === true) {
                    cookieDesc.set.call(document, val);
                }
            }
        });
    }
}

__dr_321_filterCookies();
