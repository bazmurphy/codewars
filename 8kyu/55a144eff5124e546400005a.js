// Classy Classes

// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task

// Your task is to complete this Class, the Person class has been created.
// You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method / Info getter which should return johns age is 34

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.info = `${this.name}s age is ${this.age}`;
    }
}

let john = new Person('john', 34)
console.log(john.info)
// johns age is 34


// Solution 1
class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info() {
        return `${this.name}s age is ${this.age}`;
    }

}


// Solution 2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info() {
        return this.getInfo();
    }

    getInfo() {
        return `${this.name}s age is ${this.age}`;
    }
}


// Solution 3
class Person {
    constructor(name, age) {
        this.info = `${name}s age is ${age}`;
    }
}


// Solution 4
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info() {
        return this.name + "s age is " + this.age
    }
}


// Solution 5
class Person {
    constructor(name, age) {
        this.info = name + 's age is ' + age;
    }
}


// Solution 6
class Person {
    constructor(name, age) {
        this.info = name + 's age is ' + age;
    }

    getInfo() {
        return;
    }
}


// Solution 7
class Person {
    constructor(n, a) {
        this.info = `${n}s age is ${a}`;
    }
}


// Solution 8
class Person {
    constructor(name, num) {
        this.name = name;
        this.num = num;
        this.info = `${this.name}s age is ${this.num}`;
    }
}


// Solution 9
class Person {
    constructor(firstName, age) {
        this.firstName = firstName;
        this.age = age;
        this.info = firstName + 's age is ' + age;
    }
}


// Solution 10
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }

    get info() {
        return this.name + "s age is " + this.age;
    }
}


// Solution 11
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get info() {
        return this.getInfo();
    }

    getInfo() {
        return this.name + 's age is ' + this.age;
    }
}


// Solution 12
class Person {
    constructor(info, age) {
        this.info = info + 's age is ' + age;
    }
}