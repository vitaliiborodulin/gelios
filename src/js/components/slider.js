var owl = $('.hero__slider');
var hero = $('.hero-section');
var $i = 1;


owl.owlCarousel({
    loop:true,
    // margin:20,
    smartSpeed:1000,
    dots:true,
    items: 1,
    autoplay: true,
    autoplayTimeout:10000,
    autoplayHoverPause:true
})


owl.on('changed.owl.carousel', function(event) {

    if ($i >= 4) {
        $i = 0;
    }

    // hero.css( "background-image", "url(/wp-content/themes/gelios/assets/img/hero-bg"+$i+".jpg)" );
    hero.css( "background-image", "url(img/hero-bg"+$i+".jpg)" );
    $i++;

})