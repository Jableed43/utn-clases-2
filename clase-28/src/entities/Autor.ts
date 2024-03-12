import {Persona} from './Persona'

export class Autor implements Persona{
    nombre: string
    apellido: string
    constructor(nombre: string, apellido: string){
        this.nombre = nombre
        this.apellido = apellido
    }
}