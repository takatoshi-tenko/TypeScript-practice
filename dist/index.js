// const message: string = "Hello World!";
// console.log(message);
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
const sleep = (duration) => {
    return new Promise((resolve) => {
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
export {};
