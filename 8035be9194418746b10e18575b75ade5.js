"use strict"
{
let form = _id_error_report;
let showSelectedText = form.querySelector('.selected');
let sel, range, selStr, commonText, selHtml, start, end;
let errorMesCont = form.querySelector('.errormsg .title');
let closebtns = form.querySelectorAll('.closebtn');
closebtns.forEach(function(el) {
el.addEventListener('click', function(){
form.classList.remove('m_show', 'm_error', 'm_feedback', 'm_sendform');
})
})
form.addEventListener('submit', function(e){
e.preventDefault();
// заполним FormData данными из формы
let formData = new FormData(document.forms.send_error_report);
// добавим ещё одно поле
formData.append("text_selected", selStr);
formData.append("text_node", commonText);
formData.append("location", window.location.href);
let queryString = new URLSearchParams(formData).toString();
// отправим данные
let xhr = new XMLHttpRequest();
// xhr.open("POST", "/dynamic/GAZETA/Errmess");
// xhr.send(formData);
xhr.open("GET", "/dynamic/GAZETA/Errmess" + "?" + queryString);
xhr.send();
xhr.onload = function() {
console.log(xhr.response);
};
form.classList.remove('m_sendform');
form.classList.add('m_feedback');
})
window.addEventListener('keydown', function(e) {
if(e.keyCode == 13 && e.ctrlKey) {
sel = window.getSelection();
range = sel.getRangeAt(0);
function checkParent(el){
if(!el.closest('article') || el.closest('[aria-hidden="true"]') || el.closest('#right')) {
return false;
} else {
return true;
}
}
let pwd = range.commonAncestorContainer.parentNode;
let approveLocation = checkParent(pwd);
if(approveLocation){
selStr = ''; // создаем строку селекта
commonText = ''; // общий текст с абзацев
selHtml = '';
start, end;
if(range.commonAncestorContainer.innerText!==undefined){
commonText = range.commonAncestorContainer.innerText.replace(/\s+/g, " ");
} else {
commonText = range.commonAncestorContainer.textContent.replace(/\s+/g, " ");
}
selStr = sel.toString();
if(commonText.length > 800 || selStr > 600){
errorMesCont.innerText = 'Вы выбрали слишком большой объем текста';
form.classList.add('m_show', 'm_error');
} else {
selStr = selStr.replace(/\s+/g, " ").replace(/([\^\[\]\.\$\{\*\(\\\+\)\|\?\<\>])/g, '\\$1');
start = commonText.search(selStr);
selStr = selStr.replace(/\\/g, '');
end = start + selStr.length;
selHtml = commonText.slice(0, start) + '<strong>' + selStr + '</strong>' + commonText.slice(end);
showSelectedText.innerHTML = selHtml;
form.classList.add('m_show', 'm_sendform');
}
} else {
errorMesCont.innerText = 'Пожалуйста, выделите текст внутри заметки';
form.classList.add('m_show', 'm_error');
}
}else if (e.keyCode == 27) {
form.classList.remove('m_show', 'm_error', 'm_feedback', 'm_sendform');
}
})
}