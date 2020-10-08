//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js
//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js
//= ../../node_modules/imagelightbox/dist/imagelightbox.min.js

$(function(){

   //= components/header.js
   //= components/burger.js
   //= components/readmore.js
   //= components/slider.js
   //= components/map.js
   //= components/popup.js

   if ($(window).width() < 600) {
      $(".owl-stage-outer").readmore({
        maxHeight: 50,
        moreLink:
          '<a href="#" style="margin:10px 5px;color:#fff">Развернуть текст</a>',
        lessLink: '<a href="#" style="margin:10px 5px;color:#fff" >Свернуть текст</a>',
      });
    }

  });