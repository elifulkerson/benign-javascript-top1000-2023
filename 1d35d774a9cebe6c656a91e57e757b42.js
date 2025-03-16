/* <![CDATA[ */
    function press_key(e,ident_inp) {
        if (((document.all) ? e.keyCode : e.which) == "13") {
            switch (ident_inp) {
                case "frase_busqueda":
                    BuscarGeneral();
                    break;
                case "queAmarilla":
                    buscadorAmarillas();
                    break;
                case "busxr":
                    envioMapas();
                    break;
                    
                default:
                    BuscarGeneral();
                    break;
            }
            
        } else {            
            //$("#frase_busqueda").val($("#frase_busqueda").val() + e.key);
            $("#" + ident_inp).val(removeCodeBusc($("#" + ident_inp).val() + e.key));
            
        }
    };
    function BuscarGeneral() {
        var strQUERY;
        var strTipoBusqueda;
        strQUERY = document.getElementById("frase_busqueda").value;
        window.location = "/buscador/?query=" + Url.encode(strQUERY.toLowerCase().replace(' del ', ' ').replace(' de ', ' ').replace('*', ' ').replace(':', ' ').replace(/"/g, ' ').replace(/'/g, ' ').replace(/\./g, ' ').replace(/\\/g, ' ').replace(/\//g, ' '));
    }
    function removeCodeBusc(text) {
        var str = text.toString();                
        str = str.replace(/</g, "").replace(/>/g, "");
        str = str.replace(/#/g, "");
        str = str.replace(/%/g, "");
        str = str.replace(/&/g, "");
        str = str.replace(/"/g, "");
        str = str.replace(/'/g, "");
        str = str.replace(/=/g, "");
        str = str.replace(/\$/g, "");
        str = str.replace(/\)/g, "");
        str = str.replace(/\(/g, "");
        str = str.replace(/\//g, "");
        str = str.replace(/\¿/g, "");
        str = str.replace(/\?/g, "");
        str = str.replace(/\!/g, "");
        str = str.replace(/\¡/g, "");
        str = str.replace(/\+/g, "");
        str = str.replace(/\-/g, "");
        str = str.replace(/\*/g, "");
        str = str.replace(/\_/g, "");
        str = str.replace(/\|/g, "");
        str = str.replace(/\°/g, "");
        str = str.replace(/\:/g, "");
        str = str.replace(/\;/g, "");
        str = str.replace(/\./g, "");
        str = str.replace(/\{/g, "");
        str = str.replace(/\}/g, "");
        str = str.replace(/\[/g, "");
        str = str.replace(/\]/g, "");
        str = str.replace(/\,/g, "");
        str = str.replace(/\@/g, "");
        str = str.replace(/\\/g, "");
        return str;
    }

    function removeCodeBusc2(nombre_inp) {
        var str = $("#" + nombre_inp).val().toString();                
        str = str.replace(/</g, "").replace(/>/g, "");
        str = str.replace(/#/g, "");
        str = str.replace(/%/g, "");
        str = str.replace(/&/g, "");
        str = str.replace(/"/g, "");
        str = str.replace(/'/g, "");
        str = str.replace(/=/g, "");
        str = str.replace(/\$/g, "");
        str = str.replace(/\)/g, "");
        str = str.replace(/\(/g, "");
        str = str.replace(/\//g, "");
        str = str.replace(/\¿/g, "");
        str = str.replace(/\?/g, "");
        str = str.replace(/\!/g, "");
        str = str.replace(/\¡/g, "");
        str = str.replace(/\+/g, "");
        str = str.replace(/\-/g, "");
        str = str.replace(/\*/g, "");
        str = str.replace(/\_/g, "");
        str = str.replace(/\|/g, "");
        str = str.replace(/\°/g, "");
        str = str.replace(/\:/g, "");
        str = str.replace(/\;/g, "");
        str = str.replace(/\./g, "");
        str = str.replace(/\{/g, "");
        str = str.replace(/\}/g, "");
        str = str.replace(/\[/g, "");
        str = str.replace(/\]/g, "");
        str = str.replace(/\,/g, "");
        str = str.replace(/\@/g, "");
        str = str.replace(/\\/g, "");
        $("#" + nombre_inp).val(str);
    }