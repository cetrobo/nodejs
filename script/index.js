$(document).ready(function() {
    $('.post-logo').addClass('animated fadeInUp');
    $('.title').addClass('animated fadeInUp');
  
         $(window).scroll( function(){
          
            $('#header').css("opacity", 1 - $(window).scrollTop() / 550);
           
           
          if($('#section:in-viewport'))
              
                 $('.section-title').addClass('animated fadeInUp');
                 $('.line-section').addClass('animated fadeInLeft');
                 $('.section-contenue').addClass('animated fadeInUp');
                 $('.section-thumb').addClass('animated fadeInUp');
            
           
              
          if($('.title-section2:in-viewport'))
                
            $('.title-section2').addClass('animated fadeInLeft');
            $('.exp-title').addClass('animated fadeInUp');
            $('.line-section2').addClass('animated fadeInLeft');
            $('.aboutme-section2').addClass('animated fadeInUp');
                 
         
           
           if($('.title-work:in-viewport'))
                
            $('.title-work').addClass('animated fadeInUp');
            $('border-works').addClass('animated fadeInLeft');
            $('.first-title').addClass('animated fadeInUp');
            $('.sujet-work').addClass('animated fadeInUp');
            $('.sujet-works').addClass('animated fadeInUp');
            $('.thumbs').addClass('animated fadeInLeft');
            $('.thumb').addClass('animated fadeInUp');
                 
         
           
        });
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });
    
     
    });