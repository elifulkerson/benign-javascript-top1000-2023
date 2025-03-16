function tabShow(b, a, d) {
    var c = d + a;
    $("#" + c).siblings().hide();
    $("#" + c).show();
    b.eq(a).addClass("cur").siblings().removeClass("cur")
}

function idNumber(a) {
    var b = a;
    return b
}

function show_sidebar(h) {
    var a = h;
    var d = $(a + ">ul li");
    var e = false;
    var g;
    $(d).css({position: "absolute"}).hide().eq(0).show();
    if (d.length <= 1) {
        return
    }
    for (var b = 0; b < d.length; b++) {
        $(a + " div.switch").append("<span>" + (b + 1) + "</span>")
    }
    $(a + ">ul").add(a + " a.next").hover(function () {
        e = true;
        clearInterval(g)
    }, function () {
        e = false;
        clearInterval(g);
        g = setTimeout(function () {
            c(f($(a + " div.switch span[class=curr]").index()))
        }, 500)
    });
    $(a + " a.next").click(function () {
        c(f($(a + " div.switch span[class=curr]").index()));
        return false
    });
    $(a + " div.switch span").hover(function () {
        if ($(this).hasClass("curr")) {
            return
        }
        e = true;
        clearInterval(g);
        c($(this).index())
    }, function () {
        e = false;
        clearInterval(g);
        var j = this;
        g = setTimeout(function () {
            c(f($(j).index()))
        }, 5000)
    });

    function f(j) {
        if (j == d.length - 1) {
            j = -1
        }
        j++;
        return j
    }

    function c(j) {
        if (j != -1) {
            $(a + " >ul li:visible").stop(true, true).fadeOut(500).parent().children().eq(j).stop(true, true).fadeIn(500)
        } else {
            j = 0
        }
        $(a + " div.switch span").removeClass("curr").eq(j).addClass("curr");
        if (!e) {
            g = setTimeout(function () {
                c(f(j))
            }, 5000)
        }
    }

    c(-1)
}

(function (a) {
    a.fn.star = function (b) {
        var c = a.extend({id: null}, b || {});

        function d() {
            var e = "#" + c.id + " .dpStar a";
            a(e).hover(function () {
                var f = a(this).parent().parent().siblings();
                a(this).addClass("activeStar");
                f.css("color", "#c00").html(a(this).attr("title"))
            }, function () {
                var f = a(this).parent().parent().siblings();
                a(this).removeClass("activeStar")
            });
            a(e).click(function () {
                var f = a(this).parent().parent().siblings();
                a(e).removeClass("selectStar");
                a(this).addClass("selectStar");
                f.css(a(this).attr("title"))
            })
        }

        d()
    };
    a.fn.waterfall = function (b) {
        var c = a.extend({id: null}, b || {});

        function e() {
            var f = document.getElementById(c.id), g = 12, p = a("#" + c.id + " li"), n = p[0].offsetWidth + g, l = [],
                j = (f.offsetWidth + g) / n | 0;
            a("#loading").fadeOut("slow");
            for (var h = 0; h < p.length; h++) {
                li_H = p[h].offsetHeight;
                if (h < j) {
                    l[h] = li_H;
                    p.eq(h).animate({top: 0, left: h * n}, 1000)
                } else {
                    var o, k;
                    o = Math.min.apply(null, l);
                    k = d(l, o);
                    l[k] += li_H + g;
                    p.eq(h).animate({top: o + g, left: k * n}, 1000)
                }
            }
            var m = Math.max.apply(null, l) + 10;
            a(f).css("height", m)
        }

        function d(g, f) {
            for (i in g) {
                if (g[i] == f) {
                    return i
                }
            }
        }

        e()
    };
    a.fn.tzSelect = function (b) {
        b = a.extend({
            render: function (c) {
                return a("<li>", {html: c.text()})
            }, "class": ""
        }, b);
        return this.each(function () {
            var c = a(this);
            var f = a("<div>", {width: c.outerWidth() + 5, "class": "tzSelect", html: '<div class="selectBox"></div>'});
            var d = a("<ul>", {"class": "dropDown"});
            var e = f.find(".selectBox");
            if (b.className) {
                d.addClass(b.className)
            }
            c.find("option").each(function (h) {
                var j = a(this);
                if (h == c[0].selectedIndex) {
                    e.html(j.text())
                }
                if (j.data("skip")) {
                    return true
                }
                var g = b.render(j);
                g.click(function () {
                    e.html(j.text());
                    if (j.val() == "wenda") {
                        a(".search .askQ").show()
                    } else {
                        a(".search .askQ").hide()
                    }
                    d.trigger("hide");
                    c.val(j.val());
                    return false
                });
                d.append(g)
            });
            f.append(d.hide());
            c.hide().after(f);
            d.bind("show", function () {
                if (d.is(":animated")) {
                    return false
                }
                e.addClass("expanded");
                d.slideDown()
            }).bind("hide", function () {
                if (d.is(":animated")) {
                    return false
                }
                e.removeClass("expanded");
                d.slideUp()
            }).bind("toggle", function () {
                if (e.hasClass("expanded")) {
                    d.trigger("hide")
                } else {
                    d.trigger("show")
                }
            });
            e.click(function () {
                d.trigger("toggle");
                return false
            });
            a(document).click(function () {
                d.trigger("hide")
            })
        })
    };
    a.fn.backTop = function (b) {
        var d = a.extend({id: null}, b || {});

        function c() {
            var g = "#" + d.id;
            var f = a(g);
            var e = a(document).scrollTop();
            var k = a(document).height() - a(window).height();
            var j = a(window).height();
            (e > 200) ? f.show() : f.hide();
            var h = e - k + 360;
            (e - k > -300) ? f.css("bottom", h) : f.css("bottom", 60);
            if (!window.XMLHttpRequest) {
                f.css("top", e + j - 320)
            }
        }

        a("#backTopBtn").click(function () {
            a("html, body").animate({scrollTop: 0}, 120)
        });
        a(window).bind("scroll", c);
        c()
    };
    a.fn.rapidNav = function (b) {
        var c = a.extend({id: null}, b || {});

        function d() {
            var g = "#" + c.id;
            var f = a(g);
            var e = a(document).scrollTop();
            var j = a(document).height() - a(window).height();
            var h = a(window).height();
            if (a(window).width() > 1240) {
                (e > 120) ? f.show() : f.hide()
            } else {
                f.hide()
            }
            if (!window.XMLHttpRequest) {
                f.css("top", e + 20)
            }
        }

        a(window).bind("scroll", d);
        d()
    };
    a.fn.moveLayer = function (e) {
        var g = a.extend({id: null, topNum: 30}, e || {});
        var c = a("#" + g.id);
        var f = c.offset().top - 50;
        var h = c.height();
        var b = a(document).height() - 360 - h;

        function d() {
            var j = a(document).scrollTop();
            var n = a(document).height() - a(window).height();
            var l = a(document).height();
            var m = a(window).height();
            var k = b - j + 30;
            if (f > b - 20) {
                c.removeClass().css("top", 0)
            } else {
                if (j > f && j < b) {
                    c.removeClass().addClass("moveFix").css("top", g.topNum)
                } else {
                    if (j >= b) {
                        c.removeClass().addClass("moveBottomFix").css("top", k)
                    } else {
                        c.removeClass().css("top", 0)
                    }
                }
            }
        }

        if (window.XMLHttpRequest) {
            a(window).bind("scroll", d)
        }
    };
    a.fn.txtScroll = function (d, j) {
        if (!d) {
            var d = {}
        }
        var h = this.eq(0).find("ul:first");
        var b = h.find("li:first").height(), c = d.line ? parseInt(d.line, 10) : parseInt(this.height() / b, 10),
            f = d.speed ? parseInt(d.speed, 10) : 500, g = d.timer ? parseInt(d.timer, 10) : 3000;
        if (c == 0) {
            c = 1
        }
        var e = 0 - c * b;
        scrollUp = function () {
            h.animate({marginTop: e}, f, function () {
                for (i = 1; i <= c; i++) {
                    h.find("li:first").appendTo(h)
                }
                h.css({marginTop: 0})
            })
        };
        h.hover(function () {
            clearInterval(timerID)
        }, function () {
            timerID = setInterval("scrollUp()", g)
        }).mouseout()
    };
    a.fn.sildeWeek = function (k) {
        var d = a.extend({
            ctrlBlock: null,
            week: null,
            showElement: null,
            nextControl: null,
            previousControl: null,
            fromArray: null,
            setTime: null,
            setCal: null,
            cal: false,
            viewUrl: null,
            delay: 3000
        }, k || {});
        var g = d.setTime;
        var j = 0;
        var c = true;

        function h(m) {
            if (d.cal) {
                var p = a(d.showElement).find("ul");
                var l = d.fromArray[m]["year"].match(/(\d)(\d)$/);
                var o = d.fromArray[m]["month"].match(/(\S)(\S)$/);
                var n = d.fromArray[m]["view"];
                b(1, l[1], m > j);
                b(2, l[2], m > j);
                b(3, o[1], m > j);
                b(4, o[2], m > j);
                p.fadeOut(1000, function () {
                    p.remove();
                    var q = '<ul class="txtLink" style="display:none;">';
                    for (i in d.fromArray[m]["topic_list"]) {
                        q += '<li><span class="list-title"><a target="_blank" href="' + d.fromArray[m]["topic_list"][i]["url"] + '">' + d.fromArray[m]["topic_list"][i]["title"] + "</a></span></li>"
                    }
                    q += "</ul>";
                    a(q).appendTo(d.showElement).show()
                });
                a(d.viewUrl).attr("href", n);
                j = m;
                c = false
            } else {
                var p = a(d.showElement).find("ul");
                p.fadeOut(1000, function () {
                    p.remove();
                    var q = '<ul class="text-list" style="display:none;">';
                    for (i in d.fromArray[m]["topic_list"]) {
                        q += '<li><span class="list-title"><a target="_blank" href="' + d.fromArray[m]["topic_list"][i]["url"] + '">' + d.fromArray[m]["topic_list"][i]["content"] + "</a></span></li>"
                    }
                    q += "</ul>";
                    a(q).appendTo(d.showElement).show()
                });
                a(d.week).html(d.fromArray[m]["week"]);
                j = m;
                c = false
            }
        }

        function f() {
            g = setInterval(function () {
                var l = (j + 1) % d.fromArray.length;
                h(l)
            }, d.delay)
        }

        function e() {
            clearInterval(g)
        }

        function b(r, o, p) {
            var q = a(d.setCal + r);
            var n = parseInt(q.find("span").html());
            if (n == "-") {
                n = 0
            }
            if (o != n) {
                var l = q.find("span");
                l.animate({top: p ? "-=50" : "+=50"}, 1000, function () {
                    l.remove()
                });
                var m = '<span class="innerDigit" style="top: ' + (p ? "50" : "-50") + 'px">' + o + "</span>";
                a(m).appendTo(q).animate({top: p ? "-=50" : "+=50"}, 1000)
            }
        }

        h(0);
        f();
        a(d.previousControl).click(function () {
            if (c) {
                return
            }
            var l = (j - 1) % d.fromArray.length;
            if (l < 0) {
                l = d.fromArray.length - 1
            }
            h(l)
        });
        a(d.nextControl).click(function () {
            if (c) {
                return
            }
            var l = (j + 1) % d.fromArray.length;
            h(l)
        });
        a(d.ctrlBlock).mouseover(e).mouseout(f)
    }
})(jQuery);
(function () {
    var a = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS"
        },
        searchString: function (e) {
            for (var b = 0; b < e.length; b++) {
                var c = e[b].string;
                var d = e[b].prop;
                this.versionSearchString = e[b].versionSearch || e[b].identity;
                if (c) {
                    if (c.indexOf(e[b].subString) != -1) {
                        return e[b].identity
                    }
                } else {
                    if (d) {
                        return e[b].identity
                    }
                }
            }
        },
        searchVersion: function (c) {
            var b = c.indexOf(this.versionSearchString);
            if (b == -1) {
                return
            }
            return parseFloat(c.substring(b + this.versionSearchString.length + 1))
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {prop: window.opera, identity: "Opera"}, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {string: navigator.vendor, subString: "KDE", identity: "Konqueror"}, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {string: navigator.vendor, subString: "Camino", identity: "Camino"}, {
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, {string: navigator.userAgent, subString: "Mozilla", identity: "Netscape", versionSearch: "Mozilla"}],
        dataOS: [{string: navigator.platform, subString: "Win", identity: "Windows"}, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {string: navigator.userAgent, subString: "iPhone", identity: "iPhone/iPod"}, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    };
    a.init();
    window.$.client = {os: a.OS, browser: a.browser}
})(jQuery);
jQuery.cookie = function (b, j, m) {
    if (typeof j != "undefined") {
        m = m || {};
        if (j === null) {
            j = "";
            m.expires = -1
        }
        var e = "";
        if (m.expires && (typeof m.expires == "number" || m.expires.toUTCString)) {
            var f;
            if (typeof m.expires == "number") {
                f = new Date();
                f.setTime(f.getTime() + (m.expires * 24 * 60 * 60 * 1000))
            } else {
                f = m.expires
            }
            e = "; expires=" + f.toUTCString()
        }
        var l = m.path ? "; path=" + (m.path) : "";
        var g = m.domain ? "; domain=" + (m.domain) : "";
        var a = m.secure ? "; secure" : "";
        document.cookie = [b, "=", encodeURIComponent(j), e, l, g, a].join("")
    } else {
        var d = null;
        if (document.cookie && document.cookie != "") {
            var k = document.cookie.split(";");
            for (var h = 0; h < k.length; h++) {
                var c = jQuery.trim(k[h]);
                if (c.substring(0, b.length + 1) == (b + "=")) {
                    d = decodeURIComponent(c.substring(b.length + 1));
                    break
                }
            }
        }
        return d
    }
};
$(function () {
    function a() {
        var e = $("#allNav");
        var f = $("#backHome");
        var c = $("#backHomeFix");
        var d = $(document).scrollTop();
        if (d > 78) {
            e.css({position: "fixed", top: "0", left: 0, "z-index": 999});
            // f.css({display: "none"});
            // c.css({display: "block"})
        } else {
            e.css({position: "relative", "z-index": 999});
            // f.css({display: "block"});
            // c.css({display: "none"})
        }
    }
    $("#backHomeFix").hide();
    $(window).bind("scroll", a);
    $("#returnTop").backTop({id: "returnTop"});
    $("#scan").hover(function () {
        $(".scanCode").show()
    }, function () {
        $(".scanCode").hide()
    });
    $(".links").hover(function () {
        $(this).css("overflow-y", "auto")
    }, function () {
        $(this).css("overflow-y", "hidden")
    });
    $("#weixin").hover(function () {
        $(".mamaWx").css("display", "block")
    }, function () {
        $(".mamaWx").css("display", "none")
    });
    $("#nav .drop").hover(function () {
        $(this).addClass("dropOn");
        $(this).find(".subNav").stop().slideDown()
    }, function () {
        $(this).removeClass("dropOn");
        $(this).find(".subNav").stop().slideUp()
    });
    $("#setting>.sub").add("#channel>.sub").hover(function (c) {
        $(this).addClass("subCur").find(".dropDown").show()
    }, function (c) {
        $(this).removeClass("subCur").find(".dropDown").hide()
    });
    if ($.support.getSetAttribute == false) {
        $("body").prepend('<div class="update">您现在使用的浏览器版本过低，可能会导致部分图片和信息的缺失。请立即 <a href="http://www.microsoft.com/china/windows/IE/upgrade/index.aspx" target="_blank">升级IE浏览器</a> 或者下载其它浏览器，如 <a href="http://www.firefox.com.cn/" target="_blank">Firefox</a> 或 <a href="http://www.google.cn/intl/zh-CN/chrome/browser/" target="_blank">Chrome</a></div>');

        function b() {
            $(".update").remove()
        }

        setTimeout(b, 3000)
    }
});