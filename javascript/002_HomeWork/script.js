var DomElement = {
    createWrapper: function () {
        var wrap = document.createElement('div');
        wrap.classList.add('wrapper');
        wrap.style.width = '70%';
        wrap.style.backgroundColor = 'white';
        wrap.style.margin = '50px auto';
        wrap.style.border = '1px solid black';
        wrap.style.color = 'black';
        var body = document.getElementsByTagName('body');
        body[0].appendChild(wrap);
  },
    createMainTitle: function () {
      var mainTitle = document.createElement('h2');
      mainTitle.style.paddingTop = '20px';
      mainTitle.style.fontSize = '18px';
      mainTitle.style.fontFamily = 'Calibri, Droid Sans';
      mainTitle.style.textAlign = 'center';
      mainTitle.innerHTML = 'Тест по программированию';
      var wrap = document.querySelector('.wrapper');
      wrap.appendChild(mainTitle);
  },
    createContent: function (titleNum, title ) {
          var content = document.createElement('div');
          content.classList.add('block');
          content.style.marginLeft = '80px';

          var lowTitle = document.createElement('ul');
          content.appendChild(lowTitle);
      for(var j = 1; j <= 3; j++){
          var lowUnder = document.createElement('li');
          lowUnder.style.fontSize = '18px';
          lowUnder.style.listStyleType = 'none';
          lowUnder.style.fontFamily = 'Calibri, Droid Sans';
          lowUnder.innerHTML = j + '. Вопрос №' + j;
          content.appendChild(lowUnder);

          var list = document.createElement('ul');
          list.style.margin = '10px 0 10px 30px';
          content.appendChild(list);

          for(var i = 0; i < titleNum.length; i++) {
              var listItem = document. createElement('li');
              listItem.style.listStyleType = 'none';
              content.appendChild(listItem);

              var listInput = document.createElement('input');
              listInput.setAttribute('type', 'checkbox');
              listInput.style.marginLeft = '20px';
              listInput.style.marginBottom = '10px';
              content.appendChild(listInput);

              var listLabel = document.createElement('label');
              listLabel.innerHTML = titleNum[i];
              content.appendChild(listLabel);

              var wrap = document.querySelector('.wrapper');
              wrap.appendChild(content);
          }
        }       // end of Question number;
    },          // end of createContent;
    createButton: function () {
      var divBut = document.createElement('div');
      divBut.classList.add('button');
      divBut.style.textAlign = 'center';

      var wrap = document.querySelector('.wrapper');
      wrap.appendChild(divBut);

      var middleBut = document.createElement('button');
      middleBut.setAttribute('type', 'submit');
      middleBut.classList.add('button--last');
      middleBut.style.height = '40px';
      middleBut.style.width = '250px';
      middleBut.style.margin = '20px 0 40px 0';
      middleBut.style.backgroundColor = 'rgb(183, 236, 241)';
      middleBut.innerHTML = 'Проверить мои результаты';
      divBut.appendChild(middleBut);
    }
};

var versionNum = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

DomElement.createWrapper();
DomElement.createMainTitle();
DomElement.createContent(versionNum);
DomElement.createButton();
