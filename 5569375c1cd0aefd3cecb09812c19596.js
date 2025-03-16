//播放图片地址
        var pics='https://tx2.cdn.caijing.com.cn/2023/1016/1697420440410.png|https://tx3.cdn.caijing.com.cn/2023/1015/1697352836395.png|https://tx1.cdn.caijing.com.cn/2023/1013/1697182990236.jpg|https://img5.caijing.com.cn/2023/1013/1697158818213.png|https://tx1.cdn.caijing.com.cn/2023/1013/1697160090707.jpg';
        var mylinks='http://tech.caijing.com.cn/20231016/4964663.shtml|http://tech.caijing.com.cn/20231015/4964624.shtml|http://tech.caijing.com.cn/20231013/4964457.shtml|http://tech.caijing.com.cn/20231013/4964300.shtml|http://tech.caijing.com.cn/20231013/4964307.shtml'
        //图片对应描
        var texts='Mark Gurman：苹果将为未拆封iPhone更新系统，免开箱即可更新|动视暴雪员工很高兴被微软收购|任天堂Switch今年销量已超去年：上周售出110241台|谷歌AI功能升级，将允许用户根据文本提示直接创建图片|格力官方辟谣董明珠礼品卡抽奖活动';
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
        var f = new hxFoucs('index_kj',pics,mylinks,texts,_str,ivWidth,ivHeight);
        f.init("kj_botbg","kj_num","kj_num_show","kj_tit");
        f.create();