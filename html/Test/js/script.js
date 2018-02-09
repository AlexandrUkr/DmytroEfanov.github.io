$(document).ready(function () {

  console.log('some text here');

  $('.hid-onmed-up').on('click', function () {
    $(this).siblings('.panel').toggleClass('active');
  });

  $('.hid-list-menu').on('click', function () {
    $(this).siblings('.hid-list').toggleClass('hid-list-active');
  });

});
