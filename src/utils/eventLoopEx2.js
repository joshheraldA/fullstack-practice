setInterval(() => {
    console.log(`hello world`)
}, 1000);

console.log(`I will run first`)

console.log('first')

// waits for set time before calling the callback function
setTimeout(()=> {
    console.log("Second");
}, 5000)
console.log("Third")