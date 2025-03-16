document.addEventListener('DOMContentLoaded', function(){
                        // Used to toggle data-link-name on label buttons
                        var navInputCheckbox = document.getElementById('top-nav-input-checkbox')
                        var showMoreButton = document.getElementById('show-more-button')
                        var veggieBurger = document.getElementById('veggie-burger')
                        var expandedMenuClickableTags = document.querySelectorAll('.selectableMenuItem')
                        var expandedMenu = document.getElementById('expanded-menu-root')

                        // We assume News is the 1st column
                        var firstColLabel = document.getElementById('News-button')
                        var firstColLink = document.querySelectorAll('#newsLinks > li:nth-of-type(2) > a')[0]

                        var focusOnFirstNavElement = function(){
                          // need to focus on first element in list, firstColLabel is not viewable on desktop
                          if(window.getComputedStyle(firstColLabel).display === 'none'){
                            firstColLink.focus()
                          } else {
                            firstColLabel.focus()
                          }
                        }

						if (!navInputCheckbox) return; // Sticky nav replaces the nav so element no longer exists for users in test.

                        navInputCheckbox.addEventListener('click',function(){
                          document.body.classList.toggle('nav-is-open')

                          if(!navInputCheckbox.checked) {
							firstColLabel.setAttribute('aria-expanded', 'false')
                            showMoreButton.setAttribute('data-link-name','nav2 : veggie-burger : show')
                            veggieBurger.setAttribute('data-link-name','nav2 : veggie-burger : show')
                            expandedMenuClickableTags.forEach(function($selectableElement){
                                $selectableElement.setAttribute('tabindex','-1')
                            })
                          } else {
							firstColLabel.setAttribute('aria-expanded', 'true')
                            showMoreButton.setAttribute('data-link-name','nav2 : veggie-burger : hide')
                            veggieBurger.setAttribute('data-link-name','nav2 : veggie-burger : hide')
                            expandedMenuClickableTags.forEach(function($selectableElement){
                                $selectableElement.setAttribute('tabindex','0')
                            })
                            focusOnFirstNavElement()
                          }
                        })
                        var toggleMainMenu = function(e){
                          navInputCheckbox.click()
                        }
                        // Close hide menu on press enter
                        var keydownToggleMainMenu = function(e){
                          // keyCode: 13 => Enter key | keyCode: 32 => Space key
                          if (e.keyCode === 13 || e.keyCode === 32) {
                            e.preventDefault()
                            toggleMainMenu()
                          }
                        }
                        showMoreButton.addEventListener('keydown', keydownToggleMainMenu)
                        veggieBurger.addEventListener('keydown', keydownToggleMainMenu)
                        // Accessibility to hide Nav when pressing escape key
                        document.addEventListener('keydown', function(e){
                          // keyCode: 27 => esc
                          if (e.keyCode === 27) {
                            if(navInputCheckbox.checked) {
                              toggleMainMenu()
                              if(window.getComputedStyle(veggieBurger).display === 'none'){
                                showMoreButton.focus()
                              }else{
                                veggieBurger.focus()
                              }
                            }
                          }
                        })
                        // onBlur close dialog
                        document.addEventListener('mousedown', function(e){
                          if(navInputCheckbox.checked && !expandedMenu.contains(e.target)){
                            toggleMainMenu()
                          }
                        });
                      })