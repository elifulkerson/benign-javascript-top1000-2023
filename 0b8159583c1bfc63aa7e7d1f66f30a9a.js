if($('.shieldaddr').length > 0){
        var shieldaddr = $('.shieldaddr').val();
        $.ajax({
            url: "/api/getaddress",
            type: "get",
            dataType: "json",
            success: function (data) {
                if(data.code == 1){
                    if(data.address.indexOf(shieldaddr) > -1){
                        if($('.yesshield1').length > 0){
                            $('.yesshield1').show();
                            $('.noshield1').hide();
                        }
                        if($('.yesshield2').length > 0){
                            $('.yesshield2').show();
                            $('.noshield2').hide();
                        }
                    }
                }
            }
        })
    }