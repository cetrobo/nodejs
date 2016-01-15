$(document).ready(function() {
     
   $('.title-section2').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  else{
    $(this).removeClass("animated fadeInLeft");
  }
       
});
   $('.exp-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 
  else{
    $(this).removeClass("animated fadeInUp");
  }
       
});
   $('.line-section2').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  else{
    $(this).removeClass("animated fadeInLeft");
  }
       
});
   $('.aboutme-section2').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 
  else{
    $(this).removeClass("animated fadeInUp");
  }
       
});
   
  
   $('#title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
  else{
    $(this).removeClass("animated fadeIn");
  }
       
});
   
  
  
  
  //Section Work
   $('.title-work').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  else{
    $(this).removeClass("animated fadeInLeft");
  }
       
});
  
   $('.border-works').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  else{
    $(this).removeClass("animated fadeInLeft");
  }
       
});
  
   $('.first-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 
  else{
    $(this).removeClass("animated fadeInUp");
  }
       
});
   $('.sujet-works').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 
  else{
    $(this).removeClass("animated fadeInUp");
  }
   });
     
     
     
      $('.thumbs').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  else{
    $(this).removeClass("animated fadeInLeft");
  }
       
});
     
     
      
      $('.thumb').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
  else{
    $(this).removeClass("animated fadeIn");
  }
       
});
     
             
  
  //footer

  
  
       
      $('.msg-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
  else{
    $(this).removeClass("animated fadeIn");
  }
       
});
  
  
  
  
        $('.media').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  else{
    $(this).removeClass("animated fadeInLeft");
  }
       
});

  
          $('#thanks').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
  else{
    $(this).removeClass("animated fadeIn");
  }
       
});
  
  
  
  
  
  
  
  
   
      $('.msg-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
  else{
    $(this).removeClass("animated fadeIn");
  }
       
});
  
  
  
  
  
  
  
  
  
  
  
  
  $('.section-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 
  else{
    $(this).removeClass("animated fadeInUp");
  }
       
});
  
  $('.line-section').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  else{
    $(this).removeClass("animated fadeInLeft");
  }
       
});
  
  $('.section-contenue').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
  else{
    $(this).removeClass("animated fadeIn");
  }
       
});
  
  $('.section-thumb').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
  else{
    $(this).removeClass("animated fadeInUp");
  }
       
});
  
  $('.post-logo').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 
  else{
    $(this).removeClass("animated fadeInUp");
  }
       
});
  
  
$('.title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  else{
    $(this).removeClass("animated fadeInLeft");
  }
       
});
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
