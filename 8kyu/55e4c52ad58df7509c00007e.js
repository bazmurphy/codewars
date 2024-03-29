// Invalid Login - Bug Fixing #11

// Invalid Login - Bug Fixing #11

// Oh NO! Timmy has moved divisions... but now he's in the field of security. Timmy, being the top coder he is, has allowed some bad code through. You must help Timmy and filter out any injected code!
// Task

// Your task is simple, search the password string for any injected code (Injected code is any thing that would be used to exploit flaws in the current code, so basically anything that contains || or //) if you find any you must return "Wrong username or password!" because no one likes someone trying to cheat their way in!
// Preloaded

// You will be given a preloaded class called Database with a method login this takes two parameters username and password. This is a generic login function which will check the database for the user it will return either 'Successfully Logged in!' if it passes the test or 'Wrong username or password!' if either the password is wrong or username does not exist.
// Usage

// var database = new Database();
// database.login('Timmy', 'password');

function validate(username, password){
  var database = new Database();
  return database.login(username, password);
}

Test.assertEquals(validate('Timmy','password'));
// 'Successfully Logged in!',"Should successfully login!"
Test.assertEquals(validate('Timmy','h4x0r'));
// 'Wrong username or password!',"The password was wrong"
Test.assertEquals(validate('Alice','alice'));
// 'Successfully Logged in!',"Should successfully login!"
Test.assertEquals(validate('Timmy','password"||""=="'));
// 'Wrong username or password!',"Should fail to login because of injected code"
Test.assertEquals(validate('Admin','gs5bw"||1==1//'));
// 'Wrong username or password!',"Should fail to login because of injected code"


// Solution 1
function validate(username, password){
  var valid = new Validator();
  return valid.login(username, escape(password));
}


// Solution 2
function validate(username, password){
  var database = new Database();
  return database.login(username, encodeURI(password));
}


// Solution 3
function validate(username, password){
  for (let str of [username, password]) {
    if (/\/\/|\|\|/.test(str)) {
      return "Wrong username or password!";
    }
  }
  var valid = new Validator();
  return valid.login(username, password);
}


// Solution 4
function validate(username, password) {
  if(password.indexOf('||') > -1 || password.indexOf('//') > -1) return 'Wrong username or password!';
  return new Database().login(username, password);
}


// Solution 5
const validate = (username, password) =>
  /\/\/|\|\|/.test(password) ? `Wrong username or password!` : new Database().login(username, password);


// Solution 6
function validate(username, password){
  return password.indexOf('//') > -1 || password.indexOf('||') > -1 ? 'Wrong username or password!' : new Database().login(username, password);
}


// Solution 7
function validate(username, password){
  var database = new Database();
  return password.includes('//')||password.includes('||')?'Wrong username or password!':database.login(username, password);
}


// Solution 8
function validate(username, password){
  var valid = new Validator();
  return valid.login(username, password.replace(/"/gi, "\\'"));
}


// Solution 9
function validate(username, password){
  if(password.includes('//') || password.includes('||')) {
    return 'Wrong username or password!';
  }
  
  var database = new Database();
  console.log(database.login(username, password))
  return database.login(username, password);
}


// Solution 10
function validate(username, password){
  return password.indexOf('||') > -1 || password.indexOf('//') > -1 ? 'Wrong username or password!' : new Database().login(username, password);
}