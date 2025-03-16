$.ajax({
type: 'GET',
url: 'https://accounts.ukr.net/public/access/test?_='+Date.now(),
dataType : 'text',
success: function(data) {
if (data !== 'ok') {
$.ajax({
type: 'GET',
url: '/al.txt?miss',
dataType : 'text'
});
}
},
error: function() {
$.ajax({
type: 'GET',
url: '/al.txt?error',
dataType : 'text'
});
}
});