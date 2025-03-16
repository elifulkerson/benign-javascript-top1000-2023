document.getElementById("menu-principal-button").addEventListener('click', function(e){
	document.getElementById("site-navigation").classList.toggle("openmenu");
	document.getElementById("page").classList.toggle("bluemenu");
});

document.getElementById("menu-principal-button-close").addEventListener('click', function(e){
	document.getElementById("site-navigation").classList.toggle("openmenu");
	document.getElementById("page").classList.toggle("bluemenu");
});

function search_toggle(){ document.getElementById("site-header").classList.toggle('search'); }

var dropdown = document.querySelector('#primary-menu .menu-item-has-children');
if(dropdown){
	dropdown.addEventListener('click', function(e){
		e.preventDefault();
		if (dropdown.classList.contains('open')) {
			dropdown.classList.remove('open')
		} else {
			e.currentTarget.classList.add('open')    
		}
	});
}

function addLink() {
    var selection = window.getSelection(),
    txt = selection.toString(),
    pagelink = '... - Leia mais em ' + document.location.href,
    copytext = txt.substr(0,130) + pagelink,
    newdiv = document.createElement('div');

    newdiv.style.position = 'absolute';
    newdiv.style.left = '-99999px';

    document.body.appendChild(newdiv);
    newdiv.innerHTML = copytext;
    selection.selectAllChildren(newdiv);

    window.setTimeout(function(){
        document.body.removeChild(newdiv);
    }, 100);
}
document.addEventListener('copy', addLink);

var observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    var strong = entry.target.querySelector('strong');
    if(!strong) return;

    if (entry.isIntersecting) {
      strong.classList.add('active');
	  return;
    }

    //strong.classList.remove('active');
  });
});

var wrapper = document.querySelector('.entry-content')
var listP = wrapper.getElementsByTagName("p");
listP = Array.prototype.slice.call(listP);
if(listP.length){
	listP.forEach( function(p, index){observer.observe(p)});
}