"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Perro {
    constructor(color, nombre) {
        /* Variables internas de la clase perro */
        /* Como creamos una variable interna?
        escribimos el nombre, el tipo y si es necesario le asignamos un valor inicial */
        this.estaDespierto = true;
        this.tieneHambre = true;
        this.ladridos = 0;
        this.solo = false;
        this.bolsaRota = false;
        this.esFeliz = false;
        this.color = color;
        this.nombre = nombre;
    }
    /* Funciones de nuestra clase */
    /* cuando la funcion se ejecute va a leer el estado de la instancia */
    alimentar() {
        if (this.tieneHambre === true) {
            this.tieneHambre = false;
            console.log('El perro come el alimento');
        }
        else {
            console.log(`El perro no tiene hambre, porque ya se`);
        }
    }
    ladrar() {
        this.ladridos = this.ladridos + 1;
        console.log(this.ladridos);
    }
    romperBolsa() {
        if (this.solo === true && this.tieneHambre === true) {
            this.bolsaRota = true;
            console.log(`Bolsa rota`);
        }
        else {
            console.log(`No puede romper la bolsa en este momento`);
        }
    }
    acariciar() {
        if (this.estaDespierto === true) {
            this.estaDespierto = false;
            this.esFeliz = true;
            console.log('El perro es feliz con tus caricias, el perro se durmió');
        }
        else
            this.despertar();
    }
    despertar() {
        if (this.estaDespierto === false) {
            this.estaDespierto = true;
            console.log('El perró se despertó');
        }
        else {
            console.log('El perro ya se encuentra despierto');
        }
    }
    asignarColor(color) {
        /* this.color es la variable dentro de la clase y
        color es el parametro de la funcion */
        /* comillas backticks para template string alt + 96 */
        this.color = color;
        console.log(`El color del perro es ${color}`);
    }
    asignarNombre(nombre) {
        this.nombre = nombre;
        console.log(`El nombre del perro es ${nombre}`);
    }
    llamarPorNombre(nombre) {
        if (nombre === this.nombre) {
            console.log(`El perro ${this.nombre} viene`);
        }
        else {
            console.log(`El perro NO viene, ${nombre} no es su nombre`);
        }
    }
}
exports.default = Perro;
const fitu = new Perro('negro', 'firu');
fitu.alimentar();
fitu.ladrar();
class Doberman extends Perro {
    constructor(color, nombre) {
        super(color, nombre);
        this.ladridos = 0;
    }
}
const firulais = new Doberman('marron', 'firulais');
console.log(firulais.ladridos);
