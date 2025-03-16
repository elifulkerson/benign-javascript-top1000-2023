window.OneSignal = window.OneSignal || [];

      OneSignal.push( function() {
        OneSignal.SERVICE_WORKER_UPDATER_PATH = "OneSignalSDKUpdaterWorker.js.php";
                      OneSignal.SERVICE_WORKER_PATH = "OneSignalSDKWorker.js.php";
                      OneSignal.SERVICE_WORKER_PARAM = { scope: "/" };
        OneSignal.setDefaultNotificationUrl("https://www.in.gr");        var oneSignal_options = {};
        window._oneSignalInitOptions = oneSignal_options;

        oneSignal_options['wordpress'] = true;
oneSignal_options['appId'] = 'c9b07d84-0cb0-4f20-824b-d96e3b08ea84';
oneSignal_options['allowLocalhostAsSecureOrigin'] = true;
oneSignal_options['welcomeNotification'] = { };
oneSignal_options['welcomeNotification']['disable'] = true;
oneSignal_options['subdomainName'] = "in.gr";
oneSignal_options['promptOptions'] = { };
oneSignal_options['promptOptions']['actionMessage'] = "Θέλετε να λαμβάνετε ειδοποιήσεις από in.gr ;";
oneSignal_options['promptOptions']['acceptButtonText'] = "ΝΑΙ ΘΕΛΩ";
oneSignal_options['promptOptions']['cancelButtonText'] = "ΟΧΙ, ΕΥΧΑΡΙΣΤΩ";
oneSignal_options['promptOptions']['siteName'] = "in.gr";
oneSignal_options['promptOptions']['autoAcceptTitle'] = "NAI";
                OneSignal.init(window._oneSignalInitOptions);
                OneSignal.showSlidedownPrompt();      });

      function documentInitOneSignal() {
        var oneSignal_elements = document.getElementsByClassName("OneSignal-prompt");

        var oneSignalLinkClickHandler = function(event) { OneSignal.push(['registerForPushNotifications']); event.preventDefault(); };        for(var i = 0; i < oneSignal_elements.length; i++)
          oneSignal_elements[i].addEventListener('click', oneSignalLinkClickHandler, false);
      }

      if (document.readyState === 'complete') {
           documentInitOneSignal();
      }
      else {
           window.addEventListener("load", function(event){
               documentInitOneSignal();
          });
      }