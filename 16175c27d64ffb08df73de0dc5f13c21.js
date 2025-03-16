$(function () {
        $(".ProvinceSelect").change(function () {
            var province = $(this).val();
            if (province == 1) {
                $(".CitySelect").find("option").remove();
                $(".AreaSelect").find("option").remove();
                $(".CitySelect").append("<option value='0'> -- 全国 -- </option>");
                $(".AreaSelect").append("<option value='0'> -- 全国 -- </option>");
                $("[name='F_ProvinceID']").val(0);
                $("[name='F_CityID']").val(0);
                $("[name='F_AreaID']").val(0);
            } else if (province != 710000 && province != 810000 && province != 820000) {
                $(".CitySelect").find("option").remove();
                for (var i = 0; i < ProvinceMap[province].length; i++) {
                    $(".CitySelect").append("<option number='" + ProvinceMap[province][i].number + "' value='" + ProvinceMap[province][i].id + "'>" + ProvinceMap[province][i].value + "</option>");
                }
                $(".CitySelect").find("option:eq(0)").prop("selected", true);
                var city = $(".CitySelect").find("option:eq(0)").attr("value");
                $("[name='F_CityID']").val(city);

                $(".AreaSelect").find("option").remove();
                for (var i = 0; i < ProvinceMap[city].length; i++) {
                    $(".AreaSelect").append("<option value='" + ProvinceMap[city][i].id + "'>" + ProvinceMap[city][i].value + "</option>");
                }
                $(".AreaSelect").find("option:eq(0)").prop("selected", true);
                $("[name='F_AreaID']").val($(".AreaSelect").val());
            }
            $("[name='F_ProvinceID']").val(province);
        });
    });