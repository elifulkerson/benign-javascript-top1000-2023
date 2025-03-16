var theme = localStorage.getItem("sitetheme");
        if(theme !== null) {
            document.documentElement.dataset.theme = theme;
        }