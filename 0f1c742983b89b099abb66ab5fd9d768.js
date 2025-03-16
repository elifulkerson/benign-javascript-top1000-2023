var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    };

    const toggleMenu = document.getElementById('navbar-toggler');
    const menu = document.querySelector('#navbar-rcn');

    toggleMenu.addEventListener('click', () => {
      menu.classList.toggle('show');
    });