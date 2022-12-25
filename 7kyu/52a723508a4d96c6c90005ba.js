// 99 Bottles of Beer

// Instructions

// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: 
// each line should be a separate element - see the example at the bottom.

// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters
// Lyrics

//     99 bottles of beer on the wall, 99 bottles of beer.
//     Take one down and pass it around, 98 bottles of beer on the wall.

//     98 bottles of beer on the wall, 98 bottles of beer.
//     Take one down and pass it around, 97 bottles of beer on the wall.

//     ...and so on...

//     3 bottles of beer on the wall, 3 bottles of beer.
//     Take one down and pass it around, 2 bottles of beer on the wall.

//     2 bottles of beer on the wall, 2 bottles of beer.
//     Take one down and pass it around, 1 bottle of beer on the wall.

//     1 bottle of beer on the wall, 1 bottle of beer.
//     Take one down and pass it around, no more bottles of beer on the wall.

//     No more bottles of beer on the wall, no more bottles of beer.
//     Go to the store and buy some more, 99 bottles of beer on the wall.

// Example

// [ "99 bottles of beer on the wall, 99 bottles of beer.",
//   "Take one down and pass it around, 98 bottles of beer on the wall.",
//   "98 bottles of beer on the wall, 98 bottles of beer.",

//   ...and so on...

//   "3 bottles of beer on the wall, 3 bottles of beer.",
//   "Take one down and pass it around, 2 bottles of beer on the wall.",
//   "2 bottles of beer on the wall, 2 bottles of beer.",
//   "Take one down and pass it around, 1 bottle of beer on the wall.",
//   "1 bottle of beer on the wall, 1 bottle of beer.",
//   "Take one down and pass it around, no more bottles of beer on the wall.",
//   "No more bottles of beer on the wall, no more bottles of beer.",
//   "Go to the store and buy some more, 99 bottles of beer on the wall." ]


function sing() {
    let result = [];
    
    for (let i = 99; i >= 0; i--) {
        if (i > 2) {
            result.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
            result.push(`Take one down and pass it around, ${i-1} bottles of beer on the wall.`)
        } else if (i === 2) {
            result.push(`${i} bottles of beer on the wall, ${i} bottles of beer.`)
            result.push(`Take one down and pass it around, ${i-1} bottle of beer on the wall.`)
        } else if (i === 1) {
            result.push(`${i} bottle of beer on the wall, ${i} bottle of beer.`)
            result.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
        } else if (i === 0) {
            result.push(`No more bottles of beer on the wall, no more bottles of beer.`)
            result.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
        }
    }
    
    return result;
};

console.log(sing());




// Solution 1
var sing = function () {
    // The most evil kata so far :)
    var lyrics = [];
    for (var i = 99; i >= 3; i--) {
      lyrics.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
      lyrics.push('Take one down and pass it around, ' + (i - 1) + ' bottles of beer on the wall.');
    }
    return lyrics.concat([
      '2 bottles of beer on the wall, 2 bottles of beer.',
      'Take one down and pass it around, 1 bottle of beer on the wall.',
      '1 bottle of beer on the wall, 1 bottle of beer.',
      'Take one down and pass it around, no more bottles of beer on the wall.',
      'No more bottles of beer on the wall, no more bottles of beer.',
      'Go to the store and buy some more, 99 bottles of beer on the wall.'
    ]);
};


// Solution 2
var sing = function () {
    var song = [];
    
    for (var i = 99; i > 0; i--){  
      song.push(i + ' ' + (i !== 1 ? 'bottles' : 'bottle') +' of beer on the wall, ' + i +(i !== 1 ? ' bottles' : ' bottle') + ' of beer.');
      song.push('Take one down and pass it around, ' + (i == 2 ? '1 bottle' : i !== 1 ? (i - 1) + ' bottles' : 'no more bottles' ) + ' of beer on the wall.');
    }
    
    song.push('No more bottles of beer on the wall, no more bottles of beer.');
    song.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
    
    return song;
};


// Solution 3
var sing = () => Array(195).fill(0).map( (el, i) => i % 2 ?
    `Take one down and pass it around, ${(197 - i) / 2} bottles of beer on the wall.` :
    `${(198 - i) / 2} bottles of beer on the wall, ${(198 - i) / 2} bottles of beer.`)
    .concat(
      [`Take one down and pass it around, 1 bottle of beer on the wall.`,
      `1 bottle of beer on the wall, 1 bottle of beer.`,
      `Take one down and pass it around, no more bottles of beer on the wall.`,
      `No more bottles of beer on the wall, no more bottles of beer.`,
      `Go to the store and buy some more, 99 bottles of beer on the wall.`]
);


// Solution 4
var sing = function () {
    // return the lyrics as a string ...
    var song = [];
    for (var i = 99; i > 1; i--) {
      song.push(i + ' bottles of beer on the wall, ' + i + ' bottles of beer.');
      if (i-1==1)
        song.push('Take one down and pass it around, ' + (i-1) + ' bottle of beer on the wall.');
      else
        song.push('Take one down and pass it around, ' + (i-1) + ' bottles of beer on the wall.');
    };
    song.push('1 bottle of beer on the wall, 1 bottle of beer.');
    song.push('Take one down and pass it around, no more bottles of beer on the wall.');
    song.push('No more bottles of beer on the wall, no more bottles of beer.');
    song.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
    return song;
};


// Solution 5
const sing = () =>
  [...Array(195)].map((_, idx) => idx % 2 ?
    `Take one down and pass it around, ${(197 - idx) / 2} bottles of beer on the wall.` :
    `${(198 - idx) / 2} bottles of beer on the wall, ${(198 - idx) / 2} bottles of beer.`)
    .concat([`Take one down and pass it around, 1 bottle of beer on the wall.`,
      `1 bottle of beer on the wall, 1 bottle of beer.`,
      `Take one down and pass it around, no more bottles of beer on the wall.`,
      `No more bottles of beer on the wall, no more bottles of beer.`,
      `Go to the store and buy some more, 99 bottles of beer on the wall.`]);


// Solution 6
var sing = function () {
    var lines = [], b=99, b$;
    while( b ){
      b$ = b +" bottle" +(b>1&&"s"||"") + " of beer";
      lines.push( b$+ " on the wall, "+ b$ +".")
      b$ = (--b)? b +" bottle"+(b>1&&"s"||"") : "no more bottles";
      lines.push( "Take one down and pass it around, " + b$ + " of beer on the wall.")
    };
    return lines.concat( [
      "No more bottles of beer on the wall, no more bottles of beer.",
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    ]);
}


// Solution 7
var sing = function (x=99) {
    let res = []
    while(x>2) res.push(
      `${x} bottles of beer on the wall, ${x--} bottles of beer.`,
      `Take one down and pass it around, ${x} bottles of beer on the wall.`
    )
    res.push(
      '2 bottles of beer on the wall, 2 bottles of beer.',
      'Take one down and pass it around, 1 bottle of beer on the wall.',
      '1 bottle of beer on the wall, 1 bottle of beer.',
      'Take one down and pass it around, no more bottles of beer on the wall.',
      'No more bottles of beer on the wall, no more bottles of beer.',
      `Go to the store and buy some more, 99 bottles of beer on the wall.`
    )
    return res
};


// Solution 8
const sequence = function (count) {
    let list = [];
    for (let v = 0; v <= count; v+=1) {
      list.push(v);
    }
    return list;
};
  
  const sing = function () {
    const countLyric = v => (v > 1) ? `${v} bottles of beer on the wall, ${v} bottles of beer.` :
                            (v === 1) ? '1 bottle of beer on the wall, 1 bottle of beer.' : 
                            'No more bottles of beer on the wall, no more bottles of beer.';
    
    const nextLyric = v => (v > 1) ? `Take one down and pass it around, ${v-1} ${(v===2) ? 'bottle' : 'bottles'} of beer on the wall.` :
                           (v === 1) ? 'Take one down and pass it around, no more bottles of beer on the wall.' :
                           'Go to the store and buy some more, 99 bottles of beer on the wall.';
                           
    const verse = v => [countLyric(v), nextLyric(v)];
    const addVerse = (xa, v) => xa.concat(verse(v));
    
    return sequence(99).reverse().reduce(addVerse, []);
};


// Solution 9
var sing = function () {
    const result = [];
    for (let b = 99; b > 1; b--) {
      result.push(`${b} bottles of beer on the wall, ${b} bottles of beer.`);
      result.push(`Take one down and pass it around, ${b-1} bottle${b > 2 ? 's' : ''} of beer on the wall.`);
    }
    result.push('1 bottle of beer on the wall, 1 bottle of beer.');
    result.push('Take one down and pass it around, no more bottles of beer on the wall.');
    result.push('No more bottles of beer on the wall, no more bottles of beer.');
    result.push('Go to the store and buy some more, 99 bottles of beer on the wall.');
    return result;
};


// Solution 10
var sing = function () {
    let result = [],
        n = 99
    while (n > 2) {
      result.push(`${n} bottles of beer on the wall, ${n--} bottles of beer.`,
                  `Take one down and pass it around, ${n} bottles of beer on the wall.`)
    }
    result.push("2 bottles of beer on the wall, 2 bottles of beer.",
                "Take one down and pass it around, 1 bottle of beer on the wall.",
                "1 bottle of beer on the wall, 1 bottle of beer.",
                "Take one down and pass it around, no more bottles of beer on the wall.",
                "No more bottles of beer on the wall, no more bottles of beer.",
                "Go to the store and buy some more, 99 bottles of beer on the wall.")
    return result
};