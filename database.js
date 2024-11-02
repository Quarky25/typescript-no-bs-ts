"use strict";
// ! Classes, Member visibility, generics
class InMemoryDatabase {
    constructor() {
        this.db = {};
    }
    get(id) {
        return this.db[id];
    }
    set(id, value) {
        this.db[id] = value;
    }
}
class PersistentMemoryDB extends InMemoryDatabase {
    saveToString() {
        return JSON.stringify(this.db);
    }
    restoreFromString(storedState) {
        this.db = JSON.parse(storedState);
    }
}
// ! those two databases are independent from each other
const myDB = new PersistentMemoryDB();
myDB.set("foo", 22);
// myDB.db["foo"] = "baz";
console.log(myDB.get("foo"));
const saved = myDB.saveToString();
myDB.set("foo", 23);
console.log(myDB.get("foo"));
const myDB2 = new PersistentMemoryDB();
myDB2.restoreFromString(saved);
console.log(myDB2.get("foo"));
