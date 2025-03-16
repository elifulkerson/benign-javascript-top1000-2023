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

    function AdFoxCallbackCheck( options, states, a_options ){
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


}



