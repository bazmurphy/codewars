// Simple Fun #171: Get Candy Position

// Mr.Nam has n candies,
// he wants to put one candy in each cell of a table-box.
// The table-box has r rows and c columns.

// Each candy was labeled by its cell number.
// The cell numbers are in range from 1 to N and the direction begins from right to left and from bottom to top.

// Nam wants to know the position of a specific candy and which box is holding it.

// The result should be an array and contain exactly 3 elements.
// The first element is the label of the table;
// The second element is the row of the candy;
// The third element is the column of the candy.

// If there is no candy with the given number, return [-1, -1, -1].

// Note:
// When the current box is filled up, Nam buys another one.
// The boxes are labeled from 1.
// Rows and columns are 0-based numbered from left to right and from top to bottom.

// Example
// For n=6,r=2,c=2,candy=3, the result should be [1,0,1]
// the candies will be allocated like this:

// Box 1
// +-----+-----+
// |  4  | (3) | --> box 1, row 0, col 1
// +-----+-----+
// |  2  |  1  |
// +-----+-----+
// Box 2
// +-----+-----+
// |  x  |  x  |
// +-----+-----+
// |  6  | (5) | --> box 2, row 1, col 1
// +-----+-----+

//  For `getCandyPosition(6, 2, 2, 5)` the output should be `[2,1,1]`.
//  For `getCandyPosition(6, 2, 2, 7)` the output should be `[-1,-1,-1]`.
//  For `getCandyPosition(8, 4, 2, 3)` the result should be `[1,2,1]`.

// Input/Output

// [input] integer n
// The number of candies.
// 0 < n <= 100

// [input] integer r
// The number of rows.
// 0 < r <= 100

// [input] integer c
// The number of columns.
// 0 < c <= 100

// [input] integer candy
// The label of the candy Nam wants to get position of.
// 0 < c <= 120

// [output] an integer array
// Array of 3 elements: a label, a row and a column.

function getCandyPosition(n, r, c, candy) {
  // n = number of candies
  // r = row
  // c = column
  // candy = the label of the candy we want to get the position of

  // create allTableBoxes to store all the individual table boxes
  const allTableBoxes = [];

  // work out how many tableBoxes we need
  const numberOfTableBoxes = Math.ceil(n / (r * c));
  // console.log("numberOfTableBoxes:", numberOfTableBoxes);

  // initialise an incrementor
  let value = 1;

  // create X number of tableBoxes
  for (let i = 0; i < numberOfTableBoxes; i++) {
    // create a new table box
    let tableBox = [];
    // build it per the input rows and columns
    for (let rowIndex = 0; rowIndex < r; rowIndex++) {
      // initialise a new row
      tableBox[rowIndex] = [];

      for (let columnIndex = 0; columnIndex < c; columnIndex++) {
        // populate the cells per the instructions
        if (value > n) {
          tableBox[rowIndex][columnIndex] = "x";
        } else {
          tableBox[rowIndex][columnIndex] = value;
        }
        value++;
      }
    }

    // reverse the table box columns
    for (let rowIndex = 0; rowIndex < tableBox.length; rowIndex++) {
      tableBox[rowIndex] = tableBox[rowIndex].reverse();
    }

    // reverse the table box rows
    tableBox = tableBox.reverse();

    // add the tableBox to allTableBoxes
    allTableBoxes.push(tableBox);
  }

  // console.log(allTableBoxes);

  let tableBoxNumber = -1;
  let rowOfTheCandy = -1;
  let columnOfTheCandy = -1;

  // search allTableBoxes for the candy
  for (let tableBoxIndex = 0; tableBoxIndex < allTableBoxes.length; tableBoxIndex++) {
    const tableBox = allTableBoxes[tableBoxIndex];
    // console.log("tableBox:", tableBox);

    for (let tableBoxRowIndex = 0; tableBoxRowIndex < tableBox.length; tableBoxRowIndex++) {
      // console.log("tableBoxRowIndex:", tableBoxRowIndex);

      const tableRow = tableBox[tableBoxRowIndex];

      // console.log("looking for c", c, "in tableRow", tableRow);
      const candyIndex = tableRow.findIndex((element) => element === candy);

      if (candyIndex !== -1) {
        // console.log("CANDY FOUND!, candyIndex:", candyIndex);

        tableBoxNumber = tableBoxIndex + 1;
        // console.log("tableBoxNumber:", tableBoxNumber);

        rowOfTheCandy = tableBoxRowIndex;
        // console.log("rowOfTheCandy:", rowOfTheCandy);

        columnOfTheCandy = candyIndex;
        // console.log("columnOfTheCandy:", columnOfTheCandy);
        break;
      }
    }
  }

  return [tableBoxNumber, rowOfTheCandy, columnOfTheCandy];
}

console.log(getCandyPosition(6, 2, 2, 3));
// [1, 0, 1]
console.log(getCandyPosition(6, 2, 2, 5));
// // [2, 1, 1]
console.log(getCandyPosition(6, 2, 2, 7));
// // [-1, -1, -1]
console.log(getCandyPosition(8, 4, 2, 3));
// // [1, 2, 1]
console.log(getCandyPosition(15, 3, 3, 1));
// // [1, 2, 2]
console.log(getCandyPosition(15, 3, 3, 5));
// // [1, 1, 1]
console.log(getCandyPosition(15, 3, 3, 7));
// // [1, 0, 2]
console.log(getCandyPosition(15, 3, 3, 14));
// // [2, 1, 1]
console.log(getCandyPosition(15, 3, 3, 18));
// // [-1, -1, -1]
