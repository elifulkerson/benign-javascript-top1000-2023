jQuery(function($) {
    $('#wrapper-menu-principal').click(function(){
        var ancho = $('#wrapper-menu-principal').width();
        if (ancho>0 && ancho<100){
            var visible = $('#masthead').css('overflow');
            if (visible === 'hidden'){
                $('#masthead').css('overflow','visible');
            }else{
                $('#masthead').css('overflow','hidden');
            }
        }
    });
});
