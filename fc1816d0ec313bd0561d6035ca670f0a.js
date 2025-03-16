var adfoxBiddersMap = 
	{
		"myTarget": "850816",
		"adfox_adsmart": "987208",
		"relap": "997766",
		"adfox_imho-video": "1732671"
    };
    if (window.innerWidth <= 924)
	{
		var adUnits = 
		[
			{
				"code": "adfox_154330592324517184",
				"bids": 
				[
					{
						"bidder": "myTarget",
						"params": {
							"placementId": "389710"
						}
					}
				],
				"sizes": [
					[320,100]
				]
			}
		];
    } 
	else if (window.innerWidth >= 1234) 
	{
		var adUnits = 
		[
			{
				"code": "adfox_154385062340651027",
				"bids": 
				[
					{
						"bidder": "myTarget",
						"params": {
							"placementId": "479488"
						}
					},
					{
						"bidder": "adfox_adsmart",
						"params": {
							"p1": "cqguv",
							"p2": "hhro"
						}
					},
					{
						"bidder": "adfox_imho-video",
						"params": {
							"p1": "cqryv",
							"p2": "hitz"
						}
					}
				],
				"sizes": 
				[
					[300,600]
				]
			}
		];
    }
	
    var userTimeout = 500;
	
    window.YaHeaderBiddingSettings = 
	{
		biddersMap: adfoxBiddersMap,
		adUnits: adUnits,
		timeout: userTimeout
    };