var screeningData = {};
  function configureScreening(
    advElement,
    slotNumber,
    onViewCallback,
    type
  ) {
    if (type === 'fullServiceWallpaper' && slotNumber !== 3) {
      return;
    }

    var screeningElement =
      advElement.parentNode.parentNode.previousSibling.firstChild;

    screeningData[slotNumber] = {
      element: screeningElement,
      type: type,
    };

    onViewCallback({ el: screeningElement });
  };

  var nativeTeaserData = {};
  function createNativeTeaser(
    nativeSelector,
    slotNumber,
    data,
    onViewCallback
  ) {
    if (!nativeSelector || !data || data.type !== 'teaser' || typeof onViewCallback !== 'function') {
      return;
    }
    var slotData = window.nativeTeaserData[slotNumber];
    if (slotData && slotData.ready) {
      return;
    }
    var nativeRef = document.querySelector(nativeSelector);
    if (!nativeRef) {
      return;
    }
    const adLabel = data.labelText || 'REKLAMA';
    const anchorRef = document.createElement('a');
    const imgRef = document.createElement('img');
    const spanRef = document.createElement('span');
    anchorRef.setAttribute('href', data.url);
    imgRef.setAttribute('src', data.src);
    spanRef.textContent = data.text;
    anchorRef.appendChild(imgRef);
    anchorRef.appendChild(spanRef);
    nativeRef.appendChild(anchorRef);
    
    if (data.privacyIcon && data.privacyLink) {
      const privacyLinkRef = document.createElement('a');
      const privacyIconRef = document.createElement('img');
      privacyLinkRef.setAttribute('href', data.privacyLink);
      privacyLinkRef.setAttribute('target', "_blank");
      privacyLinkRef.setAttribute('rel', "noopener noreferrer");
      privacyIconRef.setAttribute('src', data.privacyIcon);
      privacyLinkRef.appendChild(privacyIconRef)
      nativeRef.appendChild(privacyLinkRef);
    }
    
    if (!data.hideLabel) {
      anchorRef.setAttribute('data-before', adLabel);
    }
    
    nativeTeaserData[slotNumber] = { ready: true };
    onViewCallback({ el: nativeRef });
  };

  function etbqnfzlh(
    selector,
    nativeSelector,
    slotNumber,
    placeholder,
    placeholderConfig,
    shouldRegisterSlot,
    hidePlaceholder,
    doNotRegisterOnNarrow
  ) {
    if (doNotRegisterOnNarrow && window.applicationSize && window.applicationSize.type === 'narrow') {
      return;
    }

    try {
      var slotRef = document.querySelector(selector);
      var placholderRef = placeholder ? slotRef.parentNode : undefined;
      if (placholderRef) {
        if (hidePlaceholder) {
          placholderRef.style.display = 'none';
        } else {
          window.WP.push(function pushRegisterPlaceholder() {
            window.WP.gaf.registerPlaceholder(
              slotNumber,
              placholderRef,
              placeholderConfig
            );
          });
        }
      }

      if (!shouldRegisterSlot) {
        return;
      }

      window.WP.push(function pushRegisterSlot() {
        window.WP.gaf.registerSlot(slotNumber, slotRef, {
          setNative: function(data, onViewCallback) {
            if (!window.callbacksAf) window.callbacksAf = {};

            var slotData = {
              dataNative: data,
              onViewCallback: onViewCallback,
            };

            if (
              window.callbacksAf[slotNumber] &&
              window.callbacksAf[slotNumber].onDataNativeChange
            ) {
              window.callbacksAf[slotNumber].onDataNativeChange(slotData);
            } else {
              window.callbacksAf[slotNumber] = slotData;
              createNativeTeaser(nativeSelector, slotNumber, data, onViewCallback);
            }

            if (slotNumber === 6 && window.setPPData) {
              window.setPPData(data || {});
            }

            if (
              data &&
              (data.type === 'wallpaper' || data.type === 'fullServiceWallpaper')
            ) {
              configureScreening(
                placeholder ? placholderRef : slotRef,
                slotNumber,
                onViewCallback,
                data.type
              );
            }
            
            if (data && data.type === 'teaserHide') {
              var className = ".teaser-" + slotNumber;
              var teaserRef = document.querySelector(className);
              if (teaserRef) {
                teaserRef.dataset.hide = true
              }
            }
            
            if (data && data.type === 'teaserShow') {
              var className = ".teaser-" + slotNumber;
              var teaserRef = document.querySelector(className);
              if (teaserRef) {
                delete teaserRef.dataset.hide
              }
            }
          },
        });
      });

      if (!window.registeredSSRSlots) {
        window.registeredSSRSlots = [];
      }
      window.registeredSSRSlots.push(slotNumber);
    } catch (e) {
      console.error(e);
    }
  };