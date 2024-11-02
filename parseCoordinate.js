"use strict";
// !! Function Overload:
// ! Creating a function that parses Coordinates, to do that you have to establish what Coordinates are.
function parseCoordinate(arg1, arg2) {
    let coord = {
        x: 0,
        y: 0,
    };
    // ! we have to cast arg1 as a string
    if (typeof arg1 === 'string') {
        arg1.split(',').forEach(str => {
            const [key, value] = str.split(':');
            coord[key] = parseInt(value, 10);
        });
    }
    if (typeof arg1 === 'object') {
        coord = Object.assign({}, arg1);
    }
    else {
        coord = {
            x: arg1,
            y: arg2,
        };
    }
    return coord;
}
console.log(parseCoordinate(10, 20));
console.log(parseCoordinate({ x: 52, y: 35 }));
// ! we didnt establish a possible variant of coordinates, in this case as strings. so we have to do exactly that.
console.log(parseCoordinate("x: 33, y: 20"));
