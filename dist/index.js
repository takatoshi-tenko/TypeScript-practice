// const message: string = "Hello World!";
// console.log(message);
const tama = {
    tag: "animal",
    species: "Felis catus",
};
const uhyo = {
    tag: "human",
    name: "uhyo",
};
// const alien: User = {
//   tag: "alien",
//   name: "gray",
// };
function getUserName(user) {
    if (user.tag === "human") {
        return user.name;
    }
    else {
        return "名無し";
    }
}
function getUsereName2(user) {
    switch (user.tag) {
        case "human":
            return user.name;
        case "animal":
            return "名無し";
    }
}
console.log(getUserName(tama));
console.log(getUserName(uhyo));
export {};
