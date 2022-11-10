// Grasshopper - Create the rooms

// Escape the room

// You are creating an "Escape the room" game. The first step is to create a hash table called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each being a hash table with at least three properties (e.g. name, description, completed).

const rooms = {
  room1 : {
    name: "room1",
    description: "description1",
    completed: false,
  },
  room2 : {
    name: "room2",
    description: "description2",
    completed: false,
  },
  room3 : {
    name: "room3",
    description: "description3",
    completed: false,
  }
}


// Solution 1
const rooms = {
  bedroom: {
    name: 'Bedroom',
    description: 'For... sleeping',
    completed: true,
  },
  bathroom: {
    name: 'Bathroom',
    description: 'This will get you clean',
    completed: false,
  },
  kitchen: {
    name: 'Kitchen',
    description: 'Hungry? Why wait?',
    completed: true,
  },
}


// Solution 2
class Room  {
  constructor() {
    this.name = '';
    this.description = '';
    this.completed= '';
  }
}
var rooms = {
  bedroom : new Room(),
  kitchen : new Room(),
  bathroom : new Room(),
}


// Solution 3
var rooms = {}
for (var i = 0; i < 3; i++) {
    rooms[`room${i}`] = {'a': 1, 'b': 2, 'c': 3}
}


// Solution 4
const rooms = {
  room1: {
    name: undefined,
    description: undefined,
    completed: undefined
  },
  room2: {
    name: undefined,
    description: undefined,
    completed: undefined
  },
  room3: {
    name: undefined,
    description: undefined,
    completed: undefined
  }
};


// Solution 5
var rooms = {
  first: {name: 'first', desc: 'number 1', comp: 3},
  second: {name: 'second', desc: 'number 2', comp: 4},
  trees: {name: 'trees', desc: 'number 3', comp: 3}
}


// Solution 6
var rooms = {
  r1: {x: 0, y: 0, z: 0},
  r2: {x: 0, y: 0, z: 0},
  r3: {x: 0, y: 0, z: 0},
}


// Solution 7
const rooms = {
  bedRoom     : [1,2,3],
  kitchenRoom : [4,5,6],
  bathRoom    : [7,8,9]
}


// Solution 8
var rooms = {
  first: {
    name: "Hector",
    description: "Tall",
    completed: 100
  },
  second: {
    name: "Josh",
    description: "Short",
    completed: 99
  },
  third: {
    name: "Rae",
    description: "Tall",
    completed: 90
  },
}


// Solution 9
var rooms = {
  room01: [1, 2, 3],
  room02: [4, 5, 6],
  room03: [7, 8, 9]
}


// Solution 10
var rooms = {
  room1: {name: 'NAME',
  description: 'Rooms',
  completed: 3
         },
  room2: { name: 'NAME',
  description: 'Rooms',
  completed: 3
         },
  room3: { name: 'NAME',
  description: 'Rooms',
  completed: 3
         }
}


// Solution 11
class EscapeRoom {
  constructor(name, description, completed) {
    this.name = name;
    this.description = description;
    this.completed = completed;
  }
}

const rooms = {
  bedroom: new EscapeRoom('bedroom', 'where the magic happens', true),
  kitchen: new EscapeRoom('kitchen','just an ordinary kitchen or is it?',true),
  bathroom: new EscapeRoom('bathroom','dropping the kids off at the pool',false),
};


// Solution 12
const rooms = Object.assign({}, Array.from({length:3},_ => Object.assign({}, [{n:'room'}, {d:'square'}, {c:true}])))


// Solution 13
class Room {
  constructor(){
    this.names = "blah";
    this.description = "blah";
    this.completed = "blah";
  }
 }
 var rooms = {
   first: new Room(),
   second: new Room(),
   third: new Room(),
 }


// Solution 14
const rooms = Object.assign({}, Array.from({ length: 3 }, ( _, i ) => Object.assign({}, [ {1:1}, {1:1}, {1:1} ]) ) );