"use strict";
// ! Readonly means you can read the property but you cant change it. We define a Interface a function that returns the properties and a type that is defined as Readonly.
function makeCate(name, breed) {
    return {
        name,
        breed
    };
}
const usul = makeCate("Usul", "Tabby");
// usul.name = "Piter";
console.log(usul.name);
//! Readonly Tuples
function makeCoordinate(x, y, z) {
    return [x, y, z];
}
const c1 = makeCoordinate(10, 20, 30);
// c1[0] = 50; 
// ! Immutable Array
const reallyConst = [1, 2, 3];
