export class Libro {
    nombre: string;
    genero: string;
    cantPaginas: string;
    autor: string | null;

    constructor(nombre: string, genero: string, cantPaginas: string, autor: string | null){
        this.autor = autor;
        this.cantPaginas = cantPaginas;
        this.genero = genero;
        this.nombre = nombre;
    }
}

export class GestorLibros{
    mostrarTodo(array: Libro[]){
        console.log(array);
    }

    insertar(libro: Libro, array: Libro[]){
        if(libro){
            array.push(libro)
            console.log(`Se ha añadido el libro, ${libro.nombre} a la base de datos `, [...array]);
        } else {
            console.log(`No se ha añadido el libro, a la base de datos`, [...array])
        }
    }

    eliminar(nombre: string, array: Libro[]){
        let libroEncontrado = array.findIndex(libro => libro.nombre == nombre)
        if(libroEncontrado >=0){
            array.splice(libroEncontrado, 1)
            console.log("libro eliminado", nombre);
            console.log(array);
            return array
        } else {
            console.log("Libro", nombre, "no ha sido encontrado");
        }
    }
}