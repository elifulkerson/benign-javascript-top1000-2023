if (getCookie("c_user_i") != undefined && getCookie("c_user_i") != '' && getCookie("c_user_p") != undefined && getCookie("c_user_p") != '') {
            var userId = getCookie("c_user_i");        
            var ArrayU = JSON.parse(unescape(getCookie("c_user_p")));
            var temp = ArrayU.nick.removeAccents().split(' ').join('-');
            var linkPerfilU = "https://comentarista.emol.com/" + userId + "/" + temp + ".html";
            document.getElementById("linkUser").href = linkPerfilU;
    }
    else {

        $("#ucHomePage_cuColumnista_cont_promo").hide();
        $("#ucHomePage_cuColumnista_cont_caja_columnista").removeClass("cont_comment_promo");
    }

    function loadingPromo() {
        $("#cont_info").toggle();
        $("#fUp").toggle();
        $("#fDw").toggle();
        
        
    }