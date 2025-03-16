$(function () {
            var ProvinceID = 0;
            var CityID = $("#CityIDVal").val();
            if (CityID > 0) {
                if (CityID == 320282)
                    ProvinceID = 320000;
                var CityIDP = CityID;
                ProvinceID = parseInt(CityIDP.substring(0, 2) + "0000")
            }
            $(".ProvinceSelect").val(ProvinceID);
            $(".ProvinceSelect").change()
            $(".CitySelect").val(CityID);
            $(".CitySelect").change();
        });