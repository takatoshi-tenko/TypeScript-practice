// const message: string = "Hello World!";
// console.log(message);

import { Sign, publicDecrypt } from "crypto";
// import { readFile } from "fs";
import { stringify } from "querystring";
import { runInContext } from "vm";

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

// let tuple: [string, number] = ["foo", 0];
// tuple = ["aiueo", -5555];
// const str = tuple[0];
// const num = tuple[1];
// // const nothing = tuple[2];
// console.log(tuple);
// console.log(str);
// console.log(num);

// const nested = {
//   num: 123,
//   obj: {
//     foo: "hello",
//     bar: "workd",
//   },
// };
// const {
//   num,
//   obj: { foo },
// } = nested;
// console.log(num);
// console.log(foo);

// const arr = [1, 2, 4, 8, 16, 32];
// const [first, second, third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);

// type obj = { foo?: number };
// const obj1: obj = {};
// const obj2: obj = { foo: -1234 };

// const { foo = 500 } = obj1;
// console.log(foo);
// const { foo: bar = 500 } = obj2;
// console.log(bar);

// type NestedObj = {
//   obj?: {
//     foo: number;
//   };
// };
// const nested1: NestedObj = {
//   obj: { foo: 123 },
// };
// const nested2: NestedObj = {};
// const { obj: { foo: foo1 } = { foo: 500 } } = nested1;
// const { obj: { foo: foo2 } = { foo: 500 } } = nested2;
// console.log({ obj: { foo: foo2 } })
// console.log(nested1);
// console.log(nested2);

// const d = new Date()
// console.log(d)
// console.log(Date.now())

// type User = {
//   name: string;
//   age: number;
//   premiumUser: boolean;
// };
// const data: string = `
// uhyo,26,1
// John Smith,17,0
// Mary Sue,14,1
// `;

// const result = data.trim().split(',')
// console.log(result)

// const users: User[] = []
// const lines = data.split('\n')
// for (const line of lines) {
//   if(line === "") {
//     continue //スキップ処理
//   }
//   const [name, ageString, premiumString] = line.split(',')
//   console.log(name)
//   console.log(ageString)
//   console.log(premiumString)
//   const age = Number(ageString)
//   const premiumUser = premiumString === "1"
//   console.log(premiumUser)
//   users.push({
//     name,
//     age,
//     premiumUser
//   })
// }
// console.log(lines)

// for (const user of users) {
//   if (user.premiumUser) {
//     console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
//   } else {
//     console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
//   }
// }

// function range(min: number, max: number): number[] {
//   const result = []
//   for (let i = min; i <= max; i++) {
//     result.push(i)
//   }
//   return result
// }
// console.log(range(5, 10))

// function helloWorldTimes(n: number): void {
//   for (let i = 0; i < n; i++) {
//     console.log("Hello World!");
//   }
// }
// helloWorldTimes(5);

// function helloWorldTimes2(n: number): void {
//   if (n > 100) {
//     console.log(`${n}回なんて無理です！`);
//     return;
//   }
//   for (let i = 0; i < n; i++) {
//     console.log("Hello, World!");
//   }
// }
// helloWorldTimes2(5);
// helloWorldTimes2(150);

// type Human = {
//   height: number;
//   weight: number;
// };

// const calcBMI = function (human: Human): number {
//   return human.weight / human.height ** 2;
// };

// // 分割代入を使用することもできる
// const calcBMI2 = function ({ height, weight }: Human): number {
//   return weight / height ** 2;
// };

// const uhyo: Human = {
//   height: 1.84,
//   weight: 72,
// };
// console.log(calcBMI(uhyo));
// console.log(calcBMI2(uhyo));

// type Human = {
//   height: number;
//   weight: number;
// };
// type ReturnObj = {
//   bmi: number;
// };

// const calcBMI = ({ height, weight }: Human): number => {
//   return weight / height ** 2;
// };

// const uhyo: Human = { height: 1.84, weight: 72 };
// console.log(calcBMI(uhyo));

// const calcBMIObject = ({ height, weight }: Human): ReturnObj => ({
//   bmi: weight / height ** 2,
// });
// console.log(calcBMIObject)

// const obj = {
//   double(num: number): number {
//     return num * 2;
//   },
//   double2: (num: number): number => num * 2,
// };
// console.log(obj.double(100));
// console.log(obj.double2(-50));

// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };
// console.log(sum(1, 10, 100));
// console.log(sum(123, 456));
// console.log(sum());

// const sum = (...args: number[]): number => {
//   let result = 0;
//   for (const num of args) {
//     result += num;
//   }
//   return result;
// };
// const nums = [1, 2, 3, 4, 5];
// console.log(sum(...nums));

// const toLowerOrUpper = (str: string, upper?: boolean): string => {
//   if (upper) {
//     return str.toUpperCase();
//   } else {
//     return str.toLowerCase();
//   }
// };
// console.log(toLowerOrUpper("Hello"));
// console.log(toLowerOrUpper("Hello", false));
// console.log(toLowerOrUpper("Hello", true));

// const bar = ():void => {}
// console.log(bar.name)

// type User = { name: string; age: number };
// const getName = (u: User): string => {
//   console.log("u is", u);
//   return u.name;
// };
// const users: User[] = [
//   { name: "uhyo", age: 26 },
//   { name: "John Smith", age: 15 },
// ];

// const names = users.map(getName);
// console.log(names);

// const names2 = users.map((u: User): string => u.name);
// console.log(names2);

// const xRepeat = (num: number): string => "x".repeat(num);
// console.log(xRepeat(2));

// type F = (repeatNum: number) => string;
// const xRepeat2: F = (num: number): string => "x".repeat(num);

// type Greetable = {
//   greet: (str: string) => string;
// };
// const obj: Greetable = {
//   greet: (str) => `Hello, ${str}`,
// };
// console.log(obj);
// console.log(obj.greet('JOhn'));

// type MyFunc = {
//   isUsed?: boolean;
//   (arg: number): void;
// };
// const double: MyFunc = (arg: number) => {
//   console.log(arg * 2);
// };
// double.isUsed = true
// console.log(double.isUsed)
// console.log(double(100))

// type HasName = {
//   name: string;
// };
// type HasNameAndAge = {
//   name: string;
//   age: number;
// };
// const fromAge = (age: number): HasNameAndAge => ({
//   name: "John Smith",
//   age,
// });
// const f: (age: number) => HasName = fromAge;
// const obj: HasName = f(100);
// console.log(obj)

// type HasName = {
//   name: string;
// };
// type HasNameAndAge = {
//   name: string;
//   age: number;
// };
// const showName = (obj: HasName) => {
//   console.log(obj.name);
// };
// const g: (obj: HasNameAndAge) => void = showName;
// g({
//   name: "uhyo",
//   age: 26,
// });
// console.log(g);

// type UnariFunc = (arg: number) => number;
// type BinaryFunc = (left: number, right: number) => number;
// const double: UnariFunc = (arg) => arg * 2;
// const add: BinaryFunc = (left, right) => left + right;
// const bin: BinaryFunc = double;
// console.log(bin(10, 100));

// type User<N> = {
//   name: N;
// };
// function repeat<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }
// console.log(repeat<string>("a", 5));
// console.log(repeat<number>(123, 3));

// const repeat = function <T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };
// const repeat2 = <T>(element: T, length: number): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };
// const repeat3 = <T extends { name: string }>(
//   element: T,
//   length: number
// ): T[] => {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };
// type HasNameAndAge = {
//   name: string;
//   age: number;
// };
// console.log(
//   repeat3<HasNameAndAge>(
//     {
//       name: "john smith",
//       age: 27,
//     },
//     3
//   )
// );

// function repeat<T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// }
// const result = repeat("a", 5);
// console.log(result)

// const repeat = function <T>(element: T, length: number): T[] {
//   const result: T[] = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };
// type Func = <T>(arg: T, num: number) => T[];
// const repeat2: Func = (element, length) => {
//   const result = [];
//   for (let i = 0; i < length; i++) {
//     result.push(element);
//   }
//   return result;
// };

// function sabayomi(age: number) {
//   if (age >= 20) {
//     const lie = age - 5;
//     return lie;
//   } else {
//     return age;
//   }
// }
// console.log(sabayomi(21))

// function getFizzBuzzString(i: number) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     return "FizzBuzz";
//   } else if (i % 3 === 0) {
//     return "Fizz";
//   } else if (i % 5 === 0) {
//     return "Buzz";
//   } else {
//     return i;
//   }
// }
// for (let i = 0; i <= 100; i++) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }

// function sequence(start: number, end: number): number[] {
//   const result: number[] = [];
//   for (let i = 0; i <= end; i++) {
//     result.push(i);
//   }
//   return result;
// }
// for (const i of sequence(1, 100)) {
//   const message = getFizzBuzzString(i);
//   console.log(message);
// }

// function map(array: number[], callback: (value: number) => number): number[] {
//   const result: number[] = [];
//   for (const elm of array) {
//     result.push(callback(elm));
//     console.log(callback(elm));
//   }
//   return result;
// }
// const data = [1, 1, 2, 3, 5, 8, 13];
// const result = map(data, (x) => x * 10);
// console.log(result);

// function map2<T, U>(array: T[], callback: (value: T) => U): U[] {
//   const result: U[] = [];
//   for (const elm of array) {
//     result.push(callback(elm));
//   }
//   return result;
// }

// const data2 = [1, -3, -2, 8, 0, -1];
// const result2: boolean[] = map2(data2, (x) => x >= 0);
// console.log(result2);
// 出力結果→[ true, false, false, true, true, false ]

// class User {
//   name: string = "";
//   age: number = 0;
// }
// const uhyo = new User();
// console.log(uhyo.name);
// console.log(uhyo.age);
// uhyo.age = 26;
// console.log(uhyo.age);

// class User {
//   name: string = "";
//   age: number = 0;

//   isAdult(): boolean {
//     return this.age > 20;
//   }
//   setAge(newAge: number) {
//     this.age = newAge;
//   }
// }
// const uhyo = new User();
// console.log(uhyo.isAdult());
// uhyo.setAge(26);
// console.log(uhyo.isAdult());

// class User {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   isAdult(): boolean {
//     return this.age > 20;
//   }
// }
// const uhyo = new User("uhyo", 26);
// console.log(uhyo.name);
// console.log(uhyo.isAdult());

// class User {
//   static adminName: string = "uhyo";
//   static getAdminUser() {
//     return new User(User.adminName, 26);
//   }
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }

// console.log(User.adminName);
// const admin = User.getAdminUser();
// console.log(admin.isAdult());

// const uhyo = new User("uhyo", 26);
// console.log(uhyo.adminName)

// class User {
//   name: string;
//   private age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   public isAdult(): boolean {
//     return this.age >= 20;
//   }
// }
// const uhyo = new User("uhyo", 26);
// console.log(uhyo.name);
// console.log(uhyo.isAdult());
// console.log(uhyo.age)

// class User {
//   name: string;
//   private age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class User2 {
//   constructor(public name: string, private age: number) {}
// }

// const User = class {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   public isAdult(): boolean {
//     return this.age >= 20;
//   }
// };
// const uhyo = new User("uhyo", 26);
// console.log(uhyo.name);
// console.log(uhyo.isAdult());

// class User<T> {
//   name: string;
//   #age: number;
//   readonly data: T;

//   constructor(name: string, age: number, data: T) {
//     this.name = name;
//     this.#age = age;
//     this.data = data;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }
// const uhyo = new User<string>("uhyo", 26, "追加データ");
// const data = uhyo.data;
// const john = new User("John Smith", 15, { num: 123 });
// // const john = new User<{ num: 123 }>("John Smith", 15, { num: 123 }); ←とイコール
// const data2 = john.data;
// console.log(uhyo)
// console.log(data)
// console.log(john)
// console.log(data2)

// class User {
//   name = "";
//   age = 0;
//   isAdult(): boolean {
//     return this.age >= 20;
//   }
// }
// const uhyo: User = new User();
// const john: User = {
//   name: "john smith",
//   age: 15,
//   isAdult: () => true,
// };
// console.log(uhyo)
// console.log(john)

// class User {
//   name: string = "";
//   age: number = 0;
// }
// const uhyo = new User();
// console.log(uhyo instanceof User);
// console.log({} instanceof User);
// const john: User = {
//   name: "John Smith",
//   age: 15,
// };
// console.log(john instanceof User);

// class User {
//   name: string;
//   #age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }
//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }
// class PremiumUser extends User {
//   rank: number = 1;
//   public isAdult(): boolean {
//     return true;
//   }
// }
// const uhyo = new PremiumUser("uhyo", 26);
// const taro = new PremiumUser("TaRO YAMADA", 25);

// console.log(uhyo.rank);
// console.log(uhyo.name);
// console.log(uhyo.isAdult());

// function getMessage(u: User) {
//   return `こんにちは${u.name}さん`;
// }

// const john = new User("John Smith", 15);
// const uhyo2 = new User("uhyo", 26);

// console.log(getMessage(john));
// console.log(getMessage(uhyo2));
// console.log(taro.isAdult());

// class User {
//   name: string;
//   #age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }
// class PremiumUser extends User {
//   rank: number = 1;
//   public override isAdult(): boolean {
//     return true;
//   }
// }

// type HasName = {
//   name: string;
// };

// class User implements HasName {
//   name: string;
//   #age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }

//   public filterOlder(users: readonly User[]): User[] {
//     return users.filter((u) => u.#age > this.#age);
//   }
// }
// const uhyo = new User("uhyo", 25);
// const john = new User("John", 15);
// const bob = new User("Bob", 40);
// const older = uhyo.filterOlder([john, bob]);
// console.log(older);
// console.log(uhyo.isAdult === john.isAdult);

// const user = {
//   name: "uhyo",
//   age: 26,
//   isAdult() {
//     return this.age >= 20;
//   },
// };
// console.log(user.isAdult());
// user.age = 15;
// console.log(user.isAdult());

// class User {
//   name: string;
//   #age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.#age = age;
//   }

//   public isAdult(): boolean {
//     return this.#age >= 20;
//   }
// }
// const uhyo = new User("uhyo", 25);
// const john = new User("John Smith", 15);
// console.log(uhyo.isAdult());
// console.log(uhyo.isAdult.apply(john, []));

// const boundIsAdult = uhyo.isAdult.bind(uhyo);
// console.log(boundIsAdult());
// console.log(boundIsAdult.call(john));

// class A {
//   foo = 123;
//   bar = this.foo + 100;
//   getFoo() {
//     return this.foo;
//   }
// }
// const obj = new A();
// console.log(obj.bar, obj.getFoo());

// console.log("エラーを発生させます");
// throwError();
// console.log("エラーを発生させました");
// function throwError() {
//   const error = new Error("エラーが発生しました！");
//   throw error;
// }

// function gerAverage(nums: number[]) {
//   if (nums.length === 0) {
//     throw Error("配列がからです");
//   }
//   return sum(nums) / nums.length;
// }

// class EmptyArrayError extends Error {}

// try {
//   getAverage([1, 2, 3]);
//   getAverage([]);
// } catch (err) {
//   if (err instanceof EmptyArrayError) {
//     console.log("EmptyArrayErrorをキャッチしました");
//   } else {
//     throw err;
//   }
// }
// function getAverage(nums: number[]) {
//   if (nums.length === 0) {
//     throw new EmptyArrayError("配列が空です");
//   }
//   return sum(nums) / nums.length;
// }
// function sum(nums: number[]): number {
//   let result = 0;
//   for (const num of nums) result += num;
//   return result;
// }

// type User = {
//   name: string;
//   age: number;
// };
// function createUser(name: string, age: number) {
//   if (name === "") {
//     throw new Error("名前はからにできません！");
//   }
//   return {
//     name,
//     age,
//   };
// }
// function getMessage(user: User, message: string): string {
//   return `${user.name}(${user.age})「${message}」`;
// }
// const uhyo = createUser("uhyo", 25);
// console.log(getMessage(uhyo, "こんにちは"));

// class User2 {
//   readonly name: string;
//   readonly age: number;
//   constructor(name: string, age: number) {
//     if (name === "") {
//       throw new Error("名前はからにできません！");
//     }
//     this.name = name;
//     this.age = age;
//   }

//   getMessage(message: string): string {
//     return `${this.name}(${this.age})「${message}」`;
//   }
// }
// const uhyo2 = new User2("uhyo", 26);
// console.log(uhyo2.getMessage("こんにちは！"));
// console.log(uhyo2)

// type Animal = {
//   species: string;
//   age: string;
// };
// type Human = {
//   name: string;
//   age: number;
// };
// type User = Animal | Human;
// const tama: User = {
//   species: "Felis silvestris catus",
//   age: "永遠の17歳",
// };
// const uhyo: User = {
//   name: "uhyo",
//   age: 26,
// };
// console.log(tama)
// console.log(uhyo)

// type Animal = {
//   species: string;
//   age: number;
// };
// type Human = Animal & {
//   name: string;
// };
// const tama: Animal = {
//   species: "test",
//   age: 3,
// };
// const uhyo: Human = {
//   species: "Homo sapi",
//   age: 26,
//   name: "uhyo",
// };
// type StringAndNumber = string & number

// type Human = { name: string };
// type Animal = { species: string };
// function getName(human: Human) {
//   return human.name;
// }
// function getSpecies(animal: Animal) {
//   return animal.species;
// }
// const uhyo: Human & Animal = {
//   name: "uhyo",
//   species: "HOmo sapi",
// };
// const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;
// const value = mysteryFunc(uhyo);
// console.log(value);

// type Human = {
//   name: string;
//   age?: number;
// };
// const uhyo: Human = {
//   name: "uhyo",
//   age: 26,
// };
// const john: Human = {
//   name: "John Smith",
// };

// type Human = {
//   name: string;
//   age: number;
// };
// function useMaybeHuman(human: Human | undefined) {
//   const age = human?.age;
//   console.log(age);
// }
// type GetTimeFunc = () => Date;
// function useTime(getTimeFunc: GetTimeFunc | undefined) {
//   const timeOrUndefined = getTimeFunc?.();
// }

// const foo: "foo" = "foo";
// const one: 1 = 1;
// const t: true = true;
// const three: 3n = 3n;

// type SignType = "plus" | "minus";
// function signNumber(type: SignType) {
//   return type === "plus" ? 1 : -1;
// }
// function numberWithSign(num: number, type: SignType | "none") {
//   if (type === "none") {
//     return 0;
//   } else {
//     return num * signNumber(type);
//   }
// }
// console.log(numberWithSign(5, "plus"));
// console.log(numberWithSign(5, "minus"));
// console.log(numberWithSign(5, "none"));

// type Animal = {
//   tag: "animal";
//   species: string;
// };
// type Human = {
//   tag: "human";
//   name: string;
// };
// type Robot = {
//   tag: "human";
//   name: string;
// };
// type User = Animal | Human | Robot;

// const tama: User = {
//   tag: "animal",
//   species: "Felis catus",
// };
// const uhyo: User = {
//   tag: "human",
//   name: "uhyo",
// };
// // const alien: User = {
// //   tag: "alien",
// //   name: "gray",
// // };

// function getUserName(user: User) {
//   if (user.tag === "human") {
//     return user.name;
//   } else {
//     return "名無し";
//   }
// }
// function getUsereName2(user: User) {
//   switch (user.tag) {
//     case "human":
//       return user.name;
//     case "animal":
//       return "名無し";
//   }
// }

// console.log(getUserName(tama));
// console.log(getUserName(uhyo));

// type Human = {
//   type: "human";
//   name: string;
//   age: number;
// };
// function setAge(human: Human, age: Human["age"]) {
//   return {
//     ...human,
//     age,
//   };
// }
// const uhyo: Human = {
//   type: "human",
//   name: "uhyo",
//   age: 26,
// };
// const uhyo2 = setAge(uhyo, 27);
// console.log(uhyo2);

// type Human2 = {
//   name: string;
//   age: number;
// };
// type HumanKeys = keyof Human;
// let key: HumanKeys = "name";
// key = "age";
// key = "hoge";

// function get<T, K extends keyof T>(obj: T, key: K): T[K] {
//   return obj[key];
// }
// type Human = {
//   name: string;
//   age: number;
// };
// const uhyo: Human = {
//   name: "uhyo",
//   age: 26,
// };
// const uhyoName = get(uhyo, "name");
// const uhyoAge = get(uhyo, "age");

// function getFirstFiveLetters(strOrNum: string | number) {
//   const str = strOrNum as string;
//   return str.slice(0, 5);
// }
// console.log(getFirstFiveLetters("uhyouhyouhyo"));
// // console.log(getFirstFiveLetters(123));

// type Animal = {
//   tag: "animal";
//   species: string;
// };
// type Human = {
//   tag: "human";
//   name: string;
// };
// type User = Animal | Human;
// function getNameIfAllHuman(users: readonly User[]): string[] | undefined {
//   if (users.every((user) => user.tag === "human")) {
//     return (users as Human[]).map((user) => user.name);
//   }
//   return undefined;
// }

// type Human = {
//   name: string;
//   age: number;
// };
// function getOneUserName(user1?: Human, user2?: Human): string | undefined {
//   if (user1 === undefined && user2 === undefined) {
//     return undefined;
//   }
//   if (user1 !== undefined) {
//     return user1.name;
//   }
//   return user2!.name;
// }

// function doNothing(val: unknown) {
//   console.log(val);
// }
// doNothing(3);
// doNothing({
//   user: {
//     name: "uhyo",
//   },
// });
// doNothing(() => {
//   console.log("h1");
// });

// import { name, age } from "./uhyo.js";
// import uhyoAge from "./uhyoAge.js";
// import increment from "./counter.js";

// console.log(name, age);
// console.log(`uhyoの名前は${name}で年齢は${age}です`);
// console.log(`uhyoの年齢は${uhyoAge}です`);
// console.log(`カウンタの値は${increment()}です`);
// console.log(`カウンタの値は${increment()}です`);
// console.log(`カウンタの値は${increment()}です`);
// console.log(`カウンタの値は${increment()}です`);

// type Animal = {
//   species: string;
//   age: number;
// };
// const tama: Animal = {
//   species: "Feils silvestris catus",
//   age: 1,
// };
// export type { Animal, tama };

// console.log("1.読み込み開始します");
// readFile("filename.txt", (data) => {
//   console.log("3. 読み込みました");
// });
// console.log("2. 読み込み開始しました");

// import { createInterface } from "readline";

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question("文字列を入力してください", (line) => {
//   console.log(`${line}が入力されました`);
//   rl.close();
// });

// setTimeout(() => {
//   console.log("タイマーが呼び出されました");
// }, 3000);
// console.log("タイマーを設定しました");

// readFile("foo", "utf8", (err, result) => {
//   console.log(result);
// });
// console.log("読み込み開始");

// import { performance } from "perf_hooks";
// setTimeout(() => {
//   console.log("タイマー呼び出し");
// }, 100);
// const startTime = performance.now();
// let count = 0;
// while (performance.now() - startTime < 1000) {
//   count++;
// }
// console.log(count);

import { readFile } from "fs/promises";

// const p = readFile("foo.txt", "utf8");
// p.then((result) => {
//   console.log("成功", result);
// });
// p.catch((result) => {
//   console.log("失敗", result);
// });
// p.then((result) => {
//   console.log("2");
// });
// p.then((result) => {
//   console.log("3");
// });

// const p = new Promise<number>((resolve) => {
//   setTimeout(() => {
//     resolve(100);
//   }, 3000);
// });
// p.then((num) => {
//   console.log(`結果は ${num}`);
// });

// const sloopReject = (duration: number) => {
//   return new Promise<never>((resolve, reject) => {
//     setTimeout(reject, duration);
//   });
// };
// sloopReject(3000).catch(() => {
//   console.log("失敗!!!");
// });

// const p = Promise.resolve(100);
// p.then((result) => {
//   console.log(`result is ${result}`);
// });

// const repeat10 = (str: string) =>
//   new Promise<string>((resolve) => {
//     setTimeout(() => {
//       resolve(str.repeat(10));
//     }, 1000);
//   });
// console.log(repeat10);

// readFile("foo.txt", "utf8")
//   .then((result) => repeat10(result))
//   .then((result) => {
//     console.log(result);
//   });

// async function get3(): Promise<number> {
//   return 3;
// }

// const p = get3();
// p.then((num) => {
//   console.log(`num is ${num}`);
// });

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};
async function get3() {
  console.log("test`1");
  await sleep(1000);
  console.log("test`2");
  return 3;
}
console.log("test`3");
const p = get3();
p.then((num) => {
  console.log(`num is ${num}`);
});
console.log("test`4");
