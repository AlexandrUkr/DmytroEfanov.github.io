

var names = []; 

for (i = 1; i < 6; i++) { 
  names[i] = prompt('Введите имя номер ' + i, ''); 
  console.log(names); 
} 

var nameCheck = prompt('Введите свое имя', ''); 

if((nameCheck == null) || (nameCheck == '')) { 
  alert('Вы не ввели ни одно значение'); 

} else if(nameCheck == names[1]) { 
  alert('Вы успешно вошли ' + nameCheck); 

} else if(nameCheck == names[2]) { 
  alert('Вы успешно вошли ' + nameCheck); 

} else if(nameCheck == names[3]) { 
  alert('Вы успешно вошли ' + nameCheck); 

} else if(nameCheck == names[4]) { 
  alert('Вы успешно вошли ' + nameCheck); 

} else if(nameCheck == names[5]) { 
  alert('Вы успешно вошли ' + nameCheck); 

} else { 
  alert('Прервано...'); 
}