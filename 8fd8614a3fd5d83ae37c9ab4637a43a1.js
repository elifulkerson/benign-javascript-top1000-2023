//定义焦点图类
function cjFoucs(panelId,picStr,mylinksStr,textsStr,moreStr,width,height){
	this.panel = cjFoucs.$(panelId);
	this.pic = picStr.split('|');
	this.mylinksStr = mylinksStr.split('|');
	this.textsStr = textsStr.split('|');
	this.len = cjFoucs.minInt([this.pic.length,this.mylinksStr.length,this.textsStr.length]);
	this.moreStr = moreStr;
	this.width = width;
	this.height = height;
	//当前显示
	this.showMark = 0;
	//定时器
	this.timing = null;
	this.timer = null;
	//自动切换间隔
	this.gap = parseInt(this.dealStr().Time);
	}

//焦点图方法
cjFoucs.prototype = {
	//初始化内容
	init2:function(botClass,numClass,showClass,titClass) {
		this.botClass=botClass;
		this.numClass=numClass;
		this.showClass=showClass;
		this.titClass=titClass;
		this.contrainer = document.createDocumentFragment();
		var res = this.dealStr();
		//alert(parseInt(res.TBHeight));
		//构建容器
		this.con = document.createElement('div');
		cjFoucs.css(this.con,{width:this.width+'px',height:this.height+'px',overflow:'hidden',position:'relative'});
		this.contrainer.appendChild(this.con);
		//构建图片容器
		this.imgCon = document.createElement('div');
		cjFoucs.css(this.imgCon,{width:this.width+'px',height:(this.height-parseInt(res.TBHeight))+'px',overflow:'hidden'});
		var tempHTML = '';
		for(var i=0;i<this.len;i++) {
			tempHTML += '<a href="'+this.mylinksStr[i]+'" target="_blank"><img src="'+this.pic[i]+'" border="0" width="'+this.width+'" height="'+(this.height-45)+'"/></a>';
			}
		this.imgCon.innerHTML = tempHTML;
		this.con.appendChild(this.imgCon);
		//构建文字底层
		this.markBg = document.createElement('div');
		cjFoucs.css(this.markBg,{width:this.width+'px',height:'25px',background:'#5b7c9d',position:'absolute',bottom:'20px'});
		this.con.appendChild(this.markBg);
		
		//构建文字容器
		this.wordCon = document.createElement('div');
		this.wordCon.className = this.titClass;
		cjFoucs.css(this.wordCon,{position:'absolute',bottom:'20px',width:(this.width)+'px',height:'20px','line-height':'20px',overflow:'hidden','text-align':res.Align,'font-size':res.Size+'px','font-family':res.Font,'font-weight':res.Weight});
		this.con.appendChild(this.wordCon);
		for(var k=0;k<this.len;k++) {
			var span = document.createElement('span');
			span.style.display = 'none';
			span.innerHTML = '<a href="'+this.mylinksStr[k]+'" target="_blank">'+this.textsStr[k]+'</a>';
			this.wordCon.appendChild(span);
			if(k==0) span.style.display = '';
			}

		//构建标签底层
		this.markBg2 = document.createElement('div');
		this.markBg2.className = this.botClass;
		cjFoucs.css(this.markBg2,{width:this.width+'px',height:'20px',position:'absolute',bottom:'0px'});
		this.con.appendChild(this.markBg2);

		//构建标签层
		this.markDiv = document.createElement('div');
		this.markCon = document.createElement('ul');
		this.markDiv.className = this.numClass;
		cjFoucs.css(this.markDiv,{position:'absolute',bottom:'0px',left:'0',width:'100%',height:'20px','margin':'0px','padding':'0px'});
		this.markDiv.appendChild(this.markCon);
		this.con.appendChild(this.markDiv);
		for(var j=1;j<=this.len;j++) {
			var li = document.createElement('li');
			cjFoucs.css(li,{'text-align':'center',overflow:'hidden','font-size':'12px','font-family':res.Font,cursor:'pointer'});
			if(j==1) li.className = this.showClass;
			if(j==1) li.style.border = 'none';

			li.innerHTML =  '<a href="'+this.mylinksStr[j-1]+'" target="_blank"></a>';
			this.markCon.appendChild(li);
			}
		},
	//处理this.moreStr
	dealStr:function() {
		var params = this.moreStr.split('?')[1].split('&');
		var res = {},arr1 = [],arr2 = [];
		for(var i=0;i<params.length;i++) {
			 arr1.push(params[i].split('=')[0]);
			 arr2.push(params[i].split('=')[1]);
			}
		for(var n=0;n<arr1.length;n++) {
			res[arr1[n]] = arr2[n];
			}
		return res;
		},
	//创建
	create2:function() {
		this.panel.appendChild(this.contrainer);
		this.bindEvent();
		this.auto();
		this.imgMouse();
		},
	//事件绑定
	bindEvent:function() {
		var _this = this;
		var arr = this.markCon.getElementsByTagName('li');
		var wordArr = this.wordCon.getElementsByTagName('span');
		for(var i=0;i<arr.length;i++) {
			arr[i].onmouseover = (function(i){
									return function() {
											if(_this.timing){
													clearInterval(_this.timing);
													_this.timing=null;
												}
											_this.tab(i);
									   }
								   })(i);
			   arr[i].onmouseout = function (){				
						_this.auto();			   
			   }
			}
		//焦点图切换效果初始设置：现在默认为淡入淡出
		var imglist = this.imgCon.getElementsByTagName('img');
		for(var j=0;j<imglist.length;j++) {
			cjFoucs.css(imglist[j],{position:'absolute',top:'0px',left:'0px',display:'none'});
			if(j==0) cjFoucs.css(imglist[j],{display:''});
			}
		},
	imgMouse:function(){
		var _this = this;
		var oCont = this.panel; 
		var imgCont = this.con.getElementsByTagName('div')[0];
		imgCont.onmouseover = oCont.onmouseover = function (){			
				if(_this.timing){
					clearInterval(_this.timing);
					_this.timing=null;
				}
			};
		imgCont.onmouseout = oCont.onmouseout = function (){
				_this.auto();
			};
		},
	//启动自动跳转
	auto:function() {
		var _this = this;	
		if(this.timing){
			clearInterval(this.timing);
			this.timing=null;
		}
		this.timing = setInterval(function(){
							_this.tab((_this.showMark==_this.len-1)?0:(_this.showMark+1));
					  },this.gap);
	},

	//切换
	tab:function(i) {
		if(this.timer){
			clearInterval(this.timer);
			this.timer=null;
		}
		var arr = this.markCon.getElementsByTagName('li');
		var wordArr = this.wordCon.getElementsByTagName('span');
		var imglist = this.imgCon.getElementsByTagName('img');
		this.cssback();
		arr[i].className = this.showClass;
		wordArr[i].style.display = '';
		cjFoucs.css(imglist[i],{opacity:'1',display:''});
		this.fade(i);
		},
	//样式回归
	cssback:function() {
		var arr = this.markCon.getElementsByTagName('li');
		var wordArr = this.wordCon.getElementsByTagName('span');
		var imglist = this.imgCon.getElementsByTagName('img');
		for(var i=0;i<arr.length;i++) {
		arr[i].className = '';
			wordArr[i].style.display = 'none';
			imglist[i].style.display = 'none';
			}
		},
	//淡入淡出效果
	fade:function(n) {
		var _this = this;
		var imglist = this.imgCon.getElementsByTagName('img');
		var nowObj = imglist[this.showMark];
		var toObj = imglist[n];
		var sumtime = 400,frame = 20;
		var mark = 0.04;
		cjFoucs.css(nowObj,{opacity:'1',display:''});
		cjFoucs.css(toObj,{opacity:'0',display:''});
		if(this.timer){
			clearInterval(this.timer);
			this.timer=null;
		}
		this.timer = setInterval(
			function() {
				if(mark<1) {
					cjFoucs.css(nowObj,'opacity',1-mark);
					cjFoucs.css(toObj,'opacity',mark);
					mark+=0.04;
					}
				else {
					clearInterval(_this.timer);
					cjFoucs.css(nowObj,{opacity:'0',display:'none'});
					cjFoucs.css(toObj,{opacity:'1',display:''});
					_this.showMark = n;
					//_this.auto();
					}
				},
			frame
			);
		}
};



//静态方法
cjFoucs.$ = function(element) {
	var el;
	if(typeof element == 'string') el = document.getElementById(element);
	else el = element;
	if(!el) return null;
	else return el;
}
cjFoucs.camelCase = 	function(str){
		return str.replace(/-\D/g, function(match){
				return match.charAt(1).toUpperCase();
			}
		);
}
cjFoucs.IE = window.ActiveXObject?true:false;
cjFoucs.css = function(ele,name,value) {
      var ele = cjFoucs.$(ele);
      if(typeof name == 'undefined' && typeof value == 'undefined') {
			return ele.style.cssText;
		}
		else if(typeof name == 'string' && typeof value == 'undefined') {
			if (name == 'opacity' && cjFoucs.IE && ele.style.filter) 
				return parseFloat(ele.style.filter.replace(/alpha\(opacity=/, '').replace(/\)/, '')) / 100;
			else {
				name = cjFoucs.camelCase(name);
				return ele.style[name];
			}
		}
		else if (typeof name == 'object' && typeof value == 'undefined') {
				var params = name;
				for (var n in params) {
					var param;
					if (n == 'opacity' && cjFoucs.IE) {
						ele.style.filter = 'alpha(opacity=' + parseInt(parseFloat(params[n]) * 100) + ')';
					}
					else {
						param = cjFoucs.camelCase(n);
						ele.style[param] = params[n];
					}
				}
		}		
		else 
			if (typeof name == 'string' && typeof value != 'undefined') {
				if (name == 'opacity' && cjFoucs.IE) 
					ele.style.filter = 'alpha(opacity=' + parseInt(parseFloat(value) * 100) + ')';
				else {
					name = cjFoucs.camelCase(name);
					ele.style[name] = value;
				}
			}				      
  }
cjFoucs.minInt = function(arr) {
		var temp = arr[0];
	    for(var i=0;i<arr.length;i++) {
			if(arr[i]<temp) temp = arr[i];
			}
	   return temp;
	}