// Decipher this!

// You are given a secret message you need to decipher.
// Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)

// there are no special characters used, only letters and spaces
// words are separated by a single space
// there are no leading or trailing spaces

// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

function decipherThis(str) {
  const newSentenceArray = [];

  const words = str.split(" ");

  for (const word of words) {
    let charCode = "";
    let endOfCharCodeIndex;

    for (let index = 0; index < word.length; index++) {
      if (!isNaN(word[index])) {
        charCode += word[index];
      } else {
        endOfCharCodeIndex = index;
        break;
      }
    }

    const firstChunk = String.fromCharCode(charCode);

    let secondChunk = "";
    if (charCode.length !== word.length) {
      secondChunk = word.slice(endOfCharCodeIndex);
    }

    if (secondChunk.length > 1) {
      const secondLetter = secondChunk.slice(0, 1);
      const lastLetter = secondChunk.slice(-1);
      const middle = secondChunk.slice(1, -1);
      secondChunk = lastLetter + middle + secondLetter;
    }

    const newWord = firstChunk + secondChunk;

    newSentenceArray.push(newWord);
  }

  return newSentenceArray.join(" ");
}

console.log(decipherThis("72olle 103doo 100ya"));
// "Hello good day"
console.log(decipherThis("82yade 115te 103o"));
// "Ready set go"
console.log(decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o"));
// "Have a go at this and see how you do"
console.log(decipherThis("65 119esi 111dl 111lw 108dvei 105n 97n 111ka"));
// "A wise old owl lived in an oak"
console.log(decipherThis("84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"));
// "The more he saw the less he spoke"
console.log(decipherThis("84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"));
// "The less he spoke the more he heard"
console.log(decipherThis("87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"));
// "Why can we not all be like that wise old bird"
console.log(decipherThis("84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"));
// "Thank you Piotr for all your help"
