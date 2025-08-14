// this file walks through an example of how to create and extend classes
    // a base class can define shared properties and methods
    // subclasses inherit from the base class while adding or overriding behaviors
// --------------------------------------------------------------------
class Pet { // base class: Pet (this defines general properties and behaviors that all pets will have)
  constructor(name, age) { // constructor runs when you create a new instance of Pet (or a subclass)
    this.name = name; // attach name property to every new Pet object created 
    this.age = age; // attach age property to every new Pet object created 
  }
  
  speak() { // method: speak() (a general method for making a sound. subclasses can override this) 
    console.log(`${this.name} makes a noise.`);
  }
  
  // method: describe() (gives a quick description of the pet)
  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}
// --------------------------------------------------------------------
class Dog extends Pet { // subclass: Dog (this class inherits from Pet, but adds extra properties and custom behavior)
  constructor(name, age, breed) { // calls the parent constructor to set 'name' and 'age'
    super(name, age); // uses super keyword to initialize inherited properties from parent constructor 
    this.breed = breed; // adds a dog-specific property
  }
  
  speak() { // overrides the speak() method (dogs bark instead of making a generic noise)
    console.log(`${this.name} barks! 🐶`);
  }
  
  fetch() { // dog-specific method
    console.log(`${this.name} runs to fetch the ball.`);
  }
}
// --------------------------------------------------------------------
class Cat extends Pet { // subclass: Cat (inherits from Pet, but with its own unique properties and methods)
  constructor(name, age, color) { // calls the parent constructor for 'name' and 'age'
    super(name, age);
    this.color = color; // adds a cat-specific property
  }
  
  speak() { // overrides speak() method (catz meow instead of the generic noise)
    console.log(`${this.name} meows! 🐱`);
  }
  
  nap() { // cat-specific method
    console.log(`${this.name} curls up for a nap.`);
  }
}
// --------------------------------------------------------------------
// implementation: 
// creates a Dog object
const rex = new Dog("Rex", 3, "German Shepherd");
rex.describe(); // inherited from Pet
rex.speak(); // overridden in Dog
rex.fetch(); // only exists in Dog

// creates a Cat object
const luna = new Cat("Luna", 2, "black");
luna.describe(); // inherited from Pet
luna.speak(); // overridden in Cat
luna.nap(); // only exists in Cat
