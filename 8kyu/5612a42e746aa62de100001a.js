// Decibel Scale

// The following formula is called the Decibel Scale:

// B = 10 log10 ( I / 10 to the pow of -12)

// Decibel Scale Formula

// The Decibel Scale is used to determine the loudness of a sound, measured in dB:

// β is the result we want, defined in dB;
// We multiply the result of the logarithmic operation by 10, otherwise it'll be called "Bel Scale";
// We provide I, the intensity of the sound wave we need to find the loudness of, which is, for the purposes of this Kata, measured in 2D space and, hence, in Watts per square meter;
// Finally, we divide the intensity by the threshold of human hearing, also measured in Watts per square meter. This is the softest possible sound a human ear can hear;
// Since the threshold of human hearing involves an extremely small, long number, we need to utilize a logarithmic operation that will provide us the result in a convenient way.

// Your task is to simply calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.

// Results are automatically rounded to the nearest integer by the test cases.


function dBScale(intensity) {
  return 10 * Math.log10(intensity / Math.pow(10, -12))
}

console.log(Math.round(dBScale(Math.pow(10, -11))));
// 10


// Solution 1
const dBScale = intensity => 10 * (12 + Math.log10(intensity));


// Solution 2
const dBScale = (i) => 10*Math.log10(i/Math.pow(10,-12))


// Solution 3
const dBScale = intensity =>
  10 * Math.log10(intensity) + 120;


// Solution 4
function dBScale(intensity) {
  return 10*Math.log10(intensity/1e-12);
}


// Solution 5
function dBScale(intensity) {
  return 10 * Math.log10(intensity / Math.pow(10, -12));
}


// Solution 6
function dBScale(intensity) {
  const tres = intensity / Math.pow(10,-12);
  const db = 10 * Math.log10(tres);
  return db;
}


// Solution 7
const dBScale = (intensity) => Math.log10(intensity / Math.pow(10, -12)) * 10;


// Solution 8
function dBScale(intensity) {
  return 10 * Math.log10(intensity * 10**12);
}


// Solution 9
function dBScale(intensity) {
  Beta=intensity*Math.pow(10,12);
  value=Math.log10(Beta)*10;
  return Math.round(value)
}


// Solution 10
const dBScale = intensity => 10 * Math.log10(intensity / 10 ** -12)


// Solution 11
function dBScale(intensity) {
  return Math.round(10*Math.log10(intensity/1e-12))
}


// Solution 12
function dBScale(intensity) {
  return 10*(Math.log10(intensity)+12);
}


// Solution 13
const dBScale = (i) => 10 * Math.log10(i) + 120;


// Solution 14
const dBScale = i => 10 * Math.log(i / Math.pow(10, -12)) / Math.log(10);