// Money, Money, Money

// Mr.Scrooge has a sum of money 'P' that he wants to invest.
// Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly.
// After paying taxes 'T' for the year the new sum is re - invested.

// Note to Tax: not the invested principal is taxed, but only the year's accrued interest

// Example:

// Let P be the Principal = 1000.00      
// Let I be the Interest Rate = 0.05      
// Let T be the Tax Rate = 0.18      
// Let D be the Desired Sum = 1100.00


// After 1st Year-- >
//     P = 1041.00
// After 2nd Year-- >
//     P = 1083.86
// After 3rd Year-- >
//     P = 1128.30

// Thus Mr.Scrooge has to wait for 3 years for the initial principal to amount to the desired sum.

// Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr.Scrooge to get the desired sum.

// Assumption: Assume that Desired Principal 'D' is always greater than the initial principal.
// However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' this should return 0 Years.


function calculateYears(principal, interest, tax, desired) {
    
    let years = 0;

    while (principal < desired) {
        principal = principal + ((principal * interest) * (1 - tax));
        years++;
    }

    return years;

}

console.log(calculateYears(1000, 0.05, 0.18, 1100))
// 3
console.log(calculateYears(1000, 0.01625, 0.18, 1200))
// 14
console.log(calculateYears(1000, 0.05, 0.18, 1000))
// 0


// Solution 1
function calculateYears(principal, interest, tax, desired) {
    // your code
    var years = 0;
    while (principal < desired) {
        principal += (principal * interest) * (1 - tax);
        years++;
    }
    return years;
}


// Solution 2
function calculateYears(principal, interest, tax, desired) {
    return Math.ceil(
        Math.log(desired / principal) /
        Math.log(1 + interest * (1 - tax))
    );
}


// Solution 3
function calculateYears(principal, interest, tax, desired) {
    var year = 0;
    while (principal < desired) {
        principal += principal * interest * (1 - tax);
        year += 1;
    }
    return year;
}


// Solution 4
function calculateYears(P, I, T, D) { return Math.ceil(Math.log(D / P) / Math.log1p(I * (1 - T))); }


// Solution 5
function calculateYears(principal, interest, tax, desired) {
    var start = 0;
    while (principal < desired) {
        var intBeforeTax = principal * interest;
        var intRate = (intBeforeTax - (intBeforeTax * tax));
        principal += intRate;
        start++;
    }
    return start;
}


// Solution 6
const calculateYears = (P, I, T, D) => {
    let year = 0;
    while (P < D && ++year) P += (P * I) - (P * I * T);
    return year;
};


// Solution 7
function calculateYears(principal, interest, tax, desired) {
    let years = 0;
    while (principal < desired) {
        years++;
        principal = getYearEndPrincipal(principal, interest, tax);
    }

    return years;
}

function getYearEndPrincipal(principal, interest, tax) {
    const preTaxPrincipal = principal + (principal * interest);
    const taxOwed = (preTaxPrincipal - principal) * tax;
    return preTaxPrincipal - taxOwed;
}


// Solution 8
const calculateYears = (principal, interest, tax, desired) =>
    Math.ceil(Math.log(desired / principal) / Math.log(interest * (1 - tax) + 1));


// Solution 9
function calculateYears(principal, interest, tax, desired) {
    for (var years = 0; principal < desired; years++) {
        principal *= 1 + (1 - tax) * interest;
    }
    return years
}


// Solution 10
function calculateYears(principal, interest, tax, desired) {
    var index = 0;

    while (principal < desired) {
        var amount = principal * interest;
        amount -= amount * tax;
        principal += amount;
        ++index;
    }

    return index;
}


// Solution 11
function calculateYears(P, I, T, D) {
    var Y = 0;
    while (P < D) {
        P = P * (1 + I * (1 - T));
        Y++;
    }
    return Y;
}


// Solution 12
function calculateYears(pv, r, t, fv) {
    return Math.ceil(Math.log(fv / pv) / Math.log(1 + r * (1 - t)));
}