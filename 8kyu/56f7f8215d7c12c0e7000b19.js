// Fun with ES6 Classes #1 - People, people, people

// Time for some OOP fun!

// Define a class Person with the following properties:

//     A constructor that accepts 4 arguments: firstName/FirstName (defaults to "John" if not set), lastName/LastName (defaults to "Doe" if not set), age/Age (defaults to 0 if not set) and gender/Gender (defaults to "Male" if not set). These should be stored in this.firstName/this.FirstName, this.lastName/this.LastName, this.age/this.Age and this.gender/this.Gender respectively.
//     A method sayFullName/SayFullName that accepts no arguments and returns the full name (e.g. "John Doe")
//     A class/static method greetExtraTerrestrials/GreetExtraTerrestrials that accepts one parameter raceName and returns "Welcome to Planet Earth raceName". For example, if the race name is "Martians", it should say "Welcome to Planet Earth Martians"

// You may use any valid syntax you like; however, it is highly recommended that you complete this Kata using ES6 syntax and features.

// Have fun! :D


class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  sayFullName() {
      return `${this.firstName} ${this.lastName}`
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }
}

console.log(new Person().firstName); 
// "John"
console.log(new Person().lastName); 
// "Doe"
console.log(new Person().age); 
// 0
console.log(new Person().gender); 
// "Male"
console.log(new Person().sayFullName()); 
// "John Doe"
console.log(new Person("Jane", "Doe", 25, "Female").firstName);
// "Jane"
console.log(new Person("Jane", "Doe", 25, "Female").lastName);
// "Doe"
console.log(new Person("Jane", "Doe", 25, "Female").age);
// 25
console.log(new Person("Jane", "Doe", 25, "Female").gender);
// "Female"
console.log(new Person("Jane", "Doe", 25, "Female").sayFullName());
// "Jane Doe"


// Solution 1
class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    Object.assign(this, { firstName, lastName, age, gender });
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}


// Solution 2
class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }
}


// Solution 3
class Person {
  constructor (firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  };
  
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  };
}


Person.greetExtraTerrestrials = raceName => {
  return `Welcome to Planet Earth ${raceName}`;
}; 


// Solution 4
class Person {
  constructor(firstName,lastName,age,gender){
    this.firstName = firstName || "John";
    this.lastName = lastName || "Doe";
    this.age = age || 0;
    this.gender = gender || "Male";
  }
  sayFullName(){
    return `${ this.firstName } ${ this.lastName }`;
  }
  static greetExtraTerrestrials(raceName){
    return `Welcome to Planet Earth ${ raceName }`;
  }
}


// Solution 5
class Person {
  constructor(firstName = "John", lastName='Doe', age=0, gender='Male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age=age;
    this.gender=gender;
    this.sayFullName=function(){return firstName+' '+lastName;}
  }
  static greetExtraTerrestrials(raceName){return "Welcome to Planet Earth "+raceName;}   
}


// Solution 6
class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }
  
  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }  
}

Person.greetExtraTerrestrials = raceName => `Welcome to Planet Earth ${raceName}`;


// Solution 7
class Person {
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`;
  }

  constructor(firstName = `John`, lastName = `Doe`, age = 0, gender = `Male`) {
    Object.assign(this, {firstName, lastName, age, gender});
  }

  sayFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}


// Solution 8
class Person {
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male'){
      this.firstName = firstName,
      this.lastName = lastName,
      this.age = age,
      this.gender = gender
  };
  sayFullName(){
    return this.firstName + ' ' + this.lastName;
  };
  static greetExtraTerrestrials(name){
    return 'Welcome to Planet Earth ' + name;
  }
}


// Solution 9
class Person {
  // Get coding in ES6 :D
//   Constructor with initial values
  constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
//   Assign/copy the enumerate own properties to the target object from source object, and returns the target object 
    Object.assign(this, {
    firstName,
    lastName,
    age,
    gender
  })
  }
//   Name display method
  sayFullName() {
  return `${this.firstName} ${this.lastName}`;
   }
//  And the static method which accepts raceName parameters and displays it in the sentence
   static greetExtraTerrestrials(raceName) {
   return `Welcome to Planet Earth ${raceName}`;
   }
}


// Solution 10
class Person {
  constructor(a='John',b='Doe',c=0,d='Male'){
      this.firstName = a;
      this.lastName = b;
      this.age = c;
      this.gender = d;
  }
  sayFullName(){return `${this.firstName} ${this.lastName}`;}
  static greetExtraTerrestrials(x){return `Welcome to Planet Earth ${x}`;}
}


// Solution 11
class Person {
  constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male"){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
  this.sayFullName = function(){
  return this.firstName + " " + this.lastName;
  }
  }
  static greetExtraTerrestrials(raceName){
  return "Welcome to Planet Earth " + raceName;
  }
  
}


// Solution 12
class Person {
  static greetExtraTerrestrials(raceName) {
    return `Welcome to Planet Earth ${raceName}`
  }

  constructor(firstName='John', lastName='Doe', age=0, gender='Male'){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
  }
  
  sayFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}


// Solution 13
class Person {
  // Get coding in ES6 :D
  constructor(firstName  = "John", lastName = "Doe", age  =0, gender = "Male"){
  this.firstName = firstName,
  this.lastName = lastName,
  this.age = age,
  this.gender = gender;
  }
  sayFullName (){
  return `${this.firstName} ${this.lastName}`;
  }
  static greetExtraTerrestrials (raceName = "raceName") {
  return `Welcome to Planet Earth ${raceName}`;
  }
}


// Solution 14
class Person {
  constructor(firstName, lastName, age, gender){
    this.firstName = firstName || "John"
    this.lastName = lastName || "Doe"
    this.age = age || 0
    this.gender = gender || "Male"
  }
   sayFullName(){
     const fullName = this.firstName +' '+ this.lastName
     return fullName
  }
   static greetExtraTerrestrials(raceName){
    return "Welcome to Planet Earth " + raceName
  }
  
}