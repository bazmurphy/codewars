// Bouncing Balls

// A child is playing with a ball on the nth floor of a tall building. 
// The height of this floor, h, is known.
// He drops the ball out of the window. 
// The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
// His mother looks out of a window 1.5 meters from the ground.
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

// Three conditions must be met for a valid experiment:

// Float parameter "h" in meters must be greater than 0
// Float parameter "bounce" must be greater than 0 and less than 1
// Float parameter "window" must be less than h.

// If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

// Note:

// The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.

// Examples:

// h = 3, bounce = 0.66, window = 1.5, result is 3

// h = 3, bounce = 1, window = 1.5, result is -1 

// (Condition 2) not fulfilled).

function bouncingBall(h, bounce, window) {
  
  // argument checking
  if (h <= 0 || bounce < 0 || bounce >= 1 || window >= h) {
    return -1;
  // if the height * the bounce is equal the window, mother will only see it once, falling, but not the subsequent bounce 
  } else if (h * bounce === window) {
    return 1;
  } else {
    // h = height of the floor it was let go from
    // bounce = it bounces back up to X fraction of the height of the floor
    // window = mother is at "window" height
    // how many times does the ball pass the window: falling down, bouncing up, falling down, bouncing up etc.

    // example: height: 3.0, bounce: 0.66, window: 1.5)
    // down = +1 (3.0) falls down from the top past her window
    // up = +1 (1.98) bounces back up past her window
    // down = +1 (1.98) falls back down past her window
    // up = 0 (1.3068) bounces back up, BUT NOT HIGH ENOUGH FOR THE 1.5m WINDOW
    // TOTAL = 3 times Mother sees the ball;

    let motherSeesBall = 0;
    let bounceHeight = h * bounce;
    // console.log(`start ${bounceHeight}`);

    do {
      bounceHeight *= bounce;
      motherSeesBall++;
      // console.log(`loop ${bounceHeight}`);
    } while(bounceHeight >= window);

    return (motherSeesBall * 2) + 1;
  }

}

console.log(bouncingBall(3.0, 0.66, 1.5))
// 3
console.log(bouncingBall(30.0, 0.66, 1.5))
// 15
console.log(bouncingBall(3.0, 1.0, 1.5))
// -1


// Solution 1
function bouncingBall(h, bounce, window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds += 2, h *= bounce;
  return rebounds;
}


// Solution 2
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce >= 1 || bounce <= 0 || window >= h) return -1
  let seen = 0;

  while (h > window) {
    seen += 1
    h *= bounce
    if (h > window) seen += 1
  }

  return seen;
}


// Solution 3
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  var newHeight = h * bounce;
  return bouncingBall(newHeight, bounce, window) + 2;
}


// Solution 4
function bouncingBall(h, bounce, window) {
  if (h <= 0.0 || bounce <= 0.0 || bounce >= 1.0 || window >= h) {
    return -1;
  }

  let views = 1;
  while ((h *= bounce) > window) {
    views += 2;
  }
  return views;
}


// Solution 5
const bouncingBall = (h, b, w) => (b >= 1 || h < w || b <= 0) ? -1 : Math.ceil(Math.log(w / h) / Math.log(b)) * 2 - 1;


// Solution 6
function bouncingBall(h, bounce, window) {
  const isHeightValid = h > 0;
  const isBounceValid = bounce > 0 && bounce < 1;
  const isWindowValid = window < h;

  if (isHeightValid && isBounceValid && isWindowValid) {

    let currentHeight = h;
    let sightings = 0;
    const calculateCurrentHeight = (height, bounce) => {
      const newHeight = height * bounce;
      return newHeight;
    }

    while (currentHeight > window) {
      // before bounce sighting
      sightings += 1;

      currentHeight = calculateCurrentHeight(currentHeight, bounce);

      if (currentHeight > window) {
        sightings += 1;
      }
    }

    return sightings;

  } else {
    return -1
  }
}


// Solution 7
const bouncingBall = (h, b, w) => (h <= 0 || b <= 0 || b >= 1 || w >= h) ? -1 : 2 + bouncingBall(h * b, b, w);


// Solution 8
function bouncingBall(h, bounce, window) {

  var pass = 0
  if (h > 0 && bounce > 0 && bounce < 1 && window < h && window > 0) {

    for (var i = h; i > window; i *= bounce) {
      //i stands for the highest point the ball reaches after each bounce 
      pass += 2
      //the function will execute at least once, as i=h, which is > window 
    }
  }
  return (pass - 1)
  //-1 because the function counted the initial passing as 2
}


// Solution 9
const bouncingBall = (h, b, w, M = Math) =>
  b < 1 ? -1 - 2 * M.floor(M.log2(h / w) / M.log2(b)) || -1 : -1;


// Solution 10
function bouncingBall(h, bounce, window) {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1

  const bounceHeight = bounce * h

  if (bounceHeight > window) {
    return 2 + bouncingBall(bounceHeight, bounce, window)
  } else {
    return 1
  }
}


// Solution 11
// recursion, recursive process
let bouncingBall = f = (h, b, w) => h <= 0 || b <= 0 || b >= 1 || w >= h ? -1 : 2 + f(h * b, b, w)


// Solution 13
function bouncingBall(h, bounce, window) {
  let x = -1;
  if (h <= 0 || bounce >= 1 || bounce < 0 || window > h) {
    return x
  } else if (window < h) {
    for (window; window < h; x += 2) {
      h = h * bounce
    }
  }
  return +x.toFixed(0)
}


// Solution 14
function bouncingBall(h, bounce, window) {
  let c = -1
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    do {
      h = h * bounce
      c += 2
    } while (h > window)
  }
  return c
}