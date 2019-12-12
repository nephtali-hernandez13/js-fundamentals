/*// Constructor function
function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log('start: ' + this.carId);
    };
}

let vehicle = new Car(132);
vehicle.start();*/

/* // Prototypes
function Car(id) {
    this.carId = id;
}

Car.prototype.start = function() {
    console.log('start: ' + this.carId);
};

let car = new Car(123);
car.start(); // start: 123 */

/*
// JSON

let car = {
    id: 123,
    style: ' convertible'
};

let carIds = [
    { carId: 123 },
    { carId: 456 },
    { carId: 789 }
];

let jsonIn =
    `
        [
            {"carId" : 123},
            {"carId" : 456},
            {"carId" : 789}
        ]
    `;
let carIds = JSON.parse(jsonIn);
console.log( carIds );
console.log( JSON.stringify(carIds) );
*/

// Array iteration
/*
let carIds = [
    { carId: 123, style: 'sedan' },
    { carId: 456, style: 'convertible' },
    { carId: 789, style: 'sedan' }
];

//carIds.forEach( car => console.log( car ) );
//carIds.forEach((car, index) => console.log( car, index ));

/*let convertibles = carIds.filter(
    car => car.style === 'convertible'
)
console.log( convertibles );

let result = carIds.every(
    car => car.carId > 0
); 

let result = carIds.find(
    car => car.carId > 500
);
console.log( result ); */