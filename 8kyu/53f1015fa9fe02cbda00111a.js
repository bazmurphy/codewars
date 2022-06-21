// Color Ghost

// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

var Ghost = function () {

    let colors = ['white', 'yellow', 'purple', 'red']

    this.color = colors[Math.floor(Math.random() * 4)];
};

var ghost = new Ghost()
console.log(ghost)


// Solution 1
var Ghost = function () {
    this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)];
};


// Solution 2
var Ghost = function () {
    var colors = ["white", "yellow", "purple", "red"];
    var colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex];
};


// Solution 3
var Ghost = function () {

    var colors = ["white", "yellow", "purple", "red"]
    var randomNum = Math.floor(Math.random() * 4)
    this.color = colors[randomNum]

};


// Solution 4
var Ghost = function () {
    var colors = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
};


// Solution 5
class Ghost {
    constructor() {
        this.color = [`red`, `yellow`, `purple`, `white`][Math.random() * 4 ^ 0];
    }
}


// Solution 6
var Ghost = function () {
    var a = ['white', 'yellow', 'purple', 'red'];
    this.color = a[Math.floor(Math.random() * a.length)];
};


// Solution 7
var Ghost = function () {
    this.color = ["white", "yellow", "purple", "red"][~~(Math.random() * 4)];
};


// Solution 8
class Ghost {
    constructor() {
        this.colors = ["white", "yellow", "purple", "red"]
    }
    get color() {
        return this.colors[Math.floor(Math.random() * this.colors.length)]
    }
};


// Solution 9
var Ghost = function () {
    colorArray = ["white", "yellow", "purple", "red"]
    var rand = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.color = rand;
};


// Solution 10
function Ghost() {
    this.color = ['white', 'yellow', 'purple', 'red'][Math.random() * 4 | 0];
}


// Solution 11
var Ghost = function () {
    this.color = ['white', 'yellow', 'purple', 'red'][~~(4 * Math.random())]
};


// Solution 12
function Ghost() {
    return {
        color: ["white", "yellow", "purple", "red"][Math.floor((Math.random() * 4))]
    }
}