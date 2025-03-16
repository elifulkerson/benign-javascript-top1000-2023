function isLocalStorageEnabled() {
  try {
    window.localStorage;
    return true;
  } catch {
    return false;
  }
}
function getXuid() {
  const result = document.cookie.match(/(?:^|; )lid=(.*?)(?:;|$)/);
  return result && result[1];
}
var PROJECT_ID = 80674;
(function (w, d, c) {
  (w[c] = w[c] || []).push(function() {
    var options = {
      project: PROJECT_ID,
      chapters: ["Главная_страница","Страница_подраздела","lenta.ru"], // Chapters страницы
      attributes_dataset: ["blocks"],
      user_id: isLocalStorageEnabled() && localStorage.getItem('user_id') || null,
      pubId: getXuid(),
      pubScope: '.lenta.ru',
      ramblerId: null,
      email: null
    };
    try {
      w.top100Counter = new top100(options);
    } catch(e) { }
  });

  var n = d.getElementsByTagName("script")[0],
    s = d.createElement("script"),
    f = function () { n.parentNode.insertBefore(s, n); };
  s.type = "text/javascript";
  s.async = true;
  s.src =
    (d.location.protocol == "https:" ? "https:" : "http:") +
    "//st.top100.ru/top100/top100.js";

  if (w.opera == "[object Opera]") {
    d.addEventListener("DOMContentLoaded", f, false);
  } else { f(); }
})(window, document, "_top100q");