// "this" is a problem 

// We want to create a constructor function 'NameMe', which takes first name and last name as parameters.The function combines the first and last names and saves the value in "name" property.

// We already implemented that function, but when we actually run the code, the "name" property is accessible, but the "firstName" and "lastName" is not accessible.All the properties should be accessible.Can you find what's wrong with it? A test fixture is also available

// function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return { name: this.firstName + ' ' + this.lastName };
// }

// var n = new NameMe('John', 'Doe');
// n.firstName //Expected: John
// n.lastName //Expected: Doe
// n.name //Expected: John Doe


function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}

let n = new NameMe('John', 'Doe');

console.log(n.firstName)
//Expected: John
console.log(n.lastName)
//Expected: Doe
console.log(n.name)
//Expected: John Doe


// Solution 1
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = first + ' ' + last;
}


// Solution 2
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
}


// Solution 3
function NameMe(first, last) {
    return {
        firstName: first,
        lastName: last,
        name: first + ' ' + last
    }
}


// Solution 4
function NameMe(first, last) {
    this.firstName = first
    this.lastName = last
}

NameMe.prototype = {
    get name() {
        return this.firstName + " " + this.lastName
    }
}


// Solution 5
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
    return this;
}


// Solution 6
function NameMe(first, last) {

    return { name: first + ' ' + last, firstName: first, lastName: last };
}


// Solution 7
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        name: this.firstName + ' ' + this.lastName
    };
}


// Solution 8
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    return {
        name: this.firstName + ' ' + this.lastName,
        firstName: this.firstName,
        lastName: this.lastName
    };
}


// Solution 9
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = `${first} ${last}`
}


// Solution 10
function NameMe(first, last) {
    var self = this instanceof NameMe ? this : Object.create(NameMe.prototype);
    self.firstName = first;
    self.lastName = last;
    self.name = self.firstName + ' ' + self.lastName;
    return self;
}


// Solution 11
function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    Object.defineProperty(this, 'name', {
        enumerable: true,
        get: function () { return this.firstName + ' ' + this.lastName; }
    });
}


// Solution 12
function NameMe(first, last) {
    Object.assign(this, { firstName: first, lastName: last, name: first + ' ' + last });
}