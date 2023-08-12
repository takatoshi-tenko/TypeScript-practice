// const message: string = "Hello World!";
// console.log(message);
function createUser(name, age) {
    if (name === "") {
        throw new Error("名前はからにできません！");
    }
    return {
        name,
        age,
    };
}
function getMessage(user, message) {
    return `${user.name}(${user.age})「${message}」`;
}
const uhyo = createUser("uhyo", 25);
console.log(getMessage(uhyo, "こんにちは"));
class User2 {
    constructor(name, age) {
        if (name === "") {
            throw new Error("名前はからにできません！");
        }
        this.name = name;
        this.age = age;
    }
    getMessage(message) {
        return `${this.name}(${this.age})「${message}」`;
    }
}
const uhyo2 = new User2("uhyo", 26);
console.log(uhyo2.getMessage("こんにちは！"));
console.log(uhyo2);
export {};
