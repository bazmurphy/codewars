// A Promise is a Promise

// Create a resolved javascript Promise that will return 'Hello World!'.

function promiseHelloWorld() {
    return new Promise((resolve, reject) => {
        resolve("Hello World!");
        reject("Rejected!");
    });
}



// Solution 1
async function promiseHelloWorld() {
    return 'Hello World!';
}


// Solution 2
const promiseHelloWorld = async () => 'Hello World!';


// Solution 3
const promiseHelloWorld = () => Promise.resolve('Hello World!');


// Solution 4
function promiseHelloWorld() {
    return new Promise((resolve, reject) => {
        return resolve('Hello World!')
    });
}


// Solution 5
const promiseHelloWorld = _ => Promise.resolve("Hello World!");


// Solution 6
const promiseHelloWorld = () => new Promise(success => success('Hello World!'));


// Solution 7
function promiseHelloWorld() {
    return Promise.resolve('Hello World!');
}


// Solution 8
promiseHelloWorld = () => new Promise((r) => r('Hello World!'))


// Solution 9
async function promiseHelloWorld() {
    return "Hello World!"
}

promiseHelloWorld().then(console.log)


// Solution 10
const promiseHelloWorld = async () => await 'Hello World!'


// Solution 11
function promiseHelloWorld() {
    return new Promise((resolve, reject) => {
        resolve('Hello World!')
        reject('Rejected!')
    });
}


// Solution 12
async function promiseHelloWorld() {
    return "Hello World!";
}
promiseHelloWorld()


// Solution 13
function promiseHelloWorld() {
    return Promise.resolve('Hello World!').then((res) => res);

}


// Solution 14
const promiseHelloWorld = () => {
    return new Promise(resolve => resolve('Hello World!')).then(text => text)
}


// Solution 15
function promiseHelloWorld() {
    return new Promise((res) => {
        return res('Hello World!')
    })
}


// Solution 16
function promiseHelloWorld() {
    const promise = new Promise(
        (res, rej) => {
            res("Hello World!");
        }
    )
    return promise;
}


// Solution 17
async function promiseHelloWorld() {
    let helloPromise = new Promise((resolve, reject) => {
        resolve('Hello World!');
    })

    return await helloPromise;
}


// Solution 18
function promiseHelloWorld() {
    const result = new Promise(function(resolve, reject) {
        resolve('Hello World!'), 
        reject('Bruh...')
    })
    result
      .then(value => {
        console.log(result);
        console.log(value);
      })
      .catch(value => {
        console.log(result);
        console.error(value);
      });
      return result
}


// Solution 19
function promiseHelloWorld() {
    return new Promise(function (resolve) {
        const hello = 'Hello World!'
        resolve()
    }).then(hello => {
        return 'Hello World!'
    })
}