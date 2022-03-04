// DNA to RNA Conversion

// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
// Create a function which translates a given DNA string into RNA.

// For example:
// "GCAT"  =>  "GCAU"

// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.


function DNAtoRNA(dna) {

    //   DNA = G C A T
    //   RNA = G C A U 
    
    // return dna.replaceAll("T","U");
    // ^ this works in VS Code
    
    return dna.replace(/T/g, 'U');
}

DNAtoRNA("TTTT")
//"UUUU"
DNAtoRNA("GCAT")
//"GCAU"
DNAtoRNA("GACCGCCGCC")
//"GACCGCCGCC"


// Replace All doesn't seem to work on CodeWars? Why?
// Need to use REGEX to get the solution to work?

// Solution 1
function DNAtoRNA(dna){
    return dna.replace(/T/g, 'U');
}


// Solution 2
const DNAtoRNA = dna => dna.replace(/T/g, 'U');


// Solution 3
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
}


// Solution 6
DNAtoRNA = ($) => [...$].map(el => el === 'T' ? el='U': el).join`` 