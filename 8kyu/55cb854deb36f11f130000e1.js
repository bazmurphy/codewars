// Grasshopper - Debug

// Debug celsius converter

// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius.
// Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5 / 9)

// Remember that typically temperatures in the current weather conditions are given in whole numbers.
// It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth.
// Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

function weatherInfo(temp) {
    let c = convertToCelsius(temp)
    if (c <= 0) {
        return (c + " is freezing temperature")
    } else {
        return (c + " is above freezing temperature")
    }
}

function convertToCelsius(temperature) {
    let celsius = (temperature - 32) * (5 / 9)
    return celsius;
}


console.log(weatherInfo(50));
// '10 is above freezing temperature
console.log(weatherInfo(23));
// '-5 is freezing temperature


// Solution 1
function weatherInfo(temp) {
    var c = convertToCelsius(temp);
    if (c <= 0)
        return (c + " is freezing temperature");
    else
        return (c + " is above freezing temperature");
}

function convertToCelsius(temperature) {
    var celsius = (temperature - 32) * (5 / 9);
    return celsius;
}


// Solution 2
const weatherInfo = temperature => temperatureMesage(convertToCelsius(temperature));

const convertToCelsius = temperature => (temperature - 32) * (5 / 9);

const temperatureMesage = temperature => temperature + ((temperature <= 0) ? " is freezing temperature" : " is above freezing temperature")


// Solution 3
const weatherInfo = t => `${t = (t - 32) * (5 / 9)} is ${t > 0 ? 'above ' : ''}freezing temperature`;


// Solution 4
function weatherInfo(t) {
    var c = convertToCelsius(t)
    return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`
}

function convertToCelsius(t) {
    return (t - 32) * (5 / 9)
}


// Solution 5
function weatherInfo(t) {
    var c = (t - 32) * (5 / 9);
    return c <= 0 ? c + " is freezing temperature" : c + " is above freezing temperature";
}


// Solution 6
function weatherInfo(temp) {
    var c = (temp - 32) * (5 / 9)
    return c <= 0 ? c + " is freezing temperature" : c + " is above freezing temperature";
}


// Solution 7
const weatherInfo = temp =>
    (val => `${val} is ${val > 0 ? `above ` : ``}freezing temperature`)
        ((temp - 32) * (5 / 9));


// Solution 8
function weatherInfo(temp) {
    let c = convertToCelsius(temp);
    if (c < 0) return (c + " is freezing temperature");
    if (c == 0) return '0 is freezing temperature';
    return (c + " is above freezing temperature");
}

function convertToCelsius(temperature) {
    let celsius = (temperature - 32) * (5 / 9);
    return celsius;
}


// Solution 9
const weatherInfo = (temp, celsius = convertToCelsius(temp)) =>
    `${celsius} is ${celsius > 0 ? 'above ' : ''}freezing temperature`;

const convertToCelsius = (temp) => (temp - 32) * (5 / 9);


// Solution 10
function weatherInfo(temp) {
    const c = (temp - 32) * (5 / 9);
    return `${c} is ${c > 0 ? 'above ' : ''}freezing temperature`;
}


// Solution 11
function weatherInfo(temp) {
    var c = convertToCelsius(temp)
    if (c < 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
}

convertToCelsius = temperature => (temperature - 32) * (5 / 9)


// Solution 12
function weatherInfo(fahrenheit) {
    var celcius = convertToCelsius(fahrenheit);
    if (celcius <= 0) {
        return celcius + " is freezing temperature";
    }

    return celcius + " is above freezing temperature";
}

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}