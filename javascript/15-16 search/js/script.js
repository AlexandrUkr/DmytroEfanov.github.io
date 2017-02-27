$(document).ready(function() {

    $('.voice').hover(function() {
        $(this).siblings('#popup').stop().fadeIn(200);
    }, function() {
        $(this).siblings('#popup').stop().fadeOut(200);
    });
    //////////////////////

    var setData;
    var request = new XMLHttpRequest();

    function getjson() {

      var setData = $('#main_search').val();
       request.open('GET', 'https://api.tenor.co/v1/search?key=LIVDSRZULELA&tag='+ setData +'&limit=' +3);
       request.onreadystatechange = function () {
          if (request.status === 200 && request.readyState === 4) {
             var resultText = JSON.parse(request.responseText);

             for(var i = 0; i < 3; i++) {
                var imgSrc = resultText.results[i].media[0].gif.url;
                $('.image').append('<img src="'+imgSrc+'"> ');

             };
             console.log(resultText);

          } else if (request.status !== 200) {
             console.log('false');
          }
       }
       request.send();
    }
    console.log(request);

    $('.button_search').on('click ', getjson);
    $('.textarea').on('change', getjson);
    $('.textarea').keyup(function(e) {
       $(this).attr('autocomplete', 'off');
        if (e.keyCode == 13) {
            getjson();
        };
    });

    $('.textarea').on(' focusout', function(){

       if($(this).val().length >= 1) {
          $(this).val('');

       } else {
          return;
       }
   });

});
