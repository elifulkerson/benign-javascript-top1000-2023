function recordImagePerformanceMark() {
            performance.mark('first-post-meaningful-paint');
          }
          document &&
            document
              .getElementById('post-image')
              .addEventListener('load', recordImagePerformanceMark);