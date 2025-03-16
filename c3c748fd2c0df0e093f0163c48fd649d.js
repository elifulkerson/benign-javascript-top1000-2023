const cookieValue = document.cookie.split('; ').find((row) => row.startsWith('theme='))?.split('=')[1];
        console.log("cookie: "+cookieValue);
        try {
            if(document.cookie.indexOf('theme')===-1 || (cookieValue!="light")) {
                if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    darkTheme();
                }
            } else if (cookieValue==="dark") {
                darkTheme();
            } else if (cookieValue==="light") {
                lightTheme();
            } else {
                lightTheme();
            }
        } catch (_) {}

        //if(cookieValue!="light") {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                const newColorScheme = event.matches ? "dark" : "light";
                if(newColorScheme=="dark") {
                    darkTheme();
                } else {
                    lightTheme();
                }
            });
        //}