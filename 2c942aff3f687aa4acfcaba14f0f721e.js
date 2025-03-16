//Fall back to local copy if no jquery found
  if (typeof jQuery == 'undefined') {
   document.write(unescape("%3Cscript src='/js/libs/jquery.js' type='text/javascript'%3E%3C/script%3E"));
  }