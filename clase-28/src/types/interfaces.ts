interface Persona {
    nombre: string;
    edad: number;
    // Puedes agregar más propiedades según sea necesario
  }
  
  class Estudiante implements Persona {
    nombre: string;
    edad: number;
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  }


  interface Form {
    color: string;
  }
  
  interface Rectangulo extends Form {
    ancho: number;
    alto: number;
  }
  
  let rectangulo: Rectangulo = {
    color: "rojo",
    ancho: 10,
    alto: 5,
  };

  interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
  }
  
  let miCalculadora: Calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
  };