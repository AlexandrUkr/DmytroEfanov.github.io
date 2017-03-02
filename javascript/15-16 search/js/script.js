$(document).ready(function() {
   var html = $('#wrapper').html();
   var setData;

    $('.voice').hover(function() {
        $(this).siblings('#popup').stop().fadeIn(200);
    }, function() {
        $(this).siblings('#popup').stop().fadeOut(200);
    });
    //////////////////////
   function getImg() {
      $('.result').remove();
      setData = $('#main_search').val();
      $.ajax({
         url: 'https://pixabay.com/api/?key=4697858-6e5dfa77924d476695f1b4913&image_type=photo&per_page=24&lang=en,ru',
         data: {q: setData},
         dataType: 'jsonp',
         success: function(data){
            console.log(data);
            var content = tmpl(html, data);
            $('body').append(content);
            console.log(data.hits[0].webformatURL);
         }
      })
   };
   ////////////////////////
    $('.button_search').on('click ', getImg);
    $('.textarea').keyup(function(e) {
       $(this).attr('autocomplete', 'off');
        if (e.keyCode == 13) {
            getImg();
        }
    });
//////////////////
   // $('body').on('click', '.link',  function (e) {
   //    var href = data.hits[0].webformatURL;
   //    e.preventDefault();
   //    var modal = $('<div class="modal"><img src="' + href +'"></div>');
   //    $('body').append(modal);
   //    console.log('click is done');
   //
   // });

});
