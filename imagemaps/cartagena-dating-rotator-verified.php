<?php
$numberBegin = 421;
$numberEnd = 430;
$numberPhotos = 8;

$photos = range($numberBegin, $numberEnd);
shuffle($photos);
$photos = array_slice($photos, 0, $numberPhotos);

$HTML = '';
foreach ($photos as $number) {
    $HTML .= <<<HTML
    <li class="list-group-item border-0">
        <a class="hvr-shrink d-inline-block position-relative" href="/mp/info{$number}.htm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-check-circle position-absolute text-bg-success rounded-circle" viewBox="0 0 16 16" style="
                left: 75%;
                top: 5%;
                right: 2%;
            ">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
            <img fetchpriority="high" loading="eager" decoding="async" class="img-fluid rounded-4" src="/mp/p{$number}-1.jpg" height="110" width="165" title="Cartagena Dating Profile - info{$number}">
        </a>
    </li>
HTML;
}

echo $HTML;

