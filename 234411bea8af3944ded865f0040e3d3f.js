const mobileMenuFooter = document.getElementById("mobileMenuFooter");
  if (mobileMenuFooter != null) {
    const mobileMenuFooterList = mobileMenuFooter.children;
    for (let i = 0; i < mobileMenuFooterList.length * 2; i += 1) {
      const mobileFooter = document.querySelectorAll("#mobileMenuFooter > li > label")[i];
      mobileFooter.addEventListener("keydown", (e) => {
        const labelElemId = e.target.id
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          mobileFooter.click();
          if(labelElemId.includes("close")){
            targetId = labelElemId.replace('close', 'open');
          }else{
            targetId = labelElemId.replace('open', 'close');
          }
          setTimeout(() => document.getElementById(targetId).focus(),0);
        }
      });
    }
  }