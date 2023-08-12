// const message: string = "Hello World!";
// console.log(message);
function useMaybeHuman(human) {
    const age = human?.age;
    console.log(age);
}
function useTime(getTimeFunc) {
    const timeOrUndefined = getTimeFunc?.();
}
export {};
