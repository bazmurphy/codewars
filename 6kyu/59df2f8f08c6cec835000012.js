// Meeting

// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.

// When the last names are the same, sort them by first name. 
// Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

// It can happen that in two distinct families with the same family name two people have the same first name too.
// Notes

// You can see another examples in the "Sample tests".

function meeting(s) {
  // const operation1 = s.split(";");
  // // console.log(operation1);
  // const operation2 = operation1.map((element) => `(${element.toUpperCase().split(":").reverse().join(", ")})`);
  // // console.log(operation2);
  // const operation3 = operation2.sort((elementOne, elementTwo) => elementOne.localeCompare(elementTwo));
  // // console.log(operation3);
  // const operation4 = operation3.join("");
  // // console.log(operation4);
  // return operation4;

  return s.split(";")
          .map((element) => `(${element.toUpperCase().split(":").reverse().join(", ")})`)
          .sort((elementOne, elementTwo) => elementOne.localeCompare(elementTwo))
          .join("");

}

console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"));
// "(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)"
console.log(meeting("John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell"));
// "(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)"
console.log(meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"));
// "(ARNO, ALEX)(ARNO, HALEY)(BELL, SARAH)(CORNWELL, ALISSA)(DORNY, PAUL)(DORRIES, ANDREW)(KERN, ANN)(KERN, MADISON)"


// Solution 1
function meeting(s) {
  let string = s.toUpperCase().split(';')
                .map(x => x.split(':').reverse().join(', '))
                .sort()
                .join(')(')
  return '(' + string + ')'
}


// Solution 2
const meeting = s => {
  return s.toUpperCase()
         .replace(/(\w+):(\w+)/g, "($2, $1)")
         .split(';')
         .sort()
         .join('')
};


// Solution 3
const processAttendees = pipe(
  parse,
  sort,
  serialize
);

function meeting(attendees) {
  return processAttendees(attendees.toUpperCase());
}

function parse(attendees) {
  return attendees.split(';').map(function(attendee) {
    return attendee.split(':');
  });
}

function sort(list) {
  return list.sort(function(a, b) {
    return compare(a[1], b[1]) || compare(a[0], b[0]);
  });
}

function serialize(list) {
  return list.reduce(function(result, attendee) {
    return `${result}(${attendee.reverse().join(', ')})`
  }, '');
}

function compare(a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else {
    return 0;
  }
}

function pipe(...fns) {
  return function(x) {
    return fns.reduce(function(y, z) {
      return z(y)
    }, x)
  }
}


// Solution 4
function meeting(s) {
    return s.split(';').map(i => i.toUpperCase().split(':').reverse().join(', ')).sort().map(i => '(' + i + ')').join('')
}


// Solution 5
const meeting = s =>
  s.toUpperCase() // can harmlessly uppercase the whole thing
    .split(';') // split into array of people
    .map(person => { // turn each into an object of matching first / last names
      const [first, last] = person.split(':');
      return { first, last }
    })
    .sort((a, b) => ( // ugh, but
      a.last === b.last
        ? a.first === b.first 
          ? 0 
          : a.first > b.first ? 1 : -1
        : a.last > b.last ? 1 : -1
    ))
    .map(p => `(${p.last}, ${p.first})`) // turn each back into a string
    .join('') // and stick them back together :)


// Solution 6
function meeting(s) {
    return s = s.toUpperCase().split(';').map(name => name.split(':')).map(name => name.reverse()).sort().reduce((acc, name) => acc + `(${name[0]}, ${name[1]})`, '')
}


// Solution 7
function meeting(s) {

    return s.toUpperCase().split(';').map((str) => {
      return str.split(':').reverse();
    }).sort().map((arr) => {
      return "(" + arr.join(', ') + ")";
    }).join('');

}


// Solution 8
const meeting = (s) => 
  s.toUpperCase()
    .split(';')
    .map(n => n.split(':')
               .reverse()
               .join(', '))
    .sort((a, b) => a.localeCompare(b))
    .map(n => `(${n})`)
    .join('');


// Solution 9
const meeting = s =>
  s.split(`;`).map(val => val.toUpperCase().replace(/(\w+):(\w+)/, `($2, $1)`)).sort().join(``);


// Solution 10
const meeting = str => str.split(';')
                          .map(person => person.split(':'))
                          .map(([fn, ln]) => `(${ln}, ${fn})`.toUpperCase())
                          .sort()
                          .join('');


// Solution 11
const meeting = s => s
  .toUpperCase()
  .split`;`
  .map(e => e.replace(/(\w*):(\w*)/, '($2, $1)'))
  .sort()
  .join``;


// Solution 12
function meeting(s) {
    return s.split(';').map((elem)=>'('+elem.split(':')[1].toUpperCase()+', '+elem.split(':')[0].toUpperCase()+')').sort().join('');
}


// Solution 13
function meeting(s) {
  return s.split(';').map(e => `(${e.split(':').reverse().join(', ').toUpperCase()})`).sort().join('')
}


// Solution 14
const meeting = (s) => s.toUpperCase().split(';').map((it) => `(${it.split(':').reverse().join(', ')})`).sort().join('');