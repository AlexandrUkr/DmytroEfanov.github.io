'use strict';

$(document).ready(function() {

// $(".js-demo-1").find("input").ionCheckRadio();

$('select').niceSelect();

$('.dropdown').hover( function (event) {

   $(this).children('.sub_menu').stop().slideDown(350);
   $(this).children('.sub_menu').css('background', 'rgba(14, 23, 145, 0.5)');

},
   function () {
      $(this).children('.sub_menu').stop().slideUp(350);   
   });


});
//  resize window and manipulate with class;
