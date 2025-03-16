if (navigator.userAgent.indexOf("iPhone") > 0 || navigator.userAgent.indexOf("Android") > 0 || navigator.userAgent.indexOf("iPod") > 0) {  //手机端跳转
            var patt1 = new RegExp("[0-9]*_[0-9]*");
            var url = patt1.exec(location.href);
            if (location.href == "http://www.360doc.com/" || location.href == "http://www.360doc.com/index.html") {
                self.location = "http://www.360doc.cn/";
            }
        }