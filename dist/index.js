"use strict";
// const message: string = "Hello World!";
// console.log(message);
const showName = (obj) => {
    console.log(obj.name);
};
const g = showName;
g({
    name: "uhyo",
    age: 26,
});
console.log(g);
