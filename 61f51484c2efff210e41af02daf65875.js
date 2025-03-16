let gs = 'initial';
                    const cw = document.documentElement.clientWidth;
                    const ch = document.documentElement.clientHeight;
                    const ic = document.getElementById('inner_container');
                    if (gs === 'initial') {
                        if (+cw < 1350 && +ch < 660) {
                            gs = 'small'
                        }
                        else if (+cw > 1900 && +ch > 940) {
                            gs = 'large'
                        }
                        else {
                            gs = 'medium'
                        }
                    }
                    ic.classList.add('grid--' + gs);
                    ic.setAttribute('data-size', gs);
                    window.initialGridSize = gs;