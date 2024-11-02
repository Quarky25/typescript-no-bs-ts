"use strict";
// ! Abstract class, class that extends the abstract class that has an abstract getter
class StreetFighter {
    constructor() { }
    move() { }
    fight() {
        console.log(`${this.name} attacks with ${this.getSpecialAttack()}`);
    }
}
class Ryu extends StreetFighter {
    getSpecialAttack() {
        return "Hadoken";
    }
    get name() {
        return "Ryu";
    }
}
class ChunLi extends StreetFighter {
    getSpecialAttack() {
        return "Lightning Kick";
    }
    get name() {
        return "Chun-Li";
    }
}
const ryu = new Ryu();
const chunli = new ChunLi();
ryu.fight();
chunli.fight();
