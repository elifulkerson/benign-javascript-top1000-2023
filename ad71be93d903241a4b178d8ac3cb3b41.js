splashRadar('tgb');Splash.tpl.tgb = function (__fest_context) {
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
    var tgb = __fest_context;
    try {
        var isMimic = tgb.ads;
        var isEmpty = isMimic ? !tgb.ads.length : false;
        var ad;
        var img;
        var transform = mr.locator.transform;
        if (!isEmpty) {
            ad = isMimic ? tgb.ads[0] : tgb;
            img = ad.img || ad.images.length && ad.images[0].length && ad.images[0][0];
        }
    }
    catch (e) {
        __fest_log_error(e.message);
    }
    try {
        __fest_if = !isEmpty;
    }
    catch (e) {
        __fest_if = false;
        __fest_log_error(e.message);
    }
    if (__fest_if) {
        try {
            __fest_element = isMimic ? 'div' : 'a';
            if (typeof __fest_element !== "string") {
                __fest_log_error("Element name must be a string");
                __fest_element = "div";
            }
        }
        catch (e) {
            __fest_element = "div";
            __fest_log_error(e.message);
        }
        __fest_element_stack.push(__fest_element);
        __fest_pushstr(__fest_context, "<" + __fest_element);
        __fest_pushstr(__fest_context, " class=\"");
        try {
            __fest_pushstr(__fest_context, __fest_escapeHTML(transform('tgb__inner')));
        }
        catch (e) {
            __fest_log_error(e.message + "17");
        }
        __fest_pushstr(__fest_context, "\"");
        try {
            __fest_if = ad.href;
        }
        catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            __fest_pushstr(__fest_context, " href=\"");
            try {
                __fest_pushstr(__fest_context, __fest_escapeHTML(ad.href));
            }
            catch (e) {
                __fest_log_error(e.message + "20");
            }
            __fest_pushstr(__fest_context, "\" target=\"_blank\"");
        }
        try {
            __fest_if = ad.id;
        }
        catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            __fest_pushstr(__fest_context, " data-b=\"");
            try {
                __fest_pushstr(__fest_context, __fest_escapeHTML(ad.id));
            }
            catch (e) {
                __fest_log_error(e.message + "30");
            }
            __fest_pushstr(__fest_context, "\"");
        }
        try {
            __fest_if = isMimic;
        }
        catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            __fest_pushstr(__fest_context, " data-bem=\"ads[0].url\" data-mnemo=\"true\"");
        }
        __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
        __fest_pushstr(__fest_context, __fest_element in __fest_short_tags ? "/>" : ">");
        try {
            __fest_if = img;
        }
        catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            __fest_pushstr(__fest_context, "<span class=\"");
            try {
                __fest_pushstr(__fest_context, __fest_escapeHTML(transform('tgb__inner__figure')));
            }
            catch (e) {
                __fest_log_error(e.message + "49");
            }
            try {
                __fest_if = isMimic;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                __fest_pushstr(__fest_context, " ");
                try {
                    __fest_pushstr(__fest_context, __fest_escapeHTML(transform('tgb__inner__figure_target')));
                }
                catch (e) {
                    __fest_log_error(e.message + "51");
                }
            }
            try {
                __fest_if = ad.type;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                __fest_pushstr(__fest_context, " ");
                try {
                    __fest_pushstr(__fest_context, __fest_escapeHTML(transform('tgb__inner__figure_' + ad.type)));
                }
                catch (e) {
                    __fest_log_error(e.message + "55");
                }
            }
            __fest_pushstr(__fest_context, "\"");
            try {
                __fest_if = ad.id;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                __fest_pushstr(__fest_context, " data-b=\"");
                try {
                    __fest_pushstr(__fest_context, __fest_escapeHTML(ad.id));
                }
                catch (e) {
                    __fest_log_error(e.message + "61");
                }
                __fest_pushstr(__fest_context, "\"");
            }
            __fest_pushstr(__fest_context, ">");
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('tgb__inner__figure__img'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            try {
                __fest_attrs[1] = __fest_escapeHTML(img);
            }
            catch (e) {
                __fest_attrs[1] = "";
                __fest_log_error(e.message);
            }
            try {
                __fest_attrs[2] = __fest_escapeHTML(ad.title);
            }
            catch (e) {
                __fest_attrs[2] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<img class=\"" + __fest_attrs[0] + "\" src=\"" + __fest_attrs[1] + "\" alt=\"" + __fest_attrs[2] + "\"/></span>");
        }
        try {
            __fest_attrs[0] = __fest_escapeHTML(transform('tgb__inner__content'));
        }
        catch (e) {
            __fest_attrs[0] = "";
            __fest_log_error(e.message);
        }
        __fest_pushstr(__fest_context, "<span class=\"" + __fest_attrs[0] + "\">");
        try {
            __fest_attrs[0] = __fest_escapeHTML(transform('tgb__inner__content__inner'));
        }
        catch (e) {
            __fest_attrs[0] = "";
            __fest_log_error(e.message);
        }
        __fest_pushstr(__fest_context, "<span class=\"" + __fest_attrs[0] + "\">");
        try {
            __fest_attrs[0] = __fest_escapeHTML(transform('tgb__inner__content__title'));
        }
        catch (e) {
            __fest_attrs[0] = "";
            __fest_log_error(e.message);
        }
        __fest_pushstr(__fest_context, "<span class=\"" + __fest_attrs[0] + "\">");
        __fest_select = "text";
        __fest_params = {};
        try {
            __fest_params = ad.title;
        }
        catch (e) {
            __fest_log_error(e.message);
        }
        __fest_chunks.push(__fest_buf, { name: __fest_select, params: __fest_params, cp: false });
        __fest_buf = "";
        __fest_pushstr(__fest_context, "</span>");
        try {
            __fest_if = ad.text && ad.text.length || ad.body;
        }
        catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('tgb__inner__content__text'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<span class=\"" + __fest_attrs[0] + "\">");
            try {
                __fest_if = ad.body;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                try {
                    __fest_pushstr(__fest_context, ad.body);
                }
                catch (e) {
                    __fest_log_error(e.message + "79");
                }
            }
            else {
                __fest_select = "text";
                __fest_params = {};
                try {
                    __fest_params = ad.text;
                }
                catch (e) {
                    __fest_log_error(e.message);
                }
                __fest_chunks.push(__fest_buf, { name: __fest_select, params: __fest_params, cp: false });
                __fest_buf = "";
            }
            __fest_pushstr(__fest_context, "</span>");
        }
        __fest_pushstr(__fest_context, "</span></span>");
        try {
            __fest_if = ad.marker;
        }
        catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('tgb__inner__marker'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<span class=\"" + __fest_attrs[0] + "\">");
            try {
                __fest_pushstr(__fest_context, ad.marker);
            }
            catch (e) {
                __fest_log_error(e.message + "92");
            }
            __fest_pushstr(__fest_context, "</span>");
        }
        try {
            __fest_if = isMimic;
        }
        catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            try {
                __fest_attrs[0] = __fest_escapeHTML(transform('tgb__inner__marker'));
            }
            catch (e) {
                __fest_attrs[0] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<span class=\"" + __fest_attrs[0] + "\">Реклама</span>");
        }
        try {
            __fest_if = ad.pixels;
        }
        catch (e) {
            __fest_if = false;
            __fest_log_error(e.message);
        }
        if (__fest_if) {
            var p, pixel, __fest_to0, __fest_iterator0;
            try {
                __fest_iterator0 = ad.pixels || [];
                __fest_to0 = __fest_iterator0.length;
            }
            catch (e) {
                __fest_iterator0 = [];
                __fest_to0 = 0;
                __fest_log_error(e.message);
            }
            for (p = 0; p < __fest_to0; p++) {
                pixel = __fest_iterator0[p];
                try {
                    __fest_attrs[0] = __fest_escapeHTML(pixel);
                }
                catch (e) {
                    __fest_attrs[0] = "";
                    __fest_log_error(e.message);
                }
                try {
                    __fest_attrs[1] = __fest_escapeHTML(transform('zeropixel'));
                }
                catch (e) {
                    __fest_attrs[1] = "";
                    __fest_log_error(e.message);
                }
                __fest_pushstr(__fest_context, "<img src=\"" + __fest_attrs[0] + "\" class=\"" + __fest_attrs[1] + "\"/>");
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
            try {
                __fest_attrs[1] = __fest_escapeHTML(transform('zeropixel'));
            }
            catch (e) {
                __fest_attrs[1] = "";
                __fest_log_error(e.message);
            }
            __fest_pushstr(__fest_context, "<img src=\"" + __fest_attrs[0] + "\" class=\"" + __fest_attrs[1] + "\"/>");
        }
        __fest_element = __fest_element_stack[__fest_element_stack.length - 1];
        if (!(__fest_element in __fest_short_tags)) {
            __fest_pushstr(__fest_context, "</" + __fest_element + ">");
        }
        __fest_element_stack.pop();
    }
    __fest_blocks.text = function (params) { var __fest_buf = "", __fest_pushstr = function (_, s) { __fest_buf += s; }; try {
        __fest_if = isMimic;
    }
    catch (e) {
        __fest_if = false;
        __fest_log_error(e.message);
    } if (__fest_if) {
        try {
            __fest_pushstr(__fest_context, params);
        }
        catch (e) {
            __fest_log_error(e.message + "117");
        }
    }
    else {
        var i, text, __fest_to1, __fest_iterator1;
        try {
            __fest_iterator1 = params || [];
            __fest_to1 = __fest_iterator1.length;
        }
        catch (e) {
            __fest_iterator1 = [];
            __fest_to1 = 0;
            __fest_log_error(e.message);
        }
        for (i = 0; i < __fest_to1; i++) {
            text = __fest_iterator1[i];
            try {
                __fest_if = i !== 0;
            }
            catch (e) {
                __fest_if = false;
                __fest_log_error(e.message);
            }
            if (__fest_if) {
                __fest_pushstr(__fest_context, "<br/>");
            }
            try {
                __fest_pushstr(__fest_context, text);
            }
            catch (e) {
                __fest_log_error(e.message + "124");
            }
        }
    } return __fest_buf; };
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