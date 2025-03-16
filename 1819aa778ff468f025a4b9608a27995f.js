// 动弹话题页面描述加链接
$(function () {
  const el = $('.www-tweet .tweet-form-header .topic-desc');
  if (el && el.length > 0) {
    const desc = el.html();
    el.html(desc.replace(/http(s?):\/\/[\w\d-.\/?=]+/, url => `<a href="${url}" target="_blank">${url}</a>`));
  }
});