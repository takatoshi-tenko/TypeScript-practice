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
const p = Promise.resolve(100);
p.then((result) => {
    console.log(`result is ${result}`);
});
export {};
