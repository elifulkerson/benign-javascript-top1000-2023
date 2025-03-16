$(document).ready(function () {
  function httpPostLocationUrl(url, params) {
    var form = $("<form method='post' style='display:none'></form>");
    if (!params) params = {};
    url = url.split("?")[0];
    form.attr({ action: url });
    if (!$.isEmptyObject(params)) {
      for (arg in params) {
        var input = $("<input type='hidden'>");
        input.attr({ name: arg });
        input.val(params[arg]);
        form.append(input);
      }
    }
    $("html").append(form);
    form.submit();
  }
  document.addEventListener("click", function (e) {
    if (
      e.target.className === "blog-list-item" ||
      e.target.className === "link-item"
    ) {
      httpPostLocationUrl(
        "/top-youtubers/" + e.target.dataset.channel + "/",
        e.target.dataset
      );
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.className.includes("blog-download")) {
      $.ajax({
        type: "POST",
        url: coreUrlPrefix + "/newp",
        data: {
          u:
            "https://www.youtube.com/watch?v=" + e.target.getAttribute("video"),
          c: window.YTMP3country,
        },
        dataType: "json",
        success: function (r) {
          if (r.status === 1) {
            const res = r.data;
            if (e.target.className.includes("mp3")) {
              window.open(coreUrlPrefix + res["mp3"]);
            }
            if (e.target.className.includes("mp4")) {
              window.open(coreUrlPrefix + res["mp4"]);
            }
          }
        },
      });
    }
  });
  document.addEventListener("click", function (e) {
    if (e.target.className === "link-right-button") {
      document
        .getElementById("links-content")
        .scrollBy({ left: 180, behavior: "smooth" });
    }
    if (e.target.className === "link-left-button") {
      document
        .getElementById("links-content")
        .scrollBy({ left: -180, behavior: "smooth" });
    }
  });
});
