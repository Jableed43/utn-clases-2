import {Animal, Gato, Owner} from "./Animal"
import { GestorLibros, Libro } from "./Libro"

// variables
let numero: number = 5
let letras: string = "Hola utn"
let booleano: boolean = true

//funciones
function sumar(a: number, b: number): number {
    return a + b
}

function saludar(nombre: string, edad?: number): string {
    return `Hola, ${nombre}, ${edad}`
}


//Objetos
let persona: { nombre: string, edad: number} = {
    nombre: "Juan",
    edad: 30
}

//tipo

type Coordenada = {x: number, y:number}

let ubicacion: Coordenada = {x: 10, y: 20}

//Arrays

let numeros: number[] = [1, 2, 3]
let palabras: string[] = ["uno", "dos", "tres", "catorce"]

let ubicaciones: Coordenada[] = [{x: 10, y: 20}, {x: 14, y: 20}, {x: 17, y: 20}]

//instanciar dueño
let javier = new Owner("javier", "lopez")

//instanciar animal
let firulais = new Animal("negro", "firulais", "masculino", javier)
console.log(firulais);
firulais.color
console.log(firulais.tieneHambre);

//instanciar gato
let michi = new Gato("atigrado", "michi", "femenino", javier)
console.log(michi);
michi.tirarVaso()
console.log(michi.alimentar());
console.log(michi);


//instanciar libros
let harryPotter = new Libro("harry potter", "fantasia", "200", "J.k Rowling")
var martinFierro = new Libro("Martin Fierro", "Tradicionalista", "200", "Jose hernandez")
let seniorAnillos = new Libro("señor de los anillos", "fantasia", "500", "J. RR Tolkien")

let gestor = new GestorLibros;

let biblioteca = [harryPotter, martinFierro]
gestor.mostrarTodo(biblioteca)
gestor.insertar(seniorAnillos, biblioteca)
gestor.mostrarTodo(biblioteca)
gestor.eliminar("señor de los anillos", biblioteca)
gestor.mostrarTodo(biblioteca)


