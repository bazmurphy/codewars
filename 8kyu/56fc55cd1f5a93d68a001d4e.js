// How many stairs will Suzuki climb in 20 years ?

// Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. 
// Some days he climbs more stairs than others depending on the number of students he must train in the morning. 
// He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

// The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

// 20_year_estimate = one_year_total * 20

// You will receive the following data structure representing the stairs Suzuki logged in a year. 
// You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

// stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

// Make sure your solution takes into account all of the nesting within the stairs array.

// Each weekday in the stairs array is an array.

// sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]

// Your function should return the 20 year estimate of the stairs climbed using the formula above. 

function stairsIn20(s) {
    
    // console.log('s', s)
    // console.log('s.length', s.length)

    let sum = 0;
    // let days = 0;

    // for (let i = 0; i < s.length; i++) {
    //     // console.log(s[i])
    //     days += (s[i].length - 1)
    //     for (let j = 0; j < s[i].length; j++) {
    //         // console.log(s[i][j])
    //         sum += s[i][j]
    //     }
    // }

    for (element in s) {
        for (item in s[element]) {
            sum += s[element][item]
        }
    }

    // console.log('sum', sum)
    // console.log('days', days)

    return sum * 20;
}


// Solution 1
function stairsIn20(a) {
    return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}


// Solution 2
function stairsIn20(s) {
    for (var i = 0, sum = 0; i < s.length; i++) {
        for (var j = 0; j < s[i].length; j++) {
            sum += s[i][j];
        }
    }
    return sum * 20;
}


// Solution 3
function stairsIn20(s) {
    var arr = [].concat(...s)
    var newArr = [].concat(...arr)
    return newArr.reduce((a, b) => a + b) * 20
}


// Solution 4
function stairsIn20(s) {
    return s.reduce((a, b) => a.concat(b)).reduce((a, b) => a + b) * 20;
}


// Solution 5
function stairsIn20(stairs) {
    let total = 0;
    for (value of stairs) {
        for (num of value) {
            total += num;
        }
    }
    return total *= 20
}


// Solution 6
stairsIn20 = s => s.map(x => x.reduce((a, b) => a + b)).reduce((a, b) => a + b) * 20



// Solution 7
function stairsIn20(s) {
    let stairs = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < s[i].length; j++) {
            stairs += s[i][j];
        }
    }
    return stairs * 20;
}


// Solution 8
const sum = A => A.reduce((a, b) => a + b, 0)
const stairsIn20 = s => 20 * sum(s.map(sum))


// Solution 9
function stairsIn20(s) {
    return s
        .reduce((arr, day) => arr.concat(...day), [])
        .reduce((total, stairs) => total + stairs, 0) * 20
}


// Solution 10
const stairsIn20 = s =>
    [].concat(...s).reduce((pre, val) => pre + val, 0) * 20;


// Solution 11
function stairsIn20(s) {
    return [].concat(...s).reduce((sum, el) => sum + el, 0) * 20;
}


// Solution 12
function stairsIn20(s) {
    return s.map(el => (el.reduce((a, i) => a + i))).reduce((x, y) => x + y) * 20
}