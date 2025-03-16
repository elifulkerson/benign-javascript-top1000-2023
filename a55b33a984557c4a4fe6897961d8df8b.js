if(document.cookie.indexOf('ukid=') == -1){
        $.ajax({
            url: 'https://apis.kompas.com/api/activity/user',
            type: 'get',
            dataType: "json",
            success: function (res) {

                let ukid = res.ukid;
                let date = new Date();
                    date.setDate(date.getDate() + 1);
                let expired = date.toUTCString();
                let domain = '.kompasiana.com';

                document.cookie = "ukid="+ ukid +"; expires="+ expired +"; domain="+ domain +"; path=/"; // set cookie
            }
        });
    }