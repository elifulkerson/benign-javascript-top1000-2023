// Dark mode script

        const gfgThemeList = Object.freeze({
            LIGHT: "gfgThemeLight",
            DARK: "gfgThemeDark"
        })
        const getThemeFromCookie = () => {
            let gfg_def_theme = "";
            let cookies = document.cookie;
            let cooks = cookies.split(";");
        
            for (let i = 0; i < cooks.length; i++) {   
                let icook = cooks[i].split("=");
                if (icook[0].trim() == "gfg_theme") {
                    gfg_def_theme = icook[1].trim();
                }
            }
            return gfg_def_theme
        }
        if(!(post_slug.includes('premium-plans-payment/') || post_slug.includes('premium-plans/'))){
            var isDarkMode = getThemeFromCookie() == gfgThemeList.DARK ? true : false;
            document.querySelector("body").setAttribute("data-dark-mode", isDarkMode);
        }
 

        function setSearchBarFocus() {
          const myTimeout = setTimeout(searchBarFocus, 0);
          function searchBarFocus() {
            document.getElementById("gcse-search-input").focus();
          }
        }