function importFonts() {
                var style = document.createElement('link');
                style.rel = 'stylesheet';
                style.href = 'https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&subset=latin,latin-ext,greek,hebrew,vietnamese,arabic,devanagari,cyrillic,cyrillic-ext,khmer,greek-ext,tamil,thai,telugu,bengali,gujarati';
                style.type = 'text/css';
                document.head.appendChild(style)
            }

            try {
                navigator.serviceWorker.getRegistrations().then(importFonts)
            } catch (e) {
                window.addEventListener('load', importFonts)
            }