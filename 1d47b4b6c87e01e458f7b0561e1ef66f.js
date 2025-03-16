// å¼å¥cookie
var script = document.createElement("script");
script.src = "https://jscloud.jrjimg.cn/cloud/js/common/js.cookie.min.js";
script.async = true;
document.head.appendChild(script);

// æç´¢åå®¹
var searchList =
  '<div class="search-list" id="searchList" style="display: none;">' +
  '<div class="line"></div>' +
  '<h1 id="correlationStock">ç¸å³è¯å¸</h1>' +
  '<div id="searchListBox" class="search-list-box">' +
  "</div>" +
  '<p id="chartResult">æ¥çå¨é¨æç´¢ç»æ</p>' +
  "</div>";
var LoginView =
  '<div class="login-view" id="loginView">' +
  '<div class="no-login cursor" id="noLogin">ç»å½/æ³¨å</div>' +
  '<div class="login user-info" id="userInfoView" style="display: none;">' +
  '<img id="headPortrait" class="cursor" src="https://static.jrj.com.cn//platform/image/head.png"/>' +
  '<span class="nickName cursor"></span>' +
  '<div class="logout cursor" id="logOutView">éåº</div>' +
  "</div>" +
  "</div>";
// ééæ²¡æindex.htmlçé¡µé¢
var header = document.getElementsByClassName("header");
// å¬å±å¤´é¨
var headerstr = "";
header.length ? null : (headerstr += '<div class="header">');
headerstr += '<div class="header-t"><a class="logo" href="//www.jrj.com.cn"><img src="//i0cloud.jrjimg.cn/cloud/images/common/logo.png" alt=""></a>';
headerstr += LoginView;
headerstr += '<div class="header-t-nav"><ul id="headerTul"></ul></div>';
headerstr +=
  '<div class="search-box"><div id="searchBox" class="header-t-search"><input id="headerTSearch" onfocus="searchStockListHandler(true)" oninput="searchStockList()" onkeydown="searchHandler(event)" placeholder="è¯·è¾å¥æç´¢åå®¹" autocomplete="off" type="text" /><img id="searchImg" src="//i0cloud.jrjimg.cn/cloud/images/common/search.png" alt="">' +
  searchList +
  "</div></div></div>";
header.length ? null : (headerstr += "</div>");
document.writeln(headerstr);

var marketUrl = "//summary.jrj.com.cn/";
var cosUrl = "https://static.jrj.com.cn/resource/web/";

// å¸åº
// E_MARKET_UNKNOWN: 0, // < å¶ä»
// E_MARKET_SH: 1, // < ä¸äº¤æ
// E_MARKET_SZ: 2, // < æ·±äº¤æ
// E_MARKET_BJ: 3, // < åäº¤æ
// E_MARKET_ZZ: 4, // < ä¸­è¯ææ°(ä¸­è¯ææ°å¬å¸ç¼å¶çææ°)
// E_MARKET_GZ: 5, // < å½æ¿ææ°(åå«æ·±è¯ä¿¡åå·¨æ½®ç¼å¶çææ°)
var EMarket = {
  name_0: "å¶ä»",
  name_1: "ä¸äº¤æ",
  name_2: "æ·±äº¤æ",
  name_3: "åäº¤æ",
  name_4: "ä¸­è¯ææ°",
  name_5: "å½æ¿ææ°",
  0: 'bk',
  1: "sh",
  2: "sz",
  3: "bj",
  4: "zz",
  5: "gz",
};

// ä¿çnumä½å°æ°,é»è®¤ä¿çä¸¤ä½å°æ°
function keepDecimal(value, num) {
  num = num ? num : 2;
  if (!value && value !== 0 && num < 0) {
    return ''
  }
  // parseFloat(value.toFixed(num))
  return Number(value).toFixed(num)
}

// ç¾åæ¯ä¿çä¸¤ä½å°æ°
function percent(value, show) {
  show = show === false ? false : true 
  if (value === '--') {
    return value
  }
  if (!value && value !== 0) {
    return ''
  }
  var str = keepDecimal(value * 100) + '%'
  if (show) {
    return value > 0 ? '+' + str : str
  }
  return str
}

// æ ¼å¼åå¸åºåç§°
function formatMarketName(val) {
  if (val.mType == 1) {
    if (val.sType == 3) {
      return "ç§åæ¿";
    } else if (val.sType == 2) {
      return "åä¸æ¿";
    } else if (val.mrkt == 1) {
      if (val.sType == 1) {
        return "æ²ªA";
      } else if (val.sType == 5) {
        return "æ²ªB";
      }
    } else if (val.mrkt == 2) {
      if (val.sType == 1) {
        return "æ·±A";
      } else if (val.sType == 5) {
        return "æ·±B";
      }
    } else if (val.mrkt == 3) {
      if (val.sType == 1) {
        return "äº¬A";
      } else if (val.sType == 5) {
        return "äº¬B";
      }
    } else {
      return "è¡ç¥¨";
    }
  } else if (val.mType == 2) {
    return "åºé";
  } else if (val.mType == 3) {
    return "åºå¸";
  } else if (val.mType == 4) {
    return "ææ°";
  } else if (val.mType == 5) {
    return "æ¿å";
  } else if (val.mType == 6) {
    return "ææ";
  } else {
    return "ææ ";
  }
}

// å½åé¡µé¢
var stockListPageNo = 1;
// æ¯é¡µæ¡æ°
var stockListPageSize = 10;
var timers = null;
// æ å¿ç¬¬ä¸æ¬¡è§¦åç¦ç¹
var firstFlag = true;
// é²æå¤ç
function searchStockList() {
  if (timers) {
    clearTimeout(timers);
  }
  timers = setTimeout(function () {
    searchStockListHandler();
  }, 600);
}
// æç´¢è¡ç¥¨åè¡¨
function searchStockListHandler(flag) {
  if (flag && !firstFlag) {
    return;
  } else {
    firstFlag = false;
  }
  var curValue = $("#headerTSearch").val();
  if (!curValue) {
    $("#searchList").hide();
    return;
  }
  var params = {
    key: curValue,
    pageNo: stockListPageNo,
    pageSize: stockListPageSize,
  };
  $.ajax({
    type: "POST",
    data: JSON.stringify(params),
    headers: {
      "content-type": "application/json",
    },
    url: "https://gateway.jrj.com/jrj-search/stock/search",
    success: function (res) {
      if (res.code == 20000) {
        var htmlArr = [];
        var list = res.data.list;
        $.each(list, function (i, l) {
          var stockCode = +l.mrkt?l.code:l.stid
          var str =
            '<a target="_blank" href="' +
            marketUrl +
            "stock/" +
            EMarket[l.mrkt] +
            "/" +
            stockCode +
            '" class="search-list-row">' +
            '<span class="text-l one-hidden">' +
            formatMarketName(l) +
            "</span>" +
            '<span class="text-c one-hidden">' +
            l.name +
            "(" +
            l.codeMarketDesc +
            ")</span>" +
            '<span class="text-r one-hidden">' +
            l.shrt +
            "</span>" +
            "</a>";
          htmlArr.push(str);
        });
        if (htmlArr && htmlArr.length) {
          $("#correlationStock").show();
        } else {
          $("#correlationStock").hide();
        }
        if (curValue) {
          $("#searchList").show();
        }
        $("#searchListBox").html(htmlArr.join(""));
      }
    },
    error: function () {},
  });
}

// æç´¢èµè®¯
function searchHandler(e) {
  var evt = window.event || e;
  if (evt.keyCode == 13) {
    goSearchUrl();
  }
}
// è·³è½¬æç´¢ç»æé¡µ
function goSearchUrl() {
  var curValue = $("#headerTSearch").val();
  if (curValue) {
    handlePage("web", "search", { keyword: curValue });
  }
}
// å¬å±è·³è½¬é¡µé¢æ¹æ³
function handlePage(device, type, params) {
  // Mç«
  if (device === "M") {
    var url = "//m.jrj.com.cn/";
    if (type === "search") {
      url = "//m.jrj.com.cn/search?keyword=".concat(params.keyword);
    }
    window.open(url, "_self");
  } else {
    // webç«¯
    var url = "//www.jrj.com.cn/";
    if (type === "search") {
      url = "//www.jrj.com.cn/list/search.shtml?keyword=".concat(
        params.keyword,
        "&name=news"
      );
    } else if (type === "searchStock") {
      url = "//www.jrj.com.cn/list/search.shtml?keyword=".concat(
        params.keyword,
        "&name=stock"
      );
    }
    window.open(url);
  }
}
$(function () {
  $("#correlationStock").click(function () {
    var curValue = $("#headerTSearch").val();
    handlePage("web", "searchStock", { keyword: curValue });
  });
  $("#chartResult").click(function () {
    var curValue = $("#headerTSearch").val();
    handlePage("web", "search", { keyword: curValue });
  });
  // åç±»æ°æ®
  var classifyStr = "";
  // åç±»éä¸­dataFlag classify-index/é¦é¡µãclassify-download/ä¸è½½ãclassify-market/è¡æãclassify-discover/åç°ãclassify-myCenter/ä¸ªäººä¸­å¿
  var classifyArr = [
    {
      name: "é¦ é¡µ",
      url: "//www.jrj.com.cn",
      dataFlag: "classify-index",
    },
    {
      name: "è¡ æ",
      url: marketUrl,
      dataFlag: "classify-market",
    },
    {
      name: "ç±æé¡¾",
      url: "https://www.itougu.com/?jrjweb",
      dataFlag: "classify-itou",
    },
      // content: "éªä¼´ä½ çæèµçæ´»",
    {
      name: "ä¸ è½½",
      url: "//www.jrj.com.cn/list/download.shtml",
      dataFlag: "classify-download",
      imgHover: 'https://static.jrj.com.cn/resource/web/download-hover.png'
    },
  ];
  $.each(classifyArr, function (i, item) {
    classifyStr += '<li data-flag="'
      .concat(item.dataFlag, '"><a target="_blank" href="')
      .concat(item.url, '" imgHover="')
      .concat(item.imgHover ? item.imgHover : '', '" content="')
      .concat(item.content ? item.content : '', '" >')
      .concat(item.name, "</a></li>");
    // classifyStr += '<li data-flag="' + item.dataFlag + '"><a target="_blank" href="' + item.url + '" title='
  });
  $("#headerTul").html(classifyStr);
  $("#searchImg").click(function () {
    goSearchUrl();
  });
  var tooltipStr =
    '<div id="tooltip" class="tooltip__popper is-dark"><span></span><div class="popper__arrow"></div></div>';
  var divImgHover = '<div id="headerImgHover"></div>'
  // æå­æç¤ºæ¡
  $("#headerTul li a").hover(
    function (e) {
      var content = $(this).attr("content");
      if (!content) {
        return;
      }
      if (!$("#tooltip").length) {
        $("body").append(tooltipStr);
      }
      $("#tooltip span").html(content);
      // è®¡ç®æç¤ºæ¡çä½ç½®
      var offsetLeft = e.target.parentNode.offsetLeft;
      var width = e.target.offsetWidth;
      var tooltipWidth = $("#tooltip").innerWidth();
      var diffWidth = width - tooltipWidth;
      var splitWidth = Math.abs(diffWidth) / 2;
      $("#tooltip")
        .show()
        .css({
          top: e.target.parentNode.offsetTop + e.target.parentNode.offsetHeight,
          left:
            diffWidth > 0 ? offsetLeft + splitWidth : offsetLeft - splitWidth,
        });
    },
    function (e) {
      var content = $(this).attr("content");
      if (!content) {
        return;
      }
      $("#tooltip").hide();
    }
  );
  // å¾çæç¤ºæ¡
  $("#headerTul li a").hover(function (e) {
    var imgHover = $(this).attr("imgHover");
    if(!imgHover) {
      return
    }
    if(!$("#headerImgHover").length) {
      $("body").append(divImgHover)
    }
    $("#headerImgHover").html('<img class="header-img-hover" src="'+imgHover+'"/>')
    // è®¡ç®æç¤ºæ¡çä½ç½®
    var offsetLeft = e.target.parentNode.offsetLeft;
    var width = e.target.offsetWidth;
    var tooltipWidth = $("#headerImgHover").innerWidth();
    var diffWidth = width - tooltipWidth;
    var splitWidth = Math.abs(diffWidth) / 2;
    $("#headerImgHover").show().css({
      "top": e.target.parentNode.offsetTop + e.target.parentNode.offsetHeight,
      "left": diffWidth > 0 ? offsetLeft + splitWidth : offsetLeft - splitWidth
    })
  }, function (e) {
    var imgHover = $(this).attr("imgHover");
    if(!imgHover) {
      return
    }
    $("#headerImgHover").hide()
  })
});

// æ·»å æ´ä¸ªææ¡£çç¹å»äºä»¶
document.addEventListener("click", function (e) {
  var curValue = $("#headerTSearch").val();
  // æç´¢æ¡ç§»å¥ç§»åº
  if (!$.contains($("#searchBox")[0], e.target)) {
    $("#searchImg").attr(
      "src",
      "//i0cloud.jrjimg.cn/cloud/images/common/search.png"
    );
    $(".header-t-search").css("border", "1px solid #fff");
    $("#headerTSearch").css("background", "#E5E5E5");
    $("#searchList").hide();
  } else {
    $("#searchImg").attr(
      "src",
      "//i0cloud.jrjimg.cn/cloud/images/common/searched.png"
    );
    $(".header-t-search").css("border", "1px solid #C01639");
    $("#headerTSearch").css("background", "#fff");
    if (curValue) {
      $("#searchList").show();
    }
  }
});

/** è®¡ç®æ¶é´å·® */
function getFormatTime(dateTime) {
  if (!dateTime) {
    return "";
  }
  var now = new Date();
  var updateTime = new Date(dateTime);
  var second = Math.floor((now.getTime() - updateTime.getTime()) / 1000);
  var minute = Math.floor(second / 60);
  var hour = Math.floor(minute / 60);
  var day = Math.floor(hour / 24);

  var month = updateTime.getMonth() + 1;
  var day = updateTime.getDate();
  var hour = updateTime.getHours();
  var minute = updateTime.getMinutes();

  if (day > 0) {
    return ""
      .concat(month < 10 ? "0" + month : month, "-")
      .concat(day < 10 ? "0" + day : day, " ")
      .concat(hour < 10 ? "0" + hour : hour, ":")
      .concat(minute < 10 ? "0" + minute : minute);
  } else if (hour > 0) {
    return hour + "å°æ¶å";
  } else if (minute > 0) {
    return minute + "åéå";
  } else if (second > 0) {
    return second + "ç§å";
  } else if (second == 0) {
    return "åå";
  } else {
    return dateTime.length > 5 ? dateTime.substr(5) : dateTime;
  }
}

/**
 * **ç»éæ³¨å-start**
 */

// var script = document.createElement("script");
// script.type = "text/javascript";
// document.head.appendChild(script);
// var script = document.createElement("script");
// script.src = "https://jscloud.jrjimg.cn/cloud/js/common/js.cookie.min.js";
// script.src = "https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js";
// script.src = "https://unpkg.com/universal-cookie@3/umd/universalCookie.min.js";
// document.head.appendChild(script);

var dialogLoginIn =
  '<div class="dialog-login-wrapper" id="dialogLogin">' +
  '<div class="dialog-login-content">' +
  '<div class="dialog-login-title">' +
  '<img class="login-logo" src="//i0cloud.jrjimg.cn/cloud/images/common/logo-transparent.png"/>' +
  '<img class="close cursor" id="closeDialogLogin" src="//i0cloud.jrjimg.cn/cloud/images/common/close-white.png"/>' +
  "</div>" +
  '<div class="dialog-login-body">' +
  '<div class="tabs-login-methods" id="tabsLoginMethods">' +
  '<span class="code-in active cursor" id="logOfCodein">éªè¯ç ç»å½/æ³¨å</span>' +
  '<span class="num-in cursor" id="logOdNumIn">è´¦å·å¯ç ç»å½</span>' +
  "</div>" +
  '<div class="code-in-warpper" id="codeInWrapper">' +
  '<div class="rows">' +
  '<input id="inputCall" class="input" placeholder="è¯·è¾å¥ææºå·" type="number" />' +
  '<img class="img-call" id="closeDialogLogin" src="//i0cloud.jrjimg.cn/cloud/images/common/login-call.png"/>' +
  "</div>" +
  '<div class="required" id="numberRequired"><div></div></div>' +
  '<div class="rows">' +
  '<input id="inputCode" class="input" placeholder="è¯·è¾å¥éªè¯ç " type="text" />' +
  '<img class="img-code" id="closeDialogLogin" src="//i0cloud.jrjimg.cn/cloud/images/common/login-code.png"/>' +
  '<div class="get-code cursor" id="getCode">è·åéªè¯ç </div>' +
  '<div class="get-code cursor" id="disableCode"></div>' +
  "</div>" +
  '<div class="required" id="codeRequired"><div></div></div>' +
  "</div>" +
  '<div class="num-in-warpper hide" id="numInWrapper">' +
  '<div class="rows">' +
  '<input id="inputUser" class="input" placeholder="è¯·è¾å¥ç¨æ·å/ææºå·" type="text" />' +
  '<img class="img-call" id="closeDialogLogin" src="//i0cloud.jrjimg.cn/cloud/images/common/login-call.png"/>' +
  "</div>" +
  '<div class="required" id="acountRequired"><div></div></div>' +
  '<div class="rows">' +
  '<input id="inputPswd" class="input" placeholder="è¯·è¾å¥å¯ç " type="text" onfocus="this.type=\'password\'" autocomplete="off" />' +
  '<img class="img-code" id="closeDialogLogin" src="//i0cloud.jrjimg.cn/cloud/images/common/login-pswd.png"/>' +
  '<div class="forgot-pswd cursor" id="forgotPswd">å¿è®°å¯ç ?</div>' +
  "</div>" +
  '<div class="required" id="pswdRequired"><div></div></div>' +
  "</div>" +
  '<div class="submit-login cursor" id="submitLog">ç» å½</div>' +
  '<div class="agreement">æ³¨å/ç»å½å³ä»£è¡¨åæ<span id="loginAgreeServe" class="cursor">ãæå¡åè®®ã</span>&<span id="loginAgreePrivacy" class="cursor">ãéç§æ¿ç­ã</span></div>' +
  "</div>" +
  "</div>" +
  "</div>";

// <div class="flex">
// 	<div class="remember-pswd cursor" id="rememberPswd">
// 		<input name="remember" type="checkbox" value="" id="rememberChecked" class="cursor" />
// 		<label for="rememberChecked" class="cursor">èªå¨ç»å½</label>
// 	</div>
// 	<span class="forget-pswd cursor" id="forgetPswd">å¿è®°å¯ç ?</span>
// </div>

script.onload = function () {
  /** åå§ådialog */
  var tabs_active = 0;
  $("body").append(dialogLoginIn);
  var timer = null;

  function clearTimer() {
    if (timer) {
      clearInterval(timer);
    }
  }

  var https = "https://user.jrj.com.cn/";
  var httpAtUsers = "https://gateway.jrj.com";
  var jrj_token = Cookies.get("jrjToken");

  var img_static = "https://static.jrj.com.cn/"; // å¾çå°å
  // var domain = "10.66.82.8"; // cookieå°å
  var domain = ".jrj.com.cn";

  function setCookie(name, key) {
    Cookies.set(name, key, {
      expires: 365,
      domain: domain,
    });
  }

  function removeCookie(name) {
    Cookies.remove(name, {
      domain: domain,
    });
  }

  function refreshHandle() {
    if (window.refreshData) {
      window.refreshData();
    }
  }

  function AxiosRequest(params, resolve, reject) {
    reject = reject ? reject : function () {};
    $.ajax({
      type: "POST",
      data: JSON.stringify(params.params),
      headers: {
        "content-type": "application/json",
        jrjToken: jrj_token,
      },
      url: httpAtUsers + params.url,
      success: function (res) {
        if (res.code == 20000) {
          resolve(res);
        } else if (res.code == 40100) {
          $("#userInfoView").hide();
          $("#logOutView").hide();
          $("#noLogin").show();
          removeCookie("jrjToken");
          removeCookie("USER_AVATAR");
          removeCookie("USER_NAME");
          reject(res);
        } else {
          resolve(res);
        }
      },
    });
  }

  function setUsers(user) {
    $("#dialogLogin").hide();
    $("#noLogin").hide();
    $("#userInfoView").show();
    $("#logOutView").show();
    $("#headPortrait").attr("src", img_static + user.avatar);
    $("#user_avatar").attr("src", img_static + user.avatar);
    $(".nickName").text(user.userName);
  }

  /** æ¯å¦å±ç¤ºç»å½ */
  function isLogin() {
    jrj_token = Cookies.get("jrjToken");
    //
    if (jrj_token) {
      // var url = "/user-center/user/getCurrUser"
      // AxiosRequest({url},function(res){
      // 	setUsers(res.data.user)
      // })
      var user = {
        avatar: Cookies.get("USER_AVATAR"),
        userName: Cookies.get("USER_NAME"),
      };
      setUsers(user);
      refreshHandle();
      return;
    } else {
      $("#userInfoView").hide();
      $("#noLogin").show();
      refreshHandle();
    }
    $("#dialogLogin").hide();
  }
  isLogin();
  // æå¼ç»å½å¼¹çª
  function openLogin() {
    if (tabs_active == 3) {
      showBindPhone();
    } else {
      tabs_active = 0;
      $("#dialogLogin").show();
      showCode();
    }
  }

  function openWindow(url, isSelf) {
    if (isSelf) window.location.href = url;
    else window.open(url);
  }

  /** å±ç¤ºéªè¯ç ç»å½ */
  function showCode() {
    tabs_active = 0;
    $("#logOfCodein").addClass("active");
    $("#logOdNumIn").removeClass("active");
    //
    $("#numInWrapper").addClass("hide");
    $("#codeInWrapper").removeClass("hide");
  }

  /** å±ç¤ºç»å®ææºå· */
  function showBindPhone() {
    clearTimer();
    $("#disableCode").hide().text();
    $("#getCode").show().text("è·åéªè¯ç ");
    $("#inputCall").val("");
    $("#inputCode").val("");
    requireErr("#numberRequired div", "", false);
    requireErr("#codeRequired div", "", false);
    $("#dialogLogin").show();
    $("#logOfCodein").hide();
    $("#logOdNumIn").hide();
    if ($("#tabsLoginMethods").has(".bindPhone").length == 0) {
      $("#tabsLoginMethods").append(
        '<span class="bindPhone active cursor">ç»å®ææºå·</span>'
      );
    }
    showCode();
    $("#submitLog").text("ç«å³ç»å®");
    $(".agreement").text(
      "æ ¹æ®ç¸å³é¨é¨è¦æ±ï¼æ¨éè¦ç»å®ææºå·è®¤è¯èº«ä»½åæè½åå¸ä¿¡æ¯ãè¯·åç»å®ææºå·"
    );
    tabs_active = 3;
  }

  /** é¡µé¢æ³¨å¥è°åå¼¹çªçæ¹æ³ */
  // window.showLoginï¼ç»å½è¿æ-ãå»ç»å½-ãå¼¹åºç»å½å¼¹çªè°ç¨
  window.showLogin = function () {
    openLogin();
  };
  window.bindPhone = function () {
    showBindPhone();
  };

  /** å±ç¤ºè´¦å·ç»å½ */
  function showUser() {
    tabs_active = 1;
    $("#logOdNumIn").addClass("active");
    $("#logOfCodein").removeClass("active");
    //
    $("#numInWrapper").removeClass("hide");
    $("#codeInWrapper").addClass("hide");
  }

  /** å¼¹åº */
  $("#noLogin").click(function () {
    openLogin();
  });

  /** å³é­ */
  $("#closeDialogLogin").click(function () {
    $("#dialogLogin").hide();
  });

  /** ç»å½æ¹å¼åæ¢ */
  $("#logOfCodein").click(function (e) {
    showCode();
  });
  $("#logOdNumIn").click(function (e) {
    showUser();
  });

  /** æ ¡éª */
  function verify(dom, txt, is_show) {
    if (is_show == false) {
      $(dom).hide();
    } else {
      $(dom).show().text(txt);
    }
  }

  /** å¼å¸¸ææ¡ */
  function requireErr(dom, err, is_show) {
    verify(dom, err, is_show);
  }

  /** å¤±ç¦ */
  $("#inputCall").blur(function () {
    if ($("#inputCall").val().trim() !== "") {
      requireErr("#numberRequired div", "", false);
    }
  });
  $("#inputCode").blur(function () {
    if ($("#inputCode").val().trim() !== "") {
      requireErr("#codeRequired div", "", false);
    }
  });
  $("#inputUser").blur(function () {
    if ($("#inputUser").val().trim() !== "") {
      requireErr("#acountRequired div", "", false);
    }
  });
  $("#inputPswd").blur(function () {
    if ($("#inputPswd").val().trim() !== "") {
      requireErr("#pswdRequired div", "", false);
    }
  });

  /** è·åéªè¯ç ï¼æªç»å½ */
  function getCodeAtUnLogin(pms, fn) {
    var url = "/user-center/captcha/sendCode";
    var params = {
      phoneNo: pms.phoneNo,
    };
    AxiosRequest(
      {
        url: url,
        params: params,
      },
      function (res) {
        fn(res);
      }
    );
  }

  function countDown() {
    $("#getCode").hide();
    var count = 60;
    $("#disableCode")
      .show()
      .text(count + "ç§åéæ°è·å");
    timer = setInterval(function () {
      if (count >= 0) {
        count--;
      } else {
        count = 0;
      }
      $("#disableCode").text(count + "ç§åéæ°è·å");
      if (count <= 0) {
        count = 0;
        clearInterval(timer);
        timer = null;
        setTimeout(function () {
          $("#disableCode").hide();
          $("#getCode").show().text("éæ°è·å");
        }, 1000);
        return;
      }
    }, 1000);
  }

  $("#getCode").click(function () {
    var phoneNo = $("#inputCall").val();
    // var regPhoneNo =
    //   /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
    var regPhoneNo = /^[1][0-9]{10}$/;
    if (regPhoneNo.test($("#inputCall").val())) {
      getCodeAtUnLogin(
        {
          phoneNo: phoneNo,
        },
        function (res) {
          if (res.code == 20000) {
            countDown();
          } else if (res.code == 91000) {
            requireErr("#numberRequired div", res.msg);
          }
        }
      );
    } else {
      requireErr("#numberRequired div", "ææºå·ç æ ¼å¼ä¸æ­£ç¡®");
    }
  });

  $("#forgotPswd").click(function () {
    openWindow(https + "forgetPswd", "self");
  });
  $("#loginAgreeServe").click(function () {
    openWindow(https + "service");
  });
  $("#loginAgreePrivacy").click(function () {
    openWindow(https + "privacy");
  });
  $("#headPortrait").click(function () {
    openWindow(https, "self");
  });
  $(".nickName").click(function () {
    openWindow(https, "self");
  });

  /**
   * numberRequired+codeRequired ææºå·+éªè¯ç 
   * acountRequired+pswdRequired è´¦å·+å¯ç 
   */
  // function required (cb) {}

  /** è´¦å·å¯ç ç»å½ */
  function loginAtPswd(pms, fn) {
    var url = "/user-center/userAcc/loginByPwd";
    var params = {
      userName: pms.userName,
      pwd: pms.password,
      device: "PC",
    };
    AxiosRequest(
      {
        url: url,
        params: params,
      },
      function (res) {
        fn(res);
      }
    );
  }
  /** ææºå·ç»å½æ³¨å */
  function loginAtPhone(pms, fn) {
    var url = "/user-center/userAcc/loginByPhone";
    var params = {
      phone: pms.number,
      code: pms.code,
      device: "PC",
    };
    AxiosRequest(
      {
        url: url,
        params: params,
      },
      function (res) {
        fn(res);
      }
    );
  }
  /** ç»å®ææºå· */
  function setPhone(pms, fn) {
    var url = "/user-center/user/setPhone";
    var params = {
      phoneNo: pms.phoneNo,
      code: pms.code,
    };
    AxiosRequest(
      {
        url: url,
        params: params,
      },
      function (res) {
        fn(res);
      }
    );
  }

  /** ç»å½æå */
  function loginSuccess(res) {
    clearTimer();
    // å­å¨cookie
    setUsers(res.data.user);
    setCookie("jrjToken", res.data.jrjToken);
    setCookie("USER_AVATAR", res.data.user.avatar);
    setCookie("USER_NAME", res.data.user.nickName);
    jrj_token = res.data.jrjToken;
    isLogin();
    // æ¸ç©ºè¡¨å
    $("#inputCall").val("");
    $("#inputCode").val("");
    $("#inputUser").val("");
    $("#inputPswd").val("");
    if (!res.data.user.phone && tabs_active == 1) {
      showBindPhone();
    }
  }
  /** ç» å½æé® */
  function LoginIn(pms) {
    // window.refreshDataï¼ç»å½æååè°ç¨
    // request...
    //
    //
    if (tabs_active == 1) {
      loginAtPswd(pms, function (res) {
        if (res.code == 20000) {
          loginSuccess(res);
        } else if (res.code == 90001) {
          requireErr("#pswdRequired div", "è´¦å·ä¸å­å¨æè´¦å·å¯ç éè¯¯");
        } else if (res.code == 90002) {
          requireErr("#pswdRequired div", res.msg);
        } else if (res.code == 90003) {
          requireErr("#pswdRequired div", res.msg);
        } else if (res.code == 42900) {
          requireErr("#codeRequired div", "æä½é¢ç¹ï¼è¯·ç¨ååè¯");
        } else {
          requireErr("#codeRequired div", "ç³»ç»éè¯¯");
        }
      });
    } else if (tabs_active == 0) {
      loginAtPhone(pms, function (res) {
        if (res.code == 20000) {
          loginSuccess(res);
        } else if (res.code == 90004) {
          requireErr("#codeRequired div", "è¯·æ£æ¥éªè¯ç æ¯å¦æ­£ç¡®");
        } else if (res.code == 42900) {
          requireErr("#codeRequired div", "æä½é¢ç¹ï¼è¯·ç¨ååè¯");
        } else {
          requireErr("#codeRequired div", "ç³»ç»éè¯¯");
        }
      });
    } else if (tabs_active == 3) {
      setPhone(pms, function (res) {
        if (res.code == 20000) {
          loginSuccess(res);
        } else if (res.code == 90004) {
          requireErr("#codeRequired div", "è¯·æ£æ¥éªè¯ç æ¯å¦æ­£ç¡®");
        } else if (res.code == 91000) {
          requireErr("#codeRequired div", "è´¦å·å·²ç»å®ææºå·,ä¸è½éå¤ç»å®");
        } else if (res.code == 42900) {
          requireErr("#codeRequired div", "æä½é¢ç¹ï¼è¯·ç¨ååè¯");
        } else {
          requireErr("#codeRequired div", "ç³»ç»éè¯¯");
        }
      });
    }
  }
  $("#submitLog").click(function (e) {
    // // æ¯å¦è®°ä½å¯ç 
    // if ($("#rememberChecked").is(':checked')){
    // 	// èµ°local
    // } else {
    // 	// cookie
    // }

    // cookie
    if (tabs_active == 0) {
      var callV = $("#inputCall").val(),
        codeV = $("#inputCode").val(),
        num = "#numberRequired div",
        code = "#codeRequired div";
      if (callV.trim() == "" || codeV.trim() == "") {
        if (callV.trim() == "") {
          requireErr(num, "è¯·è¾å¥ææºå·");
        } else {
          requireErr(num, "", false);
        }
        if (codeV.trim() == "") {
          requireErr(code, "è¯·è¾å¥éªè¯ç ");
        } else {
          requireErr(code, "", false);
        }
      } else {
        requireErr(code, "", false);
        requireErr(num, "", false);
        LoginIn({
          number: callV,
          code: codeV,
        });
      }
    }
    if (tabs_active == 1) {
      var acountV = $("#inputUser").val(),
        pswdV = $("#inputPswd").val(),
        acount = "#acountRequired div",
        pswd = "#pswdRequired div";
      if (acountV.trim() == "" || pswdV.trim() == "") {
        if (acountV.trim() == "") {
          requireErr(acount, "è¯·è¾å¥ç¨æ·å/ææºå·");
        } else {
          requireErr(acount, "", false);
        }
        if (pswdV.trim() == "") {
          requireErr(pswd, "è¯·è¾å¥å¯ç ");
        } else {
          requireErr(pswd, "", false);
        }
      } else {
        requireErr(acount, "", false);
        requireErr(pswd, "", false);
        LoginIn({
          userName: acountV,
          password: pswdV,
        });
      }
    }
    if (tabs_active == 3) {
      var callV = $("#inputCall").val(),
        codeV = $("#inputCode").val(),
        num = "#numberRequired div",
        code = "#codeRequired div";
      if (callV.trim() == "" || codeV.trim() == "") {
        if (callV.trim() == "") {
          requireErr(num, "è¯·è¾å¥ææºå·");
        } else {
          requireErr(num, "", false);
        }
        if (codeV.trim() == "") {
          requireErr(code, "è¯·è¾å¥éªè¯ç ");
        } else {
          requireErr(code, "", false);
        }
      } else {
        requireErr(code, "", false);
        requireErr(num, "", false);
        LoginIn({
          phoneNo: callV,
          code: codeV,
        });
      }
    }

    // required(function(pms){
    // })
  });
  $("#logOutView").click(function (e) {
    removeCookie("jrjToken");
    removeCookie("USER_AVATAR");
    removeCookie("USER_NAME");
    jrj_token = null;
    $("#user_avatar").attr(
      "src",
      "//i0cloud.jrjimg.cn/cloud/images/general/default.png"
    );
    isLogin();
  });
  /**
   * **ç»éæ³¨å-end**
   */
};
