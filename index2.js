// https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
// To compile everything and watch for changes: tsc -w
// If you want TSC to compile your code automatically: tsc index2.ts -w
// To create a ts config file: tsc --init
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var AnotherPerson = /** @class */ (function () {
    function AnotherPerson(firstname, isCool, email, pets) {
        this.firstname = firstname;
        this.isCool = isCool;
        this.email = email;
        this.pets = pets;
    }
    AnotherPerson.prototype.sayMyName = function () {
        console.log("Your not Heisenberg, you're ".concat(this.firstname));
    };
    return AnotherPerson;
}());
var person9 = new AnotherPerson('Tony', false, 'tony@example.com', 1);
console.log(person9.firstname);
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, isCool, email, pets, pL) {
        var _this = 
        // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
        _super.call(this, name, isCool, email, pets) || this;
        _this.programmingLanguages = pL;
        return _this;
    }
    return Programmer;
}(AnotherPerson));
