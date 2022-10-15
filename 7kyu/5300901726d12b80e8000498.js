// Fizz Buzz

// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// N will never be less than 1.

// Method calling example:

// fizzbuzz(3)-- > [1, 2, "Fizz"]

function fizzbuzz(n) {

    let output = [];

    for (let i = 1; i <= n; i++ ) {
        if (i % 5 === 0 && i % 3 === 0) {
            output.push('FizzBuzz')
        } else if (i % 5 === 0) {
            output.push('Buzz')
        } else if (i % 3 === 0) {
            output.push('Fizz')
        } else {
            output.push(i)
        }
    }

    return output;

}

console.log(fizzbuzz(10));
// [1,2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz']


// Solution 1
function fizzbuzz(n) {
    var i = 1, arr = [];
    while (i <= n) {
        var fizz = (i % 3 == 0);
        var buzz = (i % 5 == 0);
        if (fizz || buzz) {
            arr.push((fizz ? "Fizz" : "") + (buzz ? "Buzz" : ""));
        }
        else {
            arr.push(i);
        }
        i++;
    }
    return arr;
}

var fizzify = fizzbuzz;


// Solution 2
var fizzify = fizzbuzz = function (n) {
    return Array.apply(null, new Array(n)).map(function (e, i) {
        return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
    });
}


// Solution 3
function fizzbuzz(n) {
    var fizzified = [];
    for (var i = 1; i <= n; i++) {
        var val = '';
        if (i % 3 == 0) val += 'Fizz';
        if (i % 5 == 0) val += 'Buzz';
        fizzified.push(val || i);
    }
    return fizzified;
}

function fizzify(n) {
    return fizzbuzz(n);
}


// Solution 4
function fizzify(i) {
    if (i % 15 == 0)
        return 'FizzBuzz';
    else if (i % 5 == 0)
        return 'Buzz';
    else if (i % 3 == 0)
        return 'Fizz';
    else
        return i;
}

function fizzbuzz(n) {
    var res = [];
    for (var i = 1; i <= n; ++i) res.push(fizzify(i));
    return res;
}



// Solution 5
fizzify = fizzbuzz;
function fizzbuzz(n) {
  return [...Array(n+1).keys()].slice(1).map(x=>x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':x);
}


// Solution 6
function fizzbuzz(n) {
    var out = [];
    for (var i = 1; i <= n; i++) {
        var res = '';
        if (i % 3 == 0) res += 'Fizz';
        if (i % 5 == 0) res += 'Buzz';
        out.push(res.length == 0 ? i : res);
    }
    return out;
}
var fizzify = fizzbuzz;


// Solution 7
const fizzbuzz = (n) =>
    Array.from({ length: n }, (_, i) => i + 1)
        .map(el => el % 3 === 0 && el % 5 === 0 ? 'FizzBuzz' :
            el % 3 === 0 ? 'Fizz' : el % 5 === 0 ? 'Buzz' : el)


// Solution 8
function fizzbuzz(n) {
    //declare the array variable
    var list = [];
    //declare for loop
    for (let i = 1; i <= n; i++)
    //When number is divisible by both 3 & 5
    {
        var num = "";
        if (i % 3 == 0 && i % 5 == 0) {
            num = "FizzBuzz"
            list.push(num);
        }
        //When a number is divisible by three only
        else if (i % 3 == 0) {
            num = "Fizz";
            list.push(num);
        }
        //When a number is divisible by five only
        else if (i % 5 == 0) {
            num = "Buzz";
            list.push(num);
        }
        //When a number isn't divisible by either
        else {
            num = i;
            list.push(i)
        };
        ;
    }
    // return the list
    return list;

}


// Solution 9
function fizzbuzz(n)
{
  let arr = [];
  for (let i = n; i > 0; i--) {
    i%3 === 0 && i%5 === 0 ? arr.unshift('FizzBuzz') :
    i%3 === 0 ? arr.unshift('Fizz') :
    i%5 === 0 ? arr.unshift('Buzz') : arr.unshift(i);
  }
  return arr;
}


// Solution 10
const fizzbuzz = n => Array(n).fill(1).map((x, y) => x + y).map(n => (n % 3 ? '' : 'Fizz') + (n % 5 ? '' : 'Buzz') || n);


// Solution 11
const fizzbuzz = n =>
    [...Array(n)].map((val, idx) => !(++idx % 15) ? `FizzBuzz` : !(idx % 5) ? `Buzz` : !(idx % 3) ? `Fizz` : idx);


// Solution 12
function fizzbuzz(n) {
    var arr = [], Fizz, Buzz, i;
    for (i = 1; i <= n; i++) {
        Fizz = i % 3 == 0 ? 'Fizz' : '';
        Buzz = i % 5 == 0 ? 'Buzz' : '';
        arr.push(Fizz || Buzz ? Fizz + Buzz : i);
    }
    return arr;
}
var fizzify = fizzbuzz;