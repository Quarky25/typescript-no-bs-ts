"use strict";
// ! function that creates another function
function myLogFunction() {
    return (str) => {
        console.log(str);
    };
}
const logger = myLogFunction();
logger("your string");
// ! Function that creates a class
function createLoggerClass() {
    return class MyLoggerClass {
        constructor() {
            this.completeLog = "";
        }
        log(str) {
            console.log(str);
            this.completeLog += str + "\n";
        }
        dumpLog() {
            return this.completeLog;
        }
    };
}
const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log("Foo");
console.log(logger2.dumpLog());
// ! Functions creating generic classes
// ! define the function that returns a class which is generic.
function CreateSimpleMemoryDatabase() {
    return class SimpleMemoryDatabase {
        constructor() {
            this.db = {};
        }
        set(id, value) {
            return (this.db[id] = value);
        }
        get(id) {
            return this.db[id];
        }
        getObject() {
            return this.db;
        }
    };
}
// ! we define a string database so the function will have the type of the class, we want it to have strings in it.
const StringDatabase = CreateSimpleMemoryDatabase();
const sbd1 = new StringDatabase();
sbd1.set("a", "hello");
function Dumpable(Base) {
    return class Dumpable extends Base {
        dump() {
            console.log(this.getObject());
        }
    };
}
const DumpableStringDatabse = Dumpable(StringDatabase);
const sbd2 = new DumpableStringDatabse();
sbd2.set("Ralph", "Hello Ralph");
sbd2.dump();
