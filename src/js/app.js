
   $(document).ready(function(){
    const slider = $(".slide-one").owlCarousel({
        
        
        loop:true,
        margin:10,
        nav:true,
         navText:  ["<img src='@img/arrow-left.png'>","<img src='@img/arrow-right.png'>"],
        dots:false,
        autoplay:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
});

