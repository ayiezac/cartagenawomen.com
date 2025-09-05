browserName = navigator.appName;
browserVer = parseInt(navigator.appVersion);
if (((browserName == "Netscape") && (browserVer >= 3)) || ((browserName == "Microsoft Internet Explorer") && (browserVer >= 4))) useImages = "1";
else useImages = "0";
function new_win(w,h)
 {
  hplus=h+20;
  w1=window.open('','new_window','resizable=no,menubar=no,status=no,scrollbars=no,width='+w+',height='+hplus);
  if (useImages == "1") {
    w1.focus();
    }
  }