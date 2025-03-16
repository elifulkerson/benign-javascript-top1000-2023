if (window.reveal && window.reveal.company) {
	var r = window.reveal;
	window.clearbit_fmt = {
		cb_traffic_type: r.type,
		cb_company_name: r.company.name,
		cb_industry_tags: r.company.tags.join(', '),
		cb_industry_sector: r.company.category.sector,
		cb_industry_group:  r.company.category.industryGroup,
		cb_industry_name: r.company.category.industry,
		cb_industry_sub: r.company.category.subIndustry,
		cb_company_city: r.company.geo.city,
		cb_company_state:r.company.geo.state,
		cb_company_country: r.company.geo.country,
		cb_alexa_us: r.company.metrics.alexaUsRank,
		cb_alexa_global: r.company.metrics.alexaGlobalRank,
		cb_size_employees: r.company.metrics.employees,
		cb_size_range: r.company.metrics.employeesRange,
		cb_size_annual_revenue: r.company.metrics.annualRevenue,
		cb_size_est_revenue: r.company.metrics.estimatedAnnualRevenue,
	}
}

window.optimizely_fmt = {
	"type": "user",
	"attributes": {
		"visitor_uid" : "04ae4fb03acdcbe394fe49d18338e150",
		"visitor_type": "prospect",
		"is_first_visit": true,
		"traffic_type": "logged_out",	}
}
window.drift_fmt = {
	"visitor_type": "prospect",
	"is_first_visit": true,
	"traffic_type": "logged_out",
	"is_paid_plan": false,
	"is_free_plan": false,
	"is_ent_plan": false,
}
if (window.drift) {
	window.drift.on('ready', function() {
		window.drift.api.setUserAttributes(window.drift_fmt);
	});
}
if (window.reveal && window.reveal.company) {
	window.dataLayer = window.dataLayer || [];
	window.dataLayer.push(window.clearbit_fmt);
	window.dataLayer.push({event: 'Clearbit'});
}
if (window.reveal && window.reveal.company) {
	for (var p in window.clearbit_fmt) {
		if (window.clearbit_fmt.hasOwnProperty(p)) {
			window.optimizely_fmt.attributes[p] = window.clearbit_fmt[p];
		}
	}
}window.optimizely = window.optimizely || [];
window.optimizely.push({'type':'optOut','isOptOut':false});
window.optimizely.push(window.optimizely_fmt);