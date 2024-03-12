abstract class Forma {
    abstract calcularArea(): number;
  }
  
  class Cuadrado extends Forma {
    lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    calcularArea(): number {
      return this.lado * this.lado;
    }
  }