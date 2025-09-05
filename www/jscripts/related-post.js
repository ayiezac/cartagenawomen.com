$(document).ready(function(){
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    var pathname =   window.location.pathname;
    var getCluster =  pathname.split("/")[1];
    var nameCluster = "";

    var page = window.location.search;

    var url = protocol + '//' + hostname + '/' + getCluster + '/' + 'related-content.php' + page;


    var cluster = ["dating/","culture/","travel/","psychology/","realities/","our-process/","faqs/","success-stories/"];
    for(var i=0; i < cluster.length; i++){
       nameCluster = cluster[i];

        if(pathname.includes(nameCluster)){
          /*Preloader*/
          $.ajax({
            type: "POST",
            url: url,
            data: {
            cluster:nameCluster
            },
            beforeSend:function(){
              var status = "<div id=\"status\"></div>";
              $('#preloader').html(status);
            },
            success: function(data) {
              /*dynamic cluster related name */    
              function dynamicclusterName(str) {
                  var words = str.match(/([^-]+)/g) || [];
                  words.forEach(function(word, i) {
                    words[i] = word[0].toUpperCase() + word.slice(1);
                  });
                  return words.join(' ');
                }

              var myString = dynamicclusterName(getCluster);
              $('.cluster-name').append(myString);

                /*fetch data and display*/ 
              $('.cluster-data').html(data);

            },
            error: function(xhr, status, error) {
            console.error(xhr);
            }
          });
        }else{
         
        }
    
    }

  });
  