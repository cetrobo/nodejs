$(document).ready(function() {
     
   $('.title-section2').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
       
});
   $('.exp-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 
       
});
   $('.line-section2').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
       
});
   $('.aboutme-section2').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 
  
       
});
   
  
   $('#title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
  
       
});
   
  
  
  
  //Section Work
   $('.title-work').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  
       
});
  
   $('.border-works').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
  
       
});
  
   $('.first-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 

       
});
   $('.sujet-works').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 
  
   });
     
     
     
      $('.thumbs').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
 
       
});
     
     
      
      $('.thumb').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
  
       
});
     
             
  
  //footer

  
  
       
      $('.msg-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
 
});
  
  
  
  
        $('.media').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 

});

  
          $('#thanks').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
 
       
});
  
  
  
  
  
  
  
  
   
      $('.msg-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 

       
});
  
  
  
  
  
  
  
  
  
  
  
  
  $('.section-title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 

       
});
  
  $('.line-section').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
 
       
});
  
  $('.section-contenue').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 

       
});
  
  $('.section-thumb').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeIn");
          
        } 
    
});
  
  $('.post-logo').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInUp");
          
        } 

       
});
  
  
$('.title').inViewport(function(px){
  if(px){
          $(this).addClass("animated fadeInLeft");
          
        } 
   
});
  
    $("header").inViewport(function (px) {
    if (px) {
      $(this).addClass("animated fadeIn");
    } 
  });


  $("section").inViewport(function (px) {
    if (px) {
      $(this).addClass("animated fadeIn");
    }
  });


  $("footer").inViewport(function (px) {
    if (px) {
      $(this).addClass("animated fadeIn");
    }
  });
  

  
    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0  
        }, 600);
        return false;
    
    });
    
     
  });
