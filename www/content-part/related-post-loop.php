  <!--anchor point for pagination-->
<br>
<div id="scroll"></div>

  <h3>Related <span class="cluster-name"></span> Blog Articles</h3>

    <div class="related-content-wrapper" id="custom-pagination-container">

        <?php 

           if($blogs) {
            foreach ( $blogs as $blog ) { 
                $title = $blog['title'];
                $excerpt = $blog['description'];
                $permalink = $blog['page-url'];
                $img = $blog['thumbnail'];
                $altText = $blog['alt'];
                $alt = (empty($altText)) ? $title : $altText;
                $id = $blog['youtube-id'];
                $thumb = $blog['thumbnail'];

                // check if thumbnail exist
                $mq_url = 'https://img.youtube.com/vi/'.$id.'/mqdefault.jpg';
                $maxres_url = 'https://img.youtube.com/vi/'.$id.'/maxresdefault.jpg';
                $handler = curl_init($maxres_url);
                curl_setopt($handler,  CURLOPT_RETURNTRANSFER, TRUE);
                $re = curl_exec($handler);
                $httpcdd = curl_getinfo($handler, CURLINFO_HTTP_CODE);

                // check if youtube exist
                $yt = 'https://img.youtube.com/vi/'.$id.'/default.jpg';
                $ythandler = curl_init($yt);
                curl_setopt($ythandler,  CURLOPT_RETURNTRANSFER, TRUE);
                $ytre = curl_exec($ythandler);
                $ythttpcdd = curl_getinfo($ythandler, CURLINFO_HTTP_CODE);

                $file = '/img/'.$thumb;

                ?>
            <!--start here-->
                <div class="items custom-pagination-page">
                    <div class="card-wrapper">
                        <div class="card">
                            <?php 
              
                                if (empty($permalink)) {
                                    echo '<a href="javascript:;">';
                                } else {
                                    echo '<a href="'.$permalink.'" target="_blank">';
                                }

                            ?>
                            <div class="card-body">
                                <div class="item">
                                        <?php 

                                        if(empty($thumb)) {
                                            if ($httpcdd == '200') { ?>
                                                <img src="<?php echo $maxres_url ?>" border="0" alt="<?php echo $alt ?>"/>
                                            <?php } elseif($httpcdd == '404') { ?>
                                                <img src="<?php echo $mq_url ?>" border="0" alt="<?php echo $alt ?>" />
                                            <?php }
                                        } else { ?>
                                            <img src="<?php echo $file ?>" border="0" alt="<?php echo $alt ?>" />
                                        <?php } 

                                        ?>
                                </div>

                                <div class="item px-2">
                                    <h4 class="card-title">
                                    <?php echo $title ?>
                                    </h4>

                                    <!-- <a class="card-link" href="<?php// echo $permalink ?>">Read full article</a> -->
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
             <!--end here-->
                  <?php 
              }
          } else {
            echo '<p style="text-align:center;width:100%;margin: 50px 0;color: #7a7a7a;">Related post will be posted soon.</p>';
          }

        ?>
    </div>