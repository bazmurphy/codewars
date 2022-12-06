// Lexical this

// Complete the Person object, by completing the FillFriends function to fill the _friends Array for the person object.

// Output
// Return the person object with the Name, Friends and FillFriends function filled out which will fill the input into the Friends property.

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      for (let item of f) {
        this._friends.push(item) 
      }
    }
  }
  return person;
}

var person = Person();
person.fillFriends(["bob", "john"]);
console.log(person._friends);


// Solution 1
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f){
      this._friends.push(...f);
    }
  }
  return person;
}


// Solution 2
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { this._friends = f; }
  }
  return person;
}


// Solution 3
var Person = () => ({
  _name: "Leroy",
  _friends: [],
  fillFriends(f) {
    this._friends = f;
  }
});


// Solution 4
var Person = function(){
  return  {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { f.forEach(s => this._friends.push(s)); }
  };
}


// Solution 5
const Person = () =>
  ({
    _name: 'Leroy',
    _friends: [],
    fillFriends (f) {
      this._friends.push(...f);
    }
  });


// Solution 6
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { person._friends = f}
  }
  return person;
}


// Solution 7
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends : (ff) => person._friends = ff.slice(0)
  }
  return person;
}


// Solution 8
const Person = function(){
  const person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      f.forEach(el => this._friends.push(el));
    }
  }
  return person;
}


// Solution 9
const Person = function(){
  let person = {
    _name: "Leroy",
    _friends: [],
    fillFriends( _ ) { 
      this._friends.push( ..._ )
    }
  }
  return person;
}


// Solution 10
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
    this._friends = this._friends.concat(f);
    }
  }
  return person;
}


// Solution 11
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) { f.map( (f) => this._friends.push(f)); }
  }
  return person;
}


// Solution 12
var Person = function(){
  var person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      f.forEach(fr=>person._friends.push(fr))
    }
  }
  
  return person;
}


// Solution 13
function Person() {
  const person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {this._friends = f}
  }
  return person;
}


// Solution 14
const Person = function() {
  const person = {
    _name: "Leroy",
    _friends: [],
    fillFriends(f) {
      f.forEach(friend => this._friends.push(friend));
    }
  };
  return person;
}