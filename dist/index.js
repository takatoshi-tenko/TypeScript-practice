"use strict";
// const message: string = "Hello World!";
// console.log(message);
const calcBMI = ({ height, weight }) => {
    return weight / height ** 2;
};
const uhyo = { height: 1.84, weight: 72 };
console.log(calcBMI(uhyo));
