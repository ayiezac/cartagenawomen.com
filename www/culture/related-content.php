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
        'title' => "Colombian Food and Drinks | Must-Try Cocktails in Colombia",
        'description' => "Want to know more about Colombian food and drinks? You can quench your thirst by trying some of these cocktails.",
        'page-url' => "colombian-food-and-drinks.html",
        'thumbnail' => "/blog-photo/Colombian_food_and_cocktails.webp",
        'alt' => ""
    ),
    array(
        'title' => "Fun Facts About Cartagena Colombia",
        'description' => "Discover what makes Cartagena Colombia stand out among other Colombian cities. Find out some tidbits about it that'll make want to make the trip.",
        'page-url' => "Fun-Facts-About-Cartagena-Colombia.html",
        'thumbnail' => "/blog-photo/Sunset_in_Cartagena_Colombia.webp",
        'alt' => ""
    ),
    array(
        'title' => "How Do People of Colombia Celebrate the Holidays?",
        'description' => "For this year, you should travel and have a Colombian Christmas. Why? Well, there are a plethora of reasons and some of them you can read below!",
        'page-url' => "how-do-people-of-colombia-celebrate-the-holidays.html",
        'thumbnail' => "/blog-photo/img-blog-08.webp",
        'alt' => ""
    ),
    array(
        'title' => "6 Local Foods You Need to Try in Cartagena Colombia",
        'description' => "Discover Cartagena's magical street food and drink scene. Read on to know more.",
        'page-url' => "local-foods-you-need-to-try-in-cartagena-colombia.html",
        'thumbnail' => "/blog-photo/cartagena-street-foods.webp",
        'alt' => ""
    ),
    array(
        'title' => "Colombian Food | Must-Try Dishes in Cartagena, Colombia",
        'description' => "If you are curious to try Colombian food in Cartagena, then these are the dishes you can't afford to miss.",
        'page-url' => "must-try-colombian-food.html",
        'thumbnail' => "/blog-photo/Colombian_food_in_Cartagena.webp",
        'alt' => ""
    ),

    
    array(
        'title' => "What Makes Cartagena Colombia Such an Attractive City",
        'description' => "Visit Cartagena Colombia and fall in love with its scenic beaches, lively music and dancing, and delicious food.",
        'page-url' => "What-Makes-Cartagena-Colombia-Such-an-Attractive-City.html",
        'thumbnail' => "/blog-photo/Cartagena_Colombia_sights_and_sounds.webp",
        'alt' => ""
    ),
);
  
include '../content-part/related-post-pagination.php';