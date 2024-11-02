//! defining an generic function: functionName<T> T replaces every type string before it was initial: string now we have initial: T.


function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        }
    ]
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

const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter("str");
console.log(st2getter());


// ! Another Example of generics: 
// ! We define an generic Interface which will be used in the function as a type
interface Rank<RankItems> {
    items: RankItems;
    rank: number;
}

function ranker<RankItems>(items: RankItems[], rank: (v: RankItems) => number): RankItems[] {
    
    const ranks: Rank<RankItems>[] = items.map((items) => ({
        items,
        rank: rank(items)
    }));

    ranks.sort((a,b) => a.rank - b.rank);

    return ranks.map((rank) => rank.items);
}

interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {
        name: "Bulbasaur",
        hp:20,
    },
    {
        name: "Megasaur",
        hp: 55,
    }
]
// ! we define a new inter face and an array object with the type of the interface and use the function to rank the property hp from low to high.
const ranks = ranker(pokemon, ({hp}) => hp);
console.log(ranks);
