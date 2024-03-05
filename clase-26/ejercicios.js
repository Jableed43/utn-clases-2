//Acceder al tercer elemento de un array y asignarle nuevo valor
var frutas = ["manzana", "frutilla", "pera", "mandarina", "uva"];
frutas[2] = "banana";
console.log(frutas[2]);

//Agregar nuevo elemento al final del array
var frutas = ["manzana", "frutilla", "pera", "mandarina", "uva"];
frutas.push("sandia");
console.log(frutas);

//Usar filter para obtener solo los numeros pares de un array
var nums = [2, 4, 5, 3, 6, 7, 8, 10, 22, 15];
var pares = nums.filter(num => num % 2 === 0);
console.log(pares);
var impares = nums.filter(num => num % 2 !== 0);
console.log(impares);

//usar foreach para calcular la suma de los elementos de un array
var nums = [2, 4, 5, 3, 6, 7, 8, 10, 22, 15];
var totalSuma = 0;
nums.forEach(num => (totalSuma = totalSuma + num));
console.log(totalSuma);
nums.forEach(function (num) {
  return (totalSuma = totalSuma + num);
});

//usar filter para obtener palabras con mas de tres letras de un array
var frutas = ["manzana", "frutilla", "pera", "mandarina", "uva"];
var frutasResultado = frutas.filter(fruta => fruta.length > 3);
console.log(frutasResultado);
var buscarFruta = frutasResultado.indexOf("frutilla");
console.log(buscarFruta);

var listaFrutas = [frutas, frutasResultado, buscarFruta];
//Destructuring
var [frutas] = listaFrutas;
console.log(frutas);
