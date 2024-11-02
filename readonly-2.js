"use strict";
class Doggy {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const lgg = new Doggy("LG", 13);
console.log(lgg.name);
class DogList {
    constructor() {
        this.doggies = [];
    }
    static addDog(dog) {
        DogList.instance.doggies.push(dog);
    }
    getDogs() {
        return this.doggies;
    }
}
DogList.instance = new DogList();
DogList.addDog(lgg);
console.log(DogList.instance.getDogs());
