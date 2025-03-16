function getViewportSize(w) {
  if (null != (w = w || window).innerWidth)
    return { w: w.innerWidth, h: w.innerHeight }
  var d = w.document
  return 'CSS1Compat' == document.compatMode
    ? { w: d.documentElement.clientWidth, h: d.documentElement.clientHeight }
    : { w: d.body.clientWidth, h: d.body.clientHeight }
}
function isScrollToPageBottom() {
  var documentHeight, viewPortHeight, scrollHeight
  return (
    document.documentElement.offsetHeight -
      getViewportSize().h -
      (window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0) <
    600
  )
}
function recommond_hover() {
  $('.recommond-wrapper__bd ul li').click(function () {
    var dd = $(this).find('.relate')
    dd.is(':animated') || (dd.slideToggle(), $(this).toggleClass('opened'))
  }),
    $('.recommond-wrapper__bd ul li a').click(function (e) {
      e.stopPropagation()
    }),
    $('.mediavert-signpc-label').click(function (e) {
      e.stopPropagation()
    })
}
function meida_insert(insert_id, insert_html) {
  $('.scrollload-content').find('li').eq(insert_id).after(insert_html)
}
function media_push() {
  $.ajax({
    type: 'GET',
    async: !1,
    url: '//www.chinaz.com/section/807.json',
    success: function (res) {
      var res = eval('(' + res + ')')
      if (res.data)
        for (var i = 0; i < res.data.length; i++) {
          var tags_html = ''
          if (void 0 !== res.data[i] && '' != res.data[i]) {
            var insertId = parseInt(res.data[i].num),
              title = ''
            if (res.data[i].subtitle) var title = res.data[i].subtitle
            else var title = res.data[i].title
            if (res.data[i].tags)
              for (
                var tags_arr = res.data[i].tags.replace('，', ',').split(','),
                  t = 0;
                t < tags_arr.length;
                t++
              )
                t <= 4 &&
                  (tags_html +=
                    '<a target="_blank" href="//so.chinaz.com/search.aspx?keyword=' +
                    tags_arr[t] +
                    '"><i class="iconfont icon-community_ic_topic_black_"></i>' +
                    tags_arr[t] +
                    '</a>')
            if (res.data[i].url.indexOf('chinaz.com') == -1) {
              var flagname = '广告'
            } else {
              var flagname = '热门'
            }
            var insertHtml =
              '<li><div class="thumb"><a href="' +
              res.data[i].url +
              '" target="_blank"><img class="lazy" webp="false" data-original="' +
              res.data[i].thumb +
              '" alt="' +
              res.data[i].title +
              '"><span class="top-mark">' +
              flagname +
              '</span></a></div><div class="info"><div class="info-limit"><h3> <a target="_blank" href="' +
              res.data[i].url +
              '">' +
              res.data[i].title +
              '</a></h3><p class="desc">' +
              res.data[i].desc +
              '</p></div><div class="meta"><div class="tags">' +
              tags_html +
              '</div><div class="time" title="' +
              res.data[i].published +
              '"></div></div></div></li>'
          }
          meida_insert(insertId, insertHtml)
        }
      if (res.photos) {
        for (
          var p_html =
              '<li><div class="product-pics"><div class="section-title"><h3>Z视界</h3><div class="more"><a href="//www.chinaz.com/video/">查看更多<i class="iconfont icon-xiangyouzhankai"></i></a></div></div><div class="product-pics__bd">',
            i = 0;
          i < res.photos.length;
          i++
        )
          p_html +=
            '<div class="product-pics__item"><a href="' +
            res.photos[i].url +
            '" target="_blank"><div class="thumb"><img webp="true" class="lazy" data-original="' +
            res.photos[i].url +
            '" src="' +
            res.photos[i].thumb +
            '"><i class="pic-tip video-tip"><span>' +
            res.photos[i].total +
            '</span></i></div><div class="info"><h3>' +
            res.photos[i].title +
            '</h3></div></a></div>'
        ;(p_html += '</div></div></li>');
          //meida_insert(1, p_html),
          //$('img.lazy').lazyload({threshold: 370,failurelimit: 1,effect: 'fadeIn'})
      }
    },
    error: function (res) {
      console.log(res)
    },
    dataType: 'text',
  }),
    $.ajax({
      type: 'GET',
      async: !1,
      url: '//www.chinaz.com/section/808.json',
      success: function (res) {
        var res = eval('(' + res + ')')
        if (res.data) {
          for (
            var p_html =
                '<li><div class="product-pics"><div class="section-title"><h3>猜你喜欢</h3><div class="more"></div></div><div class="product-pics__bd">',
              i = 0;
            i < res.data.length;
            i++
          )
            p_html +=
              '<div class="product-pics__item"><a href="' +
              res.data[i].url +
              '" target="_blank"><div class="thumb"><img webp="true" class="lazy" data-original="' +
              res.data[i].url +
              '" src="' +
              res.data[i].thumb +
              '"></div><div class="info"><h3>' +
              res.data[i].title +
              '</h3></div><span class="z-highlight">' +
              res.data[i].highlight +
              '</span></a></div>'
          ;(p_html += '</div></div></li>'),
            meida_insert(15, p_html),
            $('img.lazy').lazyload({threshold: 370,failurelimit: 1,effect: 'fadeIn'})
        }
      },
      error: function (res) {
        console.log(res)
      },
      dataType: 'text',
    })
}
/**$('.CClose').click(function () {
  $('#bgad').remove(),
    $(this).remove(),
    $('#Atext').remove(),
    $('.bgskin').addClass('hideMedia'),
    $('.bgskin').css({ 'background-image': 'none', padding: 0 }),
    $('.bgskin').removeClass('bgskin'),
    $('.cz-media__fix').animate({}, 800)
}),**/
  /*recommond_hover(),*/
  $('#friend-toggle').click(function () {
    $(this).parent().hasClass('toggled')
      ? $(this).parent().removeClass('toggled')
      : $(this).parent().addClass('toggled')
  })
  /*media_push()*/
var page = 1;
function get_latest() {
  var latest_data = '',
    time_data = {
      catid: '227',
      nocatid: '',
      weight: '60,80,90',
      keyword: '',
      thumb: 1,
      page_num: 5,
      page: page,
      m: 0,
      mid: 0,
    }
  $.ajax({
    type: 'POST',
    url: '//app.chinaz.com/api/GetIndexRandApiHandler.ashx',
    data: time_data,
    success: function (res) {
      if (res.data) {
        for (var i = 0; i < res.data.length; i++) {
          var title = ''
          if (res.data[i].subtitle) var title = res.data[i].subtitle
          else var title = res.data[i].title
          latest_data +=
            '<li><div class="title"><div class="toggle"></div><h4><a href="' +
            res.data[i].url +
            '"  target="_blank">' +
            title +
            '<span><svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><defs><linearGradient id="id-2014200654-a" x1="63.313%" x2="46.604%" y1="-13.472%" y2="117.368%"><stop offset="2.35%" stop-color="#EC471E"></stop><stop offset="100%" stop-color="#FF6DC4"></stop></linearGradient></defs><path fill="url(#id-2014200654-a)" d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z" fill-rule="evenodd"></path></svg>' +
            res.data[i].weight +
            i +
            ' 万热度</span></a></h4></div><p  class="time" title="' +
            res.data[i].published +
            '"></p></li>'
        }
        $('#latest-json').html(latest_data),$('.time').timeago()
      }
    },
    dataType: 'json',
  })
}
/*get_latest(page),
  $('.change').click(function () {
    ;(page += 1) >= 5 && (page = 1), get_latest()
  })*/
var tpage = 1,
  type = 0,
  stab_data = '',
  mid = 0,
  m = 0,
  catid = '',
  nocatid = '',
  keyword = '',
  weight = '80',
  tab_data = {
    catid: catid,
    nocatid: nocatid,
    weight: weight,
    keyword: keyword,
    thumb: 0,
    page_num: 25,
    page: tpage,
    m: 0,
    mid: 0,
  },
  isClick = !0,
  isLoading = !0
function getData(res) {
  var recommond_data = ''
  if ('success' == res.message)
    for (var i = 0; i < res.data.length; i++) {
      var title = '',
        isPics = '',
        relate_html = '',
        tags_html = '',
		video_time = '',
		video_str = ''
	  if(res.data[i].modelid==5){
		  video_time = '<i class="pic-tip video-tip"><span>00:'+ res.data[i].playtime +'</span></i>';
		  video_str = ' <span class="tag-style-video" rel="noopener noreferrer">视频</span>'
	  }
      if (
        ((title =
          res.data[i].subtitle.length > 3
            ? res.data[i].subtitle
            : res.data[i].title),
        res.data[i].relates)
      )

        for (var r = 0; r < res.data[i].relates.length; r++)
          relate_html +=
            '<div class="relate-item"><a target="_blank" href="' +
            res.data[i].relates[r].url +
            '">' +
            res.data[i].relates[r].title +
            '</a><span class="source">' +
            res.data[i].relates[r].sourcename +
            '</span></div>'
      if (res.data[i].tags)
        for (var t = 0; t < res.data[i].tags.length; t++)
          t < 4 &&
            (tags_html +=
              '<a target="_blank" href="//so.chinaz.com/search.aspx?keyword=' +
              res.data[i].tags[t] +
              '"><i class="iconfont icon-community_ic_topic_black_"></i>' +
              res.data[i].tags[t] +
              '</a>')
      if (
        ((isPics =
          2 === res.data[i].modelid
            ? '<i class="module-tag"><span>' +
              res.data[i].total +
              '图</span></i>'
            : ''),
        108 === res.data[i].catid)
      )
        var listr =
            '<li class="mediavert" data-contentid="' +
            res.data[i].contentid +
            '">',
          mediavert =
            '<div class="mediavert-signpc"><div class="mediavert-signpc-label">推广&#8203;<svg class="mediavert-signpc-svg" viewBox="0 0 24 24"><path d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z" fill-rule="evenodd"></path></svg><div class="mediavert-signpc-popup"><span class="mediavert-signpc-popup-arrow"></span><div class="mediavert-signpc-popup-menu"><button type="button" class="mediavert-signpc-btn" data-id="' +
            res.data[i].contentid +
            '">不感兴趣</button><a target="_blank" rel="noopener noreferrer" href="//mt.chinaz.com">广告介绍</a></div></div></div></div>'
      else
        var listr = '<li data-contentid="' + res.data[i].contentid + '">',
          mediavert = ''
      recommond_data +=
        listr +
        '<div class="thumb"><a href="' +
        res.data[i].url +
        '" target="_blank"><img class="lazy" webp="true" data-original="' +
        res.data[i].thumb +
        '" alt="' +
        res.data[i].title +
        '">' +
        video_time + isPics +
        '</a></div><div class="info"><div class="info-limit"><h3> <a target="_blank" href="' +
        res.data[i].url +
        '">' +
        title + video_str +
        '</a></h3><p class="desc">' +
        res.data[i].desc +
        '</p></div><div class="relate">' +
        relate_html +
        '</div><div class="meta"><div class="tags">' +
        tags_html +
        '</div><div class="time" title="' +
        res.data[i].published +
        '"></div><a class="search-topic" target="_blank" href="//so.chinaz.com/search.aspx?keyword=' +
        res.data[i].tags +
        '">更多话题<span></span></a></div></div>' +
        mediavert +
        '</li>'
    }
  return recommond_data
}
function loadDataDynamic(tab_data) {
  if (isLoading)
    if (((isLoading = !1), (tab_data.page += 1), tab_data.page >= 4)) {
      var moreLink_html =
        '<div class="loading-more"><a class="loading-more__btn" href="//www.chinaz.com/it/"><span>查看更多</span></a></div>'
      $('.scrollload-container').append(moreLink_html)
    } else
      $('.scrollload-content').append(
        '<div class="loading-placeholder"><div class="notes-placeholder "><div class="img"></div><div class="content"><div class="title"></div><div class="text"></div><div class="text animation-delay"></div><div class="meta"><div class="read"></div><i class="iconfont ic-list-comments"></i><div class="small"></div><i class="iconfont ic-list-like"></i><div class="small"></div></div></div></div> <div class="notes-placeholder "><div class="img"></div><div class="content"><div class="title"></div><div class="text"></div><div class="text animation-delay"></div><div class="meta"><div class="read"></div><i class="iconfont ic-list-comments"></i><div class="small"></div><i class="iconfont ic-list-like"></i><div class="small"></div></div></div></div><div class="notes-placeholder "><div class="img"></div><div class="content"><div class="title"></div><div class="text"></div><div class="text animation-delay"></div><div class="meta"><div class="read"></div><i class="iconfont ic-list-comments"></i><div class="small"></div><i class="iconfont ic-list-like"></i><div class="small"></div></div></div></div></div>'
      ),
        $.ajax({
          async: !1,
          type: 'POST',
          url: '//app.chinaz.com/api/GetIndexApiHandler.ashx',
          data: tab_data,
          success: function (res) {
            setTimeout(function () {
              $('.msg-alert').removeClass('msg-alert--hover'),
                (isClick = !0),
                $('.loading-placeholder').remove(),
                $('.scrollload-content').append(getData(res)),
                $('.time').timeago(),
                setTimeout(watchScroll, 900),
                (isLoading = !0),
                $('img.lazy').lazyload({threshold: 370,failurelimit: 1,effect: 'fadeIn'});
                /*recommond_hover()*/
            }, 1e3)
          },
          dataType: 'json',
        })
}
function watchScroll() {
  isScrollToPageBottom()
    ? loadDataDynamic(tab_data)
    : setTimeout(arguments.callee, 900)
}
$('.recommond-tab span').click(function () {
  $('.msg-alert').addClass('msg-alert--hover'),
    $(this).siblings().removeClass('recommond-tab--hover'),
    $(this).addClass('recommond-tab--hover')
  var tab_id = $(this).attr('data-tab')
  if (isClick) {
    ;(isClick = !1),
      1 === parseInt(tab_id)
        ? ((keyword = ''), (weight = '100'), (nocatid = '108'))
        : 2 === parseInt(tab_id)
        ? ((weight = '80,100'),
          (nocatid = '213,108,222,227,230,231,232,233,235'),
          (type = 1))
        : 3 === parseInt(tab_id)
        ? ((weight = '80,100'),
          (nocatid = '213,108,222,227,230,231,232,233,235'),
          (type = 2))
        : 4 === parseInt(tab_id)
        ? ((nocatid = '213,108,222,227,230,231,232,233,235'),
          (weight = '80,100'),
          (type = 3))
        : ((keyword = ''),
          (nocatid = '213,108,222,227,230,231,232,233,235'),
          (weight = '80,100'),
          (type = 0)),
      (tab_data.keyword = keyword),
      (tab_data.weight = weight),
      (tab_data.nocatid = nocatid),
      (tab_data.type = type),
      (tab_data.page = 1)
    var defer = $.Deferred()
    return (
      $.ajax({
        async: !0,
        type: 'POST',
        url: '//app.chinaz.com/api/GetIndexApiHandler.ashx',
        data: tab_data,
        success: function (res) {
          defer.resolve(res),
            $('.scrollload-content').html(getData(res)),
            $('.time').timeago(),
            $('img.lazy').lazyload({threshold: 370,failurelimit: 1,effect: 'fadeIn'}),
            /*recommond_hover(),*/
            0 === parseInt(tab_id) && ( /*media_push(),*/console.log('media push')),
            (isClick = !0) &&
              setTimeout(function () {
                $('.msg-alert').removeClass('msg-alert--hover')
              }, 500)
        },
        dataType: 'json',
      }),
      defer.promise()
    )
  }
}),
  watchScroll()
$('.catname-icon').length > 0 &&
  $('.catname-icon').each(function () {
    var exp = $(this).attr('title')
    ;(void 0 === exp && '' != exp) ||
      (-1 != exp.indexOf('抖音')
        ? $(this).html(
            '<img alt="抖音" src="//img.chinaz.com/2020/topic/dy.png">'
          )
        : -1 != exp.indexOf('快手')
        ? $(this).html(
            '<img  alt="快手" src="//img.chinaz.com/2020/topic/ks.png">'
          )
        : -1 != exp.indexOf('视频号')
        ? $(this).html(
            '<img  alt="视频号" src="//img.chinaz.com/2020/topic/sph.png">'
          )
        : -1 != exp.indexOf('B站')
        ? $(this).html(
            '<img  alt="B站" src="//img.chinaz.com/2020/topic/bz.png">'
          )
        : -1 != exp.indexOf('知乎')
        ? $(this).html(
            '<img  alt="知乎" src="//img.chinaz.com/2020/topic/zh.png">'
          )
        : -1 != exp.indexOf('淘宝')
        ? $(this).html(
            '<img  alt="淘宝" src="//img.chinaz.com/2020/topic/tb.png">'
          )
        : -1 != exp.indexOf('天猫')
        ? $(this).html(
            '<img   alt="天猫" src="//img.chinaz.com/2020/topic/tb.png">'
          )
        : -1 != exp.indexOf('微信')
        ? $(this).html(
            '<img  alt="微信" src="//img.chinaz.com/2020/topic/wx.png">'
          )
        : -1 != exp.indexOf('直播')
        ? $(this).html(
            '<img  alt="直播" src="//img.chinaz.com/2020/topic/zb.png">'
          )
        : -1 != exp.indexOf('拼多多')
        ? $(this).html(
            '<img  alt="拼多多" src="//img.chinaz.com/2020/topic/pdd.png">'
          )
        : -1 != exp.indexOf('小红书')
        ? $(this).html(
            '<img  alt="小红书" src="//img.chinaz.com/2020/topic/xhs.png">'
          )
        : -1 != exp.indexOf('微博')
        ? $(this).html(
            '<img  alt="微博" src="//img.chinaz.com/2020/topic/wb.png">'
          )
        : -1 != exp.indexOf('京东')
        ? $(this).html(
            '<img  alt="京东" src="//img.chinaz.com/2020/topic/jd.png">'
          )
        : -1 != exp.indexOf('百家号')
        ? $(this).html(
            '<img  alt="百家号" src="//img.chinaz.com/2020/topic/bjh.png">'
          )
        : -1 != exp.indexOf('百度')
        ? $(this).html(
            '<img  alt="百度" src="//img.chinaz.com/2020/topic/bd.png">'
          )
        : $(this).html(
            '<img  alt="话题" src="//img.chinaz.com/2020/topic/zt.png">'
          ))
  })
$('.main-navbar__bgblue').sticky({ topSpacing: 0 })
//var tomb = new Date();if(tomb.format("yyyy-MM-dd")=='2020-04-04'){$('html').css({'-webkit-filter': 'grayscale(100%)','filter':'progid:DXImageTransform.Microsoft.BasicImage(graysale=1)'})};
