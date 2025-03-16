if (!window.twq) {
          window.twq = function() {
            window.twq.exe ? window.twq.exe.apply(window.twq, arguments) : window.twq.queue.push(arguments);
          };

          window.twq.version = '1.1';
          window.twq.queue = [];
        }
        twq('config', 'o3zvc');