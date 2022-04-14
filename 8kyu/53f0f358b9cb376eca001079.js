// Regular Ball Super Ball

// Create a class Ball. Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"


var Ball = function(ballType) {
    
    return ballType === undefined ? this.ballType = 'regular' : this.ballType = ballType;

    // if (ballType === undefined) {
    //     this.ballType = 'regular';
    // } else {
    //     this.ballType = ballType;
    // }
};

ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType)     
// "regular"
console.log(ball2.ballType)
// "super"



// Solution 1
var Ball = function(ballType) {
    this.ballType = ballType || 'regular';
};


// Solution 2
class Ball {
    constructor(ballType = "regular") {
      this.ballType = ballType;
    }
}


// Solution 3
var Ball = function(ballType) {
    this.ballType = typeof ballType !== 'undefined' ? ballType : 'regular';
};



// Solution 4
var Ball = function(ballType = "regular") {
    this.ballType = ballType;
};


// Solution 5
var Ball = function(ballType) {
    this.ballType = ballType ? ballType : "regular";
};


// Solution 6
var Ball = function(ballType) {
    if (!ballType){
      this.ballType = 'regular';
    }
    else {
      this.ballType= 'super';
    }
};


// Solution 7
class Ball {
    constructor (type = `regular`) {
      this._type = type;
    }
    
    get ballType() {
      return this._type;
    }
}


// Solution 8
var Ball = function(type='regular') {
    this.ballType = type;
};


// Solution 10
class Ball {
    constructor(type = 'regular') {
      this.ballType = type;
    }
}


// Solution 11
var Ball = function(ballType) {
    this.ballType = ballType === 'super' ? 'super' : 'regular';
};