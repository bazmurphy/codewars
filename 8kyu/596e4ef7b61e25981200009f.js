// Aspect Ratio Cropping - Part 1

// The aspect ratio of an image describes the proportional relationship between its width and its height. Most video shown on the internet uses a 16:9 aspect ratio, which means that for every pixel in the Y, there are roughly 1.77 pixels in the X (where 1.77 ~= 16/9). As an example, 1080p video with an aspect ratio of 16:9 would have an X resolution of 1920, however 1080p video with an aspect ratio of 4:3 would have an X resolution of 1440.

// Write a function that accepts arbitrary X and Y resolutions and converts them into resolutions with a 16:9 aspect ratio that maintain equal height. Round your answers up to the nearest integer.

// This kata is part of a series with Aspect Ratio Cropping - Part 2 .

// Example
// 374 × 280 pixel image with a 4:3 aspect ratio.

// 500 × 280 pixel image with a 16:9 aspect ratio.


function aspectRatio(x,y){
  return [Math.ceil(y * 16/9), y]
}

console.log(aspectRatio(640, 480))
// [854,480]
console.log(aspectRatio(960, 720))
// [1280,720]
console.log(aspectRatio(1440, 1080))
// [1920,1080]
console.log(aspectRatio(1920, 1440))
// [2560,1440]


// Solution 1
function aspectRatio(x,y){
  return [Math.ceil(y*16/9), y];
  }


// Solution 2
const aspectRatio = (x, y) => [Math.ceil(16 * y / 9), y];


// Solution 3
function aspectRatio(width, height){
  return [Math.ceil(height * 16/9), height];
}


// Solution 4
const aspectRatio = (x,y) => [Math.ceil(y*16/9),y]


// Solution 5
function aspectRatio(x,y){
  let result = [];
  
  x = Math.ceil(y * 1.77777777);
  
  result.push(x, y);
  return result ;
}


// Solution 6
aspectRatio=(x,y)=>[Math.ceil(y*16/9),y]


// Solution 7
function aspectRatio(x,y){
  return [Math.ceil(16 / 9 * y), y]
}


// Solution 8
function aspectRatio(x,y){
  return Array(Math.ceil((y * 16) / 9), y);
}


// Solution 9
const aspectRatio = (_, y) => [Math.ceil((16 * y) / 9), y]


// Solution 12
function aspectRatio(x,y){
  return [Math.ceil(16/9 * y), y]
}



// Solution 13
function aspectRatio(x,y){
  return [Math.ceil(y / 0.5625), y];
}


// Solution 14
function aspectRatio(x,y){
  console.log(x,y)
  return [Math.ceil(1.77777*y),y]
}