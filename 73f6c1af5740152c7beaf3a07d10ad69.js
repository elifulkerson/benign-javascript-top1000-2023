var captchaRetry = false;
    var CaptchaCallback = function() {
        $('#RecaptchaField1').remove();
        var captcha = $('<div></div>').attr('id', 'RecaptchaField1');
        $('#captchaAppend').append(captcha);
        grecaptcha.captchaId = grecaptcha.render('RecaptchaField1', {'sitekey' : '6LdcLiITAAAAAEcLyvDqDYHjlrqkSABPLIL5MjhO'});
    };
    var renderCaptcha = function() {
        if (document.getElementById('RecaptchaField2') != null) {
            grecaptcha.render('RecaptchaField2', {'sitekey' : '6LdcLiITAAAAAEcLyvDqDYHjlrqkSABPLIL5MjhO'});
        }
    };