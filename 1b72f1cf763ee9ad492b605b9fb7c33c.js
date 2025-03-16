$(function () {
	/* создание отложенных действий */
	if (GLOBAL) {
		GLOBAL.events = {
			subscriptions: {},
			/* Обнуляет все подписки */
			reset: function () {
				GLOBAL.events.subscriptions = {}
			},
			/* Подписывает на событие */
			subscribe: function (message, callback) {
				if (typeof GLOBAL.events.subscriptions[message] === 'undefined') {
					GLOBAL.events.subscriptions[message] = [];
				}
				GLOBAL.events.subscriptions[message].push(callback);
			},
			/* Выполняет событие */
			trigger: function (message, params) {
				if (typeof GLOBAL.events.subscriptions[message] === 'undefined') {
					return;
				}
				var subscribers = GLOBAL.events.subscriptions[message];
				for (key in subscribers) {
					subscribers[key](params);
				}
			}
		}
	}
});
(function( w ){
    var loadJS = function( src, cb, ordered ){
        "use strict";
        var tmp;
        var ref = w.document.getElementsByTagName( "script" )[ 0 ];
        var script = w.document.createElement( "script" );

        if (typeof(cb) === 'boolean') {
            tmp = ordered;
            ordered = cb;
            cb = tmp;
        }

        script.src = src;
        script.async = !ordered;
        ref.parentNode.insertBefore( script, ref );

        if (cb && typeof(cb) === "function") {
            script.onload = cb;
        }
        return script;
    };
    if( typeof module !== "undefined" ){
        module.exports = loadJS;
    }
    else {
        w.loadJS = loadJS;
    }
}( typeof global !== "undefined" ? global : this ));

(function( w ){
	var loadCSS = function( href ){
		"use strict";
		if (!document.querySelectorAll('link[href="' + href +'"]').length) {
			var head  = document.getElementsByTagName('head')[0];
			var link  = document.createElement('link');
			link.rel  = 'stylesheet';
			link.type = 'text/css';
			link.href = href;
			link.media = 'all';
			head.appendChild(link);
		}
	};
	w.loadCSS = loadCSS;
}( typeof global !== "undefined" ? global : this ));

// PolyFill for "isIntersecting"
// https://github.com/w3c/IntersectionObserver/issues/211#issuecomment-309144669
if ('IntersectionObserver' in window &&
    'IntersectionObserverEntry' in window &&
    'intersectionRatio' in window.IntersectionObserverEntry.prototype &&
    !('isIntersecting' in IntersectionObserverEntry.prototype)) {

    Object.defineProperty(window.IntersectionObserverEntry.prototype, 'isIntersecting', {
        get: function () {
            return this.intersectionRatio > 0
        }
    })
}


function lazyload() {
    var lazyImages = [].slice.call(document.querySelectorAll(".lazyload"));

    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
        var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var lazyImage = entry.target;
                    lazyloadImage(lazyImage);
                    lazyImage.classList.remove("lazyload");
                    lazyImageObserver.unobserve(lazyImage);
                }
            });
        }, {
            rootMargin: "100px"
        });

        lazyImages.forEach(function(lazyImage) {
            lazyImageObserver.observe(lazyImage);
        });
    } else {
        setTimeout(function() {
            lazyImages.forEach(function(lazyImage) {
                lazyloadImage(lazyImage)
            });
        }, 1000)
    }
}

function lazyloadImage(image) {
    if (image.dataset && image.dataset.srcset) {
        image.srcset = image.dataset.srcset;
    }

    if (image.dataset && image.dataset.src) {
        // setTimeout(function() {
            image.src = image.dataset.src;
        // }, 500)
    }
}

function lazyloadScript(selectors, callback) {
    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype) {
        var scriptObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    callback.apply();
                    scriptObserver.disconnect();
                }
            });
        });
        var els = [].slice.call(document.querySelectorAll(selectors));
        els.forEach(function(el) {
            scriptObserver.observe(el);
        });
    } else {
        callback.apply();
    }
}


// PolyFill for nodelist.foreach()
// https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
// if (window.NodeList && !NodeList.prototype.forEach) {
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }


/**
 *  version 2.0
 *
 *
 *  ==============================================================
 *  Triggers
 *  ==============================================================
 *
 *  initialized.the-in-scroll
 *  refresh.the-in-scroll
 *  refreshed.the-in-scroll
 *  up-pos.the-in-scroll
 *  down-pos.the-in-scroll
 *
 *  пример:
 *  $('.the-in-scroll').on( 'up-pos.the-in-scroll', function( event, data ){ ... })

 *  data = {
 *      eventType   : "up-pos"
 *      plugin      : plugin element
 *      scroliing   : 50                    - позиция строла в %
 *      scroller    : {
 *          position : {
 *              pc : 34,                    - позиция кастомного строллера в %
 *              px : 40,                    - позиция кастомного строллера в px
 *          }
 *          size : {
 *              pc : 34,                    - размер кастомного строллера в %
 *              px : 40,                    - размер кастомного строллера в px
 *          }
 *      }
 *      content   : {
 *          position : {
 *              pc : 34,                    - позиция проскрола контента в %
 *              px : 40,                    - позиция проскрола контента в px
 *          }
 *      }
 *      scrollingline : {
 *          size : {
 *              px : 40,                    - размер кастомной полосы прокрутки в px
 *          }
 *      }
 *  }
 *
 *
 *  ==============================================================
 *  Listener
 *  ==============================================================
 *
 *  Скроллинг до нужной позиции
 *
 *  scroll-to.the-in-scroll                     - скроллинг до переданной позиции
 *  @param { number | string }      position    - позиция для доскрола, принимает число, строку-число или строку со знаком "%" в конце - ОБЯЗАТЕЛЬНЫЙ параметр
 *  @param { number  }              duration    - время анимации скролла, по умрочанию [ 500 ]
 *
 *  scroll-up.the-in-scroll                     - скроллинг в начало
 *  @param { number | string }      position    - позиция для доскрола, принимает число, строку-число или строку со знаком "%" в конце - не обязательный параметр
 *  @param { number  }              duration    - время анимации скролла, по умрочанию [ 500 ]
 *
 *  scroll-down.the-in-scroll                   - скроллинг в конец
 *  @param { number | string }      position    - позиция для доскрола, принимает число, строку-число или строку со знаком "%" в конце - не обязательный параметр
 *  @param { number  }              duration    - время анимации скролла, по умрочанию [ 500 ]
 *
 *  параметры: { number | string } [, { number } ]
 *  примеры:
 *  $('.the-in-scroll').trigger( 'scroll-to.the-in-scroll', [ 50 ] )         - px size
 *  $('.the-in-scroll').trigger( 'scroll-up.the-in-scroll', [ 50, 100] )     - px size, duration animation
 *  $('.the-in-scroll').trigger( 'scroll-down.the-in-scroll', [ '50%' ] )    - percent size
 *  $('.the-in-scroll').trigger( 'scroll-to.the-in-scroll', [ '50%', 100 ] ) - percent size, duration animation
 *
 *  --------------------------------------------------------------
 *  add-scrolling-trigger.the-in-scroll
 *  --------------------------------------------------------------
 *
 *  Добавление тригера прокрутки больше или менбше позиции скрола
 *
 *  Принимает 2-7 параметров или объект с параметрами, обязательные первые 2 параметра ( name и position )
 *
 *  @param { string }           name        - принимает строку - название тригера
 *  @param { number | string }  position    - позиция для срабатывания, принимает число, строку-число или строку со знаком "%" в конце
 *  @param { '<', '>' }         sign        - знак для условия, по умолчанию [ ">" ]
 *  @param { boolean }          down        - флаг - отсчет вести от низа, по умолчанию [ false ]
 *  @param { boolean }          everytime   - флаг - срабатывать один раз за попадание в область, второй раз сработает после выхода из области, по умолчанию [ false ]
 *  @param { boolean }          move        - флаг - тригер сработает только при изменении прокрутки, по умолчанию [ false ]
 *  @param { boolean }          once        - флаг - тригер сработает один раз и будет удален, по умолчанию [ false ]
 *
 *  параметры:  { string }, { number | string } [, { '<', '>' }, { boolean }, { boolean }, { boolean }, { boolean } ]
 *  примеры:
 *  $('.the-in-scroll').trigger( 'add-scrolling-trigger.the-in-scroll', [ 'trigger-name', 100, );
 *  $('.the-in-scroll').trigger( 'add-scrolling-trigger.the-in-scroll', [ 'trigger-name', 100, '<', true ] );
 *  $('.the-in-scroll').trigger( 'add-scrolling-trigger.the-in-scroll', [ 'trigger-name', 100, '<', false, false, true ] );
 *  $('.the-in-scroll').trigger( 'add-scrolling-trigger.the-in-scroll', [ 'trigger-name', 100, '<', false, false, false, true ] );
 *
 *  пример с объектом параметров :
 *  $('.live.js__custom-scroll').trigger('add-scrolling-trigger.the-in-scroll', [ {
 *      name: 'trigger-name',
 *      position: 1,
 *      sign: '<',
 *      down: false,
 *      everytime: true,
 *      move: true,
 *      once: false
 *  } ]);
 *
 *  --------------------------------------------------------------
 *  clear-content.the-in-scroll
 *  --------------------------------------------------------------
 *
 *  Удаление контента
 *
 *  параметры: [ { boolean }, { number } ]                                      - нет обязательных параметров
 *  примеры:
 *  $('.the-in-scroll').trigger('clear-content.the-in-scroll')                  - просто удалит контент
 *  $('.the-in-scroll').trigger('clear-content.the-in-scroll', [ true ] )       - удалит через slideUp со скоростью по умолчанию установленную в плагине [ 500 ]
 *  $('.the-in-scroll').trigger('clear-content.the-in-scroll', [ true, 3000 ] ) - удалит через slideUp со скоростью 3000
 *
 *  --------------------------------------------------------------
 *  add-content.the-in-scroll
 *  --------------------------------------------------------------
 *
 *  Добавление контента
 *
 *  @param { object | string }   - принимает объект или строку обязательно состоящую из тега, которую сам преобразует в объект
 *  @param { boolean }           - флаг добавить перед, принимает true или false
 *  @param { boolean }           - добавить через slideDown со скоростью по умолчанию [500]
 *  @param { number }            - скороcть для добавления через slideDown
 *  параметры: { object | string } [ , { boolean }, { boolean }, { number } ]   - обязательным является только первый параметр
 *
 *  примеры:
 *  $('.live').trigger('add-content.the-in-scroll', [ '<div>dasdasd</div>', true, true, 5000 ])
 *  $('.live').trigger('add-content.the-in-scroll', [ $object, true, true, 5000 ])
 *
 *  --------------------------------------------------------------
 *
 *
 * */


;(function ( $, window, document, undefined ) {

	var theinScroll = function(el, options){

		var defaults = {

            show: true,                                 // visibility custom scroll                                         [ true ], false
            theme: "default",                           // theme custom sctoll                                              [ "default" ], "default-light"
            rtl: false,                                 // right to left text direction                                     [ false ] / true
            reservePlace: false,                        // reserve place for custom scroll                                  [ false ], true
            autoHide: true,                             // auto hide custom scroll when losing hover                        [ true ], false
            otherDirection: false,                      // display custom scroll from the other side than text direction    [ false ], true
            addingIndent: 10,                           // additional indent for hiding the real scroll element             [ 10 ], number
            scrollingDuration: 250,                     // duration scrolling animation                                     [ 250 ], number
            slideDuration:  500,                        // add and clear content slide duration                             [ 500 ], number

			buttons: {
				up:                         false,          // view up button                           [ false ], true, any characters
				scrollingUpSize:            '100',          // the value of the scroll content in px    [ '100' ], any number
				down:                       false,          // view down button                         [ false ], true, any characters
				scrollingDownSize:          '100'           // the value of the scroll content in px    [ '100' ], any number
			},

			endValues: {
				up:                         false,          // end display unit scroll up               [ false ], true, any characters
				down:                       false           // end display unit scroll down             [ false ], true, any characters
			},

			classes : {
				main :	"the-in-scroll",
				active: "m-active",
				banSelect: "the-in__ban-drag-select",
				banScroll: "the-in__ban-scroll"
			},

			triggers : {
				'all' : false,
				'initialized' : true,
				'refresh' : true,
				'refreshed' : true,
				'up-pos' : true,
				'down-pos' : true
			}

		};

		/**
		 * @create  { object }  this.$element           - main element
		 * @create  { object }  this.defOptions         - default options
		 * @create  { object }  this.userOptions        - user options
		 * @create  { object }  this.options            - extend options
		 * */
		var _this = this;
		_this.$element = $(el);
		_this.defOptions = defaults;
		_this.userOptions = options;
		_this.options = $.extend(true, {}, defaults, options);
		/**
		 * Origin element
		 * @protected
		 */
        _this._origin = false;

		/** reserved names */
		_this.prefix = '';
		_this.pluginNumber = 0;
		_this.frameResize = false;

		_this.$wrBox = false;
		_this.$box = false;
		_this.$boxFrame = false;
		_this.$container = false;
		_this.$containerFrame = false;
        _this.$content = false;
		_this.$upEndValue = false;
		_this.$downEndValue = false;
		_this.$scroll = false;
		_this.$scrollLine = false;
		_this.$scroller = false;
		_this.$scrollerTheme = false;

        _this.addedTriggers = false;

		_this.widthDefaultScroll = null;
		_this.percentSizeScroller = null;
		_this.stateScrollbarReservePlace = null;
		_this.widthCustomScroll = null;
		_this.percentSizeScroller = null;
		_this.pxSizeScroller = null;
		_this.sizeScrollLine = null;
		_this.topPercentScrollContent = null;
		_this.topPxScrollContent = null;
		_this.topPercentScroller = null;
		_this.topPxScroller = null;
		_this.scrollingPercentage = null;

		_this.startMoveScrollerPosition = null;
		_this.currentMoveScrollerPosiiton = null;
		_this.currentTopMoveScroller = null;
		_this.startMoveYPosition = null;

		this.init();
	};
	/**
	 *  @update { String } this.prefix          - перфикс классов
	 *  @update { String } this.pluginNumber    - уникальный класс с номером плагина
	 *  @update { Object } this._origin         - сохранненная реальная верстка
	 * */
	theinScroll.prototype.init = function(){
		var _this = this;
	// create prefix classes
		_this.prefix = _this.options.classes.main+'__';
	// create a unique name
		_this.pluginNumber = _this.prefix + $.now();
	// save origin html
		_this._origin = _this.$element.clone( true );
	// detach content, add a new html, creation of selectors, return content and hide default scroll
		_this.createMainHTML();
	// create block end value scroll
		_this.updateEndValues();
	// create html custom scroll
		if(_this.options.show) {
			// add settings classes
			if ( _this.options.autoHide )  _this.$element.addClass( _this.prefix + 'autohide' );
			if ( _this.options.otherDirection )  _this.$element.addClass( _this.prefix + 'direction' );
			if ( _this.options.reservePlace )  _this.$element.addClass(_this.prefix + 'reserve');
			// create new custom scroll
			_this.createCustomScroll();
		}
	// update status
		_this.refresh();
	// register events and listener
		_this.registerEvents();
		_this.registerEventsListener();
	// trigger initialized
		if ( _this.options.triggers.all || _this.options.triggers.initialized ) _this.setTrigger( 'initialized' )
	};

	theinScroll.prototype.registerEvents = function(){
		var _this = this;
		// resize box
		window[ _this.pluginNumber + '__box' ].onresize = function(){
			/* TODO remove */ //console.log('resize Frame update BOX ');
			_this.resizeFrameRefresh();
		};
		// resize container
		window[ _this.pluginNumber + '__container' ].onresize = function(){
			/* TODO remove */ //console.log('resize Frame update CONTAINER');
			_this.resizeFrameRefresh();
		};
		// scroll
		_this.$box.bind( 'scroll' ,function(){
			/* TODO remove */ //console.log('scroll update');
			_this.refresh();
		});
		_this.$scroller.on( "touchstart  mousedown", function( event ) {
			if ( event.type == "touchstart" ) {
				_this.bindMoveScroller( event.originalEvent.touches[ 0 ].clientY || event.originalEvent.changedTouches[ 0 ].clientY );
			} else if( event.type == "mousedown" && event.button == 0 ){
				_this.bindMoveScroller( event.pageY );
			}
			// отменяем "всплытие сообщений", чтобы не вызывался клик на тач-устройствах.
			event.stopPropagation();
			event.preventDefault();
		});
		// mouse up on screen
		$( window ).on( 'touchend  mouseup', function( event ){
			if ( event.type == "touchend" || event.type == "mouseup" && event.button == 0) {
				_this.unbindMoveScroller( event );
			}
		});
	};

	theinScroll.prototype.registerEventsListener = function(){
		var _this = this;
		_this.$element.on( 'scroll-to.' + _this.options.classes.main , function( event, position, duration ){
			//console.log('--- scroll-to position= '+ position + ' - duration = '+ duration);
			_this.scrollTo( position, duration );
		});
		_this.$element.on( 'scroll-up.' + _this.options.classes.main , function( event, position, duration ){
			//console.log('scroll-up position= '+ position + ' - duration = '+ duration);
			_this.scrollUp( position, duration );
		});
		_this.$element.on( 'scroll-down.' + _this.options.classes.main , function( event, position, duration ){
			//console.log('scroll-down position= '+ position + ' - duration = '+ duration);
			_this.scrollDown( position, duration );
		});
        _this.$element.on( 'add-scrolling-trigger.' + _this.options.classes.main , function( event, name, position, sign, down, everytime, move, once  ){
            _this.addScrollingTrigger( name, position, sign, down, everytime, move, once  );
        });
        _this.$element.on( 'add-content.' + _this.options.classes.main , function( event, content, prep, slide, duration ){
            _this.addContent( content, prep, slide, duration )
        });
        _this.$element.on( 'clear-content.' + _this.options.classes.main , function( event, slide, duration ){
            _this.clearContent( slide, duration )
        });
	};

	/**
	 * @update  { object }  this._origin
	 * @update  { string }  this.pluginNumber
	 * @update  { object }  this.$wrBox
	 * @update  { object }  this.$box
	 * @update  { object }  this.$container
	 * @update  { object }  this.$frame
	 * */
	theinScroll.prototype.createMainHTML = function(){
        var _this = this;
        // add base and theme classes
        _this.$element
            .addClass( _this.options.classes.main )
            .addClass( _this.prefix + _this.options.theme );
        // create html
		_this.$wrBox = $( '<div class="' + _this.prefix + 'wr-box"></div>' );
		_this.$box = $( '<div class="' + _this.prefix + 'box"></div>' );
		_this.$container = $( '<div class="' + _this.prefix + 'container"></div>' );
		_this.$content = $( '<div class="' + _this.prefix + 'content"></div>' );
		_this.$boxFrame = $( '<iframe name="' + _this.pluginNumber + '__box" class="' + _this.prefix + 'frame"></iframe>' );
		_this.$containerFrame = $( '<iframe name="' + _this.pluginNumber + '__container" class="' + _this.prefix + 'frame"></iframe>' );
        _this.$element
            .empty()
            .css ( 'overflow', 'hidden' )
            .append( _this.$wrBox.append( _this.$box.append( _this.$boxFrame , _this.$container.append( _this.$containerFrame, _this.$content ) ) ) );
        // hide default scroll
        _this.hideDefaultScroll();
        // return content
        _this.$content.append( _this._origin.clone( true )[ 0 ].childNodes );
    };

	/**
	 * @update  { object }  this.$upEndValue
	 * @update  { object }  this.$downEndValue
	 * */
	theinScroll.prototype.updateEndValues = function(){
		var _this = this;

		if ( _this.options.endValues.up ){
			if ( !_this.$upEndValue ) _this.$upEndValue = $( '<div class="' + _this.prefix + 'end-value ' + _this.prefix + 'up-end-value"></div>' );
			_this.$upEndValue.append( _this.options.endValues.up != true ? _this.options.endValues.up : '' );
			_this.$wrBox.append( _this.$upEndValue );
		}

		if ( _this.options.endValues.down ){
			if ( !_this.$downEndValue ) _this.$downEndValue = $( '<div class="' + _this.prefix + 'end-value ' + _this.prefix + 'down-end-value"></div>' );
			_this.$downEndValue.append( _this.options.endValues.down != true ? _this.options.endValues.down : '' );
			_this.$wrBox.append( _this.$downEndValue );
		}

	};

	/**
	 * @update  { object }  this.$scroll
	 * @update  { object }  this.$scrollLine
	 * @update  { object }  this.$scroller
	 * @update  { object }  this.$scrollerTheme
	 * @event   this.$scroll.contextmenu    - ban context menu on scrollbar
	 * @event   this.$buttonUp.click        - change _this.$box.scrollTop
	 * @event   this.$buttonDown.click      - change _this.$box.scrollTop
	 * */
	theinScroll.prototype.createCustomScroll = function(){
		var _this = this;

		_this.$scroll = $( '<div class="' + _this.prefix + 'scroll"></div>' );
		_this.$scrollLine = $( '<div class="' + _this.prefix + 'scroll-line"></div>' );
		_this.$scroller = $( '<div class="' + _this.prefix + 'scroller"></div>' );
		_this.$scrollerTheme = $( '<div class="' + _this.prefix + 'scroller-theme"></div>' );
		_this.$element.append( _this.$scroll.append( _this.$scrollLine.append( _this.$scroller.append( _this.$scrollerTheme ) ) ) );
		// ban context menu on scroll bar
		_this.$scroll.bind( 'contextmenu', function(){
			return false;
		});
		// click on scroll line for scrolling
		_this.$scrollLine.bind( 'click', _this, _this.scrollingByClickOnScrolline );
		// add up button
		if ( _this.options.buttons.up ){
			_this.$buttonUp = $( '<a class="' +_this.prefix+ 'button ' + _this.prefix + 'button-up"></a>' );
			_this.$buttonUp.append( _this.options.buttons.up != true ? _this.options.buttons.up : $( '<span class="' + _this.prefix + 'icon"></span>' ) );
			_this.$scroll.append( _this.$buttonUp ).addClass( _this.prefix + 'with-up' );
			_this.$buttonUp.click( function(){
				_this.$box.scrollTop( _this.$box.scrollTop() - parseInt( _this.options.buttons.scrollingUpSize ) );
			});
		}
		// add up button
		if ( _this.options.buttons.down ){
			_this.$buttonDown = $( '<a class="' +_this.prefix+ 'button ' + _this.prefix + 'button-down"></a>' );
			_this.$buttonDown.append( _this.options.buttons.down != true ? _this.options.buttons.down : $( '<span class="' + _this.prefix + 'icon"></span>' ) );
			_this.$scroll.append( _this.$buttonDown ).addClass( _this.prefix + 'with-down' );
			_this.$buttonDown.click( function(){
				_this.$box.scrollTop( _this.$box.scrollTop() + parseInt(_this.options.buttons.scrollingDownSize) );
			});
		}
	};

    /**
     * Update all params
     * */
	theinScroll.prototype.refresh = function(){
		var _this = this;
		if ( _this.options.triggers.all || _this.options.triggers.refresh ) _this.setTrigger( 'refresh' );
		_this.hideDefaultScroll();
		if( _this.options.show ) {
			_this.reservePlaceScroll();
			_this.setSizeScroller();
			_this.setTopScroller();
		}
		_this.scrollingPercentage = _this.getScrollingPercentage();
		_this.checkExtremePositionScroller();
        _this.checkAddedTriggers();
		if ( _this.options.triggers.all || _this.options.triggers.refreshed ) _this.setTrigger( 'refreshed' );
	};

    /**
     * @param { number | string }   to scrolling position
     * @param { number }            duration animation
     * */
	theinScroll.prototype.scrollUp = function( position, duration ){
	    //console.log( position  + ' '+ duration);
		this.scrollTo( !position ? 0 : position, duration );
	};

    /**
     * @param { number | string }   to scrolling position
     * @param { number }            duration animation
     * */
	theinScroll.prototype.scrollDown = function( position, duration ){
        var _this = this;
        if ( !position || _this.$container.height() < _this.$box.height() ){
            position = '100%';
        } else {
            position = this.toNumber(position);
            if ( position !== false ){
                position = _this.$container.height() - position - _this.$box.height();
            } else {
                position = '100%';
            }
        }
        _this.scrollTo( position, duration );
	};

    /**
     * @param { number | string }   to scrolling position
     * @param { number }            duration animation
     * */
	theinScroll.prototype.scrollTo = function( position, duration ){
		//console.log(' scrollTo = '+position+' dur = '+duration);
		position = this.toNumber( position );
		if ( position && position >= 0 || position == 0 ) {
			// console.log('===== scrollTo = '+position);
			var _this = this,
				duration = ( duration == 0 || ( duration && duration >= 0 ) ) ? duration : _this.options.scrollingDuration;
            //console.log('===== duration = '+duration);
			_this.$box.stop().animate({
				scrollTop: position
			}, duration);
		}
	};

	theinScroll.prototype.toNumber = function( number ){
		var _this = this;
		if ( !number ){
			return false;
		} else if ( typeof number == 'number' ){
			return number >= 0 ? number : 0;
		} else if ( typeof number == 'string' ){
			if ( number.indexOf( '%' ) >= 0 ){
				var	percent = parseInt( number.slice( 0, number.indexOf( '%' ) ) ),
					size = ( _this.$container.height() >= _this.$box.height() ) ? _this.$container.height() - _this.$box.height() : 0;
				return ( size / 100 * ( percent < 0 ? 0 : percent > 100 ? 100 : percent ) );
			} else {
				if ( parseInt( number ) >= 0 ) {
					return parseInt( number );
				} else {
					return false;
				}
			}
		}
		return false;
	};

	/**
	 * @update  { boolean }  this.frameResize
	 * */
	theinScroll.prototype.resizeFrameRefresh = function(){
		var _this = this;
		if ( !_this.frameResize ) _this.refresh();
		_this.frameResize = true;
		setTimeout(function(){
			_this.frameResize = false;
		}, 10);
	};

	/**
	 * @update  { number }  this.startMoveScrollerPosition
	 * @update  { number }  this.currentMoveScrollerPosiiton
	 * @update  { number }  this.startMoveYPosition
	 * */
	theinScroll.prototype.bindMoveScroller = function( positionY ){
		var _this = this;
		_this.$scroller.addClass( _this.options.classes.active );
		_this.startMoveScrollerPosition = parseInt( _this.$scroller.css( 'top' ) );
		_this.currentMoveScrollerPosiiton = _this.startMoveScrollerPosition;
		_this.startMoveYPosition = positionY;
		if ( event.type == 'touchstart' ){
			_this.banScroll();
			$(window).bind( 'touchmove.the-in__scroll', _this, _this.dragScroller );
		} else if ( event.type == 'mousedown' ){
			_this.banDragSelect();
			$(window).bind( 'mousemove.the-in__scroll', _this, _this.dragScroller );
		}
	};

	theinScroll.prototype.unbindMoveScroller = function( event ){
		var _this = this;
		_this.$scroller.removeClass( _this.options.classes.active );
		if ( event.type == "touchend" ) {
			_this.banScroll( false );
			$(window).unbind( 'touchmove.the-in__scroll', _this.dragScroller );
		} else if( event.type == "mouseup" && event.button == 0 ){
			_this.banDragSelect( false );
			$(window).unbind( 'mousemove.the-in__scroll', _this.dragScroller );
		}
	};

	/**
	 * @update  { number }  this.currentTopMoveScroller
	 * */
	theinScroll.prototype.dragScroller = function( event ){
		var _this = event.data,
			pageY = _this.startMoveScrollerPosition;
		if ( event.type == 'mousemove' ){
			pageY = event.pageY;
		} else if ( event.type == 'touchmove' ){
			pageY = event.originalEvent.touches[ 0 ].clientY || event.originalEvent.changedTouches[ 0 ].clientY
		}
		var	newTopMoveScroller = _this.startMoveScrollerPosition - ( _this.startMoveYPosition - pageY ),
			scrollingMaxLimit = _this.$scrollLine.height() - _this.pxSizeScroller;
		if( newTopMoveScroller <= 0 ){
			newTopMoveScroller = 0;
		} else if( newTopMoveScroller >= scrollingMaxLimit ){
			newTopMoveScroller = scrollingMaxLimit;
		}
		if ( _this.currentTopMoveScroller != newTopMoveScroller ){
			_this.$scroller.css( 'top', newTopMoveScroller );
			_this.currentTopMoveScroller = newTopMoveScroller;
			_this.setScrollContent();
		}
	};

	theinScroll.prototype.scrollingByClickOnScrolline = function(event){
		var _this = event.data,
		    scrollerUpperBound = _this.$scroller.offset().top,
			scrollerLowerBound = scrollerUpperBound + _this.$scroller.outerHeight(),
			mouseClick = event.pageY;
		if ( mouseClick <= scrollerUpperBound ) {
			_this.$box.scrollTop( _this.$box.scrollTop() - _this.$box.height() * 0.85 );
		}
		if ( mouseClick >= scrollerLowerBound ) {
			_this.$box.scrollTop( _this.$box.scrollTop() + _this.$box.height() * 0.85 );
		}
	};

	/**
	 * @update  { number }  this.widthDefaultScroll
	 * */
	theinScroll.prototype.hideDefaultScroll = function(){
		var _this = this,
			widthDefaultScroll = Math.ceil( _this.$box.width() - _this.$container.outerWidth( true ) );
		// recalculate the size if default width scroll line changed
		if ( _this.widthDefaultScroll != widthDefaultScroll ){
			_this.widthDefaultScroll = widthDefaultScroll;

			if ( _this.options.rtl ) {
				_this.$element.addClass( _this.prefix + 'rtl' );
				_this.$box.css( 'margin-left', -( _this.widthDefaultScroll ) - _this.options.addingIndent ).css( 'margin-right', 0 );
			} else {
				_this.$element.removeClass( _this.prefix + 'rtl' );
				_this.$box.css( 'margin-right', -( _this.widthDefaultScroll ) - _this.options.addingIndent ).css( 'margin-left', 0 );
			}

		}
	};

	/**
	 * @update  { number }  this.stateScrollbarReservePlace
	 * @update  { number }  this.widthCustomScroll
	 * */
	theinScroll.prototype.reservePlaceScroll = function(){
		var _this = this,

			widthCustomScroll = Math.ceil( _this.$scroll.outerWidth( true ) ),
			stateScrollbarReservePlace = _this.options.reservePlace;

		if ( _this.widthCustomScroll != widthCustomScroll || _this.stateScrollbarReservePlace != stateScrollbarReservePlace ){

			_this.widthCustomScroll = widthCustomScroll;
			_this.stateScrollbarReservePlace = stateScrollbarReservePlace;

			if ( _this.options.reservePlace ){
				var endValueCss,
					boxPadding = ( _this.widthCustomScroll + _this.options.addingIndent ) + 'px' ;
				if ( ( _this.options.rtl && !_this.options.otherDirection )
						|| ( !_this.options.rtl && _this.options.otherDirection ) ) {
					_this.$box.css( 'padding-left', boxPadding );
					endValueCss = {
						'left' : _this.widthCustomScroll + 'px',
						'right': '0'
					};
					if ( _this.$upEndValue ) _this.$upEndValue.css( endValueCss );
					if ( _this.$downEndValue ) _this.$downEndValue.css( endValueCss );
				} else {
					_this.$box.css( 'padding-right', boxPadding );
					endValueCss = {
						'right' : _this.widthCustomScroll + 'px',
						'left': '0'
					};
					if ( _this.$upEndValue ) _this.$upEndValue.css( endValueCss );
					if ( _this.$downEndValue ) _this.$downEndValue.css( endValueCss );
				}
			} else {
				_this.$box
					.css('padding','0')
					.css( _this.options.rtl ? 'padding-left' : 'padding-right' , _this.options.addingIndent + 'px' );
				if ( _this.$upEndValue ){
					_this.$upEndValue.css({
						'right': '0',
						'left' : '0'
					})
				}
				if ( _this.$downEndValue ){
					_this.$downEndValue.css({
						'right': '0',
						'left' : '0'
					})
				}
			}
		}
	};

	/**
	 * @update { number } this.percentSizeScroller
	 * @update { number } this.pxSizeScroller
	 * @update { number } this.sizeScrollLine
	 * */
	theinScroll.prototype.setSizeScroller = function(){
		var _this = this,
			percentSizeScroller = ( _this.$box.height() * 100 ) / _this.$container.outerHeight( true );
		if ( _this.percentSizeScroller != percentSizeScroller ) {
			_this.percentSizeScroller = percentSizeScroller;
			if (_this.percentSizeScroller >= 100) {
				_this.percentSizeScroller = 100;
				if ( !_this.options.reservePlace ) {
					_this.$scroll.hide();
				}
			} else {
				_this.$scroll.show();
			}
			_this.sizeScrollLine = _this.$scrollLine.height();
			_this.pxSizeScroller = Math.floor( ( _this.percentSizeScroller * _this.$scrollLine.height() ) / 100 );
			_this.$scroller.outerHeight(_this.pxSizeScroller + 'px');
		}
	};

	/**
	 * @update { number } this.topPercentScroller
	 * @update { number } this.topPxScroller
	 * */
	theinScroll.prototype.setTopScroller = function(){
		var _this = this;
		/* TODO remove */ //console.log('setTopScroller');
		_this.topPxScrollContent = _this.$box.scrollTop();
		_this.topPercentScroller = _this.topPercentScrollContent = ( _this.$box.scrollTop() * 100 ) / _this.$container.outerHeight( true );
		_this.topPxScroller = Math.floor( ( _this.topPercentScroller * _this.$scrollLine.height() ) / 100 );
		_this.$scroller.css( 'top', _this.topPxScroller + 'px' );
	};

	/**
	 * @update { number } this.topPercentScrollContent
	 * @update { number } this.topPxScrollContent
	 * */
	theinScroll.prototype.setScrollContent = function(){
		var _this = this;
		_this.topPercentScrollContent = ( parseInt( _this.$scroller.css( 'top' ) ) * 100 ) / _this.$scrollLine.outerHeight( true );
		_this.topPxScrollContent = Math.ceil( ( _this.topPercentScrollContent * _this.$container.height() ) / 100 );
		_this.$box.scrollTop( _this.topPxScrollContent );
	};

	theinScroll.prototype.checkExtremePositionScroller = function(){
		var _this = this;
		if (_this.$box.scrollTop() == 0) {
			_this.$element.addClass( _this.prefix + 'up-pos' );
			if ( _this.options.triggers.all || _this.options.triggers['up-pos'] ) _this.setTrigger( 'up-pos' );
		} else {
			_this.$element.removeClass( _this.prefix + 'up-pos' );
		}
		if ( ( _this.$box.scrollTop() + _this.$box.outerHeight() >=  _this.$container.outerHeight( true ) )
			|| ( _this.$box.outerHeight() >= _this.$container.outerHeight( true ) ) ){
			_this.$element.addClass( _this.prefix + 'down-pos' );
			if ( _this.options.triggers.all || _this.options.triggers['down-pos'] ) _this.setTrigger( 'down-pos' );
		} else {
			_this.$element.removeClass( _this.prefix + 'down-pos' );
		}
	};

	/**
	 * Get scrolling percentage
	 * Получить процент прокрутки
	 * @return { number }
	 * */
	theinScroll.prototype.getScrollingPercentage = function(){
		var diff = this.$container.outerHeight( true ) - this.$box.height(),
			percentage = diff <= 0 ? 0 : ( this.$box.scrollTop() * 100 ) / diff;
		return ( percentage > 100 ? 100 : percentage );
	};

    theinScroll.prototype.addContent = function( content, prepend, slide, duration ){
        var _this = this;
        if ( typeof content == 'string' ) content = $( content );
        if ( typeof content == 'object' && !$.isPlainObject( content ) ) {
            duration = ( duration >= 0 ) ? duration : _this.options.slideDuration;
            if ( slide ) content.hide();
            if ( prepend ) {
                _this.$content.prepend( content );
            } else {
                _this.$content.append( content );
            }
            if ( slide ) content.slideDown( duration );
        }
    };

    theinScroll.prototype.clearContent = function( slide, duration ){
        var _this = this;
        if ( slide ) {
            duration = ( duration >= 0 ) ? duration : _this.options.slideDuration;
            _this.$content.slideUp( duration, function(){
                _this.$content.empty().show();
            });
        } else {
            _this.$content.empty();
        }
    };

	theinScroll.prototype.getCurrent = function(){
		var _this = this,
            data = {
                'content' : {
                    'position' : {
                        'pc' : _this.topPercentScrollContent,
                        'px' : _this.topPxScrollContent
                    }
                },
                'scroller' : {
                    'position' : {
                        'pc' : _this.topPercentScroller,
                        'px' : _this.topPxScroller
                    },
                    'size' : {
                        'pc' : _this.percentSizeScroller,
                        'px' : _this.pxSizeScroller
                    }
                },
                'scrollingline' : {
	                'size' : {
                        'px' : _this.$scrollLine.height()
                    }
                },
                'scrolling' : _this.scrollingPercentage
            };
        return data;
	};

    /**
     *  Добавление тригера позиции прокрутки
     *  @param { string | object }  trigger name or trigger data object
     *  @param { number | string }  triggering position                     [ 0 ], 10, '10%'
     *  @param { string }           triggering condition                    [ '<' ], '>'
     *  @param { boolean }          direction of counting from below        [ false ], true
     * */
    theinScroll.prototype.addScrollingTrigger = function( name, position, sign, down, everytime, move, once ){
        if ( name && ( typeof name.name == 'string' || typeof name == 'string' ) ){
            if ( this.addedTriggers === false ) this.addedTriggers = {};
            this.addedTriggers[ name.name || name ] = {
                position : name.position || position || 0,
                sign : ( name.sign == '<' || name.sign == '>' ) ? name.sign : ( sign == '<' || sign == '>' ) ? sign : '>',
                down : name.down ? name.down : down ? down : false,
                everytime : ( name.everytime && typeof name.everytime == 'boolean' ) ? name.everytime : ( everytime && typeof everytime == 'boolean' ) ? everytime : false,
                move : ( name.move && typeof name.move == 'boolean' ) ? name.move : ( move && typeof move == 'boolean' ) ? move : false,
                once : ( name.once && typeof name.once == 'boolean' ) ? name.once : ( once && typeof once == 'boolean' ) ? once : false
            };
            //  console.log(this.addedTriggers);
        }
    };

    theinScroll.prototype.checkAddedTriggers = function( ) {
        var _this = this;
        if ( $.isPlainObject( _this.addedTriggers ) ) {
            $.each( _this.addedTriggers, function ( n, v ) {
                var show = false,
                    position = parseInt( _this.toNumber( v.position ) ),
                    scroll = _this.$box.scrollTop();


                if ( position ) {

                    if ( v.down ) scroll = _this.$container.height() - _this.$box.height() - scroll;

                    if ( ( v.sign == '>' && scroll > position ) || ( v.sign == '<' && scroll < position ) ) {

                        //console.log( (v.down ? 'DOWN' : 'UP')+' --- scroll '+v.sign+' position --- '+ scroll + ' '+v.sign+' '+ position);

                        show = true;

                    } else {

                        if ( v.everytime === 1 ) v.everytime = true;

                    }


                }



                if ( show ) {
                    // console.log(n+' ---  move != scroll ( '+v.move+' != '+scroll+' = '+ (v.move !== scroll) + ')');
                    if ( v.everytime !== 1 && ( ( v.move !== scroll && v.move !== true ) || v.move === false ) ) _this.setTrigger(n);
                    if ( v.once ) delete _this.addedTriggers[ n ];
                    if ( v.everytime ) v.everytime = 1;
                }

                if ( v.move !== false ) v.move = scroll;




            });
        }
    };

	/**
	 * тригер
	 * triggers a public event.
	 * @param { String } event name
	 * @param { Object } data object
	 */
	theinScroll.prototype.setTrigger = function( name, data ){
		if ( typeof name != 'string' ) return false;
		var _this = this,
			extObj = $.extend ({
				"eventType" : name,
				"plugin" : _this
			}, _this.getCurrent()),
			data = ( $.isPlainObject( data ) ) ? $.extend( data, extObj ) : extObj;
		_this.$element.trigger( name + '.' + _this.options.classes.main , data );
	};

	theinScroll.prototype.banDragSelect = function(state){
		$('body').toggleClass( this.options.classes.banSelect, state === false ? false : true );
	};

	theinScroll.prototype.banScroll = function(state){
		$('body').toggleClass( this.options.classes.banScroll, state === false ? false : true );
	};

	$.fn.theinScroll = function(options) {
		return this.each(function(){
			if(!$.data(this, 'theinScroll')){
				$.data(this, 'theinScroll', new theinScroll(this, options));
			}
		});
	};

})( jQuery, window, document );


; "use strict";


/**
 * the-in Carousel version 2.0.0
 *
 *
 * Triggers on initialized object :
 *
 * initialize.the-in-carousel   - When the plugin initializes.
 * initialized.the-in-carousel  - When the plugin has ready to work.
 * resize.the-in-carousel       - When the plugin gets resized.
 * resized.the-in-carousel      - When the plugin has resized.
 * prev.the-in-carousel         - Goes to previous item.
 * next.the-in-carousel         - Goes to next item.
 * change.the-in-carousel       - When a property is going to change its value.
 * changed.the-in-carousel      - When a property has changed its value.
 * refresh.the-in-carousel      - When the internal state of the plugin needs update.
 * refreshed.the-in-carousel    - When the internal state of the plugin has updated.
 *
 *
 * Listener:
 *
 * prev.the-in-carousel         - previous item
 * next.the-in-carousel         - next item
 * parametr: [ duration {Number} ]
 * $('selector').click(function() {
 *     $('initialedCarouselSelector').trigger('next.the-in-carousel'[, 100]);
 * });
 * -----------------------------------------------------------
 * change.the-in-carousel       - changed carousel position
 * parametr: position {Number} [, duration {Number} ]
 * $('selector').click(function() {
 *     $('initialedCarouselSelector')trigger('change.the-in-carousel', 2 [, 100]);
 *     [ or ]
 *     $('initialedCarouselSelector')trigger('change.the-in-carousel', { position: 3 [, duration: 3000 ] });
 * });
 * -----------------------------------------------------------
 * refresh.the-in-carousel       - refresh carousel
 * parametr: [ forced recalculation of all parameters { Boolean } ]
 * $('selector').click(function() {
 *     $('initialedCarouselSelector').refresh('next.the-in-carousel'[, true]);
 * });
 * -----------------------------------------------------------
 *
 * !!! Attention !!!
 * motionType = 'scroll'    --->    sticked = false, elasticEnds = false
 * itemAutoWidth = true     --->    stretch = false, merge = false
 *
 * -----------------------------------------------------------
 *
 */



;( function ( $, window, document, undefined ) {


	var theinCarousel = function ( element, options ) {

		this.defOptions = theinCarousel.Defaults;
		this.userOptions = options;
		this.options = $.extend( true, {}, theinCarousel.Defaults, options );

		/** Plugin element */
		this.$element = $( element );

		/** Current settings */
		this.settings = null;

		/** Origin elements - is created once */
		this._origin = {
			$element : false,
			$items : false,
			$html : false,
			length : false
		};

		/** Current information */
		this._current = {

			breakpoints: [ -1, 0 ],         // breakpoints interval

			outsideLeft: false,             // indent outside left items
			outsideRight: false,            // indent outside right items
			between: false,                 // indent between items in line

			rtl: false,                     // right to left flag
			active: 1,                      // current active position

			maxActive: false,               // maximum active position for navigate and dots

			loop: false,                    // current state loop

			frameWidth: false,              // frame width
			frameFullWidth: false,          // frame width with between
			itemWidth: false,               // item width
			packWidth: false,               // pack width
			packFullWidth: false,           // pack width width center shift (x2) and elastic shift (x2)

			scrollSize: false,              // высота скролла

			motionType: false,              // тип перемещения/сдвига полосы слайдера
			motionTime: false,              // время на перемещение

			$items: false,                  // items object
			itemsLength: 0,                 // number of items

			// CLONE
			cloneBeforeLength: 0,           // number of clone items before origin
			cloneBeforeWidth: 0,            // width of clone items before origin
			cloneAfterLength: 0,            // number of clone items after origin
			cloneAfterWidth: 0,             // width of clone items after origin

			limitMin: 0,                    //
			limitMax: 0,                    //

			// centering
			center: false,                  // flag centering active item
			centerShiftBefore: false,       // size center shift for first element
			centerShiftAfter: false,        // size center shift for last element

			// nav
			nav: false,                     //
			navContainer: false,            //
			navPosition: false,             //
			navText: false,                 //

			// dots
			dots: false,                    //
			dotsNumber: 0,                  //
			dotsContainer: false,           //
			dotsPosition: false,            //
			dotsType: false,                //

			// counter
			counter: false,                 // флаг показа счетчика
			counterContainer: false,        // селектор контейнера для отображения счетчика
			counterPosition: false,         // позиция вставки счетчика
			counterSeparator: false,        // разделитель цифр счетчика

			// drag
			_drag: {
				itemStart: null,            //
				timeStart: null,            //
				shiftStart: null,           //
				touchStart: null,           //
				delta: 0,                   //
				checkDirection: null        //
			}

		};

		/** Current state information */
		this._state = {
			current: {
				initialize: 0,
				refresh: 0,
				scrolling: 0,
				change: 0,
				grab: 0,
				drag: 0,
				prev: 0,
				next: 0,
				touch: 0
			},
			tags: {
				/*
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
				*/
			}
		};

		/**
		 * Proxied event handlers
		 * */
		this._handlers = {};
		$.each( [ 'onResize', 'delayResizeUpdate' ], $.proxy( function ( i, handler ) {
			this._handlers[ handler ] = $.proxy( this[ handler ], this );
		}, this ) );

		this.initialize();
	};

	/**
	 * Default options for the carousel.
	 * @public
	 */
	theinCarousel.Defaults = {

		/** classes */
		classes: {
			main: 'the-in-carousel',
			active: 'm-active',
			disabled: 'm-disabled',
			scroll: 'm-scroll',
			clone: 'm-clone'
		},

		/** once once during the start */
		/** используются только при инициализации  */
		startPosition: false,           // стартовый слайд - используется только при инициализации          [ false ] / number
		/** TODO ???? */
		//showAllTriggers : true,       // показывать все тригерры                                          [ false ] / true

		/** every time during the rebuilding */
		/** используются каждый раз при перестроении */

		nestedItemSelector: '>',        // селектор для выбора вложенного элементов                         [ false ] / string

		/** Items priority: taken first found */
		/** Преоритет использование параметров: при нескольких заполненных берется первый найденный */
		/** itemAutoWidth -> itemMinWidth -> itemWidth -> items */

		itemAutoWidth: false,           // auto width items                                                 [ false ] / true
		itemMinWidth: false,            // min width item                                                   [ false ] / number
		itemWidth: false,               // width item                                                       [ false ] / number
		items: 1,                       // number items on screen                                           [ 1 ] / number

		slideBy: 1,                     // на сколько сдвигать                                              [ 1 ] / number

		/** motion settings */
		motionType: 'transform',        // тип сдвига                                                       [ 'transform' ] / 'animate' / 'scroll'
		motionTime: 200,                // время анимации смены слайда

		between: 0,                     // отступы между элементами                                         [ 0 ] / number / number with percent symbol '10%'
		outside: 0,                     // отступ снаружи элементов                                         [ 0 ] / number / number with percent symbol '10%'
		outsideLeft: false,             // отступ снаружи слева от элементов                                [ 0 ] / number / number with percent symbol '10%'
		outsideRight: false,            // отступ снаружи справа от элементов                               [ 0 ] / number / number with percent symbol '10%'

		/** behavior settings */
		stretch: false,                 // элементы тянутся на всю ширину если меньше ширины контейнера     [ false ] / true
		autoWidthNoStretch: true,       // [ true ] / false
		sticked: true,                  // элементы прилипают к краю                                        [ true ] / false
		scaling: false,                 // элемент не должен быть больше frame по ширине при auto width     [ false ] / true
		merge: true,                    // растягивать элемент на несколько позиций из data-merge           [ true ] / true
		elasticEnds: false,             // эластичный оттягивание на концах                                 [ true ] / true
		center: false,                  // центровать активный слайд                                        [ false ] / true
		lessCenter : false,             // центровать элементы если меньше ширины фрейма                    [ false ] / false
		loop: false,                    // прокрутка по кругу                                               [ false ] / true
		rewind: false,                  // прокрутка на другой конец когда достигнута граница               [ false ] / true
		rtl: false,                     // правонаправленный                                                [ false ] / true

		deactivate: false,              // отключить слайдер вернуть верстку                                [ false ] / true

		/** navigate buttons settings */
		nav: true,                      // формировать / показывать блок навигации                          [ false ] / true
		navContainer: false,            // контейнер для вывода навигации                                   [ false ] / string  ( selector )
		navPosition: 'after',           // позиция для вывода блока нвигации                                [ 'after' | false ] / 'before'
		navTag: 'button',               // название тега для кнопки навигации                               [ 'button' ] / string ( tagname )
		navText: [ 'prev', 'next' ],    // текст для кнопок навигации                                       [ array ] / false

		/** settings navigate dots */
		dots: false,                    // формировать / показывать блок навигационных точек                [ false ] / true / 'each'
		dotsContainer: false,           // контейнер для вывода навигационных точек                         [ false ] / string ( selector )
		dotsPosition: 'after',          // позиция для вывода блока навигационных точек                     [ 'after' | false ] / 'before'
		dotsType: false,                // тип навигационных точек                                          [ false ] / 'number'

		/** settings counter */
		counter: false,                 // формировать / показывать блок счетчика                           [ false ] / true
		counterContainer: false,        // контейнер для вывода блока счетчика                              [ false ] / true ( selector )
		counterPosition: 'after',       // позиция для вывода блока счетчика                                [ 'after' | false ] / 'before'
		counterSeparator: '/',          // разделитель цифр счетчика                                        [ '/' ] / string

		/** responsive settings */
		responsive: {},                 // настройки для адаптивного дизайна                                [ object ] / settings object
		responsiveRefreshRate: 200,     // время задержки перед трансформацией                              [ 200 ] / number
		responsiveBaseElement: false,   // использовать для responsive ширину frame (true) или другого элемента (selector)          [ false ] / true / 'selector'

		/** developers settings */
		showStates: 'false'    // селектор куда вывести блок состояний [ false ] / 'id selector'

	};

	/**
	 *
	 * @property {Object}           this.$element                   - елемент на котором была инициализация
	 *
	 * @property {Object}           this._origin.$element           - оригинальная верстка
	 * @property {Object}           this._origin.$html              - блок с клоном реальной верстки для возврата
	 * @property {Object}           this._origin.$items             - набор оригинальных итемов
	 * @property {Object}           this._origin.length             - кол-во реальных элементов
	 *
	 * @property {Object}           this.$el                        - слайдер
	 * @property {String}           this.prefix                     - префикс для классов
	 * @property {String}           this.pluginNumber               - класс номер плагина
	 * @property {Boolean}          this.isMobile                   - флаг что мобильный браузер
	 * @property {Boolean}          this.isTransform                - флаг что браузер поддерживает transform
	 *
	 * @property {Number}           this.cancelUpdate               - флаг не обновлять значение при иземенениях фрейма
	 *
	 * @property {Object}           this.$sizeFrame                 - фрейм для считывания изменений габаритных размеров виджета
	 * @property {Object}           this.$wrFrame                   -
	 * @property {Object}           this.$frame                     - рамка в которой двидется полоса с элементами
	 * @property {Object}           this.$stage                     - вспомогательная обертка
	 * @property {Object}           this.$pack                      - полоса с элментами
	 * @property {Object}           this.$nav                       - навигация
	 * @property {Object}           this.$navPrev                   - кнопка предыдущий
	 * @property {Object}           this.$navNext                   - кнопка следующий
	 * @property {Object}           this.$dots                      - блок с навигационными точками
	 * @property {Object}           this.$dotsDot                   - навигационнаые точки
	 * @property {Object}           this.$counter                   - счетчик элементов
	 * @property {Object}           this.$counterOf                 - текущее значени
	 * @property {Object}           this.$counterSep                - разделитель значений
	 * @property {Object}           this.$counterMax                - максимальное значение
	 *
	 * @property {Object}           this._current                   - текущие состояния
	 * @property {Array}            this._current.breakpoints       - промежуток
	 * @property {Number}           this._current.scrollSize        - высота скрола
	 * @property {Number}           this._current.outsideLeft       - отступ слева от элементов
	 * @property {Number}           this._current.outsideRight      - отступ справа от элементов
	 * @property {Number}           this._current.between           - отступы между элементами
	 * @property {Boolean}          this._current.rtl               - флаг что правонаправленный
	 * @property {Boolean}          this._current.active            - номер активного элемента
	 * @property {Number}           this._current.maxActive         - маскимально вохможный активный элмент для прокрутки
	 * @property {Boolean}          this._current.loop              - флаг крутить по кругу
	 * @property {Number}           this._current.frameWidth        -
	 * @property {Number}           this._current.frameFullWidth    -
	 * @property {Number}           this._current.itemWidth         -
	 * @property {Number}           this._current.packWidth         -
	 * @property {Number}           this._current.packFullWidth     -
	 * @property {Object}           this._current.$items            -
	 * @property {Object}           this._current.slideBy           -
	 * @property {Number}           this._current.itemsLength       -
	 * @property {Number}           this._current.visibleItems      -
	 * @property {Number}           this._current.clonedLength      -
	 *
	 * @property {String}           this._current.motionType        -
	 * @property {Number}           this._current.motionTime        -
	 *
	 * @property {Boolean}          this._current.nav               -
	 * @property {Boolean|String}   this._current.navContainer      -
	 * @property {String}           this._current.navPosition       -
	 * @property {Boolean|Array}    this._current.navText           -
	 *
	 * @property {Boolean}          this._current.dots              -
	 * @property {Number}           this._current.dotsNumber        -
	 * @property {Boolean|String}   this._current.dotsContainer     -
	 * @property {Boolean|String}   this._current.dotsPosition      -
	 * @property {Boolean|String}   this._current.dotsType          -
	 *
	 * @property {Boolean|String}   this._current.counter           -
	 * @property {Boolean|String}   this._current.counterContainer  -
	 * @property {Boolean|String}   this._current.counterPosition   -
	 * @property {Boolean|String}   this._current.counterSeparator  -
	 * */

	theinCarousel.prototype.initialize = function () {
		var _this = this;

		/** short class name and remove long*/
		_this.cl = _this.options.classes;
		delete _this.options.classes;

		/* TODO for developer */
		if ( _this.options.showStates && typeof _this.options.showStates == 'string' ) _this.defShowStates = _this.showStates;
		/* TODO for developer */

		/** start initialize*/
		_this.enterState('initialize');
		_this.setTrigger('initialize');

		/** prefix class */
		_this.prefix = _this.cl.main + '__';
		/** pluginNumber - plugin number */
		_this.pluginNumber = _this.prefix + $.now();
		/** isMobile - flag mobile browser */
		_this.isMobile = _this.mobileBrowser() || false;
		/** isTransform - flag can use transform style */
		_this.isTransform = _this.supportsCSS( 'transform', 'translate3d(0px, 0px, 0px)' ) && _this.supportsCSS( 'transition', 'all 250ms ease 0s' );

		/** Создаем верстку основных блоков */
		_this.createHtml();
		/** Получаем настройки для текущего разрешения */
		_this.getSettings( true );
		/** Создаем оригинальные элементы в соотвествии с полученными настройками для разрешения Выполнять строго после _this.getSettings( true ); */
		_this.itemsUpdate();

		/** get active item number */
		_this._current.active = ( _this.options.startPosition > 0 && _this.options.startPosition <= _this._origin.length ) ? _this.options.startPosition : 1;
		_this._current.activePosition = _this._current.active;

		/** create navigate elements carousel */
		_this.navCreate();
		_this.dotsCreate();
		_this.counterCreate();

		/** register  */
		_this.registerListenerEvents();
		_this.registerEvents(); // обязательно тут или с задержкой!!!
		_this.dragRegisterEvents();

		/* TODO REMOVE */ //console.log( 'ADD CLASS READY ' );

		_this.$el.addClass( _this.prefix + 'ready' );
		_this.$element.addClass( _this.prefix + 'ready' );

		/** первое принудительное обновление */
		_this.onResize( true );

		_this.leaveState( 'initialize' );
		_this.setTrigger( 'initialized' );


	};
	/**
	 * Receiving settings based on screen resolution, frame or other block ( selector: responsiveBaseElement );
	 * Получение настроек в зависимости от разрешения экрана, frame блока или другого блока ( селектор: responsiveBaseElement );
	 * @param {Boolean} forced update
	 * @return {Object} settings
	 * @update {Object} _this.settings - settings
	 */
	theinCarousel.prototype.getSettings = function ( forced ) {
		var _this = this,
			viewWidth = _this.viewportWidth(); // ширина viewport или другого блока по ширине которого применяются настройки responsive
		if ( forced || _this.settings == null || viewWidth <= _this._current.breakpoints[ 0 ] || viewWidth > _this._current.breakpoints[ 1 ] ) {
			var overwrites = _this.options.responsive,
				settings = null;
			if ( !overwrites ) {
				settings = $.extend( {}, this.options );
				_this._current.breakpoints = [ 0, Infinity ];
			} else {
				var match = -1,
					pointsArray = [],
					pointsKey = -1;
				$.each(overwrites, function ( point ) {
					pointsArray.push( Number( point ) );
					if ( viewWidth >= point && match < point ) {
						pointsKey++;
						match = Number( point );
					}
				});
				_this._current.breakpoints = [ pointsArray[ pointsKey ] ? pointsArray[ pointsKey ] : 0, pointsArray[ ( pointsKey + 1 ) ] ? pointsArray[ ( pointsKey + 1 ) ] : Infinity ];
				settings = $.extend( {}, _this.options, overwrites[ match ] );
				delete settings.responsive;
				// проверяем наличие размеров элементов слайдера для разрешения и при наличии заменяем дефолтные настройки
				if ( overwrites[ match ] && ( overwrites[ match ].itemAutoWidth || overwrites[ match ].itemMinWidth || overwrites[ match ].itemWidth || overwrites[ match ].items ) ) {
					$.each( [ 'itemAutoWidth', 'itemMinWidth', 'itemWidth', 'items' ], function( i, v){
						settings[ v ] = overwrites[ match ][ v ] ? overwrites[ match ][ v ] : false;
					});
					//console.log( _this.options.itemAutoWidth, _this.options.itemMinWidth , _this.options.itemWidth , _this.options.items );
					//console.log( overwrites[ match ].itemAutoWidth, overwrites[ match ].itemMinWidth , overwrites[ match ].itemWidth , overwrites[ match ].items );
					//console.log( settings.itemAutoWidth, settings.itemMinWidth , settings.itemWidth , settings.items );
				}
			}
			_this.settings = settings;
		}
		//console.log( _this.settings );
		return _this.settings;
	};
	/**
	 * Register events listeners
	 */
	theinCarousel.prototype.registerListenerEvents = function () {
		var _this = this;
		_this.$element.on( 'prev.' + _this.cl.main, function ( event, data ) {
			var duration = ( data && typeof data == 'number' && data >= 0 ) ? data : false;
			if ( !_this.isState( 'prev' ) ) {
				_this.enterState( 'prev' );
				_this.prev( duration );
				_this.leaveState( 'prev' );
			}
		});
		_this.$element.on( 'next.' + _this.cl.main, function ( event, data ) {
			var duration = (data && typeof data == 'number' && data >= 0) ? data : false;
			if (!_this.isState( 'next' )) {
				_this.enterState( 'next' );
				_this.next(duration);
				_this.leaveState( 'next' );
			}
		});
		_this.$element.on( 'change.' + _this.cl.main, function ( event, data, dataDuration ) {
			var position = false,
				duration = false;
			if ( data ) {
				if ( $.isPlainObject( data ) ) {
					if ( data.position && typeof data.position == 'number' && data.position >= 1 ) position = data.position;
					if ( data.duration && typeof data.duration == 'number' && data.duration >= 0 ) duration = data.duration;
				} else {
					if ( typeof data == 'number' && data >= 1 ) {
						position = data;
					}
					if ( typeof dataDuration == 'number' && data >= 0 ) {
						duration = dataDuration;
					}
				}
			}
			if ( position && !_this.isState( 'change' ) ) {
				_this.enterState( 'change' );
				_this.change( position, duration );
				_this.leaveState( 'change' );
			}
		});
		_this.$element.on( 'refresh.' + _this.cl.main, function ( event, data ) {
			var forced = data ? true : false;
			if (!_this.isState( 'refresh' )) {
				_this.onResize( forced );
			}
		});
	};
	/**
	 * Registry events handlers
	 * Регистрация эвентов
	 */
	theinCarousel.prototype.registerEvents = function () {
		var _this = this;
		/*window[ _this.pluginNumber ].onresize = function () {
			if ( _this.cancelUpdate ) {
				_this.cancelUpdate = false;
			} else {
				_this._handlers.delayResizeUpdate();
			}
		};*/
		if ( !_this.options.responsiveBaseElement ) {
			$( window ).on( 'resize', function () {
				_this.cancelUpdate = true;
				_this._handlers.delayResizeUpdate();
			});
		}
		_this.$frame.on( 'scroll', function () {
			_this.dragScrolling();
		})
	};
	/**
	 * Checks window `resize` event.
	 * Задержка выполнения апдейта
	 * @protected
	 */
	theinCarousel.prototype.delayResizeUpdate = function () {
		var _this = this;
		_this.setTrigger( 'resize' );
		window.clearTimeout( _this.resizeTimer );
		_this.resizeTimer = window.setTimeout( _this._handlers.onResize, _this.settings.responsiveRefreshRate );
	};
	/**
	 * Checks window or frame `resize` event.
	 * @protected
	 */
	theinCarousel.prototype.onResize = function ( forced ) {
		var _this = this;
		if (_this.$element.is(':visible')) {
			_this.enterState('refresh');
			_this.setTrigger('refresh');

			_this.refresh( forced );

			_this.navRefresh();
			_this.dotsRefresh();
			_this.counterRefresh();

			_this.leaveState('refresh');
			_this.setTrigger('refreshed');
		}
	};

	/** ---------- CREATE HTML ---------- */
	/**
	 * Save origin element and create html origin element
	 * @update {Object} _this._origin.$element
	 * @update {Object} _this._origin.$html
	 */
	theinCarousel.prototype.createOrigins = function ( elem ) {
		this._origin.$element = typeof elem == 'object' ? elem : this.$element.clone(true);
		this._origin.$html  = $( '<div class="' + this.cl.main + ' ' + this.pluginNumber + ' ' + this.prefix + 'origin"></div>' ).append( this._origin.$element.clone( true )[ 0 ].childNodes );
	};
	/**
	 * creating main html
	 * @update {Object} this.$sizeFrame
	 * @update {Object} this.$el
	 * @update {Object} this.$frame
	 * @update {Object} this.$stage
	 * @update {Object} this.$pack
	 * */
	theinCarousel.prototype.createHtml = function () {
		var _this = this;
		if ( !_this._origin.$element ) _this.createOrigins();
		_this.$element.empty();
		// create objects
		_this.$el = $( '<div class="' + _this.cl.main + ' ' + _this.pluginNumber + '"></div>' );
		// add attr "title" on iframe for test LightHouse #RIA2018-2783
		_this.$sizeFrame = $( '<iframe title="frame" name="' + _this.pluginNumber + '" class="' + _this.prefix + 'size-frame"></iframe>' );
		_this.$stage = $( '<div class="' + this.prefix + 'stage"/>' );
		_this.$frame = $( '<div class="' + this.prefix + 'frame"/>' );
		_this.$pack = $( '<div class="' + this.prefix + 'pack"/>' );
		// assembly of layout
		_this.$element.append( _this.$el.append( _this.$sizeFrame, _this.$stage.append( _this.$frame.append( _this.$pack ) ) ) );

	};
	/**
	 * @update {Object} this._origin.$items
	 * @update {Object} this._origin.length
	 * @update {Object} this._current.nestedItemSelector
	 * */
	theinCarousel.prototype.itemsUpdate = function ( forced ) {
		var _this = this,
			s = _this.settings,
			c = _this._current;
		if ( forced || !this._origin.$items || ( c.nestedItemSelector != s.nestedItemSelector ) ) {
			c.nestedItemSelector = s.nestedItemSelector;
			/* TODO REMOVE */ //console.log('▲▲▲ UPDATE ITEMS ▲▲▲ nestedItemSelector = ' + c.nestedItemSelector + ' ▲ $el = ', this.$el);
			this._origin.$items = this._origin.$element.find( typeof c.nestedItemSelector == 'string' ? c.nestedItemSelector : '>' ).clone( true );
			this._origin.length  = this._origin.$items.length;
			_this.itemsReplace();
		}
	};
	/**
	 * creating elements and inserting into a pack
	 * @update {Object} this.$itemsOrigin
	 * */
	theinCarousel.prototype.itemsReplace = function () {
		var _this = this;
		_this.$pack.empty();
		_this._origin.$items.each( function ( index, value ) {
			_this.$pack.append( _this.itemCreate( value, ( index + 1 ) ) );
		});
		_this.$itemsOrigin = $('.' + _this.prefix + 'item:not(.' + _this.cl.clone + ')', _this.$pack );
	};
	/**
	 * @param {Object} obj carousel item
	 * @param {Number} index carousel item
	 * @return {Object} carousel item object
	 * */
	theinCarousel.prototype.itemCreate = function ( obj, index ) {
		var item = $( '<div class="' + this.prefix + 'item" data-item="' + index + '"></div>' ).append( $( obj ).clone( true ) ),
			queue = [ 'merge', 'no-stretch' ]; // очередь data атрибутов для копирования на элемент карусели
		$.each( queue, function( i, v ){
			var d = $( obj ).data( v );
			if ( d !== 'undefined' ) item.attr( 'data-' + v, d );
		});
		return ( item );
	};

	/** ---------- MOTION TYPE ---------- */
	/**
	 * @update this._current.motionType
	 * @update this._current.motionTime
	 */
	theinCarousel.prototype.motionRefresh = function () {
		var c = this._current,
			s = this.settings,
			t = 'motionType',
			i = 'motionTime';
		if ( c[ i ] != s[ i ] )
			c[ i ] = s[ i ];
		if ( c[ t ] != s[ t ] ) {
			if ( s[ t ] != 'animate' && s[ t ] != 'transform' && s[ t ] != 'scroll' ) s[ t ] = this.defOptions[ t ];
			if ( s[ t ] == 'transform' && !this.isTransform ) s[ t ] = 'animate';
			var from = c[ t ],
				to = s[ t ];
			c[ t ] = s[ t ];
			this.motionChangeType( from, to );
		}
	};
	theinCarousel.prototype.motionChangeType = function ( from, to ) {
		var _this = this,
			c = _this._current;
		if ( from == 'scroll' ) {
			/* TODO remove */ //console.log(' === FROM === scroll');
			_this.$frame.stop().removeClass( _this.cl.scroll );
			_this.$el.removeClass( _this.prefix + 'rtl' );
			_this.$frame.scrollLeft( 0 );
			_this.$el.toggleClass( _this.prefix + 'rtl', _this.settings.rtl );
			c.scrollSize = 0;
			_this.$frame.css({
				'margin-bottom': '',
				'padding-bottom': ''
			});
		} else if ( from == 'transform' ) {
			/* TODO remove */ //console.log(' === FROM === transform');
			_this.setStyle( _this.$pack, {
				transition: '',
				transform: ''
			})
		} else {
			/* TODO remove */ //console.log(' === FROM === animate');
			_this.$pack.stop().css( 'left', '' );
		}
		if ( to == 'scroll' ) {
			_this.$frame.addClass(_this.cl.scroll);
			var additive = 10,
				scrollSize = _this.$pack.height() - _this.$frame.height() - additive;
			if ( scrollSize != c.scrollSize ) {
				c.scrollSize = scrollSize;
				_this.$frame.css({
					'margin-bottom': scrollSize + 'px',
					'padding-bottom': additive + 'px'
				});
			}
		}
		/* TODO remove */ //console.log( '++++++++++ change position -> motionChangeType -> '+from+' -> '+to);
		if ( !_this.isState( 'initialize' ) ) {
			_this.change( c.active, true );
		}
	};

	/** ---------- NAVIGATE ---------- */
	/**
	 * @create this.$nav
	 * @create this.$navPrev
	 * @create this.$navNext
	 */
	theinCarousel.prototype.navCreate = function () {
		var _this = this;
		if ( _this.settings.nav ) {
			if ( _this.$nav ) _this.$nav.remove();
			_this.$nav = $( '<div class="' + _this.prefix + 'nav"></div>' );
			// add attr "name" on button for test LightHouse #RIA2018-2783
			_this.$navPrev = $( '<' + _this.settings.navTag + 'name="prev"' + ' class="' + _this.prefix + 'nav-button ' + _this.prefix + 'nav-prev"></' + _this.settings.navTag + '>' );
			_this.$navNext = $( '<' + _this.settings.navTag + 'name="next"' + ' class="' + _this.prefix + 'nav-button ' + _this.prefix + 'nav-next"></' + _this.settings.navTag + '>' );
			_this.$nav.append( _this.$navPrev, _this.$navNext );
			_this.navRefresh();
			_this.navAddEvents();
			_this.setTrigger( 'navCreate' );
		}
	};
	/**
	 * @update this._current.navText
	 */
	theinCarousel.prototype.navRefresh = function () {
		var _this = this,
			c = _this._current,
			s = _this.settings;
		if ( _this.settings.nav && !_this.$nav ) _this.navCreate();
		if ( _this.$nav ) {
			_this.refreshAddedElements( 'nav' );
			if ( s.nav && Array.isArray( s.navText ) && s.navText.length >= 2 && c.navText != s.navText ) {
				/* TODO remove */ //console.log('<<<<< navRefresh >>>>> change TEXT');
				_this.$navPrev.empty().html( s.navText[ 0 ] );
				_this.$navNext.empty().html( s.navText[ 1 ] );
				c.navText = s.navText;
			}
			_this.navSetActive();
		}
	};
	theinCarousel.prototype.navAddEvents = function () {
		var _this = this;
		if ( _this.$navNext ) {
			_this.$navNext.on( 'click', function () {
				_this.next();
			});
		}
		if ( _this.$navPrev ) {
			_this.$navPrev.on('click', function () {
				_this.prev();
			});
		}
	};
	theinCarousel.prototype.navSetActive = function () {
		if ( this.$nav ) {
			var _this = this,
				c = _this._current,
				prevActive = c.active > 1,
				nextActive = c.active < c.maxActive,
				active = c.loop || c.rewind;
			if ( c.motionType == 'scroll' ) {
				var packShift = _this.getPackShift().x;
				prevActive = c.rtl ? packShift < c.limitMax : packShift > c.limitMin ;
				nextActive = c.rtl ? packShift > c.limitMin : packShift < c.limitMax ;
			}
			_this.$navPrev.toggleClass( _this.cl.active, active || ( prevActive && c.maxActive > 1 ) );
			_this.$navNext.toggleClass( _this.cl.active, active || ( nextActive && c.maxActive > 1 ) );
			_this.$nav.toggleClass( _this.cl.active, c.maxActive > 1 );
			_this.$element.toggleClass( _this.prefix + 'with-nav', c.maxActive > 1 );
			_this.$el.toggleClass( _this.prefix + 'with-nav', c.maxActive > 1 );
		}
	};

	/** ---------- DOTS ---------- */
	/**
	 * @create this.$dots
	 */
	theinCarousel.prototype.dotsCreate = function () {
		var _this = this;
		if ( _this.settings.dots ) {
			if ( _this.$dots ) _this.$dots.remove();
			_this.$dots = $( '<div class="' + _this.prefix + 'dots"></div>' );
			_this.dotsRefresh();
			_this.dotsAddEvents();

		}
	};
	/**
	 * @update this._currents.dotsType
	 */
	theinCarousel.prototype.dotsRefresh = function () {
		var _this = this,
			c = _this._current,
			s = _this.settings;
		if ( _this.settings.dots && !_this.$dots ) _this.dotsCreate();
		if ( _this.$dots ) {
			_this.refreshAddedElements( 'dots' );
			if ( s.dots && ( c.dots != s.dots || c.maxActive != c.dotsNumber || c.dotsType != s.dotsType || !_this.$dotsDot ) ) {
				/* TODO remove */ //console.log('<<<<< dotsRefresh >>>>> change DOTS');
				_this.dotsReplace( s.dotsType );
				c.dotsType = s.dotsType;
			}
		}
	};
	theinCarousel.prototype.dotsAddEvents = function () {
		var _this = this;
		if ( _this.$dots ) {
			_this.$dots.on( 'click', '.' + _this.prefix + 'dot', function () {
				_this.change( $( this ).data( 'item' ) );
			});
		}
	};
	/**
	 * @create this.$dotsDot
	 */
	theinCarousel.prototype.dotsReplace = function ( type ) {
		var _this = this,
			dotsType = type || false,
			dotsCounter = 1,
			dotsNumber = _this._current.maxActive,
			dotsDot = '';

		if ( !_this.$dots ) _this.dotsCreate;
		while ( dotsCounter <= dotsNumber ) {
			dotsDot += '<button class="' + _this.prefix + 'dot" data-item = "' + dotsCounter + '"><span>' + ( dotsType == "number" ? dotsCounter : '' ) + '</span></button>';
			dotsCounter++;
		}
		_this.$dotsDot = $( dotsDot );
		_this._current.dotsNumber = dotsNumber;
		_this.$dots.toggleClass( _this.prefix + 'dots-number', dotsType == "number" );
		_this.$dots.empty().append( _this.$dotsDot );
		_this.$dots.toggleClass( _this.cl.disabled, _this._current.maxActive == 1 );
		_this.dotsSetActive();
	};
	theinCarousel.prototype.dotsSetActive = function ( pos ) {
		var _this = this,
			c = _this._current;
		pos = pos || c.active || 1;
		pos = pos > c.maxActive ? c.maxActive : pos < 1 ? 1 : pos;
		if ( _this.$dotsDot ) {
			_this.$dotsDot.removeClass( _this.cl.active );
			$( _this.$dotsDot[ pos - 1 ] ).addClass( _this.cl.active );
		}
	};

	/** ---------- COUNTER ---------- */
	/**
	 * @create this.$counter
	 * @create this.$counterOf
	 * @create this.$counterSep
	 * @create this.$counterMax
	 */
	theinCarousel.prototype.counterCreate = function () {
		var _this = this;
		if ( _this.settings.counter ) {
			if ( _this.$counter ) _this.$counter.remove();
			_this.$counter = $( '<div class="' + _this.prefix + 'counter"></div>' );
			_this.$counterOf = $( '<span></span>' );
			_this.$counterSep = $( '<i>/</i>' );
			_this.$counterMax = $( '<span></span>' );
			_this.$counter.append( _this.$counterOf, _this.$counterSep, _this.$counterMax );
			_this.counterRefresh();
		}
	};
	theinCarousel.prototype.counterRefresh = function () {
		var _this = this;
		if ( _this.settings.counter && !_this.$counter ) _this.counterCreate();
		if ( _this.$counter ) {
			_this.refreshAddedElements( 'counter' );
			_this.counterUpdate();
		}
	};
	/**
	 * @update this._current.counterSeparator
	 */
	theinCarousel.prototype.counterUpdate = function () {
		var _this = this,
			c = _this._current,
			s = _this.settings;
		if ( _this.$counter ) {
			if ( s.counterSeparator != false && c.counterSeparator != s.counterSeparator ) {
				c.counterSeparator = s.counterSeparator;
				_this.$counterSep.html( c.counterSeparator );
			}
			if ( _this.$counterOf ) _this.$counterOf.html( c.active );
			if ( _this.$counterMax ) _this.$counterMax.html( c.maxActive );
			_this.$counter.toggleClass( _this.cl.active, c.maxActive > 1 );
			_this.$element.toggleClass( _this.prefix + 'with-counter', c.maxActive > 1 );
			_this.$el.toggleClass( _this.prefix + 'with-counter', c.maxActive > 1 );
		}
	};

	/** ---------- NAVIGATE, DOTS, COUNTER - position ---------- */
	/**
	 * @param {text} element name ( name = **** )
	 * @update this._current.****
	 * @update this._current.****Container
	 * @update this._current.****Position
	 */
	theinCarousel.prototype.refreshAddedElements = function ( name ) {
		var _this = this,
			c = _this._current,
			s = _this.settings;
		if ( !name ) return false;
		var $obj = '$' + name,
			container = name + 'Container',
			position = name + 'Position';
		/* TODO remove */// console.log('element = "'+name+'"', ' (current/settings) ',' view = ('+c[name]+' / '+s[name]+')', ' container = ('+c[container]+' / '+s[container]+')', ' position = '+c[position]+' / '+s[position]+ ')' );
		if ( c[ name ] != s[ name ] || c[ container ] != s[ container ] || c[ position ] != s[ position ] ) {
			/* TODO remove */ //console.log('<<<<< '+name+' Refresh >>>>>');
			if ( c[ name ] && !s[ name ] || c[ name ] && s[ name ] && ( c[ container ] != s[ container ] || c[ position ] != s[ position ] ) ) {
				_this[ $obj ].detach();
			}
			if ( s[ name ] && !c[ name ] || c[ name ] && s[ name ] && ( c[ container ] != s[ container ] || c[ position ] != s[ position ] ) ) {
				var place = ( c[ container ] != s[ container ] && $( s[ container ] ) && $( s[ container ] ).length > 0 ) ? $( s[ container ] ) : _this.$el;
				if ( s[ position ] == 'before' ) {
					place.prepend( _this[ $obj ] );
				} else {
					place.append( _this[ $obj ] );
				}
			}
			c[ name ] = s[ name ];
			c[ container ] = s[ container ];
			c[ position ] = s[ position ];
		}
		_this.setRtl( _this[ $obj ] );
	};
	theinCarousel.prototype.updateAddedElements = function () {
		this.dotsSetActive();
		this.navSetActive();
		this.counterUpdate();
	};

	/** MAIN REFRESH */

	/**
	 * @param   { boolean } min limit.
	 * @update  { Object } _this._сurrent
	 */
	theinCarousel.prototype.refresh = function ( fast ) {

		// Обязательно до создания s = _this.settings;
		this.getSettings();             // обновляем настройки для разрешения --- @update: s.settings

		var _this = this,
			c = _this._current,         // текущие значения настроек для данного состояния элементов и размеров, значений больше чем в settings и часть приведена к значениям из %.
			s = _this.settings;         // настройки для данного интервала responsive точек

		_this.motionRefresh();          // проверяем тип сдвига, обновляем --- @update: c.motionType, c.motionTime

		/* TODO REMOVE */ //console.log('★★★★★★★ REFRESH ★★★★★★★ el = ', this.$el, '★★★★★★★ settings = ', this.settings );

		_this.checkDeactivate();        // проверка на активность карусели ( скрытие / показ ) --- @update: c.deactivate

		_this.itemsUpdate();            // обновляем элементы если селектор элементов изменился - создаются новые итемы карусели

		c.itemAutoWidth = s.itemAutoWidth;                          // флаг что ширина элементов зависит от контента

		// отступы между элементами ( обязательно рассчитывать каждый раз )
		c.between = _this.toPositiveNumber( s.between, _this.$el );
		// отступы внутри пака до первого элемента ( обязательно рассчитывать кажыдй раз )
		c.outsideLeft = _this.toPositiveNumber( ( s.outsideLeft || s.outsideLeft === 0 ) ? s.outsideLeft : s.outside, _this.$el );
		// отступы внутри пака после последнего элемента ( обязательно рассчитывать кажыдй раз )
		c.outsideRight = _this.toPositiveNumber( ( s.outsideRight || s.outsideRight === 0) ? s.outsideRight : s.outside, _this.$el );

		// сохраняем значения размеров для основных элементов по умолчанию
		c.frameWidth = _this.$frame.width() - c.outsideLeft - c.outsideRight;        // ширина фрейма в котором будет двигаться слайдер
		c.frameFullWidth = c.frameWidth + c.between;                // ширина фрейма для вычислений включащая отступ для последнего элемента
		c.packWidth = c.frameWidth;                                 // ширина пака с итемами
		c.packFullWidth = c.frameFullWidth;                         // ширина пака с итемами включая отступ для центрирования и отступ для эластичности на краях
		// элементы
		c.originLength = _this._origin.length;                      // оригинальное кол-во элементов
		c.$itemsOrigin = _this.$itemsOrigin;                        // набор оригинальных итемов слайдера

		c.$items = false;                                           // объект всех элементов включая клоны
		c.itemsLength = 1;                                          // кол-во элементов включая клоны
		c.itemsGridWidth = false;                                   // ширина итема при itemAutoWidth = false;
		c.itemsOriginWidth = {};                                    // ширины оригинальных элементов
		c.itemsSettings = false;                                    // значения элементов слайдера
		// отступы по умолчанию

		c.centerShiftBefore = 0;                                    // размер сдвига для центрирования первого элемента
		c.centerShiftAfter = 0;                                     // размер сдвига для центрирования последнего элемента

		c.elasticShift = 0;                                         // размер для эластичного оттягивания
		// настройки поведения
		// настройки поведения

		c.merge = s.merge;                                          // считывать ширину элементов с дата атрибута data-merge если itemAutoWidth = false
		c.rewind = s.rewind;                                        // прокрутка на первый элемент в конце
		c.stretch = s.stretch;                                      // элементы тянутся на всю ширину если не заполняют всю ширину
		c.sticked = c.motionType == 'scroll' ? false : s.sticked;   // элементы прилипают к краям, при типе сдвига scroll принудительно отключается т.к. доскрол не возможно остановить
		c.scaling = s.scaling;                                      // элемент не может быть больше ширины фрейма
		c.elasticEnds = s.elasticEnds;                                      // оттягивается в начальной или конечно точках
		c.lessCenter = s.lessCenter;                                // центрирование если ширина пака меньше ширины элеменитов
		c.center = s.center;                                        // центрирование активного
		c.loop = s.loop;                                            // прокрутка по кругу
		c.rtl = s.rtl;                                              //
		c.slideBy = s.slideBy < 0 ? 1 : Math.min( s.slideBy, c.originLength ); // размер сдвига, не может быть больше кол-ва элементов

		// НЕ МЕНЯТЬ ПОРЯДОК !!! т.к. вычисления в последующих методах зависимы от значений вычисляемых ранее

		_this.cloneRemove();            // удаляем клоны и очищаем значения свойст свзяанных с клонами
		_this.setRtl();                 // выставляем / удаляем класс на элемент rtl и сохраняем новое значение c.rtl

		_this.getItemsOriginWidth();    // обновляем оъект оригинальных ширин для рассчетов
		_this.cloneRefresh();           // обновляем клоны, вставляем в вверстку и обновляем объекты клонов
		_this.getElasticShift();        // вычисляем ширину области для эластичного сдвига на краях - !!!обязательно до getItemsSetting!!! т.к. участвует в расчетах
		_this.getItemsSetting();        // получаем объект со свойствами элементов для расчетов
		_this.getCenterShifts();        // вычисляем добавку отступов снаружи для центрирования
		_this.getPackWidth();           // вычисление ширины пака
		_this.getPackFullWidth();       // общая ширина пака для вычислений

		// выставляем размеры эелментов
		_this.setItemsBetween();        // Устанавливаем отступы между элементами
		_this.setItemsWidth();          // Устанавливаем ширины элементам
		_this.setPackIndents();         // изменяем отступы снаружи элементов + сдвиг центрирования + сдвиг для эластичности на краях
		_this.setPackWidth();           // Выставляем ширину $pack

		// разница для определения
		c.difference = c.frameWidth - c.packWidth;

		_this.updateMaxActive();
		_this.updateLimits();           // после updateMaxActive

		/* TODO REMOVE */ //console.log( ' rtl = '+c.rtl+ ' | maxActive = '+c.maxActive+' | c.limitMin = '+c.limitMin+' | c.limitMax = '+ c.limitMax+' | $el = ', this.$el);

		if ( c.active > c.maxActive ) {
			c.active = c.maxActive;
			_this.counterUpdate();
		}

		// сдвигаем на активный элемент без анимации
		_this.change( c.active, true );
		_this.updateAddedElements();

		/* TODO REMOVE */ //console.log( '=== After refresh === ', c );

	};

	/** Обновление значений наборов итемов */
	theinCarousel.prototype.getItemsObject = function() {
		this._current.$items = $('.' + this.prefix + 'item', this.$pack );
		this._current.itemsLength = this._current.$items.length;
	};
	/** Выставление / удаление класса rtl */
	theinCarousel.prototype.setRtl = function( $obj ) {
		var c = this._current,
			$obj =  typeof $obj == 'object' ? $obj : this.$el;
		$obj.toggleClass( this.prefix + 'rtl', c.rtl );
		return c.rtl ? true : false;
	};
	/**
	 * Получение объекта ширин оригинальных элементов
	 * @update this._current.itemsOriginWidth
	 */
	theinCarousel.prototype.getItemsOriginWidth = function () {
		var _this = this,
			c = _this._current,
			s = _this.settings;

		c.itemsGridWidth = false; // обнуляем ширину итема по сетке

		if ( c.itemAutoWidth == true){
			/** делаем пак большого размера и размери элементов авто чтобы элементы стали реального размера */
			_this.$pack.width( 100000000 );
			_this.$itemsOrigin.width( 'auto' );
		} else {
			/** вычисление размера ячейки для сетки */
			var _choose = {
				items: s.items > 0 ? s.items : 1,
				itemWidth: _this.toPositiveNumber( s.itemWidth, _this.$el ),
				itemMinWidth: _this.toPositiveNumber( s.itemMinWidth, _this.$el )
			};
			if ( _choose.itemMinWidth > 0 ) {
				var visible = Math.floor( c.frameFullWidth / ( _choose.itemMinWidth + c.between ) ) || 1;
				c.itemsGridWidth = ( c.frameFullWidth / Math.min( visible, c.originLength ) ) - c.between;
			} else if ( _choose.itemWidth > 0 ) {
				c.itemsGridWidth = _choose.itemWidth;
			} else if ( _choose.items > 0 ) {
				c.itemsGridWidth = ( c.frameFullWidth / _choose.items - c.between );
			}
			if ( c.stretch && c.frameFullWidth > ( ( c.itemsGridWidth + c.between ) * c.originLength ) ) {
				c.itemsGridWidth = ( c.frameFullWidth / c.originLength ) - c.between;
			}
			/* TODO REMOVE */ //console.log('...... c.itemsGridWidth = '+ c.itemsGridWidth);
		};

		c.itemsOriginWidth = {};

		var _fullWidth = 0,
			_stretchWidth = 0,
			_noStretchWidth = 0;
		$.each( _this.$itemsOrigin, function( i, el ){
			var merge = $( el ).data( 'merge' ),
				noStretch = $( el ).data( 'no-stretch' ),
				width = c.itemsGridWidth ? ( merge > 0 ? ( ( parseInt( merge ) * ( c.itemsGridWidth + c.between ) ) - c.between ) : c.itemsGridWidth ) : $(el).width(); // тут в конце было  el.getBoundingClientRect().width
			/* TODO REMOVE */ //console.log( '--- itemsOriginWidth ', ( i + 1 ),' - width = ', width ,' frameWidth = ', c.frameWidth );
			c.itemsOriginWidth[ i + 1 ] = ( c.scaling && width > c.frameWidth ) ? c.frameWidth : width;
			_fullWidth += c.itemsOriginWidth[ i + 1 ] + c.between;
			if ( noStretch ) {
				_noStretchWidth += c.itemsOriginWidth[ i + 1 ] + c.between;
			} else {
				_stretchWidth += c.itemsOriginWidth[ i + 1 ] + c.between;
			}
		});

		/* TODO REMOVE */ //console.log('c.frameFullWidth = ' + c.frameFullWidth + ' noStretchWidth = ' + _noStretchWidth + ' stretchWidth = '+_stretchWidth);
		/* TODO REMOVE */ //console.log('stretch = '+c.stretch+' itemAutoWidth = '+c.itemAutoWidth);

		// пересчет размеров элементов для авто ширины с учетом атрибута no-stretch
		if ( c.itemAutoWidth && c.stretch && c.frameFullWidth > _fullWidth && _stretchWidth > 0 ){
			_fullWidth = 0;
			$.each( _this.$itemsOrigin, function( i, el ){
				var noStretch = $( el ).data( 'no-stretch' );
				if ( !noStretch ) {
					c.itemsOriginWidth[ i + 1 ] = ( ( ( c.itemsOriginWidth[ i + 1 ] + c.between ) * 100 / _stretchWidth ) / 100 * ( c.frameFullWidth - _noStretchWidth ) ) - c.between;
					/* TODO REMOVE */ //c.itemsOriginWidth[ i + 1 ] = parseInt( c.itemsOriginWidth[ i + 1 ]*100 - 1)/100;
				}
				/* TODO REMOVE */ //console.log( 'element '+(i + 1)+' = ' +c.itemsOriginWidth[ i + 1 ] +' fix = ' + (parseInt( c.itemsOriginWidth[ i + 1 ]*100 - 1)/100) );
				_fullWidth += c.itemsOriginWidth[ i + 1 ] + c.between;
			});
		}

		c.itemsOriginWidth.fullWidth = _fullWidth;
		c.itemsOriginWidth.width = _fullWidth - c.between;
		c.itemsOriginWidth.between = c.between;

		if ( c.itemAutoWidth == true ) _this.$pack.width( 'auto' );

		_this.getItemsObject();
		/* TODO REMOVE */ //console.log( '---------- itemsOriginWidth ----------', c.itemsOriginWidth, _this.$el );

	};
	/**
	 * Получение ширины элемента по сетке
	 * @update this._current.itemsGridWidth;
	 */
	theinCarousel.prototype.getItemGridWidth = function(){
		var _this = this,
			c = _this._current,
			s = _this.settings;
		c.itemsGridWidth = false;
		// Если щирина не авто вычисляем ширину для сетки
		if ( c.itemAutoWidth !== true ) {
			var _choose = {
				items: s.items > 0 ? s.items : 1,
				itemWidth: _this.toPositiveNumber( s.itemWidth, _this.$el ),
				itemMinWidth: _this.toPositiveNumber( s.itemMinWidth, _this.$el )
			};
			if ( _choose.itemMinWidth > 0 ) {
				var visible = Math.floor( c.frameFullWidth / ( _choose.itemMinWidth + c.between ) ) || 1;
				c.itemsGridWidth = ( c.frameFullWidth / Math.min( visible, c.originLength ) ) - c.between;
			} else if ( _choose.itemWidth > 0 ) {
				c.itemsGridWidth = _choose.itemWidth;
			} else if ( _choose.items > 0 ) {
				c.itemsGridWidth = ( c.frameFullWidth / _choose.items - c.between );
			}
			if ( c.stretch && c.frameFullWidth > ( ( c.itemsGridWidth + c.between ) * c.originLength ) ) {
				c.itemsGridWidth = ( c.frameFullWidth / c.originLength ) - c.between;
			}
			/* TODO REMOVE */ //console.log('...... c.itemsGridWidth = '+ c.itemsGridWidth);
		}
		/* TODO REMOVE */ //console.log( '---------- itemsGridWidth ------------', c.itemsGridWidth );
		return c.itemsGridWidth;
	};
	/**
	 * @update this._current.visibleItems
	 * @update this._current.itemsGridWidth
	 * */
	theinCarousel.prototype.getItemsSetting = function () {
		var _this = this,
			c = _this._current,
			counter = 1 - c.cloneBeforeLength;

		c.itemsSettings = {}; // объект размеров для итемов

		if ( c.$items && c.$items.length > 0 ){
			$.each( c.$items, function( i, el ){
				var number = $( el ).data( 'item' ),
					prew = c.itemsSettings[ ( counter - 1 ) ],
					width = c.itemsOriginWidth[ number ],
					shift = ( prew ? ( prew.shift + c.between + ( c.center ? ( ( prew.width + width ) / 2 ) : ( prew.width ) ) ) : c.elasticShift );
				c.itemsSettings[ counter ] = {
					item: number,
					width: width,
					shift: ( c.motionType == 'scroll' ? Math.round( shift ) : shift ), // особенность Scroll не понимает дробные части и двигается только по целым
					$el: $( el )
				};
				counter++;
			});
			counter--;
			c.itemsSettings.width = c.itemsSettings[ counter ].shift + c.itemsSettings[ counter ].width;
			c.itemsSettings.fullWidth = c.itemsSettings.width + c.between;
			c.itemsSettings.first = 1 - c.cloneBeforeLength;
			c.itemsSettings.last = counter;
		}
		/* TODO REMOVE */ //console.log( '  ' );
		/* TODO REMOVE */ //console.log( '✴✴✴✴✴ itemsSettings ✴✴✴✴✴ ', c.itemsSettings );
		/* TODO REMOVE */ //console.log( '  ' );
	};
	/** Установка ширин элементов */
	theinCarousel.prototype.setItemsWidth = function () {
		var _this = this,
			c = this._current;
		if ( c.itemsOriginWidth ){
			$.each( c.itemsOriginWidth, function( i, v ){
				$('.' + _this.prefix + 'item[data-item=' + i + ']', _this.$pack ).width( v );
			});
		}
	};
	/** Получение величины для эластичного сдвинга */
	theinCarousel.prototype.getElasticShift = function () {
		var c = this._current;
		c.elasticShift = ( c.elasticEnds && !c.loop && c.motionType != 'scroll' ) ? c.frameWidth * 0.9 : 0;
	};
	/** Вычисление отступов для центрирования элемента */
	theinCarousel.prototype.getCenterShifts = function () {
		var c = this._current;
		if ( c.center && c.itemsSettings ){
			c.centerShiftBefore = ( c.frameWidth - c.itemsSettings[ c.itemsSettings.first ].width ) / 2;
			c.centerShiftAfter = ( c.frameWidth - c.itemsSettings[ c.itemsSettings.last ].width ) / 2;
		}
	};
	/** Вычисление ширины набора элементов */
	theinCarousel.prototype.getPackWidth = function () {
		var c = this._current,
			packWidth = 0;
		if ( c.$items ){
			$.each( c.$items, function( i, el ){
				packWidth += ( c.itemsOriginWidth[ $( el ).data( 'item' ) ]  + c.between );
			});
			c.packWidth = packWidth - c.between;
		}
		/* TODO REMOVE */ //console.log( '=== c.packWidth = '+c.packWidth);
		return c.packWidth;
	};
	theinCarousel.prototype.getPackFullWidth = function () {
		var c = this._current;
		c.packFullWidth = c.packWidth + c.between + c.centerShiftBefore + c.centerShiftAfter + ( c.elasticShift * 2 );
		return c.packFullWidth;
	}
	/** выставление отступов между элементами */
	theinCarousel.prototype.setItemsBetween = function () {
		var c = this._current;
		c.$items.filter(':not(:last-child)').css({
			'margin-left': c.rtl ? c.between : '',
			'margin-right': c.rtl ? '' : c.between
		});
		c.$items.filter(':last-child').css({
			'margin-left': c.rtl ? '-1px' : '',  // -1px что бы последний элемент не падал со строчки при не правльном высислении
			'margin-right': c.rtl ? '' : '-1px'
		});
	};
	/** Установка внешних отступов у набора */
	theinCarousel.prototype.setPackIndents = function () {
		var c = this._current;
		this.$pack.css({
			'padding-left': c.outsideLeft + ( c.rtl ? c.centerShiftAfter : c.centerShiftBefore ) + c.elasticShift,
			'padding-right': c.outsideRight + ( c.rtl ? c.centerShiftBefore : c.centerShiftAfter ) + c.elasticShift
		});
	};
	/** Yстанвока ширины на набор элементов */
	theinCarousel.prototype.setPackWidth = function () {
		this.$pack.width( this._current.packWidth );
	};
	/** Удаление клонов если есть
	 * @update this._current.$clone
	 * @update this._current.cloneBeforeLength
	 * @update this._current.cloneBeforeWidth
	 * @update this._current.cloneAfterLength
	 * @update this._current.cloneAfterWidth
	 */
	theinCarousel.prototype.cloneRemove = function(){
		var c = this._current;
		if ( c.$clone ){
			c.$clone.remove();
		}
		c.$clone = false;
		c.cloneBeforeLength = 0;
		c.cloneBeforeWidth = 0;
		c.cloneAfterLength = 0;
		c.cloneAfterWidth = 0;
	};

	/** Пересоздание клонов в зависимости от ширины */
	theinCarousel.prototype.cloneRefresh = function(){
		var _this = this,
			c = this._current;
		if ( c.$clone ) _this.cloneRemove();
		if ( c.loop ) {
			var counterBefore = c.originLength,
				counterAfter = 1,
				minClone = Math.max( c.slideBy, 2 ),
				minWidthBefore = c.center ? ( c.frameWidth / 2 ) : 0,
				minWidthAfter = c.center ? ( c.frameWidth / 2 ) : c.frameWidth;
			/* TODO delete */  //console.log('minClone = '+minClone+' --- minWidthBefore = '+minWidthBefore+' --- minWidthAfter = '+minWidthAfter);

			// добавляем клоны "до" для корректной прокрутки по slideBy
			while ( c.cloneBeforeLength < minClone ) {
				_this.cloneAdd( ( counterBefore - 1 ), true );
				c.cloneBeforeLength++;
				counterBefore = ( counterBefore - 1 ) > 0 ? ( counterBefore - 1 ) : c.originLength;
				/* TODO delete */ //console.log(' c.cloneBeforeWidth = '+c.cloneBeforeWidth+' minWidthBefore = '+minWidthBefore+' c.cloneBeforeLength = '+c.cloneBeforeLength+' c.slideBy = '+c.slideBy);
			};
			// добавляем клоны "до" по ширине для компенсации сдвига
			while ( c.cloneBeforeWidth < minWidthBefore  ) {
				_this.cloneAdd( ( counterBefore - 1 ), true );
				c.cloneBeforeLength++;
				c.cloneBeforeWidth += ( c.itemsOriginWidth[ counterBefore ] + c.between );
				counterBefore = ( counterBefore - 1 ) > 0 ? ( counterBefore - 1 ) : c.originLength;
				/* TODO delete */ //console.log(' c.cloneBeforeWidth = '+c.cloneBeforeWidth+' minWidthBefore = '+minWidthBefore+' c.cloneBeforeLength = '+c.cloneBeforeLength+' c.slideBy = '+c.slideBy);
			};

			// добавляем клоны "после" для корректной прокрутки по slideBy
			while ( c.cloneAfterLength < minClone ) {
				_this.cloneAdd( ( counterAfter - 1 ) );
				c.cloneAfterLength++;
				counterAfter = ( counterAfter + 1 ) <= c.originLength ? ( counterAfter + 1 ) : 1;
				/* TODO delete */ //console.log(' c.cloneAfterWidth = '+c.cloneAfterWidth+' minWidthAfter = '+minWidthAfter+' c.cloneAfterLength = '+c.cloneAfterLength+' c.slideBy = '+c.slideBy);
			};
			// добавляем клоны "после" по ширине для компенсации сдвига
			while ( c.cloneAfterWidth < minWidthAfter  ) {
				_this.cloneAdd( ( counterAfter - 1 ) );
				c.cloneAfterLength++;
				c.cloneAfterWidth += ( c.itemsOriginWidth[ counterAfter ] + c.between );
				counterAfter = ( counterAfter + 1 ) <= c.originLength ? ( counterAfter + 1 ) : 1;
				/* TODO delete */ //console.log(' c.cloneAfterWidth = '+c.cloneAfterWidth+' minWidthAfter = '+minWidthAfter+' c.cloneAfterLength = '+c.cloneAfterLength+' c.slideBy = '+c.slideBy);
			};

			c.$clone = $( '.' + this.cl.main + '__item.' + this.cl.clone , _this.$pack );
			_this.getItemsObject();
		}
	};
	theinCarousel.prototype.cloneAdd = function( counter, position ){
		var _this = this,
			c = this._current;
		var $clone = $( c.$itemsOrigin[ counter ] ).clone( true ).addClass( _this.cl.clone );
		if ( position == 'prepend' || position === true ) {
			_this.$pack.prepend( $clone );
		} else {
			_this.$pack.append( $clone );
		}
	};
	theinCarousel.prototype.updateMaxActive = function () {
		var _this = this,
			c = _this._current;
		c.maxActive = _this._origin.length ;
		if ( !c.loop && !c.center && c.dots != 'each' && c.originLength >= 1 ) {
			var counter = c.originLength,
				itemsWidth = c.itemsSettings[ counter ].width;
			/* TODO REMOVE */ //console.log( ' itemsWidth = '+itemsWidth+'   c.frameWidth = '+ c.frameWidth+' counter - 1 = '+( counter - 1 ) );

			while ( itemsWidth <= ( c.frameWidth + 1 ) && ( counter - 1 ) >= 1 && counter-- ){
				itemsWidth += ( c.itemsSettings[ counter ].width + c.between );
				if ( itemsWidth <= ( c.frameWidth + 1 ) ) c.maxActive--;
				/* TODO REMOVE */ //console.log( ' itemsWidth = '+itemsWidth+'  c.frameWidth = '+ c.frameWidth+' counter - 1 = '+( counter - 1 )+'c.maxActive = '+c.maxActive);
			}
		}
		/* TODO REMOVE */ //console.log( ' c.maxActive = '+c.maxActive );
		return c.maxActive;
	};
	/** Вычисление минимальной и максимальной координат сдвига  */
	theinCarousel.prototype.updateLimits = function () {
		var c = this._current,
			min = this.calculateShiftPosition( 1 ),
			max = this.calculateShiftPosition( c.maxActive );
		if ( c.maxActive == 1 && !c.loop && !c.center && c.frameWidth < c.packWidth ){
			max = this.calculateShift( ( c.rtl ? 1 : -1 ) * ( c.itemsSettings[ 1 ].shift + c.itemsSettings[ 1 ].width ) );
		}
		c.limitMin = c.motionType == 'scroll' ? ( c.rtl ? max : min ) : ( c.rtl ? min : max ) ;
		c.limitMax = c.motionType == 'scroll' ? ( c.rtl ? min : max ) : ( c.rtl ? max : min ) ;
		/* TODO REMOVE */ //console.log( ' rtl = '+c.rtl+ ' | maxActive = '+c.maxActive+' | c.limitMin = '+c.limitMin+' | c.limitMax = '+ c.limitMax+' | $el = ', this.$el);
	};


	/** ------ NAVIGATE ----- */
	/** Следующие элемент */
	theinCarousel.prototype.prev = function ( duration ) {
		this.nearby( 'prev', duration );
	};
	/** Предыдущий элемент */
	theinCarousel.prototype.next = function ( duration ) {
		this.nearby( 'next', duration );
	};
	/** Соседний ( следующие / предыдущий ) элемент */
	theinCarousel.prototype.nearby = function ( direction, slideBy, duration ) {
		if ( direction != 'prev' && direction != 'next' ) return false;
		var _this = this,
			c = _this._current,
			position = c.activePosition + ( direction == 'prev' ? -1 : 1 ) * ( slideBy ? slideBy : c.slideBy );
		/* TODO REMOVE */ //console.log('=== NEARBY === | loop '+(c.loop?'✔':'X')+' | rewind '+(c.rewind?'✔':'X')+' | direction = '+direction+' | position = '+position+' | maxActive = '+c.maxActive+ ' | c.active = '+ c.active+ ' | c.activePosition = '+ c.activePosition+' | slideBy = '+c.slideBy );
		if ( c.loop == true || c.rewind == true || ( direction == 'prev' && c.active > 1 ) || ( direction == 'next' && c.active < c.maxActive ) ) {
			_this.enterState( direction );
			_this.setTrigger( direction );
			_this.change( position, duration );
			setTimeout( function () {
				_this.leaveState( direction );
			}, _this.calcDuration( duration ) );
		}
	};
	/** Смена элемента */
	theinCarousel.prototype.change = function ( position, duration ) {
		var _this = this,
			c = _this._current;

		/* TODO REMOVE */ //console.log('=== CHANGE === enter data === position = '+position+' | duration = '+duration+' | loop = '+ (c.loop?'✔':'X') + ' | rewind = '+ (c.rewind?'✔':'X') +' | maxActive = '+c.maxActive);

		if ( !position && position != 0 ) return false;

		_this.enterState( 'change' );
		_this.setTrigger( 'change' );
		duration = _this.calcDuration( duration );

		var toPosition = position;

		if ( ( c.loop == true || c.rewind == true ) && ( position < 1 || position > c.maxActive ) ) {

			var toPosition = position <= 0 ? ( c.maxActive + position ) : ( position - c.maxActive ),
				looping = ( c.loop == true && !_this.isState( 'drag' ) ) ? true : false,
				dalayTimeout = looping ? 10 : 0;
			if ( looping ) {
				var loopingPosition = _this.calculateShiftPosition( c.active + ( position <= 0 ? 1 : -1 ) * c.maxActive );
				_this.setPackShift( loopingPosition, true );
			}
			setTimeout( function () {
				_this.setPackShift( _this.calculateShiftPosition( toPosition ), duration - dalayTimeout );
			}, dalayTimeout );
		} else {
			toPosition = position < 1 ? 1 : position > c.maxActive ? c.maxActive : position;
			_this.setPackShift( _this.calculateShiftPosition( toPosition ), duration );
		}
		c.activePosition = toPosition;
		_this.getRealActive();
		if ( c.motionType != 'scroll' ) _this.updateAddedElements();
		// по окончанию сдвига выставляем класс на новый активный элемент
		setTimeout( function () {
			/* TODO REMOVE */ //console.log( ' === CHANGE === c.active = '+c.active+' c.activePosition='+c.activePosition);
			_this.toRealActive();
			_this.setActive( c.active );
			_this.leaveState( 'change' );
			_this.setTrigger( 'changed' );
			/* TODO REMOVE */ //console.log('=== after CHANGE === c.active = '+c.active+' c.activePosition='+c.activePosition);
		}, duration );
	};

	/**
	 * Вычисление длительности на основе переданного значения
	 * @param { boolean | number } duration
	 * @return { number } normalize duration
	 * */
	theinCarousel.prototype.calcDuration = function ( duration ) {
		return duration === true ? 0 : ( duration >= 0 && duration !== false ) ? duration : ( this._current.motionTime || 0 );
	};
	/**
	 * Установка класса на активный элемент в полосе или снятие метки активного элемента если номер не передан
	 * @param { none | number } active position
	 * */
	theinCarousel.prototype.setActive = function ( position ) {
		var _this = this,
			c = _this._current;
		c.$items.removeClass( _this.cl.active );
		if ( c.itemsSettings[ position ] ) {
			c.itemsSettings[ position ].$el.addClass( _this.cl.active );
		}
	};
	/** Вычисление сдвига линии по позиции */
	theinCarousel.prototype.calculateShiftPosition = function ( position ) {
		if ( !this._current.itemsSettings[ position ] ) return false;
		return( this.calculateShift( ( this._current.rtl ? 1 : -1 ) * this._current.itemsSettings[ position ].shift ) );
	};

	theinCarousel.prototype.calculateShift = function ( shift ) {
		if ( !shift && shift != 0 ) return false;
		var _this = this,
			c = _this._current,
			sign = c.rtl ? 1 : -1;
		/* TODO REMOVE */ //console.log( '=== Получение сдвига === position = '+ position + ' shift = '+ shift +' frameFull = '+c.frameWidth+' packWidth = '+c.packWidth+' elastic = '+c.elasticShift );
		// проверка координаты чтобы при прокрутке к последнему элементу он был в противоположный край и после него не было места
		_this.$pack.css( { 'margin-left': 0, 'margin-right': 0 } );
		if ( !c.loop && !c.center ){
			if ( c.frameWidth > c.packWidth ){
				if ( c.lessCenter ){
					if (  c.motionType == 'scroll' ){
						_this.$pack.css( c.rtl ? 'margin-right' : 'margin-left', ( ( c.frameWidth - c.packWidth ) / 2 ) );
					} else {
						shift = shift - sign * ( c.frameWidth - c.packWidth ) / 2;
					}
				} else {
					shift = sign * c.itemsSettings[ 1 ].shift;
				}
				/* TODO REMOVE */ //console.log( '=== Пересчет FRAME > PACK = '+ shift);
			} else {
				if ( ( sign * shift + c.frameFullWidth ) > ( c.packFullWidth - c.elasticShift ) ) {
					shift = sign * ( c.packFullWidth - c.elasticShift - c.frameFullWidth );
					/* TODO REMOVE */ //console.log( '=== Пересчет сдвига CHANGED MAX = '+ shift);
				}
			}
		}
		// пересчет для scroll с rtl
		shift = _this.calculateShiftMotionScroll( shift );
		return shift;
	};

	/** Пересчет позиции для типа сдвига scroll  */
	theinCarousel.prototype.calculateShiftMotionScroll = function ( shift ) {
		var c = this._current;
		if ( c.motionType == 'scroll' ) {
			shift = c.rtl ? ( c.packFullWidth - c.frameFullWidth - shift ) : ( Math.abs( shift ) );
			/* TODO REMOVE */ //console.log( '=== Пересчет для SCROLL = '+shift);
		}
		return shift;
	};

	/** PACK SHIFT */
	/**
	 * Установка сдвига полосы с элементами
	 * @param { number } shift size
	 * @param { boolean | number } time
	 * */
	theinCarousel.prototype.setPackShift = function ( shift, duration ) {
		if ( !shift && shift != 0 ) return false;
		var _this = this,
			c = _this._current;
		/* TODO REMOVE */ //console.log(' === setPackShift ===  motionType='+c.motionType+' shift='+shift+' active = '+c.active+' activePosition = '+c.activePosition);
		if ( shift === false ) return false;
		duration = _this.calcDuration( duration );
		if ( c.motionType == 'scroll' ) {
			_this.$frame.stop().animate({
				scrollLeft: Math.round( shift )     // округляем до ближайшего целого при позиционировании в скролле
			}, duration );
		} else if ( c.motionType == 'transform' ) {
			_this.setStyle( _this.$pack, {
				transition: duration === 0 ? 'none' : { duration: duration },
				transform: 'translate3d(' + shift + 'px, 0px, 0px)'
			});
		} else if ( c.motionType == 'animate' ) {
			_this.$pack.stop().animate({
				left: shift
			}, duration );
		} else {
			return false;
		}
	};
	/**
	 * Получение значения прокрутки полосы с элементами
	 * @return {boolean | number} coordinate
	 * */
	theinCarousel.prototype.getPackShift = function () {
		var _this = this,
			c = _this._current,
			coordinate;
		if ( c.motionType == 'scroll' ) {
			coordinate = {
				x: _this.$frame.scrollLeft(),
				y: _this.$frame.scrollTop()
			}
		} else if ( c.motionType == 'transform' ) {
			coordinate = _this.$pack.css( 'transform' ).replace(/.*\(|\)| /g, '').split(',');
			coordinate = {
				x: +( coordinate[ 0 ] == 'none' ? 0 : coordinate[ coordinate.length === 16 ? 12 : 4 ] ),
				y: +( coordinate[ 0 ] == 'none' ? 0 : coordinate[ coordinate.length === 16 ? 13 : 5 ] )
			};
		} else {
			coordinate = {
				x: parseInt( _this.$pack.css( 'left' ) ),
				y: parseInt( _this.$pack.css( 'top' ) )
			};
		}
		return coordinate !== undefined ? coordinate : false;
	};
	/**
	 * Останавливаем прокрутку полосы с элементами
	 * */
	theinCarousel.prototype.stopPackShift = function () {
		var _this = this,
			c = _this._current;
		/* TODO REMOVE */ //console.log(' === stopPackShift ===');
		if ( c.motionType == 'scroll' ) {
			_this.$frame.stop();
			window.clearTimeout(_this.scrollTimer);
			if ( _this.isState( 'scrolling' ) ) _this.leaveState('scrolling');
		} else if ( c.motionType == 'transform' ) {
			_this.setStyle(_this.$pack, {
				transition: 'none',
				transform: 'translate3d(' + _this.getPackShift().x + 'px, 0px, 0px)'
			})
		} else if ( c.motionType == 'animate' ) {
			_this.$pack.stop();
		} else {
			return false;
		}
	};

	/** DEACTIVATE */
	theinCarousel.prototype.checkDeactivate = function () {
		var _this = this,
			c = _this._current,
			s = _this.settings;
		if ( s.deactivate != c.deactivate ) {
			if ( s.deactivate == true ) {
				this.deactivate();
			} else {
				this.activate();
			}
			c.deactivate = s.deactivate
		}
		return c.deactivate;
	};
	theinCarousel.prototype.deactivate = function () {
		if ( this.$el && this.$element ) {
			this.$el.detach();
			this.$element.append( this._origin.$html  );
		}
	};
	theinCarousel.prototype.activate = function () {
		if ( this.$el && this.$element ) {
			this._origin.$html .detach();
			this.$element.append( this.$el );
		}
	};

	/** DESTROY */
	theinCarousel.prototype.destroy = function () {
		/* TODO remove Дописать позже */
		console.log('DESTROY');
	};

	/** UPDATE */
	theinCarousel.prototype.update = function ( options ) {
		/* TODO remove */ //console.log('^ ^ ^ ^ ^ ^ update options ');
		this.userOptions = $.extend(true, {}, this.userOptions, options );
		this.options = $.extend( true, {}, this.options, this.userOptions );
	};

	/** DRAG */
	/** добавление эвентов для перетаскивания */
	theinCarousel.prototype.dragRegisterEvents = function () {
		var _this = this;
		_this.$pack.on( "touchstart." + _this.pluginNumber + "  mousedown." + _this.pluginNumber, function ( e ) {
			if ( e.type == "touchstart" || ( e.type == "mousedown" && e.button == 0 )) {
				_this.stopPackShift();
				_this.dragStart( e );
			}
		});
		$( window ).on( "touchend." + _this.pluginNumber + "  mouseup." + _this.pluginNumber, function ( e ) {
			if ( e.type == "touchend" || ( e.type == "mouseup" && e.button == 0 ) ) _this.dragEnd();
		});
	};
	/** bind drag events and data recording */
	theinCarousel.prototype.dragStart = function ( e ) {
		var _this = this,
			c = _this._current,
			d = c._drag;
		if ( e.type == "touchstart" ) {
			_this.enterState('touch');
		}
		if ( e.type == "mousedown" ) {
			_this.enterState('grab');
			e.preventDefault();
			e.stopPropagation();
		}
		d.itemStart = c.activePosition;
		d.timeStart = $.now();
		d.touchStart = _this.getEventCoord( e );
		d.shiftStart = _this.getPackShift();
		d.delta = 0;
		d.checkDirection = false;
		_this.$pack.addClass(_this.prefix + 'grab'); // добавляем на пак класс захвата
		if ( e.type == 'touchstart' ) {
			$( window ).bind( "touchmove." + _this.pluginNumber, _this, _this.dragMove );
		} else if ( e.type == 'mousedown' ) {
			$( window ).bind( "mousemove." + _this.pluginNumber, _this, _this.dragMove );
		}
	};
	/** unbind drag events */
	theinCarousel.prototype.dragEnd = function () {
		var _this = this,
			c = _this._current,
			d = c._drag,
			deltaSize = 3,          // размер сдвига при котором начинается сдвиг
			delayTime = 300;        // время прошедшее сначала захвата при котором начинается сдвиг

		if ( _this.isState( 'touch' ) ) _this.leaveState( 'touch' );
		if ( _this.isState( 'grab') ) _this.leaveState( 'grab' );
		// отписываемся от событий move
		$( window ).unbind( "touchmove." + _this.pluginNumber + " mousemove." + _this.pluginNumber );
		_this.$pack.removeClass( _this.prefix + 'grab' );
		// если слайдер был сдвинут
		if ( _this.isState('drag') ) {
			// Отключаем событие клик если слайдер был сдвинут на более чем 3px или прошло более 300ms
			if ( Math.abs( d.delta ) > deltaSize || new Date().getTime() - d.timeStart > delayTime ) {
				_this.$frame.find( '*' ).one( "click.in" + _this.cl.main, function () {
					return false;
				});
				setTimeout( function () {
					_this.$frame.find( '*' ).unbind( "click.in" + _this.cl.main);
				}, 100 );
			}
			if ( c.sticked ) {
				/* TODO REMOVE */ //console.log( '=== dragEnd ===  d.itemStart = '+d.itemStart+' c.active = '+ c.active+' d.delta = '+d.delta+' deltaSize = '+deltaSize+' c.active = '+c.active+' c.activePosition = '+c.activePosition );
				if ( d.itemStart == c.active && Math.abs( d.delta ) > deltaSize ) {
					if ( c.rtl && d.delta > 0 || !c.rtl && d.delta <= 0 ) {
						/* TODO REMOVE */ //console.log( '>>>>>>>>> next >>>>>>>> ');
						if ( c.loop || c.active != c.maxActive ) _this.next( 1 );
					} else {
						/* TODO REMOVE */ //console.log( '<<<<<<<<< prev <<<<<<<< ');
						if ( c.loop || c.active != 1 ) _this.prev( 1 );
					}
				} else {
					_this.change( c.activePosition );
				}
			}
			// если карусель не зацикленная и нет состояния прокрутка проверяем максимальный сдвиг
			if ( !c.loop && !_this.isState('scrolling')  ) _this.checkMaxShift();
			// запускаем на фрэйм cобытие scroll на случай очень плавного сдвига пользователя
			if ( c.motionType == 'scroll' ) _this.$frame.scroll();
			// проверка что актичнвый елемент не клон иначе сдвиг на реальный
			// if ( c.loop ) _this.toRealActive();
			_this.leaveState( 'drag' );
			_this.setTrigger( 'dragEnd' );
		} else if ( !c.loop ) {
			_this.checkMaxShift();
		}
		/*TODO remove*/ //console.log(' loop = '+c.loop+' scrolling = '+_this.isState( 'scrolling' ));
		// очищаем значения для сдвига
		_this.dragInfoClear();
	};
	/** дествия при event scroll  */
	theinCarousel.prototype.dragScrolling = function () {
		var _this = this,
			c = _this._current;
		if ( !_this.isState( 'scrolling' ) ) _this.enterState( 'scrolling' );
		// очищаем таймаут по которому сработает отмена события скролл и сменятся флаги
		/* TODO REMOVE */ //console.log('=== dragScrolling ===  scrolliing = active='+c.active+' activePosition = '+c.activePosition);
		clearTimeout( _this.scrollTimer );
		if ( !_this.isState( 'change' ) ) {
			_this.motionUpdateActive();
			_this.updateAddedElements();
			_this.setActive( c.active );
		}
		if ( !_this.isState( 'change' ) && !_this.isState( 'grab' ) && !_this.isState( 'touch' ) ) {
			// сдвиг полосы при loop и инерционной докрутке
			var x = _this.getPackShift().x,
				_x = _this.dragMoveCalc( x, true );
			if ( x != _x ) _this.setPackShift( _x, true );
			_this.scrollTimer = setTimeout( function () {
				/* TODO REMOVE */ //console.log( _this.scrollTimer );
				/* TODO REMOVE */ //console.log( 'check max shift' );
				_this.toRealActive();
				if ( !c.loop && c.motionType != 'scroll' ) _this.checkMaxShift();
				if ( c.sticked ) _this.change( c.active );
				_this.leaveState( 'scrolling' );
			}, 100 );
		}
	};
	/**
	 * очистка информации
	 * Cleaning Information
	 */
	theinCarousel.prototype.dragInfoClear = function () {
		var d = this._current._drag;
		d.itemStart = null;
		d.timeStart = null;
		d.shiftStart = null;
		d.touchStart = null;
		d.delta = null;
		d.checkDirection = null;
	};
	/**
	 * @param {Event}
	 */
	theinCarousel.prototype.dragMove = function ( e ) {
		var _this = e.data,
			c = _this._current,
			d = c._drag,
			coord = _this.getEventCoord( e ),
			x = d.shiftStart.x + ( c.motionType == 'scroll' ? ( d.touchStart.x - coord.x ) : ( coord.x - d.touchStart.x ) );

		/*TODO remove*/ //console.log('c.rtl = '+c.rtl +' motionType = '+c.motionType+' shiftStart = '+d.shiftStart.x+' touchStart = '+d.touchStart.x+' coord.x = '+coord.x+' x = '+x);

		x = _this.dragMoveCalc( x );
		if ( !_this.isState( 'drag' ) ) {
			_this.enterState( 'drag' );
			_this.setTrigger( 'dragStart' );
		}
		// проверяем что дельта движения по горизонтали больше чем по вертикали и отменяем сдвиг слайдера если движение по вертикали сильнее
		if ( d.checkDirection === false && Math.abs( d.touchStart.x - coord.x ) < Math.abs( d.touchStart.y - coord.y ) ) {
			_this.dragEnd();
			return false;
		} else {
			// флаг что проверку на начало сдвига прошла
			d.checkDirection = true;
		}

		// сдвиг пака если это не тач устройство и не скролл сдвиг
		if ( !(_this.isState( 'touch' ) && c.motionType == 'scroll') ) _this.setPackShift( x, true );
		d.delta = coord.x - d.touchStart.x;
		_this.motionUpdateActive();
		_this.updateAddedElements();
		/* TODO remove */ // console.log(' active '+ c.active);
	};
	/**
	 * Проверка и перерасчет координаты сдвига если вышло за границы активной облоасти
	 * @param {Number} coordinate.
	 * @param {Boolean} flag.
	 * @return {Number} new coordinate.
	 * */
	theinCarousel.prototype.dragMoveCalc = function ( x, scroll ) {
		var _this = this,
			c = _this._current,
			rtlScroll = ( c.rtl && c.motionType == 'scroll' ) ? true : false,
			min = rtlScroll ? -c.limitMax : c.limitMin,
			max = rtlScroll ? -c.limitMin : c.limitMax,
			added = c.between + ( c.center ? ( ( c.itemsSettings[ 1 ].width + c.itemsSettings[ c.originLength ].width ) / 2 ) : c.itemsSettings[ c.originLength ].width ),
			over;
		/* TODO REMOVE */ //console.log( '=== dragMoveCalc ===   min( '+min+' ) < x( '+x+' ) < max( '+max+' )    added ='+added );
		if ( x < ( ( c.loop && scroll ) ? ( min - added ) : min ) ) {
			over = min - x;
			/* TODO REMOVE */ //console.log( '=== 1 dragMoveCalc ===  X < MIN ===  over('+over+')   min( '+min+' ) < x( '+x+' ) < max( '+max+' ) ' );
			if ( c.loop ) {
				over = over - c.itemsOriginWidth.fullWidth * Math.floor( over / c.itemsOriginWidth.fullWidth );
				x = min + c.itemsOriginWidth.fullWidth - over;
			} else {
				x = min - _this.dragMoveReduse( over )
			}
		} else if ( x > ( ( c.loop && scroll ) ? ( max + added ) : max ) ) {
			over = x - max;
			/* TODO REMOVE */ //console.log( '=== 2 dragMoveCalc === X > MAX ===  over('+over+')   min( '+min+' ) < x( '+x+' ) < max( '+max+' ) ');
			if ( c.loop ) {
				over = over - c.itemsOriginWidth.fullWidth * Math.floor( over / c.itemsOriginWidth.fullWidth );
				x = max - c.itemsOriginWidth.fullWidth + over;
			} else {
				x = max + _this.dragMoveReduse( over );
			}
		}
		return x;
	};
	/**
	 * Подсчет уменьшения сдвига на концах
	 * @param {Number} coordinate.
	 * @return {Number} new coordinate.
	 * */
	theinCarousel.prototype.dragMoveReduse = function ( x ) {
		var c = this._current;
		if ( c.motionType != 'scroll' || ( c.motionType == 'scroll' && this.isState( 'grab' ) ) ) {
			x = ( c.elasticEnds && ( c.center || c.packWidth > c.frameWidth)) ? ( x / 5 ) : 0;
		}
		return x;
	};
	/**
	 * получение и обновление номера активного элемента на который сейчас сдвинут пак
	 * @param {Number} shift position
	 * */
	theinCarousel.prototype.motionUpdateActive = function () {
		var _this = this,
			c = _this._current,
			shift = _this.getPackShift().x,
			activePosition = c.activePosition;
		// пересчет позиции к положительным значениям в зависимости от типа сдвига и направленности
		if ( c.motionType == 'scroll' ) {
			shift = shift * ( c.rtl ? -1 : 1 );
		} else {
			shift = shift * ( c.rtl ? 1 : -1 );
		}
		/* TODO REMOVE */ //console.log('+++ motionUpdateActive === active '+c.active+' activePosition = '+c.activePosition+' ( ' + c.itemsSettings[ c.active ].shift + ' - ' + shift + ' - ' + c.itemsSettings[ ( c.active + 1 )  ].shift +')');
		// пересчет активной позиции при сменен итема
		activePosition = _this.motionUpdateActiveCalc( shift, activePosition );
		// приведение к значимой позиции для не зацикленных
		if ( !c.loop ) {
			if ( activePosition <= 0 ) {
				activePosition = 1;
			} else if ( activePosition > c.maxActive || shift > ( c.packFullWidth - c.frameFullWidth - c.elasticShift ) ) {
				activePosition = c.maxActive;
			}
		}
		c.activePosition = activePosition;
		_this.getRealActive();
		return c.activePosition;
	};
	theinCarousel.prototype.motionUpdateActiveCalc = function ( shift, active ){
		if ( !shift ) return false;
		var _this = this,
			c = _this._current;
		if ( !active && active != 0 ) return false;
		if ( c.itemsSettings[ active ] && shift < c.itemsSettings[ active ].shift ) {
			/* TODO REMOVE */ //console.log( 'active-- = '+active+' maxActivte = '+c.maxActive );
			active = _this.motionUpdateActiveCalc( shift, ( active - 1 ) );
		} else if ( c.itemsSettings[ ( active + 1 ) ] && shift >= c.itemsSettings[ ( active + 1 ) ].shift ) {
			/* TODO REMOVE */ //console.log( 'active++ = '+active+' maxActivte = '+c.maxActive );
			active = _this.motionUpdateActiveCalc( shift, ( active + 1 ) );
		}
		/* TODO REMOVE */ //console.log( 'active++ = '+active+' maxActivte = '+c.maxActive );
		return active;
	};
	theinCarousel.prototype.toRealActive = function(){
		var _this = this,
			c = _this._current;
		/* TODO REMOVE */ //console.log(' === toRealActive === c.active = '+c.active+' activePosition = '+c.activePosition );
		if ( c.activePosition < 1 || c.activePosition > c.maxActive ){
			_this.setPackShift( _this.dragMoveCalc( _this.getPackShift().x, true ) );
			c.activePosition = c.active;
		}
	};
	/* получение реального активного элемента  */
	theinCarousel.prototype.getRealActive = function(){
		var c = this._current;
		if ( c.itemsSettings && c.itemsSettings[ c.activePosition ] ){
			c.active = c.itemsSettings[ c.activePosition ].item
		}
	};
	/**
	 * проверка максимальной или минимальной позиции пака и сдвиг если вышли за границы
	 * calculating the maximum or minimum position of the pack
	 * @param {Object} obj
	 * @param {String | Object} property | states
	 * @param {String/Number | Object} value | states
	 */
	theinCarousel.prototype.checkMaxShift = function ( fast ) {
		var _this = this,
			c = _this._current,
			shift = _this.getPackShift().x,
			rtlScroll = ( c.rtl && c.motionType == 'scroll' ) ? true : false,
			min = rtlScroll ? -c.limitMax : c.limitMin,
			max = rtlScroll ? -c.limitMin : c.limitMax;
		/* TOFO REMOVE */ //console.log('=== Check Max Shift === shift = '+shift+ ' max = '+ max+ ' min = '+min);
		var	x = shift > max ? max : shift < min ? min : false;
		/* TOFO REMOVE */ //console.log('=== Check Max Shift === x = '+x);
		if ( x !== false ) {
			_this.setPackShift( x, fast );
		}

	};

	/** ----- Общие методы ----- */

	theinCarousel.prototype.getEventCoord = function ( event ) {
		var result = {
			x: null,
			y: null
		};
		event = event.originalEvent || event || window.event;
		event = event.touches && event.touches.length ?
			event.touches[ 0 ] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[ 0 ] : event;
		if ( event.pageX ) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}
		return result;
	};
	/**
	 * enters a state.
	 * @param {String} the state name.
	 */
	theinCarousel.prototype.enterState = function ( name ) {
		$.each( [ name ].concat( this._state.tags[ name ] || [] ), $.proxy( function ( i, name ) {
			if ( this._state.current[ name ] === undefined ) {
				this._state.current[ name ] = 0;
			}
			this._state.current[ name ]++;
			/* TODO REMOVE */ //console.log(this._state.current);
			/* TODO REMOVE */ //console.log(' ► ► ► ► ► '+name+' ► ► ► ► ►' );
			this.defShowStates( this._state.current );
		}, this ));
	};
	/**
	 * leaves a state.
	 * @param {String} the state name.
	 */
	theinCarousel.prototype.leaveState = function ( name ) {
		$.each([ name ].concat( this._state.tags[ name ] || []), $.proxy(function ( i, name ) {
			if ( this._state.current[ name ] && this._state.current[ name ] > 0) {
				this._state.current[ name ]--;
			}
			/* TODO REMOVE */ //console.log(this._state.current);
			/* TODO REMOVE */ //console.log(' ◄ ◄ ◄ ◄ ◄ '+name+' ◄ ◄ ◄ ◄ ◄' );
			this.defShowStates( this._state.current );
		}, this ));
	};
	/**
	 * is state
	 * @param {String} The state to check.
	 * @returns {Boolean}  The flag which indicates if the carousel is busy.
	 */
	theinCarousel.prototype.isState = function ( name ) {
		return this._state.current[ name ] && this._state.current[ name ] > 0;
	};
	/**
	 * проверка мобильный браузер или нет
	 * check mobile browser
	 * @returns {true | false}
	 */
	theinCarousel.prototype.mobileBrowser = function () {
		var check = false;
		( function ( a ) {
			if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
		})( navigator.userAgent || navigator.vendor || window.opera );
		return check;
	};
	/**
	 * установка стиля(ей) на объект
	 * set style to object
	 * @param {Object} obj
	 * @param {String | Object} property | states
	 * @param {String/Number | Object} value | states
	 */
	theinCarousel.prototype.setStyle = function ( obj, prop, val ) {
		var _this = this;
		if ( typeof prop === 'object' ) {
			$.each( prop, function ( key, value ) {
				_this.setStyle( obj, key, value );
			});
		} else if ( prop === 'transition' && typeof val === 'object' ) {
			_this.setStyleTransition( obj, val );
		} else {
			obj.css( _this.getPrefixedStyle( obj[ 0 ].style, prop ), val )
		}
	};
	/**
	 * установка стиля transition на объект
	 * set transition style to object
	 * @param {Object} obj
	 * @param {Object} states { <prop>, <duration>, <type>, <delay> }
	 */
	theinCarousel.prototype.setStyleTransition = function ( obj, states ) {
		var _this = this;
		if ( states.prop === 'none' ) {
			obj.css(_this.getPrefixedStyle( obj[ 0 ].style, 'transition' ), 'none' );
		} else {
			var trProp = ( !states.prop || states.prop == false ) ? '' : _this.getPrefixedStyle( obj[ 0 ].style, states.prop ),
				trDuration = ( ( !states.duration && states.duration != 0 ) || states.duration === false ) ? '' : parseInt( states.duration >= 0 ? states.duration : _this.transitionDuration || 100 ) + 'ms',
				trType = ( !states.type || states.type === false ) ? '' : states.type || _this.transitionType || 'ease-out',
				trDelay = ( states.delay && typeof states.delay == 'number' && states.delay > 0 ) && states.delay ? parseInt( states.delay ) + 'ms' : '';
			obj.css( _this.getPrefixedStyle( obj[ 0 ].style, 'transition' ), trProp + ' ' + trDuration + ' ' + trType + ' ' + trDelay );
		}
	};
	/**
	 * получение префикса для значения свойства
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String | Undefined} prefixed
	 */
	theinCarousel.prototype.getPrefixedStyle = function ( obj, property ) {
		var _this = this,
			prefix,
			prop,
			camelProp = property[ 0 ].toUpperCase() + property.slice( 1 ),
			i = 0,
			vendor_prefixes = [ '', 'webkit', 'Moz', 'MS', 'ms', 'o' ];
		if ( _this.options.vendor_prefixes ) vendor_prefixes = _this.options.vendor_prefixes;
		while ( i < vendor_prefixes.length ) {
			prefix = vendor_prefixes[ i ];
			prop = ( prefix ) ? prefix + camelProp : property;
			if ( prop in obj ) {
				return prop;
			}
			i++;
		}
		return property;
	};
	/**
	 * проверка поддержки css свойства
	 * check support for css properties
	 * @param {String} property
	 * @param {String} value
	 * @returns {true | false} Is supported
	 */
	theinCarousel.prototype.supportsCSS = function ( property, value ) {
		var element = document.createElement( 'span' );
		property = this.getPrefixedStyle( element, property );
		if ( element.style[ property ] !== undefined ) {
			element.style.cssText = property + ':' + value;
		} else {
			return false;
		}
		return element.style[ property ] === value;
	};
	/**
	 * тригер
	 * triggers a public event.
	 * @param {String} event name
	 * @param {Object} data array or object
	 * @param {Object} event object
	 */
	theinCarousel.prototype.setTrigger = function ( name, data, $obj ) {
		if ( typeof name != 'string' ) return false;
		var _this = this,
			extObj = {
				"eventType": name,
				"plugin": _this
			},
			data = ( $.isPlainObject( data ) ) ? $.extend( data, extObj ) : extObj,
			$obj = ( typeof $obj == 'object' && $obj.length > 0 ) ? $obj : _this.$element;
		$obj.trigger( name + '.' + _this.cl.main, data );
	};
	/**
	 * получение ширины окна клиента
	 * @returns {Number} size
	 */
	theinCarousel.prototype.getClientWidth = function () {
		return Math.max( window.innerWidth || 0, (document.getElementsByTagName( 'html' )[ 0 ] || {} ).clientWidth || 0)
	};
	/**
	 * получение высоты окна клиента
	 * @returns {Number} size
	 */
	theinCarousel.prototype.getClientHeigth = function () {
		return Math.max( window.innerHeight || 0, (document.getElementsByTagName( 'html' )[ 0 ] || {} ).clientHeight || 0)
	};
	/**
	 * Translation number or percent number to positive number
	 * @param {Number | String} number for translation
	 * @return {Number} positive number
	 * */
	theinCarousel.prototype.toPositiveNumber = function ( number, $el ) {
		if ( !number ) {
			return 0;
		} else if ( typeof number == 'number' ) {
			return number >= 0 ? number : 0;
		} else if ( typeof number == 'string' ) {
			if ( number.indexOf( '%' ) >= 0 ){
				var percent = parseInt( number.slice( 0, number.indexOf( '%' ) ) ),
					size = ( $el && $el.length > 0 ) ? $el.width() : 0;
				if ( percent > 0 && percent <= 100 && size > 0 ) {
					return ( size / 100 * percent );
				}
			} else {
				number = parseInt( number );
				return ( number >= 0 ? number : 0 );
			}
		}
		return 0;
	};
	/**
	 * Gets viewport width.
	 * @return {Number} - The width in pixel.
	 */
	theinCarousel.prototype.viewportWidth = function() {
		var width;
		if ( typeof this.options.responsiveBaseElement == 'string' && this.options.responsiveBaseElement.length > 0 ) {
			width = $( this.options.responsiveBaseElement ).width();
		} else if ( this.options.responsiveBaseElement === true && this.$sizeFrame && this.$sizeFrame.length > 0) {
			width = this.$sizeFrame.width()
		} else {
			width = this.getClientWidth()
		}
		/*TODO remove */ //console.log(' viewportWidth = '+ width);
		return width;
	};

	/* TODO ВНЕДРИТЬ ПРЕЛОАД КАРТИНОК !!! ПОЗЖЕ !!! */

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	theinCarousel.prototype.preloadAutoWidthImages = function( images ) {
		images.each( $.proxy( function( i, element ) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/* function for test */
	/* TODO delete */
	theinCarousel.prototype.defShowStates = function( obj ){};
	theinCarousel.prototype.showStates = function( obj ) {
		var _this = this,
			st = "";
		$.each( obj, function( i, v ) {
			st = st + '<span class="' + ( _this.prefix + ( v > 0 ? 'show-states-true' : 'show-states-false' ) ) + '">' + i + ' = ' + v + '</span> ';
		});
		$( _this.options.showStates ).empty().append( $('<div class="' + _this.prefix + 'show-states">' + st + '</div>') );
	};


	/**
	 * The jQuery Plugin for the The-in Carousel
	 * @public
	 */
	$.fn.theinCarousel = function ( options ) {
		return this.each(function () {
			var instance = $.data( this, 'theinCarousel' );
			if ( instance ) {
				if ( $.isPlainObject( options )) {
					instance.update( options );
				} else {
					console.log( 'option object is not a plain object' )
				}
			} else {
				$.data( this, 'theinCarousel', new theinCarousel( this, options ) );
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.theinCarousel.Constructor = theinCarousel;

})(jQuery, window, document);





/* TODO доделать*/

;( function ( $, window, document, undefined ) {
	var Navigation = function( carousel ){
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;
		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;
		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;
	};
	/**
	 * Default options.
	 * @public
	 */
	Navigation.Defaults = {};
	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {};
	//$.fn.theinCarousel.Constructor.Plugins.Navigation = Navigation;
})(jQuery, window, document);


const SHARE_URL = 'SHARE_URL',
	SHARE_TITLE = 'SHARE_TITLE',
	SHARE_FB_ID = 'SHARE_FB_ID';

var riaShare = {
	services_sort: [],
	options: {
		shareFullEl: '.share-full',
		shareEl: '.share'
	},
	shareURL:'SHARE_URL',
	shareTitle:'SHARE_TITLE',
	services: {
		facebook: {
			id:'facebook',
			name: 'Facebook',
			popupUrl: `https://www.facebook.com/sharer/sharer.php?u=${SHARE_URL}`,
			popupWidth: 600,
			popupHeight: 359
		},
		twitter: {
			id:'twitter',
			name: 'Twitter',
			popupUrl: `https://twitter.com/intent/tweet?url=${SHARE_URL}&text=${SHARE_TITLE}`,
			popupWidth: 600,
			popupHeight: 250
		},
		whatsapp: {
			id:'whatsapp',
			name: 'WhatsApp',
			// popupUrl: `whatsapp://send?text=${SHARE_URL}`,
			popupUrl: `https://api.whatsapp.com/send?text=${SHARE_TITLE}&url${SHARE_URL}`,
			popupWidth: 820,
			popupHeight: 500
		},
		telegram: {
			id: 'telegram',
		    name: 'Telegram',
		    popupUrl: `https://telegram.me/share/url?url=${SHARE_URL}`,
		    popupWidth: 820,
		    popupHeight: 500
		},
		vk: {
			id: 'vk',
			name: 'ВКонтакте',
			popupUrl: `https://vk.com/share.php?url=${SHARE_URL}&title=${SHARE_TITLE}`,
			popupWidth: 655,
			popupHeight: 450
		},
		odnoklassniki: {
			id: 'odnoklassniki',
			name: 'Одноклассники',
			popupUrl: `https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&service=odnoklassniki&st.shareUrl=${SHARE_URL}`,
			popupWidth: 580,
			popupHeight: 336
		},
		messenger: {
			id: 'messenger',
			name: 'Messenger',
			popupUrl: `fb-messenger://share/?link=${SHARE_URL}&app_id=${SHARE_FB_ID}`,
			popupWidth: 820,
			popupHeight: 500
		},
		viber: {
			id:'viber',
			name: 'Viber',
			popupUrl: `viber://forward?text=${SHARE_URL}`,
			popupWidth: 820,
			popupHeight: 500
		},
		google: {
			id:'google',
		    name: 'Google+',
		    popupUrl: `https://plus.google.com/share?url=${SHARE_URL}`,
		    popupWidth: 500,
		    popupHeight: 550
		},
		mailru: {
			id:'mailru',
		    name: 'Mail.ru',
		    popupUrl: `https://connect.mail.ru/share?share_url=${SHARE_URL}&title=${SHARE_TITLE}`,
		    popupWidth: 492,
		    popupHeight: 500
		},
		pinterest: {
			id:'pinterest',
		    name: 'Pinterest',
		    popupUrl: `https://pinterest.com/pin/create/button/?url=${SHARE_URL}&description=${SHARE_TITLE}`,
		    popupWidth: 740,
		    popupHeight: 550
		},
		flipboard: {
			id:'flipboard',
		    name: 'Flipboard',
		    popupUrl: `https://share.flipboard.com/bookmarklet/popout?v=2&title=${SHARE_TITLE}&url=${SHARE_URL}`,
		    popupWidth: 820,
		    popupHeight: 500
		},
		wykop: {
			id:'wykop',
			name: 'Wykop',
			popupUrl: `http://www.wykop.pl/dodaj/link/?url=${SHARE_URL}&title=${SHARE_TITLE}`,
			popupWidth: 820,
			popupHeight: 500
		},
		meneame: {
			id:'meneame',
			name: 'Menéame',
			popupUrl: `https://www.meneame.net/submit.php?url=${SHARE_URL}&title=${SHARE_TITLE}`,
			popupWidth: 820,
			popupHeight: 500
		},
		hatena: {
			id:'hatena',
			name: 'Hatena',
			popupUrl: `https://b.hatena.ne.jp/site/jp.sputniknews.com/#bookmark_url=${SHARE_URL}`,
			popupWidth: 820,
			popupHeight: 500
		},
		weibo: {
			id:'weibo',
			name: 'Weibo',
			popupUrl: `https://service.weibo.com/share/share.php?url=${SHARE_URL}&title=${SHARE_TITLE}`,
			popupWidth: 820,
			popupHeight: 500
		},
		wechat: {
			id:'wechat',
			name: 'WeChat',
			// popupUrl: `https://service.weibo.com/share/share.php?url=${SHARE_URL}&title=${SHARE_TITLE}`,
			popupWidth: 820,
			popupHeight: 500
		},
		line: {
			id:'line',
			name: 'Line',
			popupUrl: `https://timeline.line.me/social-plugin/share?url=${SHARE_URL}&title=${SHARE_TITLE}`,
			popupWidth: 820,
			popupHeight: 500
		}
	},
	init: function() {
		this.shareModalTemplate();
		this.initFullList();
		this.initItems( $('body') );

		$(window).on('resize', function() {
			if ($(riaShare.options.shareFullEl).hasClass('m-article')) {
				riaShare.hideFullList();
			}
			if ($(riaShare.options.shareFullEl).hasClass('active')) {
				riaShare.coordFullList();
			}
		});
	},
	initItems: function(el) {
		var _this = this;
		var j = 0;

		// var deskServices = Object.keys(_this.services).filter(e => !_this.services[e].mobile).length
		// console.log(el.find(this.options.shareEl))
		if(!el.find(this.options.shareEl).hasClass('m-active')) {
			el.find(this.options.shareEl).addClass('m-active');
			for (var i = 0; i < this.services_sort.length; i++) {
				if ((this.services_sort[i][3].mobile && riaShare.mobileAndTabletcheck()) || !this.services_sort[i][3].mobile) {
					var data = {
						name: this.services_sort[i][0],
						title: this.services_sort[i][3].name,
						url: el.find(this.options.shareEl).attr('data-url'),
					}

					if (++j < 4) {
						el.find(this.options.shareEl).append(_this.shareBlockTemplate(data));
					}
				}
			}

			el.find(this.options.shareEl).each(function () {
				if (_this.services_sort.filter(el => !el[3].mobile).length > 3 || !Boolean($(this).data('hidemore'))) {
					$(this).append(_this.shareBlockMoreTemplate());
				}
			})

			el.on('click', '.share__more', function (e) {
				e.preventDefault()
				var shareurl = $(this).closest('[data-url]').attr('data-url');
				var sharetitle = $(this).closest('[data-title]').attr('data-title');
				var shareid = $(this).closest('[data-id]').attr('data-id');
				var shareservice = $(this).closest('[data-id]').attr('name');
				if (typeof navigator.share !== 'undefined' && riaShare.mobileAndTabletcheck()) {
					navigator.share({
						url: shareurl,
						title: sharetitle
					});

					if(typeof ria === 'object') {
						ria.dispatch('share',{id:shareid,service:shareservice,url:shareurl,title:sharetitle});
					}
					if (shareid != '') {
						$.get('/services/counter/set/?obj_id=' + shareid + '&obj_type=article&action_type=share');
					}

				} else {
					if ($(this).hasClass('m-active')) {
						riaShare.hideFullList();
					} else {
						var type = false;
						if ($(this).parents('.share:first').hasClass('m-article')) {
							type = 'article';
						} else if ($(this).parents('.share:first').hasClass('m-header')) {
							type = 'header';
						}
						riaShare.showFullList(e, $(this), shareurl, sharetitle, shareid, type);
					}
				}

				$(window).on('scroll.shareFullEl', function () {
					if ($(riaShare.options.shareFullEl).hasClass('m-article') || (document.documentElement.clientWidth > 924 && $(riaShare.options.shareFullEl).hasClass('m-header'))) {
						riaShare.hideFullList();
					}
					$(document).off('scroll.shareFullEl');
				});
			});

			el.on('click', '.share a[data-name]', function (e) {
				riaShare.serviceClick(e, $(this));
			});
		}

	},
	shareBlockTemplate(data){
		return $(`<a href="${data.url}" title="${data.name}" class="share__link" data-name="${data.name}"><svg class="svg-icon"><use xlink:href="${ria.getIcon(data.name)}"/></svg></a>`);
	},
	shareBlockMoreTemplate(){
		return $(`<a href="#" title="more" class="share__more"><span class="share__more-desktop"><svg class="svg-icon"><use xlink:href="${ria.getIcon('menu')}"/></svg></span><span class="share__more-mobile"><svg class="svg-icon"><use xlink:href="${ria.getIcon('share')}"/></svg></span></a>`);
	},
	shareFullTemplate(data){
		return $(`<li class="share-full__${data.name}"><a href="#" title="${data.name}" data-name="${data.name}"><span class="share-full__icon"><svg class="svg-icon"><use xlink:href="${ria.getIcon(data.name)}"/></svg></span><span class="share-full__text">${data.title}</span></a></li>`);
	},
	shareModalTemplate(){
		const url = (GLOBAL && GLOBAL.www) || location.origin
		const title = (GLOBAL && GLOBAL.seo && GLOBAL.seo.title) || document.title
		return $('body').append($(`<div class="modal-share-full"></div><div class="share-full" data-url="${url}" data-title="${title}"><ul></ul></div>`));
	},
	popupUrl(popupUrl, data){
		return popupUrl.replace(SHARE_URL,data.url).replace(SHARE_TITLE,data.title).replace(SHARE_FB_ID, (GLOBAL && GLOBAL.social.fbID) || '')
	},
	initFullList: function( selector ) {
		var _this = this;
		if (typeof selector === 'undefined') {
			selector = this.options.shareFullEl;
		}
		var share = ((GLOBAL && GLOBAL.share) || []);
		var services = share.map(el => this.services[el.name]).filter(e => e);
		this.services_sort = [];

		for (var j = 0; j < services.length; j++){
			this.services_sort.push([services[j].id, parseInt((typeof ria === 'object' && ria.lsGet('ria.share.' + services[j].name)) || 0 ), (j + 1), Object.assign({}, services[j], {mobile: share.find(e => e.name === services[j].id).mobile})]);
		}

		this.services_sort.sort(function(a, b) {
			if (a[1] < b[1]) return 1;
			if (a[1] > b[1]) return -1;
			if (a[2] < b[2]) return -1;
			return 1;
		});

		for (var i = 0; i < this.services_sort.length; i++) {
			if ( ( this.services_sort[i][3].mobile && riaShare.mobileAndTabletcheck() ) || !this.services_sort[i][3].mobile ) {
				var data = {
					name: this.services_sort[i][0],
					title: this.services_sort[i][3].name
				}

				$( selector ).find(' > ul').append( _this.shareFullTemplate(data));
			}
		}

		$( selector ).on('click', 'a[data-name]', function(e) {
			riaShare.serviceClick( e, $(this) );
		});
	},
	serviceClick: function(e, el) {
		e.stopPropagation();

		var _this = this,
			service = el.data('name'),
			url = el.closest('[data-url]').attr('data-url'),
			title = el.closest('[data-title]').attr('data-title');
		var id = el.closest('[data-id]').attr('data-id');

		if ( url.lastIndexOf('http', 0) !== 0 ) {
			url = GLOBAL.www + url;
		}

		var data = {
			url: GLOBAL.rtl ? encodeURIComponent(encodeURI(url)) : encodeURIComponent( url ),
			title: encodeURIComponent( title )
		}

		if(service === 'wechat'){
			if(typeof qrcodegen === 'object'){
				let div = $('<div class="share__qr"></div>'),
					QRC = qrcodegen.QrCode,
					qr = QRC.encodeText(url, QRC.Ecc.MEDIUM),
					svg = qr.toSvgString(4);

				el.append(div.append(svg));

				$(document).on('click.social-wechat', function(e) {
					if($(e.target).closest('.share__qr')){
						div.remove();
						$(document).off('click.social-wechat');
						$(document).off('scroll.social-wechat');
					}
				});

				$(document).on('scroll.social-wechat', function(e) {
					div.remove();
					$(document).off('click.social-wechat');
					$(document).off('scroll.social-wechat');
				})
			}
		} else {
			this.openPopup(_this.popupUrl(this.services[service].popupUrl, data), {
				width: this.services[service].popupWidth,
				height: this.services[service].popupHeight
			});

			ria.lsSet('ria.share.' + service, ( parseInt( ria.lsGet('ria.share.' + service) || 0 ) + 1 ) );
			if(typeof ria === 'object') {
				ria.dispatch('share',{id,service,url,title});
			}
		}

		if (id != '') {
			$.get('/services/counter/set/?obj_id=' + id + '&obj_type=article&action_type=share');
		}
	},
	showFullList: function(e, el, url, title, id, type) {
		e.stopPropagation();

		$(document).on('click.hideshare', function() {
			riaShare.hideFullList();
			$(document).off('click.hideshare');
		});

		if (typeof this.el !== 'undefined' ) {
			this.el.removeClass('m-active');
		}
		this.el = el;
		this.el.addClass('m-active');

		$(this.options.shareFullEl).attr({
			'data-url': url,
			'data-title': title,
			'data-id': id
		});

		if (document.documentElement.clientWidth > 924) {
			riaShare.coordFullList( type );
			$(this.options.shareFullEl).addClass('active');
		} else {
			$('html').addClass('modal-share');
			ria.disablePageScroll(true);

			if (document.documentElement.clientWidth < 400) {
				$(this.options.shareFullEl).css({'right': '10px', 'left': '10px', 'bottom': '10px'});
			} else {
				$(this.options.shareFullEl).css({'right': '10px', 'bottom': '10px'});
			}
			$(this.options.shareFullEl).addClass('active');
		}
		if ( type == 'article' ){
			$(this.options.shareFullEl).addClass('m-article');
		} else {
			$(this.options.shareFullEl).removeClass('m-article');
		}
		if ( type == 'header' ){
			$(this.options.shareFullEl).addClass('m-header');
		} else {
			$(this.options.shareFullEl).removeClass('m-header');
		}
	},
	coordFullList: function( type ) {
		var cw = document.documentElement.clientWidth,
			el = this.el;
		if (cw < 400) {
			$(this.options.shareFullEl).css({'right': '10px', 'bottom': '10px', 'left': '10px', 'top': 'auto'});
		} else if (cw < 925) {
			$(this.options.shareFullEl).css({'right': '10px', 'bottom': '10px', 'left': 'auto', 'top': 'auto'});
		} else {
			var btn_top = el.offset().top,
				btn_left = el.offset().left,
				btn_width = el.outerWidth(),
				btn_height = el.outerHeight(),
				window_h = document.documentElement.clientHeight,
				window_scroll = window.pageYOffset || document.documentElement.scrollTop,
				distance_top = (btn_top - window_scroll),
				distance_bottom = (window_scroll + window_h - btn_top),
				popup_w = $(this.options.shareFullEl).width(),
				popup_h = $(this.options.shareFullEl).height(),
				popup_top = (distance_top > distance_bottom) ? btn_top - popup_h - 3 : btn_top + btn_height + 1,
				popup_left = btn_left - popup_w + btn_width/2 + 18,
				popup_right = btn_left - popup_w - btn_width/2 + 10;

			if ( type == 'article') {
				popup_top = btn_top - 10;
				popup_left = btn_left + btn_width + 10;
			}
			if (distance_top > distance_bottom) {
				$(this.options.shareFullEl).removeClass('m-bottom');
			} else {
				$(this.options.shareFullEl).addClass('m-bottom');
			}

			if(GLOBAL && GLOBAL.rtl) {
				if($(el).closest(this.options.shareEl).hasClass('m-article')){
					$(this.options.shareFullEl).css({'left': popup_right+'px', 'top': popup_top+'px', 'bottom': 'auto', 'right': 'auto'});
				}else{
					$(this.options.shareFullEl).css({'left': btn_left - btn_width/2 + 6 + 'px', 'top': popup_top+'px', 'bottom': 'auto', 'right': 'auto'});
				}
			}else{
				$(this.options.shareFullEl).css({'left': popup_left+'px', 'top': popup_top+'px', 'bottom': 'auto', 'right': 'auto'});
			}
		}
	},
	openPopup: function(url, params) {
		var left = Math.round(screen.width/2 - params.width/2);
		var top = 0;
		if (screen.height > params.height) {
			top = Math.round(screen.height/3 - params.height/2);
		}

		var win = window.open(url, 'sl_' + this.service, 'left=' + left + ',top=' + top + ',' +
			'width=' + params.width + ',height=' + params.height + ',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
		if (win) {
			win.focus();
		}
		else {
			location.href = url;
		}
		if (typeof this.el != 'undefined') {
			riaShare.hideFullList();
		}
	},
	hideFullList: function() {
		$('html').removeClass('modal-share');
		this.el.removeClass('m-active');
		this.el.removeClass('m-article');
		ria.disablePageScroll( false );
		$(this.options.shareFullEl).css({'left': 'auto', 'top': 'auto', 'bottom': 'auto', 'right': 'auto'}).removeClass('active');
	},
	mobileAndTabletcheck: function() {
		var check = false;
		(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}
}

/**
 * <a class="l-photoview__open"
 *   data-photoview_group="{{ String }}"
 *   data-photoview_src="{{ Url }}"
 *   data-photoview_sharelink="{ link for share }"
 *   data-photoview_sharetitle="{ title for share }"
 *   data-photoview_shareid="{ article id for share }"
 *   data-photoview_desc="{ description text }"
 *   data-photoview_copy="{ copyright text }"
 *   data-photoview_copylink="{ copyright link}"
 *   data-photoview_extlink="{ photobank link }">
 * </a>
 *
 *
 *
 *  ОТКРЫТЬ
 *
 *
 *
 *
 * */


;"use strict";

var photoViewWidget = {
	init: function( options ){
		var _this = this;
		/** основные слои: контентный и фотослой */
		_this.$page = ( options && options.page ) ? options.page : $( "#page" );                // выборка слоя данных
		_this.$el = ( options && options.photoview ) ? options.photoview : $( "#photoView" );   // выборка слоя просмотра фото
		/** проверка наличия слоев для виджета  */
		if ( !_this.$page.length || !_this.$el.length ) {
			console.log('It is not possible to initialize photoViewWidget');
			return;
		}
		/** переменные префиксов */
		_this.prefix = ( options && options.prefix ) ? options.prefix : 'photoview';
		_this.classPrefix = '.' + _this.prefix + '__';
		/** НАСТРОЙКИ */
		_this.settings = {
			updateGroupOpen     : false,                    // обновлять набор элементов каждый раз при открытии галереи (для динамически подгружаемого контента)
			loopItems           : true,                     // зацикливать слайды по кругу
			durationTransition  : 300,                      // длительность transition в ms
			typeTransition      : 'ease-out',               // тип смены слайда
			desktopWidth        : 925                       // ширина экрана при которой считается desktop версией
		};
		/** СОСТОЯНИЯ */
		_this.states = {
			widgetOpen          : false,                    // флаг photoview открыт
			hammerFunc          : true,                     // наличие hammerJS
			storeEnabled        : true,                     // поддержка history, флаг надо использовать
			storeFromHistory    : false,                    // флаг что пришли из history
			itemChanges         : false,                    // флаг "смена слайда"
			visibleControls     : true,                     // видимость навигации
			ticking             : false                     // флаг "трансформация картинки"
		};
		/** модификаторы */
		_this.modPhotoviewOpen = 'm-photoview-open';                        //
		_this.modeBlur = 'm-blur';                                          // класс блюра на слой данных
		_this.modeDisabled = 'm-disabled';                                  //
		_this.modeOpen = 'm-open';                                          //
		_this.modeHidden = 'm-hidden';                                      //
		/** view height */
		_this.clientHeight = _this.getCh();
		/** DATA - атрибуты элемента */
		_this.dataGroup =       _this.prefix + '-group';                    // [photoview]-group       атрибут группы
		_this.dataSrc =         _this.prefix + '-src';                      // [photoview]-src         атрибут урла картинки
		_this.dataImageId =     _this.prefix + '-image-id';                 // [photoview]-image-id    атрибут id картинки
		_this.dataShareLink =   _this.prefix + '-sharelink';                // [photoview]-sharelink   атрибут линк для шары
		_this.dataShareTitle =  _this.prefix + '-sharetitle';               // [photoview]-sharetitle  атрибут заголовок для шары
		_this.dataShareId =     _this.prefix + '-shareid';                  // [photoview]-shareid     атрибут id статьи для шары
		/** STORE */
		_this.store = {
			name : 'pv',    // параметр в урле для хранения состояния
			group : 'g',    // параметр в атрибуте идентификатор группы
			photo : 'p'     // параметр в атрибуте идентификатор фото
		};
		/** items info */
		_this.group = {
			id : false,     // номер набора элементов
			$items: false,  // выборка слайдов
			length : false  // кол-во слайдов
		};
		/*_this.sub = {
			$obj: false
		};*/
		/** картинка и параметры трансформации */
		_this.image = {
			$obj : false,       // объект картинки
			size : {
				w: false,       // ширина картинки
				h: false        // высота картинки
			},
			translate : {
				start_x : false,    // начало отсчета по x для сдвига картинки
				start_y : false,    // начало отсчета по y для сдвига картинки
				x : false,          // значение x для трансформации
				y : false           // значение y для трансформации
			},
			scale : {
				actual : false,     // значение scale
				min : 1,            // минимальное значение scale
				max : 3,            // максимальное значнеие scale
				step : 5            // шаг в процентах при зумировании колесиком
			},
			origin : {
				x: false,           // значение origin x для трансформации
				y: false            // значение origin y для трансформации
			}
		};
		/** инфа по Активному слайду */
		_this.itemActive = {
			$obj : false,
			index : false,
			src : false
		};
		/** инфа по следующему слайду */
		_this.itemPrev = {
			$obj : false,
			index : false,
			src: false
		};
		/** инфа по предыдущему слайду */
		_this.itemNext = {
			$obj : false,
			index : false,
			src: false
		};
		/** сохраненние состояний страницы */
		_this.saveElStates = {
			bodyTop : 0,         // позиция контента по вертикали
			bodyLeft : 0,        // позиция контента по горизонтали
			htmlTop : 0,
			htmlLeft : 0,
			bodyOverflow : false
		};
		/** массив селекторов / объектов с динамической позицией исключений из области клика */
		_this.exceptionDуnamicTap = [
			_this.getBy( _this.classPrefix + 'desc' )
		];
		_this.disabledHideControls = false;                 // флаг что был тап по элементу исключения
		/** массив селекторов / объектов исключений из области клика */
		_this.exceptionTap = [
			_this.getBy( _this.classPrefix + 'social' ),    // для статичных объктов
			_this.classPrefix + 'desc a',                   // для объектов создаваемых динамически
			_this.getBy( _this.classPrefix + 'btn-prev' ),
			_this.getBy( _this.classPrefix + 'btn-next' )
		];
		/** массив селекторов / объектов с переключением видимосии в зависимости от рамеров экрана */
		_this.variableVisibility = [
			_this.getBy( _this.classPrefix + 'btn-prev i' ),    // иконка кнопка Prev
			_this.getBy( _this.classPrefix + 'btn-next i' )     // иконка кнопка Next
		];
		/** префиксы браузеров для подстановки стилей с префиксами */
		_this.vendor_prefixes = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
		/** Hammer */
		_this.hammerManager = false;
		/** Навешиваем стили на слои */
		_this.setStyle( _this.$page,{
			'position':'relative',
			'width':'100%'
		});
		_this.setStyle( _this.$el,{
			'position':'absolute',
			'top': 0,
			'right': 0,
			'left': 0,
			'z-index': 1015,
			'display':'none',
		});
		/* Запуск кастомного скролла */
		/* !!! обязательно до  update$Obj иначе осхранятся не корректные указатели !!! */
		if( typeof photoViewWidget !==  'undefined' ) {
			_this.getBy( this.classPrefix + 'desc-over' ).theinScroll({
				theme : 'default-light',
				autoHide : false
			});
		}
		/** Создаем объекты для работы */
		_this.update$Obj();
		/** Вызов обработчиков */
		_this.addHandlers();
	},
	update$Obj : function(){

		this.$buttonPrev = this.getBy( this.classPrefix + 'btn-prev' );
		this.$buttonNext = this.getBy( this.classPrefix + 'btn-next' );
		this.$buttonClose = this.getBy( this.classPrefix + 'btn-close' );
		this.$canHide = this.getBy( this.classPrefix + 'can-hide' );

		this.$sub = this.getBy( this.classPrefix + 'sub' );

		this.$itemPrev = this.getBy( this.classPrefix + 'prev' );
		this.$itemActive = this.getBy( this.classPrefix + 'active' );
		this.$itemNext = this.getBy( this.classPrefix + 'next' );

		this.$placeIndexView = this.getBy( this.classPrefix + 'index-view' );
		this.$placeSocial = this.getBy( this.classPrefix  + 'social' );

		this.$desc = this.getBy( this.classPrefix + 'desc' );
		this.$descMore = this.getBy( this.classPrefix + 'desc-more' );
		this.$descOver = this.getBy( this.classPrefix + 'desc-over' );
		this.$descSize = this.getBy( this.classPrefix + 'desc-size' );
		this.$descText = this.getBy( this.classPrefix + 'desc-text' );

	},
	/**
	 * Обработчики
	 */
	addHandlers: function(){
		var _this = this;
		/* Если нет Hammerjs выставляем флаг false */
		if ( typeof Hammer === 'function' ){
			_this.touchInitHammer();
		} else {
			_this.states.hammerFunc = false;
		}
		/* Предыдущий слайд */
		_this.$buttonPrev.on( 'click', function( e ){
			e.preventDefault();
			_this.changePrev();
		});
		/* Следующий слайд */
		_this.$buttonNext.on( 'click', function( e ){
			e.preventDefault();
			_this.changeNext();
		});
		/* Запрет сдвига картинок и описания */
		$( _this.classPrefix + 'img, ' + _this.classPrefix + 'controls a').on( 'dragstart drag dragstop', function(){
			return false;
		});
		/* Открытие галереи по клику на элемент с data src */
		$('body').on( 'click', _this.classPrefix + 'open[data-' + _this.dataSrc + ']', function( e ){
			e.preventDefault();
			_this.open({
				clickObj: $( this )
			});
		});
		/* Закрытие photoview по клику на крестик */
		_this.$buttonClose.on( 'click', function( e ){
			e.preventDefault();
			_this.close();
		});
		/** ИЗМЕНЕНИЯ РАЗМЕРОВ ОКНА БРАУЗЕРА */
		$(window).resize( function(){
			/** видимость, позиция и размеры элементов фотовью */
			_this.clientHeight = _this.getCh();
			_this.setPhotoviewHeight();
			_this.posLayerTop();
			_this.visibilityEl();
			_this.updateDataSize();
			/** данные о трансформации картинки */
			//_this.imageDataSizeUpdate();
		});
		/** WINDOW SCROLL */
		$( window ).scroll( function(){
			_this.posLayerLeft();
		});
		/** MOUSE SCROLL Y */
		//_this.addOnWheelY();
		_this.$descMore.on( 'click', function(){
			_this.showDescMore();
		});
		/* Выставлям клик на объекты с динамичским позиционированием чтобы отменять тап */
		$.each( _this.objArrCreate( _this.exceptionDуnamicTap ), function( i, v ){
			$( v ).on( 'click', function(){
				_this.disabledHideControls = true;
			});
		});

		/* Запускаем ресайз для образмеривания элементов */
		$( window ).resize();
		/* Проверяем поддержку history подписываемся на события history урл на наличие параметра галереи */
		_this.storeHistory();
	},
	/**
	 * Прокрутка колесика над слоем фотовью для увеличения / усменьшения изображения
	 */
	addOnWheelY: function() {
		if ( this.$el[ 0 ].addEventListener ) {
			if ( 'onwheel' in document ) {
				this.$el[ 0 ].addEventListener( "wheel", $.proxy( this.addOnWheelYHandler, this ) );
			} else if ( 'onmousewheel' in document ) {
				this.$el[ 0 ].addEventListener( "mousewheel", $.proxy( this.addOnWheelYHandler, this ) );
			} else {
				this.$el[ 0 ].addEventListener( "MozMousePixelScroll", $.proxy( this.addOnWheelYHandler, this ) );
			}
		} else {
			this.$el[ 0 ].attachEvent( "onmousewheel", this.addOnWheelYHandler );
		}
	},
	/**
	 * Обработка прокрутки и вызов функции зума
	 */
	addOnWheelYHandler : function( e ){
		e.preventDefault();
		var _this = this,
			delta = e.deltaY || e.detail || e.wheelDelta,
			clientX = e.clientX || false,
			clientY = e.clientY || false,
			scale = false,
			percentStep = _this.image.scale.actual/100*_this.image.scale.step;

		if ( delta > 0 ){
			scale = _this.image.scale.actual - percentStep < _this.image.scale.min ? _this.image.scale.min : _this.image.scale.actual - percentStep;
		} else if ( delta < 0 ){
			scale = _this.image.scale.actual + percentStep > _this.image.scale.max ? _this.image.scale.max : _this.image.scale.actual + percentStep;
		}
		if ( scale ){
			_this.imageScaling({
				x : clientX,
				y : clientY,
				scale : scale,
				duration : 0
			});
		} else {
			return false;
		}
	},
	/**
	 * Создание массива объектов из массива селекторов
	 * Creating an array from an array of selectors
	 * @param {Array} selectors or objects array
	 * @returns {Array} objects array
	 */
	objArrCreate: function( selectorsArr ){
		var _this = this,
			objArr = [];
		$.each( selectorsArr, function( i, v ){
			var $obj = v;
			if ( typeof v === 'string' ){
				$obj = _this.getBy( v )
			}
			if ( typeof $obj === 'object' && $obj.length > 0 ){
				$.each ( $obj, function( k, l ){
					objArr.push( $( l ) );
				})
			}
		});
		return objArr;
	},
	/**
	 * Проверка попадания координат в несколько областей
	 * Checking hit coordinates in several areas
	 * @param {Number} coordinate X
	 * @param {Number} coordinate y
	 * @param {Object / Array objects} objects
	 * @returns {Boolean} true / false
	 */
	hitInArr: function( x, y, obj ){
		var _this = this;
		if ( x && y && typeof obj === 'object' ) {
			if ( obj instanceof Array ){
				var state = false;
				$.each( obj, function( index, value ){
					if ( _this.hitIn( x, y, value ) ) {
						state = true;
						return;
					}
				});
				return state;
			} else {
				return  _this.hitIn( x, y, obj );
			}
		} else {
			return false;
		}
	},
	/**
	 * Проверка попадания координат в одну область
	 * Checking hit coordinates in one area
	 * @param {Number} coordinate X
	 * @param {Number} coordinate y
	 * @param {Object} one object
	 * @returns {Boolean} true / false
	 */
	hitIn: function( x, y, obj ){
		var l = obj.offset().left,
			r = l + obj.outerWidth(),
			t = obj.offset().top,
			b = t + obj.outerHeight();
		//console.log(l+' - '+x+' - '+r+' === '+t+' - '+y+' - '+b);
		//console.log(( x >= l && x <= r && y >= t && y <= b ) ? true : false );
		return ( x >= l && x <= r && y >= t && y <= b ) ? true : false;
	},

	/** TOUCH EVENTS */
	touchInitHammer: function(){
		//console.log(' INIT HAMMER ');
		var _this = this;
		_this.hammerManager = new Hammer.Manager( _this.$el[ 0 ] );
		//  PAN
		_this.hammerManager.add(
			new Hammer.Pan({
				event: 'pan',
				threshold: 0,
				pointers: 0
			})
		);
		//  SWIPE
		_this.hammerManager.add(
			new Hammer.Swipe({
				event: 'swipe'
			})
		)
		_this.hammerManager
			.get( 'swipe' )
			.recognizeWith( 'pan' );
		//  PINCH
		_this.hammerManager.add(
			new Hammer.Pinch({
				threshold: 0
			})
		).recognizeWith(_this.hammerManager.get('pan'));
		//  TAB and DOUBLETAP
		_this.hammerManager.add(
			new Hammer.Tap({
				event: 'doubletap',
				taps: 2
			})
		);
		_this.hammerManager.add(
			new Hammer.Tap({
				event: 'tap',
				taps: 1
			})
		);
		_this.hammerManager
			.get( 'doubletap' )
			.recognizeWith( 'tap' );
		_this.hammerManager
			.get( 'tap' )
			.requireFailure( 'doubletap' );
		// on action
		_this.hammerManager.on( "pinchstart pinchmove pinchend", function( ev ) {
			_this.touchPinch( ev )
		});
		_this.hammerManager.on("panstart panmove panend", function( ev ){
			_this.touchPan(ev)
		});
		_this.hammerManager.on("swipeleft swiperight swipeup swipedown", function( ev ){
			_this.touchSwipe( ev )
		});
		_this.hammerManager.on("tap", function( ev ){
			_this.touchTap( ev )
		});
		_this.hammerManager.on("doubletap", function( ev ){
			_this.touchDoubleTap( ev )
		});
	},
	touchPinch: function (ev){
		//console.log(ev.type);
	},
	touchPan: function (ev){
		var _this = this;
		//console.log('toch pan = '+_this.image.scale.actual);
		/*if ( _this.image.scale.actual > 1 ){
			if  (ev.type == 'panstart') {
				_this.image.translate.start_x = _this.image.translate.x;
				_this.image.translate.start_y = _this.image.translate.y;
			}
			if (ev.type == 'panstart' || ev.type == 'panmove'){
				_this.image.translate.x = _this.image.translate.start_x + (ev.deltaX / _this.image.scale.actual );
				_this.image.translate.y = _this.image.translate.start_y + (ev.deltaY / _this.image.scale.actual );
				_this.requestElTransform({
					transformStyle: {
						'transform': 'scale3d(' + _this.image.scale.actual + ', ' + _this.image.scale.actual + ', 1) ' +
						'translate3d(' + _this.image.translate.x + 'px, ' + _this.image.translate.y + 'px, 0)'
					}
				});
			}
			//else if (ev.type = 'panend'){
			 //_this.image.translate.start_x = _this.image.translate.x;
			 //_this.image.translate.start_y = _this.image.translate.y;
			 //}
		}*/
		if ( $(ev.target).closest('.m-open .the-in-scroll__content').length ) {
			var scrollBox = _this.$descOver.find('.the-in-scroll__box');
			if (ev.type == 'panstart') {
				scrollBox.data('scrollTop', scrollBox.scrollTop() );
			}
			if (ev.type == 'panmove') {
				scrollBox.scrollTop( scrollBox.data('scrollTop') - ev.deltaY );
			}
		}
	},
	touchSwipe: function (ev){
		var _this = this;
		if (ev.type == 'swiperight'){
			_this.changePrev();
		} else if (ev.type == 'swipeleft'){
			_this.changeNext();
		}/* else if (ev.type == 'swipeup' || ev.type == 'swipedown'){
		 _this.close();
		 }*/
	},
	touchTap: function(ev) {
		var _this = this;
		//console.log( ev.type + ' x = ' + ev.center.x + ', y = ' + ev.center.y );
		if ( !this.disabledHideControls && !_this.hitInArr( ev.center.x, ev.center.y, _this.objArrCreate( _this.exceptionTap ) ) ){
			this.controlsToggle();
		} else if ( this.disabledHideControls ){
			this.disabledHideControls = false;
		}
	},
	touchDoubleTap: function (ev) {
		var _this = this;
		//console.log(ev.type + ' x = ' + ev.center.x + ', y = ' + ev.center.y );
		/*if (!_this.hitInArr(ev.center.x, ev.center.y, _this.objArrCreate( _this.exceptionTap ) ) ){
		   _this.imageScaling({
			   x : ev.center.x,
			   y : ev.center.y
		   });
	   }*/
	},
	checkElPosition: function(){

	},
	/**
	 * requestAnimationFrame
	 */
	/*requestElUpdate: function(param){
	 var _this = this;
	 if (!_this.ticking){
	 _this.requestElAnimFrame(function() {
	 _this.requestElTransform(param)
	 });
	 _this.ticking = true;
	 }
	 },
	 requestElAnimFrame: function(func){
	 var requestAnimationFrame = window.requestAnimationFrame ||
	 window.mozRequestAnimationFrame ||
	 window.webkitRequestAnimationFrame ||
	 window.msRequestAnimationFrame ||
	 function(func){
	 window.setTimeout(func, 1000 / 60);
	 };
	 requestAnimationFrame(func);
	 },*/
	requestElTransform: function(param) {
		var _this = this,
			transformDurationBefore = 0,
			transformDuration = 0;

		// если есть объект стилей навешиваем до трансформации
		if ( param && typeof param.transformStyleBefore == 'object' && $(param.transformStyleBefore).length > 0){
			transformDurationBefore = param.transformDurationBefore || 10;
			console.log(' set transform style before ');
			_this.setStyle(_this.image.$obj, param.transformStyleBefore);
		}

		setTimeout(function(){

			if ( param && typeof param.transformStyle == 'object' && $(param.transformStyle).length > 0){
				transformDuration = (param.transformStyle.transition && param.transformStyle.transition.duration) ? param.transformStyle.transition.duration : (_this.settings.durationTransition || 100) ;
				console.log(' set transform style ');
				_this.setStyle(_this.image.$obj, param.transformStyle);
			}

			setTimeout(function(){
				if ( param && typeof param.transformStyleAfter == 'object' && $(param.transformStyleAfter).length > 0){
					console.log(' set transform style after ');
					_this.setStyle(_this.image.$obj, param.transformStyleAfter);
				}
				// если передан callback выполняем
				if (param && typeof param.callBack === 'function'){
					console.log(' set transform callback ');
					param.callBack(_this);
				}
			}, transformDuration );


		}, transformDurationBefore );

	},

	/** ИНФА по активной картинке */
	imageDataReset: function(){
		var _this = this;
		_this.image.$obj = $( _this.classPrefix + 'img', _this.$itemActive );
		_this.imageDataSizeUpdate();
		_this.image.scale.actual = 1;
		_this.image.origin.x = _this.image.size.w / 2;
		_this.image.origin.y = _this.image.size.h / 2;
		_this.image.translate.x =_this.image.translate.start_x = 0;
		_this.image.translate.y =_this.image.translate.start_y = 0;
	},
	imageDataSizeUpdate: function(){
		if ( typeof this.image.$obj == 'object' && this.image.$obj.length == 1) {
			this.image.size.w = this.image.$obj.width();
			this.image.size.h = this.image.$obj.height();
		}
	},
	imageCentering: function(){

	},
	imageTranslateOrigin: function( origin, coord, scaleActual ){
		return ( ( ( ( origin - this.image.origin[ coord ] ) * ( scaleActual - 1 ) ) / scaleActual ) + this.image.translate[ coord ] );
	},
	imageTranslateZoom: function( scaleActual, scaleTo, coord ){
		return ( this.image.translate[ coord ] * scaleActual / scaleTo );
	},
	imageScaling: function( param ){
		if ( !param ) return false;
		console.log( '*** ', param );
		var _this = this,
			elW = _this.$el.width(),                //TODO width контейнера
			elH = _this.$el.height(),               //TODO height контейнера
			elL = _this.$el.offset().left,          //TODO offset.left контейнера
			elT = _this.$el.offset().top,           //TODO offset.top контейнера
			imgW = _this.image.$obj.width(),        //TODO width картинки
			imgH = _this.image.$obj.height(),       //TODO height картинки
			imgL = _this.image.$obj.offset().left,  //TODO offset.left картинки
			imgT = _this.image.$obj.offset().top,   //TODO offset.top картинки
			// короткие записи для SCALE
			scaleActual = _this.image.scale.actual, //TODO нынешний scale
			scaleMin = _this.image.scale.min,       //TODO минимальный размер scale картинки
			scaleMax = _this.image.scale.max,       //TODO максимальный размер scale картинки
			scaleTo = param.scale || ( scaleActual > scaleMin ? scaleMin : scaleMax ); //TODO переданный scale или вычисляется если не передан

		_this.image.scale.actual = scaleTo;

		// координаты клика по экрану
		var	x = param.x || ( elW / 2 ) + elL,       //TODO половина ширины контейнер + левый офсет контейнера
			y = param.y || ( elH / 2 ) + elT,       //TODO половина высотф контейнер + верхний офсет контейнера
			// координаты клика / центра зумирования на картинке
			originX = ( x - imgL ) / scaleActual,     //TODO координата X центра зумирования на картинке
			originY = ( y - imgT ) / scaleActual;     //TODO координата Y центра зумирования на картинке


		/*	console.log(' ');
		 console.log(' ');
		 console.log(' ');
		 console.log('=================================================================');
		 console.log('=   ON SCREEN   X = '+x+', Y = '+y+', scale actual = '+_this.image.scale.actual);
		 console.log('= ---------------------------------------------------------------');
		 console.log('=   ELEMENT     Width = '+elW+', Height = '+elH);
		 console.log('=               OffsetLeft = '+elL+', OffsetTop = '+elT);
		 console.log('= ---------------------------------------------------------------');
		 console.log('=   IMAGE       Width = '+imgW+', Height = '+imgH);
		 console.log('=               OffsetLeft = '+imgL+', OffsetTop = '+imgT);
		 console.log('= ---------------------------------------------------------------');
		 console.log('=   SCALE       actual = '+scaleActual+', new = '+scaleTo);
		 console.log('=               min = '+scaleMin+', max = '+scaleMax);
		 console.log('= ---------------------------------------------------------------');
		 console.log('=   ON IMAGE    X = '+originX+', Y = '+originY);
		 console.log('= ---------------------------------------------------------------');*/


		/** подсчет translate3d для нового origin без изменения Zoom */
		var translateOriginX = ( ( (originX - _this.image.origin.x ) * (scaleActual-1) ) / scaleActual ) + _this.image.translate.x;
		var translateOriginY = ( ( (originY - _this.image.origin.y ) * (scaleActual-1) ) / scaleActual ) + _this.image.translate.y;



		/**     подсчет translate3d для нового zoom без изменения Origin                */
		/**     x * actualScale - узнаем реальный сдвиг картинки                        */
		/**     x * actualScale / scaleTo - узнаем оригинальный параметр сдвига         */
		var translateZoomX = _this.image.translate.x * scaleActual / scaleTo;
		var	translateZoomY = _this.image.translate.y * scaleActual / scaleTo;


		var translateZoomOrigin =   _this.image.translate.x;




		/** */
		var translateOriginXAfter = (((imgW/2 - originX )*(scaleTo-1))/scaleTo) + translateZoomX;
		var translateOriginYAfter = (((imgH/2 - originY )*(scaleTo-1))/scaleTo) + translateZoomY;

		originX = 600;
		originY = 200;

		/*var translate_x = ((_this.image.size.w / 2) - originX) / scaleTo * (scaleTo-1),
		 translate_y =((_this.image.size.h / 2) - originY) / scaleTo * (scaleTo-1);*/

		var testX = _this.image.origin.x - (((originX - _this.image.origin.x)*(scaleTo-1)/scaleTo) - (originX - _this.image.origin.x));
		var testY = _this.image.origin.y - (((originY - _this.image.origin.y)*(scaleTo-1)/scaleTo) - (originY - _this.image.origin.y));



		_this.setStyle(_this.image.$obj, {
			'transform': 'scale3d(' + scaleTo + ', ' + scaleTo + ', 1) ' +
			'translate3d('+translateZoomX+'px, '+translateZoomY+'px, 0)'
		});


		_this.image.translate.x = translateZoomX;
		_this.image.translate.y = translateZoomY;
		_this.image.scale.actual = scaleTo;


		/*_this.requestElTransform({
		 transformStyleBefore : {
		 'transform-origin': originX + 'px ' + originY + 'px 0px',
		 'transform': 'scale3d(' + scaleActual + ', ' + scaleActual + ', 1) ' +
		 'translate3d('+translateOriginX+'px, '+translateOriginY+'px, 0)'
		 },
		 transformStyle : {
		 'transform-origin': originX + 'px ' + originY + 'px 0px',
		 'transform': 'scale3d(' + scaleTo + ', ' + scaleTo + ', 1) ' +
		 'translate3d('+translateZoomX+'px, '+translateZoomY+'px, 0)'
		 },
		 transformStyleAfter : {
		 'transform-origin': imgW/2 + 'px ' + imgH/2 + 'px 0px',
		 'transform': 'scale3d(' + scaleTo + ', ' + scaleTo + ', 1) ' +
		 'translate3d('+translateOriginXAfter+'px, '+translateOriginYAfter+'px, 0)'
		 },
		 callBack : function(__this){
		 _this = __this || this;
		 _this.image.translate.x = translateZoomX;
		 _this.image.translate.y = translateZoomY;
		 _this.image.scale.actual = scaleTo;
		 }
		 });*/





		console.log('originX = '+_this.image.origin.x+', originY = '+_this.image.origin.y+' translateX = '+_this.image.translate.x+' translateY = '+ _this.image.translate.y+' scale = '+_this.image.scale.actual);


		/*_this.requestElTransform({
		 transformDurationBefore : 5,
		 transformStyleBefore : {
		 'transform-origin': originX + 'px ' + originY + 'px 0px',
		 'transform': 'scale3d(' + scaleActual + ', ' + scaleActual + ', 1) ' +
		 'translate3d('+trXforNewOrigin+'px, '+trYforNewOrigin+'px, 0)'
		 },
		 transformStyle : {
		 transition : {
		 prop: 'none'
		 },
		 transform: 'scale3d(' + scaleTo + ', ' + scaleTo + ', 1) ' +
		 'translate3d('+trXforNewOrigin+'px, '+trYforNewOrigin+'px, 0)'
		 },

		 callBack : function(__this){
		 _this = __this || this;

		 _this.setStyle(_this.image.$obj, {
		 'transform-origin': originX + 'px ' + originY + 'px 0px',
		 transform: 'scale3d(' + scaleTo + ', ' + scaleTo + ', 1) ' +
		 'translate3d(' + translate_x + 'px, ' + translate_y + 'px, 0)'
		 });

		 // записываем измененные данные
		 *//**//*_this.image.translate.x = translate_x;
		 _this.image.translate.y = translate_y;*//**//*
		 _this.image.scale.actual = scaleTo;
		 }
		 });*/





	},

	/** open photo view */
	open: function( params ){
		//console.log('OPEN PHOTOVIEW ',params);
		var _this = this;
		// Если нет номера группы - присваиваем false
		if ( !params.group ) params.group = false;
		// Обновляем набор эелментов группы если:
		// - выствален флаг принудительного обновления каждый раз
		// - номер группы false - открыть одну картинку
		// - номер группы не совпадает с ранее отрытой
		// - нет набора элементов
		// - нет кол-ва элементов
		if (  _this.settings.updateGroupOpen || params.group === false || _this.group.id != params.group || !_this.group.$items || !_this.group.length ) {
			_this.updateItemsGroup( params );
		}
		// Если в выборке нет элементов выходим
		if ( _this.group.length <= 0 ) {
			console.log( 'PhotoViewWidget ERROR - no items group length' );
			return false;
		}
		// Записываем номер активного слайда
		_this.itemActive.index = 0;           // по умолчанию 0
		if ( typeof params.clickObj == 'object' ) {  // если передан объект клика берем индекс из группы
			_this.itemActive.index = _this.group.$items.index( params.clickObj );
		} else if ( params.photo ){                   // если передан store номер фото берем индекс из группы по совпадению со store
			var storeObj = _this.group.$items.filter( function(){
				return $( this )[ 0 ].photoViewWidget_photo == params.photo ? $( this ) : false;
			});
			if ( storeObj.length == 1 ){
				_this.itemActive.index = _this.group.$items.index( storeObj );
			}
		}
		/* если была открыта галерея закрываем */
		if( _this.visibleView() ) {
			_this.close();
		}
		/* записывыаем данные о активном, предыдущем и последующем слайдах */
		_this.getItemsData();
		/* показываем слой с кнопками */
		_this.controlsShow();
		/* Скрываем слой описания */
		_this.activeDataVisible( false );
		/* сохраняем состояния body */
		_this.saveElStates = {
			bodyTop :       $( 'body' ).scrollTop(),
			bodyLeft :      $( 'body' ).scrollLeft(),
			htmlTop :       $( 'html' ).scrollTop(),
			htmlLeft :      $( 'html' ).scrollLeft(),
			bodyOverflow :  $( 'body' ).css( 'overflow' )
		};
		/* выставляем параметры на слой данных */
		_this.setStyle( _this.$page.addClass( _this.modeBlur ),{
			'position' : 'fixed',
			'top' : -( _this.saveElStates.bodyTop + _this.saveElStates.htmlTop ),
			'left' : -( _this.saveElStates.bodyLeft + _this.saveElStates.htmlLeft )
		});
		/* выставляем прокрутку страницы на ноль, показываем слой просмотра фото и образмериваем его */
		_this.setStyle( $( 'body' ).addClass( _this.modPhotoviewOpen ).scrollTop( 0 ),{
			'overflow' : 'visible'
		});
		_this.setStyle( _this.$el,{
			'display' : 'block'
		});
		_this.visibilityEl();
		_this.setPhotoviewHeight();
		_this.setImages();
		_this.states.widgetOpen = true;
		_this.storeCheck( 'open' );
		//  EVENT с клавиатуры "prev-37", "next-39" и "esc-27"
		$( 'body' ).on( 'keydown.photoview' , function( e ){
			_this.keyDownNavigate( e );
		});
	},
	/** close photo view */
	close: function(){
		var _this = this;
		if ( _this.visibleView() ){
			// скрываем фотовью
			_this.setStyle( _this.$el.hide(), {
				'position' : 'absolute'
			});
			// удаление урлов и стилей картинокс фотовью
			_this.cleaning();
			// выставляем прокрутку контентной части как было, задержка если из history
			var historyTimeout = _this.states.storeFromHistory ? 5 : 0;
			setTimeout( function () {
				// убираем класс размытия с контентной части и позиционируем
				_this.setStyle( _this.$page.removeClass( _this.modeBlur ),{
					'position' : 'relative',
					'top' : 0,
					'left' : 0
				});
				_this.setStyle( $( 'body' ).removeClass( _this.modPhotoviewOpen ), {
					'overflow': _this.saveElStates.bodyOverflow
				});
				$( 'body' )
					.scrollTop( _this.saveElStates.bodyTop )
					.scrollLeft( _this.saveElStates.bodyLeft );
				$( 'html' )
					.scrollTop( _this.saveElStates.htmlTop )
					.scrollLeft( _this.saveElStates.htmlLeft );
			}, historyTimeout );
			// передача в хистори нового хеша
			_this.storeCheck( 'close' );
			// состояние что фотовью не открыто
			_this.states.widgetOpen = false;
			// убираем обработку надатия клавиш
			$('body').off( 'keydown.photoview' );
		}
	},
	/** remove src and style images attribute, remove style sub blocks images */
	cleaning: function(){
		$( this.classPrefix + 'img', this.$el ).removeAttr( 'src' ).removeAttr( 'style' );
		this.$sub.removeAttr( 'style' );
	},
	/**
	 * обновляем получаем набор элементов по <groupID>, кол-во элементов и устанавливаем или скрываем номер активного
	 * update image items group
	 * @param {Object|Number} object params or group id
	 * @update {Number} this.group.id - group number
	 * @update {Object} this.group.$items - group items
	 * @update {Number} this.group.length - group length
	 * @add {Number} store number
	 */
	updateItemsGroup: function( params ){
		var _this = this;
		// обнуляем информацию об открытой группе
		_this.group.$items = false;
		_this.group.length = false;
		// определяем id группы
		if ( $.isPlainObject( params ) && typeof params.clickObj == "object" ){
			_this.group.id = params.clickObj.attr( 'data-'+_this.dataGroup ) || false;
		} else {
			_this.group.id = params.group;
		}
		// создаем набор объектов
		if ( _this.group.id === false && typeof params.clickObj == "object" ){
			_this.group.$items = params.clickObj;
		} else if ( _this.group.id ){
			_this.group.$items = $( _this.classPrefix + 'open[data-' + _this.dataGroup + '="' + _this.group.id + '"][data-' + _this.dataSrc + ']', $('body') ).filter(function () {
				return !$( this ).closest( ".the-in-carousel__item" ).hasClass("m-clone")
				// return !$( this ).closest( ".m-cloned" ).length;  // фильтрация клонированных элементов
			});
		}
		// Добавляем в объект имя картинки для хеша
		$.each( _this.group.$items, function( i, v ){
			this.photoViewWidget_photo =  $( v ).data( _this.dataImageId ) || $( v ).data( _this.dataSrc ).match(/.*\/([^\.]+?)\.[a-zA-Z]+$/)[ 1 ]; // имя картинки для хеша
		});
		// записываем кол-во элеметов в наборе
		_this.group.length = _this.group.$items.length
	},
	/** Получаем набор данных по слайдам: предыдущий, активный, следующий  */
	getItemsData: function( n ){
		var _this = this;
		if ( typeof n === 'number' ) _this.itemActive.index = n;
		_this.getOneItemData( 'itemActive', _this.itemActive.index );
		// определяем номер предыдущего элемента
		if (_this.itemActive.index > 0){
			_this.itemPrev.index = _this.itemActive.index - 1;
		} else if ( _this.settings.loopItems && _this.itemActive.index == 0 && _this.group.length > 1 ){
			_this.itemPrev.index = _this.group.length - 1;
		} else {
			_this.itemPrev.index = false;
		}
		_this.getOneItemData( 'itemPrev', _this.itemPrev.index );
		// определяем номер следующего элемента
		if ( _this.itemActive.index + 1 < _this.group.length ){
			_this.itemNext.index = _this.itemActive.index + 1;
		} else if ( _this.settings.loopItems && _this.itemActive.index + 1 == _this.group.length && _this.group.length > 1 ){
			_this.itemNext.index = 0;
		} else {
			_this.itemNext.index = false;
		}
		_this.getOneItemData('itemNext', _this.itemNext.index );
	},
	/** Запись набора данных по слайду */
	getOneItemData: function( name, index ){
		var _this = this;
		if ( index === false ){
			_this[ name ].$obj = false;
			_this[ name ].src = false;
		} else {
			_this[ name ].$obj = $( _this.group.$items[ index ] );
			_this[ name ].src = _this[ name ].$obj.data( _this.dataSrc );
		}
	},

	/** Загружаем картинки и устанавливаем в верстку */
	setImages: function(arrayItems){
		var _this = this,
			itemsName = [ 'itemActive', 'itemPrev', 'itemNext' ];
		if ( typeof arrayItems === 'object' ) itemsName = arrayItems;
		$.each( itemsName, function( i, v ){
			if ( _this[ v ].src !== false ) {
				var $img = $( _this.classPrefix + 'img', _this[ '$' + v ] ),    // ссылка на елемент
					$newImage = $( '<img src="' + _this[ v ].src + '">');
				$img.removeAttr('src');
				if ( _this.group.$items[ _this[ v ].index ].photoViewWidget_imgLoaded ) {
					/* TODO remove */ //console.log('Already uploaded ' + _this[ v ].index);
					$img.attr( 'src', _this[ v ].src );
					if ( v == 'itemActive' ) _this.setImagesAct();
				} else {
					var $loader = $( _this.classPrefix + 'loader', _this[ '$' + v ] );
					$loader.show();
					$newImage.on( 'load', function() {
						/* TODO remove */ //console.log('Images UPLOAD ' +_this[ v ].index + ' ' + _this[ v ].src);
						_this.group.$items[ _this[ v ].index ].photoViewWidget_imgLoaded = true;
						$img.attr( 'src', _this[ v ].src );
						$loader.hide();
						if ( v == 'itemActive' ) _this.setImagesAct();
					}).on( 'error', function() {
						console.log( 'PhotoViewWidget images ERROR ' + _this[ v ].src );
					});
				}
			}
		});
		_this.setItemIndexView();
	},
	setImagesAct: function(){
		var _this = this;
		_this.imageDataReset();
		_this.setActiveData();
		_this.updateShare();
		_this.updateDataSize( true );
	},

	/** Active item data */
	setActiveData: function(){
		var _this = this,
			openInfo = _this.itemActive.$obj.find( _this.classPrefix + 'open-info > *');
		$.each( openInfo , function(){
			$( '.' + $( this ).attr( 'class' ), _this.$el ).html( $( this ).html() );
		});
	},
	/** update share link and share title */
	updateShare: function(){
		var $share = $( '.share', this.$placeSocial );
		if ( $share.length > 0 ) {
			$share.attr({
				'data-url': this.itemActive.$obj.data(this.dataShareLink) || location.href,
				'data-title': this.itemActive.$obj.data(this.dataShareTitle) || $('meta[ property="og:title" ]').attr("content") || $('head title').html(),
				'data-id': this.itemActive.$obj.data(this.dataShareId)
			});
		};
	},
	/** */
	updateDataSize: function( change ){
		if ( this.visibleView ) {
			var _this = this,
				destTextH = this.$descText.height(),
				descSizeH = this.$descSize.height();
			if ( destTextH > 0 ){
				// При смене слайда сворачиваем описани для нового
				if ( change ) _this.showDescMore( false , true );
				// показываем блок описания
				_this.activeDataVisible( true );
				// проверяем видимость кнопки more
				if ( destTextH <= descSizeH ) {
					_this.showDescMore( false, true );
					_this.$descMore.hide()
				} else {
					_this.$descMore.show();
				}
				// выставляем высоту описания
				_this.$descOver.stop().height( _this.$desc.hasClass( _this.modeOpen ) ? Math.min( destTextH, parseInt( _this.clientHeight * 0.4 ) ) : Math.min( destTextH, descSizeH ) )
			} else {
				_this.activeDataVisible( false );
			}


		}
	},
	/** Показ и скрытие блока описание */
	activeDataVisible: function( state ){
		this.$desc.toggleClass(  this.modeDisabled, ( ( state === true ) ? false : true ) );
	},
	/** клик по кнопке показать больше описания */
	showDescMore: function( state, fast ){
		var _this = this,
			destTextH = _this.$descText.height(),
			descSizeH = _this.$descSize.height();
		if ( state !== false && state !== true ) {
			state = _this.$desc.hasClass( _this.modeOpen ) ? false : true;
		}
		_this.$descOver.stop().animate({
			height: state ? Math.min( destTextH, parseInt( _this.clientHeight * 0.4 ) ) : Math.min( destTextH, descSizeH )
		}, fast ? 0 : 250, function(){
			if ( state === true ) _this.$desc.toggleClass( _this.modeOpen, state );
		});
		if ( state === false ) _this.$desc.toggleClass( _this.modeOpen, state );
		_this.$descOver.scrollTop( 0 );
		if (  _this.$descOver.hasClass( 'the-in-scroll' ) ){
			_this.$descOver.trigger( 'scroll-to.the-in-scroll' );
		}

	},
	/** CONTROL */
	controlsToggle: function( state ){
		var _this = this;
		if ( state === true ){
			_this.controlsShow();
		} else if ( state === false ){
			_this.controlsHide();
		} else {
			if( _this.states.visibleControls === true ){
				_this.controlsHide();
			} else {
				_this.controlsShow();
			}
		}
	},
	controlsHide: function(){
		var _this = this;
		_this.$canHide.stop().animate({
			opacity: 0
		}, 150, function(){
			_this.$canHide.addClass( _this.modeHidden );
			_this.states.visibleControls = false;
		});
	},
	controlsShow: function(){
		var _this = this;
		_this.$canHide.stop().animate({
			opacity: 1
		}, 150, function(){
			_this.$canHide.removeClass( _this.modeHidden );
			_this.states.visibleControls = true;
		});
	},

	/** STORE */
	transferringFormat: function( obj, sign, sep ){
		var str='';
		sign = sign || '=';
		sep = sep || '&';
		if ( typeof obj === 'object' ) {
			$.each( obj, function ( i, v ) {
				if ( i != '' ) str += ( sep + i + ( v !== undefined ? sign + v : '' ) );
			});
			return str.replace( sep, '' );
		} else if ( typeof obj === 'string' ) {
			return obj
				.split( sep )
				.map( function( e ) { return e.split( sign ) } )
				.reduce( function ( o, arr ) { return o[ arr[ 0 ] ] = arr[ 1 ], o; }, {} );
		}
		return false;
	},
	storeUpdateUrl: function( stateObj, title, paramsObj, replace ){
		var _this = this;
		if ( _this.states.storeEnabled && !_this.states.storeFromHistory ){
			if ( replace ){
				history.replaceState( stateObj, title, _this.storeFormationUrl( paramsObj ) );
			} else {
				history.pushState( stateObj, title, _this.storeFormationUrl( paramsObj ) );
			}
		}
		_this.states.storeFromHistory = false;
	},
	storeFormationUrl: function( paramsObj ){
		var params = this.transferringFormat( paramsObj );
		return location.origin + location.pathname + location.search + ( ( params == '' || params === false ) ? '' : '#' + params );
	},
	storeUpdObjParams: function( objParams, state ){
		var _this = this;
		if ( state === false ){
			delete objParams[ _this.store.name ];
		} else {
			var objStoreParams = {};
			objStoreParams[ _this.store.group ] = _this.group.id;
			objStoreParams[ _this.store.photo ] = _this.group.$items[ _this.itemActive.index ].photoViewWidget_photo;
			objParams[ _this.store.name ] = _this.transferringFormat( objStoreParams, '%3D', '%2F' );
		}
		return objParams;
	},
	storeCheck: function( act ){
		var _this = this;
		if ( !_this.states.storeEnabled ) return false;
		var	objParams = _this.transferringFormat( location.hash.replace( '#', '' ) ),
			storeParams = objParams[_this.store.name] ? _this.transferringFormat(objParams[_this.store.name], '%3D', '%2F') : false;
		if ( act === 'close'){                                                              // Закрытие photoView
			_this.storeUpdateUrl( {}, null, _this.storeUpdObjParams( objParams, false ) );
		} else if ( act === 'open' ){                                                       // Открытие photoView
			_this.storeUpdateUrl( {}, null, _this.storeUpdObjParams( objParams ) );
		} else if ( act === 'change' ){                                                     // Переход на другой слайд photoView
			_this.storeUpdateUrl( {}, null, _this.storeUpdObjParams( objParams ), true );
		} else if ( !_this.states.widgetOpen && storeParams[ _this.store.group ] ){     // Открытие урла С параметром photo_view
			_this.open({
				group: storeParams[ _this.store.group ],
				photo: storeParams[ _this.store.photo ] || false
			});
		} else if ( !storeParams[ _this.store.group ] ){                                // Открытие урла БЕЗ параметра photo_view
			_this.close();
		}
	},
	storeHistory: function(){
		var _this = this;
		if ( _this.states.storeEnabled && !!( window.history && history.pushState && history.replaceState ) ){
			window.addEventListener( "popstate", function( e ) {
				_this.states.storeFromHistory = true;
				_this.storeCheck();
			}, false );
			// обработка story первый раз после загрузки страницы
			_this.storeCheck();

		} else {
			_this.states.storeEnabled = false;
		}
	},

	/** VISIBILITY BUTTONS (obj) */

	/**
	 * видимость кнопок от ширины photoView и кол-ва фотографий
	 * visibility buttons
	 * @param {Obj | Array object }
	 */
	visibilityEl: function( el ){
		var _this = this;
		if ( _this.visibleView() ) {
			var objArr = _this.objArrCreate( el || _this.variableVisibility );
			if ( _this.group.length > 1 && ( !_this.states.hammerFunc || _this.settings.desktopWidth <= _this.getPhotoviewWidth() ) ) {
				_this.visibilityElAct( objArr, 'show' );
			} else {
				_this.visibilityElAct( objArr );
			}
		}
	},
	visibilityElAct: function( objArr, act ){
		if ( typeof objArr === 'object' && ( objArr instanceof Array ) ) {
			$.each( objArr, function ( k, v ) {
				act === 'show' ? v.show() : v.hide();
			});
		} else {
			act === 'show' ? objArr.show() : objArr.hide();
		}
	},

	/**
	 * Следующий слайд
	 */
	changeNext: function(){
		this.changeItem( 'itemNext' );
	},
	/**
	 * Прердыдущий слайд
	 */
	changePrev: function(){
		this.changeItem( 'itemPrev' );
	},
	/**
	 * Прердыдущий слайд
	 * Changes slide
	 * @param {String} direction
	 */
	changeItem: function( dir ){
		var _this = this;
		if ( _this.states.itemChanges === false && _this[ dir ].index !== false ) {
			_this.states.itemChanges = true;
			_this.activeDataVisible( false );
			var sign = '';
			if ( dir === 'itemNext' ) sign = '-';
			_this.setStyle( _this.$sub, {
				'transition': {
					'prop': 'transform'
				},
				'transform': 'translate3d(' + sign + ( _this.getPhotoviewWidth() * 1.05 ) + 'px, 0px, 0px)',
				'overflow': 'visible'
			});
			_this.setStyle( _this.$itemActive, {
				'transition': {
					'prop': 'transform'
				},
				'transform': 'translate3d(' + sign + ( _this.getPhotoviewWidth() * 1.05 ) + 'px, 0px, 0px)'
			});
			// загружаем новые данные о слайдах
			_this.getItemsData( _this[ dir ].index);
			setTimeout( function() {
				// заменяем картинки на новые после окончания сдвига
				_this.setImages();
				// свдигаем слои назад
				_this.setStyle( _this.$sub, {
					'transition': {
						'prop': 'none'
					},
					'transform': 'translate3d(0px, 0px, 0px)',
					'overflow': 'hidden'
				});
				_this.setStyle( _this.$itemActive, {
					'transition': {
						'prop': 'none'
					},
					'transform': 'translate3d(0px, 0px, 0px)'
				});
				_this.states.itemChanges = false;
				_this.storeCheck( 'change' );
			}, _this.settings.durationTransition || 100 );
		}
	},
	/**
	 * управление с клавиатуры
	 * keydown navigate
	 * @param {Code}
	 * @param {Object}
	 * @returns {Boolean} true|false
	 */
	keyDownNavigate: function( e ){
		var _this = this;
		if( _this.visibleView() ){
			var	keyCode = {
				left: 37,   // button - Arrow Left
				right: 39,  // button - Arrow Right
				esc: 27     // button - Esc
			};
			switch ( e.keyCode ) {
				case keyCode.left:
					_this.changePrev();
					return true;
				case keyCode.right:
					_this.changeNext();
					return true;
				case keyCode.esc:
					_this.close();
					return true;
				default:
					return false;
			}
		}
	},
	/**
	 * устанавливает числа "номер слайда/общее кол-во"
	 * @returns {Boolean} true|false
	 */
	setItemIndexView: function(){
		var _this = this;
		if( _this.visibleView() ){
			if ( _this.group.length <= 1 ) {
				_this.$placeIndexView.hide();
				return false;
			} else {
				$( 'span', _this.$placeIndexView ).html( ( _this.itemActive.index + 1 ) + ' / ' + _this.group.length );
				_this.$placeIndexView.show();
				return true;
			}
		}
	},
	/**
	 * выставить высоту слоя просмотра фотографий равно высоте окна
	 * set the height of the photoview as a window
	 * @set {Number} value
	 * @returns {Boolean} true|false
	 */
	setPhotoviewHeight: function(){
		if( this.visibleView() ) {
			this.$el.height( this.clientHeight );
			return true;
		}
		return false;
	},
	/**
	 * получить ширину слоя просмотра фотографий
	 * get width photoview
	 * @returns {Number} value or {Boolean} false
	 */
	getPhotoviewWidth: function(){
		if( this.visibleView() ){
			return parseInt( this.$el.outerWidth() );
		}
		return false;
	},
	/**
	 * позиционирование контентной части по горизонтали при открытом окне фотовью
	 * position content to horizontal
	 * @set {Number} value
	 */
	posLayerLeft: function( $layer ){
		$layer = $layer || this.$page;
		if( this.visibleView() ) {
			this.saveElStates.bodyLeft = $( 'body' ).scrollLeft();
			this.saveElStates.htmlLeft = $( 'html' ).scrollLeft();
			$layer.css( 'left', '-' + ( this.saveElStates.bodyLeft + this.saveElStates.htmlLeft ) + 'px' );
		}
	},
	/**
	 * позиционирование контентной части по вертикали при открытом окне фотовью
	 * position content to vertical
	 * @set {Number} value
	 */
	posLayerTop: function( $layer ){
		$layer = $layer || this.$page;
		if( this.visibleView() && $layer.css( 'position' ) == 'absolute' ){
			var layerIndentTop = parseInt( $layer.css( 'top' ) ),           // top position layer content
				layerHeight = $layer.outerHeight();                         // layer content height
			if ( ( layerHeight + layerIndentTop ) < this.clientHeight && layerHeight > this.clientHeight ){
				this.saveElStates.bodyTop = layerHeight-this.clientHeight;
			} else if ( layerHeight < this.clientHeight ){
				this.saveElStates.bodyTop = 0;
			}
			$layer.css( 'top', '-' + this.saveElStates.bodyTop + 'px' );
		}
	},
	/**
	 * взять элемент по классу
	 * get live element by class name
	 * @param {String} selector
	 * @returns {Object}
	 */
	getBy: function( selector ) {
		return $( selector, this.$el );
	},
	/**
	 * видимость окна просмотра фотографий
	 * photoView visible
	 * @returns {Boolean} true|false
	 */
	visibleView: function(){
		return this.$el.is( ":visible" );
	},
	/**
	 * получение ширины клиента
	 * get clients width
	 * @returns {Number} value
	 */
	getCw: function(){
		return Math.max(window.innerWidth || 0, (document.getElementsByTagName('html')[0] || {}).clientWidth || 0)
	},
	/**
	 * получение высоты клиента
	 * get clients height
	 * @returns {Number} value
	 */
	getCh: function(){
		return Math.max(window.innerHeight || 0, (document.getElementsByTagName('html')[0] || {}).clientHeight || 0)
	},
	/**
	 * установка стиля(ей) на объект
	 * set style to object
	 * @param {Object} obj
	 * @param {String | Object} property | states
	 * @param {String/Number | Object} value | states
	 */
	setStyle: function( obj, prop, val ){
		var _this = this;
		if ( typeof prop === 'object' ){
			$.each( prop, function( key, value ){
				_this.setStyle( obj, key, value );
			});
		} else if ( prop === 'transition' && typeof val === 'object' ){
			this.setStyleTransition( obj, val );
		} else {
			obj.css( _this.prefixedStyle( obj[ 0 ].style, prop ), val )
		}
	},
	/**
	 * установка стиля transition на объект
	 * set transition style to object
	 * @param {Object} obj
	 * @param {Object} states { prop, <time>, <type>, <delay> }
	 */
	setStyleTransition: function( obj, states ){
		var _this = this;
		if ( states.prop === 'none' ){
			obj.css( _this.prefixedStyle( obj[ 0 ].style, 'transition' ), 'none' );
		} else {
			var trDuration = ( states.duration || _this.settings.durationTransition || 100 ) + 'ms',
				trTiming = states.type || _this.settings.typeTransition || 'ease-out',
				trDelay = ( states.delay || '0' ) + 'ms';
			obj.css( _this.prefixedStyle( obj[ 0 ].style, 'transition' ), _this.prefixedStyle( obj[ 0 ].style, states.prop ) + ' ' + trDuration + ' ' + trTiming + ' ' + trDelay );
		}
	},
	/**
	 * получение префикса для значения свойства
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} propert
	 * @returns {String | Undefined} prefixed
	 */
	prefixedStyle: function ( obj, property ) {
		var _this = this;
		var prefix, prop;
		var camelProp = property[ 0 ].toUpperCase() + property.slice( 1 );
		var i = 0;
		if ( !_this.vendor_prefixes ) _this.vendor_prefixes = [ '', 'webkit', 'Moz', 'MS', 'ms', 'o' ];
		while ( i < _this.vendor_prefixes.length ) {
			prefix = _this.vendor_prefixes[ i ];
			prop = ( prefix ) ? prefix + camelProp : property;
			if ( prop in obj ) {
				return prop;
			}
			i++;
		}
		return property;
	}

};


;(function ( $, window, document, undefined ) {

	var riaVictorina = function(el, options) {
		var project = '';
		// if (window.location.search.indexOf('project=ria2018') != -1) {
		//     project = '?project=ria2018';
		// }
		if (window.location.pathname.indexOf('editorial_preview') != -1) {
			project = '?preview=1';
		}
		var defaults = {
			actions: {
				getlast: '/services/victorins/get-last-question/'+project,
				addanswer: '/services/victorins/add-answer/'+project,
				getresults: '/services/victorins/get-results/'+project,
				reset: '/services/victorins/reset/'+project
			}
		};
		var _this = this;
		_this.el = $(el);
		_this.container = _this.el.find('.victorina__content');
		_this.question = _this.container.find('.victorina__question:last');
		_this.blitztimer = null;
		_this.defOptions = defaults;
		_this.userOptions = options;
		_this.options = $.extend(true, {}, defaults, options);

		_this.init();
	};

	riaVictorina.prototype = {
		init: function() {
			var _this = this;
			_this.article_id = _this.el.data('article-id');
			_this.victorina_id = _this.el.data('victorina-id');
			_this.rightanswers = 0;

			if ( !_this.el.find('.victorina__cover').length ) {
				_this.resetVictorina(false);
			}

			_this.el.on('click', '.victorina__submit button', function() {
				$(this).attr('disabled', 'disabled');

				if ( $(this).parent().hasClass('m-victorina-next') ) {
					_this.nextQuestion(true);
				} else if ( $(this).parent().hasClass('m-victorina-reset') ) {
					_this.container.empty();
					_this.resetVictorina(true);
				} else if ( $(this).parent().hasClass('m-victorina-start') ) {
					// _this.el.find('.victorina__cover').addClass('m-hidden');
					// _this.container.removeClass('m-hidden');
					_this.resetVictorina(true);
				} else {
					var ids = _this.question.find('form').serializeArray();
					_this.addAnswer( ids );
				}
			});
		},
		nextQuestion: function(withscroll) {
			var _this = this;

			_this.question.off('click', '.victorina__answer');

			$.ajax({
				url: _this.options.actions.getlast,
				data: {
					article_id: _this.article_id,
					victorina_id: _this.victorina_id,
					last_question_id: _this.question_id,
					last_question_num: _this.question_num
				},
				dataType: 'html',
				type: 'POST'
			}).done(function(data) {
				if ( $(data).hasClass('victorina__result') ) {
					_this.getResults();
				} else {
					_this.container.append( data );
					_this.question = _this.container.find('.victorina__question:last');
					_this.initQuestion(withscroll);
				}
			});
		},
		addAnswer: function(data) {
			var _this = this;

			data.push({ name: 'victorina_id', value: _this.victorina_id });
			data.push({ name: 'article_id', value: _this.article_id });
			data.push({ name: 'vic_question_id', value: _this.question_id });

			$.ajax({
				url: _this.options.actions.addanswer,
				data: data,
				dataType: 'json',
				type: 'POST'
			}).done(function(data) {
				_this.showResult(data);
			});
		},
		getResults: function() {
			var _this = this;
			var data = {
				victorina_id: _this.victorina_id,
				rightanswers: _this.rightanswers
			}
			if (typeof _this.article_id !== 'undefined') {
				data.article_id = _this.article_id
			}
			clearInterval( _this.blitztimer );
			$.ajax({
				url: _this.options.actions.getresults,
				data: data,
				dataType: 'html',
				type: 'POST',
				success: function(data) {
					var els = _this.container.append( data );
					riaShare.initItems( els.find('.victorina__share') );
					$('html, body').animate({
						scrollTop: _this.container.find('.victorina__step:last').offset().top - 55
					}, 300);
				}
			});
		},
		showResult: function(data) {
			var _this = this;

			var header = _this.question.find('.victorina__question-header');
			header.find('.victorina__question-title').html( data.answer );
			if ( typeof data.incorrect !== 'undefined' ) {
				header.addClass('m-victorina-false');
			} else {
				header.addClass('m-victorina-true');
				_this.rightanswers++;
			}

			_this.question.find('.victorina__answers').addClass('m-victorina-answers-results');

			_this.question.find('.victorina__answer').each(function() {
				$(this).find('input').attr('disabled', 'disabled');

				if ( typeof data["right_" + $(this).data('id')] !== 'undefined' ) {
					$(this).addClass('m-victorina-true');
					$(this).find('.victorina__answer-text').append('<div class="victorina__answer-annotation">' + data["right_" + $(this).data('id')] + '</div>');
				} else if ( typeof data["user_" + $(this).data('id')] !== 'undefined' ) {
					$(this).addClass('m-victorina-false');
					$(this).find('.victorina__answer-text').append('<div class="victorina__answer-annotation">' + data["user_" + $(this).data('id')] + '</div>');
				}
			});

			_this.question.find('.victorina__submit').addClass('m-victorina-next').find('button').removeAttr('disabled').focus();

		},
		resetVictorina: function(withscroll) {
			var _this = this;

			$.ajax({
				url: _this.options.actions.reset,
				type: 'POST',
				data: {
					victorina_id: _this.victorina_id
				}
			}).done(function() {
				delete _this.question_id;
				delete _this.question_num;
				_this.rightanswers = 0;
				if (!_this.el.find('.victorina__question').length) {
					_this.nextQuestion(withscroll);
				} else {
					_this.question = _this.container.find('.victorina__question:last');
					_this.initQuestion(withscroll);
				}
			});
		},
		initQuestion: function(withscroll) {
			var _this = this;
			_this.question_id = _this.question.data('id');
			_this.question_num = _this.question.data('num');

			_this.question.on('click', '.victorina__answer', function() {
				if ( _this.question.find('.victorina__answer-input input:checked').length ) {
					_this.question.find('button').removeAttr('disabled');
				} else {
					_this.question.find('button').attr('disabled', 'disabled');
				}
			});

			if ( _this.container.attr('data-first-question') ) {
				var arr = ('' + _this.container.attr('data-first-question') ).split(',');
				_this.container.removeAttr('data-first-question');

				for (var i = 0; i < arr.length; i++) {
					_this.question.find('.victorina__answer-input input[value="' + arr[i] + '"]').attr('checked', 'checked');
				}
				var ids = _this.question.find('form').serializeArray();
				_this.addAnswer( ids );
			}

			if ( _this.el.data('blitz-time') > 0 ) {
				_this.initBlitz();
			}

			if (withscroll) {
				$('html, body').animate({
					scrollTop: _this.container.find('.victorina__step:last').offset().top - 55
				}, 300);
			}
			riaShare.initItems(_this.question.find('.elem-info'));

			ria.convertDate();
		},
		initBlitz: function(callback) {
			var _this = this;
			_this.question.find('.victorina__progress').append('<div class="victorina__progress-timer"></div>');

			if ( _this.container.find('.victorina__question').length == 1 ) {
				var timer = _this.el.data('blitz-time'),
					minutes,
					seconds;
				_this.blitztimer = setInterval(function() {
					minutes = parseInt(timer / 60, 10);
					seconds = parseInt(timer % 60, 10);
					minutes = minutes < 10 ? "0" + minutes : minutes;
					seconds = seconds < 10 ? "0" + seconds : seconds;

					_this.container.find('.victorina__progress-timer').text(minutes + ":" + seconds);

					if (--timer < 0) {
						_this.question.off('click', '.victorina__answer');
						_this.question.find('.victorina__submit button').attr('disabled', 'disabled');
						_this.getResults();
					}
				}, 1000);
			}
		}
	};


	$.fn.riaVictorina = function(options) {
		return this.each(function(){
			if(!$.data(this, 'riaVictorina')) {
				$.data(this, 'riaVictorina', new riaVictorina(this, options));
			}
		});
	};

})( jQuery, window, document );

/* sockjs-client v1.1.4 | http://sockjs.org | MIT license */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.SockJS=t()}}(function(){var t;return function t(e,n,r){function i(s,a){if(!n[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var c=n[s]={exports:{}};e[s][0].call(c.exports,function(t){var n=e[s][1][t];return i(n||t)},c,c.exports,t,e,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(t,e,n){(function(n){"use strict";var r=t("./transport-list");e.exports=t("./main")(r),"_sockjs_onload"in n&&setTimeout(n._sockjs_onload,1)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./main":14,"./transport-list":16}],2:[function(t,e,n){"use strict";function r(){o.call(this),this.initEvent("close",!1,!1),this.wasClean=!1,this.code=0,this.reason=""}var i=t("inherits"),o=t("./event");i(r,o),e.exports=r},{"./event":4,"inherits":54}],3:[function(t,e,n){"use strict";function r(){o.call(this)}var i=t("inherits"),o=t("./eventtarget");i(r,o),r.prototype.removeAllListeners=function(t){t?delete this._listeners[t]:this._listeners={}},r.prototype.once=function(t,e){function n(){r.removeListener(t,n),i||(i=!0,e.apply(this,arguments))}var r=this,i=!1;this.on(t,n)},r.prototype.emit=function(){var t=arguments[0],e=this._listeners[t];if(e){for(var n=arguments.length,r=new Array(n-1),i=1;i<n;i++)r[i-1]=arguments[i];for(var o=0;o<e.length;o++)e[o].apply(this,r)}},r.prototype.on=r.prototype.addListener=o.prototype.addEventListener,r.prototype.removeListener=o.prototype.removeEventListener,e.exports.EventEmitter=r},{"./eventtarget":5,"inherits":54}],4:[function(t,e,n){"use strict";function r(t){this.type=t}r.prototype.initEvent=function(t,e,n){return this.type=t,this.bubbles=e,this.cancelable=n,this.timeStamp=+new Date,this},r.prototype.stopPropagation=function(){},r.prototype.preventDefault=function(){},r.CAPTURING_PHASE=1,r.AT_TARGET=2,r.BUBBLING_PHASE=3,e.exports=r},{}],5:[function(t,e,n){"use strict";function r(){this._listeners={}}r.prototype.addEventListener=function(t,e){t in this._listeners||(this._listeners[t]=[]);var n=this._listeners[t];-1===n.indexOf(e)&&(n=n.concat([e])),this._listeners[t]=n},r.prototype.removeEventListener=function(t,e){var n=this._listeners[t];if(n){var r=n.indexOf(e);return-1!==r?void(n.length>1?this._listeners[t]=n.slice(0,r).concat(n.slice(r+1)):delete this._listeners[t]):void 0}},r.prototype.dispatchEvent=function(){var t=arguments[0],e=t.type,n=1===arguments.length?[t]:Array.apply(null,arguments);if(this["on"+e]&&this["on"+e].apply(this,n),e in this._listeners)for(var r=this._listeners[e],i=0;i<r.length;i++)r[i].apply(this,n)},e.exports=r},{}],6:[function(t,e,n){"use strict";function r(t){o.call(this),this.initEvent("message",!1,!1),this.data=t}var i=t("inherits"),o=t("./event");i(r,o),e.exports=r},{"./event":4,"inherits":54}],7:[function(t,e,n){"use strict";function r(t){this._transport=t,t.on("message",this._transportMessage.bind(this)),t.on("close",this._transportClose.bind(this))}var i=t("json3"),o=t("./utils/iframe");r.prototype._transportClose=function(t,e){o.postMessage("c",i.stringify([t,e]))},r.prototype._transportMessage=function(t){o.postMessage("t",t)},r.prototype._send=function(t){this._transport.send(t)},r.prototype._close=function(){this._transport.close(),this._transport.removeAllListeners()},e.exports=r},{"./utils/iframe":47,"json3":55}],8:[function(t,e,n){"use strict";var r=t("./utils/url"),i=t("./utils/event"),o=t("json3"),s=t("./facade"),a=t("./info-iframe-receiver"),l=t("./utils/iframe"),u=t("./location");e.exports=function(t,e){var n={};e.forEach(function(t){t.facadeTransport&&(n[t.facadeTransport.transportName]=t.facadeTransport)}),n[a.transportName]=a;var c;t.bootstrap_iframe=function(){var e;l.currentWindowId=u.hash.slice(1);var a=function(i){if(i.source===parent&&(void 0===c&&(c=i.origin),i.origin===c)){var a;try{a=o.parse(i.data)}catch(t){return void i.data}if(a.windowId===l.currentWindowId)switch(a.type){case"s":var f;try{f=o.parse(a.data)}catch(t){a.data;break}var h=f[0],d=f[1],p=f[2],v=f[3];if(h!==t.version)throw new Error('Incompatible SockJS! Main site uses: "'+h+'", the iframe: "'+t.version+'".');if(!r.isOriginEqual(p,u.href)||!r.isOriginEqual(v,u.href))throw new Error("Can't connect to different domain from within an iframe. ("+u.href+", "+p+", "+v+")");e=new s(new n[d](p,v));break;case"m":e._send(a.data);break;case"c":e&&e._close(),e=null}}};i.attachEvent("message",a),l.postMessage("s")}}},{"./facade":7,"./info-iframe-receiver":10,"./location":13,"./utils/event":46,"./utils/iframe":47,"./utils/url":52,"debug":void 0,"json3":55}],9:[function(t,e,n){"use strict";function r(t,e){i.call(this);var n=this,r=+new Date;this.xo=new e("GET",t),this.xo.once("finish",function(t,e){var i,o;if(200===t){if(o=+new Date-r,e)try{i=s.parse(e)}catch(t){}a.isObject(i)||(i={})}n.emit("finish",i,o),n.removeAllListeners()})}var i=t("events").EventEmitter,o=t("inherits"),s=t("json3"),a=t("./utils/object");o(r,i),r.prototype.close=function(){this.removeAllListeners(),this.xo.close()},e.exports=r},{"./utils/object":49,"debug":void 0,"events":3,"inherits":54,"json3":55}],10:[function(t,e,n){"use strict";function r(t){var e=this;o.call(this),this.ir=new l(t,a),this.ir.once("finish",function(t,n){e.ir=null,e.emit("message",s.stringify([t,n]))})}var i=t("inherits"),o=t("events").EventEmitter,s=t("json3"),a=t("./transport/sender/xhr-local"),l=t("./info-ajax");i(r,o),r.transportName="iframe-info-receiver",r.prototype.close=function(){this.ir&&(this.ir.close(),this.ir=null),this.removeAllListeners()},e.exports=r},{"./info-ajax":9,"./transport/sender/xhr-local":37,"events":3,"inherits":54,"json3":55}],11:[function(t,e,n){(function(n){"use strict";function r(t,e){var r=this;i.call(this);var o=function(){var n=r.ifr=new l(u.transportName,e,t);n.once("message",function(t){if(t){var e;try{e=s.parse(t)}catch(t){return r.emit("finish"),void r.close()}var n=e[0],i=e[1];r.emit("finish",n,i)}r.close()}),n.once("close",function(){r.emit("finish"),r.close()})};n.document.body?o():a.attachEvent("load",o)}var i=t("events").EventEmitter,o=t("inherits"),s=t("json3"),a=t("./utils/event"),l=t("./transport/iframe"),u=t("./info-iframe-receiver");o(r,i),r.enabled=function(){return l.enabled()},r.prototype.close=function(){this.ifr&&this.ifr.close(),this.removeAllListeners(),this.ifr=null},e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./info-iframe-receiver":10,"./transport/iframe":22,"./utils/event":46,"debug":void 0,"events":3,"inherits":54,"json3":55}],12:[function(t,e,n){"use strict";function r(t,e){var n=this;i.call(this),setTimeout(function(){n.doXhr(t,e)},0)}var i=t("events").EventEmitter,o=t("inherits"),s=t("./utils/url"),a=t("./transport/sender/xdr"),l=t("./transport/sender/xhr-cors"),u=t("./transport/sender/xhr-local"),c=t("./transport/sender/xhr-fake"),f=t("./info-iframe"),h=t("./info-ajax");o(r,i),r._getReceiver=function(t,e,n){return n.sameOrigin?new h(e,u):l.enabled?new h(e,l):a.enabled&&n.sameScheme?new h(e,a):f.enabled()?new f(t,e):new h(e,c)},r.prototype.doXhr=function(t,e){var n=this,i=s.addPath(t,"/info");this.xo=r._getReceiver(t,i,e),this.timeoutRef=setTimeout(function(){n._cleanup(!1),n.emit("finish")},r.timeout),this.xo.once("finish",function(t,e){n._cleanup(!0),n.emit("finish",t,e)})},r.prototype._cleanup=function(t){clearTimeout(this.timeoutRef),this.timeoutRef=null,!t&&this.xo&&this.xo.close(),this.xo=null},r.prototype.close=function(){this.removeAllListeners(),this._cleanup(!1)},r.timeout=8e3,e.exports=r},{"./info-ajax":9,"./info-iframe":11,"./transport/sender/xdr":34,"./transport/sender/xhr-cors":35,"./transport/sender/xhr-fake":36,"./transport/sender/xhr-local":37,"./utils/url":52,"debug":void 0,"events":3,"inherits":54}],13:[function(t,e,n){(function(t){"use strict";e.exports=t.location||{origin:"http://localhost:80",protocol:"http",host:"localhost",port:80,href:"http://localhost/",hash:""}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],14:[function(t,e,n){(function(n){"use strict";function r(t,e,n){if(!(this instanceof r))return new r(t,e,n);if(arguments.length<1)throw new TypeError("Failed to construct 'SockJS: 1 argument required, but only 0 present");y.call(this),this.readyState=r.CONNECTING,this.extensions="",this.protocol="",n=n||{},n.protocols_whitelist&&m.warn("'protocols_whitelist' is DEPRECATED. Use 'transports' instead."),this._transportsWhitelist=n.transports,this._transportOptions=n.transportOptions||{};var i=n.sessionId||8;if("function"==typeof i)this._generateSessionId=i;else{if("number"!=typeof i)throw new TypeError("If sessionId is used in the options, it needs to be a number or a function.");this._generateSessionId=function(){return u.string(i)}}this._server=n.server||u.numberString(1e3);var o=new s(t);if(!o.host||!o.protocol)throw new SyntaxError("The URL '"+t+"' is invalid");if(o.hash)throw new SyntaxError("The URL must not contain a fragment");if("http:"!==o.protocol&&"https:"!==o.protocol)throw new SyntaxError("The URL's scheme must be either 'http:' or 'https:'. '"+o.protocol+"' is not allowed.");var a="https:"===o.protocol;if("https"===g.protocol&&!a)throw new Error("SecurityError: An insecure SockJS connection may not be initiated from a page loaded over HTTPS");e?Array.isArray(e)||(e=[e]):e=[];var l=e.sort();l.forEach(function(t,e){if(!t)throw new SyntaxError("The protocols entry '"+t+"' is invalid.");if(e<l.length-1&&t===l[e+1])throw new SyntaxError("The protocols entry '"+t+"' is duplicated.")});var c=f.getOrigin(g.href);this._origin=c?c.toLowerCase():null,o.set("pathname",o.pathname.replace(/\/+$/,"")),this.url=o.href,this.url,this._urlInfo={nullOrigin:!v.hasDomain(),sameOrigin:f.isOriginEqual(this.url,g.href),sameScheme:f.isSchemeEqual(this.url,g.href)},this._ir=new _(this.url,this._urlInfo),this._ir.once("finish",this._receiveInfo.bind(this))}function i(t){return 1e3===t||t>=3e3&&t<=4999}t("./shims");var o,s=t("url-parse"),a=t("inherits"),l=t("json3"),u=t("./utils/random"),c=t("./utils/escape"),f=t("./utils/url"),h=t("./utils/event"),d=t("./utils/transport"),p=t("./utils/object"),v=t("./utils/browser"),m=t("./utils/log"),b=t("./event/event"),y=t("./event/eventtarget"),g=t("./location"),w=t("./event/close"),x=t("./event/trans-message"),_=t("./info-receiver");a(r,y),r.prototype.close=function(t,e){if(t&&!i(t))throw new Error("InvalidAccessError: Invalid code");if(e&&e.length>123)throw new SyntaxError("reason argument has an invalid length");if(this.readyState!==r.CLOSING&&this.readyState!==r.CLOSED){this._close(t||1e3,e||"Normal closure",!0)}},r.prototype.send=function(t){if("string"!=typeof t&&(t=""+t),this.readyState===r.CONNECTING)throw new Error("InvalidStateError: The connection has not been established yet");this.readyState===r.OPEN&&this._transport.send(c.quote(t))},r.version=t("./version"),r.CONNECTING=0,r.OPEN=1,r.CLOSING=2,r.CLOSED=3,r.prototype._receiveInfo=function(t,e){if(this._ir=null,!t)return void this._close(1002,"Cannot connect to server");this._rto=this.countRTO(e),this._transUrl=t.base_url?t.base_url:this.url,t=p.extend(t,this._urlInfo);var n=o.filterToEnabled(this._transportsWhitelist,t);this._transports=n.main,this._transports.length,this._connect()},r.prototype._connect=function(){for(var t=this._transports.shift();t;t=this._transports.shift()){if(t.transportName,t.needBody&&(!n.document.body||void 0!==n.document.readyState&&"complete"!==n.document.readyState&&"interactive"!==n.document.readyState))return this._transports.unshift(t),void h.attachEvent("load",this._connect.bind(this));var e=this._rto*t.roundTrips||5e3;this._transportTimeoutId=setTimeout(this._transportTimeout.bind(this),e);var r=f.addPath(this._transUrl,"/"+this._server+"/"+this._generateSessionId()),i=this._transportOptions[t.transportName],o=new t(r,this._transUrl,i);return o.on("message",this._transportMessage.bind(this)),o.once("close",this._transportClose.bind(this)),o.transportName=t.transportName,void(this._transport=o)}this._close(2e3,"All transports failed",!1)},r.prototype._transportTimeout=function(){this.readyState===r.CONNECTING&&this._transportClose(2007,"Transport timed out")},r.prototype._transportMessage=function(t){var e,n=this,r=t.slice(0,1),i=t.slice(1);switch(r){case"o":return void this._open();case"h":return this.dispatchEvent(new b("heartbeat")),void this.transport}if(i)try{e=l.parse(i)}catch(t){}if(void 0!==e)switch(r){case"a":Array.isArray(e)&&e.forEach(function(t){n.transport,n.dispatchEvent(new x(t))});break;case"m":this.transport,this.dispatchEvent(new x(e));break;case"c":Array.isArray(e)&&2===e.length&&this._close(e[0],e[1],!0)}},r.prototype._transportClose=function(t,e){if(this.transport,this._transport&&(this._transport.removeAllListeners(),this._transport=null,this.transport=null),!i(t)&&2e3!==t&&this.readyState===r.CONNECTING)return void this._connect();this._close(t,e)},r.prototype._open=function(){this._transport.transportName,this.readyState,this.readyState===r.CONNECTING?(this._transportTimeoutId&&(clearTimeout(this._transportTimeoutId),this._transportTimeoutId=null),this.readyState=r.OPEN,this.transport=this._transport.transportName,this.dispatchEvent(new b("open")),this.transport):this._close(1006,"Server lost session")},r.prototype._close=function(t,e,n){this.transport,this.readyState;var i=!1;if(this._ir&&(i=!0,this._ir.close(),this._ir=null),this._transport&&(this._transport.close(),this._transport=null,this.transport=null),this.readyState===r.CLOSED)throw new Error("InvalidStateError: SockJS has already been closed");this.readyState=r.CLOSING,setTimeout(function(){this.readyState=r.CLOSED,i&&this.dispatchEvent(new b("error"));var o=new w("close");o.wasClean=n||!1,o.code=t||1e3,o.reason=e,this.dispatchEvent(o),this.onmessage=this.onclose=this.onerror=null}.bind(this),0)},r.prototype.countRTO=function(t){return t>100?4*t:300+t},e.exports=function(e){return o=d(e),t("./iframe-bootstrap")(r,e),r}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./event/close":2,"./event/event":4,"./event/eventtarget":5,"./event/trans-message":6,"./iframe-bootstrap":8,"./info-receiver":12,"./location":13,"./shims":15,"./utils/browser":44,"./utils/escape":45,"./utils/event":46,"./utils/log":48,"./utils/object":49,"./utils/random":50,"./utils/transport":51,"./utils/url":52,"./version":53,"debug":void 0,"inherits":54,"json3":55,"url-parse":58}],15:[function(t,e,n){"use strict";function r(t){var e=+t;return e!==e?e=0:0!==e&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e}function i(t){return t>>>0}function o(){}var s,a=Array.prototype,l=Object.prototype,u=Function.prototype,c=String.prototype,f=a.slice,h=l.toString,d=function(t){return"[object Function]"===l.toString.call(t)},p=function(t){return"[object Array]"===h.call(t)},v=function(t){return"[object String]"===h.call(t)},m=Object.defineProperty&&function(){try{return Object.defineProperty({},"x",{}),!0}catch(t){return!1}}();s=m?function(t,e,n,r){!r&&e in t||Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:n})}:function(t,e,n,r){!r&&e in t||(t[e]=n)};var b=function(t,e,n){for(var r in e)l.hasOwnProperty.call(e,r)&&s(t,r,e[r],n)},y=function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return Object(t)};b(u,{bind:function(t){var e=this;if(!d(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var n=f.call(arguments,1),r=function(){if(this instanceof l){var r=e.apply(this,n.concat(f.call(arguments)));return Object(r)===r?r:this}return e.apply(t,n.concat(f.call(arguments)))},i=Math.max(0,e.length-n.length),s=[],a=0;a<i;a++)s.push("$"+a);var l=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this, arguments); }")(r);return e.prototype&&(o.prototype=e.prototype,l.prototype=new o,o.prototype=null),l}}),b(Array,{isArray:p});var g=Object("a"),w="a"!==g[0]||!(0 in g);b(a,{forEach:function(t){var e=y(this),n=w&&v(this)?this.split(""):e,r=arguments[1],i=-1,o=n.length>>>0;if(!d(t))throw new TypeError;for(;++i<o;)i in n&&t.call(r,n[i],i,e)}},!function(t){var e=!0,n=!0;return t&&(t.call("foo",function(t,n,r){"object"!=typeof r&&(e=!1)}),t.call([1],function(){n="string"==typeof this},"x")),!!t&&e&&n}(a.forEach));var x=Array.prototype.indexOf&&-1!==[0,1].indexOf(1,2);b(a,{indexOf:function(t){var e=w&&v(this)?this.split(""):y(this),n=e.length>>>0;if(!n)return-1;var i=0;for(arguments.length>1&&(i=r(arguments[1])),i=i>=0?i:Math.max(0,n+i);i<n;i++)if(i in e&&e[i]===t)return i;return-1}},x);var _=c.split;2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?function(){var t=void 0===/()??/.exec("")[1];c.split=function(e,n){var r=this;if(void 0===e&&0===n)return[];if("[object RegExp]"!==h.call(e))return _.call(this,e,n);var o,s,l,u,c=[],f=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.extended?"x":"")+(e.sticky?"y":""),d=0;for(e=new RegExp(e.source,f+"g"),r+="",t||(o=new RegExp("^"+e.source+"$(?!\\s)",f)),n=void 0===n?-1>>>0:i(n);(s=e.exec(r))&&!((l=s.index+s[0].length)>d&&(c.push(r.slice(d,s.index)),!t&&s.length>1&&s[0].replace(o,function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(s[t]=void 0)}),s.length>1&&s.index<r.length&&a.push.apply(c,s.slice(1)),u=s[0].length,d=l,c.length>=n));)e.lastIndex===s.index&&e.lastIndex++;return d===r.length?!u&&e.test("")||c.push(""):c.push(r.slice(d)),c.length>n?c.slice(0,n):c}}():"0".split(void 0,0).length&&(c.split=function(t,e){return void 0===t&&0===e?[]:_.call(this,t,e)});var E=c.substr,j="".substr&&"b"!=="0b".substr(-1);b(c,{substr:function(t,e){return E.call(this,t<0&&(t=this.length+t)<0?0:t,e)}},j)},{}],16:[function(t,e,n){"use strict";e.exports=[t("./transport/websocket"),t("./transport/xhr-streaming"),t("./transport/xdr-streaming"),t("./transport/eventsource"),t("./transport/lib/iframe-wrap")(t("./transport/eventsource")),t("./transport/htmlfile"),t("./transport/lib/iframe-wrap")(t("./transport/htmlfile")),t("./transport/xhr-polling"),t("./transport/xdr-polling"),t("./transport/lib/iframe-wrap")(t("./transport/xhr-polling")),t("./transport/jsonp-polling")]},{"./transport/eventsource":20,"./transport/htmlfile":21,"./transport/jsonp-polling":23,"./transport/lib/iframe-wrap":26,"./transport/websocket":38,"./transport/xdr-polling":39,"./transport/xdr-streaming":40,"./transport/xhr-polling":41,"./transport/xhr-streaming":42}],17:[function(t,e,n){(function(n){"use strict";function r(t,e,n,r){var o=this;i.call(this),setTimeout(function(){o._start(t,e,n,r)},0)}var i=t("events").EventEmitter,o=t("inherits"),s=t("../../utils/event"),a=t("../../utils/url"),l=n.XMLHttpRequest;o(r,i),r.prototype._start=function(t,e,n,i){var o=this;try{this.xhr=new l}catch(t){}if(!this.xhr)return this.emit("finish",0,"no xhr support"),void this._cleanup();e=a.addQuery(e,"t="+ +new Date),this.unloadRef=s.unloadAdd(function(){o._cleanup(!0)});try{this.xhr.open(t,e,!0),this.timeout&&"timeout"in this.xhr&&(this.xhr.timeout=this.timeout,this.xhr.ontimeout=function(){o.emit("finish",0,""),o._cleanup(!1)})}catch(t){return this.emit("finish",0,""),void this._cleanup(!1)}if(i&&i.noCredentials||!r.supportsCORS||(this.xhr.withCredentials="true"),i&&i.headers)for(var u in i.headers)this.xhr.setRequestHeader(u,i.headers[u]);this.xhr.onreadystatechange=function(){if(o.xhr){var t,e,n=o.xhr;switch(n.readyState,n.readyState){case 3:try{e=n.status,t=n.responseText}catch(t){}1223===e&&(e=204),200===e&&t&&t.length>0&&o.emit("chunk",e,t);break;case 4:e=n.status,1223===e&&(e=204),12005!==e&&12029!==e||(e=0),n.responseText,o.emit("finish",e,n.responseText),o._cleanup(!1)}}};try{o.xhr.send(n)}catch(t){o.emit("finish",0,""),o._cleanup(!1)}},r.prototype._cleanup=function(t){if(this.xhr){if(this.removeAllListeners(),s.unloadDel(this.unloadRef),this.xhr.onreadystatechange=function(){},this.xhr.ontimeout&&(this.xhr.ontimeout=null),t)try{this.xhr.abort()}catch(t){}this.unloadRef=this.xhr=null}},r.prototype.close=function(){this._cleanup(!0)},r.enabled=!!l;var u=["Active"].concat("Object").join("X");!r.enabled&&u in n&&(l=function(){try{return new n[u]("Microsoft.XMLHTTP")}catch(t){return null}},r.enabled=!!new l);var c=!1;try{c="withCredentials"in new l}catch(t){}r.supportsCORS=c,e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/event":46,"../../utils/url":52,"debug":void 0,"events":3,"inherits":54}],18:[function(t,e,n){(function(t){e.exports=t.EventSource}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],19:[function(t,e,n){(function(t){"use strict";var n=t.WebSocket||t.MozWebSocket;e.exports=n?function(t){return new n(t)}:void 0}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],20:[function(t,e,n){"use strict";function r(t){if(!r.enabled())throw new Error("Transport created when disabled");o.call(this,t,"/eventsource",s,a)}var i=t("inherits"),o=t("./lib/ajax-based"),s=t("./receiver/eventsource"),a=t("./sender/xhr-cors"),l=t("eventsource");i(r,o),r.enabled=function(){return!!l},r.transportName="eventsource",r.roundTrips=2,e.exports=r},{"./lib/ajax-based":24,"./receiver/eventsource":29,"./sender/xhr-cors":35,"eventsource":18,"inherits":54}],21:[function(t,e,n){"use strict";function r(t){if(!o.enabled)throw new Error("Transport created when disabled");a.call(this,t,"/htmlfile",o,s)}var i=t("inherits"),o=t("./receiver/htmlfile"),s=t("./sender/xhr-local"),a=t("./lib/ajax-based");i(r,a),r.enabled=function(t){return o.enabled&&t.sameOrigin},r.transportName="htmlfile",r.roundTrips=2,e.exports=r},{"./lib/ajax-based":24,"./receiver/htmlfile":30,"./sender/xhr-local":37,"inherits":54}],22:[function(t,e,n){"use strict";function r(t,e,n){if(!r.enabled())throw new Error("Transport created when disabled");s.call(this);var i=this;this.origin=l.getOrigin(n),this.baseUrl=n,this.transUrl=e,this.transport=t,this.windowId=f.string(8);var o=l.addPath(n,"/iframe.html")+"#"+this.windowId;this.iframeObj=u.createIframe(o,function(t){i.emit("close",1006,"Unable to load an iframe ("+t+")"),i.close()}),this.onmessageCallback=this._message.bind(this),c.attachEvent("message",this.onmessageCallback)}var i=t("inherits"),o=t("json3"),s=t("events").EventEmitter,a=t("../version"),l=t("../utils/url"),u=t("../utils/iframe"),c=t("../utils/event"),f=t("../utils/random");i(r,s),r.prototype.close=function(){if(this.removeAllListeners(),this.iframeObj){c.detachEvent("message",this.onmessageCallback);try{this.postMessage("c")}catch(t){}this.iframeObj.cleanup(),this.iframeObj=null,this.onmessageCallback=this.iframeObj=null}},r.prototype._message=function(t){if(t.data,!l.isOriginEqual(t.origin,this.origin))return t.origin,void this.origin;var e;try{e=o.parse(t.data)}catch(e){return void t.data}if(e.windowId!==this.windowId)return e.windowId,void this.windowId;switch(e.type){case"s":this.iframeObj.loaded(),this.postMessage("s",o.stringify([a,this.transport,this.transUrl,this.baseUrl]));break;case"t":this.emit("message",e.data);break;case"c":var n;try{n=o.parse(e.data)}catch(t){return void e.data}this.emit("close",n[0],n[1]),this.close()}},r.prototype.postMessage=function(t,e){this.iframeObj.post(o.stringify({windowId:this.windowId,type:t,data:e||""}),this.origin)},r.prototype.send=function(t){this.postMessage("m",t)},r.enabled=function(){return u.iframeEnabled},r.transportName="iframe",r.roundTrips=2,e.exports=r},{"../utils/event":46,"../utils/iframe":47,"../utils/random":50,"../utils/url":52,"../version":53,"debug":void 0,"events":3,"inherits":54,"json3":55}],23:[function(t,e,n){(function(n){"use strict";function r(t){if(!r.enabled())throw new Error("Transport created when disabled");o.call(this,t,"/jsonp",a,s)}var i=t("inherits"),o=t("./lib/sender-receiver"),s=t("./receiver/jsonp"),a=t("./sender/jsonp");i(r,o),r.enabled=function(){return!!n.document},r.transportName="jsonp-polling",r.roundTrips=1,r.needBody=!0,e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./lib/sender-receiver":28,"./receiver/jsonp":31,"./sender/jsonp":33,"inherits":54}],24:[function(t,e,n){"use strict";function r(t){return function(e,n,r){var i={};"string"==typeof n&&(i.headers={"Content-type":"text/plain"});var o=s.addPath(e,"/xhr_send"),a=new t("POST",o,n,i);return a.once("finish",function(t){if(a=null,200!==t&&204!==t)return r(new Error("http status "+t));r()}),function(){a.close(),a=null;var t=new Error("Aborted");t.code=1e3,r(t)}}}function i(t,e,n,i){a.call(this,t,e,r(i),n,i)}var o=t("inherits"),s=t("../../utils/url"),a=t("./sender-receiver");o(i,a),e.exports=i},{"../../utils/url":52,"./sender-receiver":28,"debug":void 0,"inherits":54}],25:[function(t,e,n){"use strict";function r(t,e){o.call(this),this.sendBuffer=[],this.sender=e,this.url=t}var i=t("inherits"),o=t("events").EventEmitter;i(r,o),r.prototype.send=function(t){this.sendBuffer.push(t),this.sendStop||this.sendSchedule()},r.prototype.sendScheduleWait=function(){var t,e=this;this.sendStop=function(){e.sendStop=null,clearTimeout(t)},t=setTimeout(function(){e.sendStop=null,e.sendSchedule()},25)},r.prototype.sendSchedule=function(){this.sendBuffer.length;var t=this;if(this.sendBuffer.length>0){var e="["+this.sendBuffer.join(",")+"]";this.sendStop=this.sender(this.url,e,function(e){t.sendStop=null,e?(t.emit("close",e.code||1006,"Sending error: "+e),t.close()):t.sendScheduleWait()}),this.sendBuffer=[]}},r.prototype._cleanup=function(){this.removeAllListeners()},r.prototype.close=function(){this._cleanup(),this.sendStop&&(this.sendStop(),this.sendStop=null)},e.exports=r},{"debug":void 0,"events":3,"inherits":54}],26:[function(t,e,n){(function(n){"use strict";var r=t("inherits"),i=t("../iframe"),o=t("../../utils/object");e.exports=function(t){function e(e,n){i.call(this,t.transportName,e,n)}return r(e,i),e.enabled=function(e,r){if(!n.document)return!1;var s=o.extend({},r);return s.sameOrigin=!0,t.enabled(s)&&i.enabled()},e.transportName="iframe-"+t.transportName,e.needBody=!0,e.roundTrips=i.roundTrips+t.roundTrips-1,e.facadeTransport=t,e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/object":49,"../iframe":22,"inherits":54}],27:[function(t,e,n){"use strict";function r(t,e,n){o.call(this),this.Receiver=t,this.receiveUrl=e,this.AjaxObject=n,this._scheduleReceiver()}var i=t("inherits"),o=t("events").EventEmitter;i(r,o),r.prototype._scheduleReceiver=function(){var t=this,e=this.poll=new this.Receiver(this.receiveUrl,this.AjaxObject);e.on("message",function(e){t.emit("message",e)}),e.once("close",function(n,r){t.pollIsClosing,t.poll=e=null,t.pollIsClosing||("network"===r?t._scheduleReceiver():(t.emit("close",n||1006,r),t.removeAllListeners()))})},r.prototype.abort=function(){this.removeAllListeners(),this.pollIsClosing=!0,this.poll&&this.poll.abort()},e.exports=r},{"debug":void 0,"events":3,"inherits":54}],28:[function(t,e,n){"use strict";function r(t,e,n,r,i){var l=o.addPath(t,e),u=this;s.call(this,t,n),this.poll=new a(r,l,i),this.poll.on("message",function(t){u.emit("message",t)}),this.poll.once("close",function(t,e){u.poll=null,u.emit("close",t,e),u.close()})}var i=t("inherits"),o=t("../../utils/url"),s=t("./buffered-sender"),a=t("./polling");i(r,s),r.prototype.close=function(){s.prototype.close.call(this),this.removeAllListeners(),this.poll&&(this.poll.abort(),this.poll=null)},e.exports=r},{"../../utils/url":52,"./buffered-sender":25,"./polling":27,"debug":void 0,"inherits":54}],29:[function(t,e,n){"use strict";function r(t){o.call(this);var e=this,n=this.es=new s(t);n.onmessage=function(t){t.data,e.emit("message",decodeURI(t.data))},n.onerror=function(t){n.readyState;var r=2!==n.readyState?"network":"permanent";e._cleanup(),e._close(r)}}var i=t("inherits"),o=t("events").EventEmitter,s=t("eventsource");i(r,o),r.prototype.abort=function(){this._cleanup(),this._close("user")},r.prototype._cleanup=function(){var t=this.es;t&&(t.onmessage=t.onerror=null,t.close(),this.es=null)},r.prototype._close=function(t){var e=this;setTimeout(function(){e.emit("close",null,t),e.removeAllListeners()},200)},e.exports=r},{"debug":void 0,"events":3,"eventsource":18,"inherits":54}],30:[function(t,e,n){(function(n){"use strict";function r(t){a.call(this);var e=this;o.polluteGlobalNamespace(),this.id="a"+l.string(6),t=s.addQuery(t,"c="+decodeURIComponent(o.WPrefix+"."+this.id)),r.htmlfileEnabled;var i=r.htmlfileEnabled?o.createHtmlfile:o.createIframe;n[o.WPrefix][this.id]={start:function(){e.iframeObj.loaded()},message:function(t){e.emit("message",t)},stop:function(){e._cleanup(),e._close("network")}},this.iframeObj=i(t,function(){e._cleanup(),e._close("permanent")})}var i=t("inherits"),o=t("../../utils/iframe"),s=t("../../utils/url"),a=t("events").EventEmitter,l=t("../../utils/random");i(r,a),r.prototype.abort=function(){this._cleanup(),this._close("user")},r.prototype._cleanup=function(){this.iframeObj&&(this.iframeObj.cleanup(),this.iframeObj=null),delete n[o.WPrefix][this.id]},r.prototype._close=function(t){this.emit("close",null,t),this.removeAllListeners()},r.htmlfileEnabled=!1;var u=["Active"].concat("Object").join("X");if(u in n)try{r.htmlfileEnabled=!!new n[u]("htmlfile")}catch(t){}r.enabled=r.htmlfileEnabled||o.iframeEnabled,e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":void 0,"events":3,"inherits":54}],31:[function(t,e,n){(function(n){"use strict";function r(t){var e=this;u.call(this),i.polluteGlobalNamespace(),this.id="a"+o.string(6);var s=a.addQuery(t,"c="+encodeURIComponent(i.WPrefix+"."+this.id));n[i.WPrefix][this.id]=this._callback.bind(this),this._createScript(s),this.timeoutId=setTimeout(function(){e._abort(new Error("JSONP script loaded abnormally (timeout)"))},r.timeout)}var i=t("../../utils/iframe"),o=t("../../utils/random"),s=t("../../utils/browser"),a=t("../../utils/url"),l=t("inherits"),u=t("events").EventEmitter;l(r,u),r.prototype.abort=function(){if(n[i.WPrefix][this.id]){var t=new Error("JSONP user aborted read");t.code=1e3,this._abort(t)}},r.timeout=35e3,r.scriptErrorTimeout=1e3,r.prototype._callback=function(t){this._cleanup(),this.aborting||(t&&this.emit("message",t),this.emit("close",null,"network"),this.removeAllListeners())},r.prototype._abort=function(t){this._cleanup(),this.aborting=!0,this.emit("close",t.code,t.message),this.removeAllListeners()},r.prototype._cleanup=function(){if(clearTimeout(this.timeoutId),this.script2&&(this.script2.parentNode.removeChild(this.script2),this.script2=null),this.script){var t=this.script;t.parentNode.removeChild(t),t.onreadystatechange=t.onerror=t.onload=t.onclick=null,this.script=null}delete n[i.WPrefix][this.id]},r.prototype._scriptError=function(){var t=this;this.errorTimer||(this.errorTimer=setTimeout(function(){t.loadedOkay||t._abort(new Error("JSONP script loaded abnormally (onerror)"))},r.scriptErrorTimeout))},r.prototype._createScript=function(t){var e,r=this,i=this.script=n.document.createElement("script");if(i.id="a"+o.string(8),i.src=t,i.type="text/javascript",i.charset="UTF-8",i.onerror=this._scriptError.bind(this),i.onload=function(){
		r._abort(new Error("JSONP script loaded abnormally (onload)"))},i.onreadystatechange=function(){if(i.readyState,/loaded|closed/.test(i.readyState)){if(i&&i.htmlFor&&i.onclick){r.loadedOkay=!0;try{i.onclick()}catch(t){}}i&&r._abort(new Error("JSONP script loaded abnormally (onreadystatechange)"))}},void 0===i.async&&n.document.attachEvent)if(s.isOpera())e=this.script2=n.document.createElement("script"),e.text="try{var a = document.getElementById('"+i.id+"'); if(a)a.onerror();}catch(x){};",i.async=e.async=!1;else{try{i.htmlFor=i.id,i.event="onclick"}catch(t){}i.async=!0}void 0!==i.async&&(i.async=!0);var a=n.document.getElementsByTagName("head")[0];a.insertBefore(i,a.firstChild),e&&a.insertBefore(e,a.firstChild)},e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/browser":44,"../../utils/iframe":47,"../../utils/random":50,"../../utils/url":52,"debug":void 0,"events":3,"inherits":54}],32:[function(t,e,n){"use strict";function r(t,e){o.call(this);var n=this;this.bufferPosition=0,this.xo=new e("POST",t,null),this.xo.on("chunk",this._chunkHandler.bind(this)),this.xo.once("finish",function(t,e){n._chunkHandler(t,e),n.xo=null;var r=200===t?"network":"permanent";n.emit("close",null,r),n._cleanup()})}var i=t("inherits"),o=t("events").EventEmitter;i(r,o),r.prototype._chunkHandler=function(t,e){if(200===t&&e)for(var n=-1;;this.bufferPosition+=n+1){var r=e.slice(this.bufferPosition);if(-1===(n=r.indexOf("\n")))break;var i=r.slice(0,n);i&&this.emit("message",i)}},r.prototype._cleanup=function(){this.removeAllListeners()},r.prototype.abort=function(){this.xo&&(this.xo.close(),this.emit("close",null,"user"),this.xo=null),this._cleanup()},e.exports=r},{"debug":void 0,"events":3,"inherits":54}],33:[function(t,e,n){(function(n){"use strict";function r(t){try{return n.document.createElement('<iframe name="'+t+'">')}catch(r){var e=n.document.createElement("iframe");return e.name=t,e}}function i(){o=n.document.createElement("form"),o.style.display="none",o.style.position="absolute",o.method="POST",o.enctype="application/x-www-form-urlencoded",o.acceptCharset="UTF-8",s=n.document.createElement("textarea"),s.name="d",o.appendChild(s),n.document.body.appendChild(o)}var o,s,a=t("../../utils/random"),l=t("../../utils/url");e.exports=function(t,e,n){o||i();var u="a"+a.string(8);o.target=u,o.action=l.addQuery(l.addPath(t,"/jsonp_send"),"i="+u);var c=r(u);c.id=u,c.style.display="none",o.appendChild(c);try{s.value=e}catch(t){}o.submit();var f=function(t){c.onerror&&(c.onreadystatechange=c.onerror=c.onload=null,setTimeout(function(){c.parentNode.removeChild(c),c=null},500),s.value="",n(t))};return c.onerror=function(){f()},c.onload=function(){f()},c.onreadystatechange=function(t){c.readyState,"complete"===c.readyState&&f()},function(){f(new Error("Aborted"))}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/random":50,"../../utils/url":52,"debug":void 0}],34:[function(t,e,n){(function(n){"use strict";function r(t,e,n){var r=this;i.call(this),setTimeout(function(){r._start(t,e,n)},0)}var i=t("events").EventEmitter,o=t("inherits"),s=t("../../utils/event"),a=t("../../utils/browser"),l=t("../../utils/url");o(r,i),r.prototype._start=function(t,e,r){var i=this,o=new n.XDomainRequest;e=l.addQuery(e,"t="+ +new Date),o.onerror=function(){i._error()},o.ontimeout=function(){i._error()},o.onprogress=function(){o.responseText,i.emit("chunk",200,o.responseText)},o.onload=function(){i.emit("finish",200,o.responseText),i._cleanup(!1)},this.xdr=o,this.unloadRef=s.unloadAdd(function(){i._cleanup(!0)});try{this.xdr.open(t,e),this.timeout&&(this.xdr.timeout=this.timeout),this.xdr.send(r)}catch(t){this._error()}},r.prototype._error=function(){this.emit("finish",0,""),this._cleanup(!1)},r.prototype._cleanup=function(t){if(this.xdr){if(this.removeAllListeners(),s.unloadDel(this.unloadRef),this.xdr.ontimeout=this.xdr.onerror=this.xdr.onprogress=this.xdr.onload=null,t)try{this.xdr.abort()}catch(t){}this.unloadRef=this.xdr=null}},r.prototype.close=function(){this._cleanup(!0)},r.enabled=!(!n.XDomainRequest||!a.hasDomain()),e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/browser":44,"../../utils/event":46,"../../utils/url":52,"debug":void 0,"events":3,"inherits":54}],35:[function(t,e,n){"use strict";function r(t,e,n,r){o.call(this,t,e,n,r)}var i=t("inherits"),o=t("../driver/xhr");i(r,o),r.enabled=o.enabled&&o.supportsCORS,e.exports=r},{"../driver/xhr":17,"inherits":54}],36:[function(t,e,n){"use strict";function r(){var t=this;i.call(this),this.to=setTimeout(function(){t.emit("finish",200,"{}")},r.timeout)}var i=t("events").EventEmitter;t("inherits")(r,i),r.prototype.close=function(){clearTimeout(this.to)},r.timeout=2e3,e.exports=r},{"events":3,"inherits":54}],37:[function(t,e,n){"use strict";function r(t,e,n){o.call(this,t,e,n,{noCredentials:!0})}var i=t("inherits"),o=t("../driver/xhr");i(r,o),r.enabled=o.enabled,e.exports=r},{"../driver/xhr":17,"inherits":54}],38:[function(t,e,n){"use strict";function r(t,e,n){if(!r.enabled())throw new Error("Transport created when disabled");a.call(this);var s=this,u=o.addPath(t,"/websocket");u="https"===u.slice(0,5)?"wss"+u.slice(5):"ws"+u.slice(4),this.url=u,this.ws=new l(this.url,[],n),this.ws.onmessage=function(t){t.data,s.emit("message",t.data)},this.unloadRef=i.unloadAdd(function(){s.ws.close()}),this.ws.onclose=function(t){t.code,t.reason,s.emit("close",t.code,t.reason),s._cleanup()},this.ws.onerror=function(t){s.emit("close",1006,"WebSocket connection broken"),s._cleanup()}}var i=t("../utils/event"),o=t("../utils/url"),s=t("inherits"),a=t("events").EventEmitter,l=t("./driver/websocket");s(r,a),r.prototype.send=function(t){var e="["+t+"]";this.ws.send(e)},r.prototype.close=function(){var t=this.ws;this._cleanup(),t&&t.close()},r.prototype._cleanup=function(){var t=this.ws;t&&(t.onmessage=t.onclose=t.onerror=null),i.unloadDel(this.unloadRef),this.unloadRef=this.ws=null,this.removeAllListeners()},r.enabled=function(){return!!l},r.transportName="websocket",r.roundTrips=2,e.exports=r},{"../utils/event":46,"../utils/url":52,"./driver/websocket":19,"debug":void 0,"events":3,"inherits":54}],39:[function(t,e,n){"use strict";function r(t){if(!l.enabled)throw new Error("Transport created when disabled");o.call(this,t,"/xhr",a,l)}var i=t("inherits"),o=t("./lib/ajax-based"),s=t("./xdr-streaming"),a=t("./receiver/xhr"),l=t("./sender/xdr");i(r,o),r.enabled=s.enabled,r.transportName="xdr-polling",r.roundTrips=2,e.exports=r},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"./xdr-streaming":40,"inherits":54}],40:[function(t,e,n){"use strict";function r(t){if(!a.enabled)throw new Error("Transport created when disabled");o.call(this,t,"/xhr_streaming",s,a)}var i=t("inherits"),o=t("./lib/ajax-based"),s=t("./receiver/xhr"),a=t("./sender/xdr");i(r,o),r.enabled=function(t){return!t.cookie_needed&&!t.nullOrigin&&(a.enabled&&t.sameScheme)},r.transportName="xdr-streaming",r.roundTrips=2,e.exports=r},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xdr":34,"inherits":54}],41:[function(t,e,n){"use strict";function r(t){if(!l.enabled&&!a.enabled)throw new Error("Transport created when disabled");o.call(this,t,"/xhr",s,a)}var i=t("inherits"),o=t("./lib/ajax-based"),s=t("./receiver/xhr"),a=t("./sender/xhr-cors"),l=t("./sender/xhr-local");i(r,o),r.enabled=function(t){return!t.nullOrigin&&(!(!l.enabled||!t.sameOrigin)||a.enabled)},r.transportName="xhr-polling",r.roundTrips=2,e.exports=r},{"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":54}],42:[function(t,e,n){(function(n){"use strict";function r(t){if(!l.enabled&&!a.enabled)throw new Error("Transport created when disabled");o.call(this,t,"/xhr_streaming",s,a)}var i=t("inherits"),o=t("./lib/ajax-based"),s=t("./receiver/xhr"),a=t("./sender/xhr-cors"),l=t("./sender/xhr-local"),u=t("../utils/browser");i(r,o),r.enabled=function(t){return!t.nullOrigin&&(!u.isOpera()&&a.enabled)},r.transportName="xhr-streaming",r.roundTrips=2,r.needBody=!!n.document,e.exports=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/browser":44,"./lib/ajax-based":24,"./receiver/xhr":32,"./sender/xhr-cors":35,"./sender/xhr-local":37,"inherits":54}],43:[function(t,e,n){(function(t){"use strict";t.crypto&&t.crypto.getRandomValues?e.exports.randomBytes=function(e){var n=new Uint8Array(e);return t.crypto.getRandomValues(n),n}:e.exports.randomBytes=function(t){for(var e=new Array(t),n=0;n<t;n++)e[n]=Math.floor(256*Math.random());return e}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],44:[function(t,e,n){(function(t){"use strict";e.exports={isOpera:function(){return t.navigator&&/opera/i.test(t.navigator.userAgent)},isKonqueror:function(){return t.navigator&&/konqueror/i.test(t.navigator.userAgent)},hasDomain:function(){if(!t.document)return!0;try{return!!t.document.domain}catch(t){return!1}}}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],45:[function(t,e,n){"use strict";var r,i=t("json3"),o=/[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,s=function(t){var e,n={},r=[];for(e=0;e<65536;e++)r.push(String.fromCharCode(e));return t.lastIndex=0,r.join("").replace(t,function(t){return n[t]="\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4),""}),t.lastIndex=0,n};e.exports={quote:function(t){var e=i.stringify(t);return o.lastIndex=0,o.test(e)?(r||(r=s(o)),e.replace(o,function(t){return r[t]})):e}}},{"json3":55}],46:[function(t,e,n){(function(n){"use strict";var r=t("./random"),i={},o=!1,s=n.chrome&&n.chrome.app&&n.chrome.app.runtime;e.exports={attachEvent:function(t,e){void 0!==n.addEventListener?n.addEventListener(t,e,!1):n.document&&n.attachEvent&&(n.document.attachEvent("on"+t,e),n.attachEvent("on"+t,e))},detachEvent:function(t,e){void 0!==n.addEventListener?n.removeEventListener(t,e,!1):n.document&&n.detachEvent&&(n.document.detachEvent("on"+t,e),n.detachEvent("on"+t,e))},unloadAdd:function(t){if(s)return null;var e=r.string(8);return i[e]=t,o&&setTimeout(this.triggerUnloadCallbacks,0),e},unloadDel:function(t){t in i&&delete i[t]},triggerUnloadCallbacks:function(){for(var t in i)i[t](),delete i[t]}};var a=function(){o||(o=!0,e.exports.triggerUnloadCallbacks())};s||e.exports.attachEvent("unload",a)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./random":50}],47:[function(t,e,n){(function(n){"use strict";var r=t("./event"),i=t("json3"),o=t("./browser");e.exports={WPrefix:"_jp",currentWindowId:null,polluteGlobalNamespace:function(){e.exports.WPrefix in n||(n[e.exports.WPrefix]={})},postMessage:function(t,r){n.parent!==n&&n.parent.postMessage(i.stringify({windowId:e.exports.currentWindowId,type:t,data:r||""}),"*")},createIframe:function(t,e){var i,o,s=n.document.createElement("iframe"),a=function(){clearTimeout(i);try{s.onload=null}catch(t){}s.onerror=null},l=function(){s&&(a(),setTimeout(function(){s&&s.parentNode.removeChild(s),s=null},0),r.unloadDel(o))},u=function(t){s&&(l(),e(t))},c=function(t,e){try{setTimeout(function(){s&&s.contentWindow&&s.contentWindow.postMessage(t,e)},0)}catch(t){}};return s.src=t,s.style.display="none",s.style.position="absolute",s.onerror=function(){u("onerror")},s.onload=function(){clearTimeout(i),i=setTimeout(function(){u("onload timeout")},2e3)},n.document.body.appendChild(s),i=setTimeout(function(){u("timeout")},15e3),o=r.unloadAdd(l),{post:c,cleanup:l,loaded:a}},createHtmlfile:function(t,i){var o,s,a,l=["Active"].concat("Object").join("X"),u=new n[l]("htmlfile"),c=function(){clearTimeout(o),a.onerror=null},f=function(){u&&(c(),r.unloadDel(s),a.parentNode.removeChild(a),a=u=null,CollectGarbage())},h=function(t){u&&(f(),i(t))},d=function(t,e){try{setTimeout(function(){a&&a.contentWindow&&a.contentWindow.postMessage(t,e)},0)}catch(t){}};u.open(),u.write('<html><script>document.domain="'+n.document.domain+'";<\/script></html>'),u.close(),u.parentWindow[e.exports.WPrefix]=n[e.exports.WPrefix];var p=u.createElement("div");return u.body.appendChild(p),a=u.createElement("iframe"),p.appendChild(a),a.src=t,a.onerror=function(){h("onerror")},o=setTimeout(function(){h("timeout")},15e3),s=r.unloadAdd(f),{post:d,cleanup:f,loaded:c}}},e.exports.iframeEnabled=!1,n.document&&(e.exports.iframeEnabled=("function"==typeof n.postMessage||"object"==typeof n.postMessage)&&!o.isKonqueror())}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./browser":44,"./event":46,"debug":void 0,"json3":55}],48:[function(t,e,n){(function(t){"use strict";var n={};["log","debug","warn"].forEach(function(e){var r;try{r=t.console&&t.console[e]&&t.console[e].apply}catch(t){}n[e]=r?function(){return t.console[e].apply(t.console,arguments)}:"log"===e?function(){}:n.log}),e.exports=n}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],49:[function(t,e,n){"use strict";e.exports={isObject:function(t){var e=typeof t;return"function"===e||"object"===e&&!!t},extend:function(t){if(!this.isObject(t))return t;for(var e,n,r=1,i=arguments.length;r<i;r++){e=arguments[r];for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t}}},{}],50:[function(t,e,n){"use strict";var r=t("crypto"),i="abcdefghijklmnopqrstuvwxyz012345";e.exports={string:function(t){for(var e=i.length,n=r.randomBytes(t),o=[],s=0;s<t;s++)o.push(i.substr(n[s]%e,1));return o.join("")},number:function(t){return Math.floor(Math.random()*t)},numberString:function(t){var e=(""+(t-1)).length;return(new Array(e+1).join("0")+this.number(t)).slice(-e)}}},{"crypto":43}],51:[function(t,e,n){"use strict";e.exports=function(t){return{filterToEnabled:function(e,n){var r={main:[],facade:[]};return e?"string"==typeof e&&(e=[e]):e=[],t.forEach(function(t){if(t&&("websocket"!==t.transportName||!1!==n.websocket))return e.length&&-1===e.indexOf(t.transportName)?void t.transportName:void(t.enabled(n)?(t.transportName,r.main.push(t),t.facadeTransport&&r.facade.push(t.facadeTransport)):t.transportName)}),r}}}},{"debug":void 0}],52:[function(t,e,n){"use strict";var r=t("url-parse");e.exports={getOrigin:function(t){if(!t)return null;var e=new r(t);if("file:"===e.protocol)return null;var n=e.port;return n||(n="https:"===e.protocol?"443":"80"),e.protocol+"//"+e.hostname+":"+n},isOriginEqual:function(t,e){var n=this.getOrigin(t)===this.getOrigin(e);return n},isSchemeEqual:function(t,e){return t.split(":")[0]===e.split(":")[0]},addPath:function(t,e){var n=t.split("?");return n[0]+e+(n[1]?"?"+n[1]:"")},addQuery:function(t,e){return t+(-1===t.indexOf("?")?"?"+e:"&"+e)}}},{"debug":void 0,"url-parse":58}],53:[function(t,e,n){e.exports="1.1.4"},{}],54:[function(t,e,n){"function"==typeof Object.create?e.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},{}],55:[function(e,n,r){(function(e){(function(){function i(t,e){function n(t){if(n[t]!==m)return n[t];var i;if("bug-string-char-index"==t)i="a"!="a"[0];else if("json"==t)i=n("json-stringify")&&n("json-parse");else{var s,a='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var l=e.stringify,c="function"==typeof l&&g;if(c){(s=function(){return 1}).toJSON=s;try{c="0"===l(0)&&"0"===l(new r)&&'""'==l(new o)&&l(y)===m&&l(m)===m&&l()===m&&"1"===l(s)&&"[1]"==l([s])&&"[null]"==l([m])&&"null"==l(null)&&"[null,null,null]"==l([m,y,null])&&l({"a":[s,!0,!1,null,"\0\b\n\f\r\t"]})==a&&"1"===l(null,s)&&"[\n 1,\n 2\n]"==l([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==l(new u(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==l(new u(864e13))&&'"-000001-01-01T00:00:00.000Z"'==l(new u(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==l(new u(-1))}catch(t){c=!1}}i=c}if("json-parse"==t){var f=e.parse;if("function"==typeof f)try{if(0===f("0")&&!f(!1)){s=f(a);var h=5==s.a.length&&1===s.a[0];if(h){try{h=!f('"\t"')}catch(t){}if(h)try{h=1!==f("01")}catch(t){}if(h)try{h=1!==f("1.")}catch(t){}}}}catch(t){h=!1}i=h}}return n[t]=!!i}t||(t=l.Object()),e||(e=l.Object());var r=t.Number||l.Number,o=t.String||l.String,a=t.Object||l.Object,u=t.Date||l.Date,c=t.SyntaxError||l.SyntaxError,f=t.TypeError||l.TypeError,h=t.Math||l.Math,d=t.JSON||l.JSON;"object"==typeof d&&d&&(e.stringify=d.stringify,e.parse=d.parse);var p,v,m,b=a.prototype,y=b.toString,g=new u(-0xc782b5b800cec);try{g=-109252==g.getUTCFullYear()&&0===g.getUTCMonth()&&1===g.getUTCDate()&&10==g.getUTCHours()&&37==g.getUTCMinutes()&&6==g.getUTCSeconds()&&708==g.getUTCMilliseconds()}catch(t){}if(!n("json")){var w=n("bug-string-char-index");if(!g)var x=h.floor,_=[0,31,59,90,120,151,181,212,243,273,304,334],E=function(t,e){return _[e]+365*(t-1970)+x((t-1969+(e=+(e>1)))/4)-x((t-1901+e)/100)+x((t-1601+e)/400)};if((p=b.hasOwnProperty)||(p=function(t){var e,n={};return(n.__proto__=null,n.__proto__={"toString":1},n).toString!=y?p=function(t){var e=this.__proto__,n=t in(this.__proto__=null,this);return this.__proto__=e,n}:(e=n.constructor,p=function(t){var n=(this.constructor||e).prototype;return t in this&&!(t in n&&this[t]===n[t])}),n=null,p.call(this,t)}),v=function(t,e){var n,r,i,o=0;(n=function(){this.valueOf=0}).prototype.valueOf=0,r=new n;for(i in r)p.call(r,i)&&o++;return n=r=null,o?v=2==o?function(t,e){var n,r={},i="[object Function]"==y.call(t);for(n in t)i&&"prototype"==n||p.call(r,n)||!(r[n]=1)||!p.call(t,n)||e(n)}:function(t,e){var n,r,i="[object Function]"==y.call(t);for(n in t)i&&"prototype"==n||!p.call(t,n)||(r="constructor"===n)||e(n);(r||p.call(t,n="constructor"))&&e(n)}:(r=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],v=function(t,e){var n,i,o="[object Function]"==y.call(t),a=!o&&"function"!=typeof t.constructor&&s[typeof t.hasOwnProperty]&&t.hasOwnProperty||p;for(n in t)o&&"prototype"==n||!a.call(t,n)||e(n);for(i=r.length;n=r[--i];a.call(t,n)&&e(n));}),v(t,e)},!n("json-stringify")){var j={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},S=function(t,e){return("000000"+(e||0)).slice(-t)},T=function(t){for(var e='"',n=0,r=t.length,i=!w||r>10,o=i&&(w?t.split(""):t);n<r;n++){var s=t.charCodeAt(n);switch(s){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=j[s];break;default:if(s<32){e+="\\u00"+S(2,s.toString(16));break}e+=i?o[n]:t.charAt(n)}}return e+'"'},O=function(t,e,n,r,i,o,s){var a,l,u,c,h,d,b,g,w,_,j,C,N,A,k,I;try{a=e[t]}catch(t){}if("object"==typeof a&&a)if("[object Date]"!=(l=y.call(a))||p.call(a,"toJSON"))"function"==typeof a.toJSON&&("[object Number]"!=l&&"[object String]"!=l&&"[object Array]"!=l||p.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&a<1/0){if(E){for(h=x(a/864e5),u=x(h/365.2425)+1970-1;E(u+1,0)<=h;u++);for(c=x((h-E(u,0))/30.42);E(u,c+1)<=h;c++);h=1+h-E(u,c),d=(a%864e5+864e5)%864e5,b=x(d/36e5)%24,g=x(d/6e4)%60,w=x(d/1e3)%60,_=d%1e3}else u=a.getUTCFullYear(),c=a.getUTCMonth(),h=a.getUTCDate(),b=a.getUTCHours(),g=a.getUTCMinutes(),w=a.getUTCSeconds(),_=a.getUTCMilliseconds();a=(u<=0||u>=1e4?(u<0?"-":"+")+S(6,u<0?-u:u):S(4,u))+"-"+S(2,c+1)+"-"+S(2,h)+"T"+S(2,b)+":"+S(2,g)+":"+S(2,w)+"."+S(3,_)+"Z"}else a=null;if(n&&(a=n.call(e,t,a)),null===a)return"null";if("[object Boolean]"==(l=y.call(a)))return""+a;if("[object Number]"==l)return a>-1/0&&a<1/0?""+a:"null";if("[object String]"==l)return T(""+a);if("object"==typeof a){for(A=s.length;A--;)if(s[A]===a)throw f();if(s.push(a),j=[],k=o,o+=i,"[object Array]"==l){for(N=0,A=a.length;N<A;N++)C=O(N,a,n,r,i,o,s),j.push(C===m?"null":C);I=j.length?i?"[\n"+o+j.join(",\n"+o)+"\n"+k+"]":"["+j.join(",")+"]":"[]"}else v(r||a,function(t){var e=O(t,a,n,r,i,o,s);e!==m&&j.push(T(t)+":"+(i?" ":"")+e)}),I=j.length?i?"{\n"+o+j.join(",\n"+o)+"\n"+k+"}":"{"+j.join(",")+"}":"{}";return s.pop(),I}};e.stringify=function(t,e,n){var r,i,o,a;if(s[typeof e]&&e)if("[object Function]"==(a=y.call(e)))i=e;else if("[object Array]"==a){o={};for(var l,u=0,c=e.length;u<c;l=e[u++],("[object String]"==(a=y.call(l))||"[object Number]"==a)&&(o[l]=1));}if(n)if("[object Number]"==(a=y.call(n))){if((n-=n%1)>0)for(r="",n>10&&(n=10);r.length<n;r+=" ");}else"[object String]"==a&&(r=n.length<=10?n:n.slice(0,10));return O("",(l={},l[""]=t,l),i,o,r,"",[])}}if(!n("json-parse")){var C,N,A=o.fromCharCode,k={92:"\\",34:'"',47:"/",98:"\b",116:"\t",110:"\n",102:"\f",114:"\r"},I=function(){throw C=N=null,c()},P=function(){for(var t,e,n,r,i,o=N,s=o.length;C<s;)switch(i=o.charCodeAt(C)){case 9:case 10:case 13:case 32:C++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=w?o.charAt(C):o[C],C++,t;case 34:for(t="@",C++;C<s;)if((i=o.charCodeAt(C))<32)I();else if(92==i)switch(i=o.charCodeAt(++C)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=k[i],C++;break;case 117:for(e=++C,n=C+4;C<n;C++)(i=o.charCodeAt(C))>=48&&i<=57||i>=97&&i<=102||i>=65&&i<=70||I();t+=A("0x"+o.slice(e,C));break;default:I()}else{if(34==i)break;for(i=o.charCodeAt(C),e=C;i>=32&&92!=i&&34!=i;)i=o.charCodeAt(++C);t+=o.slice(e,C)}if(34==o.charCodeAt(C))return C++,t;I();default:if(e=C,45==i&&(r=!0,i=o.charCodeAt(++C)),i>=48&&i<=57){for(48==i&&(i=o.charCodeAt(C+1))>=48&&i<=57&&I(),r=!1;C<s&&(i=o.charCodeAt(C))>=48&&i<=57;C++);if(46==o.charCodeAt(C)){for(n=++C;n<s&&(i=o.charCodeAt(n))>=48&&i<=57;n++);n==C&&I(),C=n}if(101==(i=o.charCodeAt(C))||69==i){for(i=o.charCodeAt(++C),43!=i&&45!=i||C++,n=C;n<s&&(i=o.charCodeAt(n))>=48&&i<=57;n++);n==C&&I(),C=n}return+o.slice(e,C)}if(r&&I(),"true"==o.slice(C,C+4))return C+=4,!0;if("false"==o.slice(C,C+5))return C+=5,!1;if("null"==o.slice(C,C+4))return C+=4,null;I()}return"$"},L=function(t){var e,n;if("$"==t&&I(),"string"==typeof t){if("@"==(w?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];"]"!=(t=P());n||(n=!0))n&&(","==t?"]"==(t=P())&&I():I()),","==t&&I(),e.push(L(t));return e}if("{"==t){for(e={};"}"!=(t=P());n||(n=!0))n&&(","==t?"}"==(t=P())&&I():I()),","!=t&&"string"==typeof t&&"@"==(w?t.charAt(0):t[0])&&":"==P()||I(),e[t.slice(1)]=L(P());return e}I()}return t},R=function(t,e,n){var r=U(t,e,n);r===m?delete t[e]:t[e]=r},U=function(t,e,n){var r,i=t[e];if("object"==typeof i&&i)if("[object Array]"==y.call(i))for(r=i.length;r--;)R(i,r,n);else v(i,function(t){R(i,t,n)});return n.call(t,e,i)};e.parse=function(t,e){var n,r;return C=0,N=""+t,n=L(P()),"$"!=P()&&I(),C=N=null,e&&"[object Function]"==y.call(e)?U((r={},r[""]=n,r),"",e):n}}}return e.runInContext=i,e}var o="function"==typeof t&&t.amd,s={"function":!0,"object":!0},a=s[typeof r]&&r&&!r.nodeType&&r,l=s[typeof window]&&window||this,u=a&&s[typeof n]&&n&&!n.nodeType&&"object"==typeof e&&e;if(!u||u.global!==u&&u.window!==u&&u.self!==u||(l=u),a&&!o)i(l,a);else{var c=l.JSON,f=l.JSON3,h=!1,d=i(l,l.JSON3={"noConflict":function(){return h||(h=!0,l.JSON=c,l.JSON3=f,c=f=null),d}});l.JSON={"parse":d.parse,"stringify":d.stringify}}o&&t(function(){return d})}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],56:[function(t,e,n){"use strict";function r(t){for(var e,n=/([^=?&]+)=?([^&]*)/g,r={};e=n.exec(t);r[decodeURIComponent(e[1])]=decodeURIComponent(e[2]));return r}function i(t,e){e=e||"";var n=[];"string"!=typeof e&&(e="?");for(var r in t)o.call(t,r)&&n.push(encodeURIComponent(r)+"="+encodeURIComponent(t[r]));return n.length?e+n.join("&"):""}var o=Object.prototype.hasOwnProperty;n.stringify=i,n.parse=r},{}],57:[function(t,e,n){"use strict";e.exports=function(t,e){if(e=e.split(":")[0],!(t=+t))return!1;switch(e){case"http":case"ws":return 80!==t;case"https":case"wss":return 443!==t;case"ftp":return 21!==t;case"gopher":return 70!==t;case"file":return!1}return 0!==t}},{}],58:[function(t,e,n){"use strict";function r(t){var e=f.exec(t);return{protocol:e[1]?e[1].toLowerCase():"",slashes:!!e[2],rest:e[3]}}function i(t,e){for(var n=(e||"/").split("/").slice(0,-1).concat(t.split("/")),r=n.length,i=n[r-1],o=!1,s=0;r--;)"."===n[r]?n.splice(r,1):".."===n[r]?(n.splice(r,1),s++):s&&(0===r&&(o=!0),n.splice(r,1),s--);return o&&n.unshift(""),"."!==i&&".."!==i||n.push(""),n.join("/")}function o(t,e,n){if(!(this instanceof o))return new o(t,e,n);var s,a,f,d,p,v,m=h.slice(),b=typeof e,y=this,g=0;for("object"!==b&&"string"!==b&&(n=e,e=null),n&&"function"!=typeof n&&(n=c.parse),e=u(e),a=r(t||""),s=!a.protocol&&!a.slashes,y.slashes=a.slashes||s&&e.slashes,y.protocol=a.protocol||e.protocol||"",t=a.rest,a.slashes||(m[2]=[/(.*)/,"pathname"]);g<m.length;g++)d=m[g],f=d[0],v=d[1],f!==f?y[v]=t:"string"==typeof f?~(p=t.indexOf(f))&&("number"==typeof d[2]?(y[v]=t.slice(0,p),t=t.slice(p+d[2])):(y[v]=t.slice(p),t=t.slice(0,p))):(p=f.exec(t))&&(y[v]=p[1],t=t.slice(0,p.index)),y[v]=y[v]||(s&&d[3]?e[v]||"":""),d[4]&&(y[v]=y[v].toLowerCase());n&&(y.query=n(y.query)),s&&e.slashes&&"/"!==y.pathname.charAt(0)&&(""!==y.pathname||""!==e.pathname)&&(y.pathname=i(y.pathname,e.pathname)),l(y.port,y.protocol)||(y.host=y.hostname,y.port=""),y.username=y.password="",y.auth&&(d=y.auth.split(":"),y.username=d[0]||"",y.password=d[1]||""),y.origin=y.protocol&&y.host&&"file:"!==y.protocol?y.protocol+"//"+y.host:"null",y.href=y.toString()}function s(t,e,n){var r=this;switch(t){case"query":"string"==typeof e&&e.length&&(e=(n||c.parse)(e)),r[t]=e;break;case"port":r[t]=e,l(e,r.protocol)?e&&(r.host=r.hostname+":"+e):(r.host=r.hostname,r[t]="");break;case"hostname":r[t]=e,r.port&&(e+=":"+r.port),r.host=e;break;case"host":r[t]=e,/:\d+$/.test(e)?(e=e.split(":"),r.port=e.pop(),r.hostname=e.join(":")):(r.hostname=e,r.port="");break;case"protocol":r.protocol=e.toLowerCase(),r.slashes=!n;break;case"pathname":r.pathname=e.length&&"/"!==e.charAt(0)?"/"+e:e;break;default:r[t]=e}for(var i=0;i<h.length;i++){var o=h[i];o[4]&&(r[o[1]]=r[o[1]].toLowerCase())}return r.origin=r.protocol&&r.host&&"file:"!==r.protocol?r.protocol+"//"+r.host:"null",r.href=r.toString(),r}function a(t){t&&"function"==typeof t||(t=c.stringify);var e,n=this,r=n.protocol;r&&":"!==r.charAt(r.length-1)&&(r+=":");var i=r+(n.slashes?"//":"");return n.username&&(i+=n.username,n.password&&(i+=":"+n.password),i+="@"),i+=n.host+n.pathname,e="object"==typeof n.query?t(n.query):n.query,e&&(i+="?"!==e.charAt(0)?"?"+e:e),n.hash&&(i+=n.hash),i}var l=t("requires-port"),u=t("./lolcation"),c=t("querystringify"),f=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,h=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]];o.prototype={set:s,toString:a},o.extractProtocol=r,o.location=u,o.qs=c,e.exports=o},{"./lolcation":59,"querystringify":56,"requires-port":57}],59:[function(t,e,n){(function(n){"use strict";var r,i=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,o={hash:1,query:1};e.exports=function(e){e=e||n.location||{},r=r||t("./");var s,a={},l=typeof e;if("blob:"===e.protocol)a=new r(unescape(e.pathname),{});else if("string"===l){a=new r(e,{});for(s in o)delete a[s]}else if("object"===l){for(s in e)s in o||(a[s]=e[s]);void 0===a.slashes&&(a.slashes=i.test(e.href))}return a}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./":58}]},{},[1])(1)});

var RIA_SOCK_DEFAULT_INTERVALS = [10000, 15000, 45000, 70000, 300000];

var ria_sock = {
	events: {},
	instance: null,
	connected: false,
	connectionInterval: null,
	connectionIntervalTime: 30000,
	reconnectIntervals: RIA_SOCK_DEFAULT_INTERVALS.concat([]),
	url: GLOBAL.sock.server,
	on: function (eventName, fn) {
		this.events[eventName] = this.events[eventName] || [];
		this.events[eventName].push(fn);
	},
	off: function (eventName, fn) {
		if (this.events[eventName]) {
			for (var i = 0; i < this.events[eventName].length; i++) {
				if (this.events[eventName][i] === fn) {
					this.events[eventName].splice(i, 1);
					break;
				}
			};
		}
	},
	emit: function (eventName, data) {
		if (this.events[eventName]) {
			this.events[eventName].forEach(function (fn) {
				fn(data);
			});
		}
	},
	get: function() {
		return this.instance;
	},
	send: function(data) {
		data.message.lang = GLOBAL.sock.lang;
		data.message.project = GLOBAL.sock.project;
		this.instance && this.instance.send(JSON.stringify(data));
	},
	connect: function() {
		ria_sock.instance = new SockJS(ria_sock.url, null, {
			transports: ['websocket']
		});
	},
	reconnect: function() {
		if (!ria_sock.reconnectIntervals.length) {
			return;
		}

		if (ria_sock.connected) {
			return;
		}

		setTimeout(function() {
			ria_sock.init();
		}, ria_sock.reconnectIntervals.shift())
	},
	init: function() {
		if (!ria_sock.instance) {
			ria_sock.connect();
		}

		this.instance.onmessage = function(e) {
			var data = JSON.parse(e.data);
			ria_sock.emit(data.type, data);
			ria_sock.emit('onmessage', e);
		}

		this.instance.onopen = function() {
			if (ria_sock.connectionInterval) {
				clearInterval(ria_sock.connectionInterval)
			}

			ria_sock.connected = true;

			ria_sock.connectionInterval = setInterval(function() {
				ria_sock.reconnectIntervals = RIA_SOCK_DEFAULT_INTERVALS.concat([]);
				clearInterval(ria_sock.connectionInterval);
			}, ria_sock.connectionIntervalTime);

			ria_sock.send({
				type: 'user_join',
				message: {
					user_id: GLOBAL.user.id || null,
					obj_id: (GLOBAL.article && GLOBAL.article.id) || (location.pathname === '/' ? 'main' : 'page')
				}
			});

			ria_sock.emit('onopen');
		}

		this.instance.onclose = function(e) {
			if (ria_sock.connectionInterval) {
				clearInterval(ria_sock.connectionInterval)
			}

			ria_sock.connected = false;

			ria_sock.instance = null;
			ria_sock.reconnect();

			ria_sock.emit('onclose', e);
		}

		this.instance.onerror = function(e) {
			console.error("Sock connection error", e);
			ria_sock.emit('onerror', e);
		}
	}
};

if (GLOBAL.sock) {
	ria_sock.init();
}
/**
 * @license
 * Lodash lodash.com/license | Underscore.js 1.8.3 underscorejs.org/LICENSE
 */
;(function(){function n(n,t,r){switch(r.length){case 0:return n.call(t);case 1:return n.call(t,r[0]);case 2:return n.call(t,r[0],r[1]);case 3:return n.call(t,r[0],r[1],r[2])}return n.apply(t,r)}function t(n,t,r,e){for(var u=-1,i=null==n?0:n.length;++u<i;){var o=n[u];t(e,o,r(o),n)}return e}function r(n,t){for(var r=-1,e=null==n?0:n.length;++r<e&&false!==t(n[r],r,n););return n}function e(n,t){for(var r=null==n?0:n.length;r--&&false!==t(n[r],r,n););return n}function u(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(!t(n[r],r,n))return false;
    return true}function i(n,t){for(var r=-1,e=null==n?0:n.length,u=0,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[u++]=o)}return i}function o(n,t){return!(null==n||!n.length)&&-1<v(n,t,0)}function f(n,t,r){for(var e=-1,u=null==n?0:n.length;++e<u;)if(r(t,n[e]))return true;return false}function c(n,t){for(var r=-1,e=null==n?0:n.length,u=Array(e);++r<e;)u[r]=t(n[r],r,n);return u}function a(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function l(n,t,r,e){var u=-1,i=null==n?0:n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);
    return r}function s(n,t,r,e){var u=null==n?0:n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function h(n,t){for(var r=-1,e=null==n?0:n.length;++r<e;)if(t(n[r],r,n))return true;return false}function p(n,t,r){var e;return r(n,function(n,r,u){if(t(n,r,u))return e=r,false}),e}function _(n,t,r,e){var u=n.length;for(r+=e?1:-1;e?r--:++r<u;)if(t(n[r],r,n))return r;return-1}function v(n,t,r){if(t===t)n:{--r;for(var e=n.length;++r<e;)if(n[r]===t){n=r;break n}n=-1}else n=_(n,d,r);return n}function g(n,t,r,e){
    --r;for(var u=n.length;++r<u;)if(e(n[r],t))return r;return-1}function d(n){return n!==n}function y(n,t){var r=null==n?0:n.length;return r?m(n,t)/r:F}function b(n){return function(t){return null==t?T:t[n]}}function x(n){return function(t){return null==n?T:n[t]}}function j(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=false,n):t(r,n,u,i)}),r}function w(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].c;return n}function m(n,t){for(var r,e=-1,u=n.length;++e<u;){var i=t(n[e]);i!==T&&(r=r===T?i:r+i)}return r;
}function A(n,t){for(var r=-1,e=Array(n);++r<n;)e[r]=t(r);return e}function k(n,t){return c(t,function(t){return[t,n[t]]})}function E(n){return function(t){return n(t)}}function S(n,t){return c(t,function(t){return n[t]})}function O(n,t){return n.has(t)}function I(n,t){for(var r=-1,e=n.length;++r<e&&-1<v(t,n[r],0););return r}function R(n,t){for(var r=n.length;r--&&-1<v(t,n[r],0););return r}function z(n){return"\\"+Cn[n]}function W(n){var t=-1,r=Array(n.size);return n.forEach(function(n,e){r[++t]=[e,n];
}),r}function B(n,t){return function(r){return n(t(r))}}function L(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){var o=n[r];o!==t&&"__lodash_placeholder__"!==o||(n[r]="__lodash_placeholder__",i[u++]=r)}return i}function U(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=n}),r}function C(n){var t=-1,r=Array(n.size);return n.forEach(function(n){r[++t]=[n,n]}),r}function D(n){if(Rn.test(n)){for(var t=On.lastIndex=0;On.test(n);)++t;n=t}else n=Qn(n);return n}function M(n){return Rn.test(n)?n.match(On)||[]:n.split("");
}var T,$=1/0,F=NaN,N=[["ary",128],["bind",1],["bindKey",2],["curry",8],["curryRight",16],["flip",512],["partial",32],["partialRight",64],["rearg",256]],P=/\b__p\+='';/g,Z=/\b(__p\+=)''\+/g,q=/(__e\(.*?\)|\b__t\))\+'';/g,V=/&(?:amp|lt|gt|quot|#39);/g,K=/[&<>"']/g,G=RegExp(V.source),H=RegExp(K.source),J=/<%-([\s\S]+?)%>/g,Y=/<%([\s\S]+?)%>/g,Q=/<%=([\s\S]+?)%>/g,X=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,nn=/^\w*$/,tn=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rn=/[\\^$.*+?()[\]{}|]/g,en=RegExp(rn.source),un=/^\s+|\s+$/g,on=/^\s+/,fn=/\s+$/,cn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,an=/\{\n\/\* \[wrapped with (.+)\] \*/,ln=/,? & /,sn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,hn=/\\(\\)?/g,pn=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,_n=/\w*$/,vn=/^[-+]0x[0-9a-f]+$/i,gn=/^0b[01]+$/i,dn=/^\[object .+?Constructor\]$/,yn=/^0o[0-7]+$/i,bn=/^(?:0|[1-9]\d*)$/,xn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,jn=/($^)/,wn=/['\n\r\u2028\u2029\\]/g,mn="[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?(?:\\u200d(?:[^\\ud800-\\udfff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])[\\ufe0e\\ufe0f]?(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?)*",An="(?:[\\u2700-\\u27bf]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff])"+mn,kn="(?:[^\\ud800-\\udfff][\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]?|[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|(?:\\ud83c[\\udde6-\\uddff]){2}|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\ud800-\\udfff])",En=RegExp("['\u2019]","g"),Sn=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g"),On=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+kn+mn,"g"),In=RegExp(["[A-Z\\xc0-\\xd6\\xd8-\\xde]?[a-z\\xdf-\\xf6\\xf8-\\xff]+(?:['\u2019](?:d|ll|m|re|s|t|ve))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde]|$)|(?:[A-Z\\xc0-\\xd6\\xd8-\\xde]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?(?=[\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000]|[A-Z\\xc0-\\xd6\\xd8-\\xde](?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])|$)|[A-Z\\xc0-\\xd6\\xd8-\\xde]?(?:[a-z\\xdf-\\xf6\\xf8-\\xff]|[^\\ud800-\\udfff\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\d+\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde])+(?:['\u2019](?:d|ll|m|re|s|t|ve))?|[A-Z\\xc0-\\xd6\\xd8-\\xde]+(?:['\u2019](?:D|LL|M|RE|S|T|VE))?|\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])|\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])|\\d+",An].join("|"),"g"),Rn=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),zn=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Wn="Array Buffer DataView Date Error Float32Array Float64Array Function Int8Array Int16Array Int32Array Map Math Object Promise RegExp Set String Symbol TypeError Uint8Array Uint8ClampedArray Uint16Array Uint32Array WeakMap _ clearTimeout isFinite parseInt setTimeout".split(" "),Bn={};
    Bn["[object Float32Array]"]=Bn["[object Float64Array]"]=Bn["[object Int8Array]"]=Bn["[object Int16Array]"]=Bn["[object Int32Array]"]=Bn["[object Uint8Array]"]=Bn["[object Uint8ClampedArray]"]=Bn["[object Uint16Array]"]=Bn["[object Uint32Array]"]=true,Bn["[object Arguments]"]=Bn["[object Array]"]=Bn["[object ArrayBuffer]"]=Bn["[object Boolean]"]=Bn["[object DataView]"]=Bn["[object Date]"]=Bn["[object Error]"]=Bn["[object Function]"]=Bn["[object Map]"]=Bn["[object Number]"]=Bn["[object Object]"]=Bn["[object RegExp]"]=Bn["[object Set]"]=Bn["[object String]"]=Bn["[object WeakMap]"]=false;
    var Ln={};Ln["[object Arguments]"]=Ln["[object Array]"]=Ln["[object ArrayBuffer]"]=Ln["[object DataView]"]=Ln["[object Boolean]"]=Ln["[object Date]"]=Ln["[object Float32Array]"]=Ln["[object Float64Array]"]=Ln["[object Int8Array]"]=Ln["[object Int16Array]"]=Ln["[object Int32Array]"]=Ln["[object Map]"]=Ln["[object Number]"]=Ln["[object Object]"]=Ln["[object RegExp]"]=Ln["[object Set]"]=Ln["[object String]"]=Ln["[object Symbol]"]=Ln["[object Uint8Array]"]=Ln["[object Uint8ClampedArray]"]=Ln["[object Uint16Array]"]=Ln["[object Uint32Array]"]=true,
        Ln["[object Error]"]=Ln["[object Function]"]=Ln["[object WeakMap]"]=false;var Un,Cn={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Dn=parseFloat,Mn=parseInt,Tn=typeof global=="object"&&global&&global.Object===Object&&global,$n=typeof self=="object"&&self&&self.Object===Object&&self,Fn=Tn||$n||Function("return this")(),Nn=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Pn=Nn&&typeof module=="object"&&module&&!module.nodeType&&module,Zn=Pn&&Pn.exports===Nn,qn=Zn&&Tn.process;
    n:{try{Un=qn&&qn.binding&&qn.binding("util");break n}catch(n){}Un=void 0}var Vn=Un&&Un.isArrayBuffer,Kn=Un&&Un.isDate,Gn=Un&&Un.isMap,Hn=Un&&Un.isRegExp,Jn=Un&&Un.isSet,Yn=Un&&Un.isTypedArray,Qn=b("length"),Xn=x({"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I",
        "\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss","\u0100":"A","\u0102":"A","\u0104":"A","\u0101":"a","\u0103":"a","\u0105":"a","\u0106":"C","\u0108":"C","\u010a":"C",
        "\u010c":"C","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\u010e":"D","\u0110":"D","\u010f":"d","\u0111":"d","\u0112":"E","\u0114":"E","\u0116":"E","\u0118":"E","\u011a":"E","\u0113":"e","\u0115":"e","\u0117":"e","\u0119":"e","\u011b":"e","\u011c":"G","\u011e":"G","\u0120":"G","\u0122":"G","\u011d":"g","\u011f":"g","\u0121":"g","\u0123":"g","\u0124":"H","\u0126":"H","\u0125":"h","\u0127":"h","\u0128":"I","\u012a":"I","\u012c":"I","\u012e":"I","\u0130":"I","\u0129":"i","\u012b":"i","\u012d":"i",
        "\u012f":"i","\u0131":"i","\u0134":"J","\u0135":"j","\u0136":"K","\u0137":"k","\u0138":"k","\u0139":"L","\u013b":"L","\u013d":"L","\u013f":"L","\u0141":"L","\u013a":"l","\u013c":"l","\u013e":"l","\u0140":"l","\u0142":"l","\u0143":"N","\u0145":"N","\u0147":"N","\u014a":"N","\u0144":"n","\u0146":"n","\u0148":"n","\u014b":"n","\u014c":"O","\u014e":"O","\u0150":"O","\u014d":"o","\u014f":"o","\u0151":"o","\u0154":"R","\u0156":"R","\u0158":"R","\u0155":"r","\u0157":"r","\u0159":"r","\u015a":"S","\u015c":"S",
        "\u015e":"S","\u0160":"S","\u015b":"s","\u015d":"s","\u015f":"s","\u0161":"s","\u0162":"T","\u0164":"T","\u0166":"T","\u0163":"t","\u0165":"t","\u0167":"t","\u0168":"U","\u016a":"U","\u016c":"U","\u016e":"U","\u0170":"U","\u0172":"U","\u0169":"u","\u016b":"u","\u016d":"u","\u016f":"u","\u0171":"u","\u0173":"u","\u0174":"W","\u0175":"w","\u0176":"Y","\u0177":"y","\u0178":"Y","\u0179":"Z","\u017b":"Z","\u017d":"Z","\u017a":"z","\u017c":"z","\u017e":"z","\u0132":"IJ","\u0133":"ij","\u0152":"Oe","\u0153":"oe",
        "\u0149":"'n","\u017f":"s"}),nt=x({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}),tt=x({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"}),rt=function x(mn){function An(n){if(du(n)&&!of(n)&&!(n instanceof Un)){if(n instanceof On)return n;if(ii.call(n,"__wrapped__"))return $e(n)}return new On(n)}function kn(){}function On(n,t){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=T}function Un(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,
        this.__filtered__=false,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}function Cn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Tn(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function $n(n){var t=-1,r=null==n?0:n.length;for(this.clear();++t<r;){var e=n[t];this.set(e[0],e[1])}}function Nn(n){var t=-1,r=null==n?0:n.length;for(this.__data__=new $n;++t<r;)this.add(n[t])}function Pn(n){
        this.size=(this.__data__=new Tn(n)).size}function qn(n,t){var r,e=of(n),u=!e&&uf(n),i=!e&&!u&&cf(n),o=!e&&!u&&!i&&pf(n),u=(e=e||u||i||o)?A(n.length,Xu):[],f=u.length;for(r in n)!t&&!ii.call(n,r)||e&&("length"==r||i&&("offset"==r||"parent"==r)||o&&("buffer"==r||"byteLength"==r||"byteOffset"==r)||Se(r,f))||u.push(r);return u}function Qn(n){var t=n.length;return t?n[ir(0,t-1)]:T}function et(n,t){return Ce(Ur(n),pt(t,0,n.length))}function ut(n){return Ce(Ur(n))}function it(n,t,r){(r===T||au(n[t],r))&&(r!==T||t in n)||st(n,t,r);
    }function ot(n,t,r){var e=n[t];ii.call(n,t)&&au(e,r)&&(r!==T||t in n)||st(n,t,r)}function ft(n,t){for(var r=n.length;r--;)if(au(n[r][0],t))return r;return-1}function ct(n,t,r,e){return eo(n,function(n,u,i){t(e,n,r(n),i)}),e}function at(n,t){return n&&Cr(t,zu(t),n)}function lt(n,t){return n&&Cr(t,Wu(t),n)}function st(n,t,r){"__proto__"==t&&mi?mi(n,t,{configurable:true,enumerable:true,value:r,writable:true}):n[t]=r}function ht(n,t){for(var r=-1,e=t.length,u=Vu(e),i=null==n;++r<e;)u[r]=i?T:Iu(n,t[r]);return u;
    }function pt(n,t,r){return n===n&&(r!==T&&(n=n<=r?n:r),t!==T&&(n=n>=t?n:t)),n}function _t(n,t,e,u,i,o){var f,c=1&t,a=2&t,l=4&t;if(e&&(f=i?e(n,u,i,o):e(n)),f!==T)return f;if(!gu(n))return n;if(u=of(n)){if(f=me(n),!c)return Ur(n,f)}else{var s=_o(n),h="[object Function]"==s||"[object GeneratorFunction]"==s;if(cf(n))return Ir(n,c);if("[object Object]"==s||"[object Arguments]"==s||h&&!i){if(f=a||h?{}:Ae(n),!c)return a?Mr(n,lt(f,n)):Dr(n,at(f,n))}else{if(!Ln[s])return i?n:{};f=ke(n,s,c)}}if(o||(o=new Pn),
            i=o.get(n))return i;if(o.set(n,f),hf(n))return n.forEach(function(r){f.add(_t(r,t,e,r,n,o))}),f;if(lf(n))return n.forEach(function(r,u){f.set(u,_t(r,t,e,u,n,o))}),f;var a=l?a?ve:_e:a?Wu:zu,p=u?T:a(n);return r(p||n,function(r,u){p&&(u=r,r=n[u]),ot(f,u,_t(r,t,e,u,n,o))}),f}function vt(n){var t=zu(n);return function(r){return gt(r,n,t)}}function gt(n,t,r){var e=r.length;if(null==n)return!e;for(n=Yu(n);e--;){var u=r[e],i=t[u],o=n[u];if(o===T&&!(u in n)||!i(o))return false}return true}function dt(n,t,r){if(typeof n!="function")throw new ni("Expected a function");
        return yo(function(){n.apply(T,r)},t)}function yt(n,t,r,e){var u=-1,i=o,a=true,l=n.length,s=[],h=t.length;if(!l)return s;r&&(t=c(t,E(r))),e?(i=f,a=false):200<=t.length&&(i=O,a=false,t=new Nn(t));n:for(;++u<l;){var p=n[u],_=null==r?p:r(p),p=e||0!==p?p:0;if(a&&_===_){for(var v=h;v--;)if(t[v]===_)continue n;s.push(p)}else i(t,_,e)||s.push(p)}return s}function bt(n,t){var r=true;return eo(n,function(n,e,u){return r=!!t(n,e,u)}),r}function xt(n,t,r){for(var e=-1,u=n.length;++e<u;){var i=n[e],o=t(i);if(null!=o&&(f===T?o===o&&!ju(o):r(o,f)))var f=o,c=i;
    }return c}function jt(n,t){var r=[];return eo(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function wt(n,t,r,e,u){var i=-1,o=n.length;for(r||(r=Ee),u||(u=[]);++i<o;){var f=n[i];0<t&&r(f)?1<t?wt(f,t-1,r,e,u):a(u,f):e||(u[u.length]=f)}return u}function mt(n,t){return n&&io(n,t,zu)}function At(n,t){return n&&oo(n,t,zu)}function kt(n,t){return i(t,function(t){return pu(n[t])})}function Et(n,t){t=Sr(t,n);for(var r=0,e=t.length;null!=n&&r<e;)n=n[De(t[r++])];return r&&r==e?n:T}function St(n,t,r){return t=t(n),
        of(n)?t:a(t,r(n))}function Ot(n){if(null==n)n=n===T?"[object Undefined]":"[object Null]";else if(wi&&wi in Yu(n)){var t=ii.call(n,wi),r=n[wi];try{n[wi]=T;var e=true}catch(n){}var u=ci.call(n);e&&(t?n[wi]=r:delete n[wi]),n=u}else n=ci.call(n);return n}function It(n,t){return n>t}function Rt(n,t){return null!=n&&ii.call(n,t)}function zt(n,t){return null!=n&&t in Yu(n)}function Wt(n,t,r){for(var e=r?f:o,u=n[0].length,i=n.length,a=i,l=Vu(i),s=1/0,h=[];a--;){var p=n[a];a&&t&&(p=c(p,E(t))),s=Ui(p.length,s),
        l[a]=!r&&(t||120<=u&&120<=p.length)?new Nn(a&&p):T}var p=n[0],_=-1,v=l[0];n:for(;++_<u&&h.length<s;){var g=p[_],d=t?t(g):g,g=r||0!==g?g:0;if(v?!O(v,d):!e(h,d,r)){for(a=i;--a;){var y=l[a];if(y?!O(y,d):!e(n[a],d,r))continue n}v&&v.push(d),h.push(g)}}return h}function Bt(n,t,r){var e={};return mt(n,function(n,u,i){t(e,r(n),u,i)}),e}function Lt(t,r,e){return r=Sr(r,t),t=2>r.length?t:Et(t,hr(r,0,-1)),r=null==t?t:t[De(qe(r))],null==r?T:n(r,t,e)}function Ut(n){return du(n)&&"[object Arguments]"==Ot(n)}function Ct(n){
        return du(n)&&"[object ArrayBuffer]"==Ot(n)}function Dt(n){return du(n)&&"[object Date]"==Ot(n)}function Mt(n,t,r,e,u){if(n===t)t=true;else if(null==n||null==t||!du(n)&&!du(t))t=n!==n&&t!==t;else n:{var i=of(n),o=of(t),f=i?"[object Array]":_o(n),c=o?"[object Array]":_o(t),f="[object Arguments]"==f?"[object Object]":f,c="[object Arguments]"==c?"[object Object]":c,a="[object Object]"==f,o="[object Object]"==c;if((c=f==c)&&cf(n)){if(!cf(t)){t=false;break n}i=true,a=false}if(c&&!a)u||(u=new Pn),t=i||pf(n)?se(n,t,r,e,Mt,u):he(n,t,f,r,e,Mt,u);else{
        if(!(1&r)&&(i=a&&ii.call(n,"__wrapped__"),f=o&&ii.call(t,"__wrapped__"),i||f)){n=i?n.value():n,t=f?t.value():t,u||(u=new Pn),t=Mt(n,t,r,e,u);break n}if(c)t:if(u||(u=new Pn),i=1&r,f=_e(n),o=f.length,c=_e(t).length,o==c||i){for(a=o;a--;){var l=f[a];if(!(i?l in t:ii.call(t,l))){t=false;break t}}if((c=u.get(n))&&u.get(t))t=c==t;else{c=true,u.set(n,t),u.set(t,n);for(var s=i;++a<o;){var l=f[a],h=n[l],p=t[l];if(e)var _=i?e(p,h,l,t,n,u):e(h,p,l,n,t,u);if(_===T?h!==p&&!Mt(h,p,r,e,u):!_){c=false;break}s||(s="constructor"==l);
        }c&&!s&&(r=n.constructor,e=t.constructor,r!=e&&"constructor"in n&&"constructor"in t&&!(typeof r=="function"&&r instanceof r&&typeof e=="function"&&e instanceof e)&&(c=false)),u.delete(n),u.delete(t),t=c}}else t=false;else t=false}}return t}function Tt(n){return du(n)&&"[object Map]"==_o(n)}function $t(n,t,r,e){var u=r.length,i=u,o=!e;if(null==n)return!i;for(n=Yu(n);u--;){var f=r[u];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return false}for(;++u<i;){var f=r[u],c=f[0],a=n[c],l=f[1];if(o&&f[2]){if(a===T&&!(c in n))return false;
    }else{if(f=new Pn,e)var s=e(a,l,c,n,t,f);if(s===T?!Mt(l,a,3,e,f):!s)return false}}return true}function Ft(n){return!(!gu(n)||fi&&fi in n)&&(pu(n)?si:dn).test(Me(n))}function Nt(n){return du(n)&&"[object RegExp]"==Ot(n)}function Pt(n){return du(n)&&"[object Set]"==_o(n)}function Zt(n){return du(n)&&vu(n.length)&&!!Bn[Ot(n)]}function qt(n){return typeof n=="function"?n:null==n?Tu:typeof n=="object"?of(n)?Jt(n[0],n[1]):Ht(n):Pu(n)}function Vt(n){if(!ze(n))return Bi(n);var t,r=[];for(t in Yu(n))ii.call(n,t)&&"constructor"!=t&&r.push(t);
        return r}function Kt(n,t){return n<t}function Gt(n,t){var r=-1,e=lu(n)?Vu(n.length):[];return eo(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Ht(n){var t=xe(n);return 1==t.length&&t[0][2]?We(t[0][0],t[0][1]):function(r){return r===n||$t(r,n,t)}}function Jt(n,t){return Ie(n)&&t===t&&!gu(t)?We(De(n),t):function(r){var e=Iu(r,n);return e===T&&e===t?Ru(r,n):Mt(t,e,3)}}function Yt(n,t,r,e,u){n!==t&&io(t,function(i,o){if(gu(i)){u||(u=new Pn);var f=u,c="__proto__"==o?T:n[o],a="__proto__"==o?T:t[o],l=f.get(a);
        if(l)it(n,o,l);else{var l=e?e(c,a,o+"",n,t,f):T,s=l===T;if(s){var h=of(a),p=!h&&cf(a),_=!h&&!p&&pf(a),l=a;h||p||_?of(c)?l=c:su(c)?l=Ur(c):p?(s=false,l=Ir(a,true)):_?(s=false,l=zr(a,true)):l=[]:bu(a)||uf(a)?(l=c,uf(c)?l=Su(c):(!gu(c)||r&&pu(c))&&(l=Ae(a))):s=false}s&&(f.set(a,l),Yt(l,a,r,e,f),f.delete(a)),it(n,o,l)}}else f=e?e("__proto__"==o?T:n[o],i,o+"",n,t,u):T,f===T&&(f=i),it(n,o,f)},Wu)}function Qt(n,t){var r=n.length;if(r)return t+=0>t?r:0,Se(t,r)?n[t]:T}function Xt(n,t,r){var e=-1;return t=c(t.length?t:[Tu],E(ye())),
        n=Gt(n,function(n){return{a:c(t,function(t){return t(n)}),b:++e,c:n}}),w(n,function(n,t){var e;n:{e=-1;for(var u=n.a,i=t.a,o=u.length,f=r.length;++e<o;){var c=Wr(u[e],i[e]);if(c){e=e>=f?c:c*("desc"==r[e]?-1:1);break n}}e=n.b-t.b}return e})}function nr(n,t){return tr(n,t,function(t,r){return Ru(n,r)})}function tr(n,t,r){for(var e=-1,u=t.length,i={};++e<u;){var o=t[e],f=Et(n,o);r(f,o)&&lr(i,Sr(o,n),f)}return i}function rr(n){return function(t){return Et(t,n)}}function er(n,t,r,e){var u=e?g:v,i=-1,o=t.length,f=n;
        for(n===t&&(t=Ur(t)),r&&(f=c(n,E(r)));++i<o;)for(var a=0,l=t[i],l=r?r(l):l;-1<(a=u(f,l,a,e));)f!==n&&bi.call(f,a,1),bi.call(n,a,1);return n}function ur(n,t){for(var r=n?t.length:0,e=r-1;r--;){var u=t[r];if(r==e||u!==i){var i=u;Se(u)?bi.call(n,u,1):xr(n,u)}}}function ir(n,t){return n+Oi(Mi()*(t-n+1))}function or(n,t){var r="";if(!n||1>t||9007199254740991<t)return r;do t%2&&(r+=n),(t=Oi(t/2))&&(n+=n);while(t);return r}function fr(n,t){return bo(Be(n,t,Tu),n+"")}function cr(n){return Qn(Lu(n))}function ar(n,t){
        var r=Lu(n);return Ce(r,pt(t,0,r.length))}function lr(n,t,r,e){if(!gu(n))return n;t=Sr(t,n);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var c=De(t[u]),a=r;if(u!=o){var l=f[c],a=e?e(l,c,f):T;a===T&&(a=gu(l)?l:Se(t[u+1])?[]:{})}ot(f,c,a),f=f[c]}return n}function sr(n){return Ce(Lu(n))}function hr(n,t,r){var e=-1,u=n.length;for(0>t&&(t=-t>u?0:u+t),r=r>u?u:r,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0,r=Vu(u);++e<u;)r[e]=n[e+t];return r}function pr(n,t){var r;return eo(n,function(n,e,u){return r=t(n,e,u),
        !r}),!!r}function _r(n,t,r){var e=0,u=null==n?e:n.length;if(typeof t=="number"&&t===t&&2147483647>=u){for(;e<u;){var i=e+u>>>1,o=n[i];null!==o&&!ju(o)&&(r?o<=t:o<t)?e=i+1:u=i}return u}return vr(n,t,Tu,r)}function vr(n,t,r,e){t=r(t);for(var u=0,i=null==n?0:n.length,o=t!==t,f=null===t,c=ju(t),a=t===T;u<i;){var l=Oi((u+i)/2),s=r(n[l]),h=s!==T,p=null===s,_=s===s,v=ju(s);(o?e||_:a?_&&(e||h):f?_&&h&&(e||!p):c?_&&h&&!p&&(e||!v):p||v?0:e?s<=t:s<t)?u=l+1:i=l}return Ui(i,4294967294)}function gr(n,t){for(var r=-1,e=n.length,u=0,i=[];++r<e;){
        var o=n[r],f=t?t(o):o;if(!r||!au(f,c)){var c=f;i[u++]=0===o?0:o}}return i}function dr(n){return typeof n=="number"?n:ju(n)?F:+n}function yr(n){if(typeof n=="string")return n;if(of(n))return c(n,yr)+"";if(ju(n))return to?to.call(n):"";var t=n+"";return"0"==t&&1/n==-$?"-0":t}function br(n,t,r){var e=-1,u=o,i=n.length,c=true,a=[],l=a;if(r)c=false,u=f;else if(200<=i){if(u=t?null:lo(n))return U(u);c=false,u=O,l=new Nn}else l=t?[]:a;n:for(;++e<i;){var s=n[e],h=t?t(s):s,s=r||0!==s?s:0;if(c&&h===h){for(var p=l.length;p--;)if(l[p]===h)continue n;
        t&&l.push(h),a.push(s)}else u(l,h,r)||(l!==a&&l.push(h),a.push(s))}return a}function xr(n,t){return t=Sr(t,n),n=2>t.length?n:Et(n,hr(t,0,-1)),null==n||delete n[De(qe(t))]}function jr(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?hr(n,e?0:i,e?i+1:u):hr(n,e?i+1:0,e?u:i)}function wr(n,t){var r=n;return r instanceof Un&&(r=r.value()),l(t,function(n,t){return t.func.apply(t.thisArg,a([n],t.args))},r)}function mr(n,t,r){var e=n.length;if(2>e)return e?br(n[0]):[];for(var u=-1,i=Vu(e);++u<e;)for(var o=n[u],f=-1;++f<e;)f!=u&&(i[u]=yt(i[u]||o,n[f],t,r));
        return br(wt(i,1),t,r)}function Ar(n,t,r){for(var e=-1,u=n.length,i=t.length,o={};++e<u;)r(o,n[e],e<i?t[e]:T);return o}function kr(n){return su(n)?n:[]}function Er(n){return typeof n=="function"?n:Tu}function Sr(n,t){return of(n)?n:Ie(n,t)?[n]:xo(Ou(n))}function Or(n,t,r){var e=n.length;return r=r===T?e:r,!t&&r>=e?n:hr(n,t,r)}function Ir(n,t){if(t)return n.slice();var r=n.length,r=vi?vi(r):new n.constructor(r);return n.copy(r),r}function Rr(n){var t=new n.constructor(n.byteLength);return new _i(t).set(new _i(n)),
        t}function zr(n,t){return new n.constructor(t?Rr(n.buffer):n.buffer,n.byteOffset,n.length)}function Wr(n,t){if(n!==t){var r=n!==T,e=null===n,u=n===n,i=ju(n),o=t!==T,f=null===t,c=t===t,a=ju(t);if(!f&&!a&&!i&&n>t||i&&o&&c&&!f&&!a||e&&o&&c||!r&&c||!u)return 1;if(!e&&!i&&!a&&n<t||a&&r&&u&&!e&&!i||f&&r&&u||!o&&u||!c)return-1}return 0}function Br(n,t,r,e){var u=-1,i=n.length,o=r.length,f=-1,c=t.length,a=Li(i-o,0),l=Vu(c+a);for(e=!e;++f<c;)l[f]=t[f];for(;++u<o;)(e||u<i)&&(l[r[u]]=n[u]);for(;a--;)l[f++]=n[u++];
        return l}function Lr(n,t,r,e){var u=-1,i=n.length,o=-1,f=r.length,c=-1,a=t.length,l=Li(i-f,0),s=Vu(l+a);for(e=!e;++u<l;)s[u]=n[u];for(l=u;++c<a;)s[l+c]=t[c];for(;++o<f;)(e||u<i)&&(s[l+r[o]]=n[u++]);return s}function Ur(n,t){var r=-1,e=n.length;for(t||(t=Vu(e));++r<e;)t[r]=n[r];return t}function Cr(n,t,r,e){var u=!r;r||(r={});for(var i=-1,o=t.length;++i<o;){var f=t[i],c=e?e(r[f],n[f],f,r,n):T;c===T&&(c=n[f]),u?st(r,f,c):ot(r,f,c)}return r}function Dr(n,t){return Cr(n,ho(n),t)}function Mr(n,t){return Cr(n,po(n),t);
    }function Tr(n,r){return function(e,u){var i=of(e)?t:ct,o=r?r():{};return i(e,n,ye(u,2),o)}}function $r(n){return fr(function(t,r){var e=-1,u=r.length,i=1<u?r[u-1]:T,o=2<u?r[2]:T,i=3<n.length&&typeof i=="function"?(u--,i):T;for(o&&Oe(r[0],r[1],o)&&(i=3>u?T:i,u=1),t=Yu(t);++e<u;)(o=r[e])&&n(t,o,e,i);return t})}function Fr(n,t){return function(r,e){if(null==r)return r;if(!lu(r))return n(r,e);for(var u=r.length,i=t?u:-1,o=Yu(r);(t?i--:++i<u)&&false!==e(o[i],i,o););return r}}function Nr(n){return function(t,r,e){
        var u=-1,i=Yu(t);e=e(t);for(var o=e.length;o--;){var f=e[n?o:++u];if(false===r(i[f],f,i))break}return t}}function Pr(n,t,r){function e(){return(this&&this!==Fn&&this instanceof e?i:n).apply(u?r:this,arguments)}var u=1&t,i=Vr(n);return e}function Zr(n){return function(t){t=Ou(t);var r=Rn.test(t)?M(t):T,e=r?r[0]:t.charAt(0);return t=r?Or(r,1).join(""):t.slice(1),e[n]()+t}}function qr(n){return function(t){return l(Du(Cu(t).replace(En,"")),n,"")}}function Vr(n){return function(){var t=arguments;switch(t.length){
        case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=ro(n.prototype),t=n.apply(r,t);return gu(t)?t:r}}function Kr(t,r,e){function u(){for(var o=arguments.length,f=Vu(o),c=o,a=de(u);c--;)f[c]=arguments[c];return c=3>o&&f[0]!==a&&f[o-1]!==a?[]:L(f,a),
        o-=c.length,o<e?ue(t,r,Jr,u.placeholder,T,f,c,T,T,e-o):n(this&&this!==Fn&&this instanceof u?i:t,this,f)}var i=Vr(t);return u}function Gr(n){return function(t,r,e){var u=Yu(t);if(!lu(t)){var i=ye(r,3);t=zu(t),r=function(n){return i(u[n],n,u)}}return r=n(t,r,e),-1<r?u[i?t[r]:r]:T}}function Hr(n){return pe(function(t){var r=t.length,e=r,u=On.prototype.thru;for(n&&t.reverse();e--;){var i=t[e];if(typeof i!="function")throw new ni("Expected a function");if(u&&!o&&"wrapper"==ge(i))var o=new On([],true)}for(e=o?e:r;++e<r;)var i=t[e],u=ge(i),f="wrapper"==u?so(i):T,o=f&&Re(f[0])&&424==f[1]&&!f[4].length&&1==f[9]?o[ge(f[0])].apply(o,f[3]):1==i.length&&Re(i)?o[u]():o.thru(i);
        return function(){var n=arguments,e=n[0];if(o&&1==n.length&&of(e))return o.plant(e).value();for(var u=0,n=r?t[u].apply(this,n):e;++u<r;)n=t[u].call(this,n);return n}})}function Jr(n,t,r,e,u,i,o,f,c,a){function l(){for(var d=arguments.length,y=Vu(d),b=d;b--;)y[b]=arguments[b];if(_){var x,j=de(l),b=y.length;for(x=0;b--;)y[b]===j&&++x}if(e&&(y=Br(y,e,u,_)),i&&(y=Lr(y,i,o,_)),d-=x,_&&d<a)return j=L(y,j),ue(n,t,Jr,l.placeholder,r,y,j,f,c,a-d);if(j=h?r:this,b=p?j[n]:n,d=y.length,f){x=y.length;for(var w=Ui(f.length,x),m=Ur(y);w--;){
        var A=f[w];y[w]=Se(A,x)?m[A]:T}}else v&&1<d&&y.reverse();return s&&c<d&&(y.length=c),this&&this!==Fn&&this instanceof l&&(b=g||Vr(b)),b.apply(j,y)}var s=128&t,h=1&t,p=2&t,_=24&t,v=512&t,g=p?T:Vr(n);return l}function Yr(n,t){return function(r,e){return Bt(r,n,t(e))}}function Qr(n,t){return function(r,e){var u;if(r===T&&e===T)return t;if(r!==T&&(u=r),e!==T){if(u===T)return e;typeof r=="string"||typeof e=="string"?(r=yr(r),e=yr(e)):(r=dr(r),e=dr(e)),u=n(r,e)}return u}}function Xr(t){return pe(function(r){
        return r=c(r,E(ye())),fr(function(e){var u=this;return t(r,function(t){return n(t,u,e)})})})}function ne(n,t){t=t===T?" ":yr(t);var r=t.length;return 2>r?r?or(t,n):t:(r=or(t,Si(n/D(t))),Rn.test(t)?Or(M(r),0,n).join(""):r.slice(0,n))}function te(t,r,e,u){function i(){for(var r=-1,c=arguments.length,a=-1,l=u.length,s=Vu(l+c),h=this&&this!==Fn&&this instanceof i?f:t;++a<l;)s[a]=u[a];for(;c--;)s[a++]=arguments[++r];return n(h,o?e:this,s)}var o=1&r,f=Vr(t);return i}function re(n){return function(t,r,e){
        e&&typeof e!="number"&&Oe(t,r,e)&&(r=e=T),t=mu(t),r===T?(r=t,t=0):r=mu(r),e=e===T?t<r?1:-1:mu(e);var u=-1;r=Li(Si((r-t)/(e||1)),0);for(var i=Vu(r);r--;)i[n?r:++u]=t,t+=e;return i}}function ee(n){return function(t,r){return typeof t=="string"&&typeof r=="string"||(t=Eu(t),r=Eu(r)),n(t,r)}}function ue(n,t,r,e,u,i,o,f,c,a){var l=8&t,s=l?o:T;o=l?T:o;var h=l?i:T;return i=l?T:i,t=(t|(l?32:64))&~(l?64:32),4&t||(t&=-4),u=[n,t,u,h,s,i,o,f,c,a],r=r.apply(T,u),Re(n)&&go(r,u),r.placeholder=e,Le(r,n,t)}function ie(n){
        var t=Ju[n];return function(n,r){if(n=Eu(n),r=null==r?0:Ui(Au(r),292)){var e=(Ou(n)+"e").split("e"),e=t(e[0]+"e"+(+e[1]+r)),e=(Ou(e)+"e").split("e");return+(e[0]+"e"+(+e[1]-r))}return t(n)}}function oe(n){return function(t){var r=_o(t);return"[object Map]"==r?W(t):"[object Set]"==r?C(t):k(t,n(t))}}function fe(n,t,r,e,u,i,o,f){var c=2&t;if(!c&&typeof n!="function")throw new ni("Expected a function");var a=e?e.length:0;if(a||(t&=-97,e=u=T),o=o===T?o:Li(Au(o),0),f=f===T?f:Au(f),a-=u?u.length:0,64&t){
        var l=e,s=u;e=u=T}var h=c?T:so(n);return i=[n,t,r,e,u,l,s,i,o,f],h&&(r=i[1],n=h[1],t=r|n,e=128==n&&8==r||128==n&&256==r&&i[7].length<=h[8]||384==n&&h[7].length<=h[8]&&8==r,131>t||e)&&(1&n&&(i[2]=h[2],t|=1&r?0:4),(r=h[3])&&(e=i[3],i[3]=e?Br(e,r,h[4]):r,i[4]=e?L(i[3],"__lodash_placeholder__"):h[4]),(r=h[5])&&(e=i[5],i[5]=e?Lr(e,r,h[6]):r,i[6]=e?L(i[5],"__lodash_placeholder__"):h[6]),(r=h[7])&&(i[7]=r),128&n&&(i[8]=null==i[8]?h[8]:Ui(i[8],h[8])),null==i[9]&&(i[9]=h[9]),i[0]=h[0],i[1]=t),n=i[0],t=i[1],
        r=i[2],e=i[3],u=i[4],f=i[9]=i[9]===T?c?0:n.length:Li(i[9]-a,0),!f&&24&t&&(t&=-25),Le((h?fo:go)(t&&1!=t?8==t||16==t?Kr(n,t,f):32!=t&&33!=t||u.length?Jr.apply(T,i):te(n,t,r,e):Pr(n,t,r),i),n,t)}function ce(n,t,r,e){return n===T||au(n,ri[r])&&!ii.call(e,r)?t:n}function ae(n,t,r,e,u,i){return gu(n)&&gu(t)&&(i.set(t,n),Yt(n,t,T,ae,i),i.delete(t)),n}function le(n){return bu(n)?T:n}function se(n,t,r,e,u,i){var o=1&r,f=n.length,c=t.length;if(f!=c&&!(o&&c>f))return false;if((c=i.get(n))&&i.get(t))return c==t;var c=-1,a=true,l=2&r?new Nn:T;
        for(i.set(n,t),i.set(t,n);++c<f;){var s=n[c],p=t[c];if(e)var _=o?e(p,s,c,t,n,i):e(s,p,c,n,t,i);if(_!==T){if(_)continue;a=false;break}if(l){if(!h(t,function(n,t){if(!O(l,t)&&(s===n||u(s,n,r,e,i)))return l.push(t)})){a=false;break}}else if(s!==p&&!u(s,p,r,e,i)){a=false;break}}return i.delete(n),i.delete(t),a}function he(n,t,r,e,u,i,o){switch(r){case"[object DataView]":if(n.byteLength!=t.byteLength||n.byteOffset!=t.byteOffset)break;n=n.buffer,t=t.buffer;case"[object ArrayBuffer]":if(n.byteLength!=t.byteLength||!i(new _i(n),new _i(t)))break;
        return true;case"[object Boolean]":case"[object Date]":case"[object Number]":return au(+n,+t);case"[object Error]":return n.name==t.name&&n.message==t.message;case"[object RegExp]":case"[object String]":return n==t+"";case"[object Map]":var f=W;case"[object Set]":if(f||(f=U),n.size!=t.size&&!(1&e))break;return(r=o.get(n))?r==t:(e|=2,o.set(n,t),t=se(f(n),f(t),e,u,i,o),o.delete(n),t);case"[object Symbol]":if(no)return no.call(n)==no.call(t)}return false}function pe(n){return bo(Be(n,T,Pe),n+"")}function _e(n){
        return St(n,zu,ho)}function ve(n){return St(n,Wu,po)}function ge(n){for(var t=n.name+"",r=Ki[t],e=ii.call(Ki,t)?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function de(n){return(ii.call(An,"placeholder")?An:n).placeholder}function ye(){var n=An.iteratee||$u,n=n===$u?qt:n;return arguments.length?n(arguments[0],arguments[1]):n}function be(n,t){var r=n.__data__,e=typeof t;return("string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t)?r[typeof t=="string"?"string":"hash"]:r.map;
    }function xe(n){for(var t=zu(n),r=t.length;r--;){var e=t[r],u=n[e];t[r]=[e,u,u===u&&!gu(u)]}return t}function je(n,t){var r=null==n?T:n[t];return Ft(r)?r:T}function we(n,t,r){t=Sr(t,n);for(var e=-1,u=t.length,i=false;++e<u;){var o=De(t[e]);if(!(i=null!=n&&r(n,o)))break;n=n[o]}return i||++e!=u?i:(u=null==n?0:n.length,!!u&&vu(u)&&Se(o,u)&&(of(n)||uf(n)))}function me(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&ii.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ae(n){
        return typeof n.constructor!="function"||ze(n)?{}:ro(gi(n))}function ke(n,t,r){var e=n.constructor;switch(t){case"[object ArrayBuffer]":return Rr(n);case"[object Boolean]":case"[object Date]":return new e(+n);case"[object DataView]":return t=r?Rr(n.buffer):n.buffer,new n.constructor(t,n.byteOffset,n.byteLength);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":
        case"[object Uint16Array]":case"[object Uint32Array]":return zr(n,r);case"[object Map]":return new e;case"[object Number]":case"[object String]":return new e(n);case"[object RegExp]":return t=new n.constructor(n.source,_n.exec(n)),t.lastIndex=n.lastIndex,t;case"[object Set]":return new e;case"[object Symbol]":return no?Yu(no.call(n)):{}}}function Ee(n){return of(n)||uf(n)||!!(xi&&n&&n[xi])}function Se(n,t){var r=typeof n;return t=null==t?9007199254740991:t,!!t&&("number"==r||"symbol"!=r&&bn.test(n))&&-1<n&&0==n%1&&n<t;
    }function Oe(n,t,r){if(!gu(r))return false;var e=typeof t;return!!("number"==e?lu(r)&&Se(t,r.length):"string"==e&&t in r)&&au(r[t],n)}function Ie(n,t){if(of(n))return false;var r=typeof n;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=n&&!ju(n))||(nn.test(n)||!X.test(n)||null!=t&&n in Yu(t))}function Re(n){var t=ge(n),r=An[t];return typeof r=="function"&&t in Un.prototype&&(n===r||(t=so(r),!!t&&n===t[0]))}function ze(n){var t=n&&n.constructor;return n===(typeof t=="function"&&t.prototype||ri)}function We(n,t){
        return function(r){return null!=r&&(r[n]===t&&(t!==T||n in Yu(r)))}}function Be(t,r,e){return r=Li(r===T?t.length-1:r,0),function(){for(var u=arguments,i=-1,o=Li(u.length-r,0),f=Vu(o);++i<o;)f[i]=u[r+i];for(i=-1,o=Vu(r+1);++i<r;)o[i]=u[i];return o[r]=e(f),n(t,this,o)}}function Le(n,t,r){var e=t+"";t=bo;var u,i=Te;return u=(u=e.match(an))?u[1].split(ln):[],r=i(u,r),(i=r.length)&&(u=i-1,r[u]=(1<i?"& ":"")+r[u],r=r.join(2<i?", ":" "),e=e.replace(cn,"{\n/* [wrapped with "+r+"] */\n")),t(n,e)}function Ue(n){
        var t=0,r=0;return function(){var e=Ci(),u=16-(e-r);if(r=e,0<u){if(800<=++t)return arguments[0]}else t=0;return n.apply(T,arguments)}}function Ce(n,t){var r=-1,e=n.length,u=e-1;for(t=t===T?e:t;++r<t;){var e=ir(r,u),i=n[e];n[e]=n[r],n[r]=i}return n.length=t,n}function De(n){if(typeof n=="string"||ju(n))return n;var t=n+"";return"0"==t&&1/n==-$?"-0":t}function Me(n){if(null!=n){try{return ui.call(n)}catch(n){}return n+""}return""}function Te(n,t){return r(N,function(r){var e="_."+r[0];t&r[1]&&!o(n,e)&&n.push(e);
    }),n.sort()}function $e(n){if(n instanceof Un)return n.clone();var t=new On(n.__wrapped__,n.__chain__);return t.__actions__=Ur(n.__actions__),t.__index__=n.__index__,t.__values__=n.__values__,t}function Fe(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Au(r),0>r&&(r=Li(e+r,0)),_(n,ye(t,3),r)):-1}function Ne(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e-1;return r!==T&&(u=Au(r),u=0>r?Li(e+u,0):Ui(u,e-1)),_(n,ye(t,3),u,true)}function Pe(n){return(null==n?0:n.length)?wt(n,1):[]}function Ze(n){
        return n&&n.length?n[0]:T}function qe(n){var t=null==n?0:n.length;return t?n[t-1]:T}function Ve(n,t){return n&&n.length&&t&&t.length?er(n,t):n}function Ke(n){return null==n?n:Ti.call(n)}function Ge(n){if(!n||!n.length)return[];var t=0;return n=i(n,function(n){if(su(n))return t=Li(n.length,t),true}),A(t,function(t){return c(n,b(t))})}function He(t,r){if(!t||!t.length)return[];var e=Ge(t);return null==r?e:c(e,function(t){return n(r,T,t)})}function Je(n){return n=An(n),n.__chain__=true,n}function Ye(n,t){
        return t(n)}function Qe(){return this}function Xe(n,t){return(of(n)?r:eo)(n,ye(t,3))}function nu(n,t){return(of(n)?e:uo)(n,ye(t,3))}function tu(n,t){return(of(n)?c:Gt)(n,ye(t,3))}function ru(n,t,r){return t=r?T:t,t=n&&null==t?n.length:t,fe(n,128,T,T,T,T,t)}function eu(n,t){var r;if(typeof t!="function")throw new ni("Expected a function");return n=Au(n),function(){return 0<--n&&(r=t.apply(this,arguments)),1>=n&&(t=T),r}}function uu(n,t,r){return t=r?T:t,n=fe(n,8,T,T,T,T,T,t),n.placeholder=uu.placeholder,
        n}function iu(n,t,r){return t=r?T:t,n=fe(n,16,T,T,T,T,T,t),n.placeholder=iu.placeholder,n}function ou(n,t,r){function e(t){var r=c,e=a;return c=a=T,_=t,s=n.apply(e,r)}function u(n){var r=n-p;return n-=_,p===T||r>=t||0>r||g&&n>=l}function i(){var n=Ko();if(u(n))return o(n);var r,e=yo;r=n-_,n=t-(n-p),r=g?Ui(n,l-r):n,h=e(i,r)}function o(n){return h=T,d&&c?e(n):(c=a=T,s)}function f(){var n=Ko(),r=u(n);if(c=arguments,a=this,p=n,r){if(h===T)return _=n=p,h=yo(i,t),v?e(n):s;if(g)return h=yo(i,t),e(p)}return h===T&&(h=yo(i,t)),
        s}var c,a,l,s,h,p,_=0,v=false,g=false,d=true;if(typeof n!="function")throw new ni("Expected a function");return t=Eu(t)||0,gu(r)&&(v=!!r.leading,l=(g="maxWait"in r)?Li(Eu(r.maxWait)||0,t):l,d="trailing"in r?!!r.trailing:d),f.cancel=function(){h!==T&&ao(h),_=0,c=p=a=h=T},f.flush=function(){return h===T?s:o(Ko())},f}function fu(n,t){function r(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;return i.has(u)?i.get(u):(e=n.apply(this,e),r.cache=i.set(u,e)||i,e)}if(typeof n!="function"||null!=t&&typeof t!="function")throw new ni("Expected a function");
        return r.cache=new(fu.Cache||$n),r}function cu(n){if(typeof n!="function")throw new ni("Expected a function");return function(){var t=arguments;switch(t.length){case 0:return!n.call(this);case 1:return!n.call(this,t[0]);case 2:return!n.call(this,t[0],t[1]);case 3:return!n.call(this,t[0],t[1],t[2])}return!n.apply(this,t)}}function au(n,t){return n===t||n!==n&&t!==t}function lu(n){return null!=n&&vu(n.length)&&!pu(n)}function su(n){return du(n)&&lu(n)}function hu(n){if(!du(n))return false;var t=Ot(n);return"[object Error]"==t||"[object DOMException]"==t||typeof n.message=="string"&&typeof n.name=="string"&&!bu(n);
    }function pu(n){return!!gu(n)&&(n=Ot(n),"[object Function]"==n||"[object GeneratorFunction]"==n||"[object AsyncFunction]"==n||"[object Proxy]"==n)}function _u(n){return typeof n=="number"&&n==Au(n)}function vu(n){return typeof n=="number"&&-1<n&&0==n%1&&9007199254740991>=n}function gu(n){var t=typeof n;return null!=n&&("object"==t||"function"==t)}function du(n){return null!=n&&typeof n=="object"}function yu(n){return typeof n=="number"||du(n)&&"[object Number]"==Ot(n)}function bu(n){return!(!du(n)||"[object Object]"!=Ot(n))&&(n=gi(n),
        null===n||(n=ii.call(n,"constructor")&&n.constructor,typeof n=="function"&&n instanceof n&&ui.call(n)==ai))}function xu(n){return typeof n=="string"||!of(n)&&du(n)&&"[object String]"==Ot(n)}function ju(n){return typeof n=="symbol"||du(n)&&"[object Symbol]"==Ot(n)}function wu(n){if(!n)return[];if(lu(n))return xu(n)?M(n):Ur(n);if(ji&&n[ji]){n=n[ji]();for(var t,r=[];!(t=n.next()).done;)r.push(t.value);return r}return t=_o(n),("[object Map]"==t?W:"[object Set]"==t?U:Lu)(n)}function mu(n){return n?(n=Eu(n),
        n===$||n===-$?1.7976931348623157e308*(0>n?-1:1):n===n?n:0):0===n?n:0}function Au(n){n=mu(n);var t=n%1;return n===n?t?n-t:n:0}function ku(n){return n?pt(Au(n),0,4294967295):0}function Eu(n){if(typeof n=="number")return n;if(ju(n))return F;if(gu(n)&&(n=typeof n.valueOf=="function"?n.valueOf():n,n=gu(n)?n+"":n),typeof n!="string")return 0===n?n:+n;n=n.replace(un,"");var t=gn.test(n);return t||yn.test(n)?Mn(n.slice(2),t?2:8):vn.test(n)?F:+n}function Su(n){return Cr(n,Wu(n))}function Ou(n){return null==n?"":yr(n);
    }function Iu(n,t,r){return n=null==n?T:Et(n,t),n===T?r:n}function Ru(n,t){return null!=n&&we(n,t,zt)}function zu(n){return lu(n)?qn(n):Vt(n)}function Wu(n){if(lu(n))n=qn(n,true);else if(gu(n)){var t,r=ze(n),e=[];for(t in n)("constructor"!=t||!r&&ii.call(n,t))&&e.push(t);n=e}else{if(t=[],null!=n)for(r in Yu(n))t.push(r);n=t}return n}function Bu(n,t){if(null==n)return{};var r=c(ve(n),function(n){return[n]});return t=ye(t),tr(n,r,function(n,r){return t(n,r[0])})}function Lu(n){return null==n?[]:S(n,zu(n));
    }function Uu(n){return Tf(Ou(n).toLowerCase())}function Cu(n){return(n=Ou(n))&&n.replace(xn,Xn).replace(Sn,"")}function Du(n,t,r){return n=Ou(n),t=r?T:t,t===T?zn.test(n)?n.match(In)||[]:n.match(sn)||[]:n.match(t)||[]}function Mu(n){return function(){return n}}function Tu(n){return n}function $u(n){return qt(typeof n=="function"?n:_t(n,1))}function Fu(n,t,e){var u=zu(t),i=kt(t,u);null!=e||gu(t)&&(i.length||!u.length)||(e=t,t=n,n=this,i=kt(t,zu(t)));var o=!(gu(e)&&"chain"in e&&!e.chain),f=pu(n);return r(i,function(r){
        var e=t[r];n[r]=e,f&&(n.prototype[r]=function(){var t=this.__chain__;if(o||t){var r=n(this.__wrapped__);return(r.__actions__=Ur(this.__actions__)).push({func:e,args:arguments,thisArg:n}),r.__chain__=t,r}return e.apply(n,a([this.value()],arguments))})}),n}function Nu(){}function Pu(n){return Ie(n)?b(De(n)):rr(n)}function Zu(){return[]}function qu(){return false}mn=null==mn?Fn:rt.defaults(Fn.Object(),mn,rt.pick(Fn,Wn));var Vu=mn.Array,Ku=mn.Date,Gu=mn.Error,Hu=mn.Function,Ju=mn.Math,Yu=mn.Object,Qu=mn.RegExp,Xu=mn.String,ni=mn.TypeError,ti=Vu.prototype,ri=Yu.prototype,ei=mn["__core-js_shared__"],ui=Hu.prototype.toString,ii=ri.hasOwnProperty,oi=0,fi=function(){
        var n=/[^.]+$/.exec(ei&&ei.keys&&ei.keys.IE_PROTO||"");return n?"Symbol(src)_1."+n:""}(),ci=ri.toString,ai=ui.call(Yu),li=Fn._,si=Qu("^"+ui.call(ii).replace(rn,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),hi=Zn?mn.Buffer:T,pi=mn.Symbol,_i=mn.Uint8Array,vi=hi?hi.f:T,gi=B(Yu.getPrototypeOf,Yu),di=Yu.create,yi=ri.propertyIsEnumerable,bi=ti.splice,xi=pi?pi.isConcatSpreadable:T,ji=pi?pi.iterator:T,wi=pi?pi.toStringTag:T,mi=function(){try{var n=je(Yu,"defineProperty");
        return n({},"",{}),n}catch(n){}}(),Ai=mn.clearTimeout!==Fn.clearTimeout&&mn.clearTimeout,ki=Ku&&Ku.now!==Fn.Date.now&&Ku.now,Ei=mn.setTimeout!==Fn.setTimeout&&mn.setTimeout,Si=Ju.ceil,Oi=Ju.floor,Ii=Yu.getOwnPropertySymbols,Ri=hi?hi.isBuffer:T,zi=mn.isFinite,Wi=ti.join,Bi=B(Yu.keys,Yu),Li=Ju.max,Ui=Ju.min,Ci=Ku.now,Di=mn.parseInt,Mi=Ju.random,Ti=ti.reverse,$i=je(mn,"DataView"),Fi=je(mn,"Map"),Ni=je(mn,"Promise"),Pi=je(mn,"Set"),Zi=je(mn,"WeakMap"),qi=je(Yu,"create"),Vi=Zi&&new Zi,Ki={},Gi=Me($i),Hi=Me(Fi),Ji=Me(Ni),Yi=Me(Pi),Qi=Me(Zi),Xi=pi?pi.prototype:T,no=Xi?Xi.valueOf:T,to=Xi?Xi.toString:T,ro=function(){
        function n(){}return function(t){return gu(t)?di?di(t):(n.prototype=t,t=new n,n.prototype=T,t):{}}}();An.templateSettings={escape:J,evaluate:Y,interpolate:Q,variable:"",imports:{_:An}},An.prototype=kn.prototype,An.prototype.constructor=An,On.prototype=ro(kn.prototype),On.prototype.constructor=On,Un.prototype=ro(kn.prototype),Un.prototype.constructor=Un,Cn.prototype.clear=function(){this.__data__=qi?qi(null):{},this.size=0},Cn.prototype.delete=function(n){return n=this.has(n)&&delete this.__data__[n],
        this.size-=n?1:0,n},Cn.prototype.get=function(n){var t=this.__data__;return qi?(n=t[n],"__lodash_hash_undefined__"===n?T:n):ii.call(t,n)?t[n]:T},Cn.prototype.has=function(n){var t=this.__data__;return qi?t[n]!==T:ii.call(t,n)},Cn.prototype.set=function(n,t){var r=this.__data__;return this.size+=this.has(n)?0:1,r[n]=qi&&t===T?"__lodash_hash_undefined__":t,this},Tn.prototype.clear=function(){this.__data__=[],this.size=0},Tn.prototype.delete=function(n){var t=this.__data__;return n=ft(t,n),!(0>n)&&(n==t.length-1?t.pop():bi.call(t,n,1),
        --this.size,true)},Tn.prototype.get=function(n){var t=this.__data__;return n=ft(t,n),0>n?T:t[n][1]},Tn.prototype.has=function(n){return-1<ft(this.__data__,n)},Tn.prototype.set=function(n,t){var r=this.__data__,e=ft(r,n);return 0>e?(++this.size,r.push([n,t])):r[e][1]=t,this},$n.prototype.clear=function(){this.size=0,this.__data__={hash:new Cn,map:new(Fi||Tn),string:new Cn}},$n.prototype.delete=function(n){return n=be(this,n).delete(n),this.size-=n?1:0,n},$n.prototype.get=function(n){return be(this,n).get(n);
    },$n.prototype.has=function(n){return be(this,n).has(n)},$n.prototype.set=function(n,t){var r=be(this,n),e=r.size;return r.set(n,t),this.size+=r.size==e?0:1,this},Nn.prototype.add=Nn.prototype.push=function(n){return this.__data__.set(n,"__lodash_hash_undefined__"),this},Nn.prototype.has=function(n){return this.__data__.has(n)},Pn.prototype.clear=function(){this.__data__=new Tn,this.size=0},Pn.prototype.delete=function(n){var t=this.__data__;return n=t.delete(n),this.size=t.size,n},Pn.prototype.get=function(n){
        return this.__data__.get(n)},Pn.prototype.has=function(n){return this.__data__.has(n)},Pn.prototype.set=function(n,t){var r=this.__data__;if(r instanceof Tn){var e=r.__data__;if(!Fi||199>e.length)return e.push([n,t]),this.size=++r.size,this;r=this.__data__=new $n(e)}return r.set(n,t),this.size=r.size,this};var eo=Fr(mt),uo=Fr(At,true),io=Nr(),oo=Nr(true),fo=Vi?function(n,t){return Vi.set(n,t),n}:Tu,co=mi?function(n,t){return mi(n,"toString",{configurable:true,enumerable:false,value:Mu(t),writable:true})}:Tu,ao=Ai||function(n){
            return Fn.clearTimeout(n)},lo=Pi&&1/U(new Pi([,-0]))[1]==$?function(n){return new Pi(n)}:Nu,so=Vi?function(n){return Vi.get(n)}:Nu,ho=Ii?function(n){return null==n?[]:(n=Yu(n),i(Ii(n),function(t){return yi.call(n,t)}))}:Zu,po=Ii?function(n){for(var t=[];n;)a(t,ho(n)),n=gi(n);return t}:Zu,_o=Ot;($i&&"[object DataView]"!=_o(new $i(new ArrayBuffer(1)))||Fi&&"[object Map]"!=_o(new Fi)||Ni&&"[object Promise]"!=_o(Ni.resolve())||Pi&&"[object Set]"!=_o(new Pi)||Zi&&"[object WeakMap]"!=_o(new Zi))&&(_o=function(n){
        var t=Ot(n);if(n=(n="[object Object]"==t?n.constructor:T)?Me(n):"")switch(n){case Gi:return"[object DataView]";case Hi:return"[object Map]";case Ji:return"[object Promise]";case Yi:return"[object Set]";case Qi:return"[object WeakMap]"}return t});var vo=ei?pu:qu,go=Ue(fo),yo=Ei||function(n,t){return Fn.setTimeout(n,t)},bo=Ue(co),xo=function(n){n=fu(n,function(n){return 500===t.size&&t.clear(),n});var t=n.cache;return n}(function(n){var t=[];return 46===n.charCodeAt(0)&&t.push(""),n.replace(tn,function(n,r,e,u){
        t.push(e?u.replace(hn,"$1"):r||n)}),t}),jo=fr(function(n,t){return su(n)?yt(n,wt(t,1,su,true)):[]}),wo=fr(function(n,t){var r=qe(t);return su(r)&&(r=T),su(n)?yt(n,wt(t,1,su,true),ye(r,2)):[]}),mo=fr(function(n,t){var r=qe(t);return su(r)&&(r=T),su(n)?yt(n,wt(t,1,su,true),T,r):[]}),Ao=fr(function(n){var t=c(n,kr);return t.length&&t[0]===n[0]?Wt(t):[]}),ko=fr(function(n){var t=qe(n),r=c(n,kr);return t===qe(r)?t=T:r.pop(),r.length&&r[0]===n[0]?Wt(r,ye(t,2)):[]}),Eo=fr(function(n){var t=qe(n),r=c(n,kr);return(t=typeof t=="function"?t:T)&&r.pop(),
        r.length&&r[0]===n[0]?Wt(r,T,t):[]}),So=fr(Ve),Oo=pe(function(n,t){var r=null==n?0:n.length,e=ht(n,t);return ur(n,c(t,function(n){return Se(n,r)?+n:n}).sort(Wr)),e}),Io=fr(function(n){return br(wt(n,1,su,true))}),Ro=fr(function(n){var t=qe(n);return su(t)&&(t=T),br(wt(n,1,su,true),ye(t,2))}),zo=fr(function(n){var t=qe(n),t=typeof t=="function"?t:T;return br(wt(n,1,su,true),T,t)}),Wo=fr(function(n,t){return su(n)?yt(n,t):[]}),Bo=fr(function(n){return mr(i(n,su))}),Lo=fr(function(n){var t=qe(n);return su(t)&&(t=T),
        mr(i(n,su),ye(t,2))}),Uo=fr(function(n){var t=qe(n),t=typeof t=="function"?t:T;return mr(i(n,su),T,t)}),Co=fr(Ge),Do=fr(function(n){var t=n.length,t=1<t?n[t-1]:T,t=typeof t=="function"?(n.pop(),t):T;return He(n,t)}),Mo=pe(function(n){function t(t){return ht(t,n)}var r=n.length,e=r?n[0]:0,u=this.__wrapped__;return!(1<r||this.__actions__.length)&&u instanceof Un&&Se(e)?(u=u.slice(e,+e+(r?1:0)),u.__actions__.push({func:Ye,args:[t],thisArg:T}),new On(u,this.__chain__).thru(function(n){return r&&!n.length&&n.push(T),
        n})):this.thru(t)}),To=Tr(function(n,t,r){ii.call(n,r)?++n[r]:st(n,r,1)}),$o=Gr(Fe),Fo=Gr(Ne),No=Tr(function(n,t,r){ii.call(n,r)?n[r].push(t):st(n,r,[t])}),Po=fr(function(t,r,e){var u=-1,i=typeof r=="function",o=lu(t)?Vu(t.length):[];return eo(t,function(t){o[++u]=i?n(r,t,e):Lt(t,r,e)}),o}),Zo=Tr(function(n,t,r){st(n,r,t)}),qo=Tr(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),Vo=fr(function(n,t){if(null==n)return[];var r=t.length;return 1<r&&Oe(n,t[0],t[1])?t=[]:2<r&&Oe(t[0],t[1],t[2])&&(t=[t[0]]),
        Xt(n,wt(t,1),[])}),Ko=ki||function(){return Fn.Date.now()},Go=fr(function(n,t,r){var e=1;if(r.length)var u=L(r,de(Go)),e=32|e;return fe(n,e,t,r,u)}),Ho=fr(function(n,t,r){var e=3;if(r.length)var u=L(r,de(Ho)),e=32|e;return fe(t,e,n,r,u)}),Jo=fr(function(n,t){return dt(n,1,t)}),Yo=fr(function(n,t,r){return dt(n,Eu(t)||0,r)});fu.Cache=$n;var Qo=fr(function(t,r){r=1==r.length&&of(r[0])?c(r[0],E(ye())):c(wt(r,1),E(ye()));var e=r.length;return fr(function(u){for(var i=-1,o=Ui(u.length,e);++i<o;)u[i]=r[i].call(this,u[i]);
        return n(t,this,u)})}),Xo=fr(function(n,t){return fe(n,32,T,t,L(t,de(Xo)))}),nf=fr(function(n,t){return fe(n,64,T,t,L(t,de(nf)))}),tf=pe(function(n,t){return fe(n,256,T,T,T,t)}),rf=ee(It),ef=ee(function(n,t){return n>=t}),uf=Ut(function(){return arguments}())?Ut:function(n){return du(n)&&ii.call(n,"callee")&&!yi.call(n,"callee")},of=Vu.isArray,ff=Vn?E(Vn):Ct,cf=Ri||qu,af=Kn?E(Kn):Dt,lf=Gn?E(Gn):Tt,sf=Hn?E(Hn):Nt,hf=Jn?E(Jn):Pt,pf=Yn?E(Yn):Zt,_f=ee(Kt),vf=ee(function(n,t){return n<=t}),gf=$r(function(n,t){
        if(ze(t)||lu(t))Cr(t,zu(t),n);else for(var r in t)ii.call(t,r)&&ot(n,r,t[r])}),df=$r(function(n,t){Cr(t,Wu(t),n)}),yf=$r(function(n,t,r,e){Cr(t,Wu(t),n,e)}),bf=$r(function(n,t,r,e){Cr(t,zu(t),n,e)}),xf=pe(ht),jf=fr(function(n,t){n=Yu(n);var r=-1,e=t.length,u=2<e?t[2]:T;for(u&&Oe(t[0],t[1],u)&&(e=1);++r<e;)for(var u=t[r],i=Wu(u),o=-1,f=i.length;++o<f;){var c=i[o],a=n[c];(a===T||au(a,ri[c])&&!ii.call(n,c))&&(n[c]=u[c])}return n}),wf=fr(function(t){return t.push(T,ae),n(Sf,T,t)}),mf=Yr(function(n,t,r){
        null!=t&&typeof t.toString!="function"&&(t=ci.call(t)),n[t]=r},Mu(Tu)),Af=Yr(function(n,t,r){null!=t&&typeof t.toString!="function"&&(t=ci.call(t)),ii.call(n,t)?n[t].push(r):n[t]=[r]},ye),kf=fr(Lt),Ef=$r(function(n,t,r){Yt(n,t,r)}),Sf=$r(function(n,t,r,e){Yt(n,t,r,e)}),Of=pe(function(n,t){var r={};if(null==n)return r;var e=false;t=c(t,function(t){return t=Sr(t,n),e||(e=1<t.length),t}),Cr(n,ve(n),r),e&&(r=_t(r,7,le));for(var u=t.length;u--;)xr(r,t[u]);return r}),If=pe(function(n,t){return null==n?{}:nr(n,t);
    }),Rf=oe(zu),zf=oe(Wu),Wf=qr(function(n,t,r){return t=t.toLowerCase(),n+(r?Uu(t):t)}),Bf=qr(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Lf=qr(function(n,t,r){return n+(r?" ":"")+t.toLowerCase()}),Uf=Zr("toLowerCase"),Cf=qr(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Df=qr(function(n,t,r){return n+(r?" ":"")+Tf(t)}),Mf=qr(function(n,t,r){return n+(r?" ":"")+t.toUpperCase()}),Tf=Zr("toUpperCase"),$f=fr(function(t,r){try{return n(t,T,r)}catch(n){return hu(n)?n:new Gu(n)}}),Ff=pe(function(n,t){
        return r(t,function(t){t=De(t),st(n,t,Go(n[t],n))}),n}),Nf=Hr(),Pf=Hr(true),Zf=fr(function(n,t){return function(r){return Lt(r,n,t)}}),qf=fr(function(n,t){return function(r){return Lt(n,r,t)}}),Vf=Xr(c),Kf=Xr(u),Gf=Xr(h),Hf=re(),Jf=re(true),Yf=Qr(function(n,t){return n+t},0),Qf=ie("ceil"),Xf=Qr(function(n,t){return n/t},1),nc=ie("floor"),tc=Qr(function(n,t){return n*t},1),rc=ie("round"),ec=Qr(function(n,t){return n-t},0);return An.after=function(n,t){if(typeof t!="function")throw new ni("Expected a function");
        return n=Au(n),function(){if(1>--n)return t.apply(this,arguments)}},An.ary=ru,An.assign=gf,An.assignIn=df,An.assignInWith=yf,An.assignWith=bf,An.at=xf,An.before=eu,An.bind=Go,An.bindAll=Ff,An.bindKey=Ho,An.castArray=function(){if(!arguments.length)return[];var n=arguments[0];return of(n)?n:[n]},An.chain=Je,An.chunk=function(n,t,r){if(t=(r?Oe(n,t,r):t===T)?1:Li(Au(t),0),r=null==n?0:n.length,!r||1>t)return[];for(var e=0,u=0,i=Vu(Si(r/t));e<r;)i[u++]=hr(n,e,e+=t);return i},An.compact=function(n){for(var t=-1,r=null==n?0:n.length,e=0,u=[];++t<r;){
        var i=n[t];i&&(u[e++]=i)}return u},An.concat=function(){var n=arguments.length;if(!n)return[];for(var t=Vu(n-1),r=arguments[0];n--;)t[n-1]=arguments[n];return a(of(r)?Ur(r):[r],wt(t,1))},An.cond=function(t){var r=null==t?0:t.length,e=ye();return t=r?c(t,function(n){if("function"!=typeof n[1])throw new ni("Expected a function");return[e(n[0]),n[1]]}):[],fr(function(e){for(var u=-1;++u<r;){var i=t[u];if(n(i[0],this,e))return n(i[1],this,e)}})},An.conforms=function(n){return vt(_t(n,1))},An.constant=Mu,
        An.countBy=To,An.create=function(n,t){var r=ro(n);return null==t?r:at(r,t)},An.curry=uu,An.curryRight=iu,An.debounce=ou,An.defaults=jf,An.defaultsDeep=wf,An.defer=Jo,An.delay=Yo,An.difference=jo,An.differenceBy=wo,An.differenceWith=mo,An.drop=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Au(t),hr(n,0>t?0:t,e)):[]},An.dropRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Au(t),t=e-t,hr(n,0,0>t?0:t)):[]},An.dropRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true,true):[];
    },An.dropWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),true):[]},An.fill=function(n,t,r,e){var u=null==n?0:n.length;if(!u)return[];for(r&&typeof r!="number"&&Oe(n,t,r)&&(r=0,e=u),u=n.length,r=Au(r),0>r&&(r=-r>u?0:u+r),e=e===T||e>u?u:Au(e),0>e&&(e+=u),e=r>e?0:ku(e);r<e;)n[r++]=t;return n},An.filter=function(n,t){return(of(n)?i:jt)(n,ye(t,3))},An.flatMap=function(n,t){return wt(tu(n,t),1)},An.flatMapDeep=function(n,t){return wt(tu(n,t),$)},An.flatMapDepth=function(n,t,r){return r=r===T?1:Au(r),
        wt(tu(n,t),r)},An.flatten=Pe,An.flattenDeep=function(n){return(null==n?0:n.length)?wt(n,$):[]},An.flattenDepth=function(n,t){return null!=n&&n.length?(t=t===T?1:Au(t),wt(n,t)):[]},An.flip=function(n){return fe(n,512)},An.flow=Nf,An.flowRight=Pf,An.fromPairs=function(n){for(var t=-1,r=null==n?0:n.length,e={};++t<r;){var u=n[t];e[u[0]]=u[1]}return e},An.functions=function(n){return null==n?[]:kt(n,zu(n))},An.functionsIn=function(n){return null==n?[]:kt(n,Wu(n))},An.groupBy=No,An.initial=function(n){
        return(null==n?0:n.length)?hr(n,0,-1):[]},An.intersection=Ao,An.intersectionBy=ko,An.intersectionWith=Eo,An.invert=mf,An.invertBy=Af,An.invokeMap=Po,An.iteratee=$u,An.keyBy=Zo,An.keys=zu,An.keysIn=Wu,An.map=tu,An.mapKeys=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,t(n,e,u),n)}),r},An.mapValues=function(n,t){var r={};return t=ye(t,3),mt(n,function(n,e,u){st(r,e,t(n,e,u))}),r},An.matches=function(n){return Ht(_t(n,1))},An.matchesProperty=function(n,t){return Jt(n,_t(t,1))},An.memoize=fu,
        An.merge=Ef,An.mergeWith=Sf,An.method=Zf,An.methodOf=qf,An.mixin=Fu,An.negate=cu,An.nthArg=function(n){return n=Au(n),fr(function(t){return Qt(t,n)})},An.omit=Of,An.omitBy=function(n,t){return Bu(n,cu(ye(t)))},An.once=function(n){return eu(2,n)},An.orderBy=function(n,t,r,e){return null==n?[]:(of(t)||(t=null==t?[]:[t]),r=e?T:r,of(r)||(r=null==r?[]:[r]),Xt(n,t,r))},An.over=Vf,An.overArgs=Qo,An.overEvery=Kf,An.overSome=Gf,An.partial=Xo,An.partialRight=nf,An.partition=qo,An.pick=If,An.pickBy=Bu,An.property=Pu,
        An.propertyOf=function(n){return function(t){return null==n?T:Et(n,t)}},An.pull=So,An.pullAll=Ve,An.pullAllBy=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,ye(r,2)):n},An.pullAllWith=function(n,t,r){return n&&n.length&&t&&t.length?er(n,t,T,r):n},An.pullAt=Oo,An.range=Hf,An.rangeRight=Jf,An.rearg=tf,An.reject=function(n,t){return(of(n)?i:jt)(n,cu(ye(t,3)))},An.remove=function(n,t){var r=[];if(!n||!n.length)return r;var e=-1,u=[],i=n.length;for(t=ye(t,3);++e<i;){var o=n[e];t(o,e,n)&&(r.push(o),
        u.push(e))}return ur(n,u),r},An.rest=function(n,t){if(typeof n!="function")throw new ni("Expected a function");return t=t===T?t:Au(t),fr(n,t)},An.reverse=Ke,An.sampleSize=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:Au(t),(of(n)?et:ar)(n,t)},An.set=function(n,t,r){return null==n?n:lr(n,t,r)},An.setWith=function(n,t,r,e){return e=typeof e=="function"?e:T,null==n?n:lr(n,t,r,e)},An.shuffle=function(n){return(of(n)?ut:sr)(n)},An.slice=function(n,t,r){var e=null==n?0:n.length;return e?(r&&typeof r!="number"&&Oe(n,t,r)?(t=0,
        r=e):(t=null==t?0:Au(t),r=r===T?e:Au(r)),hr(n,t,r)):[]},An.sortBy=Vo,An.sortedUniq=function(n){return n&&n.length?gr(n):[]},An.sortedUniqBy=function(n,t){return n&&n.length?gr(n,ye(t,2)):[]},An.split=function(n,t,r){return r&&typeof r!="number"&&Oe(n,t,r)&&(t=r=T),r=r===T?4294967295:r>>>0,r?(n=Ou(n))&&(typeof t=="string"||null!=t&&!sf(t))&&(t=yr(t),!t&&Rn.test(n))?Or(M(n),0,r):n.split(t,r):[]},An.spread=function(t,r){if(typeof t!="function")throw new ni("Expected a function");return r=null==r?0:Li(Au(r),0),
        fr(function(e){var u=e[r];return e=Or(e,0,r),u&&a(e,u),n(t,this,e)})},An.tail=function(n){var t=null==n?0:n.length;return t?hr(n,1,t):[]},An.take=function(n,t,r){return n&&n.length?(t=r||t===T?1:Au(t),hr(n,0,0>t?0:t)):[]},An.takeRight=function(n,t,r){var e=null==n?0:n.length;return e?(t=r||t===T?1:Au(t),t=e-t,hr(n,0>t?0:t,e)):[]},An.takeRightWhile=function(n,t){return n&&n.length?jr(n,ye(t,3),false,true):[]},An.takeWhile=function(n,t){return n&&n.length?jr(n,ye(t,3)):[]},An.tap=function(n,t){return t(n),
        n},An.throttle=function(n,t,r){var e=true,u=true;if(typeof n!="function")throw new ni("Expected a function");return gu(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),ou(n,t,{leading:e,maxWait:t,trailing:u})},An.thru=Ye,An.toArray=wu,An.toPairs=Rf,An.toPairsIn=zf,An.toPath=function(n){return of(n)?c(n,De):ju(n)?[n]:Ur(xo(Ou(n)))},An.toPlainObject=Su,An.transform=function(n,t,e){var u=of(n),i=u||cf(n)||pf(n);if(t=ye(t,4),null==e){var o=n&&n.constructor;e=i?u?new o:[]:gu(n)&&pu(o)?ro(gi(n)):{};
    }return(i?r:mt)(n,function(n,r,u){return t(e,n,r,u)}),e},An.unary=function(n){return ru(n,1)},An.union=Io,An.unionBy=Ro,An.unionWith=zo,An.uniq=function(n){return n&&n.length?br(n):[]},An.uniqBy=function(n,t){return n&&n.length?br(n,ye(t,2)):[]},An.uniqWith=function(n,t){return t=typeof t=="function"?t:T,n&&n.length?br(n,T,t):[]},An.unset=function(n,t){return null==n||xr(n,t)},An.unzip=Ge,An.unzipWith=He,An.update=function(n,t,r){return null==n?n:lr(n,t,Er(r)(Et(n,t)),void 0)},An.updateWith=function(n,t,r,e){
        return e=typeof e=="function"?e:T,null!=n&&(n=lr(n,t,Er(r)(Et(n,t)),e)),n},An.values=Lu,An.valuesIn=function(n){return null==n?[]:S(n,Wu(n))},An.without=Wo,An.words=Du,An.wrap=function(n,t){return Xo(Er(t),n)},An.xor=Bo,An.xorBy=Lo,An.xorWith=Uo,An.zip=Co,An.zipObject=function(n,t){return Ar(n||[],t||[],ot)},An.zipObjectDeep=function(n,t){return Ar(n||[],t||[],lr)},An.zipWith=Do,An.entries=Rf,An.entriesIn=zf,An.extend=df,An.extendWith=yf,Fu(An,An),An.add=Yf,An.attempt=$f,An.camelCase=Wf,An.capitalize=Uu,
        An.ceil=Qf,An.clamp=function(n,t,r){return r===T&&(r=t,t=T),r!==T&&(r=Eu(r),r=r===r?r:0),t!==T&&(t=Eu(t),t=t===t?t:0),pt(Eu(n),t,r)},An.clone=function(n){return _t(n,4)},An.cloneDeep=function(n){return _t(n,5)},An.cloneDeepWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,5,t)},An.cloneWith=function(n,t){return t=typeof t=="function"?t:T,_t(n,4,t)},An.conformsTo=function(n,t){return null==t||gt(n,t,zu(t))},An.deburr=Cu,An.defaultTo=function(n,t){return null==n||n!==n?t:n},An.divide=Xf,An.endsWith=function(n,t,r){
            n=Ou(n),t=yr(t);var e=n.length,e=r=r===T?e:pt(Au(r),0,e);return r-=t.length,0<=r&&n.slice(r,e)==t},An.eq=au,An.escape=function(n){return(n=Ou(n))&&H.test(n)?n.replace(K,nt):n},An.escapeRegExp=function(n){return(n=Ou(n))&&en.test(n)?n.replace(rn,"\\$&"):n},An.every=function(n,t,r){var e=of(n)?u:bt;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.find=$o,An.findIndex=Fe,An.findKey=function(n,t){return p(n,ye(t,3),mt)},An.findLast=Fo,An.findLastIndex=Ne,An.findLastKey=function(n,t){return p(n,ye(t,3),At);
        },An.floor=nc,An.forEach=Xe,An.forEachRight=nu,An.forIn=function(n,t){return null==n?n:io(n,ye(t,3),Wu)},An.forInRight=function(n,t){return null==n?n:oo(n,ye(t,3),Wu)},An.forOwn=function(n,t){return n&&mt(n,ye(t,3))},An.forOwnRight=function(n,t){return n&&At(n,ye(t,3))},An.get=Iu,An.gt=rf,An.gte=ef,An.has=function(n,t){return null!=n&&we(n,t,Rt)},An.hasIn=Ru,An.head=Ze,An.identity=Tu,An.includes=function(n,t,r,e){return n=lu(n)?n:Lu(n),r=r&&!e?Au(r):0,e=n.length,0>r&&(r=Li(e+r,0)),xu(n)?r<=e&&-1<n.indexOf(t,r):!!e&&-1<v(n,t,r);
        },An.indexOf=function(n,t,r){var e=null==n?0:n.length;return e?(r=null==r?0:Au(r),0>r&&(r=Li(e+r,0)),v(n,t,r)):-1},An.inRange=function(n,t,r){return t=mu(t),r===T?(r=t,t=0):r=mu(r),n=Eu(n),n>=Ui(t,r)&&n<Li(t,r)},An.invoke=kf,An.isArguments=uf,An.isArray=of,An.isArrayBuffer=ff,An.isArrayLike=lu,An.isArrayLikeObject=su,An.isBoolean=function(n){return true===n||false===n||du(n)&&"[object Boolean]"==Ot(n)},An.isBuffer=cf,An.isDate=af,An.isElement=function(n){return du(n)&&1===n.nodeType&&!bu(n)},An.isEmpty=function(n){
            if(null==n)return true;if(lu(n)&&(of(n)||typeof n=="string"||typeof n.splice=="function"||cf(n)||pf(n)||uf(n)))return!n.length;var t=_o(n);if("[object Map]"==t||"[object Set]"==t)return!n.size;if(ze(n))return!Vt(n).length;for(var r in n)if(ii.call(n,r))return false;return true},An.isEqual=function(n,t){return Mt(n,t)},An.isEqualWith=function(n,t,r){var e=(r=typeof r=="function"?r:T)?r(n,t):T;return e===T?Mt(n,t,T,r):!!e},An.isError=hu,An.isFinite=function(n){return typeof n=="number"&&zi(n)},An.isFunction=pu,
        An.isInteger=_u,An.isLength=vu,An.isMap=lf,An.isMatch=function(n,t){return n===t||$t(n,t,xe(t))},An.isMatchWith=function(n,t,r){return r=typeof r=="function"?r:T,$t(n,t,xe(t),r)},An.isNaN=function(n){return yu(n)&&n!=+n},An.isNative=function(n){if(vo(n))throw new Gu("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");return Ft(n)},An.isNil=function(n){return null==n},An.isNull=function(n){return null===n},An.isNumber=yu,An.isObject=gu,An.isObjectLike=du,An.isPlainObject=bu,An.isRegExp=sf,
        An.isSafeInteger=function(n){return _u(n)&&-9007199254740991<=n&&9007199254740991>=n},An.isSet=hf,An.isString=xu,An.isSymbol=ju,An.isTypedArray=pf,An.isUndefined=function(n){return n===T},An.isWeakMap=function(n){return du(n)&&"[object WeakMap]"==_o(n)},An.isWeakSet=function(n){return du(n)&&"[object WeakSet]"==Ot(n)},An.join=function(n,t){return null==n?"":Wi.call(n,t)},An.kebabCase=Bf,An.last=qe,An.lastIndexOf=function(n,t,r){var e=null==n?0:n.length;if(!e)return-1;var u=e;if(r!==T&&(u=Au(r),u=0>u?Li(e+u,0):Ui(u,e-1)),
            t===t){for(r=u+1;r--&&n[r]!==t;);n=r}else n=_(n,d,u,true);return n},An.lowerCase=Lf,An.lowerFirst=Uf,An.lt=_f,An.lte=vf,An.max=function(n){return n&&n.length?xt(n,Tu,It):T},An.maxBy=function(n,t){return n&&n.length?xt(n,ye(t,2),It):T},An.mean=function(n){return y(n,Tu)},An.meanBy=function(n,t){return y(n,ye(t,2))},An.min=function(n){return n&&n.length?xt(n,Tu,Kt):T},An.minBy=function(n,t){return n&&n.length?xt(n,ye(t,2),Kt):T},An.stubArray=Zu,An.stubFalse=qu,An.stubObject=function(){return{}},An.stubString=function(){
            return""},An.stubTrue=function(){return true},An.multiply=tc,An.nth=function(n,t){return n&&n.length?Qt(n,Au(t)):T},An.noConflict=function(){return Fn._===this&&(Fn._=li),this},An.noop=Nu,An.now=Ko,An.pad=function(n,t,r){n=Ou(n);var e=(t=Au(t))?D(n):0;return!t||e>=t?n:(t=(t-e)/2,ne(Oi(t),r)+n+ne(Si(t),r))},An.padEnd=function(n,t,r){n=Ou(n);var e=(t=Au(t))?D(n):0;return t&&e<t?n+ne(t-e,r):n},An.padStart=function(n,t,r){n=Ou(n);var e=(t=Au(t))?D(n):0;return t&&e<t?ne(t-e,r)+n:n},An.parseInt=function(n,t,r){
            return r||null==t?t=0:t&&(t=+t),Di(Ou(n).replace(on,""),t||0)},An.random=function(n,t,r){if(r&&typeof r!="boolean"&&Oe(n,t,r)&&(t=r=T),r===T&&(typeof t=="boolean"?(r=t,t=T):typeof n=="boolean"&&(r=n,n=T)),n===T&&t===T?(n=0,t=1):(n=mu(n),t===T?(t=n,n=0):t=mu(t)),n>t){var e=n;n=t,t=e}return r||n%1||t%1?(r=Mi(),Ui(n+r*(t-n+Dn("1e-"+((r+"").length-1))),t)):ir(n,t)},An.reduce=function(n,t,r){var e=of(n)?l:j,u=3>arguments.length;return e(n,ye(t,4),r,u,eo)},An.reduceRight=function(n,t,r){var e=of(n)?s:j,u=3>arguments.length;
            return e(n,ye(t,4),r,u,uo)},An.repeat=function(n,t,r){return t=(r?Oe(n,t,r):t===T)?1:Au(t),or(Ou(n),t)},An.replace=function(){var n=arguments,t=Ou(n[0]);return 3>n.length?t:t.replace(n[1],n[2])},An.result=function(n,t,r){t=Sr(t,n);var e=-1,u=t.length;for(u||(u=1,n=T);++e<u;){var i=null==n?T:n[De(t[e])];i===T&&(e=u,i=r),n=pu(i)?i.call(n):i}return n},An.round=rc,An.runInContext=x,An.sample=function(n){return(of(n)?Qn:cr)(n)},An.size=function(n){if(null==n)return 0;if(lu(n))return xu(n)?D(n):n.length;
            var t=_o(n);return"[object Map]"==t||"[object Set]"==t?n.size:Vt(n).length},An.snakeCase=Cf,An.some=function(n,t,r){var e=of(n)?h:pr;return r&&Oe(n,t,r)&&(t=T),e(n,ye(t,3))},An.sortedIndex=function(n,t){return _r(n,t)},An.sortedIndexBy=function(n,t,r){return vr(n,t,ye(r,2))},An.sortedIndexOf=function(n,t){var r=null==n?0:n.length;if(r){var e=_r(n,t);if(e<r&&au(n[e],t))return e}return-1},An.sortedLastIndex=function(n,t){return _r(n,t,true)},An.sortedLastIndexBy=function(n,t,r){return vr(n,t,ye(r,2),true);
        },An.sortedLastIndexOf=function(n,t){if(null==n?0:n.length){var r=_r(n,t,true)-1;if(au(n[r],t))return r}return-1},An.startCase=Df,An.startsWith=function(n,t,r){return n=Ou(n),r=null==r?0:pt(Au(r),0,n.length),t=yr(t),n.slice(r,r+t.length)==t},An.subtract=ec,An.sum=function(n){return n&&n.length?m(n,Tu):0},An.sumBy=function(n,t){return n&&n.length?m(n,ye(t,2)):0},An.template=function(n,t,r){var e=An.templateSettings;r&&Oe(n,t,r)&&(t=T),n=Ou(n),t=yf({},t,e,ce),r=yf({},t.imports,e.imports,ce);var u,i,o=zu(r),f=S(r,o),c=0;
            r=t.interpolate||jn;var a="__p+='";r=Qu((t.escape||jn).source+"|"+r.source+"|"+(r===Q?pn:jn).source+"|"+(t.evaluate||jn).source+"|$","g");var l="sourceURL"in t?"//# sourceURL="+t.sourceURL+"\n":"";if(n.replace(r,function(t,r,e,o,f,l){return e||(e=o),a+=n.slice(c,l).replace(wn,z),r&&(u=true,a+="'+__e("+r+")+'"),f&&(i=true,a+="';"+f+";\n__p+='"),e&&(a+="'+((__t=("+e+"))==null?'':__t)+'"),c=l+t.length,t}),a+="';",(t=t.variable)||(a="with(obj){"+a+"}"),a=(i?a.replace(P,""):a).replace(Z,"$1").replace(q,"$1;"),
                    a="function("+(t||"obj")+"){"+(t?"":"obj||(obj={});")+"var __t,__p=''"+(u?",__e=_.escape":"")+(i?",__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}":";")+a+"return __p}",t=$f(function(){return Hu(o,l+"return "+a).apply(T,f)}),t.source=a,hu(t))throw t;return t},An.times=function(n,t){if(n=Au(n),1>n||9007199254740991<n)return[];var r=4294967295,e=Ui(n,4294967295);for(t=ye(t),n-=4294967295,e=A(e,t);++r<n;)t(r);return e},An.toFinite=mu,An.toInteger=Au,An.toLength=ku,An.toLower=function(n){
            return Ou(n).toLowerCase()},An.toNumber=Eu,An.toSafeInteger=function(n){return n?pt(Au(n),-9007199254740991,9007199254740991):0===n?n:0},An.toString=Ou,An.toUpper=function(n){return Ou(n).toUpperCase()},An.trim=function(n,t,r){return(n=Ou(n))&&(r||t===T)?n.replace(un,""):n&&(t=yr(t))?(n=M(n),r=M(t),t=I(n,r),r=R(n,r)+1,Or(n,t,r).join("")):n},An.trimEnd=function(n,t,r){return(n=Ou(n))&&(r||t===T)?n.replace(fn,""):n&&(t=yr(t))?(n=M(n),t=R(n,M(t))+1,Or(n,0,t).join("")):n},An.trimStart=function(n,t,r){
            return(n=Ou(n))&&(r||t===T)?n.replace(on,""):n&&(t=yr(t))?(n=M(n),t=I(n,M(t)),Or(n,t).join("")):n},An.truncate=function(n,t){var r=30,e="...";if(gu(t))var u="separator"in t?t.separator:u,r="length"in t?Au(t.length):r,e="omission"in t?yr(t.omission):e;n=Ou(n);var i=n.length;if(Rn.test(n))var o=M(n),i=o.length;if(r>=i)return n;if(i=r-D(e),1>i)return e;if(r=o?Or(o,0,i).join(""):n.slice(0,i),u===T)return r+e;if(o&&(i+=r.length-i),sf(u)){if(n.slice(i).search(u)){var f=r;for(u.global||(u=Qu(u.source,Ou(_n.exec(u))+"g")),
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          u.lastIndex=0;o=u.exec(f);)var c=o.index;r=r.slice(0,c===T?i:c)}}else n.indexOf(yr(u),i)!=i&&(u=r.lastIndexOf(u),-1<u&&(r=r.slice(0,u)));return r+e},An.unescape=function(n){return(n=Ou(n))&&G.test(n)?n.replace(V,tt):n},An.uniqueId=function(n){var t=++oi;return Ou(n)+t},An.upperCase=Mf,An.upperFirst=Tf,An.each=Xe,An.eachRight=nu,An.first=Ze,Fu(An,function(){var n={};return mt(An,function(t,r){ii.call(An.prototype,r)||(n[r]=t)}),n}(),{chain:false}),An.VERSION="4.17.5",r("bind bindKey curry curryRight partial partialRight".split(" "),function(n){
            An[n].placeholder=An}),r(["drop","take"],function(n,t){Un.prototype[n]=function(r){r=r===T?1:Li(Au(r),0);var e=this.__filtered__&&!t?new Un(this):this.clone();return e.__filtered__?e.__takeCount__=Ui(r,e.__takeCount__):e.__views__.push({size:Ui(r,4294967295),type:n+(0>e.__dir__?"Right":"")}),e},Un.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),r(["filter","map","takeWhile"],function(n,t){var r=t+1,e=1==r||3==r;Un.prototype[n]=function(n){var t=this.clone();return t.__iteratees__.push({
            iteratee:ye(n,3),type:r}),t.__filtered__=t.__filtered__||e,t}}),r(["head","last"],function(n,t){var r="take"+(t?"Right":"");Un.prototype[n]=function(){return this[r](1).value()[0]}}),r(["initial","tail"],function(n,t){var r="drop"+(t?"":"Right");Un.prototype[n]=function(){return this.__filtered__?new Un(this):this[r](1)}}),Un.prototype.compact=function(){return this.filter(Tu)},Un.prototype.find=function(n){return this.filter(n).head()},Un.prototype.findLast=function(n){return this.reverse().find(n);
        },Un.prototype.invokeMap=fr(function(n,t){return typeof n=="function"?new Un(this):this.map(function(r){return Lt(r,n,t)})}),Un.prototype.reject=function(n){return this.filter(cu(ye(n)))},Un.prototype.slice=function(n,t){n=Au(n);var r=this;return r.__filtered__&&(0<n||0>t)?new Un(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==T&&(t=Au(t),r=0>t?r.dropRight(-t):r.take(t-n)),r)},Un.prototype.takeRightWhile=function(n){return this.reverse().takeWhile(n).reverse()},Un.prototype.toArray=function(){return this.take(4294967295);
        },mt(Un.prototype,function(n,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),e=/^(?:head|last)$/.test(t),u=An[e?"take"+("last"==t?"Right":""):t],i=e||/^find/.test(t);u&&(An.prototype[t]=function(){function t(n){return n=u.apply(An,a([n],f)),e&&h?n[0]:n}var o=this.__wrapped__,f=e?[1]:arguments,c=o instanceof Un,l=f[0],s=c||of(o);s&&r&&typeof l=="function"&&1!=l.length&&(c=s=false);var h=this.__chain__,p=!!this.__actions__.length,l=i&&!h,c=c&&!p;return!i&&s?(o=c?o:new Un(this),o=n.apply(o,f),o.__actions__.push({
            func:Ye,args:[t],thisArg:T}),new On(o,h)):l&&c?n.apply(this,f):(o=this.thru(t),l?e?o.value()[0]:o.value():o)})}),r("pop push shift sort splice unshift".split(" "),function(n){var t=ti[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:pop|shift)$/.test(n);An.prototype[n]=function(){var n=arguments;if(e&&!this.__chain__){var u=this.value();return t.apply(of(u)?u:[],n)}return this[r](function(r){return t.apply(of(r)?r:[],n)})}}),mt(Un.prototype,function(n,t){var r=An[t];if(r){var e=r.name+"";
            (Ki[e]||(Ki[e]=[])).push({name:t,func:r})}}),Ki[Jr(T,2).name]=[{name:"wrapper",func:T}],Un.prototype.clone=function(){var n=new Un(this.__wrapped__);return n.__actions__=Ur(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=Ur(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=Ur(this.__views__),n},Un.prototype.reverse=function(){if(this.__filtered__){var n=new Un(this);n.__dir__=-1,n.__filtered__=true}else n=this.clone(),n.__dir__*=-1;return n;
        },Un.prototype.value=function(){var n,t=this.__wrapped__.value(),r=this.__dir__,e=of(t),u=0>r,i=e?t.length:0;n=i;for(var o=this.__views__,f=0,c=-1,a=o.length;++c<a;){var l=o[c],s=l.size;switch(l.type){case"drop":f+=s;break;case"dropRight":n-=s;break;case"take":n=Ui(n,f+s);break;case"takeRight":f=Li(f,n-s)}}if(n={start:f,end:n},o=n.start,f=n.end,n=f-o,o=u?f:o-1,f=this.__iteratees__,c=f.length,a=0,l=Ui(n,this.__takeCount__),!e||!u&&i==n&&l==n)return wr(t,this.__actions__);e=[];n:for(;n--&&a<l;){for(o+=r,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  u=-1,i=t[o];++u<c;){var h=f[u],s=h.type,h=(0,h.iteratee)(i);if(2==s)i=h;else if(!h){if(1==s)continue n;break n}}e[a++]=i}return e},An.prototype.at=Mo,An.prototype.chain=function(){return Je(this)},An.prototype.commit=function(){return new On(this.value(),this.__chain__)},An.prototype.next=function(){this.__values__===T&&(this.__values__=wu(this.value()));var n=this.__index__>=this.__values__.length;return{done:n,value:n?T:this.__values__[this.__index__++]}},An.prototype.plant=function(n){for(var t,r=this;r instanceof kn;){
            var e=$e(r);e.__index__=0,e.__values__=T,t?u.__wrapped__=e:t=e;var u=e,r=r.__wrapped__}return u.__wrapped__=n,t},An.prototype.reverse=function(){var n=this.__wrapped__;return n instanceof Un?(this.__actions__.length&&(n=new Un(this)),n=n.reverse(),n.__actions__.push({func:Ye,args:[Ke],thisArg:T}),new On(n,this.__chain__)):this.thru(Ke)},An.prototype.toJSON=An.prototype.valueOf=An.prototype.value=function(){return wr(this.__wrapped__,this.__actions__)},An.prototype.first=An.prototype.head,ji&&(An.prototype[ji]=Qe),
        An}();typeof define=="function"&&typeof define.amd=="object"&&define.amd?(Fn._=rt, define(function(){return rt})):Pn?((Pn.exports=rt)._=rt,Nn._=rt):Fn._=rt}).call(this);

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
(function(window, document, exportName, undefined) {
	'use strict';

	var VENDOR_PREFIXES = ['', 'webkit', 'Moz', 'MS', 'ms', 'o'];
	var TEST_ELEMENT = document.createElement('div');

	var TYPE_FUNCTION = 'function';

	var round = Math.round;
	var abs = Math.abs;
	var now = Date.now;

	/**
	 * set a timeout with a given scope
	 * @param {Function} fn
	 * @param {Number} timeout
	 * @param {Object} context
	 * @returns {number}
	 */
	function setTimeoutContext(fn, timeout, context) {
		return setTimeout(bindFn(fn, context), timeout);
	}

	/**
	 * if the argument is an array, we want to execute the fn on each entry
	 * if it aint an array we don't want to do a thing.
	 * this is used by all the methods that accept a single and array argument.
	 * @param {*|Array} arg
	 * @param {String} fn
	 * @param {Object} [context]
	 * @returns {Boolean}
	 */
	function invokeArrayArg(arg, fn, context) {
		if (Array.isArray(arg)) {
			each(arg, context[fn], context);
			return true;
		}
		return false;
	}

	/**
	 * walk objects and arrays
	 * @param {Object} obj
	 * @param {Function} iterator
	 * @param {Object} context
	 */
	function each(obj, iterator, context) {
		var i;

		if (!obj) {
			return;
		}

		if (obj.forEach) {
			obj.forEach(iterator, context);
		} else if (obj.length !== undefined) {
			i = 0;
			while (i < obj.length) {
				iterator.call(context, obj[i], i, obj);
				i++;
			}
		} else {
			for (i in obj) {
				obj.hasOwnProperty(i) && iterator.call(context, obj[i], i, obj);
			}
		}
	}

	/**
	 * wrap a method with a deprecation warning and stack trace
	 * @param {Function} method
	 * @param {String} name
	 * @param {String} message
	 * @returns {Function} A new function wrapping the supplied method.
	 */
	function deprecate(method, name, message) {
		var deprecationMessage = 'DEPRECATED METHOD: ' + name + '\n' + message + ' AT \n';
		return function() {
			var e = new Error('get-stack-trace');
			var stack = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, '')
				.replace(/^\s+at\s+/gm, '')
				.replace(/^Object.<anonymous>\s*\(/gm, '{anonymous}()@') : 'Unknown Stack Trace';

			var log = window.console && (window.console.warn || window.console.log);
			if (log) {
				log.call(window.console, deprecationMessage, stack);
			}
			return method.apply(this, arguments);
		};
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} target
	 * @param {...Object} objects_to_assign
	 * @returns {Object} target
	 */
	var assign;
	if (typeof Object.assign !== 'function') {
		assign = function assign(target) {
			if (target === undefined || target === null) {
				throw new TypeError('Cannot convert undefined or null to object');
			}

			var output = Object(target);
			for (var index = 1; index < arguments.length; index++) {
				var source = arguments[index];
				if (source !== undefined && source !== null) {
					for (var nextKey in source) {
						if (source.hasOwnProperty(nextKey)) {
							output[nextKey] = source[nextKey];
						}
					}
				}
			}
			return output;
		};
	} else {
		assign = Object.assign;
	}

	/**
	 * extend object.
	 * means that properties in dest will be overwritten by the ones in src.
	 * @param {Object} dest
	 * @param {Object} src
	 * @param {Boolean} [merge=false]
	 * @returns {Object} dest
	 */
	var extend = deprecate(function extend(dest, src, merge) {
		var keys = Object.keys(src);
		var i = 0;
		while (i < keys.length) {
			if (!merge || (merge && dest[keys[i]] === undefined)) {
				dest[keys[i]] = src[keys[i]];
			}
			i++;
		}
		return dest;
	}, 'extend', 'Use `assign`.');

	/**
	 * merge the values from src in the dest.
	 * means that properties that exist in dest will not be overwritten by src
	 * @param {Object} dest
	 * @param {Object} src
	 * @returns {Object} dest
	 */
	var merge = deprecate(function merge(dest, src) {
		return extend(dest, src, true);
	}, 'merge', 'Use `assign`.');

	/**
	 * simple class inheritance
	 * @param {Function} child
	 * @param {Function} base
	 * @param {Object} [properties]
	 */
	function inherit(child, base, properties) {
		var baseP = base.prototype,
			childP;

		childP = child.prototype = Object.create(baseP);
		childP.constructor = child;
		childP._super = baseP;

		if (properties) {
			assign(childP, properties);
		}
	}

	/**
	 * simple function bind
	 * @param {Function} fn
	 * @param {Object} context
	 * @returns {Function}
	 */
	function bindFn(fn, context) {
		return function boundFn() {
			return fn.apply(context, arguments);
		};
	}

	/**
	 * let a boolean value also be a function that must return a boolean
	 * this first item in args will be used as the context
	 * @param {Boolean|Function} val
	 * @param {Array} [args]
	 * @returns {Boolean}
	 */
	function boolOrFn(val, args) {
		if (typeof val == TYPE_FUNCTION) {
			return val.apply(args ? args[0] || undefined : undefined, args);
		}
		return val;
	}

	/**
	 * use the val2 when val1 is undefined
	 * @param {*} val1
	 * @param {*} val2
	 * @returns {*}
	 */
	function ifUndefined(val1, val2) {
		return (val1 === undefined) ? val2 : val1;
	}

	/**
	 * addEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function addEventListeners(target, types, handler) {
		each(splitStr(types), function(type) {
			target.addEventListener(type, handler, false);
		});
	}

	/**
	 * removeEventListener with multiple events at once
	 * @param {EventTarget} target
	 * @param {String} types
	 * @param {Function} handler
	 */
	function removeEventListeners(target, types, handler) {
		each(splitStr(types), function(type) {
			target.removeEventListener(type, handler, false);
		});
	}

	/**
	 * find if a node is in the given parent
	 * @method hasParent
	 * @param {HTMLElement} node
	 * @param {HTMLElement} parent
	 * @return {Boolean} found
	 */
	function hasParent(node, parent) {
		while (node) {
			if (node == parent) {
				return true;
			}
			node = node.parentNode;
		}
		return false;
	}

	/**
	 * small indexOf wrapper
	 * @param {String} str
	 * @param {String} find
	 * @returns {Boolean} found
	 */
	function inStr(str, find) {
		return str.indexOf(find) > -1;
	}

	/**
	 * split string on whitespace
	 * @param {String} str
	 * @returns {Array} words
	 */
	function splitStr(str) {
		return str.trim().split(/\s+/g);
	}

	/**
	 * find if a array contains the object using indexOf or a simple polyFill
	 * @param {Array} src
	 * @param {String} find
	 * @param {String} [findByKey]
	 * @return {Boolean|Number} false when not found, or the index
	 */
	function inArray(src, find, findByKey) {
		if (src.indexOf && !findByKey) {
			return src.indexOf(find);
		} else {
			var i = 0;
			while (i < src.length) {
				if ((findByKey && src[i][findByKey] == find) || (!findByKey && src[i] === find)) {
					return i;
				}
				i++;
			}
			return -1;
		}
	}

	/**
	 * convert array-like objects to real arrays
	 * @param {Object} obj
	 * @returns {Array}
	 */
	function toArray(obj) {
		return Array.prototype.slice.call(obj, 0);
	}

	/**
	 * unique array with objects based on a key (like 'id') or just by the array's value
	 * @param {Array} src [{id:1},{id:2},{id:1}]
	 * @param {String} [key]
	 * @param {Boolean} [sort=False]
	 * @returns {Array} [{id:1},{id:2}]
	 */
	function uniqueArray(src, key, sort) {
		var results = [];
		var values = [];
		var i = 0;

		while (i < src.length) {
			var val = key ? src[i][key] : src[i];
			if (inArray(values, val) < 0) {
				results.push(src[i]);
			}
			values[i] = val;
			i++;
		}

		if (sort) {
			if (!key) {
				results = results.sort();
			} else {
				results = results.sort(function sortUniqueArray(a, b) {
					return a[key] > b[key];
				});
			}
		}

		return results;
	}

	/**
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String|Undefined} prefixed
	 */
	function prefixed(obj, property) {
		var prefix, prop;
		var camelProp = property[0].toUpperCase() + property.slice(1);

		var i = 0;
		while (i < VENDOR_PREFIXES.length) {
			prefix = VENDOR_PREFIXES[i];
			prop = (prefix) ? prefix + camelProp : property;

			if (prop in obj) {
				return prop;
			}
			i++;
		}
		return undefined;
	}

	/**
	 * get a unique id
	 * @returns {number} uniqueId
	 */
	var _uniqueId = 1;
	function uniqueId() {
		return _uniqueId++;
	}

	/**
	 * get the window object of an element
	 * @param {HTMLElement} element
	 * @returns {DocumentView|Window}
	 */
	function getWindowForElement(element) {
		var doc = element.ownerDocument || element;
		return (doc.defaultView || doc.parentWindow || window);
	}

	var MOBILE_REGEX = /mobile|tablet|ip(ad|hone|od)|android/i;

	var SUPPORT_TOUCH = ('ontouchstart' in window);
	var SUPPORT_POINTER_EVENTS = prefixed(window, 'PointerEvent') !== undefined;
	var SUPPORT_ONLY_TOUCH = SUPPORT_TOUCH && MOBILE_REGEX.test(navigator.userAgent);

	var INPUT_TYPE_TOUCH = 'touch';
	var INPUT_TYPE_PEN = 'pen';
	var INPUT_TYPE_MOUSE = 'mouse';
	var INPUT_TYPE_KINECT = 'kinect';

	var COMPUTE_INTERVAL = 25;

	var INPUT_START = 1;
	var INPUT_MOVE = 2;
	var INPUT_END = 4;
	var INPUT_CANCEL = 8;

	var DIRECTION_NONE = 1;
	var DIRECTION_LEFT = 2;
	var DIRECTION_RIGHT = 4;
	var DIRECTION_UP = 8;
	var DIRECTION_DOWN = 16;

	var DIRECTION_HORIZONTAL = DIRECTION_LEFT | DIRECTION_RIGHT;
	var DIRECTION_VERTICAL = DIRECTION_UP | DIRECTION_DOWN;
	var DIRECTION_ALL = DIRECTION_HORIZONTAL | DIRECTION_VERTICAL;

	var PROPS_XY = ['x', 'y'];
	var PROPS_CLIENT_XY = ['clientX', 'clientY'];

	/**
	 * create new input type manager
	 * @param {Manager} manager
	 * @param {Function} callback
	 * @returns {Input}
	 * @constructor
	 */
	function Input(manager, callback) {
		var self = this;
		this.manager = manager;
		this.callback = callback;
		this.element = manager.element;
		this.target = manager.options.inputTarget;

		// smaller wrapper around the handler, for the scope and the enabled state of the manager,
		// so when disabled the input events are completely bypassed.
		this.domHandler = function(ev) {
			if (boolOrFn(manager.options.enable, [manager])) {
				self.handler(ev);
			}
		};

		this.init();

	}

	Input.prototype = {
		/**
		 * should handle the inputEvent data and trigger the callback
		 * @virtual
		 */
		handler: function() { },

		/**
		 * bind the events
		 */
		init: function() {
			this.evEl && addEventListeners(this.element, this.evEl, this.domHandler);
			this.evTarget && addEventListeners(this.target, this.evTarget, this.domHandler);
			this.evWin && addEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
		},

		/**
		 * unbind the events
		 */
		destroy: function() {
			this.evEl && removeEventListeners(this.element, this.evEl, this.domHandler);
			this.evTarget && removeEventListeners(this.target, this.evTarget, this.domHandler);
			this.evWin && removeEventListeners(getWindowForElement(this.element), this.evWin, this.domHandler);
		}
	};

	/**
	 * create new input type manager
	 * called by the Manager constructor
	 * @param {Hammer} manager
	 * @returns {Input}
	 */
	function createInputInstance(manager) {
		var Type;
		var inputClass = manager.options.inputClass;

		if (inputClass) {
			Type = inputClass;
		} else if (SUPPORT_POINTER_EVENTS) {
			Type = PointerEventInput;
		} else if (SUPPORT_ONLY_TOUCH) {
			Type = TouchInput;
		} else if (!SUPPORT_TOUCH) {
			Type = MouseInput;
		} else {
			Type = TouchMouseInput;
		}
		return new (Type)(manager, inputHandler);
	}

	/**
	 * handle input events
	 * @param {Manager} manager
	 * @param {String} eventType
	 * @param {Object} input
	 */
	function inputHandler(manager, eventType, input) {
		var pointersLen = input.pointers.length;
		var changedPointersLen = input.changedPointers.length;
		var isFirst = (eventType & INPUT_START && (pointersLen - changedPointersLen === 0));
		var isFinal = (eventType & (INPUT_END | INPUT_CANCEL) && (pointersLen - changedPointersLen === 0));

		input.isFirst = !!isFirst;
		input.isFinal = !!isFinal;

		if (isFirst) {
			manager.session = {};
		}

		// source event is the normalized value of the domEvents
		// like 'touchstart, mouseup, pointerdown'
		input.eventType = eventType;

		// compute scale, rotation etc
		computeInputData(manager, input);

		// emit secret event
		manager.emit('hammer.input', input);

		manager.recognize(input);
		manager.session.prevInput = input;
	}

	/**
	 * extend the data with some usable properties like scale, rotate, velocity etc
	 * @param {Object} manager
	 * @param {Object} input
	 */
	function computeInputData(manager, input) {
		var session = manager.session;
		var pointers = input.pointers;
		var pointersLength = pointers.length;

		// store the first input to calculate the distance and direction
		if (!session.firstInput) {
			session.firstInput = simpleCloneInputData(input);
		}

		// to compute scale and rotation we need to store the multiple touches
		if (pointersLength > 1 && !session.firstMultiple) {
			session.firstMultiple = simpleCloneInputData(input);
		} else if (pointersLength === 1) {
			session.firstMultiple = false;
		}

		var firstInput = session.firstInput;
		var firstMultiple = session.firstMultiple;
		var offsetCenter = firstMultiple ? firstMultiple.center : firstInput.center;

		var center = input.center = getCenter(pointers);
		input.timeStamp = now();
		input.deltaTime = input.timeStamp - firstInput.timeStamp;

		input.angle = getAngle(offsetCenter, center);
		input.distance = getDistance(offsetCenter, center);

		computeDeltaXY(session, input);
		input.offsetDirection = getDirection(input.deltaX, input.deltaY);

		var overallVelocity = getVelocity(input.deltaTime, input.deltaX, input.deltaY);
		input.overallVelocityX = overallVelocity.x;
		input.overallVelocityY = overallVelocity.y;
		input.overallVelocity = (abs(overallVelocity.x) > abs(overallVelocity.y)) ? overallVelocity.x : overallVelocity.y;

		input.scale = firstMultiple ? getScale(firstMultiple.pointers, pointers) : 1;
		input.rotation = firstMultiple ? getRotation(firstMultiple.pointers, pointers) : 0;

		input.maxPointers = !session.prevInput ? input.pointers.length : ((input.pointers.length >
			session.prevInput.maxPointers) ? input.pointers.length : session.prevInput.maxPointers);

		computeIntervalInputData(session, input);

		// find the correct target
		var target = manager.element;
		if (hasParent(input.srcEvent.target, target)) {
			target = input.srcEvent.target;
		}
		input.target = target;
	}

	function computeDeltaXY(session, input) {
		var center = input.center;
		var offset = session.offsetDelta || {};
		var prevDelta = session.prevDelta || {};
		var prevInput = session.prevInput || {};

		if (input.eventType === INPUT_START || prevInput.eventType === INPUT_END) {
			prevDelta = session.prevDelta = {
				x: prevInput.deltaX || 0,
				y: prevInput.deltaY || 0
			};

			offset = session.offsetDelta = {
				x: center.x,
				y: center.y
			};
		}

		input.deltaX = prevDelta.x + (center.x - offset.x);
		input.deltaY = prevDelta.y + (center.y - offset.y);
	}

	/**
	 * velocity is calculated every x ms
	 * @param {Object} session
	 * @param {Object} input
	 */
	function computeIntervalInputData(session, input) {
		var last = session.lastInterval || input,
			deltaTime = input.timeStamp - last.timeStamp,
			velocity, velocityX, velocityY, direction;

		if (input.eventType != INPUT_CANCEL && (deltaTime > COMPUTE_INTERVAL || last.velocity === undefined)) {
			var deltaX = input.deltaX - last.deltaX;
			var deltaY = input.deltaY - last.deltaY;

			var v = getVelocity(deltaTime, deltaX, deltaY);
			velocityX = v.x;
			velocityY = v.y;
			velocity = (abs(v.x) > abs(v.y)) ? v.x : v.y;
			direction = getDirection(deltaX, deltaY);

			session.lastInterval = input;
		} else {
			// use latest velocity info if it doesn't overtake a minimum period
			velocity = last.velocity;
			velocityX = last.velocityX;
			velocityY = last.velocityY;
			direction = last.direction;
		}

		input.velocity = velocity;
		input.velocityX = velocityX;
		input.velocityY = velocityY;
		input.direction = direction;
	}

	/**
	 * create a simple clone from the input used for storage of firstInput and firstMultiple
	 * @param {Object} input
	 * @returns {Object} clonedInputData
	 */
	function simpleCloneInputData(input) {
		// make a simple copy of the pointers because we will get a reference if we don't
		// we only need clientXY for the calculations
		var pointers = [];
		var i = 0;
		while (i < input.pointers.length) {
			pointers[i] = {
				clientX: round(input.pointers[i].clientX),
				clientY: round(input.pointers[i].clientY)
			};
			i++;
		}

		return {
			timeStamp: now(),
			pointers: pointers,
			center: getCenter(pointers),
			deltaX: input.deltaX,
			deltaY: input.deltaY
		};
	}

	/**
	 * get the center of all the pointers
	 * @param {Array} pointers
	 * @return {Object} center contains `x` and `y` properties
	 */
	function getCenter(pointers) {
		var pointersLength = pointers.length;

		// no need to loop when only one touch
		if (pointersLength === 1) {
			return {
				x: round(pointers[0].clientX),
				y: round(pointers[0].clientY)
			};
		}

		var x = 0, y = 0, i = 0;
		while (i < pointersLength) {
			x += pointers[i].clientX;
			y += pointers[i].clientY;
			i++;
		}

		return {
			x: round(x / pointersLength),
			y: round(y / pointersLength)
		};
	}

	/**
	 * calculate the velocity between two points. unit is in px per ms.
	 * @param {Number} deltaTime
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Object} velocity `x` and `y`
	 */
	function getVelocity(deltaTime, x, y) {
		return {
			x: x / deltaTime || 0,
			y: y / deltaTime || 0
		};
	}

	/**
	 * get the direction between two points
	 * @param {Number} x
	 * @param {Number} y
	 * @return {Number} direction
	 */
	function getDirection(x, y) {
		if (x === y) {
			return DIRECTION_NONE;
		}

		if (abs(x) >= abs(y)) {
			return x < 0 ? DIRECTION_LEFT : DIRECTION_RIGHT;
		}
		return y < 0 ? DIRECTION_UP : DIRECTION_DOWN;
	}

	/**
	 * calculate the absolute distance between two points
	 * @param {Object} p1 {x, y}
	 * @param {Object} p2 {x, y}
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} distance
	 */
	function getDistance(p1, p2, props) {
		if (!props) {
			props = PROPS_XY;
		}
		var x = p2[props[0]] - p1[props[0]],
			y = p2[props[1]] - p1[props[1]];

		return Math.sqrt((x * x) + (y * y));
	}

	/**
	 * calculate the angle between two coordinates
	 * @param {Object} p1
	 * @param {Object} p2
	 * @param {Array} [props] containing x and y keys
	 * @return {Number} angle
	 */
	function getAngle(p1, p2, props) {
		if (!props) {
			props = PROPS_XY;
		}
		var x = p2[props[0]] - p1[props[0]],
			y = p2[props[1]] - p1[props[1]];
		return Math.atan2(y, x) * 180 / Math.PI;
	}

	/**
	 * calculate the rotation degrees between two pointersets
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} rotation
	 */
	function getRotation(start, end) {
		return getAngle(end[1], end[0], PROPS_CLIENT_XY) + getAngle(start[1], start[0], PROPS_CLIENT_XY);
	}

	/**
	 * calculate the scale factor between two pointersets
	 * no scale is 1, and goes down to 0 when pinched together, and bigger when pinched out
	 * @param {Array} start array of pointers
	 * @param {Array} end array of pointers
	 * @return {Number} scale
	 */
	function getScale(start, end) {
		return getDistance(end[0], end[1], PROPS_CLIENT_XY) / getDistance(start[0], start[1], PROPS_CLIENT_XY);
	}

	var MOUSE_INPUT_MAP = {
		mousedown: INPUT_START,
		mousemove: INPUT_MOVE,
		mouseup: INPUT_END
	};

	var MOUSE_ELEMENT_EVENTS = 'mousedown';
	var MOUSE_WINDOW_EVENTS = 'mousemove mouseup';

	/**
	 * Mouse events input
	 * @constructor
	 * @extends Input
	 */
	function MouseInput() {
		this.evEl = MOUSE_ELEMENT_EVENTS;
		this.evWin = MOUSE_WINDOW_EVENTS;

		this.pressed = false; // mousedown state

		Input.apply(this, arguments);
	}

	inherit(MouseInput, Input, {
		/**
		 * handle mouse events
		 * @param {Object} ev
		 */
		handler: function MEhandler(ev) {
			var eventType = MOUSE_INPUT_MAP[ev.type];

			// on start we want to have the left mouse button down
			if (eventType & INPUT_START && ev.button === 0) {
				this.pressed = true;
			}

			if (eventType & INPUT_MOVE && ev.which !== 1) {
				eventType = INPUT_END;
			}

			// mouse must be down
			if (!this.pressed) {
				return;
			}

			if (eventType & INPUT_END) {
				this.pressed = false;
			}

			this.callback(this.manager, eventType, {
				pointers: [ev],
				changedPointers: [ev],
				pointerType: INPUT_TYPE_MOUSE,
				srcEvent: ev
			});
		}
	});

	var POINTER_INPUT_MAP = {
		pointerdown: INPUT_START,
		pointermove: INPUT_MOVE,
		pointerup: INPUT_END,
		pointercancel: INPUT_CANCEL,
		pointerout: INPUT_CANCEL
	};

// in IE10 the pointer types is defined as an enum
	var IE10_POINTER_TYPE_ENUM = {
		2: INPUT_TYPE_TOUCH,
		3: INPUT_TYPE_PEN,
		4: INPUT_TYPE_MOUSE,
		5: INPUT_TYPE_KINECT // see https://twitter.com/jacobrossi/status/480596438489890816
	};

	var POINTER_ELEMENT_EVENTS = 'pointerdown';
	var POINTER_WINDOW_EVENTS = 'pointermove pointerup pointercancel';

// IE10 has prefixed support, and case-sensitive
	if (window.MSPointerEvent && !window.PointerEvent) {
		POINTER_ELEMENT_EVENTS = 'MSPointerDown';
		POINTER_WINDOW_EVENTS = 'MSPointerMove MSPointerUp MSPointerCancel';
	}

	/**
	 * Pointer events input
	 * @constructor
	 * @extends Input
	 */
	function PointerEventInput() {
		this.evEl = POINTER_ELEMENT_EVENTS;
		this.evWin = POINTER_WINDOW_EVENTS;

		Input.apply(this, arguments);

		this.store = (this.manager.session.pointerEvents = []);
	}

	inherit(PointerEventInput, Input, {
		/**
		 * handle mouse events
		 * @param {Object} ev
		 */
		handler: function PEhandler(ev) {
			var store = this.store;
			var removePointer = false;

			var eventTypeNormalized = ev.type.toLowerCase().replace('ms', '');
			var eventType = POINTER_INPUT_MAP[eventTypeNormalized];
			var pointerType = IE10_POINTER_TYPE_ENUM[ev.pointerType] || ev.pointerType;

			var isTouch = (pointerType == INPUT_TYPE_TOUCH);

			// get index of the event in the store
			var storeIndex = inArray(store, ev.pointerId, 'pointerId');

			// start and mouse must be down
			if (eventType & INPUT_START && (ev.button === 0 || isTouch)) {
				if (storeIndex < 0) {
					store.push(ev);
					storeIndex = store.length - 1;
				}
			} else if (eventType & (INPUT_END | INPUT_CANCEL)) {
				removePointer = true;
			}

			// it not found, so the pointer hasn't been down (so it's probably a hover)
			if (storeIndex < 0) {
				return;
			}

			// update the event in the store
			store[storeIndex] = ev;

			this.callback(this.manager, eventType, {
				pointers: store,
				changedPointers: [ev],
				pointerType: pointerType,
				srcEvent: ev
			});

			if (removePointer) {
				// remove from the store
				store.splice(storeIndex, 1);
			}
		}
	});

	var SINGLE_TOUCH_INPUT_MAP = {
		touchstart: INPUT_START,
		touchmove: INPUT_MOVE,
		touchend: INPUT_END,
		touchcancel: INPUT_CANCEL
	};

	var SINGLE_TOUCH_TARGET_EVENTS = 'touchstart';
	var SINGLE_TOUCH_WINDOW_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Touch events input
	 * @constructor
	 * @extends Input
	 */
	function SingleTouchInput() {
		this.evTarget = SINGLE_TOUCH_TARGET_EVENTS;
		this.evWin = SINGLE_TOUCH_WINDOW_EVENTS;
		this.started = false;

		Input.apply(this, arguments);
	}

	inherit(SingleTouchInput, Input, {
		handler: function TEhandler(ev) {
			var type = SINGLE_TOUCH_INPUT_MAP[ev.type];

			// should we handle the touch events?
			if (type === INPUT_START) {
				this.started = true;
			}

			if (!this.started) {
				return;
			}

			var touches = normalizeSingleTouches.call(this, ev, type);

			// when done, reset the started state
			if (type & (INPUT_END | INPUT_CANCEL) && touches[0].length - touches[1].length === 0) {
				this.started = false;
			}

			this.callback(this.manager, type, {
				pointers: touches[0],
				changedPointers: touches[1],
				pointerType: INPUT_TYPE_TOUCH,
				srcEvent: ev
			});
		}
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function normalizeSingleTouches(ev, type) {
		var all = toArray(ev.touches);
		var changed = toArray(ev.changedTouches);

		if (type & (INPUT_END | INPUT_CANCEL)) {
			all = uniqueArray(all.concat(changed), 'identifier', true);
		}

		return [all, changed];
	}

	var TOUCH_INPUT_MAP = {
		touchstart: INPUT_START,
		touchmove: INPUT_MOVE,
		touchend: INPUT_END,
		touchcancel: INPUT_CANCEL
	};

	var TOUCH_TARGET_EVENTS = 'touchstart touchmove touchend touchcancel';

	/**
	 * Multi-user touch events input
	 * @constructor
	 * @extends Input
	 */
	function TouchInput() {
		this.evTarget = TOUCH_TARGET_EVENTS;
		this.targetIds = {};

		Input.apply(this, arguments);
	}

	inherit(TouchInput, Input, {
		handler: function MTEhandler(ev) {
			var type = TOUCH_INPUT_MAP[ev.type];
			var touches = getTouches.call(this, ev, type);
			if (!touches) {
				return;
			}

			this.callback(this.manager, type, {
				pointers: touches[0],
				changedPointers: touches[1],
				pointerType: INPUT_TYPE_TOUCH,
				srcEvent: ev
			});
		}
	});

	/**
	 * @this {TouchInput}
	 * @param {Object} ev
	 * @param {Number} type flag
	 * @returns {undefined|Array} [all, changed]
	 */
	function getTouches(ev, type) {
		var allTouches = toArray(ev.touches);
		var targetIds = this.targetIds;

		// when there is only one touch, the process can be simplified
		if (type & (INPUT_START | INPUT_MOVE) && allTouches.length === 1) {
			targetIds[allTouches[0].identifier] = true;
			return [allTouches, allTouches];
		}

		var i,
			targetTouches,
			changedTouches = toArray(ev.changedTouches),
			changedTargetTouches = [],
			target = this.target;

		// get target touches from touches
		targetTouches = allTouches.filter(function(touch) {
			return hasParent(touch.target, target);
		});

		// collect touches
		if (type === INPUT_START) {
			i = 0;
			while (i < targetTouches.length) {
				targetIds[targetTouches[i].identifier] = true;
				i++;
			}
		}

		// filter changed touches to only contain touches that exist in the collected target ids
		i = 0;
		while (i < changedTouches.length) {
			if (targetIds[changedTouches[i].identifier]) {
				changedTargetTouches.push(changedTouches[i]);
			}

			// cleanup removed touches
			if (type & (INPUT_END | INPUT_CANCEL)) {
				delete targetIds[changedTouches[i].identifier];
			}
			i++;
		}

		if (!changedTargetTouches.length) {
			return;
		}

		return [
			// merge targetTouches with changedTargetTouches so it contains ALL touches, including 'end' and 'cancel'
			uniqueArray(targetTouches.concat(changedTargetTouches), 'identifier', true),
			changedTargetTouches
		];
	}

	/**
	 * Combined touch and mouse input
	 *
	 * Touch has a higher priority then mouse, and while touching no mouse events are allowed.
	 * This because touch devices also emit mouse events while doing a touch.
	 *
	 * @constructor
	 * @extends Input
	 */

	var DEDUP_TIMEOUT = 2500;
	var DEDUP_DISTANCE = 25;

	function TouchMouseInput() {
		Input.apply(this, arguments);

		var handler = bindFn(this.handler, this);
		this.touch = new TouchInput(this.manager, handler);
		this.mouse = new MouseInput(this.manager, handler);

		this.primaryTouch = null;
		this.lastTouches = [];
	}

	inherit(TouchMouseInput, Input, {
		/**
		 * handle mouse and touch events
		 * @param {Hammer} manager
		 * @param {String} inputEvent
		 * @param {Object} inputData
		 */
		handler: function TMEhandler(manager, inputEvent, inputData) {
			var isTouch = (inputData.pointerType == INPUT_TYPE_TOUCH),
				isMouse = (inputData.pointerType == INPUT_TYPE_MOUSE);

			if (isMouse && inputData.sourceCapabilities && inputData.sourceCapabilities.firesTouchEvents) {
				return;
			}

			// when we're in a touch event, record touches to  de-dupe synthetic mouse event
			if (isTouch) {
				recordTouches.call(this, inputEvent, inputData);
			} else if (isMouse && isSyntheticEvent.call(this, inputData)) {
				return;
			}

			this.callback(manager, inputEvent, inputData);
		},

		/**
		 * remove the event listeners
		 */
		destroy: function destroy() {
			this.touch.destroy();
			this.mouse.destroy();
		}
	});

	function recordTouches(eventType, eventData) {
		if (eventType & INPUT_START) {
			this.primaryTouch = eventData.changedPointers[0].identifier;
			setLastTouch.call(this, eventData);
		} else if (eventType & (INPUT_END | INPUT_CANCEL)) {
			setLastTouch.call(this, eventData);
		}
	}

	function setLastTouch(eventData) {
		var touch = eventData.changedPointers[0];

		if (touch.identifier === this.primaryTouch) {
			var lastTouch = {x: touch.clientX, y: touch.clientY};
			this.lastTouches.push(lastTouch);
			var lts = this.lastTouches;
			var removeLastTouch = function() {
				var i = lts.indexOf(lastTouch);
				if (i > -1) {
					lts.splice(i, 1);
				}
			};
			setTimeout(removeLastTouch, DEDUP_TIMEOUT);
		}
	}

	function isSyntheticEvent(eventData) {
		var x = eventData.srcEvent.clientX, y = eventData.srcEvent.clientY;
		for (var i = 0; i < this.lastTouches.length; i++) {
			var t = this.lastTouches[i];
			var dx = Math.abs(x - t.x), dy = Math.abs(y - t.y);
			if (dx <= DEDUP_DISTANCE && dy <= DEDUP_DISTANCE) {
				return true;
			}
		}
		return false;
	}

	var PREFIXED_TOUCH_ACTION = prefixed(TEST_ELEMENT.style, 'touchAction');
	var NATIVE_TOUCH_ACTION = PREFIXED_TOUCH_ACTION !== undefined;

// magical touchAction value
	var TOUCH_ACTION_COMPUTE = 'compute';
	var TOUCH_ACTION_AUTO = 'auto';
	var TOUCH_ACTION_MANIPULATION = 'manipulation'; // not implemented
	var TOUCH_ACTION_NONE = 'none';
	var TOUCH_ACTION_PAN_X = 'pan-x';
	var TOUCH_ACTION_PAN_Y = 'pan-y';
	var TOUCH_ACTION_MAP = getTouchActionProps();

	/**
	 * Touch Action
	 * sets the touchAction property or uses the js alternative
	 * @param {Manager} manager
	 * @param {String} value
	 * @constructor
	 */
	function TouchAction(manager, value) {
		this.manager = manager;
		this.set(value);
	}

	TouchAction.prototype = {
		/**
		 * set the touchAction value on the element or enable the polyfill
		 * @param {String} value
		 */
		set: function(value) {
			// find out the touch-action by the event handlers
			if (value == TOUCH_ACTION_COMPUTE) {
				value = this.compute();
			}

			if (NATIVE_TOUCH_ACTION && this.manager.element.style && TOUCH_ACTION_MAP[value]) {
				this.manager.element.style[PREFIXED_TOUCH_ACTION] = value;
			}
			this.actions = value.toLowerCase().trim();
		},

		/**
		 * just re-set the touchAction value
		 */
		update: function() {
			this.set(this.manager.options.touchAction);
		},

		/**
		 * compute the value for the touchAction property based on the recognizer's settings
		 * @returns {String} value
		 */
		compute: function() {
			var actions = [];
			each(this.manager.recognizers, function(recognizer) {
				if (boolOrFn(recognizer.options.enable, [recognizer])) {
					actions = actions.concat(recognizer.getTouchAction());
				}
			});
			return cleanTouchActions(actions.join(' '));
		},

		/**
		 * this method is called on each input cycle and provides the preventing of the browser behavior
		 * @param {Object} input
		 */
		preventDefaults: function(input) {
			var srcEvent = input.srcEvent;
			var direction = input.offsetDirection;

			// if the touch action did prevented once this session
			if (this.manager.session.prevented) {
				srcEvent.preventDefault();
				return;
			}

			var actions = this.actions;
			var hasNone = inStr(actions, TOUCH_ACTION_NONE) && !TOUCH_ACTION_MAP[TOUCH_ACTION_NONE];
			var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_Y];
			var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X) && !TOUCH_ACTION_MAP[TOUCH_ACTION_PAN_X];

			if (hasNone) {
				//do not prevent defaults if this is a tap gesture

				var isTapPointer = input.pointers.length === 1;
				var isTapMovement = input.distance < 2;
				var isTapTouchTime = input.deltaTime < 250;

				if (isTapPointer && isTapMovement && isTapTouchTime) {
					return;
				}
			}

			if (hasPanX && hasPanY) {
				// `pan-x pan-y` means browser handles all scrolling/panning, do not prevent
				return;
			}

			if (hasNone ||
				(hasPanY && direction & DIRECTION_HORIZONTAL) ||
				(hasPanX && direction & DIRECTION_VERTICAL)) {
				return this.preventSrc(srcEvent);
			}
		},

		/**
		 * call preventDefault to prevent the browser's default behavior (scrolling in most cases)
		 * @param {Object} srcEvent
		 */
		preventSrc: function(srcEvent) {
			this.manager.session.prevented = true;
			srcEvent.preventDefault();
		}
	};

	/**
	 * when the touchActions are collected they are not a valid value, so we need to clean things up. *
	 * @param {String} actions
	 * @returns {*}
	 */
	function cleanTouchActions(actions) {
		// none
		if (inStr(actions, TOUCH_ACTION_NONE)) {
			return TOUCH_ACTION_NONE;
		}

		var hasPanX = inStr(actions, TOUCH_ACTION_PAN_X);
		var hasPanY = inStr(actions, TOUCH_ACTION_PAN_Y);

		// if both pan-x and pan-y are set (different recognizers
		// for different directions, e.g. horizontal pan but vertical swipe?)
		// we need none (as otherwise with pan-x pan-y combined none of these
		// recognizers will work, since the browser would handle all panning
		if (hasPanX && hasPanY) {
			return TOUCH_ACTION_NONE;
		}

		// pan-x OR pan-y
		if (hasPanX || hasPanY) {
			return hasPanX ? TOUCH_ACTION_PAN_X : TOUCH_ACTION_PAN_Y;
		}

		// manipulation
		if (inStr(actions, TOUCH_ACTION_MANIPULATION)) {
			return TOUCH_ACTION_MANIPULATION;
		}

		return TOUCH_ACTION_AUTO;
	}

	function getTouchActionProps() {
		if (!NATIVE_TOUCH_ACTION) {
			return false;
		}
		var touchMap = {};
		var cssSupports = window.CSS && window.CSS.supports;
		['auto', 'manipulation', 'pan-y', 'pan-x', 'pan-x pan-y', 'none'].forEach(function(val) {

			// If css.supports is not supported but there is native touch-action assume it supports
			// all values. This is the case for IE 10 and 11.
			touchMap[val] = cssSupports ? window.CSS.supports('touch-action', val) : true;
		});
		return touchMap;
	}

	/**
	 * Recognizer flow explained; *
	 * All recognizers have the initial state of POSSIBLE when a input session starts.
	 * The definition of a input session is from the first input until the last input, with all it's movement in it. *
	 * Example session for mouse-input: mousedown -> mousemove -> mouseup
	 *
	 * On each recognizing cycle (see Manager.recognize) the .recognize() method is executed
	 * which determines with state it should be.
	 *
	 * If the recognizer has the state FAILED, CANCELLED or RECOGNIZED (equals ENDED), it is reset to
	 * POSSIBLE to give it another change on the next cycle.
	 *
	 *               Possible
	 *                  |
	 *            +-----+---------------+
	 *            |                     |
	 *      +-----+-----+               |
	 *      |           |               |
	 *   Failed      Cancelled          |
	 *                          +-------+------+
	 *                          |              |
	 *                      Recognized       Began
	 *                                         |
	 *                                      Changed
	 *                                         |
	 *                                  Ended/Recognized
	 */
	var STATE_POSSIBLE = 1;
	var STATE_BEGAN = 2;
	var STATE_CHANGED = 4;
	var STATE_ENDED = 8;
	var STATE_RECOGNIZED = STATE_ENDED;
	var STATE_CANCELLED = 16;
	var STATE_FAILED = 32;

	/**
	 * Recognizer
	 * Every recognizer needs to extend from this class.
	 * @constructor
	 * @param {Object} options
	 */
	function Recognizer(options) {
		this.options = assign({}, this.defaults, options || {});

		this.id = uniqueId();

		this.manager = null;

		// default is enable true
		this.options.enable = ifUndefined(this.options.enable, true);

		this.state = STATE_POSSIBLE;

		this.simultaneous = {};
		this.requireFail = [];
	}

	Recognizer.prototype = {
		/**
		 * @virtual
		 * @type {Object}
		 */
		defaults: {},

		/**
		 * set options
		 * @param {Object} options
		 * @return {Recognizer}
		 */
		set: function(options) {
			assign(this.options, options);

			// also update the touchAction, in case something changed about the directions/enabled state
			this.manager && this.manager.touchAction.update();
			return this;
		},

		/**
		 * recognize simultaneous with an other recognizer.
		 * @param {Recognizer} otherRecognizer
		 * @returns {Recognizer} this
		 */
		recognizeWith: function(otherRecognizer) {
			if (invokeArrayArg(otherRecognizer, 'recognizeWith', this)) {
				return this;
			}

			var simultaneous = this.simultaneous;
			otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
			if (!simultaneous[otherRecognizer.id]) {
				simultaneous[otherRecognizer.id] = otherRecognizer;
				otherRecognizer.recognizeWith(this);
			}
			return this;
		},

		/**
		 * drop the simultaneous link. it doesnt remove the link on the other recognizer.
		 * @param {Recognizer} otherRecognizer
		 * @returns {Recognizer} this
		 */
		dropRecognizeWith: function(otherRecognizer) {
			if (invokeArrayArg(otherRecognizer, 'dropRecognizeWith', this)) {
				return this;
			}

			otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
			delete this.simultaneous[otherRecognizer.id];
			return this;
		},

		/**
		 * recognizer can only run when an other is failing
		 * @param {Recognizer} otherRecognizer
		 * @returns {Recognizer} this
		 */
		requireFailure: function(otherRecognizer) {
			if (invokeArrayArg(otherRecognizer, 'requireFailure', this)) {
				return this;
			}

			var requireFail = this.requireFail;
			otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
			if (inArray(requireFail, otherRecognizer) === -1) {
				requireFail.push(otherRecognizer);
				otherRecognizer.requireFailure(this);
			}
			return this;
		},

		/**
		 * drop the requireFailure link. it does not remove the link on the other recognizer.
		 * @param {Recognizer} otherRecognizer
		 * @returns {Recognizer} this
		 */
		dropRequireFailure: function(otherRecognizer) {
			if (invokeArrayArg(otherRecognizer, 'dropRequireFailure', this)) {
				return this;
			}

			otherRecognizer = getRecognizerByNameIfManager(otherRecognizer, this);
			var index = inArray(this.requireFail, otherRecognizer);
			if (index > -1) {
				this.requireFail.splice(index, 1);
			}
			return this;
		},

		/**
		 * has require failures boolean
		 * @returns {boolean}
		 */
		hasRequireFailures: function() {
			return this.requireFail.length > 0;
		},

		/**
		 * if the recognizer can recognize simultaneous with an other recognizer
		 * @param {Recognizer} otherRecognizer
		 * @returns {Boolean}
		 */
		canRecognizeWith: function(otherRecognizer) {
			return !!this.simultaneous[otherRecognizer.id];
		},

		/**
		 * You should use `tryEmit` instead of `emit` directly to check
		 * that all the needed recognizers has failed before emitting.
		 * @param {Object} input
		 */
		emit: function(input) {
			var self = this;
			var state = this.state;

			function emit(event) {
				self.manager.emit(event, input);
			}

			// 'panstart' and 'panmove'
			if (state < STATE_ENDED) {
				emit(self.options.event + stateStr(state));
			}

			emit(self.options.event); // simple 'eventName' events

			if (input.additionalEvent) { // additional event(panleft, panright, pinchin, pinchout...)
				emit(input.additionalEvent);
			}

			// panend and pancancel
			if (state >= STATE_ENDED) {
				emit(self.options.event + stateStr(state));
			}
		},

		/**
		 * Check that all the require failure recognizers has failed,
		 * if true, it emits a gesture event,
		 * otherwise, setup the state to FAILED.
		 * @param {Object} input
		 */
		tryEmit: function(input) {
			if (this.canEmit()) {
				return this.emit(input);
			}
			// it's failing anyway
			this.state = STATE_FAILED;
		},

		/**
		 * can we emit?
		 * @returns {boolean}
		 */
		canEmit: function() {
			var i = 0;
			while (i < this.requireFail.length) {
				if (!(this.requireFail[i].state & (STATE_FAILED | STATE_POSSIBLE))) {
					return false;
				}
				i++;
			}
			return true;
		},

		/**
		 * update the recognizer
		 * @param {Object} inputData
		 */
		recognize: function(inputData) {
			// make a new copy of the inputData
			// so we can change the inputData without messing up the other recognizers
			var inputDataClone = assign({}, inputData);

			// is is enabled and allow recognizing?
			if (!boolOrFn(this.options.enable, [this, inputDataClone])) {
				this.reset();
				this.state = STATE_FAILED;
				return;
			}

			// reset when we've reached the end
			if (this.state & (STATE_RECOGNIZED | STATE_CANCELLED | STATE_FAILED)) {
				this.state = STATE_POSSIBLE;
			}

			this.state = this.process(inputDataClone);

			// the recognizer has recognized a gesture
			// so trigger an event
			if (this.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED | STATE_CANCELLED)) {
				this.tryEmit(inputDataClone);
			}
		},

		/**
		 * return the state of the recognizer
		 * the actual recognizing happens in this method
		 * @virtual
		 * @param {Object} inputData
		 * @returns {Const} STATE
		 */
		process: function(inputData) { }, // jshint ignore:line

		/**
		 * return the preferred touch-action
		 * @virtual
		 * @returns {Array}
		 */
		getTouchAction: function() { },

		/**
		 * called when the gesture isn't allowed to recognize
		 * like when another is being recognized or it is disabled
		 * @virtual
		 */
		reset: function() { }
	};

	/**
	 * get a usable string, used as event postfix
	 * @param {Const} state
	 * @returns {String} state
	 */
	function stateStr(state) {
		if (state & STATE_CANCELLED) {
			return 'cancel';
		} else if (state & STATE_ENDED) {
			return 'end';
		} else if (state & STATE_CHANGED) {
			return 'move';
		} else if (state & STATE_BEGAN) {
			return 'start';
		}
		return '';
	}

	/**
	 * direction cons to string
	 * @param {Const} direction
	 * @returns {String}
	 */
	function directionStr(direction) {
		if (direction == DIRECTION_DOWN) {
			return 'down';
		} else if (direction == DIRECTION_UP) {
			return 'up';
		} else if (direction == DIRECTION_LEFT) {
			return 'left';
		} else if (direction == DIRECTION_RIGHT) {
			return 'right';
		}
		return '';
	}

	/**
	 * get a recognizer by name if it is bound to a manager
	 * @param {Recognizer|String} otherRecognizer
	 * @param {Recognizer} recognizer
	 * @returns {Recognizer}
	 */
	function getRecognizerByNameIfManager(otherRecognizer, recognizer) {
		var manager = recognizer.manager;
		if (manager) {
			return manager.get(otherRecognizer);
		}
		return otherRecognizer;
	}

	/**
	 * This recognizer is just used as a base for the simple attribute recognizers.
	 * @constructor
	 * @extends Recognizer
	 */
	function AttrRecognizer() {
		Recognizer.apply(this, arguments);
	}

	inherit(AttrRecognizer, Recognizer, {
		/**
		 * @namespace
		 * @memberof AttrRecognizer
		 */
		defaults: {
			/**
			 * @type {Number}
			 * @default 1
			 */
			pointers: 1
		},

		/**
		 * Used to check if it the recognizer receives valid input, like input.distance > 10.
		 * @memberof AttrRecognizer
		 * @param {Object} input
		 * @returns {Boolean} recognized
		 */
		attrTest: function(input) {
			var optionPointers = this.options.pointers;
			return optionPointers === 0 || input.pointers.length === optionPointers;
		},

		/**
		 * Process the input and return the state for the recognizer
		 * @memberof AttrRecognizer
		 * @param {Object} input
		 * @returns {*} State
		 */
		process: function(input) {
			var state = this.state;
			var eventType = input.eventType;

			var isRecognized = state & (STATE_BEGAN | STATE_CHANGED);
			var isValid = this.attrTest(input);

			// on cancel input and we've recognized before, return STATE_CANCELLED
			if (isRecognized && (eventType & INPUT_CANCEL || !isValid)) {
				return state | STATE_CANCELLED;
			} else if (isRecognized || isValid) {
				if (eventType & INPUT_END) {
					return state | STATE_ENDED;
				} else if (!(state & STATE_BEGAN)) {
					return STATE_BEGAN;
				}
				return state | STATE_CHANGED;
			}
			return STATE_FAILED;
		}
	});

	/**
	 * Pan
	 * Recognized when the pointer is down and moved in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PanRecognizer() {
		AttrRecognizer.apply(this, arguments);

		this.pX = null;
		this.pY = null;
	}

	inherit(PanRecognizer, AttrRecognizer, {
		/**
		 * @namespace
		 * @memberof PanRecognizer
		 */
		defaults: {
			event: 'pan',
			threshold: 10,
			pointers: 1,
			direction: DIRECTION_ALL
		},

		getTouchAction: function() {
			var direction = this.options.direction;
			var actions = [];
			if (direction & DIRECTION_HORIZONTAL) {
				actions.push(TOUCH_ACTION_PAN_Y);
			}
			if (direction & DIRECTION_VERTICAL) {
				actions.push(TOUCH_ACTION_PAN_X);
			}
			return actions;
		},

		directionTest: function(input) {
			var options = this.options;
			var hasMoved = true;
			var distance = input.distance;
			var direction = input.direction;
			var x = input.deltaX;
			var y = input.deltaY;

			// lock to axis?
			if (!(direction & options.direction)) {
				if (options.direction & DIRECTION_HORIZONTAL) {
					direction = (x === 0) ? DIRECTION_NONE : (x < 0) ? DIRECTION_LEFT : DIRECTION_RIGHT;
					hasMoved = x != this.pX;
					distance = Math.abs(input.deltaX);
				} else {
					direction = (y === 0) ? DIRECTION_NONE : (y < 0) ? DIRECTION_UP : DIRECTION_DOWN;
					hasMoved = y != this.pY;
					distance = Math.abs(input.deltaY);
				}
			}
			input.direction = direction;
			return hasMoved && distance > options.threshold && direction & options.direction;
		},

		attrTest: function(input) {
			return AttrRecognizer.prototype.attrTest.call(this, input) &&
				(this.state & STATE_BEGAN || (!(this.state & STATE_BEGAN) && this.directionTest(input)));
		},

		emit: function(input) {

			this.pX = input.deltaX;
			this.pY = input.deltaY;

			var direction = directionStr(input.direction);

			if (direction) {
				input.additionalEvent = this.options.event + direction;
			}
			this._super.emit.call(this, input);
		}
	});

	/**
	 * Pinch
	 * Recognized when two or more pointers are moving toward (zoom-in) or away from each other (zoom-out).
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function PinchRecognizer() {
		AttrRecognizer.apply(this, arguments);
	}

	inherit(PinchRecognizer, AttrRecognizer, {
		/**
		 * @namespace
		 * @memberof PinchRecognizer
		 */
		defaults: {
			event: 'pinch',
			threshold: 0,
			pointers: 2
		},

		getTouchAction: function() {
			return [TOUCH_ACTION_NONE];
		},

		attrTest: function(input) {
			return this._super.attrTest.call(this, input) &&
				(Math.abs(input.scale - 1) > this.options.threshold || this.state & STATE_BEGAN);
		},

		emit: function(input) {
			if (input.scale !== 1) {
				var inOut = input.scale < 1 ? 'in' : 'out';
				input.additionalEvent = this.options.event + inOut;
			}
			this._super.emit.call(this, input);
		}
	});

	/**
	 * Press
	 * Recognized when the pointer is down for x ms without any movement.
	 * @constructor
	 * @extends Recognizer
	 */
	function PressRecognizer() {
		Recognizer.apply(this, arguments);

		this._timer = null;
		this._input = null;
	}

	inherit(PressRecognizer, Recognizer, {
		/**
		 * @namespace
		 * @memberof PressRecognizer
		 */
		defaults: {
			event: 'press',
			pointers: 1,
			time: 251, // minimal time of the pointer to be pressed
			threshold: 9 // a minimal movement is ok, but keep it low
		},

		getTouchAction: function() {
			return [TOUCH_ACTION_AUTO];
		},

		process: function(input) {
			var options = this.options;
			var validPointers = input.pointers.length === options.pointers;
			var validMovement = input.distance < options.threshold;
			var validTime = input.deltaTime > options.time;

			this._input = input;

			// we only allow little movement
			// and we've reached an end event, so a tap is possible
			if (!validMovement || !validPointers || (input.eventType & (INPUT_END | INPUT_CANCEL) && !validTime)) {
				this.reset();
			} else if (input.eventType & INPUT_START) {
				this.reset();
				this._timer = setTimeoutContext(function() {
					this.state = STATE_RECOGNIZED;
					this.tryEmit();
				}, options.time, this);
			} else if (input.eventType & INPUT_END) {
				return STATE_RECOGNIZED;
			}
			return STATE_FAILED;
		},

		reset: function() {
			clearTimeout(this._timer);
		},

		emit: function(input) {
			if (this.state !== STATE_RECOGNIZED) {
				return;
			}

			if (input && (input.eventType & INPUT_END)) {
				this.manager.emit(this.options.event + 'up', input);
			} else {
				this._input.timeStamp = now();
				this.manager.emit(this.options.event, this._input);
			}
		}
	});

	/**
	 * Rotate
	 * Recognized when two or more pointer are moving in a circular motion.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function RotateRecognizer() {
		AttrRecognizer.apply(this, arguments);
	}

	inherit(RotateRecognizer, AttrRecognizer, {
		/**
		 * @namespace
		 * @memberof RotateRecognizer
		 */
		defaults: {
			event: 'rotate',
			threshold: 0,
			pointers: 2
		},

		getTouchAction: function() {
			return [TOUCH_ACTION_NONE];
		},

		attrTest: function(input) {
			return this._super.attrTest.call(this, input) &&
				(Math.abs(input.rotation) > this.options.threshold || this.state & STATE_BEGAN);
		}
	});

	/**
	 * Swipe
	 * Recognized when the pointer is moving fast (velocity), with enough distance in the allowed direction.
	 * @constructor
	 * @extends AttrRecognizer
	 */
	function SwipeRecognizer() {
		AttrRecognizer.apply(this, arguments);
	}

	inherit(SwipeRecognizer, AttrRecognizer, {
		/**
		 * @namespace
		 * @memberof SwipeRecognizer
		 */
		defaults: {
			event: 'swipe',
			threshold: 10,
			velocity: 0.3,
			direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL,
			pointers: 1
		},

		getTouchAction: function() {
			return PanRecognizer.prototype.getTouchAction.call(this);
		},

		attrTest: function(input) {
			var direction = this.options.direction;
			var velocity;

			if (direction & (DIRECTION_HORIZONTAL | DIRECTION_VERTICAL)) {
				velocity = input.overallVelocity;
			} else if (direction & DIRECTION_HORIZONTAL) {
				velocity = input.overallVelocityX;
			} else if (direction & DIRECTION_VERTICAL) {
				velocity = input.overallVelocityY;
			}

			return this._super.attrTest.call(this, input) &&
				direction & input.offsetDirection &&
				input.distance > this.options.threshold &&
				input.maxPointers == this.options.pointers &&
				abs(velocity) > this.options.velocity && input.eventType & INPUT_END;
		},

		emit: function(input) {
			var direction = directionStr(input.offsetDirection);
			if (direction) {
				this.manager.emit(this.options.event + direction, input);
			}

			this.manager.emit(this.options.event, input);
		}
	});

	/**
	 * A tap is ecognized when the pointer is doing a small tap/click. Multiple taps are recognized if they occur
	 * between the given interval and position. The delay option can be used to recognize multi-taps without firing
	 * a single tap.
	 *
	 * The eventData from the emitted event contains the property `tapCount`, which contains the amount of
	 * multi-taps being recognized.
	 * @constructor
	 * @extends Recognizer
	 */
	function TapRecognizer() {
		Recognizer.apply(this, arguments);

		// previous time and center,
		// used for tap counting
		this.pTime = false;
		this.pCenter = false;

		this._timer = null;
		this._input = null;
		this.count = 0;
	}

	inherit(TapRecognizer, Recognizer, {
		/**
		 * @namespace
		 * @memberof PinchRecognizer
		 */
		defaults: {
			event: 'tap',
			pointers: 1,
			taps: 1,
			interval: 300, // max time between the multi-tap taps
			time: 250, // max time of the pointer to be down (like finger on the screen)
			threshold: 9, // a minimal movement is ok, but keep it low
			posThreshold: 10 // a multi-tap can be a bit off the initial position
		},

		getTouchAction: function() {
			return [TOUCH_ACTION_MANIPULATION];
		},

		process: function(input) {
			var options = this.options;

			var validPointers = input.pointers.length === options.pointers;
			var validMovement = input.distance < options.threshold;
			var validTouchTime = input.deltaTime < options.time;

			this.reset();

			if ((input.eventType & INPUT_START) && (this.count === 0)) {
				return this.failTimeout();
			}

			// we only allow little movement
			// and we've reached an end event, so a tap is possible
			if (validMovement && validTouchTime && validPointers) {
				if (input.eventType != INPUT_END) {
					return this.failTimeout();
				}

				var validInterval = this.pTime ? (input.timeStamp - this.pTime < options.interval) : true;
				var validMultiTap = !this.pCenter || getDistance(this.pCenter, input.center) < options.posThreshold;

				this.pTime = input.timeStamp;
				this.pCenter = input.center;

				if (!validMultiTap || !validInterval) {
					this.count = 1;
				} else {
					this.count += 1;
				}

				this._input = input;

				// if tap count matches we have recognized it,
				// else it has began recognizing...
				var tapCount = this.count % options.taps;
				if (tapCount === 0) {
					// no failing requirements, immediately trigger the tap event
					// or wait as long as the multitap interval to trigger
					if (!this.hasRequireFailures()) {
						return STATE_RECOGNIZED;
					} else {
						this._timer = setTimeoutContext(function() {
							this.state = STATE_RECOGNIZED;
							this.tryEmit();
						}, options.interval, this);
						return STATE_BEGAN;
					}
				}
			}
			return STATE_FAILED;
		},

		failTimeout: function() {
			this._timer = setTimeoutContext(function() {
				this.state = STATE_FAILED;
			}, this.options.interval, this);
			return STATE_FAILED;
		},

		reset: function() {
			clearTimeout(this._timer);
		},

		emit: function() {
			if (this.state == STATE_RECOGNIZED) {
				this._input.tapCount = this.count;
				this.manager.emit(this.options.event, this._input);
			}
		}
	});

	/**
	 * Simple way to create a manager with a default set of recognizers.
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Hammer(element, options) {
		options = options || {};
		options.recognizers = ifUndefined(options.recognizers, Hammer.defaults.preset);
		return new Manager(element, options);
	}

	/**
	 * @const {string}
	 */
	Hammer.VERSION = '2.0.8';

	/**
	 * default settings
	 * @namespace
	 */
	Hammer.defaults = {
		/**
		 * set if DOM events are being triggered.
		 * But this is slower and unused by simple implementations, so disabled by default.
		 * @type {Boolean}
		 * @default false
		 */
		domEvents: false,

		/**
		 * The value for the touchAction property/fallback.
		 * When set to `compute` it will magically set the correct value based on the added recognizers.
		 * @type {String}
		 * @default compute
		 */
		touchAction: TOUCH_ACTION_COMPUTE,

		/**
		 * @type {Boolean}
		 * @default true
		 */
		enable: true,

		/**
		 * EXPERIMENTAL FEATURE -- can be removed/changed
		 * Change the parent input target element.
		 * If Null, then it is being set the to main element.
		 * @type {Null|EventTarget}
		 * @default null
		 */
		inputTarget: null,

		/**
		 * force an input class
		 * @type {Null|Function}
		 * @default null
		 */
		inputClass: null,

		/**
		 * Default recognizer setup when calling `Hammer()`
		 * When creating a new Manager these will be skipped.
		 * @type {Array}
		 */
		preset: [
			// RecognizerClass, options, [recognizeWith, ...], [requireFailure, ...]
			[RotateRecognizer, {enable: false}],
			[PinchRecognizer, {enable: false}, ['rotate']],
			[SwipeRecognizer, {direction: DIRECTION_HORIZONTAL}],
			[PanRecognizer, {direction: DIRECTION_HORIZONTAL}, ['swipe']],
			[TapRecognizer],
			[TapRecognizer, {event: 'doubletap', taps: 2}, ['tap']],
			[PressRecognizer]
		],

		/**
		 * Some CSS properties can be used to improve the working of Hammer.
		 * Add them to this method and they will be set when creating a new Manager.
		 * @namespace
		 */
		cssProps: {
			/**
			 * Disables text selection to improve the dragging gesture. Mainly for desktop browsers.
			 * @type {String}
			 * @default 'none'
			 */
			userSelect: 'none',

			/**
			 * Disable the Windows Phone grippers when pressing an element.
			 * @type {String}
			 * @default 'none'
			 */
			touchSelect: 'none',

			/**
			 * Disables the default callout shown when you touch and hold a touch target.
			 * On iOS, when you touch and hold a touch target such as a link, Safari displays
			 * a callout containing information about the link. This property allows you to disable that callout.
			 * @type {String}
			 * @default 'none'
			 */
			touchCallout: 'none',

			/**
			 * Specifies whether zooming is enabled. Used by IE10>
			 * @type {String}
			 * @default 'none'
			 */
			contentZooming: 'none',

			/**
			 * Specifies that an entire element should be draggable instead of its contents. Mainly for desktop browsers.
			 * @type {String}
			 * @default 'none'
			 */
			userDrag: 'none',

			/**
			 * Overrides the highlight color shown when the user taps a link or a JavaScript
			 * clickable element in iOS. This property obeys the alpha value, if specified.
			 * @type {String}
			 * @default 'rgba(0,0,0,0)'
			 */
			tapHighlightColor: 'rgba(0,0,0,0)'
		}
	};

	var STOP = 1;
	var FORCED_STOP = 2;

	/**
	 * Manager
	 * @param {HTMLElement} element
	 * @param {Object} [options]
	 * @constructor
	 */
	function Manager(element, options) {
		this.options = assign({}, Hammer.defaults, options || {});

		this.options.inputTarget = this.options.inputTarget || element;

		this.handlers = {};
		this.session = {};
		this.recognizers = [];
		this.oldCssProps = {};

		this.element = element;
		this.input = createInputInstance(this);
		this.touchAction = new TouchAction(this, this.options.touchAction);

		toggleCssProps(this, true);

		each(this.options.recognizers, function(item) {
			var recognizer = this.add(new (item[0])(item[1]));
			item[2] && recognizer.recognizeWith(item[2]);
			item[3] && recognizer.requireFailure(item[3]);
		}, this);
	}

	Manager.prototype = {
		/**
		 * set options
		 * @param {Object} options
		 * @returns {Manager}
		 */
		set: function(options) {
			assign(this.options, options);

			// Options that need a little more setup
			if (options.touchAction) {
				this.touchAction.update();
			}
			if (options.inputTarget) {
				// Clean up existing event listeners and reinitialize
				this.input.destroy();
				this.input.target = options.inputTarget;
				this.input.init();
			}
			return this;
		},

		/**
		 * stop recognizing for this session.
		 * This session will be discarded, when a new [input]start event is fired.
		 * When forced, the recognizer cycle is stopped immediately.
		 * @param {Boolean} [force]
		 */
		stop: function(force) {
			this.session.stopped = force ? FORCED_STOP : STOP;
		},

		/**
		 * run the recognizers!
		 * called by the inputHandler function on every movement of the pointers (touches)
		 * it walks through all the recognizers and tries to detect the gesture that is being made
		 * @param {Object} inputData
		 */
		recognize: function(inputData) {
			var session = this.session;
			if (session.stopped) {
				return;
			}

			// run the touch-action polyfill
			this.touchAction.preventDefaults(inputData);

			var recognizer;
			var recognizers = this.recognizers;

			// this holds the recognizer that is being recognized.
			// so the recognizer's state needs to be BEGAN, CHANGED, ENDED or RECOGNIZED
			// if no recognizer is detecting a thing, it is set to `null`
			var curRecognizer = session.curRecognizer;

			// reset when the last recognizer is recognized
			// or when we're in a new session
			if (!curRecognizer || (curRecognizer && curRecognizer.state & STATE_RECOGNIZED)) {
				curRecognizer = session.curRecognizer = null;
			}

			var i = 0;
			while (i < recognizers.length) {
				recognizer = recognizers[i];

				// find out if we are allowed try to recognize the input for this one.
				// 1.   allow if the session is NOT forced stopped (see the .stop() method)
				// 2.   allow if we still haven't recognized a gesture in this session, or the this recognizer is the one
				//      that is being recognized.
				// 3.   allow if the recognizer is allowed to run simultaneous with the current recognized recognizer.
				//      this can be setup with the `recognizeWith()` method on the recognizer.
				if (session.stopped !== FORCED_STOP && ( // 1
					!curRecognizer || recognizer == curRecognizer || // 2
					recognizer.canRecognizeWith(curRecognizer))) { // 3
					recognizer.recognize(inputData);
				} else {
					recognizer.reset();
				}

				// if the recognizer has been recognizing the input as a valid gesture, we want to store this one as the
				// current active recognizer. but only if we don't already have an active recognizer
				if (!curRecognizer && recognizer.state & (STATE_BEGAN | STATE_CHANGED | STATE_ENDED)) {
					curRecognizer = session.curRecognizer = recognizer;
				}
				i++;
			}
		},

		/**
		 * get a recognizer by its event name.
		 * @param {Recognizer|String} recognizer
		 * @returns {Recognizer|Null}
		 */
		get: function(recognizer) {
			if (recognizer instanceof Recognizer) {
				return recognizer;
			}

			var recognizers = this.recognizers;
			for (var i = 0; i < recognizers.length; i++) {
				if (recognizers[i].options.event == recognizer) {
					return recognizers[i];
				}
			}
			return null;
		},

		/**
		 * add a recognizer to the manager
		 * existing recognizers with the same event name will be removed
		 * @param {Recognizer} recognizer
		 * @returns {Recognizer|Manager}
		 */
		add: function(recognizer) {
			if (invokeArrayArg(recognizer, 'add', this)) {
				return this;
			}

			// remove existing
			var existing = this.get(recognizer.options.event);
			if (existing) {
				this.remove(existing);
			}

			this.recognizers.push(recognizer);
			recognizer.manager = this;

			this.touchAction.update();
			return recognizer;
		},

		/**
		 * remove a recognizer by name or instance
		 * @param {Recognizer|String} recognizer
		 * @returns {Manager}
		 */
		remove: function(recognizer) {
			if (invokeArrayArg(recognizer, 'remove', this)) {
				return this;
			}

			recognizer = this.get(recognizer);

			// let's make sure this recognizer exists
			if (recognizer) {
				var recognizers = this.recognizers;
				var index = inArray(recognizers, recognizer);

				if (index !== -1) {
					recognizers.splice(index, 1);
					this.touchAction.update();
				}
			}

			return this;
		},

		/**
		 * bind event
		 * @param {String} events
		 * @param {Function} handler
		 * @returns {EventEmitter} this
		 */
		on: function(events, handler) {
			if (events === undefined) {
				return;
			}
			if (handler === undefined) {
				return;
			}

			var handlers = this.handlers;
			each(splitStr(events), function(event) {
				handlers[event] = handlers[event] || [];
				handlers[event].push(handler);
			});
			return this;
		},

		/**
		 * unbind event, leave emit blank to remove all handlers
		 * @param {String} events
		 * @param {Function} [handler]
		 * @returns {EventEmitter} this
		 */
		off: function(events, handler) {
			if (events === undefined) {
				return;
			}

			var handlers = this.handlers;
			each(splitStr(events), function(event) {
				if (!handler) {
					delete handlers[event];
				} else {
					handlers[event] && handlers[event].splice(inArray(handlers[event], handler), 1);
				}
			});
			return this;
		},

		/**
		 * emit event to the listeners
		 * @param {String} event
		 * @param {Object} data
		 */
		emit: function(event, data) {
			// we also want to trigger dom events
			if (this.options.domEvents) {
				triggerDomEvent(event, data);
			}

			// no handlers, so skip it all
			var handlers = this.handlers[event] && this.handlers[event].slice();
			if (!handlers || !handlers.length) {
				return;
			}

			data.type = event;
			data.preventDefault = function() {
				data.srcEvent.preventDefault();
			};

			var i = 0;
			while (i < handlers.length) {
				handlers[i](data);
				i++;
			}
		},

		/**
		 * destroy the manager and unbinds all events
		 * it doesn't unbind dom events, that is the user own responsibility
		 */
		destroy: function() {
			this.element && toggleCssProps(this, false);

			this.handlers = {};
			this.session = {};
			this.input.destroy();
			this.element = null;
		}
	};

	/**
	 * add/remove the css properties as defined in manager.options.cssProps
	 * @param {Manager} manager
	 * @param {Boolean} add
	 */
	function toggleCssProps(manager, add) {
		var element = manager.element;
		if (!element.style) {
			return;
		}
		var prop;
		each(manager.options.cssProps, function(value, name) {
			prop = prefixed(element.style, name);
			if (add) {
				manager.oldCssProps[prop] = element.style[prop];
				element.style[prop] = value;
			} else {
				element.style[prop] = manager.oldCssProps[prop] || '';
			}
		});
		if (!add) {
			manager.oldCssProps = {};
		}
	}

	/**
	 * trigger dom event
	 * @param {String} event
	 * @param {Object} data
	 */
	function triggerDomEvent(event, data) {
		var gestureEvent = document.createEvent('Event');
		gestureEvent.initEvent(event, true, true);
		gestureEvent.gesture = data;
		data.target.dispatchEvent(gestureEvent);
	}

	assign(Hammer, {
		INPUT_START: INPUT_START,
		INPUT_MOVE: INPUT_MOVE,
		INPUT_END: INPUT_END,
		INPUT_CANCEL: INPUT_CANCEL,

		STATE_POSSIBLE: STATE_POSSIBLE,
		STATE_BEGAN: STATE_BEGAN,
		STATE_CHANGED: STATE_CHANGED,
		STATE_ENDED: STATE_ENDED,
		STATE_RECOGNIZED: STATE_RECOGNIZED,
		STATE_CANCELLED: STATE_CANCELLED,
		STATE_FAILED: STATE_FAILED,

		DIRECTION_NONE: DIRECTION_NONE,
		DIRECTION_LEFT: DIRECTION_LEFT,
		DIRECTION_RIGHT: DIRECTION_RIGHT,
		DIRECTION_UP: DIRECTION_UP,
		DIRECTION_DOWN: DIRECTION_DOWN,
		DIRECTION_HORIZONTAL: DIRECTION_HORIZONTAL,
		DIRECTION_VERTICAL: DIRECTION_VERTICAL,
		DIRECTION_ALL: DIRECTION_ALL,

		Manager: Manager,
		Input: Input,
		TouchAction: TouchAction,

		TouchInput: TouchInput,
		MouseInput: MouseInput,
		PointerEventInput: PointerEventInput,
		TouchMouseInput: TouchMouseInput,
		SingleTouchInput: SingleTouchInput,

		Recognizer: Recognizer,
		AttrRecognizer: AttrRecognizer,
		Tap: TapRecognizer,
		Pan: PanRecognizer,
		Swipe: SwipeRecognizer,
		Pinch: PinchRecognizer,
		Rotate: RotateRecognizer,
		Press: PressRecognizer,

		on: addEventListeners,
		off: removeEventListeners,
		each: each,
		merge: merge,
		extend: extend,
		assign: assign,
		inherit: inherit,
		bindFn: bindFn,
		prefixed: prefixed
	});

// this prevents errors when Hammer is loaded in the presence of an AMD
//  style loader but by script tag, not by the loader.
	var freeGlobal = (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : {})); // jshint ignore:line
	freeGlobal.Hammer = Hammer;

	if (typeof define === 'function' && define.amd) {
		define(function() {
			return Hammer;
		});
	} else if (typeof module != 'undefined' && module.exports) {
		module.exports = Hammer;
	} else {
		window[exportName] = Hammer;
	}

})(window, document, 'Hammer');
"use strict";

var ria_layout_manager = {
	init: function(){
		var _this = this;

		// console.log('ria_layout_manager >>> inited');

		_this.minHeightViewWidgets = 100;       // минимальная высота виджетов, если меньше то скрываются
		_this.headerToSmall = 0;              // размер прокрутки до маленького хедера
		_this.widgetsSize = false;              // высота области виджетов
		_this.stickedOn = ( $("#body").data('header-sticked-on') && $('#header').length > 0 ) ? true : false;   // флаг что на станице включен прилипающий хедер

		_this.isMobile = ( typeof ria === 'object' && ria.mobileBrowser ) ? ria.mobileBrowser() : false;    // флаг что мобильный браузер
		_this.notPullToReload = 'page-nopulltoreload';                                  // класс на <html/> для запрета Push to reload
		/**  активность состояний */
		_this._state = {
			lenta : false,
			chat : false,
			live : false,
			project : false,
			notPull : false
		};
		/**  модификаторы вешаются на body */
		_this.mod = {
			hSticked :'m-header-sticked',
			hSmall : 'm-header-small',
			hBrand : 'm-header-brand',
			lenta : 'm-widget-lenta',
			chat : 'm-widget-chat',
			live : 'm-widget-live',
			project : 'm-widget-project'
		};
		/**  классы для идентификации кнопок управления виджетами */
		_this.button = {
			lenta : 'js__toggle-lenta',
			lentaMini: 'lenta__close',
			chat : 'js__toggle-chat',
			live : 'js__toggle-live',
			project : 'js__toggle-project',
			all: 'js__widgets-close'
		};

		/** подключение history бля обработки открытия Ленты */
		if ( !!( window.history && history.pushState && history.replaceState ) ) {
			_this.historyHandlers();
		}

		$(window).on( 'scroll resize', function () {
			if ( $('#header').hasClass('sticky') ) _this.headerStatesSwitching();
			_this.setWidgetsSize();
		});

		_this.widgetsManager();

		$( window ).scroll();

		if ( ( '#header' ).length > 0 ) $( "#body" ).addClass( "m-header-ready" );

	},

	historyHandlers : function(){
		var _this = this;
		_this.fromHistory = false;
		_this.disablePopstate = false;
		/** Подписка на тригер изменеия состояния виджетов */
		$( 'body' ).bind( 'widget', function( e, n, s ){
			if ( n === 'lenta' && !_this.fromHistory ){
				if ( s === true ){
					history.pushState( { 'lenta' : true }, null, location.href )
				} else {
					_this.disablePopstate = true;
					history.back()
				}
			}

            if ( n == 'chat' && !_this.fromHistory ){
                if ( s == true ){
                    history.pushState( { 'chat' : true }, null, location.href )
                } else {
                    _this.disablePopstate = true;
                    history.back()
                }
            }

			_this.fromHistory = false;
		} );
		window.addEventListener( "popstate", function( e ) {
			if ( !_this.disablePopstate ){
				_this.fromHistory = true;
				if ( e.state && e.state.lenta && e.state.lenta === true ) {
					_this.changeState( 'lenta', true );
				} else {
					_this.changeState( 'lenta', false );
				}

                if ( e.state && e.state.chat && e.state.chat === true ) {
                    _this.changeState( 'chat', true );
                } else {
                    _this.changeState( 'chat', false );
                    dataLayer.push({ 'block' : 'chat_widget', 'event' : 'chat_close_back' });
                }
			}
			_this.disablePopstate = false;
		}, false );
	},

	/** управление прилипанием хедера */
	headerStatesSwitching : function(){
		var _this = this,
			$b = $( '#body' ),
			limit = $( '#header' ).offset().top + ( $b.hasClass( _this.mod.hBrand ) ? $( '#header' ).outerHeight() : 0 ) ;
		this.headerStatesCheck( limit, $b.hasClass( _this.mod.hSticked ), _this.mod.hSticked);
		this.headerStatesCheck( limit + _this.headerToSmall, $b.hasClass( _this.mod.hSmall ), _this.mod.hSmall);
	},
	
	headerStatesCheck : function( limit, flag, cl ){
		var st = $( window ).scrollTop();
		if ( st >= limit && !flag ) {
			$( '#body' ).addClass( cl );
		} else if ( st == 0 || ( st < limit && flag ) ){
			$( '#body' ).removeClass( cl );
		}
	},

	/** выставление высоты зоны с виджетами */
	setWidgetsSize: function(){
		var _this = this,
			widgetsHeight = '100%',
			$headerHeight = $( '#header' );
	
		if ( this.getClientWidth() > 768 && $( window ).scrollTop() < $headerHeight.offset().top ) {
			widgetsHeight = _this.getViewHeight() - $headerHeight[ 0 ].getBoundingClientRect().top;
		}
		if ( _this.widgetsSize != widgetsHeight ) {
			if ( widgetsHeight < _this.minHeightViewWidgets ) widgetsHeight = 0;
			$( '#widgetsSize' ).height( widgetsHeight );
			_this.widgetsSize = widgetsHeight;
		}
	},

	widgetsManager: function(){
		var _this = this,
			$body = $( 'body' ),
			_s = _this._state;

		$( window ).on( 'resize', function () {
			var clientWidth = _this.getClientWidth();
			/** закрываем виджеты чата или лайв трансляции, если открыта лента */
			if ( _s.lenta && clientWidth < 768 && ( _s.chat || _s.live || _s.project ) ) {
				_this.changeState({
					'chat': false,
					'live': false,
					'project': false
				});
			}
			if ( ( _s.lenta || _s.live || _s.chat || _s.project ) && !$('#modalLayer').hasClass('m-open') ) {
				ria.disablePageScroll( clientWidth >= 768 ? false : true );
			}
		});

		/** click по body закрывает ленту при разрешении более 768 */
		// $body.on( 'click', function(){
		// 	if ( _this.getClientWidth() >= 768 &&  (_this._state.lenta ||  _this._state.project) ) {
		// 		_this.changeState( {'lenta': false, 'project': false } );
		// 	}
		// });
		$body.on( 'click', function(){
			if ( (_this._state.lenta ||  _this._state.project) ) {
				_this.changeState( {'lenta': false, 'project': false } );
			}
		});

		$( '.project__place' ).on( 'click', function( e ){
			if ( _this._state.project ) {
				e.stopPropagation();
			};
		});

		$( '#widgetBottom' ).on( 'click', function( e ){
			if ( _this._state.lenta ) {
				e.stopPropagation();
			};
		});

		$( '.'+_this.button.live ).on( 'click', function(e){
			e.stopPropagation();
			e.preventDefault();
			if ( _this._state.live ) {
				_this._state.lenta ? _this.changeState( 'lenta', false ) : _this.changeState( 'live', false );
			} else {
				_this.changeState({
					'lenta': false,
					'chat': false,
					'project': false,
					'live': true
				});
			}
		});

		$( '.'+_this.button.chat ).on( 'click', function( e ){
			e.stopPropagation();
			e.preventDefault();
			if ( _this._state.chat ) {
				_this._state.lenta ? _this.changeState( 'lenta', false ) : _this.changeState( 'chat', false );
			} else {
				_this.changeState({
					'lenta': false,
					'chat': true,
					'project': false,
					'live': false
				});
			}
		});

		$( '.'+_this.button.lenta ).on( 'click', function( e ){
			e.stopPropagation();
			e.preventDefault();
			_this._state.lenta ? _this.changeState( 'lenta', false ) : _this.changeState( 'lenta', true );
		});

		$( '.'+_this.button.lentaMini ).on( 'click', function( e ){
			e.stopPropagation();
			e.preventDefault();
			if(_this._state.lenta) {
				_this.changeState('lenta', false);
			}
		});

		$( '.'+_this.button.project ).on( 'click', function( e ){
			e.stopPropagation();
			e.preventDefault();
			if ( _this._state.project ) {
				_this._state.lenta ? _this.changeState( 'lenta', false ) : _this.changeState( 'project', false );
			} else {
				_this.changeState({
					'lenta': false,
					'chat': false,
					'project': true,
					'live': false
				});
			}
		});

		$('body').on( 'click', '.' +_this.button.all, function( e ){
			e.stopPropagation();
			e.preventDefault();
			_this.changeState({
				'lenta': false,
				'chat': false,
				'live': false,
				'project': false
			});
		});

	},

	/** Отключение pull to reload посредством html { overflow:hidden } при открытии чата
	 * #RIA2018-755
	 * стало не нужным всвязи с обновой Хрома - оставили прозапас */
	disablePullToReload: function( allow ){
		if ( this.isMobile && ( allow === true || this._state.lenta || this._state.chat || this._state.live ) && this.getClientWidth() < 768 ){
			$( 'html' ).addClass( this.notPullToReload );
			this._state.notPull = true;
		} else if ( allow === false || ( !this._state.lenta || !this._state.chat || !this._state.live ) ){
			$( 'html' ).removeClass( this.notPullToReload );
			this._state.notPull = false;
		}
	},

	changeState: function( n, s ) {
		var _this = this;
		if ( $.isPlainObject( n ) || ( typeof n == "string" && typeof s == "boolean" )  ) {
			var is_state = false,
				obj = {};
			if ( $.isPlainObject( n ) ) {
				obj = n;
			} else {
				obj[n] = s;
			}
			$.each( obj , function( k, v ){
				if ( _this._state[ k ] != v ) _this.setState( k, v );
				if ( v ) is_state = true;
				if ( k === 'lenta' ) ria.disablePageScroll( v );
			});
			if(typeof ria === 'object') {
				ria.dispatch('widget',obj);
			}
			if ( _this.getClientWidth() < 768 ) ria.disablePageScroll( is_state );
		} else {
			return false
		}
		/*TODO test */ //console.log(_this._state);
	},

	setState: function( n, s ){
		var _this = this;
		if ( typeof n == "string" && typeof s == "boolean") {
			if ( s ) {
				_this._state[ n ] = true;
				$( 'body' ).addClass( _this.mod[ n ] );
			} else {
				_this._state[ n ] = false;
				$( 'body' ).removeClass( _this.mod[ n ] );
			}
			$( 'body' ).trigger( 'widget', [ n, s ] );
		} else {
			return false;
		}
	},

	/**
	 * получение ширины контентной области клиента
	 * @returns {Number} size
	 */
	getViewWidth: function(){
		var $viewSize = $('#jsViewSize');
		return $viewSize.length > 0 ? parseInt($viewSize.width()) : this.getClientWidth();
	},
	/**
	 * получение высоты контентной области клиента
	 * @returns {Number} size
	 */
	getViewHeight: function(){
		var $viewSize = $('#jsViewSize');
		return $viewSize.length > 0 ? parseInt($viewSize.height()) : this.getClientHeigth();
	},
	/**
	 * получение ширины окна клиента
	 * @returns {Number} size
	 */
	getClientWidth: function(){
		return Math.max(window.innerWidth || 0, (document.getElementsByTagName('html')[0] || {}).clientWidth || 0)
	},
	/**
	 * получение высоты окна клиента
	 * @returns {Number} size
	 */
	getClientHeigth: function(){
		return  Math.max(window.innerHeight || 0, (document.getElementsByTagName('html')[0] || {}).clientHeight || 0)
	}
};
"use strict";


var ria_live_manager = {

	init: function () {
		var _this = this;
		_this.$live = $('#widgetRLive');

		if (_this.$live.length <= 0) return false;

		// console.log('RIA - LIVE inited');
		// console.log(_this.$live);

        _this.mod = {
            view_list : 'm-view-list',
            no_list : 'm-no-list'
        };

        _this.$title = $('.widgets__r-header-one span', _this.$live);
        _this.$url = $('.widgets__r-header-one a', _this.$live);
        _this.$loader = $('.widgets__r-loader', _this.$live);
		_this.$list = $('.widgets__r-list', _this.$live);
		_this.$back = $('.widgets__r-header-button.m-back', _this.$live);

		_this.checkActive();
		_this.addEvents();

	},

	addEvents : function(){
		var _this = this;

		_this.$list.on('click', '.r-list__item', function(){
			_this.toOnline($(this));
		});

		_this.$back.on('click', function(){
			_this.toList();
		})
	},

	checkActive : function(){
		var _this = this;
        if (_this.$live.hasClass(_this.mod.view_list)){
            _this.toList();
        } else if (_this.$list.length <= 0){
			_this.$live.addClass(_this.mod.no_list);
		}
	},

	toList: function () {
		var _this = this;
		_this.$live.addClass(_this.mod.view_list);
	},

	toOnline: function (obj) {
		var _this = this;
        _this.setTitle(obj.data('title'));
        _this.setUrl(obj.data('url'));
        //_this.$loader.show();
		_this.$live.removeClass(_this.mod.view_list);
		if ( typeof obj == 'object' ){
			// проверка какой онлайн уже загружен
			// если нужен другой - AJAX запрос
			// показываем лоадер
			// заменяем контент
			// скрываем лоадер
		}

	},

	setTitle: function (text) {
		return (!this.$title) ? false : this.$title.html(text);
	},
	setUrl: function (text) {
		return (!this.$url) ? false : this.$url.attr('href', text);
	}


};

$(function(){
    ria_live_manager.init();
});
























$(function() {
	var lenta = {
		init: function({rtl}) {
			var _this = this;
			_this.$elem = $("#widgetLenta .lenta__content");

			_this.cashList = false;
			_this.loading = false;
			_this.waitList = false;
			_this.title = $('.lenta__header');
			_this.body = $('#body');
			_this.maxdate = $('#widgetLenta').data('maxtime')*1000;
			_this.loader_delay = 3000;
			_this.delay = 700;
			_this.widget = $('.widgets__b-slide');

			_this.$elem.theinScroll({
				rtl:rtl
			});

			window.dataLayer = window.dataLayer || [];

			$('body').on('widget', function(e, n, s) {
				if (n == 'lenta' && s) {
					if ( _this.$elem.find('.lenta__list').height() < _this.$elem.height() ) {
						if (_this.cashList) {
							_this.addList();
						} else if(_this.loading) {
							_this.waitList = true;
						} else {
							_this.updateCash();
						}
					}
					if ( $('#widgetLenta .lenta__alert').length ) {
						_this.$elem.css( 'top', $('#widgetLenta .lenta__alert').outerHeight() );
					}
					dataLayer.push({ 'block' : 'lenta_widget', 'event' : 'lenta_open' });
				}
				if (n == 'lenta' && !s) {
					_this.$elem.trigger('scroll-up.the-in-scroll', [ 0, 100]);
					_this.$elem.css( 'top', '' );
					dataLayer.push({ 'block' : 'lenta_widget', 'event' : 'lenta_close' });
				}
			});

			function miniLenta() {
				_this.body.addClass('m-widget-lenta-mini');
				_this.body.removeClass('m-widget-lenta-active');
				$('.js__counter-lenta').addClass('m-zero').text(0);
				ria.lsSet('ria_lenta_mini', '0');
				dataLayer.push({ 'block' : 'lenta_widget', 'event' : 'lenta_hide' });
			}

			$('.lenta__close').on('click', function() {
				miniLenta();
			});

			$('.lenta-mini').on('click', function() {
				_this.body.removeClass('m-widget-lenta-mini');
				_this.body.addClass('m-widget-lenta-active');
				_this.widget.addClass('m-transitiondelay');
				_this.widget.on('transitionend', function() {
					$(this).removeClass('m-transitiondelay');
				});
				ria.lsRemove('ria_lenta_mini');
			});

			if (typeof ria === 'object' && ria.lsGet('ria_lenta_mini')) {
				if ( parseInt( ria.lsGet('ria_lenta_mini') ) > 0 ) {
					$('.js__counter-lenta').removeClass('m-zero');
				}
				$('.js__counter-lenta').text( ria.lsGet('ria_lenta_mini') );
				_this.body.addClass('m-widget-lenta-mini');
			} else {
				_this.body.addClass('m-widget-lenta-active');
			}

			if ( _this.getClientWidth() < 768 && 'ontouchstart' in document.documentElement ) {
				var list = _this.$elem.find('.lenta__list');
				var mc = new Hammer( $('.widgets__b-cover').get(0) );
				var lenta_pos_top = $('.widgets__b-slide').position().top;
				mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

				$('#widgetLenta').css({
					'touch-action': 'none',
					'user-select': 'none',
					'-webkit-user-drag': 'none'
				});

				mc.on('panstart', function(e) {
					list.addClass('m-lenta-pan');
					_this.widget.addClass('m-notransition');
					lenta_pos_top = _this.widget.position().top;
				});

				mc.on('panmove', function(e) {
					_this.widget.css('top', e.deltaY + lenta_pos_top );
				});

				mc.on('panend pancancel', function(e) {
					list.removeClass('m-lenta-pan');
					_this.widget.removeClass('m-notransition');

					if ( _this.body.hasClass('m-widget-lenta') &&  e.deltaY > 100  ) {
						_this.widget.css('top', '' );
						ria_layout_manager.changeState( 'lenta', false );
					} else if ( !_this.body.hasClass('m-widget-lenta') && e.deltaY > 20 ) {
						_this.widget.css('top', '');
						miniLenta();
					} else if (e.deltaY < -100) {
						_this.widget.css('top', '');
						ria_layout_manager.changeState( 'lenta', true );
					} else {
						_this.widget.css('top', lenta_pos_top );
						_this.widget.on('transitionend', function() {
							$(this).css('top', '' );
						});
					}
				});
			}

			$('#widgetLenta a').on('click', function() {
				dataLayer.push({ 'block' : 'lenta_widget', 'event' : 'lenta_link', 'link' : $(this).attr('href') });
			});

			_this.$elem.trigger('add-scrolling-trigger.the-in-scroll', [ {
				name: 'lenta_loadmore',
				down: true,
				sign: '<',
				position: 75,
				move: true
			} ]);

			_this.$elem.on('lenta_loadmore.the-in-scroll', function(e) {
				if ( _this.body.hasClass('m-widget-lenta') ) {
					if (_this.cashList) {
						_this.addList();
					} else if(_this.loading) {
						_this.waitList = true;
					} else {
						_this.updateCash();
					}
				}
			});

			ria_sock && ria_sock.on('bus_notify', function(data) {
                var charset = GLOBAL.charset.toLowerCase();

				if ( (data.subtype === 'new_article') && (data.lang === GLOBAL.lang) ) {
                    if (charset) {
                        if (charset === data.charset) {
                            _this.newArticle(data);
                        }
                    } else {
                        if (!data.charset) {
                            _this.newArticle(data);
                        }
                    }
				}
			});

			if($('.lenta__item-date.convert-date').length){
				ria.convertDate('.lenta .lenta__item-date');
				setInterval(function () {
					if(typeof ria === 'object'){
						ria.convertDate('.lenta .lenta__item-date');
					}
				},1000 * 60);
			}
		},
		updateCash : function() {
			if (!this.cashList) {
				var _this = this,
					url = _this.$elem.find('.lenta__item:last').data('next');
				if (url) {
					_this.loading = true;
					$.ajax({
						url: url,
						dataType: 'html'
					}).done(function(response) {
						_this.cashList = response;
						_this.loading = false;
						if (_this.waitList) {
							_this.addList();
							_this.waitList = false;
						}
					}).fail(function() {
						_this.loading = false;
					});
				} else {
					_this.$elem.off('lenta_loadmore.the-in-scroll');
				}
			}
		},
		addList : function() {
			if (this.cashList) {
				var _this = this,
					$dataContainer = _this.$elem.data('theinScroll').$container;
				$dataContainer.find('.lenta__item:last').removeAttr('data-next');
				$dataContainer.find('.lenta__list').append(_this.cashList);
				_this.cashList = false;
				_this.updateCash();
				if(typeof ria === 'object'){
					ria.convertDate();
				}
			}
		},
		newArticle: function(message) {
			var _this = this;

			var article_date = message.article_date,
				lenta_curdate = Date.now(),
				width = ria.getClientWidth();

			article_date = article_date.split(' ');
			article_date = Date.parse( article_date[0] + 'T' + article_date[1] + article_date[2].substr(0, 3) + ':' + article_date[2].substr(3, 2) );

			if (article_date > _this.maxdate && article_date < lenta_curdate) {
				_this.maxdate = article_date;

				if ( _this.body.hasClass('m-widget-lenta-mini') || $('#widgetLenta').hasClass('lenta-alert') ) {
					_this.renderHidden(message);
				} else if (width > 1189 && !_this.body.hasClass('m-widget-lenta') ) {
					_this.renderColumnAnimate(message);
				} else if (_this.body.hasClass('m-widget-lenta')) {
					_this.renderListAnimate(message);
				} else {
					_this.renderLineAnimate(message);
				}
				_this.renderMini(message);
			}

			if(typeof ria === 'object'){
				ria.convertDate();
			}
		},
		insertArticle:function(el, message){
			var url = message.article_url.lastIndexOf('http', 0) === 0 ? message.article_url : GLOBAL.www + message.article_url;
			var date = message.article_date.substring(0, 10) + 'T' + message.article_date.substring(11, 19) + message.article_date.substring(20, 25);
			var unixtime = new Date(date).getTime()/1000;
			var convertClass = $('.lenta__item-date.convert-date').length ? 'convert-date' : '';

			// console.log(date);
			el.html('<a href="'+ url +'" class="lenta__item-size"><span class="lenta__item-decription"><span class="lenta__item-date '+ convertClass +'" data-unixtime="' + unixtime +'"><span class="date">'+ message.article_date.substr(11, 5) +'</span></span><span class="lenta__item-text ' + convertClass + '">'+ message.article_title +'</span></span></a>');
			if (message.article_priority == 1) {
				el.addClass('lenta__item-warn');
				el.find('.lenta__item-text').append('<span class="lenta__item-icon m-breaking"><svg class="svg-icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="'+ ria.getIcon('flash')+ '"></use></svg></span>');
			}

			if(typeof ria === 'object'){
				ria.convertDate();
			}
		},
		renderColumnAnimate: function(message){
			var _this = this;
			var list = _this.$elem.find('.lenta__list');
			var el = $(document.createElement('div')).addClass('lenta__item');

			_this.insertArticle(el, message);

			_this.title.addClass('m-color');
			list.prepend(el).addClass('shift');

			setTimeout(function() {
				list.addClass('animate');
			},100);

			setTimeout(function() {
				list.removeClass('shift animate');
				el.addClass('m-color');
			},700);

			setTimeout(function() {
				_this.title.removeClass('m-color');
				el.removeClass('m-color');
			},1400);

		},
		renderLineAnimate: function(message){
			var _this = this;
			var el = $(document.createElement('div'));
			var firstEl = _this.$elem.find('.lenta__item').first();

			_this.$elem.find('.lenta__list').prepend(el);

			el.addClass('lenta__item empty show m-color');

			setTimeout(function() {
				firstEl.addClass('hide');
				_this.title.addClass('m-color');
			},  _this.delay);
			setTimeout(function() {
				el.removeClass('empty');
			},  _this.delay + 100);
			setTimeout(function() {
				_this.insertArticle(el, message);
				el.removeClass('show');
				firstEl.addClass('no-transition').removeClass('hide');
			}, _this.delay + 200);
			setTimeout(function() {
				_this.title.removeClass('m-color');
				el.removeClass('m-color');
				firstEl.removeClass('no-transition');
			}, _this.delay + 900);

		},
		renderListAnimate: function(message){
			var _this = this;
			var el = $(document.createElement('div'));
			_this.$elem.find('.lenta__list').prepend(el);

			el.addClass('lenta__item loading empty');
			_this.$elem.addClass('m-loading');

			setTimeout(function() {
				el.removeClass('empty');
			}, 100);
			setTimeout(function() {
				_this.insertArticle(el, message);
			}, _this.loader_delay);
			setTimeout(function() {
				el.removeClass('loading');
				_this.$elem.removeClass('m-loading');
			}, _this.loader_delay + 100);
		},
		renderMini: function(message) {
			$('.js__counter-lenta.m-zero').removeClass('m-zero');

			if (message.article_priority == 1) {
				$('.js__counter-lenta').addClass('m-alert');
			}

			var count = parseInt( $('.js__counter-lenta').text() );
			$('.js__counter-lenta').text( count >= 99 ? '99+' : ++count );
			if ( ria.lsGet('ria_lenta_mini') ) {
				ria.lsSet('ria_lenta_mini', count);
			}
		},
		renderHidden: function(message) {
			var _this = this;
			var el = $(document.createElement('div'));

			el.addClass('lenta__item');
			_this.insertArticle(el, message);
			_this.$elem.find('.lenta__list').prepend(el);
		},
		getClientWidth: function () {
			return Math.max( window.innerWidth || 0, ( document.getElementsByTagName( 'html' )[ 0 ] || {} ).clientWidth || 0)
		}
	};

	// if ($("#widgetLenta").length) {
	// 	lenta.init({
	// 		rtl:Boolean(GLOBAL.rtl)
	// 	});
	// }
	$.ajax({
		url: '/services/widget/lenta/',
		dataType: 'html',
		type: 'GET',
		success: function ( data ) {
			const $lenta = $(data);

			$('#widgetBottom .widgets__b-slide').append($lenta);

			if ($("#widgetLenta").length) {
				lenta.init({
					rtl:Boolean(GLOBAL.rtl)
				});
			}

			if(typeof ria_layout_manager ===  'object') {
				ria_layout_manager.init();
			}
		}
	})
});

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function d(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function h(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function p(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function v(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function S(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function D(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function k(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=D(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&k(e[s])!==k(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)m(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=x(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=x(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),d(n)&&(s=function(e,t){t[n]=k(e)}),t=0;t<e.length;t++)he[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):k(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return k(e)+(68<k(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(be(this,t,e),c.updateOffset(this,n),this):xe(this,t)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=k(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=k(t);else if(!d(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),c.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&0<=e&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return o<=0?a=De(r=e-1)+o:o>De(e)?(r=e+1,a=o-De(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=k(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=k(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=k(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=k(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,require("./locale/"+e),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=l(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null!==t){var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}return delete st[e],null}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!o(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;0<t;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||59<n[pe]?pe:n[ve]<0||59<n[ve]?ve:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=Se),g(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ht(e._a[me],s[me]),(e._dayOfYear>De(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&0<=e&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(g(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,d=l.length,h=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),h+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(he,a)&&he[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=d-h,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||lt(e._l),null===r||void 0===a&&""===r?v({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),S(r)?new M(dt(r)):(h(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),p(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?kt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):h(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(vt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ct(t)):u(n)?function(e){if(!e._d){var t=C(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):d(n)?t._d=new Date(n):c.createFromInputFallback(t),p(e)||(e._d=null),e))}function Ot(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Yt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:v()}),bt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:v()});function Pt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==k(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+U(~~(e/60),2)+n+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+k(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(S(e)||h(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:d(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=Et.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:k(a[ye])*n,h:k(a[ge])*n,m:k(a[pe])*n,s:k(a[ve])*n,ms:k(Ct(1e3*a[we]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:(a[1],1),r={y:jt(a[2],n),M:jt(a[3],n),w:jt(a[4],n),d:jt(a[5],n),h:jt(a[6],n),m:jt(a[7],n),s:jt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),$t(this,At(e="string"==typeof e?+e:e,t),s),this}}function $t(e,t,n,s){var i=t._milliseconds,r=Ct(t._days),a=Ct(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,xe(e,"Month")+a*n),r&&be(e,"Date",xe(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=k(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(k(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=k(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=k(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=k(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=M.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var n=e||Tt(),s=Nt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(x(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},ln.clone=function(){return new M(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:D(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return g(this).overflow},ln.isAfter=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},ln.isSame=function(e,t){var n,s=S(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return p(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return _({},g(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=(n=e,s=this.localeData(),"string"==typeof n?s.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?t:t-7)}return this.day()||7;var n,s},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Gt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?$t(this,At(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:Gt(this)},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=n("dates accessor is deprecated. Use date instead.",nn),ln.months=n("months accessor is deprecated. Use month instead",Fe),ln.years=n("years accessor is deprecated. Use year instead",Oe),ln.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Yt(e))._a){var t=e._isUTC?y(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=y().set(s,t);return i[n](r,e)}function fn(e,t,n){if(d(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){"boolean"==typeof e?d(t)&&(n=t,t=void 0):(t=e,e=!1,d(n=t)&&(n=t,t=void 0)),t=t||"";var i,r=lt(),a=e?r._week.dow:0;if(null!=n)return cn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?o(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:o(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===k(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ot),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(0<e)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=D((e=D(n/60))/60),n%=60,e%=60;var r=D(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),o=a=0),u.milliseconds=r%1e3,e=D(r/1e3),u.seconds=e%60,t=D(e/60),u.minutes=t%60,n=D(t/60),u.hours=n%24,o+=i=D(pn(a+=D(n/24))),a-=gn(vn(i)),s=D(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return D(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=0<+t,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(k(e))}),c.version="2.22.2",e=Tt,c.fn=ln,c.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return Tt(1e3*e)},c.months=function(e,t){return fn(e,t,"months")},c.isDate=h,c.locale=ot,c.invalid=v,c.duration=At,c.isMoment=S,c.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},c.parseZone=function(){return Tt.apply(null,arguments).parseZone()},c.localeData=lt,c.isDuration=Rt,c.monthsShort=function(e,t){return fn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},c.defineLocale=ut,c.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},c.locales=function(){return s(st)},c.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},c.normalizeUnits=R,c.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=ln,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},c});
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		//noinspection JSUnresolvedFunction
		define(factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory();
	} else {
		// Browser globals
		root.pickmeup = factory();
	}
}(this, function () {
	/**
	 * Functions prefixed with `dom_` are simple convenient wrappers for various operations with DOM
	 */

	/**
	 * @param {(Element|NodeList)} element
	 * @param {Function}           callback
	 * @param {*}                  [args=[]]
	 */
	function dom_for_collection (element, callback, args) {
		args = args || [];
		if (element instanceof Element) {
			callback.apply(callback, [element].concat(args));
		} else {
			var elements, i;
			elements = element.length;
			for (i = 0; i < elements; ++i) {
				callback.apply(callback, [element[i]].concat(args));
			}
		}
	}

	/**
	 * @param {(Element|Element[]|NodeList)} element
	 */
	function dom_remove (element) {
		dom_for_collection(element, function (element) {
			element.parentElement.removeChild(element);
		});
	}

	/**
	 * @param {Element} element
	 * @param {string}  selector
	 *
	 * @returns {Element}
	 */
	function dom_closest_parent (element, selector) {
		var parent = element;
		do {
			parent = parent.parentElement;
		} while (parent && !dom_matches(parent, selector));
		return parent;
	}

	/**
	 * @param {Element} element
	 * @param {string}  selector
	 *
	 * @returns {boolean}
	 */
	function dom_matches (element, selector) {
		return (element.matches || element.webkitMatchesSelector || element.msMatchesSelector).call(element, selector);
	}

	/**
	 * @param {Element} element
	 * @param {string}  class_name
	 *
	 * @returns {boolean}
	 */
	function dom_has_class (element, class_name) {
		return element && element.classList.contains(class_name);
	}

	/**
	 * @param {Element} element
	 * @param {string}  class_name
	 */
	function dom_add_class (element, class_name) {
		element.classList.add(class_name);
	}

	/**
	 * @param {Element} element
	 * @param {string}  class_name
	 */
	function dom_remove_class (element, class_name) {
		element.classList.remove(class_name);
	}

	/**
	 * @param {Element} element
	 * @param {string}  selector
	 *
	 * @returns {Element}
	 */
	function dom_query (element, selector) {
		return element.querySelector(selector);
	}

	/**
	 * @param {Element} element
	 * @param {string}  selector
	 *
	 * @returns {Element[]}
	 */
	function dom_query_all (element, selector) {
		return Array.prototype.slice.call(element.querySelectorAll(selector));
	}

	/**
	 * @param {Element}          target
	 * @param {(Element|Window)} element
	 * @param {string}           event
	 * @param {Function}         callback
	 */
	function dom_on (target, element, event, callback) {
		if (event.indexOf(' ') !== -1) {
			var events        = event.split(' '),
				events_number = events.length,
				i;
			for (i = 0; i < events_number; ++i) {
				dom_on(target, element, events[i], callback)
			}
		} else {
			target.__pickmeup.events.push([element, event, callback]);
			element.addEventListener(event, callback);
		}
	}

	/**
	 * @param {Element}          target
	 * @param {(Element|Window)} [element=undefined]
	 * @param {string}           [event='']
	 * @param {Function}         [callback=undefined]
	 */
	function dom_off (target, element, event, callback) {
		var events,
			events_number,
			i;
		if (event && event.indexOf(' ') !== -1) {
			events        = event.split(' ');
			events_number = events.length;
			for (i = 0; i < events_number; ++i) {
				dom_off(target, element, events[i], callback)
			}
		} else {
			events        = target.__pickmeup.events;
			events_number = events.length;
			for (i = 0; i < events_number; ++i) {
				if (
					(element && element != events[i][0]) ||
					(event && event != events[i][1]) ||
					(callback && callback != events[i][2])
				) {
					continue;
				}
				events[i][0].removeEventListener(events[i][1], events[i][2]);
			}
		}
	}

	/**
	 * @param {Element} element
	 *
	 * @returns {{top: number, left: number}}
	 */
	function dom_offset (element) {
		var rect = element.getBoundingClientRect();
		return {
			top  : rect.top + window.pageYOffset - document.documentElement.clientTop,
			left : rect.left + window.pageXOffset - document.documentElement.clientLeft
		};
	}

	/**
	 * @param {Element} element
	 * @param {string}  event
	 * @param {Object}  [detail=undefined]
	 *
	 * @return {boolean}
	 */
	function dom_dispatch_event (element, event, detail) {
		var e = document.createEvent('Event');
		if (detail) {
			e.detail = detail;
		}
		e.initEvent('pickmeup-' + event, false, true);
		return element.dispatchEvent(e);
	}

	/**
	 * Functions prefixed with `date_` are simple convenient wrappers for various operations with dates
	 */

	/**
	 * @param {Date} date
	 *
	 * @returns {number}
	 */
	function date_get_max_days (date) {
		var tmpDate = new Date(date),
			d       = 28,
			m       = tmpDate.getMonth();
		while (tmpDate.getMonth() == m) {
			++d;
			tmpDate.setDate(d);
		}
		return d - 1;
	}

	/**
	 * @param {Date}   date
	 * @param {number} number_of_days
	 */
	function date_add_days (date, number_of_days) {
		date.setDate(date.getDate() + number_of_days);
	}

	/**
	 * @param {Date}   date
	 * @param {number} number_of_months
	 */
	function date_add_months (date, number_of_months) {
		var day = date.getDate();
		date.setDate(1);
		date.setMonth(date.getMonth() + number_of_months);
		date.setDate(Math.min(day, date_get_max_days(date)));
	}

	/**
	 * @param {Date}   date
	 * @param {number} number_of_years
	 */
	function date_add_years (date, number_of_years) {
		var day = date.getDate();
		date.setDate(1);
		date.setFullYear(date.getFullYear() + number_of_years);
		date.setDate(Math.min(day, date_get_max_days(date)));
	}

	/**
	 * @param {Date} date
	 *
	 * @returns {number}
	 */
	function date_get_day_of_the_year (date) {
		var now  = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
		var then = new Date(date.getFullYear(), 0, 0, 0, 0, 0);
		var time = now - then;
		return Math.floor(time / (24 * 60 * 60 * 1000));
	}

	/**
	 * @param {Element} target
	 */
	function fill (target) {
		var root_element = target.__pickmeup.element,
			options      = target.__pickmeup.options,
			current_cal  = Math.floor(options.calendars / 2),
			actual_date  = options.date,
			current_date = options.current,
			min_date     = options.min ? new Date(options.min) : null,
			max_date     = options.max ? new Date(options.max) : null,
			local_date,
			header,
			instance,
			shown_date_from,
			shown_date_to,
			tmp_date;
		if (min_date) {
			min_date.setDate(1);
			date_add_months(min_date, 1);
			date_add_days(min_date, -1);
		}
		if (max_date) {
			max_date.setDate(1);
			date_add_months(max_date, 1);
			date_add_days(max_date, -1);
		}
		/**
		 * Remove old content except header navigation
		 */
		dom_remove(dom_query_all(root_element, '.pmu-instance > :not(nav)'));
		/**
		 * If several calendars should be shown
		 */
		for (var i = 0; i < options.calendars; i++) {
			local_date = new Date(current_date);
			reset_time(local_date);
			instance = dom_query_all(root_element, '.pmu-instance')[i];
			// if (dom_has_class(root_element, 'pmu-view-years')) {
			// 	date_add_years(local_date, (i - current_cal) * 12);
			// 	header = (local_date.getFullYear() - 6) + ' - ' + (local_date.getFullYear() + 5);
			// } else if (dom_has_class(root_element, 'pmu-view-months')) {
			// 	date_add_years(local_date, i - current_cal);
			// 	header = local_date.getFullYear();
			// } else if (dom_has_class(root_element, 'pmu-view-days')) {
			date_add_months(local_date, i - current_cal);
			header = format_date(local_date, options.title_format, options.locales[options.locale]);
			header2 = format_date(local_date, options.title_format2, options.locales[options.locale]);
			// }
			if (!shown_date_to) {
				if (max_date) {
					// If all dates in this month (months in year or years in years block) are after max option - set next month as current
					// in order not to show calendar with all disabled dates
					tmp_date = new Date(local_date);
					if (options.select_day) {
						date_add_months(tmp_date, options.calendars - 1);
					} else if (options.select_month) {
						date_add_years(tmp_date, options.calendars - 1);
					} else {
						date_add_years(tmp_date, (options.calendars - 1) * 12);
					}
					if (tmp_date > max_date) {
						--i;
						date_add_months(current_date, -1);
						shown_date_to = undefined;
						continue;
					}
				}
			}
			shown_date_to = new Date(local_date);
			if (!shown_date_from) {
				shown_date_from = new Date(local_date);
				// If all dates in this month are before min option - set next month as current in order not to show calendar with all disabled dates
				shown_date_from.setDate(1);
				date_add_months(shown_date_from, 1);
				date_add_days(shown_date_from, -1);
				if (min_date && min_date > shown_date_from) {
					--i;
					date_add_months(current_date, 1);
					shown_date_from = undefined;
					continue;
				}
			}
			dom_query(instance, '.pmu-month').innerHTML = header + ' <span>' + header2 + '</span>';
			var is_year_selected                          = function (year) {
				return (
						options.mode == 'range' &&
						year >= new Date(actual_date[0]).getFullYear() &&
						year <= new Date(actual_date[1]).getFullYear()
					) ||
					(
						options.mode == 'multiple' &&
						actual_date.reduce(function (prev, current) {
							prev.push(new Date(current).getFullYear());
							return prev;
						}, []).indexOf(year) !== -1
					) ||
					new Date(actual_date).getFullYear() == year;
			};
			var is_months_selected                        = function (year, month) {
				var first_year  = new Date(actual_date[0]).getFullYear(),
					lastyear    = new Date(actual_date[1]).getFullYear(),
					first_month = new Date(actual_date[0]).getMonth(),
					last_month  = new Date(actual_date[1]).getMonth();
				return (
					(
						options.mode == 'range' &&
						(
							(year > first_year && year < lastyear) ||
							(year > first_year && year == lastyear && month <= last_month) ||
							(year == first_year && year < lastyear && month >= first_month) ||
							(year == first_year && year == lastyear && month >= first_month && month <= last_month)
						)
					) ||
					(
						options.mode == 'multiple' &&
						actual_date.reduce(function (prev, current) {
							current = new Date(current);
							prev.push(current.getFullYear() + '-' + current.getMonth());
							return prev;
						}, []).indexOf(year + '-' + month) !== -1
					) ||
					(
						new Date(actual_date).getFullYear() == year &&
						new Date(actual_date).getMonth() == month
					)
				);
			};
			// (function () {
			// 	var years_elements  = [],
			// 		start_from_year = local_date.getFullYear() - 6,
			// 		min_year        = new Date(options.min).getFullYear(),
			// 		max_year        = new Date(options.max).getFullYear(),
			// 		year,
			// 		year_element,
			// 		j;
			// 	for (j = 0; j < 12; ++j) {
			// 		year                         = start_from_year + j;
			// 		year_element                 = document.createElement('div');
			// 		year_element.textContent     = year;
			// 		year_element.__pickmeup_year = year;
			// 		if (
			// 			(options.min && year < min_year) ||
			// 			(options.max && year > max_year)
			// 		) {
			// 			dom_add_class(year_element, 'pmu-disabled');
			// 		} else if (is_year_selected(year)) {
			// 			dom_add_class(year_element, 'pmu-selected');
			// 		}
			// 		years_elements.push(year_element);
			// 	}
			// 	instance.appendChild(options.instance_content_template(years_elements, 'pmu-years'));
			// })();
			// (function () {
			// 	var months_elements = [],
			// 		current_year    = local_date.getFullYear(),
			// 		min_year        = new Date(options.min).getFullYear(),
			// 		min_month       = new Date(options.min).getMonth(),
			// 		max_year        = new Date(options.max).getFullYear(),
			// 		max_month       = new Date(options.max).getMonth(),
			// 		month,
			// 		month_element;
			// 	for (month = 0; month < 12; ++month) {
			// 		month_element                  = document.createElement('div');
			// 		month_element.textContent      = options.locales[options.locale].monthsShort[month];
			// 		month_element.__pickmeup_month = month;
			// 		month_element.__pickmeup_year  = current_year;
			// 		if (
			// 			(
			// 				options.min &&
			// 				(
			// 					current_year < min_year ||
			// 					(
			// 						month < min_month && current_year == min_year
			// 					)
			// 				)
			// 			) ||
			// 			(
			// 				options.max &&
			// 				(
			// 					current_year > max_year ||
			// 					(
			// 						month > max_month && current_year >= max_year
			// 					)
			// 				)
			// 			)
			// 		) {
			// 			dom_add_class(month_element, 'pmu-disabled');
			// 		} else if (is_months_selected(current_year, month)) {
			// 			dom_add_class(month_element, 'pmu-selected');
			// 		}
			// 		months_elements.push(month_element);
			// 	}
			// 	instance.appendChild(options.instance_content_template(months_elements, 'pmu-months'));
			// })();
			(function () {
				var days_elements = [],
					current_month = local_date.getMonth(),
					today         = reset_time(new Date).valueOf(),
					day,
					day_element,
					from_user,
					val,
					disabled,
					selected;
				// Correct first day in calendar taking into account the first day of the week (Sunday or Monday)
				(function () {
					local_date.setDate(1);
					var day = (local_date.getDay() - options.first_day) % 7;
					date_add_days(local_date, -(day + (day < 0 ? 7 : 0)));
				})();
				for (day = 0; day < 42; ++day) {
					day_element                  = document.createElement('div');
					day_element.textContent      = local_date.getDate();
					day_element.__pickmeup_day   = local_date.getDate();
					day_element.__pickmeup_month = local_date.getMonth();
					day_element.__pickmeup_year  = local_date.getFullYear();
					if (current_month != local_date.getMonth()) {
						dom_add_class(day_element, 'pmu-not-in-month');
					}
					if (local_date.getDay() == 0) {
						dom_add_class(day_element, 'pmu-sunday');
					} else if (local_date.getDay() == 6) {
						dom_add_class(day_element, 'pmu-saturday');
					}
					from_user = options.render(new Date(local_date)) || {};
					// We only reset time for this value in order to deal with Summer/Winter time, but changing `local_date` itself will break days incrementing
					val       = reset_time(new Date(local_date)).valueOf();
					disabled  =
						(options.min && options.min > local_date) ||
						(options.max && options.max < local_date);
					selected  =
						options.date.valueOf() == val ||
						(
							options.date instanceof Array &&
							options.date.reduce(function (prev, date) {
								return prev || val === date.valueOf();
							}, false)
						) ||
						(
							options.mode == 'range' && val >= options.date[0] && val <= options.date[1]
						);
					if (from_user.disabled || (!('disabled' in from_user) && disabled)) {
						dom_add_class(day_element, 'pmu-disabled');
					} else if (from_user.selected || (!('selected' in from_user) && selected)) {
						dom_add_class(day_element, 'pmu-selected');
						if (reset_time(new Date(local_date)).valueOf() == reset_time(new Date(options.date[0])).valueOf()) dom_add_class(day_element, 'pmu-selected-first');
						if (reset_time(new Date(local_date)).valueOf() == reset_time(new Date(options.date[1])).valueOf()) dom_add_class(day_element, 'pmu-selected-last');
					}
					if (val == today) {
						dom_add_class(day_element, 'pmu-today');
					}
					if (from_user.class_name) {
						from_user.class_name.split(' ').forEach(
							dom_add_class.bind(day_element, day_element)
						);
					}
					days_elements.push(day_element);
					// Move to the next day
					date_add_days(local_date, 1);
				}
				instance.appendChild(options.instance_content_template(days_elements, 'pmu-days'));
			})();
		}
		shown_date_from.setDate(1);
		shown_date_to.setDate(1);
		date_add_months(shown_date_to, 1);
		date_add_days(shown_date_to, -1);
		var prev = dom_query(root_element, '.pmu-prev'),
			next = dom_query(root_element, '.pmu-next');
		if (prev) {
			prev.style.visibility = options.min && options.min >= shown_date_from ? 'hidden' : 'visible';
		}
		if (next) {
			next.style.visibility = options.max && options.max <= shown_date_to ? 'hidden' : 'visible';
		}
		dom_dispatch_event(target, 'fill');
	}

	function parse_date (date, options) {
		var format    = options.format,
			separator = options.separator,
			locale    = options.locales[options.locale],
			i;
		if (date instanceof Date || date instanceof Number) {
			return reset_time(new Date(date));
		} else if (!date) {
			return reset_time(new Date);
		} else if (date instanceof Array) {
			date = date.slice();
			for (i = 0; i < date.length; ++i) {
				date[i] = parse_date(date[i], options);
			}
			return date;
		}
		var splitted_date = date.split(separator);
		if (splitted_date.length > 1) {
			splitted_date.forEach(function (element, index, array) {
				array[index] = parse_date(element.trim(), options);
			});
			return splitted_date;
		}
		separator   = [].concat(locale.daysShort, locale.daysMin, locale.days, locale.monthsShort, locale.months);
		separator   = separator.map(function (item) {
			return '(' + item + ')';
		});
		separator   = new RegExp('[^0-9a-zA-Z' + separator.join('') + ']+');
		var parts   = date.split(separator),
			against = format.split(separator),
			d,
			m,
			y,
			h,
			min,
			now     = new Date();
		for (i = 0; i < parts.length; i++) {
			switch (against[i]) {
				case 'b':
					m = locale.monthsShort.indexOf(parts[i]);
					break;
				case 'B':
					m = locale.months.indexOf(parts[i]);
					break;
				case 'd':
				case 'e':
					d = parseInt(parts[i], 10);
					break;
				case 'm':
					m = parseInt(parts[i], 10) - 1;
					break;
				case 'Y':
				case 'y':
					y = parseInt(parts[i], 10);
					y += y > 100 ? 0 : (y < 29 ? 2000 : 1900);
					break;
				case 'H':
				case 'I':
				case 'k':
				case 'l':
					h = parseInt(parts[i], 10);
					break;
				case 'P':
				case 'p':
					if (/pm/i.test(parts[i]) && h < 12) {
						h += 12;
					} else if (/am/i.test(parts[i]) && h >= 12) {
						h -= 12;
					}
					break;
				case 'M':
					min = parseInt(parts[i], 10);
					break;
			}
		}
		var parsed_date = new Date(
			y === undefined ? now.getFullYear() : y,
			m === undefined ? now.getMonth() : m,
			d === undefined ? now.getDate() : d,
			h === undefined ? now.getHours() : h,
			min === undefined ? now.getMinutes() : min,
			0
		);
		if (isNaN(parsed_date * 1)) {
			parsed_date = new Date;
		}
		return reset_time(parsed_date);
	}

	function reset_time (date) {
		date.setHours(0, 0, 0, 0);
		return date;
	}

	function format_date (date, format, locale) {
		var m  = date.getMonth();
		var d  = date.getDate();
		var y  = date.getFullYear();
		var w  = date.getDay();
		var hr = date.getHours();
		var pm = (hr >= 12);
		var ir = (pm) ? (hr - 12) : hr;
		var dy = date_get_day_of_the_year(date);
		if (ir == 0) {
			ir = 12;
		}
		var min   = date.getMinutes();
		var sec   = date.getSeconds();
		var parts = format.split(''), part;
		for (var i = 0; i < parts.length; i++) {
			part = parts[i];
			switch (part) {
				case 'a':
					part = locale.daysShort[w];
					break;
				case 'A':
					part = locale.days[w];
					break;
				case 'b':
					part = locale.monthsShort[m];
					break;
				case 'B':
					part = locale.months[m];
					break;
				case 'C':
					part = 1 + Math.floor(y / 100);
					break;
				case 'd':
					part = (d < 10) ? ("0" + d) : d;
					break;
				case 'e':
					part = d;
					break;
				case 'H':
					part = (hr < 10) ? ("0" + hr) : hr;
					break;
				case 'I':
					part = (ir < 10) ? ("0" + ir) : ir;
					break;
				case 'j':
					part = (dy < 100) ? ((dy < 10) ? ("00" + dy) : ("0" + dy)) : dy;
					break;
				case 'k':
					part = hr;
					break;
				case 'l':
					part = ir;
					break;
				case 'm':
					part = (m < 9) ? ("0" + (1 + m)) : (1 + m);
					break;
				case 'M':
					part = (min < 10) ? ("0" + min) : min;
					break;
				case 'p':
				case 'P':
					part = pm ? "PM" : "AM";
					break;
				case 's':
					part = Math.floor(date.getTime() / 1000);
					break;
				case 'S':
					part = (sec < 10) ? ("0" + sec) : sec;
					break;
				case 'u':
					part = w + 1;
					break;
				case 'w':
					part = w;
					break;
				case 'y':
					part = ('' + y).substr(2, 2);
					break;
				case 'Y':
					part = y;
					break;
			}
			parts[i] = part;
		}
		return parts.join('');
	}

	/**
	 * @param {Element} target
	 * @param {Date}    new_date
	 */
	function update_date (target, new_date) {
		var options = target.__pickmeup.options,
			i;
		reset_time(new_date);
		(function () {
			var new_value;
			switch (options.mode) {
				case 'multiple':
					new_value = new_date.valueOf();
					for (i = 0; i < options.date.length; ++i) {
						if (options.date[i].valueOf() === new_value) {
							options.date.splice(i, 1);
							return;
						}
					}
					options.date.push(new_date);
					break;
				case 'range':
					if (!options.lastSel) {
						options.date[0] = new_date;
					}
					if (new_date <= options.date[0]) {
						options.date[1] = options.date[0];
						options.date[0] = new_date;
					} else {
						options.date[1] = new_date;
					}
					options.lastSel = !options.lastSel;
					break;
				default:
					options.date = new_date.valueOf();
					break;
			}
		})();
		var prepared_date = prepare_date(options);
		if (dom_matches(target, 'input')) {
			//noinspection JSUndefinedPropertyAssignment
			target.value = options.mode == 'single' ? prepared_date.formatted_date : prepared_date.formatted_date.join(options.separator);
		}
		dom_dispatch_event(target, 'change', prepared_date);
		if (
			!options.flat &&
			options.hide_on_select &&
			(
				options.mode != 'range' || !options.lastSel
			)
		) {
			options.bound.hide();
		}
	}

	/**
	 * @param {Element} target
	 * @param {Event}   event
	 *
	 * @returns {boolean}
	 */
	function click (target, event) {
		//noinspection JSValidateTypes
		/**
		 * @type {Element}
		 */
		var element = event.target;
		if (!dom_has_class(element, 'pmu-button')) {
			element = dom_closest_parent(element, '.pmu-button');
		}
		if (!dom_has_class(element, 'pmu-button') || dom_has_class(element, 'pmu-disabled')) {
			return false;
		}
		event.preventDefault();
		event.stopPropagation();
		var options        = target.__pickmeup.options,
			instance       = dom_closest_parent(element, '.pmu-instance'),
			root           = instance.parentElement,
			instance_index = dom_query_all(root, '.pmu-instance').indexOf(instance);
		if (dom_matches(element.parentElement, 'nav')) {
			if (dom_has_class(element, 'pmu-month')) {
				date_add_months(options.current, instance_index - Math.floor(options.calendars / 2));
				if (dom_has_class(root, 'pmu-view-years')) {
					// Shift back to current date, otherwise with min value specified may jump on few (tens) years forward
					if (options.mode != 'single') {
						options.current = new Date(options.date[options.date.length - 1]);
					} else {
						options.current = new Date(options.date);
					}
					if (options.select_day) {
						dom_remove_class(root, 'pmu-view-years');
						dom_add_class(root, 'pmu-view-days');
					} else if (options.select_month) {
						dom_remove_class(root, 'pmu-view-years');
						dom_add_class(root, 'pmu-view-months');
					}
				} else if (dom_has_class(root, 'pmu-view-months')) {
					if (options.select_year) {
						dom_remove_class(root, 'pmu-view-months');
						dom_add_class(root, 'pmu-view-years');
					} else if (options.select_day) {
						dom_remove_class(root, 'pmu-view-months');
						dom_add_class(root, 'pmu-view-days');
					}
				} else if (dom_has_class(root, 'pmu-view-days')) {
					if (options.select_month) {
						dom_remove_class(root, 'pmu-view-days');
						dom_add_class(root, 'pmu-view-months');
					} else if (options.select_year) {
						dom_remove_class(root, 'pmu-view-days');
						dom_add_class(root, 'pmu-view-years');
					}
				}
			} else {
				if (dom_has_class(element, 'pmu-prev')) {
					options.bound.prev(false);
				} else {
					options.bound.next(false);
				}
			}
		} else {
			if (dom_has_class(root, 'pmu-view-years')) {
				options.current.setFullYear(element.__pickmeup_year);
				if (options.select_month) {
					dom_remove_class(root, 'pmu-view-years');
					dom_add_class(root, 'pmu-view-months');
				} else if (options.select_day) {
					dom_remove_class(root, 'pmu-view-years');
					dom_add_class(root, 'pmu-view-days');
				} else {
					options.bound.update_date(options.current);
				}
			} else if (dom_has_class(root, 'pmu-view-months')) {
				options.current.setMonth(element.__pickmeup_month);
				options.current.setFullYear(element.__pickmeup_year);
				if (options.select_day) {
					dom_remove_class(root, 'pmu-view-months');
					dom_add_class(root, 'pmu-view-days');
				} else {
					options.bound.update_date(options.current);
				}
				// Move current month to the first place (needed for multiple calendars)
				date_add_months(options.current, Math.floor(options.calendars / 2) - instance_index);
			} else {
				var new_date = new Date(options.current);
				new_date.setYear(element.__pickmeup_year);
				new_date.setMonth(element.__pickmeup_month);
				new_date.setDate(element.__pickmeup_day);
				options.bound.update_date(new_date);
			}
		}
		options.bound.fill();
		return true;
	}

	function prepare_date (options) {
		var result;
		if (options.mode == 'single') {
			result = new Date(options.date);
			return {
				formatted_date : format_date(result, options.format, options.locales[options.locale]),
				date           : result
			};
		} else {
			result = {
				formatted_date : [],
				date           : []
			};
			options.date.forEach(function (val) {
				var date = new Date(val);
				result.formatted_date.push(format_date(date, options.format, options.locales[options.locale]));
				result.date.push(date);
			});
			return result;
		}
	}

	/**
	 * @param {Element} target
	 * @param {boolean} [force=false]
	 */
	function show (target, force) {
		var root_element = target.__pickmeup.element,
			value;
		if (force || dom_has_class(root_element, 'pmu-hidden')) {
			var options  = target.__pickmeup.options,
				position = dom_offset(target),
				viewport = {
					l : window.pageXOffset,
					t : window.pageYOffset,
					w : document.documentElement.clientWidth,
					h : document.documentElement.clientHeight
				},
				top      = position.top,
				left     = position.left;
			options.bound.fill();
			if (dom_matches(target, 'input')) {
				value = target.value;
				if (value) {
					options.bound.set_date(value);
				}
				dom_on(
					target,
					target,
					'keydown',
					function (e) {
						if (e.which == 9) {
							options.bound.hide();
						}
					}
				);
				options.lastSel = false;
			}
			if (!dom_dispatch_event(target, 'show')) {
				return;
			}
			if (!options.flat) {
				dom_remove_class(root_element, 'pmu-hidden');
				if (options.position instanceof Function) {
					position = options.position.call(target);
					left     = position.left;
					top      = position.top;
				} else {
					switch (options.position) {
						case 'top':
							top -= root_element.offsetHeight;
							break;
						case 'left':
							left -= root_element.offsetWidth;
							break;
						case 'right':
							left += target.offsetWidth;
							break;
						case 'bottom':
							top += target.offsetHeight;
							break;
					}
					if (top + root_element.offsetHeight > viewport.t + viewport.h) {
						top = position.top - root_element.offsetHeight;
					}
					if (top < viewport.t) {
						top = position.top + target.offsetHeight;
					}
					if (left + root_element.offsetWidth > viewport.l + viewport.w) {
						left = position.left - root_element.offsetWidth;
					}
					if (left < viewport.l) {
						left = position.left + target.offsetWidth;
					}
					left += 'px';
					top += 'px';
				}
				root_element.style.left = left;
				root_element.style.top  = top;
				setTimeout(function () {
					dom_on(target, document.documentElement, 'click', options.bound.hide);
					dom_on(target, window, 'resize', options.bound.forced_show);
				});
			}
		}
	}

	/**
	 * @param {Element} target
	 * @param {Event}   event
	 */
	function hide (target, event) {
		var root_element = target.__pickmeup.element,
			options      = target.__pickmeup.options;
		//noinspection JSBitwiseOperatorUsage,JSCheckFunctionSignatures
		if (
			!event || !event.target ||										//Called directly
			(
				event.target != target &&									//Clicked not on element itself
				!(root_element.compareDocumentPosition(event.target) & 16)	//And not on its children
			)
		) {
			if (dom_dispatch_event(target, 'hide')) {
				dom_add_class(root_element, 'pmu-hidden');
				dom_off(target, document.documentElement, 'click', options.bound.hide);
				dom_off(target, window, 'resize', options.bound.forced_show);
				options.lastSel = false;
			}
		}
	}

	/**
	 * @param {Element} target
	 */
	function update (target) {
		var options = target.__pickmeup.options;
		dom_off(target, document.documentElement, 'click', options.bound.hide);
		dom_off(target, window, 'resize', options.bound.forced_show);
		options.bound.forced_show();
	}

	/**
	 * @param {Element} target
	 */
	function clear (target) {
		var options = target.__pickmeup.options;
		if (options.mode != 'single') {
			options.date    = [];
			options.lastSel = false;
			options.bound.fill();
		}
	}

	/**
	 * @param {Element} target
	 * @param {boolean} [fill=true]
	 */
	function prev (target, fill) {
		if (typeof fill == 'undefined') {
			fill = true;
		}
		var root_element = target.__pickmeup.element;
		var options      = target.__pickmeup.options;
		if (dom_has_class(root_element, 'pmu-view-years')) {
			date_add_years(options.current, -12);
		} else if (dom_has_class(root_element, 'pmu-view-months')) {
			date_add_years(options.current, -1);
		} else if (dom_has_class(root_element, 'pmu-view-days')) {
			date_add_months(options.current, -1);
		}
		if (fill) {
			options.bound.fill();
		}
	}

	/**
	 * @param {Element} target
	 * @param {boolean} [fill=true]
	 */
	function next (target, fill) {
		if (typeof fill == 'undefined') {
			fill = true;
		}
		var root_element = target.__pickmeup.element;
		var options      = target.__pickmeup.options;
		if (dom_has_class(root_element, 'pmu-view-years')) {
			date_add_years(options.current, 12);
		} else if (dom_has_class(root_element, 'pmu-view-months')) {
			date_add_years(options.current, 1);
		} else if (dom_has_class(root_element, 'pmu-view-days')) {
			date_add_months(options.current, 1);
		}
		if (fill) {
			options.bound.fill();
		}
	}

	/**
	 * @param {Element} target
	 * @param {boolean} [formatted=true]
	 */
	function get_date (target, formatted) {
		var options       = target.__pickmeup.options,
			prepared_date = prepare_date(options);
		if (typeof formatted === 'string') {
			var date = prepared_date.date;
			if (date instanceof Date) {
				return format_date(date, formatted, options.locales[options.locale])
			} else {
				return date.map(function (value) {
					return format_date(value, formatted, options.locales[options.locale]);
				});
			}
		} else {
			return prepared_date[formatted ? 'formatted_date' : 'date'];
		}
	}

	/**
	 * @param {Element}                                       target
	 * @param {(Date|Date[]|number|number[]|string|string[])} date
	 * @param {Date}                                          [current=undefined]
	 */
	function set_date (target, date, current) {
		var options = target.__pickmeup.options,
			i;
		if (!(date instanceof Array) || date.length > 0) {
			options.date = parse_date(date, options);
			if (options.mode != 'single') {
				if (options.date instanceof Array) {
					options.date[0] = options.date[0] || parse_date(new Date, options);
					if (options.mode == 'range') {
						options.date[1] = options.date[1] || parse_date(options.date[0], options);
					}
				} else {
					options.date = [options.date];
					if (options.mode == 'range') {
						options.date.push(parse_date(options.date[0], options));
					}
				}
				for (i = 0; i < options.date.length; ++i) {
					options.date[i] = correct_date_outside_of_limit(options.date[i], options.min, options.max);
				}
			} else {
				if (options.date instanceof Array) {
					options.date = options.date[0];
				}
				options.date = correct_date_outside_of_limit(options.date, options.min, options.max);
			}
		} else {
			options.date = [];
		}
		if (!options.select_day) {
			if (options.date instanceof Array) {
				for (i = 0; i < options.date.length; ++i) {
					options.date[i].setDate(1);
				}
			} else {
				options.date.setDate(1);
			}
		}
		// Remove duplicates
		if (options.mode == 'multiple') {
			for (i = 0; i < options.date.length; ++i) {
				if (options.date.indexOf(options.date[i]) !== i) {
					options.date.splice(i, 1);
					--i;
				}
			}
		}
		if (current) {
			options.current = parse_date(current, options);
		} else {
			current         = options.mode === 'single' ? options.date : options.date[options.date.length - 1];
			options.current = current ? new Date(current) : new Date;
		}
		options.current.setDate(1);
		options.bound.fill();
		if (dom_matches(target, 'input') && options.default_date !== false) {
			var prepared_date = prepare_date(options),
				current_value = target.value,
				new_value     = options.mode == 'single' ? prepared_date.formatted_date : prepared_date.formatted_date.join(options.separator);
			if (!current_value) {
				dom_dispatch_event(target, 'change', prepared_date);
			}
			if (current_value != new_value) {
				//noinspection JSUndefinedPropertyAssignment
				target.value = new_value;
			}
		}
	}

	/**
	 * @param {Element} target
	 */
	function destroy (target) {
		var root_element = target.__pickmeup.element;
		dom_off(target);
		dom_remove(root_element);
		delete target.__pickmeup;
	}

	function correct_date_outside_of_limit (date, min, max) {
		if (min && min > date) {
			return new Date(min);
		} else if (max && max < date) {
			return new Date(max);
		}
		return date;
	}

	/**
	 * @param {(Element|string)} target
	 * @param {Object}           [initial_options={}]
	 *
	 * @return {(Object|null)} Object with useful methods on success, `null` otherwise
	 */
	function pickmeup_init (target, initial_options) {
		if (typeof target == 'string') {
			target = document.querySelector(target);
		}
		if (!target) {
			return null;
		}
		if (!target.__pickmeup) {
			var i,
				option,
				options     = {};
			initial_options = initial_options || {};
			for (i in pickmeup_init.defaults) {
				options[i] = i in initial_options ? initial_options[i] : pickmeup_init.defaults[i];
			}
			for (i in options) {
				option = target.getAttribute('data-pmu-' + i);
				if (option !== null) {
					options[i] = option;
				}
			}
			// 4 conditional statements in order to account all cases
			if (options.view == 'days' && !options.select_day) {
				options.view = 'months';
			}
			if (options.view == 'months' && !options.select_month) {
				options.view = 'years';
			}
			if (options.view == 'years' && !options.select_year) {
				options.view = 'days';
			}
			if (options.view == 'days' && !options.select_day) {
				options.view = 'months';
			}
			options.calendars = Math.max(1, parseInt(options.calendars, 10) || 1);
			options.mode      = /single|multiple|range/.test(options.mode) ? options.mode : 'single';
			if (options.min) {
				options.min = parse_date(options.min, options);
				if (!options.select_day) {
					options.min.setDate(1);
				}
			}
			if (options.max) {
				options.max = parse_date(options.max, options);
				if (!options.select_day) {
					options.max.setDate(1);
				}
			}
			var element               = document.createElement('div');
			//noinspection JSUndefinedPropertyAssignment
			target.__pickmeup         = {
				options : options,
				events  : [],
				element : element
			};
			element.__pickmeup_target = target;
			dom_add_class(element, 'pickmeup');
			if (options.class_name) {
				dom_add_class(element, options.class_name);
			}
			options.bound = {
				fill        : fill.bind(target, target),
				update_date : update_date.bind(target, target),
				click       : click.bind(target, target),
				show        : show.bind(target, target),
				forced_show : show.bind(target, target, true),
				hide        : hide.bind(target, target),
				update      : update.bind(target, target),
				clear       : clear.bind(target, target),
				prev        : prev.bind(target, target),
				next        : next.bind(target, target),
				get_date    : get_date.bind(target, target),
				set_date    : set_date.bind(target, target),
				destroy     : destroy.bind(target, target)
			};
			dom_add_class(element, 'pmu-view-' + options.view);
			var content_template = options.instance_template(options),
				content          = '';
			for (i = 0; i < options.calendars; ++i) {
				content += content_template;
			}
			element.innerHTML = content;
			dom_on(target, element, 'click', options.bound.click);
			dom_on(
				target,
				element,
				'onselectstart' in Element.prototype ? 'selectstart' : 'mousedown',
				function (e) {
					e.preventDefault();
				});
			if (options.flat) {
				dom_add_class(element, 'pmu-flat');
				target.appendChild(element);
			} else {
				dom_add_class(element, 'pmu-hidden');
				document.body.appendChild(element);
				dom_on(target, target, 'click', show.bind(target, target, false));
				dom_on(target, target, 'input', options.bound.update);
				dom_on(target, target, 'change', options.bound.update);
			}
			options.bound.set_date(options.date, options.current);
		}
		options = target.__pickmeup.options;
		return {
			hide     : options.bound.hide,
			show     : options.bound.show,
			clear    : options.bound.clear,
			update   : options.bound.update,
			prev     : options.bound.prev,
			next     : options.bound.next,
			get_date : options.bound.get_date,
			set_date : options.bound.set_date,
			destroy  : options.bound.destroy
		}
	}

	pickmeup_init.defaults = {
		current                   : null,
		date                      : new Date,
		default_date              : new Date,
		flat                      : false,
		first_day                 : 1,
		prev                      : '&#9664;',
		next                      : '&#9654;',
		mode                      : 'single',
		select_year               : false,
		select_month              : false,
		select_day                : true,
		view                      : 'days',
		calendars                 : 1,
		format                    : 'd-m-Y',
		title_format              : 'B',
		title_format2              : 'Y',
		position                  : 'bottom',
		class_name                : '',
		separator                 : ' - ',
		hide_on_select            : false,
		min                       : null,
		max                       : null,
		render                    : function () {
		},
		locale                    : 'en',
		locales                   : {
			en: {
				days        : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				daysShort   : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				daysMin     : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				months      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				monthsShort : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			int: {
				days        : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				daysShort   : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				daysMin     : ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				months      : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				monthsShort : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			},
			ru: {
				daysMin: [],
				months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
				monthsShort: []
			},
			de: {
				daysMin: [],
				months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
				monthsShort: []
			},
			es: {
				daysMin: [],
				months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
				monthsShort: []
			},
			uz: {
				daysMin: [],
				months: ['Январ', 'Феврал', 'Март', 'Апрел', 'Май', 'Июн', 'Июл', 'Август', 'Сентябр', 'Октябр', 'Ноябр', 'Декабр'],
				monthsShort: []
			},
			gr: {
				daysMin: [],
				months: ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'],
				monthsShort: []
			},
			tj: {
				daysMin: [],
				months: ['Январ', 'Феврал', 'Март', 'Апрел', 'Май', 'Июн', 'Июл', 'Август', 'Сентябр', 'Октябр', 'Ноябр', 'Декабр'],
				monthsShort: []
			},
			tg: {
				daysMin: [],
				months: ['Январ', 'Феврал', 'Март', 'Апрел', 'Май', 'Июн', 'Июл', 'Август', 'Сентябр', 'Октябр', 'Ноябр', 'Декабр'],
				monthsShort: []
			},
			cz: {
				daysMin: [],
				months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
				monthsShort: []
			},
			cs: {
				daysMin: [],
				months: ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec'],
				monthsShort: []
			},
			lt:{
				daysMin: [],
				months: ['Sausis', 'Vasaris', 'Kovas', 'Balandis', 'Gegužė', 'Birželis', 'Liepa', 'Rugpjūtis', 'Rugsėjis', 'Spalis', 'Lapkritis', 'Gruodis'],
				monthsShort: []
			},
			lv:{
				daysMin: [],
				months: ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs', 'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'],
				monthsShort: []
			},
			it:{
				daysMin: [],
				months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
				monthsShort: []
			},
			pl:{
				daysMin: [],
				months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
				monthsShort: []
			},
			by:{
				daysMin: [],
				months: ['Студзень', 'Люты', 'Сакавік', 'Красавік', 'Май', 'Чэрвень', 'Ліпень', 'Жнівень', 'Верасень', 'Кастрычнік', 'Лістапад', 'Снежань'],
				monthsShort: []
			},
			rs:{
				daysMin: [],
				months: ['Јануар', 'Фебруар', 'Март', 'Април', 'Мај', 'Јун', 'Јул', 'Август', 'Септембар', 'Октобар', 'Новембар', 'Децембар'],
				monthsShort: []
			},
			md:{
				daysMin: [],
				months: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
				monthsShort: []
			},
			tr:{
				daysMin: [],
				months: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
				monthsShort: []
			},
			ge:{
				daysMin: [],
				months: ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'],
				monthsShort: []
			},
			am:{
				daysMin: [],
				months: ['Հունվար', 'Փետրվար', 'Մարտ', 'Ապրիլ', 'Մայիս', 'Հունիս', 'Հուլիս', 'Օգոստոս', 'Սեպտեմբեր', 'Հոկտեմբեր', 'Նոյեմբեր', 'Դեկտեմբեր'],
				monthsShort: []
			},
			fr:{
				daysMin: [],
				months: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
				monthsShort: []
			},
			az:{
				daysMin: [],
				months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'],
				monthsShort: []
			},
			vn:{
				daysMin: [],
				months: ['Tháng Một', 'Tháng Hai', 'Tháng Ba', 'Tháng Tư', 'Tháng Năm', 'Tháng Sáu', 'Tháng Bảy', 'Tháng Tám', 'Tháng Chín', 'Tháng Mười', 'Tháng Mười Một', 'Tháng Mười Hai'],
				monthsShort: []
			},
			ab:{
				daysMin: [],
				months: ['Ажьырныҳәа', 'Жәабран', 'Хәыжәкыра', 'Мшаԥы', 'Лаҵара', 'Рашәара', 'Ԥхынгәы', 'Нанҳәа', 'Цәыбббра', 'Жьҭаара', 'Абҵара', 'Ԥхынҷкәын'],
				monthsShort: []
			},
			jp:{
				daysMin: [],
				months: ['１月', '２月', '３月', '４月', '５月', '６月', '７月', '８月', '９月', '１０月', '１１月', '１２月'],
				monthsShort: []
			},
			eg:{
				daysMin: [],
				months: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
				monthsShort: []
			},
			os: {
				daysMin: [],
				months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
				monthsShort: []
			},
			br: {
				daysMin: [],
				months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
				monthsShort: []
			},
			da: {
				daysMin: [],
				months: ['جنوری', 'فبروری', 'مارچ', 'اپریل', 'می', 'جون', 'جولای', 'اگست', 'سپتمبر', 'اکتوبر', 'نوامبر', 'دسمبر'],
				monthsShort: []
			},
			fa: {
				daysMin: [],
				months: ['ژانویه', 'فوریه', 'مارس', 'آوریل', 'مه', 'ژوئن', 'ژوئیه', 'اوت', 'سپتامبر', 'اکتبر', 'نوامبر', 'دسامبر'],
				monthsShort: []
			},
			kg: {
				daysMin: [],
				months: ['Үчтүн айы', 'Бирдин айы', 'Жалган Куран', 'Чын Куран', 'Бугу', 'Кулжа', 'Теке', 'Баш оона', 'Аяк оона', 'Тогуздун айы', 'Жетинин айы', 'Бештин айы'],
				monthsShort: []
			},
			cn: {
				daysMin: [],
				months: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				monthsShort: []
			},
			kz: {
				daysMin: [],
				months: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
				monthsShort: []
			},
			kaz: {
				daysMin: [],
				months: ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'],
				monthsShort: []
			},
			in: {
				days        : ['रविवार ', 'सोमवार ', 'मंगलवार ', 'बुधवार ', 'गुरुवार ', 'शुक्रवार', 'शनिवार '],
				daysShort   : ['र ', 'सो ', 'मं ', 'बु ', 'गु ', 'शु ', 'श '],
				daysMin     : ['र ', 'सो ', 'मं ', 'बु ', 'गु ', 'शु ', 'श '],
				months      : ['जनवरी', 'फ़रवरी ', 'मार्च ', 'अप्रैल ', 'मई ', 'जून ', 'जुलाई  ', 'अगस्त ', 'सितंबर ', 'अक्टूबर', 'नवंबर ', 'दिसंबर '],
				monthsShort : ['जनवरी', 'फ़रवरी ', 'मार्च ', 'अप्रैल ', 'मई ', 'जून ', 'जुलाई  ', 'अगस्त ', 'सितंबर ', 'अक्टूबर', 'नवंबर ', 'दिसंबर ']
			}
		},
		/**
		 * @param {Object} options
		 *
		 * @returns {string}
		 */
		instance_template         : function (options) {
			// var days_of_week = options.locales[options.locale].daysMin.slice();
			// // If Monday is the first day of the week
			// if (options.first_day) {
			// 	days_of_week.push(days_of_week.shift());
			// }
			// return '<div class="pmu-instance">' +
			// 	'<nav>' +
			// 	'<div class="pmu-prev pmu-button">' + options.prev + '</div>' +
			// 	'<div class="pmu-month pmu-button"></div>' +
			// 	'<div class="pmu-next pmu-button">' + options.next + '</div>' +
			// 	'</nav>' +
			// 	'<nav class="pmu-day-of-week"><div>' + days_of_week.join('</div><div>') + '</div></nav>' +
			// 	'</div>';
			return '<div class="pmu-instance">' +
				'<nav>' +
				'<div class="pmu-month"><span></span></div>' +
				'</nav>' +
				'</div>';
		},
		/**
		 * @param {Element[]} elements
		 * @param {string}    container_class_name
		 *
		 * @returns {Element}
		 */
		instance_content_template : function (elements, container_class_name) {
			var root_element = document.createElement('div');
			dom_add_class(root_element, container_class_name);
			for (var i = 0; i < elements.length; ++i) {
				dom_add_class(elements[i], 'pmu-button');
				root_element.appendChild(elements[i]);
			}
			return root_element;
		}
	};

	return pickmeup_init;
}));


(function($){

	$.fn.riaForm = function(options){

		var version = "1.5";

		/* НАСТРОЙКИ */

		var options = $.extend({
			type: 'post',                       // для ajax, тип выполняемого запроса
			dataType: 'json',                   // тип данных, в котором ожидается получить ответ от сервера
			block: true,                        // блокировать форму при ajax запросе
			loader: '.loader',                  // селектор лоадера, должен находиться в <form>...</form>
			deleteData: false,                  // object - поля которые надо удалить из отправки
			rules: false,                       // object - правила для обязательных к заполнению полей
			mixinData: false,                   // function - добавление полей
			/*
			*           Настройки добавления классов ошибок на поля и label
			*/
			errorClass: 'm-error',              // класс ошибки, добавляется на элемент и/или label (класс без точки)
			errorInput: false,                  // добавлять класс ошибки на элемент
			errorLabel: false,                  // добавлять класс ошибки на label
			/*
			*			Настройки вывода ошибок полей
			*		    <form> ... <span class="message-error" data-field="field_name"></span> ... </form>
			*/
			errorMessage: true,                 // показывать сообщение об ошибке
			message: '.message-error',          // селектор блока для вывода сообщения об ошибке
			messageConnector: 'data-field',     // атрибут поля в которое выводится сообщение об ошибке, равен имени поля для которого выводится сообщение
			messages: false,                    // object - сообщения об ошибках для обязательных к заполнению полей
			errorCallback: undefined,           // function - вызывается при налиции ошибок в заполнении формы (обязательных полей определенных в rules) принимает массив ошибок
			/*
			*           Настройки вывода алертов полей
			*           <form> ... <div class="message-alert"></div> ... </form>
			*/
			errorAlert: false,                  // показывать алерт пришедший в ответ
			alert: '.message-alert',            // селектор блока для вывода алерта
			alerts: false,                      // object - алерты
			alertCallback: undefined,           // function - вызываетя после показа алерта
			/*
			*           callback функции
			*/
			submitCallback: undefined,          // function - выполняется перед отправкой данных
			successCallback: undefined,         // function - выполняется при возврате ответа success
			forceCallback: undefined            // function - выполняется при любом ответе

		}, options || {});

		/* ПЕРЕМЕННЫЕ */

		var form = $(this);                     // <form> - вещать плагин на него
		var loader = $(options.loader, form);   // лоадер
		var dataUrl = form.attr('action');      // url для ajax, берет с атрибута action form
		var errors = 0;
		var errorsMessage = {};

		/* ФУНКЦИИ  */

		/* Показывает ошибку */
		var showFieldError = function(name, error){
			/* показывает пару "поле ошибка" в консоли */
			console.log(name,'  ', error);
			/* Останавливается если не переданы параметры */
			if(!name || !error){
				return;
			}
			var field;
			/* Проверка какое поле имеет переданный name и сохранение в field */
			if($('input[name="' + name + '"]', form).length > 0){
				field = $('input[name="' + name + '"]', form);
			} else if($('textarea[name="' + name + '"]', form).length > 0){
				field = $('textarea[name="' + name + '"]', form);
			} else if($('select[name="' + name + '"]', form).length > 0){
				field = $('select[name="' + name + '"]', form);
			} else {
				return;
			}
			/* Добавляет класс ошибки тегу input, textarea или select */
			if(options.errorInput){
				field.addClass(options.errorClass);
			}
			/* Добавляет класс ошибки к лейблу поля */
			if(options.errorLabel){
				var label = $('label[for="'+ field.attr('id') +'"]');
				if(label.length > 0){
					/* Добавляетк ласс ошибки на label[for="..."]*/
					label.addClass(options.errorClass);
				} else if(field.parent().get(0) && field.parent().get(0).tagName == 'LABEL'){
					/* Добавляет класс ошибки на первый родительский label */
					field.parent().addClass(options.errorClass);
				}
			}
			/* Показывает сообщение об ошибке для поля */
			if(options.errorMessage){
				var message = $(options.message + '[' + options.messageConnector + '="' + name + '"]', form);
				if(message.length > 0 && options.messages && options.messages[name]){
					message.empty().append(options.messages[name][error]).show();
				}
			}
		};

		/* Проверка правил и подсветка ошибок */
		var checkRules = function(){
			for(key in options.rules){
				var type = $.type(options.rules[key]);
				/* Если передан объект */
				if(type === 'object'){
					for(node in options.rules[key]){
						var name = key;
						var value = options.rules[key][node];
						checkRulesType(name, node, value);
					}
				}
				/* Если передан массив */
				if(type === 'array'){
					var name = key;
					for(node in options.rules[key]){
						value = options.rules[key][node];
						checkRulesType(name, value);
					}
				}
				/* Проверяет переданное значение */
				else{
					checkRulesType(key, options.rules[key]);
				}
			}

			return errors;

		};

		var checkRulesType = function(name, key, value){
			switch(key){

				/* Функция */
				case 'function':
					if(value instanceof Function){
						var result = value(form,name);
						if(result == false){
							errors++;
							errorsMessage[name] = 'function';
							showFieldError(name, 'function');
						}
					}
					break;

				/* Пустрое поле */
				case 'empty':
					var empty = checkFieldEmpty(name);
					if(empty == true){
						errors++;
						errorsMessage[name] = 'empty';
					}
					break;

				/* Email */
				case 'email':
					var email = checkFieldEmail(name);
					if(email == true){
						errors++;
						errorsMessage[name] = 'email';
					}
					break;

				case 'number':
					var number = checkFieldNumber(name);
					if(number == true){
						errors++;
						errorsMessage[name] = 'number';
					}
					break;
			}
			/* Отдельная проверка переданного объекта*/
			if(key instanceof Function){
				var result = key(form,name);
				if(result == false){
					errors++;
					errorsMessage[name] = 'function';
					showFieldError(name, 'function');
				}
			}
		};

		/* Проверяет пустые поля */
		var checkFieldEmpty = function(name){

			/* Для input тип checkbox и radio */
			if($('input[name="'+ name +'"][type="checkbox"], input[name="'+ name +'"][type="radio"]', form).length > 0){
				var value = $('input[name="'+ name +'"]', form).is(':checked');
				if(value == false){
					showFieldError(name, 'empty');
					return true;
				}
			}

			/* Для input тип file */
			if($('input[name="'+ name +'"][type="file"]', form).length > 0){
				var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false,
					file_input = $('input[name="'+ name +'"][type="file"]', form),
					value;
				if( file_api && file_input[ 0 ].files[ 0 ] ){
					value = file_input[ 0 ].files[ 0 ].name;
				} else {
					value = file_input.val().replace( "C:\\fakepath\\", '' );
				}
				if(value.length == 0){
					showFieldError(name, 'empty');
					return true;
				}
			}

			/* Для input тип text */
			if($('input[name="'+ name +'"]', form).length > 0){
				var value = $('input[name="'+ name +'"]', form).val();
				if(value.length == 0){
					showFieldError(name, 'empty');
					return true;
				}
			}

			/* Для textarea */
			if($('textarea[name="'+ name +'"]', form).length > 0){
				var value = $('textarea[name="'+ name +'"]', form).val();
				if(value.length == 0){
					showFieldError(name, 'empty');
					return true;
				}
			}

			/* Для select */
			if($('select[name="'+ name +'"]', form).length > 0){
				var value = $('select[name="'+ name +'"]', form).val();
				if(value.length == 0){
					showFieldError(name, 'empty');
					return true;
				}
			}

			return false;

		};

		/* Подсвечивает поля у которых указан тип проверки email */
		var checkFieldEmail = function(name){

			/* Для input */
			if($('input[name="'+ name +'"]', form).length > 0){
				var value = $('input[name="'+ name +'"]', form).val();
				reg = new RegExp("[0-9a-z_\\-]+@[0-9a-z\\-_^.]+\\.[a-z]{2,10}", 'i');
				if(!reg.test(value)){
					showFieldError(name, 'email');
					return true;
				}
				else {
					return false;
				}
			}

			/* Для textarea */
			if($('textarea[name="'+ name +'"]', form).length > 0){
				var value = $('textarea[name="'+ name +'"]', form).val();
				reg = new RegExp("[0-9a-z_\\-]+@[0-9a-z\\-_^.]+\\.[a-z]{2,10}", 'i');
				if(!reg.test(value)){
					showFieldError(name, 'email');
					return true;
				}
				else {
					return false;
				}
			}

			/* Для select */
			if($('select[name="'+ name +'"]', form).length > 0){
				var value = $('select[name="'+ name +'"]', form).val();
				reg = new RegExp("[0-9a-z_\\-]+@[0-9a-z\\-_^.]+\\.[a-z]{2,10}", 'i');
				if(!reg.test(value)){
					showFieldError(name, 'email');
					return true;
				}
				else {
					return false;
				}
			}

		};

		/* Подсвечивает поля у которых указан тип проверки number */
		var checkFieldNumber = function(name){

			/* Для input */
			if($('input[name="'+ name +'"]', form).length > 0){
				var value = $('input[name="'+ name +'"]', form).val();
				reg = new RegExp("[0-9]", 'i');
				if(!reg.test(value)){
					showFieldError(name, 'number');
					return true;
				}
				else {
					return false;
				}
			}

			/* Для textarea */
			if($('textarea[name="'+ name +'"]', form).length > 0){
				var value = $('textarea[name="'+ name +'"]', form).val();
				reg = new RegExp("[0-9]", 'i');
				if(!reg.test(value)){
					showFieldError(name, 'number');
					return true;
				}
				else {
					return false;
				}
			}

			/* Для select */
			if($('select[name="'+ name +'"]', form).length > 0){
				var value = $('select[name="'+ name +'"]', form).val();
				reg = new RegExp("[0-9]", 'i');
				if(!reg.test(value)){
					showFieldError(name, 'number');
					return true;
				}
				else {
					return false;
				}
			}

		};

		/* Выводит ошибки которые приходят с сервера */
		var showAllErrors = function(errors){
			for(key in errors){
				showFieldError(key, errors[key]);
			}
		};

		/* Прячет все ошибки в форме */
		var hideAllErrors = function(){
			errors = 0;
			errorsMessage = {};
			/* Убирает класс ошибки у тегов полей */
			if(options.errorInput){
				$('input', form).removeClass(options.errorClass);
				$('textarea', form).removeClass(options.errorClass);
				$('select', form).removeClass(options.errorClass);
			}
			/* Убирает класс ошибки у лейблов */
			if(options.errorLabel){
				var label = $('label', form).removeClass(options.errorClass);
			}
			/* Прячет сообщение об ошибках */
			if(options.errorMessage){
				$(options.message, form).hide();
			}
		};

		/* Прячет ошибки у одного элемента формы */
		var hideError = function(elem){
			/* Убирает класс error */
			if(options.errorInput){
				elem.removeClass(options.errorClass);
			}
			/* Убирает класс error у label для элемента */
			if(options.errorLabel){
				// Ищем label с id как на элементе
				var label = $('label[for="'+ elem.attr('id') +'"]');
				// если такой label есть убираем класс ошибки если нет ищем родительский label и удаляем класс с него
				if(label.length > 0){
					label.removeClass(options.errorClass);
				} else if(elem.parent().get(0).tagName == 'LABEL'){
					elem.parent().removeClass(options.errorClass);
				}
			}
			/* Прячем сообщение с ошибкой */
			if(options.errorMessage){
				var message = $(options.message + '[' + options.messageConnector + '="' + elem.attr('name') + '"]', form);
				message.fadeOut(100);
			}
		};

		/* Показывает алерт */
		var showAlert = function(errors){
			var counter = 0;
			for(key in errors){
				if(options.alerts[key] && counter < 1){
					var alert = $(options.alert, form);
					var error = errors[key];
					alert.empty().append(options.alerts[key][error]).show();
					if(options.alertCallback instanceof Function){
						options.alertCallback(errors);
					}
				}
				counter++;
			}
		};

		/* Скрывает  */
		var hideAlert = function(){
			$(options.alert, form).hide();
		};

		/* Блокирует форму */
		var blockForm = function(){
			$('input[type="submit"]', form).attr('disabled','disabled');
			$('button', form).attr('disabled','disabled');
		};

		/* Снимает блокировку формы */
		var unblockForm = function(){
			$('input[type="submit"]', form).removeAttr('disabled');
			$('button', form).removeAttr('disabled');
		};


		var getFormDataObject = function(){
			var formData = form.serializeArray();
			var dataOut = {};
			for(key in formData){
				dataOut[formData[key].name] = formData[key].value;
			}
			return dataOut;
		};

		/* Конвертирует значения полей */
		var convertData = function(formData){
			if(!options.convertData instanceof Object){ return;}
			for(convertKey in options.convertData){
				if(options.convertData[convertKey] instanceof Function){
					var result = options.convertData[convertKey](formData[convertKey]);
					formData[convertKey] = result;
				}
			}
			return formData;
		};

		/* Удаляет лишние данные при сабмите формы */
		var deleteData = function(formData){
			for(key in options.deleteData){
				delete formData[options.deleteData[key]];
			}
			return formData;
		};

		/* Собственные события */
		form.bind('hideErrors', function(){
			hideAllErrors();
		});


		/* СОБЫТИЯ */

		/* Сабмит формы */
		form.off('submit').on('submit', function(e){

			e.preventDefault(); // отменяет отправку формы

			hideAllErrors();    // прячет ошибки
			hideAlert();        // прячет алерты

			/* Проверяет обязательные для заполнения поля */
			errors = checkRules();

			/* Вызывает callback и передает в него объект с ошибками */
			if(errors > 0 && options.errorCallback instanceof Function){
				options.errorCallback(errorsMessage);
			}

			if (errors == 0){

				/* Переменные */
				var formData,
					convertLength = 0;

				/* Конвертирует в формат для json */
				formData = getFormDataObject();

				/* Конвертирует поля по переданным функциям  */
				if(options.convertData instanceof Object){
					convertLength = $.map(options.convertData, function(n, i) { return i; }).length;
					if ( convertLength > 0 ){
						formData = convertData(formData);
					}
				}

				/* Добавляет дополнительные данные из mixinData поверх данных формы */
				if(options.mixinData instanceof Function){
					mixinData = options.mixinData();
					formData = $.extend(formData, mixinData || {});
				}

				/* Удаляет лишние данные */
				if(options.deleteData instanceof Object){
					formData = deleteData(formData);
				}

				/* Вызывает callback при сабмите */
				if(options.submitCallback instanceof Function){
					options.submitCallback(form, formData);
				}

				$.ajax({
					type: options.type,
					url: dataUrl,
					dataType: options.dataType,
					data: formData,
					beforeSend: function(){
						/* Показывает индикатор загрузки */
						loader.fadeIn();
						/* Ставит блокировку на форму */
						if(options.block == true){
							blockForm();
						}
					},
					error: function(data){
						loader.fadeOut();
						/* Вызывает сallback ошибки валидации формы */
						if(options.errorCallback instanceof Function){
							options.errorCallback(data);
						}
					},
					success: function(data){
						/* Прячет индикатор загрузки */
						loader.fadeOut();
						/* Снимает блокировку с формы */
						if(options.block == true){
							unblockForm();
						}
						if(data.error || (data.status && data.status.toLowerCase() == 'error')){
							/* Показывает ошибку */
							showAllErrors(data.errors);
							/* Показывает алерты */
							if(options.alerts && options.errorAlert){
								showAlert(data.errors);
							}
							/* Вызывает сallback ошибки валидации формы */
							if(options.errorCallback instanceof Function){
								options.errorCallback(data);
							}
						}
						else{
							/* Вызывает сallback успешной валидации формы */
							if(options.successCallback instanceof Function){
								options.successCallback(data, form);
							}
						}
						/* Вызывает force сallback */
						if(options.forceCallback instanceof Function){
							options.forceCallback(data, form);
						}
					}
				});
			}
		});

		/* Убрать ошибку с input и textarea при изменении */
		$('input, textarea', form).on('keydown', function(){
			hideError($(this));
		});

		/* Убрать ошибку с select и input[type="checkbox"] при изменении */
		$('input[type="checkbox"], select', form).on('change', function(){
			hideError($(this));
		});

		/* Убрать ошибку с input[type="radio"] при изменении*/
		$('input[type="radio"]', form).on('change', function(){
			// ищем все radio с name как у измененного и убираем ошибку со всех
			$('input[type="radio"][name="'+$(this).attr('name')+'"]', form).each(function(){
				hideError($(this));
			});
		});

		return version;

	}

})(jQuery);
;(function ( $, window, document, undefined ) {

    var riaVote = function(el, options) {
        var defaults = {

        };
        var _this = this;
        _this.el = $(el);
        _this.btn = _this.el.find('button');
        _this.id = _this.el.data('vote-id').toString();
        _this.defOptions = defaults;
        _this.userOptions = options;
        _this.options = $.extend(true, {}, defaults, options);

        _this.init();
    };

    riaVote.prototype = {
        init: function() {
            var _this = this;

            function checkVoted( id ) {
                var lsd = JSON.parse( ria.lsGet( 'ria.ru__ria-votes' ) ) || [];
                return lsd.indexOf( id ) > -1;
            }

            function updateVoted( id, answers ) {
                var lsd = JSON.parse( ria.lsGet( 'ria.ru__ria-votes' ) ) || [];
                var i = lsd.indexOf( id );
                if (i > -1 && i < lsd.length) {
                    lsd.splice(i, 1);
                }
                lsd.push( id );
                if ( lsd.length > 100) {
                    var removed_id = lsd.shift();
                    ria.lsRemove( 'ria-votes_' + removed_id );
                }
                ria.lsSet( 'ria.ru__ria-votes', JSON.stringify( lsd ) );
                ria.lsSet( 'ria-votes_' + id,  JSON.stringify( answers ) );
            }

            if ( _this.el.hasClass('m-vote-disabled') || checkVoted( _this.id ) ) {
                $.ajax({
                    url: '/services/vote/get_result/',
                    dataType: 'json',
                    data: {
                        "vote_id": _this.id
                    }
                }).done(function(response) {
                    _this.showResults( response, true );
                });
                // _this.showResults( {}, true );
            }

            _this.el.find('form').on('submit', function(e) {
                e.preventDefault();

                if ( !checkVoted( _this.id ) ) {
                    var formData = $(this).serializeArray();
                    $.ajax({
                        url: $(this).attr('action'),
                        dataType: 'json',
                        data: formData,
                        beforeSend: function() {
                            _this.btn.attr('disabled', 'disabled');
                        }
                    }).done(function(response) {
                        _this.showResults( response, true );

                        var answers = [];
                        $.each(formData, function() {
                            if ( this.name == 'vote_answer_id[]' ) {
                                answers.push( this.value );
                            }
                        });
                        updateVoted( _this.id, answers );
                    });
                } else {
                    _this.btn.attr('disabled', 'disabled');
                    _this.showResults( {}, true );
                }
            });

            _this.el.find('.js-vote-answer').on('click', function() {
                if ( _this.el.find('.js-vote-answer input:checked:not(:disabled)').length ) {
                    _this.btn.removeAttr('disabled');
                } else {
                    _this.btn.attr('disabled', 'disabled');
                }
            });

            _this.el.find('.js-vote-switch-button').on('click', function() {
                if ( _this.el.hasClass( 'm-vote-results' ) ) {
                    _this.el.removeClass( 'm-vote-results' );
                } else {
                    $.ajax({
                        url: '/services/vote/get_result/',
                        dataType: 'json',
                        data: {
                            "vote_id": _this.id
                        }
                    }).done(function(response) {
                        _this.showResults( response );
                    });
                }
            });
        },
        showResults: function( response, dis ) {
            var _this = this;
            var lsd = JSON.parse( ria.lsGet( 'ria-votes_' + _this.id ) ) || [];

            _this.el.find('.js-vote-answer').each(function() {
                if ( typeof response.answers !== 'undefined' && typeof response.answers[ $(this).data('id') ] !== 'undefined' ) {
                    var val = response.answers[ $(this).data('id') ].percent;
                    var val_text = response.answers[ $(this).data('id') ].percent_text;
                    $(this).find('.js-vote-line').width( val+'%' );
                    $(this).find('.js-vote-percent span').text( val_text );
                } else {
                    $(this).find('.js-vote-line').width(0);
                    $(this).find('.js-vote-percent span').text(0);
                }
                if (dis) {
                    $(this).find('input').attr('disabled', 'disabled');
                    if ( lsd.indexOf( $(this).data('id').toString() ) != -1 ) {
                        $(this).find('input').attr('checked', 'checked');
                    }
                }
            });
            if ( response.total > 0 || _this.el.find('.js-vote-count-val').text() != '' ) {
                _this.el.find('.js-vote-count-val').text( response.total );
                _this.el.find('.js-vote-count').removeClass('m-hidden');
            } else {
                _this.el.find('.js-vote-count').addClass('m-hidden');
            }

            if (dis) {
                _this.el.find('.js-vote-switch-button').addClass('m-hidden');
            }
            _this.el.addClass( 'm-vote-results' );
        }
    };

    $.fn.riaVote = function(options) {
        return this.each(function(){
            if(!$.data(this, 'riaVote')){
                $.data(this, 'riaVote', new riaVote(this, options));
            }
        });
    };

})( jQuery, window, document );

/*! jQuery UI - v1.12.1+CommonJS - 2018-02-10
 * http://jqueryui.com
 * Includes: widget.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
  if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define([ "jquery" ], factory );
  } else if ( typeof exports === "object" ) {

    // Node/CommonJS
    factory( require( "jquery" ) );
  } else {

    // Browser globals
    factory( jQuery );
  }
}(function( $ ) {

  $.ui = $.ui || {};

  var version = $.ui.version = "1.12.1";


  /*!
   * jQuery UI Widget 1.12.1
   * http://jqueryui.com
   *
   * Copyright jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   */

  //>>label: Widget
  //>>group: Core
  //>>description: Provides a factory for creating stateful widgets with a common API.
  //>>docs: http://api.jqueryui.com/jQuery.widget/
  //>>demos: http://jqueryui.com/widget/



  var widgetUuid = 0;
  var widgetSlice = Array.prototype.slice;

  $.cleanData = ( function( orig ) {
    return function( elems ) {
      var events, elem, i;
      for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
        try {

          // Only trigger remove when necessary to save time
          events = $._data( elem, "events" );
          if ( events && events.remove ) {
            $( elem ).triggerHandler( "remove" );
          }

          // Http://bugs.jquery.com/ticket/8235
        } catch ( e ) {}
      }
      orig( elems );
    };
  } )( $.cleanData );

  $.widget = function( name, base, prototype ) {
    var existingConstructor, constructor, basePrototype;

    // ProxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
    var proxiedPrototype = {};

    var namespace = name.split( "." )[ 0 ];
    name = name.split( "." )[ 1 ];
    var fullName = namespace + "-" + name;

    if ( !prototype ) {
      prototype = base;
      base = $.Widget;
    }

    if ( $.isArray( prototype ) ) {
      prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
    }

    // Create selector for plugin
    $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
      return !!$.data( elem, fullName );
    };

    $[ namespace ] = $[ namespace ] || {};
    existingConstructor = $[ namespace ][ name ];
    constructor = $[ namespace ][ name ] = function( options, element ) {

      // Allow instantiation without "new" keyword
      if ( !this._createWidget ) {
        return new constructor( options, element );
      }

      // Allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)
      if ( arguments.length ) {
        this._createWidget( options, element );
      }
    };

    // Extend with the existing constructor to carry over any static properties
    $.extend( constructor, existingConstructor, {
      version: prototype.version,

      // Copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend( {}, prototype ),

      // Track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: []
    } );

    basePrototype = new base();

    // We need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend( {}, basePrototype.options );
    $.each( prototype, function( prop, value ) {
      if ( !$.isFunction( value ) ) {
        proxiedPrototype[ prop ] = value;
        return;
      }
      proxiedPrototype[ prop ] = ( function() {
        function _super() {
          return base.prototype[ prop ].apply( this, arguments );
        }

        function _superApply( args ) {
          return base.prototype[ prop ].apply( this, args );
        }

        return function() {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;

          this._super = _super;
          this._superApply = _superApply;

          returnValue = value.apply( this, arguments );

          this._super = __super;
          this._superApply = __superApply;

          return returnValue;
        };
      } )();
    } );
    constructor.prototype = $.widget.extend( basePrototype, {

      // TODO: remove support for widgetEventPrefix
      // always use the name + a colon as the prefix, e.g., draggable:start
      // don't prefix for widgets that aren't DOM-based
      widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
    }, proxiedPrototype, {
      constructor: constructor,
      namespace: namespace,
      widgetName: name,
      widgetFullName: fullName
    } );

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if ( existingConstructor ) {
      $.each( existingConstructor._childConstructors, function( i, child ) {
        var childPrototype = child.prototype;

        // Redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base
        $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
          child._proto );
      } );

      // Remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected
      delete existingConstructor._childConstructors;
    } else {
      base._childConstructors.push( constructor );
    }

    $.widget.bridge( name, constructor );

    return constructor;
  };

  $.widget.extend = function( target ) {
    var input = widgetSlice.call( arguments, 1 );
    var inputIndex = 0;
    var inputLength = input.length;
    var key;
    var value;

    for ( ; inputIndex < inputLength; inputIndex++ ) {
      for ( key in input[ inputIndex ] ) {
        value = input[ inputIndex ][ key ];
        if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

          // Clone objects
          if ( $.isPlainObject( value ) ) {
            target[ key ] = $.isPlainObject( target[ key ] ) ?
              $.widget.extend( {}, target[ key ], value ) :

              // Don't extend strings, arrays, etc. with objects
              $.widget.extend( {}, value );

            // Copy everything else by reference
          } else {
            target[ key ] = value;
          }
        }
      }
    }
    return target;
  };

  $.widget.bridge = function( name, object ) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[ name ] = function( options ) {
      var isMethodCall = typeof options === "string";
      var args = widgetSlice.call( arguments, 1 );
      var returnValue = this;

      if ( isMethodCall ) {

        // If this is an empty collection, we need to have the instance method
        // return undefined instead of the jQuery instance
        if ( !this.length && options === "instance" ) {
          returnValue = undefined;
        } else {
          this.each( function() {
            var methodValue;
            var instance = $.data( this, fullName );

            if ( options === "instance" ) {
              returnValue = instance;
              return false;
            }

            if ( !instance ) {
              return $.error( "cannot call methods on " + name +
                " prior to initialization; " +
                "attempted to call method '" + options + "'" );
            }

            if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
              return $.error( "no such method '" + options + "' for " + name +
                " widget instance" );
            }

            methodValue = instance[ options ].apply( instance, args );

            if ( methodValue !== instance && methodValue !== undefined ) {
              returnValue = methodValue && methodValue.jquery ?
                returnValue.pushStack( methodValue.get() ) :
                methodValue;
              return false;
            }
          } );
        }
      } else {

        // Allow multiple hashes to be passed on init
        if ( args.length ) {
          options = $.widget.extend.apply( null, [ options ].concat( args ) );
        }

        this.each( function() {
          var instance = $.data( this, fullName );
          if ( instance ) {
            instance.option( options || {} );
            if ( instance._init ) {
              instance._init();
            }
          } else {
            $.data( this, fullName, new object( options, this ) );
          }
        } );
      }

      return returnValue;
    };
  };

  $.Widget = function( /* options, element */ ) {};
  $.Widget._childConstructors = [];

  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",

    options: {
      classes: {},
      disabled: false,

      // Callbacks
      create: null
    },

    _createWidget: function( options, element ) {
      element = $( element || this.defaultElement || this )[ 0 ];
      this.element = $( element );
      this.uuid = widgetUuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;

      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      this.classesElementLookup = {};

      if ( element !== this ) {
        $.data( element, this.widgetFullName, this );
        this._on( true, this.element, {
          remove: function( event ) {
            if ( event.target === element ) {
              this.destroy();
            }
          }
        } );
        this.document = $( element.style ?

          // Element within the document
          element.ownerDocument :

          // Element is window or document
          element.document || element );
        this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
      }

      this.options = $.widget.extend( {},
        this.options,
        this._getCreateOptions(),
        options );

      this._create();

      if ( this.options.disabled ) {
        this._setOptionDisabled( this.options.disabled );
      }

      this._trigger( "create", null, this._getCreateEventData() );
      this._init();
    },

    _getCreateOptions: function() {
      return {};
    },

    _getCreateEventData: $.noop,

    _create: $.noop,

    _init: $.noop,

    destroy: function() {
      var that = this;

      this._destroy();
      $.each( this.classesElementLookup, function( key, value ) {
        that._removeClass( value, key );
      } );

      // We can probably remove the unbind calls in 2.0
      // all event bindings should go through this._on()
      this.element
        .off( this.eventNamespace )
        .removeData( this.widgetFullName );
      this.widget()
        .off( this.eventNamespace )
        .removeAttr( "aria-disabled" );

      // Clean up events and states
      this.bindings.off( this.eventNamespace );
    },

    _destroy: $.noop,

    widget: function() {
      return this.element;
    },

    option: function( key, value ) {
      var options = key;
      var parts;
      var curOption;
      var i;

      if ( arguments.length === 0 ) {

        // Don't return a reference to the internal hash
        return $.widget.extend( {}, this.options );
      }

      if ( typeof key === "string" ) {

        // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
        options = {};
        parts = key.split( "." );
        key = parts.shift();
        if ( parts.length ) {
          curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
          for ( i = 0; i < parts.length - 1; i++ ) {
            curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
            curOption = curOption[ parts[ i ] ];
          }
          key = parts.pop();
          if ( arguments.length === 1 ) {
            return curOption[ key ] === undefined ? null : curOption[ key ];
          }
          curOption[ key ] = value;
        } else {
          if ( arguments.length === 1 ) {
            return this.options[ key ] === undefined ? null : this.options[ key ];
          }
          options[ key ] = value;
        }
      }

      this._setOptions( options );

      return this;
    },

    _setOptions: function( options ) {
      var key;

      for ( key in options ) {
        this._setOption( key, options[ key ] );
      }

      return this;
    },

    _setOption: function( key, value ) {
      if ( key === "classes" ) {
        this._setOptionClasses( value );
      }

      this.options[ key ] = value;

      if ( key === "disabled" ) {
        this._setOptionDisabled( value );
      }

      return this;
    },

    _setOptionClasses: function( value ) {
      var classKey, elements, currentElements;

      for ( classKey in value ) {
        currentElements = this.classesElementLookup[ classKey ];
        if ( value[ classKey ] === this.options.classes[ classKey ] ||
          !currentElements ||
          !currentElements.length ) {
          continue;
        }

        // We are doing this to create a new jQuery object because the _removeClass() call
        // on the next line is going to destroy the reference to the current elements being
        // tracked. We need to save a copy of this collection so that we can add the new classes
        // below.
        elements = $( currentElements.get() );
        this._removeClass( currentElements, classKey );

        // We don't use _addClass() here, because that uses this.options.classes
        // for generating the string of classes. We want to use the value passed in from
        // _setOption(), this is the new value of the classes option which was passed to
        // _setOption(). We pass this value directly to _classes().
        elements.addClass( this._classes( {
          element: elements,
          keys: classKey,
          classes: value,
          add: true
        } ) );
      }
    },

    _setOptionDisabled: function( value ) {
      this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

      // If the widget is becoming disabled, then nothing is interactive
      if ( value ) {
        this._removeClass( this.hoverable, null, "ui-state-hover" );
        this._removeClass( this.focusable, null, "ui-state-focus" );
      }
    },

    enable: function() {
      return this._setOptions( { disabled: false } );
    },

    disable: function() {
      return this._setOptions( { disabled: true } );
    },

    _classes: function( options ) {
      var full = [];
      var that = this;

      options = $.extend( {
        element: this.element,
        classes: this.options.classes || {}
      }, options );

      function processClassString( classes, checkOption ) {
        var current, i;
        for ( i = 0; i < classes.length; i++ ) {
          current = that.classesElementLookup[ classes[ i ] ] || $();
          if ( options.add ) {
            current = $( $.unique( current.get().concat( options.element.get() ) ) );
          } else {
            current = $( current.not( options.element ).get() );
          }
          that.classesElementLookup[ classes[ i ] ] = current;
          full.push( classes[ i ] );
          if ( checkOption && options.classes[ classes[ i ] ] ) {
            full.push( options.classes[ classes[ i ] ] );
          }
        }
      }

      this._on( options.element, {
        "remove": "_untrackClassesElement"
      } );

      if ( options.keys ) {
        processClassString( options.keys.match( /\S+/g ) || [], true );
      }
      if ( options.extra ) {
        processClassString( options.extra.match( /\S+/g ) || [] );
      }

      return full.join( " " );
    },

    _untrackClassesElement: function( event ) {
      var that = this;
      $.each( that.classesElementLookup, function( key, value ) {
        if ( $.inArray( event.target, value ) !== -1 ) {
          that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
        }
      } );
    },

    _removeClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, false );
    },

    _addClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, true );
    },

    _toggleClass: function( element, keys, extra, add ) {
      add = ( typeof add === "boolean" ) ? add : extra;
      var shift = ( typeof element === "string" || element === null ),
        options = {
          extra: shift ? keys : extra,
          keys: shift ? element : keys,
          element: shift ? this.element : element,
          add: add
        };
      options.element.toggleClass( this._classes( options ), add );
      return this;
    },

    _on: function( suppressDisabledCheck, element, handlers ) {
      var delegateElement;
      var instance = this;

      // No suppressDisabledCheck flag, shuffle arguments
      if ( typeof suppressDisabledCheck !== "boolean" ) {
        handlers = element;
        element = suppressDisabledCheck;
        suppressDisabledCheck = false;
      }

      // No element argument, shuffle and use this.element
      if ( !handlers ) {
        handlers = element;
        element = this.element;
        delegateElement = this.widget();
      } else {
        element = delegateElement = $( element );
        this.bindings = this.bindings.add( element );
      }

      $.each( handlers, function( event, handler ) {
        function handlerProxy() {

          // Allow widgets to customize the disabled handling
          // - disabled as an array instead of boolean
          // - disabled class as method for disabling individual parts
          if ( !suppressDisabledCheck &&
            ( instance.options.disabled === true ||
              $( this ).hasClass( "ui-state-disabled" ) ) ) {
            return;
          }
          return ( typeof handler === "string" ? instance[ handler ] : handler )
            .apply( instance, arguments );
        }

        // Copy the guid so direct unbinding works
        if ( typeof handler !== "string" ) {
          handlerProxy.guid = handler.guid =
            handler.guid || handlerProxy.guid || $.guid++;
        }

        var match = event.match( /^([\w:-]*)\s*(.*)$/ );
        var eventName = match[ 1 ] + instance.eventNamespace;
        var selector = match[ 2 ];

        if ( selector ) {
          delegateElement.on( eventName, selector, handlerProxy );
        } else {
          element.on( eventName, handlerProxy );
        }
      } );
    },

    _off: function( element, eventName ) {
      eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
        this.eventNamespace;
      element.off( eventName ).off( eventName );

      // Clear the stack to avoid memory leaks (#10056)
      this.bindings = $( this.bindings.not( element ).get() );
      this.focusable = $( this.focusable.not( element ).get() );
      this.hoverable = $( this.hoverable.not( element ).get() );
    },

    _delay: function( handler, delay ) {
      function handlerProxy() {
        return ( typeof handler === "string" ? instance[ handler ] : handler )
          .apply( instance, arguments );
      }
      var instance = this;
      return setTimeout( handlerProxy, delay || 0 );
    },

    _hoverable: function( element ) {
      this.hoverable = this.hoverable.add( element );
      this._on( element, {
        mouseenter: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
        },
        mouseleave: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
        }
      } );
    },

    _focusable: function( element ) {
      this.focusable = this.focusable.add( element );
      this._on( element, {
        focusin: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
        },
        focusout: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
        }
      } );
    },

    _trigger: function( type, event, data ) {
      var prop, orig;
      var callback = this.options[ type ];

      data = data || {};
      event = $.Event( event );
      event.type = ( type === this.widgetEventPrefix ?
        type :
        this.widgetEventPrefix + type ).toLowerCase();

      // The original event may come from any element
      // so we need to reset the target on the new event
      event.target = this.element[ 0 ];

      // Copy original event properties over to the new event
      orig = event.originalEvent;
      if ( orig ) {
        for ( prop in orig ) {
          if ( !( prop in event ) ) {
            event[ prop ] = orig[ prop ];
          }
        }
      }

      this.element.trigger( event, data );
      return !( $.isFunction( callback ) &&
        callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
        event.isDefaultPrevented() );
    }
  };

  $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
    $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
      if ( typeof options === "string" ) {
        options = { effect: options };
      }

      var hasOptions;
      var effectName = !options ?
        method :
        options === true || typeof options === "number" ?
        defaultEffect :
        options.effect || defaultEffect;

      options = options || {};
      if ( typeof options === "number" ) {
        options = { duration: options };
      }

      hasOptions = !$.isEmptyObject( options );
      options.complete = callback;

      if ( options.delay ) {
        element.delay( options.delay );
      }

      if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
        element[ method ]( options );
      } else if ( effectName !== method && element[ effectName ] ) {
        element[ effectName ]( options.duration, options.easing, callback );
      } else {
        element.queue( function( next ) {
          $( this )[ method ]();
          if ( callback ) {
            callback.call( element[ 0 ] );
          }
          next();
        } );
      }
    };
  } );

  var widget = $.widget;




}));

/*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* jshint nomen:false */
/* global define, require, window, document, location, Blob, FormData */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery-ui/ui/widget'
        ], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(
            require('jquery'),
            require('./vendor/jquery.ui.widget')
        );
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Detect file input support, based on
    // http://viljamis.com/blog/2012/file-upload-support-on-mobile/
    $.support.fileInput = !(new RegExp(
        // Handle devices which give false positives for the feature detection:
        '(Android (1\\.[0156]|2\\.[01]))' +
            '|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)' +
            '|(w(eb)?OSBrowser)|(webOS)' +
            '|(Kindle/(1\\.0|2\\.[05]|3\\.0))'
    ).test(window.navigator.userAgent) ||
        // Feature detection for all other devices:
        $('<input type="file"/>').prop('disabled'));

    // The FileReader API is not actually used, but works as feature detection,
    // as some Safari versions (5?) support XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads.
    // window.XMLHttpRequestUpload is not available on IE10, so we check for
    // window.ProgressEvent instead to detect XHR2 file upload capability:
    $.support.xhrFileUpload = !!(window.ProgressEvent && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // Detect support for Blob slicing (required for chunked uploads):
    $.support.blobSlice = window.Blob && (Blob.prototype.slice ||
        Blob.prototype.webkitSlice || Blob.prototype.mozSlice);

    // Helper function to create drag handlers for dragover/dragenter/dragleave:
    function getDragHandler(type) {
        var isDragOver = type === 'dragover';
        return function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var dataTransfer = e.dataTransfer;
            if (dataTransfer && $.inArray('Files', dataTransfer.types) !== -1 &&
                    this._trigger(
                        type,
                        $.Event(type, {delegatedEvent: e})
                    ) !== false) {
                e.preventDefault();
                if (isDragOver) {
                    dataTransfer.dropEffect = 'copy';
                }
            }
        };
    }

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The drop target element(s), by the default the complete document.
            // Set to null to disable drag & drop support:
            dropZone: $(document),
            // The paste target element(s), by the default undefined.
            // Set to a DOM node or jQuery object to enable file pasting:
            pasteZone: undefined,
            // The file input field(s), that are listened to for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // The following option limits the number of files uploaded with one
            // XHR request to keep the request size under or equal to the defined
            // limit in bytes:
            limitMultiFileUploadSize: undefined,
            // Multipart file uploads add a number of bytes to each uploaded file,
            // therefore the following option adds an overhead for each file used
            // in the limitMultiFileUploadSize configuration:
            limitMultiFileUploadSizeOverhead: 512,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,
            // By default, uploads are started automatically when adding files:
            autoUpload: true,

            // Error and info messages:
            messages: {
                uploadedBytes: 'Uploaded bytes exceed file size'
            },

            // Translation function, gets the message key to be translated
            // and an object with context specific data as arguments:
            i18n: function (message, context) {
                message = this.messages[message] || message.toString();
                if (context) {
                    $.each(context, function (key, value) {
                        message = message.replace('{' + key + '}', value);
                    });
                }
                return message;
            },

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uploads, else
            // once for each file selection.
            //
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows you to override plugin options as well as define ajax settings.
            //
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            //
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                if (e.isDefaultPrevented()) {
                    return false;
                }
                if (data.autoUpload || (data.autoUpload !== false &&
                        $(this).fileupload('option', 'autoUpload'))) {
                    data.process().done(function () {
                        data.submit();
                    });
                }
            },

            // Other callbacks:

            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);

            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);

            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);

            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);

            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);

            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);

            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);

            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);

            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);

            // Callback for change events of the fileInput(s):
            // change: function (e, data) {}, // .bind('fileuploadchange', func);

            // Callback for paste events to the pasteZone(s):
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);

            // Callback for drop events of the dropZone(s):
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);

            // Callback for dragover events of the dropZone(s):
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // Callback for the start of each chunk upload request:
            // chunksend: function (e, data) {}, // .bind('fileuploadchunksend', func);

            // Callback for successful chunk uploads:
            // chunkdone: function (e, data) {}, // .bind('fileuploadchunkdone', func);

            // Callback for failed (abort or error) chunk uploads:
            // chunkfail: function (e, data) {}, // .bind('fileuploadchunkfail', func);

            // Callback for completed (success, abort or error) chunk upload requests:
            // chunkalways: function (e, data) {}, // .bind('fileuploadchunkalways', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false,
            timeout: 0
        },

        // A list of options that require reinitializing event listeners and/or
        // special initialization code:
        _specialOptions: [
            'fileInput',
            'dropZone',
            'pasteZone',
            'multipart',
            'forceIframeTransport'
        ],

        _blobSlice: $.support.blobSlice && function () {
            var slice = this.slice || this.webkitSlice || this.mozSlice;
            return slice.apply(this, arguments);
        },

        _BitrateTimer: function () {
            this.timestamp = ((Date.now) ? Date.now() : (new Date()).getTime());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if ($.type(options.formData) === 'function') {
                return options.formData(options.form);
            }
            if ($.isArray(options.formData)) {
                return options.formData;
            }
            if ($.type(options.formData) === 'object') {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _initProgressObject: function (obj) {
            var progress = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            if (obj._progress) {
                $.extend(obj._progress, progress);
            } else {
                obj._progress = progress;
            }
        },

        _initResponseObject: function (obj) {
            var prop;
            if (obj._response) {
                for (prop in obj._response) {
                    if (obj._response.hasOwnProperty(prop)) {
                        delete obj._response[prop];
                    }
                }
            } else {
                obj._response = {};
            }
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = ((Date.now) ? Date.now() : (new Date()).getTime()),
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                loaded = Math.floor(
                    e.loaded / e.total * (data.chunkSize || data._progress.total)
                ) + (data.uploadedBytes || 0);
                // Add the difference from the previously loaded state
                // to the global loaded counter:
                this._progress.loaded += (loaded - data._progress.loaded);
                this._progress.bitrate = this._bitrateTimer.getBitrate(
                    now,
                    this._progress.loaded,
                    data.bitrateInterval
                );
                data._progress.loaded = data.loaded = loaded;
                data._progress.bitrate = data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger(
                    'progress',
                    $.Event('progress', {delegatedEvent: e}),
                    data
                );
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger(
                    'progressall',
                    $.Event('progressall', {delegatedEvent: e}),
                    this._progress
                );
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _isInstanceOf: function (type, obj) {
            // Cross-frame instanceof check
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        },

        _initXHRData: function (options) {
            var that = this,
                formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = $.type(options.paramName) === 'array' ?
                    options.paramName[0] : options.paramName;
            options.headers = $.extend({}, options.headers);
            if (options.contentRange) {
                options.headers['Content-Range'] = options.contentRange;
            }
            if (!multipart || options.blob || !this._isInstanceOf('File', file)) {
                options.headers['Content-Disposition'] = 'attachment; filename="' +
                    encodeURI(file.uploadName || file.name) + '"';
            }
            if (!multipart) {
                options.contentType = file.type || 'application/octet-stream';
                options.data = options.blob || file;
            } else if ($.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: ($.type(options.paramName) === 'array' &&
                                    options.paramName[index]) || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (that._isInstanceOf('FormData', options.formData)) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(
                            paramName,
                            options.blob,
                            file.uploadName || file.name
                        );
                    } else {
                        $.each(options.files, function (index, file) {
                            // This check allows the tests to run with
                            // dummy objects:
                            if (that._isInstanceOf('File', file) ||
                                    that._isInstanceOf('Blob', file)) {
                                formData.append(
                                    ($.type(options.paramName) === 'array' &&
                                        options.paramName[index]) || paramName,
                                    file,
                                    file.uploadName || file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            var targetHost = $('<a></a>').prop('href', options.url).prop('host');
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && targetHost && targetHost !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options);
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
                // If the given file input doesn't have an associated form,
                // use the default widget file input's form:
                if (!options.form.length) {
                    options.form = $(this.options.fileInput.prop('form'));
                }
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type ||
                ($.type(options.form.prop('method')) === 'string' &&
                    options.form.prop('method')) || ''
                ).toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT' &&
                    options.type !== 'PATCH') {
                options.type = 'POST';
            }
            if (!options.formAcceptCharset) {
                options.formAcceptCharset = options.form.attr('accept-charset');
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // jQuery 1.6 doesn't provide .state(),
        // while jQuery 1.8+ removed .isRejected() and .isResolved():
        _getDeferredState: function (deferred) {
            if (deferred.state) {
                return deferred.state();
            }
            if (deferred.isResolved()) {
                return 'resolved';
            }
            if (deferred.isRejected()) {
                return 'rejected';
            }
            return 'pending';
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Adds convenience methods to the data callback argument:
        _addConvenienceMethods: function (e, data) {
            var that = this,
                getPromise = function (args) {
                    return $.Deferred().resolveWith(that, args).promise();
                };
            data.process = function (resolveFunc, rejectFunc) {
                if (resolveFunc || rejectFunc) {
                    data._processQueue = this._processQueue =
                        (this._processQueue || getPromise([this])).then(
                            function () {
                                if (data.errorThrown) {
                                    return $.Deferred()
                                        .rejectWith(that, [data]).promise();
                                }
                                return getPromise(arguments);
                            }
                        ).then(resolveFunc, rejectFunc);
                }
                return this._processQueue || getPromise([this]);
            };
            data.submit = function () {
                if (this.state() !== 'pending') {
                    data.jqXHR = this.jqXHR =
                        (that._trigger(
                            'submit',
                            $.Event('submit', {delegatedEvent: e}),
                            this
                        ) !== false) && that._onSend(e, this);
                }
                return this.jqXHR || that._getXHRPromise();
            };
            data.abort = function () {
                if (this.jqXHR) {
                    return this.jqXHR.abort();
                }
                this.errorThrown = 'abort';
                that._trigger('fail', null, this);
                return that._getXHRPromise(false);
            };
            data.state = function () {
                if (this.jqXHR) {
                    return that._getDeferredState(this.jqXHR);
                }
                if (this._processQueue) {
                    return that._getDeferredState(this._processQueue);
                }
            };
            data.processing = function () {
                return !this.jqXHR && this._processQueue && that
                    ._getDeferredState(this._processQueue) === 'pending';
            };
            data.progress = function () {
                return this._progress;
            };
            data.response = function () {
                return this._response;
            };
        },

        // Parses the Range header from the server response
        // and returns the uploaded bytes:
        _getUploadedBytes: function (jqXHR) {
            var range = jqXHR.getResponseHeader('Range'),
                parts = range && range.split('-'),
                upperBytesPos = parts && parts.length > 1 &&
                    parseInt(parts[1], 10);
            return upperBytesPos && upperBytesPos + 1;
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            options.uploadedBytes = options.uploadedBytes || 0;
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes,
                mcs = options.maxChunkSize || fs,
                slice = this._blobSlice,
                dfd = $.Deferred(),
                promise = dfd.promise(),
                jqXHR,
                upload;
            if (!(this._isXHRUpload(options) && slice && (ub || ($.type(mcs) === 'function' ? mcs(options) : mcs) < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = options.i18n('uploadedBytes');
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // The chunk upload method:
            upload = function () {
                // Clone the options object for each chunk upload:
                var o = $.extend({}, options),
                    currentLoaded = o._progress.loaded;
                o.blob = slice.call(
                    file,
                    ub,
                    ub + ($.type(mcs) === 'function' ? mcs(o) : mcs),
                    file.type
                );
                // Store the current chunk size, as the blob itself
                // will be dereferenced after data processing:
                o.chunkSize = o.blob.size;
                // Expose the chunk bytes position range:
                o.contentRange = 'bytes ' + ub + '-' +
                    (ub + o.chunkSize - 1) + '/' + fs;
                // Process the upload data (the blob and potential form data):
                that._initXHRData(o);
                // Add progress listeners for this chunk upload:
                that._initProgressListener(o);
                jqXHR = ((that._trigger('chunksend', null, o) !== false && $.ajax(o)) ||
                        that._getXHRPromise(false, o.context))
                    .done(function (result, textStatus, jqXHR) {
                        ub = that._getUploadedBytes(jqXHR) ||
                            (ub + o.chunkSize);
                        // Create a progress event if no final progress event
                        // with loaded equaling total has been triggered
                        // for this chunk:
                        if (currentLoaded + o.chunkSize - o._progress.loaded) {
                            that._onProgress($.Event('progress', {
                                lengthComputable: true,
                                loaded: ub - o.uploadedBytes,
                                total: ub - o.uploadedBytes
                            }), o);
                        }
                        options.uploadedBytes = o.uploadedBytes = ub;
                        o.result = result;
                        o.textStatus = textStatus;
                        o.jqXHR = jqXHR;
                        that._trigger('chunkdone', null, o);
                        that._trigger('chunkalways', null, o);
                        if (ub < fs) {
                            // File upload not yet complete,
                            // continue with the next chunk:
                            upload();
                        } else {
                            dfd.resolveWith(
                                o.context,
                                [result, textStatus, jqXHR]
                            );
                        }
                    })
                    .fail(function (jqXHR, textStatus, errorThrown) {
                        o.jqXHR = jqXHR;
                        o.textStatus = textStatus;
                        o.errorThrown = errorThrown;
                        that._trigger('chunkfail', null, o);
                        that._trigger('chunkalways', null, o);
                        dfd.rejectWith(
                            o.context,
                            [jqXHR, textStatus, errorThrown]
                        );
                    });
            };
            this._enhancePromise(promise);
            promise.abort = function () {
                return jqXHR.abort();
            };
            upload();
            return promise;
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
                // Reset the global progress values:
                this._progress.loaded = this._progress.total = 0;
                this._progress.bitrate = 0;
            }
            // Make sure the container objects for the .response() and
            // .progress() methods on the data object are available
            // and reset to their initial state:
            this._initResponseObject(data);
            this._initProgressObject(data);
            data._progress.loaded = data.loaded = data.uploadedBytes || 0;
            data._progress.total = data.total = this._getTotal(data.files) || 1;
            data._progress.bitrate = data.bitrate = 0;
            this._active += 1;
            // Initialize the global progress values:
            this._progress.loaded += data.loaded;
            this._progress.total += data.total;
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            var total = options._progress.total,
                response = options._response;
            if (options._progress.loaded < total) {
                // Create a progress event if no final progress event
                // with loaded equaling total has been triggered:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: total,
                    total: total
                }), options);
            }
            response.result = options.result = result;
            response.textStatus = options.textStatus = textStatus;
            response.jqXHR = options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            var response = options._response;
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._progress.loaded -= options._progress.loaded;
                this._progress.total -= options._progress.total;
            }
            response.jqXHR = options.jqXHR = jqXHR;
            response.textStatus = options.textStatus = textStatus;
            response.errorThrown = options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            // jqXHRorResult, textStatus and jqXHRorError are added to the
            // options object via done and fail callbacks
            this._trigger('always', null, options);
        },

        _onSend: function (e, data) {
            if (!data.submit) {
                this._addConvenienceMethods(e, data);
            }
            var that = this,
                jqXHR,
                aborted,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function () {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        ((aborted || that._trigger(
                            'send',
                            $.Event('send', {delegatedEvent: e}),
                            options
                        ) === false) &&
                        that._getXHRPromise(false, options.context, aborted)) ||
                        that._chunkedUpload(options) || $.ajax(options)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        that._sending -= 1;
                        that._active -= 1;
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (that._getDeferredState(nextSlot) === 'pending') {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                        if (that._active === 0) {
                            // The stop callback is triggered when all uploads have
                            // been completed, equivalent to the global ajaxStop event:
                            that._trigger('stop');
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.then(send);
                } else {
                    this._sequence = this._sequence.then(send, send);
                    pipe = this._sequence;
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    aborted = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(options.context, aborted);
                        }
                        return send();
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                files = data.files,
                filesLength = files.length,
                limit = options.limitMultiFileUploads,
                limitSize = options.limitMultiFileUploadSize,
                overhead = options.limitMultiFileUploadSizeOverhead,
                batchSize = 0,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i,
                j = 0;
            if (!filesLength) {
                return false;
            }
            if (limitSize && files[0].size === undefined) {
                limitSize = undefined;
            }
            if (!(options.singleFileUploads || limit || limitSize) ||
                    !this._isXHRUpload(options)) {
                fileSet = [files];
                paramNameSet = [paramName];
            } else if (!(options.singleFileUploads || limitSize) && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i += limit) {
                    fileSet.push(files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else if (!options.singleFileUploads && limitSize) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < filesLength; i = i + 1) {
                    batchSize += files[i].size + overhead;
                    if (i + 1 === filesLength ||
                            ((batchSize + files[i + 1].size + overhead) > limitSize) ||
                            (limit && i + 1 - j >= limit)) {
                        fileSet.push(files.slice(j, i + 1));
                        paramNameSlice = paramName.slice(j, i + 1);
                        if (!paramNameSlice.length) {
                            paramNameSlice = paramName;
                        }
                        paramNameSet.push(paramNameSlice);
                        j = i + 1;
                        batchSize = 0;
                    }
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = files;
            $.each(fileSet || files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                that._initResponseObject(newData);
                that._initProgressObject(newData);
                that._addConvenienceMethods(e, newData);
                result = that._trigger(
                    'add',
                    $.Event('add', {delegatedEvent: e}),
                    newData
                );
                return result;
            });
            return result;
        },

        _replaceFileInput: function (data) {
            var input = data.fileInput,
                inputClone = input.clone(true),
                restoreFocus = input.is(document.activeElement);
            // Add a reference for the new cloned file input to the data argument:
            data.fileInputClone = inputClone;
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // If the fileInput had focus before it was detached,
            // restore focus to the inputClone.
            if (restoreFocus) {
                inputClone.focus();
            }
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // elements set with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _handleFileTreeEntry: function (entry, path) {
            var that = this,
                dfd = $.Deferred(),
                entries = [],
                dirReader,
                errorHandler = function (e) {
                    if (e && !e.entry) {
                        e.entry = entry;
                    }
                    // Since $.when returns immediately if one
                    // Deferred is rejected, we use resolve instead.
                    // This allows valid files and invalid items
                    // to be returned together in one set:
                    dfd.resolve([e]);
                },
                successHandler = function (entries) {
                    that._handleFileTreeEntries(
                        entries,
                        path + entry.name + '/'
                    ).done(function (files) {
                        dfd.resolve(files);
                    }).fail(errorHandler);
                },
                readEntries = function () {
                    dirReader.readEntries(function (results) {
                        if (!results.length) {
                            successHandler(entries);
                        } else {
                            entries = entries.concat(results);
                            readEntries();
                        }
                    }, errorHandler);
                };
            path = path || '';
            if (entry.isFile) {
                if (entry._file) {
                    // Workaround for Chrome bug #149735
                    entry._file.relativePath = path;
                    dfd.resolve(entry._file);
                } else {
                    entry.file(function (file) {
                        file.relativePath = path;
                        dfd.resolve(file);
                    }, errorHandler);
                }
            } else if (entry.isDirectory) {
                dirReader = entry.createReader();
                readEntries();
            } else {
                // Return an empty list for file system items
                // other than files or directories:
                dfd.resolve([]);
            }
            return dfd.promise();
        },

        _handleFileTreeEntries: function (entries, path) {
            var that = this;
            return $.when.apply(
                $,
                $.map(entries, function (entry) {
                    return that._handleFileTreeEntry(entry, path);
                })
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _getDroppedFiles: function (dataTransfer) {
            dataTransfer = dataTransfer || {};
            var items = dataTransfer.items;
            if (items && items.length && (items[0].webkitGetAsEntry ||
                    items[0].getAsEntry)) {
                return this._handleFileTreeEntries(
                    $.map(items, function (item) {
                        var entry;
                        if (item.webkitGetAsEntry) {
                            entry = item.webkitGetAsEntry();
                            if (entry) {
                                // Workaround for Chrome bug #149735:
                                entry._file = item.getAsFile();
                            }
                            return entry;
                        }
                        return item.getAsEntry();
                    })
                );
            }
            return $.Deferred().resolve(
                $.makeArray(dataTransfer.files)
            ).promise();
        },

        _getSingleFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var entries = fileInput.prop('webkitEntries') ||
                    fileInput.prop('entries'),
                files,
                value;
            if (entries && entries.length) {
                return this._handleFileTreeEntries(entries);
            }
            files = $.makeArray(fileInput.prop('files'));
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return $.Deferred().resolve([]).promise();
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            } else if (files[0].name === undefined && files[0].fileName) {
                // File normalization for Safari 4 and Firefox 3:
                $.each(files, function (index, file) {
                    file.name = file.fileName;
                    file.size = file.fileSize;
                });
            }
            return $.Deferred().resolve(files).promise();
        },

        _getFileInputFiles: function (fileInput) {
            if (!(fileInput instanceof $) || fileInput.length === 1) {
                return this._getSingleFileInputFiles(fileInput);
            }
            return $.when.apply(
                $,
                $.map(fileInput, this._getSingleFileInputFiles)
            ).then(function () {
                return Array.prototype.concat.apply(
                    [],
                    arguments
                );
            });
        },

        _onChange: function (e) {
            var that = this,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            this._getFileInputFiles(data.fileInput).always(function (files) {
                data.files = files;
                if (that.options.replaceFileInput) {
                    that._replaceFileInput(data);
                }
                if (that._trigger(
                        'change',
                        $.Event('change', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    that._onAdd(e, data);
                }
            });
        },

        _onPaste: function (e) {
            var items = e.originalEvent && e.originalEvent.clipboardData &&
                    e.originalEvent.clipboardData.items,
                data = {files: []};
            if (items && items.length) {
                $.each(items, function (index, item) {
                    var file = item.getAsFile && item.getAsFile();
                    if (file) {
                        data.files.push(file);
                    }
                });
                if (this._trigger(
                        'paste',
                        $.Event('paste', {delegatedEvent: e}),
                        data
                    ) !== false) {
                    this._onAdd(e, data);
                }
            }
        },

        _onDrop: function (e) {
            e.dataTransfer = e.originalEvent && e.originalEvent.dataTransfer;
            var that = this,
                dataTransfer = e.dataTransfer,
                data = {};
            if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
                e.preventDefault();
                this._getDroppedFiles(dataTransfer).always(function (files) {
                    data.files = files;
                    if (that._trigger(
                            'drop',
                            $.Event('drop', {delegatedEvent: e}),
                            data
                        ) !== false) {
                        that._onAdd(e, data);
                    }
                });
            }
        },

        _onDragOver: getDragHandler('dragover'),

        _onDragEnter: getDragHandler('dragenter'),

        _onDragLeave: getDragHandler('dragleave'),

        _initEventHandlers: function () {
            if (this._isXHRUpload(this.options)) {
                this._on(this.options.dropZone, {
                    dragover: this._onDragOver,
                    drop: this._onDrop,
                    // event.preventDefault() on dragenter is required for IE10+:
                    dragenter: this._onDragEnter,
                    // dragleave is not required, but added for completeness:
                    dragleave: this._onDragLeave
                });
                this._on(this.options.pasteZone, {
                    paste: this._onPaste
                });
            }
            if ($.support.fileInput) {
                this._on(this.options.fileInput, {
                    change: this._onChange
                });
            }
        },

        _destroyEventHandlers: function () {
            this._off(this.options.dropZone, 'dragenter dragleave dragover drop');
            this._off(this.options.pasteZone, 'paste');
            this._off(this.options.fileInput, 'change');
        },

        _destroy: function () {
            this._destroyEventHandlers();
        },

        _setOption: function (key, value) {
            var reinit = $.inArray(key, this._specialOptions) !== -1;
            if (reinit) {
                this._destroyEventHandlers();
            }
            this._super(key, value);
            if (reinit) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input[type="file"]') ?
                        this.element : this.element.find('input[type="file"]');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
            if (!(options.pasteZone instanceof $)) {
                options.pasteZone = $(options.pasteZone);
            }
        },

        _getRegExp: function (str) {
            var parts = str.split('/'),
                modifiers = parts.pop();
            parts.shift();
            return new RegExp(parts.join('/'), modifiers);
        },

        _isRegExpOption: function (key, value) {
            return key !== 'url' && $.type(value) === 'string' &&
                /^\/.*\/[igm]{0,3}$/.test(value);
        },

        _initDataAttributes: function () {
            var that = this,
                options = this.options,
                data = this.element.data();
            // Initialize options set via HTML5 data-attributes:
            $.each(
                this.element[0].attributes,
                function (index, attr) {
                    var key = attr.name.toLowerCase(),
                        value;
                    if (/^data-/.test(key)) {
                        // Convert hyphen-ated key to camelCase:
                        key = key.slice(5).replace(/-[a-z]/g, function (str) {
                            return str.charAt(1).toUpperCase();
                        });
                        value = data[key];
                        if (that._isRegExpOption(key, value)) {
                            value = that._getRegExp(value);
                        }
                        options[key] = value;
                    }
                }
            );
        },

        _create: function () {
            this._initDataAttributes();
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = 0;
            this._initProgressObject(this);
            this._initEventHandlers();
        },

        // This method is exposed to the widget API and allows to query
        // the number of active uploads:
        active: function () {
            return this._active;
        },

        // This method is exposed to the widget API and allows to query
        // the widget upload progress.
        // It returns an object with loaded, total and bitrate properties
        // for the running uploads:
        progress: function () {
            return this._progress;
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            var that = this;
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                this._getFileInputFiles(data.fileInput).always(function (files) {
                    data.files = files;
                    that._onAdd(null, data);
                });
            } else {
                data.files = $.makeArray(data.files);
                this._onAdd(null, data);
            }
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files or fileInput property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    var that = this,
                        dfd = $.Deferred(),
                        promise = dfd.promise(),
                        jqXHR,
                        aborted;
                    promise.abort = function () {
                        aborted = true;
                        if (jqXHR) {
                            return jqXHR.abort();
                        }
                        dfd.reject(null, 'abort', 'abort');
                        return promise;
                    };
                    this._getFileInputFiles(data.fileInput).always(
                        function (files) {
                            if (aborted) {
                                return;
                            }
                            if (!files.length) {
                                dfd.reject();
                                return;
                            }
                            data.files = files;
                            jqXHR = that._onSend(null, data);
                            jqXHR.then(
                                function (result, textStatus, jqXHR) {
                                    dfd.resolve(result, textStatus, jqXHR);
                                },
                                function (jqXHR, textStatus, errorThrown) {
                                    dfd.reject(jqXHR, textStatus, errorThrown);
                                }
                            );
                        }
                    );
                    return this._enhancePromise(promise);
                }
                data.files = $.makeArray(data.files);
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

/*
 * jQuery Iframe Transport Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

/* global define, require, window, document, JSON */

;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS:
        factory(require('jquery'));
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0,
        jsonAPI = $,
        jsonParse = 'parseJSON';

    if ('JSON' in window && 'parse' in JSON) {
      jsonAPI = JSON;
      jsonParse = 'parse';
    }

    // The iframe transport accepts four additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    // options.initialIframeSrc: the URL of the initial iframe src,
    //  by default set to "javascript:false;"
    $.ajaxTransport('iframe', function (options) {
        if (options.async) {
            // javascript:false as initial iframe src
            // prevents warning popups on HTTPS in IE6:
            /*jshint scripturl: true */
            var initialIframeSrc = options.initialIframeSrc || 'javascript:false;',
            /*jshint scripturl: false */
                form,
                iframe,
                addParamChar;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    form.attr('accept-charset', options.formAcceptCharset);
                    addParamChar = /\?/.test(options.url) ? '&' : '?';
                    // XDomainRequest only supports GET and POST:
                    if (options.type === 'DELETE') {
                        options.url = options.url + addParamChar + '_method=DELETE';
                        options.type = 'POST';
                    } else if (options.type === 'PUT') {
                        options.url = options.url + addParamChar + '_method=PUT';
                        options.type = 'POST';
                    } else if (options.type === 'PATCH') {
                        options.url = options.url + addParamChar + '_method=PATCH';
                        options.type = 'POST';
                    }
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    counter += 1;
                    iframe = $(
                        '<iframe src="' + initialIframeSrc +
                            '" name="iframe-transport-' + counter + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="' + initialIframeSrc + '"></iframe>')
                                    .appendTo(form);
                                window.setTimeout(function () {
                                    // Removing the form in a setTimeout call
                                    // allows Chrome's developer tools to display
                                    // the response result
                                    form.remove();
                                }, 0);
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                            // Remove the HTML5 form attribute from the input(s):
                            options.fileInput.removeAttr('form');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                // Restore the original name and form properties:
                                $(input)
                                    .prop('name', clone.prop('name'))
                                    .attr('form', clone.attr('form'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', initialIframeSrc);
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, xml
    // and script.
    // Please note that the Content-Type for JSON responses has to be text/plain
    // or text/html, if the browser doesn't include application/json in the
    // Accept header, else IE will show a download dialog.
    // The Content-Type for XML responses on the other hand has to be always
    // application/xml or text/xml, so IE properly parses the XML response.
    // See also
    // https://github.com/blueimp/jQuery-File-Upload/wiki/Setup#content-type-negotiation
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return iframe && $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return iframe && jsonAPI[jsonParse]($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return iframe && $(iframe[0].body).html();
            },
            'iframe xml': function (iframe) {
                var xmlDoc = iframe && iframe[0];
                return xmlDoc && $.isXMLDoc(xmlDoc) ? xmlDoc :
                        $.parseXML((xmlDoc.XMLDocument && xmlDoc.XMLDocument.xml) ||
                            $(xmlDoc.body).html());
            },
            'iframe script': function (iframe) {
                return iframe && $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));

/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function h(e,t,o,n){return $(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?o['offset'+e]+n['margin'+('Height'===e?'Top':'Left')]+n['margin'+('Height'===e?'Bottom':'Right')]:0)}function c(){var e=document.body,t=document.documentElement,o=r(10)&&getComputedStyle(t);return{height:h('Height',e,t,o),width:h('Width',e,t,o)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c():{},d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&'HTML'===o.nodeName&&(a.top=$(a.top,0),a.left=$(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var y=parseFloat(m.marginTop,10),w=parseFloat(m.marginLeft,10);b.top-=h-y,b.bottom-=h-y,b.left-=c-w,b.right-=c-w,b.marginTop=y,b.marginLeft=w}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function y(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=$(o.clientWidth,window.innerWidth||0),r=$(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function w(e){var n=e.nodeName;return'BODY'===n||'HTML'===n?!1:'fixed'===t(e,'position')||w(o(e))}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0},d=p?E(e):a(e,t);if('viewport'===r)s=y(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!w(d)){var m=c(),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}else s=f}return s.left+=i,s.top+=i,s.right-=i,s.bottom-=i,s}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}function S(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),n=parseFloat(t.marginLeft)+parseFloat(t.marginRight),i={width:e.offsetWidth+n,height:e.offsetHeight+o};return i}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function I(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function F(){this.state.eventsEnabled||(this.state=I(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function j(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function K(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function G(e){return'end'===e?'start':'start'===e?'end':e}function z(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}function V(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?$(document.documentElement.clientHeight,window.innerHeight||0):$(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function _(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function X(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:_(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var J=Math.min,Q=Math.round,Z=Math.floor,$=Math.max,ee='undefined'!=typeof window&&'undefined'!=typeof document,te=['Edge','Trident','Firefox'],oe=0,ne=0;ne<te.length;ne+=1)if(ee&&0<=navigator.userAgent.indexOf(te[ne])){oe=1;break}var i=ee&&window.Promise,ie=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=ee&&!!(window.MSInputMethodContext&&document.documentMode),pe=ee&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3),he={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ce=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return F.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ce.Utils=('undefined'==typeof window?global:window).PopperUtils,ce.placements=fe,ce.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:X,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=$(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=J(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!q(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,y=t(e.instance.popper),w=parseFloat(y['margin'+f],10),E=parseFloat(y['border'+f+'Width'],10),v=b-e.offsets.popper[m]-w-E;return v=$(J(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,Q(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case he.FLIP:p=[n,i];break;case he.CLOCKWISE:p=z(n);break;case he.COUNTERCLOCKWISE:p=z(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,y=-1!==['top','bottom'].indexOf(n),w=!!t.flipVariations&&(y&&'start'===r&&h||y&&'end'===r&&c||!y&&'start'===r&&g||!y&&'end'===r&&u);(m||b||w)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),w&&(r=G(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!q(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h={left:Z(i.left),top:Q(i.top),bottom:Q(i.bottom),right:Z(i.right)},c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==g?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var y='bottom'==c?-1:1,w='right'==g?-1:1;m[c]=d*y,m[g]=s*w,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return j(e.instance.popper,e.styles),K(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&j(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),j(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ce});

var count = 0;

var getTokenReCaptcha = async function() {
	if(typeof grecaptcha === 'object') {
		return await grecaptcha.execute(GLOBAL.locale.grecaptcha.site_key).then(function(token) {
			GLOBAL.locale.grecaptcha.token = token;
			ria.dispatch('reCaptcha', {token: token, count: ++count});

			$(function() {
				$('input[name=g-recaptcha-response]').val(token);
				clearInterval(GLOBAL.locale.grecaptcha.interval);
				GLOBAL.locale.grecaptcha.interval = setInterval(getTokenReCaptcha, 2*60*1000);
			})
			return token;
		});
	}
};

function loadReCaptcha (){
	var url = 'https://www.google.com/recaptcha/api.js?render=' + GLOBAL.locale.grecaptcha.site_key + '&onload=getTokenReCaptcha';
	loadJS( url );
}

$( window ).on( 'openModalLayer changeModalLayer', function( event, data ) {
	if (data.current.preset == 'registration' || data.current.preset == 'registration_social' ||
		data.current.preset == 'feedback' || data.current.preset == 'feedbackprivacy' ||
		data.current.preset == 'feedback_author' || data.current.preset == 'qa' || data.current.preset == 'search') {
		loadReCaptcha()
	}
});

$( window ).on('closeModalLayer', function(event, data) {
	clearInterval(GLOBAL.locale.grecaptcha.interval);
})
/*
 * QR Code generator library (JavaScript)
 *
 * Copyright (c) Project Nayuki. (MIT License)
 * https://www.nayuki.io/page/qr-code-generator-library
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * - The above copyright notice and this permission notice shall be included in
 *   all copies or substantial portions of the Software.
 * - The Software is provided "as is", without warranty of any kind, express or
 *   implied, including but not limited to the warranties of merchantability,
 *   fitness for a particular purpose and noninfringement. In no event shall the
 *   authors or copyright holders be liable for any claim, damages or other
 *   liability, whether in an action of contract, tort or otherwise, arising from,
 *   out of or in connection with the Software or the use or other dealings in the
 *   Software.
 */

"use strict";


/*
 * Module "qrcodegen", public members:
 * - Class QrCode:
 *   - Function encodeText(str text, QrCode.Ecc ecl) -> QrCode
 *   - Function encodeBinary(list<byte> data, QrCode.Ecc ecl) -> QrCode
 *   - Function encodeSegments(list<QrSegment> segs, QrCode.Ecc ecl,
 *         int minVersion=1, int maxVersion=40, mask=-1, boostEcl=true) -> QrCode
 *   - Constants int MIN_VERSION, MAX_VERSION
 *   - Constructor QrCode(list<int> datacodewords, int mask, int version, QrCode.Ecc ecl)
 *   - Fields int version, size, mask
 *   - Field QrCode.Ecc errorCorrectionLevel
 *   - Method getModule(int x, int y) -> bool
 *   - Method drawCanvas(int scale, int border, HTMLCanvasElement canvas) -> void
 *   - Method toSvgString(int border) -> str
 *   - Enum Ecc:
 *     - Constants LOW, MEDIUM, QUARTILE, HIGH
 *     - Field int ordinal
 * - Class QrSegment:
 *   - Function makeBytes(list<int> data) -> QrSegment
 *   - Function makeNumeric(str data) -> QrSegment
 *   - Function makeAlphanumeric(str data) -> QrSegment
 *   - Function makeSegments(str text) -> list<QrSegment>
 *   - Function makeEci(int assignVal) -> QrSegment
 *   - Constructor QrSegment(QrSegment.Mode mode, int numChars, list<int> bitData)
 *   - Field QrSegment.Mode mode
 *   - Field int numChars
 *   - Method getBits() -> list<int>
 *   - Constants RegExp NUMERIC_REGEX, ALPHANUMERIC_REGEX
 *   - Enum Mode:
 *     - Constants NUMERIC, ALPHANUMERIC, BYTE, KANJI, ECI
 */
var qrcodegen = new function() {

	/*---- QR Code symbol class ----*/

	/*
	 * A class that represents an immutable square grid of black and white cells for a QR Code symbol,
	 * with associated static functions to create a QR Code from user-supplied textual or binary data.
	 * This class covers the QR Code model 2 specification, supporting all versions (sizes)
	 * from 1 to 40, all 4 error correction levels.
	 * This constructor creates a new QR Code symbol with the given version number, error correction level, binary data array,
	 * and mask number. mask = -1 is for automatic choice, or 0 to 7 for fixed choice. This is a cumbersome low-level constructor
	 * that should not be invoked directly by the user. To go one level up, see the QrCode.encodeSegments() function.
	 */
	this.QrCode = function(datacodewords, mask, version, errCorLvl) {

		/*---- Constructor ----*/

		// Check arguments and handle simple scalar fields
		if (mask < -1 || mask > 7)
			throw "Mask value out of range";
		if (version < MIN_VERSION || version > MAX_VERSION)
			throw "Version value out of range";
		var size = version * 4 + 17;

		// Initialize both grids to be size*size arrays of Boolean false
		var row = [];
		for (var i = 0; i < size; i++)
			row.push(false);
		var modules = [];
		var isFunction = [];
		for (var i = 0; i < size; i++) {
			modules.push(row.slice());
			isFunction.push(row.slice());
		}

		// Handle grid fields, draw function patterns, draw all codewords
		drawFunctionPatterns();
		var allCodewords = appendErrorCorrection(datacodewords);
		drawCodewords(allCodewords);

		// Handle masking
		if (mask == -1) {  // Automatically choose best mask
			var minPenalty = Infinity;
			for (var i = 0; i < 8; i++) {
				drawFormatBits(i);
				applyMask(i);
				var penalty = getPenaltyScore();
				if (penalty < minPenalty) {
					mask = i;
					minPenalty = penalty;
				}
				applyMask(i);  // Undoes the mask due to XOR
			}
		}
		if (mask < 0 || mask > 7)
			throw "Assertion error";
		drawFormatBits(mask);  // Overwrite old format bits
		applyMask(mask);  // Apply the final choice of mask


		/*---- Read-only instance properties ----*/

		// This QR Code symbol's version number, which is always between 1 and 40 (inclusive).
		Object.defineProperty(this, "version", {value:version});

		// The width and height of this QR Code symbol, measured in modules.
		// Always equal to version * 4 + 17, in the range 21 to 177.
		Object.defineProperty(this, "size", {value:size});

		// The error correction level used in this QR Code symbol.
		Object.defineProperty(this, "errorCorrectionLevel", {value:errCorLvl});

		// The mask pattern used in this QR Code symbol, in the range 0 to 7 (i.e. unsigned 3-bit integer).
		// Note that even if the constructor was called with automatic masking requested
		// (mask = -1), the resulting object will still have a mask value between 0 and 7.
		Object.defineProperty(this, "mask", {value:mask});


		/*---- Accessor methods ----*/

		// (Public) Returns the color of the module (pixel) at the given coordinates, which is either
		// false for white or true for black. The top left corner has the coordinates (x=0, y=0).
		// If the given coordinates are out of bounds, then false (white) is returned.
		this.getModule = function(x, y) {
			return 0 <= x && x < size && 0 <= y && y < size && modules[y][x];
		};

		// (Package-private) Tests whether the module at the given coordinates is a function module (true) or not (false).
		// The top left corner has the coordinates (x=0, y=0). If the given coordinates are out of bounds, then false is returned.
		// The JavaScript version of this library has this method because it is impossible to access private variables of another object.
		this.isFunctionModule = function(x, y) {
			if (0 <= x && x < size && 0 <= y && y < size)
				return isFunction[y][x];
			else
				return false;  // Infinite border
		};


		/*---- Public instance methods ----*/

		// Draws this QR Code symbol with the given module scale and number of modules onto the given HTML canvas element.
		// The canvas will be resized to a width and height of (this.size + border * 2) * scale. The painted image will be purely
		// black and white with no transparent regions. The scale must be a positive integer, and the border must be a non-negative integer.
		this.drawCanvas = function(scale, border, canvas) {
			if (scale <= 0 || border < 0)
				throw "Value out of range";
			var width = (size + border * 2) * scale;
			canvas.width = width;
			canvas.height = width;
			var ctx = canvas.getContext("2d");
			for (var y = -border; y < size + border; y++) {
				for (var x = -border; x < size + border; x++) {
					ctx.fillStyle = this.getModule(x, y) ? "#000000" : "#FFFFFF";
					ctx.fillRect((x + border) * scale, (y + border) * scale, scale, scale);
				}
			}
		};

		// Based on the given number of border modules to add as padding, this returns a
		// string whose contents represents an SVG XML file that depicts this QR Code symbol.
		// Note that Unix newlines (\n) are always used, regardless of the platform.
		this.toSvgString = function(border) {
			if (border < 0)
				throw "Border must be non-negative";
			var result = '<?xml version="1.0" encoding="UTF-8"?>\n';
			result += '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n';
			result += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' +
				(size + border * 2) + ' ' + (size + border * 2) + '" stroke="none">\n';
			result += '\t<rect width="100%" height="100%" fill="#FFFFFF"/>\n';
			result += '\t<path d="';
			var head = true;
			for (var y = -border; y < size + border; y++) {
				for (var x = -border; x < size + border; x++) {
					if (this.getModule(x, y)) {
						if (head)
							head = false;
						else
							result += " ";
						result += "M" + (x + border) + "," + (y + border) + "h1v1h-1z";
					}
				}
			}
			result += '" fill="#000000"/>\n';
			result += '</svg>\n';
			return result;
		};


		/*---- Private helper methods for constructor: Drawing function modules ----*/

		function drawFunctionPatterns() {
			// Draw horizontal and vertical timing patterns
			for (var i = 0; i < size; i++) {
				setFunctionModule(6, i, i % 2 == 0);
				setFunctionModule(i, 6, i % 2 == 0);
			}

			// Draw 3 finder patterns (all corners except bottom right; overwrites some timing modules)
			drawFinderPattern(3, 3);
			drawFinderPattern(size - 4, 3);
			drawFinderPattern(3, size - 4);

			// Draw numerous alignment patterns
			var alignPatPos = QrCode.getAlignmentPatternPositions(version);
			var numAlign = alignPatPos.length;
			for (var i = 0; i < numAlign; i++) {
				for (var j = 0; j < numAlign; j++) {
					if (i == 0 && j == 0 || i == 0 && j == numAlign - 1 || i == numAlign - 1 && j == 0)
						continue;  // Skip the three finder corners
					else
						drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
				}
			}

			// Draw configuration data
			drawFormatBits(0);  // Dummy mask value; overwritten later in the constructor
			drawVersion();
		}


		// Draws two copies of the format bits (with its own error correction code)
		// based on the given mask and this object's error correction level field.
		function drawFormatBits(mask) {
			// Calculate error correction code and pack bits
			var data = errCorLvl.formatBits << 3 | mask;  // errCorrLvl is uint2, mask is uint3
			var rem = data;
			for (var i = 0; i < 10; i++)
				rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
			data = data << 10 | rem;
			data ^= 0x5412;  // uint15
			if (data >>> 15 != 0)
				throw "Assertion error";

			// Draw first copy
			for (var i = 0; i <= 5; i++)
				setFunctionModule(8, i, getBit(data, i));
			setFunctionModule(8, 7, getBit(data, 6));
			setFunctionModule(8, 8, getBit(data, 7));
			setFunctionModule(7, 8, getBit(data, 8));
			for (var i = 9; i < 15; i++)
				setFunctionModule(14 - i, 8, getBit(data, i));

			// Draw second copy
			for (var i = 0; i <= 7; i++)
				setFunctionModule(size - 1 - i, 8, getBit(data, i));
			for (var i = 8; i < 15; i++)
				setFunctionModule(8, size - 15 + i, getBit(data, i));
			setFunctionModule(8, size - 8, true);
		}


		// Draws two copies of the version bits (with its own error correction code),
		// based on this object's version field (which only has an effect for 7 <= version <= 40).
		function drawVersion() {
			if (version < 7)
				return;

			// Calculate error correction code and pack bits
			var rem = version;  // version is uint6, in the range [7, 40]
			for (var i = 0; i < 12; i++)
				rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
			var data = version << 12 | rem;  // uint18
			if (data >>> 18 != 0)
				throw "Assertion error";

			// Draw two copies
			for (var i = 0; i < 18; i++) {
				var bit = getBit(data, i);
				var a = size - 11 + i % 3, b = Math.floor(i / 3);
				setFunctionModule(a, b, bit);
				setFunctionModule(b, a, bit);
			}
		}


		// Draws a 9*9 finder pattern including the border separator, with the center module at (x, y).
		function drawFinderPattern(x, y) {
			for (var i = -4; i <= 4; i++) {
				for (var j = -4; j <= 4; j++) {
					var dist = Math.max(Math.abs(i), Math.abs(j));  // Chebyshev/infinity norm
					var xx = x + j, yy = y + i;
					if (0 <= xx && xx < size && 0 <= yy && yy < size)
						setFunctionModule(xx, yy, dist != 2 && dist != 4);
				}
			}
		}


		// Draws a 5*5 alignment pattern, with the center module at (x, y).
		function drawAlignmentPattern(x, y) {
			for (var i = -2; i <= 2; i++) {
				for (var j = -2; j <= 2; j++)
					setFunctionModule(x + j, y + i, Math.max(Math.abs(i), Math.abs(j)) != 1);
			}
		}


		// Sets the color of a module and marks it as a function module.
		// Only used by the constructor. Coordinates must be in range.
		function setFunctionModule(x, y, isBlack) {
			modules[y][x] = isBlack;
			isFunction[y][x] = true;
		}


		/*---- Private helper methods for constructor: Codewords and masking ----*/

		// Returns a new byte string representing the given data with the appropriate error correction
		// codewords appended to it, based on this object's version and error correction level.
		function appendErrorCorrection(data) {
			if (data.length != QrCode.getNumDataCodewords(version, errCorLvl))
				throw "Invalid argument";

			// Calculate parameter numbers
			var numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[errCorLvl.ordinal][version];
			var blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[errCorLvl.ordinal][version];
			var rawCodewords = Math.floor(QrCode.getNumRawDataModules(version) / 8);
			var numShortBlocks = numBlocks - rawCodewords % numBlocks;
			var shortBlockLen = Math.floor(rawCodewords / numBlocks);

			// Split data into blocks and append ECC to each block
			var blocks = [];
			var rs = new ReedSolomonGenerator(blockEccLen);
			for (var i = 0, k = 0; i < numBlocks; i++) {
				var dat = data.slice(k, k + shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1));
				k += dat.length;
				var ecc = rs.getRemainder(dat);
				if (i < numShortBlocks)
					dat.push(0);
				ecc.forEach(function(b) {
					dat.push(b);
				});
				blocks.push(dat);
			}

			// Interleave (not concatenate) the bytes from every block into a single sequence
			var result = [];
			for (var i = 0; i < blocks[0].length; i++) {
				for (var j = 0; j < blocks.length; j++) {
					// Skip the padding byte in short blocks
					if (i != shortBlockLen - blockEccLen || j >= numShortBlocks)
						result.push(blocks[j][i]);
				}
			}
			if (result.length != rawCodewords)
				throw "Assertion error";
			return result;
		}


		// Draws the given sequence of 8-bit codewords (data and error correction) onto the entire
		// data area of this QR Code symbol. Function modules need to be marked off before this is called.
		function drawCodewords(data) {
			if (data.length != Math.floor(QrCode.getNumRawDataModules(version) / 8))
				throw "Invalid argument";
			var i = 0;  // Bit index into the data
			// Do the funny zigzag scan
			for (var right = size - 1; right >= 1; right -= 2) {  // Index of right column in each column pair
				if (right == 6)
					right = 5;
				for (var vert = 0; vert < size; vert++) {  // Vertical counter
					for (var j = 0; j < 2; j++) {
						var x = right - j;  // Actual x coordinate
						var upward = ((right + 1) & 2) == 0;
						var y = upward ? size - 1 - vert : vert;  // Actual y coordinate
						if (!isFunction[y][x] && i < data.length * 8) {
							modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
							i++;
						}
						// If there are any remainder bits (0 to 7), they are already
						// set to 0/false/white when the grid of modules was initialized
					}
				}
			}
			if (i != data.length * 8)
				throw "Assertion error";
		}


		// XORs the data modules in this QR Code with the given mask pattern. Due to XOR's mathematical
		// properties, calling applyMask(m) twice with the same value is equivalent to no change at all.
		// This means it is possible to apply a mask, undo it, and try another mask. Note that a final
		// well-formed QR Code symbol needs exactly one mask applied (not zero, not two, etc.).
		function applyMask(mask) {
			if (mask < 0 || mask > 7)
				throw "Mask value out of range";
			for (var y = 0; y < size; y++) {
				for (var x = 0; x < size; x++) {
					var invert;
					switch (mask) {
						case 0:  invert = (x + y) % 2 == 0;                                  break;
						case 1:  invert = y % 2 == 0;                                        break;
						case 2:  invert = x % 3 == 0;                                        break;
						case 3:  invert = (x + y) % 3 == 0;                                  break;
						case 4:  invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 == 0;  break;
						case 5:  invert = x * y % 2 + x * y % 3 == 0;                        break;
						case 6:  invert = (x * y % 2 + x * y % 3) % 2 == 0;                  break;
						case 7:  invert = ((x + y) % 2 + x * y % 3) % 2 == 0;                break;
						default:  throw "Assertion error";
					}
					modules[y][x] ^= invert & !isFunction[y][x];
				}
			}
		}


		// Calculates and returns the penalty score based on state of this QR Code's current modules.
		// This is used by the automatic mask choice algorithm to find the mask pattern that yields the lowest score.
		function getPenaltyScore() {
			var result = 0;

			// Adjacent modules in row having same color
			for (var y = 0; y < size; y++) {
				for (var x = 0, runX, colorX; x < size; x++) {
					if (x == 0 || modules[y][x] != colorX) {
						colorX = modules[y][x];
						runX = 1;
					} else {
						runX++;
						if (runX == 5)
							result += QrCode.PENALTY_N1;
						else if (runX > 5)
							result++;
					}
				}
			}
			// Adjacent modules in column having same color
			for (var x = 0; x < size; x++) {
				for (var y = 0, runY, colorY; y < size; y++) {
					if (y == 0 || modules[y][x] != colorY) {
						colorY = modules[y][x];
						runY = 1;
					} else {
						runY++;
						if (runY == 5)
							result += QrCode.PENALTY_N1;
						else if (runY > 5)
							result++;
					}
				}
			}

			// 2*2 blocks of modules having same color
			for (var y = 0; y < size - 1; y++) {
				for (var x = 0; x < size - 1; x++) {
					var   color = modules[y][x];
					if (  color == modules[y][x + 1] &&
						color == modules[y + 1][x] &&
						color == modules[y + 1][x + 1])
						result += QrCode.PENALTY_N2;
				}
			}

			// Finder-like pattern in rows
			for (var y = 0; y < size; y++) {
				for (var x = 0, bits = 0; x < size; x++) {
					bits = ((bits << 1) & 0x7FF) | (modules[y][x] ? 1 : 0);
					if (x >= 10 && (bits == 0x05D || bits == 0x5D0))  // Needs 11 bits accumulated
						result += QrCode.PENALTY_N3;
				}
			}
			// Finder-like pattern in columns
			for (var x = 0; x < size; x++) {
				for (var y = 0, bits = 0; y < size; y++) {
					bits = ((bits << 1) & 0x7FF) | (modules[y][x] ? 1 : 0);
					if (y >= 10 && (bits == 0x05D || bits == 0x5D0))  // Needs 11 bits accumulated
						result += QrCode.PENALTY_N3;
				}
			}

			// Balance of black and white modules
			var black = 0;
			modules.forEach(function(row) {
				row.forEach(function(color) {
					if (color)
						black++;
				});
			});
			var total = size * size;
			// Find smallest k such that (45-5k)% <= dark/total <= (55+5k)%
			for (var k = 0; black*20 < (9-k)*total || black*20 > (11+k)*total; k++)
				result += QrCode.PENALTY_N4;
			return result;
		}


		// Returns true iff the i'th bit of x is set to 1.
		function getBit(x, i) {
			return ((x >>> i) & 1) != 0;
		}
	};


	/*---- Public static factory functions for QrCode ----*/

	/*
	 * Returns a QR Code symbol representing the specified Unicode text string at the specified error correction level.
	 * As a conservative upper bound, this function is guaranteed to succeed for strings that have 738 or fewer
	 * Unicode code points (not UTF-16 code units) if the low error correction level is used. The smallest possible
	 * QR Code version is automatically chosen for the output. The ECC level of the result may be higher than the
	 * ecl argument if it can be done without increasing the version.
	 */
	this.QrCode.encodeText = function(text, ecl) {
		var segs = qrcodegen.QrSegment.makeSegments(text);
		return this.encodeSegments(segs, ecl);
	};


	/*
	 * Returns a QR Code symbol representing the given binary data string at the given error correction level.
	 * This function always encodes using the binary segment mode, not any text mode. The maximum number of
	 * bytes allowed is 2953. The smallest possible QR Code version is automatically chosen for the output.
	 * The ECC level of the result may be higher than the ecl argument if it can be done without increasing the version.
	 */
	this.QrCode.encodeBinary = function(data, ecl) {
		var seg = qrcodegen.QrSegment.makeBytes(data);
		return this.encodeSegments([seg], ecl);
	};


	/*
	 * Returns a QR Code symbol representing the given data segments with the given encoding parameters.
	 * The smallest possible QR Code version within the given range is automatically chosen for the output.
	 * This function allows the user to create a custom sequence of segments that switches
	 * between modes (such as alphanumeric and binary) to encode text more efficiently.
	 * This function is considered to be lower level than simply encoding text or binary data.
	 */
	this.QrCode.encodeSegments = function(segs, ecl, minVersion, maxVersion, mask, boostEcl) {
		if (minVersion == undefined) minVersion = MIN_VERSION;
		if (maxVersion == undefined) maxVersion = MAX_VERSION;
		if (mask == undefined) mask = -1;
		if (boostEcl == undefined) boostEcl = true;
		if (!(MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= MAX_VERSION) || mask < -1 || mask > 7)
			throw "Invalid value";

		// Find the minimal version number to use
		var version, dataUsedBits;
		for (version = minVersion; ; version++) {
			var dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;  // Number of data bits available
			dataUsedBits = qrcodegen.QrSegment.getTotalBits(segs, version);
			if (dataUsedBits != null && dataUsedBits <= dataCapacityBits)
				break;  // This version number is found to be suitable
			if (version >= maxVersion)  // All versions in the range could not fit the given data
				throw "Data too long";
		}

		// Increase the error correction level while the data still fits in the current version number
		[this.Ecc.MEDIUM, this.Ecc.QUARTILE, this.Ecc.HIGH].forEach(function(newEcl) {
			if (boostEcl && dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8)
				ecl = newEcl;
		});

		// Create the data bit string by concatenating all segments
		var dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
		var bb = new BitBuffer();
		segs.forEach(function(seg) {
			bb.appendBits(seg.mode.modeBits, 4);
			bb.appendBits(seg.numChars, seg.mode.numCharCountBits(version));
			seg.getBits().forEach(function(bit) {
				bb.push(bit);
			});
		});

		// Add terminator and pad up to a byte if applicable
		bb.appendBits(0, Math.min(4, dataCapacityBits - bb.length));
		bb.appendBits(0, (8 - bb.length % 8) % 8);

		// Pad with alternate bytes until data capacity is reached
		for (var padByte = 0xEC; bb.length < dataCapacityBits; padByte ^= 0xEC ^ 0x11)
			bb.appendBits(padByte, 8);
		if (bb.length % 8 != 0)
			throw "Assertion error";

		// Create the QR Code symbol
		return new this(bb.getBytes(), mask, version, ecl);
	};


	/*---- Public constants for QrCode ----*/

	var MIN_VERSION =  1;
	var MAX_VERSION = 40;
	Object.defineProperty(this.QrCode, "MIN_VERSION", {value:MIN_VERSION});
	Object.defineProperty(this.QrCode, "MAX_VERSION", {value:MAX_VERSION});


	/*---- Private static helper functions QrCode ----*/

	var QrCode = {};  // Private object to assign properties to. Not the same object as 'this.QrCode'.


	// Returns a sequence of positions of the alignment patterns in ascending order. These positions are
	// used on both the x and y axes. Each value in the resulting sequence is in the range [0, 177).
	// This stateless pure function could be implemented as table of 40 variable-length lists of integers.
	QrCode.getAlignmentPatternPositions = function(ver) {
		if (ver < MIN_VERSION || ver > MAX_VERSION)
			throw "Version number out of range";
		else if (ver == 1)
			return [];
		else {
			var size = ver * 4 + 17;
			var numAlign = Math.floor(ver / 7) + 2;
			var step;
			if (ver != 32)
				step = Math.ceil((size - 13) / (2 * numAlign - 2)) * 2;
			else  // C-C-C-Combo breaker!
				step = 26;

			var result = [6];
			for (var i = 0, pos = size - 7; i < numAlign - 1; i++, pos -= step)
				result.splice(1, 0, pos);
			return result;
		}
	};


	// Returns the number of data bits that can be stored in a QR Code of the given version number, after
	// all function modules are excluded. This includes remainder bits, so it might not be a multiple of 8.
	// The result is in the range [208, 29648]. This could be implemented as a 40-entry lookup table.
	QrCode.getNumRawDataModules = function(ver) {
		if (ver < MIN_VERSION || ver > MAX_VERSION)
			throw "Version number out of range";
		var result = (16 * ver + 128) * ver + 64;
		if (ver >= 2) {
			var numAlign = Math.floor(ver / 7) + 2;
			result -= (25 * numAlign - 10) * numAlign - 55;
			if (ver >= 7)
				result -= 18 * 2;  // Subtract version information
		}
		return result;
	};


	// Returns the number of 8-bit data (i.e. not error correction) codewords contained in any
	// QR Code of the given version number and error correction level, with remainder bits discarded.
	// This stateless pure function could be implemented as a (40*4)-cell lookup table.
	QrCode.getNumDataCodewords = function(ver, ecl) {
		if (ver < MIN_VERSION || ver > MAX_VERSION)
			throw "Version number out of range";
		return Math.floor(QrCode.getNumRawDataModules(ver) / 8) -
			QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] *
			QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
	};


	/*---- Private tables of constants for QrCode ----*/

	// For use in getPenaltyScore(), when evaluating which mask is best.
	QrCode.PENALTY_N1 = 3;
	QrCode.PENALTY_N2 = 3;
	QrCode.PENALTY_N3 = 40;
	QrCode.PENALTY_N4 = 10;

	QrCode.ECC_CODEWORDS_PER_BLOCK = [
		// Version: (note that index 0 is for padding, and is set to an illegal value)
		//  0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
		[null,  7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],  // Low
		[null, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],  // Medium
		[null, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],  // Quartile
		[null, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],  // High
	];

	QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
		// Version: (note that index 0 is for padding, and is set to an illegal value)
		//  0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40    Error correction level
		[null, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4,  4,  4,  4,  4,  6,  6,  6,  6,  7,  8,  8,  9,  9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],  // Low
		[null, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5,  5,  8,  9,  9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],  // Medium
		[null, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8,  8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],  // Quartile
		[null, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81],  // High
	];


	/*---- Public helper enumeration ----*/

	/*
	 * Represents the error correction level used in a QR Code symbol.
	 */
	this.QrCode.Ecc = {
		// Constants declared in ascending order of error protection
		LOW     : new Ecc(0, 1),
		MEDIUM  : new Ecc(1, 0),
		QUARTILE: new Ecc(2, 3),
		HIGH    : new Ecc(3, 2),
	};


	// Private constructor.
	function Ecc(ord, fb) {
		// (Public) In the range 0 to 3 (unsigned 2-bit integer)
		Object.defineProperty(this, "ordinal", {value:ord});

		// (Package-private) In the range 0 to 3 (unsigned 2-bit integer)
		Object.defineProperty(this, "formatBits", {value:fb});
	}



	/*---- Data segment class ----*/

	/*
	 * A public class that represents a character string to be encoded in a QR Code symbol.
	 * Each segment has a mode, and a sequence of characters that is already encoded as
	 * a sequence of bits. Instances of this class are immutable.
	 * This segment class imposes no length restrictions, but QR Codes have restrictions.
	 * Even in the most favorable conditions, a QR Code can only hold 7089 characters of data.
	 * Any segment longer than this is meaningless for the purpose of generating QR Codes.
	 */
	this.QrSegment = function(mode, numChars, bitData) {
		if (numChars < 0 || !(mode instanceof Mode))
			throw "Invalid argument";
		bitData = bitData.slice();  // Make defensive copy

		// The mode indicator for this segment.
		Object.defineProperty(this, "mode", {value:mode});

		// The length of this segment's unencoded data, measured in characters. Always zero or positive.
		Object.defineProperty(this, "numChars", {value:numChars});

		// Returns a copy of all bits, which is an array of 0s and 1s.
		this.getBits = function() {
			return bitData.slice();  // Make defensive copy
		};
	};


	/*---- Public static factory functions for QrSegment ----*/

	/*
	 * Returns a segment representing the given binary data encoded in byte mode.
	 */
	this.QrSegment.makeBytes = function(data) {
		var bb = new BitBuffer();
		data.forEach(function(b) {
			bb.appendBits(b, 8);
		});
		return new this(this.Mode.BYTE, data.length, bb);
	};


	/*
	 * Returns a segment representing the given string of decimal digits encoded in numeric mode.
	 */
	this.QrSegment.makeNumeric = function(digits) {
		if (!this.NUMERIC_REGEX.test(digits))
			throw "String contains non-numeric characters";
		var bb = new BitBuffer();
		var i;
		for (i = 0; i + 3 <= digits.length; i += 3)  // Process groups of 3
			bb.appendBits(parseInt(digits.substr(i, 3), 10), 10);
		var rem = digits.length - i;
		if (rem > 0)  // 1 or 2 digits remaining
			bb.appendBits(parseInt(digits.substring(i), 10), rem * 3 + 1);
		return new this(this.Mode.NUMERIC, digits.length, bb);
	};


	/*
	 * Returns a segment representing the given text string encoded in alphanumeric mode.
	 * The characters allowed are: 0 to 9, A to Z (uppercase only), space,
	 * dollar, percent, asterisk, plus, hyphen, period, slash, colon.
	 */
	this.QrSegment.makeAlphanumeric = function(text) {
		if (!this.ALPHANUMERIC_REGEX.test(text))
			throw "String contains unencodable characters in alphanumeric mode";
		var bb = new BitBuffer();
		var i;
		for (i = 0; i + 2 <= text.length; i += 2) {  // Process groups of 2
			var temp = QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)) * 45;
			temp += QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i + 1));
			bb.appendBits(temp, 11);
		}
		if (i < text.length)  // 1 character remaining
			bb.appendBits(QrSegment.ALPHANUMERIC_CHARSET.indexOf(text.charAt(i)), 6);
		return new this(this.Mode.ALPHANUMERIC, text.length, bb);
	};


	/*
	 * Returns a new mutable list of zero or more segments to represent the given Unicode text string.
	 * The result may use various segment modes and switch modes to optimize the length of the bit stream.
	 */
	this.QrSegment.makeSegments = function(text) {
		// Select the most efficient segment encoding automatically
		if (text == "")
			return [];
		else if (this.NUMERIC_REGEX.test(text))
			return [this.makeNumeric(text)];
		else if (this.ALPHANUMERIC_REGEX.test(text))
			return [this.makeAlphanumeric(text)];
		else
			return [this.makeBytes(toUtf8ByteArray(text))];
	};


	/*
	 * Returns a segment representing an Extended Channel Interpretation
	 * (ECI) designator with the given assignment value.
	 */
	this.QrSegment.makeEci = function(assignVal) {
		var bb = new BitBuffer();
		if (0 <= assignVal && assignVal < (1 << 7))
			bb.appendBits(assignVal, 8);
		else if ((1 << 7) <= assignVal && assignVal < (1 << 14)) {
			bb.appendBits(2, 2);
			bb.appendBits(assignVal, 14);
		} else if ((1 << 14) <= assignVal && assignVal < 1000000) {
			bb.appendBits(6, 3);
			bb.appendBits(assignVal, 21);
		} else
			throw "ECI assignment value out of range";
		return new this(this.Mode.ECI, 0, bb);
	};


	// Package-private helper function.
	this.QrSegment.getTotalBits = function(segs, version) {
		if (version < MIN_VERSION || version > MAX_VERSION)
			throw "Version number out of range";
		var result = 0;
		for (var i = 0; i < segs.length; i++) {
			var seg = segs[i];
			var ccbits = seg.mode.numCharCountBits(version);
			// Fail if segment length value doesn't fit in the length field's bit-width
			if (seg.numChars >= (1 << ccbits))
				return null;
			result += 4 + ccbits + seg.getBits().length;
		}
		return result;
	};


	/*---- Constants for QrSegment ----*/

	var QrSegment = {};  // Private object to assign properties to. Not the same object as 'this.QrSegment'.

	// (Public) Can test whether a string is encodable in numeric mode (such as by using QrSegment.makeNumeric()).
	this.QrSegment.NUMERIC_REGEX = /^[0-9]*$/;

	// (Public) Can test whether a string is encodable in alphanumeric mode (such as by using QrSegment.makeAlphanumeric()).
	this.QrSegment.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/;

	// (Private) The set of all legal characters in alphanumeric mode, where each character value maps to the index in the string.
	QrSegment.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:";


	/*---- Public helper enumeration ----*/

	/*
	 * Represents the mode field of a segment. Immutable.
	 */
	this.QrSegment.Mode = {  // Constants
		NUMERIC     : new Mode(0x1, [10, 12, 14]),
		ALPHANUMERIC: new Mode(0x2, [ 9, 11, 13]),
		BYTE        : new Mode(0x4, [ 8, 16, 16]),
		KANJI       : new Mode(0x8, [ 8, 10, 12]),
		ECI         : new Mode(0x7, [ 0,  0,  0]),
	};


	// Private constructor.
	function Mode(mode, ccbits) {
		// (Package-private) An unsigned 4-bit integer value (range 0 to 15) representing the mode indicator bits for this mode object.
		Object.defineProperty(this, "modeBits", {value:mode});

		// (Package-private) Returns the bit width of the segment character count field for this mode object at the given version number.
		this.numCharCountBits = function(ver) {
			if      ( 1 <= ver && ver <=  9)  return ccbits[0];
			else if (10 <= ver && ver <= 26)  return ccbits[1];
			else if (27 <= ver && ver <= 40)  return ccbits[2];
			else  throw "Version number out of range";
		};
	}



	/*---- Private helper functions and classes ----*/

	// Returns a new array of bytes representing the given string encoded in UTF-8.
	function toUtf8ByteArray(str) {
		str = encodeURI(str);
		var result = [];
		for (var i = 0; i < str.length; i++) {
			if (str.charAt(i) != "%")
				result.push(str.charCodeAt(i));
			else {
				result.push(parseInt(str.substr(i + 1, 2), 16));
				i += 2;
			}
		}
		return result;
	}



	/*
	 * A private helper class that computes the Reed-Solomon error correction codewords for a sequence of
	 * data codewords at a given degree. Objects are immutable, and the state only depends on the degree.
	 * This class exists because each data block in a QR Code shares the same the divisor polynomial.
	 * This constructor creates a Reed-Solomon ECC generator for the given degree. This could be implemented
	 * as a lookup table over all possible parameter values, instead of as an algorithm.
	 */
	function ReedSolomonGenerator(degree) {
		if (degree < 1 || degree > 255)
			throw "Degree out of range";

		// Coefficients of the divisor polynomial, stored from highest to lowest power, excluding the leading term which
		// is always 1. For example the polynomial x^3 + 255x^2 + 8x + 93 is stored as the uint8 array {255, 8, 93}.
		var coefficients = [];

		// Start with the monomial x^0
		for (var i = 0; i < degree - 1; i++)
			coefficients.push(0);
		coefficients.push(1);

		// Compute the product polynomial (x - r^0) * (x - r^1) * (x - r^2) * ... * (x - r^{degree-1}),
		// drop the highest term, and store the rest of the coefficients in order of descending powers.
		// Note that r = 0x02, which is a generator element of this field GF(2^8/0x11D).
		var root = 1;
		for (var i = 0; i < degree; i++) {
			// Multiply the current product by (x - r^i)
			for (var j = 0; j < coefficients.length; j++) {
				coefficients[j] = ReedSolomonGenerator.multiply(coefficients[j], root);
				if (j + 1 < coefficients.length)
					coefficients[j] ^= coefficients[j + 1];
			}
			root = ReedSolomonGenerator.multiply(root, 0x02);
		}

		// Computes and returns the Reed-Solomon error correction codewords for the given
		// sequence of data codewords. The returned object is always a new byte array.
		// This method does not alter this object's state (because it is immutable).
		this.getRemainder = function(data) {
			// Compute the remainder by performing polynomial division
			var result = coefficients.map(function() { return 0; });
			data.forEach(function(b) {
				var factor = b ^ result.shift();
				result.push(0);
				for (var i = 0; i < result.length; i++)
					result[i] ^= ReedSolomonGenerator.multiply(coefficients[i], factor);
			});
			return result;
		};
	}

	// This static function returns the product of the two given field elements modulo GF(2^8/0x11D). The arguments and
	// result are unsigned 8-bit integers. This could be implemented as a lookup table of 256*256 entries of uint8.
	ReedSolomonGenerator.multiply = function(x, y) {
		if (x >>> 8 != 0 || y >>> 8 != 0)
			throw "Byte out of range";
		// Russian peasant multiplication
		var z = 0;
		for (var i = 7; i >= 0; i--) {
			z = (z << 1) ^ ((z >>> 7) * 0x11D);
			z ^= ((y >>> i) & 1) * x;
		}
		if (z >>> 8 != 0)
			throw "Assertion error";
		return z;
	};



	/*
	 * A private helper class that represents an appendable sequence of bits.
	 * This constructor creates an empty bit buffer (length 0).
	 */
	function BitBuffer() {

		// Packs this buffer's bits into bytes in big endian,
		// padding with '0' bit values, and returns the new array.
		this.getBytes = function() {
			var result = [];
			while (result.length * 8 < this.length)
				result.push(0);
			this.forEach(function(bit, i) {
				result[i >>> 3] |= bit << (7 - (i & 7));
			});
			return result;
		};

		// Appends the given number of low bits of the given value
		// to this sequence. Requires 0 <= val < 2^len.
		this.appendBits = function(val, len) {
			if (len < 0 || len > 31 || val >>> len != 0)
				throw "Value out of range";
			for (var i = len - 1; i >= 0; i--)  // Append bit by bit
				this.push((val >>> i) & 1);
		};
	}

	BitBuffer.prototype = Object.create(Array.prototype);

};
;(function ( $, window, document, undefined ) {
    var isTouch = 'ontouchstart' in window,
        eStart = isTouch ? 'touchstart' : 'mousedown',
        eMove = isTouch ? 'touchmove' : 'mousemove',
        eEnd = isTouch ? 'touchend' : 'mouseup',
        eCancel = isTouch ? 'touchcancel' : 'mouseup';

    function canPlayType( file ) {
        var audioElement = document.createElement( 'audio' );
        return !!( audioElement.canPlayType && audioElement.canPlayType( 'audio/' + file.split( '.' ).pop().toLowerCase() + ';' ).replace( /no/, '' ) );
    }
    function timeFormat( sec ) {
        function pad(num) {
            return ("0"+num).slice(-2);
        }
        var min = Math.floor(sec / 60);
        var hour = Math.floor(min / 60);
        sec = Math.floor(sec % 60);
        min = min % 60;
        return (hour > 0 ? hour + ":" : "") + pad(min) + ":" + pad(sec);
    }
    function playerSize( el ) {
        var playerEl = el,
            w = playerEl.outerWidth();

        playerEl.removeClass('audioplayer-layout-480');
        playerEl.removeClass('audioplayer-layout-600');
        playerEl.removeClass('audioplayer-layout-900');

        if (w >= 440) {
            playerEl.addClass('audioplayer-layout-480');
        }
        if (w >= 600) {
            playerEl.addClass('audioplayer-layout-600');
        }
        if (w >= 900) {
            playerEl.addClass('audioplayer-layout-900');
        }
    }
    function audioPlayerFullscreen( state, player ) {
        var playing = player.hasClass('audioplayer-playing');
        if ( state ) {
            if ( !$('.audioplayer__fullscreen').length ) {
                $('body').append('<div class="audioplayer__fullscreen m-hidden"></div>');
            }
            player.wrap('<div class="audioplayer__holder"></div>');
            $('.audioplayer__fullscreen').removeClass('m-hidden').append( player );
            ria.disablePageScroll(true);
            playerSize( player );
        } else {
            $('.audioplayer__holder').append( player );
            $('.audioplayer__fullscreen').addClass('m-hidden');
            player.unwrap();
            ria.disablePageScroll(false);
            playerSize( player );
        }
        if ( playing ) {
            player.find('audio').get(0).play();
        }
    }
    $.fn.audioPlayer = function( params ) {
        if ( !this.length || (this.length == 1 && $(this).hasClass('audioplayer-inited')) ) return;
        var locale = {};
        if (typeof player_locale !== "undefined") {
            locale = player_locale;
        }
        var params = $.extend( {
                classPrefix: 'audioplayer',
                strings: {
                    play: locale["Play"] ? locale["Play"] : 'Play',
                    pause: locale["Pause"] ? locale["Pause"] : 'Pause',
                    volume: locale["Mute"] ? locale["Mute"] : 'Mute',
                    volume2: locale["Unmute"] ? locale["Unmute"] : 'Unmute',
                    speed: locale["Playback Rate"] ? locale["Playback Rate"] : 'Playback Rate',
                    download: locale["Download"] ? locale["Download"] : 'Download',
                    subscribe: locale["Subscribe"] ? locale["Subscribe"] : 'Subscribe',
                    more: locale["More"] ? locale["More"] : 'More',
                    about: locale["About"] ? locale["About"] : 'About',
                }
            },
            params ),
            cssClass = {},
            cssClassSub = {
                playing: 'playing',
                stopped: 'stopped',
                noVolume: 'novolume',
                muted: 'muted',
                modal: 'modal'
            };
		var icons = {
			download: ria && ria.getIcon('download'),
			sound: ria && ria.getIcon('sound'),
			mute: ria && ria.getIcon('mute'),
			speed: ria && ria.getIcon('close'),
	        backward: ria && ria.getIcon('backward'),
			forward: ria && ria.getIcon('forward'),
			play: ria && ria.getIcon('play'),
			pause: ria && ria.getIcon('pause'),
			close: ria && ria.getIcon('close'),
			prev: ria && ria.getIcon('arrowLeft'),
			next: ria && ria.getIcon('arrowRight'),
			email: ria && ria.getIcon('email')
		}

        for ( var subName in cssClassSub ) {
            cssClass[ subName ] = params.classPrefix + '-' + cssClassSub[ subName ];
        }

        if (this.length > 1){
            this.each( function() {
                $(this).audioPlayer( params );
            });
            return this;
        }

        var player = $(this),
            audio = player.find('audio').get(0);

        playerSize( player );
        $(window).resize(function() {
            playerSize( player );
        });

        var controls_subscribe = '';
        // console.log('pldata',player.data());
        if ( player.data('rubric') != '' ) {
            controls_subscribe = '<div class="audioplayer__subscribe audioplayer__top-button">'+
                    '<div class="audioplayer__subscribe-button">'+
                        '<span><svg class="svg-icon"><use xlink:href="' + icons['email'] + '" /></svg></span>'+
                        '<span>' + params.strings.subscribe + '</span>'+
                    '</div>'+
                    '<div class="audioplayer__subscribe-list">'+
                        '<ul>'+
                            ( player.data('subscribe-itunes') != '' ? '<li><a class="audioplayer__subscribe-itunes" href="' + player.data('subscribe-itunes') + '" target="_blank">iTunes</a></li>' : '' ) +
                            ( player.data('subscribe-googlepodcasts') != '' ? '<li><a class="audioplayer__subscribe-googlepodcasts" href="' + player.data('subscribe-googlepodcasts') + '" target="_blank">Google</a></li>' : '' ) +
                            ( player.data('subscribe-spotify') != '' ? '<li><a class="audioplayer__subscribe-spotify" href="' + player.data('subscribe-spotify') + '" target="_blank">Spotify</a></li>' : '' ) +
                            ( player.data('subscribe-tunein') != '' ? '<li><a class="audioplayer__subscribe-tunein" href="' + player.data('subscribe-tunein') + '" target="_blank">TuneIn</a></li>' : '' ) +
                            ( player.data('subscribe-castbox') != '' ? '<li><a class="audioplayer__subscribe-castbox" href="' + player.data('subscribe-castbox') + '" target="_blank">Castbox</a></li>' : '' ) +
                            ( player.data('subscribe-soundstream') != '' ? '<li><a class="audioplayer__subscribe-soundstream" href="' + player.data('subscribe-soundstream') + '" target="_blank">Soundstream</a></li>' : '' ) +
                            ( player.data('subscribe-soundcloud') != '' ? '<li><a class="audioplayer__subscribe-soundcloud" href="' + player.data('subscribe-soundcloud') + '" target="_blank">SoundCloud</a></li>' : '' ) +
                            ( player.data('subscribe-yandexmusic') != '' ? '<li><a class="audioplayer__subscribe-yandexmusic" href="' + player.data('subscribe-yandexmusic') + '" target="_blank">Яндекс.Музыка</a></li>' : '' ) +
                            ( player.data('subscribe-rss') != '' ? '<li><a class="audioplayer__subscribe-rss" href="' + player.data('subscribe-rss') + '" target="_blank">RSS</a></li>' : '' ) +
                            // '<li><a href="https://ria.ru/export/itunes/rss2/' + player.data('rubric') + '.xml" target="_blank">RSS</a></li>'+
                            '<li class="hidden"><a href="/" class="audioplayer__ria-subscribe">Email</a></li>' +
                        '</ul>'+
                    '</div>'+
                '</div>';
        }
        var controls_right = '';
        var controls_download = '';
        var controls_playlist = '';
        var controls_about = '';
        if ( !player.hasClass('audioplayer-vast') ) {
            controls_right = '<div class="audioplayer__controls-right">'+
                    '<div class="audioplayer__controls-download" title="' + params.strings.download + '">'+
                        '<a href="' + audio.src + '" download="podcast" target="_blank"><svg class="svg-icon"><use xlink:href="' + icons['download'] + '" /></svg></a>'+
                    '</div>'+
                    '<div class="audioplayer__controls-share">'+
                        '<span class="share" data-id="' + player.data('articleid') +'" data-url="' + location.href + '" data-title="' + player.data('media-title').replace(/\\"/g, '&quot;') + '"></span>'+
                    '</div>'+
                '</div>';
            controls_download = '<div class="audioplayer__controls-download audioplayer__top-button" title="' + params.strings.download + '">'+
                    '<a href="' + audio.src + '" download="podcast" target="_blank">'+
                        '<span><svg class="svg-icon"><use xlink:href="' + icons['download'] + '" /></svg></span>'+
                        '<span>' + params.strings.download + '</span>'+
                    '</a>'+
                '</div>';
            controls_playlist = '<div class="audioplayer__modal audioplayer__playlist">'+
                    '<div class="audioplayer__modal-close"><svg class="svg-icon"><use xlink:href="'+ icons['close'] + '" /></svg></div>'+
                    '<div class="audioplayer__playlist-info">'+
                        '<div class="audioplayer__playlist-title">' + player.data('rubric-title').replace(/\\"/g, '"') + '</div>'+
                        '<div class="audioplayer__playlist-text">' + player.data('rubric-subtitle').replace(/\\"/g, '"') + '</div>'+
                        '<a href="' + player.data('rubric-url') + '" class="audioplayer__playlist-more">' + params.strings.more + '</a>'+
                    '</div>'+
                    '<div class="audioplayer__playlist-list"><div class="audioplayer__playlist-list-content"></div></div>'+
                '</div>';
            controls_about = '<div class="audioplayer__modal audioplayer__about">'+
                    '<div class="audioplayer__modal-close"><svg class="svg-icon"><use xlink:href="'+ icons['close'] + '" /></svg></div>'+
                    '<div class="audioplayer__about-title">' + player.data('media-title').replace(/\\"/g, '"') + '</div>'+
                    '<div class="audioplayer__about-text"><div class="audioplayer__about-text-content">' + player.data('media-descr').replace(/\\"/g, '"') + '</div></div>'+
                '</div>';
        }

        var controls1 = '<div class="audioplayer__controls hidden">'+
                        '<div class="audioplayer__current-time"></div>'+
                        '<div class="audioplayer__total-time"></div>'+

                        '<div class="audioplayer__controls-seekbar">'+
                            '<div class="audioplayer__controls-seekbar-line">'+
                                '<div class="audioplayer__controls-seekbar-all"></div>'+
                                '<div class="audioplayer__controls-seekbar-loaded"></div>'+
                                '<div class="audioplayer__controls-seekbar-played"></div>'+
                            '</div>'+
                        '</div>'+

                        '<div class="audioplayer__controls-left">'+
                            '<div class="audioplayer__controls-volume">'+
                                '<div class="audioplayer__controls-volume-button" title="' + params.strings.volume + '">'+
                                    '<svg class="svg-icon"><use xlink:href="'+ icons['sound'] +'" /></svg>'+
                                    '<svg class="svg-icon"><use xlink:href="'+ icons['mute'] +'" /></svg>'+
                                '</div>'+
                                '<div class="audioplayer__controls-volume-adjust"><div><div></div></div></div>'+
                            '</div>'+
                            '<div class="audioplayer__controls-speed">'+
                                '<div class="audioplayer__controls-speed-button" title="' + params.strings.speed + '">'+
                                    '<svg class="svg-icon"><use xlink:href="'+ icons['speed'] +'" /></svg><span>1</span>'+
                                '</div>'+
                                '<div class="audioplayer__controls-speed-list">'+
                                    '<ul>'+
                                        '<li data-value="0.8">0,8</li>'+
                                        '<li data-value="1" class="active">1</li>'+
                                        '<li data-value="1.5">1,5</li>'+
                                        '<li data-value="2">2</li>'+
                                    '</ul>'+
                                '</div>'+
                            '</div>'+
                        '</div>'+
                        '<div class="audioplayer__controls-center">'+
                            '<div class="audioplayer__controls-rw"><svg class="svg-icon"><use xlink:href="'+ icons['backward'] +'" /></svg></div>'+
                            '<div class="audioplayer__controls-play" title="' + params.strings.play + '">'+
                                '<svg class="svg-icon"><use xlink:href="'+ icons['play'] +'" /></svg>'+
                                '<svg class="svg-icon"><use xlink:href="'+ icons['pause'] +'" /></svg>'+
                            '</div>'+
                            '<div class="audioplayer__controls-fw"><svg class="svg-icon"><use xlink:href="'+ icons['forward'] +'" /></svg></div>'+
                        '</div>'+

                        controls_right +
                    '</div>'+

                    controls_subscribe +

                    '<div class="audioplayer__prev hidden"><svg class="svg-icon"><use xlink:href="'+ icons['prev'] +'" /></svg></div>'+
                    '<div class="audioplayer__next hidden"><svg class="svg-icon"><use xlink:href="'+ icons['next'] +'" /></svg></div>'+
                    '<div class="audioplayer__about-button audioplayer__top-button"><span>i</span><span>' + params.strings.about + '</span></div>'+

                    controls_download +
                    controls_playlist +
                    controls_about;

        player.append( controls1 );

        var controls = player.find('.audioplayer__controls'),
            btnPlay = controls.find('.audioplayer__controls-play'),
            btnRW = controls.find('.audioplayer__controls-rw'),
            btnFW = controls.find('.audioplayer__controls-fw'),
            timeCurrent = controls.find('.audioplayer__current-time'),
            timeTotal = controls.find('.audioplayer__total-time'),
            seekbar = controls.find('.audioplayer__controls-seekbar'),
            seekbarPlayed = seekbar.find('.audioplayer__controls-seekbar-played'),
            seekbarLoaded = seekbar.find('.audioplayer__controls-seekbar-loaded'),
            volumeButton = controls.find( '.audioplayer__controls-volume-button' ),
            volumeAdjuster = controls.find( '.audioplayer__controls-volume-adjust > div' ),
            volumeDefault = 0,
            eventPushed = {p0: false, p25: false, p50: false, p75: false, p90: false},
            btnSpeed = controls.find('.audioplayer__controls-speed-button'),
            btnSpeedItem = controls.find('.audioplayer__controls-speed li'),

            btnPrev = player.find('.audioplayer__prev'),
            btnNext = player.find('.audioplayer__next'),
            riaSubscribe =  player.find('.audioplayer__ria-subscribe'),
            adjustCurrentTime = function( e ) {
                realEvent = isTouch ? e.originalEvent.touches[ 0 ] : e;
                audio.currentTime = Math.round( ( audio.duration * ( realEvent.pageX - seekbar.offset().left ) ) / seekbar.width() );
            },
            adjustVolume = function( e ) {
                realEvent = isTouch ? e.originalEvent.touches[ 0 ] : e;
                var vol = Math.abs( ( realEvent.pageY - ( volumeAdjuster.offset().top + 85 ) ) / 85 );
                audio.volume = vol > 1 ? 1 : vol;
                ria.lsSet('audio_volume', audio.volume);
            },
            updateLoadBar = function() {
                var interval = setInterval( function() {
                    if ( audio.buffered.length < 1 ) {
                        return true;
                    }
                    seekbarLoaded.width( ( audio.buffered.end( 0 ) / audio.duration ) * 100 + '%' );
                    if ( Math.floor( audio.buffered.end( 0 ) ) >= Math.floor( audio.duration ) ) {
                        clearInterval( interval );
                    }
                }, 500 );
            };

        var vast = {};
        vast.url = player.data('vast');
        var tracking_prefix = '';

        var riaGetSubscribe = function( eml ){
            $.ajax({
                url: '/services/mailing/subscribe/?newsletter_id=' + player.data('subscribe-ria') + '&email=' + eml,
                dataType: 'json',
                beforeSend: function( xhr ) {

                }
            }).done(function( data ){
                if( data.status == 'OK' ){
                    $('.js-subscribe').addClass('m-done');
                }
            });
        }

        if ( riaSubscribe.length ) {
            riaSubscribe.on('click', function(){
                if ( GLOBAL.user.mail ) {
                    riaGetSubscribe( GLOBAL.user.mail ); // подписываем сразу
                } else {
                    modalLayer.open({
                            preset      : 'authorization',
                            beforeOpen  : function(){
                                //if ( !$('.modal__main-desc').length ) {
                                //    var $desc = $('<div />').addClass('modal__main-desc')
                                //                .text('Для подписки на рассылку вам необходимо авторизоваться или зарегистрироваться');
                                //    $('.modal__content.modal__auth').prepend( $desc );
                                //  console.log($('.modal__main-desc').length);
                                //}
                                GLOBAL.events.subscribe('login', function ( data ) {
                                    if ( data.status == 'success' ) {
                                        riaGetSubscribe( data.user.email );
                                    }
                                });

                                if ( $('.modal__main-desc').length ) {
                                    // если поменял авторизацию на регистрацию
                                    $( window ).on('changeModalLayer', function(){
                                        $('.modal__main-desc').remove();
                                    })
                                }
                            },
                            afterClose : function(){
                                $('.modal__main-desc').remove();
                            //  console.log($('.modal__main-desc').length);
                            }
                        });
                }
                return false;
            })
        }

        controls.removeClass('hidden');

        var volumeTestDefault = audio.volume,
            volumeTestValue = audio.volume = 0;
        if ( Math.round( audio.volume * 1000 ) / 1000 == volumeTestValue ) {
            audio.volume = volumeTestDefault;
        } else {
            player.addClass( cssClass.noVolume );
        }

        var cta_newsletter_id = player.attr('data-subscribe-ria');

        if ( player.data('rubric') != '') {
            $.ajax({
                url: '/services/audio/' + player.data('rubric') + '/' + (cta_newsletter_id ? '?cta_newsletter_id=' + cta_newsletter_id : ''),
                dataType: "json"
            }).done(function( data ) {
                if ( data.items.length ) {
                    var html = '';
                    var pos = data.items.length;
                    player.find('.audioplayer__rubric span').html( data.items.length < 100 ? ' <span>' + pos + '</span>/' + pos : ' 99+' );

                    $.each(data.items, function(i, item) {
                        var active = item.id == player.data('import-id') ? ' active' : '';

                        if (active != '') {
                            player.find('.audioplayer__rubric span > span').text( pos );
                            player.find('.share').attr({
                                'data-url': item.url,
                                'data-id': item.articleid
                            });
                        }
                        var progress = '';
                        if ( ria.lsGet('audio_progress_' + item.id) ) {
                            progress = ' / <span>' + timeFormat( ria.lsGet('audio_progress_' + item.id) ) + '</span>';
                        }
                        html += '<div class="audioplayer__playlist-item' + active + '" data-src="' + item.mp3 + '" data-text="' + item.text.replace(/"/g, '&quot;') + '" data-cover="' + item.img + '" data-id="' + item.id + '" data-url="' + item.url + '" data-articleid="' + item.articleid + '"><div class="audioplayer__playlist-item-icon"><svg class="svg-icon"><use xlink:href="'+ icons['play'] +'" /></svg></div><div class="audioplayer__playlist-item-pos">' + (pos<10?'0'+pos:pos) + '</div><div class="audioplayer__playlist-item-main"><div class="audioplayer__playlist-item-title">' + item.title + '</div><div class="audioplayer__playlist-item-duration">' + timeFormat( item.duration ) + progress + '</div></div><div class="audioplayer__playlist-item-date">' + item.date + '</div></div>';
                        pos--;
                    });
                    player.find('.audioplayer__playlist-list-content').html( html );
                    player.find('.audioplayer__playlist-list').theinScroll();
                }
                if ( data.items.length > 1 ) {
                    btnPrev.removeClass('hidden');
                    btnNext.removeClass('hidden');
                } else {
                    btnPrev.addClass('hidden');
                    btnNext.addClass('hidden');
                }
                if ( typeof data.subscription_id !== 'undefined' && data.subscription_id != '' ) {
                    player.attr('data-subscribe-ria', data.subscription_id);
                    riaSubscribe.parent().removeClass('hidden');
                }
            }).fail(function(o, status) {
                // console.log('##',  status );
            });
        }

        if ( typeof vast !== 'undefined' && typeof vast.url !== 'undefined') {
            tracking_prefix = 'banner_';
            $.ajax({
                url: vast.url
            }).done(function( data ) {
                var source = $(data).find('MediaFile').text().trim();
                audio.src = source;
                audio.addEventListener( 'loadedmetadata', function() {
                    player.removeClass('audioplayer-splash');
                });
                var tracking = $(data).find('TrackingEvents');

                vast.tracking1 = tracking.find('Tracking[event="start"]').text().trim();
                vast.tracking2 = tracking.find('Tracking[event="firstQuartile"]').text().trim();
                vast.tracking3 = tracking.find('Tracking[event="midpoint"]').text().trim();
                vast.tracking4 = tracking.find('Tracking[event="thirdQuartile"]').text().trim();
                vast.tracking5 = tracking.find('Tracking[event="complete"]').text().trim();
                vast.tracking6 = tracking.find('Tracking[event="pause"]').text().trim();
            }).fail(function(o, status) {

            });
        }

        audio.volume = ria.lsGet('audio_volume') ? ria.lsGet('audio_volume') : 1;
        volumeAdjuster.find( 'div' ).height( audio.volume * 100 + '%' );
        volumeDefault = audio.volume;
        timeCurrent.text( timeFormat( 0 ) );
        timeTotal.text( $.isNumeric( audio.duration ) ? timeFormat( audio.duration ) : '' );
        audio.playbackRate = ria.lsGet('audio_playbackrate') ? ria.lsGet('audio_playbackrate') : 1;
        btnSpeed.find('span').text( audio.playbackRate );
        btnSpeedItem.removeClass('active').filter('[data-value="'+audio.playbackRate+'"]').addClass('active');

        audio.addEventListener( 'loadedmetadata', function() {
            updateLoadBar();
            timeCurrent.text( timeFormat( 0 ) );
            timeTotal.text( $.isNumeric( audio.duration ) ? timeFormat( audio.duration ) : '...' );
        });

        audio.addEventListener( 'playing', function() {
            $('.audioplayer').find('audio').each(function() {
                if ( $(this).get(0) != audio ) {
                    $(this).get(0).pause();
                }
            });
            player.addClass( cssClass.playing ).removeClass( cssClass.stopped );
            player.removeClass('audioplayer-splash');
            $('body').trigger( 'audioplayer', [ 'playing', player.attr('data-import-id') ] );
        });
        audio.addEventListener( 'pause', function() {
            player.removeClass( cssClass.playing ).addClass( cssClass.stopped );
            $('body').trigger( 'audioplayer', [ 'pause', player.attr('data-import-id') ] );
            if (typeof vast !== 'undefined' && typeof vast.tracking6 !== 'undefined') {
                fetch(vast.tracking6);
            }
        });
        window.dataLayer = window.dataLayer || [];
        audio.addEventListener( 'ended', function() {
            player.removeClass( cssClass.playing ).addClass( cssClass.stopped );
            $('body').trigger( 'audioplayer', ['ended', player.attr('data-import-id') ] );
            dataLayer.push({
                'event': tracking_prefix + 'Finished',
                'gaEventCategory': 'HTML5_Audio_Podcasts',
                'gaEventAction': 'Finished',
                'gaEventLabel': player.attr('data-media-title'),
                'player_rubric': player.attr('data-podcast')
            });
            if (typeof vast !== 'undefined' && typeof vast.tracking5 !== 'undefined') {
                fetch(vast.tracking5);
            }
        });
        audio.addEventListener( 'timeupdate', function() {
            var percent = ( audio.currentTime / audio.duration ) * 100;
            timeCurrent.text( timeFormat( this.currentTime ) );
            seekbarPlayed.width( percent + '%' );
            ria.lsSet('audio_progress_' + player.attr('data-import-id'), audio.currentTime);

            if (audio.currentTime > 0 && audio.currentTime < 1 && !eventPushed.p0) {
                dataLayer.push({
                    'event': tracking_prefix + 'Play',
                    'gaEventCategory': 'HTML5_Audio_Podcasts',
                    'gaEventAction': 'Play',
                    'gaEventLabel': player.attr('data-media-title'),
                    'player_rubric': player.attr('data-podcast')
                });
                if (typeof vast !== 'undefined' && typeof vast.tracking1 !== 'undefined') {
                    fetch(vast.tracking1);
                }
                eventPushed.p0 = true;
            }
            if (percent >= 25 && !eventPushed.p25) {
                dataLayer.push({
                    'event': tracking_prefix + '25%',
                    'gaEventCategory': 'HTML5_Audio_Podcasts',
                    'gaEventAction': '25%',
                    'gaEventLabel': player.attr('data-media-title'),
                    'player_rubric': player.attr('data-podcast')
                });
                if (typeof vast !== 'undefined' && typeof vast.tracking2 !== 'undefined') {
                    fetch(vast.tracking2);
                }
                eventPushed.p25 = true;
            }
            if (percent >= 50 && !eventPushed.p50) {
                dataLayer.push({
                    'event': tracking_prefix + '50%',
                    'gaEventCategory': 'HTML5_Audio_Podcasts',
                    'gaEventAction': '50%',
                    'gaEventLabel': player.attr('data-media-title'),
                    'player_rubric': player.attr('data-podcast')
                });
                if (typeof vast !== 'undefined' && typeof vast.tracking3 !== 'undefined') {
                    fetch(vast.tracking3);
                }
                eventPushed.p50 = true;
            }
            if (percent >= 75 && !eventPushed.p75) {
                dataLayer.push({
                    'event': tracking_prefix + '75%',
                    'gaEventCategory': 'HTML5_Audio_Podcasts',
                    'gaEventAction': '75%',
                    'gaEventLabel': player.attr('data-media-title'),
                    'player_rubric': player.attr('data-podcast')
                });
                if (typeof vast !== 'undefined' && typeof vast.tracking4 !== 'undefined') {
                    fetch(vast.tracking4);
                }
                eventPushed.p75 = true;
            }
            if (percent >= 90 && !eventPushed.p90) {
                dataLayer.push({
                    'event': tracking_prefix + '90%',
                    'gaEventCategory': 'HTML5_Audio_Podcasts',
                    'gaEventAction': '90%',
                    'gaEventLabel': player.attr('data-media-title'),
                    'player_rubric': player.attr('data-podcast')
                });
                eventPushed.p90 = true;
            }
        });
        audio.addEventListener( 'volumechange', function() {
            volumeAdjuster.find( 'div' ).height( audio.volume * 100 + '%' );
            if ( audio.volume > 0 && player.hasClass( cssClass.muted ) ) {
                player.removeClass( cssClass.muted );
                audio.muted = false;
                volumeButton.attr('title', params.strings.volume);
            }
            if ( audio.volume <= 0 && !player.hasClass( cssClass.muted ) ) {
                player.addClass( cssClass.muted );
                audio.muted = true;
                volumeButton.attr('title', params.strings.volume2);
            }
        });

        seekbar.on( eStart, function( e ) {
            adjustCurrentTime( e );
            seekbar.on( eMove, function( e ) {
                adjustCurrentTime( e );
            });
        }).on( eCancel, function() {
            seekbar.unbind( eMove );
        });
        // seekbar.on('click', function(e) {
        //     var rect = e.target.getBoundingClientRect();
        //     var pos = e.clientX - rect.left;
        //     audio.currentTime = duration * pos / player.width();
        // });

        volumeButton.on( 'click', function() {
            if ( player.hasClass( cssClass.muted ) ) {
                player.removeClass( cssClass.muted );
                audio.muted = false;
                audio.volume = volumeDefault;
                $(this).attr('title', params.strings.volume);
            } else {
                player.addClass( cssClass.muted );
                audio.muted = true;
                volumeDefault = audio.volume;
                audio.volume = 0;
                $(this).attr('title', params.strings.volume2);
            }
        });

        volumeAdjuster.on( eStart, function( e ) {
            adjustVolume( e );
            volumeAdjuster.on( eMove, function( e ) { adjustVolume( e ); } );
        }).on( eCancel, function() {
            volumeAdjuster.unbind( eMove );
        });

        btnPlay.on( 'click', function() {
            if ( player.hasClass( cssClass.playing ) ) {
                $( this ).attr( 'title', params.strings.play );
                audio.pause();
            } else {
                $( this ).attr( 'title', params.strings.pause );
                audio.play();
            }
        });

        btnRW.on( 'click', function() {
            audio.currentTime -= 30;
        });
        btnFW.on('click', function() {
            audio.currentTime += 30;
        });

        btnSpeedItem.on('click', function() {
            audio.playbackRate = $(this).data('value');
            btnSpeed.find('span').text( $(this).text() );
            ria.lsSet('audio_playbackrate', audio.playbackRate);
            $(this).addClass('active').siblings().removeClass('active');
        });

        player.find('.audioplayer__about-text').theinScroll();

        function audioPlayerOpenModal( name ) {
            player.addClass( cssClass.modal ).attr('data-state', 'modal-' + name);
            player.find('.audioplayer__' + name).addClass('active');

            // if ( !player.hasClass('audioplayer-layout-480') ) {
            if ( document.documentElement.clientWidth < 480 ) {
                audioPlayerFullscreen(true, player);
            }
        }
        function audioPlayerCloseModal( el ) {
            player.removeClass( cssClass.modal ).attr('data-state', '');
            el.removeClass('active');

            if ( player.parent().hasClass('audioplayer__fullscreen') ) {
                audioPlayerFullscreen(false, player);
            }
        }

        player.find('.audioplayer__rubric a').on('click', function(e) {
            if ( player.find('.audioplayer__playlist-item').length ) {
                e.preventDefault();
                audioPlayerOpenModal( 'playlist' );
            }
        });
        player.find('.audioplayer__about-button').on('click', function() {
            audioPlayerOpenModal( 'about' );
        });
        player.find('.audioplayer__modal-close').on('click', function() {
            audioPlayerCloseModal( $(this).parent() );
        });

        player.find('.audioplayer__playlist-list').on('click', '.audioplayer__playlist-item', function() {
            var id = $(this).data('id');
            var mp3 = $(this).data('src');
            var cover = $(this).data('cover');
            var title = $(this).find('.audioplayer__playlist-item-title').text();
            var url = $(this).data('url');
            var articleid = $(this).data('articleid');
            var text = $(this).data('text');
            var pos = $(this).find('.audioplayer__playlist-item-pos').text();
            var playbackrate = audio.playbackRate;

            $(this).addClass('active').siblings().removeClass('active');

            audioPlayerCloseModal( $(this).closest('.audioplayer__modal') );

            if (cover != '') {
                player.removeClass('audioplayer-nocover').find('.audioplayer__cover').css('background-image', 'url(' + cover + ')');
            } else {
                player.addClass('audioplayer-nocover').find('.audioplayer__cover').css('background-image', 'none');
            }
            player.attr('data-import-id', id);
            player.attr('data-media-title', title);
            player.find('.audioplayer__about-title').html( title );
            player.find('.audioplayer__rubric span > span').text( pos );
            player.find('.audioplayer__title').html( title );
            player.find('.audioplayer__about-text-content').html( text );
            player.find('.audioplayer__controls-download a').attr( 'href', mp3 );
            player.find('.share').attr({
                'data-url': url,
                'data-title': title,
                'data-id': articleid
            });

            audio.src = mp3;
            eventPushed.p0 = false;
            eventPushed.p25 = false;
            eventPushed.p50 = false;
            eventPushed.p75 = false;
            eventPushed.p90 = false;
            audio.load();
            audio.playbackRate = playbackrate;
            audio.play();
        });

        btnPrev.on('click', function() {
            if ( player.find('.audioplayer__playlist-item.active').next().length ) {
                player.find('.audioplayer__playlist-item.active').next().click();
            } else {
                player.find('.audioplayer__playlist-item:first').click();
            }
        });
        btnNext.on('click', function() {
            if ( player.find('.audioplayer__playlist-item.active').prev().length ) {
                player.find('.audioplayer__playlist-item.active').prev().click();
            } else {
                player.find('.audioplayer__playlist-item:last').click();
            }
        });

        this.play = function() {
            audio.play();
        }
        this.pause = function() {
            audio.pause();
        }
        this.playitem = function( id ) {
            player.find('.audioplayer__playlist-item[data-id='+id+']').click();
        }

        player.find('.audioplayer__title').on('click', function() {
            if ( player.hasClass('audioplayer-splash') ) {
                audio.play();
            }
        });

        player.addClass('audioplayer-inited');

        return this;
    };
})( jQuery, window, document );


$(function() {
    $('.audioplayer').audioPlayer();
    // riaShare.initItems( $('.audioplayer') );
});


function isAppleDevice() {
	return /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
}

function ABSplitTest() {
	var cookie = $("#body").data('ab'),
		cookieName = 'ab_emoji_test';

	if(typeof ria === 'object' && cookie !== ''){
		ria.setCookie(cookieName, cookie, 60 * 1000 * 60 * 24 * 30, '/');
	}
}


function ABFloorDate() {
	if(typeof ria === 'object'){
		var cookieName = 'ab_mainpage';
		var cookie = ria.getCookie(cookieName);
		var urlParam = ria.getUrlParameter('abtest');

		if(urlParam){
			cookie = urlParam;
			ria.setCookie(cookieName, cookie, 60 * 1000 * 60 * 24 * 30, '/');
		} else if(!cookie){
			cookie = Math.random() > .5 ? 'a' : 'b';
			ria.setCookie(cookieName, cookie, 60 * 1000 * 60 * 24 * 30, '/');
		}

		if(cookie === 'a'){
			$('.cell__controls-date').removeClass('m-hidden');
		}
	}
}


$(function(){
	ABSplitTest();
	// ABFloorDate();

	if (typeof ria === 'object' && (window.location.host.indexOf('devel') >= 0 || window.location.host.indexOf('beta') >= 0 || window.location.search.indexOf('iubenda_disable') >= 0)) {
		ria.setCookie('iubenda_disabled', '1', 60 * 1000 * 60 * 24 * 30 * 60, '/');
	}
	if (typeof ria === 'object' && window.location.search.indexOf('iubenda_show') >= 0) {
		ria.setCookie('iubenda_show', '1', 60 * 1000 * 60 * 24 * 30 * 60, '/');
	}

	if (isAppleDevice()) {
		$('#body').addClass('m-apple');
	}

	let header = $('#anchor').offset().top;
	$(window).on('scroll',function(){
		let top = $( window ).scrollTop()

		if(top > header){
			$('#body').addClass('m-header-sticked');
		} else {
			$('#body').removeClass('m-header-sticked');
		}
	});

	GLOBAL.projectWidgetInit = false;
	$('body').on('widget', function(e, n, s) {
		if (n === 'project' && s && !GLOBAL.projectWidgetInit && GLOBAL.projectList) {
			var project = _.template($('#project').html());
			$('#projectWrapper').append( project({data: GLOBAL.projectList}).trim()).each(function() {
				$(this).find('.project__place-scroll').theinScroll({
					rtl: Boolean(GLOBAL.rtl)
				});
			});
			GLOBAL.projectWidgetInit = true;
		}
	});

	$(".switcher").on('click', '.switcher__label', function(e) {
		e.preventDefault();
		e.stopPropagation();
		let switcher = $(this).closest(".switcher");
		let body = $('body');

		if(switcher.hasClass('m-active') ){
			switcher.removeClass('m-active');
			body.removeClass('m-switcher');
			switcher.find('.switcher__dropdown').fadeOut(200);
			$(document).off('click.switcher-click');
		}else{
			switcher.addClass('m-active');
			body.addClass('m-switcher');
			switcher.find('.switcher__dropdown').fadeIn(200);
			$(document).one('click.switcher-click', function() {
				switcher.removeClass('m-active');
				switcher.find('.switcher__dropdown').fadeOut(200);
			});
		}
	}).on('click', ".switcher__list", function(e) {
		e.stopPropagation();
	});

	if (typeof ria === 'object' && (parseInt(ria.getCookie('privacy_policy')) !== 1 || ria.getCookie('privacy_policy') === undefined || ria.getUrlParameter('privacy_policy'))){
		let gdpr = $('#gdpr');
		let button = $('#gdpr .gdpr__btn');

		if(gdpr.length) {
			gdpr.addClass('m-active');
			if(ria.getClientHeigth() < ($('#gdpr').height() + $('#header').height())){
				ria.disablePageScroll(true);
			}

			button.click(function(e){
				e.preventDefault();
				ria.setCookie('privacy_policy', '1', 60 * 1000 * 60 * 24 * 730, '/');
				ria.disablePageScroll();
				gdpr.removeClass('m-active');
			})
		}
	}

	$(".footer__menu").theinCarousel({
		nav: false,
		itemAutoWidth: true,
		sticked: false,
		lessCenter: false,
		outside: 0,
		between: 20,
		rtl: Boolean(GLOBAL && GLOBAL.rtl),
		motionType : 'scroll'
	});


	$('#radioButton').on('click', function(){
		// let th = $(this);
		// let au = th.find('audio');

		// if(!au.length){
		// 	th.append('<audio src="' + th.data('stream') + '" />');
		// 	au = th.find('audio');
		// }

		// let audio = au.get(0);
		// if(audio.paused){
		// 	th.addClass('m-active');
		// 	audio.play();
		// } else{
		// 	th.removeClass('m-active');
		// 	audio.pause();
		// }
		var openPopup = function(url, params) {
			var left = Math.round(screen.width/2 - params.width/2);
			var top = 0;
			if (screen.height > params.height) {
				top = Math.round(screen.height/3 - params.height/2);
			}
			var win = window.open(url, 'sl_' + this.service, 'left=' + left + ',top=' + top + ',' + 'width=' + params.width + ',height=' + params.height + ',personalbar=0,toolbar=0,scrollbars=1,resizable=1');
			if (win) {
				win.focus();
			} else {
				location.href = url;
			}
		}
		openPopup('/broadcasts/live/', {
			width: 820,
			height: 570
		});
	});

	if($('.footer__social-button').length) {
		$(".footer__social").theinCarousel({
			nav: false,
			itemAutoWidth: true,
			outside: 0,
			between: 20,
			motionType: 'scroll',
			lessCenter: false,
			rtl: Boolean(GLOBAL && GLOBAL.rtl),
			responsive: {
				480: {
					outside: 0
				},
				1235: {
					outside: 0
				}
			}
		});

		$('.footer__social-button[title=WeChat]').on('click',function (e) {
			e.preventDefault()
			e.stopPropagation()
			const offset = $(this).offset()
			const popup = $(this).find('.footer__social-popup')
			popup.show().css({top:offset.top - $(window).scrollTop() - popup.outerHeight() - 10, left:offset.left + $(this).outerWidth() / 2})

			function socialDestroy() {
				$(document).off('click.social-button');
				$(document).off('scroll.social-button');
				$(window).off('resize.social-button');
				popup.hide()
			}

			$(document).on('resize.social-button click.social-button scroll.social-button', function (e) {
				$(document).off('click.social-button');
				$(document).off('scroll.social-button');
				$(document).off('resize.social-button');
				popup.hide()
			});
		})
	}

	if(typeof riaCells === "function"){
		riaCells();
	}

	if(typeof riaShare === "object"){
		riaShare.init();
	}

	if(typeof photoViewWidget ===  'object') {
		photoViewWidget.init();
	}

	$( '.js-vote' ).riaVote();

	if(typeof lazyload === 'function') {
		lazyload();
		$('body').on('nextarticle', function(e) {
			lazyload();
		});
	}

	if(typeof ria === 'object') {
		ria.convertDate();
	}

	$('.js__custom-scroll').theinScroll({
		rtl:Boolean(GLOBAL.rtl)
	});

	$( '.victorina' ).riaVictorina();

	// Открыть чат и сообщение по ссылке
	if (typeof ria === 'object' && ria.getUrlParameter('chat_room_id') && ria_chat_manager) {
		if (ria.getUrlParameter('chat_message_id')) {
			ria_chat.state.goto_message = ria.getUrlParameter('chat_message_id');
		}
		ria_chat_manager.openArticleRoom(ria.getUrlParameter('chat_room_id'));
	}

	var matchcenter = $('.tournament-floor__table:visible').length ?  $('.tournament-floor__table:visible') : $('ul.matchcenterlive__list:visible')
	if (matchcenter.length) {
		matchcenter.theinCarousel({
			nav: true,
			navText : [`<i><svg class="svg-icon"><use xlink:href="${ria.getIcon('arrowLeft')}"/></svg></i>`,`<i><svg class="svg-icon"><use xlink:href="${ria.getIcon('arrowRight')}"/></svg></i>`],
			itemAutoWidth: !Boolean($('.tournament-floor__table:visible').length),
			between: 0,
			stretch: false,
			outside: 0,
			rtl: Boolean(GLOBAL && GLOBAL.rtl),
		});

		setTimeout(() => {
			var count_finished = matchcenter.find('.matchcenter__match[status="finished"]').length;
			if (count_finished) {
				matchcenter.trigger('change.the-in-carousel', count_finished);
			}
		}, 1000);

		$('.the-in-carousel__nav-button', matchcenter).on('click', function (btn) {
			dataLayer && dataLayer.push({
				'event': 'olympiad_widget',
				'eventCategory': 'Widget',
				'eventAction': 'Click',
				'eventLabel': btn.currentTarget.classList.contains('the-in-carousel__nav-prev') ? 'Left' : 'Right'
			});
		})

		$('.the-in-carousel__pack', matchcenter).on('click', function () {
			dataLayer && dataLayer.push({
				'event': 'olympiad_widget',
				'eventCategory': 'Widget',
				'eventAction': 'Click',
				'eventLabel': 'Other'
			});
		})

		$('.tournament-floor__info').on('click', function () {
			dataLayer && dataLayer.push({
				'event': 'olympiad_widget',
				'eventCategory': 'Widget',
				'eventAction': 'Click',
				'eventLabel': 'Other'
			});
		})

		$('.matchcenterlive__link').on('click', function () {
			console.log('click');
			dataLayer && dataLayer.push({
				'event': 'olympiad_widget',
				'eventCategory': 'Widget',
				'eventAction': 'Click',
				'eventLabel': 'Matchcentrerlive'
			});
		})
	}


	$('.matchcenter__tabs-item').on('click', function(e) {
		e.preventDefault();

		$(this).addClass('m-active').siblings('.matchcenter__tabs-item').removeClass('m-active');
		$(this.hash).addClass('m-active').siblings('.matchcenter__content').removeClass('m-active');
	})

	$('.matchcenter__groups-tabs-item').on('click', function(e) {
		e.preventDefault();

		$(this).addClass('m-active').siblings('.matchcenter__groups-tabs-item').removeClass('m-active');
		$(this.hash).addClass('m-active').siblings('.matchcenter__groups-content').removeClass('m-active');
	})

	var data = {}
	if($('#modals').data('sid') !== '') {
		data.sid = $('#modals').data('sid')
	}

	if (ria.getUrlParameter('secret') !== '') {
		data.secret = ria.getUrlParameter('secret')
	}

	if (ria.getUrlParameter('template')) {
		data.template = '1'
	}
	$.ajax({
		url: '/services/popups.html',
		dataType: 'html',
		data: data,
		type: 'GET',
		success: function ( data ) {
			const $modal = $(data);

			loadCSS( $modal.data('css') );
			loadJS( $modal.data('js') );

			$('#modals').append($modal);
		}
	});

	$('a[data-modal-open]').on('click', function(e) {
		let linkAuth = e.target.closest('a');

		if (linkAuth && linkAuth.hasAttribute('auth')) {
			e.preventDefault();
		}
	});
});

function getDatepickerLocale() {
	var result = 'en';

	if (GLOBAL && GLOBAL.lang === 'rus') {
		result = 'ru';
	} else if (GLOBAL && GLOBAL.lang === 'eng') {
		result = 'en';
	} else if (GLOBAL && GLOBAL.design) {
		result = GLOBAL.design;
	}

	return result;
}
$(function() {
	$.fn.subscr = function() {

		return this.each(function() {

			var $this      = $(this),
				$submail   = $this.find('[data-type = "input"] input[name="email"]'),
				$form      = $this.find('[data-type = "form"]'),
				$submit    = $this.find('[data-type="submit"] input[type="submit"]'),
				$desc      = $this.find('[data-type = "desc"]'),
				$tz        = $this.find('.tz');

			var now = new Date();
			$tz.val( now.getTimezoneOffset() );

			if (typeof Intl.DateTimeFormat == 'function') {
				$tz.val( Intl.DateTimeFormat().resolvedOptions().timeZone );
			}

			if ( GLOBAL.user.mail && GLOBAL.user.emailActive === 'OK') {
				$this.addClass('m-email');
				$form.removeClass('m-invalid');
				$submail.attr({ 'value' : GLOBAL.user.mail});
			}

			$submit.on('click', function(e){
				e.preventDefault();

				if ( !($form.hasClass('m-invalid')) ) {
					$.ajax({
						url  : $form.data('ajax'),
						data : {
							'email'         : $submail.val(),
							'tz'            : $tz.val(),
							'title'         : $form.data('title'),
							'newsletter_id' : $form.data('newsletter')
						},
						dataType: 'json',
						beforeSend: function( xhr ) {
							// $desc.text('');

						}
					}).done(function( data ){
						if( data.status === 'OK' ) {
							$desc.text('');
							$this.addClass('m-done');
							$desc.text(data.message);
						}
					});
				}
			});

			//var socialNetworkStack;

		});
	};
	$('.js-subscribe').subscr()
});
"use strict";

$(function() {
	function clampRecomendation($obj) {
		$(".recommendation__announce").each(function() {
			var $title = $(this).find('.recommendation__clamp');
			if($(this) && $title && $title.height() > $(this).height()){
				if($title.text().indexOf(' ') > 0 && $(this).height() > 30) {
					while ($title.height() > $(this).height()) {
						$title.text($title.text().split(" ").slice(0, $title.text().split(" ").length - 1).join(" ") + "...");
					}
				}
				else {
					$(this).remove();
				}
			}
		});
	}

	window.startArticleJS = function( obj, type ){
		obj.each(function(){
			var $obj = $( this );
			// Подгрузка динамики
			if(GLOBAL && GLOBAL.htmlCache){
				$obj.addingDinamicData();
			}
			// $obj.addingDinamicData();
			// Инициализация скриптов в статье
			initArticleJS( obj, type );
		});
	};


	window.initArticleJS = function( obj, type ){
		obj.each( function(){

			var $obj = $( this );

			// кнопки шары в статье
			var $share = $obj.find('.article__sharebar');
			if ( $share.length > 0 ) {
				var defaultHeaderIndent = 40,                                               // расстояние от шапки на ria
					lentaHeaderIndent = $('body').hasClass('m-lenta-alert') ? 46 : 0;       // добавок расстояния от шапки для сайта с лентой
				if ( type != 'first' ) riaShare.initItems( $share );
				if ( $share.hasClass('m-article-sticky') && typeof ria === 'object' && !ria.supportsCSS( 'position', 'sticky' ) ) {
					$share.riaShareSliding({
						frame: '.article__sharebar-line',
						header: '#headerSticked',
						headerIndent: ( defaultHeaderIndent + lentaHeaderIndent )
					});
				}
			}

			//
			var $ctaBlock = $obj.find('#cta');
			if ( $ctaBlock.length && typeof ctaRotate !== "undefined") {
				$ctaBlock.cta(ctaRotate);
			}
			if ( $obj.find('.cta2').length && typeof ctaRotate2 !== "undefined" ) {
				$obj.find('.cta2').cta(ctaRotate2);
			}

			var $mc_share = $obj.find('.matchcenterlive__article-sharebar');
			if ( $mc_share.length > 0 && typeof ria === 'object' && !ria.supportsCSS( 'position', 'sticky' ) ){
				$mc_share.riaShareSliding({
					frame : '.matchcenterlive__article-sharebar-line',
					header : '#headerSticked',
					headerIndent : ( defaultHeaderIndent + lentaHeaderIndent )
				});
			}

			// слайдинг правой колонки
			if (typeof ria === 'object' && !( ria.supportsCSS( 'position', 'sticky' ) && ria.supportsCSS( 'display', 'flex' ) ) ) {
				$obj.find('.js-slide-block').riaSliding({
					frame: '.layout-article__over',
					anchor: '.layout-article__right-column-anchor',
					topIndent: '#headerSticked',
					addedIndent : 10
				});
			}

			// // кнопка скрытия видео баннера 1053 позиция
			$obj.find('.banner__hidden-button').click( function(){
				$( this ).parents( '.article__block:first' ).empty().addClass('m-hidden');
			});

			// раскрытие врезов
			$obj.find('.article__incision').each( function() {
				var $el = $(this);

				$('.article__incision-button', $el).on( 'click', function(e) {
					e.preventDefault();
					$(this).parent().toggleClass('m-extended');
				});
			});


			$obj.find(".article__author" ).theinCarousel({
				navText : [`<svg class="svg-icon"><use xlink:href="${ria.getIcon('arrowLeft')}"/></svg>`,`<svg class="svg-icon"><use xlink:href="${ria.getIcon('arrowRight')}"/></svg>`],
				nav:false,
				motionType : 'transform',
				loop: false,
				itemWidth:300,
				rtl: Boolean(GLOBAL && GLOBAL.rtl),
				responsive:{
					1190:{
						nav: Boolean($obj.find(".article__author .article__author-item").length > 2)
					}
				}
			});

			// PHOTO CAROUSEL
			$obj.find(".article__photo.m-carousel .article__photo-item-set" ).each( function() {
				var $carousel = $( this ),
					$photo = $carousel.parents( '.article__photo.m-carousel:first' );
				// смена описания во внешнем блоке
				var $outer =  $('.article__photo-outer-desc', $photo ),
					$outerDescs = $('.article__photo-item-desc', $outer);
				$outerDescs.css('position', 'initial');
				$carousel.on( 'changed.the-in-carousel', function( event, data ){
					if ( $outer.is(':visible') ){
						var active = data.plugin._current.active;
						$outerDescs
							.hide()
							.find('.article__photo-item-over')
							.stop()
							.css('opacity', 0);
						$('.article__photo-item-desc[data-item='+active+']', $outer)
							.show()
							.find('.article__photo-item-over')
							.animate( {
								opacity : 1
							}, 250 );
					}
				});
				var responsive = {
					0: {
						itemWidth: '90%',
						between: 5
					}
				};
				// if ( type != 'online' ){
				responsive['925'] = {
					sticked: true,
					items: 1,
					between: 0
				}
				// }
				// запуск карусели
				$carousel.theinCarousel({
					navText : [`<svg class="svg-icon"><use xlink:href="${ria.getIcon('arrowLeft')}"/></svg>`,`<svg class="svg-icon"><use xlink:href="${ria.getIcon('arrowRight')}"/></svg>`],
					motionType : 'transform',
					loop: true,
					rtl: Boolean(GLOBAL && GLOBAL.rtl),
					responsive: responsive
				});
				// образмеривание описаний
				var dimension = function( wrapper ){
					var $wrapper = $( '.' + wrapper, $photo );
					if ( $wrapper.is(':visible') ){
						var $items = $( '.article__photo-item-desc', $wrapper);
						var h = 0;
						$items.each(function(){
							var ch = $(this).outerHeight( true );
							if ( ch > h ) h = ch;
						});
						$wrapper.height( h );
					}
				};
				$( window ).resize( function(){
					dimension( 'article__photo-outer-desc' );
					dimension( 'article__photo-inner-desc' );
				});
				$( window ).resize();
			});

			//
			// // video / audio / vote / victorina / instagram
			if ( type != 'first' ) {
				$('body').trigger('nextarticle');

				document.dispatchEvent(
					new CustomEvent('nextarticle', {
						bubbles: true,
						detail: { articleid: $obj.data('id')}
					})
				);

				if ( $( this ).find('.video-js').length && !window.videojs ) {
					loadJS( GLOBAL.js.videoplayer );
				} else {
					$( this ).find('.video-js').each(function() {
						videoInit( $(this) );
					});
				}

				$( this ).find('.audioplayer').audioPlayer();

				// $( this ).find( '.js-vote' ).riaVote();

				$( this ).find( '.victorina' ).riaVictorina();

				if( window.instgrm && window.instgrm.Embeds ){
					window.instgrm.Embeds.process();
				}
				if (window.twttr && window.twttr.widgets) {
					twttr.widgets.load();
				}

				if ( !window.partnersjs && typeof partners !== "undefined" && ($(this).find('.js-test-partner-1').length || $(this).find('.js-test-partner-2').length) ) {
					loadJS( GLOBAL.js.partners );
				}

			}

			if(typeof ria === 'object'){
				ria.convertDate();
				clampRecomendation();
			}
		});
	};


	var addingDinamicData = function( element, options ){

		var	defaults = {
			loadingCounter : 0,
			loadingCount : 3,
			loadingTimeout : 2000,
			loadingDate : false,
			loadingId : false
		};

		this.defOptions = defaults;
		this.userOptions = options;
		this.options = $.extend( true, {}, defaults, options );

		/** Dinamic data element */
		this.$element = $( element );
		this.loadingDate = this.options.loadingDate || this.$element.data( 'date' );
		this.loadingId = this.options.loadingId || this.$element.data( 'id' );

		if ( this.loadingDate && this.loadingId ) {
			this.$data = false;
			var preview = '';
			var endless = '';
			if (window.location.pathname.indexOf('editorial_preview') != -1) {
				preview = (window.location.search != '' ? '&' : '?') + 'preview=1';
			}
			endless = ((window.location.search != '' || preview != '') ? '&' : '?') + 'endless=' + this.$element.data( 'endless' );
			this.loadingUrl = '/services/dynamics/' + this.$element.data( 'date' ) + '/' + this.$element.data( 'id' ) + '.html'+ ( window.location.search != '' ? window.location.search : '' ) + preview + endless;
			this.getData();
		} else {
			console.log( ' addingDinamicData not possible to start' );
		}

	};

	addingDinamicData.prototype.getData = function(){
		var _this = this;
		$.ajax({
			url: _this.loadingUrl,
			dataType: 'html',
			type: 'GET',
			success: function ( data ) {
				_this.$data = $( data );
				_this.successData();
			},
			error: function (){
				if ( _this.options.loadingCounter < _this.options.loadingCount ){
					setTimeout( _this.getData() , _this.options.loadingTimeout );
					_this.options.loadingCounter++;
				} else {
					_this.errorData();
				}
			}
		});
	};

	addingDinamicData.prototype.pushRecommend = function(){
		var _this = this,
			$recommend = $( '.recommendation', _this.$data ),
			$recommendPlace = $( '.recommendation__place', _this.$element );

		if ( $recommend.length > 0 && $recommendPlace.length > 0 ){
			$recommendPlace.empty().append( $recommend );
			if ( typeof lazyload == 'function' ) lazyload();
			ria.convertDate();
			riaShare.initItems($recommend);
			clampRecomendation();
		} else {
			$recommendPlace.remove();
		}
	};

	addingDinamicData.prototype.successData = function(){
		var _this = this;
		//console.log( '--- SUCCESS GetData --- ' + _this.loadingUrl );
		_this.pushRecommend();
		_this.pushBestComments();
		_this.pushUserBar();
		_this.pushChatButtonToShare();
		_this.pushArticleBlocksViews();
		_this.pushStatistic();
	};

	addingDinamicData.prototype.errorData = function(){
		var _this = this;
		console.log( '--- ERROR GetData --- ' + _this.loadingUrl );
	};

	addingDinamicData.prototype.pushBestComments = function(){
		var _this = this,
			$bestComments = $( '.best-comments', _this.$data ),
			$bestCommentsPlace = $( '.article__best-comments', _this.$element );

		if ( $bestComments.length > 0 && $bestCommentsPlace.length > 0 ){
			$bestCommentsPlace
				// .on( 'click', '.best-comments__item-message-text', function(){ $( this ).removeClass('m-collapsed') })
				.replaceWith( $bestComments )
				// .slideDown();
		}else{
			$bestCommentsPlace.remove()
		}
	};

	addingDinamicData.prototype.pushStatistic = function(){
		var _this = this,
			$statisticPlace = $( '.article__view', _this.$element ),
			$id = $( '.article__view', _this.$element ).data('id'),
			$statistic = $( '.views[data-id='+$id+']', _this.$data );

		if ( $statistic.length > 0 && $statisticPlace.length > 0 ){
			$statisticPlace.empty().append( $statistic );
		} else {
			$statisticPlace.remove();
		}
	};

	addingDinamicData.prototype.pushArticleBlocksViews = function(){
		var _this = this,
			$views = $('.articleblocks__views',_this.$data),
			$articleblock = $('.elem-info__views', _this.$element);

			$articleblock.each(function () {
				var el = $(this),
					id = el.data('id'),
					view = $views.find('[data-id='+id+']');

				if(view.length){
					el.empty().append(view);
				}else{
					el.remove();
				}
			})
	}

	addingDinamicData.prototype.pushUserBar = function(){
		var _this = this,
			$usarBarTable = $( '.article__userbar', _this.$data ),
			$userBar = $( '.article__userbar-loader', _this.$element );
		if ($('#body').data('emoji') && $userBar.length > 0 && $usarBarTable.length > 0 ){
			$userBar.empty().append( $usarBarTable );
		} else {
			$userBar.remove();
		}
	};

	addingDinamicData.prototype.pushChatButtonToShare = function(){
		var _this = this,
			$shareBarChatButton = $( '.article__sharebar-chat', _this.$data),
			$shareBar = $( '.article__sharebar', _this.$element);
		if ( $shareBarChatButton.length > 0 && $shareBar.length > 0 ){
			$shareBar.append( $shareBarChatButton );
		}
	};

	addingDinamicData.prototype.getClientHeigth = function(){
		return  Math.max( window.innerHeight || 0, ( document.getElementsByTagName( 'html' )[ 0 ] || {} ).clientHeight || 0 )
	};

	$.fn.addingDinamicData = function( options ) {
		return this.each( function(){
			var instance = $.data( this, 'addingDinamicData' );
			if( !instance ){
				instance = new addingDinamicData( this, options );
				$.data( this, 'addingDinamicData', instance );
			}
		});
	};



});
