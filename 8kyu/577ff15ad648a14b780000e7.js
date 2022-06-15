// Welcome!

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task

// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.

// The Database

// english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'

// Possible invalid inputs include:

// IP_ADDRESS_INVALID - not a valid ipv4 or ipv6 ip address
// IP_ADDRESS_NOT_FOUND - ip address not in the database
// IP_ADDRESS_REQUIRED - no ip address was supplied

function greet(language) {

    let welcomes = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso',
    }

    if (language in welcomes) {
        return welcomes[language]
    } else {
        return welcomes['english']
    }

}

console.log(greet('english'));
// 'Welcome'
console.log(greet('dutch')); 
// 'Welkom'
console.log(greet('IP_ADDRESS_INVALID'));
// 'Welcome'



// Solution 1
function greet(lang) {
    return langs[lang]||langs['english'];
  }
  
  var langs = {
  'english': 'Welcome',
  'czech': 'Vitejte',
  'danish': 'Velkomst',
  'dutch': 'Welkom',
  'estonian': 'Tere tulemast',
  'finnish': 'Tervetuloa',
  'flemish': 'Welgekomen',
  'french': 'Bienvenue',
  'german': 'Willkommen',
  'irish': 'Failte',
  'italian': 'Benvenuto',
  'latvian': 'Gaidits',
  'lithuanian': 'Laukiamas',
  'polish': 'Witamy',
  'spanish': 'Bienvenido',
  'swedish': 'Valkommen',
  'welsh': 'Croeso'
};


// Solution 2
function greet(language) {
    var GreetingsDB = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    }, 
    defaultLanguage = 'english';
    return GreetingsDB[language] || GreetingsDB[defaultLanguage];
}


// Solution 3
var database = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
    }
    
    function greet(language) {
    return database[language] || "Welcome";
}


// Solution 4
function greet(language) {
    var welcomes = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'
    };
    return language in welcomes ? welcomes[language] : welcomes.english;
};


// Solution 5
const GREETINGS = {
    english: 'Welcome',  czech: 'Vitejte',  danish: 'Velkomst',  dutch: 'Welkom',  estonian: 'Tere tulemast',  finnish: 'Tervetuloa',  flemish: 'Welgekomen',
    french: 'Bienvenue',  german: 'Willkommen',  irish: 'Failte',  italian: 'Benvenuto',  latvian: 'Gaidits',  lithuanian: 'Laukiamas',  polish: 'Witamy',
    spanish: 'Bienvenido',  swedish: 'Valkommen',  welsh: 'Croeso'
}
  
const greet = language => GREETINGS[language]||GREETINGS.english;


// Solution 6
function greet(language) {
    var greet = {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso'  
    };
    return greet[language] || 'Welcome';
}


// Solution 7
var languages = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
}
function greet(language) {
    for(var k in languages){
        if(k == language){
            return languages[k];
        }
    }
    return "Welcome";
}


// Solution 8
function greet(language) {
    var r = [
  'Vitejte',
  'Velkomst',
  'Welkom',
  'Tere tulemast',
  'Tervetuloa',
  'Welgekomen',
  'Bienvenue',
  'Willkommen',
  'Failte',
  'Benvenuto',
  'Gaidits',
  'Laukiamas',
  'Witamy',
  'Bienvenido',
  'Valkommen',
  'Croeso'];
    switch (language){
        case "czech":
            return r[0]
        case "danish":
            return r[1]
        case "dutch":
            return r[2]
        case "estonian":
            return r[3]
        case "finnish":
            return r[4]
        case "flemish":
            return r[5]
        case "french":
            return r[6]
        case "german":
            return r[7]
        case "irish":
            return r[8]
        case "italian":
            return r[9]
        case "latvian":
            return r[10]
        case "lithuanian":
            return r[11]
        case "polish":
            return r[12]
        case "spanish":
            return r[13]
        case "swedish":
            return r[14]
        case "welsh":
            return r[15]
        default:
            return 'Welcome'
    
    }
}


// Solution 9
const greet = language =>
  (val => val[language] || `Welcome`)
  ({
    english: `Welcome`,
    czech: `Vitejte`,
    danish: `Velkomst`,
    dutch: `Welkom`,
    estonian: `Tere tulemast`,
    finnish: `Tervetuloa`,
    flemish: `Welgekomen`,
    french: `Bienvenue`,
    german: `Willkommen`,
    irish: `Failte`,
    italian: `Benvenuto`,
    latvian: `Gaidits`,
    lithuanian: `Laukiamas`,
    polish: `Witamy`,
    spanish: `Bienvenido`,
    swedish: `Valkommen`,
    welsh: `Croeso`
});


// Solution 10
function greet(language) {
  
    switch(language){
      case "english": return "Welcome";
      case "czech": return "Vitejte";
      case "danish": return "Velkomst";
      case "dutch": return "Welkom";
      case "estonian": return "Tere tulemast";
      case "finnish": return "Tervetuloa";
      case "flemish": return "Welgekomen";
      case "french": return "Bienvenue";
      case "german": return "Willkommen";
      case "irish": return "Failte";
      case "italian": return "Benvenuto";
      case "latvian": return "Gaidits";
      case "lithuanian": return "Laukiamas";
      case "polish": return "Witamy";
      case "spanish": return "Bienvenido";
      case "swedish": return "Valkommen";
      case "welsh": return "Croeso";
      default: return "Welcome";
      }
    
}