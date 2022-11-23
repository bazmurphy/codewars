// Simple Encryption #1 - Alternating Split

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.


function encrypt(text, n) {

  // For those not understanding the awfully written example and description :
  // This kata is about the odd and even index numbers of a string. Example: "hello max" = 012345678
  // Our index numbers are "hello" = 01234, " " = 5 and "max" = 678
  // Take the even index numbers 0_2_4_6_8 = "hlomx". Then the odd index numbers. 1_3_5_7 = "el a".
  // Join the two new strings you've created. The odd string goes first. Result: "el a" + "hlomx" = "el ahlomx".
  // Repeat with "el ahlomx" = 012345678 and so on ...

  if (text === "" || n <= 0) {
    return text;
  } else {
    let result = text;

    for (let i = 0; i < n; i++) {       
      // console.log(`outer loop ${i+1}`);

      let evens = "";
      let odds = "";
      
      for (let j = 0; j < result.length; j++) {
        // console.log(`inner loop ${j+1}`);
        // console.log(`j: ${result[j]}`);

        if (j % 2 === 0) {
          evens += `${result[j]}`
        } else {
          odds += `${result[j]}`
        }
      }

      result = odds.concat(evens);
      // console.log(`temp result: ${result}`);
    }

    return result;
  }
}

function decrypt(encryptedText, n) {
    
  console.log(`before: ${encryptedText}`)
  let result = encryptedText;

  for (let i = 0; i < n; i++) {       
    // console.log(`outer loop ${i+1}`);

    let evens = "";
    let odds = "";
    
    for (let j = 0; j < result.length; j++) {
      // console.log(`inner loop ${j+1}`);
      // console.log(`j: ${result[j]}`);

      if (j % 2 === 0) {
        evens += `${result[j]}`
      } else {
        odds += `${result[j]}`
      }
    }

    console.log(`evens: ${evens}`);
    console.log(`odds: ${odds}`);

    // result = evens.concat(odds);
    console.log(`temp result: ${result}`);
  }

  console.log(`after:`)
  return result;


}

// console.log(encrypt("hello max", 1));
// console.log(encrypt("hello max", 2));
// console.log(encrypt("hello max", 3));

console.log(decrypt("el ahlomx", 1));
// console.log(decrypt("lalme hox", 2));
// console.log(decrypt("am ollehx", 3));

// // EncryptExampleTests
// console.log(encrypt("This is a test!", 0));
// // "This is a test!"
// console.log(encrypt("This is a test!", 1));
// // "hsi  etTi sats!"
// console.log(encrypt("This is a test!", 2));
// // "s eT ashi tist!"
// console.log(encrypt("This is a test!", 3));
// // " Tah itse sits!"
// console.log(encrypt("This is a test!", 4));
// // "This is a test!"
// console.log(encrypt("This is a test!", -1));
// // "This is a test!"
// console.log(encrypt("This kata is very interesting!", 1));
// // "hskt svr neetn!Ti aai eyitrsig"

// // DecryptExampleTests
// console.log(decrypt("This is a test!", 0));
// // "This is a test!"
// console.log(decrypt("hsi  etTi sats!", 1));
// // "This is a test!"
// console.log(decrypt("s eT ashi tist!", 2));
// // "This is a test!"
// console.log(decrypt(" Tah itse sits!", 3));
// // "This is a test!"
// console.log(decrypt("This is a test!", 4));
// // "This is a test!"
// console.log(decrypt("This is a test!", -1));
// // "This is a test!"
// console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1));
// // "This kata is very interesting!"

// // Null or Empty
// console.log(encrypt("", 0));
// // ""
// console.log(decrypt("", 0));
// // ""
// console.log(encrypt(null, 0));
// // null
// console.log(decrypt(null, 0));
// // null