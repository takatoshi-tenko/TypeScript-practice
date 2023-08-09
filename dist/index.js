"use strict";
// const message: string = "Hello World!";
// console.log(message);
const data = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,1
`;
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
function helloWorldTimes(n) {
    for (let i = 0; i < n; i++) {
        console.log("Hello World!");
    }
}
helloWorldTimes(5);
function helloWorldTimes2(n) {
    if (n > 100) {
        console.log(`${n}回なんて無理です！`);
        return;
    }
    for (let i = 0; i < n; i++) {
        console.log("Hello, World!");
    }
}
helloWorldTimes2(5);
helloWorldTimes2(150);
