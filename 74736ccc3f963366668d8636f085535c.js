/**
 * 우단 방송관련 스크립트
 */
(function ($) {
    var domain = $('#broadcastSection').attr('data-broadcast-domain')
        ,rightmenu = '#'+domain+'Right'
        ,saveData = {}
        ,$section = $(rightmenu+' #broadcastSection')
        ,timer = null
        ,channel = 35;

    /* send data */
    saveData.channel = channel;
    
    $section.find('button.broadcast-refresh').on('click', function() {
        $section.css('opacity', '.6');
        
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(function () {
            $.ajax({
            url : '//www.inven.co.kr/common/module/broadcast/refresh.ajax.php',
            type : 'POST',
            data: saveData,
            success: function(r) {
                if (typeof r == 'object' && r.status) {
                    $section.find('.broadcaster-focus').html(r.contents.focus);
                    $section.find('.broadcaster').html(r.contents.list);
                } else {
                    window.alert('방송을 새로고침 할 수 없습니다.\n\n잠시 후 다시 시도해주세요.');
                }

                $section.css('opacity', '1.0');
                }
            });
        }, 250)
    })

    // 더보기 버튼
    $section.find('button.broadcast-more').on('click', function() {
        if (domain == 'webzine') {
            location.href= '//www.inven.co.kr/webzine/stream/';
        }else {
            location.href = '//'+domain+'.inven.co.kr/dataninfo/stream/';
        }
    })
})(jQuery)