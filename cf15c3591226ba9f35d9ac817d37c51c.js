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
		 // add attr "title" on iframe for test LightHouse #RIA2018-2783
		_this.$boxFrame = $( '<iframe title="scroll" name="' + _this.pluginNumber + '__box" class="' + _this.prefix + 'frame"></iframe>' );
		_this.$containerFrame = $( '<iframe title="scroll" name="' + _this.pluginNumber + '__container" class="' + _this.prefix + 'frame"></iframe>' );
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

