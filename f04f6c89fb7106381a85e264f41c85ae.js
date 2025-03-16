  // NEW

  // Build query string from object params
  function objectToQueryString(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
  
  /*
    params info:
    tag: tag/keyword yang ingin ditampilkan
    limit: jumlah artikel yang ingin ditampilkan
    */
  const params = {
    tag: 'le minerale pergizi',
    limit: 2
  };
  
  const queryString = objectToQueryString(params);
  
  function requestChannelBox (url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = function() {
  
      if(xhr.status === 200) {
          var response = JSON.parse(xhr.response)
          callback(response.data);
      } else {
          callback([]);
      }
   }
  
   xhr.send();
  }
  
  requestChannelBox('https://www.detik.com/api/search?' + queryString, function (data) {
      var str = ''
      data.forEach((item, i) => {
          str += 
          `
  
  
                              <div class="cb-leminerale-article-box">
                                  <a href="${item.pageUrl}">
                                      <div class="article-thumbnail">
                                          <img src="${item.imageUrl}">
                                      </div>
                                      <div class="article-data">
                                          <h1>
                                             ${item.title}                     
                                          </h1>
                                          <p>
                                              ${item.formatedDate} WIB
                                          </p>
                                      </div>
                                  </a>
                              </div>
  
                          `;
      });
  
      let elem = document.querySelector("#channelboxleminerale");
      elem.innerHTML = elem.innerHTML + str;
  })