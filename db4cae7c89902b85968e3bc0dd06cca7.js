var hasFocus = false;
    window.onfocus = function () {
        hasFocus = true;
    };
    window.onblur = function () {
        hasFocus = false;
    };