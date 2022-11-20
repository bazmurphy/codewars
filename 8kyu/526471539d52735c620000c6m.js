// Broken Counter

// Our counter prototype is broken. Can you spot, what's wrong here?

function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value += 1;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};


// Solution 1
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};


// Solution 2
class Counter {
  constructor() {
    this.value = 0;
  }
  
  increase() {
    this.value++;
  };

  getValue() {
    return this.value;
  };

  reset() {
    this.value = 0;
  };
}


// Solution 3
function Counter() {
  this.value = 0;
}

Counter.prototype = {
  increase : function(){this.value++;},
  getValue : function(){ return this.value;},
  reset : function(){this.value = 0;}
};


// Solution 4
class Counter {
  constructor() { this.reset();      }
  increase()    { this.value++;      }
  getValue()    { return this.value; }
  reset()       { this.value = 0;    }
}


// Solution 5
function Counter() {
  this.value = 0;
  this.getValue = function(){
     return this.value;
  };
  this.increase = function(){
  this.value++;
  };
  this.reset = function(){
  this.value = 0;
  };
}


// Solution 6
function Counter() {
  value = 0;
}

Counter.prototype.increase = () => this.value++;

Counter.prototype.reset = () =>  this.value = 0;

Counter.prototype.getValue = () => {return this.value;}



// Solution 7
function Counter() {
  this.value = 0;
  this.increase = () => this.value++;
  this.getValue = () => this.value;
  this.reset = () => this.value = 0;
};


// Solution 8
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};


// Solution 9
this.value=0;function Counter(){};Counter.prototype.increase=()=>this.value++;Counter.prototype.getValue=()=>this.value;Counter.prototype.reset=()=>this.value=0//Only true madlads program in one line


// Solution 10
function Counter() {
  return this.value = 0;
}

Counter.prototype.increase = function() {
  return ++this.value;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  return this.value = 0;
};


// Solution 11
let Counter = () => this.value = 0;
Counter.prototype.increase = () => this.value++;
Counter.prototype.getValue = () => this.value;
Counter.prototype.reset = () => this.value=0;


// Solution 12
class Counter {
  constructor() {
    this.value = 0
  }
  increase() {
    this.value += 1
  }
  getValue() {
    return this.value
  }
  reset() {
    this.value = 0
  }
}


// Solution 13
function Counter() {
  return (this.value = 0);
 };
 
 Counter.prototype.increase =function() {
   return (this.value++);
 };
 
 Counter.prototype.getValue=function(){
   return (this.value);
 };
 
 Counter.prototype.reset=function() {
   return (this.value = 0);
 };


// Solution 14
function Counter() {
  this.value = 0;
}
// = function()

Counter.prototype.increase = function(){
  return this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};