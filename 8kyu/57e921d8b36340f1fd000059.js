// Holiday VI - Shark Pontoon

// Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.

// As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!

// You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!

// You are given 5 variables;

//     pontoonDistance = how far you need to swim to safety in metres.

//     sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.

//     youSpeed = how fast you can swim in metres/second.

//     sharkSpeed = how fast it can move in metres/second.

//     dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.

//     The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){

    // pontoonDistance - you to the pontoon distance
    // sharkDistance - shark to the pontoon distance
    // youSpeed - how fast you swim in meter/second
    // sharkSpeed - how fast shark swim in meter/second
    // dolphin - if true shark speed is half
    
    if (dolphin === true) {
        sharkSpeed = sharkSpeed / 2
    }

    let distanceBetweenYouAndShark = sharkDistance - pontoonDistance;
    // console.log('distanceBetweenYouAndShark', distanceBetweenYouAndShark)

    // time = distance / speed
    let timeForYouToReachPontoon = pontoonDistance / youSpeed;
    // console.log('timeForYouToReachPontoon', timeForYouToReachPontoon)

    let timeForSharkToReachPontoon = sharkDistance / sharkSpeed;
    // console.log('timeForSharkToReachPontoon', timeForSharkToReachPontoon)

    if (timeForYouToReachPontoon <= timeForSharkToReachPontoon) {
        return "Alive!"
    } else {
        return "Shark Bait!"
    }

}

console.log(shark(12, 50, 4, 8, true));
// "Alive!"
console.log(shark(7, 55, 4, 16, true));
// "Alive!"
console.log(shark(24, 0, 4, 8, true));
// "Shark Bait!"
console.log(shark(37, 86, 1, 3, false));
// "Shark Bait!"
console.log(shark(41, 176, 2, 17, false));
// "Shark Bait!"
console.log(shark(6, 30, 1, 8, false));
// "Shark Bait!"


// Solution 1
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
      sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
}

// Solution 2
const shark = (pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) => {
    let youTime = pontoonDistance / youSpeed
    let sharkTime = sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed)
    
    return sharkTime < youTime ? 'Shark Bait!' : 'Alive!'
}

// Solution 3
shark = (pD, sD, yS, sS, d) => yS / pD  > sS / sD / (d ? 2 : 1) ? "Alive!" : "Shark Bait!";


// Solution 4
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    const sharkActualSpeed = dolphin ? sharkSpeed / 2 : sharkSpeed;
    
    const sharkTime = sharkDistance / sharkActualSpeed;
    const humanTime = pontoonDistance / youSpeed;
    const sharkWillEatYou = sharkTime <= humanTime;
    
    return sharkWillEatYou ? 'Shark Bait!' : 'Alive!';
}