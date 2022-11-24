// Shifty Closures

// Functional closures can get overly attached. Set them straight!

// Why doesn't greet_abe() actually greet Abe?

var greet_abe = function() {
  return "Hello, " + name + '!';
};

var greet_ben = function() {
  return "Hello, " + name + '!';
};
name = 'Ben';

console.log(greet_abe());
// 'Hello, Abe!'
console.log(greet_ben());
// 'Hello, Ben!'


// Solution 1
var name;
function greet_abe() {
  name = 'Abe';
  return "Hello, " + name + '!';
};


function greet_ben() {
  name = 'Ben'; 
  return "Hello, " + name + '!';
};


// Solution 2
var greet_abe = greet('Abe');
var greet_ben = greet('Ben');

function greet(name) {
  return function() {
    return "Hello, " + name + '!';
  };
}


// Solution 3
const greet_abe = () => 'Hello, Abe!';
const greet_ben = () => 'Hello, Ben!';


// Solution 4
function create_greeter(name) {
  return function() {
    return "Hello, " + name + "!";
  }
}

var name = 'Abe';
var greet_abe = create_greeter(name);
name = 'Ben';
var greet_ben = create_greeter(name);


// Solution 5
var name = 'Abe';
var greet_abe = (function(name) {
  return function () {
    console.log(name);
    return "Hello, " + name + '!';
  };
})(name);
name = 'Ben';
var greet_ben = (function(name) {
  return function () {
    console.log(name);
    return "Hello, " + name + '!';
  };
})(name);


// Solution 6
const arr = ['Abe', 'Ben']

const greet_abe = function() {
  return "Hello, " + arr[0] + '!';
};

const greet_ben = function() {
  return "Hello, " + arr[1] + '!';
};


// Solution 7
const greet = name =>
  () => `Hello, ${name}!`;
const greet_abe = greet(`Abe`);
const greet_ben = greet(`Ben`);


// Solution 8
closures=(name)=> "Hello, " + name + '!';
const greet_abe =()=>closures("Abe")
const greet_ben =()=>closures("Ben")


// Solution 9
var greet_name = function(name) {
  return function() {
    return "Hello, " + name + '!';
  }
}
var greet_abe = greet_name('Abe');
var greet_ben = greet_name('Ben');


// Solution 10
var greet_abe = function(name) {
  return "Hello, Abe!";
};

var greet_ben = function(name) {
  return "Hello, Ben!";
};


// Solution 11
const greet = name => `Hello, ${name}!`;

const greet_abe = _ => (name => greet(name))("Abe");

const greet_ben = _ => (name => greet(name))("Ben");


// Solution 12
name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
name2 = 'Ben';
var greet_ben = function() {
  return "Hello, " + name2 + '!';
};


// Solution 13
var greet_abe = function() {
  this.name = 'Abe';
    return "Hello, " + name + '!';
  };
  
  var greet_ben = function() {
  name = 'Ben';
    return "Hello, " + name + '!';
  };


// Solution 14
var greet_abe = function() {
  var name = 'Abe';
  return "Hello, " + name + '!';
};
var greet_ben = function() {
  var name = 'Ben';
  return "Hello, " + name + '!';
};