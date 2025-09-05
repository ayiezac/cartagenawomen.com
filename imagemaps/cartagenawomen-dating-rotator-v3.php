<?php
 $numberBegin = 421;
 $numberEnd = 430;
 $numberPhotos =5 ; 

if (!function_exists('genHTMLPeru')) {

    function genHTMLPeru($number)
    {
        return '<div class="ms-slide text-center" data-delay="3" data-fill-mode="fill"><div class="ms-slide-bgcont" style="height: auto; opacity: 1;"><a class="hvr-shrink" href="/mp/info' . $number . '.htm"><img fetchpriority="high" class="img-fluid" src="/mp/p' . $number . '-1.jpg" height="80" width="80" title="Cartagena Dating Profile - info' . $number . '" alt="Cartagena Dating' . $number . '"></a></div></div>';
    }
}

$HTML = "";
$arr = range($numberBegin, $numberEnd);
if ($numberPhotos > count($arr))
    $numberPhotos = count($arr);

for ($i = 0; $i < $numberPhotos; $i++) {
    $randKey = array_rand($arr);
    $HTML .= "\t" . genHTMLPeru($arr[$randKey]) . "\n";
    unset($arr[$randKey]);
}

echo $HTML;

?>