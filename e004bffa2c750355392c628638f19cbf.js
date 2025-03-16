//播放图片地址
            //图片大小限制：296*197
            var pics='https://tx1.cdn.caijing.com.cn/2023/0926/thumb_296_242_1695714003161.jpg|https://file.caijing.com.cn/images/nopic.gif|https://tx2.cdn.caijing.com.cn/2023/0629/thumb_296_242_1688053011484.png|https://tx3.cdn.caijing.com.cn/2022/1104/thumb_296_242_1667536952386.jpeg|https://img1.caijing.com.cn/2022/1031/thumb_296_242_1667187689495.jpeg';
            var mylinks='https://www.mercedes-benz.com.cn/|https://www.mercedes-benz.com.cn/|http://auto.caijing.com.cn/2023/0629/4944667.shtml|http://auto.caijing.com.cn/2022/1104/4898099.shtml|http://auto.caijing.com.cn/2022/1031/4896994.shtml'
            //图片对应描
            var texts='奔驰S级轿车|奔驰S级轿车|小鹏G6上市 售价区间为20.99万元起|起亚第五代Sportage狮铂拓界上市|东风风神奕炫马赫版上市';
            var ivWidth=296;//自定义宽
            var ivHeight=242;//自定义高
            var _str='http://ws1.cdn.caijing.com.cn/js/2010/imageView.swf';//flash文件地址
            _str+="?Time="+"5000";//图片自动切换时间：毫秒
            _str+="&Titles="+encodeURI(texts);//标题内容
            _str+="&Mode="+"6";//窗口模式：6－淡入淡出，播放按钮；7－随机
            _str+="&ImgUrls="+pics;//图片地址
            _str+="&LinkUrls="+escape(mylinks);//链接地址
            _str+="&TBHeight="+"25";//标题衬底高度
            _str+="&Font="+"宋体";//标题文字字体
            _str+="&Size="+"12";//标题文字大小
            _str+="&Weight="+"normal";//标题文字粗细
            _str+="&Align="+"center";
            var f = new cjFoucs('car_jdtp',pics,mylinks,texts,_str,ivWidth,ivHeight);
             f.init2("rtjdt_botbg","rtjdt_num","rtjdt_num_show","jjxj_tit");
             f.create2();