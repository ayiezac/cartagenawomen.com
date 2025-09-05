<?php
if(!isset($city)) $id = "26063";
else{
	switch($city){
		case "spb":
		$id = "26063";
		break;
		case "moscow":
		$id = "27612";
		break;
		case "sevastopol":
		$id = "33991";
		break;
		case "simferopol":
		$id = "33946";
		break;
		case "yalta":
		$id = "33990";
		break;
		case "riga":
		$id = "26422";
		break;
		case "volgograd":
		$id = "34560";
		break;
		case "cartagena":
		$id = "80222";
		break;
		case "kiev":
		$id = "33345";
		break;
		case "dnepropetrovsk":
		$id = "34504";
		break;
		case "odessa":
		$id = "33837";
		break;
		case "nikolaev":
		$id = "33846";
		break;
		case "kherson":
		$id = "33902";
		break;
	}
}

$host = "informer.gismeteo.ru";
$nn="\r\n";
$ref = "www.microsoft.com";
$query =
"GET /I".$id."-1.HTM HTTP/1.0".$nn.
"Referer: $ref".$nn.
"Content-Type: text/html".$nn.
"Content-Length: $len".$nn.
"Host: ".$host.$nn.
"Accept: */*".$nn.
"Accept-Encoding: gzip, deflate".$nn.
"Connection: Keep-Alive".$nn.
"User-Agent: Mozilla/4.0 (compatible; MSIE 5.01; Windows NT)".$nn.
"".$nn;

$fp = "";
$fp = fsockopen($host, 80, &$errno, &$errstr, 30);
	if(!$fp) { print "$errstr ($errno)<br>\n"; exit; }
fputs($fp,$query);
$buffer = "";
while (!feof ($fp)) {
    $tmp = fgets($fp, 4096);
    $buffer .= $tmp;
}
$buffer = explode("\r\n\r\n", $buffer);
fclose($fp);

$text = strip_tags($buffer[1], "<td></td><br>");
$text = trim(eregi_replace("<([ a-zA-Z=0-9/]+)>", ":", $text));
$text = explode(":", $text);
switch($text[6]){
	case "ясно":
	$img = "<img src=meteo/0d.gif border=0 hspace=\"10\" vspace=\"5\">";
	break;
	case "облачно":
	$img = "<img src=meteo/2m.gif border=0 hspace=\"10\" vspace=\"5\">";
	break;
	case "малооблачно":
	$img = "<img src=meteo/1d.gif border=0 hspace=\"10\" vspace=\"5\">";
	break;
	case "пасмурно":
	$img = "<img src=meteo/3m.gif border=0 hspace=\"10\" vspace=\"5\">";
	break;
}
switch($text[7]){
	case "без осадков":
	$img .= "<br><img src=meteo/0d.gif border=0 hspace=\"10\" vspace=\"5\">";
	break;
	case "местами ливни":
	$img .= "<br><img src=meteo/3.gif border=0 hspace=\"10\" vspace=\"5\">";
	break;
	case "возможна гроза":
	$img .= "<br><img src=meteo/4.gif border=0 hspace=\"10\" vspace=\"5\">";
	break;
}
$tempr = explode(" ", $text[9]);
$tempr[0] = str_replace("..", "<br>", $tempr[0]);
$wind = explode(" ", $text[11]);
$template = @file("meteo.tmpl");
$template = implode(" ", $template);
$template = eregi_replace("%tempr%", $tempr[0], $template);
$template = eregi_replace("%wind%", $wind[1], $template);
$template = eregi_replace("%img%", $img, $template);
echo $template;
exit;
?>