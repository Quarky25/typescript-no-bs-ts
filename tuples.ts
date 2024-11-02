type ThreeDCoordinate = [x: number, y:number, z:number];

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate, c3: ThreeDCoordinate): ThreeDCoordinate {
    return[
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],

    ]
}

console.log(add3DCoordinate([0,0,0], [10,20,30], [50,23,23]));

// ! tuples with different types:
// ! function with param initial with type string, that is type of a tuple with an accessor in this case a function and a setter that takes a string and return void
// ! return an array and that array going to have a function in that first one returns a string and the second one takes a string and sets the string value to the incoming string.
// ! What is happening here? We capture the initial state of the string and then as we change it, it's going to be tracked. So it is basically a piece of stored state.
function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        }
    ]
}

//! we define the getter and the setter and change the value of the string, output: first log will output hello and the second one will output goodbye.
// ! as described in line 17, we capture the initial state hello and then as we change it to goodbye it will be tracked. It is a stored state.
const [str1getter, str1setter] = simpleStringState("hello");
// ! to show that state is unique we create a different one
// ! the output will stay "Ralph" because we didnt change the state of that string.
const [str2getter, str2setter] = simpleStringState("Ralph");

console.log(str1getter());
str1setter("goodbye");
console.log(str1getter());
console.log(str2getter());




