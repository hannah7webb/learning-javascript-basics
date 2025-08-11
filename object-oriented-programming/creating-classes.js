// Base class: Pet
// This defines general properties and behaviors that ALL pets will have.
class Pet {
  // The constructor runs when you create a new instance of Pet (or a subclass).
  constructor(name, age) {
    // 'this' refers to the new object being created.
    this.name = name; // Store the pet's name
    this.age = age;   // Store the pet's age
  }
  
  // Method: speak()
  // A general method for making a sound — subclasses can override this.
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
  
  // Method: describe()
  // Gives a quick description of the pet.
  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

// Subclass: Dog
// This class inherits from Pet, but adds extra properties and custom behavior.
class Dog extends Pet {
  constructor(name, age, breed) {
    // Call the parent constructor to set 'name' and 'age'
    super(name, age);
    this.breed = breed; // Add a dog-specific property
  }
  
  // Override the speak() method
  // Dogs bark instead of making a generic noise.
  speak() {
    console.log(`${this.name} barks! 🐶`);
  }
  
  // Dog-specific method
  fetch() {
    console.log(`${this.name} runs to fetch the ball.`);
  }
}

// Subclass: Cat
// Inherits from Pet, but with its own unique properties and methods.
class Cat extends Pet {
  constructor(name, age, color) {
    // Call the parent constructor for 'name' and 'age'
    super(name, age);
    this.color = color; // Add a cat-specific property
  }
  
  // Override speak()
  // Cats meow instead of the generic noise.
  speak() {
    console.log(`${this.name} meows! 🐱`);
  }
  
  // Cat-specific method
  nap() {
    console.log(`${this.name} curls up for a nap.`);
  }
}

// --- Example usage ---

// Create a Dog object
const rex = new Dog("Rex", 3, "German Shepherd");
rex.describe(); // Inherited from Pet
rex.speak();    // Overridden in Dog
rex.fetch();    // Only exists in Dog

// Create a Cat object
const luna = new Cat("Luna", 2, "black");
luna.describe(); // Inherited from Pet
luna.speak();    // Overridden in Cat
luna.nap();      // Only exists in Cat
