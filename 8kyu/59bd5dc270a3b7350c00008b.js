// Man in the west

// A western man is trying to find gold in a river.
// To do that, he passes a bucket through the river's soil and then checks if it contains any gold. 
// However, he could be more productive if he wrote an algorithm to do the job for him.

// So, you need to check if there is gold in the bucket, and if so, return True / true.
// If not, return False / false.

function checkTheBucket(bucket) {
    return bucket.some(element => element === "gold");
}

console.log(checkTheBucket(["stone", "stone", "stone", "stone", "stone"]));
// false
console.log(checkTheBucket(["stone", "stone", "stone", "stone", "gold"]));
// true
console.log(checkTheBucket(["gold", "stone", "stone", "stone", "stone"]));
// true
console.log(checkTheBucket([]));
// false
console.log(checkTheBucket(["stone", "stone", "stone", "gold", "gold"]));
// true



// Solution 1
function checkTheBucket(bucket) {
    return bucket.includes('gold');
}


// Solution 2
const checkTheBucket = bucket => bucket.includes('gold');


// Solution 3
let checkTheBucket = arr => arr.includes('gold')


// Solution 4
checkTheBucket = bucket => bucket.includes('gold')


// Solution 5
const checkTheBucket = a => a.includes('gold');


// Solution 6
const checkTheBucket = bucket =>
    bucket.includes(`gold`);


// Solution 7
const checkTheBucket = b => b.indexOf("gold") != -1;


// Solution 8
function checkTheBucket(bucket) {

    if (!(bucket)) return false;
    let x = bucket[0];

    for (let i = 0; i < bucket.length; i++) {


        if (bucket[i] != x) {
            return true;
        }

    }

    return false;
}


// Solution 9
var checkTheBucket = function (bucket) {
    return bucket.some(e => e === "gold");
}


// Solution 10
function checkTheBucket(bucket) {
    if (bucket.indexOf("gold") === -1) { return false; }
    return true;
}


// Solution 11
let checkTheBucket = b => b.some(i => !i[4])


// Solution 12
const checkTheBucket = GOLD => GOLD.join(',').includes('gold');