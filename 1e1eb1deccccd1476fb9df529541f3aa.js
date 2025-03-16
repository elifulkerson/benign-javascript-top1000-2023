var datasetURL = "https://data.ca.gov/api/3/action/package_list";

  var loadFlag = false;
  var loadCount = 0;
  var datasetCount = 0;

  function loadResults() {
   if (loadCount === 0) {

    var datasetXhr = new XMLHttpRequest();
    datasetXhr.open("GET", datasetURL, true);
    datasetXhr.onreadystatechange = function () {
     if (this.readyState === 4 && this.status === 200) {
      var datasetObj = JSON.parse(this.responseText);
      var datasetCount = datasetObj.result.length;
      console.log(datasetCount);
      document.getElementById("numberOfDatasets").innerHTML = datasetCount;
     }
    };
    datasetXhr.setRequestHeader('Content-Type', 'application/json');
    datasetXhr.withCredentials = false;
    datasetXhr.send();
   }
   loadCount += 1;
   if (loadFlag === false) {
    if (datasetCount > 0) {
     loadFlag = true;
    }
    if (loadCount >= 50) {
     loadFlag = true;
    }
    window.setTimeout(loadResults, 100); /* this checks the flag every 100 milliseconds*/
   }
  }
  loadResults();