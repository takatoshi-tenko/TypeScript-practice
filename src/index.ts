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

const foo = { num: 1234 };
const bar = { ...foo };
console.log(bar.num);
console.log(foo.num);

const foo2 = { obj: { num: 1234 } };
const bar2 = { ...foo2 };
bar2.obj.num = 0;
console.log(foo2.obj.num);
