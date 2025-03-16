var p = 0;
function loadMoreBtn() {
    var obj;
    $('.list-wrapper').each(function(){
        if ($(this).css("display") != 'none') {
            obj =$(this);
        }
    });
    var htmlStr = '';
    p++;
    $.ajax({
        url: "/more_news_ajax?p="+p,
        async: false,
        dataType: "json",
        success: function (data) {
            for(var i=0;i<data.length;i++) {
                var result = data[i];
                var odiv ='<div class="normal-item col-lg-3 col-md-3 col-sm-4 col-xs-6">\n' +
                    '          <a href="/news/'+result.nid+' " target="_blank">\n'+
                    '              <div class="recommend-image-cover">\n'+
                    '                  <img class="recommend-image" src=" '+result.img+' " alt=" '+result.title+' ">\n' +
                    '              </div>'+
                    '          </a>\n' +
                    '          <div class="content">\n' +
                    '              <span class="title">\n' +
                    '                  <a href="/news/'+result.nid+' " target="_blank" style="color: unset">\n'+
                    '                       '+result.title+'\n' +
                    '                  </a>\n'+
                    '              </span>\n' +
                    '              <span class="desc">\n' +
                    '                  <a href="/news/'+result.nid+' " target="_blank" style="color: unset">\n'+
                    '                        '+result.description+'\n' +
                    '                  </a>\n'+
                    '              </span>\n' +
                    '              <div class="news-info">\n' +
                    '                  <div>\n' +
                    '                      <span class="icon iconfont icontouxiang"></span>\n' +
                    '                      <a href="/news/'+result.nid+'" target="_blank" style="color: unset">\n'+
                    '                          <span style="margin-left: 5px">'+result.author+'\n' +
                    '                      </a>\n'+
                    '                  </div>\n' +
                    '                  <span>'+result.displaydate+'</span>\n' +
                    '               </div>\n' +
                    '           </div>\n' +
                    '     </div>';
                htmlStr += odiv;
            }
        }
    });
    $(obj).append(htmlStr);
}
