// Complementary DNA

// Deoxyribonucleic acid(DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".You function receives one side of the DNA(string, except for Haskell); you need to return the other complementary side.DNA strand is never empty or there is no DNA at all(again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input-- > output)

// "ATTGC" -- > "TAACG"
// "GTAT" -- > "CATA"

function DNAStrand(dna) {
    // split the string into an Array 
    // replace the A with T
    // replace the T with A
    // replace the C with G
    // replace the G with C
    // rejoin the Array into a string

    // dna is never empty, or there is no DNA

    // return a String in Capitals

    return dna
        .split("")
        .map( e => e === 'A' ? 'T' : e === 'T' ? 'A' : e === 'C' ? 'G' : e ===  'G' ? 'C' : null)
        .join("")
}

console.log(DNAStrand("AAAA"));
// "TTTT", "String AAAA is"
console.log(DNAStrand("ATTGC"));
// "TAACG", "String ATTGC is"
console.log(DNAStrand("GTAT"));
// "CATA", "String GTAT is"


// Solution 1
function DNAStrand(dna) {
    return dna.replace(/./g, function (c) {
        return DNAStrand.pairs[c]
    })
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
}


// Solution 2
var pairs = { 'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C' };

function DNAStrand(dna) {
    return dna.split('').map(function (v) { return pairs[v] }).join('');
}


// Solution 3
let pairs = { A: 'T', T: 'A', C: 'G', G: 'C' };
const DNAStrand = dna => dna.replace(/./g, c => pairs[c]);


// Solution 4
function DNAStrand(dna) {
    //your code here
    var result = "";
    for (var i = 0; i < dna.length; i++) {
        if (dna[i] === "A") {
            result += "T";
        }
        else if (dna[i] === "T") {
            result += "A";
        }
        else if (dna[i] === "C") {
            result += "G";
        }
        else if (dna[i] === "G") {
            result += "C";
        }
        else {
            result += dna[i];
        }
    }
    return result;
}


// Solution 5
function DNAStrand(dna) {
    //your code here
    var res = "";
    for (var i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                res += "T";
                break;
            case 'T':
                res += "A";
                break;
            case 'G':
                res += "C";
                break;
            case 'C':
                res += "G";
                break;
        }
    }
    return res;
}


// Solution 6
function DNAStrand(dna) {
    return dna.split('').map(function (v) { return { A: 'T', T: 'A', C: 'G', G: 'C' }[v]; }).join('');
}


// Solution 7
function DNAStrand(dna) {
    var table = {
        C: 'G',
        G: 'C',
        A: 'T',
        T: 'A'
    };

    return dna.split('').map(function (cv) {
        return table[cv];
    }).join('');
}


// Solution 8
function DNAStrand(dna) {
    return dna.replace(/A/g, 't').replace(/T/g, 'a').replace(/C/g, 'g').replace(/G/g, 'c').toUpperCase();
}


// Solution 9
const DNAStrand = dna => dna.replace(/./g, m => 'CGAT'['GCTA'.indexOf(m)]);


// Solution 10
function DNAStrand(dna) {
    return dna.replace(/[ACGT]/g, function (l) { return pairs[l] });
}

var pairs = {
    A: 'T',
    T: 'A',
    G: 'C',
    C: 'G'
};