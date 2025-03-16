splashRadar('Splashjs',1);
		if (!splashRadar._JSINIT){
			splashRadar('JSLoad',1);
		} else {
			splashRadar._JSFULLTime = (new Date).getTime() - splashRadar._JSFULLTime;
			splashRadar('JSParse',0,1)('JSParse',1, splashRadar._JSFULLTime - splashRadar._JSLOADTime - splashRadar._JSINITTime + 1);
		}
		splashRadar('Splashjs_' + (mr.scriptLoaded ? 'loaded' : 'notLoaded'), 0, 1)('Splashjs_' + (mr.scriptLoaded ? 'loaded' : 'notLoaded'), 1, 2);