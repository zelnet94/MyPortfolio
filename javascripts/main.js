console.log('<SCRIPT language=JavaScript>
var NS4 = (document.layers);    
var IE4 = (document.all);
var win = window;    
var n   = 0;
function findInPage(str) {
  var txt, i, found;
  if (str == "")
    return false;
  if (NS4) {
    if (!win.find(str))
      while(win.find(str, false, true))
        n++;
    else
      n++;
    if (n == 0)
      alert("Not found.");
  }
  if (IE4) {
    txt = win.document.body.createTextRange();
    for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
      txt.moveStart("character", 1);
      txt.moveEnd("textedit");
    }
    if (found) {
      txt.moveStart("character", -1);
      txt.findText(str);
      txt.select();
      txt.scrollIntoView();
      n++;
    }
    else {
      if (n > 0) {
        n = 0;
        findInPage(str);
      }
      else
        alert("Sorry, we couldn't find.Try again");
   }
  }
  return false;
}
</SCRIPT>

<FORM name=search onsubmit="return findInPage(this.string.value);">
<P align=center><FONT size=3>
<INPUT 
style="BORDER-RIGHT: #666666 1px solid; BORDER-TOP: #666666 1px solid; FONT-SIZE: 8pt; BORDER-LEFT: #666666 1px solid; BORDER-BOTTOM: #666666 1px solid" 
onchange="n = 0;" size=16 name=string></FONT><BR><INPUT style="BORDER-RIGHT: #ffffff 1px solid; BORDER-TOP: #ffffff 1px solid; FONT-SIZE: 8pt; BORDER-LEFT: #ffffff 1px solid; BORDER-BOTTOM: #ffffff 1px solid; FONT-FAMILY: Tahoma; BACKGROUND-COLOR: #aaaaaa" type=submit value=Search in page ><center><font size=2pt;><font family=Times New Roman;><b>
');

<!-- /Search--> 
