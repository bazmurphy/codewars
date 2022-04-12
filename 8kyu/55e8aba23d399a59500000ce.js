// Grasshopper - Terminal Game #1

// Terminal Game - Create Hero Prototype

// In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
// attribute 	value
// name 	user argument or 'Hero'
// position 	'00'
// health 	100
// damage 	5
// experience 	0

function Hero (name = 'Hero') {
    this.name = name;
    this.position = 00;
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
}


// Solution 1
function Hero (name) {
    this.name = name || 'Hero';
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
}


// Solution 2
class Hero {
    constructor(name = 'Hero') {
      this.name = name;
      this.position = '00';
      this.health = 100;
      this.damage = 5;
      this.experience = 0;
    }
}


// Solution 3
function Hero (name='Hero') {
    this.name = name;
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
}


// Solution 4
class Hero {
    constructor(name) {
      this.name = name || 'Hero';
      this.position = '00';
      this.health = 100;
      this.damage = 5;
      this.experience = 0;
    }
}


// Solution 5
class Hero {
  
    constructor(name = 'Hero'){
      
      Object.assign(this, {
        name       : name,
        position   : '00',
        health     : 100,
        damage     : 5,
        experience : 0,
      });
      
    }
    
}


// Solution 6
class Hero {
    constructor(name = `Hero`) {
      this.name = name;
      this.position = `00`;
      this.health = 100;
      this.damage = 5;
      this.experience = 0;
    }
}


// Solution 7
function Hero (name) {
    return {
      name : !name ? 'Hero' : name,
      position : '00',
      health : 100,
      damage : 5,
      experience : 0    
    }
}


// Solution 8
function Hero(name){
    this.name = name ? name : "Hero";
    this.position = "00";
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
}