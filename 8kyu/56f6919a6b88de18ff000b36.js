// 101 Dalmatians - squash the bugs, not the dogs!

// Your friend has been out shopping for puppies(what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

// Good luck!


function howManyDalmatians(number) {

    let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    let respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2]
  
    return respond

}



console.log(howManyDalmatians(26));
// "More than a handful!"
console.log(howManyDalmatians(8));
// "Hardly any"
console.log(howManyDalmatians(14));
// "More than a handful!"
console.log(howManyDalmatians(80));
// "Woah that's a lot of dogs!"
console.log(howManyDalmatians(100));
// "Woah that's a lot of dogs!"
console.log(howManyDalmatians(101));
// "101 DALMATIANS!!!"


// Solution 1
function howManyDalmatians(number) {
    if (number <= 10) {
        return "Hardly any"
    } else if (number <= 50) {
        return "More than a handful!"
    } else if (number === 101) {
        return "101 DALMATIANS!!!"
    } else {
        return "Woah that's a lot of dogs!"
    }
}


// Solution 2
const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

const howManyDalmatians = number => number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));


// Solution 3
function howManyDalmatians(number) {
    let dogs = [
        'Hardly any',
        'More than a handful!',
        'Woah that\'s a lot of dogs!',
        '101 DALMATIANS!!!'
    ]
    let respond = number <= 10 ? dogs[0]
        : number <= 50 ? dogs[1]
        : number == 101 ? dogs[3]
        : dogs[2]
    return respond
}


// Solution 4
const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
const howManyDalmatians = (n) => {
    return n <= 10 ? dogs[0]
        : n <= 50 ? dogs[1]
        : n === 101 ? dogs[3] : dogs[2];
};


// Solution 5
const howManyDalmatians = number =>
    number <= 10 ? `Hardly any` : number <= 50 ? `More than a handful!` : number === 101 ? `101 DALMATIANS!!!` : `Woah that's a lot of dogs!`;


// Solution 6
let dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
howManyDalmatians = number => {
    switch (true) {
        case number <= 10:
            return dogs[0];
        case number <= 50:
            return dogs[1];
        case number <= 100:
            return dogs[2];
        case number === 101:
            return dogs[3];
        default:
            return ``;
    }
}


// Solution 7
howManyDalmatians = n => n <= 10 ? "Hardly any" : n <= 50 ? "More than a handful!" : n == 101 ? "101 DALMATIANS!!!" : "Woah that's a lot of dogs!"


// Solution 8
function howManyDalmatians(number) {
    const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];
    switch (true) {
        case number < 11: return dogs[0];
        case number < 51: return dogs[1];
        case number < 101: return dogs[2];
        default: return dogs[3];
    }
}


// Solution 9
const dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

const howManyDalmatians = number => number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number === 101 ? dogs[3] : dogs[2];


// Solution 10
function howManyDalmatians(number) {

    var dogs = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    var respond = number <= 10 ? dogs[0] : (number <= 50 ? dogs[1] : (number == 101 ? dogs[3] : dogs[2]));

    return respond;
}


// Solution 11
function howManyDalmatians(number) {

    let respond = ["Hardly any", "More than a handful!", "Woah that's a lot of dogs!", "101 DALMATIANS!!!"];

    return (number <= 10) ? respond[0]
        : (number <= 50) ? respond[1]
        : (number == 101) ? respond[3]
        : respond[2];
}  


// Solution 12
function howManyDalmatians(number) {

    let dogs = ["Hardly any", "More than a handful!", "101 DALMATIANS!!!", "Woah that's a lot of dogs!",];

    let respond = number <= 10 ? dogs[0] : number <= 50 ? dogs[1] : number == 101 ? dogs[2] : dogs[3];

    return respond
}