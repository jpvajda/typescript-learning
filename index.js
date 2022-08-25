// https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
// To compile everything and watch for changes: tsc -w
// If you want TSC to compile your code automatically: tsc index.ts -w
// To create a ts config file: tsc --init
var id = 5; // TS knows it's a number
var firstname = 'danny'; // TS knows it's a string
var hasDog = true; // TS knows it's a boolean
// Union type //
var age;
age = 26;
age = '26';
// Primitive types //
var x = 2;
var y = 1;
x = y;
y = 100;
console.log(x); // 1 (even though y changed to 100, x is still 1)
// Reference types //
var point1 = { x: 1, y: 1 };
var point2 = point1;
point1.y = 100;
console.log(point2.y); // 100 (point1 and point2 refer to the same memory address where the point object is stored)
console.log(point1.y); // 100 (point1 and point2 refer to the same memory address where the point object is stored)
// Arrays //
var ids = [1, 2, 3, 4, 5]; // can only contain numbers
var names = ['Danny', 'Anna', 'Bazza']; // can only contain strings
var options = [true, false]; // can only contain true or false
var books = [
    { name: 'Fooled by randomness', author: 'Nassim Taleb' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
]; // can only contain objects
var arr = ['hello', 1, true]; // any basically reverts TypeScript back into JavaScript
ids.push(6);
names.push('Mikey');
books.push({
    name: 'The Lean Startup', author: 'Eric Reis'
});
arr.push(1, 'boo', false);
console.log('arrays', ids);
console.log('arrays', names);
console.log('arrays', options);
console.log('arrays', books);
console.log('arrays', arr);
// Union Types to define arrays containing multiple types //
var person1 = ['Danny', 0, true];
person1[1] = 'Bobby';
person1[2] = 'Billy';
for (var index in person1) {
    console.log("union types", person1[index]);
}
// Tuples are more strict and are defined //
var person2 = ['Danny', 1, true];
person2[0] = "Todd";
console.log("tuples", person2);
// Objects //
// Declare a variable called person with a specific object type annotation
var person3;
// Assign person to an object with all the necessary properties and value types
person3 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true
};
var person4 = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true
};
var person5 = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false
};
console.log("interfaces", person4, person5);
