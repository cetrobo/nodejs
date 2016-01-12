$(document).ready(function() {
    $('.post-logo').addClass('animated fadeInUp');
    $('.title').addClass('animated fadeInUp');
  
         $(window).scroll( function(){
            
           if($('#header:hidden'))
             
                $('#header').addClass('animated fadeOut');
           
            else
              $('#header').addClass('animated fadeInUp'); 
              
            
        });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });
    
     
    });