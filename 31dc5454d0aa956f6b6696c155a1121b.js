$(document).ready(function() {
    var validateEmail = function(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    var updateFields = function() {
        var i = 0;
        try {
            i = $("#UserPaymentMethod").get(0).selectedIndex;
            $($("#UserPaypalEmail").get(0).parentNode.parentNode.parentNode).hide();
            $($("#UserAlertpayEmail").get(0).parentNode.parentNode.parentNode).hide();
            if (i == 0) {
                $($("#UserPaypalEmail").get(0).parentNode.parentNode.parentNode).show();
                $("#UserAlertpayEmail").val("").blur();
            } else {
                if (i == 2) {
                    $($("#UserAlertpayEmail").get(0).parentNode.parentNode.parentNode).show();
                    $("#UserPaypalEmail").val("").blur();
                } else {
                    $("#UserPaypalEmail").val("").blur();
                    $("#UserAlertpayEmail").val("").blur();
                }
            }
        } catch (e) {}
    };
    if ($("#UserRegisterForm").length > 0) {
        updateFields();
        $("#UserPaymentMethod").change(updateFields);
        $("#UserUsername").blur(function() {
            if (this.value.length <= 0) {
                $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">You must enter an user name.</div>');
            } else {
                if (this.value.length > 30) {
                    $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Your user name cannot exceed 30 characters.</div>');
                } else {
                    $("div.bad", this.parentNode.parentNode.parentNode).html("");
                }
            }
        });
        $("#UserEmail").blur(function() {
            if (this.value.length <= 0) {
                $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">You must enter an email.</div>');
            } else {
                if (this.value.length > 100) {
                    $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Your email cannot exceed 100 characters.</div>');
                } else {
                    if (!validateEmail(this.value)) {
                        $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Please enter a valid email address.</div>');
                    } else {
                        $("div.bad", this.parentNode.parentNode.parentNode).html("");
                    }
                }
            }
        });
        $("#UserPaypalEmail").blur(function() {
            if (this.value.length <= 0) {
                $("div.bad", this.parentNode.parentNode.parentNode).html("");
            } else {
                if (this.value.length > 100) {
                    $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Your email cannot exceed 100 characters.</div>');
                } else {
                    if (!validateEmail(this.value)) {
                        $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Please enter a valid email address.</div>');
                    } else {
                        $("div.bad", this.parentNode.parentNode.parentNode).html("");
                    }
                }
            }
        });
        $("#UserAlertpayEmail").blur(function() {
            if (this.value.length <= 0) {
                $("div.bad", this.parentNode.parentNode.parentNode).html("");
            } else {
                if (this.value.length > 100) {
                    $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Your email cannot exceed 100 characters.</div>');
                } else {
                    if (!validateEmail(this.value)) {
                        $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Please enter a valid email address.</div>');
                    } else {
                        $("div.bad", this.parentNode.parentNode.parentNode).html("");
                    }
                }
            }
        });
        $("#UserPass1").blur(function() {
            if (this.value.length <= 5) {
                $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Password must be at least 7 characters long.</div>');
            } else {
                if (this.value.length > 1024) {
                    $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Password must be between 7 and 1024 characters long.</div>');
                } else {
                    $("div.bad", this.parentNode.parentNode.parentNode).html("");
                }
            }
        });
        $("#UserPass2").blur(function() {
            if (($("#UserPass1").val() != "") && ($("#UserPass1").val() != this.value)) {
                $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Passwords do not match.</div>');
            } else {
                $("div.bad", this.parentNode.parentNode.parentNode).html("");
            }
        });
        $("#UserFirstName").blur(function() {
            if (this.value.length <= 0) {
                $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">First name is required.</div>');
            } else {
                if (this.value.length > 50) {
                    $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Your first name cannot exceed 30 characters.</div>');
                } else {
                    $("div.bad", this.parentNode.parentNode.parentNode).html("");
                }
            }
        });
        $("#UserLastName").blur(function() {
            if (this.value.length <= 0) {
                $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Last name is required.</div>');
            } else {
                if (this.value.length > 50) {
                    $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Your user name cannot exceed 30 characters.</div>');
                } else {
                    $("div.bad", this.parentNode.parentNode.parentNode).html("");
                }
            }
        });
        $("#UserRegisterForm").submit(function() {
            return true;
        });
    } else if ($("#UserForgotForm").length > 0) {
        $("#UserEmail").blur(function() {
            if (this.value.length <= 0) {
                $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">You must enter an email.</div>');
            } else {
                if (this.value.length > 100) {
                    $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Your email cannot exceed 100 characters.</div>');
                } else {
                    if (!validateEmail(this.value)) {
                        $("div.bad", this.parentNode.parentNode.parentNode).html('<div class="error-message">Please enter a valid email address.</div>');
                    } else {
                        $("div.bad", this.parentNode.parentNode.parentNode).html("");
                    }
                }
            }
        });
        $("#UserForgotForm").submit(function() {
            return ($("#UserForgotForm .error-message").length == 0);
        });
    } else if ($("#UserLoginForm").length > 0) {
        var toggleSignup = function() {
            var u = $("#UserUsername").val().trim();
            var p = $("#UserPassword").val().trim();
            if ((u.length > 0) || (p.length > 0)) {
                $("#UserSignup").hide();
            } else {
                $("#UserSignup").show();
            }
        };
        window.setInterval(toggleSignup, 250);
        $("#UserUsername, #UserPassword").change(toggleSignup).keypress(toggleSignup).click(toggleSignup).change();
    }
});