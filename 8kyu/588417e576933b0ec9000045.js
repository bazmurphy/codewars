// Simple Fun #1: Seats in Theater

// the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.

// Given the total number of rows and columns in the theater (nRows and nCols, respectively), and the row and column you're sitting in, return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.
// Example

// For nCols = 16, nRows = 11, col = 5 and row = 3, the output should be

// seatsInTheater(nCols, nRows, col, row) === 96

// Here is what the theater looks like:

// Input/Output

// [input] integer nCols

// An integer, the number of theater's columns.

// Constraints: 1 ≤ nCols ≤ 1000.

// [input] integer nRows

// An integer, the number of theater's rows.

// Constraints: 1 ≤ nRows ≤ 1000.

// [input] integer col

// An integer, the column number of your own seat (with the rightmost column having index 1).

// Constraints: 1 ≤ col ≤ nCols.

// [input] integer row

// An integer, the row number of your own seat (with the front row having index 1).

// Constraints: 1 ≤ row ≤ nRows.

// [output] an integer

// The number of people who sit strictly behind you and in your column or to the left.


function seatsInTheater(nCols, nRows, col, row) {

    console.log(`
    nCols: ${nCols}
    nRows: ${nRows}
    col: ${col}
    row: ${row}
    nCols - col: ${nCols - col}
    nRows - row: ${nRows - row}`)

    return (nCols - col + 1) * (nRows - row)

}

console.log(seatsInTheater(16, 11, 5, 3))
// 96
console.log(seatsInTheater(1, 1, 1, 1))
// 0
console.log(seatsInTheater(13, 6, 8, 3))
// 18
console.log(seatsInTheater(60, 100, 60, 1))
// 99
console.log(seatsInTheater(1000, 1000, 1000, 1000))
// 0


// Solution 1
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);
}


// Solution 2
function seatsInTheater(nCols, nRows, col, row) {
    var totalObstructedRows = nRows - row;
    var totalObstructedCols = nCols - (col - 1);

    return totalObstructedRows * totalObstructedCols;
}


// Solution 3
seatsInTheater = (a, b, c, d) => (a - c + 1) * (b - d);


// Solution 4
function seatsInTheater(a, b, c, d) {
    return (a - c + 1) * (b - d);
}


// Solution 5
function seatsInTheater(nCols, nRows, col, row) {
    let leftFromMe = nCols - col;
    let behindMe = nRows - row;
    return leftFromMe * behindMe + behindMe;


}


// Solution 6
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - (col - 1)) * (nRows - row);
}


// Solution 7
function seatsInTheater(nCols, nRows, col, row) {
    //coding and coding..
    let rowsLeft = nRows - row;
    let colsLeft = nCols - col + 1;
    return rowsLeft * colsLeft

}


// Solution 8
function seatsInTheater(nCols, nRows, col, row) {
    var calcul = nCols - col + 1;
    var gene = nRows - row;

    total = calcul * gene;
    return total
}


// Solution 9
function seatsInTheater(nCols, nRows, col, row) {
    const rowsBehind = nRows - row;
    const columnsBehind = nCols - (col - 1);

    return rowsBehind * columnsBehind;
}


// Solution 10
function seatsInTheater(nCols, nRows, col, row) {
    var outPut = 0;
    if (1 <= nCols >= 1000) {
        return (nRows - row);
    }
    else if (1 <= nRows >= 1000) {
        return (nRows - row);
    }
    else if (1 <= col >= nCols) {
        return (nRows - row);
    }
    else if (1 <= row >= nRows) {
        return (nRows - row);
    } else {
        var a = col - 1;
        var b = a * nRows;
        var c = row * nCols;
        var d = a * row;
        var result = b + c - d;
        var allPeople = nCols * nRows;
    }
    return (allPeople - result);
}


// Solution 11
function seatsInTheater(nCols, nRows, col, row) {
    return (nRows - row) * (nCols - col + 1)
}


// Solution 12
function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row)
}