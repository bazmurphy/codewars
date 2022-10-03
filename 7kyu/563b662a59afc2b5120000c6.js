// Growth of a Population

// In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater or equal to p = 1200 inhabitants ?

// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants(** number of inhabitants is an integer **)

// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213

// It will need 3 entire years.

// More generally given parameters:

// p0, percent, aug(inhabitants coming or leaving each year), p(population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers(> 0)

// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// Note:

// Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.


function nbYear(p0, percent, aug, p) {
    // p0 = starting number
    // percent = percent added on top each year
    // aug = additional people joining (OR leaving)
    // p = population to reach.. how many years?

    let years = 0;

    for (let i = 0; p0 < p; i++) {
        p0 = p0 + parseInt(p0 * percent / 100) + aug
        years++
        // console.log(`i: ${i} p0:${p0} percent:${percent} aug:${aug} p:${p} years: ${years}`)
    }

    return years
}

console.log(nbYear(1500, 5, 100, 5000));
// 15
console.log(nbYear(1500000, 2.5, 10000, 2000000));
// 10
console.log(nbYear(1500000, 0.25, 1000, 2000000));
// 94


// Solution 1
function nbYear(p0, percent, aug, p) {

    for (var years = 0; p0 < p; years++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
}


// Solution 2
function nbYear(p0, percent, aug, p) {
    var count = 0;
    while (p0 < p) {
        p0 = Math.floor((1 + percent / 100) * p0 + aug);
        count++
    }
    return count;
}


// Solution 3
function nbYear(p0, percent, aug, p) {
    var i = 1;
    var mult = 1 + percent / 100.0;
    var prev = p0;
    while (prev < p) {
        var ne = Math.floor(prev * mult + aug)
        prev = ne
        i++;
    }
    return (i - 1);
}


// Solution 4
function nbYear(p0, percent, aug, p) {
    let n
    for (n = 1; p0 < p; n++) {
        p0 += parseInt(p0 * (percent / 100))
        p0 += aug
    }
    return n - 1
}


// Solution 5
//Recursive function: exit condition p0 >= p
function nbYear(p0, percent, aug, p) {
    p0 = Math.floor(p0 * (1 + percent / 100) + aug)
    if (p0 >= p)
        return 1
    return nbYear(p0, percent, aug, p) + 1
}


// Solution 6
nbYear = f = (a, b, c, d, r = 0) => d / a > 1 ? f(a + ~~(a * b / 1e2) + c, b, c, d, ++r) : r


// Solution 7
function nbYear(p0, percent, aug, p, i = 1) {
    const per = percent / 100;
    const pp = parseInt(p0 + p0 * per + aug);
    if (pp >= p)
        return i;
    return nbYear(pp, percent, aug, p, i + 1);
}


// Solution 8
function nbYear(p0, percent, aug, p) {
    let years = 0;
    for (p0; p0 < p; p0 += Math.floor(p0 * percent * 0.01 + aug)) {
        years++;
    }
    return years;
}


// Solution 9
function nbYear(p0, percent, aug, p) {
    let result = 0;
    while (p0 < p) {
        p0 += Math.floor(p0 * percent / 100 + aug);
        result++;
    }
    return result;
}


// Solution 10
nbYear = f = (a, b, c, d) => a < d ? 1 + f(a + a * b / 100 + c | 0, b, c, d) : 0


// Solution 11
function nbYear(p0, percent, aug, p, res = 1) {
    return p <= p0 ? --res : nbYear(Math.floor(p0 * (1 + percent / 100) + aug), percent, aug, p, ++res);
}