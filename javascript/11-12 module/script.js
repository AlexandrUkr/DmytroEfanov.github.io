$(document).ready(function() {

      $('.carousel').carousel();

//templating;

var html = $('#my_profile').html();

var data = {
   profile_name: 'Efanov Dmytro',
   paragraph: 'this is paragrapg',
   img_src: 'img/profile_pic.jpg',
   activity: 'изготовление рогов и копыт',
   block_info: 'main_title',
   choice: 'люблю кодить, потому что: ',
   list1: 'это учит дисциплине и находчивости',
   list2: 'это открывает перспективы',
   list3: 'это мотивирует',
   font_icon: 'fa fa-phone',
   my_number: '098 78 038 62',
   fbook_icon: 'fa fa-facebook-square',
   fbook_btn: 'https://www.facebook.com/dmitry.efanov.58',
   feedback: 'все что ни происходит, к лучшему!'
};

var content = tmpl(html, data);

$('body').append(content);

});
