$('#fun_cont .save').on('click', function () {
                if ( $(this).data('save') == "N" )
                {
                    $(this).data('save', 'Y') ;
                    $(this).html('끄기');
                    $.cookie('searchWordSave', 'Y', { expires: 365, path: '/', domain: 'donga.com' });
                    $("#latest_cont p").remove() ;
                    $("#latest_cont ul").show() ;

                    let eventObj = {};
                    eventObj = {
                        event_name : 'search_event',
                        ep_button_name : '검색어 저장 켜기',
                        ep_button_area : '헤더',
                        ep_button_category : '공통'
                    }
                    gabuilder.GAEventOBJ(eventObj) ;
                }
                else
                {
                    $(this).data('save', 'N') ;
                    $(this).html('켜기');
                    $.cookie('searchWordSave', 'N', { expires: 365, path: '/', domain: 'donga.com' });
                    $("#latest_cont ul").hide() ;
                    $("#latest_cont .list_cont .no_search").remove() ;
                    $("#latest_cont .list_cont").append("<p class='no_search'>검색어 저장 기능을<br /> 확인해주세요.</p>") ;

                    let eventObj = {};
                    eventObj = {
                        event_name : 'search_event',
                        ep_button_name : '검색어 저장 끄기',
                        ep_button_area : '헤더',
                        ep_button_category : '공통'
                    }
                    gabuilder.GAEventOBJ(eventObj) ;
                }
                return false;
            });
            $('#latest_cont .btn_del').on('click', function () {
                var word = $(this).data('word') ;
                setCookieSearch(word) ;
                $(this).parent().remove() ;
                return false;
            });
            function setCookieSearch(word)
            {
                $.ajax({
                    type: "GET",
                    url: "https://www.donga.com/news/search?mode=remove&query=" + word ,
                    dataType: "html",
                    success: function (result) {
                    }
                });
            }
            $('#top_search_form .search_inp #query').on('keyup',function(){
                var query = $(this).val();

                if( query.length >= 1 )
                {
                    if( query.length > 100 )
                    {
                        alert("검색어는 최대 100자까지만 입력가능합니다.");
                        $(this).val(query.substring(0, 100));
                    }
                    else
                    {
                        // autoSearch1(this);
                    }
                }
                else
                {
                    // $("#latest_cont #search_autocomplete").html("");
                    // $("#latest_cont #search_autocomplete").addClass("hide");
                    // $("#latest_cont #search_saved").removeClass("hide");
                }
            });
            function topSearchSend()
            {
                if ( $("#top_query").val() == '' )
                {
                    alert('검색어를 입력하세요.') ;
                    $("#top_query").focus() ;
                    return false ;
                }
                let eventObj = {};
                eventObj = {
                    event_name : 'search_event',
                    ep_button_name : '입력',
                    ep_button_area : '헤더',
                    ep_button_category : '공통',
                    ep_search_keyword : $("#top_query").val()
                }
                gabuilder.GAEventOBJ(eventObj) ;
                $("#top_search_form").submit();
            }
            /*
            function autoSearch1(obj)
            {
                var query = $(obj).val();
                var url = "https://www.donga.com/OPENAPI/search/autocomplete?query="+query;

                $.ajax({
                    type: 'GET',
                    url: url,
                    dataType: "json",
                    success:function(result){
                        if( result.STATUS == "ok" )
                        {
                            var autohtml = "<ul class='list_search'>";

                            $.each(result.DATA, function(key, value) {
                                query = String(value).replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/ig, "");
                                autohtml += "<li><a href='https://www.donga.com/news/search?query=" + query + "'>" + value + "</a>"
                            });

                            autohtml += "</ul>";

                            $("#latest_cont #search_autocomplete").html(autohtml);
                            $("#latest_cont #search_autocomplete").removeClass("hide");
                            $("#latest_cont #search_saved").addClass("hide");
                        }
                    }
                });
            }
            */