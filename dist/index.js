"use strict";
// const message: string = "Hello World!";
// console.log(message);
const fromAge = (age) => ({
    name: "John Smith",
    age,
});
const f = fromAge;
const obj = f(100);
console.log(obj);
