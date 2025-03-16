//禁止浏览器缩放
$(document).ready(function () {
  $('body').css('zoom', 'reset');
 	$(document).keydown(function (evt) {
		var e = evt || window.event;
     if ((e.ctrlKey === true || e.metaKey === true)
       && (e.which === 61 || e.which === 107
           || e.which === 173 || e.which === 109
           || e.which === 187  || e.which === 189))
      {
          e.preventDefault();
      }
 	});
  $(window).bind('mousewheel DOMMouseScroll', function (evt) {
  	var e = evt || window.event;
    if (e.ctrlKey === true || e.metaKey) {
        e.preventDefault();
    }
  });
});
//以下为了兼容
document.onmousewheel = function (evt) {
var e = evt || window.event;
if(e.preventDefault && e.ctrlKey) e.preventDefault();
if(e.ctrlKey) e.returnValue = false;
};
if (window.addEventListener) window.addEventListener('DOMMouseScroll', document.onmousewheel, false);
//
//document.onkeydown = function(evt){
//	 var e = evt || window.event;
//	 if ((e.ctrlKey === true || e.metaKey === true)&& (e.which === 61 || e.which === 107 || e.which === 187  || e.which === 189 || e.which === 173 || e.which === 109)){
//      e.preventDefault();
//    }
//};
//if (window.addEventListener) window.addEventListener('onkeydown', document.onkeydown, false);

//  getLoginSta("personal",1);
//  $(function(){
        // 个人信息二级菜单宽度设置
        // 搜索焦点动画
//      $(".new-header .search input").focus(function() {
//          $(".new-header .doc-seek").addClass('seekhide');
//          $(".new-header .top-search .search").addClass('focusSearch');
//      });
//      $(".new-header .search input").blur(function() {
//          $(".new-header .doc-seek").removeClass('seekhide');
//          $(".new-header .top-search .search").removeClass('focusSearch');
//      });

        //分类二级
//      $(".nav-inner-btn").mouseover(function() {
//          $(this).addClass('current').parent('.logo').find('.nav-inner').show();
//      });
//      $(".logo").mouseleave(function() {
//          $('.nav-inner-btn').removeClass('current');
//          $('.nav-inner').hide();
//      });

//  })
 $(document).click(function (event){
            var tarId = $(event.target).attr("id");
            if(tarId!="keyword")
                $('.search-hint,.search-rhint').hide();
        });
$('document').keyup(function(e) {
 	if (e.keyCode == 13) {
//		Search.goSearch();这是去执行搜索的方法
		$("#keyword").blur();
	}
});
	$('#keyword').keyup(function(e) {
		if (e.keyCode == 38) {
	        var active = $(".hint-list li.active");
	        if (active.length) {
	            var prev = active.prev();
	            if (prev.length) {
	                prev.addClass("active").siblings().removeClass("active");
	            }
	            else {
	                $(".hint-list li:last").addClass("active").siblings().removeClass("active");
	            }
	        }
	        else {
	            $(".hint-list li:last").addClass("active");
	        }
			if (active.length)
	       		 $("#keyword").val($("li.active").text());
	    }
	    else if (e.keyCode == 40) {
	        var active = $(".hint-list li.active");
	        if (active.length) {
	            var next = active.next();
	            if (next.length) {
	                next.addClass("active").siblings().removeClass("active");
	            }
	            else {
	                $(".hint-list li:first").addClass("active").siblings().removeClass("active");
	            }
	        }
	        else {
	            $(".hint-list li:first").addClass("active");
	        }
			if (active.length)
	        	$("#keyword").val($("li.active").text());
	    }else{
	    	Search.showSuggest();
	    }

	});
$('#keyword').click(function(event) {
	Search.showSuggest();
});
//$(".input_key").blur(function(event) {
//	if(this.value=='')this.placeholder='在道客巴巴十亿文档库中搜索...';
//
//	$(".search-rhint").hide();
//});
$(".search-del").click(function(event) {
		$("#keyword").val('');
		$("#keyword").focus();
		$(".search-rhint").hide();
	});