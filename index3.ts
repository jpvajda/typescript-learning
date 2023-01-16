// Function Signature example

// a greet Function

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

let calc:(a: number, b:number, c:string) => number;

// A calc function

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === 'add'){
    return numOne+ numTwo;
  } else {
    return numOne - numTwo;
  }
}

// a log function

let logDetails: (object: {name: string, age: number}) => void;

type person = {name: string, age: number};

logDetails = (ninja: person) => {
  console.log(`$ninja.name is ${ninja.age} years old`)
}