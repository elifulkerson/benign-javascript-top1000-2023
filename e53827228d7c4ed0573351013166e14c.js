$(document).ready(function(){
	
//登录	
$(function(){
	var loginBar = $("#loginBar"),
    dropdown = $(".dropdown",loginBar);
	dropdown.each(function(){
		var $this = $(this),
		    dropLink = $(".drop-link",$this),
		    dropdownLayer = $(".dropdownLayer",$this);
	dropLink.mouseover(function(event){
		var e=window.event || event;
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
		dropdownLayer.show();
		dropLink.addClass("over");
	});
	dropLink.toggle(
        function () {
        dropdownLayer.show();
		dropLink.addClass("over");
        },
        function () {
        dropdownLayer.hide();
		dropLink.removeClass("over");
        }
        );
	dropdownLayer.click(function(event){
		var e=window.event || event;
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	});
	document.onclick = function(){
		$(".dropdownLayer").hide();
		$(".drop-link").removeClass("over");
	};
});	
});	


//分站	
$(function(){
	var hnNav = $("#hnNav"),
	   dropLink_li = $("li",hnNav);   
	   //$("li",hnNav).each(function(){
		//dhtml = $(".dropdownLayer",$(this)).html()
		//$(".dropdownLayer",$(this)).html("<div class='inner'>"+dhtml +"</div>")	
	//});
	   
    dropLink_li.each(function(){
	$(this).hover(function(){
		$(".dropdownLayer",$(this)).show();
		},function(){
		$(".dropdownLayer",$(this)).hide();
		})
	});	
	
	//time
	if(typeof(time)!='undefined'){
		setInterval("time.innerHTML=(new Date()).pattern(\"yyyy-MM-dd HH:mm:ss EEE\");",1000);
	}
});	
	
//搜索
var MainSearch = $(".mainsearch");
	MainSearch.find(".input").focus(function() {
    $(this).parent(".inputbox").addClass("inputover");
    if (this.value == this.defaultValue){ 
    this.value = '';
    }
    if(this.value != this.defaultValue){
    this.select();
    }
    });
    MainSearch.find(".input").blur(function() {
    $(this).parent(".inputbox").removeClass("inputover");
    if ($.trim(this.value) == ''){
    this.value = (this.defaultValue ? this.defaultValue : '');
    }
    });	
	
    MainSearch.find(".btn").hover(function(){
    $(this).addClass("btnover");},
    function(){
    $(this).removeClass("btnover");});

MainSearch.each(function(){
	    var $this = $(this);
        $this.find(".selectnow").click(function(){
		$(this).blur();
		$(this).addClass("over");
		$(this).parent().find(".selectlist").show();
		return false;});
		$this.find(".selectlist li>a").click(function(){
		$(this).blur();
		var value = $(this).attr("rel");
		var txt = $(this).text();
		$(this).parent().parent().parent().find(".selectvalue").val(value);
		$(this).parent().parent().parent().find(".selectnow").text(txt);
		$this.find(".selectlist li>a").removeClass("selected");
		$(this).addClass("selected");
		$(this).parent().parent(".selectlist").hide();
		$(this).parent().parent().parent().find(".selectnow").removeClass("over");
		return false;	
	});
	/*点击任何地方关闭层*/
	$(document).click(function(event){
		if( $(event.target).attr("class") != "selectbox" ){
			MainSearch.find(".selectlist").hide();
			MainSearch.find(".selectnow").removeClass("over");
			}
	});


});
//首页系统导航

}); //end  document ready(jquery)

//首页焦点图

var FeatureList = function(fobj,options) {
  function feature_slide(nr) {
    if (typeof nr == "undefined") {
      nr = visible_idx + 1;
      nr = nr >= total_items ? 0 : nr;
    }

    tabs.removeClass(onclass).addClass(offclass).filter(":eq(" + nr + ")").removeClass(offclass).addClass(onclass);
    output.stop(true, true).filter(":visible").hide();
	    output.filter(":eq(" + nr + ")").fadeIn("slow",function() {
	    visible_idx = nr; 
    });
  }

  fobj = (typeof(fobj) == 'string')?$(fobj):fobj;
  fobj = $(fobj).eq(0);
  if(!fobj || fobj.size() == 0) return;

  //轮询间隔，默认2S
  var options      = options || {};
  var visible_idx  = options.startidx || 0;
  var onclass = options.onclass || "current";
  var offclass = options.offclass || "";
  var speed = options.speed || 10000;
  options.pause_on_act = options.pause_on_act || "click";
  options.interval  = options.interval  || 50000;

  var tabs = fobj.find(".f_tabs .f_tab");
  var output = fobj.find(".f_out");
  var total_items = tabs.length;
 
  //初始设定
  output.hide().eq( visible_idx ).fadeIn("slow");
  tabs.eq( visible_idx ).addClass(onclass);

  if (options.interval > 0) {
    var timer = setInterval(function () {
      feature_slide();
    }, options.interval);
    output.mouseenter(function() {clearInterval( timer );}).mouseleave(function() {clearInterval( timer );timer = setInterval(function () {feature_slide();}, options.interval);});
    if (options.pause_on_act == "mouseover") {
        tabs.mouseenter(function() {
        clearInterval( timer );
        
        var idx = tabs.index($(this));
        feature_slide(idx);
      }).mouseleave(function() {
        clearInterval( timer );
        timer = setInterval(function () {
          feature_slide();
        }, options.interval);
      });
    } else {
        tabs.click(function() {
        clearInterval( timer );
        var idx = tabs.index($(this));
        feature_slide(idx);
      });
    }
  }
}

//tab
function setTab(name,cursel,n){
for(i=1;i<=n;i++){
  var menu=document.getElementById(name+i); 
  menu.className="";
  document.getElementById("con_"+name+"_"+i).style.display='none';
}
var con=document.getElementById("con_"+name+"_"+cursel);
  con.style.display="block";
 document.getElementById(name+cursel).className="hover";
}


//time
Date.prototype.pattern=function(fmt) {         
    var o = {         
    "M+" : this.getMonth()+1, //月份         
    "d+" : this.getDate(), //日         
    "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时         
    "H+" : this.getHours(), //小时         
    "m+" : this.getMinutes(), //分         
    "s+" : this.getSeconds(), //秒         
    "q+" : Math.floor((this.getMonth()+3)/3), //季度         
    "S" : this.getMilliseconds() //毫秒         
    };         
    var week = {         
    "0":"\u65e5",         
    "1" : "\u4e00",         
    "2" : "\u4e8c",         
    "3" : "\u4e09",         
    "4" : "\u56db",         
    "5" : "\u4e94",         
    "6" : "\u516d"        
    };         
    if(/(y+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));         
    }         
    if(/(E+)/.test(fmt)){         
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "\u661f\u671f" : "\u5468") : "")+week[this.getDay()+""]);         
    }         
    for(var k in o){         
        if(new RegExp("("+ k +")").test(fmt)){         
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));         
        }         
    }         
    return fmt;         
}     
//setInterval("time.innerHTML=(new Date()).pattern(\"yyyy-MM-dd HH:mm:ss EEE\");",1000);





//回到顶部
$(document).ready(function(e) {
	$("#rightButton").css("right", "0px");
	
    var button_toggle = true;
	$(".right_ico").click("mouseover", function(){
		var tip_top;
		var show= $(this).attr('show');
		var hide= $(this).attr('hide');
		tip_top = show == 'tel' ?  65 :  -10;
		button_toggle = false;
		$("#right_tip").css("top" , tip_top).show().find(".flag_"+show).show();
		$(".flag_"+hide).hide();
		
	}).click("mouseout", function(){
		button_toggle = true;
		hideRightTip();
	});
	
	
	$("#right_tip").click("mouseover", function(){
		button_toggle = false;
		$(this).show();
	}).click("mouseout", function(){
		button_toggle = true;
		hideRightTip();
	});
	
	function hideRightTip(){
		setTimeout(function(){		
			if( button_toggle ) $("#right_tip").hide();
		}, 500);
	}
	
	$("#backToTop").on("click", function(){
		var _this = $(this);
		$('html,body').animate({ scrollTop: 0 }, 500 ,function(){
			_this.hide();
		});
	});

	$(window).scroll(function(){
		var htmlTop = $(document).scrollTop();
		if( htmlTop > 0){
			$("#backToTop").show();	
		}else{
			$("#backToTop").hide();
		}
	});
});