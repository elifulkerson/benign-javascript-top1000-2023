(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var main$1 = createCommonjsModule(function (module, exports) {
    (function (global, factory) {
        module.exports = factory();
    })(commonjsGlobal, function () {
        'use strict';

        var version = "2.0.1";

        var RE_TAG = /^([a-z][a-z0-9]*)/g;
        var RE_CLASS = /^\.([A-z0-9\-\_]+)/g;
        var RE_ID = /^#([A-z0-9\-\_]+)/g;
        var RE_ATTRS = /^@([A-z0-9\-\_]+)="([^"]+)"/g;
        var RE_MULTI = /^\*(\d+)/g;
        var RE_QUOTES = new RegExp('"', 'g');
        var RE_SPACES = /\s+/;
        function parseConfig(data) {
            return data.map(function (str) {
                var parts = str.split(RE_SPACES);
                // внутри кавычек разрешены пробелы
                var quotes = (str.match(RE_QUOTES) || []).length;
                if (quotes > 0 && quotes % 2 === 0) {
                    var odd = null;
                    for (var i = 0; i < parts.length; i++) {
                        if (odd === null) {
                            var sub_quotes = (parts[i].match(RE_QUOTES) || []).length;
                            if (sub_quotes && sub_quotes % 2) {
                                odd = i;
                            }
                        } else {
                            parts[odd] += ' ' + parts[i];
                            if (parts[i].indexOf('"') !== -1) {
                                odd = null;
                            }
                            parts[i] = undefined;
                        }
                    }
                }
                return parts.filter(function (part) {
                    return part;
                }).map(function (part) {
                    var res = {
                        id: null,
                        tag: null,
                        classes: null,
                        attrs: null,
                        multi: 1
                    };
                    var match;
                    do {
                        RE_TAG.lastIndex = 0;
                        RE_CLASS.lastIndex = 0;
                        RE_ID.lastIndex = 0;
                        RE_ATTRS.lastIndex = 0;
                        RE_MULTI.lastIndex = 0;
                        if (match = RE_TAG.exec(part)) {
                            part = part.substr(RE_TAG.lastIndex);
                            res.tag = match[1];
                        } else if (match = RE_CLASS.exec(part)) {
                            part = part.substr(RE_CLASS.lastIndex);
                            res.classes = res.classes || [];
                            res.classes.push(match[1]);
                        } else if (match = RE_ID.exec(part)) {
                            part = part.substr(RE_ID.lastIndex);
                            res.id = match[1];
                        } else if (match = RE_ATTRS.exec(part)) {
                            part = part.substr(RE_ATTRS.lastIndex);
                            res.attrs = res.attrs || {};
                            res.attrs[match[1]] = match[2];
                        } else if (match = RE_MULTI.exec(part)) {
                            part = part.substr(RE_MULTI.lastIndex);
                            res.multi = parseInt(match[1], 10);
                        }
                    } while (match && part.length);
                    if (part.length) {
                        throw new Error('Unparsed template: "' + part + '"');
                    }
                    return res;
                });
            });
        }
        function buildDom(conf) {
            var baits = [];
            var childs = [];
            var data;
            while (data = conf.pop()) {
                var node = document.createElement(data.tag || 'div');
                if (!data.attrs) {
                    data.attrs = {};
                }
                if (data.id) {
                    data.attrs.id = data.id;
                }
                if (data.classes) {
                    data.attrs["class"] = data.classes.join(' ');
                }
                for (var i in data.attrs) {
                    if (data.attrs.hasOwnProperty(i) && i !== 'length') {
                        node.setAttribute(i, data.attrs[i]);
                    }
                }
                for (var _i = 0, childs_1 = childs; _i < childs_1.length; _i++) {
                    var child = childs_1[_i];
                    node.appendChild(child);
                }
                childs.length = 0;
                baits.push(node);
                childs.push(node);
                for (var i = 1; i < data.multi; i++) {
                    var clone = node.cloneNode(true);
                    baits.push(clone);
                    childs.push(clone);
                }
            }
            return {
                baits: baits,
                nodes: childs
            };
        }
        function prepareStyles(config) {
            return {
                available: typeof window.getComputedStyle === 'function',
                styles: config.map(function (line) {
                    var data = line.split(/\s*:\s*/);
                    var field = data[0],
                        value = data[1];
                    return {
                        field: field,
                        value: value
                    };
                })
            };
        }
        function checkVisibility(bait) {
            return bait.offsetParent === null;
        }
        function checkStyles(bait, config) {
            if (config.available) {
                for (var _i = 0, _a = config.styles; _i < _a.length; _i++) {
                    var style = _a[_i];
                    bait.style[style.field] = style.value;
                }
                var computed_1 = window.getComputedStyle(bait, null);
                return config.styles.some(function (style) {
                    return computed_1[style.field] !== style.value && computed_1[style.field] !== 'auto';
                });
            }
            return false;
        }
        function checkJS(config) {
            if (config) {
                var RE_1 = new RegExp(config);
                return Object.keys(window).some(function (field) {
                    return !!field.match(RE_1);
                });
            }
            return false;
        }
        var default_1 = /** @class */function () {
            function default_1(config) {
                this.config = config;
                this.container = null;
                this.styles = null;
                this.rules = null;
                this.baits = [];
            }
            default_1.prototype.check = function () {
                try {
                    var _a = this,
                        config = _a.config,
                        baits_1 = _a.baits;
                    var _b = this,
                        rules = _b.rules,
                        styles_1 = _b.styles,
                        container = _b.container;
                    if (checkJS(config.js)) {
                        return true;
                    }
                    if (baits_1.length) {
                        return baits_1.some(function (bait) {
                            return checkVisibility(bait) || checkStyles(bait, styles_1);
                        });
                    } else {
                        rules = this.rules = parseConfig(this.config.baits);
                        styles_1 = this.styles = prepareStyles(this.config.css);
                        container = this.container = document.createElement('div');
                        container.style.position = 'absolute';
                        container.style.visibility = 'hidden';
                        container.style.top = '-10000px';
                        container.style.left = '-10000px';
                        document.body.appendChild(container);
                        for (var _i = 0, rules_1 = rules; _i < rules_1.length; _i++) {
                            var rule = rules_1[_i];
                            var div = buildDom(rule);
                            if (div.baits.length) {
                                for (var _c = 0, _d = div.nodes; _c < _d.length; _c++) {
                                    var node = _d[_c];
                                    container.appendChild(node);
                                }
                                var detect = div.baits.some(function (bait) {
                                    baits_1.push(bait);
                                    return checkVisibility(bait) || checkStyles(bait, styles_1);
                                });
                                if (detect) {
                                    return true;
                                }
                            }
                        }
                    }
                } catch (e) {
                    console.error(e);
                }
                return false;
            };
            default_1.prototype.destroy = function () {
                var _a = this,
                    baits = _a.baits,
                    container = _a.container;
                if (container) {
                    document.body.removeChild(container);
                    this.container = null;
                }
                baits.length = 0;
                this.rules = this.styles = null;
            };
            default_1.version = version;
            return default_1;
        }();

        return default_1;
    });
    
});

var XOREncode = function (key, str) {
    var coded = '';
    for (var i = 0; i < str.length; i++) {
        var a = str.charCodeAt(i);
        var j = i % key.length;
        var b = key.charCodeAt(j);
        coded += String.fromCharCode(a ^ b);
    }
    return coded;
};

var Encryptor = function (options) {
    function strToHex(str) {
        var hexStr = '';
        for (var i = 0; i < str.length; i++) {
            hexStr += (256 + str.charCodeAt(i)).toString(16).slice(1);
        }
        return hexStr;
    }
    return function (original) {
        var url = options.getUrl(original);
        if (url) {
            switch (options.type) {
                case 'xor':
                    var result = XOREncode(options.key, url);
                    if (options.encode === 'hex') {
                        result = strToHex(result);
                    } else {
                        result = encodeURIComponent(result);
                    }
                    return options.endpoint + '/' + (options.keyId || '') + result;
                case 'plain':
                default:
                    return options.endpoint + encodeURI(url);
            }
        } else {
            return original;
        }
    };
};

var urlConstructorExists = false;
try {
    urlConstructorExists = new URL('http://example.com/').href === 'http://example.com/';
} catch (exception) {}
function _random(min, max) {
    return Math.random() * (max - min + 1) + min | 0;
}
var supportCssCalc;
function isSupportedCSSCalc() {
    if (supportCssCalc === undefined) {
        try {
            if (typeof window.getComputedStyle === 'function') {
                var elem = document.createElement('div');
                elem.style.height = 'calc(30px + 30px)';
                document.getElementsByTagName('body')[0].appendChild(elem);
                supportCssCalc = window.getComputedStyle(elem, null).getPropertyValue('height') === '60px';
                elem.parentNode.removeChild(elem);
            }
        } catch (e) {
            supportCssCalc = false;
        }
    }
    return supportCssCalc;
}
var toArray = function toArray(arrayLike) {
    return Array.prototype.slice.call(arrayLike);
};
var extend = function extend() {
    var args = toArray(arguments);
    var target = args.shift();
    args.forEach(function (source) {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    });
    return target;
};
var merge = function merge() {
    var args = toArray(arguments);
    var target = args.shift();
    args.forEach(function (source) {
        for (var prop in source) {
            if (!target[prop]) {
                target[prop] = source[prop];
            }
        }
    });
    return target;
};
var Utils = {
    random: _random,
    calcString: function calcString(result, unit) {
        result = parseInt(result, 10);
        if (isSupportedCSSCalc()) {
            var res = [];
            var sum = 0;
            for (var i = 0, l = _random(1, 6); i < l; i++) {
                res.push(_random(-100, 100));
                sum += res[res.length - 1];
            }
            if (sum !== result) {
                res.push(result - sum);
            }
            return 'calc(' + res.map(function (p) {
                return p.toString() + unit;
            }).join(' + ') + ')';
        } else {
            return result + unit;
        }
    },
    replaceUrl: function replaceUrl(chunk, baseUrl, closingParenthesis) {
        if (urlConstructorExists && baseUrl) {
            var firstChar = chunk.charAt(0);
            var quoted = firstChar === '"' || firstChar === '\'';
            var from = 0 + quoted;
            var to;
            if (closingParenthesis) {
                to = chunk.indexOf((quoted ? firstChar : '') + ')');
            } else {
                to = quoted ? chunk.indexOf(firstChar, from + 1) : chunk.length;
            }
            var url = chunk.slice(from, to);
            try {
                url = new URL(url, baseUrl).href;
            } catch (exception) {}
            return chunk.slice(0, from) + url + chunk.slice(to);
        } else {
            return chunk;
        }
    },
    replaceContent: function replaceContent(chunk) {
        var firstChar = chunk.charAt(0);
        var isQuoted = firstChar === '"' || firstChar === '\'';
        var from = Number(isQuoted);
        var to = isQuoted ? chunk.indexOf(firstChar, from) : chunk.indexOf(';', from);
        var letters = chunk.slice(from, to);
        var content = '';
        if (/^\\[a-z0-9]+$/.test(letters) || !isQuoted) {
            content = letters;
        } else {
            for (var i = 0; i < letters.length; i++) {
                var code = letters[i].charCodeAt(0);
                if (isNaN(code)) {
                    continue;
                }
                content += '\\' + code.toString(16);
            }
        }
        return chunk.slice(0, from) + content + chunk.slice(to);
    },
    iterate: function iterate(object, callback, context) {
        for (var field in object) {
            if (Object.prototype.hasOwnProperty.call(object, field) && field !== 'length') {
                callback.call(context || this, object[field], field);
            }
        }
    },
    extend: extend,
    merge: merge,
    toArray: toArray
};

function _createStyleSheet(attrs) {
    var style = document.createElement('style');
    style.appendChild(document.createTextNode(''));
    attrs = attrs || {};
    attrs.rel = 'stylesheet';
    attrs.type = 'text/css';
    attrs.media = attrs.media || 'screen';
    Utils.iterate(attrs, function (value, name) {
        if (value) {
            style.setAttribute(name, value);
        }
    });
    return style;
}
function _insertRule(str) {
    if (str) {
        this.__rules.push(str);
    }
}
function StyleSheetsItem(attrs, originalNode) {
    this.__style = _createStyleSheet(attrs);
    this.__style.__created = true;
    this.__rules = [];
    this.__originalNode = originalNode;
}
function _cloneAttr(attrName, oldNode, newNode) {
    var attr = oldNode.getAttribute(attrName);
    if (attr) {
        newNode.setAttribute(attrName, attr);
    }
}
function _insertDelayed() {
    if (this.__rules.length) {
        this.__style.appendChild(document.createTextNode(this.__rules.join('\n')));
    }
}
function _getLastStyleParent() {
    var stylesheets = document.styleSheets;
    for (var i = stylesheets.length; i > 0; i--) {
        var style = stylesheets[i - 1];
        if (style && style.ownerNode && style.ownerNode.parentNode) {
            return style.ownerNode.parentNode;
        }
    }
}
StyleSheetsItem.prototype = {
    constructor: StyleSheetsItem,
    insert: function insert() {
        _insertRule.apply(this, arguments);
    },
    insertBlock: function insertBlock(block, contents) {
        _insertRule.apply(this, [block + '{' + contents + '}']);
    },
    setContent: function setContent(source) {
        this.__style.appendChild(document.createTextNode(source));
    },
    apply: function apply() {
        if (this.__originalNode && this.__originalNode.parentNode) {
            _cloneAttr('id', this.__originalNode, this.__style);
            this.__originalNode.parentNode.replaceChild(this.__style, this.__originalNode);
        } else {
            (_getLastStyleParent() || document.head).appendChild(this.__style);
        }
        _insertDelayed.apply(this);
    },
    getSheet: function getSheet() {
        return this.__style.sheet;
    }
};

function _getRules(sheet) {
    try {
        return sheet.cssRules || sheet.rules;
    } catch (e) {
        return null;
    }
}
function _replaceUrls(data, baseUrl) {
    var firstChunk = true;
    return data.split('url(').map(function (chunk) {
        if (firstChunk) {
            firstChunk = false;
            return chunk;
        }
        return Utils.replaceUrl(chunk, baseUrl, true);
    }).join('url(');
}
var RE_CONTENT = /content\s*:\s*/;
function _replaceContent(data) {
    var firstChunk = true;
    return data.split(RE_CONTENT).map(function (chunk) {
        if (firstChunk) {
            firstChunk = false;
            return chunk;
        }
        return Utils.replaceContent(chunk);
    }).join('content:');
}
function _toCamelCase(str) {
    return str.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
}
var RE_NUM_VAL = /^(-?\d+)([a-z%]+)$/;
var RE_CSS_VAL_SPLIT = /\s(?![*+\-/]|[^()]+\)+|\(+)/;
function _convertRule(rule, _convert, baseUrl, options) {
    var cssText = '';
    var selector = _convert(rule.selectorText);
    for (var i = 0; i < rule.style.length; i++) {
        var important = rule.style.getPropertyPriority(rule.style[i]) === 'important' ? ' !important' : '';
        var styleName = rule.style[i];
        if (/background-(repeat|position)-[xy]/.test(styleName)) {
            styleName = styleName.replace(/-[xy]$/, '');
        }
        var value = rule.style[styleName] || rule.style[_toCamelCase(styleName)];
        if (value === undefined || !value.length) {
            styleName = styleName.replace(/-(value|(ltr|rtl)-source)$/g, '');
            value = rule.style[styleName] || rule.style[_toCamelCase(styleName)];
        }
        if (value === undefined && styleName === 'float') {
            value = rule.style.cssFloat;
        }
        if (value !== undefined && value.length) {
            if (options.randomize && options.randomize.length && options.randomize.indexOf(styleName) > -1 && selector != rule.selectorText) {
                var parts = value.split(RE_CSS_VAL_SPLIT),
                    pLen = parts.length,
                    nVal = [];
                while (pLen--) {
                    var num = RE_NUM_VAL.exec(parts[pLen]);
                    nVal.unshift(num ? Utils.calcString(num[1], num[2]) : parts[pLen]);
                }
                value = nVal.join(' ');
            }
            cssText += styleName + ': ' + value + important + '; ';
        }
    }
    if (cssText.indexOf('url(') !== -1) {
        cssText = _replaceUrls(cssText, baseUrl);
    }
    if (cssText.indexOf('content') !== -1) {
        cssText = _replaceContent(cssText, baseUrl);
    }
    return selector + ' { ' + cssText + ' }';
}
var StyleSheetsParser = {
    iterate: function iterate(sheet, _convert, baseUrl, callback, options) {
        options = options || {};
        Utils.iterate(_getRules(sheet), function (rule) {
            switch (rule.type) {
                case 1:
                    callback(_convertRule(rule, _convert, baseUrl, options));
                    break;
                case 4:
                    var mediaRulesList = [];
                    Utils.iterate(rule.cssRules || rule.rules, function (subRule) {
                        mediaRulesList.push(_convertRule(subRule, _convert, baseUrl, options));
                    });
                    callback('@media ' + rule.media.mediaText + ' { ' + mediaRulesList.join(' ') + ' }');
                    break;
                default:
                    callback(rule.cssText);
                    break;
            }
        });
    }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var noop = new Function();
var XHR = function XHR() {
    var req = {
        readyState: 4,
        status: -1
    };
    req.open = req.send = noop;
    try {
        req = new window.XMLHttpRequest();
    } catch (_) {
        try {
            req = new window.ActiveXObject('Msxml2.XMLHTTP');
        } catch (_) {
            try {
                req = new window.ActiveXObject('Microsoft.XMLHTTP');
            } catch (_) {}
        }
    }
    return req;
};
var xhr = {
    request: function request(setup, callback) {
        var url = setup,
            method = 'GET',
            body = null,
            sync = false,
            credentials = false,
            request = XHR(),
            error = null,
            start = new Date(),
            returned = {
            error: error,
            xhr: request
        };
        if ((typeof setup === 'undefined' ? 'undefined' : _typeof(setup)) === 'object') {
            url = setup.url;
            method = setup.method || method;
            body = setup.body || body;
            sync = setup.sync || sync;
            credentials = setup.credentials || credentials;
        }
        request.url = url;
        var _oncomplete = function oncomplete() {
            if (!error && request.readyState !== 4) return;
            _oncomplete = noop;
            returned.error = error;
            request.duration = new Date() - start;
            request.onerror = request.onreadystatechange = null;
            typeof callback === 'function' && callback(error, request);
        };
        try {
            request.onreadystatechange = _oncomplete;
            request.onerror = function (err) {
                error = err;
                _oncomplete();
            };
            request.open(method, url, !sync);
            request.withCredentials = credentials;
            request.send(body);
        } catch (err) {
            error = err;
            _oncomplete();
        }
        return returned;
    }
};

var RE_HOST = /^(\/|https?:\/\/([^\/]*.)?(dev|imgs)?mail.ru\/)/;
var RE_RELATIVE = /.*?\/\/.*?\//;
var justOneSelector = false;
var useRelativeProxy = false;
function _convert(_selectors, selector) {
    var convertedSelector = _selectors(selector);
    return justOneSelector || convertedSelector === selector ? convertedSelector : convertedSelector + ',' + selector;
}
function _propertiesToString(block) {
    var result = [];
    Utils.iterate(block, function (value, name) {
        result.push(name + ':' + value + ';');
    });
    return '{' + result.join('\n') + '}';
}
function _getSource(url) {
    var data = xhr.request({
        url: url,
        sync: true
    });
    if (data.error) {
        var message = '[CSS LOADING ERROR] Cant load ' + url;
        if (window.ajs && window.ajs.log) {
            window.ajs.log(message);
        }
        data.error.description = message;
        data.error.sheet = url;
        throw data.error;
    }
    return data.xhr.responseText;
}
function _loadCSSByXhr(sheet) {
    var url = sheet.href;
    try {
        return _getSource(url);
    } catch (e) {
        if (useRelativeProxy) {
            url = url.replace(RE_RELATIVE, '/');
            return _getSource(url);
        } else {
            throw e;
        }
    }
}
function _awaitFor(links, callback) {
    var RE_NORMALIZE = /^(https:)?\/\/[^/]+/;
    var need = links.map(function (url) {
        return url.replace(RE_NORMALIZE, '');
    });
    function _check() {
        Utils.iterate(document.styleSheets, function (sheet) {
            if (sheet.ownerNode.tagName === 'LINK') {
                var url = _getHref(sheet).replace(RE_NORMALIZE, '');
                need = need.filter(function (item) {
                    return url !== item;
                });
            }
        });
        if (need.length) {
            setTimeout(_check, 100);
        } else {
            callback();
        }
    }
    _check();
}
function _getHref(sheet) {
    var href;
    if (sheet.ownerNode) {
        href = sheet.ownerNode.href || sheet.ownerNode.getAttribute('x-href');
        href = (href || '').replace(/^https:/, '');
    }
    return href;
}
var StyleSheets = {
    setup: function setup(conf) {
        if (conf) {
            if (typeof conf.justOneSelector === 'boolean') {
                justOneSelector = conf.justOneSelector;
            }
            if (typeof conf.useRelativeProxy === 'boolean') {
                useRelativeProxy = conf.useRelativeProxy;
            }
        }
    },
    update: function update(links, _selectors, errorHook, options) {
        _awaitFor(links, function () {
            var sheets = [].map.call(document.styleSheets, function (sheet) {
                return sheet;
            });
            sheets.forEach(function (sheet) {
                if (!sheet.ownerNode || sheet.ownerNode.__created || sheet.__updated || sheet.ownerNode.tagName !== 'LINK') {
                    return;
                }
                var origin = sheet;
                sheet.__updated = true;
                var href = _getHref(sheet);
                if (sheet.href && RE_HOST.test(sheet.href)) {
                    try {
                        var source = _loadCSSByXhr(sheet);
                        if (source) {
                            var proxyStylesheet = new StyleSheetsItem({
                                'x-href': href,
                                'media': sheet.media.mediaText
                            }, sheet.ownerNode);
                            proxyStylesheet.setContent(source);
                            proxyStylesheet.apply();
                            origin = proxyStylesheet.getSheet();
                            origin.__updated = true;
                        }
                    } catch (err) {
                        if (typeof errorHook === 'function') {
                            errorHook(err);
                        }
                    }
                }
                var nextSheet = new StyleSheetsItem({
                    'x-href': href,
                    'media': sheet.media && sheet.media.mediaText
                }, origin.ownerNode);
                nextSheet.__updated = true;
                StyleSheetsParser.iterate(origin, _convert.bind(null, _selectors), href, function (rule) {
                    nextSheet.insert(rule.toString());
                }, options);
                nextSheet.apply();
            });
        });
    },
    remove: function remove(links) {
        links = (links || []).map(function (url) {
            return (url || '').replace(/^https:/, '');
        });
        if (links.length) {
            var toRemove = [];
            Utils.iterate(document.styleSheets, function (sheet) {
                var url = _getHref(sheet);
                if (url && links.indexOf(url) !== -1) {
                    toRemove.push(sheet);
                }
            });
            for (var i = toRemove.length - 1; i >= 0; i--) {
                var sheet = toRemove[i];
                sheet.ownerNode.parentNode.removeChild(sheet.ownerNode);
            }
        }
    },
    insert: function insert(config, _selectors) {
        var sheet = new StyleSheetsItem({});
        var _bindConvert = _convert.bind(null, _selectors);
        var constructRule = function constructRule(selector, block) {
            return _bindConvert(selector) + _propertiesToString(block);
        };
        var insertRule = function insertRule(block, selector) {
            if (/@(media|supports|document|page|keyframes|font-feature-values)/.test(selector)) {
                var blockRules = [];
                var createBlockRule = function createBlockRule(block, selector) {
                    blockRules.push(constructRule(selector, block));
                };
                Utils.iterate(block, createBlockRule);
                sheet.insertBlock(selector, blockRules.join(''));
            } else {
                sheet.insert(constructRule(selector, block));
            }
        };
        Utils.iterate(config, insertRule);
        sheet.apply();
        return sheet;
    }
};

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue,
        randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
var counter = 1000;
var postfixChars = function (chars) {
    for (var i = 0; i < 10; i++) {
        chars.push(i.toString());
    }
    for (var i = 0; i < 25; i++) {
        chars.push(String.fromCharCode(97 + i));
        chars.push(String.fromCharCode(65 + i));
    }
    return shuffle(chars);
}([]);
var idOf_MAX = postfixChars.length;
function idOf(i) {
    return (i >= idOf_MAX ? idOf((i / idOf_MAX >> 0) - 1) : '') + postfixChars[i % idOf_MAX >> 0];
}
var prefix = function () {
    var result = [];
    for (var i = 0; result.length < 5 && i < postfixChars.length; i++) {
        if (result.length > 0 || !/[0-9]/.test(postfixChars[i])) {
            result.push(postfixChars[i]);
        }
    }
    return result.join('');
}();
var cid = function () {
    return prefix + idOf(counter++);
};

var _counter = 0;
var _keys = {};
function _id() {
    var key = cid(true);
    _keys[key] = true;
    return key;
}
function _fragments(size, depth) {
    var fragment = document.createDocumentFragment();
    for (var index = 0, max = Utils.random(0, size); index < max; index++) {
        var child = document.createElement('div');
        _counter++;
        if (Utils.random(0, depth)) {
            child.appendChild(_fragments(size, depth - 1));
        }
        var useAttr = 0;
        if (!(Utils.random(0, size) % 2)) {
            child.id = _id();
            useAttr++;
        }
        if (!(Utils.random(0, size) % 5)) {
            child.setAttribute('data-bem', _id());
            useAttr++;
        }
        if (!(Utils.random(0, size) % 6)) {
            child.setAttribute('data-mnemo', _id());
            useAttr++;
        }
        if (!(Utils.random(0, size) % 3) || !useAttr) {
            child.className = _id();
        }
        fragment.appendChild(child);
    }
    return fragment;
}
var Welter = {
    isWelter: function isWelter(id) {
        return _keys[id] !== undefined;
    },
    wrap: function wrap(context, selector) {
        function _wrap(container) {
            container && Utils.toArray(container.querySelectorAll(selector)).forEach(function (node) {
                var fragments = _fragments(5, 5);
                var divs = fragments.querySelectorAll('div');
                var target = divs[Utils.random(0, divs.length - 1)];
                if (node && target) {
                    node.originalParentNode = node.parentNode;
                    node.parentNode.insertBefore(fragments, node);
                    target.appendChild(node);
                }
            });
        }
        try {
            if (context.nodeType) {
                _wrap(context);
            } else if (context.length >= 0) {
                if (context.length === 1) {
                    _wrap(context[0]);
                } else {
                    Utils.toArray(context).forEach(_wrap);
                }
            } else {
                console.warn('[Walter.wrap] this "context" not supported:', context);
            }
        } catch (error) {
            console.error(error);
        }
    }
};

var __cid = cid();
var __uid = 0;
var __cache = {
    names: {},
    reverse: {},
    wraps: {}
};
var __data = {};
var ENABLE = false;
var __mathesOptions = [];
var RE_FILTER;
var TRANSLATE_ALL = false;
var RE_SELECTOR = /([@#:.]*)([\w$-]+)/gi;
var OPTIONS = {};
var DEF_RAND_PROPS = function () {
    var base = ['top', 'right', 'bottom', 'left'];
    var extendable = ['margin', 'padding'];
    var result = ['height', 'width', 'max-width', 'max-height', 'min-height', 'min-width'];
    extendable.forEach(function (prop) {
        base.forEach(function (side) {
            result.push(prop + '-' + side);
        });
    });
    return result.concat(base, extendable);
}();
function Locator(options) {
    _setup(options);
}
function _updateSheets(links, errorHook) {
    if (ENABLE && links) {
        StyleSheets.update(links, _selectors, errorHook, OPTIONS);
    }
}
function _insertSheet(sheet) {
    return StyleSheets.insert(sheet, _selectors);
}
function _setup(options, errorHook) {
    options = Utils.extend({}, OPTIONS, options || {});
    OPTIONS = options;
    if (!!options.enable) {
        ENABLE = true;
    }
    if (ENABLE) {
        if (typeof options.translateAll === 'boolean') {
            TRANSLATE_ALL = options.translateAll;
        }
        if (options.match && options.match instanceof Array && options.match.length > 0) {
            __mathesOptions = __mathesOptions.concat(options.match);
            RE_FILTER = new RegExp('^(' + __mathesOptions.join('|') + ')');
        }
    }
    StyleSheets.setup(options.styleSheetsOptions);
    if (options.randomize) {
        options.randomize = options.randomize === true ? DEF_RAND_PROPS : options.randomize;
    }
    if (options.links) {
        _updateSheets(options.links, errorHook);
    }
    if (options.sheet) {
        _insertSheet(options.sheet);
    }
}
function _key(value, filterValue) {
    return (filterValue ? filterValue + '@@@' : '') + value;
}
function _transformStr(value, filterValue) {
    var key = _key(value, filterValue);
    var name = __cache.names[key];
    if (!name && ENABLE && (TRANSLATE_ALL || RE_FILTER && RE_FILTER.test(filterValue || value))) {
        name = cid();
        __cache.names[key] = name;
        __cache.reverse[name] = value;
    }
    return name || value;
}
function _transform(value, filterValue) {
    var valObj = _splitElemMod(value);
    if (filterValue) {
        return _transformStr(valObj.elem, filterValue) + (valObj.mod ? '_' + _transformStr(valObj.mod, filterValue) : '');
    } else {
        return _transformStr(valObj.elem) + (valObj.mod ? '_' + _transformStr(valObj.mod, valObj.elem) : '');
    }
}
function _splitElemMod(value) {
    var m = (value ? '' + value : '').match(/^(.*?[^_])(_([^_]+))?$/);
    var modifier;
    if (m) {
        value = m[1];
        modifier = m[3];
    }
    return {
        elem: value,
        mod: modifier
    };
}
function _selectors(selector) {
    return selector.replace(RE_SELECTOR, function (text, prefix, name) {
        if (!prefix || /:/.test(prefix)) {
            return text;
        }
        return prefix + _transform(name);
    });
}
function _lookup(name, filterValue) {
    var valObj = _splitElemMod(name);
    if (filterValue) {
        return (__cache.names[_key(valObj.elem, filterValue)] || valObj.elem) + (valObj.mod ? '_' + (__cache.names[_key(valObj.mod, filterValue)] || valObj.mod) : '');
    } else {
        return (__cache.names[valObj.elem] || valObj.elem) + (valObj.mod ? '_' + (__cache.names[_key(valObj.mod, valObj.elem)] || valObj.mod) : '');
    }
}
function _splitCallback(value, callback, filterValue) {
    return (value || '').toString().split(/\s+/).map(function (name) {
        return callback(name, filterValue);
    }).join(' ');
}
function _reverse(name) {
    var valObj = _splitElemMod(name);
    return (__cache.reverse[valObj.elem] || valObj.elem) + (valObj.mod ? '_' + (__cache.reverse[valObj.mod] || valObj.mod) : '');
}
Locator.prototype = {
    constructor: Locator,
    setup: _setup,
    selector: function selector(_selector, justOneSelector) {
        var newSelector = _selectors(_selector);
        if (justOneSelector || _selector == newSelector) {
            return newSelector;
        } else {
            return newSelector + ', ' + _selector;
        }
    },
    transform: function transform(value, filterValue) {
        return _splitCallback(value, _transform, filterValue);
    },
    lookup: function lookup(value, filterValue) {
        return _splitCallback(value, _lookup, filterValue);
    },
    updateSheets: _updateSheets,
    removeSheets: function removeSheets(links) {
        if (ENABLE && links) {
            StyleSheets.remove(links);
        }
    },
    insertSheet: _insertSheet,
    reverse: function reverse(value) {
        return _splitCallback(value, _reverse);
    },
    isWelter: function isWelter(name) {
        return Welter.isWelter(name);
    },
    wrap: function wrap(elements, context) {
        if (ENABLE) {
            var context = context || document;
            var id;
            if (context[__cid]) {
                id = context[__cid];
            } else {
                id = ++__uid;
                context[__cid] = id;
            }
            var data = __data[id];
            if (data == null) {
                data = {};
            }
            elements.forEach(function (originalSelector) {
                if (!data[originalSelector]) {
                    var smokeSelector = _selectors(originalSelector);
                    data[originalSelector] = smokeSelector;
                    __data[id] = data;
                    Welter.wrap(context, smokeSelector);
                }
            });
        }
    },
    calcString: function calcString(result, unit) {
        return ENABLE ? Utils.calcString(result, unit) : result + unit;
    },
    removeCache: function removeCache(el) {
        delete __data[el[__cid]];
        delete el[__cid];
    },
    isEnabled: function isEnabled() {
        return ENABLE;
    }
};

var mr = window.mr;

mr.encryptor = Encryptor;

mr.locator = new Locator({
	match: ['slot', 'rectangle-banner', 'tgb', 'tgb-banner', 'zeropixel', 'layout__content', 'news', 'search', 'search-block', 'regional-info', 'informers', 'region-confirm']
});

if (window._ES5 && true) {
	var hp = new main$1({
		baits: ".bgshechka,.branding-footer,.daynews__banner,.daynews__spring,.direct,.goods,.js-banner,.js-pbanner_cntr,.js-popup_gallery,.viewbox__side,.layout__promotoolbar,.left_banner,.p-mimic,.page-bottomad,.page-topad,.pc-mimic,.portal-menu__banner,.rb-container,.rb-video-widget,.rbVideoBanner".split(','),
		css: []
	});

	// Флажок о том, что адблок попался
	mr._.STUCK_IN_POT = hp.check();
}

// Эти две константы заменяются Галпом
if (mr._.STUCK_IN_POT) {
	var adBlockRadar = createRadar('adblock');

	adBlockRadar.one({
		name: 'adblock_detected',
		time: 1
	});

	mr._.SEARCH_UID = Math.round(Math.random() * 1E9);

	mr.locator.setup({
		enable: mr._.STUCK_IN_POT
	});

	window.adBlockRadar = adBlockRadar;
}

// Добавляет случайные фейковые бем-аттрибуты при включённом мимике
mr.setBem = function (el, name) {
	if (!mr._.STUCK_IN_POT) {
		return;
	}

	var coinResult = function coinResult() {
		return Math.random() > 0.5;
	};

	['bem', 'mnemo'].forEach(function (attr) {
		if (coinResult()) {
			el.setAttribute('data-' + attr, name);
		}
	});
};

}());