//const carId = 100;

/*
    if(true) {
        // let carId = 100;
        var carId = 100;
    }
    co<nsole.log(carId);
*/

/* function sendCars(...carIds) {
    carIds.forEach( id => console.log(id) );
}

sendCars('Monday', 1, 2, 3); */

// DESTRUCTURING ARRAYS

/* let carIds = [ 100, 200, 300 ];
let car1, car2, theRest;

[, car2, ...theRest] = carIds;

console.log(car1, car2, theRest);*/

// DESTRUCTURING OBJECTS

/* let car = { id: 5000, style: 'convertible' };
let id, style;

({ id, style } = car); 

console.log(id, style); */

// Spread syntax
/* function startCars(car1, car2, car3, ...rest) {
    console.log(rest);
}

let carIds = [1,2,3,4,5,6,7,8];
startCars(...carIds); */

/*
    // Typeof()

    typeof(1); // number
    typeof(true); // boolean
    typeof('Hello'); // string
    typeof( function(){} ); // function
    typeof( {} ); // object
    typeof(null); // object
    typeof(undefined); // undefined
    typeof(NaN); // number

*/

/*
    // Common Type Conversions
    console.log( (Number.parseFloat('55.10CCC')) );
    console.log( (Number.parseNumber('55.10CCC')) );    
*/

/*
    // Controlling Loops
    let i=0;
    for(; i<12; i++) {
        if( i===8 ) {
            break;
        }
    }
    console.log(i); // 8

    for(let i=0; i<4; i++) {
        if( i===2 ) {
            continue;
        }
        console.log(i);
    }

    for(let i=0; i<5; i++) {
        if( i===3 )
            continue;
        console.log(i);
    }
*/