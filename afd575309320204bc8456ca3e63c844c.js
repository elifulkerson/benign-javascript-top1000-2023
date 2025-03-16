$(function(){
        $(".gtarcade_plat_frontpoint_new").click(function (data) {
            toTakeTag($(this).attr('data_gtarcade_plat_frontpoint'));
        })
        function toTakeTag(data) {
            var _DotStr = data,
                _DotArr = _DotStr.split(','),
                _module = _DotArr[0],
                _function = _DotArr[1],
                _target_url = _DotArr[3],
                _value = _DotArr[2];
            yoozoo.customDot({
                    event_type: "1",
                    key_module: _module,
                    key_function: _function,
                    target_url: _target_url,
                    value:_value
                }
            )
        }
    })