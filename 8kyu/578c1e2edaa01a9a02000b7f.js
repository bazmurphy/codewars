// Crash Override

// Every budding hacker needs an alias! The Phantom Phreak, Acid Burn, Zero Cool and Crash Override are some notable examples from the film Hackers.

// Your task is to create a function that, given a proper first and last name, will return the correct alias.

//     Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given.

//     If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

//     Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

// Happy hacking!


function aliasGen(a, b){
  
    //  console.log(a)
    //  console.log(b)
      
    a = a[0].toUpperCase()
    b = b[0].toUpperCase()
    
    let regex = /[A-Z]/
        
    // console.log(regex.test(a))
    // console.log(regex.test(b))
    
    if (regex.test(a) === true && regex.test(b) === true) {

        let returnFirstName = firstName[a]
        let returnSurname = surname[b]
        // console.log(returnFirstName)
        // console.log(returnSurname)
        
        return `${returnFirstName} ${returnSurname}`
    
    } else {
        return 'Your name must start with a letter from A - Z.'
    }

}

console.log(aliasGen("Mike", "Millington"));
// "Malware Mike"
console.log(aliasGen("Fahima", "Tash"));
// "Function T-Rex"
console.log(aliasGen("Daisy", "Petrovic"));
// "Data Payload"
console.log(aliasGen("7393424", "Anumbha"));
// "Your name must start with a letter from A - Z."
console.log(aliasGen("Anuddanumbha", "23200"));
// "Your name must start with a letter from A - Z."



// Solution 1
const initialCap = (str) => str[0].toUpperCase();
const isValidName = (name) => /^[a-z]/i.test(name);
const aliasGen = (fName, lName) => {
  return (isValidName(fName) && isValidName(lName))
    ? `${ firstName[initialCap(fName)] } ${ surname[initialCap(lName)] }`
    : 'Your name must start with a letter from A - Z.';
}


// Solution 2
function aliasGen(a, b) {
    return /^[a-z]/i.test(a) && /^[a-z]/i.test(b) ? `${firstName[a[0].toUpperCase()]} ${surname[b[0].toUpperCase()]}` : "Your name must start with a letter from A - Z.";  
}


// Solution 3
function aliasGen(fname, lname) {
    let output = "";
  
    // transformar tudo em maiuscula
    fname = fname.toUpperCase();
    lname = lname.toUpperCase();
  
    // pegar primeira letra do nome
    let firstLetter = fname[0];
  
    // pegar primeira letra do sobrenome
    let secondLetter = lname[0];
  
    let regexTest = new RegExp('[A-Z]');
  
    // se alguma delas não for letra [A-Z], retornar erro
    if (
      ! regexTest.test(firstLetter)
      ||
      ! regexTest.test(secondLetter)
    ) {
      return "Your name must start with a letter from A - Z.";
    }
    
    // busco nos objetos e monto nova string
    output = `${firstName[firstLetter]} ${surname[secondLetter]}`;
    
  // retorno a string  
  return output;
}


// Solution 4
function aliasGen(first, last) {
    if('0123456789'.indexOf(first[0]) != -1 || '0123456789'.indexOf(last[0]) != -1) {
      return 'Your name must start with a letter from A - Z.';
    }
    first = first.toUpperCase();
    last = last.toUpperCase();
    return firstName[first[0]] + ' ' + surname[last[0]];
}


// Solution 5
function aliasGen(first,last){
    let auxFirst = first[0].toUpperCase( )
    let auxLast = last[0].toUpperCase( )
  
    if(firstName[auxFirst] && surname[auxLast]) {
      return firstName[auxFirst] + ' ' + surname[auxLast]
    } else {
      return 'Your name must start with a letter from A - Z.'
    }
}