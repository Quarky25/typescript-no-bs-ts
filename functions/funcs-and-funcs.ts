//* you make function and you want to support a callback

import { log } from "console";

export function printToFile(text: string, callback: () => void): void {
    console.log(text);
    callback(); 
}


//! this function is a bit hard to read so we create a type:
//! export function arrayMutate(numbers: number[], mutate: (v: number) => number): number[]{
    // return numbers.map(mutate)
// }

export type MutationFunction = (v: number) => number;
export function arrayMutate(numbers: number[], mutate: MutationFunction): number[]{
    return numbers.map(mutate);
}


// ! now we can  define a new function which has the type MutationFunction:
const myNewMutateFunc: MutationFunction = (v: number) => v * 100;

console.log(arrayMutate([1,2,3], (v) => v *10));


// ! Function that return functions
export type AdderFunction = (v: number) => number;
export function createAdder(num: number): AdderFunction  {
    return ( val: number) => num + val;
}

const addOne = createAdder(1);
console.log(addOne(55));
