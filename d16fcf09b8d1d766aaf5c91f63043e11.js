$( document ).ready
(
	function( $ )
	{
		var RH = new RequestHelper();
		RH.id = 'NewsTabContent';
		RH.group_id = 'NewsTab_';
		RH.target = 'news-container';
		RH.uri = '/Core/Libs/Common/Widgets/NewsTabContent';
		RH.in_items = JSON.parse("[]");
		RH.out_items = JSON.parse("{\"nav\":false,\"game_id\":0,\"category_id\":0}");
		RH.InitSessionStorage();
		window.RH_NewsTabContent = RH;
	}
);