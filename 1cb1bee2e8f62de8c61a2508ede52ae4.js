//______________________________MENU PARAMETERS added by Credence Technologies 01Sep2004
curMenuBorderBgColor = null; // set to null to achieve a flat look
curMenuLiteBgColor = "#FF0000";
curFtFamily = "Verdana, Arial, Helvetica, sans-serif"; // menu item font family
curFtSize = 11; // menu item font size
curFtColor = "#000000"; // menu item font color
curFtColorHover = "#ffffff"; // menu item font color hover
curItemBg = "#ffffff"; // menu bgcolor
curItemBgHover = "#000000"//"#DAE8F1"; // menu bgcolor hover
curAlign = "left"; // menu item cell align
curValign = "middle"; // menu item cell vertical align
curPad = 3; // menu item cell padding
curSpace = 0; // menu item cell spacing
curTimeOut = 300; // mm default is 1000; issue w/ NS4 where if value is less than 500 then link won't work; added work around in mm_menu.js line 539
curSX = 1; // sub menu X position - not used here
curSY = 0; // menu Y position - not used here
curSrel = true; // menu relative position
curOpq = true; // border visible
curVert = true; // vertical menu
curIdt = 0; // 
curAw = true; //
curAh = true; //
curFtWeight= "normal"; // menu item font weight
curFtDis = "#c0c0c0";
//______________________________________________
/*
new Menu("root",126,20,"Verdana, Arial, Helvetica, sans-serif",10,"#626262","#626262","#ffffff","#DAE8F1","left","middle",3,0,500,0,30,false,true,true,0,false,false);
*/
/*
new Menu("root",126,20,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
*/

function mmLoadMenus(curPage) {

  if (window.mm_menu_home_0) return;
  curFile = curPage;

/* HOME MENU */
/* -----------------------------------------------*/
  window.mm_menu_home_0 = new Menu("root",119,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_home_0.addMenuItem("Item1","location='http://www.indiatodaygroup.com/index.htm'");
mm_menu_home_0.addMenuItem("Item2","location='http://www.indiatodaygroup.com/index.htm'");
mm_menu_home_0.addMenuItem("Item3","location='http://www.indiatodaygroup.com/index.htm'");
mm_menu_home_0.hideOnMouseOut = true;
mm_menu_home_0.fontWeight = curFtWeight;
mm_menu_home_0.fontDisabled = curFtDis;
mm_menu_home_0.menuBorder = 1;
mm_menu_home_0.menuLiteBgColor = curMenuLiteBgColor;
mm_menu_home_0.menuBorderBgColor = curMenuBorderBgColor;
mm_menu_home_0.bgColor = '#677CBA';



/* BT Events MENU */
/* -----------------------------------------------*/
  window.mm_menu_btevents = new Menu("root",80,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_btevents.addMenuItem("BT Prom Am","location='http://indiatodaygroup.com/btevent/pro-am.html'");
mm_menu_btevents.addMenuItem("BT Acumen","location='http://www.btacumen.com/?'");
/*---------------------------------------------------*/

/* Syndications MENU */
/* -----------------------------------------------*/
  window.mm_menu_synd = new Menu("root",140,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_synd.addMenuItem("IndiaTodayImages.com","location='http://www.indiatodayimages.com/?'");
mm_menu_synd.addMenuItem("Syndications Today","location='http://www.indiatodaygroup.com/stoday/?'");
/*---------------------------------------------------*/

/* Today MENU */
/* -----------------------------------------------*/
  window.mm_menu_today = new Menu("root",155,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_today.addMenuItem("Today100 Food Guide","location='http://www.indiatodaygroup.com/today100/foodindex.php?'");
mm_menu_today.addMenuItem("Today100 Shopping Guide","location='http://www.indiatodaygroup.com/today100/?'");
/*---------------------------------------------------*/


/* RADIO MENU */
/* -----------------------------------------------*/
  window.mm_menu_radio = new Menu("root",95,28,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_radio.addMenuItem("104.8 Meow FM","location='http://www.meowfm.com/'");

/*
mm_menu_radio.hideOnMouseOut=true;
mm_menu_radio.fontWeight= curFtWeight;
mm_menu_radio.fontDisabled= curFtDis;
mm_menu_radio.menuBorder=1;
mm_menu_radio.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_radio.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_radio.bgColor='#677CBA';
*/
/* EVENTS MENU */
/* -----------------------------------------------*/
window.mm_menu_events = new Menu("root",135,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_events.addMenuItem("India Today Conclave","location='http://www.indiatodayconclave.com/'");
mm_menu_events.addMenuItem("Pro-am of champions","location='http://indiatodaygroup.com/btevent/pro-am.html'");
mm_menu_events.addMenuItem("Bt Acumen","location='http://www.btacumen.com/'");
mm_menu_events.addMenuItem("Swar Utsav","location='http://www.indiatodaygroup.com/new-site/events.html'");
mm_menu_events.addMenuItem("BT Events","location='http://indiatodaygroup.com/btevent/index.html'");
/*
mm_menu_events.hideOnMouseOut=true;
mm_menu_events.fontWeight= curFtWeight;
mm_menu_events.fontDisabled= curFtDis;
mm_menu_events.menuBorder=1;
mm_menu_events.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_events.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_events.bgColor='#677CBA';
*/

/* PUBLICATIONS MENU */
/* -----------------------------------------------*/

/* sub menu */
window.mm_2_1 = new Menu("More >>",159,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_2_1.addMenuItem("Travel Plus","location='http://www.indiatodayplus.com/oct2005/index.html'");
mm_2_1.addMenuItem("Diesgn Today","location='http://www.indiatodaygroup.com/design/issue.html'");
mm_2_1.addMenuItem("Chartered Accountant","location='http://www.indiatodaygroup.com/'");
mm_2_1.addMenuItem("Time","location='http://www.indiatodaygroup.com/time/subscription/Time-India.html'");
mm_2_1.addMenuItem("Fortune","location='http://www.indiatodaygroup.com/fortune/fortune_subscription_form.phtml'");
/*
mm_2_1.hideOnMouseOut=true;
mm_2_1.fontWeight= curFtWeight;
mm_2_1.fontDisabled= curFtDis;
mm_2_1.menuBorder=1;
mm_2_1.menuLiteBgColor=curMenuLiteBgColor;
mm_2_1.menuBorderBgColor=curMenuBorderBgColor;
mm_2_1.bgColor='#677CBA';
*/

  window.mm_menu_publications = new Menu("root",125,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_publications.addMenuItem("ITGO","location='http://www.itgo.in/'");
mm_menu_publications.addMenuItem("India Today English","location='http://www.indiatoday.com/'");
mm_menu_publications.addMenuItem("India Today Hindi","location='http://www.aajtak.com/'");
mm_menu_publications.addMenuItem("Business Today","location='http://www.business-today.com/'");
mm_menu_publications.addMenuItem("Reader's Digest","location='http://www.rd-india.com/'");
mm_menu_publications.addMenuItem("Good Housekeeping","location='http://www.indiatodaygroup.com/goodhouse/goodhouse.html'");
mm_menu_publications.addMenuItem("Golf Digest India","location='http://www.golfdigestindia.com/'");
mm_menu_publications.addMenuItem("Cosmopolitan","location='http://www.indiatodaygroup.com/cosmo/subscription/newcosmosubs/cosmo-subs.html'");
mm_menu_publications.addMenuItem(mm_2_1,"location='#'");

/*
mm_menu_publications.hideOnMouseOut=true;
mm_menu_publications.fontWeight= curFtWeight;
mm_menu_publications.fontDisabled= curFtDis;
mm_menu_publications.menuBorder=1;
mm_menu_publications.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_publications.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_publications.bgColor='#677CBA';
*/

/* PRINTING MENU */
/* -----------------------------------------------*/
  window.mm_menu_printing = new Menu("root",99,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_printing.addMenuItem("Thomson Press","location='http://www.thomsonpress.com/'");
/*
mm_menu_publications.hideOnMouseOut=true;
mm_menu_publications.fontWeight= curFtWeight;
mm_menu_publications.fontDisabled= curFtDis;
mm_menu_publications.menuBorder=1;
mm_menu_publications.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_publications.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_publications.bgColor='#677CBA';
*/

/* MUSIC MENU */
/* -----------------------------------------------*/
  window.mm_menu_music = new Menu("root",80,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_music.addMenuItem("Music Today","location='http://www.music-today.com/'");
//mm_menu_music.hideOnMouseOut=true;
//mm_menu_music.fontWeight= curFtWeight;
//mm_menu_music.fontDisabled= curFtDis;
//mm_menu_music.menuBorder=1;
//mm_menu_music.menuLiteBgColor=curMenuLiteBgColor;
//mm_menu_music.menuBorderBgColor=curMenuBorderBgColor;
//mm_menu_music.bgColor='#677CBA';

/* TELEVISION MENU */
/* -----------------------------------------------*/
  window.mm_menu_television = new Menu("root",100,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_television.addMenuItem("Aaj Tak","location='http://www.aajtak.com/'");
mm_menu_television.addMenuItem("Headlines Today","location='http://www.indiatodaygroup.com/new-site/television.html'");
/*
mm_menu_publications.hideOnMouseOut=true;
mm_menu_publications.fontWeight= curFtWeight;
mm_menu_publications.fontDisabled= curFtDis;
mm_menu_publications.menuBorder=1;
mm_menu_publications.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_publications.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_publications.bgColor='#677CBA';
*/

/*
mm_menu_television.hideOnMouseOut=true;
mm_menu_television.fontWeight= curFtWeight;
mm_menu_television.fontDisabled= curFtDis;
mm_menu_television.menuBorder=1;
mm_menu_television.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_television.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_television.bgColor='#677CBA';
*/

/* PUBLIC WELFARE MENU */
/* -----------------------------------------------*/
  window.mm_menu_public_welfare = new Menu("root",80,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_public_welfare.addMenuItem("Care Today","location='http://www.indiatodaygroup.com/care_tod/'");
/*
mm_menu_public_welfare.hideOnMouseOut=true;
mm_menu_public_welfare.fontWeight= curFtWeight;
mm_menu_public_welfare.fontDisabled= curFtDis;
mm_menu_public_welfare.menuBorder=1;
mm_menu_public_welfare.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_public_welfare.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_public_welfare.bgColor='#677CBA';
*/

/* EDUCATION MENU */
/* -----------------------------------------------*/
  window.mm_menu_education = new Menu("root",90,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_education.addMenuItem("Vasant Valley","location='http://www.vasantvalley.org/vasantvalley/default.shtml'");

/*
mm_menu_education.hideOnMouseOut=true;
mm_menu_education.fontWeight= curFtWeight;
mm_menu_education.fontDisabled= curFtDis;
mm_menu_education.menuBorder=1;
mm_menu_education.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_education.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_education.bgColor='#677CBA';
*/

/* PUBLISHING MENU */
/* -----------------------------------------------*/
  window.mm_menu_publishing = new Menu("root",110,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_publishing.addMenuItem("Harper Collins","location='http://www.indiatodaygroup.com/new-site/publishing.html'");
mm_menu_publishing.addMenuItem("IT Book Club","location='http://www.indiatodaybookclub.com/'");
mm_menu_publishing.addMenuItem("Directories Today","location='http://www.directories-today.com/dto/ind/jsp/Home.jsp'");
/*
mm_menu_publishing.hideOnMouseOut=true;
mm_menu_publishing.fontWeight= curFtWeight;
mm_menu_publishing.fontDisabled= curFtDis;
mm_menu_publishing.menuBorder=1;
mm_menu_publishing.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_publishing.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_publishing.bgColor='#677CBA';
*/

/* TRAINING MENU */
/* -----------------------------------------------*/
/* sub menu */
window.mm_2_1 = new Menu("Training",159,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_2_1.addMenuItem("Accounts Course Material","location='http://www.indiatodaygroup.com/training_acc.htm'");
mm_2_1.addMenuItem("Taxation Course Material","location='http://www.indiatodaygroup.com/training_tax.htm'");
mm_2_1.hideOnMouseOut=true;
mm_2_1.fontWeight= curFtWeight;
mm_2_1.fontDisabled= curFtDis;
mm_2_1.menuBorder=1;
mm_2_1.menuLiteBgColor=curMenuLiteBgColor;
mm_2_1.menuBorderBgColor=curMenuBorderBgColor;
mm_2_1.bgColor='#677CBA';


  window.mm_menu_training_1 = new Menu("root",100,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_training_1.addMenuItem(mm_2_1,"location='http://www.indiatodaygroup.com/training.htm'");
//mm_menu_training_1.addMenuItem("Apply","location='http://www.indiatodaygroup.com/training_tax.htm'");
//mm_menu_training_1.addMenuItem("Payroll","location='http://www.indiatodaygroup.com/index.htm'");
mm_menu_training_1.hideOnMouseOut=true;
mm_menu_training_1.fontWeight= curFtWeight;
mm_menu_training_1.fontDisabled= curFtDis;
mm_menu_training_1.menuBorder=1;
mm_menu_training_1.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_training_1.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_training_1.bgColor='#677CBA';


/* CONTACT MENU */
/* -----------------------------------------------*/
  window.mm_menu_contact_5= new Menu("root",129,19,curFtFamily,curFtSize,curFtColor,curFtColorHover,curItemBg,curItemBgHover,curAlign,curValign,curPad,curSpace,curTimeOut,curSX,curSY,curSrel,curOpq,curVert,curIdt,curAw,curAh);
mm_menu_contact_5.addMenuItem("Locations","location='http://www.indiatodaygroup.com/contact_us.htm'");
mm_menu_contact_5.addMenuItem("Feedback & Enquiry","location='http://www.indiatodaygroup.com/feedback.htm'");
mm_menu_contact_5.hideOnMouseOut=true;
mm_menu_contact_5.fontWeight= curFtWeight;
mm_menu_contact_5.fontDisabled= curFtDis;
mm_menu_contact_5.menuBorder=1;
mm_menu_contact_5.menuLiteBgColor=curMenuLiteBgColor;
mm_menu_contact_5.menuBorderBgColor=curMenuBorderBgColor;
mm_menu_contact_5.bgColor='#677CBA';

  mm_menu_contact_5.writeMenus();
} // mmLoadMenus()

