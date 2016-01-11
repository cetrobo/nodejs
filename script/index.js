$(document).ready(function() {
    $('.post-logo').addClass('animated fadeInUp');
    $('.post.title').addClass('animated fadeInUp');
    $('.post.title2').addClass('animated fadeInUp');
  
         $(window).scroll( function(){
        
          if($('.section-title:in-viewport')){
                
                 $('.section-title').addClass('animated fadeInUp');
                 $('.line-section').addClass('animated fadeInLeft');
                 $('.section-contenue').addClass('animated fadeInUp');
                 $('.section-thumb').addClass('animated fadeInUp');
                  
            
          }
            
         
        });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });
    
     
    });