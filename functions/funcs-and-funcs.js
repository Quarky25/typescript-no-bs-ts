"use strict";
//* you make function and you want to support a callback
Object.defineProperty(exports, "__esModule", { value: true });
exports.printToFile = printToFile;
exports.arrayMutate = arrayMutate;
exports.createAdder = createAdder;
function printToFile(text, callback) {
    console.log(text);
    callback();
}
function arrayMutate(numbers, mutate) {
    return numbers.map(mutate);
}
// ! now we can  define a new function which has the type MutationFunction:
const myNewMutateFunc = (v) => v * 100;
console.log(arrayMutate([1, 2, 3], (v) => v * 10));
function createAdder(num) {
    return (val) => num + val;
}
const addOne = createAdder(1);
console.log(addOne(55));
