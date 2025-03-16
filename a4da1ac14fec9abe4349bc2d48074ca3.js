if (Math.floor(Math.random() * 3000) == 1000) {
      var trackjs_script = document.createElement("script");
      trackjs_script.onload = function () {
        window.TrackJS &&
          TrackJS.install({
            token: "05ce83f61b344c7bbc64052fc3fadde3",
            application: "sb-desktop",
          });
      };
      trackjs_script.src = "https://cdn.trackjs.com/agent/v3/latest/t.js";

      document.head.appendChild(trackjs_script); //or something of the likes
    }