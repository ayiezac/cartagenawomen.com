<?php
 $numberBegin = 421;
 $numberEnd = 430;
 $numberPhotos =5 ; 
 if (!function_exists('genHTMLPeru')) {
    function genHTMLPeru($numer) {
        return '<div class="ms-slide" data-delay="3" data-fill-mode="fill"><div class="ms-slide-bgcont" style="height: auto; opacity: 1;"><a class="hvr-shrink"  href="/mp/info'.$numer.'.htm"><img src="/mp/p'.$numer.'-1.jpg" alt="Cartagena Women" /></a></div></div>'; 
       }
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
