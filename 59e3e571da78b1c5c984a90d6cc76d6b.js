if (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("Android") > 0 || navigator.userAgent.indexOf("iPod") > 0) {  //手机端跳转
            if (location.href == "http://www.360doc.com/book.html") {
                self.location = "http://www.360doc.cn/index.html?classid=1&subclassid=0";
            } else {
                self.location = "http://www.360doc.cn/";
            }
        }
        if (navigator.userAgent.toLowerCase().indexOf("micromessenger") > -1) {
            if (location.href == "http://www.360doc.com/book.html") {
                self.location = "http://wx.360doc.com.cn/book/weixin/bookindex.html";
            } else { 
                self.location = "http://wx.360doc.com.cn/index/weixin.aspx"; 
            }
          }