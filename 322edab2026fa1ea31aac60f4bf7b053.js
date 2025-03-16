document.addEventListener("DOMContentLoaded", function(){
    if (window.window.screen.availWidth < 1020) {
        document.querySelector('html').classList.add("min-width-unset");
        document.querySelector('body').classList.add("min-width-unset");
        document.querySelectorAll(".back-to-top__icon").forEach(icon => {
            icon.style.left = "6px";
            icon.style.top = "6px";
        });
        document.querySelectorAll(".layout__nav-content, .layout__nav-left, .layout__nav-right").forEach(navElement => {
            navElement.style.top = "0px";
        });
    }
});