let userName: string = "Ralph";
let hasLoggedIn: boolean = true;

userName += "Ralph";

console.log(userName);

let myNumber: number = 10;

let myRegex: RegExp = /foo/;

const names: string[] = userName.split(" ");
const myValues: Array<number> = [12,23,23465,324];

// you dont want to copy pasta that type definition around your code, if you want to make changes once and reuse it, you will need to define it as an Interface like so:
interface Person {
    fname: string;
    lname: string;
}

const myPerson : Person = {
    fname: "Ralph",
    lname: "Ganser",
    
} 

//! if you define it like this, you are not able to pull it of. Because it infers, that the properties are 10 and 20, which are type string, so 30 doesnt exist in this scope. 
//! const ids = {
//!     10: "a",
// !    20: "b"
//! }
//! ids[30] = "c"

//* how do I allow myself to have that: we use a utility type named Record. With Record i can define the key type and the value type.
const ids: Record<number, string> = {
    10: "a",
    20: "b"
}
ids[30] = "c";

//* conditionals and expressions: it doesnt change the way conditionals and expressions work, you can do it as before. 
//* It is only going change the way you do variable declarations.
if(ids[30] === "D") {
}

//* The only other places are things like loops. It knows that the type is a number and this is totally fine.
for (let i = 0; i < 10; i++) {
    console.log(i);
    
}

[1,2,3].forEach((element) => console.log(element));
//* For map it is similar, Typescript infers it is of type number[] if i would change the output to string it would infer it as that.
const out: number[] = [1,2,3].map((element) => element * 10); 
 
    




