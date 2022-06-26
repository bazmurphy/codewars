// Cat years, Dog years

// Kata Task

// I have a cat and a dog.

// I got them at the same time as kitten / puppy.That was humanYears years ago.

// Return their respective ages now as [humanYears, catYears, dogYears]

// NOTES:

// humanYears >= 1
// humanYears are whole numbers only

// Cat Years

// 15 cat years for first year
// + 9 cat years for second year
// + 4 cat years for each year after that

// Dog Years

// 15 dog years for first year
// + 9 dog years for second year
// + 5 dog years for each year after that

// References

// http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
// http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html


var humanYearsCatYearsDogYears = function (humanYears) {

    let catYears;
    let dogYears;

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 24;
        dogYears = 24;
    } else if (humanYears > 2) {
        catYears = 24 + ((humanYears - 2) * 4)
        dogYears = 24 + ((humanYears - 2) * 5)
    }   

    return [humanYears, catYears, dogYears];
}

console.log(humanYearsCatYearsDogYears(1));
// [1, 15, 15]
console.log(humanYearsCatYearsDogYears(2));
// [2, 24, 24]
console.log(humanYearsCatYearsDogYears(10));
// [10, 56, 64]


// Solution 1
var humanYearsCatYearsDogYears = function (y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y - 2) * 4 + 24, (y - 2) * 5 + 24]
}


// Solution 2
const humanYearsCatYearsDogYears = (humanYears) => {
    let catYears = 0;
    let dogYears = 0;

    for (let i = 1; i <= humanYears; i++) {
        if (i === 1) {
            catYears += 15;
            dogYears += 15;
        }
        else if (i === 2) {
            catYears += 9;
            dogYears += 9;
        }
        else {
            catYears += 4;
            dogYears += 5;
        }
    }
    return [humanYears, catYears, dogYears];
}


// Solution 3
const humanYearsCatYearsDogYears = humanYears => [
    humanYears,
    (humanYears - 1 ? 16 : 11) + 4 * humanYears,
    (humanYears - 1 ? 14 : 10) + 5 * humanYears,
];


// Solution 4
function humanYearsCatYearsDogYears(humanYears) {
    switch (humanYears) {
        case 1:
            return [1, 15, 15]
        case 2:
            return [2, 24, 24];
        default:
            return [humanYears, (humanYears - 2) * 4 + 24, (humanYears - 2) * 5 + 24];
    }

}


// Solution 5
var humanYearsCatYearsDogYears = function (humanYears) {
    var catYears = 0;
    var dogYears = 0;

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 24;
        dogYears = 24;
    } else if (humanYears > 2) {
        catYears = 24 + (humanYears - 2) * 4;
        dogYears = 24 + (humanYears - 2) * 5;
    }

    return [humanYears, catYears, dogYears];
}


// Solution 6
var humanYearsCatYearsDogYears = function (humanYears) {
    var initial = 15;
    var yearTwo = 9;
    var catYearsAfterTwo = 4;
    var dogYearsAfterTwo = 5;
    var catYears = initial
    var dogYears = initial
    if (humanYears <= 1) {
        return [humanYears, catYears, dogYears]
    }
    catYears += yearTwo
    dogYears += yearTwo
    if (humanYears === 2) {
        return [humanYears, catYears, dogYears]
    }
    var yearsAfterTwo = humanYears - 2
    catYears += (yearsAfterTwo * catYearsAfterTwo);
    dogYears += (yearsAfterTwo * dogYearsAfterTwo);
    return [humanYears, catYears, dogYears];
}


// Solution 7
var humanYearsCatYearsDogYears = x => x == 1 ? [1, 15, 15] : x == 2 ? [2, 24, 24] : [x, 24 + (4 * (x - 2)), 24 + (5 * (x - 2))];


// Solution 8
const humanYearsCatYearsDogYears = h => [h, (h - 1 ? 16 : 11) + 4 * h, (h - 1 ? 14 : 10) + 5 * h];


// Solution 9
const humanYearsCatYearsDogYears = $ =>
    $ == 1 ? [1, 15, 15] :
        $ == 2 ? [2, 24, 24] :
            [$, 24 + (4 * ($ - 2)), 24 + (5 * ($ - 2))];


// Solution 10
const humanYearsCatYearsDogYears = humanYears =>
    [humanYears, (--humanYears ? 20 : 15) + 4 * humanYears, (humanYears ? 19 : 15) + 5 * humanYears];


// Solution 11
var humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears >= 2) {
        return [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5];
    }
    return [humanYears, 15, 15];
};


// Solution 12
var humanYearsCatYearsDogYears = function (humanYears) {
    let humanAge, catAge, dogAge;
    let cont = 1;
    humanAge = humanYears;
    while (cont <= 3) {
        switch (cont) {
            case 1:
                {
                    catAge = 15;
                    dogAge = 15
                    humanYears--;
                    if (!humanYears) break;
                }
                break;
            case 2:
                {
                    if (humanYears > 0) {
                        catAge += 9;
                        dogAge += 9;
                        humanYears--;
                        if (!humanYears) break;
                    }

                }
                break;
            case 3:
                {
                    if (humanYears > 0) {
                        catAge += humanYears * 4;
                        dogAge += humanYears * 5;
                        humanYears--;
                    }
                }
                break;
        }
        cont++;
    }

    return [humanAge, catAge, dogAge];

}