// src/hello.ts
export function sayHi() {
  console.log('Hello there!');
}

// src/script.ts
import * as helloJs from './hello.js';

helloJs.sayHi(); // Hello there!
