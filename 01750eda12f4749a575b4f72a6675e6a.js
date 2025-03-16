$(function () {
        $.ajax({
            url: '/json/getlogininfo/?v=' + Math.random(),
            type: 'get',
            dataType: 'html',
            success: function (obj) {
                $('#login_box').prepend(obj);
            },
            error: function (ex) { }
        });
    })