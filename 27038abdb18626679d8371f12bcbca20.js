var DateTimes={overAWeek:new Date((new Date).getTime()+6048e5),threeDays:new Date((new Date).getTime()+2592e5),fiveMinutes:new Date((new Date).getTime()+3e5),thirtyDays:new Date((new Date).getTime()+2592e6),registrationTime:new Date((new Date).getTime()+864e5)},Cam4Cookies={getCookie:function(name){for(var nameEQ=name+"=",ca=document.cookie.split(";"),i=0;i<ca.length;i++){for(var c=ca[i];" "==c.charAt(0);)c=c.substring(1,c.length);if(0==c.indexOf(nameEQ))return c.substring(nameEQ.length,c.length)}return null},setCookie:function(name,value,p_expires,p_path,p_domain,p_secure){var expires=p_expires||null;if("number"==typeof expires){var overToInt=+new Date+expires;expires=new Date(overToInt)}var path=p_path||null,domain=p_domain||null,secure=p_secure||!1,cookieSuffix=(null===expires?"":"; expires="+(expires.toUTCString()||expires.toGMTString()||expires.toString()))+(null===path?"":"; path="+path)+(null===domain?"":"; domain="+domain)+(!0===secure?"; secure":""),cookieStr=name+"="+escape(value)+cookieSuffix;return document.cookie=cookieStr,cookieStr},deleteCookie:function(name,p_path,p_domain){Cam4Cookies.setCookie(name,"",new Date("Thu, 01 Jan 1970 00:00:01 GMT"),p_path,p_domain)}};
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function($){"use strict";function transitionEnd(){var el=document.createElement("bootstrap"),transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var name in transEndEventNames)if(void 0!==el.style[name])return{end:transEndEventNames[name]};return!1}$.fn.emulateTransitionEnd=function(duration){var called=!1,$el=this;$(this).one($.support.transition.end,function(){called=!0});return setTimeout(function(){called||$($el).trigger($.support.transition.end)},duration),this},$(function(){$.support.transition=transitionEnd()})}(jQuery),function($){"use strict";var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on("click",dismiss,this.close)};Alert.prototype.close=function(e){function removeElement(){$parent.trigger("closed.bs.alert").remove()}var $this=$(this),selector=$this.attr("data-target");selector||(selector=(selector=$this.attr("href"))&&selector.replace(/.*(?=#[^\s]*$)/,""));var $parent=$(selector);e&&e.preventDefault(),$parent.length||($parent=$this.hasClass("alert")?$this:$this.parent()),$parent.trigger(e=$.Event("close.bs.alert")),e.isDefaultPrevented()||($parent.removeClass("in"),$.support.transition&&$parent.hasClass("fade")?$parent.one($.support.transition.end,removeElement).emulateTransitionEnd(150):removeElement())};var old=$.fn.alert;$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.alert");data||$this.data("bs.alert",data=new Alert(this)),"string"==typeof option&&data[option].call($this)})},$.fn.alert.Constructor=Alert,$.fn.alert.noConflict=function(){return $.fn.alert=old,this},$(document).on("click.bs.alert.data-api",dismiss,Alert.prototype.close)}(jQuery),function($){"use strict";var Button=function(element,options){this.$element=$(element),this.options=$.extend({},Button.DEFAULTS,options),this.isLoading=!1};Button.DEFAULTS={loadingText:"loading..."},Button.prototype.setState=function(state){var d="disabled",$el=this.$element,val=$el.is("input")?"val":"html",data=$el.data();state+="Text",data.resetText||$el.data("resetText",$el[val]()),$el[val](data[state]||this.options[state]),setTimeout($.proxy(function(){"loadingText"==state?(this.isLoading=!0,$el.addClass(d).attr(d,d)):this.isLoading&&(this.isLoading=!1,$el.removeClass(d).removeAttr(d))},this),0)},Button.prototype.toggle=function(){var changed=!0,$parent=this.$element.closest('[data-toggle="buttons"]');if($parent.length){var $input=this.$element.find("input");"radio"==$input.prop("type")&&($input.prop("checked")&&this.$element.hasClass("active")?changed=!1:$parent.find(".active").removeClass("active")),changed&&$input.prop("checked",!this.$element.hasClass("active")).trigger("change")}changed&&this.$element.toggleClass("active")};var old=$.fn.button;$.fn.button=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.button"),options="object"==typeof option&&option;data||$this.data("bs.button",data=new Button(this,options)),"toggle"==option?data.toggle():option&&data.setState(option)})},$.fn.button.Constructor=Button,$.fn.button.noConflict=function(){return $.fn.button=old,this},$(document).on("click.bs.button.data-api","[data-toggle^=button]",function(e){var $btn=$(e.target);$btn.hasClass("btn")||($btn=$btn.closest(".btn")),$btn.button("toggle"),e.preventDefault()})}(jQuery),function($){"use strict";var Carousel=function(element,options){this.$element=$(element),this.$indicators=this.$element.find(".carousel-indicators"),this.options=options,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",$.proxy(this.pause,this)).on("mouseleave",$.proxy(this.cycle,this))};Carousel.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},Carousel.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval)),this},Carousel.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},Carousel.prototype.to=function(pos){var that=this,activeIndex=this.getActiveIndex();if(!(pos>this.$items.length-1||pos<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){that.to(pos)}):activeIndex==pos?this.pause().cycle():this.slide(pos>activeIndex?"next":"prev",$(this.$items[pos]))},Carousel.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&$.support.transition&&(this.$element.trigger($.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},Carousel.prototype.next=function(){if(!this.sliding)return this.slide("next")},Carousel.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},Carousel.prototype.slide=function(type,next){var $active=this.$element.find(".item.active"),$next=next||$active[type](),isCycling=this.interval,direction="next"==type?"left":"right",fallback="next"==type?"first":"last",that=this;if(!$next.length){if(!this.options.wrap)return;$next=this.$element.find(".item")[fallback]()}if($next.hasClass("active"))return this.sliding=!1;var e=$.Event("slide.bs.carousel",{relatedTarget:$next[0],direction:direction});return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(this.sliding=!0,isCycling&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var $nextIndicator=$(that.$indicators.children()[that.getActiveIndex()]);$nextIndicator&&$nextIndicator.addClass("active")})),$.support.transition&&this.$element.hasClass("slide")?($next.addClass(type),$next[0].offsetWidth,$active.addClass(direction),$next.addClass(direction),$active.one($.support.transition.end,function(){$next.removeClass([type,direction].join(" ")).addClass("active"),$active.removeClass(["active",direction].join(" ")),that.sliding=!1,setTimeout(function(){that.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*$active.css("transition-duration").slice(0,-1))):($active.removeClass("active"),$next.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),isCycling&&this.cycle(),this)};var old=$.fn.carousel;$.fn.carousel=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.carousel"),options=$.extend({},Carousel.DEFAULTS,$this.data(),"object"==typeof option&&option),action="string"==typeof option?option:options.slide;data||$this.data("bs.carousel",data=new Carousel(this,options)),"number"==typeof option?data.to(option):action?data[action]():options.interval&&data.pause().cycle()})},$.fn.carousel.Constructor=Carousel,$.fn.carousel.noConflict=function(){return $.fn.carousel=old,this},$(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var href,$this=$(this),$target=$($this.attr("data-target")||(href=$this.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,"")),options=$.extend({},$target.data(),$this.data()),slideIndex=$this.attr("data-slide-to");slideIndex&&(options.interval=!1),$target.carousel(options),(slideIndex=$this.attr("data-slide-to"))&&$target.data("bs.carousel").to(slideIndex),e.preventDefault()}),$(window).on("load",function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this);$carousel.carousel($carousel.data())})})}(jQuery),function($){"use strict";var Collapse=function(element,options){this.$element=$(element),this.options=$.extend({},Collapse.DEFAULTS,options),this.transitioning=null,this.options.parent&&(this.$parent=$(this.options.parent)),this.options.toggle&&this.toggle()};Collapse.DEFAULTS={toggle:!0},Collapse.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},Collapse.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var startEvent=$.Event("show.bs.collapse");if(this.$element.trigger(startEvent),!startEvent.isDefaultPrevented()){var actives=this.$parent&&this.$parent.find("> .panel > .in");if(actives&&actives.length){var hasData=actives.data("bs.collapse");if(hasData&&hasData.transitioning)return;actives.collapse("hide"),hasData||actives.data("bs.collapse",null)}var dimension=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[dimension](0),this.transitioning=1;var complete=function(){this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!$.support.transition)return complete.call(this);var scrollSize=$.camelCase(["scroll",dimension].join("-"));this.$element.one($.support.transition.end,$.proxy(complete,this)).emulateTransitionEnd(350)[dimension](this.$element[0][scrollSize])}}},Collapse.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var startEvent=$.Event("hide.bs.collapse");if(this.$element.trigger(startEvent),!startEvent.isDefaultPrevented()){var dimension=this.dimension();this.$element[dimension](this.$element[dimension]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var complete=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!$.support.transition)return complete.call(this);this.$element[dimension](0).one($.support.transition.end,$.proxy(complete,this)).emulateTransitionEnd(350)}}},Collapse.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var old=$.fn.collapse;$.fn.collapse=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.collapse"),options=$.extend({},Collapse.DEFAULTS,$this.data(),"object"==typeof option&&option);!data&&options.toggle&&"show"==option&&(option=!option),data||$this.data("bs.collapse",data=new Collapse(this,options)),"string"==typeof option&&data[option]()})},$.fn.collapse.Constructor=Collapse,$.fn.collapse.noConflict=function(){return $.fn.collapse=old,this},$(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var href,$this=$(this),target=$this.attr("data-target")||e.preventDefault()||(href=$this.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,""),$target=$(target),data=$target.data("bs.collapse"),option=data?"toggle":$this.data(),parent=$this.attr("data-parent"),$parent=parent&&$(parent);data&&data.transitioning||($parent&&$parent.find('[data-toggle=collapse][data-parent="'+parent+'"]').not($this).addClass("collapsed"),$this[$target.hasClass("in")?"addClass":"removeClass"]("collapsed")),$target.collapse(option)})}(jQuery),function($){"use strict";function clearMenus(e){$(backdrop).remove(),$(toggle).each(function(){var $parent=getParent($(this)),relatedTarget={relatedTarget:this};$parent.hasClass("open")&&($parent.trigger(e=$.Event("hide.bs.dropdown",relatedTarget)),e.isDefaultPrevented()||$parent.removeClass("open").trigger("hidden.bs.dropdown",relatedTarget))})}function getParent($this){var selector=$this.attr("data-target");selector||(selector=(selector=$this.attr("href"))&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,""));var $parent=selector&&$(selector);return $parent&&$parent.length?$parent:$this.parent()}var backdrop=".dropdown-backdrop",toggle="[data-toggle=dropdown]",Dropdown=function(element){$(element).on("click.bs.dropdown",this.toggle)};Dropdown.prototype.toggle=function(e){var $this=$(this);if(!$this.is(".disabled, :disabled")){var $parent=getParent($this),isActive=$parent.hasClass("open");if(clearMenus(),!isActive){"ontouchstart"in document.documentElement&&!$parent.closest(".navbar-nav").length&&$('<div class="dropdown-backdrop"/>').insertAfter($(this)).on("click",clearMenus);var relatedTarget={relatedTarget:this};if($parent.trigger(e=$.Event("show.bs.dropdown",relatedTarget)),e.isDefaultPrevented())return;$parent.toggleClass("open").trigger("shown.bs.dropdown",relatedTarget),$this.focus()}return!1}},Dropdown.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var $this=$(this);if(e.preventDefault(),e.stopPropagation(),!$this.is(".disabled, :disabled")){var $parent=getParent($this),isActive=$parent.hasClass("open");if(!isActive||isActive&&27==e.keyCode)return 27==e.which&&$parent.find(toggle).focus(),$this.click();var desc=" li:not(.divider):visible a",$items=$parent.find("[role=menu]"+desc+", [role=listbox]"+desc);if($items.length){var index=$items.index($items.filter(":focus"));38==e.keyCode&&index>0&&index--,40==e.keyCode&&index<$items.length-1&&index++,~index||(index=0),$items.eq(index).focus()}}}};var old=$.fn.dropdown;$.fn.dropdown=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.dropdown");data||$this.data("bs.dropdown",data=new Dropdown(this)),"string"==typeof option&&data[option].call($this)})},$.fn.dropdown.Constructor=Dropdown,$.fn.dropdown.noConflict=function(){return $.fn.dropdown=old,this},$(document).on("click.bs.dropdown.data-api",clearMenus).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",toggle,Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api",toggle+", [role=menu], [role=listbox]",Dropdown.prototype.keydown)}(jQuery),function($){"use strict";var Modal=function(element,options){this.options=options,this.$element=$(element),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,$.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};Modal.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},Modal.prototype.toggle=function(_relatedTarget){return this[this.isShown?"hide":"show"](_relatedTarget)},Modal.prototype.show=function(_relatedTarget){var that=this,e=$.Event("show.bs.modal",{relatedTarget:_relatedTarget});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',$.proxy(this.hide,this)),this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass("fade");that.$element.parent().length||that.$element.appendTo(document.body),that.$element.show().scrollTop(0),transition&&that.$element[0].offsetWidth,that.$element.addClass("in").attr("aria-hidden",!1),that.enforceFocus();var e=$.Event("shown.bs.modal",{relatedTarget:_relatedTarget});transition?that.$element.find(".modal-dialog").one($.support.transition.end,function(){that.$element.focus().trigger(e)}).emulateTransitionEnd(300):that.$element.focus().trigger(e)}))},Modal.prototype.hide=function(e){e&&e.preventDefault(),e=$.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),$(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),$.support.transition&&this.$element.hasClass("fade")?this.$element.one($.support.transition.end,$.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},Modal.prototype.enforceFocus=function(){$(document).off("focusin.bs.modal").on("focusin.bs.modal",$.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.focus()},this))},Modal.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",$.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},Modal.prototype.hideModal=function(){var that=this;this.$element.hide(),this.backdrop(function(){that.removeBackdrop(),that.$element.trigger("hidden.bs.modal")})},Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},Modal.prototype.backdrop=function(callback){var animate=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;if(this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",$.proxy(function(e){e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),doAnimate&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!callback)return;doAnimate?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one($.support.transition.end,callback).emulateTransitionEnd(150):callback()):callback&&callback()};var old=$.fn.modal;$.fn.modal=function(option,_relatedTarget){return this.each(function(){var $this=$(this),data=$this.data("bs.modal"),options=$.extend({},Modal.DEFAULTS,$this.data(),"object"==typeof option&&option);data||$this.data("bs.modal",data=new Modal(this,options)),"string"==typeof option?data[option](_relatedTarget):options.show&&data.show(_relatedTarget)})},$.fn.modal.Constructor=Modal,$.fn.modal.noConflict=function(){return $.fn.modal=old,this},$(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var $this=$(this),href=$this.attr("href"),$target=$($this.attr("data-target")||href&&href.replace(/.*(?=#[^\s]+$)/,"")),option=$target.data("bs.modal")?"toggle":$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());$this.is("a")&&e.preventDefault(),$target.modal(option,this).one("hide",function(){$this.is(":visible")&&$this.focus()})}),$(document).on("show.bs.modal",".modal",function(){$(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){$(document.body).removeClass("modal-open")})}(jQuery),function($){"use strict";var Tooltip=function(element,options){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",element,options)};Tooltip.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},Tooltip.prototype.init=function(type,element,options){this.enabled=!0,this.type=type,this.$element=$(element),this.options=this.getOptions(options);for(var triggers=this.options.trigger.split(" "),i=triggers.length;i--;){var trigger=triggers[i];if("click"==trigger)this.$element.on("click."+this.type,this.options.selector,$.proxy(this.toggle,this));else if("manual"!=trigger){var eventIn="hover"==trigger?"mouseenter":"focusin",eventOut="hover"==trigger?"mouseleave":"focusout";this.$element.on(eventIn+"."+this.type,this.options.selector,$.proxy(this.enter,this)),this.$element.on(eventOut+"."+this.type,this.options.selector,$.proxy(this.leave,this))}}this.options.selector?this._options=$.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},Tooltip.prototype.getDefaults=function(){return Tooltip.DEFAULTS},Tooltip.prototype.getOptions=function(options){return(options=$.extend({},this.getDefaults(),this.$element.data(),options)).delay&&"number"==typeof options.delay&&(options.delay={show:options.delay,hide:options.delay}),options},Tooltip.prototype.getDelegateOptions=function(){var options={},defaults=this.getDefaults();return this._options&&$.each(this._options,function(key,value){defaults[key]!=value&&(options[key]=value)}),options},Tooltip.prototype.enter=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);if(clearTimeout(self.timeout),self.hoverState="in",!self.options.delay||!self.options.delay.show)return self.show();self.timeout=setTimeout(function(){"in"==self.hoverState&&self.show()},self.options.delay.show)},Tooltip.prototype.leave=function(obj){var self=obj instanceof this.constructor?obj:$(obj.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);if(clearTimeout(self.timeout),self.hoverState="out",!self.options.delay||!self.options.delay.hide)return self.hide();self.timeout=setTimeout(function(){"out"==self.hoverState&&self.hide()},self.options.delay.hide)},Tooltip.prototype.show=function(){var e=$.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(e),e.isDefaultPrevented())return;var that=this,$tip=this.tip();this.setContent(),this.options.animation&&$tip.addClass("fade");var placement="function"==typeof this.options.placement?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement,autoToken=/\s?auto?\s?/i,autoPlace=autoToken.test(placement);autoPlace&&(placement=placement.replace(autoToken,"")||"top"),$tip.detach().css({top:0,left:0,display:"block"}).addClass(placement),this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element);var pos=this.getPosition(),actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;if(autoPlace){var $parent=this.$element.parent(),orgPlacement=placement,docScroll=document.documentElement.scrollTop||document.body.scrollTop,parentWidth="body"==this.options.container?window.innerWidth:$parent.outerWidth(),parentHeight="body"==this.options.container?window.innerHeight:$parent.outerHeight(),parentLeft="body"==this.options.container?0:$parent.offset().left;placement="bottom"==placement&&pos.top+pos.height+actualHeight-docScroll>parentHeight?"top":"top"==placement&&pos.top-docScroll-actualHeight<0?"bottom":"right"==placement&&pos.right+actualWidth>parentWidth?"left":"left"==placement&&pos.left-actualWidth<parentLeft?"right":placement,$tip.removeClass(orgPlacement).addClass(placement)}var calculatedOffset=this.getCalculatedOffset(placement,pos,actualWidth,actualHeight);this.applyPlacement(calculatedOffset,placement),this.hoverState=null;var complete=function(){that.$element.trigger("shown.bs."+that.type)};$.support.transition&&this.$tip.hasClass("fade")?$tip.one($.support.transition.end,complete).emulateTransitionEnd(150):complete()}},Tooltip.prototype.applyPlacement=function(offset,placement){var replace,$tip=this.tip(),width=$tip[0].offsetWidth,height=$tip[0].offsetHeight,marginTop=parseInt($tip.css("margin-top"),10),marginLeft=parseInt($tip.css("margin-left"),10);isNaN(marginTop)&&(marginTop=0),isNaN(marginLeft)&&(marginLeft=0),offset.top=offset.top+marginTop,offset.left=offset.left+marginLeft,$.offset.setOffset($tip[0],$.extend({using:function(props){$tip.css({top:Math.round(props.top),left:Math.round(props.left)})}},offset),0),$tip.addClass("in");var actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight;if("top"==placement&&actualHeight!=height&&(replace=!0,offset.top=offset.top+height-actualHeight),/bottom|top/.test(placement)){var delta=0;offset.left<0&&(delta=-2*offset.left,offset.left=0,$tip.offset(offset),actualWidth=$tip[0].offsetWidth,actualHeight=$tip[0].offsetHeight),this.replaceArrow(delta-width+actualWidth,actualWidth,"left")}else this.replaceArrow(actualHeight-height,actualHeight,"top");replace&&$tip.offset(offset)},Tooltip.prototype.replaceArrow=function(delta,dimension,position){this.arrow().css(position,delta?50*(1-delta/dimension)+"%":"")},Tooltip.prototype.setContent=function(){var $tip=this.tip(),title=this.getTitle();$tip.find(".tooltip-inner")[this.options.html?"html":"text"](title),$tip.removeClass("fade in top bottom left right")},Tooltip.prototype.hide=function(){function complete(){"in"!=that.hoverState&&$tip.detach(),that.$element.trigger("hidden.bs."+that.type)}var that=this,$tip=this.tip(),e=$.Event("hide.bs."+this.type);if(this.$element.trigger(e),!e.isDefaultPrevented())return $tip.removeClass("in"),$.support.transition&&this.$tip.hasClass("fade")?$tip.one($.support.transition.end,complete).emulateTransitionEnd(150):complete(),this.hoverState=null,this},Tooltip.prototype.fixTitle=function(){var $e=this.$element;($e.attr("title")||"string"!=typeof $e.attr("data-original-title"))&&$e.attr("data-original-title",$e.attr("title")||"").attr("title","")},Tooltip.prototype.hasContent=function(){return this.getTitle()},Tooltip.prototype.getPosition=function(){var el=this.$element[0];return $.extend({},"function"==typeof el.getBoundingClientRect?el.getBoundingClientRect():{width:el.offsetWidth,height:el.offsetHeight},this.$element.offset())},Tooltip.prototype.getCalculatedOffset=function(placement,pos,actualWidth,actualHeight){return"bottom"==placement?{top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}:"top"==placement?{top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}:"left"==placement?{top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}:{top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}},Tooltip.prototype.getTitle=function(){var $e=this.$element,o=this.options;return $e.attr("data-original-title")||("function"==typeof o.title?o.title.call($e[0]):o.title)},Tooltip.prototype.tip=function(){return this.$tip=this.$tip||$(this.options.template)},Tooltip.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},Tooltip.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},Tooltip.prototype.enable=function(){this.enabled=!0},Tooltip.prototype.disable=function(){this.enabled=!1},Tooltip.prototype.toggleEnabled=function(){this.enabled=!this.enabled},Tooltip.prototype.toggle=function(e){var self=e?$(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;self.tip().hasClass("in")?self.leave(self):self.enter(self)},Tooltip.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var old=$.fn.tooltip;$.fn.tooltip=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.tooltip"),options="object"==typeof option&&option;(data||"destroy"!=option)&&(data||$this.data("bs.tooltip",data=new Tooltip(this,options)),"string"==typeof option&&data[option]())})},$.fn.tooltip.Constructor=Tooltip,$.fn.tooltip.noConflict=function(){return $.fn.tooltip=old,this}}(jQuery),function($){"use strict";var Popover=function(element,options){this.init("popover",element,options)};if(!$.fn.tooltip)throw new Error("Popover requires tooltip.js");Popover.DEFAULTS=$.extend({},$.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),(Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype)).constructor=Popover,Popover.prototype.getDefaults=function(){return Popover.DEFAULTS},Popover.prototype.setContent=function(){var $tip=this.tip(),title=this.getTitle(),content=this.getContent();$tip.find(".popover-title")[this.options.html?"html":"text"](title),$tip.find(".popover-content")[this.options.html?"string"==typeof content?"html":"append":"text"](content),$tip.removeClass("fade top bottom left right in"),$tip.find(".popover-title").html()||$tip.find(".popover-title").hide()},Popover.prototype.hasContent=function(){return this.getTitle()||this.getContent()},Popover.prototype.getContent=function(){var $e=this.$element,o=this.options;return $e.attr("data-content")||("function"==typeof o.content?o.content.call($e[0]):o.content)},Popover.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},Popover.prototype.tip=function(){return this.$tip||(this.$tip=$(this.options.template)),this.$tip};var old=$.fn.popover;$.fn.popover=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.popover"),options="object"==typeof option&&option;(data||"destroy"!=option)&&(data||$this.data("bs.popover",data=new Popover(this,options)),"string"==typeof option&&data[option]())})},$.fn.popover.Constructor=Popover,$.fn.popover.noConflict=function(){return $.fn.popover=old,this}}(jQuery),function($){"use strict";function ScrollSpy(element,options){var href,process=$.proxy(this.process,this);this.$element=$($(element).is("body")?window:element),this.$body=$("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",process),this.options=$.extend({},ScrollSpy.DEFAULTS,options),this.selector=(this.options.target||(href=$(element).attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=$([]),this.targets=$([]),this.activeTarget=null,this.refresh(),this.process()}ScrollSpy.DEFAULTS={offset:10},ScrollSpy.prototype.refresh=function(){var offsetMethod=this.$element[0]==window?"offset":"position";this.offsets=$([]),this.targets=$([]);var self=this;this.$body.find(this.selector).map(function(){var $el=$(this),href=$el.data("target")||$el.attr("href"),$href=/^#./.test(href)&&$(href);return $href&&$href.length&&$href.is(":visible")&&[[$href[offsetMethod]().top+(!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()),href]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){self.offsets.push(this[0]),self.targets.push(this[1])})},ScrollSpy.prototype.process=function(){var i,scrollTop=this.$scrollElement.scrollTop()+this.options.offset,maxScroll=(this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight)-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget;if(scrollTop>=maxScroll)return activeTarget!=(i=targets.last()[0])&&this.activate(i);if(activeTarget&&scrollTop<=offsets[0])return activeTarget!=(i=targets[0])&&this.activate(i);for(i=offsets.length;i--;)activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])},ScrollSpy.prototype.activate=function(target){this.activeTarget=target,$(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]',active=$(selector).parents("li").addClass("active");active.parent(".dropdown-menu").length&&(active=active.closest("li.dropdown").addClass("active")),active.trigger("activate.bs.scrollspy")};var old=$.fn.scrollspy;$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.scrollspy"),options="object"==typeof option&&option;data||$this.data("bs.scrollspy",data=new ScrollSpy(this,options)),"string"==typeof option&&data[option]()})},$.fn.scrollspy.Constructor=ScrollSpy,$.fn.scrollspy.noConflict=function(){return $.fn.scrollspy=old,this},$(window).on("load",function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);$spy.scrollspy($spy.data())})})}(jQuery),function($){"use strict";var Tab=function(element){this.element=$(element)};Tab.prototype.show=function(){var $this=this.element,$ul=$this.closest("ul:not(.dropdown-menu)"),selector=$this.data("target");if(selector||(selector=(selector=$this.attr("href"))&&selector.replace(/.*(?=#[^\s]*$)/,"")),!$this.parent("li").hasClass("active")){var previous=$ul.find(".active:last a")[0],e=$.Event("show.bs.tab",{relatedTarget:previous});if($this.trigger(e),!e.isDefaultPrevented()){var $target=$(selector);this.activate($this.parent("li"),$ul),this.activate($target,$target.parent(),function(){$this.trigger({type:"shown.bs.tab",relatedTarget:previous})})}}},Tab.prototype.activate=function(element,container,callback){function next(){$active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),element.addClass("active"),transition?(element[0].offsetWidth,element.addClass("in")):element.removeClass("fade"),element.parent(".dropdown-menu")&&element.closest("li.dropdown").addClass("active"),callback&&callback()}var $active=container.find("> .active"),transition=callback&&$.support.transition&&$active.hasClass("fade");transition?$active.one($.support.transition.end,next).emulateTransitionEnd(150):next(),$active.removeClass("in")};var old=$.fn.tab;$.fn.tab=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.tab");data||$this.data("bs.tab",data=new Tab(this)),"string"==typeof option&&data[option]()})},$.fn.tab.Constructor=Tab,$.fn.tab.noConflict=function(){return $.fn.tab=old,this},$(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),$(this).tab("show")})}(jQuery),function($){"use strict";var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options),this.$window=$(window).on("scroll.bs.affix.data-api",$.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",$.proxy(this.checkPositionWithEventLoop,this)),this.$element=$(element),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};Affix.RESET="affix affix-top affix-bottom",Affix.DEFAULTS={offset:0},Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(Affix.RESET).addClass("affix");var scrollTop=this.$window.scrollTop(),position=this.$element.offset();return this.pinnedOffset=position.top-scrollTop},Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)},Affix.prototype.checkPosition=function(){if(this.$element.is(":visible")){var scrollHeight=$(document).height(),scrollTop=this.$window.scrollTop(),position=this.$element.offset(),offset=this.options.offset,offsetTop=offset.top,offsetBottom=offset.bottom;"top"==this.affixed&&(position.top+=scrollTop),"object"!=typeof offset&&(offsetBottom=offsetTop=offset),"function"==typeof offsetTop&&(offsetTop=offset.top(this.$element)),"function"==typeof offsetBottom&&(offsetBottom=offset.bottom(this.$element));var affix=!(null!=this.unpin&&scrollTop+this.unpin<=position.top)&&(null!=offsetBottom&&position.top+this.$element.height()>=scrollHeight-offsetBottom?"bottom":null!=offsetTop&&scrollTop<=offsetTop&&"top");if(this.affixed!==affix){this.unpin&&this.$element.css("top","");var affixType="affix"+(affix?"-"+affix:""),e=$.Event(affixType+".bs.affix");this.$element.trigger(e),e.isDefaultPrevented()||(this.affixed=affix,this.unpin="bottom"==affix?this.getPinnedOffset():null,this.$element.removeClass(Affix.RESET).addClass(affixType).trigger($.Event(affixType.replace("affix","affixed"))),"bottom"==affix&&this.$element.offset({top:scrollHeight-offsetBottom-this.$element.height()}))}}};var old=$.fn.affix;$.fn.affix=function(option){return this.each(function(){var $this=$(this),data=$this.data("bs.affix"),options="object"==typeof option&&option;data||$this.data("bs.affix",data=new Affix(this,options)),"string"==typeof option&&data[option]()})},$.fn.affix.Constructor=Affix,$.fn.affix.noConflict=function(){return $.fn.affix=old,this},$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data();data.offset=data.offset||{},data.offsetBottom&&(data.offset.bottom=data.offsetBottom),data.offsetTop&&(data.offset.top=data.offsetTop),$spy.affix(data)})})}(jQuery),function($){"use strict";$.expr[":"].icontains=function(obj,index,meta){return $(obj).text().toUpperCase().indexOf(meta[3].toUpperCase())>=0};var Selectpicker=function(element,options,e){e&&(e.stopPropagation(),e.preventDefault()),this.$element=$(element),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=$.extend({},$.fn.selectpicker.defaults,this.$element.data(),"object"==typeof options&&options),null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=Selectpicker.prototype.val,this.render=Selectpicker.prototype.render,this.refresh=Selectpicker.prototype.refresh,this.setStyle=Selectpicker.prototype.setStyle,this.selectAll=Selectpicker.prototype.selectAll,this.deselectAll=Selectpicker.prototype.deselectAll,this.init()};Selectpicker.prototype={constructor:Selectpicker,init:function(){var that=this,id=this.$element.attr("id");this.$element.hide(),this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement),this.$menu=this.$newElement.find("> .dropdown-menu"),this.$button=this.$newElement.find("> button"),this.$searchbox=this.$newElement.find("input"),void 0!==id&&(this.$button.attr("data-id",id),$('label[for="'+id+'"]').click(function(e){e.preventDefault(),that.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.liHeight(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this)},createDropdown:function(){var multiple=this.multiple?" show-tick":"",inputGroup=this.$element.parent().hasClass("input-group")?" input-group-btn":"",autofocus=this.autofocus?" autofocus":"",header=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",searchbox=this.options.liveSearch?'<div class="bootstrap-select-searchbox"><input type="text" class="input-block-level form-control" /></div>':"",actionsbox=this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-block"><button class="actions-btn bs-select-all btn btn-sm btn-default">Select All</button><button class="actions-btn bs-deselect-all btn btn-sm btn-default">Deselect All</button></div></div>':"";return $('<div class="btn-group bootstrap-select'+multiple+inputGroup+'"><button type="button" class="btn dropdown-toggle selectpicker" data-toggle="dropdown"'+autofocus+'><span class="filter-option pull-left"></span>&nbsp;<span class="caret"></span></button><div class="dropdown-menu open">'+header+searchbox+actionsbox+'<ul class="dropdown-menu inner selectpicker" role="menu"></ul></div></div>')},createView:function(){var $drop=this.createDropdown(),$li=this.createLi();return $drop.find("ul").append($li),$drop},reloadLi:function(){this.destroyLi();var $li=this.createLi();this.$menu.find("ul").append($li)},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var that=this,_liA=[],_liHtml="";return this.$element.find("option").each(function(){var $this=$(this),optionClass=$this.attr("class")||"",inline=$this.attr("style")||"",text=$this.data("content")?$this.data("content"):$this.html(),subtext=void 0!==$this.data("subtext")?'<small class="muted text-muted">'+$this.data("subtext")+"</small>":"",icon=void 0!==$this.data("icon")?'<i class="'+that.options.iconBase+" "+$this.data("icon")+'"></i> ':"";if(""!==icon&&($this.is(":disabled")||$this.parent().is(":disabled"))&&(icon="<span>"+icon+"</span>"),$this.data("content")||(text=icon+'<span class="text">'+text+subtext+"</span>"),that.options.hideDisabled&&($this.is(":disabled")||$this.parent().is(":disabled")))_liA.push('<a style="min-height: 0; padding: 0"></a>');else if($this.parent().is("optgroup")&&!0!==$this.data("divider"))if(0===$this.index()){var label=$this.parent().attr("label"),labelSubtext=void 0!==$this.parent().data("subtext")?'<small class="muted text-muted">'+$this.parent().data("subtext")+"</small>":"";label=($this.parent().data("icon")?'<i class="'+$this.parent().data("icon")+'"></i> ':"")+'<span class="text">'+label+labelSubtext+"</span>",0!==$this[0].index?_liA.push('<div class="div-contain"><div class="divider"></div></div><dt>'+label+"</dt>"+that.createA(text,"opt "+optionClass,inline)):_liA.push("<dt>"+label+"</dt>"+that.createA(text,"opt "+optionClass,inline))}else _liA.push(that.createA(text,"opt "+optionClass,inline));else!0===$this.data("divider")?_liA.push('<div class="div-contain"><div class="divider"></div></div>'):!0===$(this).data("hidden")?_liA.push("<a></a>"):_liA.push(that.createA(text,optionClass,inline))}),$.each(_liA,function(i,item){_liHtml+='<li rel="'+i+'"'+("<a></a>"===item?'class="hide is-hidden"':"")+">"+item+"</li>"}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),$(_liHtml)},createA:function(text,classes,inline){return'<a tabindex="0" class="nopop '+classes+'" style="'+inline+'">'+text+'<i class="'+this.options.iconBase+" "+this.options.tickIcon+' icon-ok check-mark"></i></a>'},render:function(updateLi){var that=this;!1!==updateLi&&this.$element.find("option").each(function(index){that.setDisabled(index,$(this).is(":disabled")||$(this).parent().is(":disabled")),that.setSelected(index,$(this).is(":selected"))}),this.tabIndex();var selectedItems=this.$element.find("option:selected").map(function(){var subtext,$this=$(this),icon=$this.data("icon")&&that.options.showIcon?'<i class="'+that.options.iconBase+" "+$this.data("icon")+'"></i> ':"";return subtext=that.options.showSubtext&&$this.attr("data-subtext")&&!that.multiple?' <small class="muted text-muted">'+$this.data("subtext")+"</small>":"",$this.data("content")&&that.options.showContent?$this.data("content"):void 0!==$this.attr("title")?$this.attr("title"):icon+$this.html()+subtext}).toArray(),title=this.multiple?selectedItems.join(this.options.multipleSeparator):selectedItems[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var max=this.options.selectedTextFormat.split(">"),notDisabled=this.options.hideDisabled?":not([disabled])":"";(max.length>1&&selectedItems.length>max[1]||1==max.length&&selectedItems.length>=2)&&(title=this.options.countSelectedText.replace("{0}",selectedItems.length).replace("{1}",this.$element.find('option:not([data-divider="true"]):not([data-hidden="true"])'+notDisabled).length))}this.options.title=this.$element.attr("title"),title||(title=void 0!==this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",$.trim(title)),this.$newElement.find(".filter-option").html(title)},setStyle:function(style,status){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device/gi,""));var buttonClass=style||this.options.style;"add"==status?this.$button.addClass(buttonClass):"remove"==status?this.$button.removeClass(buttonClass):(this.$button.removeClass(this.options.style),this.$button.addClass(buttonClass))},liHeight:function(){if(!1!==this.options.size){var $selectClone=this.$menu.parent().clone().find("> .dropdown-toggle").prop("autofocus",!1).end().appendTo("body"),$menuClone=$selectClone.addClass("open").find("> .dropdown-menu"),liHeight=$menuClone.find("li > a").outerHeight(),headerHeight=this.options.header?$menuClone.find(".popover-title").outerHeight():0,searchHeight=this.options.liveSearch?$menuClone.find(".bootstrap-select-searchbox").outerHeight():0,actionsHeight=this.options.actionsBox?$menuClone.find(".bs-actionsbox").outerHeight():0;$selectClone.remove(),this.$newElement.data("liHeight",liHeight).data("headerHeight",headerHeight).data("searchHeight",searchHeight).data("actionsHeight",actionsHeight)}},setSize:function(){var menuHeight,selectOffsetTop,selectOffsetBot,that=this,menu=this.$menu,menuInner=menu.find(".inner"),selectHeight=this.$newElement.outerHeight(),liHeight=this.$newElement.data("liHeight"),headerHeight=this.$newElement.data("headerHeight"),searchHeight=this.$newElement.data("searchHeight"),actionsHeight=this.$newElement.data("actionsHeight"),divHeight=menu.find("li .divider").outerHeight(!0),menuPadding=parseInt(menu.css("padding-top"))+parseInt(menu.css("padding-bottom"))+parseInt(menu.css("border-top-width"))+parseInt(menu.css("border-bottom-width")),notDisabled=this.options.hideDisabled?":not(.disabled)":"",$window=$(window),menuExtras=menuPadding+parseInt(menu.css("margin-top"))+parseInt(menu.css("margin-bottom"))+2,posVert=function(){selectOffsetTop=that.$newElement.offset().top-$window.scrollTop(),selectOffsetBot=$window.height()-selectOffsetTop-selectHeight};if(posVert(),this.options.header&&menu.css("padding-top",0),"auto"==this.options.size){var getSize=function(){var minHeight,lisVis=that.$lis.not(".hide");posVert(),menuHeight=selectOffsetBot-menuExtras,that.options.dropupAuto&&that.$newElement.toggleClass("dropup",selectOffsetTop>selectOffsetBot&&menuHeight-menuExtras<menu.height()),that.$newElement.hasClass("dropup")&&(menuHeight=selectOffsetTop-menuExtras),minHeight=lisVis.length+lisVis.find("dt").length>3?3*liHeight+menuExtras-2:0,menu.css({"max-height":menuHeight+"px",overflow:"hidden","min-height":minHeight+headerHeight+searchHeight+actionsHeight+"px"}),menuInner.css({"max-height":menuHeight-headerHeight-searchHeight-actionsHeight-menuPadding+"px","overflow-y":"auto","min-height":Math.max(minHeight-menuPadding,0)+"px"})};getSize(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",getSize),$(window).off("resize.getSize").on("resize.getSize",getSize),$(window).off("scroll.getSize").on("scroll.getSize",getSize)}else if(this.options.size&&"auto"!=this.options.size&&menu.find("li"+notDisabled).length>this.options.size){var optIndex=menu.find("li"+notDisabled+" > *").filter(":not(.div-contain)").slice(0,this.options.size).last().parent().index(),divLength=menu.find("li").slice(0,optIndex+1).find(".div-contain").length;menuHeight=liHeight*this.options.size+divLength*divHeight+menuPadding,that.options.dropupAuto&&this.$newElement.toggleClass("dropup",selectOffsetTop>selectOffsetBot&&menuHeight<menu.height()),menu.css({"max-height":menuHeight+headerHeight+searchHeight+actionsHeight+"px",overflow:"hidden"}),menuInner.css({"max-height":menuHeight-menuPadding+"px","overflow-y":"auto"})}},setWidth:function(){if("auto"==this.options.width){this.$menu.css("min-width","0");var selectClone=this.$newElement.clone().appendTo("body"),ulWidth=selectClone.find("> .dropdown-menu").css("width"),btnWidth=selectClone.css("width","auto").find("> button").css("width");selectClone.remove(),this.$newElement.css("width",Math.max(parseInt(ulWidth),parseInt(btnWidth))+"px")}else"fit"==this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){var pos,actualHeight,that=this,$drop=$("<div />"),getPlacement=function($element){$drop.addClass($element.attr("class").replace(/form-control/gi,"")).toggleClass("dropup",$element.hasClass("dropup")),pos=$element.offset(),actualHeight=$element.hasClass("dropup")?0:$element[0].offsetHeight,$drop.css({top:pos.top+actualHeight,left:pos.left,width:$element[0].offsetWidth,position:"absolute"})};this.$newElement.on("click",function(){that.isDisabled()||(getPlacement($(this)),$drop.appendTo(that.options.container),$drop.toggleClass("open",!$(this).hasClass("open")),$drop.append(that.$menu))}),$(window).resize(function(){getPlacement(that.$newElement)}),$(window).on("scroll",function(){getPlacement(that.$newElement)}),$("html").on("click",function(e){$(e.target).closest(that.$newElement).length<1&&$drop.removeClass("open")})},mobile:function(){this.$element.addClass("mobile-device").appendTo(this.$newElement),this.options.container&&this.$menu.hide()},refresh:function(){this.$lis=null,this.reloadLi(),this.render(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},update:function(){this.reloadLi(),this.setWidth(),this.setStyle(),this.checkDisabled(),this.liHeight()},setSelected:function(index,selected){null==this.$lis&&(this.$lis=this.$menu.find("li")),$(this.$lis[index]).toggleClass("selected",selected)},setDisabled:function(index,disabled){null==this.$lis&&(this.$lis=this.$menu.find("li")),disabled?$(this.$lis[index]).addClass("disabled").find("a").attr("href","#").attr("tabindex",-1):$(this.$lis[index]).removeClass("disabled").find("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element.is(":disabled")},checkDisabled:function(){var that=this;this.isDisabled()?this.$button.addClass("disabled").attr("tabindex",-1):(this.$button.hasClass("disabled")&&this.$button.removeClass("disabled"),-1==this.$button.attr("tabindex")&&(this.$element.data("tabindex")||this.$button.removeAttr("tabindex"))),this.$button.click(function(){return!that.isDisabled()})},tabIndex:function(){this.$element.is("[tabindex]")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex")))},clickListener:function(){var that=this;$("body").on("touchstart.dropdown",".dropdown-menu",function(e){e.stopPropagation()}),this.$newElement.on("click",function(){that.setSize(),that.options.liveSearch||that.multiple||setTimeout(function(){that.$menu.find(".selected a").focus()},10)}),this.$menu.on("click","li a",function(e){var clickedIndex=$(this).parent().index(),prevValue=that.$element.val(),prevIndex=that.$element.prop("selectedIndex");if(that.multiple&&e.stopPropagation(),e.preventDefault(),!that.isDisabled()&&!$(this).parent().hasClass("disabled")){var $options=that.$element.find("option"),$option=$options.eq(clickedIndex),state=$option.prop("selected"),$optgroup=$option.parent("optgroup"),maxOptions=that.options.maxOptions,maxOptionsGrp=$optgroup.data("maxOptions")||!1;if(that.multiple){if($option.prop("selected",!state),that.setSelected(clickedIndex,!state),!1!==maxOptions||!1!==maxOptionsGrp){var maxReached=maxOptions<$options.filter(":selected").length,maxReachedGrp=maxOptionsGrp<$optgroup.find("option:selected").length,maxOptionsArr=that.options.maxOptionsText,maxTxt=maxOptionsArr[0].replace("{n}",maxOptions),maxTxtGrp=maxOptionsArr[1].replace("{n}",maxOptionsGrp),$notify=$('<div class="notify"></div>');(maxOptions&&maxReached||maxOptionsGrp&&maxReachedGrp)&&(maxOptionsArr[2]&&(maxTxt=maxTxt.replace("{var}",maxOptionsArr[2][maxOptions>1?0:1]),maxTxtGrp=maxTxtGrp.replace("{var}",maxOptionsArr[2][maxOptionsGrp>1?0:1])),$option.prop("selected",!1),that.$menu.append($notify),maxOptions&&maxReached&&($notify.append($("<div>"+maxTxt+"</div>")),that.$element.trigger("maxReached.bs.select")),maxOptionsGrp&&maxReachedGrp&&($notify.append($("<div>"+maxTxtGrp+"</div>")),that.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){that.setSelected(clickedIndex,!1)},10),$notify.delay(750).fadeOut(300,function(){$(this).remove()}))}}else $options.prop("selected",!1),$option.prop("selected",!0),that.$menu.find(".selected").removeClass("selected"),that.setSelected(clickedIndex,!0);that.multiple?that.options.liveSearch&&that.$searchbox.focus():that.$button.focus(),(prevValue!=that.$element.val()&&that.multiple||prevIndex!=that.$element.prop("selectedIndex")&&!that.multiple)&&that.$element.change()}}),this.$menu.on("click","li.disabled a, li dt, li .div-contain, .popover-title, .popover-title :not(.close)",function(e){e.target==this&&(e.preventDefault(),e.stopPropagation(),that.options.liveSearch?that.$searchbox.focus():that.$button.focus())}),this.$menu.on("click",".popover-title .close",function(){that.$button.focus()}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(e){that.options.liveSearch?that.$searchbox.focus():that.$button.focus(),e.preventDefault(),e.stopPropagation(),$(this).is(".bs-select-all")?that.selectAll():that.deselectAll(),that.$element.change()}),this.$element.change(function(){that.render(!1)})},liveSearchListener:function(){var that=this,no_results=$('<li class="no-results"></li>');this.$newElement.on("click.dropdown.data-api",function(){that.$menu.find(".active").removeClass("active"),that.$searchbox.val()&&(that.$searchbox.val(""),that.$lis.not(".is-hidden").removeClass("hide"),no_results.parent().length&&no_results.remove()),that.multiple||that.$menu.find(".selected").addClass("active"),setTimeout(function(){that.$searchbox.focus()},10)}),this.$searchbox.on("input propertychange",function(){that.$searchbox.val()?(that.$lis.not(".is-hidden").removeClass("hide").find("a").not(":icontains("+that.$searchbox.val()+")").parent().addClass("hide"),that.$menu.find("li").filter(":visible:not(.no-results)").length?no_results.parent().length&&no_results.remove():(no_results.parent().length&&no_results.remove(),no_results.html(that.options.noneResultsText+' "'+that.$searchbox.val()+'"').show(),that.$menu.find("li").last().after(no_results))):(that.$lis.not(".is-hidden").removeClass("hide"),no_results.parent().length&&no_results.remove()),that.$menu.find("li.active").removeClass("active"),that.$menu.find("li").filter(":visible:not(.divider)").eq(0).addClass("active").find("a").focus(),$(this).focus()}),this.$menu.on("mouseenter","a",function(e){that.$menu.find(".active").removeClass("active"),$(e.currentTarget).parent().not(".disabled").addClass("active")}),this.$menu.on("mouseleave","a",function(){that.$menu.find(".active").removeClass("active")})},val:function(value){return void 0!==value?(this.$element.val(value),this.$element.change(),this.$element):this.$element.val()},selectAll:function(){null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$element.find("option:enabled").prop("selected",!0),$(this.$lis).filter(":not(.disabled)").addClass("selected"),this.render(!1)},deselectAll:function(){null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$element.find("option:enabled").prop("selected",!1),$(this.$lis).filter(":not(.disabled)").removeClass("selected"),this.render(!1)},keydown:function(e){var $this,$items,$parent,index,next,first,last,prev,nextPrev,that,prevIndex,isActive,keyCodeMap={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if($this=$(this),$parent=$this.parent(),$this.is("input")&&($parent=$this.parent().parent()),(that=$parent.data("this")).options.liveSearch&&($parent=$this.parent().parent()),that.options.container&&($parent=that.$menu),$items=$("[role=menu] li:not(.divider) a",$parent),!(isActive=that.$menu.parent().hasClass("open"))&&/([0-9]|[A-z])/.test(String.fromCharCode(e.keyCode))&&(that.options.container?that.$newElement.trigger("click"):(that.setSize(),that.$menu.parent().addClass("open"),isActive=that.$menu.parent().hasClass("open")),that.$searchbox.focus()),that.options.liveSearch&&(/(^9$|27)/.test(e.keyCode)&&isActive&&0===that.$menu.find(".active").length&&(e.preventDefault(),that.$menu.parent().removeClass("open"),that.$button.focus()),$items=$("[role=menu] li:not(.divider):visible",$parent),$this.val()||/(38|40)/.test(e.keyCode)||0===$items.filter(".active").length&&($items=that.$newElement.find("li").filter(":icontains("+keyCodeMap[e.keyCode]+")"))),$items.length){if(/(38|40)/.test(e.keyCode))index=$items.index($items.filter(":focus")),first=$items.parent(":not(.disabled):visible").first().index(),last=$items.parent(":not(.disabled):visible").last().index(),next=$items.eq(index).parent().nextAll(":not(.disabled):visible").eq(0).index(),prev=$items.eq(index).parent().prevAll(":not(.disabled):visible").eq(0).index(),nextPrev=$items.eq(next).parent().prevAll(":not(.disabled):visible").eq(0).index(),that.options.liveSearch&&($items.each(function(i){$(this).is(":not(.disabled)")&&$(this).data("index",i)}),index=$items.index($items.filter(".active")),first=$items.filter(":not(.disabled):visible").first().data("index"),last=$items.filter(":not(.disabled):visible").last().data("index"),next=$items.eq(index).nextAll(":not(.disabled):visible").eq(0).data("index"),prev=$items.eq(index).prevAll(":not(.disabled):visible").eq(0).data("index"),nextPrev=$items.eq(next).prevAll(":not(.disabled):visible").eq(0).data("index")),prevIndex=$this.data("prevIndex"),38==e.keyCode&&(that.options.liveSearch&&(index-=1),index!=nextPrev&&index>prev&&(index=prev),index<first&&(index=first),index==prevIndex&&(index=last)),40==e.keyCode&&(that.options.liveSearch&&(index+=1),-1==index&&(index=0),index!=nextPrev&&index<next&&(index=next),index>last&&(index=last),index==prevIndex&&(index=first)),$this.data("prevIndex",index),that.options.liveSearch?(e.preventDefault(),$this.is(".dropdown-toggle")||($items.removeClass("active"),$items.eq(index).addClass("active").find("a").focus(),$this.focus())):$items.eq(index).focus();else if(!$this.is("input")){var count,keyIndex=[];$items.each(function(){$(this).parent().is(":not(.disabled)")&&$.trim($(this).text().toLowerCase()).substring(0,1)==keyCodeMap[e.keyCode]&&keyIndex.push($(this).parent().index())}),count=$(document).data("keycount"),count++,$(document).data("keycount",count),$.trim($(":focus").text().toLowerCase()).substring(0,1)!=keyCodeMap[e.keyCode]?(count=1,$(document).data("keycount",count)):count>=keyIndex.length&&($(document).data("keycount",0),count>keyIndex.length&&(count=1)),$items.eq(keyIndex[count-1]).focus()}/(13|32|^9$)/.test(e.keyCode)&&isActive&&(/(32)/.test(e.keyCode)||e.preventDefault(),that.options.liveSearch?/(32)/.test(e.keyCode)||(that.$menu.find(".active a").click(),$this.focus()):$(":focus").click(),$(document).data("keycount",0)),(/(^9$|27)/.test(e.keyCode)&&isActive&&(that.multiple||that.options.liveSearch)||/(27)/.test(e.keyCode)&&!isActive)&&(that.$menu.parent().removeClass("open"),that.$button.focus())}},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},destroy:function(){this.$newElement.remove(),this.$element.remove()}},$.fn.selectpicker=function(option,event){var value,args=arguments,chain=this.each(function(){if($(this).is("select")){var $this=$(this),data=$this.data("selectpicker"),options="object"==typeof option&&option;if(data){if(options)for(var i in options)data.options[i]=options[i]}else $this.data("selectpicker",data=new Selectpicker(this,options,event));if("string"==typeof option){var property=option;data[property]instanceof Function?([].shift.apply(args),value=data[property].apply(data,args)):value=data.options[property]}}});return void 0!==value?value:chain},$.fn.selectpicker.defaults={style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",noneSelectedText:"Nothing selected",noneResultsText:"No results match",countSelectedText:"{0} of {1} selected",maxOptionsText:["Limit reached ({n} {var} max)","Group limit reached ({n} {var} max)",["items","item"]],width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,actionsBox:!1,multipleSeparator:", ",iconBase:"glyphicon",tickIcon:"glyphicon-ok",maxOptions:!1},$(document).data("keycount",0).on("keydown",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input",Selectpicker.prototype.keydown).on("focusin.modal",".bootstrap-select [data-toggle=dropdown], .bootstrap-select [role=menu], .bootstrap-select-searchbox input",function(e){e.stopPropagation()})}(window.jQuery);
(function(e){var d="mmenu",n="Custom";if(e[d]){return}var m={$wndw:null,$html:null,$body:null,$page:null,$blck:null,$allMenus:null,$scrollTopNode:null};var k={},g={},i={},o=0;e[d]=function(q,r,p){m.$allMenus=m.$allMenus.add(q);this.$menu=q;this.opts=r;this.conf=p;this.serialnr=o++;this._init();return this};e[d].prototype={open:function(){this._openSetup();this._openFinish();return"open"},_openSetup:function(){var q=l();this.$menu.addClass(k.current);m.$allMenus.not(this.$menu).trigger(g.close);m.$page.data(i.style,m.$page.attr("style")||"").data(i.scrollTop,q).data(i.offetLeft,m.$page.offset().left);var p=0;m.$wndw.off(g.resize).on(g.resize,function(t,s){if(s||m.$html.hasClass(k.opened)){var r=m.$wndw.width();if(r!=p){p=r;m.$page.width(r-m.$page.data(i.offetLeft))}}}).trigger(g.resize,[true]);if(this.conf.preventTabbing){m.$wndw.off(g.keydown).on(g.keydown,function(r){if(r.keyCode==9){r.preventDefault();return false}})}if(this.opts.modal){m.$html.addClass(k.modal)}if(this.opts.moveBackground){m.$html.addClass(k.background)}if(this.opts.position!="left"){m.$html.addClass(k.mm(this.opts.position))}if(this.opts.zposition!="back"){m.$html.addClass(k.mm(this.opts.zposition))}if(this.opts.classes){m.$html.addClass(this.opts.classes)}m.$html.addClass(k.opened);this.$menu.addClass(k.opened);m.$page.scrollTop(q);this.$menu.scrollTop(0)},_openFinish:function(){var p=this;a(m.$page,function(){p.$menu.trigger(g.opened)},this.conf.transitionDuration);m.$html.addClass(k.opening);this.$menu.trigger(g.opening);window.scrollTo(0,1)},close:function(){var p=this;a(m.$page,function(){p.$menu.removeClass(k.current).removeClass(k.opened);m.$html.removeClass(k.opened).removeClass(k.modal).removeClass(k.background).removeClass(k.mm(p.opts.position)).removeClass(k.mm(p.opts.zposition));if(p.opts.classes){m.$html.removeClass(p.opts.classes)}m.$wndw.off(g.resize).off(g.keydown);m.$page.attr("style",m.$page.data(i.style));if(m.$scrollTopNode){m.$scrollTopNode.scrollTop(m.$page.data(i.scrollTop))}p.$menu.trigger(g.closed)},this.conf.transitionDuration);m.$html.removeClass(k.opening);this.$menu.trigger(g.closing);return"close"},_init:function(){this.opts=b(this.opts,this.conf,this.$menu);this.direction=(this.opts.slidingSubmenus)?"horizontal":"vertical";this._initPage(m.$page);this._initMenu();this._initBlocker();this._initPanles();this._initLinks();this._initOpenClose();this._bindCustomEvents();if(e[d].addons){for(var p=0;p<e[d].addons.length;p++){if(typeof this["_addon_"+e[d].addons[p]]=="function"){this["_addon_"+e[d].addons[p]]()}}}},_bindCustomEvents:function(){var q=this;this.$menu.off(g.open+" "+g.close+" "+g.setPage+" "+g.update).on(g.open+" "+g.close+" "+g.setPage+" "+g.update,function(r){r.stopPropagation()});this.$menu.on(g.open,function(r){if(e(this).hasClass(k.current)){r.stopImmediatePropagation();return false}return q.open()}).on(g.close,function(r){if(!e(this).hasClass(k.current)){r.stopImmediatePropagation();return false}return q.close()}).on(g.setPage,function(s,r){q._initPage(r);q._initOpenClose()});var p=this.$menu.find(this.opts.isMenu&&this.direction!="horizontal"?"ul, ol":"."+k.panel);p.off(g.toggle+" "+g.open+" "+g.close).on(g.toggle+" "+g.open+" "+g.close,function(r){r.stopPropagation()});if(this.direction=="horizontal"){p.on(g.open,function(r){return f(e(this),q.$menu)})}else{p.on(g.toggle,function(r){var s=e(this);return s.triggerHandler(s.parent().hasClass(k.opened)?g.close:g.open)}).on(g.open,function(r){e(this).parent().addClass(k.opened);return"open"}).on(g.close,function(r){e(this).parent().removeClass(k.opened);return"close"})}},_initBlocker:function(){var p=this;if(!m.$blck){m.$blck=e('<div id="'+k.blocker+'" />').css("opacity",0).appendTo(m.$body)}m.$blck.off(g.touchstart).on(g.touchstart,function(q){q.preventDefault();q.stopPropagation();m.$blck.trigger(g.mousedown)}).on(g.mousedown,function(q){q.preventDefault();if(!m.$html.hasClass(k.modal)){p.$menu.trigger(g.close)}})},_initPage:function(p){if(!p){p=e("."+k.page,m.$body);if(p.length>1){e[d].debug("Multiple nodes found for the page-node, all nodes are wrapped in one <"+this.conf.pageNodetype+">.")}}m.$page=p},_initMenu:function(){var p=this;if(this.conf.clone){this.$menu=this.$menu.clone(true);this.$menu.add(this.$menu.find("*")).filter("[id]").each(function(){e(this).attr("id",k.mm(e(this).attr("id")))})}this.$menu.contents().each(function(){if(e(this)[0].nodeType==3){e(this).remove()}});this.$menu.prependTo("body").addClass(k.menu);this.$menu.addClass(k.mm(this.direction));if(this.opts.classes){this.$menu.addClass(this.opts.classes)}if(this.opts.isMenu){this.$menu.addClass(k.ismenu)}if(this.opts.position!="left"){this.$menu.addClass(k.mm(this.opts.position))}if(this.opts.zposition!="back"){this.$menu.addClass(k.mm(this.opts.zposition))}},_initPanles:function(){var u=this;this.__refactorClass(e("."+this.conf.listClass,this.$menu),"list");if(this.opts.isMenu){e("ul, ol",this.$menu).not(".mm-nolist").addClass(k.list)}var s=e("."+k.list+" > li",this.$menu);this.__refactorClass(s.filter("."+this.conf.selectedClass),"selected");this.__refactorClass(s.filter("."+this.conf.labelClass),"label");this.__refactorClass(s.filter("."+this.conf.spacerClass),"spacer");s.off(g.setSelected).on(g.setSelected,function(w,v){w.stopPropagation();s.removeClass(k.selected);if(typeof v!="boolean"){v=true}if(v){e(this).addClass(k.selected)}});this.__refactorClass(e("."+this.conf.panelClass,this.$menu),"panel");this.$menu.children().filter(this.conf.panelNodetype).add(this.$menu.find("."+k.list).children().children().filter(this.conf.panelNodetype)).addClass(k.panel);var t=e("."+k.panel,this.$menu);t.each(function(v){var x=e(this),w=x.attr("id")||k.mm("m"+u.serialnr+"-p"+v);x.attr("id",w)});t.find("."+k.panel).each(function(w){var B=e(this),A=B.is("ul, ol")?B:B.find("ul ,ol").first(),z=B.parent(),y=z.find("> a, > span"),v=z.closest("."+k.panel);B.data(i.parent,z);if(z.parent().is("."+k.list)){var x=e('<a class="'+k.subopen+' nopop" href="#'+B.attr("id")+'" />').insertBefore(y);if(!y.is("a")){x.addClass(k.fullsubopen)}if(u.direction=="horizontal"){A.prepend('<li class="'+k.subtitle+'"><a class="'+k.subclose+' nopop" href="#'+v.attr("id")+'">'+y.text()+"</a></li>")}}});var p=this.direction=="horizontal"?g.open:g.toggle;t.each(function(v){var w=e(this),x=w.attr("id");e('a[href="#'+x+'"]',u.$menu).off(g.click).on(g.click,function(y){y.preventDefault();w.trigger(p)})});if(this.direction=="horizontal"){var q=e("."+k.list+" > li."+k.selected,this.$menu);q.add(q.parents("li")).parents("li").removeClass(k.selected).end().each(function(){var w=e(this),v=w.find("> ."+k.panel);if(v.length){w.parents("."+k.panel).addClass(k.subopened);v.addClass(k.opened)}}).closest("."+k.panel).addClass(k.opened).parents("."+k.panel).addClass(k.subopened)}else{e("li."+k.selected,this.$menu).addClass(k.opened).parents("."+k.selected).removeClass(k.selected)}var r=t.filter("."+k.opened);if(!r.length){r=t.first()}r.addClass(k.opened).last().addClass(k.current);if(this.direction=="horizontal"){t.find("."+k.panel).appendTo(this.$menu)}},_initLinks:function(){var p=this;e("."+k.list+" > li > a",this.$menu).not("."+k.subopen).not("."+k.subclose).not('[rel="external"]').not('[target="_blank"]').off(g.click).on(g.click,function(s){var t=e(this),q=t.attr("href");if(p.__valueOrFn(p.opts.onClick.setSelected,t)){t.parent().trigger(g.setSelected)}var r=p.__valueOrFn(p.opts.onClick.preventDefault,t,q.slice(0,1)=="#");if(r){s.preventDefault()}if(p.__valueOrFn(p.opts.onClick.blockUI,t,!r)){m.$html.addClass(k.blocking)}if(p.__valueOrFn(p.opts.onClick.close,t,r)){p.$menu.triggerHandler(g.close)}})},_initOpenClose:function(){var p=this;var q=this.$menu.attr("id");if(q&&q.length){if(this.conf.clone){q=k.umm(q)}e('a[href="#'+q+'"]').off(g.click).on(g.click,function(r){r.preventDefault();p.$menu.trigger(g.open)})}var q=m.$page.attr("id");if(q&&q.length){e('a[href="#'+q+'"]').off(g.click).on(g.click,function(r){r.preventDefault();p.$menu.trigger(g.close)})}},__valueOrFn:function(r,p,q){if(typeof r=="function"){return r.call(p[0])}if(typeof r=="undefined"&&typeof q!="undefined"){return q}return r},__refactorClass:function(p,q){p.removeClass(this.conf[q+"Class"]).addClass(k[q])}};e.fn[d]=function(q,p){if(!m.$wndw){h()}q=b(q,p);p=j(p);return this.each(function(){var r=e(this);if(r.data(d)){return}r.data(d,new e[d](r,q,p))})};e[d].version=n;e[d].defaults={position:"left",zposition:"back",moveBackground:true,slidingSubmenus:true,modal:false,classes:"",onClick:{setSelected:true}};e[d].configuration={preventTabbing:true,panelClass:"Panel",listClass:"List",selectedClass:"Selected",labelClass:"Label",spacerClass:"Spacer",pageNodetype:"div",panelNodetype:"ul, ol, div",transitionDuration:400};(function(){var s=window.document,q=window.navigator.userAgent,t=document.createElement("div").style;var r="ontouchstart" in s,u="WebkitOverflowScrolling" in s.documentElement.style,p=(function(){if(q.indexOf("Android")>=0){return 2.4>parseFloat(q.slice(q.indexOf("Android")+8))}return false})();e[d].support={touch:r,oldAndroidBrowser:p,overflowscrolling:(function(){if(!r){return true}if(u){return true}if(p){return false}return true})()}})();e[d].useOverflowScrollingFallback=function(p){if(m.$html){if(typeof p=="boolean"){m.$html[p?"addClass":"removeClass"](k.nooverflowscrolling)}return m.$html.hasClass(k.nooverflowscrolling)}else{c=p;return p}};e[d].debug=function(p){};e[d].deprecated=function(q,p){if(typeof console!="undefined"&&typeof console.warn!="undefined"){console.warn("MMENU: "+q+" is deprecated, use "+p+" instead.")}};var c=!e[d].support.overflowscrolling;function b(r,s,q){if(typeof r!="object"){r={}}if(q){if(typeof r.isMenu!="boolean"){var p=q.children();r.isMenu=(p.length==1&&p.is(s.panelNodetype))}return r}if(typeof r.onClick!="object"){r.onClick={}}if(typeof r.onClick.setLocationHref!="undefined"){e[d].deprecated("onClick.setLocationHref option","!onClick.preventDefault");if(typeof r.onClick.setLocationHref=="boolean"){r.onClick.preventDefault=!r.onClick.setLocationHref}}r=e.extend(true,{},e[d].defaults,r);if(e[d].useOverflowScrollingFallback()){switch(r.position){case"top":case"right":case"bottom":e[d].debug('position: "'+r.position+'" not supported when using the overflowScrolling-fallback.');r.position="left";break}switch(r.zposition){case"front":case"next":e[d].debug('z-position: "'+r.zposition+'" not supported when using the overflowScrolling-fallback.');r.zposition="back";break}}return r}function j(p){if(typeof p!="object"){p={}}if(typeof p.panelNodeType!="undefined"){e[d].deprecated("panelNodeType configuration option","panelNodetype");p.panelNodetype=p.panelNodeType}p=e.extend(true,{},e[d].configuration,p);if(typeof p.pageSelector!="string"){p.pageSelector="> "+p.pageNodetype}return p}function h(){m.$wndw=e(window);m.$html=e("html");m.$body=e("body");m.$allMenus=e();e.each([k,i,g],function(p,q){q.add=function(s){s=s.split(" ");for(var r in s){q[s[r]]=q.mm(s[r])}}});k.mm=function(p){return"mm-"+p};k.add("menu ismenu panel list subtitle selected label spacer current highest hidden page blocker modal background opened opening subopened subopen fullsubopen subclose nooverflowscrolling");k.umm=function(p){if(p.slice(0,3)=="mm-"){p=p.slice(3)}return p};i.mm=function(p){return"mm-"+p};i.add("parent style scrollTop offetLeft");g.mm=function(p){return p+".mm"};g.add("toggle open opening opened close closing closed update setPage setSelected transitionend webkitTransitionEnd touchstart touchend mousedown mouseup click keydown keyup resize");e[d]._c=k;e[d]._d=i;e[d]._e=g;e[d].glbl=m;e[d].useOverflowScrollingFallback(c)}function f(s,r){if(s.hasClass(k.current)){return false}var q=e("."+k.panel,r),p=q.filter("."+k.current);q.removeClass(k.highest).removeClass(k.current).not(s).not(p).addClass(k.hidden);if(s.hasClass(k.opened)){p.addClass(k.highest).removeClass(k.opened).removeClass(k.subopened)}else{s.addClass(k.highest);p.addClass(k.subopened)}s.removeClass(k.hidden).removeClass(k.subopened).addClass(k.current).addClass(k.opened);return"open"}function l(){if(!m.$scrollTopNode){if(m.$html.scrollTop()!=0){m.$scrollTopNode=m.$html}else{if(m.$body.scrollTop()!=0){m.$scrollTopNode=m.$body}}}return(m.$scrollTopNode)?m.$scrollTopNode.scrollTop():0}function a(p,r,s){var q=false,t=function(){if(!q){r.call(p[0])}q=true};p.one(g.transitionend,t);p.one(g.webkitTransitionEnd,t);setTimeout(t,s*1.1)}})(jQuery);
!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):"undefined"!=typeof exports?module.exports=factory(require("jquery")):factory(jQuery)}(function($){"use strict";var Slick=window.Slick||{};(Slick=function(){var instanceUid=0;return function(element,settings){var dataSettings,_=this;_.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:$(element),appendDots:$(element),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(slider,i){return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},_.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},$.extend(_,_.initials),_.activeBreakpoint=null,_.animType=null,_.animProp=null,_.breakpoints=[],_.breakpointSettings=[],_.cssTransitions=!1,_.focussed=!1,_.interrupted=!1,_.hidden="hidden",_.paused=!0,_.positionProp=null,_.respondTo=null,_.rowCount=1,_.shouldClick=!0,_.$slider=$(element),_.$slidesCache=null,_.transformType=null,_.transitionType=null,_.visibilityChange="visibilitychange",_.windowWidth=0,_.windowTimer=null,dataSettings=$(element).data("slick")||{},_.options=$.extend({},_.defaults,settings,dataSettings),_.currentSlide=_.options.initialSlide,_.originalSettings=_.options,void 0!==document.mozHidden?(_.hidden="mozHidden",_.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(_.hidden="webkitHidden",_.visibilityChange="webkitvisibilitychange"),_.autoPlay=$.proxy(_.autoPlay,_),_.autoPlayClear=$.proxy(_.autoPlayClear,_),_.autoPlayIterator=$.proxy(_.autoPlayIterator,_),_.changeSlide=$.proxy(_.changeSlide,_),_.clickHandler=$.proxy(_.clickHandler,_),_.selectHandler=$.proxy(_.selectHandler,_),_.setPosition=$.proxy(_.setPosition,_),_.swipeHandler=$.proxy(_.swipeHandler,_),_.dragHandler=$.proxy(_.dragHandler,_),_.keyHandler=$.proxy(_.keyHandler,_),_.instanceUid=instanceUid++,_.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,_.registerBreakpoints(),_.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},Slick.prototype.addSlide=Slick.prototype.slickAdd=function(markup,index,addBefore){var _=this;if("boolean"==typeof index)addBefore=index,index=null;else if(index<0||index>=_.slideCount)return!1;_.unload(),"number"==typeof index?0===index&&0===_.$slides.length?$(markup).appendTo(_.$slideTrack):addBefore?$(markup).insertBefore(_.$slides.eq(index)):$(markup).insertAfter(_.$slides.eq(index)):!0===addBefore?$(markup).prependTo(_.$slideTrack):$(markup).appendTo(_.$slideTrack),_.$slides=_.$slideTrack.children(this.options.slide),_.$slideTrack.children(this.options.slide).detach(),_.$slideTrack.append(_.$slides),_.$slides.each(function(index,element){$(element).attr("data-slick-index",index)}),_.$slidesCache=_.$slides,_.reinit()},Slick.prototype.animateHeight=function(){var _=this;if(1===_.options.slidesToShow&&!0===_.options.adaptiveHeight&&!1===_.options.vertical){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(!0);_.$list.animate({height:targetHeight},_.options.speed)}},Slick.prototype.animateSlide=function(targetLeft,callback){var animProps={},_=this;_.animateHeight(),!0===_.options.rtl&&!1===_.options.vertical&&(targetLeft=-targetLeft),!1===_.transformsEnabled?!1===_.options.vertical?_.$slideTrack.animate({left:targetLeft},_.options.speed,_.options.easing,callback):_.$slideTrack.animate({top:targetLeft},_.options.speed,_.options.easing,callback):!1===_.cssTransitions?(!0===_.options.rtl&&(_.currentLeft=-_.currentLeft),$({animStart:_.currentLeft}).animate({animStart:targetLeft},{duration:_.options.speed,easing:_.options.easing,step:function(now){now=Math.ceil(now),!1===_.options.vertical?(animProps[_.animType]="translate("+now+"px, 0px)",_.$slideTrack.css(animProps)):(animProps[_.animType]="translate(0px,"+now+"px)",_.$slideTrack.css(animProps))},complete:function(){callback&&callback.call()}})):(_.applyTransition(),targetLeft=Math.ceil(targetLeft),!1===_.options.vertical?animProps[_.animType]="translate3d("+targetLeft+"px, 0px, 0px)":animProps[_.animType]="translate3d(0px,"+targetLeft+"px, 0px)",_.$slideTrack.css(animProps),callback&&setTimeout(function(){_.disableTransition(),callback.call()},_.options.speed))},Slick.prototype.getNavTarget=function(){var _=this,asNavFor=_.options.asNavFor;return asNavFor&&null!==asNavFor&&(asNavFor=$(asNavFor).not(_.$slider)),asNavFor},Slick.prototype.asNavFor=function(index){var asNavFor=this.getNavTarget();null!==asNavFor&&"object"==typeof asNavFor&&asNavFor.each(function(){var target=$(this).slick("getSlick");target.unslicked||target.slideHandler(index,!0)})},Slick.prototype.applyTransition=function(slide){var _=this,transition={};!1===_.options.fade?transition[_.transitionType]=_.transformType+" "+_.options.speed+"ms "+_.options.cssEase:transition[_.transitionType]="opacity "+_.options.speed+"ms "+_.options.cssEase,!1===_.options.fade?_.$slideTrack.css(transition):_.$slides.eq(slide).css(transition)},Slick.prototype.autoPlay=function(){var _=this;_.autoPlayClear(),_.slideCount>_.options.slidesToShow&&(_.autoPlayTimer=setInterval(_.autoPlayIterator,_.options.autoplaySpeed))},Slick.prototype.autoPlayClear=function(){var _=this;_.autoPlayTimer&&clearInterval(_.autoPlayTimer)},Slick.prototype.autoPlayIterator=function(){var _=this,slideTo=_.currentSlide+_.options.slidesToScroll;_.paused||_.interrupted||_.focussed||(!1===_.options.infinite&&(1===_.direction&&_.currentSlide+1===_.slideCount-1?_.direction=0:0===_.direction&&(slideTo=_.currentSlide-_.options.slidesToScroll,_.currentSlide-1==0&&(_.direction=1))),_.slideHandler(slideTo))},Slick.prototype.buildArrows=function(){var _=this;!0===_.options.arrows&&(_.$prevArrow=$(_.options.prevArrow).addClass("slick-arrow"),_.$nextArrow=$(_.options.nextArrow).addClass("slick-arrow"),_.slideCount>_.options.slidesToShow?(_.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),_.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),_.htmlExpr.test(_.options.prevArrow)&&_.$prevArrow.prependTo(_.options.appendArrows),_.htmlExpr.test(_.options.nextArrow)&&_.$nextArrow.appendTo(_.options.appendArrows),!0!==_.options.infinite&&_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):_.$prevArrow.add(_.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},Slick.prototype.buildDots=function(){var i,dot,_=this;if(!0===_.options.dots&&_.slideCount>_.options.slidesToShow){for(_.$slider.addClass("slick-dotted"),dot=$("<ul />").addClass(_.options.dotsClass),i=0;i<=_.getDotCount();i+=1)dot.append($("<li />").append(_.options.customPaging.call(this,_,i)));_.$dots=dot.appendTo(_.options.appendDots),_.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},Slick.prototype.buildOut=function(){var _=this;_.$slides=_.$slider.children(_.options.slide+":not(.slick-cloned)").addClass("slick-slide"),_.slideCount=_.$slides.length,_.$slides.each(function(index,element){$(element).attr("data-slick-index",index).data("originalStyling",$(element).attr("style")||"")}),_.$slider.addClass("slick-slider"),_.$slideTrack=0===_.slideCount?$('<div class="slick-track"/>').appendTo(_.$slider):_.$slides.wrapAll('<div class="slick-track"/>').parent(),_.$list=_.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),_.$slideTrack.css("opacity",0),!0!==_.options.centerMode&&!0!==_.options.swipeToSlide||(_.options.slidesToScroll=1),$("img[data-lazy]",_.$slider).not("[src]").addClass("slick-loading"),_.setupInfinite(),_.buildArrows(),_.buildDots(),_.updateDots(),_.setSlideClasses("number"==typeof _.currentSlide?_.currentSlide:0),!0===_.options.draggable&&_.$list.addClass("draggable")},Slick.prototype.buildRows=function(){var a,b,c,newSlides,numOfSlides,originalSlides,slidesPerSection,_=this;if(newSlides=document.createDocumentFragment(),originalSlides=_.$slider.children(),_.options.rows>1){for(slidesPerSection=_.options.slidesPerRow*_.options.rows,numOfSlides=Math.ceil(originalSlides.length/slidesPerSection),a=0;a<numOfSlides;a++){var slide=document.createElement("div");for(b=0;b<_.options.rows;b++){var row=document.createElement("div");for(c=0;c<_.options.slidesPerRow;c++){var target=a*slidesPerSection+(b*_.options.slidesPerRow+c);originalSlides.get(target)&&row.appendChild(originalSlides.get(target))}slide.appendChild(row)}newSlides.appendChild(slide)}_.$slider.empty().append(newSlides),_.$slider.children().children().children().css({width:100/_.options.slidesPerRow+"%",display:"inline-block"})}},Slick.prototype.checkResponsive=function(initial,forceUpdate){var breakpoint,targetBreakpoint,respondToWidth,_=this,triggerBreakpoint=!1,sliderWidth=_.$slider.width(),windowWidth=window.innerWidth||$(window).width();if("window"===_.respondTo?respondToWidth=windowWidth:"slider"===_.respondTo?respondToWidth=sliderWidth:"min"===_.respondTo&&(respondToWidth=Math.min(windowWidth,sliderWidth)),_.options.responsive&&_.options.responsive.length&&null!==_.options.responsive){targetBreakpoint=null;for(breakpoint in _.breakpoints)_.breakpoints.hasOwnProperty(breakpoint)&&(!1===_.originalSettings.mobileFirst?respondToWidth<_.breakpoints[breakpoint]&&(targetBreakpoint=_.breakpoints[breakpoint]):respondToWidth>_.breakpoints[breakpoint]&&(targetBreakpoint=_.breakpoints[breakpoint]));null!==targetBreakpoint?null!==_.activeBreakpoint?(targetBreakpoint!==_.activeBreakpoint||forceUpdate)&&(_.activeBreakpoint=targetBreakpoint,"unslick"===_.breakpointSettings[targetBreakpoint]?_.unslick(targetBreakpoint):(_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]),!0===initial&&(_.currentSlide=_.options.initialSlide),_.refresh(initial)),triggerBreakpoint=targetBreakpoint):(_.activeBreakpoint=targetBreakpoint,"unslick"===_.breakpointSettings[targetBreakpoint]?_.unslick(targetBreakpoint):(_.options=$.extend({},_.originalSettings,_.breakpointSettings[targetBreakpoint]),!0===initial&&(_.currentSlide=_.options.initialSlide),_.refresh(initial)),triggerBreakpoint=targetBreakpoint):null!==_.activeBreakpoint&&(_.activeBreakpoint=null,_.options=_.originalSettings,!0===initial&&(_.currentSlide=_.options.initialSlide),_.refresh(initial),triggerBreakpoint=targetBreakpoint),initial||!1===triggerBreakpoint||_.$slider.trigger("breakpoint",[_,triggerBreakpoint])}},Slick.prototype.changeSlide=function(event,dontAnimate){var indexOffset,slideOffset,unevenOffset,_=this,$target=$(event.currentTarget);switch($target.is("a")&&event.preventDefault(),$target.is("li")||($target=$target.closest("li")),unevenOffset=_.slideCount%_.options.slidesToScroll!=0,indexOffset=unevenOffset?0:(_.slideCount-_.currentSlide)%_.options.slidesToScroll,event.data.message){case"previous":slideOffset=0===indexOffset?_.options.slidesToScroll:_.options.slidesToShow-indexOffset,_.slideCount>_.options.slidesToShow&&_.slideHandler(_.currentSlide-slideOffset,!1,dontAnimate);break;case"next":slideOffset=0===indexOffset?_.options.slidesToScroll:indexOffset,_.slideCount>_.options.slidesToShow&&_.slideHandler(_.currentSlide+slideOffset,!1,dontAnimate);break;case"index":var index=0===event.data.index?0:event.data.index||$target.index()*_.options.slidesToScroll;_.slideHandler(_.checkNavigable(index),!1,dontAnimate),$target.children().trigger("focus");break;default:return}},Slick.prototype.checkNavigable=function(index){var navigables,prevNavigable;if(navigables=this.getNavigableIndexes(),prevNavigable=0,index>navigables[navigables.length-1])index=navigables[navigables.length-1];else for(var n in navigables){if(index<navigables[n]){index=prevNavigable;break}prevNavigable=navigables[n]}return index},Slick.prototype.cleanUpEvents=function(){var _=this;_.options.dots&&null!==_.$dots&&$("li",_.$dots).off("click.slick",_.changeSlide).off("mouseenter.slick",$.proxy(_.interrupt,_,!0)).off("mouseleave.slick",$.proxy(_.interrupt,_,!1)),_.$slider.off("focus.slick blur.slick"),!0===_.options.arrows&&_.slideCount>_.options.slidesToShow&&(_.$prevArrow&&_.$prevArrow.off("click.slick",_.changeSlide),_.$nextArrow&&_.$nextArrow.off("click.slick",_.changeSlide)),_.$list.off("touchstart.slick mousedown.slick",_.swipeHandler),_.$list.off("touchmove.slick mousemove.slick",_.swipeHandler),_.$list.off("touchend.slick mouseup.slick",_.swipeHandler),_.$list.off("touchcancel.slick mouseleave.slick",_.swipeHandler),_.$list.off("click.slick",_.clickHandler),$(document).off(_.visibilityChange,_.visibility),_.cleanUpSlideEvents(),!0===_.options.accessibility&&_.$list.off("keydown.slick",_.keyHandler),!0===_.options.focusOnSelect&&$(_.$slideTrack).children().off("click.slick",_.selectHandler),$(window).off("orientationchange.slick.slick-"+_.instanceUid,_.orientationChange),$(window).off("resize.slick.slick-"+_.instanceUid,_.resize),$("[draggable!=true]",_.$slideTrack).off("dragstart",_.preventDefault),$(window).off("load.slick.slick-"+_.instanceUid,_.setPosition),$(document).off("ready.slick.slick-"+_.instanceUid,_.setPosition)},Slick.prototype.cleanUpSlideEvents=function(){var _=this;_.$list.off("mouseenter.slick",$.proxy(_.interrupt,_,!0)),_.$list.off("mouseleave.slick",$.proxy(_.interrupt,_,!1))},Slick.prototype.cleanUpRows=function(){var originalSlides,_=this;_.options.rows>1&&((originalSlides=_.$slides.children().children()).removeAttr("style"),_.$slider.empty().append(originalSlides))},Slick.prototype.clickHandler=function(event){!1===this.shouldClick&&(event.stopImmediatePropagation(),event.stopPropagation(),event.preventDefault())},Slick.prototype.destroy=function(refresh){var _=this;_.autoPlayClear(),_.touchObject={},_.cleanUpEvents(),$(".slick-cloned",_.$slider).detach(),_.$dots&&_.$dots.remove(),_.$prevArrow&&_.$prevArrow.length&&(_.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),_.htmlExpr.test(_.options.prevArrow)&&_.$prevArrow.remove()),_.$nextArrow&&_.$nextArrow.length&&(_.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),_.htmlExpr.test(_.options.nextArrow)&&_.$nextArrow.remove()),_.$slides&&(_.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){$(this).attr("style",$(this).data("originalStyling"))}),_.$slideTrack.children(this.options.slide).detach(),_.$slideTrack.detach(),_.$list.detach(),_.$slider.append(_.$slides)),_.cleanUpRows(),_.$slider.removeClass("slick-slider"),_.$slider.removeClass("slick-initialized"),_.$slider.removeClass("slick-dotted"),_.unslicked=!0,refresh||_.$slider.trigger("destroy",[_])},Slick.prototype.disableTransition=function(slide){var _=this,transition={};transition[_.transitionType]="",!1===_.options.fade?_.$slideTrack.css(transition):_.$slides.eq(slide).css(transition)},Slick.prototype.fadeSlide=function(slideIndex,callback){var _=this;!1===_.cssTransitions?(_.$slides.eq(slideIndex).css({zIndex:_.options.zIndex}),_.$slides.eq(slideIndex).animate({opacity:1},_.options.speed,_.options.easing,callback)):(_.applyTransition(slideIndex),_.$slides.eq(slideIndex).css({opacity:1,zIndex:_.options.zIndex}),callback&&setTimeout(function(){_.disableTransition(slideIndex),callback.call()},_.options.speed))},Slick.prototype.fadeSlideOut=function(slideIndex){var _=this;!1===_.cssTransitions?_.$slides.eq(slideIndex).animate({opacity:0,zIndex:_.options.zIndex-2},_.options.speed,_.options.easing):(_.applyTransition(slideIndex),_.$slides.eq(slideIndex).css({opacity:0,zIndex:_.options.zIndex-2}))},Slick.prototype.filterSlides=Slick.prototype.slickFilter=function(filter){var _=this;null!==filter&&(_.$slidesCache=_.$slides,_.unload(),_.$slideTrack.children(this.options.slide).detach(),_.$slidesCache.filter(filter).appendTo(_.$slideTrack),_.reinit())},Slick.prototype.focusHandler=function(){var _=this;_.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(event){event.stopImmediatePropagation();var $sf=$(this);setTimeout(function(){_.options.pauseOnFocus&&(_.focussed=$sf.is(":focus"),_.autoPlay())},0)})},Slick.prototype.getCurrent=Slick.prototype.slickCurrentSlide=function(){return this.currentSlide},Slick.prototype.getDotCount=function(){var _=this,breakPoint=0,counter=0,pagerQty=0;if(!0===_.options.infinite)for(;breakPoint<_.slideCount;)++pagerQty,breakPoint=counter+_.options.slidesToScroll,counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;else if(!0===_.options.centerMode)pagerQty=_.slideCount;else if(_.options.asNavFor)for(;breakPoint<_.slideCount;)++pagerQty,breakPoint=counter+_.options.slidesToScroll,counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;else pagerQty=1+Math.ceil((_.slideCount-_.options.slidesToShow)/_.options.slidesToScroll);return pagerQty-1},Slick.prototype.getLeft=function(slideIndex){var targetLeft,verticalHeight,targetSlide,_=this,verticalOffset=0;return _.slideOffset=0,verticalHeight=_.$slides.first().outerHeight(!0),!0===_.options.infinite?(_.slideCount>_.options.slidesToShow&&(_.slideOffset=_.slideWidth*_.options.slidesToShow*-1,verticalOffset=verticalHeight*_.options.slidesToShow*-1),_.slideCount%_.options.slidesToScroll!=0&&slideIndex+_.options.slidesToScroll>_.slideCount&&_.slideCount>_.options.slidesToShow&&(slideIndex>_.slideCount?(_.slideOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*_.slideWidth*-1,verticalOffset=(_.options.slidesToShow-(slideIndex-_.slideCount))*verticalHeight*-1):(_.slideOffset=_.slideCount%_.options.slidesToScroll*_.slideWidth*-1,verticalOffset=_.slideCount%_.options.slidesToScroll*verticalHeight*-1))):slideIndex+_.options.slidesToShow>_.slideCount&&(_.slideOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*_.slideWidth,verticalOffset=(slideIndex+_.options.slidesToShow-_.slideCount)*verticalHeight),_.slideCount<=_.options.slidesToShow&&(_.slideOffset=0,verticalOffset=0),!0===_.options.centerMode&&!0===_.options.infinite?_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)-_.slideWidth:!0===_.options.centerMode&&(_.slideOffset=0,_.slideOffset+=_.slideWidth*Math.floor(_.options.slidesToShow/2)),targetLeft=!1===_.options.vertical?slideIndex*_.slideWidth*-1+_.slideOffset:slideIndex*verticalHeight*-1+verticalOffset,!0===_.options.variableWidth&&(targetSlide=_.slideCount<=_.options.slidesToShow||!1===_.options.infinite?_.$slideTrack.children(".slick-slide").eq(slideIndex):_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow),targetLeft=!0===_.options.rtl?targetSlide[0]?-1*(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width()):0:targetSlide[0]?-1*targetSlide[0].offsetLeft:0,!0===_.options.centerMode&&(targetSlide=_.slideCount<=_.options.slidesToShow||!1===_.options.infinite?_.$slideTrack.children(".slick-slide").eq(slideIndex):_.$slideTrack.children(".slick-slide").eq(slideIndex+_.options.slidesToShow+1),targetLeft=!0===_.options.rtl?targetSlide[0]?-1*(_.$slideTrack.width()-targetSlide[0].offsetLeft-targetSlide.width()):0:targetSlide[0]?-1*targetSlide[0].offsetLeft:0,targetLeft+=(_.$list.width()-targetSlide.outerWidth())/2)),targetLeft},Slick.prototype.getOption=Slick.prototype.slickGetOption=function(option){return this.options[option]},Slick.prototype.getNavigableIndexes=function(){var max,_=this,breakPoint=0,counter=0,indexes=[];for(!1===_.options.infinite?max=_.slideCount:(breakPoint=-1*_.options.slidesToScroll,counter=-1*_.options.slidesToScroll,max=2*_.slideCount);breakPoint<max;)indexes.push(breakPoint),breakPoint=counter+_.options.slidesToScroll,counter+=_.options.slidesToScroll<=_.options.slidesToShow?_.options.slidesToScroll:_.options.slidesToShow;return indexes},Slick.prototype.getSlick=function(){return this},Slick.prototype.getSlideCount=function(){var swipedSlide,centerOffset,_=this;return centerOffset=!0===_.options.centerMode?_.slideWidth*Math.floor(_.options.slidesToShow/2):0,!0===_.options.swipeToSlide?(_.$slideTrack.find(".slick-slide").each(function(index,slide){if(slide.offsetLeft-centerOffset+$(slide).outerWidth()/2>-1*_.swipeLeft)return swipedSlide=slide,!1}),Math.abs($(swipedSlide).attr("data-slick-index")-_.currentSlide)||1):_.options.slidesToScroll},Slick.prototype.goTo=Slick.prototype.slickGoTo=function(slide,dontAnimate){this.changeSlide({data:{message:"index",index:parseInt(slide)}},dontAnimate)},Slick.prototype.init=function(creation){var _=this;$(_.$slider).hasClass("slick-initialized")||($(_.$slider).addClass("slick-initialized"),_.buildRows(),_.buildOut(),_.setProps(),_.startLoad(),_.loadSlider(),_.initializeEvents(),_.updateArrows(),_.updateDots(),_.checkResponsive(!0),_.focusHandler()),creation&&_.$slider.trigger("init",[_]),!0===_.options.accessibility&&_.initADA(),_.options.autoplay&&(_.paused=!1,_.autoPlay())},Slick.prototype.initADA=function(){var _=this;_.$slides.add(_.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),_.$slideTrack.attr("role","listbox"),_.$slides.not(_.$slideTrack.find(".slick-cloned")).each(function(i){$(this).attr("role","option");var describedBySlideId=_.options.centerMode?i:Math.floor(i/_.options.slidesToShow);!0===_.options.dots&&$(this).attr("aria-describedby","slick-slide"+_.instanceUid+describedBySlideId)}),null!==_.$dots&&_.$dots.attr("role","tablist").find("li").each(function(i){$(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+_.instanceUid+i,id:"slick-slide"+_.instanceUid+i})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),_.activateADA()},Slick.prototype.initArrowEvents=function(){var _=this;!0===_.options.arrows&&_.slideCount>_.options.slidesToShow&&(_.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},_.changeSlide),_.$nextArrow.off("click.slick").on("click.slick",{message:"next"},_.changeSlide))},Slick.prototype.initDotEvents=function(){var _=this;!0===_.options.dots&&_.slideCount>_.options.slidesToShow&&$("li",_.$dots).on("click.slick",{message:"index"},_.changeSlide),!0===_.options.dots&&!0===_.options.pauseOnDotsHover&&$("li",_.$dots).on("mouseenter.slick",$.proxy(_.interrupt,_,!0)).on("mouseleave.slick",$.proxy(_.interrupt,_,!1))},Slick.prototype.initSlideEvents=function(){var _=this;_.options.pauseOnHover&&(_.$list.on("mouseenter.slick",$.proxy(_.interrupt,_,!0)),_.$list.on("mouseleave.slick",$.proxy(_.interrupt,_,!1)))},Slick.prototype.initializeEvents=function(){var _=this;_.initArrowEvents(),_.initDotEvents(),_.initSlideEvents(),_.$list.on("touchstart.slick mousedown.slick",{action:"start"},_.swipeHandler),_.$list.on("touchmove.slick mousemove.slick",{action:"move"},_.swipeHandler),_.$list.on("touchend.slick mouseup.slick",{action:"end"},_.swipeHandler),_.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},_.swipeHandler),_.$list.on("click.slick",_.clickHandler),$(document).on(_.visibilityChange,$.proxy(_.visibility,_)),!0===_.options.accessibility&&_.$list.on("keydown.slick",_.keyHandler),!0===_.options.focusOnSelect&&$(_.$slideTrack).children().on("click.slick",_.selectHandler),$(window).on("orientationchange.slick.slick-"+_.instanceUid,$.proxy(_.orientationChange,_)),$(window).on("resize.slick.slick-"+_.instanceUid,$.proxy(_.resize,_)),$("[draggable!=true]",_.$slideTrack).on("dragstart",_.preventDefault),$(window).on("load.slick.slick-"+_.instanceUid,_.setPosition),$(document).on("ready.slick.slick-"+_.instanceUid,_.setPosition)},Slick.prototype.initUI=function(){var _=this;!0===_.options.arrows&&_.slideCount>_.options.slidesToShow&&(_.$prevArrow.show(),_.$nextArrow.show()),!0===_.options.dots&&_.slideCount>_.options.slidesToShow&&_.$dots.show()},Slick.prototype.keyHandler=function(event){var _=this;event.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===event.keyCode&&!0===_.options.accessibility?_.changeSlide({data:{message:!0===_.options.rtl?"next":"previous"}}):39===event.keyCode&&!0===_.options.accessibility&&_.changeSlide({data:{message:!0===_.options.rtl?"previous":"next"}}))},Slick.prototype.lazyLoad=function(){function loadImages(imagesScope){$("img[data-lazy]",imagesScope).each(function(){var image=$(this),imageSource=$(this).attr("data-lazy"),imageToLoad=document.createElement("img");imageToLoad.onload=function(){image.animate({opacity:0},100,function(){image.attr("src",imageSource).animate({opacity:1},200,function(){image.removeAttr("data-lazy").removeClass("slick-loading")}),_.$slider.trigger("lazyLoaded",[_,image,imageSource])})},imageToLoad.onerror=function(){image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),_.$slider.trigger("lazyLoadError",[_,image,imageSource])},imageToLoad.src=imageSource})}var rangeStart,rangeEnd,_=this;!0===_.options.centerMode?!0===_.options.infinite?rangeEnd=(rangeStart=_.currentSlide+(_.options.slidesToShow/2+1))+_.options.slidesToShow+2:(rangeStart=Math.max(0,_.currentSlide-(_.options.slidesToShow/2+1)),rangeEnd=_.options.slidesToShow/2+1+2+_.currentSlide):(rangeStart=_.options.infinite?_.options.slidesToShow+_.currentSlide:_.currentSlide,rangeEnd=Math.ceil(rangeStart+_.options.slidesToShow),!0===_.options.fade&&(rangeStart>0&&rangeStart--,rangeEnd<=_.slideCount&&rangeEnd++)),loadImages(_.$slider.find(".slick-slide").slice(rangeStart,rangeEnd)),_.slideCount<=_.options.slidesToShow?loadImages(_.$slider.find(".slick-slide")):_.currentSlide>=_.slideCount-_.options.slidesToShow?loadImages(_.$slider.find(".slick-cloned").slice(0,_.options.slidesToShow)):0===_.currentSlide&&loadImages(_.$slider.find(".slick-cloned").slice(-1*_.options.slidesToShow))},Slick.prototype.loadSlider=function(){var _=this;_.setPosition(),_.$slideTrack.css({opacity:1}),_.$slider.removeClass("slick-loading"),_.initUI(),"progressive"===_.options.lazyLoad&&_.progressiveLazyLoad()},Slick.prototype.next=Slick.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},Slick.prototype.orientationChange=function(){var _=this;_.checkResponsive(),_.setPosition()},Slick.prototype.pause=Slick.prototype.slickPause=function(){var _=this;_.autoPlayClear(),_.paused=!0},Slick.prototype.play=Slick.prototype.slickPlay=function(){var _=this;_.autoPlay(),_.options.autoplay=!0,_.paused=!1,_.focussed=!1,_.interrupted=!1},Slick.prototype.postSlide=function(index){var _=this;_.unslicked||(_.$slider.trigger("afterChange",[_,index]),_.animating=!1,_.setPosition(),_.swipeLeft=null,_.options.autoplay&&_.autoPlay(),!0===_.options.accessibility&&_.initADA())},Slick.prototype.prev=Slick.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},Slick.prototype.preventDefault=function(event){event.preventDefault()},Slick.prototype.progressiveLazyLoad=function(tryCount){tryCount=tryCount||1;var image,imageSource,imageToLoad,_=this,$imgsToLoad=$("img[data-lazy]",_.$slider);$imgsToLoad.length?(image=$imgsToLoad.first(),imageSource=image.attr("data-lazy"),(imageToLoad=document.createElement("img")).onload=function(){image.attr("src",imageSource).removeAttr("data-lazy").removeClass("slick-loading"),!0===_.options.adaptiveHeight&&_.setPosition(),_.$slider.trigger("lazyLoaded",[_,image,imageSource]),_.progressiveLazyLoad()},imageToLoad.onerror=function(){tryCount<3?setTimeout(function(){_.progressiveLazyLoad(tryCount+1)},500):(image.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),_.$slider.trigger("lazyLoadError",[_,image,imageSource]),_.progressiveLazyLoad())},imageToLoad.src=imageSource):_.$slider.trigger("allImagesLoaded",[_])},Slick.prototype.refresh=function(initializing){var currentSlide,lastVisibleIndex,_=this;lastVisibleIndex=_.slideCount-_.options.slidesToShow,!_.options.infinite&&_.currentSlide>lastVisibleIndex&&(_.currentSlide=lastVisibleIndex),_.slideCount<=_.options.slidesToShow&&(_.currentSlide=0),currentSlide=_.currentSlide,_.destroy(!0),$.extend(_,_.initials,{currentSlide:currentSlide}),_.init(),initializing||_.changeSlide({data:{message:"index",index:currentSlide}},!1)},Slick.prototype.registerBreakpoints=function(){var breakpoint,currentBreakpoint,l,_=this,responsiveSettings=_.options.responsive||null;if("array"===$.type(responsiveSettings)&&responsiveSettings.length){_.respondTo=_.options.respondTo||"window";for(breakpoint in responsiveSettings)if(l=_.breakpoints.length-1,currentBreakpoint=responsiveSettings[breakpoint].breakpoint,responsiveSettings.hasOwnProperty(breakpoint)){for(;l>=0;)_.breakpoints[l]&&_.breakpoints[l]===currentBreakpoint&&_.breakpoints.splice(l,1),l--;_.breakpoints.push(currentBreakpoint),_.breakpointSettings[currentBreakpoint]=responsiveSettings[breakpoint].settings}_.breakpoints.sort(function(a,b){return _.options.mobileFirst?a-b:b-a})}},Slick.prototype.reinit=function(){var _=this;_.$slides=_.$slideTrack.children(_.options.slide).addClass("slick-slide"),_.slideCount=_.$slides.length,_.currentSlide>=_.slideCount&&0!==_.currentSlide&&(_.currentSlide=_.currentSlide-_.options.slidesToScroll),_.slideCount<=_.options.slidesToShow&&(_.currentSlide=0),_.registerBreakpoints(),_.setProps(),_.setupInfinite(),_.buildArrows(),_.updateArrows(),_.initArrowEvents(),_.buildDots(),_.updateDots(),_.initDotEvents(),_.cleanUpSlideEvents(),_.initSlideEvents(),_.checkResponsive(!1,!0),!0===_.options.focusOnSelect&&$(_.$slideTrack).children().on("click.slick",_.selectHandler),_.setSlideClasses("number"==typeof _.currentSlide?_.currentSlide:0),_.setPosition(),_.focusHandler(),_.paused=!_.options.autoplay,_.autoPlay(),_.$slider.trigger("reInit",[_])},Slick.prototype.resize=function(){var _=this;$(window).width()!==_.windowWidth&&(clearTimeout(_.windowDelay),_.windowDelay=window.setTimeout(function(){_.windowWidth=$(window).width(),_.checkResponsive(),_.unslicked||_.setPosition()},50))},Slick.prototype.removeSlide=Slick.prototype.slickRemove=function(index,removeBefore,removeAll){var _=this;if(index="boolean"==typeof index?!0===(removeBefore=index)?0:_.slideCount-1:!0===removeBefore?--index:index,_.slideCount<1||index<0||index>_.slideCount-1)return!1;_.unload(),!0===removeAll?_.$slideTrack.children().remove():_.$slideTrack.children(this.options.slide).eq(index).remove(),_.$slides=_.$slideTrack.children(this.options.slide),_.$slideTrack.children(this.options.slide).detach(),_.$slideTrack.append(_.$slides),_.$slidesCache=_.$slides,_.reinit()},Slick.prototype.setCSS=function(position){var x,y,_=this,positionProps={};!0===_.options.rtl&&(position=-position),x="left"==_.positionProp?Math.ceil(position)+"px":"0px",y="top"==_.positionProp?Math.ceil(position)+"px":"0px",positionProps[_.positionProp]=position,!1===_.transformsEnabled?_.$slideTrack.css(positionProps):(positionProps={},!1===_.cssTransitions?(positionProps[_.animType]="translate("+x+", "+y+")",_.$slideTrack.css(positionProps)):(positionProps[_.animType]="translate3d("+x+", "+y+", 0px)",_.$slideTrack.css(positionProps)))},Slick.prototype.setDimensions=function(){var _=this;!1===_.options.vertical?!0===_.options.centerMode&&_.$list.css({padding:"0px "+_.options.centerPadding}):(_.$list.height(_.$slides.first().outerHeight(!0)*_.options.slidesToShow),!0===_.options.centerMode&&_.$list.css({padding:_.options.centerPadding+" 0px"})),_.listWidth=_.$list.width(),_.listHeight=_.$list.height(),!1===_.options.vertical&&!1===_.options.variableWidth?(_.slideWidth=Math.ceil(_.listWidth/_.options.slidesToShow),_.$slideTrack.width(Math.ceil(_.slideWidth*_.$slideTrack.children(".slick-slide").length))):!0===_.options.variableWidth?_.$slideTrack.width(5e3*_.slideCount):(_.slideWidth=Math.ceil(_.listWidth),_.$slideTrack.height(Math.ceil(_.$slides.first().outerHeight(!0)*_.$slideTrack.children(".slick-slide").length)));var offset=_.$slides.first().outerWidth(!0)-_.$slides.first().width();!1===_.options.variableWidth&&_.$slideTrack.children(".slick-slide").width(_.slideWidth-offset)},Slick.prototype.setFade=function(){var targetLeft,_=this;_.$slides.each(function(index,element){targetLeft=_.slideWidth*index*-1,!0===_.options.rtl?$(element).css({position:"relative",right:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0}):$(element).css({position:"relative",left:targetLeft,top:0,zIndex:_.options.zIndex-2,opacity:0})}),_.$slides.eq(_.currentSlide).css({zIndex:_.options.zIndex-1,opacity:1})},Slick.prototype.setHeight=function(){var _=this;if(1===_.options.slidesToShow&&!0===_.options.adaptiveHeight&&!1===_.options.vertical){var targetHeight=_.$slides.eq(_.currentSlide).outerHeight(!0);_.$list.css("height",targetHeight)}},Slick.prototype.setOption=Slick.prototype.slickSetOption=function(){var l,item,option,value,type,_=this,refresh=!1;if("object"===$.type(arguments[0])?(option=arguments[0],refresh=arguments[1],type="multiple"):"string"===$.type(arguments[0])&&(option=arguments[0],value=arguments[1],refresh=arguments[2],"responsive"===arguments[0]&&"array"===$.type(arguments[1])?type="responsive":void 0!==arguments[1]&&(type="single")),"single"===type)_.options[option]=value;else if("multiple"===type)$.each(option,function(opt,val){_.options[opt]=val});else if("responsive"===type)for(item in value)if("array"!==$.type(_.options.responsive))_.options.responsive=[value[item]];else{for(l=_.options.responsive.length-1;l>=0;)_.options.responsive[l].breakpoint===value[item].breakpoint&&_.options.responsive.splice(l,1),l--;_.options.responsive.push(value[item])}refresh&&(_.unload(),_.reinit())},Slick.prototype.setPosition=function(){var _=this;_.setDimensions(),_.setHeight(),!1===_.options.fade?_.setCSS(_.getLeft(_.currentSlide)):_.setFade(),_.$slider.trigger("setPosition",[_])},Slick.prototype.setProps=function(){var _=this,bodyStyle=document.body.style;_.positionProp=!0===_.options.vertical?"top":"left","top"===_.positionProp?_.$slider.addClass("slick-vertical"):_.$slider.removeClass("slick-vertical"),void 0===bodyStyle.WebkitTransition&&void 0===bodyStyle.MozTransition&&void 0===bodyStyle.msTransition||!0===_.options.useCSS&&(_.cssTransitions=!0),_.options.fade&&("number"==typeof _.options.zIndex?_.options.zIndex<3&&(_.options.zIndex=3):_.options.zIndex=_.defaults.zIndex),void 0!==bodyStyle.OTransform&&(_.animType="OTransform",_.transformType="-o-transform",_.transitionType="OTransition",void 0===bodyStyle.perspectiveProperty&&void 0===bodyStyle.webkitPerspective&&(_.animType=!1)),void 0!==bodyStyle.MozTransform&&(_.animType="MozTransform",_.transformType="-moz-transform",_.transitionType="MozTransition",void 0===bodyStyle.perspectiveProperty&&void 0===bodyStyle.MozPerspective&&(_.animType=!1)),void 0!==bodyStyle.webkitTransform&&(_.animType="webkitTransform",_.transformType="-webkit-transform",_.transitionType="webkitTransition",void 0===bodyStyle.perspectiveProperty&&void 0===bodyStyle.webkitPerspective&&(_.animType=!1)),void 0!==bodyStyle.msTransform&&(_.animType="msTransform",_.transformType="-ms-transform",_.transitionType="msTransition",void 0===bodyStyle.msTransform&&(_.animType=!1)),void 0!==bodyStyle.transform&&!1!==_.animType&&(_.animType="transform",_.transformType="transform",_.transitionType="transition"),_.transformsEnabled=_.options.useTransform&&null!==_.animType&&!1!==_.animType},Slick.prototype.setSlideClasses=function(index){var centerOffset,allSlides,indexOffset,remainder,_=this;allSlides=_.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),_.$slides.eq(index).addClass("slick-current"),!0===_.options.centerMode?(centerOffset=Math.floor(_.options.slidesToShow/2),!0===_.options.infinite&&(index>=centerOffset&&index<=_.slideCount-1-centerOffset?_.$slides.slice(index-centerOffset,index+centerOffset+1).addClass("slick-active").attr("aria-hidden","false"):(indexOffset=_.options.slidesToShow+index,allSlides.slice(indexOffset-centerOffset+1,indexOffset+centerOffset+2).addClass("slick-active").attr("aria-hidden","false")),0===index?allSlides.eq(allSlides.length-1-_.options.slidesToShow).addClass("slick-center"):index===_.slideCount-1&&allSlides.eq(_.options.slidesToShow).addClass("slick-center")),_.$slides.eq(index).addClass("slick-center")):index>=0&&index<=_.slideCount-_.options.slidesToShow?_.$slides.slice(index,index+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):allSlides.length<=_.options.slidesToShow?allSlides.addClass("slick-active").attr("aria-hidden","false"):(remainder=_.slideCount%_.options.slidesToShow,indexOffset=!0===_.options.infinite?_.options.slidesToShow+index:index,_.options.slidesToShow==_.options.slidesToScroll&&_.slideCount-index<_.options.slidesToShow?allSlides.slice(indexOffset-(_.options.slidesToShow-remainder),indexOffset+remainder).addClass("slick-active").attr("aria-hidden","false"):allSlides.slice(indexOffset,indexOffset+_.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===_.options.lazyLoad&&_.lazyLoad()},Slick.prototype.setupInfinite=function(){var i,slideIndex,infiniteCount,_=this;if(!0===_.options.fade&&(_.options.centerMode=!1),!0===_.options.infinite&&!1===_.options.fade&&(slideIndex=null,_.slideCount>_.options.slidesToShow)){for(infiniteCount=!0===_.options.centerMode?_.options.slidesToShow+1:_.options.slidesToShow,i=_.slideCount;i>_.slideCount-infiniteCount;i-=1)slideIndex=i-1,$(_.$slides[slideIndex]).clone(!0).attr("id","").attr("data-slick-index",slideIndex-_.slideCount).prependTo(_.$slideTrack).addClass("slick-cloned");for(i=0;i<infiniteCount;i+=1)slideIndex=i,$(_.$slides[slideIndex]).clone(!0).attr("id","").attr("data-slick-index",slideIndex+_.slideCount).appendTo(_.$slideTrack).addClass("slick-cloned");_.$slideTrack.find(".slick-cloned").find("[id]").each(function(){$(this).attr("id","")})}},Slick.prototype.interrupt=function(toggle){var _=this;toggle||_.autoPlay(),_.interrupted=toggle},Slick.prototype.selectHandler=function(event){var _=this,targetElement=$(event.target).is(".slick-slide")?$(event.target):$(event.target).parents(".slick-slide"),index=parseInt(targetElement.attr("data-slick-index"));if(index||(index=0),_.slideCount<=_.options.slidesToShow)return _.setSlideClasses(index),void _.asNavFor(index);_.slideHandler(index)},Slick.prototype.slideHandler=function(index,sync,dontAnimate){var targetSlide,animSlide,oldSlide,slideLeft,navTarget,targetLeft=null,_=this;if(sync=sync||!1,(!0!==_.animating||!0!==_.options.waitForAnimate)&&!(!0===_.options.fade&&_.currentSlide===index||_.slideCount<=_.options.slidesToShow))if(!1===sync&&_.asNavFor(index),targetSlide=index,targetLeft=_.getLeft(targetSlide),slideLeft=_.getLeft(_.currentSlide),_.currentLeft=null===_.swipeLeft?slideLeft:_.swipeLeft,!1===_.options.infinite&&!1===_.options.centerMode&&(index<0||index>_.getDotCount()*_.options.slidesToScroll))!1===_.options.fade&&(targetSlide=_.currentSlide,!0!==dontAnimate?_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)}):_.postSlide(targetSlide));else if(!1===_.options.infinite&&!0===_.options.centerMode&&(index<0||index>_.slideCount-_.options.slidesToScroll))!1===_.options.fade&&(targetSlide=_.currentSlide,!0!==dontAnimate?_.animateSlide(slideLeft,function(){_.postSlide(targetSlide)}):_.postSlide(targetSlide));else{if(_.options.autoplay&&clearInterval(_.autoPlayTimer),animSlide=targetSlide<0?_.slideCount%_.options.slidesToScroll!=0?_.slideCount-_.slideCount%_.options.slidesToScroll:_.slideCount+targetSlide:targetSlide>=_.slideCount?_.slideCount%_.options.slidesToScroll!=0?0:targetSlide-_.slideCount:targetSlide,_.animating=!0,_.$slider.trigger("beforeChange",[_,_.currentSlide,animSlide]),oldSlide=_.currentSlide,_.currentSlide=animSlide,_.setSlideClasses(_.currentSlide),_.options.asNavFor&&(navTarget=(navTarget=_.getNavTarget()).slick("getSlick")).slideCount<=navTarget.options.slidesToShow&&navTarget.setSlideClasses(_.currentSlide),_.updateDots(),_.updateArrows(),!0===_.options.fade)return!0!==dontAnimate?(_.fadeSlideOut(oldSlide),_.fadeSlide(animSlide,function(){_.postSlide(animSlide)})):_.postSlide(animSlide),void _.animateHeight();!0!==dontAnimate?_.animateSlide(targetLeft,function(){_.postSlide(animSlide)}):_.postSlide(animSlide)}},Slick.prototype.startLoad=function(){var _=this;!0===_.options.arrows&&_.slideCount>_.options.slidesToShow&&(_.$prevArrow.hide(),_.$nextArrow.hide()),!0===_.options.dots&&_.slideCount>_.options.slidesToShow&&_.$dots.hide(),_.$slider.addClass("slick-loading")},Slick.prototype.swipeDirection=function(){var xDist,yDist,r,swipeAngle,_=this;return xDist=_.touchObject.startX-_.touchObject.curX,yDist=_.touchObject.startY-_.touchObject.curY,r=Math.atan2(yDist,xDist),(swipeAngle=Math.round(180*r/Math.PI))<0&&(swipeAngle=360-Math.abs(swipeAngle)),swipeAngle<=45&&swipeAngle>=0?!1===_.options.rtl?"left":"right":swipeAngle<=360&&swipeAngle>=315?!1===_.options.rtl?"left":"right":swipeAngle>=135&&swipeAngle<=225?!1===_.options.rtl?"right":"left":!0===_.options.verticalSwiping?swipeAngle>=35&&swipeAngle<=135?"down":"up":"vertical"},Slick.prototype.swipeEnd=function(event){var slideCount,direction,_=this;if(_.dragging=!1,_.interrupted=!1,_.shouldClick=!(_.touchObject.swipeLength>10),void 0===_.touchObject.curX)return!1;if(!0===_.touchObject.edgeHit&&_.$slider.trigger("edge",[_,_.swipeDirection()]),_.touchObject.swipeLength>=_.touchObject.minSwipe){switch(direction=_.swipeDirection()){case"left":case"down":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide+_.getSlideCount()):_.currentSlide+_.getSlideCount(),_.currentDirection=0;break;case"right":case"up":slideCount=_.options.swipeToSlide?_.checkNavigable(_.currentSlide-_.getSlideCount()):_.currentSlide-_.getSlideCount(),_.currentDirection=1}"vertical"!=direction&&(_.slideHandler(slideCount),_.touchObject={},_.$slider.trigger("swipe",[_,direction]))}else _.touchObject.startX!==_.touchObject.curX&&(_.slideHandler(_.currentSlide),_.touchObject={})},Slick.prototype.swipeHandler=function(event){var _=this;if(!(!1===_.options.swipe||"ontouchend"in document&&!1===_.options.swipe||!1===_.options.draggable&&-1!==event.type.indexOf("mouse")))switch(_.touchObject.fingerCount=event.originalEvent&&void 0!==event.originalEvent.touches?event.originalEvent.touches.length:1,_.touchObject.minSwipe=_.listWidth/_.options.touchThreshold,!0===_.options.verticalSwiping&&(_.touchObject.minSwipe=_.listHeight/_.options.touchThreshold),event.data.action){case"start":_.swipeStart(event);break;case"move":_.swipeMove(event);break;case"end":_.swipeEnd(event)}},Slick.prototype.swipeMove=function(event){var curLeft,swipeDirection,swipeLength,positionOffset,touches,_=this;return touches=void 0!==event.originalEvent?event.originalEvent.touches:null,!(!_.dragging||touches&&1!==touches.length)&&(curLeft=_.getLeft(_.currentSlide),_.touchObject.curX=void 0!==touches?touches[0].pageX:event.clientX,_.touchObject.curY=void 0!==touches?touches[0].pageY:event.clientY,_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curX-_.touchObject.startX,2))),!0===_.options.verticalSwiping&&(_.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(_.touchObject.curY-_.touchObject.startY,2)))),"vertical"!==(swipeDirection=_.swipeDirection())?(void 0!==event.originalEvent&&_.touchObject.swipeLength>4&&event.preventDefault(),positionOffset=(!1===_.options.rtl?1:-1)*(_.touchObject.curX>_.touchObject.startX?1:-1),!0===_.options.verticalSwiping&&(positionOffset=_.touchObject.curY>_.touchObject.startY?1:-1),swipeLength=_.touchObject.swipeLength,_.touchObject.edgeHit=!1,!1===_.options.infinite&&(0===_.currentSlide&&"right"===swipeDirection||_.currentSlide>=_.getDotCount()&&"left"===swipeDirection)&&(swipeLength=_.touchObject.swipeLength*_.options.edgeFriction,_.touchObject.edgeHit=!0),!1===_.options.vertical?_.swipeLeft=curLeft+swipeLength*positionOffset:_.swipeLeft=curLeft+swipeLength*(_.$list.height()/_.listWidth)*positionOffset,!0===_.options.verticalSwiping&&(_.swipeLeft=curLeft+swipeLength*positionOffset),!0!==_.options.fade&&!1!==_.options.touchMove&&(!0===_.animating?(_.swipeLeft=null,!1):void _.setCSS(_.swipeLeft))):void 0)},Slick.prototype.swipeStart=function(event){var touches,_=this;if(_.interrupted=!0,1!==_.touchObject.fingerCount||_.slideCount<=_.options.slidesToShow)return _.touchObject={},!1;void 0!==event.originalEvent&&void 0!==event.originalEvent.touches&&(touches=event.originalEvent.touches[0]),_.touchObject.startX=_.touchObject.curX=void 0!==touches?touches.pageX:event.clientX,_.touchObject.startY=_.touchObject.curY=void 0!==touches?touches.pageY:event.clientY,_.dragging=!0},Slick.prototype.unfilterSlides=Slick.prototype.slickUnfilter=function(){var _=this;null!==_.$slidesCache&&(_.unload(),_.$slideTrack.children(this.options.slide).detach(),_.$slidesCache.appendTo(_.$slideTrack),_.reinit())},Slick.prototype.unload=function(){var _=this;$(".slick-cloned",_.$slider).remove(),_.$dots&&_.$dots.remove(),_.$prevArrow&&_.htmlExpr.test(_.options.prevArrow)&&_.$prevArrow.remove(),_.$nextArrow&&_.htmlExpr.test(_.options.nextArrow)&&_.$nextArrow.remove(),_.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},Slick.prototype.unslick=function(fromBreakpoint){var _=this;_.$slider.trigger("unslick",[_,fromBreakpoint]),_.destroy()},Slick.prototype.updateArrows=function(){var _=this;Math.floor(_.options.slidesToShow/2),!0===_.options.arrows&&_.slideCount>_.options.slidesToShow&&!_.options.infinite&&(_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===_.currentSlide?(_.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),_.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):_.currentSlide>=_.slideCount-_.options.slidesToShow&&!1===_.options.centerMode?(_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):_.currentSlide>=_.slideCount-1&&!0===_.options.centerMode&&(_.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),_.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},Slick.prototype.updateDots=function(){var _=this;null!==_.$dots&&(_.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),_.$dots.find("li").eq(Math.floor(_.currentSlide/_.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},Slick.prototype.visibility=function(){var _=this;_.options.autoplay&&(document[_.hidden]?_.interrupted=!0:_.interrupted=!1)},$.fn.slick=function(){var i,ret,_=this,opt=arguments[0],args=Array.prototype.slice.call(arguments,1),l=_.length;for(i=0;i<l;i++)if("object"==typeof opt||void 0===opt?_[i].slick=new Slick(_[i],opt):ret=_[i].slick[opt].apply(_[i].slick,args),void 0!==ret)return ret;return _}});
var AjaxUIHelper = (function() {

    var routes = [];

    function addRoute(pattern, startFn, completeFn) {
        routes.push([pattern, startFn, completeFn]);
    }

    function getRequestRoute(url) {
        for (var i = 0; i < routes.length; i++) {
            var pattern = new RegExp(routes[i][0], 'i');
            if (pattern.test(url)) {
                return i;
            }
        }
        return -1;
    }

    function bind() {
        var currentRequests = {};
        $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
            var route = getRequestRoute(options.url);
            if (currentRequests[options.url] && route !== -1) {
                currentRequests[options.url].abort();
            }
            currentRequests[options.url] = jqXHR;
        });

        $(document).ajaxSend(function(event, xhr, settings) {
            var route = getRequestRoute(settings.url);
            if (route !== -1) {
                routes[route][1].call(event, xhr, settings);
            }
        });
        $(document).ajaxComplete(function(event, xhr, settings) {
            var route = getRequestRoute(settings.url);
            if (route !== -1) {
                routes[route][2].call(event, xhr, settings);
            }
        });
    }

    return {
        addRoute: addRoute,
        bind: bind
    };

})();

$(function() {
    /**
     * Loading animation for login modal
     */
    AjaxUIHelper.addRoute('\/(login|password)', function() {
        $('.modal-content').prepend('<div class="modal-loading"></div>');
    }, function() {
        $('.modal-loading').remove();
    });

    /**
     * Animation for profile tabs
     */

    var profileMenu = $('.profile-menu');
    AjaxUIHelper.addRoute('\/(.*)\/(content)\/(.*)', function() {
        $(profileMenu.selector).find('.active').addClass('loading-animation');
    }, function() {
        $(profileMenu.selector).find('.loading-animation').removeClass('loading-animation');
    });
    AjaxUIHelper.addRoute('\/(.*)\/(leftSideBar)\/(.*)', function() {
    }, function() {
    });

    AjaxUIHelper.bind();

    /**
     * Modals loading animation
     */
    function getActiveModal() {
        return ($('#PrimaryDialogContainer').length ? $('#PrimaryDialogContainer') : $('#modalLayout'));
    }

    AjaxUIHelper.addRoute('(type=modal|features|\/gold)|(\/(.*)\/(give)\/(.*))', function(response, settings) {
        if (settings.url !== '/checkout/tokens?type=modal') {
            getActiveModal().addClass('loading-animation');
        }
    }, function(response, settings) {
        if (settings.url !== '/checkout/tokens?type=modal') {
            if (/\/gold/.test(settings.url)) {
                if (typeof setPrice !== 'undefined') {
                    setPrice();
                }
            }
            getActiveModal().removeClass('loading-animation');
        }
    });
});

$(function() {
    if (Campaigns && Campaigns.activeCampaigns && Campaigns.activeCampaigns[0].assets) {
        setupCampaignBanner(Campaigns.activeCampaigns[0].assets);
    }
});

$(function() {
    var isMobileCamPage = !!document.getElementById('camPaneBig')
        && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    var isDesktopCamPage = window.innerWidth > 727 && !!document.getElementById('camPaneBig');
    var hasPurchases = Cam4User.xtra && Cam4User.xtra.hasPurchases;
    var basicUser = Cam4User.accessLevel <= 10 && !Cam4User.isUserInStudio;
    var isGoldUser = Cam4User.accessLevel && Cam4User.accessLevel > 10;
    var isMalePerformer = Cam4Performer.statusModel.gender === "male";
    var tokenOfferModal = $('#free-token-offer');
    var tokenOfferModalDesktop = $('#free-token-offer-desktop');
    var buyTokensOfferBtn = $('#free-token-offer-btn');
    var buyTokensOfferBtnDefault = $('#free-token-offer-btn-default');
    var buyTokensOfferBtnDesktop = $('#free-token-offer-btn-desktop');
    var showCampaignModal = Campaigns && Campaigns.activeCampaignName;
    var closeBtn = tokenOfferModal ? tokenOfferModal.find('.close') : null;
    var accountAge = Cam4User.creationTimestamp ? (new Date().getTime() - Cam4User.creationTimestamp * 1) / (3600 * 24000) : 0;
    var mobilePopCookieName = Campaigns ? Campaigns.activeCampaignName +'_overlay_cookie' : '';
    var overlayShown = !!Cam4Cookies.getCookie(mobilePopCookieName);
    var happyHrActive = Campaigns && Campaigns.activeCampaignName === 'HAPPY_HOUR';
    var canShowCampaignModal = happyHrActive ? !overlayShown && (Math.floor(accountAge) > 14) && !hasPurchases : !overlayShown;

    // campaign token offer modal
    if (showCampaignModal && isMobileCamPage && canShowCampaignModal && !!tokenOfferModal) {
        var content = tokenOfferModal.find('.hidden');
        var campaignAssets = Campaigns.activeCampaigns && Campaigns.activeCampaigns[0].assets && Campaigns.activeCampaigns[0].assets.mobileOverlay;
        var background, title, titlePlaceholders, text, textPlaceholders, hasBoldText, customTextColor;

        if (campaignAssets) {
            text = campaignAssets.text;
            textPlaceholders = campaignAssets.textPlaceholders;
            title = campaignAssets.title;
            titlePlaceholders = campaignAssets.titlePlaceholders;
            background = campaignAssets.backgroundImg;
            hasBoldText = campaignAssets.boldText;
            customTextColor = campaignAssets.textColor;

            if (textPlaceholders) {
                text = fillInPlaceholders(text, textPlaceholders);
            }

            if (titlePlaceholders) {
                title = fillInPlaceholders(title, titlePlaceholders);
            }

            content.find('h3').text(title);
            content.find('p').text(text);
            content.css({ 'background-image': 'url("'+ background +'")' });

            content.removeClass('hidden').addClass('campaignOverlay');

            if (hasBoldText) {
                content.addClass('boldText');
            }

            if (customTextColor) {
                content.css({'color': customTextColor });
            }

            setTimeout(function(){
                tokenOfferModal.modal('show');
                var expireDate = new Date();
                expireDate.setDate(expireDate.getDate() + 7);
                Cam4Cookies.setCookie(mobilePopCookieName, true, expireDate, '', '.' + DomainName);
            }, 300000);
        }
    }

    // basic token offer modal
    if (!showCampaignModal && isMobileCamPage && !hasPurchases && !!tokenOfferModal && basicUser) {
        buyTokensOfferBtnDefault.removeClass('hidden');
        var className2 = isMalePerformer ? 'male' : 'female';
        if (className2 === 'male') {
            className2 += getRandomInt(1, 5);
        } else {
            className2 += getRandomInt(1, 6);
        }
        buyTokensOfferBtnDefault.removeClass().addClass(className2);

        buyTokensOfferBtnDefault.click(function(e) {
            killTokenOfferModalMobile(e);
        });

        setTimeout(function(){
            tokenOfferModal.modal('show');
        }, 150000);
    }

    if (isDesktopCamPage && !!tokenOfferModalDesktop && ControlledFeatures.ON_CAM_OFFER) {
        var className = isMalePerformer ? 'male' : 'female';
        if (className === 'male') {
            className += getRandomInt(1, 5);
        } else {
            className += getRandomInt(1, 6);
        }
        buyTokensOfferBtnDesktop.removeClass().addClass(className);

        setTimeout(function(){
            tokenOfferModalDesktop.modal('show');
        }, 200000);
    }

    buyTokensOfferBtn.click(function(e) {
        killTokenOfferModalMobile(e);
    });

    buyTokensOfferBtnDesktop.click(function(e) {
        e.preventDefault();
        tokenOfferModalDesktop.modal('hide');
        setTimeout(function() {
            TipFactory.popTokens();
        }, 500);
    });

    function killTokenOfferModalMobile (event) {
        event.preventDefault();
        tokenOfferModal.modal('hide');
        setTimeout(function() {
            TipFactory.popTokens();
        }, 500);
    }

    if (closeBtn) {
        closeBtn.on('click', function() {
            tokenOfferModal.modal('hide');
        });
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function fillInPlaceholders(string, placeholderArray) {
    placeholderArray.forEach(function(item, index){
        string = string.replace('{'+index+'}', item);
    });
    return string;
}

function setupCampaignBanner(activeCampaignAssets) {
    var tokensModalAssets = activeCampaignAssets.buyTokensModal,
        title = tokensModalAssets?.title,
        titlePlaceholders = tokensModalAssets?.titlePlaceholders,
        subtitle = tokensModalAssets?.subtitle,
        subtitlePlaceholders = tokensModalAssets?.subtitlePlaceholders,
        fallbackTitle = tokensModalAssets?.fallbackTitle,
        fallbackTitlePlaceholders = tokensModalAssets?.fallbackTitlePlaceholders,
        hasBoldText = tokensModalAssets?.boldText,
        bannerContainer = $('#epayContainer').find('.inner-content'),
        customTextColor = tokensModalAssets?.textColor;

    if (titlePlaceholders) {
        title = fillInPlaceholders(title, titlePlaceholders);
    }

    if (subtitlePlaceholders) {
        subtitle = fillInPlaceholders(subtitle, subtitlePlaceholders);
    }

    if (fallbackTitlePlaceholders) {
        fallbackTitle = fillInPlaceholders(fallbackTitle, fallbackTitlePlaceholders);
    }

    if (title) {
        if (fallbackTitle && Campaigns.activeCampaigns.length > 1) {
            bannerContainer.find('.title').html(fallbackTitle);
        } else {
            bannerContainer.find('.title').html(title);
        }
    }

    if (subtitle) {
        bannerContainer.find('.subtitle').html(subtitle);
    }

    if (hasBoldText) {
        bannerContainer.parent().addClass('boldText');
    }

    if (customTextColor) {
        bannerContainer.parent().css({'color': customTextColor });
    }
}

var shouldOpenPopUnderTrick = false;

function popUnderTrickActivated() {
    return !(!shouldOpenPopUnderTrick);
}

var ProfileManager = (function() {
    var username = Cam4User.performerName,
            callbackBefore = [],
            callbackAfter = [],
            requestPath = {
        sidebar: {
            home: '/' + username + '/leftSideBar/home',
            gifts: '/' + username + '/leftSidebar/gifts'
        },
        content: {
            home: '/' + username + '/content/home',
            chat: '/' + username + '/content/wall',
            shows: '/' + username + '/content/shows',
            gifts: '/' + username + '/content/gifts',
            gallery: '/' + username + '/content/gallery'
        }
    },
    activeRequests = {},
            wrapper = $('.fakeWrapInner'),
            menuTabSelected;

    var templatePart = {
        leftSidebar: $('#profile-left-col'),
        content: $('#profile-right-col'),
        buttons: $('.profile-menu li, #giftShelfWrap'),
        mobileSelect: $('.profile-menu select')
    };

    function onTabChangeBefore(fn, once) {
        var callback = {
            callback: fn,
            applyOnce: once
        };
        callbackBefore.push(callback);
    }

    function onTabChangeAfter(fn, once) {
        var callback = {
            callback: fn,
            applyOnce: once
        };
        callbackAfter.push(callback);
    }
    function requestTemplatePart(partName) {
        var ajaxUrl,
                type = 'content';
        switch (partName) {
            case 'homeSidebar':
                ajaxUrl = requestPath.sidebar.home;
                type = 'sidebar';
                break;
            case 'giftsSidebar':
                ajaxUrl = requestPath.sidebar.gifts;
                type = 'sidebar';
                break;
            case 'homeContent':
                ajaxUrl = requestPath.content.home;
                type = 'content';
                menuTabSelected = $('.horz-nav [data-content="home"]');
                break;
            case 'chatContent':
                ajaxUrl = requestPath.content.chat;
                type = 'content';
                menuTabSelected = $('.horz-nav [data-content="chat"]');
                break;
            case 'showsContent':
                ajaxUrl = requestPath.content.shows;
                type = 'content';
                menuTabSelected = $('.horz-nav [data-content="shows"]');
                break;
            case 'giftsContent':
                ajaxUrl = requestPath.content.gifts;
                type = 'content';
                menuTabSelected = $('.horz-nav [data-content="gifts"]');
                break;
            case 'galleryContent':
                ajaxUrl = requestPath.content.gallery;
                type = 'content';
                menuTabSelected = $('.horz-nav [data-content="gallery"]');
                break;
            case 'myshopContent':
                type = 'content';
                menuTabSelected = $('.horz-nav [data-content="myshop"]');
                break;
            default:
                ajaxUrl = requestPath.content.home;
                break;
        }
        var requestsParams = {
            url: ajaxUrl,
            type: 'GET',
            data: {useResponsive: 'true'},
            dataType: 'html'
        };

        if (type == 'sidebar') {
            activeRequests.sidebar = $.ajax(requestsParams);
        } else {
            if (partName == 'myshopContent') {
                setMarketplaceContent();
                return;
            }
            activeRequests.content = $.ajax(requestsParams);
        }
    }
    function setMarketplaceContent() {
        var wrapper = document.getElementById('profile-right-col');
        var shop = document.createElement('div');
        var initialDisplay = 9,
            showHeader = false;
        shop.className = 'leftContentSide col-xs-12 col-lg-8';
        shop.innerHTML = '<div id="marketplaceProfile"></div>';
        wrapper.innerHTML = '';
        wrapper.appendChild(shop);
        window.initMarketplaceProfile(showHeader, initialDisplay);
    }
    function setSidebar(content) {
        templatePart.leftSidebar.html(content);
    }
    function setContent(content) {
        templatePart.content.html(content);
    }
    function parseContent(part, content) {
        var finalContent;
        if (part == 'chatContent') {
            finalContent = $(content).html();
        } else if (part == 'showsContent') {
            finalContent = $(content).filter('#profile-right-col').html();
        } else {
            finalContent = content;
        }
        return finalContent;
    }
    function getTabParts(button) {
        var parts = {
            sidebar: null,
            content: null,
            activeType: null
        };
        if (!button.is('a')) {
            button = button.find('a:eq(0)');
        }
        if (button.data('sidebar')) {
            parts.sidebar = button.data('sidebar') + 'Sidebar';
            requestTemplatePart(parts.sidebar);
            parts.activeType = 'sidebar';
        }
        if (button.data('content')) {
            parts.content = button.data('content') + 'Content';
            requestTemplatePart(parts.content);
            parts.activeType = 'content';
        }
        return parts;
    }
    function setTemplatePart(partName, location, isMyShop) {
        $.when(activeRequests.sidebar, activeRequests.content)
                .then(function(sidebarResponse, contentResponse) {
            if (callbackBefore.length != 0) {
                for (var i = 0; i < callbackBefore.length; i++) {
                    callbackBefore[i].callback.apply(this,
                            [partName, location, sidebarResponse, contentResponse]);
                    if (callbackBefore[i].applyOnce == true) {
                        callbackBefore[i] = {
                            callback: function() {
                            },
                            applyOnce: false
                        };
                    }
                }
            }
            if (sidebarResponse && 0 in sidebarResponse && 1 in sidebarResponse) {
                if (sidebarResponse[1] == 'success') {
                    setSidebar(sidebarResponse[0]);
                }
            }
            if (contentResponse && 0 in contentResponse && 1 in contentResponse) {
                if (contentResponse[1] == 'success') {
                    //Don't set content for myshop
                    if (!isMyShop) {
                        setContent(parseContent(partName, contentResponse[0]));
                    }
                }
            }
            if (callbackAfter.length != 0) {
                for (var i = 0; i < callbackAfter.length; i++) {
                    callbackAfter[i].callback.apply(this,
                            [partName, location, sidebarResponse, contentResponse]);
                    if (callbackAfter[i].applyOnce == true) {
                        callbackAfter[i] = {
                            callback: function() {
                            },
                            applyOnce: false
                        };
                    }
                }
            }
        });
    }
    function updateUrl(url) {
        if (window.history.pushState && window.history.replaceState) {
            window.history.replaceState({}, '', url);
        } else {
            window.location = url;
        }
    }

    function getWrapperClass(page) {
        var newClass = 'responsiveHomeTab';

        switch (page) {
            case 'homeContent':
                newClass = 'responsiveHomeTab';
                break;
            case 'showsContent':
                newClass = 'responsiveShowsTab';
                break;
            case 'giftsContent':
                newClass = 'responsiveGiftsTab';
                break;
            case 'chatContent':
                newClass = 'responsiveWallTab';
                break;
            case 'galleryContent':
                newClass = 'responsiveGalleryTab';
                break;
            case 'myshopContent':
                newClass = 'responsiveVideosTab';
                break;
            default:
                newClass = 'responsiveHomeTab';
        }
        return 'fakeWrapInner ' + newClass;
    }

    function updateWrapperClass(page) {
        wrapper.attr('class', getWrapperClass(page));
    }
    function bindEvents() {
        $('.loadInternalSections').on('click', function(event) {
            var content = $(this).attr('data-content');
            templatePart.buttons.find('[data-content="' + content + '"]').addClass('nopop').trigger('click');
            if (!Cam4User.isLoggedIn &&
                !Cam4User.isLoggedInAsGuest) {
                LoginModals.activateLoginModal();
            }
            event.preventDefault();
        });

        templatePart.buttons.find('a').on('click', function(event) {
            var buttonParts = getTabParts($(this)),
                    href;
            /**
             *   This is used for elements that use the tabs identifiers but are not anchors
             */
            if (!$(this).hasClass('registerModal')) {
                if ($(this).is('a')) {
                    href = $(this).attr('href');
                } else {
                    href = $(this).find('a').attr('href');
                }

                if (typeof href === 'undefined') {
                    return false;
                } else if (href.search('gifts') !== -1) {
                    if (!Cam4User.isLoggedIn && !Cam4User.isLoggedInAsGuest) {
                        event.preventDefault();
                        Utils.decideOffer();
                        return;
                    }
                } else if (window.location.href.indexOf('/myshop') !== -1 && href.indexOf('/myshop') !== -1) {
                    var url = window.location.href;
                    var myshopUri = '/myshop/';
                    if (url.indexOf(myshopUri) !== -1) {
                        var videoId = url.substring(url.lastIndexOf(myshopUri) + myshopUri.length - 1, url.length);
                        href = href.concat(videoId);
                    }
                }
                var directoryHeader = $j('head'),
                    directoryCanonicalLink = directoryHeader.find('[rel="canonical"]');
                if (directoryCanonicalLink.length) {
                    $j('[rel="canonical"]').attr('href', window.location.protocol + "//" + document.domain + href.toLowerCase());
                } else {
                    directoryHeader.append($j('<link>', {
                        'rel': 'canonical',
                        'href': window.location.protocol + "//" + document.domain + href.toLowerCase()
                    }));
                }
                onTabChangeBefore(function() {
                    updateUrl(href);
                    updateWrapperClass(buttonParts.content);
                    setAsActive();
                }, true);

                var isMyShop = $(this).find('#myShopTab').length || $(this).attr('id') === 'myShopTab';

                setTemplatePart(buttonParts.content, buttonParts.activeType, isMyShop);
            }

            if (!popUnderTrickActivated()) {
                event.preventDefault();
            }
        });

        $('#openMyShopTab').on('click', function (event) {
            event.preventDefault();
            var topVaue;

            if ($(".desktopView").length > 0) {
                // desktop
                // $("#stickyHeader") becomes fixed and we need to decrease it's height twice
                topValue = $("#profileTabMenu").offset().top - 2 * $("#stickyHeader").height();
                $('#myShopTab').trigger('click');

            } else {
                // mobile
                topValue = $("#profile-right-col").offset().top - $("#header").height();
                $("#MobileMenuNavigator #myShopTab").attr('selected', 'selected');
                MobileMenusManager.navigate();
            }

            $("body, html").stop().animate({
                scrollTop: topValue
            });
        })
    }
    function setAsActive() {
        templatePart.buttons.removeClass('active');
        menuTabSelected.parent('li').addClass('active');
    }
    function init() {
        bindEvents();
        if (window.location.href.indexOf('/myshop') !== -1) {
            $('#myShopTab').trigger('click');
        }
        if (ControlledFeatures.PROFILES_V2) {
            $('#loginFormOverlay').remove();
        }
    }
    return {
        init: init,
        onTabChangeAfter: onTabChangeAfter,
        onTabChangeBefore: onTabChangeBefore
    };
})();

var MobileMenusManager = (function() {
    var templates = {
        mainMenu: null,
        logoutFormButton: $('#logoutForm').find('input[type="submit"]')
    };
    function generateMenus() {
        templates.mainMenu = $('body').find('#main div ul');
        $('#header').find('.optionLinks > ul > li:not(:last-child)')
            .add(UserAgent.phone ? [] : $('#stickyHeader #headerMenuMainUL li:not(.divider), .broadcasting-button li'))
            .each(function() {
            /**
             * skip Account Dropdown, Friends&Favorites Dropdown and login link
             */
            if ($(this).attr('id') == 'toggleAccount' ||
                    $(this).attr('id') == 'toggleFriendsFavs' ||
                    $(this).attr('class') == 'login') {
                return;
            }
            if ($(this).parents('.dropDownList').length) return;
            if($(this).find('.filters-trigger').length) return;
            templates.mainMenu.append('<li>' + $(this).html() + '</li>');
        });
    }
    function selectMenu() {
        $('[data-mobile-menu]').each(function() {
            $(this).on('change', function(e) {
                var href = $(this).children(':selected').attr('data-href');
                if (href) {
                    window.location = href;
                }
                e.preventDefault();
            });
        });
    }
    function getGenderPreference(gender){
        switch (gender){
            case 'female':
                return 'uyvv9Z';
            case 'male':
                return 'cNXv44';
            case 'shemale':
                return '4GkfR6';
            case 'couple':
                return 'MHEYRS';
            case 'all':
                return 'gt15L2';
            default:
                return 'uyvv9Z';
        }
    }

    function bind() {
        $('nav#main').mmenu({
            position: 'left'
        });
        $('nav#profileMenu').mmenu({
            position: 'right'
        });

        var mmenuApi = $('nav#profileMenu').data('mmenu');

        $('.login').click(function() {
            mmenuApi.close();
        });

        if (Registration && typeof Registration.openCheckoutMembership == 'function') {
            $('.upgradeToGold').on('click', Registration.openCheckoutMembership);
        }
        $('#triggerLogout').on('click', triggerLogout);
        $('#triggerPasswordReset').on('click', triggerPasswordReset);
        $('#mobileFooterMenu').find('.login').on('click', function(event) {
            $('.mobile-login a.login').trigger('click');
            event.stopPropagation();
            event.preventDefault();
        });
        selectMenu();
        $('.genderPrefLinksMobile').on('click', function (e) {
            e.preventDefault();

            var genderLink = e.target;
            if (Cam4User.userName === '') {
                // set a cookie
                var cookieString = getGenderPreference(genderLink.dataset.gender);
                Cam4Cookies.setCookie('cam4-CONTENT', cookieString, DateTimes.thirtyDays,  '/', '', '');
                window.location = e.target.href;
            } else {
                jQuery.ajax({
                    type: 'POST',
                    url: '/rest/v1.0/directory-gender-preference/' + encodeURIComponent(Cam4User.userName) + '?gender=' + genderLink.dataset.gender,
                    contentType: "application/x-www-form-urlencoded; charset=utf-8",
                    success: function () {
                        window.location = e.target.href;
                    },
                    error: function (err) {
                        console.log("AJAX error in request: " + JSON.stringify(err, null, 2));
                        window.location = e.target.href;
                    }
                });
            }
        })
    }
    function triggerPasswordReset() {
        LoginModals.activateLoginModal();
        $('.passwordResetLink').trigger('click');
    }
    function triggerLogout() {
        templates.logoutFormButton.trigger('click');
    }
    function init() {
        generateMenus();
        bind();
    }

    function navigate() {
        var mobileMenu = $('#MobileMenuNavigator');
        var value = mobileMenu.val();
        switch (value) {
            case 'open_abuse_form':
                Complaints.openAbuseForm('', 'broadcaster');
                return;
            default:
                var selectedValue = mobileMenu.find('option:selected'),
                        menuContent = selectedValue.attr('data-content');

                if (menuContent) {
                    if (menuContent == 'gifts' &&
                        !Cam4User.isLoggedIn &&
                        !Cam4User.isLoggedInAsGuest) {
                        Utils.decideOffer('', {'unlockFeature': 'gifts'});
                        return;
                    }
                    var menuRelation = $('.profile-menu li')
                            .find('[data-content="' + menuContent + '"]');
                    menuRelation.addClass('nopop').trigger('click');
                } else {
                    window.location = value;
                    return;
                }
                break;
        }
    }

    return {
        init: init,
        triggerLogout: triggerLogout,
        navigate: navigate
    };
})();


var loginModalTemplate;

/**
 * Methods related to login
 * @class LoginModals
 * @static
 */
var LoginModals = {
    /**
     * opens the login modal
     * @method activateLoginModal
     * @returns {undefined}
     */
    activateLoginModal: function(e) {
        Utils.closeModalPops();
        $('#loginFailRedirect').remove();
        $('#loginFailRedirectFooter').remove();
        if (typeof loginModalTemplate === 'undefined') {
            loginModalTemplate = $('#loginForm');
        }

        $('#loginForm form').submit(function(event) {
            event.preventDefault();
        });
        if (ControlledFeatures.PROFILES_V2){
            $('#loginFormOverlay').remove();
            window.location.href = '/?showLogin';
        }else{
            $('#passwordResetForm').hide();
            $('#loginFormOverlay').fadeIn(1000);
            $('#loginFormWrapper').show();
            $('#innerLoginForm').show();
            $('#loginForm').animate({top: '30%'}).fadeIn(2000);
        }

        // For slow internet speeds
        // the animation GIF can get stuck.

        if (SFW) {
            if( e && e.target && e.target.classList.contains("profile-thumb")){
                $j("#sfwLogginDisclaimer").css('display','block');
            }else {
                $j("#sfwLogginDisclaimer").css('display','none');
            }
        }

        if (typeof Cam4Event !== 'undefined') {
            Cam4Event.dispatch(Cam4Event.MODAL_OPENED);
        }
        return true;
    },
    disableSpaceOnInputs: function(){
        $('#loginForm input[type="text"], #loginForm input[type="password"], #passwordResetForm input[type="text"]').on({
            keydown: function (e) {
                if (e.which === 32)
                    return false;
            },
            change: function () {
                this.value = this.value.replace(/\s/g, "");
            }
        });
    },
    activateForgotPasswordModal: function() {
        if (!document.querySelector('.modal-open')) {
            Utils.closeModalPops();
            LoginModals.activateLoginModal();
        }
        $('#innerLoginForm').hide()
            .before($('#passwordResetForm').show());
        $('.errorLoginMsg').hide();
        $('.jsResendEmailBtnHolder').hide();
        if ($('#loginFailRedirect').length) {
            $('#loginFailRedirect').hide();
            $('#loginFailRedirectFooter').hide();
        }
    },
    passwordReminder: function() {

        var getPasswordUrl = '/password/reminder',
                modal = $('#modalLayout .modal-body'),
                form;

        function postForm() {
            var reminderRequest = $.ajax({
                type: 'POST',
                url: getPasswordUrl,
                data: $('#passwordReminder form').serialize()
            });

            form = modal.html();

            reminderRequest.success(function(response) {
                replaceModalContent(response);
                bindEvents();
            });
        }

        function replaceModalContent(content) {
            $j('#loginForm #innerLoginForm').hide();
            $j('#loginForm #loginFailRedirect').remove();
            $j('#loginForm #loginFailRedirectFooter').remove();

            $j('#loginForm .modal-body').append('<div id="loginFailRedirect">' + content + '</div>');
            $j('#loginForm .modal-body').after('<div id="loginFailRedirectFooter" class="modal-footer">' + js_i18n.visitFaq + ' | ' + js_i18n.lostPhone + '</div>');
            $j('#modalLayout .modal-dialog').removeClass('modal-sm').addClass('modal-md');
            $j('#loginForm #twoFACodeValidationInput').focus();
        }

        function showForm() {
            replaceModalContent(form);
            bindEvents();
        }

        function bindEvents() {
            $('#password-recover-btn').on('click', function(event) {
                event.preventDefault();
            });
            $('#show-password-recover').on('click', function(event) {
                showForm();
                event.preventDefault();
            });
        }

        return {
            bindEvents: bindEvents,
            post: postForm
        };

    },
    submitLogin: function(opts) {
        if ($('#loginSecurePageForm').length) {
            return;
        }

        var formId = 'loginForm';

        if (opts && typeof opts == 'object') {
            if (opts.isFromGuestPurchase) {
                formId = 'alternativeLogin';
            }
        }

        var loginMessage,
            errorMessages = function(messageType) {
                if ($('#loginFormOverlay').is(':visible')) {
                    $('.errorLoginMsg').html(loginMessage).show();
                    $('.jsResendEmailBtnHolder').hide();
                    switch(messageType) {
                        case 'info':
                            $('.errorLoginMsg').removeClass('alert-danger');
                            $('.errorLoginMsg').addClass('alert-info');
                            $('.jsResendEmailBtnHolder').show();
                            break;
                        default:
                            $('.errorLoginMsg').removeClass('alert-info');
                            $('.errorLoginMsg').addClass('alert-danger');
                    }
                }
            },
            form = $('#' + formId),
            username = form.find('[name="username"]').val().trim(),
            password = form.find('[name="password"]').val().trim();

        if (!username || !password) {
            loginMessage = loginMessages.authError;
            errorMessages();
            return;
        }

        var data = {
            'username': username.trim(),
            'password': password.trim(),
            'type': 'modal'
        };

        if (typeof grecaptcha !== 'undefined' && typeof  grecaptcha.captchaId !== 'undefined' &&
            grecaptcha.getResponse(grecaptcha.captchaId) !== '') {
            data['g-recaptcha-response'] = grecaptcha.getResponse(grecaptcha.captchaId);
        }

        var settings = {
            type: 'POST',
            url: '/login',
            data: data,
            dataType: 'text'
        };
        if (ControlledFeatures.DISTRIBUTED_TRACING && (typeof Chat !== 'undefined')) {
            settings.headers = {"X-B3-TraceId": Chat.generateTraceId(), "X-B3-SpanId": Chat.generateSpanId(), "X-B3-Sampled": 1};
        }
        $('#signInButton').prop('disabled', true);
        var loginRequest = $.ajax(settings);
        loginRequest.done(function(data) {
            if(data !== 'SUCCESS') {
                $('#signInButton').prop('disabled', false);
            }
            var captcha = $('#RecaptchaField1'),
                isStudio = false;

            try {
                var response = JSON.parse(data);
                // for the legacy flow where the response is just a simple string the
                // JSON.parse will fail and the data and isStudio will not be assigned
                data = response.status;
                var email = response.email;
                if (response.role === "STUDIO_OWNER" || response.role === "STUDIO_ADMIN") {
                    isStudio = true;
                }
            } catch(ex) {}

            captcha.hide();
            switch (data) {
                case 'BANNED_USER_ERROR':
                    loginMessage = reminderInt.bannedUserError;
                    errorMessages();
                    break;
                case 'UNVERIFIED_USER':
                    loginMessage = reminderInt.unverifiedUser;
                    errorMessages('info');
                    break;
                case 'AUTH_ERROR':
                    loginMessage = loginMessages.authError;
                    errorMessages();

                    if (enableCaptcha && typeof captchaRetry !== 'undefined' && captchaRetry) {
                        CaptchaCallback();
                        grecaptcha.reset(grecaptcha.captchaId);
                    }
                    break;
                case 'NEEDS_CAPTCHA':
                    captcha.remove();
                    CaptchaCallback();
                    captchaRetry = true;
                    grecaptcha.reset(grecaptcha.captchaId);
                    captcha.show();
                    break;
                case 'FAILED_CAPTCHA':
                    CaptchaCallback();
                    grecaptcha.reset(grecaptcha.captchaId);
                    captcha.show();
                    break;
                case 'TEMPORARY_LOGIN_FAIL':
                    loginMessage = loginMessages.temporaryLoginFail;
                    errorMessages();
                    break;
                case 'SUCCESS':
                    if (enableCaptcha) {
                        captchaRetry = false;
                    }

                    if (isStudio) {
                        window.location = '/studio';
                        break;
                    }

                    if (typeof deleteAccountPage !== 'undefined') {
                        window.location = '/';
                    } else {
                        window.location.reload();
                    }
                    break;
                case 'WEAK_PASSWORD':
                    $('#loginForm').hide();
                    $('#loginFormWrapper').hide();
                    $('#loginFormOverlay').hide();
                    $('#weekPassword').show();
                    $('#weekPasswordEmail').text(email);
                    $('#weekPassword').on('click', function (){
                        $(this).hide();
                    });
                    $('#closeWeekPassword').on('click', function (){
                        $('#weekPassword').hide();
                    });
                    break;
                default:
                    $j('#loginForm #innerLoginForm').hide();
                    $j('#loginForm #loginFailRedirect').remove();
                    $j('#loginForm #loginFailRedirectFooter').remove();
                    $j('#loginForm .errorLoginMsg').hide();
                    $j('#loginForm .jsResendEmailBtnHolder').hide();

                    $j('#loginForm .modal-body').append('<div id="loginFailRedirect">' + data + '</div>');

                    $j('#loginForm .modal-body').after('<div id="loginFailRedirectFooter" class="modal-footer">' + js_i18n.visitFaq + ' | ' + js_i18n.lostPhone + '</div>');
                    if ($j('#loginSecurePageForm').length === 1) {
                        // security question

                    } else {
                        // sms validation (2FA)
                        $j('#modalLayout .modal-dialog').removeClass('modal-sm').addClass('modal-md');
                        $j('#loginForm #twoFACodeValidationInput').focus();
                    }

                    LoginModals.passwordReminder().bindEvents();
                    break;
            }
        });
        loginRequest.fail(function() {
            $('#signInButton').prop('disabled', false);
            console.log('alert');
        });
    },
    loginSecurityQuestions: function(e) {
        e.preventDefault();
        var form = $('#loginSecurePageForm');
        $.ajax({
            type: 'POST',
            url: '/loginsecure',
            data: {
                username: form.find('[name="username"]').val(),
                token: form.find('[name="token"]').val(),
                questionID: form.find('[name="questionID"]').val(),
                answer: form.find('[name="answer"]').val(),
                type: 'modal'
            },
            dataType: 'text'
        }).done(function(data) {
            if (data == 'SUCCESS') {
                window.location.reload();
            } else {
                $('#loginFailRedirect').html(data);
                $('#loginFailRedirectFooter').hide();
            }
        }).fail(function() {
            console.log('alert');
        });
    }
};

if (typeof registerForGold !== typeof Function) {
    function registerForGold() {
        if (okToSubmitFormWithPassword()) {
            $j('[name="productId"]').val('1');
            $j('[name="proccessorRedirect"]').val('1');
            submitFormWithPassword();
        }
        else {
            showMessages();
        }
    }
}

function fixIOSModal(_modal) {
    if (!BrowserDetect.isIDevice()) {
        return false;
    }
    _modal.on('show.bs.modal', function() {
        // Position modal absolute and bump it down to the scrollPosition
        $(this)
                .css({
            position: 'absolute',
            marginTop: $(window).scrollTop() + 'px',
            bottom: 'auto'
        });
        /**
         * Position backdrop absolute and make it span the entire page
         */
        setTimeout(function() {
            $('.modal-backdrop').css({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: Math.max(
                        document.body.scrollHeight, document.documentElement.scrollHeight,
                        document.body.offsetHeight, document.documentElement.offsetHeight,
                        document.body.clientHeight, document.documentElement.clientHeight
                        ) + 'px'
            });
        }, 0);
    });
}

function toggleAccountMenu() {
    $('#admin-dark').find('.account').toggle();
}

$(function() {
    if (typeof cMonth === 'undefined' || typeof cYear === 'undefined') {
        var currentDate = new Date();
        var cMonth = currentDate.getMonth() + 1,
                cYear = currentDate.getFullYear();
    }
    ProfileManager.onTabChangeAfter(
            function(partName, location, sidebarResponse, contentResponse) {
                if (location == 'content' && partName == 'showsContent') {
                    var script = $(contentResponse[0]).filter('script:eq(0)');
                    eval(script.text());
                    upcomingShowCalendar(cMonth, cYear, markedDays);
                }
                if (location == 'content' && partName == 'chatContent') {
                    Comments.setChatWallDisplayEvents();
                    $('#message-wall').focus();
                }
            }
    );
    ProfileManager.init();
    MobileMenusManager.init();
    if ($('.fakeWrapInner').hasClass('responsiveShowsTab')) {
        upcomingShowCalendar(cMonth, cYear, markedDays);
    }
    function updateNumberOfShows() {
        var numberOfShows = $('#myAccountShowsCount').text();
        $('.calendar-icon .counter').text(numberOfShows)
    }
    updateNumberOfShows();
    var tippingJarDiv = $('#tippingJarDiv');
    var innerLoginForm = $('#innerLoginForm');
    var passwordResetForm = $('#passwordResetForm');
    var bodySelector = $('body');

    var i18n = {
        viewMenu: 'View Menu'
    };

    (function($, i18n) {
        $('#toggleAccount').on('click', function() {
            toggleAccountMenu();
        });
        /* "My Account" dropdowns. */
        /**
         * TODO: Replace with a custom script the selectpicker functionality.
         */
        if ($.fn.selectpicker) {
            $('#manageWrap[class*="profile"] #profile-right-col select').not('#mobile-profile-menu, .country-block').selectpicker({
                'size': '12'
            });

            if (!document.querySelector('.psi')) {
                $('#mobileSavedSearches select, .optionsWrapper select').selectpicker({
                    'size': '12',
                    'width': '140px'
                });
            }

            if (!Cam4User.isBroadcastingWindow) {
                $('#userBlist, #roomList').selectpicker({
                    'size': '3'
                });
            }
        }
        /* "My Account" left sidebar. */
        $('.profileMenu').prepend('<li class="toggle-menu"><a href="#">' + i18n.viewMenu + '</a></li>');
        $('.profileMenu .toggle-menu').click(function(e) {
            if ($(this).next('li').css('display') == 'none') {
                $(this).nextAll('li').fadeIn();
            } else {
                $(this).nextAll('li').fadeOut();
            }
            e.preventDefault();
        });
        /* "My Account" ban list. */
        var bannedUsers = $('.users_container .ff_thumb'),
                friendsUsers = $('#friends').find('.ff_thumb'),
                favoritesUers = $('#favorites').find('.ff_thumb');

        $('#selectAllBans').click(function() {
            bannedUsers.each(function() {
                $('input:checkbox', $(this)).prop('checked', true);
                $(this).addClass('selected');
            });
        });
        $('#selectNoneBans').click(function() {
            bannedUsers.each(function() {
                $('input:checkbox', $(this)).prop('checked', false);
                $(this).removeClass('selected');
            });
        });

        $('img', bannedUsers).click(function(e) {
            e.preventDefault();
        });
        bannedUsers.click(function() {
            var checkbox = $('input:checkbox', $(this));
            if (checkbox.is(':checked')) {
                checkbox.attr('checked', false);
                $(this).removeClass('selected');
            } else {
                checkbox.attr('checked', true);
                $(this).addClass('selected');
            }
        });

        $('#selectAllFriends').click(function() {
            friendsUsers.each(function() {
                $('input:checkbox', $(this)).prop('checked', true);
                $(this).addClass('selected');
            });
        });
        $('#selectNoneFriends').click(function() {
            friendsUsers.each(function() {
                $('input:checkbox', $(this)).prop('checked', false);
                $(this).removeClass('selected');
            });
        });

        $('#selectAllFavorites').click(function() {
            favoritesUers.each(function() {
                $('input:checkbox', $(this)).prop('checked', true);
                $(this).addClass('selected');
            });
        });
        $('#selectNoneFavorites').click(function() {
            favoritesUers.each(function() {
                $('input:checkbox', $(this)).prop('checked', false);
                $(this).removeClass('selected');
            });
        });

        $('.bottom_footer #social').prepend('<h5>Connect With Us</h5>').addClass('footer-col');
        $('#profileStatus .plainLink1').after($('#profileStatus .goalBar2'));

        /* Banning users - ajax */
        $('#banUserForm').submit(function(evt) {
            var form = $(this),
                targetUser = form.find('[name="userNameToBan"]').val().trim();

            if (!targetUser || form.hasClass('disableSubmit')) {
                evt.preventDefault();

                if (!targetUser) return;

                $.get('/rest/v1.0/login/user', function(response) {
                    var banUserText,
                        modal,
                        username = response['data']['username'],
                        accessHash = response['data']['accessHash'],
                        url = '/rest/v1.0/profile/' + username + '/fanclub/' + targetUser + '?login_user_name=' + username + '&accessHash=' + accessHash;

                    $.get(url, function(data) {
                        var isFan = data.fanclubSubscribed;

                        if (isFan) {
                            banUserText = Cam4Chat.banFanClubMember.replace('{0}', targetUser).replace('{1}', targetUser);
                            modal = $('#ban-user');
                            modal.find('p').text(banUserText);
                            modal.modal('show');
                        } else {
                            form.removeClass('disableSubmit');
                            form.submit();
                        }

                    }).fail(function() {
                        // user we want to ban not found
                        modal = $('#ban-user-error');
                        modal.modal('show');
                    });

                });
            }
        });

        $('#cancel-ban, #confirm-ban-error').on('click', function (evt) {
            $(this).closest('.modal').modal('hide');
        });


        $('#confirm-ban').on('click', function (evt) {
            $('#ban-user').modal('hide');
            var form = $('#banUserForm');
            form.removeClass('disableSubmit');
            form.submit();
        });

        /*Ajax to do the Group by category on the Super Show Page */
        var superShowListing = $("#supershowsPerformers");
        if (superShowListing.length) {
            $('#superShowListingContainer').on('change', '#supershowsPerformers', function() {
                $.ajax({
                    type: 'GET',
                    url: '/super_shows/groupByFilter',
                    data: {
                        category: $(this).val(),
                        show_category: $('#showCategory').val()
                    },
                    beforeSend: function(xhr) {
                        $('#superShowListingContainer').find('.row').hide();
                        $('.loadingIcon').show();
                    }
                }).done(function(data) {
                    $('.loadingIcon').hide();
                    $('#superShowListingContainer').show().html(data);
                    if ($.fn.selectpicker) {
                        $('#supershowsPerformers').selectpicker({'size': '12'});
                    }
                }).fail(function() {
                    console.log('alert');
                });
            });
        }
        /* Ajax for the upcoming Super Shows modal in the Super Show page */
        if ($('#sprshow').length) {
            $('#superShowListingContainer').on('click', '.superShowUpcomingPerformance', function() {
                $.ajax({
                    type: 'GET',
                    url: '/super_shows/upcomingPerformances',
                    data: {
                        username: $(this).data('username'),
                        show_category: $('#showCategory').val()
                    }
                })
                        .done(function(data) {
                    $('#sprshow').html(data).modal();
                })
                        .fail(function() {
                    console.log('alert');
                });
            });
        }

        /* Append a modal markup to the body to be used for all the modals */
        bodySelector.prepend('<div class="modal fade" id="modalLayout"><div class="modal-dialog"><div class="modal-content"></div></div></div>');
        if (PageStatus.taboocamsFirstLogin) {
            Modals.openTabooCamsPromo();
        }
        var modalLayout = $('#modalLayout');
        var modalContent = $('.modal-content');



        /* Fire the LOGIN modal */
        if ($('.login').length) {

            $('#usernameBox, #loginForm [name="password"], #passwordResetForm [name="email"]').removeClass('login_fields').addClass('form-control');
            passwordResetForm.prepend('<div id="resetMsg" class="alert"></div>');
            $('#innerLoginForm').find('form').after('<hr />');
            $('.login').removeAttr('onclick');
            $('#headerMenuMainUL').find('.login').attr('href', '#');

            bodySelector.on('click', '.login', function(e) {
                e.preventDefault();
                if (ControlledFeatures.PROFILES_V2){
                    $('#loginFormOverlay').remove();
                    window.location.href = '/?showLogin';
                }else{
                    $('#loginFormOverlay').fadeIn(1000);
                    $('#innerLoginForm').show();
                    $('#loginFormWrapper').show();
                    $('#loginForm').animate({top: '30%'}).fadeIn(2000);
                }
            });
            /* Do the submit on the login modal form */
            bodySelector.find('#loginForm [name="submit"]').removeClass('log_sweet_btn').addClass('btn btn-sm btn-orange');
            bodySelector.on('click', '#loginForm [name="submit"]', LoginModals.submitLogin);

            /* Do the login with security questions */
            bodySelector.on('click', '#loginSecurePageForm [name="submit"]', function(e) {
                if (bodySelector.hasClass('modal-open')) {
                    LoginModals.loginSecurityQuestions(e);
                }
            });

            /* Reset-password link */
            bodySelector.on('click', '.passwordResetLink', function(e) {
                e.preventDefault();
                if (innerLoginForm.is(':visible')) {
                    innerLoginForm.hide().before(passwordResetForm.show());
                    $('.errorLoginMsg').hide();
                    $('.jsResendEmailBtnHolder').hide();
                    if ($('#loginFailRedirect').length) {
                        $('#loginFailRedirect').hide();
                        $('#loginFailRedirectFooter').hide();
                    }
                } else {
                    LoginModals.activateForgotPasswordModal();
                }
            });

            // If credentials entered inccorrect several times
            // and user clicks support link
            //
            bodySelector.on('click', '.supportLink', function(e) {
                e.preventDefault();
                window.location.href = this.href;
            });


            /* Do the submit on the modal password reset */
            $('[name="getPasswordReminder"]').addClass('btn btn-sm btn-orange');
            bodySelector.on('click', '[name="getPasswordReminder"]', function(e) {
                $.ajax({
                    type: 'POST',
                    url: '/password/reminder',
                    data: {email: $('[name="email"]').val().trim(), type: 'modal'},
                    dataType: 'text'
                }).done(function(data) {
                    var reminderMessage;
                    switch (data) {
                        case 'BANNED_USER_ERROR':
                            reminderMessage = reminderInt.bannedUserError;
                            break;
                        case 'UNVERIFIED_USER':
                            reminderMessage = reminderInt.unverifiedUser;
                            break;
                        case 'EMAIL_NOT_FOUND_ERROR':
                            reminderMessage = reminderInt.emailNotFoundError;
                            break;
                        case 'SECONDARY_EMAIL_ERROR':
                            reminderMessage = reminderInt.secondaryEmailError;
                            break;
                        case 'REMINDER_OF_VERIFICATION':
                            reminderMessage = reminderInt.reminderVerification;
                            break;
                        case 'SUCCESS_REJOIN':
                            reminderMessage = reminderInt.successRejoin;
                            break;
                        case 'SUCCESS':
                            reminderMessage = reminderInt.success;

                            var passwordRemindModal = $('.password-remind-modal');
                            passwordRemindModal.find('.alert')
                                    .removeClass('alert-danger')
                                    .addClass('alert-success');
                            passwordRemindModal.find('#success').remove();
                            passwordRemindModal.find('#passwordReminder, .xtra_titles').remove();
                            break;
                        default:
                            reminderMessage = '';
                            break;
                    }
                    var alertMessage = $('.password-remind-modal .alertMessage');
                    if (alertMessage.length) {
                        alertMessage.html(reminderMessage);
                    } else {
                        if ($('#passwordResetForm').find('alert-danger')) {
                            $('.alertMessage').remove();
                        }
                        if (data == 'SUCCESS' || data == 'SUCCESS_REJOIN' || data == 'REMINDER_OF_VERIFICATION') {
                            $('#passwordResetForm').empty().prepend($('<div class="alertMessage alert alert-success">'
                                    + reminderMessage + '</div>'));
                        } else {
                            $('#passwordResetForm').prepend($('<div class="alertMessage alert alert-danger">'
                                    + reminderMessage + '</div>'));
                        }
                    }
                })
                        .fail(function() {
                    console.log('alert');
                });
            });
            LoginModals.disableSpaceOnInputs();
        }

        $('#loginFormWrapper, .close').on('click', function(e) {
            if ($('#loginForm').length) {
                if (e.target.id != 'loginForm'){
                    e.preventDefault();
                    e.stopPropagation();
                    $('#loginForm').css('top', '0');
                    $('.errorLoginMsg').hide();
                    $('.jsResendEmailBtnHolder').hide();
                    $('#loginFormOverlay').hide();
                }
            }
            modalStatus = false;
            $('.errorLoginMsg').hide();
            $('.jsResendEmailBtnHolder').hide();
            $('#passwordResetForm').hide();
            $('#resetMsg').hide();
        });

        /* Manage the modal content when it is closed */
        modalLayout.on('hidden.bs.modal', function() {
            /* Append back the login box to the body so it can be used again after a remote modal */
            if ($('.modal-content #loginForm').length) {
                bodySelector.append($('#loginForm').hide());
                $('.errorLoginMsg').hide();
                $('.jsResendEmailBtnHolder').hide();
            }
            if (tippingJarDiv.length && Cam4User.isLoggedIn) {
                bodySelector.append(tippingJarDiv.hide());
                $('#tipjarError').hide();
                $('#tipjarAction').css('visibility', 'visible');
            }
            if ($('#loginFailRedirect').length) {
                $('#loginFailRedirect').remove();
                $('#loginFailRedirectFooter').remove();
            }
            if ($('.profile-security-questions').length) {
                bodySelector.append($('#popup_submit').hide());
            }
            if ($('#confirmDeleteAccountModal').length) {
                bodySelector.append($('#confirmDeleteAccountModal').hide());
            }
            if ($('#deleteCommentsDialog').length) {
                bodySelector.append($('#deleteCommentsDialog').hide());
            }

            /* It forces the modal to load the remote URL each time that is called */
            $(this).data('bs.modal', null);
            modalStatus = false;
            $('.errorLoginMsg').hide();
            $('.jsResendEmailBtnHolder').hide();
            $('#resetMsg').hide();
        });

        modalLayout.on('shown.bs.modal', function(e) {
            if (!UserAgent.phone) {
                $('#usernameBox').focus();
            }
        });

        $('#mobileSavedSearches').find('select').on('change', function(e) {
            var selected = $(this).find(':selected');
            if (selected.attr('data-id')) {
                return;
            }
            if (selected.attr('data-search')) {
                DirectoryEvents.applySearchFilters(selected.attr('data-search'));
            } else {
                window.location = $(this).val();
            }
            e.preventDefault();
        });

        /* Fire the Register page into a modal */
        if ($('.registerModal').length) {



            bodySelector.on('click', '.registerModal', function(e) {
                if ($(this).attr('onclick')) {
                    return;
                } else if ($(this).attr('href')) {
                    e.preventDefault();
                    var href = $(this).attr('href');
                    var hrefComplete;
                    hrefComplete = href + ((href.indexOf('?') != -1) ? "&" : "?");
                    hrefComplete += 'type=modal';
                    var extraPadding = false;
                    if ($(this).hasClass('extra-padding')) {
                        extraPadding = true;
                    }

                    // Rating stars
                    var ratingClasses = ['.a0', '.a1', '.a2', '.a3', '.a4'];
                    if ($(this).is(ratingClasses.join(', '))) {
                        hrefComplete += '&showSignupForm=true';
                    }

                    if (Cam4User.isLoggedInAsGuest) {
                        Registration.activateGuestRegisterModal();
                    } else {
                        Registration.activateRegModal(hrefComplete, extraPadding);
                    }
                }
            });

            if ($('.homepageSignup').length) {
                $('.homepageSignup').attr('href', '/gold').addClass('registerModal');
            }
            if ($('#rateUserDiv').length) {
                $('#rateUserDiv').find('a').attr('href', '/gold').removeAttr('onclick').addClass('registerModal');
            }
        }

        if ($('.welcomePage').length) {
            $('#wrap1').addClass('row').prepend($('#col2').prepend($('#welcomeHeader')));
            $('#welcomeHeader').find('span').removeClass('smText');
            //
            // $('.basicFeature').append('<hr />');
            $('.bttnWrap a').removeClass('bttn btn-med btn-wh').addClass('btn btn-default');
            $('.boxWrap a').removeClass('bttn bttn-full btn-xlrg btn-upgrade').addClass('btn btn-green btn-lg btn-block');
        }


        Utils.popResponsiveModal = function(url, typeURL) {
            $('#PrimaryDialogContainer').remove();
            var element = $('#modalLayout div:eq(0)');
            if (typeURL) {
                element.removeClass('modal-sm modal-md').addClass('modal-lg');
            } else {
                element.removeClass('modal-sm modal-lg').addClass('modal-md');
            }
            modalContent.empty();
            modalLayout.modal({
                remote: url
            });

            modalLayout.on('shown.bs.modal', function() {
                $('.sendGiftLink').on('click', function(event) {
                    modalLayout.modal('hide');
                    event.preventDefault();
                });
            });
            Cam4Event.dispatch(Cam4Event.MODAL_OPENED);
            return {
                content: modalContent,
                layout: modalLayout
            };
        };

        function seeAllModal(fireClass, typeURL) {
            bodySelector.on('click', fireClass, function(e) {
                Utils.popResponsiveModal('/' + Cam4User.performerName + '/modal/' + typeURL + '?registrationType=modal', typeURL);
            });
        }

        if(ControlledFeatures.AWARDS_V2 === false){
            seeAllModal('.awardModal', 'awards');
        }

        seeAllModal('.giftsModal', 'gifts');
        seeAllModal('.friendsModal', 'friends');
        seeAllModal('.favoritesModal', 'favorites');


        var ConfirmModalsMyAccount = {
            securityQuestion: function() {
                $('.modal-content').empty().append($('#popup_submit').show());
                modalLayout.modal().on('shown.bs.modal', function() {
                    $('#password_input').focus();
                });
            },
            deleteAccount: function() {
                $('.modal-content').empty().append($('#confirmDeleteAccountModal').show());
                modalLayout.modal();
            },
            cancelButton: function() {
                $('.cancelButton').click(function() {
                    Utils.closeModalPops();
                });
            },
            deleteAllComments: function() {
                $('.modal-content').empty().append($('#deleteCommentsDialog').show());
                modalLayout.modal();
            }
        };

        if ($('.profile-security-questions').length) {
            $('.securityModalConfirmation').removeAttr('onclick').click(function(e) {
                e.preventDefault();
                ConfirmModalsMyAccount.securityQuestion();
            });
            ConfirmModalsMyAccount.cancelButton();
        }

        if ($('.profile-delete-account').length) {
            $('#deleteAccountButton').click(function(e) {
                e.preventDefault();
                ConfirmModalsMyAccount.deleteAccount();
            });
            ConfirmModalsMyAccount.cancelButton();
            $('.saveButton').click(function() {
                $('#deleteAccount').submit();
            });
        }

        if ($('.profile-display-options').length) {
            $('#deletecomments').click(function() {
                ConfirmModalsMyAccount.deleteAllComments();
            });
            ConfirmModalsMyAccount.cancelButton();
            $('#confirmDeleteComments').click(function() {
                $('#deleteCommentsDialog').find('form').submit();
            });
        }

        if ($('#bioEdit').length) {
            SCEditorUtils.scEditorApply('bioEdit', 'image,bold,italic,color,removeformat,size', '100%');
        }

        if ($('#profile-friends-and-favorites')) {
            $('#showFriendsTab').click(function() {
                $(this).addClass('active');
                $('#showFavoritesTab').removeClass('active');
                $('#friends').show();
                $('#favorites').hide();

            });
            $('#showFavoritesTab').click(function() {
                $(this).addClass('active');
                $('#showFriendsTab').removeClass('active');
                $('#favorites').show();
                $('#friends').hide();
            });
        }

        if ($('#mobile-profile-menu').length) {
            $('#mobile-profile-menu').change(function() {

                if ($(this).val() == 'goToPerformerDashboard') {
                    window.location = '/' + Cam4User.userName + '/performerHub';
                    return;
                }

                if ($(this).val() == 'openCheckoutMembership') {
                    Registration.openCheckoutMembership();
                } else if ($(this).val() == 'mobileAddTokens') {
                    TipFactory.popTokens();
                }
            });
        }
        /**
         * This function generates an iFrame with the provided url
         * Use this when you get a CORS error against .modal({remote})
         * @param url
         */
        function showRemoteModal(url) {
            var iFrame = $('<iframe></iframe>', {
                src: url,
                frameborder: 0,
                scrolling: 'yes',
                width: '100%',
                height: '350px'
            });

            var modal = $('#modalLayout');
            modal.find('.modal-content').empty().append(iFrame);
            modal.find('.modal-dialog').addClass('large');
            modal.modal('show');
            modal.on('hidden.bs.modal', function() {
                modal.find('.modal-dialog').removeClass('large');
            });
        }

        /**
         * Generate cam4bucks tipping url
         */
        function generateCam4BucksUrl(url) {
            var resUrl = url + ((url.indexOf('?') == -1) ? '?' : '&') +
                'user_id=' + Cam4User.userName + '&key=' + Cam4User.kN;
            return resUrl;
        }
        $('.iframeModal').on('click', function(event) {
            showRemoteModal(generateCam4BucksUrl($(this).attr('href')));
            event.preventDefault();
        });

        $('#showAvailableProcessors').on('click', function(event) {
            var modal = $('#modalLayout');
            var siteUrl = EpayPlugin.settings.args.requestBodyData.siteSubcat.split('.',1);
            $.ajax({
                url: EpayPlugin.settings.apiBaseUrl + '/checkout/' + siteUrl[0] + '/' + EpayPlugin.settings.lang + '/TOKENS?userName=&accessHash=&siteSubcat=smart-x.net',
                success: function(processors) {
                    var paymentMethods = [];
                    $.each(processors.products, function (index, product) {
                        $.each(product.categories, function (index, categories) {
                            $.each(categories.methods, function (index, methods) {
                                var paymentMethod = methods;
                                paymentMethods.push(paymentMethod)
                            })
                        })
                    });
                    var obj = {};
                    for (var i = 0, len = paymentMethods.length; i < len; i++){
                        obj[paymentMethods[i]['type']] = paymentMethods[i];
                    }
                    var paymentMethodsUnique = [];
                    for ( var key in obj ) {
                        paymentMethodsUnique.push(obj[key]);
                    }
                    var processorsList = $('<ul></ul>',
                        {
                            'class': 'processors list-group'
                        });
                    $.each(paymentMethodsUnique, function(index, processor) {
                        var image = processor.type == 'CC' ? '' : '_'+processor.type;
                        var processorType = processor.type;
                        var paymentMethodName = js_i18n.paymentMethod[processorType];
                        var processorTemplate = $('<li class="list-group-item"><img src="/images/checkout/'+processor.processorId + image +'.jpg" class="pay-logo" alt=""><span style="margin: 0 20px;text-transform: inherit;">'+paymentMethodName+'</span></li>');
                        processorsList.append(processorTemplate);
                    });
                    var modalContent = $('#availableProcessorsModal').clone();
                    modalContent.find('.modal-body').html(processorsList);
                    modal.find('.modal-content').empty().html(modalContent.show());
                    modal.modal('show');
                }
            });
            event.preventDefault();
        });

        var offsetAwardPagination = 1, awardSortCategory;

        function awardsAjax(requestType, url) {
            $.ajax({
                url: url,
                success: function(response) {
                    if (requestType == 'load') {
                        offsetAwardPagination += 6;
                        $('#awardsListingContainer').append(response);
                    } else if (requestType == 'sort') {
                        $('#awardsListingContainer').html(response);
                    }
                    forceRedraw();
                }
            });
        }

        var awardsInfoRequests = {
            loadMoreAwards: function(awardType) {
                var url = '/awards/' + awardType + '?offset=' + offsetAwardPagination + '&count=6';
                if (typeof awardSortCategory !== 'undefined' && awardSortCategory != 'all') {
                    url += '&category=' + awardSortCategory;
                }
                awardsAjax('load', url);
            },
            sortCategories: function(awardType, awardCategory) {
                offsetAwardPagination = 0;
                var url = '/awards/' + awardType + '?offset=' + offsetAwardPagination + '&count=6';
                if (awardCategory != 'all') {
                    url += '&category=' + awardCategory;
                }
                awardsAjax('sort', url);
                awardSortCategory = awardCategory;
                offsetAwardPagination += 6;
            }
        };

        if ($('#loadMoreAwards')) {
            $('#load-more').on('click', function(event) {
                var awardType = $(this).data('awardType');
                awardsInfoRequests.loadMoreAwards(awardType);
                event.preventDefault();
            });
            $('#contestCategoriesSort').on('change', function() {
                var awardType = $('#load-more').data('awardType');
                var awardCategory = $(this).val();
                awardsInfoRequests.sortCategories(awardType, awardCategory);
                forceRedraw();
            });
        }

        $('#languageSupported, #languageSupportedMobile').on('change', function() {
            window.location = $(this).val();
        });

        if ($('.buyTokensModal').length) {
            $('.buyTokensModal').removeAttr('onclick').on('click', function(event) {
                event.preventDefault();
                TipFactory.popTokens();
            });
        }
        if ($.fn.tooltip) {
            $('[data-toggle="tooltip"]').tooltip();
        }

        if (!Cam4User.isLoggedIn) {
            $('body').on('click', '#broadcastBtn', function(event) {
                LoginModals.activateLoginModal();
                event.preventDefault();
            });
        }

    })(jQuery, i18n);
});

var upcomingShowCalendar = (function(month, year, markedDays) {
    if ($('#scheduler').length) {
        var responsiveShowsTab = $('.responsiveShowsTab');

        responsiveShowsTab.on('click', '#prevMonth, #nextMonth', function() {
            var navAction = $(this).attr('id');
            monthNavigation(navAction);
        });

        function monthNavigation(navAction) {
            if (navAction == 'prevMonth') {
                month = --month;
                if (month == 0) {
                    month = 12;
                    year = --year;
                }
            }
            if (navAction == 'nextMonth') {
                month = ++month;
                if (month == 13) {
                    month = 1;
                    year = ++year;
                }
            }
            monthInfoRequest(month, year);
        }

        function monthInfoRequest(month, year) {
            var url;
            url = '/' + Cam4User.performerName + '/content/shows/' + year + '/' + month;
            $.ajax({
                type: 'GET',
                url: url
            })
                    .done(function(data) {
                $('#profile-right-col').html($(data).filter('#profile-right-col').html());
                var script = $(data).filter('script:eq(0)');
                eval(script.text());
                fireDatePicker(markedDays);
            })
                    .fail(function() {
                console.log('alert');
            });
        }

        function fireDatePicker(markedDays) {
            $('#calendar').datepicker({
                inline: true,
                showOtherMonths: true,
                defaultDate: new Date(year + '/' + month + '/1'),
                firstDay: 0,
                beforeShowDay: daysToMark
            });

            function daysToMark(d) {
                for (i = 0; i < markedDays.length; i++) {
                    if ((markedDays[i].date.getDate() == d.getDate()) && (markedDays[i].date.getMonth() == d.getMonth())) {
                        return [true, 'marked ' + markedDays[i].pType, ''];
                    }
                }
                return [true, '', ''];
            }
        }
        fireDatePicker(markedDays);
    }
});

function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }
   return false;
}

$(document).ready(function() {
    $('a.gallery1').css('pointer-events','');
    $('a.gallery1').on('click', function(e){
        e.preventDefault();
    });

    $('a.galleryImageLink').css('pointer-events','');
    $('a.galleryImageLink').on('click', function(e){
        e.preventDefault();
    });

    if (detectIE() <= 11) {
        $.fn.modal.Constructor.prototype.enforceFocus = function () { };
    }
    if ( window.blueimp){
        window.blueimp.Gallery.prototype.options.toggleSlideshowOnSpace = false;
    }
    $('#blueimp-gallery a.close').on('click', function(){
        if ($('#blueimp-gallery').hasClass('blueimp-gallery-display')) {

           closeBlueImpGallery();
        }

    });
    $(document).keydown(closeBlueImpGalleryOnEsc);
});

function closeBlueImpGalleryOnEsc(e) {
    if (e.keyCode === 27 && $('#blueimp-gallery').hasClass('blueimp-gallery-display')) {
        closeBlueImpGallery();
    }
}

function closeBlueImpGallery() {
    if ($('#blueimp-gallery').hasClass('blueimp-gallery-single')){
        $('#blueimp-gallery').removeClass('blueimp-gallery-single blueimp-gallery-left blueimp-gallery-right');
    }
    $('#blueimp-gallery').removeClass('blueimp-gallery-display');
    $('#blueimp-gallery').css('display', 'none');
    $('body').css('overflow','auto');

}

function forceRedraw() {
    // this will force a redraw with no visual effects, should be used
    // only on IE 8 as a hack for absolute elements that dont reposition
    // when resizing the parent
    if (typeof BrowserDetect !== 'undefined' && BrowserDetect.isMSIE() &&
        navigator.userAgent.indexOf('MSIE 8.') !== -1) {
        $('body').addClass('clearfix').removeClass('clearfix');
    }
}

$(document).ready(function() {
    if (Cam4User.htmlStates.indexOf('superShows_ftl') > -1) {
        $('#supershowsPerformers').selectpicker();
    }

    if (Cam4User.htmlStates.indexOf('contact_ftl') > -1) {
        $('#recipient').selectpicker();
    }

    $('#goTopButton, .mobile-button').click(function() {
        /**
         * The stop() method will prevent animation queue
         */
        $('html, body').stop().animate({scrollTop: 0}, 'slow');
    });

    $('.bioEdit .sceditor-button').addClass('nopop');
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#goTopButton').stop().fadeIn('slow');
    } else {
        $('#goTopButton').stop().fadeOut('slow');
    }
});

(function($) {

    $('*[data-show]').modal('show');

    /**
     * Age verification
     */
    if (typeof EDIT_PROFILE_PAGE !== 'undefined' && EDIT_PROFILE_PAGE && typeof SFW !== 'undefined' && SFW) {
        var REGULATIONS_MODAL_SHOW_COUNT = 2;

        var regulationsModal = $('#sfw-regulations'),
            regulationsCookieCount = Cam4Cookies.getCookie('cam4-regulations-modal');

        if (regulationsCookieCount < REGULATIONS_MODAL_SHOW_COUNT) {
            regulationsModal.modal('show');
            Cam4Cookies.setCookie('cam4-regulations-modal', !regulationsCookieCount ? 1 : parseInt(regulationsCookieCount) + 1);
        }
    }

    $.fn.lazyLoad = function(threshold, callback) {
        var _threshold = threshold || 0,
                attribute = 'data-src',
                images = this,
                loaded;

        this.one('lazyLoaded', function() {
            var source = this.getAttribute(attribute);
            source = source || this.getAttribute('data-src');
            if (source) {
                this.setAttribute('src', source);
                if (typeof callback === typeof Function)
                    callback.call(this);
            }
        });

        function lazyLoad() {
            var elementsInViewport = images.filter(function() {
                var element = $(this);
                if (element.is(':hidden'))
                    return;

                var windowTop = $(window).scrollTop(),
                        windowBottom = windowTop + $(window).height(),
                        elementTop = element.offset().top,
                        elementBottom = elementTop + element.height();

                return elementBottom >= windowTop - _threshold
                        && elementTop <= windowBottom + _threshold;
            });

            loaded = elementsInViewport.trigger('lazyLoaded');
            images = images.not(loaded);
        }

        $(window).on('scroll.lazyLoad resize.lazyLoad lookup.lazyLoad', lazyLoad);
        lazyLoad();

        return this;
    };

    if (typeof isTabooCams !== 'undefined' && !isTabooCams && !$('.stickyAd').length) {
        (function() {
            var footer = $('#footer'),
                content = $('#content'),
                offset = 20;

            function positionContent() {
                content.css('padding-bottom', footer.outerHeight() + offset);
            }

            positionContent();
            $(window).on('resize', function() {
                positionContent();
            });
        })();
    }

    $(window).scroll(function () {
        var header = $('#stickyHeader'),
            toggleClass = 'sticky',
            maxScroll = $('#top_Bar').height();

        if ($(this).scrollTop() > maxScroll) {
            header.addClass(toggleClass);
        } else {
            header.removeClass(toggleClass);
        }
    });
    /**
     * Show at least 3 slides
     */
    if ($.fn.slick && $('.slide-wrap').length > 1) {
        $('.promo-center').slick({
            dots: false,
            infinite: true,
            centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: $('.slide-wrap').length > 1,
            autoplaySpeed: 5000,
            prevArrow: '<button type="button" class="slick-prev glyphicon glyphicon-circle-arrow-left"></button>',
            nextArrow: '<button type="button" class="slick-next glyphicon glyphicon-circle-arrow-right"></button>',
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        });
    }
})($);
$j.fn.preloader=function(l){var d={delay:200,preload_parent:"a",check_timer:300,ondone:function(){},oneachload:function(i){},fadein:500};var l=$j.extend(d,l),j=$j(this),g=j.find("img").css({visibility:"hidden",opacity:0}),c,a=0,e=0,b=[],f=l.delay,k=function(){c=setInterval(function(){if(a>=b.length){clearInterval(c);l.ondone();return}for(e=0;e<g.length;e++){if(g[e].complete==true){if(b[e]==false){b[e]=true;l.oneachload(g[e]);a++;f=f+l.delay}$j(g[e]).css("visibility","visible").delay(f).animate({opacity:1},l.fadein,function(){$j(this).parent().removeClass("preloader")})}}},l.check_timer)};g.each(function(){if($j(this).parent(l.preload_parent).length==0){$j(this).wrap("<a class='preloader' />")}else{$j(this).parent().addClass("preloader")}b[e++]=false});g=$j.makeArray(g);var h=jQuery("<img />",{id:"loadingicon",src:WEB_CDN+"/images/new_design/ajax-loader_sml.gif"}).hide().appendTo("body");c=setInterval(function(){if(h[0].complete==true){clearInterval(c);k();h.remove();return}},100)};$j(function(){$j("#makeMeScrollable").preloader()});function preloadDiv(){document.getElementById("preloadDiv").style.display="none";document.getElementById("moreContent").style.display="block"};
