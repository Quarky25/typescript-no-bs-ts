// ! Example one: Pluck

import { interceptors } from "undici-types";

// ! KeyType extends keyof DataType means that KeyType has to be one of the keys in data type. The output is going to be DataType dereferenced by KeyType and an array of it
function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
    return items.map((items) => items[key]);
}

// ! we define an array of objects: in the context of the function dogs is DataType and the only key it will accept are name and age.
const dogs = [
    { name: "Mimi", age: 12},
    { name: "Little Guy", age: 13}
]

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {
    addToCart: BaseEvent & {quantity: number; productID: string;},
    ceckout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: string, data: EventMap[Name]): void {
    console.log([name, data]);
    
}

sendEvent("addToCart", {productID: 'foo', user: "baz", quantity: 1, time: 10})
sendEvent("checkout", {time: 10, user: "Bob"} )