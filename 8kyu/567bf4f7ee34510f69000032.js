// Regexp Basics - is it a digit?

// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function() {
    return /^\d$/.test(this)
};

console.log(''.digit()) 
// false
console.log('7'.digit()) 
// true
console.log(' '.digit())
// false
console.log('a'.digit())
// false
console.log('a5'.digit())
// false
console.log('14'.digit())
// false

// Solution 1
String.prototype.digit = function() {
    return /^\d$/.test(this);
  };

// Solution 2
String.prototype.digit = function() {
    return /^[0-9]$/.test(this);
  };

// Solution 3
String.prototype.digit = function() {
    return /^[0-9]$/g.test(this);
  }

// Solution 4
String.prototype.digit = function() {
    return this.match(/^[0-9]$/) ? true : false;
  };

// Solution 5
String.prototype.digit = function() {
    return this.length === 1 && '0' <= this && this <= '9';
  };

// Solution 6
String.prototype.digit = function() {
    return Boolean(this.match(/^[0-9]$/));
  };

// Solution 7
Object.assign(String.prototype, {
    digit () {
      return /^\d$/.test(this);
    }
});

// Solution 8
String.prototype.digit = function() {
    return (this.length === 1) && (this[0] >= '0') && (this[0] <= '9');
};

// Solution 9
String.prototype.digit = function() {
    let regex = /^[0-9]$/;
    return regex.test(this);
};