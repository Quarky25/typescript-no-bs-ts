"use strict";
const dog = {
    name: "little guy",
    breed: "Mutt",
    age: 2
};
function listenToObject(obj, listeners) {
    throw "Needs to be implemented";
}
const littleGuy = {
    name: "little guy",
    age: 13
};
listenToObject(littleGuy, {
    onNameChange: (v) => { },
    onAgeChange: (v) => { },
    onAgeDelete: () => { },
    onNameDelete: () => { },
});
