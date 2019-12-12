/* let car = newCar;
console.log('Continuing...'); */

// Try and catch
/* try {
    let car = newCar;
} catch(error) {
    console.log('Error: ', error);
}
console.log('Continuing...'); */

// Try, catch, finally
/* try {
    let car = null;
} catch(error) {
    console.log('Error: ', error);
} finally {
    console.log('This always executes');
} */

// Creating a Promise
let promise = new Promise(
    function(resolve, reject) {
        setTimeout(resolve, 100, 'someValue');
    }
);

promise.then(
    value => console.log('Fulfilled: ' + value),
    error => console.log('Rejected: ' + error)
);

console.log(promise);