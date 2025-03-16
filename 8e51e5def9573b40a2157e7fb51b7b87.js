// JavaScript Document
function funRoll(div){
	var obj=$("#"+div),
		top=obj.find(".topyw"),
		lis=top.find("li"),
		len=lis.length-1,
		list=obj.find(".no_list"),
		box = $(".box_1");
	var arr_l = obj.find(".arr_l a");
	var arr_r = obj.find(".arr_r a");
	var str="",curr=0;
//	for(var i=0;i<=len;i++){
//		str+='<a href="javascript:void(0);"></a>';
//	}
//	list.html(str);
	var as=list.find("a");
	var timer=null;

	function funPlay(){
		timer=setInterval(funGo,5000);
	}
	function funPause(){
		clearInterval(timer);
	}
	function funGo(){
		funShow(curr);
		curr=funNext(curr);
	}
	function funNext(curr_){
		var index=curr_;
		index+=1;
		if(index>len) index=0;
		return index;
	}
	function funPrev(curr_){
		var index=curr_;
		index-=1;
		if(index<0) index=len;
		return index;
	}
	function funShow(curr_){
		//top.animate({"scrollLeft":curr_*960},{"duration":200});
		for(var i=0;i<=len;i++){
			if(i==curr_) continue;
			//$(lis[i]).fadeOut("slow");
			$(lis[i]).find(".image").fadeOut("slow");
			$(lis[i]).find(".text_bg").css("display","none");
			$(lis[i]).find(".text").fadeOut("slow");
			$(lis[i]).css("display","none");
			
		}
		//$(lis[curr_]).fadeIn("fast");
		
		$(lis[curr_]).css("display","block");
		$(lis[curr_]).find(".image").fadeIn("slow");
		$(lis[curr_]).find(".text_bg").css("display","block").css("zoom","1");
		if($(lis[curr_]).find("img").attr("src")==""){
		$(lis[curr_]).find("img").attr("src",function(){return this.className});
	
			
			}else{
				
				}
		
		
		$(lis[curr_]).find(".text").fadeIn(100);
		as.removeClass("cur");
		$(as[curr_]).addClass("cur");
		box.removeClass("box_hover");
		box.eq(curr_).addClass("box_hover");
		//curr=curr_;
	}
	arr_l.click(function(){
		curr=funPrev(curr);
		funShow(curr);
		return false;
	});
	arr_r.click(function(){
		funShow(curr);
		curr=funNext(curr);
		return false;
	});
	this.inits=function(){
		funShow(curr);
		curr=funNext(curr);
		funPlay();
		as.each(function(s,a){
			a=$(a);
			a.click(function(){
				funShow(s);
				curr=s;
				box.removeClass("box_hover");
				box.eq(s).addClass("box_hover");
			});
		});

		box.each(function(s,a){
			a=$(a);
			a.mouseover(function(){
				funShow(s);
				curr=s;
				box.removeClass("box_hover");
				box.eq(s).addClass("box_hover");
			});
		});
		
		lis.each(function(i,li){
		var btn=$(li).find("p.btn");
		//alert(btn.length);
			btn.click(function(){
				//alert(inx);
				funShow(funNext(i));
				curr=funNext(i);
			});
		});
	}
}

(new funRoll("mdroll")).inits();
(new funRoll("mdroll-2019-10-01")).inits();