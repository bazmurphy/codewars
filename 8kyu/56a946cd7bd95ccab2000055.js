// Regex count lowercase letters

// Your task is simply to count the total number of lowercase letters in a string.
// Examples

function lowercaseCount(str){
    
    console.log(str);

    let result = str.match(/[a-z]/g);

    if (result === null || result.length === 0) {
        return 0;
    } else {
        return result.length;
    }

}

lowercaseCount("abc");
// 3
lowercaseCount("abcABC123");  
// 3
lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");  
// 3
lowercaseCount("");  
// 0
lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~");
// 0
lowercaseCount("abcdefghijklmnopqrstuvwxyz");
// 26


// Solution 1
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}


// Solution 2
function lowercaseCount(str){
    return str.replace(/[^a-z]/g, "").length;
}


// Solution 3
const lowercaseCount = str => str.replace(/[^a-z]/g, '').length;


// Solution 4
const lowercaseCount = str => (str.match(/[a-z]/g) || []).length;


// Solution 5
function lowercaseCount(str){

    var lowerCounter = 0;
    
    var abcArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
    for (var index = 0; index < str.length; index++) {
        var character = str[index];
        
        if (abcArray.indexOf(character) >= 0) {
            lowerCounter++;
        }
    }
    
    return lowerCounter;
}