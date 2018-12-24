
$(window).scroll(function(){

  var wScroll = $(this).scrollTop();
  var bpLarge = window.matchMedia("(max-width: 1000px)");

  if(wScroll > $('.gallery').offset().top - ($(window).height() / 1.2)) {

    $('.gallery .gallery__item').each(function(i){

      setTimeout(function(){
        $('.gallery .gallery__item').eq(i).addClass('is-showing');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
  }

  if(wScroll > $('.home__2').offset().top - $(window).height()){

    var offset = Math.min(0, wScroll - $('.home__2').offset().top +$(window).height() - 350);

    if ($(window).width() >=1000) {
      $('.home__1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
      $('.home__3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
    }


  }
  if(wScroll > $('.home__5').offset().top - $(window).height()){

    var offset = Math.min(0, wScroll - $('.home__5').offset().top +$(window).height() - 350);

    if ($(window).width() >=1000) {
      $('.home__4').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});
      $('.home__6').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
    }

  }
});
