(() => {
    const slot = document.querySelector('.fox-tail--freezer');
    const { width, height } = slot.getBoundingClientRect();
    const freezerIsVisible = width > 0 && height > 0;

    if(!freezerIsVisible){
      return false;
    }

    let { displayCount, freezeTime } = slot.dataset;

    displayCount = parseInt(displayCount, 10);
    freezeTime = parseInt(freezeTime, 10);

    const freezerIsDisabled = displayCount === 0;

    /**
     * Блокирует прокрутку на странице, если фриз включен
     */
    const fixLayout = () => {
      const html = document.querySelector('html');

      slot.classList.add('freezer-shown');
      html.style.overflow = 'hidden';
      html.style.position = 'fixed';
      html.style.width = '100%';
    };

    /**
     * Разблокирует прокрутку на странице
     */
    const unfixLayout = () => {
      const html = document.querySelector('html');

      slot.classList.remove('freezer-shown');
      html.style.removeProperty('overflow');
      html.style.removeProperty('position');
      html.style.removeProperty('width');
    };

    if(!freezerIsDisabled && freezeTime > 0){
      fixLayout();
    }

    if(freezerIsDisabled){
      slot.style.height = '250px';
    }

    slot.addEventListener('fox-freezer-was-shown', fixLayout);
    slot.addEventListener('fox-freezer-was-been-hidden', unfixLayout);
    slot.addEventListener('fox-tail-has-been-hidden', unfixLayout);
    slot.addEventListener('fox-freezer-fallback-was-shown', unfixLayout);
  })();