// Hello Happy Codevarrior!

// VVhat ?!?

// None of zese codevarriors seemz to remember hiz ovvn name !

// Kould you help ?

// var albert = new Warrior("Al")
// var boris  = new Warrior("Boris")

// albert.toString() --> "Hi! my name's Boris" <-- ohoh..

function Warrior(n){
  let name = n;  
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}

let albert = new Warrior("Albert");
let boris  = new Warrior("Boris");

console.log(albert.toString());
// "Hi! my name's Albert"
console.log(albert.name());
// "Albert"
console.log(boris.name());
// "Boris"

boris.name("Bobo");
console.log(boris.name());
// "Bobo"


// Solution 1
function Warrior(n){
  var name = n;
  this.name = function(n){
    if( n ) name=n;
    return name;
  }  
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}


// Solution 2
function Warrior(n){
  this.n = n;
}

Warrior.prototype.name = function(n){
  if (n) this.n = n;
  return this.n;
}

Warrior.prototype.toString = function(){
  return "Hi! my name's " + this.n;
}


// Solution 3
class Warrior {
  constructor(n) {
    this.n = n;
  }

  name(name) {
    this.n = name || this.n;
    return this.n;
  }

  toString() {
    return `Hi! my name's ${this.name()}`;
  }
}


// Solution 4
function Warrior(n){
  let name = n;  
  this.name = function(n){
    if( n ) name=n;
    return name;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}


// Solution 5
function Warrior(n){
  this.n = n;  
  this.name = function(n){
    if (n) { this.n=n; }
    return this.n;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}


// Solution 6
function Warrior(name){
  this.warriorName = name;

  this.name = function(name){
    if(name) {
      this.warriorName = name;
    }

    return this.warriorName;
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}


// Solution 7
function Warrior(name){
  this.name = function(n){
    return (n ? name = n : name);
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}


// Solution 8
function Warrior(n){
  this.storeName = n;
  this.name = function(x) {
    if(x != undefined) this.storeName = x;
    return this.storeName;
  }
  this.toString = function(){
    return "Hi! my name's " + this.name();
  }
}


// Solution 9
function Warrior(n) {
  let name = n;
  this.name = function(n) {
    if(n) {
      return name = n;
    } 
    return name;
  }
}
  
Warrior.prototype.toString = function() {
  return "Hi! my name's "+ this.name();
}


// Solution 10
class Warrior{
  constructor(n){
    this.n = n;
  }
  name(n = this.n){
    return this.n = n
  }
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's " + this.name();
}


// Solution 11
function Warrior(n){ 
  this.n = n;
}
Warrior.prototype.name = function(newName){
    return newName ? this.n = newName : this.n;
}
Warrior.prototype.toString = function(){
    return "Hi! my name's " + this.name();
}


// Solution 12
var Warrior=Object.assign(function Warrior(name){
  this._name=name;
},{prototype:{
  name(name){
    return this._name=name||this._name;
  },

  toString(){
      return "Hi! my name's "+this._name;
  }
}})


// Solution 13
function Warrior(n){
  this.myname = n;  
  this.name = function(nn){
    if( nn != undefined) this.myname = nn;
    return this.myname;
  }
}
  
Warrior.prototype.toString = function(){
    return `Hi! my name's ${this.name()}`;
}


// Solution 14
function Warrior(n){
  this.nume = n;
}

Warrior.prototype.name = function(n){
  if(n) this.nume = n;
  return this.nume;
}
  
Warrior.prototype.toString = function(){
    return "Hi! my name's "+this.name();
}