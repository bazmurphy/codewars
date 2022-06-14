// Kata Example Twist

// This is an easy twist to the example kata(provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites / Websites 1, 000 times.


// add the value "codewars" to the websites array 1,000 times
var websites = []

for (let i = 1; i <= 1000; i++)
    websites.push('codewars')


// Solution 1
var websites = new Array(1000).fill("codewars");


// Solution 2
var websites = [];
while (websites.length < 1000) websites.push("codewars")


// Solution 4
var websites = []
for (i = 0; i < 1000; i++) {
    websites.push("codewars");
}


// Solution 5
var websites = Array(1000).fill("codewars");


// Solution 6
var websites = Array.from({ length: 1000 }, () => 'codewars')


// Solution 7
var websites = (new Array(1000)).map(function (e) { return 'codewars'; });


// Solution 8
const websites = new Array(1000).fill(`codewars`);


// Solution 9
var websites = Array(1000).join().split(',').map(function () { return 'codewars' });


// Solution 10
var websites = []
for (i = 1; i < 1000; i++) {
    websites[i] = "codewars";
}


// Solution 11
var websites = Array.apply(null, Array(1000)).map(String.prototype.valueOf, 'codewars');


// Solution 12
// add the value "codewars" to the websites array 1,000 times
var websites = []
//for (var i =0; i < 1000; i++) websites.push("codewars");
//websites = [ "codewars"] ;
//for (var i =0; i < 10; i++) websites=websites.concat(websites);
//websites= websites.slice(0,1000);
websites.length = 1000;
websites = websites.splice(0, 1000, "codewars");