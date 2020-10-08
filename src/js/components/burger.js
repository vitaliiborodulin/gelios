$('.burger').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('burger--close');
    $('.header__contacts-icons').toggleClass('header__contacts-icons--open');
    $('.header__social').toggleClass('header__social--open');
  });