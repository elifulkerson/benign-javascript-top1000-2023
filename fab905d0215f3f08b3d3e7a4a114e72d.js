(function(svg) {
          var injectNode = function(data) {
            var body = document.body;
            var children;
            var x = document.createElement('x');
            x.innerHTML = data;
            children = x.querySelector('svg');
            if (children) {
              children.style.position = 'absolute';
              children.style.width = 0;
              children.style.height = 0;
              children.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
              body.insertBefore(children, body.firstChild);
            }
          };
          xhr = new XMLHttpRequest();
          xhr.open('GET', svg, true);
          xhr.onload = function() { injectNode(xhr.response); };
          xhr.send();
        })('/static/media/sprite-icons.97497576ae616b50150b.svg')