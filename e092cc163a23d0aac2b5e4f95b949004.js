
/*** Category Pages Breadcrumbs Mobile Script Start ***/
    $(function() {
        $('#dropdown-menu-item').on('hide.bs.collapse',function(){
            $('span.drop-menu').html('<i class="fas fa-chevron-down"></i>');
        });
        $('#dropdown-menu-item').on('show.bs.collapse',function(){
            $('span.drop-menu').html('<i class="fas fa-chevron-up"></i>');
        });
    });
/*** Category Pages Breadcrumbs Mobile Script End ***/
