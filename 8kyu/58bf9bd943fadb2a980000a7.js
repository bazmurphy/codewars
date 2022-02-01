// Who is going to pay for the wall?

// Don Drumphet lives in a nice neighborhood, but one of his neighbors has started to let his house go. Don Drumphet wants to build a wall between his house and his neighbor’s, and is trying to get the neighborhood association to pay for it. He begins to solicit his neighbors to petition to get the association to build the wall. Unfortunately for Don Drumphet, he cannot read very well, has a very limited attention span, and can only remember two letters from each of his neighbors’ names. As he collects signatures, he insists that his neighbors keep truncating their names until two letters remain, and he can finally read them.

// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"

function whoIsPaying(name){
    return name.length < 3 ? [name] : [name, name[0]+name[1]] 
}

console.log(whoIsPaying("Mexico"))
// ["Mexico", "Me"]
console.log(whoIsPaying("Melania"))
// ["Melania", "Me"]
console.log(whoIsPaying("Melissa"))
// ["Melissa", "Me"]
console.log(whoIsPaying("Me"))
// ["Me"]
console.log(whoIsPaying(""))
// [""]
console.log(whoIsPaying("I"))
// ["I"]


// Solution 1
function whoIsPaying(name){
    return (name.length>2)?([name, name.substr(0,2)]):[name];
}

// Solution 2
function whoIsPaying(name){
    if (name.length <= 2) return [name]
    return [name, name.slice(0, 2)]
}

// Solution 3
function whoIsPaying(name){
    return name.length > 2 ? [name, name.slice(0,2)] : [name]
}

// Solution 4
const whoIsPaying = name =>
      [...new Set([name, name.slice(0, 2)])]

// Solution 5
whoIsPaying = name => name.length <= 2 ? [name] :  [name, name[0] + name[1]];

// Solution 6
function whoIsPaying(name){
    let arr = [name];
    if ( name.length > 2 ) arr.push(name.slice(0, 2));
    return arr;
}