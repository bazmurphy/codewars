// Sum of angles

// Find the total sum of internal angles(in degrees) in an n - sided simple polygon.N will be greater than 2.

function angle(n) {
    return (n - 2) * 180;
}

console.log(angle(3));
// 180
console.log(angle(4));
// 360


// Solution 2
const angle = n => (n - 2) * 180;


// Solution 3
function angle(n) {
    return 180 * (n - 2);
}


// Solution 4
const angle = n => 180 * (n - 2)


// Solution 5
function angle(n) {
    return (n - 2) * 180;
}


// Solution 6
let angle = n => n * 180 - 360;


// Solution 7
const angle = angles => angles * 180 - 2 * 180


// Solution 8
const angle = n => (n - 2) * 180;
/* It happens because we can triangulate any shape
   and get n - 2 triangles. Sum of angles in each is 180 deg.

   There are n sides in the polygon and therefore n straight angles.

   Sum of interior angles + sum of exterior angles = n x 180°
   Sum of interior angles + 360° = n x 180°
   Sum of interior angles = n x 180°- 360°  = (n-2) x 180°
*/


// Solution 9
function angle(n) {
    return n > 3 ? 180 * (n - 2) : 60 * 3;
}


// Solution 10
angle = n => 180 * (n - 2);


// Solution 11
function angle(n) {

    if (n < 3) return 'Polygon must have at least 3 sides.';
    return (n - 2) * 180;
}


// Solution 12
function angle(n) {
    return (n - 2) * 180;
}