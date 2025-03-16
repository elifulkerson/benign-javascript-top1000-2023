var FechaModificacionHomePage = "";
        var HomePagepageCoords = "";
        var HomePagepageCoordsActual = "";
        var CheckFechaModificacionHomePage = "";
        var ctrlslideremoltv = 0;

        function CargaFechaModificacionHomePage() {
            var t = $.getJSON("/_portada/fecha_modificacion_json.aspx", function (e) { FechaModificacionHomePage = e.fechahome });
            CheckFechaModificacionHomePage = FechaModificacionHomePage;
            var reloadPort = setInterval("CompareFechaModificacionHomePage()", 180000);

            $(document).mousemove(function (e) {
                HomePagepageCoords = "( " + e.pageX + ", " + e.pageY + " )";
                var activareload = false;
                for (var i = 0; Config_h5.posActivas.length > i; i++) {
                    if (Config_h5.posActivas[i].continueTv == true) {
                        activareload = true;
                        break;
                    }
                }
                if (CheckFechaModificacionHomePage != FechaModificacionHomePage && CheckFechaModificacionHomePage != "" && FechaModificacionHomePage != "" && activareload == false) {
                    window.location = "/";
                }
            });
            HomePagepageCoordsActual = HomePagepageCoords;
        }
        function CompareFechaModificacionHomePage() {
            if (ctrlslideremoltv == 0) {
                if (HomePagepageCoordsActual == "")
                    HomePagepageCoordsActual = HomePagepageCoords;
                var activareload = false;
                for (var i = 0; Config_h5.posActivas.length > i; i++) {
                    if (Config_h5.posActivas[i].continueTv == true) {
                        activareload = true;
                        break;
                    }
                }
                var t = $.getJSON("/_portada/fecha_modificacion_json.aspx", function (dato) {
                    CheckFechaModificacionHomePage = dato.fechahome;
                    if (CheckFechaModificacionHomePage != FechaModificacionHomePage && HomePagepageCoordsActual != HomePagepageCoords && activareload == false) {
                        window.location = "/";
                    }
                });
            }
        }