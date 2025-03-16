window.addEventListener('scroll', function(r) {
                                    var mwHeader = document.querySelector('.mw-header');
                                    var mwSearchBox = document.querySelector('.mw-search-box');
                                    if (window.pageYOffset > 100) {
                                        if (typeof mwHeader != 'null') {
                                            mwHeader.classList.add('mw-header-sticky');
                                            mwSearchBox.style.display = "none";
                                        }
                                    } else {
                                        mwHeader.classList.remove('mw-header-sticky');
                                        mwSearchBox.style.display = "block";
                                    }
                                });