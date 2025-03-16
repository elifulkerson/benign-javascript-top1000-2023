(function(){
						var checkbox = mr.id('mailbox__auth__remember__checkbox');

						if (!__PH.cookie.s.getGlobal('a') && mr.cookie('loginS')){
							__PH.cookie.s.setGlobal('a', mr.cookie('loginS'));
							mr.cookie('loginS', null);
						}checkbox.checked = true;function change(){
							if (checkbox.checked){
								__PH.cookie.s.removeGlobal('a');
							} else {
								__PH.cookie.s.setGlobal('a', 0);
							}
						}

						mr.bind(checkbox, 'change', change);
						mr.bind(checkbox, 'keyup', change);
						mr.bind(checkbox, 'click', change);

						change();
						checkbox.mrChange = change;
					})();