
//anchor animate
$('body').on('click', '[href*="#"]', function(e){
    var fixed_offset = 200;
    $('html,body').stop().animate({ 
      scrollTop: $(this.hash).offset().top - fixed_offset 
    }, 300);
//   e.preventDefault();
});

// var $links = $('.header__navigation a');
// var menu = $('.header__menu');

//     $links.on('click', function(e){
      
//       if (menu.hasClass('header__menu--open')){
//         $('.burger').toggleClass('burger--close');
//         menu.toggleClass('header__menu--open');
//       }

    
//     });

//fixed menu on scroll
var fixNav = 150;
$window = $(window);

$window.scroll(function () {
	var scroll = $(this).scrollTop();
	if (scroll >= fixNav) {
		$('.header').addClass('header--sticky');
	} else {
		$('.header').removeClass('header--sticky');
	}
});