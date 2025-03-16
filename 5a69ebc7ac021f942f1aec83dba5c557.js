$( document ).ready
(
	function( $ )
	{
		var RH = new RequestHelper();
		RH.id = 'ModList';
		RH.group_id = 'ModsTab_';
		RH.target = 'mod-list';
		RH.uri = '/Core/Libs/Common/Widgets/ModList';
		RH.in_items = JSON.parse("[]");
		RH.out_items = JSON.parse("{\"nav\":false,\"home\":false,\"type\":1,\"user_id\":0,\"game_id\":0,\"advfilt\":false,\"search\":[],\"include_adult\":false}");
		RH.InitSessionStorage();
		window.RH_ModList = RH;
	}
);