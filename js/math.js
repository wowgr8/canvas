// Math object - built in JS object with lots of methods

console.log(Math);
console.log(Math.PI);
console.log(Math.E);


const area = 7.7;

console.log(Math.round(area)); //Will round to the nearest whole number	
console.log(Math.floor(area)); //will round down.
console.log(Math.ceil(area)); //will round up.
console.log(Math.trunc(area)); //will remove the decimal




// random numbers

const random = Math.random();

console.log(random); //will return a random decimal number between 0 and 1
console.log(Math.round(random)); //will return 0 or 1 randomly	
console.log(Math.round(random * 100)); //will return random number between 0 and 100