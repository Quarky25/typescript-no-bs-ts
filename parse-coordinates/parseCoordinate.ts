// !! Function Overload:
// ! Creating a function that parses Coordinates, to do that you have to establish what Coordinates are.

interface Coordinates {
    x: number;
    y: number;
}

// ! What is unknown? unknown is like any but you have to cast it before you can use it, kinda like a safe any.
function parseCoordinate(str: string): Coordinates;
function parseCoordinate(obj: Coordinates): Coordinates;
function parseCoordinate(x: number, y: number): Coordinates;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinates {
    let coord: Coordinates = {
        x: 0,
        y: 0,
    };
// ! we have to cast arg1 as a string
    if(typeof arg1 === 'string') {
      (arg1 as string).split(',').forEach(str => {
        const [key, value] = str.split(':')
        coord[key as 'x' | 'y'] = parseInt(value, 10);
      })  
    }

    if(typeof arg1 === 'object') {
        coord = {
            ...(arg1 as Coordinates)
        }
    }else {
        coord = {
            x: arg1 as number,
            y: arg2 as number,
        };
    }

    return coord;
}

console.log(parseCoordinate(10,20));
console.log(parseCoordinate({x: 52, y:35}));
// ! we didnt establish a possible variant of coordinates, in this case as strings. so we have to do exactly that.
console.log(parseCoordinate("x: 33, y: 20"));


