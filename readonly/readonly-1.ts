// ! Readonly means you can read the property but you cant change it. We define a Interface a function that returns the properties and a type that is defined as Readonly.

interface Cat {
    name: string;
    breed: string;
}

type ReadonlyCat = Readonly<Cat>;

function makeCate(name: string, breed: string): ReadonlyCat {
    return {
        name,
        breed
    }
}

const usul = makeCate("Usul", "Tabby");
// usul.name = "Piter";

console.log(usul.name);

//! Readonly Tuples

function makeCoordinate(x: number, y: number, z: number): readonly[number, number, number] {
    return [x,y,z];
}

const c1 = makeCoordinate(10,20,30);
// c1[0] = 50; 

// ! Immutable Array
const reallyConst = [1,2,3] as const;