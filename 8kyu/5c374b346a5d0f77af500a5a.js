// Closest elevator

// Given 2 elevators(named "left" and "right") in a building with 3 floors(numbered 0 to 2), write a function elevator accepting 3 arguments(in order):

// left - The current floor of the left elevator
// right - The current floor of the right elevator
// call - The floor that called an elevator

// It should return the name of the elevator closest to the called floor("left" / "right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0 - 2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"


function elevator(left, right, call) {

    // console.log(`call - left ${call - left} < call - right ${call - right}`)

    // let leftFloorsToCall = Math.abs(call - left)
    // let rightFloorsToCall = Math.abs(call - right)

    // console.log(leftFloorsToCall)
    // console.log(rightFloorsToCall)

    // if (rightFloorsToCall <= leftFloorsToCall) {
    //     return 'right'
    // } else {
    //     return 'left'
    // }

    return Math.abs(call - right) <= Math.abs(call - left) ? 'right' : 'left';

}

console.log(elevator(0, 1, 0));
// 'left'
console.log(elevator(0, 1, 1));
// 'right'
console.log(elevator(0, 1, 2));
// 'right'
console.log(elevator(0, 0, 0));
// 'right'
console.log(elevator(0, 2, 1));
// 'right'


// Solution 1
const elevator = (left, right, call) => Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right'


// Solution 2
function elevator(left, right, call) {
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}


// Solution 3
const elevator = (l, r, c) => Math.abs(c - l) < Math.abs(c - r) ? 'left' : 'right'


// Solution 4
function elevator(leftElevatorPosition, rightElevatorPosition, requestedFloor) {
    class Elevator {
        constructor(label, currentPosition, call) {
            this.label = label;
            this.currentPosition = currentPosition;
            this.distance = Math.abs(requestedFloor - currentPosition)
            return this;
        }
    }

    const availableElevators = [
        //  right elevator has precedence, always checked its position first
        new Elevator('right', rightElevatorPosition, requestedFloor),
        new Elevator('left', leftElevatorPosition, requestedFloor),
    ];

    let closestElevator = availableElevators[0];

    for (let i in availableElevators) {
        const elevator = availableElevators[i];
        if (elevator.distance === 0) { return elevator.label; }
        if (elevator.distance < closestElevator.distance) {
            closestElevator = elevator;
        }
    }

    return closestElevator.label;
}


// Solution 5
function elevator(left, right, call) {
    return Math.abs(call - right) > Math.abs(call - left) ? "left" : "right";
}


// Solution 6
const elevator = (left, right, call) =>
    Math.abs(call - left) < Math.abs(call - right) ? `left` : `right`;


// Solution 7
const elevator = (left, right, call) => Math.abs(right - call) > Math.abs(left - call) ? 'left' : 'right'


// Solution 8
function elevator(left, right, call) {
    return Math.abs(call - left) >= Math.abs(call - right) ? 'right' : 'left'
}


// Solution 9
function elevator(left, right, call) {
    return (Math.abs(right - call) <= Math.abs(left - call)) ? 'right' : 'left';
}


// Solution 11
function elevator(a, b, c) {
    return (c - a) ** 2 < (c - b) ** 2 ? "left" : "right"
}


// Solution 12
function elevator(left, right, call) {
    if (call === 0)
        if (left < right)
            return "left";
        else
            return "right";
    else if (call === 1)
        if (left === call && right !== call)
            return "left";
        else
            return "right";
    else if (call === 2)
        if (left > right)
            return "left";
        else
            return "right";
    else
        blowUp(universe); // it's broken
}