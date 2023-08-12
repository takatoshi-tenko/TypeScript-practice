// const message: string = "Hello World!";
// console.log(message);
function setAge(human, age) {
    return {
        ...human,
        age,
    };
}
const uhyo = {
    type: "human",
    name: "uhyo",
    age: 26,
};
const uhyo2 = setAge(uhyo, 27);
console.log(uhyo2);
let key = "name";
key = "age";
key = "hoge";
export {};
