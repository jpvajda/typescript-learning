// https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
// To compile everything and watch for changes: tsc -w
// If you want TSC to compile your code automatically: tsc index.ts -w
// To create a ts config file: tsc --init


var id = 5; // TS knows it's a number
var firstname = 'danny'; // TS knows it's a string
var hasDog = true; // TS knows it's a boolean


// Union type //
let age: string | number;
age = 26;
age = '26';



// Primitive types //
let x = 2;
let y = 1;

x = y;
y = 100;
console.log(x); // 1 (even though y changed to 100, x is still 1)

// Reference types //
let point1 = { x: 1, y: 1 };
let point2 = point1;

point1.y = 100;
console.log(point2.y); // 100 (point1 and point2 refer to the same memory address where the point object is stored)
console.log(point1.y);  // 100 (point1 and point2 refer to the same memory address where the point object is stored)

// Arrays //
let ids: number[] = [1, 2, 3, 4, 5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna', 'Bazza']; // can only contain strings
let options: boolean[] = [true, false]; // can only contain true or false
let books: object[] = [
  { name: 'Fooled by randomness', author: 'Nassim Taleb' },
  { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
let arr: any[] = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript

ids.push(6);
names.push('Mikey')
books.push({
  name: 'The Lean Startup', author: 'Eric Reis'
})
arr.push(1, 'boo', false)

console.log('arrays', ids)
console.log('arrays', names)
console.log('arrays', options)
console.log('arrays', books)
console.log('arrays', arr)

// Union Types to define arrays containing multiple types //

let person1  = ['Danny', 0, true];
person1[1] = 'Bobby';
person1[2] = 'Billy'

for (var index in person1) {
console.log("union types", person1[index]);
}

// Tuples are more strict and are defined //

let person2: [string, number, boolean] = ['Danny', 1, true];
person2[0] = "Todd"
console.log( "tuples", person2)

// Objects //

// Declare a variable called person with a specific object type annotation
let person3: {
  name: string;
  location: string;
  isProgrammer: boolean;
};

// Assign person to an object with all the necessary properties and value types
person3 = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};


// Interfaces //
interface Person {
  name: string;
  location: string;
  isProgrammer: boolean;
}

let person4: Person = {
  name: 'Danny',
  location: 'UK',
  isProgrammer: true,
};

let person5: Person = {
  name: 'Sarah',
  location: 'Germany',
  isProgrammer: false,
};

console.log("interfaces", person4, person5)


interface Speech {
  sayHi(name: string): string; //common JS
  sayBye: (name: string) => string; //ES6
}

let sayStuff: Speech = {
  sayHi: function (name: string) {
    return `Hi ${name}`;
  },
  sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('John'));
console.log(sayStuff.sayBye('John'));

//Functions//

// Define a function called circle that takes a diam variable of type number, and returns a string

function circle1(diam: number): string { // commonJS
  return 'The circumference is ' + Math.PI * diam;
}

console.log(circle1(10));

const circle2 = (diam: number): string => { // E6
  return 'The circumference is ' + Math.PI * diam;
};

console.log(circle2(10));

const circle3: Function = (diam: number): string => { // Using explicit typing
  return 'The circumference is ' + Math.PI * diam;
};

console.log(circle3(10));


const add = (a: number, b: number, c?: number | string) => { // c is an optional parameter
  console.log(c);

  return a + b;
};

console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));


const logMessage = (msg: string): void => { // a void data type
  console.log('This is ' + msg);
};

logMessage('a void example');

// Declare the variable sayHello, and give it a function signature that takes a string and returns nothing.
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log('Hello ' + name);
};

sayHello('Danny');

// Dynamic Any Types //

let age2: any = '100'; // Using the any type, we can basically revert TypeScript back into JavaScript
age2 = 100;
age2 = {
  years: 100,
  months: 2,
};

console.log(age2)



// Type Aliases //

type StringOrNumber = string | number;

type PersonObject = {
  name: string;
  id: StringOrNumber;
};

const person7: PersonObject = {
  name: 'John',
  id: 1,
};

const person8: PersonObject = {
  name: 'Delia',
  id: 2,
};

const sayHello2 = (person: PersonObject) => {
  return 'Hi ' + person.name;
};

const sayGoodbye = (person: PersonObject) => {
  return 'Bye ' + person.name;
};


console.log(sayHello2(person7))
console.log(sayGoodbye(person8))