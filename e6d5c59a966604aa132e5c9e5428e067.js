function mwToggleMenuOverlay(event) {
                                    if (event.target.classList.contains('mw-side-menu-overlay'))
                                        mwToggleMenu();
                                }

                                function mwToggleMenu() {
                                    var menu = document.querySelector('.mw-side-menu-overlay');
                                    var container = document.querySelector('.off-menu-wrapper .inner-wrapper');
                                    var head = document.querySelector('.mw-header');
                                    var mwBurgerBtn = document.querySelector('.mw-burger-btn');
                                    var mwHeadSearchNox = document.querySelector('.header-search-box');
                                    var html = document.getElementsByTagName('html');

                                    if (menu.classList.contains('closed')) {
                                        container.style.left = "275px";
                                        head.style.right = "-275px";
                                        menu.classList.remove('closed');
                                        mwBurgerBtn.style.display = "none";
                                        mwHeadSearchNox.style.marginLeft = "52px";
                                        html[0].style.overflow = "hidden";
                                    } else {
                                        container.style.left = "0";
                                        head.style.right = "0";
                                        menu.classList.add('closed');
                                        mwBurgerBtn.style.display = "flex";
                                        mwHeadSearchNox.style.marginLeft = "10px";
                                        html[0].style.overflow = "auto";
                                    }
                                }

                                function validateSearch(el) {
                                    return el.querySelector('input[type=search]').value.trim() != "";
                                }