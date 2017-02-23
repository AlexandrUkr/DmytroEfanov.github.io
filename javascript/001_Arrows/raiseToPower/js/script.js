
function raiseToPower(a, b) {
  var result = a;    
  for (var i = 1; i < b; i++) {
  result *= a;        
}   
  return result;	

}

var a = prompt('введите число:', '' );
var b = prompt('введите степень:', '');
var answer = raiseToPower(a, b);  

console.log('результат =', answer);









	

	