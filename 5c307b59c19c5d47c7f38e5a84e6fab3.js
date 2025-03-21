/**************************************************************

    MM js - (c) Poste Italiane 2017 - GD//FS//DU

***************************************************************/


/******* Global var *******/
var backdropMenu = false;
var fadeDuration = 100;
var delaybackdrop = 300;
var accordionNavLoad = false;
var mq_Detect_temp_updateMenu = '';
var scroll_pos = 0;
var controllerLogoFirstLoad = true;



/******* function megamenu *******/
function megamenu(active) {
  if (active === true) {

    /*clonazione delle voci assistenza e blocco user da barra federata a header (visibile su tablet e mobile)*/
    $('#dropdown-windowbox-assistenza').clone().appendTo('.navbar-default .submenu-mobile');
    if ($('#dropdown-windowbox-target').length > 0) {
      $('#dropdown-windowbox-target').clone().appendTo('.navbar-default .submenu-mobile');
    }
    if ($('#dropdown-windowbox-login').length > 0) {
      $('#dropdown-windowbox-login').clone().appendTo('.navbar-default .submenu-mobile');
    }
    /*
            if ($('.federation-bar-wrap-right .pi-targetarea').length > 0){

                $('.federation-bar-wrap-right .pi-targetarea').each(function(){
                    if($(this).text().trim().toLowerCase()=='english'){
                      $('<li class="dropdown dropdown-windowbox lang_switch lang_en"><a class="pi-targetarea dropdwon-toggle" href="https://www.posteitaliane.it/en/index.html"><span>en</span></a></li>').appendTo('.navbar-default .submenu-mobile');
                    }
                    if($(this).text().trim().toLowerCase()=='italiano'){
                      $('<li class="dropdown dropdown-windowbox lang_switch lang_it"><a class="pi-targetarea dropdwon-toggle" href="https://www.posteitaliane.it/it/index.html"><span>it</span></a></li>').appendTo('.navbar-default .submenu-mobile');
                    }

                });

            }
    */

    /* resize event */
    $(window).resize(function () {
      closer();
    });



    /* ready event - primi livelli del megamenu corporate */

    if ($('#header-poste-italiane').length > 0) {
      $('#header-poste-italiane ul li.pi-servizio').each(function (num) {

        /* TODO: da uniformare markup posteit/corporate */
        $('#' + $(this).attr('id') + '-navigation-submenu').addClass('navigation-submenu');
        /* */

        if ($('#' + $(this).attr('id') + '-navigation-submenu .navigation-collapse-container').length > 0) {
          $(this).children('a').attr('data-url', $(this).children('a').attr('href'));
          $(this).children('a').attr('href', 'javascript:void(0)');
        }else{
          $(this).children('a').addClass('direct-link');
          $('#' + $(this).attr('id') + '-navigation-submenu .pi-servizio-mobile a').addClass('direct-link');
        }
      });
    }

    /* click event - primi livelli corporate in mobile e verifica se chiudere tutto al click su link */
    $('#header-poste-italiane .pi-servizio-mobile a').on("click", function () {
      if ($(this).attr('data-toggle') == undefined) {
        doClosing();
      }
    });

    /* click event - primi livelli*/  
    $('#header-poste-italiane ul li.pi-servizio').on("click", function () {
      showMenuElem($(this));
    });

    /* click event - close panel x */
    $('#header-poste-italiane.nav-corporate div.navigation-submenu .navigation-submenu-container .col-mainrow-nohover button.close').on("click", function () {
      doClosing();
    });

    /* click event - toggle mobile/tablet */
    $('.navbar-toggle').click(function () {
      var navbarOpened = $(".navbar-collapse").hasClass("in");

      if (navbarOpened) {
        doClosing();
      } else {

        callBackdrop(true);
        toggleMobileCollapse(true);
      }

      /* gestisci la chiusura ad accordion su mobile */
      if (!accordionNavLoad) {

        var $myGroup = $('.nav-col-right');
        $myGroup.on('show.bs.collapse', '.collapse', function () {
          $myGroup.find('.collapse.in').collapse('hide');
        });


        $('.navigation-collapse-container').on('show.bs.collapse', function () {
          // do something…

          $('html, body').animate({
            scrollTop: 0
          }, 500);

        });

        accordionNavLoad = true;

      }
    });

  }
}


/******* subfunction - showMenuElem(myMenuElement)  *******/
function showMenuElem(myMenuElement) {

  var myIdMenu = myMenuElement.attr('id');
  var myTargetIdMenu = myMenuElement.attr('id') + '-navigation-submenu';

  //verifica se la voce di primo livello megamenu corporate e' un link e se si chiude pannelli e backdrop
  if ($('#header-poste-italiane').length > 0) {
    if ($('#header-poste-italiane #' + myIdMenu + '.pi-servizio a').attr('data-url') == undefined) {
      callBackdrop(false);
      doClosing();
      return;
    }
  }

  // Se il blocco menu cliccato è già aperto.. rimuovo la classe active, chiamo il fadeout e tolgo il backdrop
  if ($('#' + myTargetIdMenu).hasClass("navigation-submenu-active")) {

    if (mq_Detect == "sm") {
      //solo tablet
      chiudiPannelloMenu(myIdMenu, myTargetIdMenu);
      $('#navigation').css('background-color', 'transparent');
      $(".onlineservices-clone").empty();
      $('.nav-col-left .navbar-search').css('display', 'block');
      //$('.navbar-targetlink').hide();
      $(".nav-col").css('min-height', 'initial');
    }
    if ((mq_Detect == "md") || (mq_Detect == "lg")) {
      //solo desktop
      chiudiPannelloMenu(myIdMenu, myTargetIdMenu);
      callBackdrop(false);
      
    }

  }
  // Se il blocco menu cliccato non è quello già aperto.. rimuovo la classe active a prescindere, chiamo il fadein del blocco menu da aprire e chiamo il backdrop
  else {

    // if($('#header-poste-italiane.nav-corporate #' + myIdMenu + '.pi-servizio .first-level').data('url') == undefined){
    //   return;
    // };

    var myidtimeout;

    if (mq_Detect == "sm") {

      //solo tablet
      if ($('.navigation-submenu-active').length <= 0) {
        fadeDuration = 0;
      }
      apriPannelloMenu(myIdMenu, myTargetIdMenu, fadeDuration);


      $('#navigation').css('background-color', '#f6f6f6');
      /* cloning Online Services */
      $(".onlineservices-clone").empty();
      $('.nav-col-left .navbar-search').css('display', 'none');
      $('#' + myTargetIdMenu + " .onlineservices").clone().appendTo(".onlineservices-clone");
      //$('.navbar-targetlink').delay(300).fadeIn(fadeDuration);
    }
    if ((mq_Detect == "sm") || (mq_Detect == "md") || (mq_Detect == "lg")) {



      //solo desktop
      $('.col-mainrow').removeAttr('style');
      callBackdrop(true);
      apriPannelloMenu(myIdMenu, myTargetIdMenu, 0);
      megacalc();
    }
  }

}



/******* subfunction - chiudiMegaMenu() *******/
function closer() {
  if ($(".navigation-submenu-active").length > 0) {
    megacalc();
  }

  if (mq_Detect != mq_Detect_temp_updateMenu) {
    writeWarning('mq_Detect:' + mq_Detect + ' - mq_Detect_temp_updateMenu:' + mq_Detect_temp_updateMenu);
    //aggiorna variabile con l'ultima mq identificata
    mq_Detect_temp_updateMenu = mq_Detect;
    doClosing();
  }

  /*
      //chiusura forzata tablet
      if (mq_Detect == "sm") {

          writeWarning('mq_Detect: only ' + mq_Detect);
          //nascondo backdrop
          callBackdrop(false);

          //nascondi link target (tablet)
          $('.navbar-targetlink').hide();

          //resetto le altezze delle colonne (tablet)
          //$('.nav-col').css('min-height', 'auto');
          $('.nav-col').attr('style', '');

          //kill clone onlineservices
          $(".onlineservices-clone").empty();

          //chiudo pannello
          chiudiPannelloMenu();

          //chiudo ToggleMenu
          chiudiToggleMenu();
      }
      */
}

function doClosing() {

  //nascondo backdrop
  callBackdrop(false);

  //nascondi link target (tablet)
  //$('.navbar-targetlink').hide();

  //rimuovo lo style da navbar search (tablet)
  $('.navbar-search').removeAttr('style');

  //kill clone onlineservices (tablet)
  $(".onlineservices-clone").empty();

  //resetto le altezze delle colonne (tablet)
  $('.nav-col').removeAttr('style');

  //chiusura forzata pannello
  chiudiPannelloMenu();

  //chiudo ToggleMenu
  chiudiToggleMenu(); /*?*/

  //togli il collapse tutte le voci mobile aperte
  toggleMobileCollapse(true);

  $('.navigation-collapse-container').removeAttr('style');


}


/******* subfunction - chiudiPannelloMenu() / chiudiPannelloMenu(myIdMenu, myTargetIdMenu)  *******/
function chiudiPannelloMenu(myIdMenu, myTargetIdMenu) {
  if ($('.navigation-submenu-active').length > 0) {

    // in assenza di parametri
    if ((myIdMenu == null) || (myTargetIdMenu == null) || (myIdMenu == '') || (myTargetIdMenu == '')) {
      //writeLog('chiusura pannello megamenu - assenza parametri');
      $('.navigation-submenu-active').fadeOut(0, function () {
        $(this).removeClass("navigation-submenu-active");
        $('.pi-servizio-active').removeClass("pi-servizio-active");
      });

    }
    // con parametri
    else {
      //writeLog('chiusura pannello megamenu - tgt:' + '#' + myTargetIdMenu + ' / idmenu:' + '#' + myIdMenu);
      $('#' + myTargetIdMenu).fadeOut(0, function () {
        $(this).removeClass("navigation-submenu-active");
        $('#' + myIdMenu).removeClass("pi-servizio-active");
      });

    }
    $('div.navigation-submenu').removeAttr("style");
    $('#megamenu-collapse').removeClass("navbar-extended"); /*?*/
    $('#navigation').css('background-color', 'transparent'); /*?*/
  }

  if ($('#header-poste-italiane.nav-corporate').length > 0) {
    resetSmallPanel();
  }
  
}


function toggleMobileCollapse(mytogglevalue) {
  if (mq_Detect == "xs") {
    //solo mobile
    if (!mytogglevalue) {
      //$('.navigation-collapse-container').collapse('show');
    } else {
      $('.navigation-collapse-container').addClass('collapse');
      //$('.navigation-collapse-container').removeClass('in');
      $('.navigation-collapse-container').collapse('hide');
    }
  } else {
    $('.navigation-collapse-container').removeClass('collapse');
  }
}


/******* subfunction - chiudiToggleMenu() *******/
function chiudiToggleMenu() {
  if ($("#megamenu-collapse").hasClass("in")) {
    $('#megamenu-collapse').collapse('hide');
  };
}


/******* subfunction - apriPannelloMenu(myIdMenu, myTargetIdMenu)  *******/
function apriPannelloMenu(myIdMenu, myTargetIdMenu, myMenuDelay) {
  writeLog('apri pannello megamenu - tgt:' + '#' + myTargetIdMenu + ' / idmenu:' + '#' + myIdMenu);
  //$('div.navigation-submenu').removeClass("navigation-submenu-active");
  chiudiPannelloMenu();
  $('#' + myTargetIdMenu + ' .navigation-submenu-container').delay(myMenuDelay).fadeIn(fadeDuration, function () {
    //$('div.navigation-submenu').not($(this)).css("display", "none");
    $(this).parent('.navigation-submenu').addClass("navigation-submenu-active");
    $('#' + myIdMenu).addClass("pi-servizio-active");

    if ((mq_Detect == "md") || (mq_Detect == "lg")) {
      equalizeCycle('.navigation-collapse-container', '.col-mainrow');
    }

    if (mq_Detect == "sm") {
      pari_altezza(".nav-col", true);
    }

  });
  $('#megamenu-collapse').addClass("navbar-extended");
}



/******* subfunction - callBackdrop(true/false)  *******/
function callBackdrop(mybackvalue) {
  if ((mq_Detect == "md") || (mq_Detect == "lg")) {
    delaybackdrop = 0;
    fadeDuration = 0;
  }
  if (!mybackvalue) {
    $('.backdrop-menu').delay(fadeDuration + delaybackdrop).fadeOut(fadeDuration, function () {
      $(this).remove();
      backdropMenu = false;
      fadeDuration = 100;
    });
  } else {
    if (!backdropMenu) {
      $('<div class="modal-backdrop backdrop-menu in" style="display:none;opacity:0.5;"></div>').appendTo('body');
      $('.backdrop-menu').fadeIn(fadeDuration);
      backdropMenu = true;
    }
  }

  /* click event - backdrop */
  $('.backdrop-menu').on("click", function () {
    doClosing();
  });

}


/******* subfunction - megacalc()  *******/
function megacalc() {

  var larghezzaCorpo = $('nav.navbar').outerWidth();
  var larghezzaPagina = $(window).outerWidth();

  nm = ((larghezzaPagina - larghezzaCorpo) / 2) - 15;

  //writeInfo("larghezzaCorpo=" + larghezzaCorpo);
  //writeInfo("larghezzaPagina=" + larghezzaPagina);
  //writeInfo("nm=" + nm);


  if ((nm >= 0) && (larghezzaPagina >= 992)) {

    $('div#navigation div.navigation-submenu').css({
      "width": larghezzaPagina,
      "left": -nm
    });


  } else {
    if ((larghezzaPagina >= 768) && (larghezzaPagina <= 992)) {

      $('div#navigation div.navigation-submenu').removeAttr('style');

    } else {

      //menuMobileHm(true);
      if ($('#pi-altro a.first-level').length > 0) {
        $('#pi-altro a.first-level').attr('href', $('#pi-altro a.first-level').attr('rel'));
      }
    }
  }

  // sniffing dispositivi mobili
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('div#navigation ul div.navigation-submenu').css({
      "display": "none"
    });
    $('div#header-poste-italiane').css({
      "position": "static",
      "font-size": "13px"
    });
    $('body').addClass("noBar");

    $('#pi-altro a.first-level').attr('href', $('#pi-altro a.first-level').attr('rel'));

  }

  // controllo active contesto
  if (typeof contesto !== 'undefined') {
    $('#pi-' + contesto).addClass("pi-servizio-active");
  }

}


/******* function minifiedHeader *******/
function minifiedHeader(active) {
  if (active === true) {
    if ($('.content-federation-bar-minified').length > 0) {
      toggleMinifiedHeader();
    }
  }
}


function toggleMinifiedHeader() {
  var contenutoScrollato = $(window).scrollTop();
  var altezzaFedBar = $('.content-header-federation-bar').outerHeight();
  var contentFedBar = $('.content-federation-bar').outerHeight();

  if ($('.content-federation-bar-simplified').length > 0) {
    $('body').css('padding-top', altezzaFedBar);
  } else {
    if (contenutoScrollato > altezzaFedBar) {
      $('.content-federation-bar-minified').css('top', '0');
      $('.content-page-anchors-fixed').css('top', contentFedBar + 'px');
      if (($('.content-header-federation-bar .dropdown-windowbox-target.open').length > 0) && (mq_Detect != "xs")) {
        $('.content-header-federation-bar .dropdown-windowbox-target.open a.dropdown-toggle').trigger('click');
      }
      if (($('.content-header-federation-bar .dropdown-windowbox-login.open').length > 0) && (mq_Detect != "xs")) {
        $('.content-header-federation-bar .dropdown-windowbox-login.open a.dropdown-toggle').trigger('click');
      }

    } else {
      $('.content-federation-bar-minified').css('top', '-' + contentFedBar + 'px');
      $('.content-page-anchors').removeAttr('style');


      if (($('.content-federation-bar-minified .dropdown-windowbox-target.open').length > 0) && (mq_Detect != "xs")) {
        $('.content-federation-bar-minified .dropdown-windowbox-target.open a.dropdown-toggle').trigger('click');
      }
      if (($('.content-federation-bar-minified .dropdown-windowbox-login.open').length > 0) && (mq_Detect != "xs")) {
        $('.content-federation-bar-minified .dropdown-windowbox-login.open a.dropdown-toggle').trigger('click');
      }
    }
  }

}




/***************                  ***************/
/***************                  ***************/
/************** CORPORATE SPECIFIC **************/
/***************                  ***************/
/***************                  ***************/


var limitScrollCloseMenu = 1000;
var limitFixedHeader = 640;

/* Small screen menu adapter */
function collapseMenuOnAdapter(){
  if($(this).scrollTop() > limitScrollCloseMenu){
    doClosing();
    }
}

function smallScreenMenuAdapter(){
    if ((mq_Detect == "lg" || mq_Detect == "md") && ($(window).height() < limitFixedHeader)){
        $('.content-header-federation-bar').addClass('relative');
        $('body').addClass('innerspacer-xs-top-0');
        $(window).on('scroll', collapseMenuOnAdapter);
    }
    else{
        $('.content-header-federation-bar').removeClass('relative');
        $('body').removeClass('innerspacer-xs-top-0');
        $(window).off('scroll', collapseMenuOnAdapter);
    }
}


/************ On Resize ************/

var resizeTimer_corp;

$(window).on('resize', function (e) {
  if ($('#header-poste-italiane.nav-corporate').length > 0) {
    clearTimeout(resizeTimer_corp);
    resizeTimer_corp = setTimeout(function () {



      //call smallScreenMenuAdapter
      if (('.content-header-federation-bar').length > 0){
        smallScreenMenuAdapter();
      }

      //other
      //...


    }, 10);
  }
});

/************ Ready ************/

$(document).ready(function () {
  if ($('#header-poste-italiane.nav-corporate').length > 0) {

    /* var */
    var myColEvidence = '';
    var mySmallPanelTarget = '';
    var mysmallPanel = '.inner-megamenu-panel';
    var mysmallPanelDefault = '.inner-megamenu-panel-default';

    /* set default status */
    resetSmallPanel();

    /* cloning */
    $('.pi-servizio').each(function (i) {

      var panel_serv_id = $(this).attr('id');
      var panel_serv_id_inner = '#' + panel_serv_id + '-navigation-submenu .navigation-collapse-container';

      $( panel_serv_id_inner).each(function (id) {
          $(panel_serv_id_inner + ' .inner-megamenu-panel-title').each(function (e) {
          myColEvidence = myColEvidence.concat('<li>' + $(this).html() + '</li>');
        });
        myColEvidence = '<ul class="col-mainrow-evidence-list">' + myColEvidence + '</ul>';
          $(myColEvidence).appendTo(panel_serv_id_inner + ' .col-mainrow-evidence');
      });

      myColEvidence = '';

    });

    
    /* pulisco i link clonati */
    $('.col-mainrow-evidence-list li a').each(function (e) {
      if ($(this).data('inner-megamenu-panel-list')) {
        $(this).data('url', $(this).attr('href'));
        $(this).attr('href', 'javascript:void(0);');
        $(this).parent('li').addClass('has-inner-megamenu-panel area-ico');
      }
    });

    /* gestisco click sulle voci di 2° livello */
    $('.col-mainrow-evidence-list li a').on("click", function (Event) {

      if ($(this).data('inner-megamenu-panel-list')) {
        mySmallPanelTarget = mySmallPanelTarget.concat('.' + $(this).data('inner-megamenu-panel'));
        $(mysmallPanel).addClass('hide').removeClass('block');
        $(mySmallPanelTarget).addClass('block').removeClass('hide');
        $('.col-mainrow-evidence-list li').not($(this).parent('li')).removeClass('active');
        $(this).parent('li').addClass('active');
        mySmallPanelTarget = '';
      }
      else {
        doClosing();
      }
    });



  
    //call smallScreenMenuAdapter
    if (('.content-header-federation-bar').length > 0){
      smallScreenMenuAdapter();
    }



  }

});


function resetSmallPanel() {
  if ((mq_Detect == "xs") || (mq_Detect == "sm")) {
    $('.inner-megamenu-panel:not(.inner-megamenu-panel-default)').addClass('block').removeClass('hide');
    $('.inner-megamenu-panel-default').addClass('hide').removeClass('block');
  }
  if ((mq_Detect == "md") || (mq_Detect == "lg")) {
    $('.inner-megamenu-panel:not(.inner-megamenu-panel-default)').addClass('hide').removeClass('block');
    $('.inner-megamenu-panel-default').addClass('block').removeClass('hide');
  }
  $('.col-mainrow-evidence-list li').removeClass('active');
}
