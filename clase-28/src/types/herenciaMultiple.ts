// Definition of interfaces
interface Shape {
    calculateArea(): number;
  }
  
  interface Color {
    color: string;
  }
  
  // Class implementing multiple interfaces
  class Rectangle implements Shape, Color {
    width: number;
    height: number;
    color: string;
  
    constructor(width: number, height: number, color: string) {
      this.width = width;
      this.height = height;
      this.color = color;
    }
  
    calculateArea(): number {
      return this.width * this.height;
    }
  }
  
  // Using the class
  let rectangle: Rectangle = new Rectangle(5, 10, "blue");
  console.log("Area of the rectangle:", rectangle.calculateArea());
  console.log("Color of the rectangle:", rectangle.color);
  