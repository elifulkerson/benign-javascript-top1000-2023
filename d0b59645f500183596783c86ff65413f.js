$(document).ready(function () {
    window.addEventListener('click', function (event) {
      var checkDropdownToggle = document.getElementById("mpp-dropdown-toogle").getAttribute("aria-expanded")
      if (checkDropdownToggle == "false") {
        document.getElementById("mpp-dropdown-toogle").innerHTML = "More+"
      }
      else {
        document.getElementById("mpp-dropdown-toogle").innerHTML = "Less-"
      }
    })
    var menuChildItems = $(".mpp-navigation-nav-items").children();
    function shrinkMenu(menuCount, menuChildItems) {
      let count = menuChildItems.length;
      let htmlElements = []
      let moreHtmlElements = []
      if (count > 0) {
        for (var i = 0; i < menuCount; i++) {
          htmlElements.push(menuChildItems[i].outerHTML)
        }
        for (var p = menuCount; p < count; p++) {
          moreHtmlElements.push(menuChildItems[p].outerHTML)
        }
      }
      for (var j = 0; j < htmlElements.length; j++) {
        document.getElementById("mpp-navigation-nav-items").innerHTML = htmlElements.join("")
      }
      for (var k = 0; k < moreHtmlElements.length; k++) {
        document.getElementById("mpp-navigation-dropdown-menu").innerHTML = moreHtmlElements.join("")
      }
        $("ul#mpp-navigation-dropdown-menu li a").addClass("dropdown-item");
    }
    if (menuChildItems.length > 4) {
      shrinkMenu(4, menuChildItems)
    } else {
    //  document.getElementById("mpp-navigation-less-dropdown").style.display = "none";
    }
    $(window).resize(function () {
      let containerWidth = $(".mpp-navigation-nav-items").width()
      let windowWidth = $(window).width()
      // console.log(containerWidth, windowWidth)
      if ($(window).width() < 355) {
        shrinkMenu(1, menuChildItems)
      } else if ($(window).width() < 410) {
        shrinkMenu(1, menuChildItems)
      } else if ($(window).width() < 500) {
        shrinkMenu(2, menuChildItems)
      } else if ($(window).width() > 500) {
        shrinkMenu(4, menuChildItems)
      }
    })
  })