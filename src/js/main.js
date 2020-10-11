//= ../../node_modules/jquery.maskedinput/src/jquery.maskedinput.js
//= ../../node_modules/owl.carousel/dist/owl.carousel.min.js

$(function(){

  //= components/burger.js
    //= components/popup.js
    //= components/slider.js
    //= components/header.js
    //= components/readmore.js
    //= components/map.js

   if ($(window).width() < 600) {
      $(".owl-stage-outer").readmore({
        maxHeight: 50,
        moreLink:
          '<a href="#" style="margin:10px 5px;color:#fff">>></a>',
        lessLink: '<a href="#" style="margin:10px 5px;color:#fff" ><<</a>',
      });
    }

  });