(function () {
    var login = mr.id('mailbox__login'), select = mr.id('mailbox__login__domain'), widget = mr.id('domain-widget'), text = mr.id('domain-widget__text'), row = mr.id('mailbox-auth-login'), widgetCl = 'mailbox__login__domain-widget', 
    // События, трактуемые, как ручное изменение текста в инпуте
    userEvents = ['input', 'keyup'], 
    // Нужны только для IE9-
    userMenuEvents = ['cut', 'paste'], hasFocus = false, hasDomainPostfixSaved;
    var change = function () {
        text.innerHTML = '@' + (select.value || 'mail.ru');
    };
    var uiChange = function (state, enable) {
        if (enable) {
            widget.className += ' ' + widgetCl + '_' + state;
        }
        else {
            widget.className = widget.className.replace(new RegExp(' ' + widgetCl + '_' + state, 'i'), '');
        }
        if (state === 'focus') {
            hasFocus = enable;
        }
    };
    var onInputChange = function () {
        var hasDomainPostfix = login.value.indexOf('@') !== -1;
        if (hasDomainPostfix) {
            checkTimeout = maxSteps * checkStep + 1;
        }
        if (hasDomainPostfix !== hasDomainPostfixSaved) {
            hasDomainPostfixSaved = hasDomainPostfix;
            mr[hasDomainPostfix ? 'addClass' : 'removeClass'](row, 'mailbox__auth__layout__row_login_expanded');
        }
    };
    // Проверяем через 1, 5, 25, 125, 625 секунд нужно ли скрывать селектор домена
    var checkStep = 5, checkTimeout = 1, maxSteps = 5;
    var checkInputOnLoad = function () {
        if (checkTimeout <= maxSteps * checkStep) {
            setTimeout(function () {
                onInputChange();
                checkInputOnLoad();
            }, checkTimeout);
            checkTimeout *= checkStep;
        }
    };
    checkInputOnLoad();
    userEvents.forEach(function (event) {
        mr.bind(login, event, onInputChange);
    });
    if (window._BROWSER === 'IE') {
        userMenuEvents.forEach(function (event) {
            mr.bind(login, event, function () {
                setTimeout(onInputChange, 0);
            });
        });
    }
    mr.bind(select, 'change', change);
    mr.bind(select, 'keyup', change);
    mr.bind(select, 'focus', function () {
        uiChange('focus', true);
    });
    mr.bind(select, 'blur', function () {
        uiChange('focus', false);
    });
    mr.bind(select, 'mouseover', function () {
        uiChange('hover', true);
    });
    mr.bind(select, 'mouseout', function () {
        uiChange('hover', false);
    });
    change();
    widget.mrChange = change;
    var value = select.value;
    function t() {
        if (!hasFocus && select.value != value) {
            value = select.value;
            change();
        }
        setTimeout(t, 100);
    }
    setTimeout(t, 100);
})();