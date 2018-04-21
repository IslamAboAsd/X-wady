
$( document ).ready(function() {
  
    'use strict';
    $('.navbar-nav li').click(function(){$(this).addClass('active').siblings().removeClass('active');});

    $('.icon-big').mouseover(function(){
        $(this).addClass('hidden');
        $(this).next(".icon-micro").removeClass('hidden');
    });
    $('.icon-micro').mouseleave(function(){
        $(this).addClass('hidden');
        $(this).prev('.icon-big').removeClass('hidden');
    });


    $('#video').on("click", function(){
        this.paused ? this.play() : this.pause();
        $('.far').toggleClass('fa-pause-circle fa-play-circle').fadeOut(1000);
        if(this.paused){
             $('.far').fadeIn(200);
            } 
    });
    
    
    $('.btn').on( "click", function(){
        $('#' + $(this).data('target')).toggleClass('hidden').fadeIn('500').siblings().fadeOut(400);
        $(this).siblings().addClass('border-color');
        $(this).removeClass('border-color');
    })
   
})   