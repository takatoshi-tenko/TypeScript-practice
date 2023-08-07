"use strict";
// const message: string = "Hello World!";
// console.log(message);
const obj1 = {};
const obj2 = { foo: -1234 };
const { foo = 500 } = obj1;
console.log(foo);
const { foo: bar = 500 } = obj2;
console.log(bar);
const nested1 = {
    obj: { foo: 123 },
};
const nested2 = {};
const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
console.log({ obj: { foo: foo2 } });
console.log(nested1);
console.log(nested2);
