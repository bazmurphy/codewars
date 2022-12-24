// A bugs trilogy: Episode 1 - "Let Math.Random(); decide your future"

// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,

// Dear Pac,  
// This is the first exercise. Find out what's wrong and fix the code.  
// You have 15 minutes to send a solution.  
// Good Luck.

// This code is a mess! Would you help Pac to fix the code in time?

// (This might be helpful -> Math.random();)

// This is my first Kata, so please any feedback (especially on Test Cases) is welcome!


function yourFutureCareer() {
	const career = Math.random();
		if (career <= 0.32) {
			return "FrontEnd Developer"
    } else if (career <= 0.65) {
			return "BackEnd Developer"
		} else {
			return 'Full-Stack Developer'
		}
}

yourFutureCareer();

// TESTS
describe("the function should return one of three strings", () => {
  it("should bla bla", () => {
    Test.assertEquals(yourFutureCareer(), "FrontEnd Developer");
  });
});


// Solution 1
function yourFutureCareer() {
	var career = Math.random();
  
	if (career <= 0.32) {
    return 'FrontEnd Developer';
  } else if (career <= 0.65) {
    return 'BackEnd Developer';
  } else {
    return 'Full-Stack Developer';
  }
}


// Solution 2
const yourFutureCareer = () => {
  let career = Math.random();
  return `${ career <= 0.32 ? 'FrontEnd' : (career <= 0.65 ? 'BackEnd' : 'Full-Stack') } Developer`;
}


// Solution 3
const randomChoice = arr => arr[Math.floor(Math.random() * arr.length)];
const yourFutureCareer = () =>randomChoice(['FrontEnd Developer', 'BackEnd Developer', 'Full-Stack Developer']);


// Solution 4
const yourFutureCareer = () =>
  (career => `${career <= 0.32 ? `FrontEnd` : career <= 0.65 ? `BackEnd` : `Full-Stack`} Developer`)
  (Math.random());


// Solution 5
function yourFutureCareer() {
  var career = Math.random();
  if (career <= 0.32)
      return 'FrontEnd Developer';
  if (career <= 0.65)
      return 'BackEnd Developer';
  return 'Full-Stack Developer';
}


// Solution 6
function yourFutureCareer(career){
  var career = Math.random();
  if (career <= 0.32) {
    return "Full-Stack Developer";
  } else if (career <= 0.65) {
    return "BackEnd Developer";
  } else {
	  return "FrontEnd Developer";
  }
}


// Solution 7
function yourFutureCareer() {
  let career =  +Math.random().toFixed(2)
 if (career <= 0.32) {
   return 'FrontEnd Developer' 
 }else if (career <= 0.65){ 
   return  'BackEnd Developer'
 } else {
   return 'Full-Stack Developer'
     }
}
console.log(yourFutureCareer())