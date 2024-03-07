"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
const Libro_1 = require("./Libro");
// variables
let numero = 5;
let letras = "Hola utn";
let booleano = true;
//funciones
function sumar(a, b) {
    return a + b;
}
function saludar(nombre, edad) {
    return `Hola, ${nombre}, ${edad}`;
}
//Objetos
let persona = {
    nombre: "Juan",
    edad: 30
};
let ubicacion = { x: 10, y: 20 };
//Arrays
let numeros = [1, 2, 3];
let palabras = ["uno", "dos", "tres", "catorce"];
let ubicaciones = [{ x: 10, y: 20 }, { x: 14, y: 20 }, { x: 17, y: 20 }];
//instanciar dueño
let javier = new Animal_1.Owner("javier", "lopez");
//instanciar animal
let firulais = new Animal_1.Animal("negro", "firulais", "masculino", javier);
console.log(firulais);
firulais.color;
console.log(firulais.tieneHambre);
//instanciar gato
let michi = new Animal_1.Gato("atigrado", "michi", "femenino", javier);
console.log(michi);
michi.tirarVaso();
console.log(michi.alimentar());
console.log(michi);
//instanciar libros
let harryPotter = new Libro_1.Libro("harry potter", "fantasia", "200", "J.k Rowling");
var martinFierro = new Libro_1.Libro("Martin Fierro", "Tradicionalista", "200", "Jose hernandez");
let seniorAnillos = new Libro_1.Libro("señor de los anillos", "fantasia", "500", "J. RR Tolkien");
let gestor = new Libro_1.GestorLibros;
let biblioteca = [harryPotter, martinFierro];
gestor.mostrarTodo(biblioteca);
gestor.insertar(seniorAnillos, biblioteca);
gestor.mostrarTodo(biblioteca);
