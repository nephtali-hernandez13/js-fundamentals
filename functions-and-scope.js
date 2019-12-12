/* function startCar(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override';
    };
    startFn();
    console.log(message);
}

startCar(123); */

let message = 'Outside';
if(5 === 5) {
    let message = 'Equal';
    console.log(message);
}
console.log(message);