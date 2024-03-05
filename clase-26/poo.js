//generas la estructura del dato y la fabricacion
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} says ${this.sound}`);
  }
}

const cat = new Animal("Garfield", "Miau");
cat.makeSound();
console.log(cat);
const dog = new Animal("Firulais", "woof");
dog.makeSound();
