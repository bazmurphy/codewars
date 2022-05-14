// A Strange Trip to the Market

// You're on your way to the market when you hear beautiful music coming from a nearby street performer. The notes come together like you wouln't believe as the musician puts together patterns of tunes. As you wonder what kind of algorithm you could use to shift octaves by 8 pitches or something silly like that, it dawns on you that you have been watching the musician for some 10 odd minutes. You ask, "how much do people normally tip for something like this?" The artist looks up. "It's always gonna be about tree fiddy."

// It was then that you realize the musician was a 400 foot tall beast from the paleolithic era! The Loch Ness Monster almost tricked you!

// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: A) it is a 400 foot tall beast from the paleolithic era; B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, the only way accurately tell is to look for the phrase "tree fiddy". Since you are tired of being grifted by this monster, the time has come to code a solution for finding The Loch Ness Monster. Note that the phrase can also be written as "3.50" or "three fifty".

function isLockNessMonster(s) {

    return s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty") ? true : false;

    // if (s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty")) {
    //     return true;
    // } else {
    //     return false;
    // }

}

console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));
console.log(isLockNessMonster("Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."));


// Solution 1
const isLockNessMonster = (s) => /tree fiddy|three fifty|3.50/.test(s);

// Solution 3
function isLockNessMonster(s) {
    return /3\.50|th?ree fi(?:ft|dd)y/g.test(s);
}

// Solution 5
function isLockNessMonster(s) {
    return (~s.indexOf('tree fiddy') || ~s.indexOf('3.50')) ? true : false;
}

// Solution 6
const isLockNessMonster = input => (input.indexOf("tree fiddy") > -1) || (input.indexOf("$3.50") > -1);

// Solution 7
function isLockNessMonster(s) {
    const searchData = ["tree fiddy", "3.50"];
    return searchData.some((el) => s.includes(el));
}

// Solution 8
function isLockNessMonster(s) {
    let arr = ["tree fiddy",3.50,"three fifty"]
    for (let word of arr){
      if (s.indexOf(word) !== -1){
        return true
        break
      }
    }
    return false
}