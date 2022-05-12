// Hello, Name or World!

// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"

function hello(name) {
    return name 
        ? `Hello, ${name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase()}!` 
        : `Hello, World!`;
}


console.log(hello('alice'));
// 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'"
console.log(hello());
// 'Hello, World!', "returns 'Hello, World!' when name is not given"
console.log(hello(''));
// 'Hello, World!', "returns 'Hello, World!' when name is an empty string"


// Solution 1
const hello = s =>
    `Hello, ${s ? (s[0].toUpperCase() + s.slice(1).toLowerCase()) : 'World'}!`;


// Solution 2
function hello(name) {
    if (name) {
        return "Hello, " + name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase() + '!';
    } else {
        return "Hello, World!";
    }
}


// Solution 3
function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}


// Solution 4
function hello(name) {
    return (name === '' || name === undefined) ? 'Hello, World!' : `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().substr(1)}!`;
}


// Solution 5
Object.defineProperty(String.prototype, 'capitalize', {
    enumerable: false,
    configurable: false,
    writeable: false,
    value: function () {
        return this.slice(0, 1).toUpperCase() + this.slice(1).toLowerCase();
    }
});

function hello(name) {
    return 'Hello, ' + (!name ? 'world' : name).capitalize() + '!';
}


// Solution 6
const hello = name =>
    `Hello, ${name ? name.toLowerCase().replace(/^\w/, val => val.toUpperCase()) : `World`}!`;


// Solution 7
function hello(name) {
    if (name) {
        return 'Hello, ' + name[0].toUpperCase() + name.substring(1, name.length).toLowerCase() + '!';
    } else {
        return 'Hello, World!'
    }
}


// Solution 8
function hello(name) {
    return name ? 'Hello, ' + name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase() + '!' : 'Hello, World!';
}


// Solution 9
function hello(name) {
    if (typeof name === 'undefined' || name.length <= 0) {
        name = 'World'
    } else {
        const head = name.toLowerCase()[0].toUpperCase()
        const tail = name.toLowerCase().slice(1, name.length)

        name = `${head}${tail}`
    }

    return `Hello, ${name}!`;
}


// Solution 10
function hello(name = 'World') {
    let n = name.trim() === '' ? 'World' : name.toLowerCase().replace(/(^.)/, x => x.toUpperCase())
    return `Hello, ${n}!`
}


// Solution 11
function hello(name) {
    return `Hello, ${capitalize(name || 'World')}!`;
}

function capitalize(str) {
    if (typeof str !== 'string') throw 'Input must be a string';

    const first = str[0];
    const rest = str.slice(1);

    return first.toUpperCase() + rest.toLowerCase();
}


// Solution 12
hello = n => `Hello, ${(n = (n = n > '' ? n : 'world').toLowerCase()).charAt(0).toUpperCase() + n.slice(1)}!`