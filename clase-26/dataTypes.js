//string
// "hola", 'que tal', `buenas noches`
var javier;
console.log(`string text ${javier} string text 2`);
//booleanos
true, false, undefined, null;
//numeros
2, 1, 2;

//Array
var listado = [1, 2, 22, 10, 55, 100];
//agrega al final del array un nuevo valor
listado.push("utn");
//pop quita el valor de la ultima posicion
console.log(listado);

let resultado = listado.filter(indice => indice > 100);
console.log(resultado);

if (resultado.length > 0) {
  console.log("hay resultado");
} else {
  console.log("no hay resultado");
}
//Objetos
const obj = {
  clave: "valor",
  clave2: 2,
  clave3: [],
  clave4: {},
  clave5: function name() {
    console.log("hola estoy dentro de la funcion");
  },
};
//Destructuracion de objeto
var { clave2, clave3, clave4, clave5 } = obj;
clave5();
console.log("clave2", clave2);
