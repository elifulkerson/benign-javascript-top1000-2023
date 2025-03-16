function checkSource()
{
	if(document.searchform.scope.value==1)
	{
	window.open('//news-search.rednet.cn/search?q='+document.searchform.q.value);
	return false;
	}
	if(document.searchform.scope.value==4)
	{
	window.open('//s.rednet.cn/?scope=4&title=0&q='+document.searchform.q.value);
	return false;
	}
	if(document.searchform.scope.value==7)
	{
	window.open('//people.rednet.cn/#/leaveMsgList?search='+document.searchform.q.value);
	return false;
	}
}