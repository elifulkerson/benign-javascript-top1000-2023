// Your JavaScript code
         $(document).ready(function() {
            var currentURL = window.location.href;
   
            // Define the target URL
            var targetURL = "https://www.indiamart.com/?back=1";
   
            // Check if the current URL is not equal to the target URL
            if (currentURL !== targetURL) {
                  // Show the search-product-wrapper element
                  $("#search-product-wrapper").show();
            }
         });