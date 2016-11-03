'use strict';
(function timer() {

    var clock = document.querySelector('.main__clock');
    var onStartBtnClick = document.querySelector('.butt__start');
    var onClearBtnClick = document.querySelector('.butt__clear');
    var onPauseBtnClick = document.querySelector('.butt__pause');
    clock.innerHTML = '00:00:00:00';
    var timerID;
    var counterNumbers = {
      msec: '' + 0,
      sec: 0,
      sec2: 0,
      min: '' + 0,
      min2: 0,
      hours: '' + 0,
      hours2: 0
    }

    function initEventListener() {
      onStartBtnClick.addEventListener('click', pushStart);
      onPauseBtnClick.addEventListener('click', pushPause);
      onClearBtnClick.addEventListener('click', pushClear);
    }

    function pushStart() {
        timerID = setInterval(startTimer, 10);
        onStartBtnClick.removeEventListener('click', pushStart);
        onStartBtnClick.style.display = 'none';
        onPauseBtnClick.style.display = 'inline-block';
    }

    function pushPause() {
        clearInterval(timerID);
        onStartBtnClick.addEventListener('click', pushStart);
        onPauseBtnClick.style.display = 'none';
        onStartBtnClick.style.display = 'inline-block';
    }

    function pushClear() {
        clearInterval(timerID);
        onStartBtnClick.addEventListener('click', pushStart);
        onStartBtnClick.style.display = 'inline-block';
        onPauseBtnClick.style.display = 'none';
        clock.innerHTML = '00:00:00:00';
        counterNumbers.msec = '' + 0;
        counterNumbers.sec = counterNumbers.sec2 + 0;
        counterNumbers.min = counterNumbers.min2 + 0;
        counterNumbers.hours = '' + 0;
    }

    function startTimer() {
      var obj = counterNumbers;
        obj.msec++;
        if(obj.msec == 100){
          obj.msec = '0';
          obj.sec++;
        }

        if(obj.msec < 10){
          obj.msec = '0' + obj.msec;
        }

        if(obj.sec == 60){
          obj.sec = 0;
          obj.sec2 = 0;
          obj.min++;
        }

        if(obj.sec > 9){
          obj.sec2 = '';
        }

        if(obj.min == 60){
          obj.min = 0;
          obj.min2 = 0;
          obj.hours++;
        }

        if(obj.min > 9){
          obj.min2 = '';
        }

        if(obj.hours == 23){
          obj.hours = 0;
          obj.min = 0;
          obj.min2 = 0;
        }
        clock.innerHTML = obj.hours2 + obj.hours + ':' + obj.min2 + obj.min + ':' + obj.sec2 + obj.sec + ':' + obj.msec;
    }
    initEventListener();
})();
