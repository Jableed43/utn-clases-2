"use strict";
//entidad Animal con caracteristicas
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = exports.Gato = exports.Animal = void 0;
class Animal {
    //constructor te permite guardar datos en las variables internas, cuando creas
    constructor(color, nombre, genero, owner) {
        this.tieneHambre = true;
        this.color = color;
        this.nombre = nombre;
        this.genero = genero;
        this.owner = owner;
    }
    //funciones
    alimentar() {
        if (this.tieneHambre) {
            this.tieneHambre = false;
            console.log("El animal come el alimento");
        }
        else {
            console.log("El animal no tiene hambre, no come");
        }
    }
}
exports.Animal = Animal;
//herencia
class Gato extends Animal {
    //constructor
    constructor(color, nombre, genero, owner) {
        super(color, nombre, genero, owner);
        //variables internas
        this.vasosTirados = 0;
    }
    tirarVaso() {
        this.vasosTirados += 1;
        console.log(this.vasosTirados);
    }
}
exports.Gato = Gato;
class Owner {
    constructor(nombre, apellido) {
        this.apellido = apellido;
        this.nombre = nombre;
    }
}
exports.Owner = Owner;
