// Delete occurrences of an element if it occurs more than n times

// Enough is enough!

// Alice and Bob were on a holiday. 
// Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. 
// However, Charlie doesn't like these sessions, since the motif usually repeats. 
// He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. 
// Luckily, Alice and Bob are able to encode the motif as a number. 
// Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task

// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {

    // console.log('arr', arr);

    let itemCount = {};

    for (let i = 0; i < arr.length; i++) {

        if (itemCount.hasOwnProperty([arr[i]]) === false) {
            itemCount[arr[i]] = 1;
        } else if (itemCount[arr[i]] < n) {
            itemCount[arr[i]] += 1;
        }
    }

    // console.log('itemCount', itemCount);

    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (itemCount[arr[i]] > 0) {
            output.push(arr[i])
            itemCount[arr[i]] -= 1;
        }
    }

    // console.log('itemCount', itemCount)

    return output;
}

console.log(deleteNth([20, 37, 20, 21], 1));
// [20, 37, 21]
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
// [1, 1, 3, 3, 7, 2, 2, 2]


// Solution 1
function deleteNth(arr, x) {
    var cache = {};
    return arr.filter(function (n) {
        cache[n] = (cache[n] || 0) + 1;
        return cache[n] <= x;
    });
}


// Solution 2
const deleteNth = (a, x) => {
    let m = {};
    return a.filter(v => (m[v] = m[v] + 1 || 1) <= x);
}


// Solution 3
function deleteNth(arr, x) {
    var count = {};
    return arr.filter(function (a) {
        count[a] = ~~count[a] + 1;
        return count[a] <= x;
    })
}


// Solution 4
function deleteNth(arr, x) {
    return arr.reduce(function (a, v) {
        return count(a, v) < x ? a.concat(v) : a;
    }, []);
}

function count(arr, z) {
    return arr.filter(function (q) { return z == q }).length;
}


// Solution 5
function deleteNth(arr, x) {
    var obj = {}
    return arr.filter(function (number) {
        obj[number] = obj[number] ? obj[number] + 1 : 1
        return obj[number] <= x
    })
}


// Solution 6
function deleteNth(arr, x) {
    while (true) {
        for (var i = 0; i < arr.length; ++i) {
            var count = 0;

            for (var j = 0; j < arr.length; ++j) {

                if (arr[i] === arr[j]) {
                    ++count;

                    if (count > x) {
                        arr.splice(j, 1);
                        break;
                    }
                }
            }
            if (j !== arr.length) break;
        }
        if (i === arr.length) break;
    }

    return arr;
}


// Solution 7
const deleteNth = (arr, x) => arr.filter((e, i) => arr.slice(0, i).filter(f => f == e).length < x);


// Solution 8
function deleteNth(arr, x) {
    var res = []
    var map = {}

    for (var i = 0; i < arr.length; i++) {
        var n = arr[i]
        var c = map[n] = (map[n] || 0) + 1
        if (c <= x) res.push(n)
    }

    return res
}


// Solution 9
function deleteNth(arr, x) {
    let h = {};
    return arr.filter((n) => (h[n] = ~~h[n] + 1) <= x);
}


// Solution 10
const deleteNth = (arr, n) => {
    let obj = {};
    return arr.filter(num => (
        obj[num] = (obj[num] || 0) + 1,
        obj[num] <= n
    ));
}


// Solution 11
function deleteNth(arr, x) {
    return arr.filter(
        (e, i) => arr.slice(0, i).filter(e2 => e2 == e).length < x
    );
}


// Solution 12
/**
 * Keep up to `n` of each element in the array.
 *
 * This solution builds a new array in one pass
 * of the given array for O(n) runtime complexity.
 */
function deleteNth(arr, n) {
    const map = new Map();
    const newArr = [];

    for (el of arr) {
        if (!map.has(el))              // Add to the map
            map.set(el, 1);
        else if (map.get(el) === n)    // Skip this element
            continue;
        else                           // Increment this element
            map.set(el, map.get(el) + 1);

        newArr.push(el);
    }

    return newArr;
}