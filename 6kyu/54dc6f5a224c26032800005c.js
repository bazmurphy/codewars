// Help the bookseller !

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

// In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// For example an extract of a stocklist could be:

// L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
// or
// L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....

// You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

// M = {"A", "B", "C", "W"} 
// or
// M = ["A", "B", "C", "W"] or ...

// and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

// For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket/Prolog a list of pairs):

// (A : 20) - (B : 114) - (C : 50) - (W : 0)

// where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

// If L or M are empty return string is "" (Clojure/Racket/Prolog should return an empty array/list instead).
// Notes:

// In the result codes and their values are in the same order as in M.
// See "Samples Tests" for the return.


function stockList(listOfArt, listOfCat){
  if (!listOfArt.length) {
    return "";
  } else {
    let output = [];

    for (let i = 0; i < listOfCat.length; i++) {

      let prefixToFind = listOfCat[i];
      let prefixTotalAmount = 0;

      for (let j = 0; j < listOfArt.length; j++) {
        let currentPrefix = listOfArt[j][0];
        let currentAmount = Number(listOfArt[j].split(" ")[1]);
        if (prefixToFind === currentPrefix) {
          prefixTotalAmount += currentAmount;
        }
      }

      output.push(`(${prefixToFind} : ${prefixTotalAmount})`);
    }

    return output.join(" - ");
  }
}

console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]));
// "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"

console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B"]));
// "(A : 200) - (B : 1140)"


// Solution 1
function stockList(listOfArt, listOfCat) {
  var qs = {};
  if (!listOfArt.length) return '';

  listOfArt.forEach(function(art) {
    var cat = art[0];
    qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
  });

  return listOfCat.map(function(c) {
    return '(' + c + ' : ' + (qs[c] | 0) + ')';  
  }).join(' - ');  
}


// Solution 2
function stockList(listOfArt, listOfCat) {
  var qs = {};
  if (!listOfArt.length) return '';

  listOfArt.forEach(function(art) {
    var cat = art[0];
    qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
  });

  return listOfCat.map(function(c) {
    return '(' + c + ' : ' + (qs[c] | 0) + ')';  
  }).join(' - ');  
}


// Solution 3
function stockList(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return ''
  return listOfCat.map(w => {
    const s = listOfArt.reduce((a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0), 0)
    return `(${w} : ${s})`
  }).join(' - ')
}


// Solution 4
function stockList(listOfArt, listOfCat) {
  return (! listOfArt.length || ! listOfCat.length) ? "" : listOfCat.map(cat => {
    let needs = listOfArt.filter(el => el.charAt(0) === cat);
    let count = needs.reduce((a, b) => {
      return Number(a) + Number(b.split(" ")[1]);
    }, 0);
    
    return "(" + cat + " : " + count + ")";
  }).join(" - ");
}


// Solution 5
function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat === 0) {
    return ''
  }
  
  const catCounts = {}
  
  listOfArt.forEach(entry => {
    const [code, count] = entry.split(' ')
    const category = code[0]
    catCounts[category] = catCounts[category] || 0
    catCounts[category] += Number(count)
  })
  
  
  const catDescription = listOfCat.map(category => {
    return `(${category} : ${catCounts[category] || 0})` 
  })
  
  return catDescription.join(' - ')
}


// Solution 6
const stockList = (listOfArt, listOfCat) =>
  listOfArt.length ? listOfCat.map(val => `(${val} : ${listOfArt.reduce((pre, v) => pre + (v[0] === val) * v.split(` `)[1], 0)})`).join(` - `) : ``;


// Solution 7
function stockList(listOfArt, listOfCat){
  if( !listOfArt.length || !listOfCat.length ) return ""
  var count = listOfArt.reduce(function(cat,art){
    cat[art[0]]=~~cat[art[0]]+ +art.split(" ")[1];
    return cat
  },{});
  return listOfCat.map(function(cat){ return "("+cat+" : "+(count[cat]||0)+")"}).join(" - ")
}


// Solution 8
stockList=(a,b,c=a.map(a=>a.split` `))=>a.length?b.map(i=>[i,c.reduce((a,[b,c])=>a+(b[0]==i?+c:0),0)]).map(([a,b])=>`(${a} : ${b})`).join` - `:''


// Solution 9
stockList=(a,c,j=0)=>(a=c.map(e=>`(${e} : ${a.reduce((v,k)=>(j+=v,v+(k[0]==e?+k.split` `[1]:0)),0)})`).join` - `,j?a:"")


// Solution 10
function stockList(listOfArt, listOfCat){
  if(!listOfCat.length || !listOfArt.length) return '';
  
  let count = 0, result = [];
  
  for (i = 0; i < listOfCat.length; i++) {
    
    listOfArt.forEach(item => {
      if(item[0] == listOfCat[i]) {
        count += Number( item.match(/\d+/) )
      }
    })
    result[i] = '(' + listOfCat[i] + ' : ' + count + ')';
    count = 0;
  }
  return result.join(' - ')
}


// Solution 11
const stockList = (b, c) => {
  const acc = c.map(item => [item, 0]);
  
  if (b.length === 0) return '';
  
  return b
    .reduce((acc, item) => {
      const index = c.indexOf(item.charAt(0));
      
      if (index >= 0) {
        acc[index][1] += Number(item.split(' ')[1]);
      }
      
      return acc; 
    },acc)
    .map(item => `(${item[0]} : ${item[1]})`)
    .join(' - ');
}


// Solution 12
function stockList(listOfArt, listOfCat){
  if(listOfArt.length===0||listOfCat.length===0)return '';
  var bins = listOfArt.reduce((bin,art)=>(bin[art[0]]=(bin[art[0]]||0)+(+art.match(/\d+/g)[0]),bin),{})
  return listOfCat.map(char=>`(${char} : ${bins[char]||0})`).join(' - ')
}


// Solution 13
function stockList(listOfArt, listOfCat) {
    let groupedBooks =  listOfArt.reduce((acc, el) => {
        let key = el.charAt(0);
        let valueToAdd = Number.parseInt(el.split(" ")[1]);
        acc[key] = acc[key] + valueToAdd || valueToAdd;
        return acc;
    }, {})

    return listOfArt.length === 0 || listOfCat.length === 0
        ? ''
        : listOfCat.map(key => "(" + key + " : " + (groupedBooks[key] || 0) + ")")
        .join(" - ")
}


// Solution 14
function stockList(listOfArt, listOfCat){
  if (!listOfArt.length || !listOfCat.length) {
    return '';
  }
  
  const map = {};
  
  for (let i = 0; i < listOfCat.length; i++) {
    if (map[listOfCat[i]] !== 0) {
      map[listOfCat[i]] = 0;
    }
  }
  
  listOfArt.forEach(code => {
    let firstLetterCode = code[0];
    if (map[firstLetterCode] != null) {
      map[firstLetterCode] += parseInt(code.split(' ')[1])
    }
  });
  
  let resultArray = [];
  
  Object.keys(map).forEach(key => {
    const strToAdd = `(${key} : ${map[key]})`
    resultArray.push(strToAdd);
  })
  
  return resultArray.join(' - ');
}