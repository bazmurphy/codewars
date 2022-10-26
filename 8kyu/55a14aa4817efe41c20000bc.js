// Classy Extentions

// Classy Extensions

// Classy Extensions, this kata is mainly aimed at the new JS ES6 Update introducing extends keyword. You will be preloaded with the Animal class, so you should only edit the Cat class.

// Task
// Your task is to complete the Cat class which Extends Animal and replace the speak method to return the cats name + meows. e.g. 'Mr Whiskers meows.'

// The name attribute is passed with this.name (JS), @name (Ruby) or self.name (Python).

// Reference: JS, Ruby, Python.

class Cat extends Animal {
  constructor(name) {
    super(name);
  }
  speak() {
    return `${this.name} meows.`;
  }
}

const cat = new Cat('Mr Whiskers');
console.log(cat.speak(),'Mr Whiskers meows.')
cat = new Cat('Lamp');
console.log(cat.speak(),'Lamp meows.')
cat = new Cat('$$Money Bags$$');
console.log(cat.speak(),'$$Money Bags$$ meows.')


// Solution 1
class Cat extends Animal {
  speak() {
    return `${this.name} meows.`;
  }
}


// Solution 2
class Cat extends Animal {
  speak() {
     return this.name + " meows.";
  };
}


// Solution 3
class Cat extends Animal {
  constructor (value) {
    super(value)
  }
  speak(){
    return `${this.name} meows.`
  }
}


// Solution 4
class Cat extends Animal 
{
  constructor(name)
  {
    super(name);
  } 
  speak()//override
  {
    return `${this.name} meows.`;
  }
}


// Solution 5
// classes
// class Animal{
//     constructor(name){
//         this.name = name;
//     }
// }

class Cat extends Animal {
  speak(){
    return this.name + ' meows.';
  }
}


// Solution 6
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

class Cat extends Animal {
    constructor(name) {
      super(name)
    }
    
    speak() {
      return `${this.name} meows.`
    }
}


// Solution 7
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        super.speak();
        return `${this.name} meows.`;
  }
}


// Solution 8
class Cat extends Animal {
  constructor(name) {
    super();
    this.speak = () => `${name} meows.`;
  }
}


// Solution 10
class Cat extends Animal {
  speak() {
    return this.name + ' ' + 'meows.'
  }
}


// Solution 11
class Cat extends Animal {
  speak() {
    console.log(this);
    return `${this.name} meows.`;
  }
}


// Solution 12
class Cat extends Animal {
  constructor (cat){
    super()
    this.cat = cat
  }
  speak(){
    return `${this.cat} meows.`
  }
}


// Solution 13
class Cat extends Animal {
  Cat(name){
    this.name = name
  }
  speak(){
    return `${this.name} meows.`
  }
}


// Solution 14
class Cat extends Animal {
  counstructor (name) {
    this.name = name;
  }
  speak () {
    return `${this.name} meows.`;
  }
}