// Tribonacci Sequence

// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3(instead of 2) numbers of the sequence to generate the next.And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input(AKA signature), we have this sequence:

// [1, 1, 1, 3, 5, 9, 17, 31, ...]

// But what if we started with [0, 0, 1] as a signature ? As starting with [0, 1] instead of[1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

// [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]

// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array / list, returns the first n elements - signature included of the so seeded sequence.

// Signature will always contain 3 numbers; n will always be a non - negative number; if n == 0, then return an empty array(except in C return NULL) and be ready for anything else which is not clearly specified;)

function tribonacci(signature, n) {

    if (n < 3) {
        return signature.slice(0, n);    
    } else {
        let output = [...signature];

        for (let i = 3; i < n; i++) {
            // console.log(`${output[i - 3]} + ${output[i - 2]} + ${output[i - 1]} = ${output[i - 3] + output[i - 2] + output[i - 1]}`)
            output[i] = output[i-3] + output[i-2] + output[i-1];
        }

        return output;
    }

}

console.log(tribonacci([1,1,1],10));
// [1,1,1,3,5,9,17,31,57,105])
console.log(tribonacci([0,0,1],10));
// [0,0,1,1,2,4,7,13,24,44])
console.log(tribonacci([0,1,1],10));
// [0,1,1,2,4,7,13,24,44,81])
console.log(tribonacci([1,0,0],10));
// [1,0,0,1,1,2,4,7,13,24])
console.log(tribonacci([0,0,0],10));
// [0,0,0,0,0,0,0,0,0,0])
console.log(tribonacci([1,2,3],10));
// [1,2,3,6,11,20,37,68,125,230])
console.log(tribonacci([3,2,1],10));
// [3,2,1,6,9,16,31,56,103,190])
console.log(tribonacci([1,1,1],1));
// [1])
console.log(tribonacci([300,200,100],0));
// [])
console.log(tribonacci([0.5,0.5,0.5],30));
// [0.5,0.5,0.5,1.5,2.5,4.5,8.5,15.5,28.5,52.5,96.5,177.5,326.5,600.5,1104.5,2031.5,3736.5,6872.5,12640.5,23249.5,42762.5,78652.5,144664.5,266079.5,489396.5,900140.5,1655616.5,3045153.5,5600910.5,10301680.5])


// Solution 1
function tribonacci(signature, n) {
    for (var i = 0; i < n - 3; i++) { // iterate n times
        signature.push(signature[i] + signature[i + 1] + signature[i + 2]); // add last 3 array items and push to trib
    }
    return signature.slice(0, n); //return trib - length of n
}


// Solution 2
function tribonacci(signature, n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
        result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
    }
    return result;
}


// Solution 3
function tribonacci(s, n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push((i < 3) ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr;
}


// Solution 4
function tribonacci(signature, n) {
    while (signature.length < n) {
        signature.push(signature.slice(-3).reduce(sum));
    }
    return signature.slice(0, n);
}

function sum(a, b) { return a + b }


// Solution 5
function tribonacci(sign, n) {
    for (var i = 3; i < n; i++) {
        sign[i] = sign[i - 1] + sign[i - 2] + sign[i - 3];
    }
    return sign.slice(0, n);
}


// Solution 6
function tribonacci(signature, n) {
    while (signature.length < n) {
        signature.push(signature.slice(-3).reduce((a, b) => a + b));
    }
    return signature.slice(0, n);
}


// Solution 7
function tribonacci(arr, n) {
    if (n < 3) return arr.slice(0, n);
    return [arr[0]].concat(tribonacci([arr[1], arr[2], arr[0] + arr[1] + arr[2]], n - 1));
}


// Solution 8
function tribonacci(signature, n) {
    var l = signature.splice(0, n);

    for (var i = 3; i < n; i++)
        l.push(l[i - 3] + l[i - 2] + l[i - 1]);

    return l;
}


// Solution 9
function tribonacci(signature, n) {
    //your code here
    var result = signature;

    if (n == 0) {
        return [];
    }
    if (n <= 3) {
        return result.slice(0, n)
    }

    function sum(a, b) {
        return a + b;
    }

    for (var i = 0; i < n - 3; i++) {
        result.push(result.slice(i, i + 3).reduce(sum, 0))
    }

    return result;
}


// Solution 10
function tribonacci(signature, n) {
    var res = [];

    if (n == 0) {
        return [];
    } else if (n <= 3) {
        for (let i = 0; i < n; i++) {
            res.push(signature[i]);
        }
        return res;
    }

    return myTribonacciRecursive(signature, n);
}

function myTribonacci(signature, n) {
    var nextFib = 0;
    var singLeng = signature.length;
    while (singLeng < n) {
        nextFib = signature[singLeng - 3] + signature[singLeng - 2] + signature[singLeng - 1];
        signature.push(nextFib);
        singLeng++;
    }

    return signature;
}

function myTribonacciRecursive(signature, n) {
    if (n <= 3) {
        return signature;
    } else {
        var sum = signature[signature.length - 3] + signature[signature.length - 2] + signature[signature.length - 1];
        signature.push(sum);
        return myTribonacciRecursive(signature, n - 1);
    }

}


// Solution 11
function tribonacci(signature, n) {
    while (signature.length < n)
        signature.push(signature.slice(-3).reduce((total, num) => { return total + num }));
    return signature.slice(0, n);
}


// Solution 12
function tribonacci(signature, n) {
    var result = signature.slice(0, n);
    for (var index = 3; index < n; index++) {
        result[index] = result[index - 1] + result[index - 2] + result[index - 3];
    }
    return result;
}