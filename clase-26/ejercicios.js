// 1. Acceder al tercer elemento de un array y asignarle un nuevo valor
var frutas = ['manzana', 'frutilla', 'mandarina', 'banana']
console.log(frutas[2])
frutas[2] = 'pera'
console.log(frutas[2])

console.log(frutas.indexOf('mandarina')) // falsy
console.log(frutas.indexOf('pera')) // 2

// 2. Agregar un nuevo elemento al final del array
var frutas = ['manzana', 'frutilla', 'mandarina', 'banana']
frutas.push('sandia')
console.log(frutas)

// 3. Usar `map` para duplicar todos los elementos en un array de números
var numeros = [2, 5, 10, 4, 33, 22, 17, 92]
var numerosMultiplicados = numeros.map(function(numero){
   return numero * 2
})
console.log(numerosMultiplicados)

// 4. Usar `filter` para obtener solo los números pares de un array
var numeros = [2, 5, 10, 4, 33, 22, 17, 92]
let pares = numeros.filter(function(numero){
 // % modulo MOD
  return numero % 2 === 0
})
console.log(pares)

// 5. Acceder al segundo y cuarto elemento de un array y combinarlos en una nueva cadena (concatenacion)

var frutas = ['manzana', 'frutilla', 'mandarina', 'banana']
let combinados = frutas[1] + " " + frutas[3]
console.log(combinados)

// 6. Usar `forEach` para calcular la suma de los elementos de un array
var numeros = [2, 5, 10, 4, 33, 22, 17, 92]
let sum = 0;
numeros.forEach(function(numero){
    return sum = sum + numero
    // sum += numero
})
console.log(sum)

// 7. Usar `filter` para obtener palabras con más de tres letras de un array
var frutas = ['manzana', 'frutilla', 'mandarina', 'banana', 'uva']
let masTresLetras = frutas.filter(function(fruta){
    return fruta.length > 3
})
console.log(masTresLetras)

// 8. Eliminar elementos específicos de un array usando `splice`
// eliminar del [1] al [2] inclusive
var frutas = ['manzana', 'frutilla', 'mandarina', 'banana', 'uva']
// 1: donde empiezo / 2: cuantos elimino
frutas.splice(1, 2)
console.log(frutas)

//con funcion
function eliminador(array, inicio, cantidad) {
    return array.splice(inicio, cantidad)
}

console.log(eliminador(frutas, 1, 2))

//Array
// 1. Escribí un ciclo for que haga que la computadora cuente hacia atrás 
// desde 100 hasta 5 de 5 en 5.

function contarHaciaAtras() {
    for( let i = 100; i >= 0; i -= 5 ){
        console.log(i)
    }
}

contarHaciaAtras()

// 2. Usando un bucle for escribir un script que pida (por input) un valor entero y muestre en pantalla una lista de números desde el 0 al valor tecleado.

function listaNum(num){
    let listado = []
    for(let i = 0; i < num ; i++ ){
      listado.push(i)
    }
    console.log("listado:",listado)
    return listado
}
listaNum(40)

// 3. Escriba un script devuelve la tabla de multiplicar del número que el usuario teclee. Con ciclo for.

function tablaMultiplicar(num){
    let numeros = []
    for(let i = 1; i <= 10; i++ ){
       numeros.push(num * i)
    }
   console.log(numeros)
}

tablaMultiplicar(7)
