function geekWeek2023Optimizations()
  {
    var isGeekWeek = false;
    var saleLastDays = false;
    var rightBarScratchWinBtn = false;
    
    const istTimeZone = 'Asia/Kolkata';
    const startDate = new Date('2023-10-14T00:00:00'); // Geek Week Start Date
    const endDate = new Date('2023-10-21T23:59:59'); // Geek Week End Date
    const saleLastDaysThresholdDate = new Date('2023-10-21T00:00:00'); // Geek Week Last Day Threshold Date
    const rightBarScratchWinBtnThresholdDate = new Date('2023-10-15T00:00:00');

    // Current Date in IST
    const dateToCheck = new Date();
    dateToCheck.toLocaleString('en-US', { timeZone: istTimeZone });

    // Check if the date is within the range of Geek Week October 2023
    if (dateToCheck >= startDate && dateToCheck <= endDate) {
      isGeekWeek = true;
    }

    // Check if it's the last day of Geek Week October 2023
    if (dateToCheck >= saleLastDaysThresholdDate && dateToCheck <= endDate) {
      saleLastDays = true;
    }

    if (dateToCheck >= rightBarScratchWinBtnThresholdDate && dateToCheck <= endDate) {
      rightBarScratchWinBtn = true;
    }

    // Executing the code only if it's Geek Week (14th Oct 2023 - 21st Oct 2023)
    if(isGeekWeek)
    {
      // Defining the variables for colour, CTA links and CTA texts

      var gfgHomePageCourseSectionBgImageUrl = 'https://media.geeksforgeeks.org/auth-dashboard-uploads/sale-bg-3-min.png';
      
      var gfgHomePageSearchBarChipsColour = '#fff';
      var gfgHomePageSearchBarChipsBgColour = '#0096d1';

      var gfgHomePageCoursesSectionCardsText = "Upto 35% Off";
      var gfgHomePageCoursesSectionDiscountBgColour = '#ffd217';
      var gfgHomePageCoursesSectionDiscountColour = '#404040';
      var gfgHomePageCoursesSectionDiscountBorderColour = '#ffd217';

      var gfgHomePageCoursesDropdownMenuPillText = "SALE";

      var gfgGeekWeek2023CampaignUrl = 'https://www.geeksforgeeks.org/courses';
      
      var gfgSubHeaderCTASaleNormalDaysBgColour = '#8366ac';
      var gfgSubHeaderCTASaleNormalDaysColour = '#fff';
      var gfgSubHeaderCTASaleNormalDaysText = 'Courses @Sale';

      var gfgSubHeader24hrTimerBgColour = '#f05721';
      var gfgSubHeader24hrTimerColour = '#fff';
      var gfgSubHeader24hrTimerText = "Sale Ends In";

      var gfgRightBarCourseCardBtnText = "Upto 35% Off";
      var gfgRightBarBtnText = "Scratch and Win";

      var gfgGeekWeek2023BannerImageUrl = "https://media.geeksforgeeks.org/auth-dashboard-uploads/salebannerimage1.png";

      if(saleLastDays)
        var gfgGeekWeek2023BannerImageUrl = "https://media.geeksforgeeks.org/auth-dashboard-uploads/salebannerimagelastday1.png";

      /* JS to change the following :- 
      1. Header chip's background colour which are shown below search bar on Home page
      2. To add sale background image behind courses section
      */
      isElementInDOM("head")?document.querySelector("head").insertAdjacentHTML('beforeend',
      `<style>
      div.gfg_home_page_course_outer_height {
        background-image : url(${gfgHomePageCourseSectionBgImageUrl});
      }
      button.gfg_home_page_chips_button{
        background-color: ${gfgHomePageSearchBarChipsBgColour} !important;
        color: ${gfgHomePageSearchBarChipsColour} !important;
        font-weight: bolder;
      }
      </style>`):"";

      /* JS to change the following :- 
      1. Upto x % discount div in place of course rating div for each course card shown on home page
      */
      isElementInDOM("div.gfg_home_page_course_card_divider>div:nth-of-type(1)>div:nth-of-type(2)",true)?document.querySelectorAll('div.gfg_home_page_course_card_divider>div:nth-of-type(1)>div:nth-of-type(2)').forEach(function (node, index) {
        node.outerHTML = `<div class="ant-col"><div class="ant-row"><div class="gfg_home_page_course_card_rating" style="background: ${gfgHomePageCoursesSectionDiscountBgColour};border: 1px solid ${gfgHomePageCoursesSectionDiscountBorderColour} !important;"><span class="gfg_home_page_course_rating_val" style="padding-left: 4px;color: ${gfgHomePageCoursesSectionDiscountColour} !important;font-weight: bold;">${gfgHomePageCoursesSectionCardsText}</span></div></div></div>`;
      }):"";


      /* JS to change the following :- 
      1. Add Sale ends in timer in subheader (Middle)
      2. Add normal Subheader CTA (Middle)
      */

      // Timer div

      if(saleLastDays)
      {
        isElementInDOM("#hslider>li:nth-of-type(1)")?document.querySelector("#hslider>li:nth-of-type(1)").insertAdjacentHTML('beforebegin',
        `<li style="background: ${gfgSubHeader24hrTimerBgColour};"><style>span#timer #hours { font-size: 18px; color: ${gfgSubHeader24hrTimerColour}; font-weight: bold;} span#timer #minutes { font-size: 18px; color: ${gfgSubHeader24hrTimerColour}; font-weight: bold;} span#timer #seconds { font-size: 14px; color: ${gfgSubHeader24hrTimerColour}; font-weight: bold;}</style><a href="${gfgGeekWeek2023CampaignUrl}?utm_source=geeksforgeeks&utm_medium=sub_header&utm_campaign=geekweek2023" style="color: ${gfgSubHeader24hrTimerColour} !important;font-weight: bolder;">${gfgSubHeader24hrTimerText} <span id="timer"><span id="hours"></span><span id="minutes"></span><span id="seconds"></span></span></a></li>`):"";

        function makeTimer() {

          var end_time = new Date("21 Oct 2023 23:59:59 GMT+05:30");			
          end_time = (Date.parse(end_time) / 1000);

          var now = new Date();
          now = (Date.parse(now) / 1000);

          var time_left = end_time - now;
        
          var days = Math.floor(time_left / 86400); 
          var hours = Math.floor((time_left - (days * 86400)) / 3600);
          var orig_hours = Math.floor(time_left / 3600);
          var minutes = Math.floor((time_left - (days * 86400) - (hours * 3600 )) / 60);
          var seconds = Math.floor((time_left - (days * 86400) - (hours * 3600) - (minutes * 60)));

          if (orig_hours < "10") { orig_hours = "0" + orig_hours; }
          if (minutes < "10") { minutes = "0" + minutes; }
          if (seconds < "10") { seconds = "0" + seconds; }

          document.getElementById("hours").innerHTML = orig_hours + " : ";
          document.getElementById("minutes").innerHTML = minutes + " : ";
          document.getElementById("seconds").innerHTML = seconds;

        }

        setInterval(function() { makeTimer(); }, 1000);
      }
      else
      {
        // Normal scenario Subheader CTA
        isElementInDOM("#hslider>li:nth-of-type("+Math.ceil(document.querySelectorAll('#hslider>li').length/3)+")")?document.querySelector("#hslider>li:nth-of-type("+Math.ceil(document.querySelectorAll('#hslider>li').length/3)+")").insertAdjacentHTML('beforebegin',
        `<li style="background-color: ${gfgSubHeaderCTASaleNormalDaysBgColour};"><a href="${gfgGeekWeek2023CampaignUrl}?utm_source=geeksforgeeks&utm_medium=sub_header&utm_campaign=geekweek2023" style="font-weight: bold;color: ${gfgSubHeaderCTASaleNormalDaysColour} !important;">${gfgSubHeaderCTASaleNormalDaysText}</a></li>`):"";
      }



      /* JS to add x% off tooltip over top of 'Courses' list item in header */
      isElementInDOM('ul.header-main__list>li:nth-of-type(1) > span')?document.querySelector('ul.header-main__list>li:nth-of-type(1) > span').outerHTML = `<span>Courses&nbsp; <span style="background: 0% 0% no-repeat padding-box padding-box #ffd217; border-radius: 4px; font-size: 12px; color: rgb(0, 0, 0); float: right; padding: 2px 5px;position: absolute;top: -15px;right: -25px;">${gfgHomePageCoursesDropdownMenuPillText}</span></span>`:"";

      /* JS to add the following :- 
      1. Courses tab promo banner 
      2. Practice tab promo banner
      3. Courses tab hearbeat dot
      */

      isElementInDOM('#courses-tab-main>#nav_tab_courses')?document.querySelector('#courses-tab-main>#nav_tab_courses').style.position = "relative":"";
      isElementInDOM('#courses-tab-main>#nav_tab_courses>span')?document.querySelector('#courses-tab-main>#nav_tab_courses>span').insertAdjacentHTML('beforebegin',`<style>#darkMode-wrap-red-dot{animation: pulse-animation 1.3s infinite;}@keyframes pulse-animation{0%{box-shadow: 0 0 0 0px rgba(249, 179, 0, 0.5);}100%{box-shadow: 0 0 0 10px rgba(249, 179, 0, 0);}}</style><div id="darkMode-wrap-red-dot" style="height: 10px;width: 10px;background-color: #F9B300;border-radius:50%;position:absolute;top: -1px;right: -10px;"></div>`):"";

      isElementInDOM('#courses-tab-main a.nav_tab.courses')?document.querySelector('#courses-tab-main a.nav_tab.courses').addEventListener('click', event => {
        !isElementInDOM("#courses_nav_tab_content .geekWeek2023BannerImage")?setTimeout(function(){isElementInDOM("#courses_nav_tab_content > #courses-heading")?document.querySelector("#courses_nav_tab_content > #courses-heading").insertAdjacentHTML('beforebegin',
          `<a target="_blank" href="${gfgGeekWeek2023CampaignUrl}?utm_source=geeksforgeeks&amp;utm_medium=courses_tab&amp;utm_campaign=geekweek2023" class="geekWeek2023BannerImage"><div style="cursor:pointer;margin-top: 15px;text-align: center;" class="problems-promotional_banner"><img class="no-zoom-in-cursor" alt="python-offline-classes" src="${gfgGeekWeek2023BannerImageUrl}" style="width: 100%;"></div></a>`):""}, 2000):"";
      }):"";

      isElementInDOM('#practice-tab-main a.nav_tab.practice')?document.querySelector('#practice-tab-main a.nav_tab.practice').addEventListener('click', event => {
        !isElementInDOM("#practice-tab-content .geekWeek2023BannerImage")?setTimeout(function(){isElementInDOM("#practice-tab-content > #curatedlisttitle")?document.querySelector("#practice-tab-content > #curatedlisttitle").insertAdjacentHTML('beforebegin',
        `<a target="_blank" href="${gfgGeekWeek2023CampaignUrl}?utm_source=geeksforgeeks&amp;utm_medium=prac_tab&amp;utm_campaign=geekweek2023" class="geekWeek2023BannerImage"><div style="cursor:pointer;margin-top: 15px; margin-bottom:15px; text-align: center;" class="problems-promotional_banner"><img class="no-zoom-in-cursor" alt="python-offline-classes" src="${gfgGeekWeek2023BannerImageUrl}" style="width: 100%;"></div>`):""}, 3000):"";
      }):"";


      isElementInDOM('.whats-new-section .explore-course',true)?document.querySelectorAll('.whats-new-section .explore-course').forEach(function (node, index) {
        node.innerHTML = gfgRightBarCourseCardBtnText;
        node.style.cssText = `
        background: transparent linear-gradient(106deg, #fed102 0%, #fff7d1 100%) 0% 0% no-repeat padding-box;
          color: #000;
          border-color: #fff7d1;
        `
      }):"";

      if(rightBarScratchWinBtn)
      {
        isElementInDOM('.whats-new-section')?$('.whats-new-section').css('min-height','360px'):"";
        
        isElementInDOM('.whats-new-section div.heading')?document.querySelector('.whats-new-section div.heading').insertAdjacentHTML('beforebegin',`<div class="heading" style="background: linear-gradient(106deg, #f05721 50%, #d60a09 100%); border-radius: 10px; box-shadow: 0 0 12px rgba(253,63,67,.36);
        margin: 0 auto 10px 10px; width: 270px;"><div class="def-title_wrap" style="margin: 0 auto;"><div class="title" style="font-size: 15pt !important;margin-top:10px;"><a class="" href="${gfgGeekWeek2023CampaignUrl}?scratch_card=true&utm_source=geeksforgeeks&utm_medium=rightbar_btn&utm_campaign=geekweek2023" target="_blank" title="Scratch and Win" style="color: #fff !important;"><span style="color: #fff !important;letter-spacing: 1px;">${gfgRightBarBtnText}</span></a></div></div></div>`):"";

        isElementInDOM('.whats-new-section-gblog div.gblog-heading')?document.querySelector('.whats-new-section-gblog div.gblog-heading').insertAdjacentHTML('beforebegin',`<div class="heading" style="background: linear-gradient(106deg, #f05721 50%, #d60a09 100%); border-radius: 10px; box-shadow: 0 0 12px rgba(253,63,67,.36);
        margin: 0 auto 10px 10px; width: 270px;"><div class="def-title_wrap" style="margin: 0 auto;"><div class="title" style="font-size: 15pt !important;margin-top:10px;"><a class="" href="${gfgGeekWeek2023CampaignUrl}?scratch_card=true&utm_source=geeksforgeeks&utm_medium=rightbar_btn&utm_campaign=geekweek2023" target="_blank" title="Scratch and Win" style="color: #fff !important;"><span style="color: #fff !important;letter-spacing: 1px;">${gfgRightBarBtnText}</span></a></div></div></div>`):"";
      }  
    }  
  }

  function isElementInDOM(selector, all=false)
  {
    if(!all)
    {
      if(!document.querySelector(selector))
        return false;
      else
        return true;
    }
    else
    {
      if(document.querySelectorAll(selector).length == 0)
        return false;
      else
        return true;
    }
  }