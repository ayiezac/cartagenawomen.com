<?php
 $numberBegin = 421;
 $numberEnd = 430;
 $numberPhotos = 6; 
 function genHTMLPeru($numer) {
  return '<li><a href="/mp/info'.$numer.'.htm"><img src="/mp/p'.$numer.'-1.jpg" alt="Cartagena Women" /></a></li>'; 
 }

 
 $HTML = ""; 
 $arr = range($numberBegin, $numberEnd); 
 if($numberPhotos > count($arr)) $numberPhotos = count($arr);
 
 for($i=0;$i<$numberPhotos;$i++) {
  $randKey = array_rand($arr); 
  $HTML .= "\t".genHTMLPeru($arr[$randKey])."\n";
  unset($arr[$randKey]);
 } 
 
 echo $HTML;
 
?>
