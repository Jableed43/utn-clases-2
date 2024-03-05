let array = ["ab", "bc", "de", "fg"];

let nuevoArray = [];

for (let index = 0; index < array.length; index++) {
  nuevoArray.push(array[index]);
  console.log("i", { Vuelta: index, Valor: array[index] });
}

console.log(nuevoArray);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let duplicados = [];

nums.forEach(num => {
  num = num * 2;
  duplicados.push(num);
});
console.log(duplicados);

let resultado = nums.map(function (num) {
  return num * 2;
});
console.log("resultado", resultado);
