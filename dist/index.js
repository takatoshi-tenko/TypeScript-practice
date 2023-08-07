"use strict";
// const message: string = "Hello World!";
// console.log(message);
// const test: string = "this is test.";
// console.log(test);
// let greeting, target;
// greeting = "HEllo";
// target = "World!";
// console.log(greeting + target);
// import { createInterface } from "readline";
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question('文字列を入力してください\n', (line) => {
//   console.log(`${line}が入力されました`)
//   rl.close()
// })
// rl.question("コマンドを入力して下さい", (name) => {
//   switch (name) {
//     case "greet":
//       console.log("こんにちは。");
//       break;
//     case "cat":
//       console.log("あなたは猫派ですか？");
//       console.log("私は犬派です。");
//       break;
//     default:
//       console.log(`コマンド[${name}]を認識できませんでした。`);
//   }
//   rl.close();
// });
// let userName = "";
// if (userName === "") userName = "名無し";
// console.log(userName);
// if (userName === "") {
//   console.log("名前を入力してください");
//   userName = "名無し";
// }
// if (userName !== "") {
//   console.log("ちゃんと名前があってえらい！");
// } else {
//   console.log("名前を入力してください");
//   userName = "名無し";
// }
// let num = 0;
// if (num < 0) {
//   console.log("numは負の数です。");
// } else if (num === 0) {
//   console.log("numは0です。");
// }
// let sum = 0;
// let i = 1;
// while(i <= 100) {
//   sum += i
//   i++
// }
// console.log(sum);
// while(true) {
//   if(i > 100) {
//     break
//   }
//   sum += i
//   i++
// }
// console.log(sum);
// while (i <= 100) {
//   i++;
//   if (i % 2 === 1) {
//     continue;
//   }
//   console.log(i);
// }
// let sum = 0;
// for (let i: number = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }
// const obj = {
//   foo: 123,
//   bar: "Hello World!",
// };
// console.log(obj.foo);
// console.log(obj.bar);
// const obj2 = {
//   foo: 555,
//   bar: "文字列",
// };
// let input = "";
// const user = {
//   name: input ? input : "名無し",
//   age: 20,
// };
// const name2 = input ? input : "名無し";
// const user2 = {
//   name2,
//   age2: 20,
// };
// console.log(user)
// console.log(name2)
// const obj1 = {
//   foo: 123,
//   bar: 456,
//   baz: 789,
// };
// const obj2 = {
//   ...obj1,
//   foo: -9999,
// };
// console.log(obj2);
// const obj3 = {
//   foo: 123,
//   bar: 456
// }
// const obj4 = {
//   bar: -999,
//   baz: -9999
// }
// const obj5 = {
//   ...obj3,
//   ...obj4
// }
// console.log(obj5)
// const foo = { num: 1224 };
// const bar = foo;
// console.log(bar.num);
// bar.num = 0;
// console.log(foo.num);
// const foo = { num: 1234 };
// const bar = { ...foo };
// console.log(bar.num);
// console.log(foo.num);
// const foo2 = { obj: { num: 1234 } };
// const bar2 = { ...foo2 };
// bar2.obj.num = 0;
// console.log(foo2.obj.num);
// const obj: {
//   foo: number;
//   bar: string;
// } = {
//   foo: 123,
//   bar: "Hello, World!",
// };
// console.log(obj)
// type FooBarObj = {
//   foo: number;
//   bar: string;
// };
// const obj: FooBarObj = {
//   foo: 123,
//   bar: "Hello world",
// };
// console.log(obj)
// interface FooBarObj {
//   foo: number;
//   bar: string;
// }
// const obj: FooBarObj = {
//   foo: 0,
//   bar: "string",
// };
// type PriceData = {
//   [key: string]: number;
// };
// const data: PriceData = {
//   apple: 220,
//   coffee: 120,
//   bento: 500,
// };
// data.chicken = 250;
// data.弁当 = 0;
// console.log(data);
// console.log(data.chicken);
// console.log(data.弁当);
// type FooBar = {
//   foo: string;
//   bar: number;
// };
// type FooBarBaz = {
//   foo: string;
//   bar: number;
//   baz: boolean;
// };
// const obj: FooBarBaz = {
//   foo: "hi",
//   bar: 1,
//   baz: false,
// };
// const obj2: FooBar = obj;
// console.log(obj)
// console.log(obj2)
// type Family<Parent, Child> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };
// const obj: Family<number, string> = {
//   mother: 0,
//   father: 100,
//   child: "1000",
// };
// type Family<Parent extends HasName, Child extends Parent> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };
// type S = Family<Animal, Human>;
// type T = Famili<Human, Animal>;
// type Animal = {
//   name: string;
// };
// type Family<Parent = Animal, Child = Animal> = {
//   mother: Parent;
//   father: Parent;
//   child: Child;
// };
// const arr1: boolean[] = [false, true];
// const arr2: Array<{
//   name: string;
// }> = [{ name: "山田さん" }, { name: "田中さん" }, { name: "鈴木さん" }];
// console.log(arr1);
// console.log(arr2);
// const arr: readonly number[] = [1, 10, 100];
// arr[1] = 100
// const arr = [1, 10, 100];
// for (const elm of arr) {
//   console.log(elm);
// }
// console.log(arr)
// const arr1 = [1, 10, 100]
// for (let elm of arr1) {
//   elm *= 10
//   console.log(elm)
// }
let tuple = ["foo", 0];
tuple = ["aiueo", -5555];
const str = tuple[0];
const num = tuple[1];
// const nothing = tuple[2];
console.log(tuple);
console.log(str);
console.log(num);
