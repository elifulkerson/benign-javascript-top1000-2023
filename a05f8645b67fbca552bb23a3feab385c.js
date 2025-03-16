window.addEventListener("load", function () {
    if (document.querySelectorAll("#div-gpt-ad-1530604273807-0.adBanner iframe").length == 1) {
        document.querySelector("#div-gpt-ad-1530604273807-0").style.position = "relative";
        document.querySelector('#div-gpt-ad-1530604273807-0').style.display = "inline";
        document.querySelector(".header-adB iframe").style.display = "inline";
        document.querySelector(".header-banner-cover").style.height = 60 + 'px';
        if (document.querySelector(".mainHeaderBanner") && document.querySelector(".mainHeaderBanner").length == 1) {
            document.querySelector(".mainHeaderBanner").style.display = "none";
        }
    }
}, false);