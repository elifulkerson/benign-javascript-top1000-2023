window.googletag = window.googletag || {
    cmd: []
  };
    googletag.cmd.push(function() {
        
        //Popup Desktop
        /*googletag
          .defineSlot(
            '/22845897056/JG_Popup_660x440',
            [660, 440],
            'div-gpt-ad-1674537137570-0',
          )
        .addService(googletag.pubads());*/
        
        //Popup_Home_Desktop
        googletag
        .defineSlot(
            '/22845897056/JG_Popup_660x440', 
            [660, 440], 
            'div-gpt-ad-1685248888429-0')
            .addService(googletag.pubads());
        
        //Popup Home Mobile
        googletag
          .defineSlot(
            '/22845897056/JG_Popup_320x480',
            [320, 480],
            'div-gpt-ad-1674542877839-0',
          )
        .addService(googletag.pubads());
        
        
        //Popup Detail Desktop
        //googletag.defineSlot('/22845897056/JG_Detail_Popup_660x440', [660, 440], 'div-gpt-ad-1686578767180-0').addService(googletag.pubads());
        
        
        //Popup Detail Mobile
        //googletag.defineSlot('/22845897056/JG_Detail_Popup-320x480', [320, 480], 'div-gpt-ad-1686578144628-0').addService(googletag.pubads());

        //JG_Popup_Desktop_Home_660x440:
        googletag.defineSlot('/22845897056/JG_Popup_Desktop_Home_660x440', [660, 440], 'div-gpt-ad-1694452593783-0').addService(googletag.pubads());

        //JG_Popup_Desktop_Details_660x440:
        googletag.defineSlot('/22845897056/JG_Popup_Desktop_Details_660x440', [660, 440], 'div-gpt-ad-1694452764934-0').addService(googletag.pubads());

        //JG_Popup_Mobile_Home_320x480:
        googletag.defineSlot('/22845897056/JG_Popup_Mobile_Home_320x480', [320, 480], 'div-gpt-ad-1694453402620-0').addService(googletag.pubads());

        //JG_Popup_Mobile_Details_320x480:
        googletag.defineSlot('/22845897056/JG_Popup_Mobile_Details_320x480', [320, 480], 'div-gpt-ad-1694453534041-0').addService(googletag.pubads());
        
        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs();
        googletag.enableServices();
    });