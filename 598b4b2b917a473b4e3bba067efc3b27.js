/*
 * Easy plugin move until if/when we ever import SE.com code into core and use the bundlers, etc.
 */

/**
* Cookie plugin
*
* Copyright (c) 2006 Klaus Hartl (stilbuero.de)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/

/**
* Create a cookie with the given name and value and other optional parameters.
*
* @example $.cookie('the_cookie', 'the_value');
* @desc Set the value of a cookie.
* @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
* @desc Create a cookie with all available options.
* @example $.cookie('the_cookie', 'the_value');
* @desc Create a session cookie.
* @example $.cookie('the_cookie', null);
* @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
*       used when the cookie was set.
*
* @param String name The name of the cookie.
* @param String value The value of the cookie.
* @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
* @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
*                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
*                             If set to null or omitted, the cookie will be a session cookie and will not be retained
*                             when the the browser exits.
* @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
* @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
* @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
*                        require a secure protocol (like HTTPS).
* @type undefined
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/

/**
* Get the value of a cookie with the given name.
*
* @example $.cookie('the_cookie');
* @desc Get the value of a cookie.
*
* @param String name The name of the cookie.
* @return The value of the cookie.
* @type String
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/
jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

/*
 *	TypeWatch 2.0 - Original by Denny Ferrassoli / Refactored by Charles Christolini
 *
 *	Examples/Docs: www.dennydotnet.com
 *	
 *  Copyright(c) 2007 Denny Ferrassoli - DennyDotNet.com
 *  Coprright(c) 2008 Charles Christolini - BinaryPie.com
 *  
 *  Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
*/

(function (jQuery) {
    jQuery.fn.typeWatch = function (o) {
        // Options
        var options = jQuery.extend({
            wait: 750,
            callback: function () { },
            highlight: true,
            captureLength: 2
        }, o);

        function checkElement(timer, override) {
            var elTxt = jQuery(timer.el).val();

            // Fire if text > options.captureLength AND text != saved txt OR if override AND text > options.captureLength
            if ((elTxt.length > options.captureLength && elTxt.toUpperCase() != timer.text)
			|| (override && elTxt.length > options.captureLength)) {
                timer.text = elTxt.toUpperCase();
                timer.cb(elTxt);
            }
        };

        function watchElement(elem) {
            // Must be text or textarea
            if (elem.type.toUpperCase() == "TEXT" || elem.nodeName.toUpperCase() == "TEXTAREA") {

                // Allocate timer element
                var timer = {
                    timer: null,
                    text: jQuery(elem).val().toUpperCase(),
                    cb: options.callback,
                    el: elem,
                    wait: options.wait
                };

                // Set focus action (highlight)
                if (options.highlight) {
                    jQuery(elem).focus(
						function () {
						    this.select();
						});
                }

                // Key watcher / clear and reset the timer
                var startWatch = function (evt) {
                    var timerWait = timer.wait;
                    var overrideBool = false;

                    if (evt.keyCode == 13 && this.type.toUpperCase() == "TEXT") {
                        timerWait = 1;
                        overrideBool = true;
                    }

                    var timerCallbackFx = function () {
                        checkElement(timer, overrideBool)
                    }

                    // Clear timer					
                    clearTimeout(timer.timer);
                    timer.timer = setTimeout(timerCallbackFx, timerWait);

                };

                jQuery(elem).keydown(startWatch);
            }
        };

        // Watch Each Element
        return this.each(function (index) {
            watchElement(this);
        });

    };

})(jQuery);

// SE.com Code

window.StackExchange = {};

StackExchange.init = (function () {
    var bind_hidePopupsOnEscPress = function () {
        $(document).keyup(function (event) {
            if (event.which == 27) { // esc key
                $('.error-notification, .popup').fadeOutAndRemove();
            }
        });
    };

    return function (options) {
        StackExchange.options = options;

        // all ajax calls should append javascript Date ticks to break browser cache
        $.ajaxSetup({ cache: false });

        StackExchange.init.createJqueryExtensions();

        $(function () {
            bind_hidePopupsOnEscPress();
        });
    };
})();

StackExchange.init.createJqueryExtensions = function () {
    $.fn.extend({
        fadeOutAndRemove: function (options) {
            return this.each(function () {
                var toHide = $(this);
                toHide.fadeOut('fast', function () { toHide.trigger('removing').remove(); });
            });
        },

        center: function () { // via Tony L. https://stackoverflow.com/questions/210717/what-is-the-best-way-to-center-a-div-on-the-screen-using-jquery/210733#210733
            // We're often calling .center() on display:none elements; those don't give you an offsetParent.
            // Hence the detour via .parent() for getting the positioning parent.
            var posParent = this.parent();
            if (posParent.css("position") === "static")
                posParent = posParent.offsetParent();
            var posParentPos = posParent.offset();

            var $window = $(window);

            this.css("position", "absolute");
            this.css("top", ($window.height() - this.height()) / 2 + $window.scrollTop() - posParentPos.top + "px");
            this.css("left", ($window.width() - this.width()) / 2 + $window.scrollLeft() - posParentPos.left + "px");
            return this;
        }
    });
};

StackExchange.helpers = (function () {
    var draggingPopup;
    var draggingOffset;
    var draggingDocumentHooked;
    var bindMovablePopups = function () {
        var stopDragging = function () {
            draggingPopup = draggingOffset = null;
            $('body').removeAttr('style');
        };

        var movable = $('div.popup');

        movable.each(
            function (i, e) {
                var handle = $(e).find('.handle');

                if (!handle.length) return;

                handle.css({ cursor: 'move' });

                handle
                    .unbind('mousedown')
                    .bind(
                        'mousedown',
                        function (evt) {
                            var eOffset = $(e).offset();

                            draggingOffset = {
                                x: eOffset.left - evt.pageX,
                                y: eOffset.top - evt.pageY
                            };

                            draggingPopup = $(e);

                            var def = draggingPopup.offset();

                            // for some reason, we get a jitter if we just do this once; so double down dog
                            draggingPopup.offset(def).offset(def);

                            $('body').attr('style', 'cursor:move');

                            evt.preventDefault(); // prevent selection
                        }
                    );
            }
        );

        if (!draggingDocumentHooked) {
            draggingDocumentHooked = true;

            $(document).on(
                'mousemove',
                function (e) {
                    if (draggingPopup) {
                        var top = e.pageY + draggingOffset.y;
                        var left = e.pageX + draggingOffset.x;

                        draggingPopup.offset({
                            top: top,
                            left: left
                        });
                    }
                }
            ).on(
                'keypress',
                stopDragging
            ).on(
                'mouseup',
                stopDragging
            );
        }
    };
    var gps = function () {
        var pendingKey = "gps-pending";
        var inFlight = {};
        function localStorageWorks() {
            if (!window.localStorage) return false;

            try {
                window.localStorage['gps-probe'] = '1';
                if (window.localStorage['gps-probe'] != '1') return false;

                window.localStorage.removeItem('gps-probe');
            } catch (e) { return false; }

            return true;
        }
        function addState(e) {}
        function addToPending(obj) {
            addState(obj);
            var pending = localStorage[pendingKey],
                json;

            if (pending) {
                var arr = JSON.parse(pending);
                arr.push(obj);
                json = JSON.stringify(arr);
            }
            else {
                json = JSON.stringify([obj]);
            }

            localStorage[pendingKey] = json;
        }
        function slurpPreInit() {
            if (StackExchange._gps_track) {
                $.each(StackExchange._gps_track, function (i, e) { addToPending(e); });
                delete StackExchange._gps_track;
            }
        }
        function getPending() {
            var pending = localStorage[pendingKey];

            if (!pending) return [];

            return JSON.parse(pending);
        }
        function removeFromPending(obj) {
            var pending = localStorage[pendingKey];

            if (!pending) return;

            var arr = JSON.parse(pending);
            var cur = JSON.stringify(obj);

            var ix = -1;
            for (var i = 0; i < arr.length; i++) {
                var other = JSON.stringify(arr[i]);

                if (cur == other) {
                    ix = i;
                    break;
                }
            }

            if (ix == -1) return;

            arr.splice(ix, 1);

            if (arr.length == 0) {
                localStorage.removeItem(pendingKey);
                return;
            }

            localStorage[pendingKey] = JSON.stringify(arr);
        }
        function send(obj) {
            if (!$.isArray(obj)) {
                obj = [obj];
            }

            // filter out anything that's still "in flight"
            for (var i = 0; i < obj.length; i++) {
                var mark = JSON.stringify(obj[i]);
                if (inFlight[mark]) {
                    obj.splice(i, 1);
                    i--;
                }
            }

            // now we're sending these, so mark them as "in flight"
            for (var i = 0; i < obj.length; i++) {
                var mark = JSON.stringify(obj[i]);
                inFlight[mark] = true;
            }

            var data = JSON.stringify(obj);

            if (navigator && navigator.sendBeacon) {
                try {
                    if (navigator && navigator.sendBeacon('/gps/event', data)) {
                        for (var i = 0; i < obj.length; i++) {
                            removeFromPending(obj[i]);
                            var mark = JSON.stringify(obj[i]);
                            delete inFlight[mark];
                        }

                        return;
                    }
                } catch (err) {  }
            }
            $.ajax({
                type: 'POST',
                url: '/gps/event',
                data: { data: data },
                success: function (data, status, xhr) {
                    for (var i = 0; i < obj.length; i++) {
                        removeFromPending(obj[i]);
                    }
                },
                complete: function () {
                    for (var i = 0; i < obj.length; i++) {
                        var mark = JSON.stringify(obj[i]);
                        delete inFlight[mark];
                    }
                }
            });
        }
        function sendPending() {
            var pending = getPending();
            if (pending.length > 0) {
                var now = (new Date()).getTime();

                // batch these up to keep Haproxy from getting angry
                var keep = [];
                for (var i = 0; i < pending.length && keep.length < 20; i++) {
                    var toSend = pending[i];

                    var elapsed = now - toSend.now;
                    if (elapsed < 0 || elapsed > (3600 * 1000)) {
                        removeFromPending(toSend);
                    } else {
                        keep.push(toSend);
                    }
                }

                if (keep.length > 0) {
                    send(keep);
                }
            }
        }

        if (!localStorageWorks()) return function () { }; // does nothing
        slurpPreInit();
        sendPending();

        // bind common UI elements
        $(function () {
            $('a.tour-link').click(function () {
                var loc = $(this).data('loc');
                StackExchange.helpers.gps('aboutpage.click', { location: loc }, true);
            });
            $('.featured-site a').click(function () {
                var sid = $(this).closest('.featured-site').data('sid');
                StackExchange.helpers.gps('featured_site.click', { item_site: sid }, true);
            });
        });

        var track = function (evt, props, postponeSending) {
            var pl = { evt: evt, properties: props || {}, now: (new Date()).getTime() };
            addToPending(pl);
            if (navigator && navigator.sendBeacon) { postponeSending = false; }
            if (postponeSending) window.setTimeout(sendPending, 10000);
            else sendPending();
        };
        return track;
    }();
    

    var helpers = { // the result object

        bindMovablePopups: bindMovablePopups,
    
        addSpinner: function (appendToSelector, cssProperties) {
            $(appendToSelector).append(helpers.getSpinnerImg(cssProperties));
        },

        getSpinnerImg: function (cssProperties) {
            var jImg = $('<img class="ajax-loader" src="/Content/Img/progress-dots.gif" title="loading..." alt="loading..." />');

            if (cssProperties)
                jImg.css(cssProperties);

            return jImg;
        },

        removeSpinner: function () {
            $("img.ajax-loader").remove();
        },

        showErrorPopup: function (appendTo, msg, isFading) {
            // Kill old error messages
            $('.error-notification').remove();

            ///	<summary>
            ///     Shows a message to the user in an attention-grabbing box.
            ///	</summary>
            ///	<param name="appendTo" type="Object">
            ///     A string or jQuery object that identifies the element to append the popup message box onto.
            /// </param>
            ///	<param name="msg" type="String">
            ///     A short message to the user.
            /// </param>
            ///	<param name="isFading" type="Boolean">
            ///     Optional boolean that will make the displayed popup fade away quickly, instead of forcing a user click to dismiss.
            /// </param>

            var jDiv = $(
                '<div class="error-notification supernovabg">' +
                    '<h2>' + msg + '</h2>' +
                    (isFading ? '' : '<span class="error-close">(click on this box to dismiss)</span>') +
                '</div>'
            );
            var remove = function () { jDiv.fadeOutAndRemove(); }

            $(appendTo).append(jDiv);

            jDiv
                .click(remove)
                .fadeIn("fast");

            setTimeout(remove, (isFading ? Math.max(2500, msg.length * 40) : 1000 * 30));
        },

        removeErrorPopup: function () {
            $('.error-notification').fadeOutAndRemove();
        },

        // taken from https://stackoverflow.com/questions/4197591/parsing-url-hash-fragment-identifier-with-javascript/4198132#4198132
        getHashParams: function() {
            
            var hashParams = {};
            var e,
                a = /\+/g,  // Regex for replacing addition symbol with a space
                r = /([^&;=]+)=?([^&;]*)/g,
                d = function (s) { return decodeURIComponent(s.replace(a, " ")); },
                q = window.location.hash.substring(1);

            while (e = r.exec(q))
                hashParams[d(e[1])] = d(e[2]);

            return hashParams;
        },

        // Returns an object with two methods:
        // - trigger() causes `callback` to be called after `delay` milliseconds. Any arguments given
        //   to `trigger` will be passed to the callback. If `trigger` is called while a reaction is
        //   pending, the callback will still only be called *once*. The arguments passed to the
        //   callback in this case are the arguments passed to the *last* call to `trigger`.
        // - cancel() cancels the delayed reaction -- even if a trigger() call has happened previously,
        //   the callback won't be called. No-op if no call is pending.
        //
        // Method calls do not need a context.
        //
        // Options:
        // - options.always: if given, it's a function that will be called *immediately* on every .trigger() call,
        //     with the same arguments.
        // - options.sliding: if true, a call to `trigger` will cause the timer to be reset; in other words,
        //     before `callback` is called, there has to be a pause of `delay` milliseconds in which `trigger`
        //     is *not* called.
        //     If false (or not set), the call to `callback` will happen `delay` milliseconds
        //     after the first call to `trigger`, no matter how many times `trigger` is called afterwards.

        /**
         * @deprecated Use `debounce()` from `utilities/helpers.ts` instead.
         */
        DelayedReaction: function (callback, delay, options) {
            options = options || {};
            var timeout,
                args,
                always = options.always;

            var go = function () {
                timeout = null;
                callback.apply(null, args);
            };
            return {
                trigger: function () {
                    args = arguments;
                    if (always)
                        always.apply(null, args);
                    if (timeout) {
                        if (options.sliding) {
                            clearTimeout(timeout);
                            timeout = setTimeout(go, delay);
                        } else {
                            return;
                        }
                    } else {
                        timeout = setTimeout(go, delay);
                    }
                },
                cancel: function () {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                }
            };
        },

        gps: gps

    }; // end helpers
    return helpers;

})();  // end of the closure

//StackExchange.init();

/* realtime */
/**
* EventEmitter v3.1.4
* https://github.com/Wolfy87/EventEmitter
* 
* Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
* Oliver Caldwell (olivercaldwell.co.uk)
*/
(function (a) { function c(a, b, c, d, e) { this.type = a; this.listener = b; this.scope = c; this.once = d; this.instance = e } function b() { this._events = {}; this._maxListeners = 10 } "use strict"; c.prototype.fire = function (a) { this.listener.apply(this.scope || this.instance, a); if (this.once) { this.instance.removeListener(this.type, this.listener, this.scope); return false } }; b.prototype.eachListener = function (a, b) { var c = null, d = null, e = null; if (this._events.hasOwnProperty(a)) { d = this._events[a]; for (c = 0; c < d.length; c += 1) { e = b.call(this, d[c], c); if (e === false) { c -= 1 } else if (e === true) { break } } } return this }; b.prototype.addListener = function (a, b, d, e) { if (!this._events.hasOwnProperty(a)) { this._events[a] = [] } this._events[a].push(new c(a, b, d, e, this)); this.emit("newListener", a, b, d, e); if (this._maxListeners && !this._events[a].warned && this._events[a].length > this._maxListeners) { if (typeof console !== "undefined") { console.warn("Possible EventEmitter memory leak detected. " + this._events[a].length + " listeners added. Use emitter.setMaxListeners() to increase limit.") } this._events[a].warned = true } return this }; b.prototype.on = b.prototype.addListener; b.prototype.once = function (a, b, c) { return this.addListener(a, b, c, true) }; b.prototype.removeListener = function (a, b, c) { this.eachListener(a, function (d, e) { if (d.listener === b && (!c || d.scope === c)) { this._events[a].splice(e, 1) } }); if (this._events[a] && this._events[a].length === 0) { delete this._events[a] } return this }; b.prototype.off = b.prototype.removeListener; b.prototype.removeAllListeners = function (a) { if (a && this._events.hasOwnProperty(a)) { delete this._events[a] } else if (!a) { this._events = {} } return this }; b.prototype.listeners = function (a) { if (this._events.hasOwnProperty(a)) { var b = []; this.eachListener(a, function (a) { b.push(a.listener) }); return b } return [] }; b.prototype.emit = function (a) { var b = [], c = null; for (c = 1; c < arguments.length; c += 1) { b.push(arguments[c]) } this.eachListener(a, function (a) { return a.fire(b) }); return this }; b.prototype.setMaxListeners = function (a) { this._maxListeners = a; return this }; if (typeof define === "function" && define.amd) { define(function () { return b }) } else { a.EventEmitter = b } })(this)

StackExchange.realtime = (function () {
    var logToConsole;
    var connectRetries = 0;

    var socket;
    var channelBuffer = [];
    var ee = new EventEmitter();

    function init(endpoint, shouldLogToConsole) {
        logToConsole = shouldLogToConsole;

        if (socket) {
            try {
                logMessage('closing WebSocket');
                socket.close();
            } catch (ex) {
            }
        }

        if (!socket) {
            logMessage('opening WebSocket');

            if ('WebSocket' in window) {
                socket = new WebSocket(endpoint);
            } else {
                socket = new MozWebSocket(endpoint);
            }

            socket.onopen = function () {
                connectRetries = 0;
                logMessage('WebSocket opened');
                sendChannelBuffer();
                processHeartbeats();
            };

            socket.onmessage = function (msg) {
                var message = $.parseJSON(msg.data);
                ee.emit(message.action, message.data);
            };

            socket.onclose = function () {
                socket = null;
                logMessage('WebSocket closed');

                if (connectRetries < 5) {
                    connectRetries++;
                    logMessage('reconnect attempt: ' + connectRetries);
                    setTimeout(function () {
                        init(endpoint);
                    }, Math.random() * 5000);
                }
            };

            socket.onerror = function () {
                logMessage('WebSocket failed');
                socket = null;
            };
        }
    }

    function initPolling(getPollingUrl, pollingIntervalSeconds, callback) {
        logMessage('polling will begin in ' + pollingIntervalSeconds + ' seconds');

        setInterval(function () {
            var url = getPollingUrl();

            $.getJSON(url, function (questions) {
                var i;
                logMessage('received ' + questions.length + ' questions from ' + url);

                for (i = questions.length - 1; i >= 0; i--) {
                    callback(questions[i]);
                }
            });
        }, pollingIntervalSeconds * 1000);
    }

    function logMessage(message) {
        if (logToConsole) {
            console.log(message);
        }
    }

    function processHeartbeats() {
        ee.on('hb', function (data) {
            logMessage('heartbeat received; responding');
            socket.send(data);
        });
    }

    function sendChannelBuffer() {
        if (socket == null || socket.readyState != 1) return;

        for (var i = 0, l = channelBuffer.length; i < l; i++) {
            logMessage("sending: " + channelBuffer[i]);
            socket.send(channelBuffer[i]);
        }
    }

    function subscribe(data) {
        channelBuffer.push(data);
        sendChannelBuffer();
    }
    var qBound = false;
    function bindQuestions() {
        if (qBound) return;
        qBound = true;
        $('#mainArea').delegate('div.question-container a, div.question-container a>img', 'click', function (e) {
            if (!e._handled) {
                var el = $(this);
                var cont = el.closest('div.question-container');
                var tab = $('#mainArea').data('location'), type,
                    index = cont.prevAll('div.question-container').length,
                    sid = cont.data('sid');
                if (!(tab === undefined)) {
                    if (el.hasClass('realtime-question-url') || el.hasClass('question-link')) type = 1;
                    else if (el.hasClass('post-tag')) type = 2;
                    else if (el.hasClass('realtime-site-icon') || el.closest('.hot-question-site-icon').length) type = 3;
                    else if (el.hasClass('realtime-host') || el.hasClass('question-host')) type = 4;
                    else if (el.closest('span').hasClass('owner')) type = 5;

                    var obj = { item_type: type, tab: tab, position: index + 1, item_site: sid };
                    StackExchange.helpers.gps('posts_hot_network.click', obj, true);
                }
                e._handled = true; // prevent logging parent elements
            }
        });
    }
    function subscribeToRealtimeQuestions(socketEndpoint, socketSubscriptionName, getPollingUrl, pollingIntervalSeconds, shouldLogToConsole, callback) {
        bindQuestions();
        if ('WebSocket' in window || 'MozWebSocket' in window) {
            if (!socket) init(socketEndpoint, shouldLogToConsole);

            subscribe(socketSubscriptionName);

            ee.on(socketSubscriptionName, function (data) {
                var question = $.parseJSON(data);
                callback(question);
            });
        } else {
            initPolling(getPollingUrl, pollingIntervalSeconds, callback);
        }
    }

    function subscribeToTopBarNotifications(endpoint, accountId, shouldLogToConsole) {
        bindQuestions();
        if (!socket) init(endpoint, shouldLogToConsole);

        var subscriptionName = accountId + '-topbar';

        subscribe(subscriptionName);
        ee.on(subscriptionName, function (data) {
            StackExchange.topbar.handleRealtimeMessage(data);
        });
    }

    function subscribeForStatus(endpoint, subscriptionName, callback, shouldLogToConsole) {
        if ('WebSocket' in window || 'MozWebSocket' in window) {
            if (!socket) init(endpoint, shouldLogToConsole);

            subscribe(subscriptionName);

            ee.on(subscriptionName, function (data) {
                var question = $.parseJSON(data);
                callback(question);
            });
        }
    }

    function getRelativeTime(time) {
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = new Date(time * 1000);
        var delta = (((new Date()).getTime() - date.getTime()) / 1000);
        var val;

        if (delta < 2) {
            return 'just now';
        }
        if (delta < 60) {
            return Math.floor(delta) + ' secs ago';
        }
        if (delta < 120) {
            return '1 min ago';
        }
        if (delta < 3600) {
            return Math.floor(delta / 60) + ' mins ago';
        }
        if (delta < 7200) {
            return '1 hour ago';
        }
        if (delta < 86400) {
            return Math.floor(delta / 3600) + ' hours ago';
        }
        if (delta < 172800) {
            return 'yesterday';
        }
        if (delta < 259200) {
            return '2 days ago';
        }
        return monthNames[date.getUTCMonth()] + ' ' + date.getUTCDate() + ' \'' + (date.getUTCFullYear() % 1000) + ' at ' + date.getUTCHours() + ':' + date.getUTCMinutes();
    }

    return {
        init: init,
        subscribeForStatus: subscribeForStatus,
        getRelativeTime: getRelativeTime,
        subscribeToRealtimeQuestions: subscribeToRealtimeQuestions,
        subscribeToTopBarNotifications: subscribeToTopBarNotifications
    };
})();