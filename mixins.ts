// ! function that creates another function

function myLogFunction() {
  return (str: string) => {
    console.log(str);
  };
}

const logger = myLogFunction();
logger("your string");

// ! Function that creates a class

function createLoggerClass() {
  return class MyLoggerClass {
    private completeLog: string = "";
    log(str: string) {
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

function CreateSimpleMemoryDatabase<T>() {
  return class SimpleMemoryDatabase {
    private db: Record<string, T> = {};

    set(id: string, value: T) {
      return (this.db[id] = value);
    }
    get(id: string): T {
      return this.db[id];
    }
    getObject(): object {
      return this.db;
    }
  };
}
// ! we define a string database so the function will have the type of the class, we want it to have strings in it.

const StringDatabase = CreateSimpleMemoryDatabase<string>();
const sbd1 = new StringDatabase();
sbd1.set("a", "hello");

// ! We create another function that extends the type Constructor, we can use that function for every class that has the getObject method
type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{ getObject(): object }>>(Base: T) {
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
