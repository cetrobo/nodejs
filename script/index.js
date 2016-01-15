$(document).ready(function() {
    $('.post-logo').addClass('animated fadeInUp');
    $('.title').addClass('animated fadeInUp');
  
         $(window).scroll( function(){
           
           
          $('#header:above-the-top')
              .addClass('animated fadeOut')
              .removeClass('animated fadeIn');
           
          $('#header:below-the-fold')
              .addClass('animated fadeOut')
              .removeClass('animated fadeIn');
           
          $('#header:in-viewport').addClass('animated fadeIn')
                                  .removeClass('animated fadeOut');
            
        });
  
  
  $('#header:above-the-top').addClass('animated fadeOut'); 
  
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });
    
     
  });