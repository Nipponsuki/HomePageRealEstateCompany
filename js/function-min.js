$(window).scroll(function(){var t=$(this).scrollTop(),a=window.matchMedia("(max-width: 1000px)");if(t>$(".gallery").offset().top-$(window).height()/1.2&&$(".gallery .gallery__item").each(function(t){setTimeout(function(){$(".gallery .gallery__item").eq(t).addClass("is-showing")},700*Math.exp(.14*t)-700)}),t>$(".home__2").offset().top-$(window).height()){var o=Math.min(0,t-$(".home__2").offset().top+$(window).height()-350);1e3<=$(window).width()&&($(".home__1").css({transform:"translate("+o+"px, "+Math.abs(.2*o)+"px)"}),$(".home__3").css({transform:"translate("+Math.abs(o)+"px, "+Math.abs(.2*o)+"px)"}))}if(t>$(".home__5").offset().top-$(window).height()){var o=Math.min(0,t-$(".home__5").offset().top+$(window).height()-350);1e3<=$(window).width()&&($(".home__4").css({transform:"translate("+o+"px, "+Math.abs(.2*o)+"px)"}),$(".home__6").css({transform:"translate("+Math.abs(o)+"px, "+Math.abs(.2*o)+"px)"}))}});