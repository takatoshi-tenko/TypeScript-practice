// const message: string = "Hello World!";
// console.log(message);
// const test: string = "this is test.";
// console.log(test);
// let greeting, target;
// greeting = "HEllo";
// target = "wotlf";
// console.log(greeting + target);
import { createInterface } from "readline";
const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});
// rl.question('文字列を入力してください\n', (line) => {
//   console.log(`${line}が入力されました`)
//   rl.close()
// })
rl.question("コマンドを入力して下さい", (name) => {
    switch (name) {
        case "greet":
            console.log("こんにちは。");
            break;
        case "cat":
            console.log("あなたは猫派ですか？");
            console.log("私は犬派です。");
            break;
        default:
            console.log(`コマンド[${name}]を認識できませんでした。`);
    }
    rl.close();
});
let userName = "";
// if (userName === "") userName = "名無し";
// console.log(userName);
// if (userName === "") {
//   console.log("名前を入力してください");
//   userName = "名無し";
// }
if (userName !== "") {
    console.log("ちゃんと名前があってえらい！");
}
else {
    console.log("名前を入力してください");
    userName = "名無し";
}
let num = 0;
if (num < 0) {
    console.log("numは負の数です。");
}
else if (num === 0) {
    console.log("numは0です。");
}
