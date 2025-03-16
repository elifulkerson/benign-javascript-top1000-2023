(function () {
			var html = '',
				i,
				l = Splash.projectsOrder.length,
				counters = ['21250496'],
				name,
				data,
				counter;

			for (i = 0; i < l; i++) {
				name = Splash.projectsOrder[i];
				data = Splash.data.projects[name];

				html += Splash.tpl.projects[name](data);

				if (data.counter) {
					counters.push(data.counter);
				}
				if (data.childCounter) {
					counters.push(data.childCounter);
				}
			}

			mr.id('mailbox').insertAdjacentHTML('afterend', html);

			mr.massCounter('imp', counters);(function (__PH, mr) {
    var ok_url = "http://ok.ru/?_erv=vszatwybdjnmnedtcwq", exit = mr.id("js-ok-exit"), userName = mr.id("js-ok-user-name"), user = mr.id("js-ok-user"), messages = mr.id("js-ok-messages"), notifications = mr.id("js-ok-notifications"), marks = mr.id("js-ok-marks"), messagesCounter = mr.id("js-ok-messages-counter"), notificationsCounter = mr.id("js-ok-notifications-counter"), marksCounter = mr.id("js-ok-marks-counter"), messagesLink = mr.id("js-ok-messages-link"), notificationsLink = mr.id("js-ok-notifications-link"), marksLink = mr.id("js-ok-marks-link"), messagesIcon = mr.id("js-ok-messages-icon"), notificationsIcon = mr.id("js-ok-notifications-icon"), marksIcon = mr.id("js-ok-marks-icon"), auth = mr.id("js-ok-auth"), 
    //noauth = mr.id('js-ok-noauth'),
    notifiers = mr.id("js-ok-notifiers"), title = mr.id("js-ok-title"), wrapper = mr.id("js-ok-wrapper"), wrapperClass = "social__content_ok_empty", loaded = false;
    if (exit) {
        mr.bind(exit, "click", function (e) {
            __PH.OK.logout();
            e.preventDefault ? e.preventDefault() : (e.returnValue = false);
        });
    }
    if (__okUpdated) {
        OKUpdate(__okUpdated);
        __okUpdated = true;
    }
    else {
        OKUpdate({ status: "no auth" });
    }
    __PH.on("OKUpdate", function (e, next) {
        OKUpdate(e.data);
        next();
    });
    setTimeout(function () {
        if (!__okUpdated) {
            OKUpdate({
                status: "no auth"
            });
        }
    }, 4000);
    function OKUpdate(res) {
        try {
            var loggedIn = res && res.status == "ok" && (res = res.data);
            if (loggedIn) {
                var name = (res.firstName || "") + " " + (res.lastName || "");
                if (user && name !== " ") {
                    userName.innerHTML = name;
                    user.style.display = "block";
                }
                else if (user) {
                    user.style.display = "none";
                }
                if (messagesCounter) {
                    messagesCounter.innerHTML = res.messageCnt;
                }
                if (notificationsCounter) {
                    notificationsCounter.innerHTML = res.notificationCnt;
                }
                if (marksCounter) {
                    marksCounter.innerHTML = res.markCnt;
                }
                if (messagesLink) {
                    messagesLink.title = res.messageCnt
                        ? res.messageCnt +
                            " " +
                            _plural(res.messageCnt, ["сообщений", "сообщение", "сообщения"])
                        : "сообщения";
                }
                if (notificationsLink) {
                    notificationsLink.title = res.notificationCnt
                        ? res.notificationCnt +
                            " " +
                            _plural(res.notificationCnt, [
                                "оповещений",
                                "оповещение",
                                "оповещения",
                            ])
                        : "оповещения";
                }
                if (marksLink) {
                    marksLink.title = res.markCnt
                        ? res.markCnt +
                            " " +
                            _plural(res.markCnt, ["оценок", "оценка", "оценки"])
                        : "оценки";
                }
                if (messages) {
                    messages.style.display = !res.messageCnt ? "none" : "";
                }
                if (notifications) {
                    notifications.style.display = !res.notificationCnt ? "none" : "";
                }
                if (marks) {
                    marks.style.display = !res.markCnt ? "none" : "";
                }
                if (messagesIcon) {
                    mr[!res.messageCnt ? "removeClass" : "addClass"](messagesIcon, "icon_counter_ok-messages_unread");
                }
                if (notificationsIcon) {
                    mr[!res.notificationCnt ? "removeClass" : "addClass"](notificationsIcon, "icon_counter_ok-notifications_unread");
                }
                if (marksIcon) {
                    mr[!res.markCnt ? "removeClass" : "addClass"](marksIcon, "icon_counter_ok-marks_unread");
                }
                if (auth) {
                    auth.style.display = "block";
                }
                //noauth.style.display = 'none';
                if (notifiers) {
                    notifiers.style.display = "block";
                }
            }
            else if ((res && res.status === "no auth") || res.status === "error") {
                // HOME-5438 выводим то же самое, что и для авторизованных
                if (auth) {
                    auth.style.display = "block";
                }
                //noauth.style.display = 'none';
                if (notifiers) {
                    notifiers.style.display = "none";
                }
            }
            if (loggedIn) {
                if (wrapper) {
                    mr.removeClass(wrapper, wrapperClass);
                }
                if (title) {
                    title.name = "clb1753635";
                }
            }
            else {
                if (wrapper && !mr.hasClass(wrapper, wrapperClass)) {
                    mr.addClass(wrapper, wrapperClass);
                }
                if (title) {
                    title.href = ok_url;
                    title.name = "clb10990355";
                }
            }
            if (!loaded) {
                new Image().src =
                    "//rs.mail.ru/d" +
                        (loggedIn ? "822035" : "822036") +
                        ".gif?" +
                        parseInt(Math.random() * 100000);
                loaded = true;
            }
        }
        catch (e) {
            console.log(e);
            window.logError && logError(e, "OKUpdate");
        }
    }
})(__PH, mr);
if (Splash.data.projects.branding) {
				mr.addClass(mr.id('leftcol'), 'layout__leftcol_styling_' + Splash.data.projects.branding.type);
			}
		})();