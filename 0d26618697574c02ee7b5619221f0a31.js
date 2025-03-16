(function(){var counter='615190',token='f7dbf37d56044ef7b4da874783f7ee80',xhrAuthUrl='https://auth.mail.ru/jsapi/auth';var counters = {
    'corp.mail.ru': '6111529',
    'mail.ru': '6111529',
    'bk.ru': '6111534',
    'list.ru': '6111535',
    'inbox.ru': '6111536',
    'yandex.ru': '6111537',
    'ya.ru': '6111537',
    'yandex.ua': '6111537',
    'yandex.by': '6111537',
    'yandex.com': '6111537',
    'yandex.kz': '6111537',
    'gmail.com': '6111538',
    'rambler.ru': '6111539',
    'yahoo.com': '6126590',
    'outlook.com': '6126635',
    'hotmail.com': '6126637',
    other: '6111540'
}, form = mr.id('Auth'), checkbox = mr.id('mailbox__auth__remember__checkbox'), loginInput = mr.id('mailbox__login'), email = mr.id('mailbox:full_username'), passwordInput = mr.id('mailbox__password'), domainSelect = mr.id('mailbox__login__domain'), domain = '', 
// Защита от двойного сабмита
// http://jsbin.com/yekeyacuye/
SUBMIT_DELAY = 500;
mr.animate = function (element, className, duration) {
    var animationRemoveTimeout;
    (function (element, className) {
        clearTimeout(animationRemoveTimeout);
        mr.removeClass(element, className);
        setTimeout(function () {
            mr.addClass(element, className);
        }, 0);
        animationRemoveTimeout = setTimeout(function () {
            mr.removeClass(element, className);
        }, duration || 300);
    })(element, className);
};
mr.mailbox = {
    xhrAuthUrl: xhrAuthUrl,
    block: mr.id('mailbox'),
    submitBtn: mr.id('mailbox__auth__button'),
    submitBtnOuter: mr.id('mailbox__auth__button_outer'),
    form: form,
    errorBlock: mr.id('mailbox:authfail'),
    validateForm: function () {
        var errorText;
        if (!passwordInput.value.length) {
            errorStatus = 'emptyPass';
            errorText = 'Введите пароль';
        }
        if (!loginInput.value.length) {
            errorStatus = 'emptyLogin';
            errorText = 'Введите имя ящика';
        }
        if (errorText) {
            splashRadar.one({
                name: 'auth_validation_' + errorStatus,
                time: 0
            });
            mr.counter('d20051482');
            this.showAuthError(errorText);
            if (mr.reloadSlots && !mr._.STUCK_IN_POT) {
                mr.reloadSlots([4015, 217, 4499], mr.insertBanner)();
            }
            return false;
        }
        return true;
    },
    showAuthError: function (text) {
        this.errorBlock.innerHTML = text;
        if (!mr.hasClass(this.block, this.authFailClassName)) {
            mr.addClass(this.block, this.authFailClassName);
        }
        mr.animate(this.errorBlock, 'animated_flash', 500);
    },
    disable: function () {
        this.__disabled = true;
        this.submitBtn.setAttribute('disabled', 'true');
        mr.addClass(this.submitBtnOuter, 'is-disabled');
    },
    enable: function () {
        this.__disabled = false;
        this.submitBtn.removeAttribute('disabled');
        mr.removeClass(this.submitBtnOuter, 'is-disabled');
    },
    authFailClassName: 'mailbox_authfail',
    __isSubmitBtn: false,
    __disabled: false
};
mr.bind(mr.mailbox.submitBtn, 'mousedown', function () {
    mr.mailbox.__isSubmitBtn = true;
});
mr.bind(form, 'submit', function (e) {
    mr.preventDefault(e);
    if (mr.switchers.xhrAuth && !mr.mailbox.validateForm() || mr.mailbox.__disabled) {
        return;
    }
    mr.mailbox.disable();
    setTimeout(mr.mailbox.enable.bind(mr.mailbox), SUBMIT_DELAY);
    var displayCounters = [], clickCounters = [];
    displayCounters.push(checkbox.checked ? '666520' : '666522', mr.data(form, 'loadsubmit-counter'));
    if (loginInput.value.indexOf('@') !== -1) {
        domain = loginInput.value.substr(loginInput.value.indexOf('@') + 1, loginInput.value.length);
        email.value = loginInput.value;
    }
    else {
        domain = domainSelect.value;
        email.value = loginInput.value + '@' + domain;
    }
    clickCounters.push(domain in counters ? counters[domain] : counters.other);
    if (!mr.mailbox.__isSubmitBtn) {
        clickCounters.push(mr.user || mr.hasAuth ? '615211' : '615189');
    }
    else {
        clickCounters.push(counter);
    }
    mr.mailbox.__isSubmitBtn = false;
    mr.massCounter('imp', displayCounters);
    mr.massCounter('click', clickCounters);
    if (mr.fagotDetect && Splash.FagotDetector) {
        Splash.FagotDetector.sendRadars(function (msg) {
            splashRadar.one({
                name: msg,
                time: 0
            });
        });
    }
    setTimeout(function () {
        if (mr.switchers.xhrAuth && mr.mailbox.isXhrSubmit) {
            if (token) {
                mr.mailbox.xhrSubmit({
                    login: email.value,
                    password: passwordInput.value,
                    saveauth: checkbox.checked ? 1 : 0,
                    token: token,
                    project: 'e.mail.ru'
                });
            }
            else {
                splashRadar.one({
                    name: 'auth_fail_notoken',
                    time: 0
                });
                form.submit();
            }
        }
        else {
            form.submit();
        }
    }, 1);
});
})();