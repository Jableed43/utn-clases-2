//entidad Animal con caracteristicas

export class Animal {
    //variables internas - son los datos propios de la clase
    public color: string;
    public nombre: string;
    public tieneHambre: boolean = true;
    public genero: string;
    public owner: Owner;
    //constructor te permite guardar datos en las variables internas, cuando creas
    constructor(color: string, nombre: string, genero: string, owner: Owner){
        this.color = color
        this.nombre = nombre
        this.genero = genero
        this.owner = owner
    }
    //funciones
    alimentar(): void{
        if(this.tieneHambre){
            this.tieneHambre = false
            console.log("El animal come el alimento");
        } else {
            console.log("El animal no tiene hambre, no come");
        }
    }
}

//herencia
export class Gato extends Animal{
    //variables internas
    public vasosTirados: number = 0;
    //constructor
    constructor(color: string, nombre: string, genero: string, owner: Owner){
        super(color, nombre, genero, owner)
    }

    tirarVaso(): void{
        this.vasosTirados += 1
        console.log(this.vasosTirados);
    }
}

export class Owner{
    nombre: string
    apellido: string
    constructor(nombre: string, apellido: string){
        this.apellido = apellido
        this.nombre = nombre
    }
}