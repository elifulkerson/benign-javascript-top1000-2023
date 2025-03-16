
(function($){

	$.fn.riaForm = function( options ){

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

		var form = $( this );                    // <form> - вещать плагин на него
		var loader = $( options.loader, form );  // лоадер
		var dataUrl = form.attr( 'action' );     // url для ajax, берет с атрибута action form
		var errors = 0;
		var errorsMessage = {};

/* ФУНКЦИИ  */

		/* Показывает ошибку */
		var showFieldError = function( name, error ){
			/* показывает пару "поле ошибка" в консоли */
			console.log( name,'  ', error );
			/* Останавливается если не переданы параметры */
			if( !name || !error ){
				return;
			}
			var field;
			/* Проверка какое поле имеет переданный name и сохранение в field */
			if( $( 'input[name="' + name + '"]', form ).length > 0){
				field = $( 'input[name="' + name + '"]', form );
			} else if($('textarea[name="' + name + '"]', form ).length > 0){
				field = $( 'textarea[name="' + name + '"]', form );
			} else if($('select[name="' + name + '"]', form ).length > 0){
				field = $( 'select[name="' + name + '"]', form );
			} else {
				return;
			}
			/* Добавляет класс ошибки тегу input, textarea или select */
			if( options.errorInput ){
				field.addClass( options.errorClass );
			}
			/* Добавляет класс ошибки к лейблу поля */
			if( options.errorLabel ){
				var label = $( 'label[for="'+ field.attr( 'id' ) +'"]' );
				if( label.length > 0 ){
					/* Добавляетк ласс ошибки на label[for="..."]*/
					label.addClass( options.errorClass );
				} else if( field.parent().get( 0 ) && field.parent().get( 0 ).tagName == 'LABEL' ){
					/* Добавляет класс ошибки на первый родительский label */
					field.parent().addClass( options.errorClass );
				}
			}
			/* Показывает сообщение об ошибке для поля */
			if( options.errorMessage ){
				var message = $( options.message + '[' + options.messageConnector + '="' + name + '"]', form );
				if( message.length > 0 && options.messages && options.messages[ name ] ){
					message.empty().append( options.messages[ name ][ error ] ).show();
				}
			}
		};

		/* Проверка правил и подсветка ошибок */
		var checkRules = function(){
			for( key in options.rules ){
				var type = $.type( options.rules[ key ] );
				/* Если передан объект */
				if( type === 'object' ){
					for( node in options.rules[ key ] ){
						var name = key;
						var value = options.rules[ key ][ node ];
						checkRulesType( name, node, value );
					}
				}
				/* Если передан массив */
				if( type === 'array' ){
					var name = key;
					for( node in options.rules[ key ]){
						value = options.rules[ key ][ node ];
						checkRulesType(name, value);
					}
				}
				/* Проверяет переданное значение */
				else{
					checkRulesType( key, options.rules[ key ] );
				}
			}
			return errors;
		};

		var checkRulesType = function( name, key, value ){
			switch( key ){

				/* Функция */
				case 'function':
					if ( value instanceof Function ){
						var result = value( form, name );
						if( result == false ){
							errors++;
							errorsMessage[ name ] = 'function';
							showFieldError( name, 'function');
						}
					}
					break;

				/* Пустрое поле */
				case 'empty':
					var empty = checkFieldEmpty( name );
					if ( empty == true ){
						errors++;
						errorsMessage[ name ] = 'empty';
					}
					break;

				/* Email */
				case 'email':
					var email = checkFieldEmail( name );
					if( email == true ){
						errors++;
						errorsMessage[ name ] = 'email';
					}
					break;

				case 'number':
					var number = checkFieldNumber( name );
					if( number == true ){
						errors++;
						errorsMessage[ name ] = 'number';
					}
					break;
			}
			/* Отдельная проверка переданного объекта*/
			if ( key instanceof Function ){
				var result = key( form, name );
				if ( result == false ){
					errors++;
					errorsMessage[ name ] = 'function';
					showFieldError( name, 'function' );
				}
			}
		};

		/* Проверяет пустые поля */
		var checkFieldEmpty = function( name ){

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
		var checkFieldEmail = function( name ){

			/* Для input */
			if( $( 'input[name="' + name + '"]', form ).length > 0){
				var value = $( 'input[name="' + name + '"]', form ).val();
				reg = new RegExp("[0-9a-z_\\-]+@[0-9a-z\\-_^.]+\\.[a-z]{2,10}", 'i' );
				if( !reg.test( value )){
					showFieldError( name, 'email' );
					return true;
				}
				else {
					return false;
				}
			}

			/* Для textarea */
			if( $( 'textarea[name="' + name + '"]', form ).length > 0){
				var value = $( 'textarea[name="' + name + '"]', form ).val();
				reg = new RegExp("[0-9a-z_\\-]+@[0-9a-z\\-_^.]+\\.[a-z]{2,10}", 'i');
				if( !reg.test( value ) ){
					showFieldError( name, 'email' );
					return true;
				}
				else {
					return false;
				}
			}

			/* Для select */
			if( $( 'select[name="' + name + '"]', form ).length > 0){
				var value = $( 'select[name="' + name + '"]', form ).val();
				reg = new RegExp("[0-9a-z_\\-]+@[0-9a-z\\-_^.]+\\.[a-z]{2,10}", 'i' );
				if( !reg.test( value ) ){
					showFieldError( name, 'email' );
					return true;
				}
				else {
					return false;
				}
			}

		};

		/* Подсвечивает поля у которых указан тип проверки number */
		var checkFieldNumber = function( name ){

			/* Для input */
			if($( 'input[name="' + name + '"]', form ).length > 0){
				var value = $( 'input[name="'+ name +'"]', form ).val();
				reg = new RegExp("[0-9]", 'i' );
				if( !reg.test( value ) ){
					showFieldError( name, 'number');
					return true;
				}
				else {
					return false;
				}
			}

			/* Для textarea */
			if( $( 'textarea[name="' + name + '"]', form ).length > 0){
				var value = $( 'textarea[name="'+ name +'"]', form ).val();
				reg = new RegExp("[0-9]", 'i' );
				if( !reg.test( value ) ){
					showFieldError( name, 'number' );
					return true;
				}
				else {
					return false;
				}
			}

			/* Для select */
			if( $( 'select[name="' + name + '"]', form ).length > 0){
				var value = $( 'select[name="' + name + '"]', form ).val();
				reg = new RegExp("[0-9]", 'i' );
				if( !reg.test( value ) ){
					showFieldError( name, 'number' );
					return true;
				}
				else {
					return false;
				}
			}

		};

		/* Выводит ошибки которые приходят с сервера */
		var showAllErrors = function( errors ){
			for( key in errors ){
				showFieldError( key, errors[ key ]);
			}
		};

		/* Прячет все ошибки в форме */
		var hideAllErrors = function(){
			errors = 0;
			errorsMessage = {};
			/* Убирает класс ошибки у тегов полей */
			if ( options.errorInput ){
				$( 'input', form ).removeClass( options.errorClass );
				$( 'textarea', form ).removeClass( options.errorClass );
				$( 'select', form ).removeClass( options.errorClass );
			}
			/* Убирает класс ошибки у лейблов */
			if( options.errorLabel ){
				var label = $( 'label', form ).removeClass( options.errorClass );
			}
			/* Прячет сообщение об ошибках */
			if( options.errorMessage ){
				$( options.message, form ).hide();
			}
		};

		/* Прячет ошибки у одного элемента формы */
		var hideError = function( elem ){
			/* Убирает класс error */
			if( options.errorInput ){
				elem.removeClass( options.errorClass );
			}
			/* Убирает класс error у label для элемента */
			if( options.errorLabel ){
				// Ищем label с id как на элементе
				var label = $( 'label[for="' + elem.attr('id') + '"]' );
				// если такой label есть убираем класс ошибки если нет ищем родительский label и удаляем класс с него
				if ( label.length > 0 ){
					label.removeClass( options.errorClass );
				} else if ( elem.parent().get( 0 ).tagName == 'LABEL' ){
					elem.parent().removeClass( options.errorClass );
				}
			}
			/* Прячем сообщение с ошибкой */
			if( options.errorMessage ){
				var message = $( options.message + '[' + options.messageConnector + '="' + elem.attr( 'name' ) + '"]', form );
				message.fadeOut( 100 );
			}
		};

		/* Показывает алерт */
		var showAlert = function(errors){
			var counter = 0;
			for ( key in errors ){
				if ( options.alerts[ key ] && counter < 1){
					var alert = $( options.alert, form );
					var error = errors[ key ];
					alert.empty().append( options.alerts[ key ][ error ] ).show();
					if( options.alertCallback instanceof Function ){
						options.alertCallback( errors );
					}
				}
				counter++;
			}
		};

		/* Скрывает  */
		var hideAlert = function(){
			$( options.alert, form ).hide();
		};

		/* Блокирует форму */
		var blockForm = function(){
			$( 'input[type="submit"]', form ).attr( 'disabled','disabled' );
			$( 'button', form ).attr( 'disabled','disabled' );
		};

		/* Снимает блокировку формы */
		var unblockForm = function(){
			$( 'input[type="submit"]', form ).removeAttr( 'disabled' );
			$( 'button', form ).removeAttr( 'disabled' );
		};

        /* Возвращает объект полей = значений */
		var getFormDataObject = function(){
			var formData = form.serializeArray();
            var dataOut = {};
			for( key in formData ){
				dataOut[ formData[ key ].name ] = formData[ key ].value;
			}
			return dataOut;
		};

		/* Конвертирует значения полей */
		var convertData = function( formData ){
			if( !options.convertData instanceof Object ){ return; }
			for( convertKey in options.convertData ){
				if( options.convertData[ convertKey ] instanceof Function ){
					var result = options.convertData[ convertKey ](formData[ convertKey ]);
					formData[ convertKey ] = result;
				}
			}
			return formData;
		};

		/* Удаляет лишние данные при сабмите формы */
		var deleteData = function( formData ){
			for( key in options.deleteData ){
				delete formData[ options.deleteData[ key ] ];
			}
			return formData;
		};

		/* Отправка формы */
		var formSubmit = function(){

            /* Переменные */
            var formData,
                convertLength = 0;

            /* Конвертирует в формат для json */
            formData = getFormDataObject();

            /* Конвертирует поля по переданным функциям  */
            if ( options.convertData instanceof Object ){
                convertLength = $.map( options.convertData, function( n, i ) { return i; }).length;
                if ( convertLength > 0 ){
                    formData = convertData( formData );
                }
            }

            /* Добавляет дополнительные данные из mixinData поверх данных формы */
            if ( options.mixinData instanceof Function ){
                mixinData = options.mixinData();
                formData = $.extend( formData, mixinData || {} );
            }

            /* Удаляет лишние данные */
            if ( options.deleteData instanceof Object ){
                formData = deleteData( formData );
            }

            /* Вызывает callback при сабмите */
            if ( options.submitCallback instanceof Function ){
                options.submitCallback( form, formData );
            }

            $.ajax({
                type: options.type,
                url: dataUrl,
                dataType: options.dataType,
                data: formData,
                xhrFields: {
                    withCredentials: true
                },
                error: function( data ){
                    /* Прячет индикатор загрузки */
                    loader.fadeOut();
                    /* Вызывает сallback ошибки валидации формы */
                    if( options.errorCallback instanceof Function ){
                        options.errorCallback( data );
                    }
                },
                success: function( data ){
                    /* Прячет индикатор загрузки */
                    loader.fadeOut();
                    /* Снимает блокировку с формы */
                    if( options.block == true ){
                        unblockForm();
                    }
                    if( data.error || ( data.status && data.status.toLowerCase() == 'error' )){
                        /* Показывает ошибку */
                        showAllErrors( data.errors );
                        /* Показывает алерты */
                        if( options.alerts && options.errorAlert ){
                            showAlert( data.errors );
                        }
                        /* Вызывает сallback ошибки валидации формы */
                        if( options.errorCallback instanceof Function ){
                            options.errorCallback(data);
                        }
                    }
                    else{
                        /* Вызывает сallback успешной валидации формы */
                        if( options.successCallback instanceof Function ){
                            options.successCallback( data, form );
                        }
                    }
                    /* Вызывает force сallback */
                    if( options.forceCallback instanceof Function ){
                        options.forceCallback( data, form );
                    }
                }
            });

        };

		/* Собственные события */
		form.bind( 'hideErrors', function(){
			hideAllErrors();
		});


/* СОБЫТИЯ */

		/* Сабмит формы */
		form.off( 'submit' ).on( 'submit', function( e ){

			e.preventDefault(); // отменяет отправку формы

			hideAllErrors();    // прячет ошибки
			hideAlert();        // прячет алерты

			/* Проверяет обязательные для заполнения поля */
			errors = checkRules();

			/* Вызывает callback и передает в него объект с ошибками */
			if( errors > 0 && options.errorCallback instanceof Function ){
				options.errorCallback( errorsMessage );
			}

			// если нет ошибок в полях
			if ( errors == 0 ){

                /* Показывает индикатор загрузки */
                loader.fadeIn();

                /* Ставит блокировку на форму что бы исключить повторные sсабмиты */
                if( options.block == true ){
                    blockForm();
                }

                /* Проверка на невидимое поле recaptcha */
				if ( $( 'input[name="g-recaptcha-response"]', form ).length ) {
                    // console.log(' have g-recaptcha-response ');
                    // grecaptcha - создаем функцию колбэка для данной формы по funcKey с привязкой к контексту this
                    var funcKey = Date.now();
                    // action key
                    var gcAction =  $( 'input[name=g-recaptcha-response]', form ).data('grecaptcha-action');
                    window[ 'grecaptchaForm' + funcKey ] = $.proxy( function(){
                        grecaptcha.execute( GLOBAL.locale.grecaptcha.site_key, ( gcAction ? { action: gcAction } : false ) ).then( function( token ) {
                            $( 'input[name=g-recaptcha-response]', form ).val( token );
                            formSubmit();
                        });

                    }, this );
                    // грузим api с колбэком grecaptchaForm+funcKey
                    loadJS( 'https://www.google.com/recaptcha/api.js?render=' + GLOBAL.locale.grecaptcha.site_key + '&onload=grecaptchaForm' + funcKey );

				} else {
                    // console.log(' dont have g-recaptcha-response ');
				    /* если нет поля grecaptcha просто вызываем ajax */
                    formSubmit();
				}

			}
		});

		/* Убрать ошибку с input и textarea при изменении */
		$( 'input, textarea', form ).on( 'keydown', function(){
			hideError( $( this ) );
		});

		/* Убрать ошибку с select и input[type="checkbox"] при изменении */
		$( 'input[type="checkbox"], select', form ).on( 'change', function(){
			hideError( $( this ) );
		});

		/* Убрать ошибку с input[type="radio"] при изменении*/
		$( 'input[type="radio"]', form ).on( 'change', function(){
			// ищем все radio с name как у измененного и убираем ошибку со всех
			$( 'input[type="radio"][name="' + $( this ).attr( 'name') + '"]', form ).each( function(){
				hideError( $( this ) );
			});
		});

		return version;

	}

})( jQuery );
