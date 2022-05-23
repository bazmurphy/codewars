// Grasshopper - Function syntax debugging

// A student was working on a function and made some syntax mistakes while coding.
// Help them find their mistakes and fix them.

// function main [verb, noun]
//     return verb + noun
// }

function main (verb, noun) {
    return verb + noun
}

console.log(main('take ', 'item'));
// 'take item'
console.log(main('use ', 'sword'));
// 'use sword'


// Solution 1
function main(verb, noun) {
    return verb + noun
}


// Solution 2
const main = (verb, noun) => verb + noun;


// Solution 3
function main(verb, noun) {
    if (arguments.length > 1)
        return verb.trim() + ' ' + noun.trim();
}


// Solution 4
main = function (verb, noun) {
    return verb + noun;
}


// Solution 5
function main(verb, noun) {
    return verb + noun
}


// Solution 6
main = (v, n) => v + n



// Solution 7
let main = (...a) => a.join('');


// Solution 8
const main = String.prototype.concat.bind('');


// Solution 9
main = (Q, S) => Q + S


// Solution 10
main = ''.concat.bind``