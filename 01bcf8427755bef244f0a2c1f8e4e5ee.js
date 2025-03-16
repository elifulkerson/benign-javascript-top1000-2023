;"use strict";

/**
 *  modalLayer v2 12/07/18
 *
 * ---------------------------------------------
 *  Приоритет значений
 * ---------------------------------------------
 *
 *  1. значение из data атрибута на кнопке открытия / закрытия окна
 *  2. значение переданное через объект в метод открытия/закрытия
 *  3. значение из data на открываемом / закрываемом прессете
 *  4. значение по умолчанию или переданное при инициализации для всех окон
 *
 * ---------------------------------------------
 *  Описания data атрибутов
 * ---------------------------------------------
 *
 *  data атрибуты для открытия попапа :
 *
 *  data-modal-open             - для открытия попапа, работает только для предустановленных пресетов
 *  data-modal-max-width        - максимальная ширина попапа
 *  data-modal-use-full         - для настройки fullscreen слоя установить любое значение
 *
 *  data-modal-hide-closing-off - отключение закрытия окна при клике на заменяющий слой
 *  data-modal-close-hidden     - скрыть крестик закрытия окна
 *
 *  data-modal-before-open      - имя функции в window выполняемой до открытия окна
 *  data-modal-after-open       - имя функции в window выполняемой после открытия окна
 *
 *  data-modal-valing           - выравнивание окна [ middle ], top, bottom )
 *  data-modal-valing-full      - выравнивание окна при fullscreen [ middle ], top, bottom )
 *
 *  data-modal-indent           -
 *  data-modal-indent-top       -
 *  data-modal-indent-bottom    -
 *
 *
 *  data атрибут для закрытия попапа :
 *  data-modal-close            - для закрытия попапа установить любое значение
 *  data-modal-clear-form       - очистка формы в закрываемом пресете или очиста форм во всех пресетах
 *  data-modal-before-close     - имя функции в window выполняемой до закрытия окна
 *  data-modal-after-close      - имя функции в window выполняемой после закрытия окна
 *
 * ---------------------------------------------
 *  Описания свойств объекта при открытии / закртыии
 * ---------------------------------------------
 *
 *  Объект свойств передаваемых в open();
 *  open            - название для предустановленного пересета
 *  maxWidth        - максимальная ширина окна
 *  useFull         - использовать full screen если окно не помещается по ширинеx
 *  hideClosingOff  - отключение закрытия окна при клике на затемняющий слой
 *  closeHidden     - скрыть крестик закрытия окна
 *  beforeOpen      - функция или имя функции в window выполняемой до открытия окна
 *  afterOpen       - функция или имя функции в window выполняемой после открытия окна
 *  beforeClose     - функция или имя функции в window выполняемой до закрытия окна
 *  afterClose      - функция или имя функции в window выполняемой после закрытия окна
 *  customTitle     - текст для кастомного title
 *  customContent   - текст для кастомного content
 *
 *  Объект свойств передаваемых в close();
 *  clearForm       - очистить формы  [ false ], true, 'all'
 *  beforeClose     - функция или имя функции в window выполняемой до закрытия окна
 *  afterClose      - функция или имя функции в window выполняемой после закрытия окна
 *
 * ---------------------------------------------
 *  triggers
 * ---------------------------------------------
 *
 *  initedModalLayer        - инициализирован
 *  openModalLayer          - окно открыто
 *  closeModalLayer         - окно закрыто
 *  hideModalLayer          - контент скрыт при смене
 *  showModalLayer          - контент показан при смене
 *  changeModalLayer        - смена контента завершена
 *
 *  Содержание объекта data:
 *  data = {
 *      eventType   - название эвента
 *      plugin      - ссылка на плагин
 *      current     - текущие состояния
 *  }
 *
 *  подписка:
 *  $( window ).on( 'initedModalLayer openModalLayer closeModalLayer hideModalLayer showModalLayer changeModalLayer', function( event, data ){});
 *
 * ---------------------------------------------
 *  Открыть готовый прессет
 * ---------------------------------------------
 *
 *  data params:
 *  data-modal-open         - имя пресета
 *  data-modal-max-width    - ширина открываемомго попапа, только для этой кнопки
 *  data-modal-use-full     - флаг - делать попап фулскрин как только он не помещается по ширине
 *
 *  code:
 *  modalLayer.open('name_preset');
 *  modalLayer.open({
 *      preset: 'name_preset'
 *  });
 *
 *  click:
 *  <a data-modal-open='name_preset' />
 *  <a data-modal-open='name_preset' data-modal-max-width='150px' />
 *  <a data-modal-open='name_preset' data-modal-max-width='150px' data-modal-use-full='true' />
 *
 * ---------------------------------------------
 *  Открыть кастомный попап
 * ---------------------------------------------
 *
 *  modalLayer.open({
 *      customTitle: 'title text',
 *      customContent: 'content text'
 *  })
 *
 * ---------------------------------------------
 *  Закрыть попап
 * ---------------------------------------------
 *
 *  click:
 *  <a data-modal-close='' />
 *
 *  code:
 *  modalLayer.close();
 *  modalLayer.close({
 *      clearForm: true
 *  });
 *
 * ---------------------------------------------
 * */

var modalLayer = {
	init: function( options ){

		var _this = this;

		var defaults = {
	    // used during initialization
            mainClass : "modal",
            modifierIsOpen : "m-open",          // попап открыт
            modifierIsFull : "m-full",          // попап на весь экран
            modifierIsActive : "m-active",      // активный пресет
            modifierIsTransform : "m-transform",// container в процессе замены контента трансформацией
            modifierIsCloseHide : "m-close-hide",// класс скрытого крестика
            pageSelector : "#page",             // селектор слоя данных
            modalSelector : "#modalLayer",      // селектор слоя попапа

        // used each size
            useFull : true,                     // открывать все окна когда упираются в гирину экрана в режиме фуллс крина
            maxWidth : '480',                   // максимальный размер попапа по умолчанию
            typeChange : 'resize',              // тип смены контента                                                   [ 'resize' ], 'false'
            clearForm : false,                  // очистка форм после закрытия окна                                     [ false ], true, 'all'
            hideClosingOff : false,             // отключить закрытие окна по затемняющиму слою
            closeHidden : false,                // скрыть крестик закрытия

            beforeOpen : false,                 // функция или имя функции выполняемой до открытия окна
            afterOpen : false,                  // функция или имя функции выполняемой после открытия окна

            beforeClose : false,                // функция или имя функции выполняемой до закрытия окна
            afterClose : false,                 // функция или имя функции выполняемой после закрытия окна

            valign: false,                      // выравнивание окна по вертикали                                       [ false ], top, bottom, center = false, full
            valignFull: false,                  // выравнивание окна по вертикали когда ширина попапа <= ширине экрана  [ false ], top, bottom, center, full = false

            indent : 30,                        // вертикальные отступы до границ окна                                  []
            indentTop : false,                  // верхний отступ до границ окна                                        []
            indentBottom : false,               // нижний отступ до границ окна                                         []

            //durationsChangeSize : 200,        // длительсность иземения размеров окна при typeChange : 'resize'
            //durationsHideContent : 250,       // длительность скрытия контента при typeChange : 'resize'
            //durationsShowContent : 200,       // длительность показа контента при typeChange : 'resize'

            durationsChangeSize : 250,          // длительсность иземения размеров окна при typeChange : 'resize'
            durationsHideContent : 250,         // длительность скрытия контента при typeChange : 'resize'
            durationsShowContent : 250,         // длительность показа контента при typeChange : 'resize'

        // responsive settings
            responsive : {                      // адаптивные настройки
                /** 0 : { used each size params },
                 *  455 : { used each size params },
                 *  640 : { used each size params },
                 *  .....
                 *  853 : { used each size params }
                 *  1024 : { used each size params }
                 */
            }
        };

        _this.defOptions = defaults;
        _this.userOptions = options;
        _this.options = $.extend( true, {}, defaults, options );

        /** used during initialization and delete */
        _this.$page = $( _this.options.pageSelector );
        delete _this.options.pageSelector;
        _this.$modal = $( _this.options.modalSelector );
        delete _this.options.modalSelector;
        if (  _this.$page.length <= 0 || _this.$modal.length <= 0) {
            // если нет стоя контента или стоя попапа выходим
            console.log(' No layers found for "modalLayer" ');
            return false;
        }
        _this.mc = _this.options.mainClass;
        delete _this.options.mainClass;
        _this.mOpen = _this.options.modifierIsOpen;
        delete _this.options.modifierIsOpen;
        _this.mFull = _this.options.modifierIsFull;
        delete _this.options.modifierIsFull;
        _this.mActive = _this.options.modifierIsActive;
        delete _this.options.modifierIsActive;
        _this.mCloseHide = _this.options.modifierIsCloseHide;
        delete _this.options.modifierIsCloseHide;
        _this.mTransform = _this.options.modifierIsTransform;
        delete _this.options.modifierIsTransform;

        /** data attribute */
        _this.tData = {
            open : _this.mc + '-open',                      // data-modal-open              название пресета, работает только для предустановленных пресетов
            close : _this.mc + '-close',                    // data-modal-close             закрытие попапа - любое значение
            useFull : _this.mc + '-use-full',               // data-modal-use-full          для настройки fullscreen слоя установить любое значение
            maxWidth : _this.mc + '-max-width',             // data-modal-max-width         максимальная ширина попапа
            clearForm : _this.mc + '-clear-form',           // data-modal-clear-form        очищать форму(ы) после закрытия

            hideClosingOff : _this.mc + '-hide-closing-off',// data-modal-hide-closing-off  отключить закрытие окна по затемняющиму слою
            closeHidden : _this.mc + '-close-hidden',       // data-modal-close-hidden      скрыть крестик закрытия

            beforeOpen : _this.mc + '-before-open',         // data-modal-before-open       функция выполняемая до открытия окна
            afterOpen : _this.mc + '-after-open',           // data-modal-after-open        функция выполняемая после открытия окна

            beforeClose : _this.mc + '-before-close',       // data-modal-before-close      функция выполняемая до закрытия окна
            afterClose : _this.mc + '-after-close',         // data-modal-after-close       функция выполняемая после закрытия окна

            valign : _this.mc + '-valign',                  // data-modal-valign            выравнивание окна
            valignFull : _this.mc + '-valign-full',         // data-modal-valign-full       выравнивание окна при fullscreen

            indent : _this.mc + '-indent',                  // data-modal-indent            отступ у окна
            indentTop : _this.mc + '-indent-top',           // data-modal-indent-top        отступ у окна сверху
            indentBottom : _this.mc + '-indent-bottom'      // data-modal-indent-bottom     отступ у окна снизу
        };

        /** main objects */
        _this.$hide = $( "." + _this.mc + "__hide", _this.$modal );
        _this.$indents = $( "." + _this.mc + "__indents", _this.$modal );
        _this.$alignment = $( "." + _this.mc + "__alignment", _this.$modal );
        _this.$size = $( "." + _this.mc + "__size", _this.$modal );
        _this.$container = $( "." + _this.mc + "__container", _this.$modal );
        _this.$presets = $( "." + _this.mc + "__preset", _this.$modal );
        _this.$contents = $( "." + _this.mc + "__content", _this.$modal );
        _this.$customTitle = $( "." + _this.mc + "__preset[data-" + _this.mc + "-preset='custom'] ." + _this.mc + "__main-title span", _this.$modal );
        _this.$customContent = $( "." + _this.mc + "__preset[data-" + _this.mc + "-preset='custom'] ." + _this.mc + "__main-content", _this.$modal );
        _this.$close = $( "." + _this.mc + "__close", _this.$modal );

        /** Current breakpoint settings */
        _this._settings = {
            breakpoints : [ -1, 0 ],            // текущий активный интервал для адаптива
        };

        /** Current states */
        _this._current = {
            preset : false,                     // название открытого пересета
            $preset : false,                    // объект активного пресета
            isOpen : false,                     // попап открыт
            isFull: false,                      // занимает весь экран если упирается в края по ширине
            pageTop : 0,                        // позиция страницы по вертикали
            pageLeft : 0,                       // позиция страницы по горизонтали
            clientHeight: false                 // размер клиента по вертикали
        };

        /** Queues */
        _this.queueOpenData = [
            'maxWidth',
            'useFull',
            'clearForm',
            'closeHidden',
            'beforeOpen', 'afterOpen',
            'beforeClose', 'afterClose',
            'valign', 'valignFull',
            'indent', 'indentTop', 'indentBottom',
        ];
        _this.queueCloseData = [
            'clearForm',
            'beforeClose',
            'afterClose'
        ];

        /** Первичные стили на слои */
		_this.$page
			.css( 'position', 'relative' )
			.css( 'margin', '0' )
			.css( 'padding', '0' );
		_this.$modal
			.css( 'position', 'absolute' );

		_this.$presets.hide();
		_this.addHandlers();
        _this.getSettings();
        _this.setTrigger( 'inited' );

	},

	addHandlers: function(){
		var _this = this;
		// Открываем попап по клику на элемент с атрибутом data-modal-open='название пресета'
		$( 'body' ).on( 'click', '*[data-' + _this.tData.open + ']', function(){
		    let tagOpen = $( this ).data( _this.tData.open );
			if ( tagOpen != '' && typeof tagOpen == 'string' ){
				let $this = $( this ),
                    paramsObj = {
				        preset: tagOpen
				    };
				$.each( _this.queueOpenData, function( i, v ){
                    if ( $this.data( _this.tData[ v ] ) ) {
                        paramsObj[ v ] = $this.data( _this.tData[ v ] );
                    }
                });
                _this.open( paramsObj );
			}
		});
		/* Закрываем попап по клику на элемент с атрибутом data-modal-close */
		$( 'body' ).on( 'click', '*[data-' + _this.tData.close + ']', function(){
            var $this = $( this ),
                paramsObj = {};
            $.each( _this.queueCloseData, function( i,v ){
                if ( $this.data( _this.tData[ v ] ) ) paramsObj[ v ] = $this.data( _this.tData[ v ] );
            });
            _this.close( paramsObj );
		});
		/* Закрываем попап по клику на крестик */
		_this.$close.on( 'click', function(){
			_this.close();
		});
		/* Закрываем попап по клику на затемняющий слой */
		_this.$hide.on( 'click', function(){
		    if ( !_this._current.hideClosingOff ) _this.close();
		});
        $( window ).scroll(function(){
            _this.onScroll();
        });
		$( window ).resize(function(){
		    _this.onResize();
		});

	},

    onScroll : function(){
        var _this = this;
        if ( _this._current.isOpen ) {
            _this.checkPageLeft();
        }
    },

    onResize : function( force ){
        var _this = this;
        if ( force || _this._current.isOpen ) {
            _this.getSettings();
            _this.setLayersHeight();
            _this.checkPageTop();
            _this.checkFull( );
            _this.checkVAlign( );
        }
    },

    openFull : function( content ){
	    if ( content ){
	        $('#modalFullContent').html( content );
        }
	    this.open( 'full' );
    },

	open: function( options ){

	    /* TODO отладка */ //this.testingShowObject( true, 'BEFORE OPEN');

	    // если не переданы опции выходим
	    if ( !options ) return false;
	    // если передана строка то это название пресета
	    if ( typeof options == 'string' ) {
	        options = {
	            preset : options
            }
        }
		// если не передан пресет проверяем кастомные данные для открытия кастомного попапа
		if ( !options.preset ) {
			if ( ( options.customTitle || options.customContent ) ) {
				options.preset = 'custom'
			} else {
				return false;
			}
		}
		// создаем объект с данными открываемого персета
		var n = {
            $preset : this.$container.find( '.' + this.mc + '__preset[data-' + this.mc + '-preset = "' + options.preset + '"]' )
        };

        // если такой пресет есть в верстке ... иначе выходим
		if ( n.$preset.length > 0 ) {
            var _this = this,
                c = _this._current;

            // Берем настройки и раширяем _current
            _this.getSettings();
            $.extend( true, c, _this._settings );
            _this.setLayersHeight();

            n.preset = options.preset;
            n.customTitle = options.customTitle;
            n.customContent = options.customContent;

            // обновляем параметры открываемого пресета с data параметров
            $.each( _this.queueOpenData, function( i, v ){
                let presetData = n.$preset.data( _this.tData[ v ] )
                // TODO testmodalFullHeader
                //console.log(v, ' : data = ', presetData, ', option = ', options[ v ], ', _current = ', c[ v ]);
                n[ v ] = presetData || presetData === false ? presetData : options[ v ] || c[ v ] || false;
            });
            n.maxWidth = parseInt( n.maxWidth );

            if ( c.isOpen ) {

                _this.change( n );

            } else {
                $.extend( true, c, n );

                /* TODO remove */ //this.testingShowObject( true, 'modalLayer Open' );

                // сохраняем прокрутку body по вертикали и горизонтали
                _this.getPageIndents();
                // выставляем максмальную ширину на контейнер
                _this.$container.css( 'max-width', c.maxWidth );
                // если пресет custom заполняем данными
                if ( c.preset == 'custom' ) _this.pushCustom( c );
                // выполняем функцию до открытия окна
                _this.useFunction( c.beforeOpen );
                // скрываем крестик закрытия
                if ( c.closeHidden ) _this.$modal.addClass( _this.mCloseHide );
                // показываем пресет
                c.$preset.show();
                // Выставляем контентный слой в fixed с позиционаированием по текущей прокрутке страницы
                _this.$page
                    .css( 'position', 'fixed' )
                    .css( 'top', -c.pageTop )
                    .css( 'left', -c.pageLeft );
                /* Показываем попап */
                _this.setLayersHeight();
                _this.$modal
                    .css('position', 'relative')
                    .show()
                    .addClass( _this.mOpen )
                    .attr('data-preset', c.preset );
                $( 'html' ).scrollTop( 0 );
                /* выставляем флаг в открыт */
                c.isOpen = true;
                _this.checkFull();
                _this.checkVAlign();
                // добавляем клас активности
                c.$preset.addClass( _this.mActive );
                // выполняем функцию после открытия открытия окна
                _this.useFunction( c.afterOpen );
                _this.setTrigger( 'open' );
            }
		} else {
		    console.log('modalLayer: preset "' + options.preset + '" not found to open');
		    return false;
        }
	},

    change : function( n ){
        var _this = this,
            c = _this._current;

        /* TODO отладка */ // console.log( 'OPENABLE NEW ', n );

        if ( c.typeChange === 'resize' ) {

            // выполняем функцию до закрытия
            _this.useFunction( c.beforeClose );

            // собираем размеры текущего положения и размеров окна
            var sizeWidth = parseInt( _this.$size.outerWidth() ),
                sizeHeight = parseInt( _this.$size.outerHeight() ),
                contWidth = parseInt( _this.$container.outerWidth() ),
                contHeight = parseInt( _this.$container.outerHeight() ),
                contOffsetTop = _this.$container[0].offsetTop,
                contOffsetBottom = sizeHeight - contHeight - contOffsetTop;

            // выставляем на попап текущие значения размера
            _this.$container.css( {
                'width' : contWidth,
                'height' : contHeight,
                'margin-top' : contOffsetTop,
                'margin-bottom' : contOffsetBottom,
                'max-width' : ''
            });

            /* TODO отладка */ //console.log(' === CURRENT --- size ( ', sizeWidth, ' x ', sizeHeight, ' ) --- bg ( ', contWidth, ' x ', contHeight, ' ) --- top ', contOffsetTop, ' bottom ', contOffsetBottom );

            // скрываем текущий контент
            c.$preset.animate({

                'opacity' : 0

            }, c.durationsHideContent , function(){

                // навешиваем класс m-transform чтобы убрать все растягивания контента
                _this.$container.addClass( _this.mTransform )
                // выставляем идентификатор нового пресета чтобы все образмеривания происходили со стилями для этого окна
                _this.$modal.attr('data-preset', n.preset );

                // скрываем контент текущего и действия после скрытия
                c.$preset.hide().css( 'opacity', '' );
                _this.endingClosing();
                _this.useFunction( c.afterClose );
                _this.setTrigger( 'hide' );

                // вставляем кастомный контент если есть
                if ( n.preset == 'custom' ) _this.pushCustom( n );

                // объект свойств для анимации смены
                var size = {};

                // узнаем размер ширины нового окна для анимации подложки
                var nWidth = ( sizeWidth <= n.maxWidth ) ? sizeWidth : n.maxWidth;
                /* TODO отладка */ //console.log( 'OPENABLE sizeWidth = ', sizeWidth ,' n.maxWidth = ', n.maxWidth, ' => ', nWidth )

                // узнаем какое будет новое окно full или нет
                n.isFull = ( sizeWidth <= n.maxWidth && n.useFull ) ? true : false;
                /* TODO отладка */ //console.log(' === FULL --- ', c.isFull, ' => ', n.isFull );

                var nValign = n.isFull ? ( n.valignFull || n.valign || '' ) : ( n.valign || '' );

                // выставляем новое значени m-full и data-valign
                _this.$modal
                    .toggleClass( _this.mFull, n.isFull )
                    .attr( 'data-valing', nValign )

                // узнаем высоту нового контента для определения высоты нового окна
                n.$preset.css({ 'opacity' : 0, 'display': 'block' }).outerWidth( nWidth );
                var nCH = n.$preset.outerHeight()
                n.$preset.css({ 'opacity' : '', 'display': 'none', 'width': '' });

                /* TODO отладка */ //console.log( 'OPENABLE new CH = ', nCH ,' new maxWidth = ', n.maxWidth )
                /* TODO отладка */ //console.log( 'OPENABLE isFull = ', n.isFull, ' valignFull = ', n.valignFull ,' valign = ', n.valign )

                // узнаем высоту нового окна для анимации подложки
                var nHeight = nCH >= sizeHeight ? nCH
                                    : ( n.isFull && n.valignFull == 'full' ) ? sizeHeight
                                    : ( n.isFull && n.valignFull == false && n.valign == false ) ? sizeHeight
                                    : ( !n.isFull && n.valign == 'full' ) ? sizeHeight
                                    : nCH;

                size[ 'width' ] = nWidth;
                size[ 'height' ] = nHeight;
                size[ 'margin-top' ] = ( n.isFull ? 0 : parseInt( n.indentTop || n.indent || 0 ) ) + 'px';
                size[ 'margin-bottom' ] = ( n.isFull ? 0 : parseInt( n.indentBottom || n.indent || 0 ) ) + 'px';

                /* TODO отладка */ //console.log( 'OPENABLE width = ',  size[ 'width' ] ,' height = ', size[ 'height' ] )
                /* TODO отладка */ //console.log( 'OPENABLE indentTop = ', n.indentTop, ' indentBottom = ', n.indentBottom , '  indent = ',  n.indent)

                // крутим страницу вверх с изменением размера подложки окна
                $( 'html' ).animate( { scrollTop : 0 }, c.durationsChangeSize );

                // изменяем размер окна
                _this.$container.animate( size, c.durationsChangeSize, function(){

                    _this.$container.removeClass( _this.mTransform )

                    $.extend( true, c, n );
                    _this.useFunction( c.beforeOpen );
                    if ( c.closeHidden ) _this.$modal.addClass( _this.mCloseHide );
                    // показываем новый контент
                    c.$preset
                        .css( 'opacity', 0 )
                        .show()
                        .addClass( _this.mActive )
                        .animate({
                        'opacity': 1
                    }, c.durationsShowContent, function(){
                        $( this ).css( 'opacity' , '');
                        // очищаем стили и выставляем максимальную ширину для окна
                        _this.$container.css( {
                            'max-width' : c.maxWidth,
                            'width' : '',
                            'height' : ''
                        });

                        _this.checkFull();
                        _this.checkVAlign();
                        _this.useFunction( c.afterOpen );
                        _this.setTrigger( 'show' );
                        _this.setTrigger( 'change' );
                    })
                })
            });
        } else {
            // закрываем пресет
            _this.useFunction( c.beforeClose );
            c.$preset.hide();
            _this.endingClosing();
            _this.useFunction( c.afterClose );
            _this.setTrigger( 'hide' );
            // обновляем _current
            $.extend( true, _this._current, n );
            // открываем новый пресет
            _this.useFunction( c.beforeOpen );
            _this.$container.css( 'max-width', c.maxWidth );
            // скрываем крестик закрытия
            if ( c.closeHidden ) _this.$modal.addClass( _this.mCloseHide );
            c.$preset.show();
            _this.checkFull();
            _this.checkVAlign();
            _this.$modal.attr('data-preset', c.preset );
            _this.useFunction( c.afterOpen );
            _this.setTrigger( 'show' );
            _this.setTrigger( 'change' );
        }
    },

	close : function( options ){
		var _this = this,
            c = _this._current;
		// если есть открытый попап
		if ( c.isOpen ) {
		    if ( options ){
                $.each( _this.queueCloseData, function( i, v ){
                    if ( options[ v ] ) c[ v ] = options[ v ]; // записываем в _current опции с кнопки закрытия
                });
            }
            _this.useFunction( c.beforeClose ); // выполняем функцию перед закрытием если есть
            _this.$modal
                .removeAttr( 'data-preset' )
                .removeClass( _this.mOpen )
                .hide()
                .css( 'position', 'absolute' );
            _this.$page
                .css( 'position','relative' )
                .css( 'top', 0 )
                .css( 'left', 0 );
            _this.setPageIndents();
            // скрываем все пресеты
            _this.$presets.hide();
            // меняем флаг что попап открыт на false
            c.isOpen = false;
            // сбрасываем параметры при закрыти окна
            c.pageTop = 0;
            c.pageLeft = 0;
            c.clientHeigth = false;
            c.isFull = false;
            _this.$modal.removeClass( _this.mFull );
            _this.endingClosing( options );
            // функция после закрытия
            _this.useFunction( c.afterClose );
            _this.setTrigger( 'close' );
		}
	},

    endingClosing : function(){
        var _this = this,
            c = _this._current;
        // если открыт кастомный обнуляем
        if ( c.preset == 'custom' ) this.clearCustom();
        // убираем класс активности
        // показываем крестик закрытия
        c.$preset
            .removeClass( _this.mActive )
            .removeClass( _this.mCloseHide )
        // очищаем формы
        _this.clearForm( c.clearForm );
        c.clearForm = false;
        // обнуление данных открытого пресета
        c.preset = false;
        c.$preset = false;
    },

    /**
     * Full
     */
    checkFull: function(){
        var _this = this,
            c = _this._current;
        c.isFull = ( c.useFull && ( _this.$size.outerWidth() <= _this.$container.outerWidth() ) ) ? true : false;
        _this.$modal.toggleClass( _this.mFull, c.isFull );
        _this.$container.css({
            'margin-top' : c.isFull ? 0 : parseInt( c.indentTop || c.indent || 0 ),
            'margin-bottom' : c.isFull ? 0 : parseInt( c.indentBottom || c.indent || 0 )
        });
    },

    /**
    * VAlign
    */
    checkVAlign: function(){
        var _this = this,
            c = _this._current;
        _this.$modal.attr( 'data-valing', ( c.isFull ? ( c.valignFull || c.valign || '' ) : ( c.valign || '' ) ) )
    },

    /**
     * Custom content
     */
    clearCustom : function(){
        this.$customTitle.html( '' );
        this.$customContent.html( '' );
    },
    pushCustom : function( obj ){
        if ( obj.customTitle ) this.$customTitle.html( obj.customTitle );
        if ( obj.customContent ) this.$customContent.html( obj.customContent );
    },
    /**
     * make function
     * @param { Object }
     * */
    useFunction : function ( func ){
        if ( typeof func == 'function' ){
            func();
        } else if ( typeof func == 'string' && typeof window[ func ] == 'function' ){
            window[ func ]();
        }
    },
    /**
     * cleaning the form in the active preset or in all presets
     * @param { Object }
     * */
    clearForm : function( state ){
	    if ( state == true || state == 'all' ) {
            var _this = this;
            if ( state == true ) {
                $("." + _this.mc + "__preset[data-" + _this.mc + "-preset='" + _this._current.preset + "'] form")[ 0 ].reset();
            } else if ( state == 'all' ) {
                $( "form", _this.$container ).each(function(){
                    $( this )[ 0 ].reset();
                });
            }
	    }
    },
    /**
     * set page indents
     * */
    setPageIndents : function(){
        $( 'html' )
            .scrollTop( this._current.pageTop )
            .scrollLeft( this._current.pageLeft );
    },
    /**
     * get page indents
     * */
    getPageIndents : function(){
        this._current.pageTop = $( 'html' ).scrollTop();
        this._current.pageLeft = $( 'html' ).scrollLeft();
    },
    /**
     * Позиционирование страницы по вертикали при изменении размеров окна
     * */
    checkPageTop : function(){
        var _this = this;
        if ( _this._current.isOpen ){
            var indTop = parseInt( _this.$page.css( 'top' ) ),
                pageH = _this.$page.outerHeight(),
                wH = _this.getClientHeigth();
            if ( ( pageH + indTop ) < wH && pageH > wH ){
                _this.$page.css( 'top', -( pageH - wH ) );
            }
        }
    },
    /**
     * Сдвиг контена при горизонтальном скроле попапа
     * @update {Number} this.pageLeft - horizontal scroll size
     */
    checkPageLeft : function(){
        var _this = this;
        if ( _this._current.isOpen ){
            _this.pageLeft = $( 'html' ).scrollLeft();
            _this.$page.css( 'left', -$( 'html' ).scrollLeft() );
        }
    },
    /**
     * Установка минимальный высоты слоев
     * @update {Number} this.clientHeight - client height
     * */
    setLayersHeight : function(){
        var ch = parseInt( this.getClientHeigth() );
        this.$modal.css( 'height', ch );
        this._current.clientHeight = ch;
    },
    /**
     * тригер
     * triggers a public event.
     * @param {String} event name
     * @param {Object} data array or object
     */
    setTrigger : function( name, data ){
        if ( typeof name != 'string' ) return false;
        var _this = this,
            extObj = {
                "eventType" : name,
                "plugin" : _this,
                "current" : _this._current
            },
            data = ( $.isPlainObject( data ) ) ? $.extend( true, data, extObj ) : extObj;
        $( window ).trigger( name + 'ModalLayer' , data );
    },
    /**
     * Receiving settings based on screen resolution
     * Получение настроек в зависимости от разрешения экрана
     * @param {Boolean} forced update
     * @return {Object} settings
     */
    getSettings : function( forced ){
        var _this = this,
            viewWidth = _this.getClientWidth(),
            _s = _this._settings;
        if ( forced || viewWidth <=  _s.breakpoints[ 0 ] || viewWidth > _s.breakpoints[ 1 ] ){
            var	overwrites = _this.options.responsive;
            if ( !overwrites ) {
                $.extend( true, _s, _this.options );
                _s.breakpoints = [ 0, Infinity ];
            } else {
                var	match = -1,
                    pointsArray = [],
                    pointsKey = -1;
                $.each( overwrites, function( point ) {
                    pointsArray.push( Number( point ) );
                    if ( viewWidth >= point && match < point ) {
                        pointsKey ++;
                        match = Number( point );
                    }
                });
                _s.breakpoints = [ pointsArray[ pointsKey ] ? pointsArray[ pointsKey ] : 0 , pointsArray[ ( pointsKey + 1 ) ] ? pointsArray[ ( pointsKey + 1 ) ] : Infinity];
                $.extend( true, _s, _this.options, overwrites[ match ] );
                delete _s.responsive;
            }
        }
        return _this._settings;
    },
    /**
     * получение ширины окна клиента
     * @returns {Number} size
     */
    getClientWidth : function(){
        return Math.max( window.innerWidth || 0, ( document.getElementsByTagName( 'html' )[ 0 ] || {} ).clientWidth || 0 )
    },
    /**
     * получение высоты окна клиента
     * @returns {Number} size
     */
    getClientHeigth : function(){
        return  Math.max( window.innerHeight || 0, ( document.getElementsByTagName( 'html' )[ 0 ] || {} ).clientHeight || 0 )
    },
    /**
     * для отладки - вывод свойств объекта
     * this.testingShowObject( array|name|true, 'MODAL OPEN - _settings', _this._settings);
     * @param {String|Array|Boolean} array|name show param(s) or true for show default params
     * @param {String} text description
     * @param {Object} params object for show
     */
    testingShowObject : function ( a, t, c ) {
        var c = Object.assign( {}, ( c ? c : this._current )) ,
            s = [
                'preset','$preset',
                'customTitle','customContent',
                'clientHeight','isOpen','useFull','isFull','maxWidth','typeChange','clearForm',
                'pageTop', 'pageLeft',
                'beforeClose','afterClose',
                'beforeOpen','afterOpen',
                'valign', 'valignFull',
                'indent', 'indentTop', 'indentBottom'
            ],
            a = a === true ? s : ( typeof a == "string" ) ? [ a ] : a,
            t = t ? t : '',
            o = {};
        $.each( a, function( i, v ){
            if ( c[ v ] || c[ v ] == false || c[ v ] == 0 ) o[ v ] = c[ v ];
        });
        console.log( ">>> " + t, o );
    },

};
