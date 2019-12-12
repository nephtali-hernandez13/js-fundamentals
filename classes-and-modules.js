/*class Car {

}

let car = new Car();
console.log(car);*/

// Constructor and properties
/*class Car {
    constructor(id) {
        this.id = id;
    }

    identify(suffix) { return `Car ID: ${this.id} ${suffix}`; }
}

let car = new Car(123);
car.id = 432;
console.log( car.identify('!!!') );*/

// Inheritance

/* class Vehicle {
    constructor() {
        this.type = 'car';
    }

    start() {
        return `Starting: ${this.type}`;
    }
}

class Car extends Vehicle {    
    start(){
        return 'In Car Start' + super.start();
    }    
}

let car = new Car();
console.log( car.start() ); */

// MODULES
import { Car } from './models/car.js';
let Car = new Car(123);
console.log( car.id );