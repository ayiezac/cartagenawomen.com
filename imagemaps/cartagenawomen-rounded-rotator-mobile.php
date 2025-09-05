<?php
 $numberBegin = 421;
 $numberEnd = 430;
 $numberPhotos = 8; 

if (!function_exists('genHTMLPeru')) {

    function genHTMLPeru($number)
    {
        return '
        <div class="embla__slide">
            <a href="/mp/info' . $number . '.htm">
                <img fetchpriority="high" width="80" height="80" class="object-fit-cover rounded-circle" src="/mp/p' . $number . '-1.jpg" title="Cartagena Dating Profile - info' . $number . '" alt="Cartagena Dating' . $number . '">
            </a>
        </div>';
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