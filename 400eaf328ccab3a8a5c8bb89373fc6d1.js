const KEY_CODE = {
    ESC: 27,
    ENTER: 13,
    LEFT_MOUSE: 1,
    MIDDLE_MOUSE: 2
};
/*!
  * klass: a classical JS OOP façade
  * https://github.com/ded/klass
  * License MIT (c) Dustin Diaz & Jacob Thornton 2012
  */
!function (name, context, definition) {
    if (typeof define == 'function') define(definition)
    else if (typeof module != 'undefined') module.exports = definition()
    else context[name] = definition(context)
}('klass', this, function (context) {
    context = context || this;
    var old = context.klass
      , f = 'function'
      , fnTest = false && /xyz/.test(function () { xyz }) ? /\bsupr\b/ : /.*/
      , proto = 'prototype'

    function klass(o) {
        return extend.call(isFn(o) ? o : function () { }, o, 1)
    }

    function isFn(o) {
        return typeof o === f
    }

    function wrap(k, fn, supr) {
        return function () {
            var tmp = this.supr
            this.supr = supr[proto][k]
            var undef = {}.fabricatedUndefined
            var ret = undef
            try {
                ret = fn.apply(this, arguments)
            } finally {
                this.supr = tmp
            }
            return ret
        }
    }

    function process(what, o, supr) {
        for (var k in o) {
            if (o.hasOwnProperty(k)) {
                what[k] = isFn(o[k])
                  && isFn(supr[proto][k])
                  && fnTest.test(o[k])
                  ? wrap(k, o[k], supr) : o[k]
            }
        }
    }

    function extend(o, fromSub) {
        // must redefine noop each time so it doesn't inherit from previous arbitrary classes
        function noop() { }
        noop[proto] = this[proto]
        var supr = this
          , prototype = new noop()
          , isFunction = isFn(o)
          , _constructor = isFunction ? o : this
          , _methods = isFunction ? {} : o
        function fn() {
            if (this.initialize) this.initialize.apply(this, arguments)
            else {
                fromSub || isFunction && supr.apply(this, arguments)
                _constructor.apply(this, arguments)
            }
        }

        fn.methods = function (o) {
            process(prototype, o, supr)
            fn[proto] = prototype
            return this
        }

        fn.methods.call(fn, _methods).prototype.constructor = fn

        fn.extend = extend;
        fn[proto].implement = fn.statics = function (o, optFn) {
            o = typeof o == 'string' ? (function () {
                var obj = {}
                obj[o] = optFn
                return obj
            }()) : o
            process(this, o, supr)
            return this
        }

        return fn
    }

    klass.noConflict = function () {
        context.klass = old
        return this
    }

    return klass
});

const UNREAD_MESSAGE_ICON_EVENT_SOURCE = 2;
const INBOX_POPUP_ITEM_EVENT_SOURCE = 3;
const ERROR_WHILE_UPDATING_NOTIFICATION_TEXT = 'An error occurred while updating the status of the notification. Please try again.';

StackExchange.topbar = (function () {

    // trying out this inheritance helper - https://github.com/ded/klass - located in stub.js

    /*
        Base class of any dialog to be displayed when clicking a topbar button.
    */
    var Dialog = klass({ // declare instance variables
        name: '',
        url: '',
        cssClass: '', // needed for $loadingPlaceholders

        button: null,

        $dialog: null,
        $loadingPlaceholder: null,
        $preloadedDialog: null,

        hasRead: false
    })
    .statics({
        $corral: $('.js-topbar-dialog-corral') // accessed via Dialog.$corral; DOM entry point for any fetched dialogs
    })
    .methods({

        isLoading: function () {
            return this.$loadingPlaceholder != null;
        },

        isLoaded: function () {
            return this.$dialog != null;
        },

        isVisible: function () {
            var $div = this.$dialog || this.$loadingPlaceholder;
            return $div != null && $div.is(':visible');
        },

        toggle: function (showOrHide, preventMarkAsRead) {
            if (typeof showOrHide != 'boolean') {
                throw new Error('showOrHide is a required parameter');
            }

            if (!showOrHide) { // hide

                // someone got impatient with a long-running request
                if (this.isLoading()) {
                    // so hide the placeholder
                    this.showOrHide(false);
                    return;
                }

                // never clicked this dialog? no work to be done! (this happens when calling hideAll)
                if (!this.isLoaded()) {
                    return;
                }
            }

            if (this.isLoaded() || this.isLoading()) {

                // only clear the unread indicators (icon count + item highlighting) when closing content we've seen
                if (!showOrHide && !preventMarkAsRead && this.hasRead) {
                    this.markAsRead();
                }

                // toggle the already-loaded dialog or the loading placeholder
                this.showOrHide(showOrHide);
            }
            else if (this.$preloadedDialog) {
                // sometimes we want a dialog to be extra responsive, so we'll preload most of it..
                // then, we'll load its extraneous content when clicked, e.g. the "all sites" list in the site switcher
                // note: this.$dialog will be set to this.$preloadedDialog on the first click
                this.loadChildContent();
            }
            else {
                this.loadDialog();
            }

            // when showing this dialog, others should be hidden
            if (showOrHide) {
                for (var i = 0; i < buttons.length; i++) {
                    if (this.button != buttons[i]) {
                        buttons[i].toggle(false, preventMarkAsRead);
                    }
                }
            }
        },

        showOrHide: function (showOrHide) {
            var $div = this.$dialog || this.$loadingPlaceholder;
            if ($div) {
                $div.toggle(showOrHide);
            }

            if (showOrHide && this.$dialog) { // assume user will now have viewed the real dialog
                this.hasRead = true;
            }
        },

        loadChildContent: function () {
            var $childContent = this.$preloadedDialog.find('.child-content');
            this.$dialog = this.$preloadedDialog;

            this.positionDialogUnderButton();
            this.showOrHide(true);

            if (!this.url) return;

            $('<div>', { 'class': 'child-content-loading' }).append(StackExchange.helpers.getSpinnerImg()).append($childContent);

            var thisDialog = this;

            this.fetchUrl().done(function (html) {
                $childContent.html(html);
                thisDialog.afterLoad();
            });
        },

        loadDialog: function () {
            if (this.isLoading()) return;

            this.$loadingPlaceholder = this.getLoadingPlaceholder();
            $('.js-topbar-dialog-corral').append(this.$loadingPlaceholder);
            this.positionDialogUnderButton();
            this.showOrHide(true);

            var thisDialog = this;

            this.fetchUrl()
                .done(function (html) {
                    if (!html.length) {
                        StackExchange.helpers.showErrorPopup(thisDialog.button.$button.parent(), 'An error occurred while loading - please try again.');
                    } else {
                        thisDialog.$dialog = $(html);
                        $('.js-topbar-dialog-corral').append(thisDialog.$dialog);
                        thisDialog.afterLoad();

                        // because the user could toggle the placeholder, its visibilty takes precedence over the original intent
                        var showOrHide = thisDialog.$loadingPlaceholder.is(':visible');

                        thisDialog.positionDialogUnderButton();
                        thisDialog.showOrHide(showOrHide);
                    }
                })
                .fail(function(xhr, text, error) {
                    console.log(error);
                })
                .always(function () {
                    thisDialog.$loadingPlaceholder.remove();
                    thisDialog.$loadingPlaceholder = null;
                });
        },

        afterLoad: function () {
            // inheritors may override, but should call this.supr()

            // TODO - fix tracking?
            // TRACK ALL THE THINGS
            //StackExchange.gps.bindTrackClicks(this.$dialog);
        },

        getLoadingPlaceholder: function () {
            var imgHtml = $('<div/>').append(StackExchange.helpers.getSpinnerImg()).html();
            var html = [
                '<div class="topbar-dialog ', this.cssClass, ' dno">',
                    '<div class="header">', imgHtml, '</div>',
                    '<div class="modal-content"/>',
                '</div>'
            ];
            return $(html.join(''));
        },

        positionDialogUnderButton: function () {
            // because the mod inbox button isn't with all the rest (and is in a different, absolutely-positioned container), 
            // we have to take measurements from the first button on the page and move the others over
            var top = this.button.$button.outerHeight(),
                elem = this.$dialog || this.$loadingPlaceholder,
                positioningParent = elem.parent();

            // can't use jquery's offsetParent() because it relies on the browser's Element.offsetParent which
            // returns null for display:none elements
            while (positioningParent.not("body").length && positioningParent.css("position") === "static")
                positioningParent = positioningParent.parent();

            positioningParent = positioningParent.length ? positioningParent : $("body");

            var y = this.button.$button.offset().left - positioningParent.offset().left;
            y = positioningParent.outerWidth() - y - this.button.$button.outerWidth();
            var css = { 'top': top, 'right': y };
            (this.$dialog || this.$loadingPlaceholder).css(css);
        },

        fetchUrl: function () {
            log('fetching ' + this.url);

            var result = $.ajax({
                type: 'GET',
                url: this.url,
                dataType: 'html'
            });

            return result;
        },

        markAsRead: function () {
            this.button.markAsRead();

            if (this.isLoaded()) {
                this.$dialog.find('.unread-item').removeClass('unread-item');
            }
        },

        handleRealtimeMessage: function (json) {
            // inheritors may override, but by default, just make the next click fetch fresh
            this.clearLoadedDialog();
        },

        clearLoadedDialog: function () {
            if (this.isLoaded()) {
                this.$dialog.remove();
                this.$dialog = null;
                this.hasRead = false;
            }
        }
    });

    /*
        Base class of icon buttons in the topbar, e.g. the Inbox button,
        that allows loading and displaying its associated Dialog.
    */
    var Button = klass({ // declare instance variables

        // these will be set in inheritors' declarations
        name: '',
        selector: '',
        dialog: null,

        // these will be set during initialize
        $button: null,
        onClass: '',
        unreadCountPrefix: '',
        queuedUnreadCount: 0,
        showsOnMouseOver: false
    })
    .methods({
        initialize: function () { // automatically called by klass during construction

            this.dialog.name = name;
            this.dialog.button = this;
            dialogs.push(this.dialog);

            // "this" inside the jquery click event is the clicked element
            var thisButton = this;
            this.$button = $(this.selector);
            this.$button.click(function () { thisButton.toggle(); return false; /* prevent navigation */ });

            // if any of the network-level dialogs are visible, mousing over another network button will show it
            if (this.showsOnMouseOver) {
                this.$button.mouseover(function (e) {
                    thisButton.showOnMouseOver();
                });
            }

            this.onClass = 'is-selected' + (this.onClass ? ' ' : '') + this.onClass;
        },

        toggle: function (showOrHide, preventMarkAsRead) {
            showOrHide = typeof showOrHide == 'boolean' ? showOrHide : !this.$button.hasClass(this.onClass);
            this.$button.toggleClass(this.onClass, showOrHide);
            this.$button.attr('aria-expanded', showOrHide);
            this.dialog.toggle(showOrHide, preventMarkAsRead);
        },

        showOnMouseOver: function () {
            // https://meta.stackexchange.com/questions/210177/dont-require-a-click-to-switch-between-sites-inbox-and-achievements-on-the-ne
            var shouldShow = false;

            // find out if any buttons/dialogs are visible
            for (var i = 0; i < buttons.length; i++) {
                var b = buttons[i];
                if (b != this && b.showsOnMouseOver && b.isOn()) {
                    shouldShow = true;
                    break;
                }
            }

            if (shouldShow) {
                // quickly moving between button/dialog pairs shouldn't clear unread indicators
                this.toggle(true, /*preventMarkAsRead*/true);
            }
        },

        isOn: function () {
            return this.$button.hasClass(this.onClass);
        },

        markAsRead: function () {
            this.$button.find('.unread-count, .js-unread-count').text('0').fadeOut();

            var unreadClass = this.$button.data('unread-class');
            if (unreadClass) {
                this.$button.removeClass(unreadClass);
            }

            this.dequeuePendingUnreadCount();
        },

        dequeuePendingUnreadCount: function () {
            if (!this.queuedUnreadCount) return;

            this.setUnreadCount(this.queuedUnreadCount);
            this.queuedUnreadCount = 0;
            this.dialog.clearLoadedDialog();
        },

        setUnreadCount: function (value) {
            if (value === undefined) {
                // do nothing
            }
            else if (value <= 0) {
                this.queuedUnreadCount = 0;

                if (!this.isOn()) { // don't muck w/ counts if we're viewing
                    this.markAsRead();
                }
            }
            else if (value > 0) {

                if (this.isOn()) {
                    this.queuedUnreadCount = value;
                }
                else {
                    var $count = this.$button.find('.js-unread-count');
                    $count.text(this.unreadCountPrefix + value).fadeIn();

                    this.addUnreadClass();

                    this.dialog.clearLoadedDialog();
                }
            }
        },

        addUnreadClass: function () {
            var unreadClass = this.$button.data('unread-class');
            if (unreadClass) {
                this.$button.addClass(unreadClass);
            }
        },

        handleRealtimeMessage: function (json) {
            // inheritors may override
        }
    });


    // subclasses of the above, organized by dialog/button pairing (i had to declare dialogs first, so buttons could instantiate them)

    var SiteSwitcherDialog = Dialog.extend({
        url: '/topbar/site-switcher',
        cssClass: 'siteSwitcher-dialog',

        $searchItems: null
    })
    .methods({

        afterLoad: function () {
            // NOTE: this is after the child content (i.e. the filterable site list) is loaded

            // allow filtering of sites
            this.$dialog.find('.js-site-filter-txt').typeWatch({ highlight: false, wait: 250, captureLength: -1, callback: $.proxy(this.filterSites, this) });
            this.$searchItems = this.$dialog.find('.js-other-sites li').clone().map(function () {
                return { title: $('.site-icon', this).attr('title').toLowerCase(), description: $('.site-desc', this).text().toLowerCase(), hostname: $('a', this).first().attr('href'), li: this };
            });

            // set up scrolling to the bottom of the 2nd site in the full list on search box focus
            var dialog = this.$dialog;
            this.$dialog.find('.js-site-filter-txt').focus(function () {
                var dialogBottom = dialog.offset().top + dialog.height();
                var secondSite = dialog.find('.other-sites li:nth-child(2)');
                var secondSiteBottom = secondSite.offset().top + secondSite.height();

                if (secondSiteBottom > dialogBottom) {
                    dialog.animate({
                        scrollTop: dialog.scrollTop() + secondSiteBottom - dialogBottom
                    }, 750);
                }
            });

            this.supr();
        },

        doSearch: function (items, text, track) {
            var results;
            text = text.toLowerCase();
            var matches = [];
            $.each(items, function (i, elem) {
                var result = { index: i, li: elem.li, item: elem },
                    titleIndex = elem.title.indexOf(text);

                if (elem.title == text) // exact title match
                    result.priority = 1;
                else if (titleIndex == 0) // begins-with title match
                    result.priority = 2;
                else if (titleIndex > -1) // in-title match
                    result.priority = 3;
                else if (elem.description.indexOf(text) > -1) // in-description match
                    result.priority = 4;
                else if (elem.hostname.indexOf(text) > -1) // in hostname match
                    result.priority = 5;

                if (result.priority)
                    matches.push(result);
            });
            results = matches.sort(function (a, b) {
                return a.priority - b.priority || a.index - b.index;
            });

            return results;
        },

        filterSites: function (text) {
            var $container = $('.js-other-sites'),
                $items = this.$searchItems;

            $container.empty();

            if (text != '') {
                $items = this.doSearch($items, text, true);
            }

            $container.append($items.map(function (elem) { return this && this.li || elem.li; }));
        }
    });
    var SiteSwitcherButton = Button.extend({
        name: 'SiteSwitcher',
        selector: '.js-site-switcher-button',
        dialog: new SiteSwitcherDialog(),
        showsOnMouseOver: false,
        onClass: 'icon-site-switcher-on'
    });


    var InboxDialog = Dialog.extend({
        url: '/topbar/inbox',
        cssClass: 'inbox-dialog'
    })
        .methods({
            afterLoad: function () {
                this.supr();
                this.hookupMarkAllAsRead(this);
                this.hookupMarkAsReadOnClick(this);
                this.hookupReadUnreadToggles(this);
                this.enableOrDisableMarkAllAsRead(this);
            },

            hookupMarkAsReadOnClick: function (context) {
                var self = context;
                var dialog = context.$dialog;

                dialog.find('.js-readable-inbox-item').mousedown(function (e) {
                    if (e.which != KEY_CODE.LEFT_MOUSE && e.which != KEY_CODE.MIDDLE_MOUSE)
                        return;
                    var $target = $(e.currentTarget);
                    if (!$target.hasClass('unread-item')) {
                        return;
                    }
                    self.clickMarkAsRead($target, self, INBOX_POPUP_ITEM_EVENT_SOURCE);
                });

                dialog.find('.js-readable-inbox-item').keyup(function (e) {
                    if (e.which != 13)
                        return;
                    var $target = $(e.currentTarget);
                    if (!$target.hasClass('unread-item')) {
                        return;
                    }
                    self.clickMarkAsRead($target, self, INBOX_POPUP_ITEM_EVENT_SOURCE);
                });
            },

            hookupMarkAllAsRead: function (context) {
                var self = context;
                var dialog = context.$dialog;
                // hooks up events for mark as read button
                dialog.find('.js-mark-all-as-read').click(function () {
                    $.ajax({
                        type: 'POST',
                        url: '/topbar/mark-all-as-read',
                        data: { fkey: settings.fkey },
                        dataType: 'json'
                    }).done(function (result) {
                        context.button.setUnreadCount(result.unreadMessagesCount);
                        if (context.isLoaded()) {
                            self.markMessageAsRead(dialog.find('.unread-item'));
                        }
                        self.enableOrDisableMarkAllAsRead(self);
                        $('.js-inbox-row.unread-item').removeClass('unread-item');
                    }).fail(function () {
                        StackExchange.helpers.showErrorPopup(context.$dialog, ERROR_WHILE_UPDATING_NOTIFICATION_TEXT);
                    });
                });
            },

            hookupReadUnreadToggles: function (context) {
                var self = context;
                var dialog = context.$dialog;

                dialog.find('.js-toggle-read').mousedown(function (e) {
                    if (e.which == KEY_CODE.LEFT_MOUSE) {
                        var $element = $(this).closest('.js-readable-inbox-item');
                        self.clickMarkAsRead($element, self, UNREAD_MESSAGE_ICON_EVENT_SOURCE);
                    }
                    e.stopImmediatePropagation();
                });

                dialog.find('.js-toggle-unread').mousedown(function (e) {
                    if (e.which == KEY_CODE.LEFT_MOUSE) {
                        var $element = $(this).closest('.js-readable-inbox-item');
                        self.clickMarkAsUnread($element, self);
                    }
                    e.stopImmediatePropagation();
                });

                dialog.find('.js-toggle-read').keyup(function (e) {
                    if (e.which == KEY_CODE.ENTER) {
                        var $element = $(this).closest('.js-readable-inbox-item');
                        self.clickMarkAsRead($element, self, UNREAD_MESSAGE_ICON_EVENT_SOURCE);
                    }
                    e.stopImmediatePropagation();
                });

                dialog.find('.js-toggle-unread').keyup(function (e) {
                    if (e.which == KEY_CODE.ENTER) {
                        var $element = $(this).closest('.js-readable-inbox-item');
                        self.clickMarkAsUnread($element, self);
                    }
                    e.stopImmediatePropagation();
                });
            },

            clickMarkAsRead: function ($element, self, source) {
                $.ajax({
                    type: 'POST',
                    url: '/topbar/mark-inbox-as-read',
                    data: { inboxId: $element.attr('id'), relatedPostId: $element.attr('relatedPostId'), source: source, fkey: settings.fkey },
                    dataType: 'json'
                }).done(function (result) {
                    self.button.setUnreadCount(result.unreadMessagesCount);
                    self.markMessageAsRead($element);
                    self.enableOrDisableMarkAllAsRead(self);
                }).fail(function (jqXHR) {
                    if (jqXHR.status == 0 || !jqXHR.getAllResponseHeaders()) {
                        // these are all signs that the request was aborted due to the page being unloaded,
                        // and the fail branch is hit in response to this, and not in response to an actual failure.
                        // therefore in this case, but out early, and dont show an error toast.
                        return;
                    }
                    StackExchange.helpers.showErrorPopup(context.$dialog, ERROR_WHILE_UPDATING_NOTIFICATION_TEXT);
                });
            },

            clickMarkAsUnread: function ($element, self) {
                $.ajax({
                    type: 'POST',
                    url: '/topbar/mark-inbox-as-unread',
                    data: { inboxId: $element.attr('id'), relatedPostId: $element.attr('relatedPostId'), fkey: settings.fkey },
                    dataType: 'json'
                }).done(function (result) {
                    self.button.setUnreadCount(result.unreadMessagesCount);
                    self.markMessageAsUnread($element);
                    self.enableOrDisableMarkAllAsRead(self);
                }).fail(function () {
                    StackExchange.helpers.showErrorPopup(context.$dialog, ERROR_WHILE_UPDATING_NOTIFICATION_TEXT);
                });
            },

            enableOrDisableMarkAllAsRead: function (context) {
                const $markAllAsReadButton = context.$dialog.find('.js-mark-all-as-read');
                var count = context.button.$button.find('.js-unread-count').text();
                $markAllAsReadButton.prop('disabled', count == 0); 
            },

            markAsRead: function () {
                if (StackExchange.settings.topBar != null && StackExchange.settings.topBar.enableInboxManagement) {
                    return;
                }
                Dialog.prototype.markAsRead.apply(this);
            },

            markMessageAsUnread: function ($messageLiElement) {
                $messageLiElement.addClass('unread-item').removeClass('read-item');
                $messageLiElement.find('.js-toggle-read').removeClass('d-none');
                $messageLiElement.find('.js-toggle-unread').addClass('d-none');
                $('#' + $messageLiElement.attr('id') + '.js-inbox-row').addClass('unread-item');
            },

            markMessageAsRead: function ($messageLiElement) {
                $messageLiElement.removeClass('unread-item').addClass('read-item');
                $messageLiElement.find('.js-toggle-read').addClass('d-none');
                $messageLiElement.find('.js-toggle-unread').removeClass('d-none');
                $('#' + $messageLiElement.attr('id') + '.js-inbox-row').removeClass('unread-item');
            }
        });
    var InboxButton = Button.extend({
        name: 'Inbox',
        selector: '.js-inbox-button',
        dialog: new InboxDialog(),
        showsOnMouseOver: false
    })
    .methods({
        handleRealtimeMessage: function (json) {
            this.setUnreadCount(json.UnreadInboxCount);
        },

        setUnreadCount: function (value) {
            if (StackExchange.settings.topBar != null && StackExchange.settings.topBar.enableInboxManagement) {
                if (value === undefined) {
                    // do nothing
                }
                else if (value <= 0) {
                    this.queuedUnreadCount = 0;
                    this.markAsRead();
                }
                else if (value > 0) {
                    var $count = this.$button.find('.js-unread-count');
                    $count.removeClass("d-none");
                    $count.text(this.unreadCountPrefix + value).fadeIn();
                    this.addUnreadClass();
                }
            } else {
                Button.prototype.setUnreadCount.apply(this, arguments);
            }
        },

    });


    var AchievementsDialog = Dialog.extend({
        url: '/topbar/achievements',
        cssClass: 'achievements-dialog'
    })
    .methods({
        afterLoad: function () {
            this.alignRep();
            this.bindDateGroupToggles();
            this.displayUtcTime();
            this.supr();
        },

        alignRep: function () {
            // HACK: everyone be hatin' on <table>, so we need to ensure the rep "column" is the same width all the way down
            var $cols = this.$dialog.find('.js-items .js-faux-column'),
                maxChars = 0;

            $cols.filter('.js-rep-change').each(function () {
                var chars = $.trim($(this).text()).length;
                if (chars > maxChars) {
                    maxChars = chars;
                }
            });

            if (maxChars > 0) {
                $cols.width(maxChars * 6); // TODO: actually measure what we really need, but this works from 2 chars up to 4 chars
            }
        },

        bindDateGroupToggles: function () {
            this.$dialog.find('.js-date-group-toggle').click(function () {
                var $toggle = $(this),
                    $group = $toggle.closest('.js-date-group'),
                    $items = $group.find('.js-items'),
                    $summation = $group.find('.rep-site-container');

                $toggle.find('.date-group-toggle').toggleClass('toggle-hidden');
                $items.add($summation).fadeToggle('fast');
            });
            this.$dialog.find('.rep-site-container').on('click', function (e) {
                e.stopImmediatePropagation();
            });
        },

        displayUtcTime: function () {
            var $dialog = this.$dialog,
                setTime = function () {
                    var now = new Date();
                    var h = now.getUTCHours(),
                        m = now.getUTCMinutes();
                    if (h < 10) h = "0" + h;
                    if (m < 10) m = "0" + m;
                    $dialog.find('.js-utc-time').text(h + ":" + m);
                };

            setTime();
            setInterval(setTime, 1000 * 60); // TODO: could unbind this when the dialog is hidden
        }
    });
    var AchievementsButton = Button.extend({
        name: 'Achievements',
        selector: '.js-achievements-button',
        dialog: new AchievementsDialog(),
        unreadCountPrefix: '+',
        showsOnMouseOver: true
    })
    .methods({
        handleRealtimeMessage: function (json) {
            // this is tricky, as the icon can light up when there's been no rep changes (e.g. new badge)
            // start by determining if we only need to light up
            var onlyLightUp = (json.UnreadRepCount || 0) === 0 && json.UnreadNonRepCount > 0;

            if (onlyLightUp) {
                this.addUnreadClass();
            }
            else {
                this.setUnreadCount(json.UnreadRepCount);
            }
        }
    });

    function log(message) {
        if (!StackExchange.options.enableLogging) return;
        console.log('topbar: ' + message);
    };

    function isButtonClick(clickedElement) {
        for (var i = 0; i < buttons.length; i++) {
            var $button = buttons[i].$button;
            if ($button && $button[0] == clickedElement) {
                return true;
            }
        }
        return false;
    };

    function hideAll() {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].toggle(false);
        }
    };

    function handleRealtimeMessage(data) {
        var json;
        if (!data || !(json = JSON.parse(data))) return;

        log('realtime message - ' + data);

        // each top-level property on the json corresponds to a button name
        for (var prop in json) {
            for (var i = 0; i < buttons.length; i++) {
                if (prop == buttons[i].name) {
                    buttons[i].handleRealtimeMessage(json[prop]);
                    break;
                }
            }
        }
    };

    function initSearchInteractions() {

        var $header = $('.js-top-bar'),
            $input = $('.js-search-field');

        var mousedownHappened = false;

        $input.on({
            'focus': function () {
                $header.addClass('_search-open');
            },
            'blur': function () {
                if (mousedownHappened) {
                    $input.focus();
                    mousedownHappened = false;
                } else {
                    $header.removeClass('_search-open');
                }
            },
            'keydown': function (e) {
                if (e.keyCode == 27) {
                    $input.blur();
                }
            }
        });
    }

    function initSearchInteractionsForNarrowView() {
        var $searchbar = $('.js-searchbar'),
            $searchbarTrigger = $('.js-searchbar-trigger'),
            $searchField = $('.js-search-field'),
            triggerOpenClass = 'is-selected',
            searchbarOpenClass = 's-topbar--searchbar__open';

        function toggleSearch(yesno) {
            $searchbarTrigger.toggleClass(triggerOpenClass, yesno);
            $searchbar.toggleClass(searchbarOpenClass, yesno);
        }
        var wasClosedOnMouseDown = true; // default is true (which in particular makes enter pressing work)
        $searchbarTrigger
            .on("mousedown", function () {
                /* if search is open at this point, the mousedown would cause a blur and thus the closing is taken care of,
                    we just have to remember this so we don't reopen on click. */
                wasClosedOnMouseDown = !$searchbar.hasClass(searchbarOpenClass);
            })
            .on('click', function (e) {
                e.preventDefault();
                if (wasClosedOnMouseDown) {
                    toggleSearch(true);
                    $searchField.focus();
                }
                wasClosedOnMouseDown = true;
        });

        /* Close the searchbar when there's a blur event inside it that isn't immediately followed by a re-focus */
        var closeAfterBlur = StackExchange.helpers.DelayedReaction(function () {
            toggleSearch(false);
        }, 0);
        $('.js-searchbar').focusout(closeAfterBlur.trigger).focusin(closeAfterBlur.cancel);
    }

    function initGdprBanner() {
        // cookie is set server-side
        var $banner = $('#js-gdpr-consent-banner');
        var $btn = $banner.find('.js-notice-close');
        $btn.click(function () {
            $btn.prop('disabled', true);
            $.ajax({
                method: 'POST',
                url: '/accounts/accept-gdpr-consent-banner',
                data: { fkey: settings.fkey },
                dataType: "json",
                success: function (success) {
                    if (success) {
                        $banner.remove();
                    }
                },
                complete: function () { $btn.prop('disabled', false); }
            });

        });
    }

    // so we can iterate over the above klasses
    var buttons = [],
        dialogs = [];

    return {
        init: function (isAnonymous) {
            if (window.devicePixelRatio >= 1.5) {
                $('.js-avatar-me').attr('src', function (i, a) {
                    return a.replace('?s=24', '?s=48');
                });
            }

            // these string names, e.g. 'Inbox', will be used in realtime messages
            var inbox = new InboxButton();
            var achievements = new AchievementsButton();
            buttons.push(inbox);
            buttons.push(achievements);
            buttons.push(new SiteSwitcherButton());
            
            // clicking anywhere else closes dialogs
            $(document).click(function (e) {
                if (!isButtonClick(e.target) && !$.contains($('.js-topbar-dialog-corral')[0], e.target)) {
                    hideAll();
                }
            });

            // No point in loading unread counts for anonymous users
            // plus it helps us with not setting a prov cookie for 404 requests
            var unreadCountData =
            {
                UnreadInboxCount: 0,
                UnreadRepCount: 0,
                UnreadNonRepCount: 0
            };

            if (!isAnonymous) {
                $.get("/topbar/get-unread-counts", function (data) {
                    if (!data) return;

                    unreadCountData = data;
                    inbox.handleRealtimeMessage(unreadCountData);
                    achievements.handleRealtimeMessage(unreadCountData);
                });
            }

            inbox.handleRealtimeMessage(unreadCountData);
            achievements.handleRealtimeMessage(unreadCountData);

            // TODO remove?
            /* Cheap hack to make the top bar not completely unusable in browsers that don't support flexbox.
             * All browsers that we support *do* have flexbox, so this is just a case of being nice to people
             * stuck on old browsers. We won't spend any significant time making this better.
             */
            var bs = document.body.style;
            if (!("justifyContent" in bs || "WebkitJustifyContent" in bs)) {
                $(".js-top-bar *:visible").css({ "display": "inline-block", "white-space": "nowrap", "vertical-align": "middle" }).not(".-logo, .-logo *, svg, .-badges *").css("width", "auto");
            }

            initSearchInteractions();
            initSearchInteractionsForNarrowView();
            initGdprBanner();
        },

        hideAll: hideAll,
        handleRealtimeMessage: handleRealtimeMessage
    };
})();