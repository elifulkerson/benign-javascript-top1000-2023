// ieæå­æº¢åºéè
var truncateText = function (className, num) {
  var content_arr = []
  $(className).each(function () {
    var content = $.trim($(this).text())
    if (content.length < num) return
    content_arr.push(content)
  })
  for (var i = 0; i < content_arr.length; i++) {
    content = content_arr[i].substr(0, num) + '...'
    $(className).eq(i).text(content)
  }
}
if (
  navigator.userAgent.indexOf('MSIE') !== -1 ||
  navigator.appVersion.indexOf('Trident/') > 0
) {
  truncateText('dl dd h3', 18)
  truncateText(
    '.topic-item a,.recommend_list .recommend_item a,.opportunity-item a',
    30
  )
}

// é¦é¡µèæ¯å¾å±ç¤º
startTime = new Date(startTime).getTime()
endTime = new Date(endTime).getTime()
changeBackgroundImage(startTime, endTime, bgUrl)
function changeBackgroundImage(startTime, endTime, bgUrl) {
  var currentTime = new Date().getTime()
  if (currentTime >= startTime && currentTime <= endTime) {
    $('.header').css('margin-top', bgMargin)
    $('.bg-wrapper').css('background-image', 'url(' + bgUrl + ')')
  }
}