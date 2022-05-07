// Define a card suit

// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
//         '2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
//         '2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
//         '2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


function defineSuit(card) {
    switch (card.slice(-1)) {
    case '♣':
        return 'clubs'
    case '♦':
        return 'diamonds'
    case '♥':
        return 'hearts'
    case '♠':
        return 'spades'
    }
}

console.log(defineSuit('Q♠'));
// 'spades'
console.log(defineSuit('9♦'));
// 'diamonds'
console.log(defineSuit('J♥'));
// 'hearts'


// Solution 1
function defineSuit(card) {
    const s = {
      "♣": "clubs",
      "♠": "spades",
      "♦": "diamonds",
      "♥": "hearts"
    }
    return s[card.charAt(card.length - 1)]
}


// Solution 2
function defineSuit(card) {
    return {
      '♣' : 'clubs',
      '♦' : 'diamonds',
      '♥' : 'hearts',
      '♠' : 'spades'
    }[card.substr(-1)]
}


// Solution 3
function defineSuit(card) {
    if(card.includes('♥')) return 'hearts'
    if(card.includes('♦')) return 'diamonds'
    if(card.includes('♣')) return 'clubs'
    if(card.includes('♠')) return 'spades' 
}


// Solution 4
function defineSuit(card) {
    return {'♣': 'clubs', '♠': 'spades', '♦': 'diamonds', '♥': 'hearts'}[card.slice(-1)];
}


// Solution 5
function defineSuit(card) {
    if (card.includes('♣')) {
      return "clubs";
    }
    else if (card.includes('♦')) {
      return "diamonds";
    }
    else if (card.includes('♥')) {
      return "hearts";
    }
    else if (card.includes('♠')) {
      return "spades";
    }
};


// Solution 6
defineSuit=([a,b,c])=>({"♣":'clubs',"♠":'spades',"♦":'diamonds',"♥":'hearts'})[c||b]


// Solution 7
function defineSuit(card) {
    switch (card.slice(-1)){
      case '♣': return 'clubs';
      case '♦': return 'diamonds';
      case '♥': return 'hearts';
      case '♠': return 'spades';    
    }    
}