// Who likes it ?

// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.


function likes(names) {

    switch (names.length) {
    case 0:
        return `no one likes this`;
    case 1:
        return `${names[0]} likes this`;
    case 2:
        return `${names[0]} and ${names[1]} like this`;
    case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }

}

console.log(likes([]));
// 'no one likes this'
console.log(likes(['Peter']));
// 'Peter likes this'
console.log(likes(['Jacob', 'Alex']));
// 'Jacob and Alex like this'
console.log(likes(['Max', 'John', 'Mark']));
// 'Max, John and Mark like this'
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
// 'Alex, Jacob and 2 others like this'


// Solution 1
function likes(names) {
    names = names || [];
    switch (names.length) {
        case 0: return 'no one likes this'; break;
        case 1: return names[0] + ' likes this'; break;
        case 2: return names[0] + ' and ' + names[1] + ' like this'; break;
        case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; break;
        default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
}


// Solution 2
function likes(names) {
    return {
        0: 'no one likes this',
        1: `${names[0]} likes this`,
        2: `${names[0]} and ${names[1]} like this`,
        3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
        4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
    }[Math.min(4, names.length)]
}


// Solution 3
function likes(names) {
    var templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name}, {name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);

    return templates[idx].replace(/{name}|{n}/g, function (val) {
        return val === '{name}' ? names.shift() : names.length;
    });
}


// Solution 4
function likes(names) {
    if (names.length === 0) return "no one likes this";
    if (names.length === 1) return names[0] + " likes this";
    if (names.length === 2) return names[0] + " and " + names[1] + " like this";
    if (names.length === 3) return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
}


// Solution 5
function likes(names) {
    switch (names.length) {
        case 0:
            return "no one likes this";
        case 1:
            return names[0] + " likes this";
        case 2:
            return names[0] + " and " + names[1] + " like this";
        case 3:
            return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
            return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
}


// Solution 6
function likes(names) {
    names.length === 0 && (names = ["no one"]);
    let [a, b, c, ...others] = names;
    switch (names.length) {
        case 1: return `${a} likes this`;
        case 2: return `${a} and ${b} like this`;
        case 3: return `${a}, ${b} and ${c} like this`;
        default: return `${a}, ${b} and ${others.length + 1} others like this`;
    }
}


// Solution 7



// Solution 8
function likes(names) {
    switch (names.length) {
        case 0:
            return `no one likes this`;
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}


// Solution 9
function likes(names) {
    switch (names.length) {
        case 0:
            return 'no one likes this';
        case 1:
            return `${names[0]} likes this`;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
            return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}


// Solution 10
function likes(names) {
    var format = {
        0: "no one likes this",
        1: "{0} likes this",
        2: "{0} and {1} like this",
        3: "{0}, {1} and {2} like this"
    }[names.length] || "{0}, {1} and {n} others like this";

    return format.replace(/{([\dn])}/g, function (_, n) {
        return n == 'n' ? names.splice(2).length : names[parseInt(n, 10)];
    });
}