jQuery(document).ready(function () {
        try{
            // 접속아이피 지역 정보
            var cookieValKeepKoreaSite=TMCookieUtil.getSubCookie(2, 'KEEP_KOREA_SITE').toUpperCase();
            var cookieValConnIpLoc=TMCookieUtil.getSubCookie(2, 'CONN_IP_LOC').toUpperCase();

            if(cookieValConnIpLoc !== 'DOM' && cookieValKeepKoreaSite !== 'Y'){
                jQuery.ajax({
                    url          :"//www.11st.co.kr/browsing/Main.tmall?method=getDomesticAccessYnAjax",
                    type         :"post",
                    dataType     :"jsonp",
                    scriptCharset:"UTF-8",
                    crossDomain  :true,
                    success      :function (data){
                        if(data.result==="N"){
                            //해외 접속 IP
                            jQuery('html').addClass('dimmest11_set');
                            jQuery('#globalInfoLayerPopUp').addClass('dimmest11_on');

                            jQuery('#globalInfoLayerPopUp .btn_close').click(function () {
                                jQuery('#globalInfoLayerPopUp').removeClass('dimmest11_on');
                                jQuery('html').removeClass('dimmest11_set');
                                TMCookieUtil.add(2, 'KEEP_KOREA_SITE', 'Y');
                            });

                            jQuery('#keepKoreaSite').click(function () {
                                jQuery('#globalInfoLayerPopUp').removeClass('dimmest11_on');
                                jQuery('html').removeClass('dimmest11_set');
                                TMCookieUtil.add(2, 'KEEP_KOREA_SITE', 'Y');
                            });

                            dimedLayerFunc();
                            jQuery(window).resize(function () {
                                dimedLayerFunc();
                            });
                            function dimedLayerFunc() {//dimed layer 위치 자동포지션 func
                                var ele = jQuery('#globalInfoLayerPopUp .dim_layer');
                                var dimH = ele.outerHeight();
                                var dimW = ele.outerWidth();
                                var h = jQuery(window).height();
                                var w = jQuery(window).width();
                                if (dimH > h) {
                                    ele.css({ 'marginTop': 0 + 'px', 'top': 0 });
                                }
                                else {
                                    ele.css({ 'marginTop': -(dimH / 2) + 'px', 'top': '50%' });
                                }
                                if (dimW > w) {
                                    ele.css({ 'marginLeft': 0 + 'px', 'left': 0 });
                                }
                                else {
                                    ele.css({ 'marginLeft': -(dimW / 2) + 'px', 'left': '50%' });
                                }
                            }
                        }
                    },
                    error :function (xhr, status, error){
                    }
                });
            }
        }catch(e){}
    });