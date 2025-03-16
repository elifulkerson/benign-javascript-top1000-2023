if (document.location.hash) {
var src = document.location.hash.substr(1);
var dst = null;
switch (true) {
case (dst = src.match(/^news\/(\w+)\/(?:\d+\/)?$/)) !== null:
case (dst = src.match(/^news\/top[s]?\/(\w+)\/$/)) !== null:
document.location.href = '/news/'+dst[1]+'.html';
break;
case (dst = src.match(/^news\/last\/(\w+)\/$/)) !== null:
document.location.href = '/news/'+dst[1]+'/index.html';
break;
case (dst = src.match(/^news\/blogs\/(\w+)\/$/)) !== null:
document.location.href = '/news/'+dst[1]+'/blogs.html';
break;
case src.match(/^(?:news\/cluster)\//) !== null:
document.location.href = '/go/'+src;
break;
case src.match(/^(?:homeDetails|news)\//) !== null:
// document.location.href = '/go/'+src;
if(src.slice(-1) == '/') {
src = src.substring(0, src.lastIndexOf("/"))
}if(src.indexOf('detailsExt/') > -1){
src = src.replace('detailsExt/','details/').split('/');
console.log(src)
document.location.href = src[0] + '/' + src[1] + '/' + src[2] + '/' + src[3] + '.html';
} else{
if(src.indexOf('homeDetails/') > -1){
src = src.replace('homeDetails/','news/details/');
}
document.location.href = src + '.html';
}
break;
}
}