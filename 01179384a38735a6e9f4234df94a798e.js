window.addEventListener("load", function(){
    document
      .getElementById("share-user-screen")
      .addEventListener("click", function(){
        GLANCE.Cobrowse.Visitor.showTerms({
          sessionKey: "GLANCE_KEYTYPE_RANDOM"
        });
      });
  });