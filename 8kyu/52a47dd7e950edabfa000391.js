// Max Headroom and JavaScript style

// Shouldn't the two functions getMax1 and getMax2 be equivalent and return the same value? Can you spot a problem and fix it? Can you learn something about JavaScript style in this kata?

function getMax1() {
  var max = { name: 'Max Headroom' }
  return max;
}

function getMax2() {
  return { name: 'Max Headroom' }
}

console.log(getMax2().toString() == getMax1().toString());


// Solution 1
function getMax1()
{
  var max = {name: 'Max Headroom'}
  return max;
}

function getMax2()
{
// Have your return object on same line
return {name: 'Max Headroom'};
}


// Solution 2
function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  // note Javascript does not require the semicolon but can assume it meaning nothing is returned
  // instead move the brace up
  return  {
    name: 'Max Headroom'
  }
}


// Solution 3
function getMax1() {
  var max = {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2() {
  return {
    name: 'Max Headroom'
  }
}


// Solution 4
const getMax1 = () => {
  const max = {name: `Max Headroom`};
  return max;
};

const getMax2 = () =>
  ({name: `Max Headroom`});


// Solution 5
const getMax1 = () => ({ name: 'Max Headroom' })
const getMax2 = () => ({ name: 'Max Headroom' })


// Solution 6
var max = {
  name: 'Max Headroom'
}

const getMax2 = () => max
const getMax1 = () => max


// Solution 7
getMax1=getMax2=_=>({name:'Max Headroom'})


// Solution 8
const getMax1 = getMax2 = () => ({ name: 'Max Headroom' })


// Solution 9
function getMax1() {
  const max = {
   name: 'Max Headroom'
  };
  return max;
}

function getMax2() {
    return getMax1();
}


// Solution 10
function getMax1() {
  var max = { name: 'Max Headroom' }
  return max
}

function getMax2() {
  var max = { name: 'Max Headroom' }
  return max
}


// Solution 11
function getMax1() {
  var max = {name: 'Max Headroom'};
  return max;
}

const getMax2 = () => ({name: 'Max Headroom'});


// Solution 12
function getMax1()
{
  var max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{
  return {
    name: 'Max Headroom'
  };
}

function stringify(e) { 
  print(e);
}


// Solution 13
function getMax1()
{
  return { name: 'Max Headroom' }
}

function getMax2()
{
  return { name: 'Max Headroom' }
}