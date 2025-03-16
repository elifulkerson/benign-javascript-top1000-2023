document.addEventListener('DOMContentLoaded', function () {
          (function () {
              const notficationElements = document.querySelectorAll('[id=top-notification-black]');

              notficationElementsArr = Array.prototype.slice.call(notficationElements,0); 

              if (notficationElements) {
                  const closeButtons = document.querySelectorAll('[id=top-notification-black-close]');
                  closeButtons.forEach(el => {
                    el.addEventListener('click', function (e) {
                      e.preventDefault();
                      notficationElementsArr.forEach(element => {
                        element.classList.add('hide');
                        element.style.padding = 0;
                      })
                  })
                })
              }
          })();

      });