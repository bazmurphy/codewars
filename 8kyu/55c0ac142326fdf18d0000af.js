// Playing with cubes II

// You already implemented a Cube class, but now we need your help again! I'm talking about constructors. We don't have one. Let's code two: One taking an integer and one handling no given arguments!

// Also we got a problem with negative values. Correct the code so negative values will be switched to positive ones!

// The constructor taking no arguments should assign 0 to Cube's Side property.

// This Cube class needs help

// Implement the constructor so that it can take an integer for the side or no args

class Cube {
  constructor(side = 0) {
    this.side = Math.abs(side);
  }

  getSide() {
    return this.side; 
  }

  setSide(n) {
    this.side = Math.abs(n);
  }
}

let cube = new Cube(12);
console.log(cube.getSide())
// 12
cube.setSide(42);
console.log(cube.getSide())
// 42


// Solution 1
class Cube {
  constructor(side) {
    this.setSide(side)
  }

  getSide() {
    return this.side
  }
  
  setSide(side = 0) {
    this.side = Math.abs(side)
  }
}


// Solution 2
class Cube {
  constructor(side = 0) { this.side = side; }
  getSide() { return Math.abs(this.side); }
  setSide(side) { this.side = side; }
};


// Solution 3
class Cube {
  constructor(n = 0){
    this.setSide(n)
  }
  
  setSide(n) {
    if (isNaN(n) === true) { }
    this.side = Math.abs(n);
  };
  
  getSide() { 
    return this.side; 
  };
};


// Solution 4
class Cube {
  constructor(side=0){this.side = side;}
  getSide(n){return Math.abs(this.side)};
  setSide(n){this.side=n};
};


// Solution 5
var Cube = function (n) {
  this.side = Number.isInteger(n) ? Math.abs(n) : 0;
  this.getSide = () => this.side;
  this.setSide = function(n) {
     if (Number.isInteger(n)) {
        this.side = Math.abs(n);
     }
  };
};


// Solution 6
class Cube {
  constructor(n = 0) {
    this.setSide(n);
  }
  getSide() {
    return this.side;
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}


// Solution 7
class Cube {
  constructor(side = 0){
    this.side = side;
  }
  getSide() {
    return this.side; 
  };
  
  set side(n){
  this._side = n;
  }
  get side(){
    return  Math.abs(this._side);
  }
  setSide(n) {
    console.log(n);
    this.side = Math.abs(n);
  }
}


// Solution 8
class Cube {
  constructor(side = 0, n) {
    console.log(side,n)
this.n = n;
this.side = Math.abs(side);
}
  
  getSide() {
    return this.side; 
  }
  setSide(n) {
  this.side = Math.abs(n);
  }
}


// Solution 9
class Cube { 
  constructor(side){
    this.setSide(side);
  }
  
  getSide(){
    `Return the side of the Cube.`
    return this.side;
  }
  
  setSide(side = 0){
    `Set the value of the Cube's side.`
    this.side = Math.abs(side);
  }
}


// Solution 10
class Cube {
  constructor(side){
    this.setSide(side != null ? side : 0);
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}


// Solution 11
class Cube {
  
  constructor(x) {
    if (x === undefined) {
      x = 0;
    }
    this.setSide(x);
  }
    
  getSide() {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}


// Solution 12
class Cube {
  constructor(n=0) {
    this.setSide(n)
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    if(typeof n !== "number") return "only numbers allowed"
    this.side = Math.abs(n);
  }
}


// Solution 13
class Cube {
  constructor(side) {
    this.side= Math.abs(side)||0
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {
    return this.side = Math.abs(n);
  }
}


// Solution 14
class Cube {
  constructor(side = 0) {
    this.side = Math.abs(side);
  }
  getSide() {
    return this.side; 
  }
  setSide(n) {    
    return this.side = Math.abs(n);    
  }
}