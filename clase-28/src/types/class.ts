class Animal {
    nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    hacerSonido(): void {
      console.log("Haciendo un sonido genérico");
    }
  }
  
  class Perro extends Animal {
    raza: string;
  
    constructor(nombre: string, raza: string) {
      super(nombre);
      this.raza = raza;
    }
  
    hacerSonido(): void {
      console.log("Woof! Woof!");
    }
  }
  
  let miPerro: Perro = new Perro("Buddy", "Labrador");
  miPerro.hacerSonido(); // Salida: Woof! Woof!
  

  class CalculadoraClass {
    sumar(a: number, b: number): number {
      return a + b;
    }
  
    restar(a: number, b: number): number {
      return a - b;
    }
  }
  
  let miCalculadoraClass = new CalculadoraClass();
  