; "use strict";

/* #RIA2018-1870 */

var abTitleScrollEvents = function ( el ) {
    if ( !window.EVENTSTACK ) window.EVENTSTACK = [];
    this.init( el );
};
abTitleScrollEvents.prototype = {
    init: function( el ){
        var _this = this;
        _this.$el = $( el );
        _this.id = _this.$el.data( 'id' );
        $( window ).bind( 'resize.' + _this.id , function(){
            _this.clientHeigth = Math.max( window.innerHeight || 0, ( document.getElementsByTagName( 'html' )[ 0 ] || {} ).clientHeight || 0 );
            _this.elHeight = _this.$el.outerHeight();
            _this.elOffTop = _this.$el.offset().top;
            _this.scrollCheck();
        });
        $( window ).bind( 'scroll.' + _this.id , _this , _this.scrollCheck );
        $( window ).resize();
    },
    scrollCheck: function( e ){
        var _this = e ? e.data : this;
        if ( ( $( window ).scrollTop() + _this.clientHeigth ) >= ( _this.elOffTop + ( _this.elHeight / 2 ) ) ){
            var data = [ 'scroll', 'main_ab_title', {
                article_id: _this.id,
                hash: _this.$el.data( 'hash' ),
                algorithm: _this.$el.data( 'algorithm' )
            } ];
            window.EVENTSTACK.push( data );
            //console.log("%c === objEvents.addEvent === id= "+_this.id+" ","color: white; background: green;", data );
            $( window ).unbind( 'resize.' + _this.id );
            $( window ).unbind( 'scroll.' + _this.id );
        }
    }
};
$.fn.abTitleScrollEvents = function() {
    return this.each(function(){
        if( !$.data( this, 'abTitleScrollEvents' )){
            $.data( this, 'abTitleScrollEvents', new abTitleScrollEvents( this ));
        }
    });
};

$(function(){
    setTimeout( function(){
        $( "[ data-ab-title ]" ).abTitleScrollEvents();
    }, 1000 );
});
