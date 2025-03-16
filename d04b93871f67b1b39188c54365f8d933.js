function gotomyorder(){
            forward(79, 100, '//www.mama.cn/');
            var q= $("#datepicker").val();
            //SetCookie('orderdate',q);
            var inurl= '//www.mama.cn/index.php?g=Home&a=Qrqm&d=skip&orderdate='+q;
            window.open(inurl,"_blank");
        }
        function SetCookie(name,value,domain){ //两个参数，一个是cookie的名子，一个是值
            var Days = 1; //此 cookie 将被保存 1 天
            var exp = new Date();    //new Date("December 31, 9998");
            exp.setTime(exp.getTime() + Days*24*60*60*1000);

            document.cookie = name + "="+ escape (value) +";expires=" + exp.toGMTString();
        }