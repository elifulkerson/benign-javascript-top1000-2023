(function (window, document) {
      const projectId = "6bzow7na6i";
      const options = {
        tenantId: "home-globo",
        loggedUser: "yes",
      };

      return document.addEventListener("DOMContentLoaded", function () {
        window.renderClarity(projectId, options);
      });
    })(window, document);