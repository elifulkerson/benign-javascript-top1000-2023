$('.box.cb-mostpop.sticky').find('a').each(function (i,v) {
 var pt = $(v).attr('onclick')
 .replace('populer', 'populer sticky')
 .replace('artikel ', 'artikel box sticky ')
 .replace('selengkapnya', 'selengkapnya sticky')
 $(v).attr('onclick', pt);
 })