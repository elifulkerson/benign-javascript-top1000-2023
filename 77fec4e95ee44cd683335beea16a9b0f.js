var APF = {
    log: function(v) {
/*
*/
    }
};

APF.Namespace = {
    register: function(ns){
        var nsParts = ns.split(".");
        var root = window;
        for (var i = 0; i < nsParts.length; i++) {
            if (typeof root[nsParts[i]] == "undefined") {
                root[nsParts[i]] = new Object();
            }
            root = root[nsParts[i]];
        }
        return root;
    }
}

APF.Utils = {
    getWindowSize: function() {
        var myWidth = 0, myHeight = 0;
            if( typeof( window.innerWidth ) == 'number' ) {
            //Non-IE
            myWidth = window.innerWidth;
            myHeight = window.innerHeight;
        } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
            //IE 6+ in 'standards compliant mode'
            myWidth = document.documentElement.clientWidth;
            myHeight = document.documentElement.clientHeight;
        } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
            //IE 4 compatible
            myWidth = document.body.clientWidth;
            myHeight = document.body.clientHeight;
        }
        return {
            width: myWidth,
            height: myHeight
        };
    },

    getScroll: function() {
        var scrOfX = 0, scrOfY = 0;
        if( typeof( window.pageYOffset ) == 'number' ) {
            //Netscape compliant
            scrOfY = window.pageYOffset;
            scrOfX = window.pageXOffset;
        } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
            //DOM compliant
            scrOfY = document.body.scrollTop;
            scrOfX = document.body.scrollLeft;
        } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
            //IE6 standards compliant mode
            scrOfY = document.documentElement.scrollTop;
            scrOfX = document.documentElement.scrollLeft;
        }
        return {
            left: scrOfX,
            top: scrOfY
        };
    },

    // http://techpatterns.com/downloads/javascript_cookies.php
    setCookie: function(name, value, expires, path, domain, secure) {
        // set time, it's in milliseconds
        var today = new Date();
        today.setTime(today.getTime());
        /*
            if the expires variable is set, make the correct
            expires time, the current script below will set
            it for x number of days, to make it for hours,
            delete * 24, for minutes, delete * 60 * 24
        */
        if (expires) {
            expires = expires * 1000 * 60 * 60 * 24;
        }
        var expires_date = new Date(today.getTime() + (expires));

        document.cookie = name + "=" +escape(value) +
            ((expires) ? ";expires=" + expires_date.toGMTString() : "") +
            ((path) ? ";path=" + path : "") +
            ((domain) ? ";domain=" + domain : "" ) +
            ((secure) ? ";secure" : "" );
    },

    // this fixes an issue with the old method, ambiguous values
    // with this test document.cookie.indexOf( name + "=" );
    getCookie: function(check_name) {
        // first we'll split this cookie up into name/value pairs
        // note: document.cookie only returns name=value, not the other components
        var a_all_cookies = document.cookie.split( ';' );
        var a_temp_cookie = '';
        var cookie_name = '';
        var cookie_value = '';
        var b_cookie_found = false; // set boolean t/f default f

        for (i = 0; i < a_all_cookies.length; i++) {
            // now we'll split apart each name=value pair
            a_temp_cookie = a_all_cookies[i].split( '=' );

            // and trim left/right whitespace while we're at it
            cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, '');

            // if the extracted name matches passed check_name
            if (cookie_name == check_name) {
                b_cookie_found = true;
                // we need to handle case where cookie has no value but exists (no = sign, that is):
                if (a_temp_cookie.length > 1) {
                    cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g, ''));
                }
                // note that in cases where cookie is initialized but no value, null is returned
                return cookie_value;
                break;
            }
            a_temp_cookie = null;
            cookie_name = '';
        }
        if (!b_cookie_found) {
            return null;
        }
    },

    // this deletes the cookie when called
    deleteCookie: function(name, path, domain) {
        if (this.getCookie(name)) {
            document.cookie = name + "=" +
            ((path) ? ";path=" + path : "") +
            ((domain) ? ";domain=" + domain : "") + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
        }
    },

    setScrollTop: function (n){
        if (document.body) {
            document.body.scrollTop = n;
            if(document.body.scrollTop == 0){
                if (document.documentElement) document.documentElement.scrollTop = n;
            }
        }else if (document.documentElement) {
            document.documentElement.scrollTop = n;
        }
    },

    getScrollTop: function (){
        return document.body ? document.body.scrollTop || document.documentElement.scrollTop : document.documentElement.scrollTop;
    },

    /*
    *
    * APF.Utils.gotoScrollTop(e, s); 这个函数可传两个参数
    * e 是滚动条滚动到什么地方(end)的缩写，如果不传默认是 0
    * s 是滚动条滚动的速度 ，参数值是默认滚动速度的倍数，比如想要加快滚动速度为默认2倍，输入2 ，如果想放慢速度
    *   到默认速度的一半，输入 0.5 。 如果不传默认是 1，就是默认速度。
    */
    gotoScrollTop: function (e, s){
        var t = APF.Utils.getScrollTop(), n = 0, c = 0;
        var s = s || 1;
        var e = e || 0;
        var i = t > e ? 1 : 0;
        (function() {
            t = APF.Utils.getScrollTop();
            n = i ? t - e : e - t;
            c = i ? t - n / 15 * s : t + 1 + n / 15 * s ;
            APF.Utils.setScrollTop( c );
            if (n <= 0 || t == APF.Utils.getScrollTop()) return;
            setTimeout(arguments.callee, 10);
        })();
    }
};
/*
    json2.js
    2015-05-03
    Public Domain.
    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
    See http://www.JSON.org/js.html
    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html
    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.
    This file creates a global JSON object containing two methods: stringify
    and parse. This file is provides the ES5 JSON capability to ES3 systems.
    If a project might run on IE8 or earlier, then this file should be included.
    This file does nothing on ES5 systems.
        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.
            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.
            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.
            This method produces a JSON text from a JavaScript value.
            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value
            For example, this would serialize Dates as ISO strings.
                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 
                            ? '0' + n 
                            : n;
                    }
                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };
            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.
            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.
            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.
            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.
            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.
            Example:
            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'
            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'
            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date 
                    ? 'Date(' + this[key] + ')' 
                    : value;
            });
            // text is '["Date(---current time---)"]'
        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.
            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.
            Example:
            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.
            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });
            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });
    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint 
    eval, for, this 
*/

/*property
    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';
    
    var rx_one = /^[\],:{}\s]*$/,
        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 
            ? '0' + n 
            : n;
    }
    
    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + '-' +
                        f(this.getUTCMonth() + 1) + '-' +
                        f(this.getUTCDate()) + 'T' +
                        f(this.getUTCHours()) + ':' +
                        f(this.getUTCMinutes()) + ':' +
                        f(this.getUTCSeconds()) + 'Z'
                : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var gap,
        indent,
        meta,
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string) 
            ? '"' + string.replace(rx_escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string'
                    ? c
                    : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' 
            : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) 
                ? String(value) 
                : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                        ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                        : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap 
                                    ? ': ' 
                                    : ':'
                            ) + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap 
                                    ? ': ' 
                                    : ':'
                            ) + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                    ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                    : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return '\\u' +
                            ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (
                rx_one.test(
                    text
                        .replace(rx_two, '@')
                        .replace(rx_three, ']')
                        .replace(rx_four, '')
                )
            ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
String.prototype.Trim=function(){
	return this.replace(/(^\s*)|(\s*$)/g,'');
};
String.prototype.chkType=function(type){
	switch(type){
		case 'int':
			return (/^-?[1-9][0-9]+$|^-?[0-9]$/).test(this);
		case 'url':
			return (/^https?:\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/).test(this);
		case 'email':
			return (/^[a-z0-9_+.-]+\@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/i).test(this);
		case 'idcard':
			return (/^[0-9]{15}$|^[0-9]{17}[a-zA-Z0-9]/).test(this);
		case 'area':
			return (/^\d+(\.\d{1,2})?$/).test(this);
		case 'money':
			return (/^\d+(\.\d{1,2})?$/).test(this);
		case 'year':
			return (/^(19|20)\d\d$/).test(this);
		case 'input':
			return (/^[\u4e00-\u9fa5A-Za-z0-9_\s\~\@\!\#\$\.\,\/\\\%\^\&\*\(\)_\+\?\>\<《〉》\:：〉、，。？！￥（）\{\}\[\]]+$/).test(this);
	}
	return false;
};

String.prototype.containType=function(type){
	switch(type){
		case 'mobile':
			return (/[0-9]{11}/).test(this);
	}
	return false;
};
/*全角字符转换成半角字符
 * 2011-11-14 add by xiaohuizhou
 * */
String.prototype.dbcToSbc=function(){
	var result="";
	for (var i = 0; i < this.length; i++){
		if (this.charCodeAt(i)==12288){
			result+= String.fromCharCode(this.charCodeAt(i)-12256);
			continue;
		}
		if (this.charCodeAt(i)>65280 && this.charCodeAt(i)<65375)
			result += String.fromCharCode(this.charCodeAt(i)-65248);
		else
			result += String.fromCharCode(this.charCodeAt(i));
	}
	return result;
};
Array.prototype.unique=function(){
	var hash={};
	for( var i=0,j=0;i<this.length;i++){
		if(this[i]!==undefined){
			if(!hash[this[i]]){
				this[j++]=this[i];
				hash[this[i]]=true;
			}
		}
	}
	this.length=j;
	return this;
};
Array.prototype.clone=function(){
	var arr=[];
	for( var p in this){
		if(arr[p]===undefined&&typeof this[p]=='string'){
			arr[p]=this[p];
		}
	}
	return arr;
};
Array.prototype.insertAt=function(index,value){
	var part1=this.slice(0,index);
	var part2=this.slice(index);
	part1.push(value);
	return(part1.concat(part2));
};

//prototype.js(实现了[].each)中去除后，需要加上each的实现
Array.prototype.each = function(callback) {
	if (!this.length) {return;}
	if ([].forEach) {
		[].forEach.call(this,callback);
	} else {
		for (var i = 0; i < this.length; i++) {
			callback.call(this[i], this[i], i);
		}
	}
}

window.openNew=function(p_strURL,p_strName){
	var frmNew=document.createElement('form');
	form.action=p_strURL;
	form.target=p_strName;
	form.submit();
};
window.getRadioValue=function(p_strRadioName){
	var arrRadio=document.getElementsByName(p_strRadioName);
	var intLength=arrRadio.length;
	if(0==intLength){
		return null;
	}
	for( var i=0;i<intLength;++i){
		if(arrRadio[i].checked==true){
			return arrRadio[i].value;
		}
	}
	return '';
};

window.cancelBubble=function(e){
	if(e&&e.stopPropagation){
		e.stopPropagation();
	}else{
		window.event.cancelBubble=true;
	}
	return false;
};
J.ready(function(){

    var lazyLoader = {

        //get single image

        getImg: function (img,tag){
            var url =  img.getAttribute(tag);
            img && tag && url && (img.src = url);
        },

        //get images by dom

        getImgsByDom: function (dom,tag){
            var imgs,
                i,
                len,
                url;
            if(dom && tag){
                imgs = dom.getElementsByTagName('img');
                for(i = 0, len = imgs.length; i < len; i++){
                    this.getImg(imgs[i],tag);
                }
            }

        }
    }

    //入口函数
    function init(){
        lazyLoader.getImgsByDom(document,'data-src');
    }

    init();

});

// 加码
(function($) {
    if (!$ || !J) {
        return;
    }
    $("body").on("click", "[data-track]", function(e) {
        var npvVal = $(this).attr("data-track");
        J.site.trackEvent(npvVal);
    });
})(window.jQuery);





APF.Namespace.register('ajk');
(function(){
    var logger;
    var siteName = (function(){
        var hostData = document.location.host.match(/^(\w+)\.(\w+)\./);
        if( hostData ){
            return 'pc'
        }else{
            return 'unknown'
        }
    })();

    var rAf = function(callback) {
          window.setTimeout(callback, 1000 / 10);
    };

    ajk.Logger = logger = {
        sojSite:'',
        sojPage:'',
        sojPageName:'',
        errorSite:siteName
    };

    logger.setSite = function(site){
        this.sojSite = site||'';
    }
    logger.setPage = function(page){
        this.sojPage = page||'';
    }
    logger.setPageName = function(pagename){
        this.sojPageName = pagename||'';
    }

    logger.config = {
        devLogURL: '//s.anjuke.test/ts.html?',
        logURL: '//m.anjuke.com/ts.html?',
        devSojURL: '//s.anjuke.test/stb',
        isDev: /dev|test/.test(document.domain),
        blackList: ['Player', 'baiduboxapphomepagetag', 'onTouchMoveInPage']
    };

    logger.isblack = function(str) {
        var self = this;
        var i,
            reg,
            length,
            blackList = self.config.blackList;
        if (typeof str !== 'string') { // 对于非字符串默认黑名单
            return true;
        }
        for (i = 0, length = blackList.length; i < length; i++) {
            reg = new RegExp(blackList[i], 'g');
            if (reg.test(str)) {
                return true;
            }
        };
    }

    logger.sendError = function(params) {
        var self = this;
        var errorinfo = 'tp=error&site='+self.errorSite+'&msg=',
            key,
            url,
            arr = [],
            image,
            msg;
        if (typeof params === 'string') {
            msg = params;
        }
        if (typeof params === 'object') {
            for (key in params) {
                if (params.hasOwnProperty(key)) {
                    arr.push(key + ':' + encodeURIComponent(JSON.stringify(params[key])));
                }
            }
            msg = arr.join(',');
        }
        if (self.isblack(msg)) {
            return false;
        }
        image = new Image();
        if (self.config.isDev) {
            url = self.config.devLogURL + errorinfo + msg;
        } else {
            url = self.config.logURL + errorinfo + msg;
        }
        image.src = url;
        return true;
    }

    var getScreen = function() {
        var sinfo = {};
        sinfo.w = $(window).width().toString();
        sinfo.h = $(window).height().toString();
        sinfo.r = (window.devicePixelRatio&&window.devicePixelRatio >= 2 ? 1 : 0).toString();
        getScreen = function() {
            return sinfo;
        };
        return sinfo;
    };

    logger.sendSoj = function(op) {
        var self = this;
        var _site = op.site || self.sojSite || 'anjuke',
            soj = new SiteTracker(),
            t_params;
        var action = op.action;
        var plat = op.plat;
        var type = op.type;
        if (op.customparam) {
            soj.setCustomParam(op.customparam);
        }
        if (self.config.isDev) {
            t_params = {
                'target_url': self.config.devSojURL
            }
        }
        var head = $('head');
        var pageName = op.page || op.pageName || head.data('page')|| $('body').data('page') || action;

        soj.setPage(pageName);
        soj.setSite(_site);
        soj.setScreen(getScreen());
        soj.setReferer(op.r||document.referrer);
        soj.setPlat(plat||1);
        if (navigator.userAgent.indexOf('iPad') >=0) {
            soj.setPlat(3);
        }
        //如果是pad
        //这里是为了兼容业务代码中利用sendsoj直接发pv,入二手房单页
        if (!type) {
            if (/npv/.test(_site) || /npv/.test(op.site)) {
                type = 2;
            } else {
                type = 1;
            }
            soj.setPage(pageName);
        }
        soj.setType(type);

        if(action && typeof action=='string' && action.length > 0)
            soj.setAction(action);

        if( op.NGuid ){
            soj.setNGuid( op.NGuid );
        }
        if( op.NUid ){
            soj.setNUid( op.NUid );
        }
        if(op.h){
            if(!t_params) t_params = {};
            t_params.h = op.h;
        }
        soj.track(t_params);
        // 58 统计
        // try{
        //     if(!/npv/.test(_site)){
        //         var trackUrl = soj.getParams();
        //         delete trackUrl.cp;
        //         delete trackUrl.sc;
        //         window._trackURL = JSON.stringify(trackUrl);
        //         //loadTrackjs()
        //     }
        // }catch(e){
        //
        // }
        /*
        function loadTrackjs(){
            var s = document.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = '//tracklog.58.com/referrer_anjuke_pc.js?_=' + Math.random();
            var b = document.body;
            s.onload = function () {
                soj.setSite(_site+'-npv');
                soj.setPage(pageName+"_tracklog");
                soj.setPageName(pageName+"_tracklog");
                soj.track(t_params);
            }
            s.onerror = function () {
                soj.setSite(_site+'-npv');
                soj.setPage(pageName+"_tracklog_error");
                soj.setPageName(pageName+"_tracklog_error");
                soj.track(t_params);
            }
            b.appendChild(s);
        }
        */
    }

    logger.track = function(p, cp, pn) {
        if (!pn) {
            pn = p;
        }
        if ($.isPlainObject(cp)) {
            cp = JSON.stringify(cp);
        }
        logger.sendSoj({
            site: 'anjuke',
            page: p,
            pageName: pn,
            customparam: cp || ''
        });
    };

    logger.trackEvent = function (action, cp) {
        var self = this;
        if ($.isPlainObject(cp)) {
            cp = JSON.stringify(cp);
        }
        logger.sendSoj({
            site: self.sojSite || 'anjuke',
            page: self.sojPage ||  action,
            pageName: self.sojPageName || action,
            customparam: cp || '',
            action: action || '',
            type: 2
        })
    }

    logger.addLinkSoj = function(selector, attr, param) {
        $('body').on('click', selector, function(e) {

            var soj = $(this).data(attr || 'soj') || $(this).attr(attr || '_soj'), // 默认使用data，如果取不到，使用attr
                _soj = $.trim(soj), // 去空格
                href = $.trim($(this).attr('href')),
                _param = param || 'from', // 默认是from
                _target = $(this).attr('target'),//兼容各种target
                _hasTarget = _target !== undefined ,
                _href;

            if(!_soj){//如果没获取到soj直接退出让它自己执行自己的href
                return;
            }

            if (!href) { // 此处链接不做合法性检查
                return;
            }
            if (href.toLowerCase().indexOf('javascript') === 0) {
                return;
            }
            //if (!_soj) { // 如果无soj,直接跳转
            //    location.href = href;
            //    return ;
            //}
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation()
            href = href.replace(/(&from=(.)*$)|(\?from=(.)*$)/,''); //移除原本url中的from
            _href = (href.indexOf('?') !== -1)? href+'&'+_param+'='+_soj : href+'?'+_param+'='+_soj; //拼接url
            if(_hasTarget){  //是否含有target
               if(!/*@cc_on!@*/0){  //若非ie
                    var winoper = window.open(_href,_target);
                    winoper && winoper.focus();
               }else{
                    var _el = document.createElement('a');
                    _el.href = _href;
                    _el.target = _target;
                    $(_el).appendTo('body').get(0).click();
                    $(_el).remove();
               }
            }else{
               location.href = _href;
            }

        });
    }

    logger.Exposure = function(op) {
        var defaults = {
            site:'',
            trackTag: 'data-trace',
            delay: 50,
            page:'',
            pageName: '',
            NUid:'',
            NGuid:'',
            prefix: ''
        };
        this.ops = $.extend(defaults, op);
        this.domCache = []; // 保存内容
        this.pageViewHeight = window.innerHeight; //$(window).height()获取高度不对
        this.timer = null;
        this.dataCache = [];
        this.expStatus = false;
        this.init();
    };
    logger.Exposure.prototype = {
        constructor: logger.Exposure,
        add: function(list) {
            var _this = this;
            this.expStatus = true;
            list.each(function(index, el) {
                _this.domCache.push($(el));
            });
            // rAf();
        },
        init: function() {
            var wd = $(window),
                self = this;
            wd.resize($.proxy(this.resize, this)); // resize
            wd.on('beforeunload', $.proxy(this.beforeunload, this));
            rAf(scroll);
            function scroll(){
                rAf(scroll);
                if (!self.expStatus) {
                    return;
                }
                clearTimeout(self.timer);
                if (self.domCache.length === 0) {
                    self.expStatus = false;
                    self.buildData();
                    return;
                }
                self.timer = setTimeout(function(){
                    $.proxy(self.addData, self)();
                }, self.ops.delay);
            }
        },
        resize: function() {
            this.pageViewHeight = window.innerHeight; //$(window).height()获取高度不对
        },
        beforeunload: function() {
            this.buildData();
        },
        scroll: function() {
            
        },
        sendExp: function(result) {
            logger.sendSoj({
                'NGuid':this.ops.NGuid,
                'NUid':this.ops.NUid,
                'site':this.ops.site,
                'page':this.ops.prefix + this.ops.page,
                'pageName':this.ops.prefix + this.ops.pageName,
                'customparam':result,
                'type':3
            });
        },
        addData: function() {
            var pageViewHeight = this.pageViewHeight,
                topY = $(window).scrollTop(),
                botY = topY + pageViewHeight,
                _this = this;
            if (this.domCache.length === 0) {
                return;
            }
            $.each(this.domCache, function(index, val) {
                var _topY,
                    attr;
                if (!val) {
                    return;
                }
                _topY = val.offset ? val.offset().top : 0;
                if (_topY > topY && _topY < botY) {
                    attr = val.attr(_this.ops.trackTag);
                    if (attr) {
                        _this.dataCache.push(attr);
                    }
                    delete _this.domCache[index];
                }
            });
            this.buildData();
        },
        buildData: function() {
            var _this = this,
                result = {},
                r = [],
                exp,
                key,
                length,
                i;
            /**
             * "{aa:'123'}"
             * 这种格式的数据JSON.parse解析不了，必须用eval才能转成json
             */
            if (this.dataCache.length === 0) { // 如果没有数据就不发送
                return;
            }
            exp = eval('([' + this.dataCache.join(',') + '])');
            this.dataCache = []; // 清除要发送的数据
            for (i = 0, length = exp.length; i < length; i++) {
                for (key in exp[i]) {
                    if (!result[key]) {
                        result[key] = [];
                    }
                    result[key].push(exp[i][key]);
                }
            }
            for (key in result) { // 不考虑兼容pc 此循环可以用JSON.stringify替换
                r.push('"' + key + '"' + ':[' + result[key].join(',') + ']');
            }
            this.sendExp('{"exposure":{' + r.join(',') + '}}');
            $.each(this.domCache, function(index, val) {
                if (!val) {
                    _this.domCache.splice(index, 1); // 删除已统计过的dom
                }
            });
        }
    };

    // 初始化 jserror
    window.onerror = function(msg, url, line) {
        logger.sendError({
            message: msg,
            url: url,
            line: line
        });
    }
    
    // 初始化 from
    $(function(){
        logger.addLinkSoj('a[_soj]');
    });
})();;;
(function($){
    $(function(){
        var hideLink = function(dom){
            var _this = dom;
            var timer = setTimeout(function(){
                _this.hide()
            },500);
            _this.data('hiddenTimer',timer);
        }

        $('#footer').on('click','[data-target]',function(e){
            e.preventDefault();
            var target = $(this).data('target');
            $('#'+target).toggle();
        });

        $('#footer').on('mouseout','[data-target]',function(){
            var target = $(this).data('target');
            hideLink($('#'+target))
        });

        $('#loan_link, #other_city, #map_link, #house_link, #seo_qa').hover(function(){
            var timer = $(this).data('hiddenTimer');
            clearTimeout(timer);
        },function(){
            hideLink($(this));
        });
    });
})(jQuery);var SiteTracker = function (s, p, r, u) {
  if (s != undefined && s != null) {
    this.site = s;
  }

  if (p != undefined && p != null) {
    this.page = p;
  }

  if (r != undefined && r != null) {
    this.referer = r;
  }

  if (u != undefined && u != null) {
    this.uid = u;
  }

  this.serial = 0;
};

SiteTracker.prototype.getCookie = function (sKey) {
  if (!sKey || !this.hasItem(sKey)) {
    return null;
  }
  return decodeURIComponent(document.cookie.replace(new RegExp("(?:^|.*;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"));
};

SiteTracker.prototype.hasItem = function (sKey) {
  return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
};

SiteTracker.prototype.track = function (t_params) {
  this.buildParams();

  var src = "",
    params = [];

  if (typeof (t_params) == "undefined" || typeof (t_params.target_url) == "undefined") {
    src = location.protocol + "//s.anjuke.com/stb?__site=" + encodeURIComponent(this.params['site']) + "&";
  } else {
    src = t_params.target_url + '?';
  }
  // for (var k in this.params) {
  //   params.push(k + "=" + encodeURIComponent(this.params[k]));
  // }
  // src += params.join('&');
  var prev_if = document.getElementById("sojtracker" + this.serial);
  while (prev_if) {
    this.serial += 1;
    prev_if = document.getElementById("sojtracker" + this.serial);
  }

  var ifContainer = document.createElement("div");
  ifContainer.innerHTML = '<iframe style="display:none" id="sojtracker' + this.serial + '" name="sojtracker' + this.serial + '" height="300" width="500"></iframe>';
  (document.getElementsByTagName('head')[0]).appendChild(ifContainer);

  var form = document.createElement("form");
  form.action = src;
  form.method = "post";
  for (var k in this.params) {
    try {
      var a = document.createElement("<input type='hidden' name='" + k + "'>");
    } catch (e) {
      var a = document.createElement('input');
      a.setAttribute('type', 'hidden');
      a.setAttribute('name', k);
    }
    if (k == "uid") {
      a.value = this.params[k] || 0;
    } else {
      a.value = this.params[k] || "";
    }
    form.appendChild(a);
  }
  (document.getElementsByTagName('head')[0]).appendChild(form);
  form.target = "sojtracker" + this.serial;
  form.submit();
};

SiteTracker.prototype.buildParams = function () {
  var href = document.location.href;

  var guid = this.getCookie(this.nGuid || "aQQ_ajkguid");
  var ctid = this.getCookie(this.nCtid || "ctid");
  var luid = this.getCookie(this.nLiu || "lui");
  var ssid = this.getCookie(this.nSessid || "sessid");
  var uid = this.getCookie(this.nUid || "ajk_member_id");

  if (this.uid != undefined && this.uid != null) {
    uid = this.uid;
  }

  if (uid == undefined || uid == null || uid == "") {
    uid = 0;
  }

  var method = "";
  if (this.method != undefined && this.method != null) {
    method = this.method;
  }

  this.params = new Object();
  this.params.p = this.page;
  this.params.h = href;
  this.params.r = this.referer;
  this.params.site = this.site;
  this.params.guid = guid;
  this.params.ssid = ssid;
  this.params.uid = uid;
  this.params.t = new Date().getTime();
  this.params.ctid = ctid;
  this.params.luid = luid;
  this.params.m = method;

  if (this.screen != undefined) {
    this.params.sc = JSON.stringify(this.screen)
  }

  if (this.cst != undefined && /[0-9]{13}/.test(this.cst)) {
    this.params.lt = this.params.t - parseInt(this.cst);
  }

  if (this.pageName != undefined) {
    this.params.pn = this.pageName;
  }

  if (this.customParam != undefined) {
    this.params.cp = this.customParam;
  }
  if (this.exposureParams != undefined) {
    this.params.ep = this.exposureParams;
  }
  if (this.plat != undefined) {
    this.params.plat = this.plat;
  }

  if (this.type != undefined) {
    this.params.type = this.type;
  }

  if (this.action != undefined) {
    this.params.action = this.action;
  }

};

SiteTracker.prototype.setPlat = function (p) {
  this.plat = p;
};

SiteTracker.prototype.setType = function (t) {
  this.type = t;
};

SiteTracker.prototype.setAction = function (a) {
  this.action = a;

};

SiteTracker.prototype.setSite = function (s) {
  this.site = s;
};

SiteTracker.prototype.setPage = function (p) {
  this.page = p;
};

SiteTracker.prototype.setPageName = function (n) {
  this.pageName = n;
};

SiteTracker.prototype.setCookieNames = function (c) {
  this.cookNames = c;
};

SiteTracker.prototype.setReferer = function (r) {
  this.referer = r;
};

SiteTracker.prototype.setUid = function (u) {
  this.uid = u;
};

SiteTracker.prototype.setMethod = function (m) {
  this.method = m;
};

SiteTracker.prototype.setNGuid = function (n) {
  this.nGuid = n;
};

SiteTracker.prototype.setNCtid = function (n) {
  this.nCtid = n;
};

SiteTracker.prototype.setNLiu = function (n) {
  this.nLiu = n;
};

SiteTracker.prototype.setNSessid = function (n) {
  this.nSessid = n;
};

SiteTracker.prototype.setNUid = function (n) {
  this.nUid = n;
};

SiteTracker.prototype.setCst = function (n) {
  this.cst = n;
};

SiteTracker.prototype.setScreen = function (v) {
  this.screen = v;
};

SiteTracker.prototype.setCustomParam = function (v) {
  this.customParam = v;
}

SiteTracker.prototype.setExposureParams = function (v) {
  this.exposureParams = v;
}
SiteTracker.prototype.getParams = function () {
  return this.params;
}


var sendLegao = function (url) {
  if (url != undefined && url != null && url != '') {
    this.url =decodeURIComponent(url)
    this.sendTrack()
  }
  this.serial = 0
}
sendLegao.prototype.sendTrack = function () {
  var scp = document.createElement("script");
  scp.type = 'text/javascript';
  scp.src = this.url;
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(scp);
}
/*
    json2.js
    2015-05-03

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse. This file is provides the ES5 JSON capability to ES3 systems.
    If a project might run on IE8 or earlier, then this file should be included.
    This file does nothing on ES5 systems.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 
                            ? '0' + n 
                            : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date 
                    ? 'Date(' + this[key] + ')' 
                    : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint 
    eval, for, this 
*/

/*property
    JSON, apply, call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (typeof JSON !== 'object') {
    JSON = {};
}

(function () {
    'use strict';
    
    var rx_one = /^[\],:{}\s]*$/,
        rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
        rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        rx_four = /(?:^|:|,)(?:\s*\[)+/g,
        rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 
            ? '0' + n 
            : n;
    }
    
    function this_value() {
        return this.valueOf();
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function () {

            return isFinite(this.valueOf())
                ? this.getUTCFullYear() + '-' +
                        f(this.getUTCMonth() + 1) + '-' +
                        f(this.getUTCDate()) + 'T' +
                        f(this.getUTCHours()) + ':' +
                        f(this.getUTCMinutes()) + ':' +
                        f(this.getUTCSeconds()) + 'Z'
                : null;
        };

        Boolean.prototype.toJSON = this_value;
        Number.prototype.toJSON = this_value;
        String.prototype.toJSON = this_value;
    }

    var gap,
        indent,
        meta,
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        rx_escapable.lastIndex = 0;
        return rx_escapable.test(string) 
            ? '"' + string.replace(rx_escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string'
                    ? c
                    : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' 
            : '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) 
                ? String(value) 
                : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0
                    ? '[]'
                    : gap
                        ? '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']'
                        : '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === 'string') {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap 
                                    ? ': ' 
                                    : ':'
                            ) + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (
                                gap 
                                    ? ': ' 
                                    : ':'
                            ) + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0
                ? '{}'
                : gap
                    ? '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}'
                    : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                    typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            text = String(text);
            rx_dangerous.lastIndex = 0;
            if (rx_dangerous.test(text)) {
                text = text.replace(rx_dangerous, function (a) {
                    return '\\u' +
                            ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (
                rx_one.test(
                    text
                        .replace(rx_two, '@')
                        .replace(rx_three, ']')
                        .replace(rx_four, '')
                )
            ) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function'
                    ? walk({'': j}, '')
                    : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());APF.Namespace.register('ajk.pc');;
;(function($) {

    var sideBar;
    ajk.pc.sideBar = sideBar = function(op) {
        this._op = $.extend({}, {
            sideBarBox: $('.sidebar'),
            toTop: $('.sidebar-top'),
            sidebarNav: $('.sidebar-mod a'),
            sidebarNavQrcode: $('.sidebar-mod a.nav-qrcode'),
            sideBarNavQrcodeClock: 0,
            minWidth: 1280,
            minTop: 400
        }, op || {});

        this.init();
    };

    sideBar.prototype.init = function() {
        var self = this;
        self.addLinkSoj('a[data-soj]');
        self.slideNav();
        self.checkVisible();
        self.showQrcode();
        $(window).on('scroll resize', function() {
            self.checkVisible();
            self.hideQrcode();
            self.showQrcode();
        });

        self._op.toTop.on('click',function(e) {

            self.sendSoj({
                site: 'anjuke-npv',
                pn: 'track_back_top_click'
            });
            $('html,body').animate({
                scrollTop: 0
            }, 100);
        });

        $('#sid_survey').on('click',function(){
            self.sendSoj({
                site: 'anjuke-npv',
                pn: 'track_survey_click'
            });
        })

    };
    sideBar.prototype.showQrcode = function(){
        const self = this;
        clearTimeout(self._op.sideBarNavQrcodeClock);
        self._op.sideBarNavQrcodeClock = setTimeout(function () {
            if (!self._op.sidebarNavQrcode.hasClass("hover")) {
                self._op.sidebarNavQrcode.trigger('mouseenter');
            }
        },1000);
    };
    sideBar.prototype.hideQrcode = function(){
        const self = this;
        clearTimeout(self._op.sideBarNavQrcodeClock);
        if(self._op.sidebarNavQrcode.hasClass('hover')){
            self._op.sidebarNavQrcode.removeClass('hover');
            self._op.sidebarNavQrcode.trigger('mouseout')
        }
    };

    sideBar.prototype.checkVisible = function() {
        var self = this,
            winWidth = $(window).width(),
            scrollTop = $(window).scrollTop();

        //sidebar 通栏是否显示
        if (winWidth > self._op.minWidth) {
            self._op.sideBarBox.show();
            self._op.sideBarBox.stop().animate({
                right: '0px'
            }, 100)
            self._op.toTop.removeClass('sd-top-sig');
        } else {
            self._op.sideBarBox.stop().animate({
                right: '-40px'
            }, 100)
            self._op.toTop.addClass('sd-top-sig');
        }

        if (scrollTop > self._op.minTop) {
            self._op.toTop.show();
        } else {
            self._op.toTop.hide();
        }
    };

    sideBar.prototype.slideNav = function() {
        var self = this;
        self._op.sidebarNav.hover(
            function() {
                self.hideQrcode();
                var hoverWidth = $(this).children('.sidebar-nav-hover').hasClass('sidebar-sao') ? '130px' : '90px';
                $(this).addClass('hover').children('.sidebar-nav-hover').stop()
                    .animate({
                        width: hoverWidth
                    }, 100);
            },
            function() {
                $(this).removeClass('hover').children('.sidebar-nav-hover').stop()
                    .animate({
                        width: '0px'
                    }, 100);
                self.showQrcode();
            }
        )
    };

    sideBar.prototype.sendSoj = function(op){
        var self = this;
        if(ajk && ajk.Logger){

            ajk.Logger.sendSoj({
                page: op.pn,
                site: op.site,
                pageName: op.pn
            });

        }else if(J && J.site && J.site.trackEvent){

            J.site.trackEvent(op.pn);

        }

    };
    sideBar.prototype.addLinkSoj = function(selector, attr, param){
        $('body').on('click', selector, function(e) {

            var soj = $(this).data(attr || 'soj') || $(this).attr(attr || 'data-soj'), // 默认使用data，如果取不到，使用attr
                _soj = $.trim(soj), // 去空格
                href = $.trim($(this).attr('href')),
                _param = param || 'from', // 默认是from
                _target = $(this).attr('target'),//兼容各种target
                _hasTarget = _target !== undefined ,
                _href;

            if(!_soj){//如果没获取到soj直接退出让它自己执行自己的href
                return;
            }

            if (!href) { // 此处链接不做合法性检查
                return;
            }
            if (href.toLowerCase().indexOf('javascript') === 0) {
                return;
            }

            e.preventDefault();
            e.stopPropagation();
            href = href.replace(/(&from=(.)*$)|(\?from=(.)*$)/,''); //移除原本url中的from
            _href = (href.indexOf('?') !== -1)? href+'&'+_param+'='+_soj : href+'?'+_param+'='+_soj; //拼接url
            if(_hasTarget){  //是否含有target
               if(!/*@cc_on!@*/0){  //若非ie
                    var winoper = window.open(_href,_target);
                    winoper && winoper.focus();
               }else{
                    var _el = document.createElement('a');
                    _el.href = _href;
                    _el.target = _target;
                    $(_el).appendTo('body').get(0).click();
                    $(_el).remove();
               }
            }else{
               location.href = _href;
            }

        });
    }

})(jQuery);

J.ready(function(){
    J.s('.seo_tabs').each(function(i,v){
        v.on("mouseover",function(){
            changeContent(i);
            J.s('.seoTabsOn').each(function(i, v){
                v.removeClass('seoTabsOn');
            })
            v.addClass('seoTabsOn');
        })
    });

    function changeContent(idx){
        //每次移动鼠标
        var con = J.g('footer_seo_con' + idx),
            con2 = J.g('footer_seo_city' + idx);
        J.s('.footer_seo_con').each(function(i,v){
            v.hide();
        })
        J.s('.footer_seo_city').each(function(i,v){
            v.hide();
        })
        con.show();
        con2&&con2.show();
    }
/*
    if (J.g("relative_ershoufang")) {
        J.g("relative_ershoufang").s("a").each(function(i, v) {
            v.on("click", function(e) {
                e = window.event || e;
                e.preventDefault ? e.preventDefault() : (e.returnValue == false);
                J.g("relative_ershoufang").s("a").each(function(i, v) {
                    v.removeClass("first");
                });
                v.addClass("first");
                J.g("relative_plate_list").s("div").each(function(i, v) {
                    v.hide();
                });
                J.g("relative_plate_list").s("div").eq(i).show();
            });
        });
    }*/
    var seoTagId=document.getElementById("relative_ershoufang");
    var seoListId=document.getElementById("relative_plate_list");
    var seoTag=seoTagId&&seoTagId.getElementsByTagName("a");
    var seoList=seoListId&&seoListId.getElementsByTagName("div");
    if(seoTag){
        for(var i=0;i<seoTag.length;i++){
        
            (function(i){
                seoTag[i].onclick=function(){
                    for(var j=0;j<seoList.length;j++){
                        seoList[j].style.display="none";
                        seoTag[j].className='';
                    }
                    j=i;
                    seoTag[i].className='first'
                    seoList[j].style.display="block";
                }
            })(i);
        
        }
    }
});
/**
 * Aifang Javascript Framework.
 * Copyright 2012 ANJUKE Inc. All rights reserved.
 *
 * @path: global/footer/FooterHome.js
 * @author: john
 * @version: 1.0.0
 * @date: 2014/2/07
 *
 */
//this code already in Flink.js
/*(function(){
    function FooterCityList(selectorId, panelId){
        var selector = J.g(selectorId),
            panel = J.g(panelId),
            timeoutHandle,
            hideTimeout = 500;
        selector.on("click", function(){
            if(panel.getStyle("display") == "none"){
                panel.show();
            }else{
                panel.hide();
            }
        });

        J.g("topic").on("mouseover",function(){
            if(panel.getStyle("display") != "none"){
                window.clearTimeout(timeoutHandle);
                panel.show();
            }
        });

        J.g("topic").on("mouseout",function(){
            if(panel.getStyle("display") != "none"){
                window.clearTimeout(timeoutHandle);
                timeoutHandle = window.setTimeout(function(){
                    panel.hide();
                }, hideTimeout);
            }
        });

        panel.on("mouseover",function(){
            window.clearTimeout(timeoutHandle);
            panel.show();
        });

        panel.on("mouseout",function(){
            window.clearTimeout(timeoutHandle);
            timeoutHandle = window.setTimeout(function(){
                panel.hide();
            }, hideTimeout);

        });



    }
    //register namespace
    J.globalFooter = {};
    J.globalFooter.FooterCityList = FooterCityList;
})();
*/
/*  */
APF.Namespace.register("ajk.RightTool");
;(function($){
    ajk.RightTool.goTop = rightTool = function (){
        this.wchatOpener = '//pages.anjukestatic.com/usersite/site/js/chat/1.0.js';
        this.doms = {
            backtop: $("#backTop"),//返回顶部
            weixin: $("#weixin"),//下载app
            erweima: $("#j_erweima"),//二维码
            favirote: $("#favirote"),//我要发房
            suggestion: $("#suggestion"),//意见反馈
            weiliao: $('#weiliao'),//微聊
            research: $('#research'),//小安调查
            weiliao_unReadNum: $('#unReadNum'),//微聊未读信息数量dom
            weiliao_unReadBg: $('#unReadBg')//微聊未读信息数量背景dom
        };
        this.lastClickTime = 0;
        this.currClickTime = 0;
        this.t = ajk.Logger;
        this._init();
    }

    rightTool.prototype._init = function (){
        this.scroll();
        this.min1024();
        this.bindEvent();
    }

    //当页面加载时判断是否滚动超过400px 显示回到顶部
    rightTool.prototype.scroll = function (){
        var self = this;
        var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(_scrollTop >= 400){
           self.doms.backtop.css({"visibility":"visible"});
        }else{
            self.doms.backtop.css({"visibility":"hidden"});
        }
    }

    //如果浏览器宽度小于1024，则不显示二维码图片
    rightTool.prototype.min1024 = function (){
        var self = this;
        var _offsetWidth = 1380;

        if(document.documentElement.clientWidth < _offsetWidth){
            self.doms.erweima.addClass("j_sidebar_hide");
            self.doms.weixin.hide();
            self.doms.favirote.hide();
            self.doms.suggestion.hide();
            self.doms.weiliao.hide();
            self.doms.research.hide();
        }else{
            self.doms.erweima.removeClass("j_sidebar_hide");
            self.doms.weixin.show();
            self.doms.favirote.show();
            self.doms.suggestion.show();
            self.doms.weiliao.show();
            self.doms.research.show();
        }
    }

    rightTool.prototype.bindEvent = function (){
        var self = this;
        //显示隐藏二维码
        self.doms.weixin.on("mouseenter", function(){
            var erweima = self.doms.erweima;
            erweima.removeClass("fadeOut");
            erweima.addClass("fadeIn");
        });

        self.doms.weixin.on("mouseleave", function(){
            var erweima = self.doms.erweima;;
            erweima.removeClass("fadeIn");
            erweima.addClass("fadeOut");
        });

        self.doms.weixin.on("click", function(e){
            return false;
        });

        //回到顶部
        self.doms.backtop.on("click", function(){
            if(document.documentElement.scrollTop > 0){
                document.documentElement.scrollTop = 0;
            }else if(document.body.scrollTop > 0){
                document.body.scrollTop = 0;
            }
            _scrollTop = 0;
            // self.t.track('click_backTop');
            self.t.sendSoj({
                site: 'anjuke-npv',
                page: 'click_backTop'
            });
        });

        //如果页面上有微聊的标签显示，则执行微聊的短信数，并且绑定事件
        self.doms.weiliao.length && self.getUnreadMsgCount();

        //点击微聊
        // var lastClickTime = 0;
        // var currClickTime = 0;
        if(self.doms.weiliao.length){
            $.getScript(wchatOpener,function(){
                var that = self;
                self.doms.weiliao.click(function(e){
                    that.currClickTime = new Date().getTime();
                    e.preventDefault();
                    if (that.lastClickTime == 0 || (that.currClickTime - that.lastClickTime) > 500) {
                        window.chat.open();
                    }
                    that.lastClickTime = that.currClickTime;
                });
            });
        }


        //小安点击数统计
        self.doms.research.length && self.doms.research.on('click',function(){
            //T.trackEvent('click_research');
            self.t.sendSoj({
                site: 'anjuke-npv',
                page: 'click_research'
            });
        });

        //判断页面滚动超过400px，显示回到顶部，小于400px隐藏
        $(window).scroll(function(){
            self.scroll();
        });

        //页面缩放时判断浏览器宽度，小于1024则隐藏
        $(window).resize(function(){
            self.min1024();
        });
    }

    //添加收藏
    rightTool.prototype.addFavirote = function (){
        if(document.all) { // 判断是否ie
            window.external.addFavorite(url, title);
        }else{
            alert("抱歉，您的浏览器不支持此操作。\n\n收藏失败，请使用Ctrl+D添加至浏览器哦！");
        }
    }

    //toggle 实现隐藏二维码
    rightTool.prototype.toggleWeixin = function (){
        var self = this;
        var isHide = self.doms.erweima.attr("data-hide");
        if(isHide != "1"){
            self.doms.erweima.attr({"data-hide":"1"});
            self.doms.erweima.hide();
            T.trackEvent('hide_erweima');
            /*if(getCookie("weixin_ui_closed") != 1){
             setCookie("weixin_ui_closed", 1, 24*365, ".anjuke.com"); //设置隐藏二维码到cookie里
             }*/
        }else{
            self.doms.erweima.attr({"data-hide":"0"});
            self.doms.erweima.show();
            /*if(getCookie("weixin_ui_closed") != 0){
             setCookie("weixin_ui_closed", 0, 24*365); //设置显示二维码到cookie里
             }*/
        }
    }

    //微聊获取未读信息数
    rightTool.prototype.getUnreadMsgCount = function() {
        var self = this;
        //var url = 'https://chat.anjuke.com/api/unreadmsgcnt';
        var url = urlForWeiLiaoJs;//global variable
        $.get(url,{
            'jsonp': 1,
            'jsonpcallback' :'setUnreadMsgCount'
        },'jsonp');

        window.setUnreadMsgCount = setUnreadMsgCount;
        function setUnreadMsgCount(data) {
            if (data.retcode == 0 && data.retdata && data.retdata.unreadMsgNum) {
                var count = data.retdata.unreadMsgNum;
                if (count > 0) {
                    count = (parseInt(count) > 99) ? '99+' : count;
                    self.doms.weiliao_unReadNum.html(count);
                    self.doms.weiliao_unReadBg.show();
                } else {
                    self.doms.weiliao_unReadBg.hide();
                }
            }
        }
    }












    // var wchatOpener = '//pages.anjukestatic.com/usersite/site/js/chat/1.0.js';
    // //当页面加载时判断是否滚动超过400px 显示回到顶部
    // scroll();

    // //页面load时判断浏览器宽度，小于1024则隐藏
    // min1024();

    // //显示隐藏二维码
    // $("#weixin").on("mouseenter", function(){
    //     var erweima = J.g("j_erweima");
    //     erweima.removeClass("fadeOut");
    //     erweima.addClass("fadeIn");
    // });

    // $("#weixin").on("mouseleave", function(){
    //     var erweima = J.g("j_erweima");
    //     erweima.removeClass("fadeIn");
    //     erweima.addClass("fadeOut");
    // });

    // $("#weixin").on("click", function(e){
    //     return false;
    // });

    // //判断页面滚动超过400px，显示回到顶部，小于400px隐藏
    // // J.on(window, "scroll", function(){
    // //     scroll();
    // // });
    // $(window).scroll(function(){
    //     scroll();
    // });

    // //页面缩放时判断浏览器宽度，小于1024则隐藏
    // $(window).resize(function(){
    //     min1024();
    // });

    // //回到顶部
    // $("#backTop").on("click", function(){
    //     if(document.documentElement.scrollTop > 0){
    //         document.documentElement.scrollTop = 0;
    //     }else if(document.body.scrollTop > 0){
    //         document.body.scrollTop = 0;
    //     }
    //     _scrollTop = 0;
    //     T.trackEvent('click_backTop');
    // });

    // //判断是否滚动到400px
    // function scroll(){
    //     var _scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //     if(_scrollTop >= 400){
    //        $("#backTop").css({"visibility":"visible"});
    //     }else{
    //         $("#backTop").css({"visibility":"hidden"});
    //     }
    // }

    // //toggle 现实隐藏二维码
    // function toggleWeixin(){
    //     var isHide = $("#j_erweima").attr("data-hide");
    //     if(isHide != "1"){
    //         $("#j_erweima").attr({"data-hide":"1"});
    //         $("#j_erweima").hide();
    //         T.trackEvent('hide_erweima');
    //         /*if(getCookie("weixin_ui_closed") != 1){
    //          setCookie("weixin_ui_closed", 1, 24*365, ".anjuke.com"); //设置隐藏二维码到cookie里
    //          }*/
    //     }else{
    //         $("#j_erweima").attr({"data-hide":"0"});
    //         $("#j_erweima").show();
    //         /*if(getCookie("weixin_ui_closed") != 0){
    //          setCookie("weixin_ui_closed", 0, 24*365); //设置显示二维码到cookie里
    //          }*/
    //     }
    // }

    // function addFavirote(url, title){
    //     if(document.all) { // 判断是否ie
    //         window.external.addFavorite(url, title);
    //     }else{
    //         alert("抱歉，您的浏览器不支持此操作。\n\n收藏失败，请使用Ctrl+D添加至浏览器哦！");
    //     }
    // }

    // //如果浏览器宽度小于1024，则不显示二维码图片
    // function min1024(){
    //     // 老逻辑：获取页面宽度，小于1080P，则设置隐藏临界点为1185,大于或等于则设置隐藏临界点为1297
    //     // 新逻辑：改版后页面放宽，统一按1380 (1180 + 100*2)处理。
    //     var _offsetWidth = 1380;

    //     if(document.documentElement.clientWidth < _offsetWidth){
    //         $("#j_erweima").addClass("j_sidebar_hide");
    //         $("#weixin").hide();
    //         $("#favirote").hide();
    //         $("#suggestion").hide();
    //         $('#weiliao').hide();
    //         $('#research').hide();
    //     }else{
    //         $("#j_erweima").removeClass("j_sidebar_hide");
    //         $("#weixin").show();
    //         $("#favirote").show();
    //         $("#suggestion").show();
    //         $('#weiliao').show();
    //         $('#research').show();
    //     }
    // }
    // //微聊
    // function getUnreadMsgCount() {
    //     //var url = 'https://chat.anjuke.com/api/unreadmsgcnt';
    //     var url = urlForWeiLiaoJs;//global variable
    //     // J.get({
    //     //     url: url,
    //     //     data: {
    //     //         'jsonp': 1,
    //     //         'jsonpcallback' :'setUnreadMsgCount'
    //     //     },
    //     //     timeout: 20000,
    //     //     type: 'jsonp'
    //     // });
    //     $.get(url,{
    //         'jsonp': 1,
    //         'jsonpcallback' :'setUnreadMsgCount'
    //     },'jsonp');

    //     window.setUnreadMsgCount = setUnreadMsgCount;
    //     function setUnreadMsgCount(data) {
    //         if (data.retcode == 0 && data.retdata && data.retdata.unreadMsgNum) {
    //             var count = data.retdata.unreadMsgNum;
    //             if (count > 0) {
    //                 count = (parseInt(count) > 99) ? '99+' : count;
    //                 $('#unReadNum').html(count);
    //                 $('#unReadBg').show();
    //             } else {
    //                 $('#unReadBg').hide();
    //             }
    //         }
    //     }
    // }
    // //如果页面上有微聊的标签显示，则执行微聊的短信数，并且绑定事件
    // $('#weiliao').length && getUnreadMsgCount();

    // //点击微聊
    // var lastClickTime = 0;
    // var currClickTime = 0;
    // /*$('#weiliao').length && (function() {
    //     $('#weiliao').on('click', function() {
    //         currClickTime = new Date().getTime();
    //         //lastClickTime == 0代表首次点击
    //         if (lastClickTime == 0 || (currClickTime - lastClickTime) > 500) {
    //             J.chat.opener.open();
    //         }
    //         lastClickTime = currClickTime;
    //     });

    // }.require(['chat.opener'], true));*/
    // if($('#weiliao').length){
    //     $.getScript(wchatOpener,function(){
    //         $('#weiliao').click(function(e){
    //             currClickTime = new Date().getTime();
    //             e.preventDefault();
    //             if (lastClickTime == 0 || (currClickTime - lastClickTime) > 500) {
    //                 window.chat.open();
    //             }
    //             lastClickTime = currClickTime;
    //         });
    //     });
    // }


    // //小安点击数统计
    // $('#research').length && $('#research').on('click',function(){
    //     T.trackEvent('click_research');
    // });


})(jQuery);
APF.Namespace.register('anjuke.home.nationalhome');

anjuke.home.nationalhome=Class.create({
    initialize:function(){
        this.initLoginBox();
    },

    initLoginBox:function(){
        var options = {
            method : "get",
            onSuccess : function(data){
                var objData = data.responseJSON;
                this.showMobileConfirm(objData.common.ismobile);
            }.bind(this)
        };
        new Ajax.Request("/ajax/checklogin/?position=1&r="+Math.random(), options);
    },

    showMobileConfirm:function(isMobile){
        if(isMobile){
            window.location.href=location.protocol + '//m.anjuke.com';
        }
    }
});