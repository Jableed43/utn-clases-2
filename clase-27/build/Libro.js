"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GestorLibros = exports.Libro = void 0;
class Libro {
    constructor(nombre, genero, cantPaginas, autor) {
        this.autor = autor;
        this.cantPaginas = cantPaginas;
        this.genero = genero;
        this.nombre = nombre;
    }
}
exports.Libro = Libro;
class GestorLibros {
    mostrarTodo(array) {
        console.log(array);
    }
    insertar(libro, array) {
        if (libro) {
            array.push(libro);
            console.log(`Se ha añadido el libro, ${libro.nombre} a la base de datos ${[...array]}`);
        }
        else {
            console.log(`No se ha añadido el libro, a la base de datos ${array}`);
        }
    }
}
exports.GestorLibros = GestorLibros;
