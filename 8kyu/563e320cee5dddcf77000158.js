// Get the mean of an array

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){

    return Math.floor(marks.reduce((previous, current) => previous + current) / marks.length);

}

getAverage([2,2,2,2])
// 2
getAverage([1,2,3,4,5,])
// 3
getAverage([1,1,1,1,1,1,1,2])
// 1


// Solution 1
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }


// Solution 2
function getAverage(marks){

    // calculates total number of marks
    var total = 0;
    for(var i = 0; i < marks.length; i++){
      total += marks[i];
    }
    
    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length);
  }

// Solution 3
const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);


// Solution 4
function getAverage (marks) {
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
}