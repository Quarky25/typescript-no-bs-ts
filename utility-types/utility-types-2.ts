// ! create a function that creates a full name
type Name = {
  fname: string;
  lname: string;
};

function addFullName(name: Name): Name & {
  fullName: string;
} {
  return {
    ...name,
    fullName: `${name.fname} ${name.lname}`,
  };
}

function permuteRows<T extends (...args: any[]) => any>(
  iteratorFunc: T,
  data: Parameters<T>[0][]
): ReturnType<T>[] {
  return data.map(iteratorFunc);
}

console.log(permuteRows(addFullName, [{fname: "Ralph", lname: "Ganser"}]));

// ! Constructor Parameters & Instance Type
class PersonWithFullName {
    constructor(public name: Name) {}
    
    get fullName() {
        return `${this.name.fname} ${this.name.lname}`
    }
}

function createObject<T extends new (...args: any[]) => any>(ObjectType: T, data: ConstructorParameters<T>[0][]): InstanceType<T>[] {
    return data.map(item => new ObjectType(item));
}
console.log(createObject(PersonWithFullName, [{fname: "Ralph", lname: "Ganser"}]).map(obj => obj.fullName));
