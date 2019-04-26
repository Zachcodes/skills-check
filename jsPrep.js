// Data types

//primitives
let boolean = true;
let nonExistent = null;
let noAssignedValue = undefined;
let myNumber = 12.23;
let myString = 'some value';

//Object
let object = {
  test: 'hello'
};

// Creating variables
var name = 'john';

let cars = ['Subaru', 'Volkswagen', 'BMW'];

let dog = {
  name: 'doggo',
  color: 'brown',
  bark: 'loud'
};

let nested = [
  {
    number: 1
  },
  {
    number: 2
  }
];

// Functions

// Function declaration
function logger() {
  console.log('logging');
}
// invoking a function
// logger();

// function expression
let logger2 = function() {
  console.log('logging 2');
};
// logger2();

// function with parameters
function dogCreator(name, color) {
  return {
    name,
    color
  };
}
// invoking a function with arguments
// console.log(dogCreator('Ruff', 'Black'));

// scope
let cat = 'Kit kat';
// console.log('cat outside scoper ', cat);
function scoper() {
  // let cat = 'Toby';
  console.log('cat inside scoper ', cat);
  function innerScope() {
    console.log('cat inside innerScope ', cat);
  }
  innerScope();
}
// scoper();

// let scope vs var scope
if (true) {
  // let jedi = 'luke';
  var jedi = 'luke';
  // console.log('Jedi with let ', jedi);
}
// console.log('jedi outside if ', jedi);

// If else / ternary
// undefined
// null
// ''
// NaN
// 0
// false
// if ('2' === 2) {
//   console.log('is true');
// } else console.log('is false');

let animal = 'dog';

let favoriteAnimal = animal === 'dog' ? true : false;
// console.log(favoriteAnimal);
// For loops
let names = ['john', 'rachel', 'jacob', 'gary', 'whitney'];
for (let i = 0; i < names.length; i++) {
  // console.log(names[i]);
}

// Arrays and array methods

// console.log(numArr[1]);
// console.log(numArr[numArr.length - 1]);
// numArr.push(54);
// console.log(numArr[numArr.length - 1]);
// numArr.pop();
// console.log(numArr[numArr.length - 1]);
// numArr.shift();
// console.log(numArr[0]);
// numArr.unshift(999);
// console.log(numArr[0]);
// let copy = numArr.slice();
// console.log('copy \n', copy);
// copy.splice(0, 2, 23, 4);
// console.log('copy after splice ', copy);

// other common array methods

// let mapped = numArr.map(function(num) {
//   // console.log(num);
//   return num * 2;
// });
// console.log('mapped ', mapped);

// let filtered = numArr.filter(function(num) {
//   return num > 20;
// });
// console.log('filtered ', filtered);
let numArr = [23, 545, 32, 20];
let reduced = numArr.reduce(function(accum, val) {
  return accum + val;
}, 0);
// console.log('reduced ', reduced);

// numArr.forEach(function(num) {
//   console.log('num ', num);
// });

// Objects and object methods
let car = {
  make: 'Subaru',
  year: '2005',
  color: 'white'
};

// accessing values in objects
let make = car['make'];
let year = car.year;

//adding values
car.accidents = 0;
car['warranty'] = 'expired';

// removing values
delete car['warranty'];

// looping through object
// for (let key in car) {
//   console.log('key ', key);
//   console.log('value ', car[key]);
// }

//adding methods on objects
car.honk = function() {
  console.log('honk honk');
};
// car.honk();

//copying object
let newCar = Object.assign({}, car);
// console.log(newCar);

// Callbacks
function success() {
  console.log('Success!');
}
function failure() {
  console.log('Failure!');
}
function logMessage(errorMessageCb, successMessageCb, testValue) {
  if (testValue) successMessageCb();
  else errorMessageCb();
}
logMessage(failure, success, false);
