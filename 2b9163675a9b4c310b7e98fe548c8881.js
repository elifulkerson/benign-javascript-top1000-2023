var displayOnDevices = ['Desktop','Tablet','Mobile'];
        if(displayOnDevices.indexOf(deviceName) >= 0) {
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-mrec4');});
        }