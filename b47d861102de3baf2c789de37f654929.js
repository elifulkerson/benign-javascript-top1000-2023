//ngload sso
		$(document).ready(function(){
			$("#info-alert-sso").load("https://www.okezone.com/set-alert/aHR0cHM6Ly93d3cub2tlem9uZS5jb20v");
			$("#sso").load("https://www.okezone.com/set-sso/aHR0cHM6Ly93d3cub2tlem9uZS5jb20v/header");
			$("#sso-sticky").load("https://www.okezone.com/set-sso/aHR0cHM6Ly93d3cub2tlem9uZS5jb20v/sticky");

				if (document.cookie.indexOf('orionID')==-1 ) {
					CreateUUID();
				}else{
					var dataorion=AmbilCookieValue('orionID');
					DatalayerInfo(dataorion);
				}				
		});



			function CreateUUID(){ //create cookies
			var domain =".okezone.com";
				 $.ajax({
				  url: "https://www.okezone.com/set-uuid",
				  method: 'GET',
				  contentType: "application/json; charset=utf-8",
				  success: function(data){
					UpdateCookies("orionID",data[0], "Update");
					DatalayerInfo(data[0]);
				  },
				  error: function(err){
					console.log(err);
				  }

				});
			}


			function UpdateCookies(kunci, key, status) { //update cookies
					  var domain =".okezone.com"; 
					  if(status==='Update'){
						  var date = new Date();
						  date.setTime(date.getTime()+(60*60*30*86400));
						  var expires ='';
							expires=date.toGMTString();
							document.cookie = kunci+'='+key+'; Expires='+expires+';Path=/; domain='+domain;
							console.log('Update '+kunci+':'+key);
					  }else{
						  document.cookie = kunci+'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
						  //console.log('Clear '+kunci);
					  }

					  if(kunci==='orion_Close'){
					  $('#info-alert-sso').css("display", "none");
					  $('#info-alert-sso').attr('style', 'display:none;');
					  }

			}
			
			
			function CariCookieValue(cName) { //pencarian cookies
				const name = cName + "=";
				const cDecoded = decodeURIComponent(document.cookie); //to be careful
				const cArr = cDecoded.split('; ');
				let res;
				cArr.forEach(val => {
					if (val.indexOf(name) === 0) res = val.substring(name.length);
				})
				return res
			}
			
			function AmbilCookieValue(name) { ////get value cookies
				const regex = new RegExp(`(^| )${name}=([^;]+)`)
				  const match = document.cookie.match(regex)
				  if (match) {
					return match[2]
				  }
			}
			
			function DatalayerInfo(orionData){ //insert  datalayer
			
							var cari = orionData.search("UN-");	
							var jumlahString = orionData.length;
							if(cari===0){ // jika ada kata UN- dalam cookies
								var user_id=null;
								var userId=null;
							}else{
								var user_id=orionData;
								var userId=orionData;
							}
							if(jumlahString>=36){ // jika orionData lebih dari 36 kata
								var orion_id_1 = orionData.substring(0, 36);
								var orion_id_2 = orionData.substring(36, jumlahString);
							}else{
								var orion_id_1 = orionData;
								var orion_id_2 ='';
							}

							
							//hit untuk data layer
							window.dataLayer.push({
										event: 'user_info',
										user_id: user_id,
										userId: userId,
										orion_id_1: orion_id_1,
										orion_id_2 : orion_id_2
									});
							
				
			}