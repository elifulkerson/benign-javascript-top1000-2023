try {
      if (window.screen.width < 990 || /mobi|android|iPhone/i.test(navigator.userAgent)) {
        setTimeout(function () {
          document.getElementById("content").style.display = 'none';
          document.getElementById("J_SiteNav").style.display = 'none';
          document.getElementById("J_SiteFooter").style.display = 'none';
          document.getElementById("h5-body").style.display = 'block';
        }, 10)
      }
    } catch (error) { }