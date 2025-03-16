const kinjaDataElement = document.getElementById('kinja-data');
			window.kinja = kinjaDataElement && JSON.parse(kinjaDataElement.textContent || kinjaDataElement.innerText) || {};