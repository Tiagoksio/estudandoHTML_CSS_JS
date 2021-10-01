$(function(){
    const img = $('img');
    //Redimencionamento da imagem conforme redimencionamento da janela
    /*   
    $(window).resize(function(){
       img.width($(window).width()).height($(window).height())
   });
   */
   
   //evento scroll
   $('body').css("height", "5000px");
   /*
   $(window).scroll(function(){
        img.fadeOut('slow');    
    });
    */

    $(window).scroll(function(){
        var topo = $(window).scrollTop();
        topo >= 500 ? img.fadeOut('1000'): img.fadeIn('1000');
    });
});