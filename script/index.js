$(document).ready(function() {
    $('.post-logo').addClass('animated fadeInUp');
    $('.title').addClass('animated fadeInUp');
  
         $(window).scroll( function(){
           
        if ($('#header:above-the-top')) {
              $('#header').addClass('animated fadeOut'); 
          }else{
            $('#header').removeClass('animated fadeOut'); 
          }
            
           });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });
    
     
  });