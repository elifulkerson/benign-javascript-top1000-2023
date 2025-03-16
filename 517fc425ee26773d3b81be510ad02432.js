$(function(){
  if (typeof window.JRJ_Classify_Cur != 'undefined' && window.JRJ_Classify_Cur != null && window.JRJ_Classify_Cur != '') {
    $('#headerTul li[data-flag="' + window.JRJ_Classify_Cur + '"]').addClass('cur');
  }
  if (typeof window.JRJ_Channel_Cur != 'undefined' && window.JRJ_Channel_Cur != null && window.JRJ_Channel_Cur != '') {
    $('#headerCNav ul li[data-flag="' + window.JRJ_Channel_Cur + '"]').addClass('cur');
  }
  if (typeof window.JRJ_ChannelMore_Cur != 'undefined' && window.JRJ_ChannelMore_Cur != null && window.JRJ_ChannelMore_Cur != '') {
    $('#channelMoreUl li[data-flag="' + window.JRJ_ChannelMore_Cur + '"]').addClass('cur');
  }
})