(function(d, html){
 window._ipc_cookie_confirmed = function() {
  var d = document, dom = d.location.hostname, idx = 0, s = d.createElement('SCRIPT');
  if (dom.indexOf('.co.jp') >= 0) {
   idx = dom.lastIndexOf('.', dom.indexOf('.co.jp') - 1);
  } else {
   idx = dom.lastIndexOf('.', dom.lastIndexOf('.') - 1);
  }
  dom = dom.substring(idx);
  if (dom.indexOf('.') !== 0) dom = '.' + dom;
  console.log(dom);
  if (window.localStorage) {
   localStorage.setItem('ipc_cookie', 'confirmed');
  }
  d.cookie = 'ipc_cookie=confirmed;path=/;domain=' + dom + ';max-age=31536000;secure;samesite=strict';
  if (d.getElementById('ipc_cookie_confirmation')) d.getElementById('ipc_cookie_confirmation').style.display = 'none';
  s.src = location.protocol + '//cmp' + dom + '/ipc_cookie_confirmed.js';
  s.async = "async";
  d.head.appendChild(s);
 };
 var _c = d.cookie, _popup = function(d, html) {
  var p = d.createElement('ASIDE');
  p.id = 'ipc_cookie_confirmation';
  p.innerHTML = html;
  d.body.appendChild(p);
 };
 if (_c.indexOf('ipc_cookie') >= 0) return window._ipc_cookie_confirmed();
 if (window.localStorage && localStorage.getItem('ipc_cookie')) return window._ipc_cookie_confirmed();
 if (d.readyState === 'loading') {
  d.addEventListener('DOMContentLoaded', function(event) { _popup(d, html); });
 } else {
  _popup(d, html);
 }
})(document, 
 '<style>#ipc_cookie_confirmation a { text-decoration: underline; color: #fff; transition: color .3s; } #ipc_cookie_confirmation a:hover { text-decoration: none; color: #4cd3cc; } #ipc_cookie_confirmation .cookie_confirmed_and_close:hover { background-color: #89c !important; !important; color: #fff !important; } @media (min-width: 640px) { .ipc_cookie_inner { display: flex !important; justify-content: center; } .ipc_cookie_button_wrapper { margin: 0 0 0 10px !important; } .cookie_confirmed_and_close { width: auto !important; padding: 30px !important; } }</style>' + 
 '<div style="display: block; position: fixed; bottom: 0; width: 100%; padding: 30px 20px; background: #666; color: #fff; box-sizing: border-box; z-index: 32000;">' + 
  '<div class="ipc_cookie_inner" style="font-size: 12px; font-weight: 100; font-family: Meiryo,Helvetica,Arial,sans-serif;">' + 
   '<p style="font-size: 14px; font-weight: 500; line-height: 1.65; margin: 0; padding: 0;">当サイトでは、サービス向上、アクセス状況計測、広告配信などのためにクッキーを使用しています。詳しくは「<a href="https://www.impress.co.jp/privacy.html" target="_blank">プライバシーポリシー</a>」をご覧ください。オプトアウトもそちらから可能です。</p>' + 
   '<div class="ipc_cookie_button_wrapper" style="display: flex; justify-content: flex-end; margin-top: 10px;">' + 
    '<button class="cookie_confirmed_and_close" style="display: inline-flex; align-items: center; justify-content: center; height: 40px; width: 100%; padding: 0 12px; font-size: 14px; line-height: 1.65; text-decoration: none; vertical-align: bottom; white-space: nowrap; cursor: pointer; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; border: 0; background-color: #139; color: #fff; font-weight: 700;" onclick="_ipc_cookie_confirmed();">閉じる</button>' + 
   '</div>' + 
  '</div>' + 
 '</div>'
);