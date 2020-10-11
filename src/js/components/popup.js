$('.btn--popup').on('click', function (e) {
    e.preventDefault();
    $('.popup-overlay').show();
    $('body').css('overflow', 'hidden');
  });
  
  $('.popup-form__close').on('click', function (e) {
    $('.popup-overlay').hide();
    $('body').css('overflow', 'initial');
  });
  
  
  // $document = $(document);
  // $document.mouseup(function (e){ // событие клика по веб-документу
  //   var div = $(".popup-wrapper"); // тут указываем элемент
  //   if (!div.is(e.target) // если клик был не по нашему блоку
  //       && div.has(e.target).length === 0) { // и не по его дочерним элементам
  //         $('.popup-overlay').hide();
  //         $('body').css('overflow', 'initial');
  //   }
  // });