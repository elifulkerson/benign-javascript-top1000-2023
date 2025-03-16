window.addEventListener("scroll", function (event) {
            if (localStorage.getItem("modalPushArticle") == null || localStorage.getItem("modalPushArticle") != "7db562883b7341edddfd822874201c6a") {
                document.getElementById("modalPushArticle").style.display = "block";
            }
        });
        document.getElementById("bodymodalPushArticle").addEventListener("click", modalPushArticleClose);
        document.getElementById("button-close").addEventListener("click", modalPushArticleClose);
        function modalPushArticleClose() {
            localStorage.setItem("modalPushArticle", "7db562883b7341edddfd822874201c6a");
            document.getElementById("modalPushArticle").style.display = "none";
        }