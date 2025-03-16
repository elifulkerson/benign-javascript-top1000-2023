(function(){
  function isGCPHome() {
            const isRMShortUrl =
            location.hostname === 'redmart.lazada.sg' &&
            (!location.pathname || location.pathname === '/');

            const isRMGCPPageId =
            location.search.indexOf(
                'wh_pid=/lazada/channel/sg/redmart-channel/homepage'
            ) > -1;

            return isRMShortUrl || isRMGCPPageId;
        }
  const shouldShowRMFrame = location.search.indexOf("showRMFrame=true") > 0;
  const shouldShowRMCategoryTree = location.search.indexOf("showRMCategoryTree=true") > 0;
  const isFeatureEnabled = shouldShowRMFrame || shouldShowRMCategoryTree || isGCPHome();

  const contentNode = document.getElementById("content");
  if (contentNode && isFeatureEnabled) {
      contentNode.classList.add("rm_category_tree");

      const categoryNode = document.createElement("div");
      categoryNode.setAttribute("id", "rm-category_tree_container");
      contentNode.appendChild(categoryNode);
  }   

  if (isFeatureEnabled) {
    window.addEventListener('DOMContentLoaded', function() {
      require([
        '@ali/lzdmod-redmart-category-tree/pc/index',
      ], (component) => {
        if (typeof require === "function" && typeof ReactDOM !== "undefined" && typeof React !== "undefined") {
          const node = document.getElementById('rm-category_tree_container');
          if (node) {
            const config = null;
            const systemEnv = "production";
            ReactDOM.render(React.createElement(component, { config: config, systemEnv: systemEnv }), node);
          }
        }
      });
    }); 
  }
})();