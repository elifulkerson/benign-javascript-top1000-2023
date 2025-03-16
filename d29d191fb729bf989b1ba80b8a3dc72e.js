(function() {
        // Minimal extend implementation suitable for our single use case below
        var extend = Object.assign || function (obj) {
            var others = Array.prototype.slice.call(arguments, 1);
            for (var i = 0; i < others.length; i++) {
                var other = others[i];
                for (var key in other) {
                    if (other.hasOwnProperty(key)) {
                        obj[key] = other[key];
                    }
                }
            }
            return obj;
        };
        window["$reactAppContext"] = extend({
            current_logo: 'https://static-assets.highwebmedia.com/images/logo.svg?hash=a55ee9da2e72',
            is_mobile: false,
            logged_in_user: JSON.parse('null'),
            language_code: 'en',
        }, JSON.parse('\u0022\u0022'));
    })();