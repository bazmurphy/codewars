// Classic Hello World

// You are given a method called main, make it print the line Hello World!, (yes, that includes a new line character at the end) and don't return anything

// Note that for some languages, the function main is the entry point of the program.

// Here's how it will be tested:

// Solution.main("parameter1","parameter2");

// Hints:

// Check your references
// Think about the scope of your method
// For prolog you can use write but there are better ways
// If you still don't get it probably you can define main as an attribute of the Solution class that accepts a single argument, and that only prints "Hello World!" without any return.


// Print "Hello World!" to the screen
class Solution {
    static main() {
        console.log('Hello World!')
    }

    // The static keyword defines a static method or property for a class, or a class static initialization block.
    // Neither static methods nor static properties can be called on instances of the class.
    // Instead, they're called on the class itself.

}

Solution.main()
// 'Hello World!'


// Solution 1
class Solution {
    static main() {
        console.log("Hello World!");
    }
}


// Solution 2
Solution = {};
Solution.main = () => { console.log('Hello World!'); };


// Solution 3
let Solution = { main() { console.log("Hello World!"); } };


// Solution 4
class Solution {
    static main(a, b) {
        console.log("Hello World!");
    }
}


// Solution 5
class Solution {
    static main() {
        console.log('Hello World!')
    }
}


// Solution 6
class Solution {
}

Solution.main = function () {
    console.log("Hello World!");
}


// Solution 7
Solution = { main() { } }
logRecord.indexOf = _ => 0


// Solution 8
function Polution() {

}

Polution.prototype.main = function () {
    console.log('Hello World!');
}

var Solution = new Polution();


// Solution 9
Solution = { main: function () { logRecord = ["Hello World!"] } }


// Solution 10
class Sol {
    main() {
        console.log('Hello World!');
    }
}
var Solution = new Sol;


// Solution 11
class s {
    main() {
        console.log("Hello World!");
    }
}
let Solution = new s();


// Solution 12
class Solution { };
Solution.main = () => console.log('Hello World!');