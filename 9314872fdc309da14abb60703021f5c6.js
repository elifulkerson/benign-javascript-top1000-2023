//播放图片地址
var pics='https://img4.caijing.com.cn/2022/0915/1663202083377.jpg|https://tx2.cdn.caijing.com.cn/2022/0914/1663134313176.jpg|https://tx2.cdn.caijing.com.cn/2022/0915/1663198321706.jpg|https://tx1.cdn.caijing.com.cn/2022/0915/1663199211617.jpg|https://tx2.cdn.caijing.com.cn/2022/0914/1663134313176.jpg';
var mylinks='http://tech.caijing.com.cn/20220915/4889396.shtml|http://tech.caijing.com.cn/20220914/4889224.shtml|http://tech.caijing.com.cn/20220915/4889373.shtml|http://tech.caijing.com.cn/20220915/4889374.shtml|http://tech.caijing.com.cn/20220914/4889224.shtml'
//图片对应描
var texts='亚马逊将允许商家进行电子邮件营销|消息称三星将推出无实体按键手机|实测：iPhone14ProMax电池续航提升两小时|腾讯音乐申请以介绍方式于港交所主板上市|消息称三星将推出无实体按键手机';
var ivWidth=270;//自定义宽
var ivHeight=140;//自定义高
var _str='http://img1.caijing.com.cn/js/2010/imageView.swf';//flash文件地址
_str+="?Time="+"5000";//图片自动切换时间：毫秒
_str+="&Titles="+encodeURI(texts);//标题内容
_str+="&Mode="+"6";//窗口模式：6－淡入淡出，播放按钮；7－随机
_str+="&ImgUrls="+pics;//图片地址
_str+="&LinkUrls="+escape(mylinks);//链接地址
_str+="&TitlesColor="+"0x2c4484";//标题文字颜色
_str+="&TitlesLinkColor="+"0x2c4484";//文字链接颜色（鼠标划入标题时）
_str+="&TitlesBgColor="+"0xffffff";//标题衬底颜色
_str+="&TitlesBgAlpha="+"0.3";//标题衬底透明度
_str+="&TBHeight="+"10";//标题衬底高度
_str+="&Font="+"宋体";//标题文字字体
_str+="&Size="+"12";//标题文字大小
_str+="&Weight="+"bold";//标题文字粗细
_str+="&Align="+"left";
var f = new hxFoucs('index_lscj',pics,mylinks,texts,_str,ivWidth,ivHeight);
f.init("kj_botbg","kj_num","kj_num_show","kj_tit");
f.create();