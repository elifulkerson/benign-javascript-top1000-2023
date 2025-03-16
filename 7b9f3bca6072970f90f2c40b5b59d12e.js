//Fall back to local copy if no jQuery migrate found
  if (typeof jQuery.migrateWarnings == 'undefined') { // or typeof jQuery.fn.live == 'undefined'
   document.write(unescape("%3Cscript src='/js/libs/jquery-migrate.min.js' type='text/javascript'%3E%3C/script%3E"));
  }