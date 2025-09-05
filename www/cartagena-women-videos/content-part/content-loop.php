<?php 

$i = 0;
if($contents) {
    foreach ( $contents as $cont ) {
        //echo $i;
        $title = $cont['title'];
        $description = $cont['description'];
        $id = $cont['youtube-id'];
        $thumb = $cont['thumbnail'];
        $url = $cont['page-url'];
        $altText = $cont['alt'];
        
        $alt = (empty($altText)) ? $title : $altText;

        $currentFolder = $_SERVER['PHP_SELF'];
        $page_directory = dirname($currentFolder);
        $path = $page_directory.$url;
        
        // check if thumbnail exist
        $mq_url = 'https://img.youtube.com/vi_webp/'.$id.'/mqdefault.webp';
        $maxres_url = 'https://img.youtube.com/vi_webp/'.$id.'/maxresdefault.webp';
        $handler = curl_init($maxres_url);
        curl_setopt($handler,  CURLOPT_RETURNTRANSFER, TRUE);
        $re = curl_exec($handler);
        $httpcdd = curl_getinfo($handler, CURLINFO_HTTP_CODE);

        // check if youtube exist
        $yt = 'https://img.youtube.com/vi_webp/'.$id.'/default.webp';
        $ythandler = curl_init($yt);
        curl_setopt($ythandler,  CURLOPT_RETURNTRANSFER, TRUE);
        $ytre = curl_exec($ythandler);
        $ythttpcdd = curl_getinfo($ythandler, CURLINFO_HTTP_CODE);

        $file = '/img/'.$thumb;
        
        ?>

            <?php 
                if ($ythttpcdd == '404') { ?>
                    <div class="col-lg-12 custom-pagination-page none">
                <?php } else { ?>
                    <div class=" custom-pagination-page">
                <?php }

            if (empty($url)) {
                echo '<a href="//www.youtube.com/watch?v='.$id.'" data-lity>';
            } else {
                if (empty($url)) {
                    echo '<a href="javascript:;">';
                } else {
                    echo "<a href='$path'>";
                }
            }

            ?>
                    <div class="row video-section">
                        <div class="">
                            <div class="row video-area has-yt-play-btn">

                                <?php 

                                if(empty($thumb)) {
                                    if ($httpcdd == '200') { ?>
                                        <img src="<?php echo $maxres_url ?>" border="0" alt="<?php echo $alt ?>" class="img-responsive center-block img-thumbnail" />
                                    <?php } elseif($httpcdd == '404') { ?>
                                        <img src="<?php echo $mq_url ?>" border="0" alt="<?php echo $alt ?>" class="img-responsive center-block img-thumbnail" />
                                    <?php }
                                } else { ?>
                                    <img src="<?php echo $file ?>" border="0" alt="<?php echo $alt ?>" class="img-responsive center-block img-thumbnail" />
                                <?php } 

                                ?>

                            </div>
                        </div>
                        <div class="">
                            <div class="video-content">
                                <h2><?php echo $title ?></h2>
                                <p><?php echo $description ?></p>
                            </div>
                        </div>
                </div>
                </a>
                <?php  if($i == 0){
                    echo  '<!--commented #include virtual="/imagemap/news-top-video.shtml"-->';
                }?>
            </div>
            <!-- <div style="clear: both;"></div> -->
        <?php
        $i++;
    }
} else {
   echo '<p style="text-align:center;">Videos will be posted soon.</p>';
}

?>

<script>

// paginate condition
jQuery( document ).ready(function($) {
    
    let paginate = $('.custom-navigation-nav:first-of-type ul li').length;
    if(paginate == 3){
        $('.custom-navigation-nav').css('display','none');
    }

    // remove unavailable youtube
    $('#custom-pagination-container .none').remove();

});

</script>