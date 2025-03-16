splashRadar('banner');Splash.tpl.rectangle = function (__fest_context) {
    "use strict";
    var __fest_self = this, __fest_buf = "", __fest_chunks = [], __fest_chunk, __fest_attrs = [], __fest_select, __fest_if, __fest_iterator, __fest_to, __fest_fn, __fest_html = "", __fest_blocks = {}, __fest_params, __fest_element, __fest_debug_file = "", __fest_debug_line = "", __fest_debug_block = "", __fest_htmlchars = /[&<>"]/g, __fest_htmlchars_test = /[&<>"]/, __fest_short_tags = { "area": true, "base": true, "br": true, "col": true, "command": true, "embed": true, "hr": true, "img": true, "input": true, "keygen": true, "link": true, "meta": true, "param": true, "source": true, "wbr": true }, __fest_element_stack = [], __fest_htmlhash = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }, __fest_jschars = /[\\'"\/\n\r\t\b\f<>]/g, __fest_jschars_test = /[\\'"\/\n\r\t\b\f<>]/, __fest_jshash = { "\"": "\\\"", "\\": "\\\\", "/": "\\/", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\b": "\\b", "\f": "\\f", "'": "\\'", "<": "\\u003C", ">": "\\u003E" }, ___fest_log_error;
    function __fest_pushstr(_, s) { __fest_buf += s; }
    if (typeof __fest_error === "undefined") {
        ___fest_log_error = (typeof console !== "undefined" && console.error) ? function () { return Function.prototype.apply.call(console.error, console, arguments); } : function () { };
    }
    else {
        ___fest_log_error = __fest_error;
    }
    ;
    function __fest_log_error(msg) { ___fest_log_error(msg + "\nin block \"" + __fest_debug_block + "\" at line: " + __fest_debug_line + "\nfile: " + __fest_debug_file); }
    function __fest_replaceHTML(chr) { return __fest_htmlhash[chr]; }
    function __fest_replaceJS(chr) { return __fest_jshash[chr]; }
    function __fest_extend(dest, src) { for (var i in src)
        if (src.hasOwnProperty(i))
            dest[i] = src[i]; }
    function __fest_param(fn) { fn.param = true; return fn; }
    function __fest_call(fn, params, cp) { if (cp)
        for (var i in params)
            if (typeof params[i] == "function" && params[i].param)
                params[i] = params[i](); return fn.call(__fest_self, params); }
    function __fest_escapeJS(s) { if (typeof s === "string") {
        if (__fest_jschars_test.test(s))
            return s.replace(__fest_jschars, __fest_replaceJS);
    }
    else if (typeof s === "undefined")
        return ""; return s; }
    function __fest_escapeHTML(s) { if (typeof s === "string") {
        if (__fest_htmlchars_test.test(s))
            return s.replace(__fest_htmlchars, __fest_replaceHTML);
    }
    else if (typeof s === "undefined")
        return ""; return s; }
    var params = __fest_context;
    try {
        var transform = mr.locator.transform;
    }
    catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_if = params.ads && params.ads.length;
    }
    catch (e) {
        __fest_if = false;
        __fest_log_error(e.message);
    }
    if (__fest_if) {
        try {
            __fest_attrs[0] = __fest_escapeHTML(transform('rectangle-banner__inner'));
        }
        catch (e) {
            __fest_attrs[0] = "";
            __fest_log_error(e.message);
        }
        __fest_pushstr(__fest_context, "<div class=\"" + __fest_attrs[0] + "\">");
        try {
            __fest_attrs[0] = __fest_escapeHTML(transform('rectangle-banner__list'));
        }
        catch (e) {
            __fest_attrs[0] = "";
            __fest_log_error(e.message);
        }
        try {
            __fest_attrs[1] = __fest_escapeHTML(transform('rectangle-banner__list_' + params.ads.length));
        }
        catch (e) {
            __fest_attrs[1] = "";
            __fest_log_error(e.message);
        }
        __fest_pushstr(__fest_context, "<div class=\"" + __fest_attrs[0] + " " + __fest_attrs[1] + "\">");
        var i, ad, __fest_to0, __fest_iterator0;
        try {
            __fest_iterator0 = params.ads || [];
            __fest_to0 = __fest_iterator0.length;
        }
        catch (e) {
            __fest_iterator0 = [];
            __fest_to0 = 0;
            __fest_log_error(e.message);
        }
        for (i = 0; i < __fest_to0; i++) {
            ad = __fest_iterator0[i];
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('rectangle-banner__item'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            try {
                __fest_attrs[1] = __fest_escapeHTML(i);
            }
            catch (e) {
                __fest_attrs[1] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<div class=\"" + __fest_attrs[0] + "\" data-bem=\"ads[" + __fest_attrs[1] + "].url\" data-mnemo=\"true\">");
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('rectangle-banner__image'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<div class=\"" + __fest_attrs[0] + "\">");
            try {
                __fest_if = ad.images && ad.images[0];
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                try {
                    __fest_attrs[0] = __fest_escapeHTML(ad.images[0][0]);
                }
                catch (e) {
                    __fest_attrs[0] = "";
                    __fest_log_error(e.message);
                }
                __fest_pushstr(__fest_context, "<img src=\"" + __fest_attrs[0] + "\" alt=\"\"/>");
            }
            __fest_pushstr(__fest_context, "</div>");
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('rectangle-banner__content'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<div class=\"" + __fest_attrs[0] + "\">");
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('rectangle-banner__title'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<div class=\"" + __fest_attrs[0] + "\">");
            try {
                __fest_if = ad.puny_domain;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                try {
                    __fest_attrs[0] = __fest_escapeHTML(transform('favicon'));
                }
                catch (e) {
                    __fest_attrs[0] = "";
                    __fest_log_error(e.message);
                }
                try {
                    __fest_attrs[1] = __fest_escapeHTML(ad.puny_domain);
                }
                catch (e) {
                    __fest_attrs[1] = "";
                    __fest_log_error(e.message);
                }
                __fest_pushstr(__fest_context, "<img class=\"" + __fest_attrs[0] + "\" src=\"\/\/favicon.yandex.net\/favicon\/" + __fest_attrs[1] + "\" alt=\"\"/>");
            }
            try {
                __fest_pushstr(__fest_context, ad.title);
            }
            catch (e) {
                __fest_log_error(e.message + "23");
            }
            __fest_pushstr(__fest_context, "</div>");
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('rectangle-banner__desc'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<div class=\"" + __fest_attrs[0] + "\">");
            try {
                __fest_pushstr(__fest_context, ad.body);
            }
            catch (e) {
                __fest_log_error(e.message + "27");
            }
            __fest_pushstr(__fest_context, "</div>");
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('rectangle-banner__details'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<div class=\"" + __fest_attrs[0] + "\">");
            try {
                __fest_if = ad.domain;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                try {
                    __fest_pushstr(__fest_context, ad.domain);
                }
                catch (e) {
                    __fest_log_error(e.message + "32");
                }
                __fest_pushstr(__fest_context, " ");
            }
            try {
                __fest_if = ad.region;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                try {
                    __fest_pushstr(__fest_context, ad.region);
                }
                catch (e) {
                    __fest_log_error(e.message + "36");
                }
                __fest_pushstr(__fest_context, " ");
            }
            try {
                __fest_if = ad.warning;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                try {
                    __fest_pushstr(__fest_context, ad.warning);
                }
                catch (e) {
                    __fest_log_error(e.message + "40");
                }
            }
            try {
                __fest_if = ad.link_tail;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                try {
                    __fest_attrs[0] = __fest_escapeHTML(ad.link_tail);
                }
                catch (e) {
                    __fest_attrs[0] = "";
                    __fest_log_error(e.message);
                }
                __fest_pushstr(__fest_context, "<img src=\"" + __fest_attrs[0] + "\"/>");
            }
            __fest_pushstr(__fest_context, "</div></div></div>");
        }
        __fest_pushstr(__fest_context, "</div></div>");
    }
    __fest_to = __fest_chunks.length;
    if (__fest_to) {
        __fest_iterator = 0;
        for (; __fest_iterator < __fest_to; __fest_iterator++) {
            __fest_chunk = __fest_chunks[__fest_iterator];
            if (typeof __fest_chunk === "string") {
                __fest_html += __fest_chunk;
            }
            else {
                __fest_fn = __fest_blocks[__fest_chunk.name];
                if (__fest_fn)
                    __fest_html += __fest_call(__fest_fn, __fest_chunk.params, __fest_chunk.cp);
            }
        }
        return __fest_html + __fest_buf;
    }
    else {
        return __fest_buf;
    }
};