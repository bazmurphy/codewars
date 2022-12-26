// Improving Math.round(x)

// Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:

// Math.round(3.14); // Returns 3
// Math.round(17.43); // 17
// Math.round(198.499); // 198
// Math.round(200.5); // 201
// Math.round(1784.76); // 1785

// But that is sometimes not enough! What if we wanted to round 3.1415926535 to two decimal places? While some languages (such as PHP) has a round() function that supports rounding to a specified number of decimal places (e.g. <?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified) */ ?>), Javascript does not!
// Task

// Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

// You may find the following Math methods useful:

// Math.round(x) (of course)
// Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)

Math.roundTo = function (number, precision) {
  return parseFloat(number.toFixed(precision));
}

console.log(Math.roundTo(3.1415926535, 4));
// 3.1416
console.log(Math.roundTo(4, 5));
// 4
console.log(Math.roundTo(4.1235343424, 6));
// 4.123534
console.log(Math.roundTo(5.3035802, 3));
// 5.304
console.log(Math.roundTo(0.9384930193848595, 15));
// 0.938493019384860
console.log(Math.roundTo(9.9999, 3));
// 10


// Solution 1
Math.roundTo = (number, precision) => Number(number.toFixed(precision));


// Solution 2
Math.roundTo = function (number, precision) {
  return Math.round(number * Math.pow(10, precision)) / Math.pow(10, precision);
}


// Solution 3
Math.roundTo = function (number, precision) {
  return +(number.toFixed(precision));
}


// Solution 4
Math.roundTo = function (number, precision) {
  var calculatedPrecision = Math.pow(10, precision);
  return (Math.round(number * calculatedPrecision)) / calculatedPrecision;
};


// Solution 5
Math.roundTo = function (number, precision) {
  return Number(number.toFixed(precision));
}


// Solution 6
Math.roundTo = (number, precision)=> +number.toFixed(precision);


// Solution 7
Math.roundTo = (number, precision) =>
  Math.round(number * `1e${precision}`) / `1e${precision}`;


// Solution 8
Math.roundTo = (n, p) => Math.round(n * 10 ** p) / 10 ** p


// Solution 9
Math.roundTo = (n, p) => +n.toFixed(p)


// Solution 10
Math.roundTo=(x,p)=>+x.toFixed(p)


// Solution 11
Math.roundTo = (number, precision) => +(number.toFixed(precision))


// Solution 12
Math.roundTo = function(number, precision) {
  n = Math.pow(10, precision);
  return Math.round(number * n) / n;
}


// Solution 13
Math.roundTo = (n, p) => 1 * n.toFixed(p);


// Solution 14
Math.roundTo = function (number, precision) {
	let arr = number.toString().split('');
	let d = false, d_index=false, leading=false;
	let n='';
  //loop through number, creating before and after
	for(var i=0;i<arr.length;i++){
		if(arr[i] == '.'){
			d=true;
			d_index=i;
		} else if(!d){
			n += arr[i];
		} else if(i <= d_index+precision){
			n += arr[i];
		}
	}
  //check for leading 0
  if(arr[0] === '0'){
    leading = true;
  }
  //parse before and after strings to ints
  n = parseInt(n,10);
  //check if rounding up
  if(arr[d_index+precision+1] >= 5){
    if(n.toString().length != (n+1).toString().length){
      d_index++;
    }
    n++;
  }
  //add in decimal point
  let n_arr = n.toString().split('');
  let n2 = (leading) ? '0' : '';
  for(var i=0;i<n_arr.length;i++){
    if((!leading && i===d_index) || (leading && i===(d_index-1))){
      n2 += '.';
    }
    n2 += n_arr[i];
  }
  //return
	return parseFloat(n2);
}

