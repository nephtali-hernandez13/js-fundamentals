/* function startCar(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override';
    };
    startFn();
    console.log(message);
}

startCar(123); */

/*
// SCOPE
let message = 'Outside';
if(5 === 5) {
    let message = 'Equal';
    console.log(message);
}
console.log(message); */

/*
// IIFE's
let app = (function() {
    let carId = 123;
    console.log('in function');
    return {};
})();

console.log(app);
*/

/*
// Closures
let app = (() => {
    let carId = 123;
    let getId = () => { return carId; };
    return { getId: getId };
})();
console.log( app.getId() );

let app = (() => {
    let nombre = "N. Hernandez";
    let getNombre = () => { return nombre; };
    return { getNombre: getNombre };
})();
console.log( app.getNombre() );
*/

/*
// The this keyword
let fn = () => {
    console.log (this === window);
} 
fn();

let o = {
    carId: 123,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};
console.log( o.getId() );
*/
/*
// Call and apply
let o = {
    carId: 123,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};

let newCar = { carId:456 };
console.log( o.getId.apply(newCar, ['ID: ']) );¨
*/

// Bind
/* 
let o = {
    carId: 123,
    getId: function() {
        return this.carId;
    }
};

let newCar = { carId: 760 };
let newFn = o.getId.bind(newCar);

console.log( newFn() );
*/

// Arrow functions
//let getId = (prefix, suffix) => prefix + 123 + suffix;
//console.log( getId('ID: ', '!') );
//let getId = _ => 123; console.log( getId() );

// Default parameters

let trackCar = function(carId, city='NY') {
    console.log(`Tracking ${carId} in ${city}.`);
}

console.log( trackCar(123) );
console.log( trackCar(123, 'Chicago') );