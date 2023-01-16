"use strict";
exports.__esModule = true;
exports.sayHi = void 0;
// src/hello.ts
function sayHi() {
    console.log('Hello there!');
}
exports.sayHi = sayHi;
// src/script.ts
var helloJs = require("./hello.js");
helloJs.sayHi(); // Hello there!
