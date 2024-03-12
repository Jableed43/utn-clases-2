import { Autor } from "./Autor";

export interface Libro {
    titulo: string;
    autor: Autor;
    obtenerResumen(): string;
}


