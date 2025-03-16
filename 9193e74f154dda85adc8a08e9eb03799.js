var loadTimerStart = new Date().valueOf();
		var _EXPERIMENTID = '';
		var _PREVIEW =false;

		var _BROWSER = 'Unknown';
		var _PLATFORM = 'Unknown';
		var _ES5 =true;(function(e){var c=e.m$portal;c||(c=e.m$portal={});c.cookie=function(c,b,a){if(void 0!==b){var d,a=a||{};null===b&&(b="",a.expires=-1);b+="";document.cookie=c+"="+b+(a.expires&&(d="number"==typeof a.expires&&(d=new Date),d.setTime(d.getTime()+864E5*a.expires),d||"toUTCString"in a.expires&&a.expires)&&"; expires="+d.toUTCString()||"")+(a.path?"; path="+a.path:"")+(a.domain?"; domain="+a.domain:"")+(a.secure?"; secure":"");return b}if(""!==(document.cookie||""))return b=(document.cookie.match(RegExp("(?:^| )"+
c+"\\=(\\S*)(?:; |$)"))||[])[1],void 0===b?void 0:b}})(window);
if (!Object.keys) {
	Object.keys = (function() {
		'use strict';
		var hasOwnProperty = Object.prototype.hasOwnProperty,
			hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
			dontEnums = [
				'toString',
				'toLocaleString',
				'valueOf',
				'hasOwnProperty',
				'isPrototypeOf',
				'propertyIsEnumerable',
				'constructor'
			],
			dontEnumsLength = dontEnums.length;

		return function(obj) {
			if (typeof obj !== 'object' && (typeof obj !== 'function' || obj === null)) {
				throw new TypeError('Object.keys called on non-object');
			}

			var result = [],
				prop,
				i;

			for (prop in obj) {
				if (hasOwnProperty.call(obj, prop)) {
					result.push(prop);
				}
			}

			if (hasDontEnumBug) {
				for (i = 0; i < dontEnumsLength; i++) {
					if (hasOwnProperty.call(obj, dontEnums[i])) {
						result.push(dontEnums[i]);
					}
				}
			}
			return result;
		};
	})();
}

if (!Function.prototype.bind) {
	Function.prototype.bind = function bind(that) {
		var target = this;

		return function() {
			return target.apply(that, arguments);
		};
	};
}

if (!Array.isArray) {
	Array.isArray = function(obj) {
		return '' + obj !== obj && Object.prototype.toString.call(obj) == '[object Array]';
	};
}

if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(obj) {
		for (var i = 0; i < this.length; i++) {
			if (this[i] == obj) {
				return i;
			}
		}

		return -1;
	};
}

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function forEach(callback, scope) {
		for (var array = this, index = 0, length = array.length; index < length; ++index) {
			callback.call(scope || window, array[index], index, array);
		}
	};
}

if (!Array.prototype.reduce) {
	Array.prototype.reduce = function(callback /*, initialValue*/) {
		'use strict';
		if (this === null) {
			throw new TypeError('Array.prototype.reduce called on null or undefined');
		}
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}
		var t = Object(this),
			len = t.length >>> 0,
			k = 0,
			value;
		if (arguments.length == 2) {
			value = arguments[1];
		} else {
			while (k < len && !k in t) {
				k++;
			}
			if (k >= len) {
				throw new TypeError('Reduce of empty array with no initial value');
			}
			value = t[k++];
		}
		for (; k < len; k++) {
			if (k in t) {
				value = callback(value, t[k], k, t);
			}
		}
		return value;
	};
}

if (!Array.prototype.map) {
	Array.prototype.map = function map(callback, context) {
		var result = [];

		for (var index = 0, length = this.length; index < length; ++index) {
			result.push(callback.call(context, this[index], index, this));
		}

		return result;
	};
}

if (!Array.prototype.some) {
	Array.prototype.some = function(fun /*, thisArg*/) {
		'use strict';

		if (this == null) {
			throw new TypeError('Array.prototype.some called on null or undefined');
		}

		if (typeof fun !== 'function') {
			throw new TypeError();
		}

		var t = Object(this);
		var len = t.length >>> 0;

		var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
		for (var i = 0; i < len; i++) {
			if (i in t && fun.call(thisArg, t[i], i, t)) {
				return true;
			}
		}

		return false;
	};
}

//  Element нет в IE7
if (window.Element && !Element.prototype.remove) {
	Element.prototype.remove = function() {
		this.parentNode.removeChild(this);
	};
}

// insertAdjacentElement
if (typeof HTMLElement != 'undefined') {
	if (!HTMLElement.prototype.insertAdjacentElement) {
		HTMLElement.prototype.insertAdjacentElement = function(where, parsedNode) {
			switch (where) {
				case 'beforebegin':
					this.parentNode.insertBefore(parsedNode, this);
					break;
				case 'afterbegin':
					this.insertBefore(parsedNode, this.firstChild);
					break;
				case 'beforeend':
					this.appendChild(parsedNode);
					break;
				case 'afterend':
					if (this.nextSibling)
						this.parentNode.insertBefore(parsedNode, this.nextSibling);
					else this.parentNode.appendChild(parsedNode);
					break;
			}
		};
	}

	if (!HTMLElement.prototype.insertAdjacentHTML) {
		HTMLElement.prototype.insertAdjacentHTML = function(where, htmlStr) {
			var r = this.ownerDocument.createRange();
			r.setStartBefore(this);
			var parsedHTML = r.createContextualFragment(htmlStr);
			this.insertAdjacentElement(where, parsedHTML);
		};
	}

	if (!HTMLElement.prototype.insertAdjacentText) {
		HTMLElement.prototype.insertAdjacentText = function(where, txtStr) {
			var parsedText = document.createTextNode(txtStr);
			this.insertAdjacentElement(where, parsedText);
		};
	}
}

// P перезапишет свойства O
function extend(o, p) {
	for (var prop in p) {
		o[prop] = p[prop];
	}

	return o;
}

// O заберёт у P только то, чего у него нет
function merge(o, p) {
	for (var prop in p) {
		if (o.hasOwnProperty(prop)) {
			continue;
		}

		o[prop] = p[prop];
	}

	return o;
}

var Splash = {
	ajaxUpdates: [],
	data: {},
	tpl: {
		projects: {}
	}
};

document.documentElement.id = 'jsHtml';
document.documentElement.className += ' jsHtml';

try {
	top.location.toString();
} catch (er) {
	top['location'] = location;
}

if (navigator.userAgent.indexOf('MSIE 6') !== -1) {
	try {
		document.execCommand('BackgroundImageCache', false, true);
	} catch (e) {}
}

var mr = {
	id: function(id) {
		return document.getElementById(id);
	},

	hasClass: function(elem, cls) {
		if (
			elem.nodeType === 1 &&
			(' ' + elem.className + ' ').replace(/[\n\t\r]/g, ' ').indexOf(' ' + cls + ' ') > -1
		) {
			return true;
		}
	},

	addClass: function(elem, cls) {
		if (!mr.hasClass(elem, cls)) elem.className += ' ' + cls;
	},

	removeClass: function(elem, cls) {
		elem.className = elem.className.replace(new RegExp(' ?\\b' + cls + '\\b'), '', 'g');
	},

	cookie: function(name, value, domain) {
		var options = {
			path: '/',
			expires: 365
		};

		domain && (options.domain = domain);

		return __PH.cookie(name, value, options);
	},

	getScript: function(src, callback, charset) {
		var script = document.createElement('script');

		if (charset) {
			script.charset = charset;
		}

		if (callback) {
			if (typeof script.onreadystatechange !== 'undefined') {
				script.onreadystatechange = function() {
					if (script.readyState === 'loaded' || script.readyState === 'complete') {
						script.onloadDone = true;
						callback();
					}
				};
			} else {
				script.onload = callback;
			}
		}

		script.src = src;
		document.documentElement.firstChild.appendChild(script);
	},

	toArray: function(arrayLike) {
		return Array.prototype.slice.call(arrayLike);
	},

	counter: function(id) {
		if (!isNaN(id)) {
			id = 'cln' + id;
		}

		window.rb_counter(id);
	},

	_random: function() {
		return '&rnd=' + parseInt(Math.random() * 1e9);
	},

	massCounter: function(type, ids, testId) {
		new Image().src =
			'//rs.mail.ru/bulkstat/?type=' +
			type +
			'&banner_ids=' +
			ids.join(',') +
			'&test_id=' +
			(testId ? +testId : _EXPERIMENTID) +
			this._random();
	},

	linkCounter: function(ids) {
		if (ids && !ids.length) {
			return;
		}
		new Image().src = '//rs.mail.ru/ns.gif?n=' + ids.join(',') + this._random();
	},

	// @param data = "clb=232323:test_id=190"
	count: function(data) {
		var dataParams = data.split(':'),
			actions = ['d', 'clb'],
			str = '//rs.mail.ru/',
			params = [];

		dataParams.forEach(function(dataParam) {
			var prop = dataParam.split('=');

			if (actions.indexOf(prop[0]) !== -1) {
				str += dataParam.replace('clb', 'sb').replace('=', '') + '.gif?_SITEID=169&';
			} else {
				params.push(dataParam);
			}
		});

		// Рандом
		params.push(this._random().substr(1));

		str += params.join('&');

		new Image().src = str;
	},
	parseJson: function(data) {
		if (typeof data !== 'string' || !data) return null;

		try {
			if (window.JSON && window.JSON.parse) {
				return window.JSON.parse(data);
			}

			return new Function('return ' + data)();
		} catch (e) {
			//TODO: remove this try/catch and test it
			window.logError && logError(e, 'parseJson');
			return null;
		}
	},
	getDomain: function(url) {
		return (url || window.location.href).replace(/https?:\/\//i, '').split('/')[0];
	},
	createElement: function(html, inWrapper) {
		var fragment = document.createDocumentFragment().appendChild(document.createElement('div'));
		fragment.innerHTML = html;

		if (inWrapper) {
			return fragment.firstChild;
		} else {
			return fragment.children;
		}
	},
	_: {}
};

(function() {
	var listeners = [];

	mr.bind = function(elem, event, listener) {
		if (elem.addEventListener) {
			elem.addEventListener(event, listener, false);
		} else if (elem.attachEvent) {
			var wrapper = function(e) {
				e.target = e.srcElement;
				e.currentTarget = elem;

				listener.call(elem, e);
			};

			elem.attachEvent('on' + event, wrapper);

			listeners.push({
				object: this,
				type: event,
				listener: listener,
				wrapper: wrapper
			});
		}
	};

	mr.unbind = function(elem, event, listener) {
		if (elem.removeEventListener) {
			elem.removeEventListener(event, listener, false);
		} else if (elem.detachEvent) {
			listeners.some(function(data) {
				if (data.object === elem && data.type === 'event' && data.listener === listener) {
					elem.detachEvent('on' + event, data.wrapper);
					return true;
				}
			});
		}
	};
})();

var supports = {
	touch: 'ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch),
	svg:
		!!document.createElementNS &&
		!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect,
	inlinesvg: function() {
		if ('opera' in window) return false;
		var div = document.createElement('div');
		div.innerHTML = '<svg/>';
		return (
			(typeof SVGRect != 'undefined' && div.firstChild && div.firstChild.namespaceURI) ==
			'http://www.w3.org/2000/svg'
		);
	}
};

(function() {
	var classes = [];

	Object.keys(supports).forEach(function(feature) {
		if (typeof supports[feature] === 'function') {
			supports[feature] = supports[feature]();
		}

		classes.push('splash-' + (supports[feature] ? '' : 'no') + feature);
	});

	mr.addClass(document.documentElement, classes.join(' '));
})();

extend(mr, {
	extend: extend,
	merge: merge,
	supports: supports
});

var imagesPreloader = new function() {
	this._images = {};
	this.add = function(src, img) {
		this._images[src] = img;
	};

	this.load = function() {
		for (var src in this._images)
			if (this._images.hasOwnProperty(src)) {
				var img = this._images[src];
				if (!img) {
					new Image().src = src;
				} else {
					(function(img, src) {
						setTimeout(function() {
							img.src = src;
						}, 0);
					})(img, src);
				}
			}
	};
}();

var callbackQuery = new function() {
	var _cb = [],
		loaded = false;

	this.run = function(cb) {
		var args = Array.prototype.slice.call(arguments, 1);
		if (loaded) {
			cb(args);
		} else {
			_cb.push({
				cb: cb,
				args: args
			});
		}
	};

	this.loaded = function() {
		loaded = true;
		for (var i = 0, l = _cb.length; i < l; i++) {
			var cb = _cb[i];
			cb.cb(cb.args);
		}

		_cb = null;
	};
}();

function _plural(n, L, i) {
	// plural
	var x = n % 100 <= 10 || n % 100 >= 20 ? n % 10 : 0,
		l = L.length;
	if (l == 2 && x == 1) x = 0;
	else if (l == 3 && x > 1) x = x < 5 ? 2 : 0;
	return (
		(i ? n + (i && i != 1 ? i : '') : '') +
		(typeof L != 'string' ? L[x] || L[x > 1 && x < 5 ? x : 0] || L[x > 1 ? 1 : 0] : L)
	);
}

mr.hash = window.location.href;
mr.hash = mr.hash.indexOf('#') === -1 ? null : mr.hash.substr(mr.hash.indexOf('#') + 1);
mr.domain = mr.getDomain();

window.onerror = function(message, url, line, col, error) {
	// Если есть объект ошибки, то пусть его парсингом займётся logError
	if (error) {
		logError(error, 'global');
	}

	logError(
		{
			from: from,
			message: message,
			url: url,
			line: line,
			col: col
		},
		'global'
	);
};

/**
 *
 * @param {Error} error - Объект ошибки
 * @param {string} text - название ошибки
 * @example getSplash, execInnerScripts, OKUpdate
 */
function logError(error, text) {
	var message = error.message;
	var url = error.url;
	var line = error.line;
	var col = error.col;

	var ignored = {
		message: buildRegExp(['uplListener', 'jsbSmile', 'dpQuery', 'DealPly', 'btnO'])
	};

	function buildRegExp(list) {
		return new RegExp('(' + list.join('|') + ')', 'g');
	}

	if (!message || message.match(ignored.message)) {
		return;
	}

	var IMG_SERVER = 'img.imgsmail.ru';
	var PORTAL_SERVER = 'portal.mail.ru';
	var STATIC_JS_REGEXP = /\/v\/j\//;
	var from = '';
	var errorParsed = '';

	errorParsed = parseError(error);

	var firstStack = errorParsed.stack[0] || {};

	message = errorParsed.getMessage();
	url = url || firstStack.file;
	line = line || firstStack.line;
	col = col || firstStack.col;

	var domain = url && mr.getDomain(url);

	if (url) {
		if (domain === mr.getDomain()) {
			if (url.match(STATIC_JS_REGEXP)) {
				from = 'desktop';
			} else {
				from = 'inline';
			}
		} else if (url.indexOf(IMG_SERVER) > -1 || url.indexOf(PORTAL_SERVER) > -1) {
			from = 'portal';
		} else {
			from = 'other';
		}
	} else {
		from = 'unknown';
	}

	var name = 'JSError' + (text ? '_' + text : '');

	createRadar(
		'error',
		false,
		formatErrorMessage({
			message: message,
			from: from,
			url: url,
			line: col,
			col: col
		})
	)('all', 0, 1)('all', 1, 2)(name, 0, 1)(name, 1, 2)(true);
}

function formatErrorMessage(error) {
	var from = error.from;
	var message = error.message;
	var url = error.url;
	var line = error.line;
	var col = error.col;

	var MAX_RLOG_MESSAGE_LENGTH = 1000;
	return [
		from,
		': ',
		message,
		' in ',
		encodeURIComponent(url),
		'@',
		line,
		':',
		col,
		';',
		'geo: ',
		_MANUALREGIONID,
		';'
	]
		.join('')
		.slice(0, MAX_RLOG_MESSAGE_LENGTH);
}

// Бегаем по стэку, собираем данные о строке и колонке с ошибкой
function getDetailsFromStack(stack) {
	var result = stack
		.replace(/\t+/g, ' ')
		.split('\n')
		.map(function(item, num) {
			var match;

			// Trident/7.0, MSIE 10, Edg
			/**
			 *	example:
				TypeError: Cannot read property 'style' of null 0
				at OKUpdate (https://lfdev1.devmail.ru/:2112:22) 1
				at https://lfdev1.devmail.ru/:2069:9 2
				at https://lfdev1.devmail.ru/:2137:3 3
				*/
			if (!num) {
				return null;
			}

			// на сложные строки с указанием функций
			match = item.match(/at(?:\s+([^\s(]+)\s)\(?((?:https?:)?[^():]+)(?::(\d+):(\d+))?\)?/i);

			// на простые строки с Url, строкой и символом
			if (!match) {
				match = item.match(/at\s+(a)?(https?:[^\s:(]+)(?::(\d+):(\d+))?/i);
			}
			/**
			 * example:
			 * 	OKUpdate@https://lfdev1.devmail.ru/:2130:17 0
				@https://lfdev1.devmail.ru/:2087:17 1
				@https://lfdev1.devmail.ru/:2155:3 2
				@https://lfdev1.devmail.ru/:2159:5 3
				*/
			// Firefox имеет свой стиль описания стектрейса
			if (!match) {
				match = item.match(/([^@]+)@((?:https?:)?[^:]+):(\d+):(\d+)/);
			}

			if (match) {
				var func = match[1],
					file = match[2],
					line = match[3],
					col = match[4];
				item = {
					msg:
						(func ? 'at ' + func + ' ' : '') +
						(file ? 'in ' + file : '') +
						(line ? ':' + line + ':' + col : ''),
					func: func,
					file: file,
					line: line,
					col: col
				};
			}

			return item;
		});

	// Фильтруем
	var filtered = [];
	var num = 0;

	while (num < result.length) {
		if (result[num]) {
			filtered.push(result[num]);
		}

		num = num + 1;
	}

	return (filtered.length && filtered) || stack;
}

function parseError(error) {
	if (!(error instanceof Error)) {
		return null;
	}

	var stack = getDetailsFromStack(error.stack || '');

	var getMessage = function() {
		var message = error.name + ': ' + error.message;
		if (stack && stack[0] && stack[0].msg) {
			message += ' ' + stack[0].msg;
		}

		return message;
	};

	return {
		name: error.name,
		message: error.message,
		stack: stack,
		getMessage: getMessage
	};
}

function isBrowser(browserName) {
	var UA_STR = typeof window !== 'undefined' && window.navigator.userAgent.toLowerCase();

	return UA_STR.indexOf(browserName.toLowerCase()) > -1;
}

function getRegionInfo(id, parentId, grandId, hasChildren) {
	var currentLevel = 3,
		level1 = grandId || null,
		level2 = parentId || null,
		level3 = id || null,
		levels = 3,
		parentNotEmpty;

	if (!level2) {
		level1 = id;
		level2 = level3 = null;
		currentLevel = 1;
		levels = 1;
	} else if (!level1) {
		level1 = level2;
		level2 = level3;
		level3 = null;
		currentLevel = 2;
		if (!hasChildren) {
			levels = 2;
		} else {
			levels = 3;
		}
	}

	return {
		levels: levels,
		currentLevel: currentLevel,
		level1: level1,
		level2: level2,
		level3: level3,
		id: id,
		parentId: parentId,
		grandId: grandId
	};
}
var percent = (function(date) {
	var percent = date.substring(date.length - 2);

	return function(p) {
		return percent < p;
	};
})(new Date() * 1 + '');

mr.bind(document, 'mousedown', function(event) {
	event = event || window.event;
	var target = event.target || event.srcElement;

	while (target.parentNode) {
		var value = target.getAttribute && target.getAttribute('data-count-rb');

		if (value) {
			mr.count(value);
		}

		target = target.parentNode;
	}
});

// console workaround for old browsers
(function(window) {
	if (!window.console) {
		var console = {};
		console.log = console.warn = console.error = function() {};
		window.console = console;
	}
})(window);
var _MANUALREGIONID = '200';

		var region = getRegionInfo(200,null,null,1);

		var manualRegion = getRegionInfo(200,null,null,1);

		mr.activeEmail = '';
		mr.timezone =-14400;
		mr.referrer = '';
		var _timezone = mr.timezone;

		mr.timestamp =1697422171641;

		mr.dpr = window.devicePixelRatio;
		mr.retina = document.createElement('div').style.backgroundSize != void 0 && mr.dpr > 1;

		if (mr.retina){
			mr.removeClass(document.getElementsByTagName('html')[0], 'nonRetina');
			mr.addClass(document.getElementsByTagName('html')[0], 'retina');
		}

		mr.logErrors =false;
		mr.logErrorsExtended =false;
		mr.logInlineErrors =false;
		mr.LF1Percent =0;