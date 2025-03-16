function keyboad_dic(lang)
		{
			
			document.getElementById("dic_search").value='';
			if(lang == 'urdu')
			{
				
				document.getElementById("dic_search").className += " unicode mainTxt rtl";
				klang = 'ur';
				 
				go_unicode_inputs();
				
			}
			else
			{
				document.getElementById("dic_search").classList.remove("unicode");
				document.getElementById("dic_search").classList.remove("mainTxt");
				document.getElementById("dic_search").classList.remove("rtl");
				klang = 'en';
				
				
			}
		}
		
		function emptyValues()
		{
				var checking = document.getElementById('dic_search').value;
				if(checking == '')
				{
					document.getElementById("dic_search").style.borderColor = "red";
					return false;
					
					
				}
				
		}
		
		function clear_field()
		{
			$("#results").hide();
			document.getElementById("formSearch").reset();
		}
		
		function get_autocomplete(word)
		{
			//alert(word);
			var lang = document.getElementById("lang_type").value;
			//alert(lang);
			if(lang == 'urdu')
			{
				$("#results").load('https://www.urdupoint.com/dictionary/ajax_new.php?word='+word+'&lang='+lang+'&type=get_dic_results');
				$("#results").show();
			}
			else
			{
				if(word.length > 3)
				{	
					$("#results").load('https://www.urdupoint.com/dictionary/ajax_new.php?word='+btoa(word)+'&lang='+lang+'&type=get_dic_results');
					$("#results").show();
				}
			}
		}