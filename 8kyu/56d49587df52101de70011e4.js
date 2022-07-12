// Leonardo Dicaprio and Oscars

// You have to write a function that describe Leo:

// function leo(oscar) {

// }

// if oscar was(integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
// if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
// if it was not 88 or 86(and below 88) you should return "When will you give Leo an Oscar?"
// if it was over 88 you should return "Leo got one already!"


function leo(oscar) {

    if (oscar === 88) {
        return "Leo finally won the oscar! Leo is happy"
    } else if (oscar === 86) {
        return "Not even for Wolf of wallstreet?!"
    } else if (oscar < 88) {
        return "When will you give Leo an Oscar?"
    } else if (oscar > 88) {
        return "Leo got one already!"
    }

}

console.log(leo(89));
// "Leo got one already!"
console.log(leo(88));
// "Leo finally won the oscar! Leo is happy"
console.log(leo(87));
// "When will you give Leo an Oscar?"
console.log(leo(86));
// "Not even for Wolf of wallstreet?!"


// Solution 1
const leo = (oscar) => {
  return oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
         oscar === 86 ? 'Not even for Wolf of wallstreet?!'       :
         oscar  <  88 ? 'When will you give Leo an Oscar?'        :
         'Leo got one already!';
};


// Solution 2
function leo(oscar){
  switch (oscar){
    case 88:
      return "Leo finally won the oscar! Leo is happy";
      break;
    case 86:
      return  "Not even for Wolf of wallstreet?!";
      break;
    default:
      if(oscar<88) return "When will you give Leo an Oscar?";
      else return  "Leo got one already!";
  }
}


// Solution 3
const leo = oscar => oscar > 88 ? "Leo got one already!" : (oscar == 88 ? "Leo finally won the oscar! Leo is happy" : (oscar == 86 ? "Not even for Wolf of wallstreet?!" : "When will you give Leo an Oscar?"));


// Solution 4
function leo(oscar){
  return oscar==88 ? "Leo finally won the oscar! Leo is happy" :
         oscar==86 ? "Not even for Wolf of wallstreet?!" :
         oscar<88 ?  "When will you give Leo an Oscar?" :
                     "Leo got one already!"
}


// Solution 5
function leo(oscar) {
    switch (true) {
        case oscar > 88: return 'Leo got one already!'; break;
        case oscar == 88: return 'Leo finally won the oscar! Leo is happy'; break;
        case oscar == 86: return 'Not even for Wolf of wallstreet?!'; break;
        default: return 'When will you give Leo an Oscar?'
    }
}


// Solution 6
function leo(oscar) {
    if (oscar > 88) {
        return "Leo got one already!";
    }
    if (oscar == 88) {
        return "Leo finally won the oscar! Leo is happy";
    }
    if (oscar == 86) {
        return "Not even for Wolf of wallstreet?!";
    }
    return "When will you give Leo an Oscar?";
}


// Solution 7
function leo(oscar){
  var reactions = [
    'When will you give Leo an Oscar?',
    'Not even for Wolf of wallstreet?!',
    'Leo finally won the oscar! Leo is happy',
    'Leo got one already!'
  ];
  var reaction = '';
  
  switch(oscar) {
    case 86:
      reaction = reactions[1];
      break;
    case 88:
      reaction = reactions[2];
      break;
    default:
      oscar > 88
        ? reaction = reactions[3]
        : reaction = reactions[0]
  }
  return reaction;
}


// Solution 8
function leo(oscar) {
    if (oscar == 88) return "Leo finally won the oscar! Leo is happy";
    if (oscar == 86) return "Not even for Wolf of wallstreet?!";
    return oscar > 88 ? "Leo got one already!" : "When will you give Leo an Oscar?";
}


// Solution 9
const leo = oscar =>
  oscar === 86 ? `Not even for Wolf of wallstreet?!` : 
  oscar === 88 ? `Leo finally won the oscar! Leo is happy` :
  oscar > 88 ? `Leo got one already!` : `When will you give Leo an Oscar?`;


// Solution 10
leo = o => o === 88 ? "Leo finally won the oscar! Leo is happy" : o === 86 ? "Not even for Wolf of wallstreet?!" : o < 88 ? "When will you give Leo an Oscar?" : "Leo got one already!";


// Solution 11
const leo = oscar => {
    if (oscar == 88) return "Leo finally won the oscar! Leo is happy";
    else if (oscar == 86) return "Not even for Wolf of wallstreet?!";
    else if (oscar < 88) return "When will you give Leo an Oscar?";
    else return "Leo got one already!";
}


// Solution 12
const leo = oscar => oscar === 88 ? 'Leo finally won the oscar! Leo is happy' :
  oscar === 86 ? 'Not even for Wolf of wallstreet?!' :
  oscar < 88 ? 'When will you give Leo an Oscar?' : 'Leo got one already!'