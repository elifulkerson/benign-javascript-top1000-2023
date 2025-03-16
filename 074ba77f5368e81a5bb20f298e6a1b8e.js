if ("fonts" in document) {
        Promise.all([
          (new FontFace("Montserrat",
            "url('/s/fonts/Montserrat-VariableFont_wght-hint-all.woff2') format('woff2-variations')",
            { "weight": "1 999" })).load(),
          (new FontFace("Montserrat",
            "url('/s/fonts/Montserrat-Italic-VariableFont_wght-hint-all.woff2') format('woff2-variations')",
            { "style": "italic" })).load(),
        ]).then(function (fonts) {
          fonts.forEach(function (font) {
            document.fonts.add(font);
          });
        });
      }