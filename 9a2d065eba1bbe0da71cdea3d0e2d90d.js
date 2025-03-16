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

var photoViewWidget = {};

    photoViewWidget.init = function( options ){
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
			itemsLoop           : true,                     // зацикливать слайды по кругу
            itemsFilter         : function( item ){         // фильтрация выбранных элементов ( функция )
                return !$( item ).parents( ".m-clone" ).length;
            },
			durationTransition  : 300,                      // длительность transition в ms
			typeTransition      : 'ease-out',               // тип смены слайда
			desktopWidth        : 925                       // ширина экрана при которой считается desktop версией
		};
		/** СОСТОЯНИЯ */
		_this.states = {
			widgetOpen          : false,                    // флаг photoview открыт
			storeEnabled        : true,                     // поддержка history, флаг надо использовать
			storeFromHistory    : false,                    // флаг что пришли из history
			itemChange          : false,                    // флаг "смена слайда"
            controlsVisible     : true,                     // навигация видима
            imageTransformation : false,                    // трансформация картинки
            hammerFunc          : true                      // наличие hammerJS
		};
        /** модификаторы */
		_this.modPhotoviewOpen  = 'm-photoview-open';                        //
		_this.modeBlur          = 'm-blur';                                          // класс блюра на слой данных
		_this.modeDisabled      = 'm-disabled';                                  //
		_this.modeOpen          = 'm-open';                                          //
		_this.modeHidden        = 'm-hidden';                                      //
        /** view height */
        _this.clientHeight = _this.getCh();
		/** DATA - атрибуты элемента */
        _this.dataGroup         = _this.prefix + '-group';                    // [photoview]-group       атрибут группы
        _this.dataSrc           = _this.prefix + '-src';                      // [photoview]-src         атрибут урла картинки
        _this.dataImageId       = _this.prefix + '-image-id';                 // [photoview]-image-id    атрибут id картинки
        _this.dataShareLink     = _this.prefix + '-sharelink';                // [photoview]-sharelink   атрибут линк для шары
        _this.dataShareTitle    = _this.prefix + '-sharetitle';               // [photoview]-sharetitle  атрибут заголовок для шары
        _this.dataShareId       = _this.prefix + '-shareid';                  // [photoview]-shareid     атрибут id статьи для шары

		/** STORE */
		_this.store = {
			name    : 'pv',    // параметр в урле для хранения состояния
			group   : 'g',    // параметр в атрибуте идентификатор группы
			photo   : 'p'     // параметр в атрибуте идентификатор фото
		};

		/** items group info */
		_this.group = {
			id      : false,    // номер набора элементов
			$items  : false,    // выборка слайдов
			length  : false     // кол-во слайдов
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
		_this.layerStates = {
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
			'z-index': 1000,
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
	};
    photoViewWidget.update$Obj = function(){
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
    };
	/**
	 * Обработчики
	 */
    photoViewWidget.addHandlers = function(){
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
	};
	/**
	 * Прокрутка колесика над слоем фотовью для увеличения / усменьшения изображения
	 */
    photoViewWidget.addOnWheelY = function() {
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
	};
	/**
	 * Обработка прокрутки и вызов функции зума
	 */
    photoViewWidget.addOnWheelYHandler = function( e ){
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
	};
	/**
	 * Создание массива объектов из массива селекторов
	 * Creating an array from an array of selectors
	 * @param {Array} selectors or objects array
	 * @returns {Array} objects array
	 */
    photoViewWidget.objArrCreate = function( selectorsArr ){
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
	};
	/**
	 * Проверка попадания координат в несколько областей
	 * Checking hit coordinates in several areas
	 * @param {Number} coordinate X
	 * @param {Number} coordinate y
	 * @param {Object / Array objects} objects
	 * @returns {Boolean} true / false
	 */
    photoViewWidget.hitInArr = function( x, y, obj ){
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
	};
	/**
	 * Проверка попадания координат в одну область
	 * Checking hit coordinates in one area
	 * @param {Number} coordinate X
	 * @param {Number} coordinate y
	 * @param {Object} one object
	 * @returns {Boolean} true / false
	 */
    photoViewWidget.hitIn = function( x, y, obj ){
		var l = obj.offset().left,
			r = l + obj.outerWidth(),
			t = obj.offset().top,
			b = t + obj.outerHeight();
		    //console.log(l+' - '+x+' - '+r+' === '+t+' - '+y+' - '+b);
            //console.log(( x >= l && x <= r && y >= t && y <= b ) ? true : false );
		return ( x >= l && x <= r && y >= t && y <= b ) ? true : false;
	};

/** TOUCH EVENTS */
    photoViewWidget.touchInitHammer = function(){
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
	};
    photoViewWidget.touchPinch = function (ev){
		//console.log(ev.type);
	};
    photoViewWidget.touchPan = function (ev){
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
	};
    photoViewWidget.touchSwipe = function (ev){
		var _this = this;
		if (ev.type == 'swiperight'){
			_this.changePrev();
		} else if (ev.type == 'swipeleft'){
			_this.changeNext();
		}/* else if (ev.type == 'swipeup' || ev.type == 'swipedown'){
		 _this.close();
		 }*/
	};
    photoViewWidget.touchTap = function(ev) {
		var _this = this;
		//console.log( ev.type + ' x = ' + ev.center.x + ', y = ' + ev.center.y );
		if ( !this.disabledHideControls && !_this.hitInArr( ev.center.x, ev.center.y, _this.objArrCreate( _this.exceptionTap ) ) ){
			this.controlsToggle();
		} else if ( this.disabledHideControls ){
            this.disabledHideControls = false;
        }
	};
    photoViewWidget.touchDoubleTap = function (ev) {
		var _this = this;
		//console.log(ev.type + ' x = ' + ev.center.x + ', y = ' + ev.center.y );
		 /*if (!_this.hitInArr(ev.center.x, ev.center.y, _this.objArrCreate( _this.exceptionTap ) ) ){
			_this.imageScaling({
				x : ev.center.x,
				y : ev.center.y
			});
		}*/
	};
    photoViewWidget.checkElPosition = function(){

	};
	/**
	 * requestAnimationFrame
	 */
	/*photoViewWidget.requestElUpdate = function(param){
	 var _this = this;
	 if (!_this.imageTransformation){
	 _this.requestElAnimFrame(function() {
	 _this.requestElTransform(param)
	 });
	 _this.imageTransformation = true;
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
	 };*/
    photoViewWidget.requestElTransform = function(param) {
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

	};

	/** ИНФА по активной картинке */
    photoViewWidget.imageDataReset = function(){
		var _this = this;
		_this.image.$obj = $( _this.classPrefix + 'img', _this.$itemActive );
		_this.imageDataSizeUpdate();
		_this.image.scale.actual = 1;
		_this.image.origin.x = _this.image.size.w / 2;
		_this.image.origin.y = _this.image.size.h / 2;
		_this.image.translate.x =_this.image.translate.start_x = 0;
		_this.image.translate.y =_this.image.translate.start_y = 0;
	};
    photoViewWidget.imageDataSizeUpdate = function(){
		if ( typeof this.image.$obj == 'object' && this.image.$obj.length == 1) {
			this.image.size.w = this.image.$obj.width();
			this.image.size.h = this.image.$obj.height();
		}
	};
    photoViewWidget.imageCentering = function(){

	};
    photoViewWidget.imageTranslateOrigin = function( origin, coord, scaleActual ){
		return ( ( ( ( origin - this.image.origin[ coord ] ) * ( scaleActual - 1 ) ) / scaleActual ) + this.image.translate[ coord ] );
	};
    photoViewWidget.imageTranslateZoom = function( scaleActual, scaleTo, coord ){
		return ( this.image.translate[ coord ] * scaleActual / scaleTo );
	};
    photoViewWidget.imageScaling = function( param ){
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





	};

	/** open photo view */
    photoViewWidget.open = function( params ){

        //console.log('OPEN PHOTOVIEW ',params);
		var _this = this;
	// Если нет номера группы - присваиваем false
		if ( !params.group ) params.group = false;
        params.group = params.group || typeof params.clickObj == 'object' && params.clickObj.attr( 'data-'+_this.dataGroup ) || false;
    // Обновляем набор эелментов группы если:
		if (  _this.settings.updateGroupOpen    // - выствален флаг принудительного обновления каждый раз
            || params.group === false           // - номер группы false - открыть одну картинку
            || _this.group.id != params.group   // - номер группы не совпадает с ранее отрытой
            || !_this.group.$items              // - нет набора элементов
            || !_this.group.length              // - нет кол-ва элементов
        ) {
			_this.updateItemsGroup( params );
		}

	// Если в выборке нет элементов выходим
		if ( _this.group.length <= 0 ) {
			console.log( 'PhotoViewWidget ERROR - no items group length' );
			return false;
		}
	// Записываем номер активного слайда
		_this.itemActive.index = 0;           // по умолчанию 0
		if ( typeof params.clickObj == 'object' ) {  // если передан объект клика
            var openedImgId = params.clickObj.attr( 'data-'+_this.dataImageId );
            // если есть id картинки фильтруем набор и берем индекс(объект клика может быть клоном), если нет id то ищем индекс объекта клика
			_this.itemActive.index = _this.group.$items.index( openedImgId ? _this.group.$items.filter( '[data-' + _this.dataImageId + '="' + openedImgId + '"]' ) : params.clickObj );
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
        _this.layerStates = {
            bodyTop :       $( 'body' ).scrollTop(),
            bodyLeft :      $( 'body' ).scrollLeft(),
            htmlTop :       $( 'html' ).scrollTop(),
            htmlLeft :      $( 'html' ).scrollLeft(),
            bodyOverflow :  $( 'body' ).css( 'overflow' )
        };
	/* выставляем параметры на слой данных */
		_this.setStyle( _this.$page.addClass( _this.modeBlur ),{
			'position' : 'fixed',
			'top' : -( _this.layerStates.bodyTop + _this.layerStates.htmlTop ),
			'left' : -( _this.layerStates.bodyLeft + _this.layerStates.htmlLeft )
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
	};
	/** close photo view */
    photoViewWidget.close = function(){
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
					'overflow': _this.layerStates.bodyOverflow
				});
				$( 'body' )
					.scrollTop( _this.layerStates.bodyTop )
					.scrollLeft( _this.layerStates.bodyLeft );
				$( 'html' )
					.scrollTop( _this.layerStates.htmlTop )
					.scrollLeft( _this.layerStates.htmlLeft );
			}, historyTimeout );
			// передача в хистори нового хеша
			_this.storeCheck( 'close' );
			// состояние что фотовью не открыто
			_this.states.widgetOpen = false;
			// убираем обработку надатия клавиш
			$('body').off( 'keydown.photoview' );
		}
	};
	/** remove src and style images attribute, remove style sub blocks images */
    photoViewWidget.cleaning = function(){
		$( this.classPrefix + 'img', this.$el ).removeAttr( 'src' ).removeAttr( 'style' );
		this.$sub.removeAttr( 'style' );
	};
	/**
	 * обновляем получаем набор элементов по <groupID>, кол-во элементов и устанавливаем или скрываем номер активного
	 * update image items group
	 * @param {Object|Number} object params or group id
	 * @update {Number} this.group.id - group number
	 * @update {Object} this.group.$items - group items
	 * @update {Number} this.group.length - group length
	 * @add {Number} store number
	 */
    photoViewWidget.updateItemsGroup = function( params ){
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
            //console.log('DONE DONE DONE')
            _this.group.$items = $( _this.classPrefix + 'open[data-' + _this.dataGroup + '="' + _this.group.id + '"][data-' + _this.dataSrc + ']', $('body') ).filter(function () {
                // фильтрация элементов
                return typeof _this.settings.itemsFilter == 'function' ? _this.settings.itemsFilter( this ) : 1;
            });
        }
        // Добавляем в объект имя картинки для хеша
        $.each( _this.group.$items, function( i, v ){
            this.photoViewWidget_photo =  $( v ).data( _this.dataImageId ) || $( v ).data( _this.dataSrc ).match(/.*\/([^\.]+?)\.[a-zA-Z]+$/)[ 1 ]; // имя картинки для хеша
        });
        // записываем кол-во элеметов в наборе
        _this.group.length = _this.group.$items.length
	};
	/** Получаем набор данных по слайдам: предыдущий, активный, следующий  */
    photoViewWidget.getItemsData = function( n ){
		var _this = this;
		if ( typeof n === 'number' ) _this.itemActive.index = n;
		_this.getOneItemData( 'itemActive', _this.itemActive.index );
		// определяем номер предыдущего элемента
		if (_this.itemActive.index > 0){
			_this.itemPrev.index = _this.itemActive.index - 1;
		} else if ( _this.settings.itemsLoop && _this.itemActive.index == 0 && _this.group.length > 1 ){
			_this.itemPrev.index = _this.group.length - 1;
		} else {
			_this.itemPrev.index = false;
		}
		_this.getOneItemData( 'itemPrev', _this.itemPrev.index );
        // определяем номер следующего элемента
		if ( _this.itemActive.index + 1 < _this.group.length ){
			_this.itemNext.index = _this.itemActive.index + 1;
		} else if ( _this.settings.itemsLoop && _this.itemActive.index + 1 == _this.group.length && _this.group.length > 1 ){
			_this.itemNext.index = 0;
		} else {
			_this.itemNext.index = false;
		}
		_this.getOneItemData('itemNext', _this.itemNext.index );
	};
	/** Запись набора данных по слайду */
    photoViewWidget.getOneItemData = function( name, index ){
		var _this = this;
		if ( index === false ){
			_this[ name ].$obj = false;
			_this[ name ].src = false;
		} else {
			_this[ name ].$obj = $( _this.group.$items[ index ] );
			_this[ name ].src = _this[ name ].$obj.data( _this.dataSrc );
		}
	};

/** Загружаем картинки и устанавливаем в верстку */
    photoViewWidget.setImages = function(arrayItems){
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
	};
    photoViewWidget.setImagesAct = function(){
		var _this = this;
		_this.imageDataReset();
		_this.setActiveData();
		_this.updateShare();
		_this.updateDataSize( true );
	};

/** Active item data */
    photoViewWidget.setActiveData = function(){
		var _this = this,
		    openInfo = _this.itemActive.$obj.find( _this.classPrefix + 'open-info > *');
		$.each( openInfo , function(){
		    $( '.' + $( this ).attr( 'class' ), _this.$el ).html( $( this ).html() );
        });
	};
/** update share link and share title */
    photoViewWidget.updateShare = function(){
		var $share = $( '.share', this.$placeSocial );
		if ( $share.length > 0 ) {
            $share.attr({
                'data-url': this.itemActive.$obj.data(this.dataShareLink) || location.href,
                'data-title': this.itemActive.$obj.data(this.dataShareTitle) || $('meta[ property="og:title" ]').attr("content") || $('head title').html(),
                'data-id': this.itemActive.$obj.data(this.dataShareId)
            });
        };
	};
/** */
    photoViewWidget.updateDataSize = function( change ){
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
    };
/** Показ и скрытие блока описание */
    photoViewWidget.activeDataVisible = function( state ){
        this.$desc.toggleClass(  this.modeDisabled, ( ( state === true ) ? false : true ) );
    };
/** клик по кнопке показать больше описания */
    photoViewWidget.showDescMore = function( state, fast ){
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

    };
/** CONTROL */
    photoViewWidget.controlsToggle = function( state ){
		var _this = this;
		if ( state === true ){
			_this.controlsShow();
		} else if ( state === false ){
			_this.controlsHide();
		} else {
			if( _this.states.controlsVisible === true ){
				_this.controlsHide();
			} else {
				_this.controlsShow();
			}
		}
	};
    photoViewWidget.controlsHide = function(){
		var _this = this;
        _this.$canHide.stop().animate({
			opacity: 0
		}, 150, function(){
            _this.$canHide.addClass( _this.modeHidden );
			_this.states.controlsVisible = false;
		});
	};
    photoViewWidget.controlsShow = function(){
		var _this = this;
		_this.$canHide.stop().animate({
			opacity: 1
		}, 150, function(){
            _this.$canHide.removeClass( _this.modeHidden );
			_this.states.controlsVisible = true;
		});
	};

/** STORE */
    photoViewWidget.transferringFormat = function( obj, sign, sep ){
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
        };
    photoViewWidget.storeUpdateUrl = function( stateObj, title, paramsObj, replace ){
            var _this = this;
            if ( _this.states.storeEnabled && !_this.states.storeFromHistory ){
                if ( replace ){
                    history.replaceState( stateObj, title, _this.storeFormationUrl( paramsObj ) );
                } else {
                    history.pushState( stateObj, title, _this.storeFormationUrl( paramsObj ) );
                }
            }
            _this.states.storeFromHistory = false;
        };
    photoViewWidget.storeFormationUrl = function( paramsObj ){
            var params = this.transferringFormat( paramsObj );
            return location.origin + location.pathname + location.search + ( ( params == '' || params === false ) ? '' : '#' + params );
        };
    photoViewWidget.storeUpdObjParams = function( objParams, state ){
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
        };
    photoViewWidget.storeCheck = function( act ){
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
        };
    photoViewWidget.storeHistory = function(){
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
	};

/** VISIBILITY BUTTONS (obj) */

	/**
	 * видимость кнопок от ширины photoView и кол-ва фотографий
	 * visibility buttons
	 * @param {Obj | Array object }
	 */
    photoViewWidget.visibilityEl = function( el ){
		var _this = this;
		if ( _this.visibleView() ) {
			var objArr = _this.objArrCreate( el || _this.variableVisibility );
			if ( _this.group.length > 1 && ( !_this.states.hammerFunc || _this.settings.desktopWidth <= _this.getPhotoviewWidth() ) ) {
				_this.visibilityElAct( objArr, 'show' );
			} else {
				_this.visibilityElAct( objArr );
			}
		}
	};
    photoViewWidget.visibilityElAct = function( objArr, act ){
		if ( typeof objArr === 'object' && ( objArr instanceof Array ) ) {
			$.each( objArr, function ( k, v ) {
				act === 'show' ? v.show() : v.hide();
			});
		} else {
			act === 'show' ? objArr.show() : objArr.hide();
		}
	};

	/**
	 * Следующий слайд
	 */
    photoViewWidget.changeNext = function(){
		this.changeItem( 'itemNext' );
	};
	/**
	 * Прердыдущий слайд
	 */
    photoViewWidget.changePrev = function(){
		this.changeItem( 'itemPrev' );
	};
	/**
	 * Прердыдущий слайд
	 * Changes slide
	 * @param {String} direction
	 */
    photoViewWidget.changeItem = function( dir ){
		var _this = this;
		if ( _this.states.itemChange === false && _this[ dir ].index !== false ) {
			_this.states.itemChange = true;
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
				_this.states.itemChange = false;
				_this.storeCheck( 'change' );
			}, _this.settings.durationTransition || 100 );
		}
	};
	/**
	 * управление с клавиатуры
	 * keydown navigate
	 * @param {Code}
	 * @param {Object}
	 * @returns {Boolean} true|false
	 */
    photoViewWidget.keyDownNavigate = function( e ){
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
	};
	/**
	 * устанавливает числа "номер слайда/общее кол-во"
	 * @returns {Boolean} true|false
	 */
    photoViewWidget.setItemIndexView = function(){
		var _this = this;
		if( _this.visibleView() ){
			if ( _this.group.length <= 1 ) {
                _this.$placeIndexView.hide();
				return false;
			} else {
				$( 'span', _this.$placeIndexView ).html( ( _this.itemActive.index + 1 ) + ' из ' + _this.group.length );
                _this.$placeIndexView.show();
				return true;
			}
		}
	};
	/**
	 * выставить высоту слоя просмотра фотографий равно высоте окна
	 * set the height of the photoview as a window
	 * @set {Number} value
	 * @returns {Boolean} true|false
	 */
    photoViewWidget.setPhotoviewHeight = function(){
		if( this.visibleView() ) {
			this.$el.height( this.clientHeight );
			return true;
		}
		return false;
	};
	/**
	 * получить ширину слоя просмотра фотографий
	 * get width photoview
	 * @returns {Number} value or {Boolean} false
	 */
    photoViewWidget.getPhotoviewWidth = function(){
		if( this.visibleView() ){
			return parseInt( this.$el.outerWidth() );
		}
		return false;
	};
	/**
	 * позиционирование контентной части по горизонтали при открытом окне фотовью
	 * position content to horizontal
	 * @set {Number} value
	 */
    photoViewWidget.posLayerLeft = function( $layer ){
		$layer = $layer || this.$page;
		if( this.visibleView() ) {
			this.layerStates.bodyLeft = $( 'body' ).scrollLeft();
			this.layerStates.htmlLeft = $( 'html' ).scrollLeft();
			$layer.css( 'left', '-' + ( this.layerStates.bodyLeft + this.layerStates.htmlLeft ) + 'px' );
		}
	};
	/**
	 * позиционирование контентной части по вертикали при открытом окне фотовью
	 * position content to vertical
	 * @set {Number} value
	 */
    photoViewWidget.posLayerTop = function( $layer ){
        $layer = $layer || this.$page;
		if( this.visibleView() && $layer.css( 'position' ) == 'absolute' ){
			var layerIndentTop = parseInt( $layer.css( 'top' ) ),           // top position layer content
				layerHeight = $layer.outerHeight();                         // layer content height
			if ( ( layerHeight + layerIndentTop ) < this.clientHeight && layerHeight > this.clientHeight ){
				this.layerStates.bodyTop = layerHeight-this.clientHeight;
			} else if ( layerHeight < this.clientHeight ){
				this.layerStates.bodyTop = 0;
			}
			$layer.css( 'top', '-' + this.layerStates.bodyTop + 'px' );
		}
	};
	/**
	 * взять элемент по классу
	 * get live element by class name
	 * @param {String} selector
	 * @returns {Object}
	 */
    photoViewWidget.getBy = function( selector ) {
		return $( selector, this.$el );
	};
	/**
	 * видимость окна просмотра фотографий
	 * photoView visible
	 * @returns {Boolean} true|false
	 */
    photoViewWidget.visibleView = function(){
		return this.$el.is( ":visible" );
	};
	/**
	 * получение ширины клиента
	 * get clients width
	 * @returns {Number} value
	 */
    photoViewWidget.getCw = function(){
		return Math.max(window.innerWidth || 0, (document.getElementsByTagName('html')[0] || {}).clientWidth || 0)
	};
	/**
	 * получение высоты клиента
	 * get clients height
	 * @returns {Number} value
	 */
    photoViewWidget.getCh = function(){
		return Math.max(window.innerHeight || 0, (document.getElementsByTagName('html')[0] || {}).clientHeight || 0)
	};
	/**
	 * установка стиля(ей) на объект
	 * set style to object
	 * @param {Object} obj
	 * @param {String | Object} property | states
	 * @param {String/Number | Object} value | states
	 */
    photoViewWidget.setStyle = function( obj, prop, val ){
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
	};
	/**
	 * установка стиля transition на объект
	 * set transition style to object
	 * @param {Object} obj
	 * @param {Object} states { prop, <time>, <type>, <delay> }
	 */
    photoViewWidget.setStyleTransition = function( obj, states ){
		var _this = this;
		if ( states.prop === 'none' ){
			obj.css( _this.prefixedStyle( obj[ 0 ].style, 'transition' ), 'none' );
		} else {
			var trDuration = ( states.duration || _this.settings.durationTransition || 100 ) + 'ms',
				trTiming = states.type || _this.settings.typeTransition || 'ease-out',
				trDelay = ( states.delay || '0' ) + 'ms';
			obj.css( _this.prefixedStyle( obj[ 0 ].style, 'transition' ), _this.prefixedStyle( obj[ 0 ].style, states.prop ) + ' ' + trDuration + ' ' + trTiming + ' ' + trDelay );
		}
	};
	/**
	 * получение префикса для значения свойства
	 * get the prefixed property
	 * @param {Object} obj
	 * @param {String} property
	 * @returns {String | Undefined} prefixed
	 */
    photoViewWidget.prefixedStyle = function( obj, property ) {
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
	};


