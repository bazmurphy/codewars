// SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes
// Objective

// Preloaded for you is a class Dog:

// class Dog {
//   constructor(name, age, gender, species, size, master, loyal) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = species;
//     this.legs = 4;
//     this.size = size;
//     this.master = master;
//     this.loyal = loyal;
//   }
// }

// You are then given a working class Labrador as your initial code.

// class Labrador {
//   constructor(name, age, gender, master) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.species = "Labrador";
//     this.legs = 4;
//     this.size = "Large";
//     this.master = master;
//     this.loyal = true;
//   }
// }

// Shorten it so that it meets the strict character count requirements for this Kata.

// Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D

// from this:
class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}


// to this:
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}


// Solution 1
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}


// Solution 2
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", 'Large', master, true)
  }
}


// Solution 3
class Labrador extends Dog {
  constructor(name, age, gender, master) {
    super(name, age, gender, `Labrador`, `Large`, master, true);
  }
}


// Solution 4
class Labrador {
  constructor(n, a, g, m) {
    this.name = n, this.age = a, this.gender=g, this.species="Labrador",
    this.legs = 4, this.size = "Large", this.master = m, this.loyal = true;
  }
}


// Solution 5
class Labrador extends Dog {
  constructor(name, age, gender, master, legs = 4) {
    super(name, age, gender, 'Labrador', 'Large', master, true);
  }
}


// Solution 6
class Labrador{
  constructor(name, age, gender, master) {
    Object.assign(this, {name,age,gender});
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}


// Solution 7
class Labrador extends Dog{
  constructor(name, age, gender, master) {
    super(...arguments);        
    this.species = "Labrador";    
    this.size = "Large";    
    this.loyal = true;
    this.master = master
  }
}


// Solution 9
function Labrador(n, a, g, m) {
  return new Dog(n, a, g, "Labrador", "Large", m, !0);
}


// Solution 10
class Labrador {
  constructor(name, age, gender, master) {
    let t=this;
    t.name=name;
    t.age=age;
    t.gender=gender;
    t.species="Labrador";
    t.legs=4;
    t.size="Large";
    t.master=master;
    t.loyal=true;
  }
}


// Solution 11
class Labrador {
  constructor(name, age, gender, master) {
    Object.assign(this, new Dog(name, age, gender, "Labrador", "Large", master, true))
  }
}


// Solution 12
class Labrador extends Dog{
  constructor(n, a, g, m) {
    super(n, a, g, "Labrador", "Large", m, !0 )
  }
}


// Solution 13
class Labrador extends Dog {constructor(a, b, c, m) {super(a,b,c,"Labrador","Large",m,!0)}}
