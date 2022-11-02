// The Coupon Code

// Story

// Your online store likes to give out coupons for special occasions.
// Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task

// Your mission:

// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date.

// All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:

// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015") === true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015") === false

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {

    // EASY ONE LINER:
    // return enteredCode === correctCode ? Date.parse(currentDate) <= Date.parse(expirationDate) : false

    // LONG WAY:
    console.log(`
    enteredCode: ${enteredCode}
    correctCode: ${correctCode}
    currentDate: ${currentDate}
    expirationDate: ${expirationDate}
    `)

    if (enteredCode !== correctCode) {
        console.log('Coupons do not match')
        return false;

    } else {

        function getDay(date) {
            return Number(date.split(" ")[1].slice(0, -1))
        }

        function getMonth(date) {
            const months = {
                'January': 1,
                'February': 2,
                'March': 3,
                'April': 4,
                'May': 5,
                'June': 6,
                'July': 7,
                'August': 8,
                'September': 9,
                'October': 10,
                'November': 11,
                'December': 12
            }

            return months[date.split(" ")[0]]
        }

        function getYear(date) {
            return Number(date.split(" ")[2])
        }


        if (getYear(currentDate) < getYear(expirationDate)) {
            console.log(`YEAR: ${getYear(currentDate)} is earlier than ${getYear(expirationDate)}`)
            return true;

        } else if (getYear(currentDate) === getYear(expirationDate)) {
            console.log(`YEAR: ${getYear(currentDate)} is the same as ${getYear(expirationDate)}`)

            if (getMonth(currentDate) < getMonth(expirationDate)) {
                console.log(`MONTH: ${getMonth(currentDate)} is earlier than ${getMonth(expirationDate)}`)
                return true;

            } else if (getMonth(currentDate) === getMonth(expirationDate)){
                console.log(`MONTH: ${getMonth(currentDate)} is the same as ${getMonth(expirationDate)}`)

                if (getDay(currentDate) <= getDay(expirationDate)) {

                    console.log(`DAY: ${getDay(currentDate)} is earlier than or the same as ${getDay(expirationDate)}`)
                    return true;
                }
            }
        }

        return false;
    }
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));
// // true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'));
// // false
console.log(checkCoupon('abc', 'abc', 'November 5, 2013', 'November 5, 2014'))
// true
console.log(checkCoupon('abc', 'abc', 'October 5, 2014', 'November 5, 2014'))
// true
console.log(checkCoupon('abc', 'abc', 'November 4, 2014', 'November 5, 2014'))
// true
console.log(checkCoupon('abc', 'abc', 'November 5, 2014', 'November 5, 2014'))
// true


// Solution 1
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}


// Solution 2
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}


// Solution 3
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    return enteredCode === correctCode &&
        Date.parse(currentDate) <= Date.parse(expirationDate);
}


// Solution 4
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    var cd = new Date(currentDate);
    var ed = new Date(expirationDate);
    return (enteredCode === correctCode) && (ed >= cd);
}


// Solution 5
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) {
        return false;
    }

    var cur = Date.parse(currentDate);
    var exp = Date.parse(expirationDate);
    if (cur > exp) {
        return false;
    }

    return true;
}


// Solution 6
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) {
        return false;
    }
    return new Date(currentDate).getTime() <= new Date(expirationDate).getTime();
}


// Solution 7
const monthMap = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"];

const getDate = (dateStr) => {
    let [dateMonth, year] = dateStr.split(", ");
    let [month, date] = dateMonth.split(" ");
    month = monthMap.indexOf(month);
    year = parseInt(year);
    date = parseInt(date);
    return [year, month, date];
}

const isNotExpired = (expireDate, curDate) => {
    if (expireDate[0] > curDate[0]) return true;
    if (expireDate[0] === curDate[0] && expireDate[1] > curDate[1]) return true;
    if (expireDate[0] === curDate[0] && expireDate[1] === curDate[1]) return expireDate[2] >= curDate[2];
    return false;
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (!enteredCode || !correctCode || !(enteredCode === correctCode)) return false;
    let curDate = getDate(currentDate);
    let expDate = getDate(expirationDate);
    return isNotExpired(expDate, curDate);
}


// Solution 8
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    var current_date = Date.parse(currentDate);
    var expiration_date = Date.parse(expirationDate);
    if ((enteredCode === correctCode) && (expiration_date >= current_date)) {
        return true;
    }
    else {
        return false;
    }
}


// Solution 9
//const checkCoupon = (ec, cc, cd, ed) => ec === cc && new Date(cd) <= new Date(ed))
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    var isValid = enteredCode === correctCode
    if (!isValid) {
        return false
    }

    var months = [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
    ]

    var currentMonth = ""
    var spaceFoundInCurrent = false
    for (var i = 0; i < currentDate.length; i++) {
        var currentCharacter = currentDate[i]
        if (!spaceFoundInCurrent) {
            if (currentCharacter !== " ") {
                currentMonth = currentMonth + currentCharacter
            } else {
                spaceFoundInCurrent = true
            }
        }
    }

    var currentMonthRank
    for (var i = 0; i < months.length; i++) {
        var observedMonth = months[i]
        if (observedMonth === currentMonth) {
            currentMonthRank = i
        }
    }
    if (currentMonthRank.length < 2) {
        currentMonthRank = "0" + currentMonthRank
    }

    var expMonth = ""
    var spaceFoundInExp = false
    for (var i = 0; i < expirationDate.length; i++) {
        var currentCharacter = expirationDate[i]
        if (!spaceFoundInExp) {
            if (currentCharacter !== " ") {
                expMonth = expMonth + currentCharacter
            } else {
                spaceFoundInExp = true
            }
        }
    }

    var expMonthRank
    for (var i = 0; i < months.length; i++) {
        var observedMonth = months[i]
        if (observedMonth === expMonth) {
            expMonthRank = i
        }
    }
    if (expMonthRank.length < 2) {
        expMonthRank = "0" + expMonthRank
    }

    var currentDay = ""
    var spacesFoundForCurrendDay = false
    var commaFoundForCurrendDay = false
    for (var i = 0; i < currentDate.length; i++) {
        var currentCharacter = currentDate[i]
        if (currentCharacter === " ") {
            spacesFoundForCurrendDay = true
        }
        else if (currentCharacter === ",") {
            commaFoundForCurrendDay = true
        }
        else if (spacesFoundForCurrendDay && !commaFoundForCurrendDay) {
            currentDay = currentDay + currentCharacter
        }
    }
    if (currentDay.length < 2) {
        currentDay = "0" + currentDay
    }

    var expDay = ""
    var spacesFoundForExpDay = false
    var commaFoundForExpDay = false
    for (var i = 0; i < expirationDate.length; i++) {
        var currentCharacter = expirationDate[i]
        if (currentCharacter === " ") {
            spacesFoundForExpDay = true
        }
        else if (currentCharacter === ",") {
            commaFoundForExpDay = true
        }
        else if (spacesFoundForExpDay && !commaFoundForExpDay) {
            expDay = expDay + currentCharacter
        }
    }
    if (expDay.length < 2) {
        expDay = "0" + expDay
    }

    var currentYear = ""
    var commaFoundForCurrentYear = false
    for (var i = 0; i < currentDate.length; i++) {
        var currentCharacter = currentDate[i]
        if (currentCharacter === ",") {
            commaFoundForCurrentYear = true
        }
        else if (currentCharacter !== " " && commaFoundForCurrentYear) {
            currentYear = currentYear + currentCharacter
        }
    }

    var expYear = ""
    var commaFoundForExpYear = false
    for (var i = 0; i < expirationDate.length; i++) {
        var currentCharacter = expirationDate[i]
        if (currentCharacter === ",") {
            commaFoundForExpYear = true
        }
        else if (currentCharacter !== " " && commaFoundForExpYear) {
            expYear = expYear + currentCharacter
        }
    }

    var currentDate = currentYear + currentMonthRank + currentDay
    var expDate = expYear + expMonthRank + expDay

    var isNotExpired = currentDate <= expDate
    return isNotExpired
}


// Solution 10
checkCoupon = (EC, CC, CD, ED) => EC === CC && new Date(CD) <= new Date(ED);


// Solution 11
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) =>
    enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate)


// Solution 12
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode === correctCode && Date.parse(currentDate) <= Date.parse(expirationDate)) {
        return true;
    } else {
        return false;
    }
}