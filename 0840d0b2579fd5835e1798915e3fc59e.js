(function(global) {
    var fontStyleKey      = 'font_css_code';
    var fontCssUrlKey     = 'font_css_url';
    var brand             = 'allocine';
    var fontCss           = localStorage.getItem(fontStyleKey);
    var distantFontHash   = localStorage.getItem(fontCssUrlKey);
    var currentFontHash   = 'https\u003A\/\/assets.allocine.fr\/skin\/css\/allocine\/font.min.a4757bf5.css';

    if (fontCss && distantFontHash && (distantFontHash === currentFontHash)) {
        var style           = document.createElement('style');
            style.type      = 'text/css';
            style.innerHTML = fontCss;

      document.head.appendChild(style);

      global.AC_FONT_LOADED = true;
    }
}(window));