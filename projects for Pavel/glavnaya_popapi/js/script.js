'use strict';

$(document).ready(function () {

  var $image = $('img');
  var $main = $('.slide1');
  var $slideBlock = $('.item');
  var $buttonBlock = $('.bin_block');
  var $bin = $('bin');

  $image.hover(
    function () {
      $(this).parent()
          .css({
                transition: '0.5s',
                border: '3px solid #7cbe34',
                webkitBoxShadow: '0px 0px 18px -2px rgba(0,0,0,0.75)',
                mozBoxShadow: '0px 0px 18px -2px rgba(0,0,0,0.75)',
                boxShadow: '0px 0px 18px -2px rgba(0,0,0,0.75)',
                height: '400px'
              })
    },
    function () {
      $(this).parent()
          .css({
                  transition: 'none',
                  border: '3px solid transparent',
                  boxShadow: 'none',
                  height: '359px'
            })
    }
  ),

  $slideBlock.hover(
    function(){

      $(this).children('.bin_block').css('display', 'block');
    },
    function(){

      $(this).children('.bin_block').css('display', 'none');
    })
    });

    $(document).ready(function (e) {
      var $changeButton = $('.bin_block');
      // e.preventDefault();

      $changeButton.hover(
        function(){
          $(this).
              css({
                  backgroundColor: '#517728',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)'
          })
        },
        function(){
          $(this).
              css({
                  backgroundColor: '#7cbe34',
                  boxShadow: 'none'
              })
});
    })

//    custom for slider;
   $(document).ready(function() {
 $("#lightSlider").lightSlider({
     item: 4,
     autoWidth: false,
     slideMove: 1, // slidemove will be 1 if loop is true
     slideMargin: 5,    // space between blocks;

     addClass: '',
     mode: "slide",
     useCSS: true,
     cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
     easing: 'linear', //'for jquery animation',////

     speed: 400, //ms'
     auto: false,
     loop: true,               // if true we have infinity loop;
     slideEndAnimation: false,
     pause: 2000,

     keyPress: true,
     controls: true,
     prevHtml: '',
     nextHtml: '',

     rtl:false,
     adaptiveHeight:false,

     vertical:false,
     verticalHeight:500,
     vThumbWidth:100,

     thumbItem:10,
     pager: true,
     gallery: false,
     galleryMargin: 5,
     thumbMargin: 5,
     currentPagerPosition: 'middle',

     enableTouch:true,
     enableDrag:true,
     freeMove:true,
     swipeThreshold: 40,

     responsive : [],

     onBeforeStart: function (el) {},
     onSliderLoad: function (el) {},
     onBeforeSlide: function (el) {},
     onAfterSlide: function (el) {},
     onBeforeNextSlide: function (el) {},
     onBeforePrevSlide: function (el) {}
 });
});
