// Friend or Foe ?

// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// i.e.

// friend["Ryan", "Kieran", "Mark"]`shouldBe`["Ryan", "Mark"]

// Note: keep the original order of the names in the output.

function friend(friends) {
    return friends.filter(element => element.length === 4)
}

console.log(friend(["Ryan", "Kieran", "Mark"]))
// ["Ryan", "Mark"]
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]))
// ["Ryan"]
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]))
// ["Jimm", "Cari", "aret"]
console.log(friend(["Love", "Your", "Face", "1"]))
// ["Love", "Your", "Face"]


// Solution 1
function friend(friends) {
    return friends.filter(n => n.length === 4)
}


// Solution 2
const friend = friends => friends.filter(friend => friend.length == 4);


// Solution 3
function friend(friends) {

    //Create new array called "myFriends" for add your friends
    var i,
        len = friends.length,
        myFriends = [];


    for (i = 0; i < len; i++) {

        //Check for names with length equal to four and it is not a number
        if (friends[i].length == 4 && isNaN(friends[i])) {
            myFriends.push(friends[i]);
        }

    }

    return myFriends;
}


// Solution 4
function friend(friends) {
    return friends.filter(value => value.length === 4);
}


// Solution 5
function friend(friends) {
    return friends.filter(name => name.length === 4)
}


// Solution 6
function friend(friends) {
    return friends.filter(function (name) {
        return name.length == 4;
    });
}


// Solution 7
function friend(friends) {
    var realFriends = [];
    for (i = 0; i < friends.length; i++) {
        if (friends[i].length == 4 && isNaN(friends[i])) {
            realFriends.push(friends[i]);
        }
    }

    return realFriends
}


// Solution 8
const friend = f => f.filter(n => (isNaN(n) && n.length == 4))


// Solution 9
function friend(friends) {
    return friends.filter(friend => friend.length === 4);
}


// Solution 10
friend = f => f.filter(e => e.length == 4);