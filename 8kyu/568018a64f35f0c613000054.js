// Finish Guess the Number Game

// Description:

// Imagine you are creating a game where the user has to guess the correct number. But there is a limit of how many guesses the user can do.

// If the user tries to guess more than the limit, the function should throw an error.
// If the user guess is right it should return true.
// If the user guess is wrong it should return false and lose a life.

// Can you finish the game so all the rules are met?

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives === 0) {
      throw new Error;
    } else if (n === this.number) {
      return true;
    } else if (n !== this.number) {
      this.lives--;
      return false;
    }
  }
}


let guesser = new Guesser(10, 2);
guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
guesser.guess(10);
console.log(guesser.guess(10));
// true

guesser = new Guesser(10, 2);
guesser.guess(1);
console.log(!guesser.guess(1));
// false

guesser = new Guesser(10, 2);
guesser.guess(1);
guesser.guess(2);
console.log(guesser.guess(10));
// error


// Solution 1
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) throw Error
    this.lives--
    return n === this.number
  }
}


// Solution 2
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) throw 'No guesses left';
    if (n === this.number) return true;
    this.lives--;
    return false;
  }
}


// Solution 4
class Guesser {
  constructor(number, lives)
  {
    this.number = number;
    this.lives = lives;
  }
  guess(n)
  {
    if (this.lives <= 0) throw "Error";
    if (this.number !== n) this.lives--;
    return this.number === n;
  }
}


// Solution 5
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives < 1) throw 'already dead';
    return (this.number === n || !(this.lives--));
  }
}


// Solution 6
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) throw new Error('Game over');
    if (n !== this.number) this.lives--;
    return n === this.number;
  }
}


// Solution 7
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives < 1) throw new Error();
    return n === this.number || !(this.lives--);
  }
}


// Solution 8
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  guess(n) {
    if(this.lives < 1) throw "Too many guesses!";
    if(this.number == n) return true;
    this.lives--;
    return false;
  }
}


// Solution 9
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives <= 0){
      throw "";
    }
    return (n == this.number) || (this.lives-- == this.lives);
  }
}


// Solution 10
class Guesser {
  constructor(number, lives) { 
    this.number = number; 
    this.lives = lives;
  }
  guess(n) {
    if (this.lives) return n == this.number || this.lives-- && false; 
    throw "already dead";
  }
}


// Solution 11
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives < 1) throw Error
    return this.number == n || !(this.lives--);
  }
}


// Solution 12
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (this.lives === 0) {
      throw Error;
    } else if (this.number === n) {
      return true;
    } else {
      this.lives -=1;
      return false;
    }
  }
}


// Solution 13
class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess(n) {
    if (!this.lives) throw new Error();
    if (n !== this.number) {
      this.lives = this.lives - 1;
      return false;
    } else {
      return true;
    }
  }
}


// Solution 14
class Guesser {
  constructor (number, lives) {
    this.number = number;
    this.lives = lives;
  }
  
  guess (n) {
    if (this.lives === 0) {
      throw new Error('already dead');
    }
    
    if (n !== this.number) {
      this.lives--;
      return false;
    }
    
    return true;    
  }
}