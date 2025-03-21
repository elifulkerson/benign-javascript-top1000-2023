function at_show_aux(parent, child)
{
  var p = document.getElementById(parent);
  var c = document.getElementById(child );
 
  var top  = (c["at_position"] == "y") ? p.offsetHeight+2 : 0;
  var left = (c["at_position"] == "x") ? p.offsetWidth +2 : 0;
 
  for (; p; p = p.offsetParent)
  {
    top  += p.offsetTop;
    left += p.offsetLeft;
  }
 
  c.style.position   = "absolute";
  c.style.top        = top +'px';
  c.style.left       = left+'px';
  c.style.display    = "block";
}
 
function at_show()
{
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);
 
  at_show_aux(p.id, c.id);
  clearTimeout(c["at_timeout"]);
}
 
function at_hide()
{
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);
 
  c["at_timeout"] = setTimeout("document.getElementById('"+c.id+"').style.display = 'none'", 333);
}
 
function at_click()
{
  var p = document.getElementById(this["at_parent"]);
  var c = document.getElementById(this["at_child" ]);
  
	eval(p["function"]);  
 
  if (c.style.display != "block") at_show_aux(p.id, c.id); else c.style.display = "none";
  return false;
}
 
function at_attach(parent, child, showtype, position, cursor, func)
{
  var p = document.getElementById(parent);
  var c = document.getElementById(child);
 

  p["at_parent"]     = p.id;
  c["at_parent"]     = p.id;
  p["at_child"]      = c.id;
  c["at_child"]      = c.id;
  p["at_position"]   = position;
  c["at_position"]   = position;
  
  p["function"]      = func;
 
  c.style.position   = "absolute";
  c.style.display    = "none";
 
  if (cursor != undefined) p.style.cursor = cursor;
 
  switch (showtype)
  {
    case "click":
      p.onclick     = at_click;
      p.onmouseout  = at_hide;
      c.onmouseover = at_show;
      c.onmouseout  = at_hide;
      break;
    case "hover":
      p.onmouseover = at_show;
      p.onmouseout  = at_hide;
      c.onmouseover = at_show;
      c.onmouseout  = at_hide;
      break;
  }
} 