var currentDate = new Date();
                  document.write(currentDate.toLocaleString("bn-BD", {
                    day: "2-digit"
                  }) + " " + currentDate.toLocaleString("bn-BD", {
                    month: "long"
                  }) + ", " + currentDate.toLocaleString("bn-BD", {
                    year: "numeric"
                  }));