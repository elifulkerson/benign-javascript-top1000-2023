var qaipalBtn = document.querySelector(".quickactions .quick-popup-content .link");
qaipalBtn.addEventListener("click", function (e) {
e.preventDefault();
document.getElementsByClassName("widget-side__opener-icon")[0].click();
});