// Sleigh Authentication

// Christmas is coming and many people dreamed of having a ride with Santa's sleigh. 
// But, of course, only Santa himself is allowed to use this wonderful transportation. 
// And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

// Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password.
// If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!"(yes, even Santa has a secret password with uppercase and lowercase letters and special characters:D), the return value must be true.
// Otherwise it should return false.

// Examples:

var sleigh = new Sleigh();
sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;)


function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    
    // if (name === 'Santa Claus' && password === 'Ho Ho Ho!') {
    //     return true;
    // } else {
    //     return false;
    // }

    return name === 'Santa Claus' && password === 'Ho Ho Ho!';
};


// Solution 2
function Sleigh() {
    this.name = "Santa Claus";
    this.password = "Ho Ho Ho!";
}

Sleigh.prototype.authenticate = function (name, password) {
    return this.name == name && this.password == password;
};


// Solution 3
function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    return name == "Santa Claus" && password == "Ho Ho Ho!";
};


// Solution 4
function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    return name === 'Santa Claus' && password === 'Ho Ho Ho!';
};


// Solution 5
function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    return (name === "Santa Claus" && password === "Ho Ho Ho!") ? true : false;
};


// Solution 6
const crypto = require('crypto');

function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    hmac = crypto.createHmac('sha256', 'secret');
    hmac.update(name + password + 'sleighsalt');
    if (hmac.digest('hex') == "940a195407452c1b760f2a45fb92490b23bd046fa07d0d5de6120b224ffdd586") {
        return true;
    } else {
        return false;
    }
};


// Solution 7
function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    if (name === "Santa Claus" && password === "Ho Ho Ho!") return true;
    else return false;
};


// Solution 8
class Sleigh {
    constructor() {
        this.obj = { 'Santa Claus': `Ho Ho Ho!` };
    }

    authenticate(name, password) {
        return this.obj[name] === password;
    }
}


// Solution 9
class Sleigh {
    authenticate(name, password) {
        return name == "Santa Claus" && password == "Ho Ho Ho!";
    }
}


// Solution 10
function Sleigh() { }

Sleigh.prototype.authenticate = (n, p) => n == "Santa Claus" && p == "Ho Ho Ho!";


// Solution 11
function Sleigh() { }

Sleigh.prototype.authenticate = (name, password) => {
    const key = {
        'Santa Claus': 'Ho Ho Ho!'
    }

    return key[name] === password
};


// Solution 12
function Sleigh() { }

Sleigh.prototype.authenticate = function (name, password) {
    // TODO
    if (name !== "Santa Claus" || password !== "Ho Ho Ho!") {
        return false;
    }
    else {
        return true;
    }

};