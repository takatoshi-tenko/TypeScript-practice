"use strict";
// const message: string = "Hello World!";
// console.log(message);
const double = (arg) => {
    console.log(arg * 2);
};
double.isUsed = true;
console.log(double.isUsed);
console.log(double(100));
