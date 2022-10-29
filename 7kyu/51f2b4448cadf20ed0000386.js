// Remove anchor from URL

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" -- > "www.codewars.com"
// "www.codewars.com?page=1" -- > "www.codewars.com?page=1"

function removeUrlAnchor(url) {
    return url.split('#')[0];
}

console.log(removeUrlAnchor('www.codewars.com#about'));
// 'www.codewars.com'
console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
// 'www.codewars.com/katas/?page=1'
console.log(removeUrlAnchor('www.codewars.com/katas/'));
// 'www.codewars.com/katas/'


// Solution 1
function removeUrlAnchor(url) {
    return url.split('#')[0];
}


// Solution 2
function removeUrlAnchor(url) {
    // TODO: complete
    return url.replace(/#.*/gi, "");
}


// Solution 3
const removeUrlAnchor = url => url.replace(/#.+$/, '');


// Solution 4
const removeUrlAnchor = (url) => url.split("#")[0];


// Solution 5
function removeUrlAnchor(url) {
    let string = ""
    for (let i = 0; i < url.length; i++) {
        if (url[i] === "#") { break }
        string += url[i]
    }
    return string
}


// Solution 6
function removeUrlAnchor(url) {
    return url.replace(/#.+/ig, "");
}


// Solution 7
function removeUrlAnchor(url) {
    // TODO: complete
    return url.replace(/#\w+/, '');
}


// Solution 8
function removeUrlAnchor(url) {
    var index = url.indexOf("#");
    return index == -1 ? url : url.substring(0, url.indexOf("#"));
}


// Solution 9
function removeUrlAnchor(u) {
    return u.split('#')[0].toString();
}


// Solution 11
// split() whiout RexExp
const removeUrlAnchor = (url) => url.split('#')[0]


// Solution 12
function removeUrlAnchor(url) {
    return url.replace(/[#].+$/g, '')
}