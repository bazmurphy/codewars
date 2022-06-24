// Basic subclasses - Adam and Eve

// According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

// You have to do God's job. 
// The creation method must return an array of length 2 containing objects (representing Adam and Eve). 
// The first object in the array should be an instance of the class Man. 
// The second should be an instance of the class Woman. 
// Both objects have to be subclasses of Human. 
// Your job is to implement the Human, Man and Woman classes.

class God {
    constructor() {
    }

    create() {
        return [new Man(), new Woman()];
    }
}

class Human {
    constructor(name) {
        this.name = name;
    }
}

class Man extends Human {
    constructor(name) {
        super(name);
    }
}

class Woman extends Human {
    constructor(name) {
        super(name);
    }
}

let humans = God.create()
// console.log(humans[0] instanceof Man, true, 'Expected Adam to be a Man');



// Solution 1
class God {
    /**
     * @returns Human[]
     */
    static create() {
        return [new Man, new Woman];
    }
}
class Human { }
class Man extends Human { }
class Woman extends Human { }


// Solution 2
class God {
    /**
     * @returns Human[]
     */
    static create() {
        return [new Man('Adam'), new Woman('Eve')]
    }
}

class Human {
    constructor(name) {
        this.name = name;
    }
}

class Man extends Human {
    constructor(name) {
        super(name);
    }
}

class Woman extends Human {
    constructor(name) {
        super(name);
    }
}


// Solution 3
class God {
    static create() {
        return [new Man('Adam'), new Woman('Eve')]
    }
};
class Human {
    constuctor(name) {
        this.name = name;
    }
};
class Man extends Human { };
class Woman extends Human { };


// Solution 4
class Human { }
class Man extends Human { }
class Woman extends Human { }

class God {
    /**
     * @returns Human[]
     */
    static create() {
        return [
            new Man,
            new Woman
        ];
    }
}


// Solution 5
class Human { }
class Man { }
class Woman { }

Object.setPrototypeOf(Man.prototype, Human.prototype);
Object.setPrototypeOf(Woman.prototype, Human.prototype);
class God {
    static create() {
        // write code here

        return [new Man(), new Woman()];
    }
}


// Solution 6
class God {
    /**
     * @returns Human[]
     */
    static create() {
        return [Adam, Eve]
    }
}
class Human { };
class Man extends Human { };
class Woman extends Human { };
let Adam = new Man();
let Eve = new Woman();


// Solution 7
class God {
    /**
     * @returns Human[]
     */
    static create() {
        return [adam, eve];
    }
}

class Human { }

class Man extends Human { }

class Woman extends Human { }

let eve = new Woman();
let adam = new Man();


// Solution 8
class God {
    /**
     * @returns Human[]
     */
    static create() {
        return [new Man(), new Woman()];
    }
}
class Human extends God {
}
class Man extends Human {
}
class Woman extends Human {
}


// Solution 9
class God {
    /**
     * @returns Human[]
     */
    static create() {
        // code
        var Adam = new Man();
        var Eve = new Woman();
        return [Adam, Eve];
    }
}
// code
function Human() { }
function Man() { }
Man.prototype = new Human();

function Woman() { }
Woman.prototype = new Human();


// Solution 10
class God {
    static create() {
        return [new Man("Adam"), new Woman("Eva")];
    }
}

class Human {
    constructor() {
    }
}

class Man extends Human {
    constructor(name) {
        super();
        this.name = name;
    }
}

class Woman extends Human {
    constructor(name) {
        super();
        this.name = name;
    }
}


// Solution 12
class God { static create() { return [new Man, new Woman] } } class Human { } Man = Human; Woman = Man