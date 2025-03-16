;"use strict";

function replaceOriginalAdFoxMethods(){

    if ( window.Ya && window.Ya.adfoxCode ){
        window.Ya.adfoxCode._create = window.Ya.adfoxCode.create;
        window.Ya.adfoxCode._createScroll = window.Ya.adfoxCode.createScroll;
        window.Ya.adfoxCode._createAdaptive = window.Ya.adfoxCode.createAdaptive;
    } else {
        window.Ya = {
            adfoxCode: {
                _create : function(){},
                _createScroll : function(){},
                _createAdaptive : function(){}
            }
        }
    }

    window.Ya.adfoxCode.create = function( options ) {
        options = AdFoxCallbackCheck( options );
        window.Ya.adfoxCode._create( options );
    };

    window.Ya.adfoxCode.createScroll = function( options, states, a_options ) {
        options = AdFoxCallbackCheck( options, states, a_options );
        if ( states || a_options ){
            window.Ya.adfoxCode._createScroll( options, states, a_options );
        } else {
            window.Ya.adfoxCode._createScroll( options );
        }
    };

    window.Ya.adfoxCode.createAdaptive = function( options, states, a_options ) {
        options = AdFoxCallbackCheck( options, states, a_options );
        if ( a_options ){
            window.Ya.adfoxCode._createAdaptive( options, states, a_options );
        } else {
            window.Ya.adfoxCode._createAdaptive( options, states );
        }
    };

    /**
     *  options = {
     *      ownerId:        249922,
     *      containerId:    'id тега куда выводить баннер',
     *      params :        { объект параметров вызова баннера }
     *
     *  Во все колбэки передаваемые в options прокидывается объект options
     *  его можно использовать для определния id блока и после замены его фукнциями в БС
     *  или добавления параметров которые налдо читать в колбэках
     *      onClose : function() {}
     *      onError : function( error ) {}
     *      onLoad : function( data ) {}
     *      onRender : function() {}
     *      onStub : function() {}
     *
     *  Добавить в опции баннера для отключения добавляемых колбэков
     *      offAddOnClose : false;
     *      offAddOnError : false;
     *      offAddOnLoad : false;
     *      offAddOnRender : false;
     *      offAddOnStub : false;
     *
     *  }
     *
     * */

    function AdFoxCallbackCheck( options, states, a_options ){
        var onClose = typeof options.onClose === 'function' ? options.onClose : false;
        var onLoad = typeof options.onLoad === 'function' ? options.onLoad : false;
        var onRender = typeof options.onRender === 'function' ? options.onRender : false;
        var onError = typeof options.onError === 'function' ? options.onError : AdFoxOnError;
        var onStub = typeof options.onStub === 'function' ? options.onStub : false;
        options.onClose = function(){
            if ( onClose ) onClose( options );
            if ( !options.offAddOnClose ) AdFoxOnClose( options );
        };
        options.onLoad = function( data ){
            if ( onLoad ) onLoad( data, options );
            if ( !options.offAddOnLoad ) AdFoxOnLoad( data, options );
        };
        options.onRender = function(){
            if ( onRender ) onRender( options );
            if ( !options.offAddOnRender ) AdFoxOnRender( options );
        };
        options.onError = function( error ){
            if ( onError ) onError( error, options, states, a_options );
            if ( !options.offAddOnError ) AdFoxOnError( error, options, states, a_options );
        }
        options.onStub = function(){
            if ( onStub ) onStub( options );
            if ( !options.offAddOnStub ) AdFoxOnStub( options );
        };
        return options;
    }

    function AdFoxOnClose( options ){
        console.log( 'adfx onClose '  + options.containerId );
    }

    function AdFoxOnLoad( data, options ){
        console.log( 'adfx onLoad '  + options.containerId + ' - ' + data.bundleName );
    }

    function AdFoxOnRender( options ){

        console.log( 'adfx onRender ' + options.containerId + ' ACTIVE ADDED' );
        $( '#' + options.containerId + '' ).parents( '.banner:first' ).addClass( 'm-active' );
        $( window ).scroll().resize();

    }

    function AdFoxOnError( error, options, states, a_options ){
        if ( states || a_options ){
            console.log( 'adfx onError ' + options.containerId, error, options, states, a_options );
        } else {
            console.log( 'adfx onError ' + options.containerId, error, options );
        }
    }

    function AdFoxOnStub( options ){
        var $bBanners = $( '#' + options.containerId + '' ).parents( '.banner:first' );
        if ( $bBanners.hasClass( 'm-not-stub' ) ){
            console.log( 'adfx onStub ' + options.containerId );
        } else {
            $bBanners.removeClass( 'm-active' ).addClass( 'm-stub-removed' );
            console.log( 'adfx onStub ' + options.containerId + ' ACTIVE REMOVED' );
        }
    }

    function AdFoxCallbackCheck___Old( options, states, a_options ){
        var onLoad = typeof options.onLoad === 'function' ? options.onLoad : AdFoxOnLoad;
        var onRender = typeof options.onRender === 'function' ? options.onRender : AdFoxOnRender;
        var onError = typeof options.onError === 'function' ? options.onError : AdFoxOnError;
        var onStub = typeof options.onStub === 'function' ? options.onStub : AdFoxOnStub;
        options.onLoad = function( data ){ onLoad( data, options ); };
        options.onRender = function(){ onRender( options ); };
        if ( states || a_options ){
            options.onError = function( error ){ onError( error, options, states, a_options ); };
        } else {
            options.onError = function( error ){ onError( error, options ); };
        }
        options.onStub = function(){ onStub( options ); };
        return options;
    }
    function AdFoxOnLoad___Old( data, options ){
        console.log( 'adfx onLoad '  + options.containerId + ' - ' + data.bundleName );
    }
    function AdFoxOnRender___Old( options ){
        console.log( 'adfx onRender ' + options.containerId + ' ACTIVE ADDED' );
        $( '#' + options.containerId + '' ).parents( '.banner:first' ).addClass( 'm-active' );
        $( window ).scroll().resize();
    }
    function AdFoxOnError___Old( error, options, states, a_options ){
        if ( states || a_options ){
            console.log( 'adfx onError ' + options.containerId, error, options, states, a_options );
        } else {
            console.log( 'adfx onError ' + options.containerId, error, options );
        }
    }
    function AdFoxOnStub___Old( options ){
        var $bBanners = $( '#' + options.containerId + '' ).parents( '.banner:first' );
        if ( $bBanners.hasClass( 'm-not-stub' ) ){
            console.log( 'adfx onStub ' + options.containerId );
        } else {
            $bBanners.removeClass( 'm-active' ).addClass( 'm-stub-removed' );
            console.log( 'adfx onStub ' + options.containerId + ' ACTIVE REMOVED' );
        }
    }


}



