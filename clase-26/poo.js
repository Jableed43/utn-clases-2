class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  const cat = new Animal('Cat', 'Meow');
  const dog = new Animal('Dog', 'Woof');
  
  cat.makeSound();
  dog.makeSound();
  