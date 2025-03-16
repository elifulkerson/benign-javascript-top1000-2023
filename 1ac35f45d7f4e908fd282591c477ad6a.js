(function () {
            // copied from AsanaStorage.getCookie
            function getCookie(name) {
              var value = document.cookie;
              var start = value.indexOf(" " + name + "=");
              if (start == -1) {
                start = value.indexOf(name + "=");
              }
              if (start == -1) {
                value = null;
              } else {
                start = value.indexOf("=", start) + 1;
                var end = value.indexOf(";", start);
                if (end == -1) {
                  end = value.length;
                }
                value = unescape(value.substring(start, end));
              }
              return value;
            }

            const hasNoRedirect = window.location.search.includes("noredirect");
            const isLoggedIn = getCookie("is_logged_in");
            const langPref = getCookie("lang_pref");
            
            const liHPBucketingCoookie = getCookie("logged_in_homepage_experiment");

            if (isLoggedIn == null || hasNoRedirect) return;

            if (liHPBucketingCoookie == null || langPref != "en") {
              window.location.href = "https://app.asana.com";
            } else {
              try {
                navigator.sendBeacon("https://app.asana.com/-/log_enrollment_for_logged_in_homepage_experiment");
              } catch {
                // don't want any exceptions to stop us from proceeding with redirect
              }

              if (liHPBucketingCoookie === "enabled") {
                window.location.href = "/logged-in";
              } else {
                window.location.href = "https://app.asana.com";
              }
            }
          })();