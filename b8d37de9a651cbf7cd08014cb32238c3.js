$(document).ready(function () {
  if (window.ismobile) {
    ym(85320316, "reachGoal", "en-enter");
    $(document).delegate(".max-google", "click", function () {
      ym(85320316,'reachGoal','max-google')
    });
    $(document).delegate(".max-crack", "click", function () {
      ym(85320316,'reachGoal','max-crack')
    });
    window.trace = {
      convert: () => {
        ym(85320316, "reachGoal", "en-convert");
      },
      convertSuccess: () => {
        ym(85320316, "reachGoal", "en-convert-success");
      },
      convertFail: () => {
        ym(85320316, "reachGoal", "en-convert-fail");
      },
      convertPending: () => {
        ym(85320316, "reachGoal", "en-convert-pending");
      },
      download: () => {
        ym(85320316, "reachGoal", "en-download");
      },
      buttons: (name) => {
        ym(85320316, "reachGoal", name);
      }
    };
  } else {
    ym(85320316, "reachGoal", "en-enter-pc");
    window.trace = {
      convert: () => {
        ym(85320316, "reachGoal", "en-convert-pc");
      },
      convertSuccess: () => {
        ym(85320316, "reachGoal", "en-convert-success-pc");
      },
      convertFail: () => {
        ym(85320316, "reachGoal", "en-convert-fail-pc");
      },
      convertPending: () => {
        ym(85320316, "reachGoal", "en-convert-pending-pc");
      },
      download: () => {
        ym(85320316, "reachGoal", "en-download-pc");
      },
      buttons: (name) => {
        ym(85320316, "reachGoal", `${name} pc`);
      }
    };
  }
});
