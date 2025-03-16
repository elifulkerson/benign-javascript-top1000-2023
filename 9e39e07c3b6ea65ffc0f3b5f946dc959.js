//############################################################
//此页面生成时间：2023-10-23 12:09:20
//############################################################

//头条横幅新闻(分站使用)_文字
var tthfxw_fenzhan_word="<font>时政微周刊丨总书记的一周（10月16日—10月22日）</font>";
//头条横幅新闻(分站使用)_链接
var tthfxw_fenzhan_link="https://news.rednet.cn/content/646754/67/13190070.html";
//头条横幅新闻(分站使用)_是否图片
var tthfxw_is_img= "0";
//头条横幅新闻(分站使用)_文字转图片尺寸
var tthfxw_font_size= "36";
//头条横幅新闻(分站使用)_文字转图片文字颜色
var tthfxw_font_color= "#05337E";
//头条横幅新闻(分站使用)_文字转图片背景颜色
var tthfxw_bgcolor= "";
//文字大小(请慎改)_文字
var wzdx_qsg_word="35";
getScript('//j.rednet.cn/site/static/common/js/toutiao_redcloud_20190201.js',function(o){console.log('加载脚本成功.')});function getScript(url,success){console.log('准备动态加载脚本：'+url);var script=document.createElement('script');script.src=url;var head=document.getElementsByTagName('head')[0],done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')){done=true;success();script.onload=script.onreadystatechange=null;head.removeChild(script);return this}};head.appendChild(script)};




/*** 生成图片 ***/
function textToImgs(text,fontsize,fontColor,lineHeight,bgcolor){

            if(fontsize == ''){fontsize = 33}
            if(text.length*fontsize<1400){
                var maxWidth = text.length*fontsize;
            }else{
                var maxWidth = 1400;
            }
      //每一行最多多少个字符
            var maxNumber = Math.floor(maxWidth/fontsize);

            var fontWeight = "bold";
            var maxHeight = (fontsize)*1.5 ;
            //console.log(canvas)
            var canvas = document.createElement('canvas'); //创建canvas画布
            canvas.height = maxHeight;//设置高度
            canvas.width = maxWidth;//设置宽度
            var ctx = canvas.getContext('2d');
            //ctx.letterspacing = "1px";
            canvas.style.letterspacing = '-12px';
            ctx.clearRect(0, 0, maxWidth, maxHeight);
            if(bgcolor != undefined && bgcolor != ""){
                ctx.fillStyle = bgcolor;
                ctx.fillRect(0,0,maxWidth,maxHeight);
            }
            ctx.strokeStyle = '#000'
            if(fontColor == ""){
                fontColor = "#05337E";
            }
            ctx.fillStyle = fontColor;
            ctx.font = fontWeight + " " + fontsize + "px sans-serif"; //fontsize + "px Arial " + "bolder";
            //top（顶部对齐） hanging（悬挂） middle（中间对齐） bottom（底部对齐） alphabetic是默认值
            ctx.textBaseline = 'middle';
            // text 文字，0起始距离，fontsize字体大小，maxWidth画布宽度
            ctx.fillText(text, 0, fontsize, maxWidth); 

            return canvas.toDataURL('image/png');
}
/*****/