$(document).ready(function() {
<<<<<<< HEAD
    $('.post-logo').addClass('animated fadeInUp');
    $('.title').addClass('animated fadeInUp');
  
       ;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
       } visPx();
       $(win).on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(window).scroll(function(){

$("#header").inViewport(function(px){
    if(px) $(this).addClass("animated fadeOut")
    else $(this).removeClass("animated fadeOut").addClass("animated fadeIn")
});
  
  });
                 
});
  
  
=======

  
  
  
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
  
  

  
  
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });
    
     
  });
>>>>>>> 8c06c4c2cabb266ca20dc21a31a58184e3469107
