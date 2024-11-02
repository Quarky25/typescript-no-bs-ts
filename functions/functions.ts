//* Defining functions, and how to import and export them.
function addNumbers  (a: number, b: number): number  {
    return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string, str3: string = ""): string => `${str1} ${str2} ${str3}`

// * function with union type: any of the types are ok
export const format = (title: string, param: string | number): string => `${title} ${param}`;

// * Void function: defining a function with the same parameters and returns anything.
export const printFormat = (title: string, param: string | number) : void => {
    console.log(format(title, param));
    
}

// * Function that returns Promise:
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

// * Rest parameters: taking multiple arguments and coalesce them into an array:
function introduce (salutation: string, ...names:string[]): string {
    return `${salutation} ${names.join(" ")}`;
}

//! Typescript enforces types at compile time not run time.
export function getName(user: {fname: string; lname: string;}): string {
    return `${user?.fname ?? 'fname'} ${user?.lname ?? 'lname'}`
}