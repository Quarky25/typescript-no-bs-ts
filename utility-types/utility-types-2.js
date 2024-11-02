"use strict";
function addFullName(name) {
    return Object.assign(Object.assign({}, name), { fullName: `${name.fname} ${name.lname}` });
}
function permuteRows(iteratorFunc, data) {
    return data.map(iteratorFunc);
}
console.log(permuteRows(addFullName, [{ fname: "Ralph", lname: "Ganser" }]));
// ! Constructor Parameters & Instance Type
class PersonWithFullName {
    constructor(name) {
        this.name = name;
    }
    get fullName() {
        return `${this.name.fname} ${this.name.lname}`;
    }
}
function createObject(ObjectType, data) {
    return data.map(item => new ObjectType(item));
}
console.log(createObject(PersonWithFullName, [{ fname: "Ralph", lname: "Ganser" }]).map(obj => obj.fullName));
