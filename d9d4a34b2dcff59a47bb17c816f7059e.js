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
 * prev.the-in-carousel         - Goes to previous item.
 * next.the-in-carousel         - Goes to next item.
 * change.the-in-carousel       - When a property is going to change its value.
 * changed.the-in-carousel      - When a property has changed its value.
 * refresh.the-in-carousel      - When the internal state of the plugin needs update.
 * refreshed.the-in-carousel    - When the internal state of the plugin has updated.
 * dragStart
 * dragEnd
 *
 * Register events listeners
 *
 * $('initialedCarouselSelector').on( 'changed.the-in-carousel', function( event, data ){
 *          ...... info in data  .....
 * });
 *
 *
 *
 * Listener:
 *
 * -----------------------------------------------------------
 *
 * prev.the-in-carousel         - previous item
 * next.the-in-carousel         - next item
 * parametr: [ duration {Number} ]
 *
 * $('selector').click(function() {
 *     $('initialedCarouselSelector').trigger('next.the-in-carousel'[, 100]);
 * });
 *
 * -----------------------------------------------------------
 *
 * change.the-in-carousel       - changed carousel position
 * parametr: position {Number} [, duration {Number} ]
 *
 * $('selector').click(function() {
 *     $('initialedCarouselSelector').trigger('change.the-in-carousel', 2 [, 100]);
 *     [ or ]
 *     $('initialedCarouselSelector').trigger('change.the-in-carousel', { position: 3 [, duration: 3000 ] });
 * });
 *
 * -----------------------------------------------------------
 *
 * refresh.the-in-carousel       - refresh carousel
 * parametr: [ forced recalculation of all parameters { Boolean } ]
 *
 * $('selector').click(function() {
 *     $('initialedCarouselSelector').trigger('refresh.the-in-carousel'[, true]);
 * });
 *
 * -----------------------------------------------------------
 *
 * !!! Attention !!!
 * motionType = 'scroll'    --->    sticked = false, elasticEnds = false
 * itemAutoWidth = true     --->    stretch = false, merge = false
 *
 * -----------------------------------------------------------
 *
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
                // тут в конце может быть ошибка с el.getBoundingClientRect().width, а с $(el).width() окргуляется размер в меньшую сторону и ничег не помещается
                width = c.itemsGridWidth ? ( merge > 0 ? ( ( parseInt( merge ) * ( c.itemsGridWidth + c.between ) ) - c.between ) : c.itemsGridWidth ) : el.getBoundingClientRect().width;
            /* TODO REMOVE */ // console.log( $(el).width(), el.getBoundingClientRect().width );
            /* TODO REMOVE */ // console.log( '--- itemsOriginWidth ', ( i + 1 ),' - width = ', width ,' frameWidth = ', c.frameWidth );
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

