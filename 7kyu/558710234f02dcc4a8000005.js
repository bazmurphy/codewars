// Fix my method

// I am kind of new to coding so I'm not sure what is wrong with my code.

// Property objMethod should be called by myFunction.

// Can you fix the syntax so myFunction will be working again ? 
// Please check things like braces, commas, and letter case.

// IMPORTANT: Returning just "string" is insufficient.
// We are required to use Object Literal Notation.



// WHY DOES THIS NOT WORK?? 
function myFunction() {

    const myObject = {
        objProperty: "string",
        objMethod() {
            return this.objProperty
        }
    }

    return myObject.objMethod();
}


// AND WHY DOES THIS WORK??
// const myFunction = () => {
//     objProperty: "string",
//     objMethod() {
//       return this.objProperty
//     }
// }