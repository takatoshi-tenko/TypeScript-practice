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
const users = [];
const lines = data.split('\n');
for (const line of lines) {
    if (line === "") {
        continue; //スキップ処理
    }
    const [name, ageString, premiumString] = line.split(',');
    console.log(name);
    console.log(ageString);
    console.log(premiumString);
    const age = Number(ageString);
    const premiumUser = premiumString === "1";
    console.log(premiumUser);
    users.push({
        name,
        age,
        premiumUser
    });
}
console.log(lines);
for (const user of users) {
    if (user.premiumUser) {
        console.log(`${user.name}(${user.age})はプレミアムユーザーです。`);
    }
    else {
        console.log(`${user.name}(${user.age})はプレミアムユーザーではありません。`);
    }
}
