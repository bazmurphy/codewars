// Fizz Buzz - Without ifs

// I know that there are quite a few fizz - buzz problems already out there but this one does have a twist(you may find this useful)

// Task

// You need to implement a function that applies the standard fizz buzz test:

// If a number is divisible by 3, return Fizz
// If it is divisible by 5, return Buzz
// If it is divisible by both 3 and 5, return FizzBuzz
// If it is not divisible by 3 or 5, return the number itself

// However, when making the function, you cannot use if (meaning else is also not an option).

// Input

// A number will always be provided
// The number provided will always be positive and an integer

// Examples

// 6 should return Fizz
// 10 should return Buzz
// 15 should return FizzBuzz
// 17 should return 17

// const fizzBuzz = n => {
//     return n % 3 === 0 && n % 5 === 0 ? 
//         "FizzBuzz" : n % 3 === 0 ? 
//             "Fizz" : n % 5 === 0 ? 
//                 "Buzz" : n;
// };

const fizzBuzz = n => n % 3 === 0 && n % 5 === 0 ? "FizzBuzz" : n % 3 === 0 ? "Fizz" : n % 5 === 0 ? "Buzz" : n;

console.log(fizzBuzz(1));
// 1
console.log(fizzBuzz(3));
// "Fizz"
console.log(fizzBuzz(6));
// "Fizz"
console.log(fizzBuzz(7));
// 7
console.log(fizzBuzz(10));
// "Buzz"
console.log(fizzBuzz(30));
// "FizzBuzz"


// Solution 1
const fizzBuzz = n => {
    return (n % 15 === 0 && "FizzBuzz") ||
        (n % 3 === 0 && "Fizz") ||
        (n % 5 == 0 && "Buzz") ||
        n
}


// Solution 2
const fizzBuzz = n => n % 15 ? n % 5 ? n % 3 ? n : "Fizz" : "Buzz" : "FizzBuzz";


// Solution 3
const fizzBuzz = (n) => ['FizzBuzz', n, n, 'Fizz', n, 'Buzz', 'Fizz', n, n, 'Fizz', 'Buzz', n, 'Fizz', n, n][n % 15];


// Solution 4
const fizzBuzz = n => {
    return ((n % 3) ? '' : 'Fizz') + ((n % 5) ? '' : 'Buzz') || n;
};


// Solution 5
const fizzBuzz = n => ((n % 3 ? "" : "Fizz") + (n % 5 ? "" : "Buzz")) || n;


// Solution 6
const fizzBuzz = n => n % 3 == 0 && n % 5 == 0 ? "FizzBuzz" : n % 3 == 0 ? "Fizz" : n % 5 == 0 ? "Buzz" : n;


// Solution 7
const fizzBuzz = n => {
    var x = '';
    n % 3 || (x += 'Fizz');
    n % 5 || (x += 'Buzz');
    return x || n;
};


// Solution 8
const fizzBuzz = n =>
    !(n % 15) && `FizzBuzz` || !(n % 3) && `Fizz` || !(n % 5) && `Buzz` || n;


// Solution 9
fizzBuzz = n => n % 3 == 0 && n % 5 == 0 ? 'FizzBuzz'
    : n % 3 != 0 && n % 5 != 0 ? n
        : n % 5 == 0 ? 'Buzz'
            : 'Fizz'


// Solution 10
let fizzBuzz = n => {
    return n % 3 == 0 && n % 5 == 0 ? 'FizzBuzz'
        : n % 3 != 0 && n % 5 != 0 ? n
            : n % 5 == 0 ? 'Buzz'
                : 'Fizz'
}


// Solution 11
fizzBuzz = n => !(n % 3) && !(n % 5) ? 'FizzBuzz' : !(n % 3) ? 'Fizz' : !(n % 5) ? 'Buzz' : n


// Solution 12
const fizzBuzz = n => n == 1 ? 1 : !(n % 3) && !(n % 5) ? 'FizzBuzz' : !(n % 3) ? 'Fizz' : !(n % 5) ? 'Buzz' : n