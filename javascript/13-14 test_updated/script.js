'use strict';

$(document).ready(function() {

   var html = $('#test').html();
   var checkedAnswer;
   var rightAnswer = ['отгонять мух с лица хозяина', 'просто мишки любят мед', 'главный герой Ф. Кафки'];
   var questions = [
      {
         title: 'зачем собаке хвост?',
         answer: ['отгонять мух с лица хозяина', 'подметать пол', 'при беге +5 к скорости']
      },
      {
         title: 'почему медведи едят мед?',
         answer:  ['он сладкий', 'он горький', 'просто мишки любят мед']
      },
      {
         title: 'кто такой мастер пост-арта?',
         answer:  ['специалист по клеткам', 'главный герой Ф. Кафки', 'танцор']
      }
   ];
   var userAnswer = [];

   for(var i = 0; i < rightAnswer.length; i++)
      userAnswer.push('');
      // console.log(userAnswer);
   localStorage.setItem('some test', JSON.stringify(questions));

   var getFromString = localStorage.getItem('some test');
   var setToObject = JSON.parse(getFromString);
   var content = tmpl(html, {data: setToObject});

   $('body').append(content);
/////////////////

   $('.check_item').on('click', function () {
      // console.log(  $(this).parent().parent().parent().attr('id'));
      //var AnswerNo = $(this).attr('id');
      //console.log(AnswerNo);
      $(this).parents('.block').find('.check_item').prop('checked', false);
      $(this).prop('checked', true);

      var QuestionNo = $(this).parents('.block').attr('id');
      userAnswer[QuestionNo] = $(this).parent().text();
      // console.log(userAnswer);
      // checkedAnswer = $(this).parent().text();
      // userAnswer.push(checkedAnswer);
      // console.log(userAnswer);
   });

//////////////////modal window;
$('#button').on('click', function showResult() {
   var res = "";
   for (var i = 0; i < rightAnswer.length; i++) {

         if (rightAnswer[i] == userAnswer[i]) {
            res = res+ rightAnswer[i]+"; ";
         }
   };
   // console.log(res);
   $(this).parents('body').find('.result').text(res);
   $(this).parent('.content').siblings('.modal').css('display', 'block');
});

///////
   $('.close').on('click', function closeModal() {
      $(this).parents('.modal').css('display', 'none');
      $(this).siblings('.result').text('');
      $('.check_item').prop('checked', false);
      userAnswer = [];
   });

});
