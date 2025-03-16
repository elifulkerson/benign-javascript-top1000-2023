//播放图片地址
                var pics='https://tx3.cdn.caijing.com.cn/2023/0620/1687225752699.jpg|https://tx2.cdn.caijing.com.cn/2023/0724/1690186109669.jpg|https://tx1.cdn.caijing.com.cn/2023/0908/1694154568119.jpg|https://img2.caijing.com.cn/2023/0818/1692331452276.jpg|https://tx2.cdn.caijing.com.cn/2023/0620/1687226366585.jpg';
                var mylinks='http://politics.caijing.com.cn/20230928/4962643.shtml|http://politics.caijing.com.cn/20230928/4962646.shtml|http://politics.caijing.com.cn/20230908/4958643.shtml|http://politics.caijing.com.cn/20230818/4953940.shtml|http://politics.caijing.com.cn/20230620/4943047.shtml'
                //图片对应描
                var texts='习近平强调 积极参与世界贸易组织改革|中共中央政治局召开会议 习近平主持会议|习近平在黑龙江尚志市看望慰问受灾群众|习近平出席31届世界大学生夏季运动会开幕式|习近平会见美国国务卿布林肯';
                var ivWidth=270;//自定义宽
                var ivHeight=218;//自定义高
                var _str='https://img1.caijing.com.cn/retain/js/2010/imageView.swf';//flash文件地址
                _str+="?Time="+"5000";//图片自动切换时间：毫秒
                _str+="&Titles="+encodeURI(texts);//标题内容
                _str+="&Mode="+"6";//窗口模式：6－淡入淡出，播放按钮；7－随机
                _str+="&ImgUrls="+pics;//图片地址
                _str+="&LinkUrls="+escape(mylinks);//链接地址
                _str+="&TitlesColor="+"0x2c4484";//标题文字颜色
                _str+="&TitlesLinkColor="+"0x2c4484";//文字链接颜色（鼠标划入标题时）
                _str+="&TitlesBgColor="+"0xffffff";//标题衬底颜色
                _str+="&TitlesBgAlpha="+"0.3";//标题衬底透明度
                _str+="&TBHeight="+"21";//标题衬底高度
                _str+="&Font="+"宋体";//标题文字字体
                _str+="&Size="+"12";//标题文字大小
                _str+="&Weight="+"bold";//标题文字粗细
                _str+="&Align="+"left";
                var f = new hxFoucs('index_jdtp',pics,mylinks,texts,_str,ivWidth,ivHeight);
                f.init("sjdt_botbg","sjdt_num","sjdt_num_show","sjdt_tit");
                f.create();