<?php 

/* 
Note:

'title' => "Title Here", <- if text has double quotation just change it from " to &quot; for line break simply put <br>
'description' => "Description Here", <- if text has double quotation just change it from " to &quot; for line break simply put <br>
'page-url' => "/test.html", <- leave it empty if no single page for video
'thumbnail' => "TEST-YT000.jpg", <- leave it empty if no custom thumbnail image
'alt' =>  "Alt Text Here" <- leave it empty if no custom alt text
*/

$blogs = array (

    // array(
    //     'title' => "Title Here",
    //     'description' => "Description Here",
    //     'page-url' => "/test.html",
    //     'thumbnail' => "TEST-YT000.jpg",
    //     'alt' => "Alt Text Here"
    // ),
    // Live sample below
   
   
    array(
        'title' => "Cartagena Women | Attractive Qualities of the Ladies in Cartagena",
        'description' => "Discover the why women in Cartagena are one of the most sought brides in the world! Read on to know more.",
        'page-url' => "qualities-of-cartagena-women.html",
        'thumbnail' => "/blog-photo/women-in-cartagena2.jpg",
        'alt' => ""
    ),

    array(
        'title' => "Why Women from Cartagena Prefer Foreign Men",
        'description' => "Interested in dating beautiful Colombian women? Find out why women from Cartagena, Colombia prefer to be with foreign men like you.",
        'page-url' => "women-from-cartagena-prefer-foreign-men.html",
        'thumbnail' => "/blog-photo/Cartagena_women_in_one_shot.webp",
        'alt' => ""
    ),
);
  
include '../content-part/related-post-pagination.php';