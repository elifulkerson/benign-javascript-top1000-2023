let isUnsupported;
      const { userAgent } = window.navigator;
      if (userAgent.includes('Firefox/')) {
        const firefoxMinVersion = 67;
        const firefoxVersion = Number(userAgent.split('Firefox/')[1].split('.')[0]);
        if (firefoxVersion < firefoxMinVersion) {
          isUnsupported = true;
        }
      } else if (userAgent.includes('Edg/')) {
        const edgeMinVersion = 18;
        const edgeVersion = Number(userAgent.split('Edg/')[1].split('.')[0]);
        if (edgeVersion <= edgeMinVersion) {
          isUnsupported = true;
        }
      } else if (userAgent.includes('Chrome/')) {
        const chromeMinVersion = 71;
        const chromeVersion = Number(userAgent.split('Chrome/')[1].split('.')[0]);
        if (chromeVersion < chromeMinVersion) {
          isUnsupported = true;
        }
      } else if (userAgent.includes('Safari/')) {
        const safariMinVersion = 11;
        const safariVersion = Number(userAgent.split('Version/')[1].split('.')[0]);
        if (safariVersion < safariMinVersion) {
          isUnsupported = true;
        }
      }
      if (isUnsupported) {
        document.getElementById('unsupported-browser').classList.add('show-unsupported-browser');
        document.getElementById('main-container').style.display = 'none';
      }