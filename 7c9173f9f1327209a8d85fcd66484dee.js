var altIco = 1;
    var TvFlo = {
        followmeTV: function () {
            if(Config_h5.envivoPlay){
                if ($(window).scrollTop() >= "1200" && $(window).scrollTop() <= "2400") {
                    $("#videoprin").addClass("flotaTV");
					
                    if (document.getElementById("flotingTV") == null) {
                        $("#videoprin").prepend('<div id="flotingTV"><a href="javascript:void(0);" id="expandoflotaTV"><i class="fa fa-expand" aria-hidden="true"></i></a><a href="javascript:TvFlo.closefollowmeTV();"><i class="fa fa-times" aria-hidden="true"></i></a></div>');
                        $("#textoenvivo").append('<span class="logo_etv_video"><a href="//tv.emol.com/" target="_blank"><img src="' + GlobalHost + '/img/logo-animado-emoltv.gif" height="24" alt="Logo EmolTV" border="0"></a></span>');
                        $('#expandoflotaTV').click(function () {
                            $("#videoprin").toggleClass('rezflotaTV');
                            if (altIco == 1) {
                                $('#expandoflotaTV i').switchClass('.fa fa-expand', '.fa fa-compress', 'fast');
                                altIco--;
                            } else {
                                $('#expandoflotaTV i').switchClass('.fa fa-compress', '.fa fa-expand', 'fast');
                                altIco++;
                            }
                            $("#textoenvivo").toggleClass('titleflotaTV');
                            return $("#videoprin").hasClass('rezflotaTV');
                        });
                        $("#videoprin").draggable();
                    }
                    if (!($("#contenedor_caja2 .ghostTv")[0])){$('<div class="ghostTv"></div>').insertBefore("#videoprin")}
                }else{
                    $("#videoprin").removeClass("flotaTV rezflotaTV");
                    $("#videoprin").removeAttr("style");
                    $("#textoenvivo").removeClass("titleflotaTV");
                    $("#flotingTV").remove();
                    $(".ghostTv").remove();
                    $("#textoenvivo span").remove();
                }
            }else{
                $("#videoprin").removeClass("flotaTV rezflotaTV");
                $("#videoprin").removeAttr("style");
                $("#textoenvivo").removeClass("titleflotaTV");
                $("#flotingTV").remove();
                $("#textoenvivo span").remove();
            }
        },
        closefollowmeTV: function () {
            $("#videoprin").removeClass("flotaTV rezflotaTV");
            $("#videoprin").removeAttr("style");
            $("#textoenvivo").removeClass("titleflotaTV");
            $("#flotingTV").remove();
            $("#textoenvivo span").remove();
            $(".ghostTv").remove();
            Config_h5.envivoPlay = false;
        }
    };

    $(window).scroll(function () {
        (TvActDes) ? TvFlo.followmeTV() : "";
    });