// const message: string = "Hello World!";
// console.log(message);
function getName(human) {
    return human.name;
}
function getSpecies(animal) {
    return animal.species;
}
const uhyo = {
    name: "uhyo",
    species: "HOmo sapi",
};
const mysteryFunc = Math.random() < 0.5 ? getName : getSpecies;
const value = mysteryFunc(uhyo);
console.log(value);
export {};
