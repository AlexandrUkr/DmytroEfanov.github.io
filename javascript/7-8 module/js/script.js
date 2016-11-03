'use strict';
                          // switch tab
$(document).ready(function () {

  var $links = $('.mark__in');
  $links.on('click', function (event) {

       var changeBlock = $(this).attr('href');
       $('.mark__in').removeClass('active');
       $(this).addClass('active');
       $('.left__inside').removeClass('active');
       $(changeBlock).addClass('active');
       event.preventDefault();
    });
              //show help
    $('.form__text').hover(

      function () {
        $(this).next('.hide__help').stop().show();
        $(this).next('.hide__help').css({
          display: 'inline-block'
        })
      },

      function () {
        $(this).next('.hide__help').stop().fadeOut();
      });
});
          //  button
$(document).ready(function () {
    var $button = $('.but__help');
    $button.on('click', function () {
      $('.hide__help').fadeIn();
    })
});
