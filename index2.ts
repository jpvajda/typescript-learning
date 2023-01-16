// https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
// To compile everything and watch for changes: tsc -w
// If you want TSC to compile your code automatically: tsc index2.ts -w
// To create a ts config file: tsc --init

// The DOM & Type Casting //

// const link = document.querySelector('a')!; // With the non-null assertion operator (!) we can tell the compiler explicitly that an expression has value other than null or undefined
// console.log(link.href);


// const form = document.getElementById('signup-form') as HTMLFormElement; //typecasting an HTMLFormElement
// console.log(form.method);

// const form2 = document.getElementById('signup-form') as HTMLFormElement;

// form2.addEventListener('submit', (e: Event) => {
//   e.preventDefault(); // prevents the page from refreshing

//   console.log(e.target); // ERROR: Property 'target' does not exist on type 'Event'. Did you mean 'target'?
// });

// Classes //

  class AnotherPerson {
    constructor(
      readonly firstname: string,
      private isCool: boolean,
      protected email: string,
      public pets: number
    ) {}

    sayMyName() {
      console.log(`Your not Heisenberg, you're ${this.firstname}`);
    }

  }

  const person9 = new AnotherPerson('Tony', false, 'tony@example.com', 1);
  console.log(person9.firstname);
  class Programmer extends AnotherPerson { //  Classes can also be extended.
    programmingLanguages: string[];

    constructor(
      name: string,
      isCool: boolean,
      email: string,
      pets: number,
      pL: string[]
    ) {
      // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
      super(name, isCool, email, pets);
      this.programmingLanguages = pL;
    }
  }

