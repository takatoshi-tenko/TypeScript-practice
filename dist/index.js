const message = "Hello World!";
console.log(message);
const test = "this is test.";
console.log(test);
let greeting, target;
greeting = "HEllo";
target = "wotlf";
console.log(greeting + target);
// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question('文字列を入力してください\n', (line) => {
//   console.log(`${line}が入力されました`)
//   rl.close()
// })
let userName = "";
if (userName === "")
    userName = "名無し";
console.log(userName);
if (userName === "") {
    console.log("名前を入力してください");
    userName = "名無し";
}
export {};