function handleGalleryCpt(event){document.removeEventListener('scroll',handleGalleryCpt);var head=document.getElementsByTagName('head')[0];var link=document.createElement('link');link.rel='stylesheet';link.type='text/css';link.href='https://www.otvfoco.com.br/wp-content/plugins/gallery-cpt-grumft/views/assets/css/style.css?ver=1.0.4';link.media='all';head.appendChild(link);var slideIndexCPT=1;showDivs(slideIndexCPT);function plusDivsPrevious(){showDivs(slideIndexCPT+=-1);}
function plusDivsNext(){showDivs(slideIndexCPT+=1);}
function showDivs(n){var i;var x=document.getElementsByClassName("slides-image");if(n>x.length){slideIndexCPT=1}
if(n<1){slideIndexCPT=x.length}
for(i=0;i<x.length;i++){x[i].style.display="none";}
x[slideIndexCPT-1].style.display="block";}
document.getElementById("gallery-cpt-previous").addEventListener("click",plusDivsPrevious);document.getElementById("gallery-cpt-next").addEventListener("click",plusDivsNext);console.log('galeary loads...');}
document.addEventListener('scroll',handleGalleryCpt);