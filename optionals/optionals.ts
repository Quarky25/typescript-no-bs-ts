

// ! defining a funtion with optional parameters: Function printIngredient
// ! we can check for the existence of this optional param.
function printIngredient (quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra? `${extra}`:""}`);
    
}
printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "sth more");

// ! defining an Interface with optional params
interface User {
    id: string,
    info?: {
        email?: string;
    }
}

// ! this will cause an error, because you cannot assign a string to something that could possibly be undefined you can put an "!" like so: return user.info.email!; Means i know better it will not be null
// ! But there is a better way to do it because that isnt the best practice, so we define getEmailEasy: return user?.info?.email ?? ""
// ! It is the same functionality but at a fraction of the size and complexity.
function getEmail(user: User): string {
    if(user.info) {
        return user.info.email!;
    }
    return "";
}
// ! defining a function with an optional field
// ! We use the optional chaining feature: if user exists then give me info, if info exists then give me email and if that is null then return and empty string instead ""
function getEmailEasy(user: User): string {
    return user?.info?.email ?? "";
}

// ! Optional Callbacks: we define a function with a function as parameter, but we only call that if it exists and we do that like this: 
function addWithCallback(x: number, y: number, callback:() => void) {
    console.log([x,y]);
    callback?.();
    
}