<?php
 $numberBegin = 281;
 $numberEnd = 300;
 $numberPhotos = 10; 
 function genHTMLAsia($numer) {
  return '<a href="/mp/info'.$numer.'.htm"><img src="/mp/p'.$numer.'-1.jpg"  height=187 width=120 align=left hspace=0 vspace=0 border=0></a>'; 
 }

 
 $HTML = ""; 
 $arr = range($numberBegin, $numberEnd); 
 if($numberPhotos > count($arr)) $numberPhotos = count($arr);
 
 for($i=0;$i<$numberPhotos;$i++) {
  $randKey = array_rand($arr); 
  $HTML .= "\t".genHTMLAsia($arr[$randKey])."\n";
  unset($arr[$randKey]);
 } 
 
 echo $HTML;
 
?>