'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

var binario = num.split('').reverse();
var resultado = 0;
var b;
for (var i=0; i < binario.length; i++){
  b = Math.pow(2,i);
  resultado += b*binario [i];
}
return resultado;
}
  /*
  let sum = 0;

  for (let i = 0; i < num.length; i++) {
     sum += +num[i] * 2 ** (num.length - 1 - i);
  }
  return sum;
}
*/
function DecimalABinario(num) {
  // tu codigo aca
  return num.toString(2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}