try {
 		if (typeof window === 'object') { 
			 window.CROSSIMAGE_GRAYSCALE_RULE = {};
			 window.crossimageConfig = {
  				quality: 'q80'
			 }
		}
	} catch (error) {
		console.log('CROSSIMAGE CONFIG ERROR');
	}