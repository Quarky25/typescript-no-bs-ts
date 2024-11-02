"use strict";
//! defining an generic function: functionName<T> T replaces every type string before it was initial: string now we have initial: T.
function simpleState(initial) {
    let val = initial;
    return [
        () => val,
        (v) => {
            val = v;
        }
    ];
}
// ! We define a getter and a setter as we did it in the tuples.ts file.
// ! The state will change to whatever you put in here, hence the name generic function the decision which type it will have, is decided when the function will be used
const [st1getter, st1setter] = simpleState(10);
console.log(st1getter());
st1setter(22);
console.log(st1getter());
// ! override inferred generic type
// ! if simpleState is null and you want to change it to a string it will throw an error: Argument of type '"str"' is not assignable to parameter of type 'null'.
// ! One possible way to override T is by re defining it: simpleState<string | null>(null) now it can be a string or null.
const [st2getter, st2setter] = simpleState(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());
function ranker(items, rank) {
    const ranks = items.map((items) => ({
        items,
        rank: rank(items)
    }));
    ranks.sort((a, b) => a.rank - b.rank);
    return ranks.map((rank) => rank.items);
}
const pokemon = [
    {
        name: "Bulbasaur",
        hp: 20,
    },
    {
        name: "Megasaur",
        hp: 55,
    }
];
// ! we define a new inter face and an array object with the type of the interface and use the function to rank the property hp from low to high.
const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
