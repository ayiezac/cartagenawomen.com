<?php
//pagination script
$page = (isset($_GET['page'])) ? $_GET['page'] : 1;
// The page to display (Usually is received in a url parameter)
$page = trim($page);
// The number of records to display per page
$page_size = 12;

// Calculate total number of records, and total number of pages
$total_records = count($blogs);

$total_pages   = ceil($total_records / $page_size) + 1;

// Validation: Page to display can not be greater than the total number of pages
if ($page > $total_pages) {
    $page = $total_pages;
}

// Validation: Page to display can not be less than 1
// if ($page < 1) {
//     $page = 1;
// }

// Calculate the position of the first record of the page to display
$offset = ($page - 1) * $page_size;
// echo "offset" . $offset . "<br>";
// Get the subset of records to be displayed from the array

$blogs = array_slice($blogs, $offset, $page_size);
?>
<?php
//structure of related post array data
include '../content-part/related-post-loop.php';
?>
</div>
</div>
<?php

  $prevpage = $page - 1;
  $nextpage = $page + 1;
  $pages = "";
  //remove the pagination button if the pagination is less than 2
  $display = $total_pages == 2 ? 'd-none' : '';
 
 echo "<div class=\"pagination-number text-center {$display}\">";
if ($page > 1)
{
    $pages = "?page=";
   echo "<a href=\"{$pages}{$prevpage}\">Prev</a>";
}

if ($nextpage < $total_pages)
{
    $pages = "?page=";
 echo "<a href=\"{$pages}{$nextpage}\">Next</a>";
}


for($i = 1; $i < $total_pages; $i++)
{   
    $pages = "?page=";
    //set active
    $activeClass = $i == $page ? 'active' : '';
    echo "<a class=\"{$activeClass}\" href=\"{$pages}{$i}\" >$i</a>";   
}
echo "</div>" ;

?>

<script src="/invar/ssi-common/jscript/jquery.min.js"></script>
 <!-- scroll paginaton-->
 <script>
  $(document).ready(function () {
  if(window.location.href.indexOf("page") > -1) {
    element_to_scroll_to = document.getElementById('scroll');
      element_to_scroll_to.scrollIntoView();
  }
});
</script>