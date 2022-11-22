// Tortoise racing

// Description:

// Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

// When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

// More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

// The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

// If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

// Examples:

// (form of the result depends on the language)

// race(720, 850, 70) => [0, 32, 18] or "0 32 18"
// race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

// Note:

// See other examples in "Your test cases".

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// ** Hints for people who don't know how to convert to hours, minutes, seconds:

// Tortoises don't care about fractions of seconds
// Think of calculation by hand using only integers (in your code use or simulate integer division)
// or Google: "convert decimal time to hours minutes seconds"

function race(v1, v2, g) {

  if (v1 >= v2) {
    return null;
  }

  // v1 is meter per hour 
  // v2 is meter per hour
  // g is GAP at the start in meters

  // v1 is going 720m per hour
  // v2 is going 850m per hour
  // the gap is 70m

  // 850m - 720m = every hour v2 gains 130m
  // the gap is 70m
  // so it takes her 70 / 130 to catch up
  // that returns a decimal

  // g / (v2 - v1)  
  let decimalTime = g / (v2 - v1);
  // console.log(decimalTime);

  // then convert the decimal to hours / minutes / seconds
  decimalTime = decimalTime * 60 * 60;
  // console.log(decimalTime);

  const hours = Math.floor((decimalTime / (60 * 60)));
  
  decimalTime = decimalTime - (hours * 60 * 60);
  // console.log(decimalTime);
  
  const minutes = Math.floor((decimalTime / 60));
  
  decimalTime = decimalTime - (minutes * 60);
  // console.log(decimalTime);
  
  const seconds = Math.floor(decimalTime);

  return [hours, minutes, seconds];
}

console.log(race(720, 850, 70));
// [0, 32, 18]
console.log(race(80, 91, 37));
// [3, 21, 49]
console.log(race(80, 100, 40));
// [2, 0, 0]
console.log(race(720, 850, 37));
// [0, 17, 4]


// Solution 1
function race(v1, v2, g){
  let time=g/(v2-v1);
  return v2>v1 ? [Math.floor(time),Math.floor(time*60%60),Math.floor(time*3600%60)] : null;
}


// Solution 2
function race(v1, v2, g) {
  if (v2 < v1) { return null; }
  
  var seconds = Math.floor(g / (v2 - v1) * 3600);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor((seconds - h * 3600) / 60);
  var s = seconds - h * 3600 - m * 60;
  
  return [h, m, s];
}


// Solution 3
function race(v1, v2, g) {
    if (v1 > v2) return null
    // d1 = v1 * t + g
    // d2 = v2 * t
    // v1 * t + g = v2 * t
    // t (v2 - v1) = g
    // t = g / (v2 - v1)
    let time = g / (v2 - v1)
    
    let minutesPerHour = 60
    let secondsPerHour = 60 * 60
    let secondsPerMinute = 60
    
    let hours   = Math.floor(time)
    let minutes = Math.floor(time * minutesPerHour 
                            - hours * minutesPerHour)
    let seconds = Math.floor(time * secondsPerHour
                            - hours * secondsPerHour 
                            - minutes * secondsPerMinute)
    
    return [hours, minutes, seconds]
}


// Solution 4
function race (v1, v2, g) {

  if (v1 >= v2) return null

  const time = g / ( v2 - v1 )

  let hours = Math.floor(time)
  let minutes = Math.floor((time * 60) % 60)
  let seconds = Math.floor((time * 3600) % 60)

  return [ hours, minutes, seconds ]
}


// Solution 5
function race(v1, v2, g) {
    if (v1 >= v2) {
      return null;
    }
    var time = new Date (g / (v2 - v1) * 3600 * 1000);
    return [time.getHours(), time.getMinutes(), time.getSeconds()];
}


// Solution 6
const race = (v1, v2, g, t = g / (v2 - v1)) =>
  v1 < v2 && [t ^ 0, t * 60 % 60 ^ 0, t * 3600 % 60 ^ 0] || null;


// Solution 7
function race(v1, v2, g) {
    return v2 >= v1 ? [
      ~~( g/(v2-v1) ),
      ~~( g/(v2-v1)*60 )%60,
      ~~( g/(v2-v1)*60**2 )%60
    ] : null
}


// Solution 8
race=(v1,v2,g)=>(t=g/(v2-v1),t<0?null:[t,t*60%60,t*3600%60].map(Math.floor))


// Solution 9
function race(v1, v2, g) {
    var d = v2 - v1;
    if (d <= 0) return null;
    var h = ~~(g / d);
    var r = g % d;
    var mn = ~~(r * 60 / d);
    var s = ~~((r * 60 % d) * 60 / d);
    return [h, mn, s]
}


// Solution 10
function race(v1, v2, g) {
  let t = g/(v2-v1);
  return t < 0 ? null : [Math.floor(t), Math.floor(t*60)%60, Math.floor(t*3600)%60];
}


// Solution 11
function race(v1, v2, g) {
    if(v1>=v2) {return null };
    var result = g/(v2-v1);
    var secs = result*3600;
  
    var hours = Math.floor(secs / (60 * 60));
   
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
 
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.floor(divisor_for_seconds);
    return arr = [hours,minutes,seconds]; 
}


// Solution 12
function race(v1, v2, g) { 
  if (v1 >= v2) return null;
  
  var t = ( g / ( v2 - v1 ) ) * 60;
  
  var min = parseInt(t % 60);
  var hr = parseInt(t / 60); 
  var sec = parseInt(60 * ( (t*100) % 100) / 100);
  
  return [hr, min, sec];
}


// Solution 13
function race(v1, v2, g) {
  const q = g / (v2 - v1)
  return v2 < v1 ? null : [~~q, ~~(q*60%60), ~~(q*3600%60)]
}


// Solution 14
function race(v1, v2, g) {
  if ( v1 > v2 ) return null;
  const t = g/(v2-v1)*3600;
  return [Math.floor(t/3600),Math.floor(t%3600/60),Math.floor(t%3600%60)]
}