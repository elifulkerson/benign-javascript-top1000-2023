(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }
  return descriptor.value;
}
module.exports = _classApplyDescriptorGet, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],2:[function(require,module,exports){
"use strict";

function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
  }
}
module.exports = _classApplyDescriptorSet, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],3:[function(require,module,exports){
"use strict";

function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }
  return privateMap.get(receiver);
}
module.exports = _classExtractFieldDescriptor, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{}],4:[function(require,module,exports){
"use strict";

var classApplyDescriptorGet = require("./classApplyDescriptorGet.js");
var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");
function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "get");
  return classApplyDescriptorGet(receiver, descriptor);
}
module.exports = _classPrivateFieldGet, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./classApplyDescriptorGet.js":1,"./classExtractFieldDescriptor.js":3}],5:[function(require,module,exports){
"use strict";

var classApplyDescriptorSet = require("./classApplyDescriptorSet.js");
var classExtractFieldDescriptor = require("./classExtractFieldDescriptor.js");
function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = classExtractFieldDescriptor(receiver, privateMap, "set");
  classApplyDescriptorSet(receiver, descriptor, value);
  return value;
}
module.exports = _classPrivateFieldSet, module.exports.__esModule = true, module.exports["default"] = module.exports;

},{"./classApplyDescriptorSet.js":2,"./classExtractFieldDescriptor.js":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.u = exports.t = exports.n = exports.l = exports.g = exports.d = exports.c = exports.a = void 0;
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
// tagged functions to enable code formating and intellisence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates

var baseTag = function baseTag(strings) {
  for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    values[_key - 1] = arguments[_key];
  }
  return (
    // If the value is an array join the items with new line to DRY things
    String.raw.apply(String, [{
      raw: strings
    }].concat(_toConsumableArray(values.map(function (val) {
      return Array.isArray(val) ? val.join('\n') : val;
    }))))
  );
};
var html = baseTag;
var css = baseTag;
var chevronDownSmall = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">  <path fill="currentColor" fill-rule="evenodd" d="M14.39 5.642l-5.703 5.677H7.295L1.614 5.642l.712-.7 5.385 5.377h.564l5.4-5.378z"/> </svg>';
var linksData = [{
  id: "wsj-link",
  accountsUrl: "https://accounts.wsj.com",
  accountsUrlDev: "https://int.accounts.wsj.com",
  label: "WSJ",
  url: "/auth/silent-login?target=https://www.wsj.com",
  urlDev: "/auth/silent-login?target=https://www.s.dev.wsj.com"
}, {
  id: "barrons-link",
  accountsUrl: "https://accounts.barrons.com",
  accountsUrlDev: "https://int.accounts.barrons.com",
  label: "Barron's",
  url: "/auth/silent-login?target=https://www.barrons.com",
  urlDev: "/auth/silent-login?target=https://www.s.dev.barrons.com"
}, {
  id: "mw-link",
  accountsUrl: "https://accounts.marketwatch.com",
  accountsUrlDev: "https://int.accounts.marketwatch.com",
  label: "MarketWatch",
  url: "/auth/silent-login?target=https://www.marketwatch.com",
  urlDev: "/auth/silent-login?target=https://www.dev.marketwatch.com"
}, {
  id: "ibd-link",
  accountsUrl: "",
  accountsUrlDev: "",
  label: "IBD",
  url: "https://www.investors.com/",
  urlDev: "https://www.investors.com/"
}];
exports.l = linksData;
var NAV_HEIGHT = 32;
var EXPLORE_OUR_BRANDS = 'Explore Our Brands';
var linksHtml = linksData.map(function (_ref, idx) {
  var label = _ref.label,
    id = _ref.id,
    accountsUrl = _ref.accountsUrl,
    url = _ref.url;
  var isLastLink = idx === linksData.length - 1;
  var dividerHtml = html(_templateObject || (_templateObject = _taggedTemplateLiteral(["<li><hr /></li>"])));
  return html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    <li>\n      <a id=\"", "\" href=\"", "\">\n        <span class=\"typography\">", "</span>\n      </a>\n    </li>\n    ", "\n  "])), id, "".concat(accountsUrl).concat(url), label, !isLastLink ? dividerHtml : '');
});
var navHatHtml = html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  <nav>\n    <div class=\"button-wrapper\">\n      <button type=\"button\">\n        <span class=\"typography\">", "</span>\n        <div class=\"svg-wrapper\">", "</div>\n      </button>\n    </div>\n    <div class=\"items-wrapper\">\n      <ul>\n        ", "\n      </ul>\n    </div>\n  </nav>\n"])), EXPLORE_OUR_BRANDS, chevronDownSmall, linksHtml);
var navHatHtml$1 = navHatHtml;
var updateCssVars = function updateCssVars(el, rules) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    isTheme: false
  };
  if (el.cssVarEl) {
    // the theme's css vars are expected to be at index 0
    var _el$cssVarEl$sheet$cs = _slicedToArray(el.cssVarEl.sheet.cssRules, 2),
      themeVarsRule = _el$cssVarEl$sheet$cs[0],
      varsRule = _el$cssVarEl$sheet$cs[1];

    // replace the whole set of css to prevent innecesary browser reflow
    if (options.isTheme) {
      themeVarsRule.style.cssText = css(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        ", ";\n      "])), Object.entries(rules).map(function (_ref) {
        var _ref4 = _slicedToArray(_ref, 2),
          key = _ref4[0],
          value = _ref4[1];
        return "".concat(key, ": ").concat(value, ";");
      }));
    } else {
      var newCssText = varsRule.style.cssText;
      Object.entries(rules).forEach(function (_ref2) {
        var _ref5 = _slicedToArray(_ref2, 2),
          key = _ref5[0],
          val = _ref5[1];
        var regex = new RegExp("".concat(key, ":(.*?);"));
        newCssText = newCssText.replace(regex, "".concat(key, ": ").concat(val, ";"));
      });
      if (!Object.is(varsRule.style.cssText, newCssText)) {
        varsRule.style.cssText = newCssText;
      }
    }
  }
};
exports.u = updateCssVars;
var getCssVarValue = function getCssVarValue(el, ruleKey) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    isTheme: false
  };
  if (el.cssVarEl) {
    // the theme's css vars are expected to be at index 0
    var _el$cssVarEl$sheet$cs2 = _slicedToArray(el.cssVarEl.sheet.cssRules, 2),
      themeVarsRule = _el$cssVarEl$sheet$cs2[0],
      varsRule = _el$cssVarEl$sheet$cs2[1];
    return options.isTheme ? themeVarsRule.style.getPropertyValue(ruleKey) : varsRule.style.getPropertyValue(ruleKey);
  }
  return undefined;
};
exports.a = getCssVarValue;
var kebabize = function kebabize(str) {
  return str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, function ($, ofs) {
    return (ofs ? '-' : '') + $.toLowerCase();
  });
};
var toCssVars = function toCssVars() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  return Object.entries(object).reduce(function (vars, _ref3) {
    var _ref6 = _slicedToArray(_ref3, 2),
      rawKey = _ref6[0],
      value = _ref6[1];
    var key = rawKey.includes('-') ? rawKey : kebabize(rawKey);
    if (_typeof(value) === 'object') {
      var nestedVars = toCssVars(value, "".concat(prefix, "-").concat(key));
      return _objectSpread(_objectSpread({}, vars), nestedVars);
    }
    return _objectSpread(_objectSpread({}, vars), {}, {
      ["".concat(prefix, "-").concat(key)]: value
    });
  }, {});
};
exports.t = toCssVars;
var checkIsValidTheme = function checkIsValidTheme(obj) {
  return _typeof(obj) === 'object' && !Array.isArray(obj) && Object.keys(obj || {}).length > 0;
};
exports.c = checkIsValidTheme;
var defaultTheme = {
  colors: {
    darken30A: 'rgba(0,0,0,0.30)',
    inkBase: '#222222',
    inkLight010: '#FFFFFF',
    lighten30A: 'rgba(255,255,255,0.30)',
    neutral025: '#EBEBEB',
    neutral700: '#222222'
  },
  spacePresets: {
    space010: '4px',
    space030: '12px',
    space040: '16px',
    space045: '20px',
    space050: '24px'
  },
  typographyPresets: {
    editorialLabel010: {
      fontFamily: 'Heebo, Retina Narrow, Helvetica, Arial, sans-serif',
      fontSize: '13px',
      fontStretch: 'semi-condensed',
      fontWeight: '500',
      letterSpacing: '6.2%',
      lineHeight: '1.25',
      textTransform: 'uppercase'
    },
    utilityBody010: {
      fontFamily: 'Heebo, Retina, Helvetica, Arial, sans-serif',
      fontSize: '12px',
      fontStretch: 'normal',
      fontWeight: '300',
      letterSpacing: '0',
      lineHeight: '1.5'
    },
    utilitySubheading010: {
      fontFamily: 'Heebo, Retina, Helvetica, Arial, sans-serif',
      fontSize: '14px',
      fontWeight: '400',
      letterSpacing: '0',
      lineHeight: '1.125'
    }
  }
};
var defaultTheme$1 = defaultTheme;
exports.d = defaultTheme$1;
var themeTokens = toCssVars(defaultTheme$1);

// the css vars were splitted in groups to ease swapping in js
var cssVars = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  /* theme vars (index 0 rule of the css-var stylesheet) */\n  :host {\n    ", ";\n  }\n  /* dynamic vars (index 1 rule) */\n  :host {\n    --items-visibility: hidden;\n    --items-row-height: minmax(0, 0fr);\n    --icon-rotation: 0deg;\n  }\n  /* static mode vars (light as default if no mode attr provided) */\n  :host(:not([mode='dark'])) {\n    --bg-color: var(--colors-neutral025);\n    --text-color: var(--colors-ink-base);\n    --divider-color: var(--colors-darken30-a);\n  }\n\n  :host([mode='dark']) {\n    --bg-color: var(--colors-neutral700);\n    --text-color: var(--colors-ink-light010);\n    --divider-color: var(--colors-lighten30-a);\n  }\n"])), Object.entries(themeTokens).map(function (_ref) {
  var _ref7 = _slicedToArray(_ref, 2),
    key = _ref7[0],
    value = _ref7[1];
  return "".concat(key, ": ").concat(value, ";");
}));
var cssVars$1 = cssVars;

// TODO: Typography: use container style queries when the @supports at-rule is available to use
// @supports at-rule(@container; style)
// if supported use it like: @container style(--typography: editorial-label010) {...}

var navHatStyles = css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  nav {\n    min-height: ", "px;\n    background-color: var(--bg-color);\n    color: var(--text-color);\n    display: grid;\n    grid-template-columns: minmax(0, 1fr);\n    grid-template-areas: 'main';\n    align-items: center;\n    padding-inline: var(--space-presets-space045);\n    line-height: 16px;\n  }\n\n  .button-wrapper {\n    height: ", "px;\n    display: flex;\n    grid-column: main;\n  }\n\n  button {\n    /* resets --start-- */\n    border: none;\n    margin: 0;\n    padding: 0;\n    width: auto;\n    overflow: visible;\n    background: transparent;\n    color: inherit;\n    font: inherit;\n    line-height: normal;\n    -webkit-font-smoothing: inherit;\n    -moz-osx-font-smoothing: inherit;\n    /* resets --end-- */\n\n    cursor: pointer;\n    text-align: left;\n    display: flex;\n    align-items: center;\n  }\n\n  button .typography {\n    font-family: var(--typography-presets-editorial-label010-font-family);\n    font-size: var(--typography-presets-editorial-label010-font-size);\n    font-stretch: var(--typography-presets-editorial-label010-font-stretch);\n    font-weight: var(--typography-presets-editorial-label010-font-weight);\n    letter-spacing: var(--typography-presets-editorial-label010-letter-spacing);\n    line-height: var(--typography-presets-editorial-label010-line-height);\n    text-transform: var(--typography-presets-editorial-label010-text-transform);\n  }\n\n  button .svg-wrapper {\n    height: 16px;\n    width: 16px;\n    margin-inline-start: var(--space-presets-space010);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotateX(var(--icon-rotation));\n  }\n\n  button svg {\n    color: var(--text-color);\n    width: 10px;\n    height: 10px;\n  }\n\n  .items-wrapper {\n    grid-column: main;\n    display: grid;\n    visibility: var(--items-visibility);\n    grid-template-rows: var(--items-row-height);\n    transition: grid-template-rows 200ms ease-in-out;\n  }\n\n  .items-wrapper ul {\n    overflow: hidden;\n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-presets-space030);\n    line-height: 20px;\n  }\n\n  /* gap will create space at beginning and end as well */\n  ul:before,\n  ul:after {\n    content: '';\n  }\n\n  li {\n    margin: 0;\n    list-style: none;\n    display: flex;\n  }\n\n  li :any-link {\n    color: var(--text-color);\n    text-decoration-line: underline;\n    text-decoration-color: transparent;\n    text-decoration-style: solid;\n    text-underline-offset: 4px;\n    transition: text-decoration-color 0.5s ease;\n  }\n\n  li a .typography {\n    font-family: var(--typography-presets-utility-subheading010-font-family);\n    font-size: var(--typography-presets-utility-subheading010-font-size);\n    font-weight: var(--typography-presets-utility-subheading010-font-weight);\n    letter-spacing: var(--typography-presets-utility-subheading010-letter-spacing);\n    line-height: var(--typography-presets-utility-subheading010-line-height);\n  }\n\n  li :any-link:hover {\n    text-decoration-color: currentColor;\n  }\n\n  li hr {\n    border-width: 0;\n    border-block-start-width: 1px;\n    border-style: solid;\n    border-color: var(--divider-color);\n    margin: 0;\n    width: 100%;\n  }\n\n  @media (min-width: 640px) {\n    :host {\n      --items-visibility: visible;\n    }\n\n    nav {\n      padding-inline: var(--space-presets-space040);\n    }\n\n    .button-wrapper {\n      display: none;\n    }\n\n    .items-wrapper {\n      display: contents;\n    }\n\n    .items-wrapper ul {\n      overflow: initial;\n    }\n\n    ul {\n      grid-column: main;\n      display: flex;\n      flex-direction: row;\n      gap: var(--space-presets-space050);\n    }\n\n    /* removing gap space at beginning and end */\n    ul:before,\n    ul:after {\n      content: none;\n    }\n\n    li:nth-of-type(even) {\n      display: none;\n    }\n\n    li a .typography {\n      font-family: var(--typography-presets-utility-body010-font-family);\n      font-size: var(--typography-presets-utility-body010-font-size);\n      font-stretch: var(--typography-presets-utility-body010-font-stretch);\n      font-weight: var(--typography-presets-utility-body010-font-weight);\n      letter-spacing: var(--typography-presets-utility-body010-letter-spacing);\n      line-height: var(--typography-presets-utility-body010-line-height);\n    }\n\n    li hr {\n      border-block-start-width: 0;\n      border-inline-start-width: 1px;\n    }\n  }\n\n  @media (min-width: 980px) {\n    nav {\n      padding-inline: 0;\n      grid-template-columns: 1fr 940px 1fr;\n      grid-template-areas: '. main .';\n    }\n  }\n\n  @media (min-width: 1300px) {\n    nav {\n      grid-template-columns: 1fr 1260px 1fr;\n    }\n  }\n"])), NAV_HEIGHT, NAV_HEIGHT);
var navHatStyles$1 = navHatStyles;
var bgColorLight = defaultTheme$1.colors.neutral025;
var bgColorDark = defaultTheme$1.colors.neutral700;
var navHatMarkup = html(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  <style id=\"css-vars\">\n    ", "\n  </style>\n  <style>\n    ", "\n  </style>\n  ", "\n"])), cssVars$1, navHatStyles$1, navHatHtml$1);
exports.n = navHatMarkup;
var getSSRByMode = function getSSRByMode(mode) {
  var bgColor = mode === 'light' ? bgColorLight : bgColorDark;
  var ssrNavHat = html(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    <link rel=\"preconnect\" href=\"https://fonts.googleapis.com\" />\n    <link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin />\n    <link href=\"https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500&display=swap\" rel=\"stylesheet\" />\n    <template shadowrootmode=\"open\">", "</template>\n    <div style=\"background-color: ", "; height: ", "px;\"></div>\n  "])), navHatMarkup, bgColor, NAV_HEIGHT);
  return ssrNavHat;
};
exports.g = getSSRByMode;

},{}],7:[function(require,module,exports){
"use strict";

var _classPrivateFieldGet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldGet"));
var _classPrivateFieldSet2 = _interopRequireDefault(require("@babel/runtime/helpers/classPrivateFieldSet"));
var _indexD00d65dc = require("./index-d00d65dc.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) {
  _checkPrivateRedeclaration(obj, privateMap);
  privateMap.set(obj, value);
}
function _checkPrivateRedeclaration(obj, privateCollection) {
  if (privateCollection.has(obj)) {
    throw new TypeError("Cannot initialize the same private elements twice on an object");
  }
}
var handleClick = function handleClick(el) {
  var itemsWrapperEl = el.shadowRoot.querySelector('.items-wrapper');
  var isVisible = (0, _indexD00d65dc.a)(el, '--items-visibility') === 'visible';
  var itemsRowHeight = 'minmax(0, 1fr)';
  var rotation = '180deg';
  if (isVisible) {
    // lazily set hidden visibility to not flash the content while transitioning
    // visibility hidden is needed for a11y preventing the interact with hidden elements.
    var addHiddenLazy = function addHiddenLazy(ev) {
      if (ev.propertyName === 'grid-template-rows') {
        (0, _indexD00d65dc.u)(el, {
          '--items-visibility': 'hidden'
        });
        itemsWrapperEl.ontransitionend = null;
      }
    };
    itemsWrapperEl.ontransitionend = addHiddenLazy;
    itemsRowHeight = 'minmax(0, 0fr)';
    rotation = '0deg';
  }
  (0, _indexD00d65dc.u)(el, _objectSpread({
    '--icon-rotation': rotation,
    '--items-row-height': itemsRowHeight
  }, !isVisible && {
    '--items-visibility': 'visible'
  }));
};
var _theme = /*#__PURE__*/new WeakMap();
var NavHat = /*#__PURE__*/function (_HTMLElement) {
  _inherits(NavHat, _HTMLElement);
  var _super = _createSuper(NavHat);
  function NavHat() {
    var _this;
    _classCallCheck(this, NavHat);
    var _document;
    _this = _super.call(this);
    _classPrivateFieldInitSpec(_assertThisInitialized(_this), _theme, {
      writable: true,
      value: void 0
    });
    (0, _classPrivateFieldSet2.default)(_assertThisInitialized(_this), _theme, _indexD00d65dc.d);
    if ((_document = document) !== null && _document !== void 0 && _document.fonts) {
      document.fonts.ready.then(function () {
        if (!document.fonts.check('1em Heebo')) {
          NavHat.addFonts();
        }
      });
    }
    if (!_this.shadowRoot) {
      var shadow = _this.attachShadow({
        mode: 'open'
      });
      var template = document.createElement('template');
      template.innerHTML = _indexD00d65dc.n;
      shadow.appendChild(template.content.cloneNode(true));
    }
    _this.cssVarEl = _this.shadowRoot.getElementById('css-vars');
    return _this;
  }
  _createClass(NavHat, [{
    key: "theme",
    get: function get() {
      return (0, _classPrivateFieldGet2.default)(this, _theme);
    },
    set: function set(newTheme) {
      if ((0, _indexD00d65dc.c)(newTheme) && !Object.is(this.theme, newTheme)) {
        (0, _classPrivateFieldSet2.default)(this, _theme, newTheme);
        this.updateTheme();
      }
    }
  }, {
    key: "updateTheme",
    value: function updateTheme() {
      var themeRules = (0, _indexD00d65dc.t)(this.theme);
      (0, _indexD00d65dc.u)(this, themeRules, {
        isTheme: true
      });
    }
  }, {
    key: "updateUrls",
    value: function updateUrls() {
      var _this2 = this;
      var isDev = /local|dev/.test(window.location.host);
      var modCode = NavHat.getModCode();
      if (isDev) {
        _indexD00d65dc.l.forEach(function (_ref) {
          var id = _ref.id,
            accountsUrlDev = _ref.accountsUrlDev,
            urlDev = _ref.urlDev;
          var linkEl = _this2.shadowRoot.getElementById(id);
          var finalUrl = encodeURI("".concat(accountsUrlDev).concat(urlDev, "?mod=").concat(modCode));
          linkEl.href = finalUrl;
        });
      } else {
        _indexD00d65dc.l.forEach(function (_ref2) {
          var id = _ref2.id;
          var linkEl = _this2.shadowRoot.getElementById(id);
          var finalUrl = encodeURI("".concat(linkEl.href, "?mod=").concat(modCode));
          linkEl.href = finalUrl;
        });
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this3 = this;
      var button = this.shadowRoot.querySelector('button');
      button.onclick = function () {
        return handleClick(_this3);
      };
      this.updateUrls();
    }
  }], [{
    key: "getModCode",
    value: function getModCode() {
      var host = window.location.host;
      if (host.includes('wsj')) return 'WSJ_NavHat';
      if (host.includes('barrons')) return 'BOL_NavHat';
      if (host.includes('marketwatch')) return 'MW_NavHat';
      if (host.includes('investors')) return 'IBD_NavHat';
      return 'NavHat';
    }
  }, {
    key: "addFonts",
    value: function addFonts() {
      var link = document.createElement('link');
      link.href = 'https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500&display=swap';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }]);
  return NavHat;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
if (!customElements.get('nav-hat')) {
  customElements.define('nav-hat', NavHat);
}

},{"./index-d00d65dc.js":6,"@babel/runtime/helpers/classPrivateFieldGet":4,"@babel/runtime/helpers/classPrivateFieldSet":5}]},{},[7]);
