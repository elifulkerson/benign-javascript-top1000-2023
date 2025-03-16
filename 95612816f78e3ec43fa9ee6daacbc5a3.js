// s:popup verifikasi
			// let icoo = document.querySelectorAll('.-tver') 
			// if (!!icoo) {
			//     icoo.forEach(function (item) {
			//         item.addEventListener('click', function (e) {
			//             showModals(this)
			//             e.preventDefault()
			//         })
			//     })
			// }

			$(document).on('click','.-tver',function(e){
				e.preventDefault();
				showModals(this)
			});

			document.addEventListener('click', function (e) {
			    if (e.target.matches('.popupClose')) {
			        let ss = document.querySelectorAll('.popup__overlay')
			        if (!!ss) {
			            ss.forEach(function (item) {
			                ss.forEach(el => el.classList.remove('active'));
			            })
			        }
			        e.preventDefault()
			    }
			});

			function showModals(targt) {
			    var cl = document.getElementById('pver');
			    if (!!targt) {
			        if (!!cl) {
			            var fc = targt.parentElement;

			            let jk = fc.querySelector('.popup__overlay')
			            if (!!jk) {
			                jk.remove()
			            }

			            var ox = cl.cloneNode(true);
			            fc.appendChild(ox);
			            fc.querySelector('.popup__overlay').classList.add('active');

			        } else {
			            console.log('unknown modal target');
			            return;
			        }
			    } else {
			        console.log('template modals not found');
			        return;
			    }
			}
			// e:popup verifikasi

			function wa_share(title,url) {
				url = url+'?utm_source=Whatsapp&utm_medium=Refferal&utm_campaign=Sharing_Desktop';
				u = url;
				t = title;
				window.open('https://api.whatsapp.com/send?text='+encodeURIComponent(t)+'%0a %0a'+encodeURIComponent(u),'sharer','toolbar=0,status=0,width=626,height=436');return false;
			}