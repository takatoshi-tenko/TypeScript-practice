"use strict";
// const message: string = "Hello World!";
// console.log(message);
const calcBMI = function (human) {
    return human.weight / human.height ** 2;
};
const calcBMI2 = function ({ height, weight }) {
    return weight / height ** 2;
};
const uhyo = {
    height: 1.84,
    weight: 72,
};
console.log(calcBMI(uhyo));
console.log(calcBMI2(uhyo));
