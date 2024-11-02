"use strict";
// ! Example one: Pluck
Object.defineProperty(exports, "__esModule", { value: true });
// ! KeyType extends keyof DataType means that KeyType has to be one of the keys in data type. The output is going to be DataType dereferenced by KeyType and an array of it
function pluck(items, key) {
    return items.map((items) => items[key]);
}
// ! we define an array of objects: in the context of the function dogs is DataType and the only key it will accept are name and age.
const dogs = [
    { name: "Mimi", age: 12 },
    { name: "Little Guy", age: 13 }
];
console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));
function sendEvent(name, data) {
    console.log([name, data]);
}
sendEvent("addToCart", { productID: 'foo', user: "baz", quantity: 1, time: 10 });
sendEvent("checkout", { time: 10, user: "Bob" });
