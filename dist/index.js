"use strict";
// const message: string = "Hello World!";
// console.log(message);
const getName = (u) => {
    console.log("u is", u);
    return u.name;
};
const users = [
    { name: "uhyo", age: 26 },
    { name: "John Smith", age: 15 },
];
const names = users.map(getName);
console.log(names);
const names2 = users.map((u) => u.name);
console.log(names2);
