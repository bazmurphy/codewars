// The Wide-Mouthed frog!

// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide


function mouthSize(animal) {
    return animal.toLowerCase() === "alligator" ? "small" : "wide"
    
    // if (animal === "alligator") {
    //     return "small"
    //     } else {
    //         return "wide"
    //     }
}

console.log(mouthSize("toucan"))
// "wide"
console.log(mouthSize("ant bear"))
// "wide"
console.log(mouthSize("alligator"))
// "small"


// Solution 1
function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}


// Solution 2
function mouthSize(animal) {
    return animal.toLowerCase() === 'alligator' ? 'small' : 'wide';
}


// Solution 3
mouthSize=x=>x.match(/alligator/i) ? 'small' : 'wide';


// Solution 4
const mouthSize = (animal) => animal.toLowerCase() == "alligator" ? "small" : "wide";


// Solution 5
const mouthSize = animal => /^alligator$/i.test(animal)? "small": "wide";