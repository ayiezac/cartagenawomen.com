<?php
    $current_url = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

    // Function to set active link class
    function getLinkClasses($url, $current_url) {
        $baseClass = 'link-secondary';
        $activeClass = 'link-body-emphasis text-decoration-underline link-offset-2';

        return $current_url == $url ? $activeClass : $baseClass;
    }
?>

<menu data-id="nav-video-pages" class="list-group shadow-none list-group-horizontal m-0">
    <li class="list-group-item border-0 p-3">
        <a class="fw-medium <?= getLinkClasses('/cartagena-women-videos/', $current_url); ?>" href="/cartagena-women-videos/">Tour Videos</a>
    </li>
    <li class="list-group-item border-0 p-3">
        <a class="fw-medium <?= getLinkClasses('/cartagena-women-videos/testimonial/', $current_url); ?>" href="/cartagena-women-videos/testimonial/">Testimonial Videos</a>
    </li>
    <li class="list-group-item border-0 p-3">
        <a class="fw-medium <?= getLinkClasses('/cartagena-women-videos/informational/', $current_url); ?>" href="/cartagena-women-videos/informational/">Informational Videos</a>
    </li>
</menu>
