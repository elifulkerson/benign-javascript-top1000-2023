var label_19ee99feeb254bf99a88146643d1afa2 = "ctx-wait-19ee99feeb254bf99a88146643d1afa2";
      var defer_19ee99feeb254bf99a88146643d1afa2 = document.currentScript;
      console.time(label_19ee99feeb254bf99a88146643d1afa2);
      window.waitForGlobal(
        () => window.HP && window.HP.params && window.HP.params.clientUUID && window.localStorage && defer_19ee99feeb254bf99a88146643d1afa2 && defer_19ee99feeb254bf99a88146643d1afa2.parentElement.dataset.ready === "true",
        () => {
        console.timeEnd(label_19ee99feeb254bf99a88146643d1afa2);
        (new Image()).src = 'https://capi.connatix.com/tr/si?token=08c32caf-3de9-4dec-b089-28af763b377b&cid=1bf35e8b-3d55-48a6-aef8-0ebfdd277df7';
        cnx.cmd.push(function() {
            cnx({
              
              playerId: "08c32caf-3de9-4dec-b089-28af763b377b",
              playlistId: undefined,
              customParam1: window.localStorage.getItem("cet-page_session_id"),
              customParam2: "news_front-page",
              customParam3: "",
              customParam4: "desktop",
              customParam5: window.HUFFPOST.params.clientUUID,
              settings: {
                playbackMode: undefined,
                disableAdvertising: false,
                customization: {
                  floating: {
                    mode: undefined,
                    floatingGutterY: 58,
                  }
                }
              }
            }).render("19ee99feeb254bf99a88146643d1afa2", (renderError, playerApi) => {
              const wrapper = document.getElementById("19ee99feeb254bf99a88146643d1afa2").closest(".connatix-wrapper");
              const loadingEl = wrapper !== null ? wrapper.querySelector(".loading-message") : null;
              if (renderError) {
                // An error occured while rendering the player
                if(loadingEl !== null) {
                  loadingEl.classList.add("error");
                }
                return;
              } else {
                // player is ready and rendered
                if(loadingEl !== null) {
                  loadingEl.classList.add("loaded");
                }
                const dismissBottomStickyButton = document.querySelector(".ad-bottom-right-sticky__close");
                const bottomStickyContainer = document.querySelector(".bottom-right-sticky-container");
                if (bottomStickyContainer && dismissBottomStickyButton) {
                  playerApi.on(cnx.configEvents.FloatingEnterStart, function() {
                    dismissBottomStickyButton.classList.add("slide-out");
                    bottomStickyContainer.classList.add("video-floating");
                  });
                  playerApi.on(cnx.configEvents.FloatingExitStart , function() {
                    dismissBottomStickyButton.classList.remove("slide-in");
                    bottomStickyContainer.classList.remove("video-floating");
                  });
                  playerApi.on(cnx.configEvents.CloseButtonClicked , function() {
                    bottomStickyContainer.classList.add("slide-out");
                  });
                }
              }
            });
          })}
        );