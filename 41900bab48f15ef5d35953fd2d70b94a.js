var btn_keys=[];btn_keys['shift']=false;btn_keys['ctrl']=false;var klang='ur';function set_unicode_input(evt,type)
{evt=evt||event;var code=evt.keyCode;if(code==16)
{btn_keys['shift']=true;}
if(code==17)
{btn_keys['ctrl']=true;}
if(code==18)
{btn_keys['alt']=true;}
if(btn_keys['ctrl']&&code==32)
{if(klang=='ur')
{klang='en';}
else if(klang=='en')
{klang='ur';}
else
{}}
if(klang=='ur')
{var keys=[61,65,83,68,70,71,72,74,75,76,186,222,220,81,87,69,82,84,89,85,73,79,80,219,221,90,88,67,86,66,78,77,188,190,191,192,49,50,51,52,53,54,55,56,57,48,189,187];if(keys.indexOf(code)>=0)
{if(btn_keys['ctrl']||btn_keys['alt'])
{}
else
{evt.preventDefault();if(btn_keys['shift'])
{code='shift + '+code;}
var txt='';if(type=='phonetic')
{txt=get_phonetic_code(code);}
else if(type=='monotype')
{txt=get_monotype_code(code);}
else
{txt=get_phonetic_code(code);}
var val=evt.target.value;var start=evt.target.selectionStart,end=evt.target.selectionEnd;evt.target.value=val.slice(0,start)+txt+val.slice(end);var caretPos=start+txt.length;evt.target.setSelectionRange(caretPos,caretPos);}}}}
function get_phonetic_code(code)
{switch(code)
{case 65:code='ا';break;case 'shift + 65':code='آ';break;case 83:code='س';break;case 'shift + 83':code='ص';break;case 68:code='د';break;case 'shift + 68':code='ڈ';break;case 70:code='ف';break;case 'shift + 70':code='ف';break;case 71:code='گ';break;case 'shift + 71':code='غ';break;case 72:code='ھ';break;case 'shift + 72':code='ح';break;case 74:code='ج';break;case 'shift + 74':code='ض';break;case 75:code='ک';break;case 'shift + 75':code='خ';break;case 76:code='ل';break;case 'shift + 76':code='ؒ';break;case 186:code='؛';break;case 'shift + 186':code=':';break;case 222:code="'";break;case 'shift + 222':code='"';break;case 220:code="؂";break;case 'shift + 220':code='ؔ';break;case 81:code='ق';break;case 'shift + 81':code='ْ';break;case 87:code='و';break;case 'shift + 87':code='ﷺ';break;case 69:code='ع';break;case 'shift + 69':code='ؑ';break;case 82:code='ر';break;case 'shift + 82':code='ڑ';break;case 84:code='ت';break;case 'shift + 84':code='ٹ';break;case 89:code='ے';break;case 'shift + 89':code='؁';break;case 85:code='ئ';break;case 'shift + 85':code='ء';break;case 73:code='ی';break;case 'shift + 73':code='ٰ';break;case 79:code='ہ';break;case 'shift + 79':code='ۃ';break;case 80:code='پ';break;case 'shift + 80':code='ُ';break;case 219:code='[';break;case 'shift + 219':code='‘';break;case 221:code=']';break;case 'shift + 221':code='’';break;case 90:code='ز';break;case 'shift + 90':code='ذ';break;case 88:code='ش';break;case 'shift + 88':code='ژ';break;case 67:code='چ';break;case 'shift + 67':code='ث';break;case 86:code='ط';break;case 'shift + 86':code='ظ';break;case 66:code='ب';break;case 'shift + 66':code='ؓ';break;case 78:code='ن';break;case 'shift + 78':code='ں';break;case 77:code='م';break;case 'shift + 77':code='م';break;case 188:code='،';break;case 'shift + 188':code='ِ';break;case 190:code='۔';break;case 'shift + 190':code='َ';break;case 191:code='/';break;case 'shift + 191':code='؟';break;case 192:code='ٍ';break;case 'shift + 192':code='ً';break;case 49:code='۱';break;case 'shift + 49':code='!';break;case 50:code='۲';break;case 'shift + 50':code='@';break;case 51:code='۳';break;case 'shift + 51':code='؍';break;case 52:code='۴';break;case 'shift + 52':code='ئ';break;case 53:code='۵';break;case 'shift + 53':code='ي';break;case 54:code='۶';break;case 'shift + 54':code='ؐ';break;case 55:code='۷';break;case 'shift + 55':code='ٔ';break;case 56:code='۸';break;case 'shift + 56':code='ٌ';break;case 57:code='۹';break;case 'shift + 57':code='(';break;case 48:code='۰';break;case 'shift + 48':code=')';break;case 189:code='أ';break;case 'shift + 189':code='ّ';break;case 187:case 61:code='ؤ';break;case 'shift + 187':case 'shift + 61':code='آ';break;default:code;}
return code;}
function go_unicode_inputs(type)
{var unic_inputs=document.getElementsByClassName('unicode');if(unic_inputs.length>0)
{for(var i=0;i<unic_inputs.length;i++)
{unic_inputs[i].addEventListener("keydown",function(event)
{set_unicode_input(event,type);});unic_inputs[i].addEventListener("keyup",function(event)
{var key_code=event.keyCode;if(key_code==16)
{btn_keys["shift"]=false;}
if(key_code==17)
{btn_keys["ctrl"]=false;}
if(key_code==18)
{btn_keys["alt"]=false;}});}}}
go_unicode_inputs();