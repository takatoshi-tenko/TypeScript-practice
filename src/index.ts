const message: string = "Hello World!"
console.log(message)

const test: string = "this is test."
console.log(test)

let greeting,target
greeting = "HEllo"
target = "wotlf"
console.log(greeting + target)

import { createInterface } from "readline"

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('文字列を入力してください\n', (line) => {
  console.log(`${line}が入力されました`)
  rl.close()
})

let userName = ""
if (userName === "") userName = "名無し"
console.log(userName)