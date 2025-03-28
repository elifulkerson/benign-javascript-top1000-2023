/*
 * dongA JavaScript Library v1.0
 * http://donga.com/
 *
 * Copyright 2015 Copyright by dongA.com All rights reserved.
 */

/* 슬라이드 */
function Slide(container, options)
{
    "use strict";

    //$(container).hide() ;
    $(container).css('overflow-x', 'auto') ;
    $(container).css('overflow-y', 'hidden') ;
    $(container).css('-webkit-overflow-scrolling', 'touch') ;
    $(container).css('position', 'relative') ;

    $(container).children(0).css('overflow', 'hidden') ;
    $(container).children(0).css('position', 'relative') ;

    // quit if no root element
    if (!container) return;
    var element = $(container).children(0);

    var options = options || {};
    var index = parseInt(options.startSlide, 10) || 0;
    var speed = options.speed || 300;
    var delay = options.auto || 0;
    var interval;

    var isTouching = false ;
    var start = {};
    var delta = {};
    var isScrolling;

    var slides ;
    var length ;
    var slidePos ;
        
    function slide(to, speed)
    {
        if ( to < 0 || to >= length ) return ;
        index = to ;

        var target = 0 ;
        for ( var i=0;i<to;i++ )
        {
            target -= slidePos[i] ;
        }
        var effect = 0
        if ( $(element).outerWidth() + target < $(container).width()  )
        {
            target = $(container).width() - $(element).outerWidth() ;
        }

        if ( $(container).width() > $(element).width() )
        {
            $(element).css ( 'left', 0 ) ;
        }
        else
        {
            animate( target , speed, effect);
        }
        
        if ( options.callback ) setTimeout ( options.callback(), 0 ) ;
            
    }
    function getNumSlides()
    {
        return length ;
    }

    function setup()
    {
        // cache slides
        slides = $(element).children();
        length = $(slides).length;

        // create an array to store current positions of each slide
        slidePos = new Array($(slides).length);

        $(element).width( $(slides).length * width ) ;
        // stack elements
        var pos = $(slides).length;
        var width = 0 ;
        while(pos--)
        {
            var slide = $(slides).eq(pos);
            $(slide).css( 'float', 'left' ) ;
            $(slide).css( 'position', 'relative' ) ;
            $(slide).attr('data-index', pos);

            var thiswidth = $(slide).outerWidth() || $(slide).width() ;

            width += thiswidth ;
            slidePos[pos] = thiswidth ;
        }

        $(element).width(width+4);
        $(element).height('100%');
        $(container).show() ;
    }

    function animate(to, speed, end)
    {
        $(container).animate({scrollLeft:-to}, speed) ;
        if ( options.callback ) setTimeout ( options.callback(), 0 ) ;
    }

    setup() ;


    var init = {
        left: $(element).offset().left ,
        right: $(element).css('margin-right').replace( 'px', '' )
    }

        $( element ).on({
            touchstart: function(event) {
                if (options.stopPropagation) event.stopPropagation();                
            },
            touchend: function(event) {
                if (options.stopPropagation) event.stopPropagation();                
            },
            touchmove: function(event) {
                if (options.stopPropagation) event.stopPropagation();                
            }
        });        

    $(window).on({
        resize: function() {
           setup();
        }
    });

    return {
        slide: function(to, speed) {
            slide(to, speed);
        },
        getNumSlides: function() {
            // return total number of slides
            return length;
        },
        getPos: function() {
            // return total number of slides
            return index;
        }
    }
}


/* 팝업 */
function Popup(object, options)
{
    "use strict";

    var options = options || {};

    $(object).hide() ;
    $(object).css('position', 'fixed') ;
    $(object).css('z-index', 9999999) ;

    if ( $('#fullScreenPopupLayer').length <= 0)
    {
        $('body').append( "<div id='fullScreenPopupLayer' style='display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:#262b31;opacity:0.7;alpha(opacity=70) !important;-ms-filter:alpha(opacity=70) !important; -khtml-opacity: 0.7; -moz-opacity: 0.7;z-index:10000;'></div>" ) ;
    }

    var horizontal = 'center' ;
    var vertical = 'center' ;

    var effect = 'clip' ;
    var direction = '' ;
    var duration = 300 ;

    var scroll = false ;
    var contextheight = 0 ;

    if ( options.horizontal ) horizontal = options.horizontal ;
    if ( options.vertical ) vertical = options.vertical ;
    if ( options.effect ) effect = options.effect ;
    if ( options.direction ) direction = options.direction ;
    if ( options.duration ) duration = options.duration ;
    if ( options.scroll ) scroll = options.scroll ;

    function init()
    {
        if ( horizontal == 'left' ) $(object).css('left', 0 ) ;
        else if ( horizontal == 'right' ) $(object).css('right', 0 ) ;
        else if ( horizontal == 'center' ) $(object).css('left', ($(window).width() - $(object).width() ) / 2 ) ;

        if ( vertical == 'top' ) $(object).css('top', 0 ) ;
        else if ( vertical == 'bottom' ) $(object).css('bottom', 0 ) ;
        else if ( vertical == 'center' ) $(object).css('top', ($(window).height() - $(object).height() ) / 2 ) ;
    }

    init() ;

    if ( scroll == true )
    {
        $(object).children(0).css('height', '100%') ;
        $(object).children(0).css('width', '100%') ;
        $(object).children(0).css('overflow', 'hidden') ;
        $(object).children(0).css('overflow-y', 'auto') ;
        $(object).children(0).css('-webkit-overflow-scrolling', 'touch') ;

        $(object).children(0).each ( function(){
            contextheight+=$(this).height() ;
        });

    }

    var bodyOverflow = $("body").css('overflow') ;

    function show()
    {
        init();
        $("body").css('overflow', 'hidden' );
        $(window).bind('touchmove', popupScrollBlockHandler);
        $(window).bind('touchstart', popupScrollBlockStartHandler);

        $('#fullScreenPopupLayer').show() ;
        $(object).show(effect, {direction: direction}, duration) ;
    }

    function hide()
    {
        $('#fullScreenPopupLayer').hide() ;
        $(object).hide(effect, {direction: direction}, duration) ;

        $("body").css('overflow', bodyOverflow );
        $(window).unbind('touchmove', popupScrollBlockHandler);
        $(window).unbind('touchstart', popupScrollBlockStartHandler);
    }

    $('#fullScreenPopupLayer').on({
        click: function() { hide(); }
    });

    var popupScrollBlockStartY = -1 ;
    var popupScrollBlockStartHandler= function(e)
    {
        popupScrollBlockStartY = e.originalEvent.changedTouches[0].pageY ;
    }

    var popupScrollBlockHandler= function(e)
    {
        if ( scroll == false )
        {
            e.preventDefault();
            return ;
        }

        if ($(object).has($(e.target)).length)
        {
            if ($(object).children(0).scrollTop() < 0  ) e.preventDefault();
            else if ( $(object).children(0).scrollTop() == 0  && popupScrollBlockStartY < e.originalEvent.changedTouches[0].pageY ) e.preventDefault();
            else if ( $(object).children(0)[0].scrollHeight - $(object).children(0).scrollTop() <= $(object).children(0).outerHeight() )
            {
                if ( popupScrollBlockStartY > e.originalEvent.changedTouches[0].pageY ) e.preventDefault();
            }
        }
        else
        {
             e.preventDefault();
        }
    }
    return {
        hide: function() { hide(); return false; },
        show: function() { show(); return false; }
    }
}

/* 이미지 정렬 */
(function($){
    $.fn.imgLoad = function(callback) {
        return this.each(function() {
            if (callback) 
            {
                if (this.complete || /*for IE 10-*/ $(this).height() > 0) 
                {
                    callback.apply(this);
                }
                else 
                {
                    $(this).on('load', function(){
                        callback.apply(this);
                    });
                }
            }
        });
    };
})(jQuery);
function alignImageList (e) {

    "use strict"; 

    var eachHeight = new Array() ; 
    var setInfo = new Array() ;
    
    var allComplete = false;

    var thisObj = $( e ) ; 

    var imageSet = thisObj.children().eq(0) ; 
    var imageList = thisObj.children().eq(1) ; 
    
    var totalImageCnt = imageSet.find('img').length; 
    var currentImageCnt = 0; 

    imageSet.css ( 'position', 'absolute' ) ; 
    imageSet.css ( 'left', '-2000px' ) ; 
    
    $(document).ready( function() {
        imageList.children().css('width', 100/imageList.children().length + "%" ) ; 
        imageList.children().each( function(index) {
            eachHeight[index] = 0 ;
        }) ;
        
        imageSet.find('img').imgLoad(function(){
            currentImageCnt ++ ;
            if ( totalImageCnt == currentImageCnt ) allComplete = true ;
        });
        
        arrangeImage () ;
    }) ;

    function arrangeImage ()
    {
        if ( allComplete || totalImageCnt == 0 )  
        {
            imageSet.children().each( function(index) {
                var pos = getMinColumn() ;
                eachHeight [pos] += $(this).outerHeight(true) ;
                imageList.children().eq(pos).append( "<div style='display:none;'>" + $(this).html() + "</div>" ).find('div').fadeIn('slow');
                $(this).remove() ;
            }) ;
        }
        else
        {
            setTimeout( function(){ arrangeImage()},300 ) ;
        }
    }

    function getMinColumn ( obj ) 
    {
        var min = eachHeight[0] ;
        var index = 0 ;
        
        for(var i=1;i<eachHeight.length;i++)
        {
            if ( eachHeight[i] < min )  
            {
                min = eachHeight[i] ;
                index = i ;
            }
        }
        return index ;
    }
    
    function appendImageSet( htmlStr ) 
    {
        imageSet.html(htmlStr) ;
        allComplete = false;
        totalImageCnt = imageSet.find('img').length; 
        currentImageCnt = 0; 
        
        imageSet.find('img').imgLoad(function(){
            currentImageCnt ++ ;
            if ( totalImageCnt == currentImageCnt ) allComplete = true ;
        });        
        arrangeImage () ;
    }
    
    return {
        appendImageSet: function(htmlStr) {
            appendImageSet( htmlStr ) ;
        }
    }
}


/* 콘텐츠 스크롤 */
var	top_last_scroll		= 0;
var	diff_scroll			= 0;

function	onScrollDirection(){
	var	function_direction	= function(){
	var	top_scroll	= $(document).scrollTop();
	window.diff_scroll		= top_scroll - window.top_last_scroll;
	window.top_last_scroll	= top_scroll;
		
		$(window).trigger("onScrollAdjustEndLine");
	};
	
	$(window).scroll(function_direction);
	$(window).resize(function_direction);
	
	setTimeout(function(){window.diff_scroll=-1;$(window).trigger("onScrollAdjustEndLine");}, 200);
};

function	onScrollAdjustEndLine(query_start, query_end, query_in){
	$(window).on("onScrollAdjustEndLine",function(){
			var	obj_start	= $(query_start);
			var	obj_end	= $(query_end);
			var	obj_in		= $(query_in);
			
			if ( obj_start && obj_end && obj_in ){
				var	top_in		= obj_in.offset().top;
				var	top_win		= $(document).scrollTop();
				var	top_start		= obj_start.offset().top;
				var	top_end		= obj_end.offset().top;
				var	left_start		= obj_start.offset().left;
				var	width_start	= obj_start.width();
				var	height_win	= $(window).height();
				var	height_end	= obj_end.height();
				var	height_in		= obj_in.height();
				var	bot_win		= top_win + height_win;
				var	bot_end		= top_end + height_end;
				var	bot_in		= top_in + height_in;
				var	gap_max		= top_end + height_end - top_start - height_in;
				
				obj_start.css({"height":height_in+"px"});
				
				if ( window.diff_scroll == 0 ){
					if ( obj_in.css("position") == "fixed" ){
						obj_in.css({"left":left_start+"px"});
					}
				}
				if ( height_in >= bot_end - top_start ){
					obj_in.css({"position":"relative","top":"0px","left":"0px","width":""});
				}
				else if ( height_win > top_end + height_end - top_start ){
					obj_in.css({"position":"relative","top":"0px","left":"0px","width":""});
				}					
				else if ( height_win > height_in ){
					if ( top_start >= top_win ){
						obj_in.css({"position":"relative","top":"0px","left":"0px","width":""});
					}
					else if ( top_start + gap_max <= top_win ){
						obj_in.css({"position":"relative","top":gap_max+"px","left":"0px","width":""});
					}						
					else{
						obj_in.css({"position":"fixed","top":"0px","left":left_start+"px","width":width_start+"px"});
					}
				}
				else{
					if ( window.diff_scroll < 0 )	{
						if ( top_start >= top_win ){
							obj_in.css({"position":"relative","top":"0px","left":"0px","width":""});
						}
						else if ( top_in >= top_win ){
							obj_in.css({"position":"fixed","top":"0px","left":left_start+"px","width":width_start+"px"});
						}
						else if ( obj_in.css("position") == "fixed" ){
							obj_in.css({"position":"relative","top":(top_in-top_start-diff_scroll)+"px","left":"0px","width":""});
						}
					}
					if ( window.diff_scroll > 0 )	{
						if ( bot_end <= bot_win ){
							obj_in.css({"position":"relative","top":gap_max+"px","left":"0px","width":""});
						}
						else if ( bot_in <= bot_win ){
							obj_in.css({"position":"fixed","top":(height_win-height_in)+"px","left":left_start+"px","width":width_start+"px"});
						}
						else if ( obj_in.css("position") == "fixed" ){
							obj_in.css({"position":"relative","top":(top_in-top_start-diff_scroll)+"px","left":"0px","width":""});
						}
					}
				}
			}
		}
	);
};

function ScrollTrigger(object, options)
{
    "use strict";
    var limit = options.limit || 10;

    var from = options.from || -1;
    var to = options.to || -1;

    var fromX = options.fromX || -1;
    var toX = options.toX || -1;


    function scrollHandle()
    {
        if( from != -1 && to != -1 ) 
        {
            var curY =  $(object).offset().top - $(window).scrollTop() ;
           var curX =  $(object).offset().left ;
            if ( curY > from && curY < to )
            {
                if (  fromX != -1 && toX != -1 ) 
                {
                    if ( curX > fromX && curX < toX )
                    {
                        if ( options.callback ) options.callback()  ;
                    }
                }
                else
                {
                    if ( options.callback ) options.callback()  ;
                }
            }
        }
        else
        {
            if ( $(object).offset().top - $(window).scrollTop() < $(window).height() + limit )
            {
                if ( options.callback ) options.callback()  ;
            }
        }

    }
    $(window).on({
        scroll: function() {
            try {
                scrollHandle();
            } catch (e) {} 
        }
    });
    
    return {
        getName: function() { return name; }
    }    
}