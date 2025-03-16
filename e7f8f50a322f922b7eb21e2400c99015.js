$(function () {
  getNewsFlash()
  timer
})
// æ é¢ç¹å»è·³è½¬
$('.news-flash-title').click(function () {
  window.open('https://24h.jrj.com.cn/newsFlash', '_blank')
})
//è¯·æ±å¿«è®¯æ¥å£
function getNewsFlash() {
  $.ajax({
    type: 'POST',
    data: JSON.stringify({ pageSize: 10 }),
    contentType: 'application/json',
    url: 'https://gateway.jrj.com/jrj-news/news/queryNewsFlash',
    success: function (res) {
      if (res.code == 20000) {
        var list = res.data.data
        updateDom(list)
      }
    },
    error: function () {}
  })
}

// æ´æ°dom
function updateDom(list) {
  if (list != null && list.length != 0) {
    var result = list.slice(0, 10)
    $('#newsFlash').empty()
    $.each(result, function (i, v) {
      const title = v.title ? v.title : v.detail
      $('#newsFlash').append(
        '<li>' +
          ' <a href="' +
          v.pcInfoUrl + '">' +
          moment(v.makeDate).format('HH:mm') + '&nbsp;&nbsp;'+
          title +
          '</a>' +
        '</li>'
      )
    })
  }
}

// è½®è¯¢è¯·æ±
var timer = setInterval(function () {
  getNewsFlash()
}, 30000)
