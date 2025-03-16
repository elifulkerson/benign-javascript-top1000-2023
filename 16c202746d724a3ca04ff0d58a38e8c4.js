//播放图片地址
									//图片大小限制：300*220
									var pics='https://tx3.cdn.caijing.com.cn/2019/0805/1564975133333.png|https://tx3.cdn.caijing.com.cn/2019/0802/1564713621383.png|https://img2.caijing.com.cn/2019/0802/1564714368157.jpg|https://tx1.cdn.caijing.com.cn/2019/0802/1564714225649.jpg|https://img1.caijing.com.cn/2019/0802/1564714281717.jpg|https://tx3.cdn.caijing.com.cn/2019/0802/1564714043132.jpg|https://tx3.cdn.caijing.com.cn/2019/0802/1564713980741.jpg|https://img5.caijing.com.cn/2019/0801/1564645651701.jpg|https://img3.caijing.com.cn/2019/0606/1559788027490.jpg|https://img6.caijing.com.cn/2019/0605/1559745295628.jpg';
									var mylinks='http://tech.caijing.com.cn/20190805/4607092.shtml|http://tech.caijing.com.cn/20190802/4606711.shtml|http://tech.caijing.com.cn/20190802/4606713.shtml|http://tech.caijing.com.cn/20190802/4606706.shtml|http://tech.caijing.com.cn/20190802/4606707.shtml|http://tech.caijing.com.cn/20190802/4606708.shtml|http://tech.caijing.com.cn/20190802/4606710.shtml|http://tech.caijing.com.cn/20190801/4606590.shtml|http://tech.caijing.com.cn/20190606/4593980.shtml|http://tech.caijing.com.cn/20190605/4593932.shtml'
									//图片对应描
									var texts='滴滴自动驾驶升级为独立公司 滴滴CTO张博兼任新公司CEO|腾讯视频《陈情令》超前点播:谁剥夺了VIP的追剧快乐|世界首富贝索斯卖亚马逊股票套现18亿美元 疑为太空公司筹经费|网络文学：向涉黄说“不”|“X分钟带你看完电影” “谷阿莫们”侵权了吗|全球最吸金视频App排行：YouTube榜首 快手排名第二|快递企业泄露个人信息或将被列入信用“黑名单”|百度回应“HR抄袭小米招聘信息”：系冒充 已封禁|华为全力支持中国运营商建好中国5G|滴滴程维：安全生产月不搞形式化 管理者需下一线';
									var ivWidth=300;//自定义宽
									var ivHeight=240;//自定义高
									var _str='http://ws1.cdn.caijing.com.cn/js/2010/imageView.swf';//flash文件地址
									_str+="?Time="+"5000";//图片自动切换时间：毫秒
									_str+="&Titles="+encodeURI(texts);//标题内容
									_str+="&Mode="+"6";//窗口模式：6－淡入淡出，播放按钮；7－随机
									_str+="&ImgUrls="+pics;//图片地址
									_str+="&LinkUrls="+escape(mylinks);//链接地址
									_str+="&TBHeight="+"20";//标题衬底高度
									_str+="&Font="+"宋体";//标题文字字体
									_str+="&Size="+"12";//标题文字大小
									_str+="&Weight="+"normal";//标题文字粗细
									_str+="&Align="+"left";
									var f = new hxFoucs_2('index_bjtj',pics,mylinks,texts,_str,ivWidth,ivHeight);
									 f.init_2("rtjdt_botbg","rtjdt_num","rtjdt_num_show","rtjdt_tit");
									 f.create_2();