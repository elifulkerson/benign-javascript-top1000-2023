function getCode (e) {
  var ev = e.target;
  if ($(ev).text() !== '获取验证码') {
    return
  }
  var seconds = 60
  $(ev).text(seconds + 's').css('color', '#999999')
  var interval = setInterval(function() {
    if (seconds === 0) {
      $(ev).text('获取验证码').css('color', '#E73828')
      clearInterval(interval)
    } else {
      seconds--
      $(ev).text(seconds + 's').css('color', '#999999')
    }
  }, 1000)
}
