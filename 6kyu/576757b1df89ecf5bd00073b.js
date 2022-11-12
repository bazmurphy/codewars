// Build Tower

// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// function towerBuilder(nFloors) {

//     // create 3 arrays
//     // length of string is 2 * nFloors - 1
//     // empty spaces either side is nFloors - i;

//     let tower = [];

//     for (let i = 1; i <= nFloors; i++) {

//         // console.log(`loop ${i} nFloors ${i}`)
//         let floor = [];
//         let lengthOfString = (2 * nFloors) -1;

//         for (let j = 1; j <= lengthOfString; j++) {
//             floor.push("*");
//         }
//         // console.log(floor);

//         // if (floor.length < (2 * nFloors) -1) {
//         //     floor.unshift("space");
//         //     floor.push("space");
//         // }
//         // console.log(floor);

//         tower.unshift(floor.toString());
//     }
    
//     // console.log("tower:");
//     // console.log(tower);
//     return tower;

//     // calculate each steps number of asterisks
//     // USE THE TOTAL LENGTH OF THE STRING as a condition
//     // TO ADD SPACE AT THE START AND END UNTIL THE LENGTH IS MET
//     // JOIN IT ALL AS ONE STRING

// }


function towerBuilder(nFloors) {

    let tower = [];

    for (let i = 1; i <= nFloors; i++) {

        let floor = [];
        let temp = (nFloors * 2) - 1;
        
        for (let j = 1; j <= temp; j++) {

            // USE THE ITERATOR J
            // TO DETERMINE HOW MANY TIMES TO PUSH AN ASTERISK
            // IF ITS LOOP 1, THEN ONLY ONCE
            // IF ITS LOOP 2, THEN THREE TIMES
            // IF ITS LOOP 3, THEN FIVE TIMES

            floor.push("*");
        }
        console.log(floor);

        // tower.push(floor.toString());
    }

    // return tower;
    
}

// console.log(towerBuilder(1));
// // ["*"]
// console.log(towerBuilder(2));
// // [" * ","***"]
console.log(towerBuilder(3));
// ["  *  "," *** ","*****"]