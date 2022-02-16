// Multiplication table for number

// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

// For example, a multiplication table (string) for number == 5 looks like below:

// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50

// P. S. You can use \n in string to jump to the next line.

// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.

console.log(multiTable(5));
// '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50';
console.log(multiTable(1));
// '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'


function multiTable(number) {

    return `1 * ${number} = ${number * 1}\n2 * ${number} = ${number * 2}\n3 * ${number} = ${number * 3}\n4 * ${number} = ${number * 4}\n5 * ${number} = ${number * 5}\n6 * ${number} = ${number * 6}\n7 * ${number} = ${number * 7}\n8 * ${number} = ${number * 8}\n9 * ${number} = ${number * 9}\n10 * ${number} = ${number * 10}`

}



// Solution 1
const multiTable = (number) => {
    let table = '';
    
    for(let i = 1; i <= 10; i++) {
      table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`; 
    }
  
    return table;
}

// Solution 2
function multiTable(n) {
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}

// Solution 3
function multiTable(number) {
    let table = '';
    for(let i = 1; i <= 10; i++){
      table += `${i} * ${number} = ${i*number}\n`
    }
    return table.slice(0, -1)
}

// Solution 4
const multiTable = n => ([1,2,3,4,5,6,7,8,9,10].map(i=>`${i} * ${n} = ${i*n}`)).join('\n')


// Solution 5
const multiTable = (n) => {
    const table = []
    for(let i = 1; i <= 10; i++) {
      table.push(`${i} * ${n} = ${i*n}`)
    }
    return table.join('\n')
}

// Solution 6
function multiTable(n) {
    return `1 * ${n} = ${n*1}\n2 * ${n} = ${n*2}\n3 * ${n} = ${n*3}\n4 * ${n} = ${n*4}\n5 * ${n} = ${n*5}\n6 * ${n} = ${n*6}\n7 * ${n} = ${n*7}\n8 * ${n} = ${n*8}\n9 * ${n} = ${n*9}\n10 * ${n} = ${n*10}`
}