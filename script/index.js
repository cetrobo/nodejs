$(document).ready(function() {

    $('.post-logo').addClass('animated fadeInUp');
    $('.title').addClass('animated fadeInUp');
  
     
  $("header").inViewport(function(px){
        if(px){
          $(this).addClass("animated fadeIn");
          $(this).removeClass("fadeOut");
        } 
        else {
          $(this).addClass("animated fadeOut");
          $(this).removeClass("fadeIn");
        }
    });
  
    
    $("section").inViewport(function(px){
        if(px){
          $(this).addClass("animated fadeIn");
          $(this).removeClass("fadeOut");
        } 
        else {
          $(this).addClass("animated fadeOut");
          $(this).removeClass("fadeIn");
        }
    });
  
  
    $("footer").inViewport(function(px){
        if(px){
          $(this).addClass("animated fadeIn");
          $(this).removeClass("fadeOut");
        } 
        else {
          $(this).addClass("animated fadeOut");
          $(this).removeClass("fadeIn");
        }
    });
  
s
  
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });
    
     
  });
