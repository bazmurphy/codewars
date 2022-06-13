// Determine offspring sex based on genes XX and XY chromosomes

// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes.
// They are either X or Y.
// The female gametes or eggs however, contain only the X sex chromosome and are homogametic.

// The sperm cell determines the sex of an individual in this case. 
// If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female.
// If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.

// Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; 
// If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";

function chromosomeCheck(sperm) {
    // return sperm.indexOf('Y') > -1 
    //     ? "Congratulations! You're going to have a son." 
    //     : "Congratulations! You're going to have a daughter.";

    return sperm.includes('Y')
        ? "Congratulations! You're going to have a son."
        : "Congratulations! You're going to have a daughter."
}

console.log(chromosomeCheck('XY'));
// "Congratulations! You're going to have a son."
console.log(chromosomeCheck('XX'));
// "Congratulations! You're going to have a daughter."


// Solution 1
function chromosomeCheck(sperm) {
    if (sperm == "XY") {
        return "Congratulations! You're going to have a son.";
    }

    return "Congratulations! You're going to have a daughter.";
}


// Solution 2
function chromosomeCheck(sperm) {
    return "Congratulations! You're going to have a " + (sperm === 'XY' ? 'son' : 'daughter') + '.';
}


// Solution 3
const chromosomeCheck = sperm =>
    `Congratulations! You're going to have a ${sperm === `XY` ? `son` : `daughter`}.`;


// Solution 4
chromosomeCheck = s => `Congratulations! You're going to have a ${s[1] == 'X' ? 'daughter' : 'son'}.`;


// Solution 5
function chromosomeCheck(sperm) {
    return "Congratulations! You're going to have a " + (sperm == 'XX' ? 'daughter' : 'son') + '.';
}


// Solution 6
function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XX' ? 'daughter' : 'son'}.`;
}


// Solution 7
const chromosomeCheck = (sperm) => (
    `Congratulations! You're going to have a ${sperm.includes('Y') ? 'son' : 'daughter'}.`
);


// Solution 8
function chromosomeCheck(sperm) {
    var identifier = sperm.toUpperCase()
    if (identifier === 'XY') {
        return "Congratulations! You're going to have a son."
    } else {
        return "Congratulations! You're going to have a daughter."
    }
}


// Solution 9
const chromosomeCheck = M => "Congratulations! You're going to have a " + (/y/i.test(M) ? 'son.' : 'daughter.'


// Solution 10
const chromosomeCheck = S => S.includes('Y') ? "Congratulations! You're going to have a son." : "Congratulations! You're going to have a daughter.";


// Solution 11
function chromosomeCheck(s) {
    return `Congratulations! You're going to have a ${['son', 'daughter']['YX'.indexOf(s[1])]}.`
}


// Solution 12
function chromosomeCheck(sperm) {
    if (sperm == "XY" || sperm == "YX" || sperm == "YY") {
        return "Congratulations! You're going to have a son.";
    } else if (sperm == "XX") {
        return "Congratulations! You're going to have a daughter.";
    }
}

